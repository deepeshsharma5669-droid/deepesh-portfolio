export default function DemoFrame({ title, hint, children }: { title: string; hint: string; children: React.ReactNode }) {
  return (
    <section className="dm" aria-label={`${title} interactive demo`}>
      <div className="dm-bar">
        <span className="dm-dots" aria-hidden="true"><i /><i /><i /></span>
        <span className="dm-title">{title}</span>
        <span className="dm-badge">Interactive demo · mock data</span>
      </div>
      <div className="dm-body">{children}</div>
      <p className="dm-note">{hint} All names, companies and numbers here are made up. No real data is used.</p>
    </section>
  );
}

export function Tabs<T extends string>({ tabs, value, onChange }: { tabs: T[]; value: T; onChange: (t: T) => void }) {
  return (
    <div className="dm-tabs" role="tablist">
      {tabs.map((t) => (
        <button key={t} role="tab" aria-selected={t === value} className={t === value ? "on" : ""} onClick={() => onChange(t)}>{t}</button>
      ))}
    </div>
  );
}
