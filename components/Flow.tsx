// A simple, responsive "how it fits together" diagram. Conceptual — not a screenshot.
export type FlowStep = { title: string; sub?: string };

export default function Flow({ steps, label }: { steps: FlowStep[]; label: string }) {
  return (
    <figure className="flow" aria-label={label}>
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
      <figcaption>Conceptual diagram — illustrates the approach, not a screenshot of the product.</figcaption>
    </figure>
  );
}
