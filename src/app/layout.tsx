import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Azambuja Clínica de Estética Avançada | Rondonópolis-MT",
  description: "Clínica especializada em estética facial e corporal com procedimentos avançados. Conheça nossos tratamentos e agende uma consulta.",
  keywords: "estética avançada, harmonização facial, bioestimuladores, botox, fios de sustentação, emagrecimento rápido, Rondonópolis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={montserrat.variable}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
