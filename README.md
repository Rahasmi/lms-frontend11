# LMS Frontend

### setup instruction

1. clone the project
...
  git clone git remote add origin https://github.com/Rahasmi/lms-frontend.git
...

2.move into the directory
...
 cd lms-frontend
...

3.install dependencies

...
npm i
...

4.run the server

...
npm run dev
....

### setup tailwind css

1.install tailwindcss
...
npm install -D tailwindcss
...

2.create tailwind css config file

...
npx tailwindcss init
....

3.Add file extensions to tailwind config file in the contents property
...
./src/**/*.{html,js,jsx,ts,tsx}
...

4.Add the tailwind directries at the top of the 'index.css' file
...
@tailwind base;
@tailwind components;
@tailwind utilities;
...

### Adding plugins and dependencies

...
  npm install @reduxjs/toolkit react-redux react-router-dom react-icons react-chartjs-2 chart.js daisyui axios react-hot-toast @tailwindcss/line-clamp
...

### Configure auto import sort esline

1.INSTALL simple import sort
...
npm i -D eslint-plugin-simple-import-sort
...

2.Add rule in '.eslint.cjs'
...
'simple import sort/imports': error
...

3.Add simple-import plugin in '.eslint.cjs'
...
   plugins: [..., 'simple-import-sort'],
...

4. To enable auto import sort on file save in vscode

  -open 'settings.json'
  -add following config

...
   "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
   }

