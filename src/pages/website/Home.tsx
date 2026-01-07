import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../../components/website/Navbar';
import Footer from '../../components/website/Footer';
import { ArrowRight, CheckCircle, Users, Award, TrendingUp, Zap, Shield, Globe } from 'lucide-react';

const Home: React.FC = () => {
  const services = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Digital Transformation',
      description: 'Transform your business with cutting-edge digital solutions and strategies.',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Cybersecurity',
      description: 'Protect your assets with enterprise-grade security solutions.',
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure tailored to your business needs.',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Data Analytics',
      description: 'Turn data into actionable insights with advanced analytics.',
    },
  ];

  const stats = [
    { icon: <Users className="w-8 h-8" />, value: '500+', label: 'Happy Clients' },
    { icon: <Award className="w-8 h-8" />, value: '1000+', label: 'Projects Completed' },
    { icon: <TrendingUp className="w-8 h-8" />, value: '98%', label: 'Success Rate' },
    { icon: <Globe className="w-8 h-8" />, value: '25+', label: 'Countries Served' },
  ];

  const clients = [
    'Microsoft', 'Google', 'Amazon', 'Apple', 'Meta', 'Netflix'
  ];

  const testimonials = [
    {
      name: 'John Smith',
      role: 'CEO, TechStart Inc.',
      content: 'TechCorp transformed our business operations completely. Their expertise and dedication are unmatched.',
      rating: 5,
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO, Innovation Labs',
      content: 'Outstanding service and support. They delivered beyond our expectations and on time.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Director, Global Solutions',
      content: 'Professional, reliable, and innovative. TechCorp is our go-to partner for all tech solutions.',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wIDI0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00ek0xMiAxNmMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHptMCAyNGMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Transform Your Business with
                <span className="text-primary-300"> Innovation</span>
              </h1>
              <p className="text-xl text-primary-100 mb-8">
                Leading provider of cutting-edge technology solutions. We help businesses thrive in the digital era with innovative strategies and expert execution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-white text-primary-700 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/services"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-700 transition-colors text-center"
                >
                  Our Services
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-primary-500 rounded-2xl blur-3xl opacity-20"></div>
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop"
                  alt="Team collaboration"
                  className="relative rounded-2xl shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-4">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-secondary-900 mb-2">{stat.value}</div>
                <div className="text-secondary-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-secondary-900 mb-4">Our Services</h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              Comprehensive solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">{service.title}</h3>
                <p className="text-secondary-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop"
                alt="Why choose us"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-secondary-900 mb-6">Why Choose TechCorp?</h2>
              <p className="text-lg text-secondary-600 mb-8">
                We combine expertise, innovation, and dedication to deliver exceptional results for our clients.
              </p>
              <div className="space-y-4">
                {[
                  'Industry-leading expertise and experience',
                  'Customized solutions for your unique needs',
                  '24/7 dedicated support and maintenance',
                  'Proven track record of successful projects',
                  'Cutting-edge technology and methodologies',
                  'Transparent communication and reporting',
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span className="text-secondary-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-16 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">Trusted by Industry Leaders</h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center justify-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <span className="text-xl font-semibold text-secondary-600">{client}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-secondary-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-secondary-600">Don't just take our word for it</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-secondary-50 p-8 rounded-xl"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-secondary-700 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-secondary-900">{testimonial.name}</div>
                  <div className="text-sm text-secondary-600">{testimonial.role}</div>
                </div>
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
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-primary-100 mb-8">
              Let's discuss how we can help you achieve your goals
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 bg-white text-primary-700 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
            >
              <span>Contact Us Today</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;