import React, {useEffect} from 'react';
import {cn} from "../../../utils/cn";
import {useUnit} from "effector-react";
import {FiStar} from "react-icons/fi";
import {$reviews, $reviewScreenActiveOption, getReviewsFx} from "../../../models/reviews/model";
import {Link} from "react-router-dom";

const headerData = ['Автор отызва', 'Дата отзыва', 'Оценка', 'Текст', 'Статус']

const ReviewHeader = () => (
    <div className={'w-full grid grid-cols-10 gap-x-5 px-7 pb-5 border-b-2 border-gray-100'}>
        {headerData.map((item, key, array) => {
            const width = key === array.length - 2 ? 'col-span-2' : 'col-span-2'
            return (
                <h4 className={cn('text-gray-400 text-base', width)}>
                    {item}
                </h4>
            )
        })}
    </div>
)

export const Stars = ({count}) => (
    <div className={'col-span-2 flex flex-row gap-1'}>
        {
            Array.from({length: 5}, (i, key) => key)
                .map((_, key) => (<FiStar
                    className={key + 1 <= count ? 'fill-purple-600 text-transparent' : 'fill-gray-200 text-transparent'}
                    size={'24px'}
                />))
        }
    </div>
)

const StatusBadge = (props) => {

    const statusCV = [
        'rounded-full px-3 py-2 h-fit col-span-2 text-sm w-fit',
        {'text-green-500 bg-green-100': props.status},
        {'text-red-500 bg-red-100': !props.status}
    ]

    return (
        <div className={cn(statusCV)}>
            {props.status ? 'Ответили' : 'Не ответили'}
        </div>
    )

}

const ReviewRow = ({review}) => {

    const wrapperCV = [
        'w-full grid grid-cols-10 gap-x-5 px-7 pb-5',
        'pt-5 border-b-2 border-gray-100 hover:bg-gray-50',
        'cursor-pointer'
    ]

    const reviewData = [review.username, review.date, review.score, review.text, review.answer]

    return (
        <Link
            to={`review?id=${review.id}`}
            className={cn(wrapperCV)}
        >
            {reviewData.map((item, key, array) => {
                if (typeof item === 'string') {
                    return (<h4 className={'text-black text-base font-medium col-span-2'}>
                        {item}
                    </h4>)
                } else if (typeof item === 'number') {
                    return (<Stars count={item}/>)
                } else {
                    return (<StatusBadge status={item}/>)
                }
            })}
        </Link>
    )

}

const ReviewTable = () => {

    const establishment = useUnit($reviewScreenActiveOption)
    const [reviews, getReviews] = useUnit([$reviews, getReviewsFx])

    useEffect(() => {
        getReviews(establishment.id)
    }, []);

    return (
        <section className={'col-span-full py-5 rounded-xl bg-white flex flex-col'}>
            <ReviewHeader/>
            {reviews.map((review, key) => (
                <ReviewRow review={review} key={key}/>
            ))}
        </section>
    );

};

export default ReviewTable;