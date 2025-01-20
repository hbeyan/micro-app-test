## Getting Started

To reproduce the issue, clone the repository and first get a build from stencil-library:

```bash
git clone https://github.com/hbeyan/micro-app-test.git
cd stencil-library
npm i
npm run build && npm pack
```

Then you need to run the sub and main applications of our micro front end, for the sub app
```bash
cd ..
cd micro-app-sub
npm i
npm run dev
```

In a new terminal run the main app:
```bash
cd micro-app-main
npm i
npm run dev
```

Observe that the component are looking normal in the sub app but card is not displayed in the main app, with the console error.