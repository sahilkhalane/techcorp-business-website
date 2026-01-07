import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Eye, X } from 'lucide-react';

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: 'Active' | 'Inactive';
  joinDate: string;
  projects: number;
}

const Users: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [filterRole, setFilterRole] = useState('All');

  const users: User[] = [
    { id: '1', name: 'John Anderson', email: 'john@techcorp.com', role: 'Admin', status: 'Active', joinDate: '2023-01-15', projects: 12 },
    { id: '2', name: 'Sarah Mitchell', email: 'sarah@techcorp.com', role: 'Developer', status: 'Active', joinDate: '2023-02-20', projects: 8 },
    { id: '3', name: 'Michael Chen', email: 'michael@techcorp.com', role: 'Designer', status: 'Active', joinDate: '2023-03-10', projects: 15 },
    { id: '4', name: 'Emily Rodriguez', email: 'emily@techcorp.com', role: 'Manager', status: 'Active', joinDate: '2023-01-25', projects: 20 },
    { id: '5', name: 'David Kim', email: 'david@techcorp.com', role: 'Developer', status: 'Inactive', joinDate: '2023-04-05', projects: 5 },
    { id: '6', name: 'Lisa Wang', email: 'lisa@techcorp.com', role: 'Designer', status: 'Active', joinDate: '2023-02-15', projects: 11 },
  ];

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = filterRole === 'All' || user.role === filterRole;
    return matchesSearch && matchesRole;
  });

  const roles = ['All', 'Admin', 'Developer', 'Designer', 'Manager'];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-secondary-900">Users Management</h1>
        <p className="text-secondary-600 mt-1">Manage and monitor user accounts</p>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm border border-secondary-200">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search users..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Filter className="text-secondary-400 w-5 h-5" />
            <select
              value={filterRole}
              onChange={(e) => setFilterRole(e.target.value)}
              className="px-4 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
            >
              {roles.map(role => (
                <option key={role} value={role}>{role}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-secondary-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-secondary-50 border-b border-secondary-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-secondary-600 uppercase tracking-wider">User</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-secondary-600 uppercase tracking-wider">Role</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-secondary-600 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-secondary-600 uppercase tracking-wider">Projects</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-secondary-600 uppercase tracking-wider">Join Date</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-secondary-600 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-secondary-200">
              {filteredUsers.map((user, index) => (
                <motion.tr
                  key={user.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="hover:bg-secondary-50 transition-colors"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                        <span className="text-primary-700 font-semibold">{user.name.charAt(0)}</span>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-secondary-900">{user.name}</div>
                        <div className="text-sm text-secondary-500">{user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-secondary-900">{user.role}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      user.status === 'Active'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-secondary-900">
                    {user.projects}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-secondary-500">
                    {user.joinDate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <button
                      onClick={() => setSelectedUser(user)}
                      className="text-primary-600 hover:text-primary-700 font-medium flex items-center space-x-1"
                    >
                      <Eye className="w-4 h-4" />
                      <span>View</span>
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <AnimatePresence>
        {selectedUser && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedUser(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl p-8 max-w-md w-full"
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-secondary-900">User Details</h3>
                <button
                  onClick={() => setSelectedUser(null)}
                  className="text-secondary-400 hover:text-secondary-600"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                    <span className="text-primary-700 font-bold text-2xl">{selectedUser.name.charAt(0)}</span>
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-secondary-900">{selectedUser.name}</div>
                    <div className="text-sm text-secondary-600">{selectedUser.email}</div>
                  </div>
                </div>

                <div className="border-t border-secondary-200 pt-4 space-y-3">
                  <div className="flex justify-between">
                    <span className="text-secondary-600">Role:</span>
                    <span className="font-medium text-secondary-900">{selectedUser.role}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-secondary-600">Status:</span>
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      selectedUser.status === 'Active'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {selectedUser.status}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-secondary-600">Projects:</span>
                    <span className="font-medium text-secondary-900">{selectedUser.projects}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-secondary-600">Join Date:</span>
                    <span className="font-medium text-secondary-900">{selectedUser.joinDate}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Users;