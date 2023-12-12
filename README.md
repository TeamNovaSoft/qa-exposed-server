# EasyEnvPreview

<!-- PROJECT SHIELDS -->
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues-open][issues-open-shield]][issues-url]
[![Issues-closed][issues-closed-shield]][issues-url]
[![Contributors][contributors-shield]][contributors-url]
[![contributions welcome][contributions-welcome]][issues-url]

<!-- PROJECT LOGO -->

|                                              EasyEnvPreview                                              |
| :------------------------------------------------------------------------------------------------------: |
|                                              ![app-icon][]                                               |
| A web application focused on enabling developers and QA engineers to easily switch Git branches and run tests across multiple repositories to validate code changes |
|                          [🐞 Report a bug or 🙋‍♂️ request a feature][issues-url]                           |

- [EasyEnvPreview](#easyenvpreview)
  - [The project](#the-project)
  - [Best Practices for Defining Actions](#best-practices-for-defining-actions)
  - [Using the UI](#using-the-ui)
  - [Getting Started](#getting-started)
    - [Docker Setup](#docker-setup)
    - [Local Setup](#local-setup)
    - [Running Tests](#running-tests)
- [Author](#author)
- [Contributing](#contributing)
- [Show your support](#show-your-support)
- [License](#license)

## The project

This tool is perfect for teams that want to streamline their workflow and improve productivity.

We understand that some of our users may have limited experience with GitHub, so we've designed this tool to be user-friendly and accessible to everyone. Our tool only works with a configuration file and valid terminal scripts in bash, which means you can easily integrate it with your existing workflows and tools.

The core goal is to provide a robust server environment where users can switch Git branches, execute tests, and preview dynamic renditions of the codebase. This alleviates issues with slow local machines and networks.

The target users are primarily members of QA teams, with an expected 2-10 repositories connected, each with around 5 branches typically.

Key features include branch switching, test running, and dynamic previews. Custom terminal commands can also be configured as actions. Unlike a direct GitHub integration, this project does not utilize any external API for GitHub or any other provider. Instead, users are required to define any necessary integrations within the scripts themselves.

Sessions expire after 15 minutes to 2 hours of inactivity. Strict data privacy practices are followed, with no Personally Identifiable Information (PII) collected or stored. Logging is directed to local text files, and a basic health check endpoint is provided for monitoring.

It's important to note that direct terminal commands are not evaluated from the website. Instead, only pre-programmed scripts can be executed. This approach enhances security by preventing users from executing potentially dangerous commands directly on the server's terminal. This design ensures a controlled and secure environment for executing predefined actions.

In addition, we've made sure that our tool is easy to set up and use, so you can get started quickly and start enjoying the benefits of a centralized server. We're confident that EasyEnvPreview will be a valuable asset to your team and help you streamline your workflows.

## Best Practices for Defining Actions

When creating custom actions to execute via EasyEnvPreview, keep in mind the following best practices:

- Avoid hardcoding secrets or passwords: Any sensitive credentials should be passed in via environment variables or key management services. Hardcoded secrets in scripts risk exposure.
- Limit filesystem access: Scripts should not erase files or modify filesystem locations outside of the repository workspace. This prevents unintended changes.
- Sanitize user input: If accepting input from the UI, validate and sanitize to prevent injection of arbitrary code.
- Follow least privilege principles: Each script should have the minimum permissions necessary to do its job. Avoid overprivileged actions.
- Do not log sensitive information: Avoid logging personal data, API keys, access tokens, or other confidential information.
- Use timeout limits: Scripts running too long can overloaded shared resources. Use timeouts, rate limiting, throttling.
- Validate return codes: Check return codes of commands and handle failures appropriately.
- Consider dependencies: Will scripts require additional languages, packages, or libraries to run successfully?
- Plan for contingencies: Have an error handling strategy for crashes, hangs, exceptions. Log enough for diagnostics.
- Comment properly: Use comments to document the script’s purpose, author, dependencies, changes etc.

## Using the UI

EasyEnvPreview allows QA testers and other non-technical users to validate branches without coding knowledge. Here is a step-by-step example:

- Login to the EasyEnvPreview dashboard.
- Locate the "Server" repository card and click the "Change Branch" dropdown menu.
- Select the feat123-server branch specified by the developer.
- Repeat steps 2-3 to switch the "Client" repository to the feat123-client branch.
- Find the "Run Locally" action for the Server repository and click the "Run" button.
- Similarly, run the "Run Locally" action for the Client repository.
- On the Client repo, click the "Preview" action's "Run" button.
- Once the "Preview" action finishes, copy the URL from the response shown on the card.
- Paste that URL into your browser to view the application running from those feature branches.
- You can now validate, test, and provide feedback to the developer.

## Getting Started

To start the EasyEnvPreview server, you have two options:

### Docker Setup

Prerequisites:

- Docker and Docker Compose installed

Steps:

1. Clone the repository 
2. Navigate to the project directory
3. Run `docker-compose up -d`
4. Access the application at `http://localhost:PORT` (replace `PORT` with the actual port defined in the `.env` file).

### Local Setup 

Prerequisites:

- Node.js 20+ 
- git

Steps:

1. Clone the repository
2. Run `npm install` to install dependencies 
3. Create `.env` file with desired environment variables
4. Run `npm run dev` to start the dev server
5. Access the application at `http://localhost:3000` or replace 3000 with the actual port defined in the `.env` file.

### Running Tests

To run all tests:

```bash
npm run test
```

To run integration tests only:

```bash 
npm run test:integration
```

To run end-to-end tests:

```
npm run test:e2e
```

# Author

|              Picture               |                                                               Contact                                                               | Role |
| :--------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------: | ---- |
|    [Victor Peña][victor-github]    | ![email-icon][] Email me to [victordev2002@gmail.com][victor-email] / ![linkedin-icon][] Connect to [my Linkedin][victor-linkedin]  |  Mantainer
|          ![victor-pic][]           |                                                 Mid Senior Developer                                                 |
|   [Israel Laguan][author-github]   | ![email-icon][] Email me to [contact@israellaguan.com][author-email] / ![linkedin-icon][] Connect to [my Linkedin][author-linkedin] | Mantainer
|          ![author-pic][]           |                                                  Senior Developer                                                  |

# Contributing

[![contributions welcome][contributions-welcome]][issues-url]

🤝 Contributions, issues, and feature requests are welcome! Feel free to check the [issues page][issues-url].

# Show your support

🤗 Give a ⭐️ if you like this project!

Icons from:

<a href="https://icons8.com/icon/13917/full-image">Icons8</a>

# License

[![License][badge-license]](http://badges.mit-license.org)

📝 This project is licensed under the [MIT](LICENSE)\
Feel free to fork this project and improve it

<!-- MARKDOWN LINKS & IMAGES -->
[contributors-shield]: https://img.shields.io/github/contributors/TeamNovaSoft/qa-exposed-server?style=for-the-badge
[contributors-url]: https://github.com/TeamNovaSoft/qa-exposed-server/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/TeamNovaSoft/qa-exposed-server?style=for-the-badge
[forks-url]: https://github.com/TeamNovaSoft/qa-exposed-server/network/members
[stars-shield]: https://img.shields.io/github/stars/TeamNovaSoft/qa-exposed-server?style=for-the-badge
[stars-url]: https://github.com/TeamNovaSoft/qa-exposed-server/stargazers
[issues-open-shield]: https://img.shields.io/github/issues/TeamNovaSoft/qa-exposed-server?style=for-the-badge
[issues-url]: https://github.com/TeamNovaSoft/qa-exposed-server/issues
[issues-closed-shield]: https://img.shields.io/github/issues-closed/TeamNovaSoft/qa-exposed-server?style=for-the-badge
[contributions-welcome]: https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=for-the-badge
[badge-license]: https://img.shields.io/:license-mit-blue.svg?style=for-the-badge
[app-icon]: https://img.icons8.com/external-yogi-aprelliyanto-outline-color-yogi-aprelliyanto/32/external-preview-image-coding-and-programming-yogi-aprelliyanto-outline-color-yogi-aprelliyanto.png
[author-pic]: https://avatars2.githubusercontent.com/u/36519478?s=460&v=4
[author-github]: https://israel-laguan.github.io
[author-linkedin]: https://www.linkedin.com/in/israellaguan
[author-email]: mailto:contact@israellaguan.com
[linkedin-icon]: https://img.icons8.com/color/20/000000/linkedin.png
[email-icon]: https://img.icons8.com/color/20/000000/message-squared.png
[app-icon]: docs/icon.png
[victor-github]: https://github.com/Katsu08
[victor-pic]: https://avatars.githubusercontent.com/u/66505715?v=4
[victor-email]: mailto:victordev2002@gmail.com
[victor-linkedin]: https://www.linkedin.com/in/v%C3%ADctor-pe%C3%B1a-348a3918a/
