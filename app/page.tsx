"use client";
import Image from "next/image";

const recommended = [
  {
    title: "Homie",
    cover: "/storybookcover.jpg",
    price: "N25.50",
  },
  {
    title: "Thunder Stunt",
    cover: "/storybookcover.jpg",
    price: "N16.70",
  },
  {
    title: "Heavy Lift",
    cover: "/storybookcover.jpg",
    price: "N19.25",
  },
  {
    title: "Real Life",
    cover: "/storybookcover.jpg",
    price: "N27.30",
  },
  {
    title: "Terrible",
    cover: "/storybookcover.jpg",
    price: "N24.89",
  },
];

export default function Home() {
  return (
    <>
    <section
      className="
        relative min-h-screen
        bg-gradient-to-r from-blue-900 to-blue-700 text-white
        px-6 sm:px-10 py-12 sm:py-16
        flex flex-col lg:flex-row items-center justify-between
        overflow-hidden
      "
    >
      {/* Background shapes */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-20 left-10 sm:left-20 w-40 sm:w-64 h-40 sm:h-64 bg-blue-800 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 sm:right-40 w-32 sm:w-48 h-32 sm:h-48 bg-orange-500 rounded-full opacity-20 blur-2xl"></div>
      </div>

      {/* Left Content */}
      <div className="max-w-lg z-10 text-center lg:text-left">
        <span className="text-xs sm:text-sm uppercase tracking-wide text-orange-400 font-semibold">
          Best Seller
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold mt-2">Pushing Clouds</h1>
        <p className="text-base sm:text-lg italic text-gray-300">
          Napoleon Hill · Business & Strategy
        </p>

        <p className="mt-4 text-gray-200 text-sm sm:text-base">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal.
        </p>

        {/* Pricing */}
        <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-3">
          <span className="text-xl sm:text-2xl font-bold">$9.5</span>
          <span className="line-through text-gray-400">$12.0</span>
          <span className="bg-pink-600 text-white text-xs sm:text-sm px-2 py-1 rounded">
            25% OFF
          </span>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-4">
          <button className="bg-orange-600 px-5 sm:px-6 py-2 rounded text-white font-semibold hover:bg-orange-700 text-sm sm:text-base">
            Buy Now
          </button>
          <button className="bg-blue-800 px-5 sm:px-6 py-2 rounded text-white font-semibold hover:bg-blue-900 text-sm sm:text-base">
            See Details
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="relative z-10 mt-10 lg:mt-0 w-full max-w-xs sm:max-w-sm lg:max-w-md">
        <Image
          src="/profilegirl.png"
          width={500}
          height={500}
          alt="profile girl"
          priority
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </section>
    <section className="px-4 sm:px-8 py-10 bg-white">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4">Recommended For You</h2>
      <p className="text-gray-600 mb-8 max-w-2xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>

      {/* Responsive card grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
        {recommended.map((item, idx) => (
          <div
            key={idx}
            className="bg-gray-50 rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col items-center text-center"
          >
            <Image
              src={item.cover}
              alt={item.title}
              width={250}
              height={200}
              className="rounded mb-4 object-cover"
            />
            <h3 className="text-sm sm:text-base font-semibold">{item.title}</h3>
            <p className="text-blue-600 font-bold mt-2">{item.price}</p>
          </div>
        ))}
      </div>
    </section>
    </>
    
  );
}
