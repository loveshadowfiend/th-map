import { create } from "zustand";

export interface mapState {
    isDrawerActive: boolean;
    isHoverActive: boolean;
    currentRegionId: string;
    hoverRegionName: string;

    updateIsDrawerActive: (open: boolean) => void;
    updateHover: (open: boolean, regionName: string) => void;
    updateCurrentRegionId: (regiondId: string) => void;
}

export const useMapStore = create<mapState>()((set) => ({
    isDrawerActive: false,
    isHoverActive: false,
    currentRegionId: "",
    hoverRegionName: "",

    updateIsDrawerActive: (open: boolean) => {
        if (open == false) {
            set({ currentRegionId: "" });
        }
        set({ isDrawerActive: open });
    },
    updateHover: (open: boolean, regionName: string) => {
        set({ isHoverActive: open, hoverRegionName: regionName });
    },
    updateIsHovering: (open: boolean) => {
        set({ isHoverActive: open });
    },
    updateCurrentRegionId: (regiondId: string) => {
        set({ currentRegionId: regiondId });
    },
    updateHoverRegionName: (regionName: string) => {
        set({ hoverRegionName: regionName });
    },
}));
