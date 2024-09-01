import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "The Most Complicated Button",
  description: "the most complicated button",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link
        rel="icon"
        href="https://media.tenor.com/Z-CGDk9W_UQAAAAi/howo-ok.gif"
      />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
