import {useEffect} from "react";
import {Client} from "@stomp/stompjs";

export const useSocket = () => {

    const client = new Client()

    const onConnect = ()=> {
        client.subscribe('/topic/1', (msg) => {
            console.log(msg.body)
        })
    }

    const onDebug= (msg) => console.log(new Date(), msg)

    useEffect(() => {

        client.configure({
            brokerURL: 'wss://budle.ru/business/chat',
            onConnect: onConnect,
            debug: onDebug
        })

        client.activate()

        return () => {
            client.deactivate()
        }

    }, [])

    return client

}