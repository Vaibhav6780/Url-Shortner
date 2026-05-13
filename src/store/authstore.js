import { create } from "zustand";

const useAuthStore = create((set) => ({

    isAuthenticated: false,

    user: null,

    loading: true,

    setAuth: (userData) =>
        set({
            isAuthenticated: true,
            user: userData
        }),

    logout: () =>
        set({
            isAuthenticated: false,
            user: null
        }),

    setLoading: (value) =>
        set({
            loading: value
        })

}));

export default useAuthStore;