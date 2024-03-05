# Module federation playground

This is a playground to test out module federation.
In this playground we have 3 apps:
- `rsbuild-example-remote` - a remote app that exports a component

   This app is built with RSBuild and exports a component using module federation.
   It also uses a styled component library (Mantine)

- `rsbuild-example-host` - a host app that imports the remote component

    This another app built with RSBuild that imports the remote component and renders it inside a grid. It uses the same styled component library as the remote app so that the imported component is styled the same way as the remote app.

- `nextjs-example-host` - a host app that imports the remote component

    This app is built with Next.js and imports the remote component and renders it. It also uses Mantine to style the component.
    The part of the app that isn't the remote component is rendered on the server. (Just some text around the remote component)
    To import the remote component it uses the module federation plugin for Next.js.
    The Next.js app uses page routing and not app routing because the module federation plugin for Next.js doesn't support app routing. (App routing probably will be supported in the future)

### How to start the apps

You can run the apps by running the following commands:

Install the dependencies for all the apps:
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

To run the apps in development mode, you can run use `dev` instead of `start` before the `:` in the commands above.

The remote app will be running on `http://localhost:8081`, the RSBuild host app will be running on `http://localhost:8080` and the Next.js host app will be running on `http://localhost:3000`.

### SSR
The RSBuild apps are not rendered on the server, because RSBuild doesn't support SSR. (For whole pages. Styled-components are SSR compatible)

The Next.js app is rendered on the server, but the remote component is rendered on the client.
This is because the remote component is not SSR compatible on Next.js when the remote app isn't a Next.js app that renders the component on the server. (Only the remote app can render the component on the server)
(https://github.com/module-federation/nextjs-ssr)
