import { fetchRegionsData } from "@/api/skufDb";
import { useQuery } from "@tanstack/react-query";
import BeatLoader from "react-spinners/BeatLoader";

export const RegionsData = () => {
    const { data, isLoading } = useQuery<any>({
        queryKey: ["regionsData"],
        queryFn: () => fetchRegionsData(),
    });

    return (
        <div className="absolute z-50 flex h-[100px] bg-white bottom-[48px] left-[140px] shadow-md px-[28px]">
            {data !== undefined && (
                <>
                    <div className="flex h-[100%] items-center justify-center flex-1 gap-10 text-[#264B82]">
                        <div className="">
                            <p className="font-bold text-[14px] leading-[20px]">
                                <span className="font-bold text-[36px] leading-[120%]">
                                    {data.data[0].totalSuppliers}
                                </span>{" "}
                                {/* тыс */}
                            </p>
                            <p className="font-bold leading-[24px] text-[14px]">
                                поставщиков
                            </p>
                        </div>
                        <div className="">
                            {" "}
                            <p className="font-bold text-[14px] leading-[20px]">
                                <span className="font-bold text-[36px] leading-[120%]">
                                    {data.data[0].totalCustomers}
                                </span>{" "}
                                {/* тыс */}
                            </p>
                            <p className="font-bold leading-[24px] text-[14px]">
                                заказчиков
                            </p>
                        </div>
                        <div className="">
                            {" "}
                            <p className="font-bold text-[14px] leading-[20px]">
                                <span className="font-bold text-[36px] leading-[120%] pr-[4px]">
                                    {Math.round(
                                        data.data[0].totalAdjustedSum / 1e9
                                    )}
                                </span>
                                млрд
                            </p>
                            <p className="font-bold leading-[24px] text-[14px]">
                                сумма годовой закупки
                            </p>
                        </div>
                    </div>
                </>
            )}
            {isLoading && (
                <div className="flex items-center align-center h-[100%] w-[100%]">
                    <BeatLoader color={"#264B82"} />
                </div>
            )}
        </div>
    );
};
