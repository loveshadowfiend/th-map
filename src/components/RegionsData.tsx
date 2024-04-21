import React from "react";

export const RegionsData = () => {
    return (
        <div className="absolute flex h-[100px] bg-white bottom-[48px] left-[140px] shadow-md">
            <div className="flex h-[100%] items-center justify-center flex-1 gap-10 text-[#264B82] mx-[28px]">
                <div className="">
                    <p className="font-bold text-[14px] leading-[20px]">
                        <span className="font-bold text-[36px] leading-[120%]">
                            169,4
                        </span>{" "}
                        тыс
                    </p>
                    <p>поставщиков</p>
                </div>
                <div className="">
                    {" "}
                    <p className="font-bold text-[14px] leading-[20px]">
                        <span className="font-bold text-[36px] leading-[120%]">
                            82,3
                        </span>{" "}
                        тыс
                    </p>
                    <p>заказчиков</p>
                </div>
                <div className="">
                    {" "}
                    <p className="font-bold text-[14px] leading-[20px]">
                        <span className="font-bold text-[36px] leading-[120%]">
                            45
                        </span>
                    </p>
                    <p>регионов</p>
                </div>
            </div>
        </div>
    );
};
