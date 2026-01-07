import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter } from 'lucide-react';

interface Project {
  id: string;
  name: string;
  client: string;
  status: 'Pending' | 'Active' | 'Completed';
  progress: number;
  deadline: string;
  team: number;
}

const Projects: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');

  const projects: Project[] = [
    { id: '1', name: 'Website Redesign', client: 'TechStart Inc.', status: 'Active', progress: 75, deadline: '2024-02-15', team: 5 },
    { id: '2', name: 'Mobile App Development', client: 'Innovation Labs', status: 'Active', progress: 45, deadline: '2024-03-20', team: 8 },
    { id: '3', name: 'API Integration', client: 'Global Solutions', status: 'Pending', progress: 10, deadline: '2024-04-10', team: 3 },
    { id: '4', name: 'Dashboard UI', client: 'DataCorp', status: 'Active', progress: 90, deadline: '2024-01-30', team: 4 },
    { id: '5', name: 'E-commerce Platform', client: 'ShopMart', status: 'Completed', progress: 100, deadline: '2023-12-15', team: 10 },
    { id: '6', name: 'CRM System', client: 'SalesPro', status: 'Active', progress: 60, deadline: '2024-02-28', team: 6 },
    { id: '7', name: 'Marketing Website', client: 'BrandCo', status: 'Completed', progress: 100, deadline: '2023-11-20', team: 4 },
    { id: '8', name: 'Cloud Migration', client: 'Enterprise Inc.', status: 'Pending', progress: 5, deadline: '2024-05-15', team: 7 },
  ];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.client.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'All' || project.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const statuses = ['All', 'Pending', 'Active', 'Completed'];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Active': return 'bg-blue-100 text-blue-800';
      case 'Completed': return 'bg-green-100 text-green-800';
      default: return 'bg-secondary-100 text-secondary-800';
    }
  };

  const getProgressColor = (progress: number) => {
    if (progress >= 75) return 'bg-green-500';
    if (progress >= 50) return 'bg-blue-500';
    if (progress >= 25) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-secondary-900">Projects</h1>
        <p className="text-secondary-600 mt-1">Track and manage all your projects</p>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm border border-secondary-200">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Filter className="text-secondary-400 w-5 h-5" />
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
            >
              {statuses.map(status => (
                <option key={status} value={status}>{status}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="bg-white rounded-xl p-6 shadow-sm border border-secondary-200 hover:shadow-lg transition-shadow"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-semibold text-secondary-900">{project.name}</h3>
              <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getStatusColor(project.status)}`}>
                {project.status}
              </span>
            </div>

            <p className="text-sm text-secondary-600 mb-4">{project.client}</p>

            <div className="mb-4">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-secondary-600">Progress</span>
                <span className="font-medium text-secondary-900">{project.progress}%</span>
              </div>
              <div className="w-full bg-secondary-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all ${getProgressColor(project.progress)}`}
                  style={{ width: `${project.progress}%` }}
                />
              </div>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-secondary-600">Deadline:</span>
                <span className="font-medium text-secondary-900">{project.deadline}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-secondary-600">Team Size:</span>
                <span className="font-medium text-secondary-900">{project.team} members</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;