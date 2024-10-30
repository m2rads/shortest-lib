# Shortest

A modern, AI-powered testing framework for web applications.

## Features

- Fluent API for writing expressive UI tests
- ESM, CJS, TS and JS support

## Quick Start

```bash
# Install
npm install shortest
pnpm add shortest 
yarn add shortest

# Create config
touch shortest.config.ts
```

```typescript
// shortest.config.ts
import { ShortestConfig } from 'shortest';

export default {
  browsers: [{ name: 'chrome', headless: true }],
  baseUrl: 'http://localhost:3000'
} satisfies ShortestConfig;
```

## Writing Tests

```typescript
import { UITestBuilder } from 'shortest';

const home = new UITestBuilder('/');

home
  .test('login flow')
  .when('user enters credentials', {
    email: 'test@example.com',
    password: 'password123'
  })
  .expect('user is logged in')
  .expect('see dashboard');
```

## Development Setup

```bash
# Clone repo
git clone https://github.com/your-username/shortest.git

# Install deps
pnpm install

# Build
pnpm build

# Dev mode
pnpm dev
```

## Project Structure
```
.
├── packages/
│   └── shortest/     # Core framework
├── examples/         # Example tests
└── pnpm-workspace.yaml
```

## Config Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| browsers | BrowserConfig[] | [{name: 'chrome', headless: true}] | Test browsers |
| baseUrl | string | http://localhost:3000 | Base URL for tests |

## License

MIT
