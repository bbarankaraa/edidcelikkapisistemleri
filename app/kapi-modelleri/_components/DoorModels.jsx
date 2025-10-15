"use client"

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
import { doors } from "@/lib/doors"

const DoorModels = () => {
  return (
    <div className="grid md:grid-cols-6 sm:grid-cols-3 grid-cols-2 gap-6">
        {doors.map((door) => (
          <Card
            key={door.id}
            className="shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <CardContent className="relative p-2 group">
              <img
                src={door.image}
                alt={`Kapı modeli ${door.id}`}
                className="w-full h-64 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center rounded-lg transition-opacity duration-300">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="secondary"
                      className="text-black font-semibold bg-white hover:bg-gray-100 cursor-pointer"
                    >
                      Görünüm
                    </Button>
                  </DialogTrigger>

                  <DialogContent className="max-w-3xl p-0 bg-transparent border-none shadow-none">
                    <VisuallyHidden>
                      <DialogTitle>Kapı Görseli {door.id}</DialogTitle>
                    </VisuallyHidden>

                    <img
                      src={door.image}
                      alt={`Kapı modeli ${door.id}`}
                      className="w-full h-auto rounded-lg"
                    />
                  </DialogContent>
                </Dialog>
              </div>
            </CardContent>

            <CardFooter className="flex justify-center">
              <Button
                className="bg-main text-white hover:bg-main/80 cursor-pointer"
                onClick={() => window.open("tel:+905555555555")}
              >
                İletişime Geç
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
  )
}
export default DoorModels