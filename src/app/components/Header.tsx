import React from "react";
import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";

const Header = async () => {
  const client = createClient();
  const settings = await client.getSingle("settings");
  return (
    <>
      <header>Header</header>
      <nav>
        <ul>
          {settings.data.navigation.map(({ label, link }) => (
            <li key={label}>
              <PrismicNextLink field={link}>{label}</PrismicNextLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Header;
