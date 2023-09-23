import "./globals.css";
import { Montserrat } from "next/font/google";
import { Nav } from "@/components";

const montserrat = Montserrat({ subsets: ["latin"], weight: "200" });

export const metadata = {
  title: "Getlinked Hackathon",
  description: "Built by Ndubuisi Ollawa",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
