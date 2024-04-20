import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
} from "@/components/ui/drawer";
import { Button } from "./ui/button";
import { useMapStore } from "@/stores/useMapStore";

export const RegionDrawer = () => {
    const { isDrawerActive, currentRegionId, updateIsDrawerActive } =
        useMapStore();
    return (
        <Drawer
            direction="bottom"
            open={isDrawerActive}
            onOpenChange={updateIsDrawerActive}
        >
            <DrawerContent className="h-[400px] mt-0 w-screen rounded-none">
                <DrawerHeader>
                    <DrawerTitle>{currentRegionId}</DrawerTitle>
                </DrawerHeader>
                <div className="flex flex-col p-10 gap-10">
                    <div>
                        <p>Сумма закупок по региону</p>
                        <span className="font-semibold">
                            {" "}
                            <span className="text-5xl font-bold">
                                8 204 245
                            </span>{" "}
                            тыс.
                        </span>
                    </div>
                    <div>
                        <p>Поставщики</p>
                    </div>
                </div>
                <DrawerFooter>
                    <DrawerClose>
                        <Button className="w-full" variant="outline">
                            Назад к карте
                        </Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
};
