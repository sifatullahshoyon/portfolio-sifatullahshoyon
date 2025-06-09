"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { Inputs } from "@/types/contactForm";
import contactSchema from "./formValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";

import { Loader2 } from "lucide-react";
import { toast } from "sonner";

export type TData = {
  service_id: string;
  template_id: string;
  user_id: string;
  template_params: Inputs;
};

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: z.infer<typeof contactSchema>) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            service_id: process.env.NEXT_PUBLIC_SERVICE_ID,
            template_id: process.env.NEXT_PUBLIC_TEMPLATE_ID,
            user_id: process.env.NEXT_PUBLIC_USER_ID,
            template_params: {
              ...data,
              to_name: "Sifat Ullah Shoyon",
            },
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      toast.success("🎉 Your message was sent successfully!");
      reset(); // Reset the form
    } catch (error) {
      toast.error("❌ Failed to send message. Please try again.");
      console.error("Error sending message:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      data-aos="fade-left"
      data-aos-duration="1000"
      className="lg:col-span-2"
    >
      <Card className="bg-[#130a24] border-[#1e1038] hover:border-[#2e1c58] transition-colors">
        <CardHeader>
          <CardTitle className="text-white text-xl">
            <h4>Contact With Me</h4>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-300 mb-2.5"
                >
                  First Name
                </label>
                <Input
                  id="firstName"
                  type="text"
                  className="bg-[#1a1030] border-[#241844] text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Enter your first name"
                  {...register("firstName")}
                  aria-invalid={errors.firstName ? "true" : "false"}
                />
                {errors.firstName && (
                  <span className="text-red-500 text-xs">
                    {errors.firstName.message}
                  </span>
                )}
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-300 mb-2.5"
                >
                  Last Name
                </label>
                <Input
                  id="lastName"
                  type="text"
                  className="bg-[#1a1030] border-[#241844] text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Enter your last name"
                  {...register("lastName")}
                  aria-invalid={errors.lastName ? "true" : "false"}
                />
                {errors.lastName && (
                  <span className="text-red-500 text-xs">
                    {errors.lastName.message}
                  </span>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2.5"
                >
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  className="bg-[#1a1030] border-[#241844] text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Enter your email"
                  {...register("email")}
                  aria-invalid={errors.email ? "true" : "false"}
                />
                {errors.email && (
                  <span className="text-red-500 text-xs">
                    {errors.email.message}
                  </span>
                )}
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-300 mb-2.5"
                >
                  Phone Number
                </label>
                <Input
                  id="phone"
                  type="tel"
                  className="bg-[#1a1030] border-[#241844] text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="e.g. +8801901236547"
                  {...register("phoneNumber")}
                  aria-invalid={errors.phoneNumber ? "true" : "false"}
                />
                {errors.phoneNumber && (
                  <span className="text-red-500 text-xs">
                    {errors.phoneNumber.message}
                  </span>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300 mb-2.5"
              >
                Your Message
              </label>
              <Textarea
                id="message"
                rows={4}
                className="bg-[#1a1030] border-[#241844] text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Enter your message here..."
                {...register("message")}
                aria-invalid={errors.message ? "true" : "false"}
              />
              {errors.message && (
                <span className="text-red-500 text-xs">
                  {errors.message.message}
                </span>
              )}
            </div>

            <Button
              className="w-full bg-gradient-to-r from-[#6000fa] to-[#9850ff] hover:from-[#4d00c7] hover:to-[#7e3af2] text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 cursor-pointer"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactForm;
