"use client";

import { motion } from "framer-motion";
import { MessageSquare, Send } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="relative sm:h-screen pt-32 sm:pt-0 flex items-center justify-center bg-gradient-to-b from-cream to-white">
        <div className="absolute top-0 left-0 w-full p-6">
          <nav className="max-w-7xl mx-auto flex justify-between items-center">
            {/*<h1 className="text-2xl mr-3 font-playfair font-bold text-primary"><span style={{ color: '#7B1FA2' }}>ORTO</span><span style={{ color: '#1976D2' }}>LINE</span></h1>*/}
            <h1 className="text-2xl font-playfair font-bold text-primary" style={{
              color: 'transparent',
              backgroundClip: 'text',
              backgroundImage: `linear-gradient(to right, #7B1FA2, #1976D2)`,
            }}>ORTOLINE</h1>
            <div className="flex gap-4">
              <Link
                href="viber://chat?number=%2B380505053186"
                target="_blank"
                className="flex items-center gap-2 px-2 py-1 text-xs sm:text-xl sm:px-4 sm:py-2 rounded-full bg-accent text-white hover:bg-accent-light transition-colors"
              >
                <MessageSquare size={20} />
                Viber
              </Link>
              <Link 
                href="https://t.me/leraaaaaaaaaaaaaaaaaaaaaaaaa"
                target="_blank"
                className="flex items-center gap-2 px-2 py-1 text-xs sm:text-xl sm:px-4 sm:py-2 rounded-full bg-primary text-white hover:bg-primary-light transition-colors"
              >
                <Send size={20} />
                Telegram
              </Link>
            </div>
          </nav>
        </div>

        <div className="text-center px-4">
          <motion.h2 
            className="text-4xl md:text-6xl font-playfair font-bold text-primary mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Ваша Усмішка - Наша Турбота
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Обирайте професійні послуги для вашої краси та здоров'я
          </motion.p>
          
          <motion.div 
            className="flex flex-col md:flex-row gap-8 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="/orthodontics" className="inline-block">
              <motion.div 
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <img 
                  src="/ortho/ortho-1.jpg"
                  alt="Ортодонтія" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-8">
                  <h3 className="text-2xl font-playfair font-bold text-primary mb-3">Ортодонтія</h3>
                  <p className="text-gray-600">Професійне вирівнювання зубів та корекція прикусу</p>
                </div>
              </motion.div>
            </Link>

            <Link href="/cosmetology" className="inline-block">
              <motion.div 
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <img 
                  src="/cosmo/cosmo-1.png"
                  alt="Косметологія" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-8">
                  <h3 className="text-2xl font-playfair font-bold text-primary mb-3">Косметологія</h3>
                  <p className="text-gray-600">Професійні ін'єкції та збільшення губ</p>
                </div>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}