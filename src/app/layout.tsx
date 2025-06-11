import type { Metadata } from "next";
import { Anton, Poppins } from "next/font/google";
import "./styles/globals.css";
import "./styles/common.css"

const PoppinsLatin = Poppins({
  variable: "--font-poppins",
  weight:['400', '500', '600', '700', '800', '900'],
  subsets: ["latin"],
});

const AntonFonts = Anton({
  variable: "--font-anton" ,
  subsets: ['latin'],
  weight: '400',  // Anton only has one weight
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Buddhika Madusanka",
  description: "Let's recreate the digital world and make the people's life easier.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${PoppinsLatin.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
