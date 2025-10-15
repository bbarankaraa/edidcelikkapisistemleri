"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

const textVariants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

const imageVariants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
  },
}

const FixDoor = () => {
  return (
    <section className="xl:px-48 px-6 py-12 flex flex-col lg:flex-row items-center justify-between gap-10">
      {/* Yazı kısmı */}
      <motion.div
        className="space-y-6 lg:w-1/2"
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
          Edid Çelik Kapı Sistemleri
        </h1>
        <p className="text-gray-700 text-lg sm:text-xl">
          Sadece kapı satmıyoruz, mevcut kapılarınızı{" "}
          <span className="text-main font-semibold">tamir ediyor</span> ve{" "}
          <span className="text-main font-semibold">yenileyerek</span> ilk günkü
          şıklığına kavuşturuyoruz. Güvenli, dayanıklı ve estetik çözümler
          sunuyoruz.
        </p>
        <Link
          href={"/iletisim"}
          className="bg-main text-white hover:bg-main/80 cursor-pointer px-4 py-2 rounded-lg inline-block transition-all duration-300"
        >
          İletişime Geç
        </Link>
      </motion.div>

      {/* Görsel */}
      <motion.div
        className="lg:w-1/2 w-full flex justify-center"
        variants={imageVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Image
          src={"/tamir.avif"}
          width={1000}
          height={1000}
          className="rounded-lg shadow-2xl object-cover h-64 w-full lg:h-[400px] lg:w-auto"
          alt="Kapı tamiri"
        />
      </motion.div>
    </section>
  )
}

export default FixDoor
