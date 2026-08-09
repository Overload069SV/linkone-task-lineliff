import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Linkone — Project & Task Collaboration Platform",
    short_name: "Linkone",
    description: "Turn your LINE group into your team's work system.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0057D9",
    icons: [
      { src: "/logo-blue.png", sizes: "any", type: "image/png", purpose: "any" },
    ],
  };
}
