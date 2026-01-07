import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Users, DollarSign, FolderKanban, TrendingUp, ArrowUp, ArrowDown } from 'lucide-react';

const Overview: React.FC = () => {
  const stats = [
    {
      icon: <Users className="w-6 h-6" />,
      label: 'Total Users',
      value: '2,543',
      change: '+12.5%',
      positive: true,
      color: 'bg-blue-500',
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      label: 'Revenue',
      value: '$45,231',
      change: '+8.2%',
      positive: true,
      color: 'bg-green-500',
    },
    {
      icon: <FolderKanban className="w-6 h-6" />,
      label: 'Active Projects',
      value: '127',
      change: '+23.1%',
      positive: true,
      color: 'bg-purple-500',
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      label: 'Growth Rate',
      value: '18.7%',
      change: '-2.4%',
      positive: false,
      color: 'bg-orange-500',
    },
  ];

  const monthlyData = [
    { month: 'Jan', value: 4000 },
    { month: 'Feb', value: 3000 },
    { month: 'Mar', value: 5000 },
    { month: 'Apr', value: 4500 },
    { month: 'May', value: 6000 },
    { month: 'Jun', value: 5500 },
  ];

  const performanceData = [
    { name: 'Development', value: 85 },
    { name: 'Design', value: 92 },
    { name: 'Marketing', value: 78 },
    { name: 'Sales', value: 88 },
    { name: 'Support', value: 95 },
  ];

  const recentActivities = [
    { user: 'John Doe', action: 'completed project', project: 'Website Redesign', time: '2 hours ago' },
    { user: 'Sarah Smith', action: 'created new task', project: 'Mobile App', time: '4 hours ago' },
    { user: 'Mike Johnson', action: 'updated status', project: 'API Integration', time: '6 hours ago' },
    { user: 'Emily Brown', action: 'added comment', project: 'Dashboard UI', time: '8 hours ago' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-secondary-900">Dashboard Overview</h1>
        <p className="text-secondary-600 mt-1">Welcome back! Here's what's happening today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-xl p-6 shadow-sm border border-secondary-200"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center text-white`}>
                {stat.icon}
              </div>
              <div className={`flex items-center space-x-1 text-sm font-medium ${
                stat.positive ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.positive ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
                <span>{stat.change}</span>
              </div>
            </div>
            <div className="text-2xl font-bold text-secondary-900">{stat.value}</div>
            <div className="text-sm text-secondary-600 mt-1">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Line Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white rounded-xl p-6 shadow-sm border border-secondary-200"
        >
          <h3 className="text-lg font-semibold text-secondary-900 mb-4">Monthly Growth</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="month" stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Bar Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-white rounded-xl p-6 shadow-sm border border-secondary-200"
        >
          <h3 className="text-lg font-semibold text-secondary-900 mb-4">Department Performance</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="name" stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <Tooltip />
              <Bar dataKey="value" fill="#3b82f6" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Recent Activity */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="bg-white rounded-xl p-6 shadow-sm border border-secondary-200"
      >
        <h3 className="text-lg font-semibold text-secondary-900 mb-4">Recent Activity</h3>
        <div className="space-y-4">
          {recentActivities.map((activity, index) => (
            <div key={index} className="flex items-start space-x-4 pb-4 border-b border-secondary-100 last:border-0">
              <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-primary-700 font-semibold text-sm">{activity.user.charAt(0)}</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-secondary-900">
                  <span className="font-medium">{activity.user}</span>
                  {' '}{activity.action}{' '}
                  <span className="font-medium">{activity.project}</span>
                </p>
                <p className="text-xs text-secondary-500 mt-1">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Overview;