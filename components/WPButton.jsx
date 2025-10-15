import { FaWhatsapp } from "react-icons/fa";
const WPButton = () => {
  return (
    <a href="https://wa.me/905012262664" target="_blank" className="fixed right-2 bottom-2 p-2 rounded-xl z-49 flex items-center justify-center bg-green-400">
        <FaWhatsapp className="text-white" size={42} />
    </a>
  )
}
export default WPButton