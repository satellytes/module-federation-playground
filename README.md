# Module federation playground

This is a playground to test out module federation.
In this playground we have 3 apps:
- `rsbuild-example-remote` - a remote app that exports a component
- `rsbuild-example-host` - a host app that imports the remote component
- `nextjs-example-host` - a host app that imports the remote component

### How to start the apps

You can run the apps by running the following commands:

Install the dependencies:
```bash
pnpm install
```

Run the remote app and the RSBuild host app:
```bash
pnpm start:rsbuild
```

Run the remote app and the Next.js host app:
```bash
pnpm start:next
```

To run the apps in development mode, you can run use `dev` instead of `start`

The remote app will be running on `http://localhost:8081`, the RSBuild host app will be running on `http://localhost:8080` and the Next.js host app will be running on `http://localhost:3000`.

### SSR
The RSBuild apps are not rendered on the server.

The Next.js app is rendered on the server, but the remote component is rendered on the client.
This is because the remote component is not SSR compatible on Next.js when the remote app isn't a Next.js app that renders the component on the server.
(https://github.com/module-federation/nextjs-ssr)
