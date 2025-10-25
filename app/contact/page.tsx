"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navbar from "@/components/navbar";
import { motion } from "framer-motion";
import { PiSmiley } from "react-icons/pi";
import Footer from "../footer";

// Zod form validation schema
const FormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Enter a valid email"),
  service: z.enum(["Custom Design", "Ready-Made Order", "Bulk Order", "Other"]),
  message: z.string().min(5, "Please enter a short message"),
});

type FormValues = z.infer<typeof FormSchema>;

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // React hook form
  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      service: "Custom Design",
      message: "",
    },
  });

  async function onSubmit(data: FormValues) {
    try {
      setLoading(true);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Submission failed");
      setSubmitted(true);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className="min-h-screen bg-black text-white relative overflow-hidden">
        {/* ✅ Navbar works fully (links to homepage sections) */}
        <Navbar
          scrollToWebsiteDesign={() => (window.location.href = "/#website")}
          scrollToGraphicDesign={() => (window.location.href = "/#graphics")}
          scrollToShopifyStores={() => (window.location.href = "/#shopify")}
          scrollToBrands={() => (window.location.href = "/#brands")}
          scrollToServices={() => (window.location.href = "/#services")}
        />

        {/* Hero Section */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center py-8 px-6"
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Let’s Create Together.
          </h1>
          <p className="text-neutral-400 mt-4 max-w-2xl mx-auto text-md">
            Whether you want custom-branded merch or premium streetwear,
            Zea.lify’s team is ready to bring your vision to life.
          </p>
        </motion.div>

        {/* Contact Form */}
        <div className="flex justify-center items-start px-6 md:px-0 pb-20">
          {!submitted ? (
            <motion.form
              onSubmit={form.handleSubmit(onSubmit)}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full md:w-2/3 lg:w-1/2 bg-zinc-900 border border-zinc-800 rounded-3xl p-10 space-y-6 shadow-lg"
            >
              <div>
                <label className="block mb-2 text-sm text-neutral-400">
                  Name
                </label>
                <Input
                  {...form.register("name")}
                  className="bg-zinc-800 border-none focus:ring-2 focus:ring-white text-white"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 text-sm text-neutral-400">
                  Email
                </label>
                <Input
                  {...form.register("email")}
                  className="bg-zinc-800 border-none focus:ring-2 focus:ring-white text-white"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 text-sm text-neutral-400">
                  What are you interested in?
                </label>
                <select
                  {...form.register("service")}
                  className="w-full bg-zinc-800 text-white rounded-md p-2 focus:ring-2 focus:ring-white"
                  required
                >
                  <option value="Custom Design">Custom Design</option>
                  <option value="Ready-Made Order">Ready-Made Order</option>
                  <option value="Bulk Order">Bulk Order</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block mb-2 text-sm text-neutral-400">
                  Message
                </label>
                <Textarea
                  {...form.register("message")}
                  className="bg-zinc-800 border-none focus:ring-2 focus:ring-white text-white"
                  rows={4}
                />
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-white text-black hover:bg-zinc-300 transition-all"
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center flex flex-col items-center justify-center py-20"
            >
              <PiSmiley className="text-6xl text-neutral-400 mb-6" />
              <h2 className="text-2xl font-semibold mb-2">Message received!</h2>
              <p className="text-neutral-400 max-w-md">
                Thanks for reaching out! We’ll contact you soon about your
                request.
              </p>
            </motion.div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
