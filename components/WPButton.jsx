import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
const WPButton = () => {
  return (
    <Link href={""} className="fixed right-2 bottom-2 p-2 rounded-xl z-49 flex items-center justify-center bg-green-400">
        <FaWhatsapp className="text-white" size={42} />
    </Link>
  )
}
export default WPButton