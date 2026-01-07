import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Calendar, TrendingUp, Users, DollarSign } from 'lucide-react';

const Analytics: React.FC = () => {
  const [dateRange, setDateRange] = useState('Last 30 Days');

  const revenueData = [
    { month: 'Jan', revenue: 45000, expenses: 32000 },
    { month: 'Feb', revenue: 52000, expenses: 35000 },
    { month: 'Mar', revenue: 48000, expenses: 33000 },
    { month: 'Apr', revenue: 61000, expenses: 38000 },
    { month: 'May', revenue: 55000, expenses: 36000 },
    { month: 'Jun', revenue: 67000, expenses: 40000 },
  ];

  const userGrowthData = [
    { month: 'Jan', users: 1200 },
    { month: 'Feb', users: 1450 },
    { month: 'Mar', users: 1680 },
    { month: 'Apr', users: 1920 },
    { month: 'May', users: 2180 },
    { month: 'Jun', users: 2543 },
  ];

  const projectDistribution = [
    { name: 'Completed', value: 45 },
    { name: 'Active', value: 35 },
    { name: 'Pending', value: 20 },
  ];

  const COLORS = ['#10b981', '#3b82f6', '#f59e0b'];

  const stats = [
    { icon: <TrendingUp className="w-6 h-6" />, label: 'Total Revenue', value: '$328,000', change: '+15.3%' },
    { icon: <Users className="w-6 h-6" />, label: 'Active Users', value: '2,543', change: '+23.1%' },
    { icon: <DollarSign className="w-6 h-6" />, label: 'Avg. Project Value', value: '$12,450', change: '+8.7%' },
    { icon: <Calendar className="w-6 h-6" />, label: 'Projects This Month', value: '28', change: '+12.0%' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-secondary-900">Analytics</h1>
          <p className="text-secondary-600 mt-1">Comprehensive insights and performance metrics</p>
        </div>
        <div className="flex items-center space-x-2">
          <Calendar className="text-secondary-400 w-5 h-5" />
          <select
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="px-4 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
          >
            <option>Last 7 Days</option>
            <option>Last 30 Days</option>
            <option>Last 3 Months</option>
            <option>Last Year</option>
          </select>
        </div>
      </div>

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
              <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center">
                {stat.icon}
              </div>
              <span className="text-sm font-medium text-green-600">{stat.change}</span>
            </div>
            <div className="text-2xl font-bold text-secondary-900">{stat.value}</div>
            <div className="text-sm text-secondary-600 mt-1">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white rounded-xl p-6 shadow-sm border border-secondary-200"
        >
          <h3 className="text-lg font-semibold text-secondary-900 mb-4">Revenue vs Expenses</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="month" stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <Tooltip />
              <Legend />
              <Bar dataKey="revenue" fill="#3b82f6" radius={[8, 8, 0, 0]} />
              <Bar dataKey="expenses" fill="#f59e0b" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-white rounded-xl p-6 shadow-sm border border-secondary-200"
        >
          <h3 className="text-lg font-semibold text-secondary-900 mb-4">User Growth</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={userGrowthData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="month" stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <Tooltip />
              <Line type="monotone" dataKey="users" stroke="#10b981" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-white rounded-xl p-6 shadow-sm border border-secondary-200"
        >
          <h3 className="text-lg font-semibold text-secondary-900 mb-4">Project Distribution</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={projectDistribution}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {projectDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm border border-secondary-200"
        >
          <h3 className="text-lg font-semibold text-secondary-900 mb-6">Key Performance Indicators</h3>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <div className="text-3xl font-bold text-secondary-900 mb-2">94.5%</div>
              <div className="text-sm text-secondary-600">Client Satisfaction</div>
              <div className="w-full bg-secondary-200 rounded-full h-2 mt-3">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '94.5%' }} />
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary-900 mb-2">87.2%</div>
              <div className="text-sm text-secondary-600">On-Time Delivery</div>
              <div className="w-full bg-secondary-200 rounded-full h-2 mt-3">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '87.2%' }} />
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary-900 mb-2">91.8%</div>
              <div className="text-sm text-secondary-600">Quality Score</div>
              <div className="w-full bg-secondary-200 rounded-full h-2 mt-3">
                <div className="bg-purple-500 h-2 rounded-full" style={{ width: '91.8%' }} />
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary-900 mb-2">96.3%</div>
              <div className="text-sm text-secondary-600">Team Efficiency</div>
              <div className="w-full bg-secondary-200 rounded-full h-2 mt-3">
                <div className="bg-orange-500 h-2 rounded-full" style={{ width: '96.3%' }} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Analytics;