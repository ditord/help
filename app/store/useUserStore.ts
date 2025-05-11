import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export type UserType = 'parent' | 'child' | null;

interface UserState {
  userType: UserType;
  setUserType: (type: UserType) => void;
  toggleIsParent: () => void;
  toggleIsChild: () => void;
  resetUserType: () => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set, get) => ({
      userType: null,

      get isParent() { return get().userType === 'parent'; },
      get isChild() { return get().userType === 'child'; },

      setUserType: (type: UserType) => set({ userType: type }),

      toggleIsParent: () => {
        const currentType = get().userType;
        set({ userType: currentType === 'parent' ? null : 'parent' });
      },

      toggleIsChild: () => {
        const currentType = get().userType;
        set({ userType: currentType === 'child' ? null : 'child' });
      },

      resetUserType: () => set({ userType: null }),
    }),
    {
      name: 'cyberhub-user-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);