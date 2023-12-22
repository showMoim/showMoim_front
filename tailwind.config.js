/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'sf-font' : '#F43347', //쑈모임 폰트
        'sf-btn-bg' : '#FA5273', //쑈모임 버튼(뒷배경)
        'sf-btn' : '#FF3F53',//쑈모임 버튼(흰배경)
        'gray-d9' : "#D9D9D9",
        'gray-c4' : "#C4C4C4",
        'gray-f4' : "#F4F4F4"
    }
      }
    },
  plugins: [],
}

