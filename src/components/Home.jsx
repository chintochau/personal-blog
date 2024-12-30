import { MapPin } from "lucide-react";
import React from "react";

const Home = () => {
  return (
    <>
      <div className="pt-10 motion-preset-slide-left flex items-center motion-delay-[200ms]">
        <MapPin className="size-5" />
        <span className="ml-1 font-semibold text-sm">Toronto, Canada</span>
      </div>
      <h1 className="mt-4 text-5xl motion-preset-slide-left motion-delay-[600ms] max-w-96">
        Hi, I am Jason !
      </h1>
      <p className="mt-4 motion-preset-slide-left motion-delay-[1000ms] max-w-96">
        I’m a <span className="font-bold">Project Manager</span> with a strong
        background in <span className="font-bold">Product Development</span>,
        currently working at{" "}
        <a
          href="https://www.bluesound.com/can/bluos"
          className="hover:text-secondary underline font-semibold"
        >
          BluOS
        </a>
        .
      </p>

      <p className="mt-4 motion-preset-slide-left motion-delay-[1500ms]">
        Throughout my career, I’ve gained hands-on experience in product
        development, collaborating with cross-functional teams to define
        features, prioritize work, and ensure products meet user needs. I thrive
        on translating complex ideas into tangible, user-centric solutions,
        whether through detailed front-end design, API integration, or
        contributing to the overall product strategy.
      </p>

      <p className="mt-4 motion-preset-slide-left motion-delay-[2000ms]">
        I'm passionate about understanding user needs, and I approach every
        project with a product management mindset, ensuring that the end result
        aligns with both business goals and user satisfaction.
      </p>
    </>
  );
};

export default Home;
