# Metabase embedding demo

A fully working code example to showcase Metabase embedding capabilitiees.

## Local

### Pre-requisites

In order to run the embedding demo on your local, you need to have installed:

- [NodeJS](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)

### Install

#### Configuration

1. Open the [.env.local](https://github.com/metabase/edumation-embedding-demo/blob/master/.env.local) file
2. Add your [JWT](https://www.metabase.com/glossary/jwt) shared secret as follow:

    ```yaml
    METABASE_JWT_SHARED_SECRET="edumation-MB-instance-shared-secret"
    ```

3. Update all `.env.*` files relevant properties to match your Metabase instance:

    ```yaml
    METABASE_APP_ID="edumation"
    METABASE_APP_DOMAIN="metabase.com"
    ```

#### Start

1. Using the terminal, go to the root of the project
2. Run the command ```yarn``` to install the Node packages
3. Run the command ```yarn dev``` to start the app
4. Go to [localhost:3003](http://localhost:3003) to check that it is working

### Troubleshootings

Please read the documentation regarding [Metabase session samesite cookie](https://www.metabase.com/docs/latest/configuring-metabase/environment-variables#mb_session_cookie_samesite) if your instance is running in a custom domain and you have troubles with the embedding in another domain or in your localhost.

Custom cookie can be set in your instance env vars.

## Docker

### Pre-requisites

In order for this to work you need Docker installed and running on your machine.

### How to run

1. Set up your token in the [docker-compose.yaml](https://github.com/metabase/embedding-demo/blob/master/docker-compose.yaml#L17) file
2. Run the command: `docker compose up`
3. When the containers finish loading, check that everything works on [localhost:8080](http://localhost:8080)

### Notes

- If you want to get inside the Metabase container to check how everything is configured, then you can use logins `fake1@edumation.com` or `fake2@edumation.com` with password `Metapass123!`
- Metabase is running in [localhost:3000](http://localhost:3000)

### Troubleshootings

In case you get any error like:

```bash
Bind for 0.0.0.0:3000 failed: port is already allocated
```

You might consider changing the ports where the containers are exposing their services, in this case port 3000 (change the line to [3001:3000](https://github.com/metabase/embedding-demo/blob/master/docker-compose.yaml#L11)) or the web app in port 8080 (change the line to [8081:8080](https://github.com/metabase/embedding-demo/blob/master/docker-compose.yaml#L49))
