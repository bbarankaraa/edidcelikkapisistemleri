"use client"

import Image from "next/image"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { motion } from "framer-motion"

const servicesData = [
  {
    id: 1,
    image: "/service1.jpg",
    title: "Kapı Tamiri",
    description: "Kırılmış veya arızalı kapılarınızı hızlı ve güvenli bir şekilde tamir ediyoruz.",
  },
  {
    id: 2,
    image: "/service2.webp",
    title: "Kapı Montajı",
    description: "Yeni kapılarınızı özenle ve profesyonelce monte ediyoruz.",
  },
  {
    id: 3,
    image: "/service3.jpeg",
    title: "Estetik Yenileme",
    description: "Eski kapılarınızı estetik ve modern bir görünüme kavuşturuyoruz.",
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" },
  }),
}

const Services = () => {
  return (
    <section className="xl:px-48 px-6 py-12">
      <motion.h2
        className="text-3xl font-semibold text-center mb-12 uppercase"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Servisler
      </motion.h2>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {servicesData.map((service, index) => (
          <motion.div
            key={service.id}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Card className="hover:shadow-lg hover:scale-105 transition duration-300 text-center rounded-2xl overflow-hidden">
              <CardHeader className="px-4">
                <Image
                  src={service.image}
                  alt={service.title}
                  height={1000}
                  width={1000}
                  className="object-cover rounded-t-lg w-full h-48"
                />
                <CardTitle className="text-xl font-semibold mt-4">{service.title}</CardTitle>
                <CardDescription className="text-gray-600 mt-2">
                  {service.description}
                </CardDescription>
              </CardHeader>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Services
