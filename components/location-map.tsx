import Map from "@/public/images/property/img_map1.jpg";
import Image from "next/image";

export default function LocationMap() {
  return (
    <section id="location" className="bg-orange-500">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 text-center">
        <div className="text-center">
          <p
            className="text-black text-4xl pb-10"
            style={{ fontFamily: "ACaslonPro-Regular" }}
          >
            LOCATION OF PAVILION SQUARE
          </p>
          <p className="text-base text-white pb-10">
            Pavilion Square is located in the heart of Kuala Lumpur’s Golden
            Triangle, surrounded by iconic landmarks like the Petronas Twin
            Towers, Merdeka 118, and TRX. With a dedicated link bridge to
            Pavilion Kuala Lumpur, it ensures seamless access to everything the
            city has to offer.
          </p>
        </div>
        <Image
          className="relative"
          src={Map}
          width={950}
          height={950}
          alt="map"
        />
        <a
          className="btn w-full bg-green-400 text-gray-800 shadow-sm hover:bg-green-100 sm:ml-4 sm:w-auto mt-10"
          href="#0"
        >
          VISIT US
        </a>
      </div>
    </section>
  );
}
