

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { Menu } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { navItems } from "@/lib/navItems"

const MobileMenu = () => {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger>
        <Menu
          className="text-white cursor-pointer xl:hidden block rounded-full bg-main p-2 shadow-xl"
          size={42}
        />
      </SheetTrigger>

      <SheetContent side="right" className="bg-white">
        <SheetHeader>
          <SheetTitle className="text-2xl font-semibold text-main text-center">
            Menü
          </SheetTitle>
        </SheetHeader>

        <div className="flex flex-col mt-10">
          {navItems.map((item, index) => (
            <div key={index} className="flex flex-col">
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-xl font-medium text-gray-800 hover:text-main duration-200 py-3 text-center"
              >
                {item.title}
              </Link>
              {index !== navItems.length - 1 && (
                <Separator className="bg-gray-200 my-1" />
              )}
            </div>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileMenu
