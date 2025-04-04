"use client";

import { motion } from "framer-motion";
import { MessageSquare, Send, ArrowLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function Cosmetology() {
  return (
    <main className="min-h-screen bg-cream">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center gap-2 text-primary hover:text-primary-light">
              <ArrowLeft size={20} />
              <span>Назад</span>
            </Link>
            <div className="flex gap-4">
              <Link
                href="viber://chat?number=%2B380505053186"
                target="_blank"
                className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-accent text-white hover:bg-accent-light transition-colors"
              >
                <MessageSquare size={20} />
                Viber
              </Link>
              <Link 
                href="https://t.me/leraaaaaaaaaaaaaaaaaaaaaaaaa"
                target="_blank"
                className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-primary text-white hover:bg-primary-light transition-colors"
              >
                <Send size={20} />
                Telegram
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-2 md:order-1"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
                Природна краса без компромісів
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Професійні косметологічні процедури з використанням преміальних препаратів. Підкресліть свою індивідуальність та досягніть бажаного результату.
              </p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Link 
                  href="https://t.me/leraaaaaaaaaaaaaaaaaaaaaaaaa"
                  target="_blank" 
                  className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-white rounded-full hover:bg-accent-light transition-colors text-lg"
                >
                  Записатися на консультацію
                  <ChevronRight size={20} />
                </Link>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-1 md:order-2"
            >
              <img
                src="/cosmo/cosmo-3.jpeg"
                alt="Косметологічні процедури"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Problem */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-cream rounded-2xl p-8 md:p-12"
            >
              <h2 className="text-3xl font-bold text-primary mb-6">Ваші естетичні турботи?</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2"></div>
                  <p className="text-lg text-gray-700">Тонкі губи, що потребують об'єму</p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2"></div>
                  <p className="text-lg text-gray-700">Вікові зміни шкіри та зморшки</p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2"></div>
                  <p className="text-lg text-gray-700">Втрата пружності та свіжості обличчя</p>
                </li>
              </ul>
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-cream rounded-2xl p-8 md:p-12"
            >
              <h2 className="text-3xl font-bold text-primary mb-6">Наше рішення</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="text-accent mt-1 flex-shrink-0" size={20} />
                  <p className="text-lg text-gray-700">Індивідуальний підхід та підбір оптимальних процедур</p>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="text-accent mt-1 flex-shrink-0" size={20} />
                  <p className="text-lg text-gray-700">Використання тільки сертифікованих препаратів преміум-класу</p>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="text-accent mt-1 flex-shrink-0" size={20} />
                  <p className="text-lg text-gray-700">Природний результат, що підкреслює вашу красу</p>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Success Story */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 bg-primary/5 rounded-2xl p-8 md:p-12"
          >
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl font-bold text-primary mb-6">Історія успіху</h3>
              <p className="text-lg text-gray-700 mb-8">
                "Довго вагалася щодо збільшення губ, боялася неприродного результату. Лікарь мені допомогів знайти ідеальну форму та об'єм. Результат перевершив усі очікування - губи виглядають природно і гармонійно. Дуже вдячна за професіоналізм та увагу до деталей!"
              </p>
              <p className="text-accent font-semibold">Анна, 32 роки</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-primary mb-4">Чому обирають нас?</h2>
            <p className="text-xl text-gray-600">Ваша краса та безпека - наш головний пріоритет</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                    className="w-8 h-8 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                  <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Преміальні препарати</h3>
              <p className="text-gray-600">Використовуємо тільки сертифіковані препарати від провідних світових брендів</p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                    className="w-8 h-8 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                  <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Індивідуальний підхід</h3>
              <p className="text-gray-600">Розробляємо персональний план догляду з урахуванням особливостей вашої шкіри</p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                    className="w-8 h-8 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                  <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Безпека та досвід</h3>
              <p className="text-gray-600">5+ років досвіду та суворе дотримання протоколів безпеки</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reviews and Cases Section */}
      <section className="py-20 pb-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-primary mb-4">Результати та відгуки</h2>
            <p className="text-xl text-gray-600">Реальні історії наших клієнтів</p>
          </motion.div>

          {/* Before-After Cases */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-primary mb-8">До та після</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-cream rounded-2xl overflow-hidden"
              >
                <div className="relative h-[200px] sm:h-[300px] grid grid-cols-2 gap-2 p-4">
                  <div className='relative'>
                    <img
                        src="/cosmo/res-2.jpg"
                        alt="До лікування"
                        className="w-full object-cover rounded-lg"
                    />
                    <div className="absolute bottom-[-32px] right-4 sm:bottom-[-6px] left-6 bg-white px-4 py-2 rounded-full text-sm font-semibold text-primary">
                      1мл Juvederm
                    </div>
                  </div>
                  <div className='relative'>
                    <img
                        src="/cosmo/res-3.jpg"
                        alt="Після лікування"
                        className="w-full object-cover rounded-lg"
                    />
                    <div className="absolute bottom-[-32px] sm:bottom-[-6px] right-4 left-6 bg-white px-4 py-2 rounded-full text-sm font-semibold text-primary">
                      1мл Stylage
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700">Аугментація губ для надання об’єму та природної форми</p>
                </div>
              </motion.div>

              {/* Case 2 */}
              <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-cream rounded-2xl overflow-hidden"
              >
                <div className="relative h-[200px] sm:h-[300px] grid grid-cols-2 gap-2 p-4">
                  <div className='relative'>
                    <img
                        src="/cosmo/res-5.jpeg"
                        alt="До лікування"
                        className="w-full object-cover rounded-lg sm:h-[80%]"
                        style={{ height: 'calc(100% - 42px)' }}
                    />
                  </div>
                  <div className='relative'>
                    <img
                        src="/cosmo/res-4.jpeg"
                        alt="Після лікування"
                        className="w-full object-cover rounded-lg sm:h-[80%]"
                        style={{ height: 'calc(100% - 42px)' }}
                    />
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700">Ін’єкції ботоксу для розгладження зморшок і омолодження шкіри</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Customer Reviews */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-primary mb-8">Відгуки наших клієнтів</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Review 1 */}
              <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-cream rounded-2xl p-6"
              >
                <div className="flex items-center mb-4">
                  {/*<img*/}
                  {/*    src="/avatar-1.jpg"*/}
                  {/*    alt="Клієнт"*/}
                  {/*    className="w-12 h-12 rounded-full object-cover"*/}
                  {/*/>*/}
                  <div className="ml-4">
                    <h4 className="font-semibold text-primary">Марина, 28 років</h4>
                    <div className="flex text-accent">
                      {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700">"Довго вагалася, чи варто збільшувати губи, але після процедури зрозуміла, що це було найкраще рішення! Все виглядає природно, без ефекту «перекачаних» губ. Лікар працює дуже акуратно, анестезія зробила процедуру майже безболісною. Я в захваті від результату!"</p>
              </motion.div>

              {/* Review 2 */}
              <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-cream rounded-2xl p-6"
              >
                <div className="flex items-center mb-4">
                  {/*<img*/}
                  {/*    src="/avatar-2.jpg"*/}
                  {/*    alt="Клієнт"*/}
                  {/*    className="w-12 h-12 rounded-full object-cover"*/}
                  {/*/>*/}
                  <div className="ml-4">
                    <h4 className="font-semibold text-primary">Ольга, 35 років</h4>
                    <div className="flex text-accent">
                      {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700">"Робила ботокс у зону чола та міжбрів’я – і це просто чудо! Лоб став гладеньким, але обличчя при цьому виглядає живим, без ефекту «маски». Лікар дуже професійний, усе зробив швидко та без болю. Тепер виглядаю свіжіше й молодше!"</p>
              </motion.div>

              {/* Review 3 */}
              <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="bg-cream rounded-2xl p-6"
              >
                <div className="flex items-center mb-4">
                  {/*<img*/}
                  {/*    src="/avatar-3.jpg"*/}
                  {/*    alt="Клієнт"*/}
                  {/*    className="w-12 h-12 rounded-full object-cover"*/}
                  {/*/>*/}
                  <div className="ml-4">
                    <h4 className="font-semibold text-primary">Ірина, 30 років</h4>
                    <div className="flex text-accent">
                      {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700">"Проходила курс мезотерапії для зволоження шкіри, і результат просто вау! Обличчя свіже, тон рівний, зникла тьмяність. Після зими шкіра була дуже сухою, а тепер вона буквально сяє! Буду робити цю процедуру регулярно."</p>
              </motion.div>
            </div>
          </div>

          {/* Certificates and Recognition */}
          {/*<div>*/}
          {/*  <h3 className="text-2xl font-bold text-primary mb-8">Сертифікати та визнання</h3>*/}
          {/*  <div className="grid grid-cols-2 md:grid-cols-4 gap-8">*/}
          {/*    <motion.div*/}
          {/*        initial={{ opacity: 0, scale: 0.95 }}*/}
          {/*        whileInView={{ opacity: 1, scale: 1 }}*/}
          {/*        transition={{ duration: 0.8 }}*/}
          {/*        viewport={{ once: true }}*/}
          {/*        className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow"*/}
          {/*    >*/}
          {/*      <img*/}
          {/*          src="/certificate-1.jpg"*/}
          {/*          alt="Сертифікат"*/}
          {/*          className="w-full h-auto"*/}
          {/*      />*/}
          {/*    </motion.div>*/}
          {/*    <motion.div*/}
          {/*        initial={{ opacity: 0, scale: 0.95 }}*/}
          {/*        whileInView={{ opacity: 1, scale: 1 }}*/}
          {/*        transition={{ duration: 0.8, delay: 0.2 }}*/}
          {/*        viewport={{ once: true }}*/}
          {/*        className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow"*/}
          {/*    >*/}
          {/*      <img*/}
          {/*          src="/certificate-2.jpg"*/}
          {/*          alt="Сертифікат"*/}
          {/*          className="w-full h-auto"*/}
          {/*      />*/}
          {/*    </motion.div>*/}
          {/*    <motion.div*/}
          {/*        initial={{ opacity: 0, scale: 0.95 }}*/}
          {/*        whileInView={{ opacity: 1, scale: 1 }}*/}
          {/*        transition={{ duration: 0.8, delay: 0.4 }}*/}
          {/*        viewport={{ once: true }}*/}
          {/*        className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow"*/}
          {/*    >*/}
          {/*      <img*/}
          {/*          src="/award-1.jpg"*/}
          {/*          alt="Нагорода"*/}
          {/*          className="w-full h-auto"*/}
          {/*      />*/}
          {/*    </motion.div>*/}
          {/*    <motion.div*/}
          {/*        initial={{ opacity: 0, scale: 0.95 }}*/}
          {/*        whileInView={{ opacity: 1, scale: 1 }}*/}
          {/*        transition={{ duration: 0.8, delay: 0.6 }}*/}
          {/*        viewport={{ once: true }}*/}
          {/*        className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow"*/}
          {/*    >*/}
          {/*      <img*/}
          {/*          src="/award-2.jpg"*/}
          {/*          alt="Нагорода"*/}
          {/*          className="w-full h-auto"*/}
          {/*      />*/}
          {/*    </motion.div>*/}
          {/*  </div>*/}
          {/*</div>*/}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-primary mb-4">Часті запитання</h2>
            <p className="text-xl text-gray-600">Відповіді на популярні запитання про косметологічні процедури</p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-sm"
            >
              <h3 className="text-xl font-bold text-primary mb-4">Як довго тримається ефект від ботулінотерапії?</h3>
              <p className="text-gray-700">Ефект від ботулінотерапії зазвичай триває 4-6 місяців. Тривалість залежить від індивідуальних особливостей, дози препарату та зони введення. Для підтримки результату рекомендується повторювати процедуру 2-3 рази на рік.</p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-sm"
            >
              <h3 className="text-xl font-bold text-primary mb-4">Чи болісна процедура контурної пластики губ?</h3>
              <p className="text-gray-700">Процедура проводиться з використанням анестезуючого крему, що мінімізує дискомфорт. Можлива незначна чутливість та набряк протягом 1-3 днів після процедури, що є нормальною реакцією.</p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-sm"
            >
              <h3 className="text-xl font-bold text-primary mb-4">Скільки процедур біоревіталізації потрібно для результату?</h3>
              <p className="text-gray-700">Оптимальний курс складається з 3-4 процедур з інтервалом 2-4 тижні. Для підтримки ефекту рекомендується проводити підтримуючі процедури кожні 6-8 місяців. Конкретні рекомендації залежать від стану шкіри та бажаного результату.</p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-sm"
            >
              <h3 className="text-xl font-bold text-primary mb-4">Які протипоказання до косметологічних процедур?</h3>
              <p className="text-gray-700">Основні протипоказання включають вагітність, період лактації, гострі запальні процеси, аутоімунні захворювання та порушення згортання крові. Точний перелік протипоказань визначається на консультації для кожної конкретної процедури.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-primary mb-4">Вартість послуг</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Прозорі ціни на всі види інєкційних процедур
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Брекет-системи */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white flex flex-col justify-between rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-2xl font-bold text-primary mb-6">Контурна пластика губ</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex justify-between items-center">
                  <span className="text-gray-700">Juvederm Ultra 2 0,5ml</span>
                  <span className="font-semibold text-primary">3800₴</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-gray-700">Juvederm Smile 0,5ml</span>
                  <span className="font-semibold text-primary">4100₴</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-gray-700">Juvederm Ultra 3 1ml</span>
                  <span className="font-semibold text-primary">5500₴</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-gray-700">Volift 1ml</span>
                  <span className="font-semibold text-primary">5700₴</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-gray-700">Neuramis deep 1ml</span>
                  <span className="font-semibold text-primary">4800₴</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-gray-700">Stylage 1ml</span>
                  <span className="font-semibold text-primary">4800₴</span>
                </li>
              </ul>
              <motion.button
                  whileHover={{ scale: 1.02 }}
                  className="w-full px-6 py-3 bg-accent text-white rounded-full hover:bg-accent-light transition-colors"
              >
                Записатись на консультацію
              </motion.button>
            </motion.div>

            {/* Елайнери */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white flex flex-col justify-between rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-2xl font-bold text-primary mb-6">Ботулінотерапія</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex justify-between items-center">
                  <span className="text-gray-700">Лоб + Міжбрівʼя + Очі</span>
                  <span className="font-semibold text-primary">5000₴</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-gray-700">Лоб + Міжбрівʼя</span>
                  <span className="font-semibold text-primary">4300₴</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-gray-700">Міжбрівʼя + Очі</span>
                  <span className="font-semibold text-primary">4000₴</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-gray-700">Міжбрівʼя</span>
                  <span className="font-semibold text-primary">2800₴</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-gray-700">Ясенна посмішка</span>
                  <span className="font-semibold text-primary">2000₴</span>
                </li>
              </ul>
              <motion.button
                  whileHover={{ scale: 1.02 }}
                  className="w-full px-6 py-3 bg-accent text-white rounded-full hover:bg-accent-light transition-colors"
              >
                Записатись на консультацію
              </motion.button>
            </motion.div>

            {/* Додаткові послуги */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white flex flex-col justify-between rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-2xl font-bold text-primary mb-6">Ботулінотерапія</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex justify-between items-center">
                  <span className="text-gray-700">Очі</span>
                  <span className="font-semibold text-primary">3000₴</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-gray-700">Підборіддя</span>
                  <span className="font-semibold text-primary">2000₴</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-gray-700">Губи</span>
                  <span className="font-semibold text-primary">2000₴</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-gray-700">Лікування гіпергідрозу (Пахви/Долоні/Стопи)</span>
                  <span className="font-semibold text-primary">8000₴</span>
                </li>
              </ul>
              <motion.button
                  whileHover={{ scale: 1.02 }}
                  className="w-full px-6 py-3 bg-accent text-white rounded-full hover:bg-accent-light transition-colors"
              >
                Записатись на консультацію
              </motion.button>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white flex flex-col justify-between rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-2xl font-bold text-primary mb-6">Біоревіталізація</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex justify-between items-center">
                  <span className="text-gray-700">Juvederm Volite 1ml<br/><span className='text-xs'>(Курс: 1 раз на 9 місяців)</span></span>
                  <span className="font-semibold text-primary">4000₴</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-gray-700">Jalupro Classic 1ml<br/><span className='text-xs'>(Курс: 4 процедури 1 раз на 2 тижні)</span></span>
                  <span className="font-semibold text-primary">2200₴</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-gray-700">Jalupro Young Eye 1ml<br/><span className='text-xs'>(Курс: 4 процедури 1 раз на 2 тижні)</span></span>
                  <span className="font-semibold text-primary">5100₴</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-gray-700">Rejuran (зона очей) 1ml<br/><span className='text-xs'>(Курс: 3-4 процедури 1 раз на місяць)</span></span>
                  <span className="font-semibold text-primary">3300₴</span>
                </li>
              </ul>
              <motion.button
                  whileHover={{ scale: 1.02 }}
                  className="w-full px-6 py-3 bg-accent text-white rounded-full hover:bg-accent-light transition-colors"
              >
                Записатись на консультацію
              </motion.button>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white flex flex-col justify-between rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-2xl font-bold text-primary mb-6">Біоревіталізація</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex justify-between items-center">
                  <span className="text-gray-700">Rejuran 5 (рубці/постакне) 1ml<br/><span className='text-xs'>(Курс: 3-4 процедури 1 раз на місяць)</span></span>
                  <span className="font-semibold text-primary">3200₴</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-gray-700">Rejuran HB 1ml<br/><span className='text-xs'>(Курс: 3-4 процедури 1 раз на місяць)</span></span>
                  <span className="font-semibold text-primary">3900₴</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-gray-700">Rejuran H 2ml<br/><span className='text-xs'>(Курс: 3-4 процедури 1 раз на місяць)</span></span>
                  <span className="font-semibold text-primary">4900₴</span>
                </li>
              </ul>
              <motion.button
                  whileHover={{ scale: 1.02 }}
                  className="w-full px-6 py-3 bg-accent text-white rounded-full hover:bg-accent-light transition-colors"
              >
                Записатись на консультацію
              </motion.button>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white flex flex-col justify-between rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-2xl font-bold text-primary mb-6">Мезотерапія волосистої ділянки голови</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex justify-between items-center">
                  <span className="text-gray-700">Hair Loss Control</span>
                  <span className="font-semibold text-primary">1100₴</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-gray-700">Hair Restorer Xtra</span>
                  <span className="font-semibold text-primary">1900₴</span>
                </li>
              </ul>
              <motion.button
                  whileHover={{ scale: 1.02 }}
                  className="w-full px-6 py-3 bg-accent text-white rounded-full hover:bg-accent-light transition-colors"
              >
                Записатись на консультацію
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-primary mb-4">Почніть свій шлях до ідеальної посмішки</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Запишіться на безкоштовну консультацію до 18 травня
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-cream rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-primary mb-6">Швидкий зв'язок</h3>
              <div className="space-y-4">
                <Link
                    href="viber://chat?number=%2B380505053186"
                    target="_blank"
                    className="flex items-center gap-3 px-6 py-3 bg-[#25D366] text-white rounded-full hover:bg-opacity-90 transition-colors w-full justify-center"
                >
                  <MessageSquare size={20} />
                  Viber
                </Link>
                <Link
                    href="https://t.me/leraaaaaaaaaaaaaaaaaaaaaaaaa"
                    target="_blank"
                    className="flex items-center gap-3 px-4 py-3 bg-[#0088cc] text-white rounded-full hover:bg-opacity-90 transition-colors w-full justify-center"
                >
                  <Send size={24} />
                  Telegram
                </Link>
              </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-cream rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-primary mb-6">Контактна інформація</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text-primary"
                      width="24"
                      height="24"
                  >
                    <path
                        d="M19.5 15.5a3.5 3.5 0 0 0-4.95 0l-.71.71a12.07 12.07 0 0 1-6.05-6.05l.71-.71a3.5 3.5 0 0 0 0-4.95L6.64 2.36a3.5 3.5 0 0 0-4.95 0A3.5 3.5 0 0 0 0 4.5C0 13.61 7.39 21 16.5 21a3.5 3.5 0 0 0 2.14-.71 3.5 3.5 0 0 0 0-4.95l-1.14-1.14z"/>
                  </svg>
                  <a href="tel:+380505053186" className="text-xl hover:text-primary transition-colors">
                    +380 50 505 31 86
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text-primary"
                      width="24"
                      height="24"
                  >
                    <path
                        d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8zm.5-13h-1v6l4.5 2.7.5-.9-4-2.3z"/>
                  </svg>
                  <span className="text-lg">Пн-Сб: 9:00 - 20:00</span>
                </div>
                <motion.div
                    whileHover={{scale: 1.02}}
                    className="mt-6"
                >
                  <Link
                      href="https://t.me/leraaaaaaaaaaaaaaaaaaaaaaaaa"
                      target="_blank"
                      className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white rounded-full hover:bg-accent-light transition-colors text-lg w-full justify-center"
                  >
                    Безкоштовна консультація
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        width="20"
                        height="20"
                    >
                      <path d="M10 17l5-5-5-5v10z"/>
                    </svg>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/*<motion.div*/}
          {/*    initial={{ opacity: 0, y: 20 }}*/}
          {/*    whileInView={{ opacity: 1, y: 0 }}*/}
          {/*    transition={{ duration: 0.8, delay: 0.2 }}*/}
          {/*    viewport={{ once: true }}*/}
          {/*    className="text-center mt-12"*/}
          {/*>*/}
          {/*  <p className="text-lg text-gray-600">*/}
          {/*    Або залиште заявку, і ми передзвонимо вам протягом 15 хвилин*/}
          {/*  </p>*/}
          {/*  <motion.button*/}
          {/*      whileHover={{ scale: 1.02 }}*/}
          {/*      className="mt-4 px-8 py-3 bg-primary text-white rounded-full hover:bg-primary-light transition-colors text-lg"*/}
          {/*  >*/}
          {/*    Залишити заявку*/}
          {/*  </motion.button>*/}
          {/*</motion.div>*/}
        </div>
      </section>
    </main>
  );
}