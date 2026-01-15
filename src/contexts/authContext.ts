import { createContext } from "react";

// 定义用户类型
export interface User {
  id: string;
  username: string;
  email: string;
  role: string;
  isAuthenticated: boolean;
}

// 定义认证上下文类型
export interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
  setUser: (user: User | null) => void;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
  register: (username: string, email: string, password: string) => Promise<boolean>;
}

// 初始用户状态
const initialUser: User | null = null;

// 创建认证上下文
export const AuthContext = createContext<AuthContextType>({
  user: initialUser,
  isAuthenticated: false,
  setIsAuthenticated: () => {},
  setUser: () => {},
  login: async () => false,
  logout: () => {},
  register: async () => false,
});