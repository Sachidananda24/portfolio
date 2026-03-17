import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const AdminLogin = () => {
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      if (result.user.email === 'sahoosachidananda24@gmail.com') {
        localStorage.setItem('isAdmin', 'true');
        navigate('/admin/dashboard');
      } else {
        setError('Unauthorized email');
      }
    } catch (error) {
      setError('Failed to login with Google');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-luxury-black text-white">
      <div className="p-8 bg-luxury-gray rounded-xl border border-white/10 text-center">
        <h2 className="text-2xl font-serif mb-6">Admin Login</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <button onClick={handleLogin} className="w-full py-3 bg-gold text-black font-bold uppercase tracking-widest text-sm hover:bg-white transition-colors">
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default AdminLogin;
