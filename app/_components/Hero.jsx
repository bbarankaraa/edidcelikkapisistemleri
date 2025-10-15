"use client"

import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ShieldCheck, Hammer, Sparkles, Wrench } from "lucide-react"
import { motion } from "framer-motion"

const cards = [
  {
    icon: <ShieldCheck size={32} className="text-main" />,
    title: "Yüksek Güvenlik Standartları",
  },
  {
    icon: <Hammer size={32} className="text-main" />,
    title: "Uzun Ömürlü ve Dayanıklı Yapı",
  },
  {
    icon: <Sparkles size={32} className="text-main" />,
    title: "Estetik ve Modern Tasarım",
  },
  {
    icon: <Wrench size={32} className="text-main" />,
    title: "Profesyonel Kapı Tamiri ve Bakım",
  },
]

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 50 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.15, ease: "easeOut" },
  }),
}

const Hero = () => {
  return (
    <section className="xl:px-48 px-8 py-12">
      <div className="flex flex-col gap-3">
        {/* Başlık animasyonu */}
        <motion.h2
          className="text-3xl text-center font-semibold uppercase"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Güvenliğinizi, Estetiği ve Tadilatı Buluşturuyoruz!
        </motion.h2>

        {/* Açıklama */}
        <motion.p
          className="text-gray-600 text-center"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <span className="text-main font-semibold">Edid Çelik Kapı Sistemleri</span> olarak, sadece yeni kapılar üretmiyoruz;
          mevcut kapılarınızı <span className="text-main font-semibold">tamir ediyor</span> ve{" "}
          <span className="text-main font-semibold">yenileyerek</span> ilk günkü şıklığına kavuşturuyoruz.
          Güvenlik, dayanıklılık ve modern tasarımı bir arada sunmak bizim işimiz.
        </motion.p>

        <motion.h2
          className="text-3xl font-semibold uppercase mt-5 text-center"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Neden Edid Çelik Kapı Sistemleri?
        </motion.h2>

        {/* Kartlar */}
        <div className="grid md:grid-cols-4 grid-cols-2 mt-4 gap-4">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
            >
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center justify-center mb-2">
                    {card.icon}
                  </CardTitle>
                  <CardDescription>
                    <h2 className="lg:text-xl text-sm text-center text-black font-semibold">
                      {card.title}
                    </h2>
                  </CardDescription>
                  <CardAction></CardAction>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
