# explore-countries

# Link to deployment 
https://explore-countries-silk.vercel.app/

# How to run on your own pc

in client folder, open vite.config.js.
comment out line "/api": "https://explore-countries-server.vercel.app"
uncomment line "/api": "http://localhost:4000"

open two terminals

-> Terminal 1:
cd ./Server
npm run dev

-> Terminal 2:
cd ./Client
npm install
npm run dev

click link (usually http://localhost:5173)

Website should now running 👍 (hopefully)

# Project information

Search any country: This project enables you to search for information about any country in the world effortlessly.

Comprehensive Country Data: Once you enter a country's name, the application fetches extensive data from the REST Countries API. This includes details such as population, capital city, currency, language, giving you a well-rounded understanding of the country.

User-Friendly Interface: The user interface is designed for simplicity and ease of use. With an intuitive search bar and clear navigation, you can quickly access the information you seek without any hassle.

How It Works:

Search: Enter the name of the country you want to explore in the search bar.
Explore: Once you hit the search button, the application fetches data from the REST Countries API in real-time.
Learn: Find information about the selected country, like its population, currency, and more.
Repeat: Explore as many countries as you like, satisfying your curiosity about the diverse nations of the world.

Technologies Used:

Frontend: React.js
Backend: Node.js, Express
API: REST Countries API
