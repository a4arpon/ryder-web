```sh
my-app/
├─ .github/
│  ├─ workflows/
│  │  ├─ release.yml
├─ node_modules/
├─ public/
│  ├─ vite.svg
├─ src/
│  ├─ assets/
│  │  ├─ css/ # CSS Files for the application
│  │  ├─ images/ # SVG/Images for the application
│  │
│  ├─ components/
│  │  ├─ other/ # Other components
│  │  │  ├─ home-page/ # Page level components
│  │  │
│  │  ├─ shared/ # Shared level components. For reusability
│  │  ├─ ui/ # ShadCN component library
│  │
│  ├─ hooks/ # React reuseable hooks
│  ├─ lib/ # Reuseable libraries. (Try not to touch)
│  ├─ providers/ # React context and providers folder
│  │
│  ├─ routes/ # Application Routes and Pages
│  │  │  ├─ home-page/ # Page level components
│  │
│  
├─ .gitignore
├─ package.json
├─ README.md

```