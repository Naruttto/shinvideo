import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Container from "@/components/Container";
import NextTopLoader from "nextjs-toploader";
import { getLogoImage } from "@/services/getLogoImage";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  const { url } = await getLogoImage();

  return {
    title: "Даня Шинкаренко - Портфолио",
    description:
      "Даня Шинкаренко - Создаю видео с 2017 года. Всегда стремлюсь к искренности и простоте визуального языка. Работаю с профессиональным кинооборудованием и имею большой съемочный опыт. Работаю в Ростове-на-Дону и Санкт-Петербурге",
    openGraph: {
      title: "Даня Шинкаренко - Портфолио",
      description:
        "Даня Шинкаренко - Создаю видео с 2017 года. Всегда стремлюсь к искренности и простоте визуального языка. Работаю с профессиональным кинооборудованием и имею большой съемочный опыт. Работаю в Ростове-на-Дону и Санкт-Петербурге",
      images: [url],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <NextTopLoader color="#ff6e00" height={5} />
        <Container>{children}</Container>
      </body>
    </html>
  );
}
