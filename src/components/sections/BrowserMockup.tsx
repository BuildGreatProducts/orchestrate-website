import Image from "next/image";

export function BrowserMockup() {
  return (
    <div className="bg-surface border border-border rounded-2xl shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.4)] overflow-hidden">
      {/* Title bar */}
      <div className="flex items-center h-12 px-4 border-b border-border bg-surface">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-surface-elevated" />
          <div className="w-3 h-3 rounded-full bg-surface-elevated" />
          <div className="w-3 h-3 rounded-full bg-surface-elevated" />
        </div>
        <div className="mx-auto">
          <div className="bg-surface-alt rounded-lg px-6 h-6 flex items-center justify-center">
            <span className="text-muted text-xs">orchestrate.dev</span>
          </div>
        </div>
        {/* Spacer to balance the dots */}
        <div className="w-[42px]" />
      </div>

      {/* Content area */}
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
