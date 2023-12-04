# Implementation

EasyEnvPreview will utilize the following technologies:

## Backend

Node.js (versions 21 and 20 LTS) with the Express web framework for request routing and API endpoint handling.
Debian 12 for the production Linux server environment as primary target for deployment, but should work in any system that works with Node.js 20 or superior.
Docker and Docker Compose used in development for consistency with production environments.
Bash scripts executed via the terminal for user-defined actions.
Helmet, rate limiting middlewares, Winston logging, and Yup validation in Express.

## Frontend

Handlebars templating engine for server-side rendering of HTML.
Vanilla CSS and JavaScript for responsive styling and interactivity.
Static assets compiled and served as part of the Express application.

## Testing

Jest for unit and integration tests.
Node.js assertions and mocks for endpoint testing.
Cypress for end-to-end user flow testing.
Ngrok tunnels to test remote endpoints during development.
Nginx reverse proxy for routing requests in production.

## Frontend 

###### Views

- **Login**
- **Route Not Found (404)**
- **Server Error (500)**
- **Repository List**
- **On the Spot # of 10**
- **No More Space on the Queue, Please Wait**
- **Log Search**

###### Notifications

- **Validation Failed (400) - Notification**
- **Action Timeout (408) - Notification**
- **Authentication Error (401)**

###### Modals

- **Action Completed (201) - Modal**
- **Action Failed (403) - Modal**
- **Log Found - Modal**

###### Shared Components

- **Header:**
  Provides navigation links, branding, or user-related information.
  
- **Footer:**
  Contains additional links, copyright information, or other relevant details.
  
- **Navigation:**
  A component that facilitates navigation between different sections or views within the application.

- **Form Components:**
  Reusable form components for consistent and efficient data input. Examples include text inputs, checkboxes, radio buttons, and select dropdowns.

- **Notification Component:**
  A reusable component for displaying notifications, including success messages, warnings, and errors.

- **Modal Component:**
  A component for displaying modals that convey critical information or require user interaction.

- **Loading Spinner Component:**
  Indicates that a process is ongoing, providing visual feedback to the user.

- **Pagination Component:**
  If applicable, a component to handle paginated views.

- **Search Component:**
  If searching is a prominent feature, a component that allows users to input search queries.

- **Card Component:**
  Present information about a specific repository along with a set of actions that users can perform.

###### Logic Code

- **Utility Components:**
  Components for utility functions like formatting dates, handling text truncation, etc.

- **Error Boundary Component:**
  A component that catches JavaScript errors anywhere in its child component tree, logging those errors, and displaying a fallback UI.

- **Internationalization (i18n) Component:**
  A component that facilitates the localization of the application for different languages.

- **Theme Switcher Component:**
  Allows users to switch between different themes (light/dark mode).

## Backend

### User Authentication:

- `POST /api/login`: Endpoint for user authentication using basic credentials.
- `POST /api/logout`: Endpoint for user logout.

### Repository Information:

- `GET /api/repositories`: Retrieve a list of repositories accessible to the user.
- `GET /api/repositories/{repositoryId}`: Get detailed information about a specific repository.

### Branch Operations:

- `GET /api/repositories/{repositoryId}/branches`: Retrieve a list of branches for a given repository.
- `POST /api/repositories/{repositoryId}/branches`: Change the current branch of a repository.

### Actions Execution:

- `GET /api/repositories/{repositoryId}/actions`: Retrieve a list of all possible actions available for a specific repository.
- `POST /api/repositories/{repositoryId}/actions/pull`: Trigger pulling the latest changes for a repository.
- `POST /api/repositories/{repositoryId}/actions/run-tests`: Execute tests for the repository.
- `POST /api/repositories/{repositoryId}/actions/preview`: Start a dynamic environment preview for the repository.
- `POST /api/repositories/{repositoryId}/actions/run/{actionId}`: Execute a custom action on a specified repository.
