import Image from "next/image";

export default function Splash() {
  return (
    <div className="fixed inset-0 bg-primary flex flex-col justify-center items-center z-100" id="splash-app">
      <Image src="/icon-layout.png" width={107} height={81} alt="Vemo Logo" className="mb-4" />
    </div>
  );
}
