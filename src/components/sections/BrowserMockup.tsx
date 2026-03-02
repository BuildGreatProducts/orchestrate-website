import Image from "next/image";

export function BrowserMockup() {
  return (
    <div className="rounded-lg sm:rounded-2xl shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.4)] overflow-hidden">
      <Image
        src="/images/mock.png"
        alt="Orchestrate app interface"
        width={1920}
        height={1080}
        className="w-full h-auto"
      />
    </div>
  );
}
