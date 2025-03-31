import React from 'react';
import { useAuth } from '../contexts/AuthContext';

export function Account() {
  const { user } = useAuth();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-serif mb-8">My Account</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-medium mb-4">Account Details</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <p className="mt-1">{user?.email}</p>
            </div>
            <button className="text-rose-600 hover:text-rose-700">
              Change Password
            </button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-medium mb-4">Order History</h2>
          <p className="text-gray-600">You haven't placed any orders yet.</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-medium mb-4">Saved Addresses</h2>
          <p className="text-gray-600">No addresses saved yet.</p>
          <button className="mt-4 text-rose-600 hover:text-rose-700">
            Add New Address
          </button>
        </div>
      </div>
    </div>
  );
}