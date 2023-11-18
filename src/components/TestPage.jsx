import React from 'react';

const MyComponent = () => {

    const array = [1,2,3,4,5]

    return (
        <div className={"h-screen w-full flex flex-col gap-[20px]"}>
            <div className={"w-[200px] h-[30px] bg-green-500"} />
            <div className={"w-full bg-purple-300 flex flex-row items-center gap-[20px]"}>
                <div className={"w-[60px] h-[30px] bg-black"} />
                <div
                    className={"w-full flex flex-row overflow-x-scroll whitespace-nowrap"}
                    style={{scrollbarWidth: "none"}}
                >
                    {
                        array.map((element) => {
                            return <div className={"min-w-[100px] h-[30px] bg-orange-500"}>
                                {element}
                            </div>
                        })
                    }
                </div>
            </div>
            <div className={"w-[200px] h-[30px] bg-green-500"} />
        </div>
    );
};

export default MyComponent;
