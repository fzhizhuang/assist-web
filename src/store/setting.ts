import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

type State = {
  activeIndex: number;
  loginType: 'password' | 'emailCode' | 'wechat';
};

type Action = {
  setActiveIndex: (activeIndex: State['activeIndex']) => void;
  setLoginType: (loginType: State['loginType']) => void;
};

export const useSettingStore = create<State & Action>()(
  persist(
    (set) => ({
      activeIndex: 0,
      loginType: 'password',
      setActiveIndex: (activeIndex) => set(() => ({ activeIndex: activeIndex })),
      setLoginType: (loginType) => set(() => ({ loginType: loginType })),
    }),
    {
      name: 'setting-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
