export function Header({ searchTerm, onSearch }) {
  return (
    <header className="page-header">
      <div>
        <p className="page-header__label">Operations dashboard</p>
        <h2>Keep every document visible from intake to renewal</h2>
      </div>

      <div className="search-bar">
        <svg
          className="search-icon"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <input
          type="text"
          placeholder="Search documents or owners..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>

      <div className="page-header__actions">
        <button className="button button--secondary">Export summary</button>
        <button className="button button--primary">Add document</button>
      </div>
    </header>
  );
}
