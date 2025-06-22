import { create } from 'zustand';

type TabTypes = "tec" | "leg" | "psy"

interface CaseTabState {
  activeTab: TabTypes;
  setActiveTab: (tab: TabTypes) => void;
}

export const useCaseTabStore = create<CaseTabState>()(
  (set) => ({
    activeTab: "tec",

    setActiveTab: (tab: TabTypes) => set({ activeTab: tab }),
  }),
);
