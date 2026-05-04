---
name: react-component-factory
description: Automated workflow for generating scalable and reusable React components (Function/Class) with standardized folder structures and Vanilla CSS patterns. Use when adding new UI elements or features to ensure architectural consistency.
---

# React Component Factory

## Overview
This skill provides a standardized workflow for creating high-quality, reusable React components. It enforces a folder-based structure and provides templates for both functional and class components that follow modern best practices.

## Workflow

### 1. Identify Component Type
- **Functional (fc):** Use for almost all components.
- **Class (cc):** Use only for Error Boundaries or legacy requirements.

### 2. Generate Component
Run the generation script to create the component folder and files.

**Usage:**
```bash
node scripts/generate_component.cjs <Name> <type: fc|cc> [optional_path]
```

**Example:**
To create a `UserCard` functional component in the default `src/components` folder:
```bash
node scripts/generate_component.cjs UserCard fc
```

### 3. Implement Logic & Styles
- Reference `references/patterns.md` for guidelines on reusability and scalability.
- Use the generated `.css` file for scoped styling.
- Export everything via `index.js` for clean imports.

## Guidelines
- **Props:** Always accept `className` and `children` where applicable.
- **Naming:** Use PascalCase for component names (e.g., `PrimaryButton`).
- **Styling:** Use the component's kebab-case name as the root CSS class (e.g., `primary-button`).

## Resources

### scripts/
- `generate_component.cjs`: Automates the creation of the component directory and boilerplate files.

### references/
- `patterns.md`: Detailed guide on React component best practices for scalability and reusability.

### assets/
- `templates/`: Contains the `.jsx`, `.css`, and `index.js` templates used by the generator script.
