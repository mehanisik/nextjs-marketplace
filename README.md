# Next Marketplace

A modern marketplace platform built with Next.js, using a monorepo architecture powered by Turborepo. This project provides a scalable and maintainable solution for building a marketplace with multiple applications and shared components.

## Overview

Next Marketplace is a comprehensive platform that includes multiple applications and shared components, designed to provide a complete marketplace solution. The project follows modern development practices and uses a monorepo structure for better code organization and reusability.

## Features

- Multi-application architecture (web, admin, creator portal)
- Shared component library
- Authentication system
- Internationalization support
- Real-time notifications
- SEO optimization
- Comprehensive documentation
- Component testing and documentation with Storybook

## Tech Stack

- **Framework**: Next.js
- **Package Manager**: Bun
- **Build System**: Turborepo
- **UI Components**: shadcn/ui
- **Styling**: Tailwind CSS
- **Database**: Supabase
- **Code Quality**:
  - TypeScript
  - Biome (Linting & Formatting)
  - Storybook (Component Documentation)

## Prerequisites

- [Bun](https://bun.sh/) (v1.2.15 or later)
- Node.js (LTS version recommended)

## Installation

```bash
# Install dependencies
bun install

# Start development servers
bun dev

# Start web application only
bun dev:web
```

## Project Structure

### Applications (`apps/`)
- `web/` - Main marketplace web application
- `admin/` - Admin dashboard for marketplace management
- `api/` - Backend API services
- `creator/` - Creator portal for marketplace vendors
- `docs/` - Project documentation
- `storybook/` - Component documentation and testing

### Shared Packages (`packages/`)
- `ui/` - Shared UI components using shadcn/ui
- `auth/` - Authentication utilities and components
- `supabase/` - Supabase client and utilities
- `env/` - Environment configuration
- `internationalization/` - i18n utilities
- `notifications/` - Notification system
- `seo/` - SEO utilities
- `testing/` - Testing utilities
- `tsconfig/` - Shared TypeScript configurations
- `next-config/` - Next.js configuration utilities

## Usage

### Available Scripts

- `bun dev` - Start all applications in development mode
- `bun build` - Build all applications and packages
- `bun test` - Run tests across all packages
- `bun lint` - Run linting across all packages
- `bun typecheck` - Run type checking across all packages
- `bun format` - Format code using Biome
- `bun start:web` - Start the web application in production mode
- `bun bump-ui` - Update shadcn/ui components

### Environment Setup

Create a `.env` file in the root directory and in each application directory as needed. Refer to the `packages/env` package for required environment variables.

## Development

### Code Style
The project uses Biome for code formatting and linting. Run `bun format` before committing changes.

### TypeScript
Strict type checking is enabled. Run `bun typecheck` to verify types.

### Testing
Write tests for new features and run `bun test` to ensure everything passes.

### Components
Use Storybook to develop and document new components.

## Documentation

- Component documentation is available in Storybook (`apps/storybook`)
- API documentation is available in the docs application (`apps/docs`)
