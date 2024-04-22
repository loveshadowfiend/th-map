import { RegionDrawer } from "./RegionDrawer";
import { useMapStore } from "@/stores/useMapStore";
import { CurrentRegion } from "./CurrentRegion";
import { Paths } from "./Paths";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { useState } from "react";
import { RegionsData } from "./RegionsData";

export const Map = () => {
    const { isDrawerActive } = useMapStore();
    const [isPanning, setIsPanning] = useState<boolean>(false);

    return (
        <div className="w-screen h-screen">
            <CurrentRegion />
            <RegionsData />
            {isDrawerActive && <RegionDrawer />}
            <TransformWrapper
                doubleClick={{ disabled: true }}
                panning={{ velocityDisabled: true }}
                onPanning={() => {
                    setIsPanning(true);
                }}
                onPanningStop={() => {
                    setIsPanning(false);
                }}
            >
                <TransformComponent wrapperClass="bg-[#D7E1F6]">
                    <svg
                        className={`w-screen h-screen ${
                            isPanning ? "pointer-events-none" : ""
                        }`}
                        width="1440"
                        height="872"
                        viewBox={`0 0 1440 872`}
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g filter="url(#filter0_d_202_224640)">
                            <Paths />
                        </g>
                    </svg>
                </TransformComponent>
            </TransformWrapper>
        </div>
    );
};
