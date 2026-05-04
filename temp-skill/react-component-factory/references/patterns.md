# React Component Patterns

## Scalability & Reusability

To ensure components are scalable and reusable, follow these patterns:

### 1. Folder Structure
Always group components by folder. This keeps logic, styles, and tests co-located.
```
MyComponent/
├── index.js          # Entry point
├── MyComponent.jsx   # Logic and View
└── MyComponent.css   # Scoped Styles
```

### 2. Composition over Configuration
Avoid deep prop-drilling or overly complex "config" objects. Use `children` to allow users of the component to inject their own content.

### 3. Prop-Driven Styling
Allow parents to adjust the layout by accepting a `className` prop.
```jsx
export const MyComponent = ({ className = '', children }) => (
  <div className={`my-component ${className}`}>
    {children}
  </div>
);
```

### 4. Decoupling Logic
If a component has complex state, extract it into a custom hook. This makes the UI component "pure" and easier to test/reuse.

## When to use Functional vs Class Components

- **Functional Components (FC):** Default choice. Use for all UI, data fetching (with `useEffect`), and state management (with `useState`).
- **Class Components (CC):** Only use for **Error Boundaries** or if working with legacy libraries that require lifecycle methods not yet available in hooks (rare).
