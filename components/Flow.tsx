// A simple, responsive "how it fits together" diagram.
export type FlowStep = { title: string; sub?: string };

export default function Flow({ steps, label }: { steps: FlowStep[]; label: string }) {
  return (
    <figure className="flow" aria-label={label}>
      <figcaption>How it fits together</figcaption>
      <ol>
        {steps.map((s, i) => (
          <li key={s.title}>
            <div className="flow-box">
              <strong>{s.title}</strong>
              {s.sub && <span>{s.sub}</span>}
            </div>
            {i < steps.length - 1 && <i className="flow-arrow" aria-hidden="true" />}
          </li>
        ))}
      </ol>
    </figure>
  );
}
