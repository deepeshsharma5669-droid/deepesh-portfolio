"use client";
import { useState } from "react";
import DemoFrame from "./DemoFrame";

type Status = "TODO" | "IN_PROGRESS" | "IN_REVIEW" | "CHANGES_REQUIRED" | "APPROVED";
type Role = "Member" | "Manager";
type Task = { id: number; title: string; owner: string; reviewer: string; status: Status };

const COLS: { s: Status; label: string }[] = [
  { s: "TODO", label: "To do" }, { s: "IN_PROGRESS", label: "In progress" }, { s: "IN_REVIEW", label: "In review" },
  { s: "CHANGES_REQUIRED", label: "Changes required" }, { s: "APPROVED", label: "Approved" },
];
const seed: Task[] = [
  { id: 1, title: "Write carousel copy", owner: "Member A", reviewer: "Manager X", status: "IN_PROGRESS" },
  { id: 2, title: "Design slide templates", owner: "Member B", reviewer: "Manager X", status: "IN_REVIEW" },
  { id: 3, title: "Source brand assets", owner: "Member C", reviewer: "Manager X", status: "TODO" },
  { id: 4, title: "Compliance wording check", owner: "Member A", reviewer: "Manager Y", status: "TODO" },
];

export default function PmtDemo() {
  const [role, setRole] = useState<Role>("Member");
  const [tasks, setTasks] = useState<Task[]>(seed);
  const [log, setLog] = useState<string[]>(["10:00 · Project created: Festive Social Pack (Sample Client Co.)"]);

  const move = (t: Task, to: Status, verb: string, needs: Role) => {
    if (role !== needs) return;
    setTasks((all) => all.map((x) => (x.id === t.id ? { ...x, status: to } : x)));
    setLog((l) => {
      const m = l.length * 3;
      const clock = `${10 + Math.floor(m / 60)}:${String(m % 60).padStart(2, "0")}`;
      return [`${clock} · ${role} ${verb} “${t.title}” → ${to}`, ...l];
    });
  };
  const reset = () => { setTasks(seed); setLog(["10:00 · Project created: Festive Social Pack (Sample Client Co.)"]); };

  const done = tasks.every((t) => t.status === "APPROVED");
  const rework = tasks.some((t) => t.status === "CHANGES_REQUIRED");
  const badge = done ? "Ready for client review" : rework ? "Rework in progress" : "In progress";

  const actions = (t: Task) => {
    const b = (label: string, to: Status, needs: Role) => (
      <button key={label} className="dm-mini" disabled={role !== needs} title={role !== needs ? `Only a ${needs} can do this` : ""} onClick={() => move(t, to, label.toLowerCase(), needs)}>{label}</button>
    );
    if (t.status === "TODO") return [b("Start", "IN_PROGRESS", "Member")];
    if (t.status === "IN_PROGRESS") return [b("Submit for review", "IN_REVIEW", "Member")];
    if (t.status === "IN_REVIEW") return [b("Approve", "APPROVED", "Manager"), b("Request changes", "CHANGES_REQUIRED", "Manager")];
    if (t.status === "CHANGES_REQUIRED") return [b("Restart", "IN_PROGRESS", "Member")];
    return [];
  };

  return (
    <DemoFrame title="PMT · Project view" hint="Switch roles, then move tasks through submit, review and approval.">
      <div className="dm-controls">
        <div className="dm-path">Sample Client Co. › Festive Social Pack › <b>Instagram carousels</b></div>
        <div className="dm-seg" role="group" aria-label="Role">
          {(["Member", "Manager"] as Role[]).map((r) => <button key={r} className={r === role ? "on" : ""} onClick={() => setRole(r)}>{r}</button>)}
        </div>
        <span className={"dm-pill " + (done ? "published" : rework ? "failed" : "pending")}>{badge}</span>
      </div>
      <div className="dm-board">
        {COLS.map((c) => (
          <div className="dm-lane" key={c.s}>
            <h5>{c.label} <span>{tasks.filter((t) => t.status === c.s).length}</span></h5>
            {tasks.filter((t) => t.status === c.s).map((t) => (
              <div className="dm-card" key={t.id}>
                <b>{t.title}</b>
                <span>{t.owner} · reviewer {t.reviewer}</span>
                <div className="dm-actions">{actions(t)}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="dm-log">
        <div className="dm-logh"><h5 className="dm-h">Activity log (every action is recorded)</h5><button className="dm-mini" onClick={reset}>Reset demo</button></div>
        <ul>{log.slice(0, 5).map((l, i) => <li key={l + i}>{l}</li>)}</ul>
      </div>
    </DemoFrame>
  );
}
