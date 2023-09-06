import "./globals.css";

import { Josefin_Sans } from "next/font/google";
import Providers from "./Providers";

const josefin_Sans = Josefin_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Todo List",
  description: "Todo list with dark mode",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={josefin_Sans.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
