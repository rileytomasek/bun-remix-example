# Welcome to Remix!

This is an example of using Bun and Remix (v2) together. It uses the Bun HTTP 
server and executes both dev and prod builds with Bun (not Node).

## Development

Install Bun:

```sh
curl -fsSL https://bun.sh/install | bash
```

Start the Remix development asset server and the Express server by running:

```sh
bun run dev
```

This starts your app in development mode, which will purge the server require cache when Remix rebuilds assets so you don't need a process manager restarting the express server.

## Deployment

First, build your app for production:

```sh
bun run build
```

Then run the app in production mode:

```sh
bun start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying express applications you should be right at home just make sure to deploy the output of `remix build`

- `build/`
- `public/build/`
