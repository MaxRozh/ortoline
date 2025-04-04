import './globals.css';
import type { Metadata } from 'next';
import { Playfair_Display, Montserrat } from 'next/font/google';
import Link from "next/link";
import { MessageSquare, Send } from "lucide-react";

const playfair = Playfair_Display({ 
  subsets: ['latin', 'cyrillic'],
  variable: '--font-playfair',
});

const montserrat = Montserrat({ 
  subsets: ['latin', 'cyrillic'],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: 'Ortoline - Ортодонтія та Косметологія',
  description: 'Професійні послуги ортодонтії та косметології в Києві',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="uk">
      <body className={`${montserrat.variable} ${playfair.variable} ${montserrat.className} bg-[#FDF8F3]`}>
        {children}

        {/* Footer */}
        <footer className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Brand and Description */}
              <div className="space-y-4">
                <h3 className="text-2xl font-playfair font-bold text-primary" style={{
                  color: 'transparent',
                  backgroundClip: 'text',
                  backgroundImage: `linear-gradient(to right, #7B1FA2, #1976D2)`,
                }}>ORTOLINE</h3>
                <p className="text-gray-600">
                  Професійні послуги ортодонтії та косметології в Києві. Ми допомагаємо створити досконалу посмішку.
                </p>
              </div>

              {/* Services */}
              <div className="space-y-4">
                <h4 className="text-lg font-bold text-primary">Послуги</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="/orthodontics" className="text-gray-600 hover:text-primary transition-colors">
                      Ортодонтія
                    </Link>
                  </li>
                  <li>
                    <Link href="/cosmetology" className="text-gray-600 hover:text-primary transition-colors">
                      Косметологія
                    </Link>
                  </li>
                  <li>
                    <Link href="/orthodontics#braces" className="text-gray-600 hover:text-primary transition-colors">
                      Брекет-системи
                    </Link>
                  </li>
                  <li>
                    <Link href="/orthodontics#aligners" className="text-gray-600 hover:text-primary transition-colors">
                      Елайнери
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <h4 className="text-lg font-bold text-primary">Контакти</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-gray-600">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5"
                    >
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    <span>вул. Туровська, 29, Київ</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5"
                    >
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                    <a href="mailto:Lera0_6shev@ukr.nеt" className="hover:text-primary transition-colors">
                      Lera0_6shev@ukr.nеt
                    </a>
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5"
                    >
                      <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 0 0-1.02.24l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 12h2a7 7 0 0 0-7-7v2a5 5 0 0 1 5 5z"/>
                    </svg>
                    <a href="tel:+380505053186" className="hover:text-primary transition-colors">
                      +380 50 505 31 86
                    </a>
                  </li>
                </ul>
              </div>

              {/* Working Hours */}
              <div className="space-y-4">
                <h4 className="text-lg font-bold text-primary">Графік роботи</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex justify-between">
                    <span>Будні:</span>
                    <span style={{ textAlign: 'end' }}>9:00 - 20:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Субота:</span>
                    <span style={{ textAlign: 'end' }}>10:00 - 18:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Неділя:</span>
                    <span style={{ textAlign: 'end' }}>Вихідний</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex gap-4">
                  <Link
                      href="viber://chat?number=%2B380505053186"
                      target="_blank"
                      className="text-gray-600 hover:text-accent transition-colors"
                  >
                    <MessageSquare size={24} />
                  </Link>
                  <Link
                      href="https://t.me/leraaaaaaaaaaaaaaaaaaaaaaaaa"
                      target="_blank"
                      className="text-gray-600 hover:text-primary transition-colors"
                  >
                    <Send size={24} />
                  </Link>
                </div>
                <div className="text-gray-600 text-sm">
                  © {new Date().getFullYear()} ORTOLINE. Всі права захищені.
                </div>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}