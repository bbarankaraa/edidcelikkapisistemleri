import { Phone, Mail, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/button"

const ContactPage = () => {
  return (
    <section className="xl:px-48 px-8 py-16 space-y-12">
      <h1 className="text-4xl font-bold text-center uppercase">İletişim</h1>

      {/* İletişim Kartları */}
      <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
        {/* Telefon */}
        <div className="flex flex-col items-center text-center p-6 rounded-xl shadow-lg bg-white">
          <Phone size={40} className="text-main mb-4" />
          <h2 className="text-xl font-semibold mb-2">Telefon</h2>
          <p className="text-gray-600 mb-4">+90 555 123 4567</p>
          <Button
            className="bg-main text-white hover:bg-main/80 cursor-pointer px-6 py-3"
          >
            Hemen Ara
          </Button>
        </div>

        {/* WhatsApp */}
        <div className="flex flex-col items-center text-center p-6 rounded-xl shadow-lg bg-white">
          <Smartphone size={40} className="text-green-500 mb-4" />
          <h2 className="text-xl font-semibold mb-2">WhatsApp</h2>
          <p className="text-gray-600 mb-4">+90 555 123 4567</p>
          <Button
            className="bg-green-500 text-white hover:bg-green-600 cursor-pointer px-6 py-3"
           
          >
            Mesaj Gönder
          </Button>
        </div>

        {/* Mail */}
        <div className="flex flex-col items-center text-center p-6 rounded-xl shadow-lg bg-white">
          <Mail size={40} className="text-blue-500 mb-4" />
          <h2 className="text-xl font-semibold mb-2">E-posta</h2>
          <p className="text-gray-600 mb-4">info@altinsteel.com</p>
          <Button
            className="bg-blue-500 text-white hover:bg-blue-600 cursor-pointer px-6 py-3"
          >
            Mail Gönder
          </Button>
        </div>
      </div>

      {/* Adres ve Harita */}
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1 p-6 rounded-xl shadow-lg bg-white space-y-4">
          <h2 className="text-2xl font-semibold">Adres</h2>
          <p className="text-gray-600">
            Edid Çelik Kapı Merkezi<br />
            Mahalle Cd. No:12, Şehir / Türkiye
          </p>
          <p className="text-gray-600 font-semibold">Çalışma Saatleri: 09:00 - 18:00</p>
        </div>
        <div className="flex-1 rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.123456789!2d28.123456!3d41.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14xxxxxxxxxxxx%3A0xxxxxxxxxxxxxxx!2sAlt%C4%B1n%20%C3%87elik%20Kap%C4%B1!5e0!3m2!1str!2str!4v1699999999999!5m2!1str!2str"
            width="100%"
            height="600"
            className="border-0 w-full h-full"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  )
}

export default ContactPage
