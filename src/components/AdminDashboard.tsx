import React, { useEffect, useState } from 'react';
import { db, auth } from '../firebase';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';

enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId: string | undefined;
    email: string | null | undefined;
    emailVerified: boolean | undefined;
    isAnonymous: boolean | undefined;
    tenantId: string | null | undefined;
    providerInfo: {
      providerId: string;
      displayName: string | null;
      email: string | null;
      photoUrl: string | null;
    }[];
  }
}

function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
      tenantId: auth.currentUser?.tenantId,
      providerInfo: auth.currentUser?.providerData.map(provider => ({
        providerId: provider.providerId,
        displayName: provider.displayName,
        email: provider.email,
        photoUrl: provider.photoURL
      })) || []
    },
    operationType,
    path
  }
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

const AdminDashboard = () => {
  const [messages, setMessages] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'contactMessages'));
        setMessages(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      } catch (error) {
        handleFirestoreError(error, OperationType.GET, 'contactMessages');
        setError('Failed to load messages. Please check your permissions.');
      }
    };
    fetchMessages();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await deleteDoc(doc(db, 'contactMessages', id));
      setMessages(messages.filter(msg => msg.id !== id));
    } catch (error) {
      handleFirestoreError(error, OperationType.DELETE, `contactMessages/${id}`);
      setError('Failed to delete message.');
    }
  };

  return (
    <div className="min-h-screen bg-luxury-black text-white p-8">
      <h1 className="text-3xl font-serif mb-8">Admin Dashboard</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div className="space-y-4">
        {messages.map(msg => (
          <div key={msg.id} className="p-6 bg-luxury-gray rounded-xl border border-white/10 flex justify-between items-start">
            <div>
              <h3 className="text-xl font-bold">{msg.name}</h3>
              <p className="text-white/60">{msg.email}</p>
              <p className="mt-2">{msg.message}</p>
            </div>
            <button 
              onClick={() => handleDelete(msg.id)}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
