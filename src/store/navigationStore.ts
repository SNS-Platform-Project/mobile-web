import { create } from "zustand";
import { getNavigation } from "@/api/navigation";

interface NavigationItem {
  id: number;
  label: string;
  path: string;
}

interface NavigationState {
  navigation: NavigationItem[];
  fetchNavigation: () => Promise<void>;
}

export const useNavigationStore = create<NavigationState>((set) => ({
  navigation: [], // 초기 상태
  fetchNavigation: async () => {
    try {
      const data = await getNavigation(); // API에서 데이터 가져오기
      set({ navigation: data.navigation }); // Zustand 상태 업데이트
    } catch (error) {
      console.error("Failed to fetch navigation data:", error);
    }
  },
}));
