"use client";

import { motion } from "framer-motion";
import { MessageSquare, Send, ArrowLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function Orthodontics() {
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
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-accent text-white hover:bg-accent-light transition-colors"
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
                Ідеальна посмішка - це реальність
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Сучасні методи ортодонтії та індивідуальний підхід для досягнення бездоганного результату. Довіртеся досвідченим спеціалістам.
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
                src="./ortho/orto-2.jpg"
                alt="Ортодонтичне лікування"
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
              <h2 className="text-3xl font-bold text-primary mb-6">Ваші проблеми з посмішкою?</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2"></div>
                  <p className="text-lg text-gray-700">Нерівні зуби, що впливають на впевненість</p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2"></div>
                  <p className="text-lg text-gray-700">Неправильний прикус, що спричиняє дискомфорт</p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2"></div>
                  <p className="text-lg text-gray-700">Складнощі з чищенням зубів через їх розташування</p>
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
                  <p className="text-lg text-gray-700">Індивідуальний план лікування з використанням сучасних технологій</p>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="text-accent mt-1 flex-shrink-0" size={20} />
                  <p className="text-lg text-gray-700">Комфортне та безболісне вирівнювання зубів</p>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="text-accent mt-1 flex-shrink-0" size={20} />
                  <p className="text-lg text-gray-700">Регулярний моніторинг прогресу та корекція плану за потреби</p>
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
                "Я завжди соромилася своєї посмішки через криві зуби. Після року лікування в ORTOLINE моя посмішка повністю змінилася! Тепер я можу впевнено посміхатися на фотографіях та почуваюся набагато впевненіше. Професійний підхід та турбота команди зробили процес легким та комфортним."
              </p>
              <p className="text-accent font-semibold">Марія, 28 років</p>
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
            <p className="text-xl text-gray-600">Ваш комфорт та результат - наш головний пріоритет</p>
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
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">5+ років досвіду</h3>
              <p className="text-gray-600">Багаторічний досвід та постійне вдосконалення навичок</p>
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
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Сучасне обладнання</h3>
              <p className="text-gray-600">Використання передових технологій та інноваційних методик лікування</p>
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
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Гарантія результату</h3>
              <p className="text-gray-600">Чіткий план лікування та гарантована якість на кожному етапі</p>
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
              {/* Case 1 */}
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
                        src="/ortho/res-1.jpeg"
                        alt="До лікування"
                        className="w-full object-cover rounded-lg"
                    />
                    <div className="absolute bottom-[-32px] right-4 sm:bottom-[-6px] left-6 bg-white px-4 py-2 rounded-full text-sm font-semibold text-primary">
                      18 місяців лікування
                    </div>
                  </div>
                  <div className='relative'>
                    <img
                        src="/ortho/res-2.jpeg"
                        alt="Після лікування"
                        className="w-full object-cover rounded-lg"
                    />
                    <div className="absolute bottom-[-32px] sm:bottom-[-6px] right-4 left-6 bg-white px-4 py-2 rounded-full text-sm font-semibold text-primary">
                      9 місяців лікування
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700">Корекція прикусу та вирівнювання зубного ряду за допомогою брекет-системи</p>
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
                        src="/ortho/res-3.jpeg"
                        alt="До лікування"
                        className="w-full object-cover rounded-lg"
                    />
                    <div className="absolute bottom-[-6px] sm:bottom-12 right-4 left-6 bg-white px-4 py-2 rounded-full text-sm font-semibold text-primary">
                      14 місяців лікування
                    </div>
                  </div>
                  <div className='relative'>
                    <img
                        src="/ortho/res-6.jpeg"
                        alt="Після лікування"
                        className="w-full object-cover rounded-lg sm:h-[80%]"
                        style={{ height: 'calc(100% - 42px)' }}
                    />
                    <div className="absolute bottom-[-6px] sm:bottom-12 right-4 left-6 bg-white px-4 py-2 rounded-full text-sm font-semibold text-primary">
                      18 місяців лікування
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700">Вирівнювання зубів за допомогою металевих та керамічних брекетів</p>
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
                    <h4 className="font-semibold text-primary">Олена Петренко</h4>
                    <div className="flex text-accent">
                      {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700">"Проходила ортодонтичне лікування у цього спеціаліста, і результат перевершив мої очікування! Брекети носила трохи більше року, і тепер моя посмішка ідеальна. Лікар дуже уважний, завжди пояснював кожен етап лікування. Дякую за чудову роботу!"</p>
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
                    <h4 className="font-semibold text-primary">Максим Коваленко</h4>
                    <div className="flex text-accent">
                      {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700">"Довго сумнівалася, чи варто ставити брекети, але завдяки професіоналізму лікаря всі переживання швидко зникли. Лікування було комфортним, а головне – ефективним. Тепер не можу намилуватися своєю посмішкою! Рекомендую всім, хто хоче мати рівні зуби!"</p>
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
                    <h4 className="font-semibold text-primary">Анна Мельник</h4>
                    <div className="flex text-accent">
                      {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700">"Дуже задоволена результатом ортодонтичного лікування! Спочатку було страшно, але лікар детально пояснив процес, і все пройшло чудово. Посмішка стала рівною, і це додало мені впевненості. Велике спасибі!"</p>
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
            <p className="text-xl text-gray-600">Відповіді на популярні запитання про ортодонтичне лікування</p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-sm"
            >
              <h3 className="text-xl font-bold text-primary mb-4">Скільки часу займає лікування брекетами?</h3>
              <p className="text-gray-700">Тривалість лікування індивідуальна та залежить від складності випадку. В середньому, процес триває від 1 до 2 років. На першій консультації лікар зможе визначити приблизний термін саме для вашого випадку.</p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-sm"
            >
              <h3 className="text-xl font-bold text-primary mb-4">Чи боляче носити брекети?</h3>
              <p className="text-gray-700">Перші кілька днів після встановлення та кожного коригування може відчуватися незначний дискомфорт. Це нормально і швидко минає. Ми надаємо рекомендації щодо зменшення дискомфорту та адаптації.</p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-sm"
            >
              <h3 className="text-xl font-bold text-primary mb-4">Які обмеження в їжі при носінні брекетів?</h3>
              <p className="text-gray-700">Слід уникати твердої, липкої та занадто жорсткої їжі, яка може пошкодити брекет-систему. Детальні рекомендації щодо харчування ви отримаєте після встановлення брекетів.</p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-sm"
            >
              <h3 className="text-xl font-bold text-primary mb-4">Чи можна встановити брекети в будь-якому віці?</h3>
              <p className="text-gray-700">Так, вікових обмежень для ортодонтичного лікування немає. Головне - здорові зуби та ясна. У нашій практиці є успішні випадки лікування пацієнтів різного віку.</p>
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
              Прозорі ціни на всі види ортодонтичного лікування
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Брекет-системи */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-2xl font-bold text-primary mb-6">Брекет-системи <span className='text-sm font-medium'>(За щелепу)</span></h3>
              <ul className="space-y-4 mb-8">
                <li className="flex justify-between items-center">
                  <span className="text-gray-700">Металеві брекети</span>
                  <span className="font-semibold text-primary">15.000₴</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-gray-700">Металеві самолігуючі</span>
                  <span className="font-semibold text-primary">20.000₴</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-gray-700">Керамічні брекети</span>
                  <span className="font-semibold text-primary">25.000₴</span>
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
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-2xl font-bold text-primary mb-6">Invisalign</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex justify-between items-center">
                  <span className="text-gray-700">Invisalign Full</span>
                  <span className="font-semibold text-primary">від 3600$</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-gray-700">Invisalign Lite</span>
                  <span className="font-semibold text-primary">від 2300$</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-gray-700">Express</span>
                  <span className="font-semibold text-primary">від 1900$</span>
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
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-2xl font-bold text-primary mb-6">Додаткові послуги</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex justify-between items-center">
                  <span className="text-gray-700">Консультація</span>
                  <span className="font-semibold text-primary">500₴</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-gray-700">Діагностика та план лікування</span>
                  <span className="font-semibold text-primary">2000₴</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-gray-700">Професійна гігієна</span>
                  <span className="font-semibold text-primary">від 1000₴</span>
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