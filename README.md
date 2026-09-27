# SDETTraining — Playwright + TypeScript Automation Framework

A Page-Object-Model test automation framework built with **Playwright** and
**TypeScript**, targeting [EventHub](https://eventhub.rahulshettyacademy.com)
(a practice event-management web app) as the system under test, with a CI
pipeline wired through both GitHub Actions and Jenkins.

## Stack

| Concern | Tool |
|---|---|
| Browser automation & test runner | Playwright (`@playwright/test`) |
| Language | TypeScript |
| Reporting | Allure (`allure-playwright`) + Playwright's built-in HTML report |
| Config / secrets | `dotenv` (`.env`, gitignored) |
| CI | GitHub Actions (`.github/workflows/playwright.yml`) **and** Jenkins (`Jenkinsfile`) |

## What this demonstrates

- **Page Object Model**: `LoginPO`, `HomePO`, `EventPO`, coordinated through
  a `POManager`, rather than locators scattered across test files.
- **Custom fixtures** (`customFixtures.ts`) extending Playwright's base test
  object for shared setup across specs.
- **Environment-based configuration**: credentials and the target base URL
  are read from environment variables via `dotenv`, never hardcoded in
  test files.
- **Dual CI pipelines**: the same suite runs through both a GitHub Actions
  workflow and a Jenkins pipeline — two different CI ecosystems, not just
  one.
- **Reporting**: Allure for trend/history reporting, alongside Playwright's
  own HTML report and trace viewer for debugging failures.

## Project layout

```
pageObjects/
├── LoginPO.ts
├── HomePO.ts
├── EventPO.ts
└── POManager.ts
tests/
├── CreateEvent.spec.ts      # Core POM-driven end-to-end flow
├── customFixtures.ts        # Shared Playwright fixtures
└── ...                      # Additional specs covering individual
                              # Playwright features (alerts, drag-and-drop,
                              # new windows, uploads/downloads, etc.)
playwright.config.ts
.github/workflows/playwright.yml
Jenkinsfile
```

## Setup

Requires **Node.js**.

```bash
git clone <this-repo-url>
cd SDETTraining
npm install
npx playwright install
```

Copy the environment template and fill in real values (this file is
gitignored and never committed):

```bash
cp .env.example .env
```

```
BASE_URL=https://eventhub.rahulshettyacademy.com
ADMIN_USERNAME=<your-test-account-username>
ADMIN_PASSWORD=<your-test-account-password>
```

## Running the tests

```bash
npx playwright test
```

Run a single spec:

```bash
npx playwright test tests/CreateEvent.spec.ts
```

View the HTML report after a run:

```bash
npx playwright show-report
```

Generate and view the Allure report:

```bash
npx allure generate allure-results --clean -o allure-report
npx allure open allure-report
```

## Notes

- `node_modules/`, `test-results/`, `playwright-report/`, `allure-results/`,
  `allure-report/`, and `.env` are excluded via `.gitignore` and are not
  checked in.
- This project was built while completing structured Playwright training
  against a practice application, then extended with the Page Object Model,
  custom fixtures, and dual CI pipelines above.
