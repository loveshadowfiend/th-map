import { useMapStore } from "@/stores/useMapStore";

export const RegionHover = () => {
    const { isHoverActive, hoverRegionName } = useMapStore();

    return (
        <>
            {isHoverActive && (
                <div className="absolute w-[100px] h-[50px] left-20 top-10">
                    {hoverRegionName}
                </div>
            )}
        </>
    );
};
