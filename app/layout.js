import { Inter } from "next/font/google";
import "./globals.css";
import "./font/font.css"
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Post folio site",
  description: "my port folio site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
