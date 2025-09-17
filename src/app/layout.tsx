import { SpeedInsights } from "@vercel/speed-insights/next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
const beVietnamPro = Be_Vietnam_Pro({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "parsa protfolio",
  description: "Portfolio project",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};


export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className="scroll-smooth overflow-y-scroll "
      style={{
        msOverflowStyle: "none",
        scrollbarWidth: "none",
      }}
    >
      <body
        className={`min-h-screen text-white ${beVietnamPro.className}`}
        style={{
          backgroundColor: "#000",
          backgroundImage: "radial-gradient(circle, #333 1px, transparent 1px)",
          backgroundSize: "20px 20px",
          margin: 0, // ensures no default body margin
        }}
      >
        {children}
        <SpeedInsights />
        <Toaster position="bottom-right" reverseOrder={false} />
      </body>
    </html>
  );
}
