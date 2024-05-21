import Image from "next/image";
import des from "../../../public/icons/des.png"
export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <main className="flex min-h-screen w-full justify-between font-inter">
          {children}
          <div className="auth-asset">
            <div className="image-container">
            <Image src={des} alt="logo"  width={750}
            height={1000}
            className="rounded-l-xl object-contain"/>
            </div>
          </div>
      </main>
    );
  }
  