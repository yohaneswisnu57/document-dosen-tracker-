function getOverviewMetrics(documents) {
  const total = documents.length;
  const approved = documents.filter((item) => item.status === "Approved").length;
  const expiringSoon = documents.filter((item) => item.status === "Expiring Soon").length;
  const pending = documents.filter((item) => item.status === "Pending Review").length;

  return [
    { label: "Total documents", value: total, tone: "neutral" },
    { label: "Approved", value: approved, tone: "success" },
    { label: "Expiring soon", value: expiringSoon, tone: "warning" },
    { label: "Pending review", value: pending, tone: "accent" },
  ];
}

export function OverviewCards({ documents }) {
  const metrics = getOverviewMetrics(documents);

  return (
    <section className="overview-grid" aria-label="Overview">
      {metrics.map((metric) => (
        <article className={`overview-card overview-card--${metric.tone}`} key={metric.label}>
          <span>{metric.label}</span>
          <strong>{metric.value}</strong>
        </article>
      ))}
    </section>
  );
}
