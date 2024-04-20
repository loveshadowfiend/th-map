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
            <DrawerContent className="h-[375px] mt-0 w-screen">
                <div className="flex flex-col p-10 gap-[12px] overflow-auto">
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
                    </div>
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
                    </div>
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
                    </div>
                </div>
            </DrawerContent>
        </Drawer>
    );
};
