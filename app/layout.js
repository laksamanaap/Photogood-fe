import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Photogood",
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <head>
          <link rel="icon" href="/image/favicon.ico" /> {/* Icon Website */}
        </head>
        <body className={poppins.className}>{children}</body>
      </html>
    </>
  );
}
