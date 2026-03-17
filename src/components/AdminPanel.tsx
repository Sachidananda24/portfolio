import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { db, auth } from '../firebase';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged, User } from 'firebase/auth';

const googleProvider = new GoogleAuthProvider();

interface AdminPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Submission {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: any;
}

enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
    },
    operationType,
    path
  };
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

const AdminPanel: React.FC<AdminPanelProps> = ({ isOpen, onClose }) => {
  const [user, setUser] = useState<User | null>(null);
  const [submissions, setSubmissions] = useState<Submission[]>([]);

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribeAuth();
  }, []);

  useEffect(() => {
    if (user && user.email === 'sahoosachidananda24@gmail.com') {
      const path = 'contactSubmissions';
      const q = query(collection(db, path), orderBy('createdAt', 'desc'));
      const unsubscribe = onSnapshot(q, (snapshot) => {
        const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Submission));
        setSubmissions(data);
      }, (error) => {
        handleFirestoreError(error, OperationType.LIST, path);
      });
      return () => unsubscribe();
    } else {
      setSubmissions([]);
    }
  }, [user]);

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error('Login error:', error);
      alert('Failed to login. Please try again.');
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  if (!isOpen) return null;

  const isAdmin = user && user.email === 'sahoosachidananda24@gmail.com';

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="bg-luxury-gray p-8 rounded-2xl border border-white/10 w-full max-w-4xl max-h-[80vh] overflow-y-auto relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-white/50 hover:text-white">
          <X />
        </button>
        
        {!isAdmin ? (
          <div className="space-y-6 text-center">
            <h2 className="text-2xl font-serif">Admin Access</h2>
            <p className="text-white/60">Please login with the authorized Google account.</p>
            <button onClick={handleLogin} className="w-full py-4 bg-gold text-black font-bold uppercase tracking-widest text-sm hover:bg-white transition-colors">
              Login with Google
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            <h2 className="text-2xl font-serif">Contact Submissions</h2>
            <div className="space-y-4">
              {submissions.map(sub => (
                <div key={sub.id} className="p-6 bg-white/5 rounded-xl border border-white/5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-gold">{sub.name}</h3>
                    <span className="text-xs text-white/40">{sub.createdAt?.toDate().toLocaleString()}</span>
                  </div>
                  <p className="text-sm text-white/70 mb-1"><strong>Email:</strong> {sub.email}</p>
                  <p className="text-sm text-white/70 mb-2"><strong>Subject:</strong> {sub.subject}</p>
                  <p className="text-sm text-white/50">{sub.message}</p>
                </div>
              ))}
              {submissions.length === 0 && <p className="text-center text-white/50">No submissions yet.</p>}
            </div>
            <button onClick={handleLogout} className="w-full py-4 border border-white/20 text-white font-bold uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition-colors">
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
