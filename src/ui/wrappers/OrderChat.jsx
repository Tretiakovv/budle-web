import React, {useEffect, useRef, useState} from 'react';
import dayjs from "dayjs";
import {FiSend} from "react-icons/fi";

import Stomp from 'stompjs';
import SockJS from 'sockjs-client';
import {cn} from "../../utils/cn";
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
                        {props.sentAt}
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

const OrderChat = () => {

    const chatRef = useRef()
    const [message, setMessage] = useState("")
    const [messages, updateMessages] = useState([])

    const handleChange = () => {
        if (message.trim() === "") return
        const chatMessage = {
            sentAt: dayjs(Date.now()).format("HH:mm"),
            type: messages.length % 2 === 0 ? "incoming" : "outgoing",
            message: message,
        }
        updateMessages(state => [...state, chatMessage])
        setMessage("")
    }

    const chatCV = [
        "rounded-xl border-2 border-background-light-blue",
        "w-full h-[50vh] flex flex-col gap-4 p-5 overflow-y-auto"
    ]

    const [stompClient, setStompClient] = useState(null);

    useEffect(() => {

        const socket = new SockJS('https://budle.ru/business/chat');
        const client = Stomp.over(socket);

        client.connect({}, () => {
            client.subscribe('/topic/greetings', (message) => {
                console.log(message)
            });
        });

        setStompClient(client)

        return () => {
            client.disconnect()
        }

    }, []);


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