import { Drawer, DrawerContent } from "@/components/ui/drawer";
import { useMapStore } from "@/stores/useMapStore";
import { Card, CardContent } from "@/components/ui/card";

export const RegionDrawer = () => {
    const { isDrawerActive, updateIsDrawerActive } = useMapStore();
    return (
        <Drawer
            direction="bottom"
            open={isDrawerActive}
            onOpenChange={updateIsDrawerActive}
        >
            <DrawerContent className="h-[375px] mt-0 w-screen shadow-lg">
                <div className="flex flex-col pb-[12px] px-[120px] gap-[12px] overflow-auto">
                    <div className="flex flex-row flex-1 gap-[12px]">
                        <Card>
                            <CardContent>
                                <p className="text-[16px] pt-[16px] font-semibold leading-[20px]">
                                    Годовой объем закупок
                                </p>
                                <p className="text-[14px] font-bold leading-[16px]">
                                    <span className="text-[48px] font-bold leading-[65.37px] pr-[10px]">
                                        8 204 245
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
                                        200 212
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
                                        689
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
                                        5
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
                                        252
                                    </span>
                                    + 12
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
                                        284
                                    </span>
                                    + 20
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
                                        5,3
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
                                        80
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
                                        1 424
                                    </span>
                                    + 100
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </DrawerContent>
        </Drawer>
    );
};
