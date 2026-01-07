import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';
import { User, Mail, Lock, Bell, Shield, Globe } from 'lucide-react';

const Settings: React.FC = () => {
  const { user } = useAuth();
  const [saved, setSaved] = useState(false);

  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    role: user?.role || '',
    notifications: true,
    emailUpdates: true,
    twoFactor: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-secondary-900">Settings</h1>
        <p className="text-secondary-600 mt-1">Manage your account settings and preferences</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-secondary-200 space-y-2">
            <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg bg-primary-50 text-primary-700 font-medium">
              <User className="w-5 h-5" />
              <span>Profile</span>
            </button>
            <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-secondary-600 hover:bg-secondary-50">
              <Lock className="w-5 h-5" />
              <span>Security</span>
            </button>
            <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-secondary-600 hover:bg-secondary-50">
              <Bell className="w-5 h-5" />
              <span>Notifications</span>
            </button>
            <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-secondary-600 hover:bg-secondary-50">
              <Globe className="w-5 h-5" />
              <span>Preferences</span>
            </button>
          </div>
        </div>

        <div className="lg:col-span-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl p-8 shadow-sm border border-secondary-200"
          >
            <h2 className="text-2xl font-bold text-secondary-900 mb-6">Profile Settings</h2>

            {saved && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg mb-6"
              >
                Settings saved successfully!
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex items-center space-x-6">
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center">
                  <span className="text-primary-700 font-bold text-3xl">{formData.name.charAt(0)}</span>
                </div>
                <div>
                  <button type="button" className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                    Change Photo
                  </button>
                  <p className="text-sm text-secondary-600 mt-2">JPG, PNG or GIF. Max size 2MB</p>
                </div>
              </div>

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-secondary-400" />
                  </div>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className="block w-full pl-10 pr-3 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-secondary-400" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="block w-full pl-10 pr-3 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="role" className="block text-sm font-medium text-secondary-700 mb-2">
                  Role
                </label>
                <input
                  id="role"
                  name="role"
                  type="text"
                  value={formData.role}
                  disabled
                  className="block w-full px-3 py-3 border border-secondary-300 rounded-lg bg-secondary-50 text-secondary-600"
                />
              </div>

              <div className="border-t border-secondary-200 pt-6">
                <h3 className="text-lg font-semibold text-secondary-900 mb-4">Preferences</h3>

                <div className="flex items-center justify-between py-3">
                  <div className="flex items-center space-x-3">
                    <Bell className="w-5 h-5 text-secondary-600" />
                    <div>
                      <div className="font-medium text-secondary-900">Push Notifications</div>
                      <div className="text-sm text-secondary-600">Receive push notifications</div>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      name="notifications"
                      checked={formData.notifications}
                      onChange={handleChange}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-secondary-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-secondary-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between py-3">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-secondary-600" />
                    <div>
                      <div className="font-medium text-secondary-900">Email Updates</div>
                      <div className="text-sm text-secondary-600">Receive email notifications</div>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      name="emailUpdates"
                      checked={formData.emailUpdates}
                      onChange={handleChange}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-secondary-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-secondary-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between py-3">
                  <div className="flex items-center space-x-3">
                    <Shield className="w-5 h-5 text-secondary-600" />
                    <div>
                      <div className="font-medium text-secondary-900">Two-Factor Authentication</div>
                      <div className="text-sm text-secondary-600">Add an extra layer of security</div>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      name="twoFactor"
                      checked={formData.twoFactor}
                      onChange={handleChange}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-secondary-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-secondary-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                  </label>
                </div>
              </div>

              <div className="flex justify-end space-x-4 pt-6">
                <button
                  type="button"
                  className="px-6 py-3 border border-secondary-300 rounded-lg text-secondary-700 hover:bg-secondary-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Settings;