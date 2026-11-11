"use client";
import { useState } from "react";
import DemoFrame, { Tabs } from "./DemoFrame";

const TABS = ["Never Activated", "Dormant", "Reactivated", "Follow Up", "Email Campaigns"] as const;
type Tab = (typeof TABS)[number];
type Pay = "All" | "Premium" | "Ex-Premium" | "Never Premium";
type Outcome = "Interested" | "No answer" | "Call back later";
type User = { id: number; name: string; co: string; plan: string; pay: Exclude<Pay, "All">; seg: "never" | "dormant" | "reactivated"; days: number; credit?: string };

const initial: User[] = [
  { id: 1, name: "Aarav Demo", co: "Sample Capital", plan: "Trial", pay: "Never Premium", seg: "never", days: 21 },
  { id: 2, name: "Diya Demo", co: "Northwind Advisors", plan: "Trial", pay: "Never Premium", seg: "never", days: 9 },
  { id: 3, name: "Kabir Demo", co: "Acme Wealth", plan: "Silver", pay: "Ex-Premium", seg: "dormant", days: 48 },
  { id: 4, name: "Meera Demo", co: "Globex Planners", plan: "Gold", pay: "Premium", seg: "dormant", days: 35 },
  { id: 5, name: "Rohan Demo", co: "Initech Finance", plan: "Silver", pay: "Ex-Premium", seg: "dormant", days: 62 },
  { id: 6, name: "Isha Demo", co: "Umbrella Advisory", plan: "Platinum", pay: "Premium", seg: "reactivated", days: 0, credit: "Rep A" },
  { id: 7, name: "Neel Demo", co: "Acme Wealth", plan: "Gold", pay: "Premium", seg: "reactivated", days: 0, credit: "Rep B" },
];

const TEMPLATE = "Hi {{first_name}}, we noticed you haven't used your content library lately. Here are 3 new ready-to-post templates for you this week.";

export default function CrmDemo() {
  const [tab, setTab] = useState<Tab>("Dormant");
  const [pay, setPay] = useState<Pay>("All");
  const [outcomes, setOutcomes] = useState<Record<number, Outcome>>({});
  const [tpl, setTpl] = useState(TEMPLATE);
  const [target, setTarget] = useState<"dormant" | "never">("dormant");
  const [sent, setSent] = useState(false);

  const byPay = (u: User) => pay === "All" || u.pay === pay;
  const list = (seg: User["seg"]) => initial.filter((u) => u.seg === seg && byPay(u));
  const followUp = initial.filter((u) => outcomes[u.id] && outcomes[u.id] !== "Interested" && byPay(u));
  const recipients = initial.filter((u) => u.seg === target);
  const first = recipients[0];
  const preview = tpl.replace(/\{\{\s*first_name\s*\}\}/g, first ? first.name.split(" ")[0] : "there");

  const log = (id: number, o: Outcome) => setOutcomes((s) => ({ ...s, [id]: o }));

  const table = (rows: User[], mode: "never" | "dormant" | "reactivated" | "follow") => (
    <div className="dm-scroll">
      <table className="dm-table">
        <thead>
          <tr><th>User</th><th>Company</th><th>Plan</th><th>Payment</th>
            <th>{mode === "reactivated" ? "Credited to" : mode === "follow" ? "Last outcome" : "Days inactive"}</th>
            {mode !== "reactivated" && <th>Log a call</th>}</tr>
        </thead>
        <tbody>
          {rows.map((u) => (
            <tr key={u.id}>
              <td>{u.name}</td><td>{u.co}</td><td>{u.plan}</td><td>{u.pay}</td>
              <td>{mode === "reactivated" ? `${u.credit} (call preceded return)` : mode === "follow" ? outcomes[u.id] : u.days}</td>
              {mode !== "reactivated" && (
                <td>
                  <div className="dm-actions">
                    {(["Interested", "No answer", "Call back later"] as Outcome[]).map((o) => (
                      <button key={o} className={"dm-mini" + (outcomes[u.id] === o ? " on" : "")} onClick={() => log(u.id, o)}>{o}</button>
                    ))}
                  </div>
                </td>
              )}
            </tr>
          ))}
          {!rows.length && <tr><td colSpan={6} className="dm-empty">Nothing here yet. Log a call with &ldquo;No answer&rdquo; or &ldquo;Call back later&rdquo; and the user lands in Follow Up.</td></tr>}
        </tbody>
      </table>
    </div>
  );

  return (
    <DemoFrame title="Sales CRM" hint="Filter by payment status, log a call, then check the Follow Up tab.">
      <Tabs tabs={[...TABS]} value={tab} onChange={setTab} />
      {tab !== "Email Campaigns" && (
        <div className="dm-controls">
          <label className="dm-sel">Payment status
            <select value={pay} onChange={(e) => setPay(e.target.value as Pay)}>
              {["All", "Premium", "Ex-Premium", "Never Premium"].map((p) => <option key={p}>{p}</option>)}
            </select>
          </label>
          <span className="dm-count">{tab === "Follow Up" ? followUp.length : list(tab === "Never Activated" ? "never" : tab === "Dormant" ? "dormant" : "reactivated").length} users</span>
        </div>
      )}
      <div className="dm-pane">
        {tab === "Never Activated" && table(list("never"), "never")}
        {tab === "Dormant" && table(list("dormant"), "dormant")}
        {tab === "Reactivated" && table(list("reactivated"), "reactivated")}
        {tab === "Follow Up" && table(followUp, "follow")}
        {tab === "Email Campaigns" && (
          <div className="dm-email">
            <div>
              <label className="dm-sel">Send to
                <select value={target} onChange={(e) => { setTarget(e.target.value as "dormant" | "never"); setSent(false); }}>
                  <option value="dormant">Dormant users</option>
                  <option value="never">Never activated users</option>
                </select>
              </label>
              <label className="dm-sel">Template (use {"{{first_name}}"})
                <textarea rows={5} value={tpl} onChange={(e) => { setTpl(e.target.value); setSent(false); }} />
              </label>
            </div>
            <div>
              <h5 className="dm-h">Preview · {recipients.length} recipients</h5>
              <div className="dm-mail"><b>To: {first?.name.toLowerCase().replace(" ", ".")}@example.com</b><p>{preview}</p></div>
              <button className="btn btn-sm" onClick={() => setSent(true)}>Send campaign (demo)</button>
              {sent && <p className="dm-ok" role="status">Demo only. Nothing was sent.</p>}
            </div>
          </div>
        )}
      </div>
    </DemoFrame>
  );
}
