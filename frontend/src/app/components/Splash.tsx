import Image from 'next/image';

export default function Splash() {
  return (
    <div className="animate-hidden-splash bg-background fixed inset-0 z-100 flex h-screen w-screen flex-col items-center justify-center">
      <Image
        src="/icon-512x512.png"
        width={150}
        height={150}
        alt="Vemo Logo"
        className="rounded-full"
      />
    </div>
  );
}
