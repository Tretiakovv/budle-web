import React, {useState} from 'react';
import {Stars} from "../review-table/ReviewTable";
import {Link} from "react-router-dom";
import {cn} from "../../../utils/cn";
import {FiSend} from "react-icons/fi";
import {useUnit} from "effector-react";
import {$currentReview, answerReviewFx} from "../../../models/reviews/model";
import DropdownInput from "../../atoms/inputs/dropdown-input/DropdownInput";
import HeaderColumn from "../../wrappers/header-column/HeaderColumn";

const ReviewHeader = ({review}) => (
    <div className={'w-full flex flex-row items-center justify-between px-7 border-b-2 border-gray-50 pb-5'}>
        <div className={'flex flex-row items-center gap-3'}>
            <h2 className={'font-semibold text-2xl'}>
                Отзыв {review.username} от {review.date}
            </h2>
            <Stars count={review.count}/>
        </div>
        <Link to={'/reviews'} className={'text-main-blue text-base cursor-pointer'}>
            Назад
        </Link>
    </div>
)

const ReviewMessage = (props) => {
    return (
        <div className={'w-full mx-7 flex flex-col gap-2'}>
            <h4 className={'text-gray-400 text-base'}>
                Текст отзыва:
            </h4>
            <div className={'border-2 border-gray-100 max-w-[600px] rounded-lg p-4'}>
                {props.text}
            </div>
        </div>
    )
}

const AnswerMessage = (props) => {
    return (
        <div className={'w-full mx-7 flex flex-col gap-2'}>
            <h4 className={'text-gray-400 text-base'}>
                Ответ:
            </h4>
            {props.text.length !== 0 && (
                <div className={'border-2 border-gray-100 max-w-[600px] rounded-lg p-4'}>
                    {props.text}
                </div>
            )}
        </div>
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
        "w-full border-t-2 border-background-blue",
        "bg-white p-5"
    ]

    return <div className={"w-full absolute bottom-0 left-0"}>
        <input
            className={cn(wrapperCV)}
            placeholder={"Написать"}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            value={props.value}
        />
        <FiSend
            className={"absolute z-10 top-1/3 right-5"}
            onClick={props.onSend}
        />
    </div>

}

const ReviewChat = () => {

    const [currentReview, sendAnswer] = useUnit([$currentReview, answerReviewFx])
    const [answerMessage, setAnswerMessage] = useState('')
    const [answeredReview, changeReview] = useState('')

    const handleSend = () => {
        if (answerMessage.trim() === '') return
        sendAnswer({reviewId: currentReview.id, answer: answerMessage})
        changeReview(answerMessage)
        setAnswerMessage('')
    }

    return (
        <div className={'relative col-span-full h-full flex flex-col gap-7 py-7 rounded-xl bg-white'}>
            <ReviewHeader review={currentReview}/>
            <ReviewMessage text={currentReview.text}/>
            <AnswerMessage text={answeredReview}/>
            <ChatInput
                onChange={setAnswerMessage}
                value={answerMessage}
                onEnter={handleSend}
            />
        </div>
    );

};

export default ReviewChat;