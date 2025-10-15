"use client"

import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const CallBubble = () => {
  return (
    <div className="flex items-end gap-3 fixed bottom-3 left-3 z-49">
      <a href={"tel:+905012262664"} className="w-12 h-12 flex items-center justify-center rounded-full bg-main text-white shadow-lg">
        <Phone size={20} />
      </a>
      <div className="relative bg-white border border-gray-200 rounded-2xl shadow-lg px-4 py-3 max-w-[230px]">
            <p className="text-sm text-gray-800 font-medium mb-2">
          Çelik kapıya veya tamirine ihtiyacınız mı var?
        </p>
      </div>
    </div>
  )
}

export default CallBubble
