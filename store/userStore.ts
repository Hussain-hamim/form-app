import { create } from "zustand";
import asyncStorage from "@react-native-async-storage/async-storage";

import { persist, createJSONStorage } from "zustand/middleware";

type UserStore = {
  hasFinishedOnboarding: boolean;
  toggleHadOnboarded: () => void;
};

export const useUserStore = create(
  // persist got two arguments, store and and config object
  persist<UserStore>(
    (set) => ({
      hasFinishedOnboarding: false,
      toggleHadOnboarded: () => {
        set((state) => {
          return {
            ...state,
            hasFinishedOnboarding: !state.hasFinishedOnboarding,
          };
        });
      },
    }),
    {
      name: "plantly-user-store",
      storage: createJSONStorage(() => asyncStorage),
    }
  )
);
