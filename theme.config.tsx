import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import Image from "next/image";

const config: DocsThemeConfig = {
  logo: <Image width={200} height={200} src="/medias/logo.png" alt="" />,
  footer: {
    text: "Konsultan Visa",
  },
  search: {
    placeholder: "Search...",
    loading: true,
  },
  feedback: {
    content: <></>,
  },
  editLink: {
    text: <></>,
  },
  darkMode: false,
  useNextSeoProps() {
    return {
      titleTemplate: "%s - Konsultan Visa",
    };
  },
};

export default config;
