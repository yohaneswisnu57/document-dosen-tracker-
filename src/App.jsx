import { useState, useMemo } from "react";
import { Header } from "./components/Header";
import { OverviewCards } from "./components/OverviewCards";
import { StatusBoard } from "./components/StatusBoard";
import { DocumentTable } from "./components/DocumentTable";
import { ActivityPanel } from "./components/ActivityPanel";
import { sampleDocuments, recentActivity, statusGroups } from "./data/sampleData";
import "./styles/app.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = useMemo(() => {
    const cats = new Set(sampleDocuments.map((doc) => doc.category));
    return ["All", ...Array.from(cats)];
  }, []);

  const filteredDocuments = useMemo(() => {
    return sampleDocuments.filter((doc) => {
      const matchesSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           doc.owner.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "All" || doc.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div>
          <p className="sidebar__eyebrow">Workspace</p>
          <h1>Document Tracker</h1>
          <p className="sidebar__copy">
            A starter dashboard for tracking uploads, approvals, renewals, and
            follow-up actions across your document pipeline.
          </p>
        </div>

        <nav className="sidebar__nav" aria-label="Primary">
          <button className="sidebar__nav-item sidebar__nav-item--active">
            Dashboard
          </button>
          <button className="sidebar__nav-item">Documents</button>
          <button className="sidebar__nav-item">Approvals</button>
          <button className="sidebar__nav-item">Reports</button>
          <button className="sidebar__nav-item">Settings</button>
        </nav>

        <div className="sidebar__card">
          <span className="sidebar__card-label">Health score</span>
          <strong>89%</strong>
          <p>Most files are up to date. Two contracts need attention this week.</p>
        </div>
      </aside>

      <main className="main-content">
        <Header searchTerm={searchTerm} onSearch={setSearchTerm} />
        <OverviewCards documents={sampleDocuments} />

        <section className="content-grid">
          <StatusBoard groups={statusGroups} />
          <ActivityPanel activity={recentActivity} />
        </section>

        <DocumentTable 
          documents={filteredDocuments} 
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
      </main>
    </div>
  );
}

export default App;
