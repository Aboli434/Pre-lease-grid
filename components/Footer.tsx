import Image from "next/image";
import { Instagram, Linkedin, Youtube } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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

const LinkGroup: React.FC<LinkGroupProps> = ({ title, links }) => (
  <div>
    <h4 className="text-white text-xl font-semibold mb-4">{title}</h4>
    <ul className="space-y-1">
      {links.map((link) => (
        <li key={link.name}>
          <a
            href={link.href}
            className="text-gray-300 hover:text-red-500 transition-colors text-lg"
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-4 lg:px-4">
        {/* === Logo and Links === */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-1 gap-y-8 py-10">
          {/* Logo Column */}
          <div className="flex flex-col space-y-4 justify-start items-start">
            <div className="flex items-center space-x-2 whitespace-nowrap">
              <Image
                src="/images/Prelease-Grid logo.png"
                alt="logo"
                width={80}
                height={80}
                className="flex-shrink-0"
              />
              <div className="flex flex-col leading-tight">
                <span className="text-6xl font-normal text-white tracking-tight">
                  prelease
                </span>
                <span className="text-5xl font-light text-white tracking-tight">
                  grid
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <LinkGroup title="Quick Links" links={quickLinks} />

          {/* Resources Column */}
          <LinkGroup title="Resources" links={resources} />

          {/* Legal Column with Dropdown */}
          <div>
            <LinkGroup title="Legal" links={legal} />
            <div className="mt-3">
              <Select defaultValue="error-pages">
                <SelectTrigger className="w-[180px] bg-white text-gray-800 border-gray-300">
                  <SelectValue placeholder="Error Pages" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="error-pages">Error Pages</SelectItem>
                  <SelectItem value="500">500 Server Error</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <hr className="border-White-700" />

        <div className="py-8">
          <p className="text-lg leading-relaxed text-gray-300">
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

        {/* Copyright and Social Media */}
        <div className="flex flex-col md:flex-row justify-between items-center py-6 text-lg">
          <p className="mb-4 md:mb-0">© 2025 PreleaseGrid | All Rights Reserved</p>

          <div className="flex space-x-4">
            {socialLinks.map(({ icon: Icon, href }) => (
              <a
                key={href}
                href={href}
                className="text-gray-300 hover:text-red-500 transition-colors"
                aria-label={`Link to our ${Icon.displayName}`}
              >
                <Icon className="w-9 h-9" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
