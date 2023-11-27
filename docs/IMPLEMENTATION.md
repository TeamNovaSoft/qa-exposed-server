

The frontend of the application will be built using HTML, CSS, and JavaScript. We will use a configuration file in TOML to store settings and credentials.

The backend of the application will be built using Rust and Axum. We will use the Axum framework to handle HTTP requests and responses, and we will use the Diesel ORM to interact with our database.

We will not be using a database for this project. Instead, we will store data in memory using the HashMap data structure from the Rust standard library.

The application will have no user information, so there will be no need to implement any authentication or authorization features.

I would like you to help me with the following tasks:

    Implementing the frontend using HTML, CSS, and JavaScript
    Creating a configuration file in TOML for storing settings and credentials
    Writing the backend code using Rust and Axum
    Implementing the database logic using Diesel ORM
    Testing the application to ensure it is working correctly

Please let me know if you have any questions or concerns about this project. 

Frontend 

###### Views

- **Login**
- **Authentication Error (401)**
- **Route Not Found (404)**
- **Server Error (500)**
- **Repository List**
- **On the Spot # of 10**
- **No More Space on the Queue, Please Wait**
- **Log Search**

###### Notifications

- **Validation Failed (400) - Notification**
- **Action Timeout (408) - Notification**

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

###### Logic Code

- **Context Providers:**
  Context providers to manage global state that needs to be accessed by multiple components.

- **Utility Components:**
  Components for utility functions like formatting dates, handling text truncation, etc.

- **Error Boundary Component:**
  A component that catches JavaScript errors anywhere in its child component tree, logging those errors, and displaying a fallback UI.

- **Internationalization (i18n) Component:**
  A component that facilitates the localization of the application for different languages.

- **Theme Switcher Component:**
  Allows users to switch between different themes (light/dark mode).