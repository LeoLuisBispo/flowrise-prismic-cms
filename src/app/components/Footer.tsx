import React from "react";
import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import Logo from "./Logo";
import Bounded from "./Bounded";

const Footer = async () => {
  const client = createClient();
  const settings = await client.getSingle("settings");

  return (
    <Bounded as={"footer"} className="">
      <div className="flex gap-6 items-center justify-between sm:flex-row flex-col">
        <Link href={"/"}>
          <Logo />
        </Link>

        <p>
          ©{new Date().getFullYear()} {settings.data.site_title}
        </p>

        <ul className="flex">
          {settings.data.navigation.map(({ label, link }) => (
            <li key={label}>
              <PrismicNextLink field={link} className="p-3">
                {label}
              </PrismicNextLink>
            </li>
          ))}
        </ul>
      </div>
    </Bounded>
  );
};

export default Footer;
