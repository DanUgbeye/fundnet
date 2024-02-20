import "./globals.css";
import { monserratFont } from "./fonts";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={` ${monserratFont.variable} font-montserrat `}>
      <body className=" min-h-screen ">
        <main
          className={cn(
            " flex h-full min-h-screen w-full flex-col bg-gray-100 "
          )}
        >
          <Navbar />

          <section className=" w-full ">{children}</section>

          <Footer />
        </main>
      </body>
    </html>
  );
}
