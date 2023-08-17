# Metabase interactive embedding demo

This is the sample code for [Metabase's Edumation interactive embedding demo](https://www.metabase.com/embedding-demo), which showcases Metabase's interactive embedding capabilities.

[Metabase](https://www.metabase.com/) is the easy, open-source way for everyone in your company to ask questions and learn from data.

[Interactive embedding](https://www.metabase.com/docs/master/embedding/interactive-embedding) makes implementing multi-tenant, self-service analytics in your app easy.

## Running the demo using Docker

Use this option to run the demo alongside Metabase locally in two Docker containers without installing any dependencies.

### Pre-requisites

You need to have Docker installed and running on your machine.

### How to run

1. Insert your Metabase license token in the [docker-compose.yaml](https://github.com/metabase/embedding-demo/blob/master/docker-compose.yaml#L17) file
2. Run the command: `docker compose up`
3. When the containers finish loading, check that everything works by opening [localhost:8080](http://localhost:8080)

### Notes

- You can sign into the local Metabase instance to explore using the usernames `fake1@edumation.com` or `fake2@edumation.com` and password `Metapass123!`
- Metabase runs on [localhost:3000](http://localhost:3000)

### Troubleshooting

In case you get an error like this:

```bash
Bind for 0.0.0.0:3000 failed: port is already allocated
```

You might consider changing the ports where the containers are exposing their services:
* in this case Metabase on port 3000 (change the line to [3001:3000](https://github.com/metabase/embedding-demo/blob/master/docker-compose.yaml#L11)) or
* or the web app on port 8080 (change the line to [8081:8080](https://github.com/metabase/embedding-demo/blob/master/docker-compose.yaml#L49))

## Local development

These instructions are to run the embedding app locally pointing to a separate Metabase instance. The Metabase instance needs certain state and this is not covered here (users, data, dashboards, ...).

### Pre-requisites

In order to run the embedding demo on your local machine, you need to have installed:

- [NodeJS](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)

You also need a Metabase instance with a Pro/Enterprise license.

### Installation

#### Configuration

1. Open the [.env.local](https://github.com/metabase/edumation-embedding-demo/blob/master/.env.local) file
2. Add your [JWT](https://www.metabase.com/glossary/jwt) shared secret as follows:

    ```yaml
    METABASE_JWT_SHARED_SECRET="edumation-MB-instance-shared-secret"
    ```

3. Update all `.env.*` files relevant properties to match your Metabase instance:

    ```yaml
    METABASE_APP_ID="edumation"
    METABASE_APP_DOMAIN="metabase.com"
    ```

> ⚠️ Warning: avoid committing the `.env.local` file, as that file contains your instance's JWT shared secret that needs to stay **secret**.

#### Start

1. Using the terminal, go to the root of the project
2. Run the command ```yarn``` to install the Node packages
3. Run the command ```yarn dev``` to start the app
4. Go to [localhost:3003](http://localhost:3003) to check that it is working

### Troubleshooting

Please read the documentation regarding [Metabase session samesite cookie](https://www.metabase.com/docs/latest/configuring-metabase/environment-variables#mb_session_cookie_samesite) if your Metabase instance and application are running on different domains, e.g. embedding Metabase cloud from another domain or from localhost.

A custom cookie can be set in your instance env vars.