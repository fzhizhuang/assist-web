import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

type State = {
  activeIndex: number;
  loginType: 'password' | 'emailCode' | 'wechat';
  wxInterval: NodeJS.Timeout | null;
};

type Action = {
  setActiveIndex: (activeIndex: State['activeIndex']) => void;
  setLoginType: (loginType: State['loginType']) => void;
  setWxInterval: (wxInterval: State['wxInterval']) => void;
};

export const useSettingStore = create<State & Action>()(
  persist(
    (set) => ({
      activeIndex: 0,
      loginType: 'password',
      wxInterval: null,
      setActiveIndex: (activeIndex) => set(() => ({ activeIndex: activeIndex })),
      setLoginType: (loginType) => set(() => ({ loginType: loginType })),
      setWxInterval: (wxInterval) => set(() => ({ wxInterval: wxInterval })),
    }),
    {
      name: 'setting-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
