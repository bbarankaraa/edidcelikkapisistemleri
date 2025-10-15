import { Mail, Phone } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa";

import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import Link from "next/link";


const Topbar = () => {
    return (
        <div className="xl:px-48 bg-main flex items-center md:justify-end justify-center py-2">
            <div className="flex items-center space-x-3">
                <Tooltip>
                    <TooltipTrigger asChild>
                        <a href="mailto:edidcelikkapisistemleri@gmail.com" className="flex items-center text-sm space-x-1 text-white font-semibold hover:text-white cursor-pointer">
                            <Mail size={18} />
                            <h6>İLETİŞİM</h6>
                        </a>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>edidcelikkapisistemleri@gmail.com</p>
                    </TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <a href="tel:+905012262664" className="flex items-center text-sm space-x-1 text-customgray font-semibold hover:text-white cursor-pointer">
                            <Phone size={18} />
                            <h6>0 501 226 26 64</h6>
                        </a>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>0 501 226 26 64</p>
                    </TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link href="https://wa.me/905012262664" target="_blank" className="flex items-center text-sm space-x-1 text-customgray font-semibold hover:text-white cursor-pointer">
                            <FaWhatsapp size={18} />
                            <h6>WHATSAPP</h6>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>+90 501 226 26 64</p>
                    </TooltipContent>
                </Tooltip>
            </div>
        </div>
    )
}
export default Topbar