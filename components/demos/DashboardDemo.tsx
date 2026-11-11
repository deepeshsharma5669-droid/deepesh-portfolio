"use client";
import { useState } from "react";
import DemoFrame, { Tabs } from "./DemoFrame";

const TABS = ["Revenue", "Subscriptions", "Posting Health"] as const;
type Tab = (typeof TABS)[number];

const months = ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov"];
const revenue = [12.4, 13.1, 12.8, 14.6, 15.2, 16.9]; // mock, ₹ lakh
const kpis = [
  { label: "Revenue (₹ lakh)", a: 16.9, b: 15.2, fmt: (n: number) => n.toFixed(1) },
  { label: "New subscriptions", a: 128, b: 112, fmt: (n: number) => String(n) },
  { label: "Renewals", a: 74, b: 80, fmt: (n: number) => String(n) },
  { label: "Trial → paid", a: 18.4, b: 16.1, fmt: (n: number) => n.toFixed(1) + "%" },
];
const plans = [["Trial", 420], ["Silver", 210], ["Gold", 130], ["Platinum", 60], ["Diamond", 25]] as const;

type Row = { t: string; user: string; co: string; platform: string; content: string; status: "Published" | "Failed" | "Pending"; why?: string };
const posts: Record<"Today" | "Yesterday", Row[]> = {
  Today: [
    { t: "09:00", user: "Demo User 01", co: "Sample Capital", platform: "LinkedIn", content: "SIP myths, explained", status: "Published" },
    { t: "09:30", user: "Demo User 02", co: "Northwind Advisors", platform: "Facebook", content: "Festive greetings", status: "Failed", why: "Access token expired" },
    { t: "10:15", user: "Demo User 03", co: "Acme Wealth", platform: "Instagram", content: "Tax-saving checklist", status: "Published" },
    { t: "11:00", user: "Demo User 04", co: "Sample Capital", platform: "LinkedIn", content: "Market wrap", status: "Failed", why: "Page permission revoked" },
    { t: "14:00", user: "Demo User 05", co: "Globex Planners", platform: "Facebook", content: "Retirement basics", status: "Pending" },
    { t: "16:30", user: "Demo User 06", co: "Acme Wealth", platform: "Instagram", content: "Goal-based investing", status: "Pending" },
  ],
  Yesterday: [
    { t: "09:00", user: "Demo User 01", co: "Sample Capital", platform: "LinkedIn", content: "Weekly outlook", status: "Published" },
    { t: "09:30", user: "Demo User 07", co: "Initech Finance", platform: "Facebook", content: "Insurance 101", status: "Failed", why: "Image URL not reachable" },
    { t: "10:00", user: "Demo User 03", co: "Acme Wealth", platform: "Instagram", content: "Emergency fund", status: "Published" },
    { t: "11:30", user: "Demo User 02", co: "Northwind Advisors", platform: "Facebook", content: "Diwali wishes", status: "Failed", why: "Access token expired" },
    { t: "12:00", user: "Demo User 08", co: "Umbrella Advisory", platform: "LinkedIn", content: "Debt vs equity", status: "Published" },
    { t: "13:15", user: "Demo User 09", co: "Globex Planners", platform: "Instagram", content: "Savings tips", status: "Failed", why: "Rate limit reached" },
    { t: "15:00", user: "Demo User 04", co: "Sample Capital", platform: "LinkedIn", content: "Budget highlights", status: "Published" },
    { t: "17:45", user: "Demo User 10", co: "Initech Finance", platform: "Facebook", content: "Child education plan", status: "Published" },
  ],
};

function Delta({ a, b, inverse }: { a: number; b: number; inverse?: boolean }) {
  const pct = ((a - b) / b) * 100;
  const good = inverse ? pct <= 0 : pct >= 0;
  return <span className={good ? "dm-up" : "dm-down"}>{pct >= 0 ? "▲" : "▼"} {Math.abs(pct).toFixed(1)}% vs previous</span>;
}

export default function DashboardDemo() {
  const [tab, setTab] = useState<Tab>("Revenue");
  const [day, setDay] = useState<"Today" | "Yesterday">("Today");
  const [status, setStatus] = useState<"All" | Row["status"]>("All");

  const rows = posts[day];
  const shown = status === "All" ? rows : rows.filter((r) => r.status === status);
  const pub = rows.filter((r) => r.status === "Published").length;
  const fail = rows.filter((r) => r.status === "Failed").length;
  const users = new Set(rows.filter((r) => r.status === "Failed").map((r) => r.user)).size;
  const rate = pub + fail ? ((fail / (pub + fail)) * 100).toFixed(1) + "%" : "–";
  const max = Math.max(...revenue);

  return (
    <DemoFrame title="Executive dashboard" hint="Click the tabs and filters to explore.">
      <Tabs tabs={[...TABS]} value={tab} onChange={setTab} />

      {tab === "Revenue" && (
        <div className="dm-pane">
          <div className="dm-kpis">
            {kpis.slice(0, 2).map((k) => (
              <div className="dm-kpi" key={k.label}><span>{k.label}</span><strong>{k.fmt(k.a)}</strong><Delta a={k.a} b={k.b} /></div>
            ))}
          </div>
          <div className="dm-chart" role="img" aria-label="Monthly revenue bar chart with mock data">
            {revenue.map((v, i) => (
              <div className="dm-col" key={months[i]}>
                <span className="dm-val">{v}</span>
                <div className={"dm-barv" + (i === revenue.length - 1 ? " cur" : "")} style={{ height: `${(v / max) * 100}%` }} />
                <span className="dm-lab">{months[i]}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {tab === "Subscriptions" && (
        <div className="dm-pane">
          <div className="dm-kpis">
            {kpis.slice(1).map((k) => (
              <div className="dm-kpi" key={k.label}><span>{k.label}</span><strong>{k.fmt(k.a)}</strong><Delta a={k.a} b={k.b} /></div>
            ))}
          </div>
          <h5 className="dm-h">Active users by plan</h5>
          <ul className="dm-hbars">
            {plans.map(([p, n]) => (
              <li key={p}><span>{p}</span><div><i style={{ width: `${(n / 420) * 100}%` }} /></div><b>{n}</b></li>
            ))}
          </ul>
        </div>
      )}

      {tab === "Posting Health" && (
        <div className="dm-pane">
          <div className="dm-controls">
            <div className="dm-seg" role="group" aria-label="Day">
              {(["Today", "Yesterday"] as const).map((d) => (
                <button key={d} className={d === day ? "on" : ""} onClick={() => { setDay(d); setStatus("All"); }}>{d}</button>
              ))}
            </div>
            <div className="dm-seg" role="group" aria-label="Status filter">
              {(["All", "Published", "Failed", "Pending"] as const).map((s) => (
                <button key={s} className={s === status ? "on" : ""} onClick={() => setStatus(s)}>{s}</button>
              ))}
            </div>
          </div>
          <div className="dm-kpis">
            <div className="dm-kpi"><span>Published</span><strong>{pub}</strong></div>
            <div className="dm-kpi"><span>Failed</span><strong className="dm-down">{fail}</strong></div>
            <div className="dm-kpi"><span>Failure rate</span><strong>{rate}</strong></div>
            <div className="dm-kpi"><span>Users affected</span><strong>{users}</strong></div>
          </div>
          <div className="dm-scroll">
            <table className="dm-table">
              <thead><tr><th>Time</th><th>User</th><th>Company</th><th>Platform</th><th>Content</th><th>Status</th><th>Failure reason</th></tr></thead>
              <tbody>
                {shown.map((r) => (
                  <tr key={r.t + r.user}>
                    <td>{r.t}</td><td>{r.user}</td><td>{r.co}</td><td>{r.platform}</td><td>{r.content}</td>
                    <td><span className={"dm-pill " + r.status.toLowerCase()}>{r.status}</span></td>
                    <td>{r.why ?? "–"}</td>
                  </tr>
                ))}
                {!shown.length && <tr><td colSpan={7} className="dm-empty">No posts with this status.</td></tr>}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </DemoFrame>
  );
}
