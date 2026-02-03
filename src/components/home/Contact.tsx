'use client';

import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { CardHoverEffect } from '../ui/card-hover-effect';
import { siteMetadata } from '../../lib/metadata';
import { useTheme } from 'next-themes';

export default function Contact() {
  const { email, phone, location } = siteMetadata;
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section id="contact" className="py-24 relative bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Feel free to reach out for collaborations or just a friendly hello.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Email",
              content: email,
              icon: FaEnvelope,
              link: `mailto:${email}`,
              label: "Mail Me"
            },
            {
              title: "Phone",
              content: phone,
              icon: FaPhone,
              link: `tel:${phone}`,
              label: "Call Me"
            },
            {
              title: "Location",
              content: location,
              icon: FaMapMarkerAlt,
              link: null,
              label: null
            }
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CardHoverEffect className={`${isDark
                ? '!bg-gradient-to-br !from-neutral-900/50 !to-neutral-800/50'
                : '!bg-gradient-to-br !from-white/5 !to-white/10'
                } backdrop-blur-sm !border-0 shadow-lg h-full`}>
                <div className="p-8 text-center flex flex-col items-center justify-center h-full">
                  <item.icon className="w-10 h-10 mb-4 text-violet-500 dark:text-violet-400" />
                  <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-2">
                    {item.title}
                  </p>
                  <p className="text-lg font-medium text-neutral-900 dark:text-white mb-6">
                    {item.content}
                  </p>
                  {item.link && (
                    <motion.a
                      href={item.link}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`inline-flex items-center justify-center gap-2 py-3 px-6 rounded-lg ${isDark
                        ? 'bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500'
                        : 'bg-violet-500 hover:bg-violet-700'
                        } text-white transition-all duration-200 font-medium mt-auto`}
                    >
                      {item.label}
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </motion.a>
                  )}
                </div>
              </CardHoverEffect>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
