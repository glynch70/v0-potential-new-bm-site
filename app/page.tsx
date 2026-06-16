import MaintenancePage from "@/components/sections/MaintenancePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bear Media | Website Currently Being Upgraded",
  description:
    "The Bear Media website is currently being upgraded. Get in touch to discuss video production, photography and website projects in Scotland.",
  alternates: {
    canonical: "https://bear-media.com",
  },
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    url: "https://bear-media.com",
    title: "Bear Media | Website Currently Being Upgraded",
    description:
      "The Bear Media website is currently being upgraded. Get in touch to discuss your project.",
    type: "website",
    siteName: "Bear Media",
    locale: "en_GB",
  },
};

export default function HomePage() {
  return <MaintenancePage />;
}
