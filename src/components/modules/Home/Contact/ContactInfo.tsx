import SocialLinks from "@/components/shared/SocialLinks";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactInfo() {
  return (
    <Card
      data-aos="fade-right"
      data-aos-duration="1000"
      className="bg-[#130a24] border-[#1e1038] hover:border-[#2e1c58] transition-colors"
    >
      <CardHeader>
        <CardTitle className="text-white text-xl">
          <h4>Contact Information</h4>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 items-center">
        {/* Location */}
        <div className="flex items-center gap-4">
          <div className="p-2 rounded-lg bg-blue-900/20 mt-1">
            <MapPin className="h-5 w-5 text-blue-400" />
          </div>
          <div>
            <h3 className="text-gray-300 font-medium pb-1">Location</h3>
            <p className="text-[#A4A4A4]">Dhaka, Bangladesh</p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start gap-4">
          <div className="p-2 rounded-lg bg-purple-900/20 mt-1">
            <Mail className="h-5 w-5 text-purple-400" />
          </div>
          <div>
            <h3 className="text-gray-300 font-medium pb-1">Email</h3>
            <p className="text-gray-400 text-balance">
              sifatullah.shoyon@gmail.com
            </p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-start gap-4">
          <div className="p-2 rounded-lg bg-green-900/20 mt-1">
            <Phone className="h-5 w-5 text-green-400" />
          </div>
          <div>
            <h3 className="text-gray-300 font-medium pb-1">Phone</h3>
            <p className="text-gray-400">+880-151-653-9184</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex items-center h-full">
        <SocialLinks />
      </CardFooter>
    </Card>
  );
}
