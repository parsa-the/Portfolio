import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";

export const beVietnamPro = Be_Vietnam_Pro({
  weight: ["100","200","300","400","500","600","700","800","900"],
  subsets: ["latin","vietnamese"],
  display: "swap",
});

export const metadata = {
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
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
      </body>
    </html>
  );
}
