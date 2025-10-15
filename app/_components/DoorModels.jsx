"use client"

import { useState } from "react"
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import Link from "next/link"
import { motion } from "framer-motion"
import { doors } from "@/lib/doors"

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
}

const DoorModels = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <section className="xl:px-48 px-8 py-12">
      {/* Başlık animasyonu */}
      <motion.h2
        className="text-3xl font-semibold text-center mb-8 uppercase"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Kapı Modellerimiz
      </motion.h2>

      {/* Kartlar */}
      <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-6">
        {doors.slice(0, 10).map((door, index) => (
          <motion.div
            key={door.id}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Card className="shadow-md hover:shadow-xl transition-shadow duration-300">
              <CardContent className="relative p-2 group">
                <img
                  src={door.image}
                  alt={`Kapı ${door.id}`}
                  className="w-full h-64 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center rounded-lg transition-opacity duration-300">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="secondary"
                        className="text-black font-semibold bg-white hover:bg-gray-100 cursor-pointer"
                        onClick={() => setSelectedImage(door.image)}
                      >
                        Görünüm
                      </Button>
                    </DialogTrigger>

                    {/* Modal İçeriği */}
                    <DialogContent className="max-w-3xl p-0 bg-transparent border-none shadow-none">
                      <VisuallyHidden>
                        <DialogTitle>Kapı Görseli {door.id}</DialogTitle>
                      </VisuallyHidden>

                      <img
                        src={selectedImage ?? ""}
                        alt={`Kapı ${door.id}`}
                        className="w-full h-auto rounded-lg"
                      />
                    </DialogContent>
                  </Dialog>
                </div>
              </CardContent>

              <CardFooter className="flex justify-center">
                <a href="tel:+905012262664" className="bg-main text-white hover:bg-main/80 cursor-pointer px-3 py-1 rounded-md">
                  Fiyat Al
                </a>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Daha Fazlasını Gör Butonu */}
      <motion.div
        className="flex justify-center mt-10"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true }}
      >
        <Link href="/kapi-modelleri">
          <Button
            size="lg"
            className="bg-main text-white hover:bg-main/80 px-8 py-5 text-lg rounded-xl cursor-pointer"
          >
            Daha Fazlasını Gör
          </Button>
        </Link>
      </motion.div>
    </section>
  )
}

export default DoorModels
