import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type UserType = 'parent' | 'child' | null;

interface UserState {
  userType: UserType;
  setUserType: (type: UserType) => void;
  resetUserType: () => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      userType: null,

      setUserType: (type: UserType) => set({ userType: type }),

      resetUserType: () => set({ userType: null }),
    }),
    {
      name: 'cyberhub-user-storage',
      partialize: (state) => ({
        userType: state.userType,
      })
    }
  )
);
