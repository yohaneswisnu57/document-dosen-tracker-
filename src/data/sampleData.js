export const sampleDocuments = [
  {
    id: 1,
    name: "Vendor Agreement - Aruna Labs",
    owner: "Maya",
    category: "Contract",
    updatedAt: "May 02, 2026",
    expiryDate: "Aug 15, 2026",
    status: "Approved",
  },
  {
    id: 2,
    name: "Employee Handbook v4",
    owner: "Rafi",
    category: "Policy",
    updatedAt: "May 01, 2026",
    expiryDate: "Dec 31, 2026",
    status: "Pending Review",
  },
  {
    id: 3,
    name: "Tax Registration Packet",
    owner: "Nadia",
    category: "Compliance",
    updatedAt: "Apr 29, 2026",
    expiryDate: "May 18, 2026",
    status: "Expiring Soon",
  },
  {
    id: 4,
    name: "Office Lease Renewal",
    owner: "Ardi",
    category: "Legal",
    updatedAt: "Apr 26, 2026",
    expiryDate: "May 21, 2026",
    status: "Pending Review",
  },
  {
    id: 5,
    name: "Client Onboarding Checklist",
    owner: "Sarah",
    category: "Operations",
    updatedAt: "Apr 25, 2026",
    expiryDate: "Nov 05, 2026",
    status: "Approved",
  },
  {
    id: 6,
    name: "Insurance Certificate",
    owner: "Dimas",
    category: "Finance",
    updatedAt: "Apr 24, 2026",
    expiryDate: "May 12, 2026",
    status: "Expiring Soon",
  },
];

export const statusGroups = [
  {
    title: "Incoming",
    count: 14,
    progress: 74,
    description: "Files uploaded this week and waiting for metadata validation.",
  },
  {
    title: "In review",
    count: 7,
    progress: 52,
    description: "Documents with assigned reviewers and active approval tasks.",
  },
  {
    title: "Needs renewal",
    count: 3,
    progress: 31,
    description: "Expiring files flagged for action before their deadline.",
  },
];

export const recentActivity = [
  { user: "Maya", action: "approved the vendor agreement renewal package.", time: "10m ago" },
  { user: "Rafi", action: "requested edits on the employee handbook update.", time: "35m ago" },
  { user: "Nadia", action: "uploaded a revised tax registration form.", time: "1h ago" },
  { user: "Dimas", action: "marked the insurance certificate for urgent review.", time: "2h ago" },
];
