import React, {useEffect, useRef, useState} from 'react';
import dayjs from "dayjs";
import {FiSend} from "react-icons/fi";

import {Client} from "@stomp/stompjs"
import {cn} from "../../utils/cn";
import {useUnit} from "effector-react";
import {$chatHistory, getChatHistoryEvent, getUserInformationEvent} from "../../models/chat/model";

const UserMessage = (props) => {

    const wrapperCV = [
        "py-3 px-4 rounded-t-xl w-fit max-w-[400px]",
        {"border-2 border-background-blue rounded-l-xl": props.type === "incoming"},
        {"bg-background-blue rounded-r-xl": props.type === "outgoing"},
    ]

    const mainCV = [
        "w-full flex flex-row",
        {"justify-end": props.type === "incoming"}
    ]

    return (
        <section className={cn(mainCV)}>
            <section className={cn(wrapperCV)}>
                <h1 className={"text-black w-full text-lg break-words"}>
                    {props.message}
                </h1>
                <div className={"w-full flex flex-row justify-end"}>
                    <h1 className={"text-text-gray text-sm"}>
                        {props.timestamp}
                    </h1>
                </div>
            </section>
        </section>
    )

}

const ChatInput = (props) => {

    const handleKeyDown = (e) => {
        if (e.key === "Enter") props.onEnter(e)
    }

    const handleChange = (e) => {
        props.onChange(e.target.value)
    }

    const wrapperCV = [
        "w-full rounded-lg border-2 border-background-blue",
        "bg-white p-5"
    ]

    return <div className={"w-full relative"}>
        <input
            className={cn(wrapperCV)}
            placeholder={"Написать"}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            value={props.value}
        />
        <FiSend
            onClick={props.onSend}
            className={"absolute z-10 top-1/3 right-5"}
        />
    </div>

}

const OrderChat = ({orderId}) => {

    const [history, getHistory, getUserId]
        = useUnit([$chatHistory, getChatHistoryEvent, getUserInformationEvent])

    const chatRef = useRef()
    const [message, setMessage] = useState("")
    const [messages, updateMessages] = useState([])
    const [client, setClient] = useState(null)

    const handleChange = () => {

        if (message.trim() === "") return
        const chatMessage = {
            type: "incoming",
            timestamp: dayjs(Date.now()).format("HH:mm"),
            message: message,
        }

        updateMessages(state => [...state, chatMessage])
        setMessage("")

        if (client) client.publish({
            destination: `/business/send/${orderId}`,
            body: JSON.stringify({
                orderId: orderId,
                userId: 1,
                message: message
            }),
        })

    }

    useEffect(() => {
        if (chatRef && chatRef.current) {
            chatRef.current.scrollTop = chatRef.current.scrollHeight
        }
    }, [chatRef, messages]);

    useEffect(() => {
        getUserId()
        getHistory(orderId)
    }, [])

    useEffect(() => {
        updateMessages(history)
    }, [history])

    useEffect(() => {

        const client = new Client()

        const onConnect = () => client.subscribe(`/topic/${orderId}`, (message) => {
            const content = JSON.parse(message.body).message
            const newMessage = {
                message: content,
                type: "outgoing",
                timestamp: dayjs(Date.now()).format("HH:mm")
            }
            updateMessages(messages => [...messages, newMessage])
        })

        const onDebug = (msg) => console.log(new Date(), msg)

        client.configure({
            brokerURL: 'wss://budle.ru/business/chat',
            onConnect: onConnect,
            debug: onDebug
        })

        client.activate()
        setClient(client)

        return () => {
            client.deactivate()
        }

    }, [])

    const chatCV = [
        "rounded-xl border-2 border-background-light-blue",
        "w-full h-[50vh] flex flex-col gap-4 p-5 overflow-y-auto"
    ]

    return (
        <React.Fragment>
            <section className={"col-span-full bg-white rounded-3xl flex flex-col gap-5 h-full p-6 mb-7"}>
                <section className={cn(chatCV)} ref={chatRef}>
                    {messages.map((message, key) => (
                        <UserMessage {...message} key={key}/>
                    ))}
                </section>
                <ChatInput
                    onSend={handleChange}
                    onEnter={handleChange}
                    onChange={setMessage}
                    value={message}
                />
            </section>
        </React.Fragment>
    );

};

export default OrderChat;