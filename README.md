<img src="./.github/lukittu.png" alt="Lukittu GitHub-repository banner">

<div align="center">

[![Build Status](https://img.shields.io/github/actions/workflow/status/YueMi-Development/Lukittu-License-System/pipeline.yml?branch=main&style=flat&colorA=4153af&colorB=4153af)](https://github.com/YueMi-Development/Lukittu-License-System/actions?query=pipeline)
[![License](https://img.shields.io/github/license/YueMi-Development/Lukittu-License-System?style=flat&colorA=4153af&colorB=4153af)](https://github.com/YueMi-Development/Lukittu-License-System/blob/main/LICENSE)

</div>

# [Lukittu](https://lukittu.com)

**Lukittu** (a Finnish word meaning _"locked"_) is a modern software licensing service that provides robust APIs to enhance the security and trackability of your applications. This fork is maintained by **YueMi-Development** and is customized for internal licensing management and distribution use within the YueMi ecosystem.

## Features

- **Flexible License Management** – Support for various licensing models
- **Customer Management** – Organize and manage licensees efficiently
- **Product Release Versioning** – Track and manage different software versions
- **Detailed Analytics & Logging** – Monitor usage and detect potential abuse
- **Team Collaboration** – Work with your team seamlessly
- **Comprehensive API** – Easily integrate Lukittu with your applications

## About this Fork

This repository is a fork of [KasperiP/lukittu](https://github.com/KasperiP/lukittu), originally created by **KasperiP**.

This fork is maintained by **YueMi-Development** and is customized for internal licensing management and distribution use within the YueMi ecosystem.

## Local Development

Lukittu uses a pnpm workspace monorepo structure with the following packages:

- `apps/web`: The core Next.js application
- `apps/bot`: Lukittu's Discord bot
- `packages/shared`: Shared code and utilities

To get started with the project locally, follow the steps below.

#### 1. Setup Environment Variables

Lukittu requires three different `.env` files for each part of the application **on local development**:

- **Web Application:** Copy `apps/web/.env.example` to `apps/web/.env`
- **Bot Application:** Copy `apps/bot/.env.example` to `apps/bot/.env`
- **Shared Package:** Copy `packages/shared/.env.example` to `packages/shared/.env`

Each `.env` file contains configuration specific to its respective application component. Fill in all required values in each file before proceeding.

> **Note:** The `DATABASE_URL` must be consistent across all environment files that require it.

#### 2. Install Node.js, Docker, and pnpm

Ensure the following tools are installed on your system:

- **Node.js** v20+ (Download from [nodejs.org](https://nodejs.org/))
- **Docker** (Install from [docker.com](https://www.docker.com/get-started))
- **pnpm** v9.11.0+ (Package manager for Node.js, install via [pnpm.io](https://pnpm.io/))

#### 3. Install Dependencies

Once the environment is set up, install dependencies for all workspaces:

```bash
pnpm install
```

#### 4. Start Local Databases

To start the local databases (PostgreSQL & Redis), use Docker Compose:

```bash
docker compose -f docker-compose-local.yml up
```

This command will spin up the containers for both PostgreSQL and Redis.

#### 5. Run Database Migrations

Run the necessary database migrations to set up your database schema:

```bash
pnpm --filter @lukittu/shared migrate
```

#### 6. Start the Application

After the migrations are complete, start the local application:

```bash
pnpm dev
```

This will run the dev script for all workspaces simultaneously.

To run commands for a specific workspace, use the `--filter` flag:

```bash
# Run Next.js development server only
pnpm --filter lukittu-web dev

# Generate Prisma client
pnpm --filter @lukittu/shared generate
```

#### 7. Access the Application

Navigate to `http://localhost:3000` in your browser, and you should have everything running!

### Troubleshooting

- Ensure Docker is running before starting the databases.
- Make sure to have all environment variables filled correctly in the `.env` file.
- If you encounter dependency issues, try running `pnpm install --force` to refresh dependencies.

## Documentation

For comprehensive documentation on how to use Lukittu, visit: [https://docs.lukittu.com/introduction](https://docs.lukittu.com/introduction). **The documentation source can be found in its own repository [here](https://github.com/KasperiP/lukittu-docs).**

## Contributing

We welcome contributions from the community! Whether it's bug fixes, feature improvements, or documentation updates, your help is appreciated.

### How to Contribute:

1. **Open an issue** – Discuss proposed changes before starting work
2. **Fork the repository** – Create your own copy to work on
3. **Create a feature branch** – Organize your changes
4. **Make your changes** – Implement improvements or fixes
5. **Submit a pull request** – Share your work with the community

Discussing changes before implementation ensures efficient collaboration and valuable contributions.

#### Contributors

<a href="https://github.com/YueMi-Development/Lukittu-License-System/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=YueMi-Development/Lukittu-License-System" />
</a>

## License

Lukittu is licensed under the **GNU Affero General Public License v3.0 (AGPL-3.0)**.

This project is a fork of [KasperiP/lukittu](https://github.com/KasperiP/lukittu) by **KasperiP**, licensed under AGPL-3.0.
