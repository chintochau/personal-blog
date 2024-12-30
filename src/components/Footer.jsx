import { LinkedinIcon } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <div className="text-center border-t py-4 mx-4 mt-8">
      <div className="flex justify-center">
        <a
          href="https://www.linkedin.com/in/jason-chau-05ba7418b/"
          className="hover:text-secondary hover:cursor-pointer"
        >
          <LinkedinIcon className="size-6" />
        </a>
      </div>
      <p>Jason31093@gmail.com</p>
    </div>
  );
};

export default Footer;
