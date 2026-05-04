function StatusPill({ status }) {
  const toneMap = {
    Approved: "success",
    "Pending Review": "accent",
    "Expiring Soon": "warning",
    Rejected: "danger",
  };

  return <span className={`status-pill status-pill--${toneMap[status] || "neutral"}`}>{status}</span>;
}

export function DocumentTable({ documents }) {
  return (
    <section className="panel">
      <div className="panel__header">
        <div>
          <p className="panel__label">Registry</p>
          <h3>Tracked documents</h3>
        </div>
        <div className="filter-row">
          <button className="button button--ghost">All types</button>
          <button className="button button--ghost">This month</button>
        </div>
      </div>

      <div className="table-wrap">
        <table className="document-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Owner</th>
              <th>Category</th>
              <th>Updated</th>
              <th>Expiry</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {documents.map((document) => (
              <tr key={document.id}>
                <td>
                  <strong>{document.name}</strong>
                </td>
                <td>{document.owner}</td>
                <td>{document.category}</td>
                <td>{document.updatedAt}</td>
                <td>{document.expiryDate}</td>
                <td>
                  <StatusPill status={document.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
