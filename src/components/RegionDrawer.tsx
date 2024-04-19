import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
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
            <DrawerTrigger>Open</DrawerTrigger>
            <DrawerContent className="h-screen top-0 right-auto mt-0 w-[500px] rounded-none">
                <DrawerHeader>
                    <DrawerTitle>{props.id}</DrawerTitle>
                    <DrawerDescription>хуйня полноешйшаняяя</DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                    <DrawerClose>
                        <Button className="w-full" variant="outline">
                            Cancel
                        </Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
};
