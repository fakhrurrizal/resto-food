import { createContext, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

type User = {
  username: string;
  gender: string;
};

type AuthContextType = {
  user: User | null;
  login: (username: string,gender : string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem('user_resto');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (username: string,gender : string) => {
    setUser({ username, gender });
    localStorage.setItem('user_resto', JSON.stringify({ username, gender }));
    router.back();
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user_resto');
    localStorage.removeItem('cart');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
