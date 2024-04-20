import { RegionDrawer } from "./RegionDrawer";
import { useMapStore } from "@/stores/useMapStore";
import { CurrentRegion } from "./CurrentRegion";
import { Paths } from "./Paths";

export const Map = () => {
    const { isDrawerActive } = useMapStore();

    return (
        <>
            {isDrawerActive && <RegionDrawer />}
            <CurrentRegion />
            <svg
                className="map-svg"
                width="1440"
                height="872"
                viewBox="0 0 1440 872"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g filter="url(#filter0_d_202_224640)">
                    <Paths />
                </g>
            </svg>
        </>
    );
};
