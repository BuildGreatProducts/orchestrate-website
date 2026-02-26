const tabs = [
  { label: "Manage", active: false },
  { label: "Agents", active: false },
  { label: "Tasks", active: true },
  { label: "Files", active: false },
  { label: "History", active: false },
];

const columns = [
  { label: "Draft", cards: 2 },
  { label: "In Progress", cards: 2 },
  { label: "Done", cards: 2 },
];

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
      <div className="bg-gradient-to-b from-surface to-surface-alt">
        {/* Tab bar */}
        <div className="flex border-b border-border">
          {tabs.map((tab) => (
            <div
              key={tab.label}
              className={`px-4 sm:px-5 py-3 text-[11px] sm:text-xs font-medium ${
                tab.active
                  ? "text-white border-b-2 border-white bg-surface-alt"
                  : "text-muted"
              }`}
            >
              {tab.label}
            </div>
          ))}
        </div>

        {/* Kanban board */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3 p-3 sm:p-4">
          {columns.map((col) => (
            <div key={col.label} className="flex flex-col gap-2">
              <p className="text-muted text-[9px] sm:text-[10px] font-semibold tracking-[0.5px] uppercase text-center py-1">
                {col.label}
              </p>
              {Array.from({ length: col.cards }).map((_, i) => (
                <div
                  key={i}
                  className="h-10 sm:h-14 rounded-lg sm:rounded-xl bg-surface-alt border border-border"
                />
              ))}
            </div>
          ))}
        </div>

        {/* Empty space below kanban to show more of the app */}
        <div className="h-32 sm:h-48 lg:h-64" />
      </div>
    </div>
  );
}
