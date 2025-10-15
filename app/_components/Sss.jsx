import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const Sss = () => {
  return (
    <section className="xl:px-48 px-6 py-12">
      <h2 className="text-3xl font-semibold text-center mb-8 uppercase">
        Sıkça Sorulan Sorular
      </h2>
      <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
        <AccordionItem value="item-1">
          <AccordionTrigger>Kapımın tamiri ne kadar sürer?</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-gray-700">
            <p>
              Kapı tamiri genellikle 30-90 dakika arasında tamamlanır. Arıza türüne ve kapının
              modeline göre süre değişebilir.
            </p>
            <p>
              Acil durumlarda hızlı müdahale için önceden randevu almanız önerilir.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>Hizmetleriniz garantili mi?</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-gray-700">
            <p>
              Evet, yaptığımız tüm tamir ve montaj hizmetleri 6 ay garanti kapsamındadır.
              Herhangi bir problem durumunda ücretsiz destek sunuyoruz.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>Kapımı tamir ettirmek için ne yapmalıyım?</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-gray-700">
            <p>
              Yapmanız gereken tek şey bizimle iletişime geçmek. Telefon veya WhatsApp üzerinden
              arayabilir, bulunduğunuz konumu paylaşabilirsiniz.
            </p>
            <p>
              Ekibimiz en kısa sürede gelip kapınızı kontrol eder ve tamir işlemini başlatır.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>Kapımın tamir maliyeti ne kadar?</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-gray-700">
            <p>
              Tamir maliyeti kapının arızasına ve modeline göre değişir. Önce ücretsiz keşif
              yapıyoruz, ardından net bir fiyat sunuyoruz.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger>Hafta sonu veya gece tamir hizmetiniz var mı?</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-gray-700">
            <p>
              Evet, acil durumlar için hafta sonu ve gece hizmetimiz mevcuttur. Önceden
              arayarak müsaitlik durumunu kontrol edebilirsiniz.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  )
}

export default Sss
