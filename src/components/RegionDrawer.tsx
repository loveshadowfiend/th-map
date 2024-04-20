import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
} from "@/components/ui/drawer";
import { Button } from "./ui/button";

interface RegionDrawerProps {
    id: string;
    isDrawerActive: boolean;
    setIsDrawerActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const RegionDrawer = (props: RegionDrawerProps) => {
    return (
        <Drawer
            direction="left"
            open={props.isDrawerActive}
            onOpenChange={props.setIsDrawerActive}
        >
            <DrawerContent className="h-screen top-0 right-auto mt-0 w-[500px] rounded-none">
                <DrawerHeader>
                    <DrawerTitle>{props.id}</DrawerTitle>
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
