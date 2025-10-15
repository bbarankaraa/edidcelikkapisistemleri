

import Image from "next/image"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShieldCheck, Hammer, Wrench, Sparkles } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: <ShieldCheck size={32} className="text-main" />,
    title: "Güvenli Tamir ve Bakım",
    description: "Kapınızın güvenliğini artıracak hızlı ve profesyonel tamir hizmeti.",
  },
  {
    icon: <Hammer size={32} className="text-main" />,
    title: "Hızlı ve Dayanıklı Çözümler",
    description: "Kırılma veya arızalara karşı dayanıklı çözümler sunuyoruz.",
  },
  {
    icon: <Sparkles size={32} className="text-main" />,
    title: "Estetik Yenileme",
    description: "Eski kapınızı ilk günkü gibi estetik ve şık hale getiriyoruz.",
  },
  {
    icon: <Wrench size={32} className="text-main" />,
    title: "Kolay Kurulum ve Servis",
    description: "Kapı montajı ve bakımında kolaylık ve güven veriyoruz.",
  },
]

const FixDoorPage = () => {
  return (
    <section className="xl:px-48 px-12 py-16 space-y-16">
      {/* Başlık + Görsel */}
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Metin */}
        <div className="lg:w-1/2 space-y-6">
          <h1 className="text-5xl font-bold text-gray-900">
            Kapı Tamir ve Bakım Hizmetleri
          </h1>
          <p className="text-gray-700 text-lg">
            Kapınızda arıza mı var? Dayanıklı, hızlı ve estetik çözümlerle kapınızı ilk günkü gibi yapıyoruz.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 mt-6">
            <Button
              className="bg-main text-white hover:bg-main/80 cursor-pointer px-8 py-4 text-lg"
            >
              <a href="tel:+905012262664">Hemen Ara</a>
            </Button>
            <Button
              className="bg-green-500 text-white hover:bg-green-600 cursor-pointer px-8 py-4 text-lg"
            >
              <Link href="https://wa.me/905012262664" target="_blank">
              WhatsApp ile İletişim
              </Link>
            </Button>
          </div>
        </div>

        {/* Görsel */}
        <div className="lg:w-1/2 w-full flex justify-center">
          <Image
            src="/tamir.avif"
            alt="Kapı Tamir"
            width={1000}
            height={1000}
            className="rounded-lg shadow-2xl object-cover h-96 w-full lg:h-[450px] lg:w-auto"
          />
        </div>
      </div>

      {/* Hizmet Kartları */}
      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8">
        {services.map((service, index) => (
          <Card
            key={index}
            className="hover:shadow-lg transition-shadow duration-300"
          >
            <CardHeader className="flex flex-col items-center text-center gap-4 p-6">
              {service.icon}
              <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
              <CardDescription className="text-gray-600">{service.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default FixDoorPage
