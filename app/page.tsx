export const metadata = {
  title: "Home - Simple",
  description: "Page description",
};

import "@/css/style.css";
import "@/css/additional-styles/swiper.css";
import "@/css/additional-styles/custom-fonts.css";
import "@/css/additional-styles/theme.css";
import "@/css/additional-styles/utility-patterns.css";
import HomePage from "@/components/home";
import LocationMap from "@/components/location-map";
import LuxuryResidence from "@/components/luxury-residence";
import Facilities from "@/components/facilities";
import CorporateSuites from "@/components/corporate-suites";
import PhotoGallery from "@/components/photo-gallery";
import { ContactForm } from "@/components/contact-us";

export default function Home() {
  return (
    <>
      <HomePage />
      <LocationMap />
      <LuxuryResidence />
      <Facilities />
      <CorporateSuites />
      <PhotoGallery />
      <ContactForm />
    </>
  );
}
