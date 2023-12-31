# explore-countries

# Link to deployment

https://explore-countries-silk.vercel.app/

# How to run on your own pc

Open terminal:

cd ./Client  
npm install  
npm run dev  

Open http://localhost:5173

Website should now running 👍 (hopefully)

# If you want to run the server locally as well:

Open Client/src/CountryPage.jsx.

Change line 10: fetch(`https://explore-countries-server.vercel.app/api/country/${countryName}`)

to: fetch(`http://localhost:4000/api/country/${countryName}`)

Open another terminal:

cd ./Server  
npm run dev  

Server should now be running on http://localhost:4000.

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
