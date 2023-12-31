import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Shreyas Waykar</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>

      <body className={poppins.className}>
        <div className="css-blurry-gradient" />
        {children}
      </body>
    </html>
  );
}
