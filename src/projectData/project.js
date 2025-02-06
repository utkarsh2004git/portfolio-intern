
import TicTacToe from "../assets/TicTacToe.png"
import AddEmployee from "../assets/AddEmployee.png"
import Foody from "../assets/Foody.png"
import weatherApp from "../assets/weatherApp.png"
import portfolio from "../assets/portfolio.png"


const projects = [
    {
        id: 1,
        title: "Foody App",
        description: "A food ordering platform with an admin panel.",
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
        title: "My Portfolio",
        description: "Portfolio created by react@vite",
        image: portfolio,
        link: "https://utkarsh-shahare-portfolio.netlify.app/",
    },

];

export default projects