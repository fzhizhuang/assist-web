import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { ModifyUsernameDTO, UserInfo } from '@/types/user';
import { getUser, modifyName, uploadAvatar } from '@/service/userService.ts';

type State = {
  userInfo: UserInfo | null;
};

type Action = {
  setUserInfo: (userInfo: UserInfo | null) => void;
  getUserInfo: () => void;
  uploadAvatar: (formData: FormData) => void;
  modifyUsername: (username?: string) => void;
};

export const useUserStore = create<State & Action>()(
  persist(
    (set) => ({
      userInfo: null,
      setUserInfo: (userInfo) => set(() => ({ userInfo: userInfo })),
      getUserInfo: () => {
        getUser().then((res) => {
          set(() => ({ userInfo: res }));
        });
      },
      uploadAvatar: (formData) => {
        uploadAvatar(formData).then((res) => {
          // 更新用户信息中头像信息
          set((state) => ({
            userInfo: {
              ...state.userInfo,
              avatar: res,
            },
          }));
        });
      },
      modifyUsername: (username?) => {
        const modifyUsernameDTO: ModifyUsernameDTO = {
          username: username,
        };
        modifyName(modifyUsernameDTO).then(() => {
          set((state) => ({
            userInfo: {
              ...state.userInfo,
              username: username,
            },
          }));
        });
      },
    }),
    {
      name: 'user-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
