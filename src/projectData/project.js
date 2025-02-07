
import TicTacToe from "../assets/TicTacToe.png"
import AddEmployee from "../assets/AddEmployee.webp"
import Foody from "../assets/Foody.webp"
import weatherApp from "../assets/weatherApp.webp"
import portfolio from "../assets/portfolio.png"
import pricePrediction from "../assets/price-prediction.webp"


const projects = [
    {
        id: 1,
        title: "Foody App",
        description: "Fully functional food ordering platform with an admin panel.",
        image:Foody,
        link: "https://foody-delivery.onrender.com/",
    },
    {
        id: 2,
        title: "Weather App",
        description: "A real-time weather forecasting application.",
        image: weatherApp,
        link: "https://utkarsh-react-weather-app.netlify.app/",
    },
    {
        id: 3,
        title: "Tic-Tac-Toe",
        description: "Tic-Tac-Toe Game, SinglePlayer & Multiplayer.",
        image: TicTacToe,
        link: "https://utkarshshahare.me/Tic-Tac-Toe/public/",
    },
    {
        id: 4,
        title: "TODO App",
        description: "A Todo app with Light & Dark mode.",
        image: AddEmployee,
        link: "https://utkarshshahare.me/Todo-theme-change/public/",
    },
    {
        id: 5,
        title: "Apartment Price prediction",
        description: "Apratment price prediction project using react+python.",
        image: pricePrediction,
        link: "https://github.com/utkarsh2004git/Ml-project",
    },
    {
        id: 6,
        title: "My Portfolio",
        description: "Portfolio created by react@vite",
        image: portfolio,
        link: "https://utkarsh-shahare-portfolio.netlify.app/",
    },

];

export default projects