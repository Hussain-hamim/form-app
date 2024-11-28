import { create } from "zustand";
import asyncStorage from "@react-native-async-storage/async-storage";

import { persist, createJSONStorage } from "zustand/middleware";

type UserStore = {
  hasFinishedOnboarding: boolean;
  toggleHadOnboarded: () => void;
};

/**
 * Custom hook to manage user store using Zustand and persist middleware.
 *
 * This store keeps track of whether the user has finished onboarding and provides
 * a method to toggle this state.
 *
 * @returns {object} The user store with the following properties:
 * - `hasFinishedOnboarding` (boolean): Indicates if the user has completed onboarding.
 * - `toggleHadOnboarded` (function): Function to toggle the `hasFinishedOnboarding` state.
 *
 * The store is persisted using `createJSONStorage` and `asyncStorage` with the key `plantly-user-store`.
 */
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
