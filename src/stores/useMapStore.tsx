import { create } from "zustand";

export interface mapState {
    isDrawerActive: boolean;
    currentRegionId: string;

    updateIsDrawerActive: (open: boolean) => void;
    updateCurrentRegionId: (regiondId: string) => void;
}

export const useMapStore = create<mapState>()((set) => ({
    isDrawerActive: false,
    currentRegionId: "",

    updateIsDrawerActive: (open: boolean) => {
        set({ isDrawerActive: open });
    },
    updateCurrentRegionId: (regiondId: string) => {
        set({ currentRegionId: regiondId });
    },
}));
