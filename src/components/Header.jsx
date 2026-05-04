export function Header() {
  return (
    <header className="page-header">
      <div>
        <p className="page-header__label">Operations dashboard</p>
        <h2>Keep every document visible from intake to renewal</h2>
      </div>

      <div className="page-header__actions">
        <button className="button button--secondary">Export summary</button>
        <button className="button button--primary">Add document</button>
      </div>
    </header>
  );
}
