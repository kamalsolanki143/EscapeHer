"use client";

/**
 * Stub AuthContext — replace with Kamal's real Firebase implementation.
 * TODO: replace with Kamal's real implementation
 *
 * Real interface will come from client/src/context/AuthContext.tsx +
 * client/src/hooks/useAuth.ts once Krrish/Kamal wire Firebase Auth.
 */

import React, { createContext, useContext, useState } from "react";

export interface User {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  phoneNumber: string | null;
}

export interface AuthContextValue {
  user: User | null;
  isInitializing: boolean;
  isAuthenticated: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, name: string) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | null>(null);

/** Stub provider — simulates a signed-in user for local development. */
export function AuthContextProvider({ children }: { children: React.ReactNode }) {
  const [user] = useState<User | null>({
    uid: "stub-uid-001",
    email: "user@example.com",
    displayName: "Muskan",
    photoURL: null,
    phoneNumber: null,
  });

  const value: AuthContextValue = {
    user,
    isInitializing: false,
    isAuthenticated: user !== null,
    signIn: async () => {
      console.warn("[AuthContext stub] signIn called — replace with Kamal's impl");
    },
    signUp: async () => {
      console.warn("[AuthContext stub] signUp called — replace with Kamal's impl");
    },
    signOut: async () => {
      console.warn("[AuthContext stub] signOut called — replace with Kamal's impl");
    },
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    // Gracefully return a sensible default when used outside the provider
    // TODO: replace with Kamal's real implementation
    return {
      user: null,
      isInitializing: false,
      isAuthenticated: false,
      signIn: async () => {},
      signUp: async () => {},
      signOut: async () => {},
    };
  }
  return ctx;
}
