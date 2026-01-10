# VendSys - Micromarkets Form

A modern, responsive web-based recreation of the VendSys Micromarkets form, built with React, TypeScript, Tailwind CSS, and following Nayax brand identity guidelines.

## Running the Project

### Prerequisites

- Node.js 18+
- npm or yarn package manager

### Installation & Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open in browser
# Navigate to http://localhost:5173 (default Vite port)
```

### Building for Production

```bash
# Create production build
npm run build

# Preview production build locally
npm run preview
```

## Technology Stack

### Core Framework

- **React 19.2.0** - UI library with modern hooks
- **TypeScript 5.9.3** - Static type checking
- **Vite 7.2.4** - Fast build tool and dev server

### Styling & UI Components

- **Tailwind CSS 4.1.18** - Utility-first CSS framework
- **shadcn/ui** - High-quality, accessible React components
- **Heroicons 2.2.0** - Beautiful SVG icons
- **Radix UI** - Unstyled, accessible component primitives

## Notes on Any Design Decisions Made

- I brought Save button on top of the form instead of the bottom, just like the Nayax Web print.
- Tried to use their colors in primary buttons, disable status and things like that
- Did not use Syncfusion or other because had to register to the website and didn't want to spend time on that and also the learning curve.

## Assumptions and Limitations

- Had to discover what VDI is in the vending machine/micro market context
  - With this I could understand the relaton between form and tables
- Assumed "New" button clears the form so you can add a new market
- Assumed "Delete" button would call an API that deletes the selected row
- Assumed "Save" button update existing info or creates a new market, depending the context
- Assumed every informaton **should** be showed in one page just as the original windows form.
  - Could split the view in more tabs.
- Did not implement any form validation due time and because I don't know the business rules, what is required or not et cetera. That's why the form is not working.

## Future Enhancements (if I had more time)

- Form validation with error handling
  - Probably using zod + react hook form
- Advanced table features (sorting, pagination, filtering)
- API integration for real data
- Data persistence/local storage/
  - Use TanStack for data fetching + cache
- More localization languages
- Advanced filtering and search
- Unit tests with jest + react testing library
- Break form into smaller components (Info, Credit Card, Provider, VDI)
  - This would make future maintenance easier

## Language Switching

Click the language switcher button (top-right corner) to toggle between English and Portuguese (Brazil). Your selection persists within the session.
