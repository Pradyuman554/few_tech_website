'use client'
import React from 'react';
import { motion } from 'framer-motion';

export default function ServicePage() {
  return (
    <div className="bg-black min-h-screen py-10 relative overflow-hidden">
      <motion.div 
        initial={{ y: -100, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ duration: 1 }} 
        className="max-w-5xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-white text-center mb-12">
          Our Services
        </h1>
      </motion.div>
      <div className="space-y-20 max-w-5xl mx-auto px-4">
        <ServiceItem
          title="App Development"
          description="We specialize in building mobile applications that are both robust and user-friendly. Whether it's iOS or Android, our app development team creates seamless, high-performance solutions tailored to meet your business needs."
        />
        <ServiceItem
          title="Web Development"
          description="From websites to complex web applications, we deliver fast, scalable, and responsive solutions. Using the latest technologies, we ensure your web presence stands out and provides the best user experience."
        />
        <ServiceItem
          title="AI Integration"
          description="Harness the power of artificial intelligence to drive innovation in your business. We help integrate AI-powered tools, from chatbots to predictive analytics, enabling smarter decision-making and operational efficiency."
        />
        <ServiceItem
          title="UI/UX Design"
          description="Our design team crafts intuitive, engaging, and aesthetically pleasing user interfaces that ensure a smooth user experience. We focus on creating designs that align with your brand and cater to the needs of your target audience."
        />
        <ServiceItem
          title="VFX"
          description="Our VFX services bring your creative vision to life, whether it's for films, commercials, or digital media. Using cutting-edge technology, we create visually stunning effects that captivate and engage your audience."
        />
      </div>
    </div>
  );
}

function ServiceItem({ title, description }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8, ease: "easeInOut" }} 
      viewport={{ once: true }} 
      className="text-white">
      <motion.h2 
        whileHover={{ scale: 1.1 }} 
        transition={{ type: 'spring', stiffness: 300 }} 
        className="text-4xl font-semibold mb-4 hover:text-gray-300 transition-colors duration-300">
        {title}
      </motion.h2>
      <p className="text-gray-300 text-lg">
        {description}
      </p>
    </motion.div>
  );
}
