"use client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const ContactForm = () => {
  return (
    <div
      data-aos="fade-left"
      data-aos-duration="1000"
      className="lg:col-span-2 "
    >
      <Card className="bg-[#130a24] border-[#1e1038]  hover:border-[#2e1c58] transition-colors">
        <CardHeader>
          <CardTitle className="text-white text-xl">
            <h4>Contact With Me</h4>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
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
                />
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
                />
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
                />
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
                  placeholder="Enter your phone number"
                />
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
              />
            </div>

            <Button
              className="w-full bg-gradient-to-r from-[#6000fa] to-[#9850ff]
            hover:from-[#4d00c7] hover:to-[#7e3af2]
            text-white font-medium py-3 px-6 rounded-lg
            transition-colors duration-300"
            >
              Send Message
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactForm;
