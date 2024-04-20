import { useMapStore } from "@/stores/useMapStore";

export const CurrentRegion = () => {
    const { currentRegionId } = useMapStore();

    return (
        <>
            <div className="absolute h-[50px] left-[140px] top-[48px]">
                <p className="font-semibold text-[20px]">
                    {currentRegionId == "" ? "Карта регионов" : currentRegionId}
                </p>
                {currentRegionId == "" && (
                    <p className="py-[12px] text-[14px] text-[#264B82]">
                        Итоги открытых встреч с регионами
                    </p>
                )}
            </div>
        </>
    );
};
