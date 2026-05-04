export function StatusBoard({ groups }) {
  return (
    <section className="panel">
      <div className="panel__header">
        <div>
          <p className="panel__label">Workflow overview</p>
          <h3>Status board</h3>
        </div>
        <button className="button button--ghost">View queue</button>
      </div>

      <div className="status-list">
        {groups.map((group) => (
          <article className="status-card" key={group.title}>
            <div className="status-card__header">
              <h4>{group.title}</h4>
              <span>{group.count}</span>
            </div>
            <p>{group.description}</p>
            <div className="status-card__bar">
              <span style={{ width: `${group.progress}%` }} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
