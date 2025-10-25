"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = () => {
  return (
    <div className="mt-5 py-14 bg-[#f6f5f4] w-full rounded-t-3xl">
      <div className="px-6 md:px-16">
        {/* Headings */}
        <div className="text-2xl md:text-4xl font-semibold text-black text-center">
          Have questions?
        </div>
        <div className="text-xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-sky-400 bg-clip-text text-transparent text-center mb-10">
          Get answers.
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="space-y-3">
          <AccordionItem value="item-1">
            <AccordionTrigger>What is Zea.lify?</AccordionTrigger>
            <AccordionContent>
              Zea.lify is a creative clothing and branding studio that designs
              and produces custom and ready-made apparel for creators, teams,
              and brands.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>Can I order custom designs?</AccordionTrigger>
            <AccordionContent>
              Absolutely. You can personalize tees, hoodies, caps, and more with
              your logo, design, or message — perfect for personal use or brand
              promotion.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>How does the process work?</AccordionTrigger>
            <AccordionContent>
              Fill out our contact form or send us a message. Once your design
              and details are confirmed, we begin production and keep you
              updated every step.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>
              Do you take bulk or business orders?
            </AccordionTrigger>
            <AccordionContent>
              Yes. We specialize in bulk and branded orders for companies,
              events, and teams — with flexible pricing and top-quality
              materials.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>How long will my order take?</AccordionTrigger>
            <AccordionContent>
              Standard orders take around 5–10 business days. Custom or bulk
              projects may take longer, depending on your design and quantity.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQS;
