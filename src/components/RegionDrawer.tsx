import { Drawer, DrawerContent } from "@/components/ui/drawer";
import { useMapStore } from "@/stores/useMapStore";
import { Card, CardContent } from "@/components/ui/card";
import { fetchRegionData, mockData } from "@/api/skufBd";
import { useQuery } from "@tanstack/react-query";
import BeatLoader from "react-spinners/BeatLoader";

export const RegionDrawer = () => {
    const { currentRegionId, isDrawerActive, updateIsDrawerActive } =
        useMapStore();

    // TODO: fix any :(
    const { data, isLoading } = useQuery<any>({
        enabled: !!currentRegionId,
        queryKey: ["regionData", currentRegionId],
        queryFn: () => fetchRegionData(currentRegionId),
    });

    console.log(data);

    // TODO: cards into components
    return (
        <Drawer
            direction="bottom"
            open={isDrawerActive}
            onOpenChange={updateIsDrawerActive}
        >
            <DrawerContent className="flex mt-0 w-screen shadow-lg">
                {data !== undefined && data.data.length > 0 && (
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
                                                    data.data[0].totalSum / 1000
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
                                                    data.data[0].averageSum
                                                )}
                                            </span>
                                            ₽
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>
                            <div className="flex flex-row flex-1 gap-[12px]">
                                <Card>
                                    <CardContent>
                                        <p className="text-[16px] pt-[16px] font-semibold leading-[20px]">
                                            Завершенные контракты
                                        </p>
                                        <p className="text-[14px] font-bold leading-[16px]">
                                            <span className="text-[48px] font-bold leading-[65.37px] pr-[10px]">
                                                {
                                                    data.data[0]
                                                        .completedContracts
                                                }
                                            </span>
                                        </p>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardContent>
                                        <p className="text-[16px] pt-[16px] font-semibold leading-[20px]">
                                            Рейтинг
                                        </p>
                                        <p className="text-[14px] font-bold leading-[16px]">
                                            <span className="text-[48px] font-bold leading-[65.37px] pr-[10px]">
                                                ...
                                            </span>
                                            / 45
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
                                                {data.data[0].numberOfSuppliers}
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
                                                {data.data[0].numberOfCustomers}
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
                                                    data.data[0].averageDiscount
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
                                                    data.data[0].fz44Percentage
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
                                                    data.data[0].totalCount
                                                )}
                                            </span>
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </>
                )}
                {isLoading && (
                    <div className="flex items-center justify-center h-[200px]">
                        <BeatLoader />
                    </div>
                )}
                {data !== undefined && data.data.length === 0 && (
                    <div className="flex items-center justify-center h-[200px]">
                        Информации не найдено
                    </div>
                )}
            </DrawerContent>
        </Drawer>
    );
};
