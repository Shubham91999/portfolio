'use client';

import { motion } from 'framer-motion';

import { siteMetadata } from '../../lib/metadata';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { author, social } = siteMetadata;

  const socialLinks = [
    { name: 'GitHub', url: social.github, icon: <FaGithub className="w-5 h-5" /> },
    { name: 'LinkedIn', url: social.linkedin, icon: <FaLinkedin className="w-5 h-5" /> },
    { name: 'LeetCode', url: social.leetcode, icon: <SiLeetcode className="w-5 h-5" /> },
    { name: 'Instagram', url: social.instagram, icon: <FaInstagram className="w-5 h-5" /> },
  ];

  return (
    <footer className="relative dark:bg-black">
      {/* Horizontal Line */}
      <div className="absolute top-0 left-0 right-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-neutral-200 dark:via-neutral-800 to-transparent opacity-80" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center justify-center space-y-6">
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center space-x-8"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>

          {/* Portfolio Source Code Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <a
              href={social.github} // Pointing to main github for now, or specifically a repo if known
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors duration-200"
            >
              View GitHub Profile →
            </a>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-center text-sm text-neutral-600 dark:text-neutral-400">
              © {currentYear} {author}. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
