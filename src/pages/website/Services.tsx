import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../components/website/Navbar';
import Footer from '../../components/website/Footer';
import { Zap, Shield, Globe, TrendingUp, Code, Database, Cloud, Lock } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Zap className="w-12 h-12" />,
      title: 'Digital Transformation',
      description: 'Transform your business operations with cutting-edge digital solutions.',
      features: [
        'Process automation and optimization',
        'Legacy system modernization',
        'Digital strategy consulting',
        'Change management support',
      ],
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: 'Cybersecurity Solutions',
      description: 'Protect your business with enterprise-grade security measures.',
      features: [
        'Security audits and assessments',
        'Threat detection and response',
        'Compliance management',
        '24/7 security monitoring',
      ],
    },
    {
      icon: <Cloud className="w-12 h-12" />,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure tailored to your business needs.',
      features: [
        'Cloud migration services',
        'Multi-cloud management',
        'Cloud-native development',
        'Infrastructure optimization',
      ],
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: 'Data Analytics',
      description: 'Turn data into actionable insights with advanced analytics.',
      features: [
        'Business intelligence solutions',
        'Predictive analytics',
        'Data visualization',
        'Real-time reporting',
      ],
    },
    {
      icon: <Code className="w-12 h-12" />,
      title: 'Custom Software Development',
      description: 'Bespoke software solutions designed for your unique requirements.',
      features: [
        'Web and mobile applications',
        'Enterprise software solutions',
        'API development and integration',
        'Agile development methodology',
      ],
    },
    {
      icon: <Database className="w-12 h-12" />,
      title: 'Database Management',
      description: 'Efficient database solutions for optimal performance.',
      features: [
        'Database design and architecture',
        'Performance optimization',
        'Data migration services',
        'Backup and recovery solutions',
      ],
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: 'IT Consulting',
      description: 'Strategic IT guidance to align technology with business goals.',
      features: [
        'Technology roadmap planning',
        'IT infrastructure assessment',
        'Vendor selection and management',
        'Cost optimization strategies',
      ],
    },
    {
      icon: <Lock className="w-12 h-12" />,
      title: 'Managed IT Services',
      description: 'Comprehensive IT support and management for peace of mind.',
      features: [
        '24/7 technical support',
        'Proactive system monitoring',
        'Regular maintenance and updates',
        'Disaster recovery planning',
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to drive your business forward
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-secondary-200 rounded-xl p-8 hover:shadow-xl transition-shadow"
              >
                <div className="w-20 h-20 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-secondary-900 mb-4">{service.title}</h3>
                <p className="text-secondary-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <svg
                        className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-secondary-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-primary-100 mb-8">
              Let's discuss how our services can help your business thrive
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-primary-700 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
            >
              Contact Us Today
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;