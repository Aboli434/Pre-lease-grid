import Image from "next/image";
import { Instagram, Linkedin, Youtube } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

/* ---- Link Data ---- */
const quickLinks = [
  { name: "Explore Properties", href: "#" },
  { name: "Calculators", href: "#" },
  { name: "Explore Brokers", href: "#" },
];

const resources = [
  { name: "Blogs", href: "#" },
  { name: "How It Works", href: "#" },
  { name: "Contact Us", href: "#" },
];

const legal = [
  { name: "Privacy Policy", href: "#" },
  { name: "Terms of Service", href: "#" },
];

const socialLinks = [
  { icon: Instagram, href: "#instagram" },
  { icon: Linkedin, href: "#linkedin" },
  { icon: Youtube, href: "#youtube" },
];

interface LinkGroupProps {
  title: string;
  links: { name: string; href: string }[];
}

/* ---- Link Group Component ---- */
const LinkGroup = ({ title, links }: LinkGroupProps) => (
  <div className="space-y-2">
    <h4 className="text-white text-xl font-semibold mb-4">{title}</h4>
    <ul className="space-y-2">
      {links.map((link) => (
        <li key={link.name}>
          <a
            href={link.href}
            className="text-gray-300 hover:text-red-500 transition-colors text-[18px]"
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

/* ---- FOOTER ---- */
export function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white pt-16 pb-10 ">
      <div className="max-w-[1450px] mx-auto px-10">
        {/* === Top Grid === */}
        <div className="grid grid-cols-1 md:grid-cols-[420px_1fr_1fr_1fr] gap-x-20 gap-y-12 pb-10">


          {/* LOGO */}
          <div className="flex items-start">
            <div className="flex items-center space-x-4">
              <Image
                src="/images/Prelease-Grid logo.png"
                alt="logo"
                width={100}   
                height={100}  
                className="object-contain"
              />

              <div className="leading-[0.85]">
                <p className="text-[65px] font-normal">prelease</p>  
                <p className="text-[60px] font-light">grid</p>        
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <LinkGroup title="Quick Links" links={quickLinks} />

          {/* Resources */}
          <LinkGroup title="Resources" links={resources} />

          {/* Legal + Dropdown */}
          <div>
            <LinkGroup title="Legal" links={legal} />

            <div className="mt-5">
              <Select defaultValue="error-pages">
                <SelectTrigger className="w-[240px] h-[40px] bg-white text-gray-800 text-[17px]">
                  <SelectValue placeholder="Error Pages" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="error-pages">Error Pages</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* === Divider === */}
        <hr className="border-1 border-white-600 my-1" />

        {/* === Paragraph === */}
        <div className="py-6 max-w-[1350px]">
          <p className="text-[18px] text-gray-300 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis viverra
            ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis viverra
            ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis viverra
            ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
          </p>
        </div>

        {/* === Bottom Section === */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 text-[18px]">
          <p className="text-gray-300 mb-4 md:mb-0">
            © 2025 PreLeaseGrid | All Rights Reserved
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex space-x-6">
            {socialLinks.map(({ icon: Icon, href }) => (
              <a
                key={href}
                href={href}
                className="text-white hover:text-red-500 transition-colors"
              >
                <Icon className="w-11 h-11" /> 
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
