"use client"

import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import CountUp from "react-countup"
import { IoPerson, IoHammer, IoRibbon, IoCheckmarkCircle } from "react-icons/io5"
import { motion } from "framer-motion"

export const statsContent = [
  {
    id: 1,
    icon: <IoPerson size={32} className="text-main" />,
    text: "Mutlu Müşteri",
    value: 1200,
  },
  {
    id: 2,
    icon: <IoHammer size={32} className="text-main" />,
    text: "Tamir Edilen Kapı",
    value: 500,
  },
  {
    id: 3,
    icon: <IoRibbon size={32} className="text-main" />,
    text: "Yapılan Montaj",
    value: 850,
  },
  {
    id: 4,
    icon: <IoCheckmarkCircle size={32} className="text-main" />,
    text: "Memnuniyet Oranı",
    value: 99,
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
}

const Stats = () => {
  return (
    <section className="xl:px-48 px-6 py-12">
      {/* Başlık animasyonu */}
      <motion.h2
        className="text-3xl font-semibold text-center mb-8 uppercase"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        İstatistiklerimiz
      </motion.h2>

      {/* Kartlar */}
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-5">
        {statsContent.map((stat, index) => (
          <motion.div
            key={stat.id}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Card className="duration-200 hover:scale-105 hover:shadow-2xl">
              <CardHeader>
                <CardTitle className="flex items-center justify-center mb-2">
                  {stat.icon}
                </CardTitle>
                <CardDescription>
                  <h2 className="lg:text-xl text-sm text-center text-black font-semibold">
                    {stat.text}
                  </h2>
                  <div className="flex items-center justify-center mt-2">
                    <CountUp
                      enableScrollSpy
                      className="lg:text-2xl text-lg font-bold text-main"
                      end={stat.value}
                      duration={2.5}
                    />
                    <span className="ml-1 text-main font-bold">+</span>
                  </div>
                </CardDescription>
                <CardAction />
              </CardHeader>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Stats
