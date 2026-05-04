export function ActivityPanel({ activity }) {
  return (
    <section className="panel">
      <div className="panel__header">
        <div>
          <p className="panel__label">Recent updates</p>
          <h3>Team activity</h3>
        </div>
      </div>

      <div className="activity-list">
        {activity.map((item) => (
          <article className="activity-item" key={`${item.user}-${item.time}`}>
            <div className="activity-item__badge">{item.user.slice(0, 1)}</div>
            <div>
              <strong>{item.user}</strong>
              <p>{item.action}</p>
            </div>
            <span>{item.time}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
