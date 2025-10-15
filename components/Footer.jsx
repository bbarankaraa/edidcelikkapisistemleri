import Link from "next/link"
import { Separator } from "./ui/separator"
import { Instagram, Mail, MailIcon, Phone } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import Image from "next/image"
import { navItems } from "@/lib/navItems"

const Footer = () => {
  return (
    <div className="">
      <div className="bg-black xl:px-48 p-8 xl:py-24 gap-5 grid md:grid-cols-4">
        <div className="flex flex-col gap-3 text-white">
          <h3 className="font-semibold uppercase">Hakkımızda</h3>
          <Separator />
          <Image src={"/logo.png"} width={1000} height={1000} className="h-24 w-28" alt="Logo" />
          <p>Edid Çelik Kapı Sistemleri; daire kapısı, villa kapısı ve apartman kapısı üretimi yapan firmadır.</p>
        </div>
        <div className="flex flex-col gap-3 text-white">
          <h3 className="font-semibold uppercase">Sayfalar</h3>
          <Separator />
         <nav>
            <ul className="flex flex-col gap-2">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="hover:text-main duration-200"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex flex-col gap-3 text-white">
          <h3 className="font-semibold uppercase">Sosyal</h3>
          <Separator />
          <ul className="flex flex-col gap-2">
              <li>
                <Link href={"https://instagram.com/edit.celikkapi/"} target="_blank" className={"hover:text-main duration-200 flex items-center gap-2"}>
                  <Instagram className="size-5" />
                  <span>@edid.celikkapi</span>
                </Link>
              </li>
              <li>
                <Link href={""} className={"hover:text-main duration-200 flex items-center gap-2"}>
                  <FaWhatsapp className="size-5" />
                  <span>Whatsapp</span>
                </Link>
              </li>
            </ul>
        </div>
        <div className="flex flex-col gap-3 text-white">
          <h3 className="font-semibold uppercase">İletişim</h3>
          <Separator />
          <ul className="flex flex-col gap-2">
              <li>
                <a href="tel:+905012262664" className={"hover:text-main duration-200 flex items-center gap-2"}>
                  <Phone className="size-5" />
                  <span>+90 501 226 26 64</span>
                </a>
              </li>
              <li>
                <a href={"mailto:edidcelikkapisistemleri@gmail.com"} className={"hover:text-main duration-200 flex items-center gap-2"}>
                  <MailIcon className="size-5" />
                  <span>edidcelikkapisistemleri@gmail.com</span>
                </a>
              </li>
            </ul>
        </div>
      </div>
      <div className="bg-black/80 flex items-center justify-center text-center h-12">
        <h4 className="text-gray-400 text-sm">Copyright © - Tüm Hakları Edid Çelik Kapı Sistemleri Şirketine Aittir.</h4>
      </div>
    </div>
  )
}
export default Footer