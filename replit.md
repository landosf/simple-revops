# Overview

Simple Revenue is a business-focused landing page application designed to help companies align their revenue ecosystems across sales, marketing, customer success, and finance teams. The application presents a unified solution to eliminate costly misalignment and drive measurable growth through structured revenue operations. It features a single-page website with smooth scrolling navigation, compelling statistics about revenue team misalignment, solution presentation, case studies, and a call-to-action for booking exploration calls.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The application uses a modern React-based frontend built with Vite as the build tool. The frontend follows a component-based architecture with:

- **React 18** with TypeScript for type safety and modern React features
- **Vite** for fast development and optimized production builds
- **Wouter** for lightweight client-side routing
- **Tailwind CSS** with shadcn/ui component library for consistent, modern UI design
- **TanStack Query** for data fetching and state management
- **React Hook Form** with Zod validation for form handling

The UI system is built around shadcn/ui components providing a comprehensive set of accessible, customizable components including buttons, cards, forms, navigation, and layout elements. The design uses a neutral color scheme with CSS variables for theming flexibility.

## Backend Architecture
The backend follows a minimal Express.js architecture designed for future expansion:

- **Express.js** server with TypeScript support
- **In-memory storage interface** with abstract storage pattern for easy database migration
- **Modular route registration** system for scalable API development
- **Development-optimized** with Vite middleware integration for seamless full-stack development

The storage layer uses an interface-based approach allowing easy transition from in-memory storage to persistent database solutions without changing the application logic.

## Database Integration
The application is configured for PostgreSQL integration using:

- **Drizzle ORM** for type-safe database operations and schema management
- **Neon Database** serverless PostgreSQL for production deployment
- **Schema-first approach** with shared types between frontend and backend
- **Migration system** using Drizzle Kit for database version control

The current schema includes a basic user management system with plans for expansion to support revenue analytics and customer data.

## Build and Deployment
The application uses a unified build process:

- **Development**: Vite dev server with Express backend integration
- **Production**: Static frontend build with Express server bundle
- **ESBuild** for efficient server-side bundling
- **TypeScript compilation** with shared types across the stack

# External Dependencies

## UI and Design
- **Radix UI** primitives for accessible component foundations
- **Tailwind CSS** for utility-first styling approach
- **Lucide React** for consistent iconography
- **Inter font** from Google Fonts for professional typography

## Development Tools
- **Replit** integration for cloud development environment
- **Cartographer** plugin for Replit-specific development features
- **Runtime error overlay** for enhanced development experience

## Form and Data Handling
- **React Hook Form** with **Hookform Resolvers** for form validation
- **Zod** for runtime type validation and schema definition
- **Date-fns** for date manipulation and formatting

## Planned Integrations
- **Calendly** for scheduling exploration calls (currently placeholder implementation)
- **Analytics platforms** for tracking user engagement and conversion
- **CRM systems** for lead management and customer tracking