import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem('xorazmiy_admin_token') || null);
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('xorazmiy_admin_user');
    return saved ? JSON.parse(saved) : null;
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyUser = async () => {
      if (!token) {
        setLoading(false);
        return;
      }
      try {
        const res = await fetch('/api/auth/me', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        const data = await res.json();
        if (data.success) {
          setUser(data.user);
        } else {
          logout();
        }
      } catch (err) {
        console.error('Auth verification error:', err);
      } finally {
        setLoading(false);
      }
    };

    verifyUser();
  }, [token]);

  const login = async (username, password) => {
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      const data = await res.json();
      if (data.success) {
        setToken(data.token);
        setUser(data.user);
        localStorage.setItem('xorazmiy_admin_token', data.token);
        localStorage.setItem('xorazmiy_admin_user', JSON.stringify(data.user));
        return { success: true };
      } else {
        return { success: false, message: data.message || 'Kirishda xatolik yuz berdi' };
      }
    } catch (err) {
      return { success: false, message: 'Server bilan bog\'lanishda xatolik' };
    }
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem('xorazmiy_admin_token');
    localStorage.removeItem('xorazmiy_admin_user');
  };

  const changePassword = async (currentPassword, newPassword) => {
    try {
      const res = await fetch('/api/auth/change-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ currentPassword, newPassword })
      });
      return await res.json();
    } catch (err) {
      return { success: false, message: 'Server bilan bog\'lanishda xatolik' };
    }
  };

  return (
    <AuthContext.Provider value={{
      token,
      user,
      isAuthenticated: Boolean(token && user),
      loading,
      login,
      logout,
      changePassword
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
