"use client";

import {
  createContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import { useRouter } from "next/navigation";
import { apiGet, apiPost } from "@/lib/api";
import {
  setToken,
  getToken,
  removeToken,
  setStoredUser,
  getStoredUser,
  removeStoredUser,
} from "@/lib/helpers";
import { API_ENDPOINTS } from "@/constants/api";
import { DEFAULT_REDIRECT_AFTER_LOGIN, DEFAULT_REDIRECT_AFTER_LOGOUT } from "@/constants/routes";
import type { User, AuthCredentials, SignupPayload, AuthResponse } from "@/types/user";
import type { ApiResponse } from "@/types/api";

export interface AuthContextValue {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  login: (credentials: AuthCredentials) => Promise<void>;
  signup: (payload: SignupPayload) => Promise<void>;
  logout: () => Promise<void>;
  refreshUser: () => Promise<void>;
  clearError: () => void;
}

export const AuthContext = createContext<AuthContextValue | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [token, setTokenState] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const isAuthenticated = !!user && !!token;

  /* ── Bootstrap: rehydrate from localStorage ──────────────────────── */
  useEffect(() => {
    const savedToken = getToken();
    const savedUser = getStoredUser();
    if (savedToken && savedUser) {
      setTokenState(savedToken);
      setUser(savedUser);
    }
    setIsLoading(false);
  }, []);

  /* ── Refresh the user profile from the server ────────────────────── */
  const refreshUser = useCallback(async () => {
    try {
      const res = await apiGet<ApiResponse<User>>(API_ENDPOINTS.AUTH.ME);
      if (res.success && res.data) {
        setUser(res.data);
        setStoredUser(res.data);
      }
    } catch {
      removeToken();
      removeStoredUser();
      setUser(null);
      setTokenState(null);
    }
  }, []);

  /* ── Login ───────────────────────────────────────────────────────── */
  const login = useCallback(
    async (credentials: AuthCredentials) => {
      setIsLoading(true);
      setError(null);
      try {
        const res = await apiPost<AuthResponse>(API_ENDPOINTS.AUTH.LOGIN, credentials);
        if (res.success) {
          setToken(res.token);
          setTokenState(res.token);
          setStoredUser(res.user);
          setUser(res.user);
          router.push(DEFAULT_REDIRECT_AFTER_LOGIN);
        } else {
          setError(res.message || "Login failed");
        }
      } catch (err: unknown) {
        const message =
          (err as { response?: { data?: { message?: string } } })?.response?.data
            ?.message || "An unexpected error occurred";
        setError(message);
      } finally {
        setIsLoading(false);
      }
    },
    [router]
  );

  /* ── Signup ──────────────────────────────────────────────────────── */
  const signup = useCallback(
    async (payload: SignupPayload) => {
      setIsLoading(true);
      setError(null);
      try {
        const res = await apiPost<AuthResponse>(API_ENDPOINTS.AUTH.SIGNUP, payload);
        if (res.success) {
          setToken(res.token);
          setTokenState(res.token);
          setStoredUser(res.user);
          setUser(res.user);
          router.push(DEFAULT_REDIRECT_AFTER_LOGIN);
        } else {
          setError(res.message || "Signup failed");
        }
      } catch (err: unknown) {
        const message =
          (err as { response?: { data?: { message?: string } } })?.response?.data
            ?.message || "An unexpected error occurred";
        setError(message);
      } finally {
        setIsLoading(false);
      }
    },
    [router]
  );

  /* ── Logout ──────────────────────────────────────────────────────── */
  const logout = useCallback(async () => {
    try {
      await apiPost(API_ENDPOINTS.AUTH.LOGOUT);
    } catch {
      // Ignore server errors — clear local state regardless
    } finally {
      removeToken();
      removeStoredUser();
      setUser(null);
      setTokenState(null);
      router.push(DEFAULT_REDIRECT_AFTER_LOGOUT);
    }
  }, [router]);

  const clearError = useCallback(() => setError(null), []);

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isAuthenticated,
        isLoading,
        error,
        login,
        signup,
        logout,
        refreshUser,
        clearError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
