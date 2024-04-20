import { useMapStore } from "@/stores/useMapStore";

export const CurrentRegion = () => {
    const { currentRegionId } = useMapStore();

    return (
        <>
            <div className="absolute h-[50px] left-20 top-10">
                <p className="font-semibold text-[24px]">
                    {currentRegionId ?? "Карта регионов"}
                </p>
            </div>
        </>
    );
};
