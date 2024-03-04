# Module federation playground

This is a playground to test out module federation.
In this playground we have 3 apps:
- `rsbuild-example-remote` - a remote app that exports a component
- `rsbuild-example-host` - a host app that imports the remote component
- `nextjs-example-host` - a host app that imports the remote component

You can run the apps by running the following commands:

```bash
cd rsbuild-example-remote
npm install
npm run build
npm run preview
```

```bash
cd rsbuild-example-host
npm install
npm run build
npm run preview
```

```bash
cd nextjs-example-host
npm install
npm run build
npm run start
```

You can also run the apps in development mode by running the following commands:

```bash
cd rsbuild-example-remote
npm install
npm run dev
```

```bash
cd rsbuild-example-host
npm install
npm run dev
```

```bash
cd nextjs-example-host
npm install
npm run dev
```

The remote app will be running on `http://localhost:8081`, the rsbuild host app will be running on `http://localhost:8080` and the Next.js host app will be running on `http://localhost:3000`.