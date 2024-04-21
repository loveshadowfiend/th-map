import { Drawer, DrawerContent } from "@/components/ui/drawer";
import { useMapStore } from "@/stores/useMapStore";
import { Card, CardContent } from "@/components/ui/card";
import { fetchRegionData, fetchRegionRating } from "@/api/skufDb";
import { useQuery } from "@tanstack/react-query";
import BeatLoader from "react-spinners/BeatLoader";

export const RegionDrawer = () => {
    const { currentRegionId, isDrawerActive, updateIsDrawerActive } =
        useMapStore();

    // TODO: fix any :(
    const {
        data: regionData,
        isError: isErrorData,
        isLoading: isLoadingData,
    } = useQuery<any>({
        enabled: !!currentRegionId,
        queryKey: ["regionData", currentRegionId],
        queryFn: () => fetchRegionData(currentRegionId),
    });

    const {
        data: ratingData,
        isError: isErrorRating,
        isLoading: isLoadingRating,
    } = useQuery<any>({
        enabled: !!currentRegionId,
        queryKey: ["ratingData", currentRegionId],
        queryFn: () => fetchRegionRating(currentRegionId),
    });

    // TODO: cards into components
    return (
        <Drawer
            direction="bottom"
            open={isDrawerActive}
            onOpenChange={updateIsDrawerActive}
        >
            <DrawerContent className="flex mt-0 w-screen drop-shadow-2xl min-h-[200px]">
                {!isLoadingRating &&
                    !isLoadingData &&
                    regionData.data.length > 0 && (
                        <>
                            <div className="flex flex-col pb-[12px] px-[120px] gap-[12px] overflow-auto">
                                <div className="flex flex-row flex-1 gap-[12px]">
                                    <Card>
                                        <CardContent>
                                            <p className="text-[16px] pt-[16px] font-semibold leading-[20px]">
                                                Годовой объем закупок
                                            </p>
                                            <p className="text-[14px] font-bold leading-[16px]">
                                                <span className="text-[48px] font-bold leading-[65.37px] pr-[10px]">
                                                    {Math.round(
                                                        regionData.data[0]
                                                            .totalSum / 1000
                                                    )}
                                                </span>
                                                тыс. ₽
                                            </p>
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardContent>
                                            <p className="text-[16px] pt-[16px] font-semibold leading-[20px]">
                                                Сумма среднего контракта
                                            </p>
                                            <p className="text-[14px] font-bold leading-[16px]">
                                                <span className="text-[48px] font-bold leading-[65.37px] pr-[10px]">
                                                    {Math.round(
                                                        regionData.data[0]
                                                            .averageSum
                                                    )}
                                                </span>
                                                ₽
                                            </p>
                                        </CardContent>
                                    </Card>
                                </div>
                                <div className="flex flex-row flex-1 gap-[12px] last:">
                                    <Card>
                                        <CardContent>
                                            <p className="text-[16px] pt-[16px] font-semibold leading-[20px]">
                                                Завершенные контракты
                                            </p>
                                            <div className="flex flex-row items-center justify-between">
                                                <p className="text-[14px] font-bold leading-[16px]">
                                                    <span className="text-[48px] font-bold leading-[65.37px] pr-[10px]">
                                                        {
                                                            regionData.data[0]
                                                                .completedContracts
                                                        }
                                                    </span>
                                                </p>
                                                <p className="text-[16px]">
                                                    {Math.round(
                                                        regionData.data[0]
                                                            .completedContractsPercentage
                                                    )}
                                                    <span className="font-semibold text-[10px]">
                                                        %
                                                    </span>
                                                </p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardContent>
                                            <p className="text-[16px] pt-[16px] font-semibold leading-[20px]">
                                                Рейтинг
                                            </p>
                                            <p className="text-[14px] font-bold leading-[16px]">
                                                <span className="text-[48px] font-bold leading-[65.37px] pr-[10px]">
                                                    {
                                                        ratingData.data[0]
                                                            .rankFinal
                                                    }
                                                </span>
                                                / 56
                                            </p>
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardContent>
                                            <p className="text-[16px] pt-[16px] font-semibold leading-[20px]">
                                                Поставщики
                                            </p>
                                            <p className="text-[14px] font-bold leading-[16px]">
                                                <span className="text-[48px] font-bold leading-[65.37px] pr-[10px]">
                                                    {
                                                        regionData.data[0]
                                                            .numberOfSuppliers
                                                    }
                                                </span>
                                            </p>
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardContent>
                                            <p className="text-[16px] pt-[16px] font-semibold leading-[20px]">
                                                Заказчики
                                            </p>
                                            <p className="text-[14px] font-bold leading-[16px]">
                                                <span className="text-[48px] font-bold leading-[65.37px] pr-[10px]">
                                                    {
                                                        regionData.data[0]
                                                            .numberOfCustomers
                                                    }
                                                </span>
                                            </p>
                                        </CardContent>
                                    </Card>
                                </div>
                                <div className="flex flex-row flex-1 gap-[12px]">
                                    <Card>
                                        <CardContent>
                                            <p className="text-[16px] pt-[16px] font-semibold leading-[20px]">
                                                Процент снижения начальной цены
                                            </p>
                                            <p className="text-[14px] font-bold leading-[16px]">
                                                <span className="text-[48px] font-bold leading-[65.37px] pr-[10px]">
                                                    {Math.round(
                                                        regionData.data[0]
                                                            .averageDiscount
                                                    )}
                                                </span>
                                                %
                                            </p>
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardContent>
                                            <p className="text-[16px] pt-[16px] font-semibold leading-[20px]">
                                                Отношение 44 ФЗ ко всем заказам
                                            </p>
                                            <p className="text-[14px] font-bold leading-[16px]">
                                                <span className="text-[48px] font-bold leading-[65.37px] pr-[10px]">
                                                    {Math.round(
                                                        regionData.data[0]
                                                            .fz44Percentage
                                                    )}
                                                </span>
                                                %
                                            </p>
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardContent>
                                            <p className="text-[16px] pt-[16px] font-semibold leading-[20px]">
                                                Годовой объем закупок
                                            </p>
                                            <p className="text-[14px] font-bold leading-[16px] ">
                                                <span className="text-[48px] font-bold leading-[65.37px] pr-[10px]">
                                                    {Math.round(
                                                        regionData.data[0]
                                                            .totalCount
                                                    )}
                                                </span>
                                            </p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                        </>
                    )}
                {isLoadingData && isLoadingRating && (
                    <div className="flex items-center justify-center h-[200px]">
                        <BeatLoader />
                    </div>
                )}
                {regionData !== undefined && regionData.data.length === 0 && (
                    <div className="flex items-center justify-center h-[200px]">
                        Информации не найдено
                    </div>
                )}
                {isErrorData && isErrorRating && (
                    <div className="flex items-center justify-center h-[200px]">
                        Произошла ошибка :(
                    </div>
                )}
            </DrawerContent>
        </Drawer>
    );
};
