'use client';

import { motion } from 'framer-motion';
import { Mail, Instagram, Youtube, Facebook, Linkedin, MapPin, Phone, Video } from 'lucide-react';

const socialLinks = [
  { name: 'Instagram', url: 'https://www.instagram.com/bearmedia70', icon: Instagram },
  { name: 'Facebook', url: 'https://www.facebook.com/share/1BhgWafSR2/', icon: Facebook },
  { name: 'TikTok', url: 'https://www.tiktok.com/@bearmediascotland', icon: Video },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/garrylynch70', icon: Linkedin },
  { name: 'YouTube', url: 'https://www.youtube.com/@bearmedia70', icon: Youtube },
];

const contactInfo = {
  phone: '+44 7879 011860',
  email: 'info@bear-media.com',
  location: 'Broxburn, West Lothian EH52 6PH',
  serviceArea: 'Serving clients across Scotland',
};

export const MinimalFooter = () => {
  return (
    <footer className="w-full bg-black border-t border-zinc-800 py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 mb-16 md:mb-20">
          {/* Logo & Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4"
          >
            <span className="text-2xl font-bold text-white">BearMedia</span>
            <p className="text-gray-500 text-sm">Digital strategy and content that converts.</p>
            <div className="space-y-2 text-sm text-zinc-400">
              <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 hover:text-amber-400 transition-colors">
                <Phone size={16} /> {contactInfo.phone}
              </a>
              <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-2 hover:text-amber-400 transition-colors">
                <Mail size={16} /> {contactInfo.email}
              </a>
              <p className="flex items-center gap-2">
                <MapPin size={16} /> {contactInfo.location}
              </p>
              <p className="text-zinc-500 text-xs">{contactInfo.serviceArea}</p>
            </div>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-4"
          >
            <h3 className="text-white font-semibold mb-2">Navigation</h3>
            <ul className="space-y-2">
              {['Home', 'Services', 'Work', 'About', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-amber-400 transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            <h3 className="text-white font-semibold mb-2">Connect</h3>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map(({ name, url, icon: Icon }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-amber-400 transition-colors"
                  title={name}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Google Reviews */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 bg-white/5 rounded-lg p-6">
          <h3 className="text-2xl font-bold text-white mb-6">Client Reviews</h3>
          <div className="flex flex-col gap-4">
            <a
              href="https://share.google/yqaE2C6tZJ82f6lWw"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#D4A830] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#E4BF4A] transition-colors w-fit"
            >
              <span>⭐ See Our 25 Google Reviews</span>
            </a>
            <p className="text-white/70 text-sm">
              We&apos;re proud of the trust our clients have placed in us. Read reviews and testimonials on Google.
            </p>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent my-8"></div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-xs md:text-sm text-gray-500 font-mono">
            © {new Date().getFullYear()} Bear Media. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm">
            <a href="/privacy-policy" className="text-gray-500 hover:text-zinc-300">Privacy</a>
            <a href="/terms-conditions" className="text-gray-500 hover:text-zinc-300">Terms</a>
          </div>
          <p className="text-xs md:text-sm text-gray-500 font-mono">
            Built by Bear Media Strategy
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
