/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
    }
  },
  plugins: [require('flowbite/plugin')],
}

// module.exports = {

//   plugins: [
//       require('flowbite/plugin')
//   ]

// }

// module.exports = {

//   content: [
//       "./node_modules/flowbite/**/*.js"
//   ]

// }