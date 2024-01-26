import background from "../assets/background.jpg";
import mazes from "../assets/mazes.png"
import flaskBlog from "../assets/flaskBlog.png"
import restAPI from "../assets/restAPI.png"
import schoolApp from "../assets/schoolApp.png"
const projects = [
  {
    id: 1,
    image: flaskBlog,
    name: "Flask blog app",
    description:
        "This is a Flask blog application which includes features such as user registration, login, updating profiles with profile pictures, creating, updating and deleting blog posts.",
    link: "https://github.com/abraham-tech/Flask_Blog"
  },
  {
    id: 2,
    image: mazes,
    name: "Maze game",
    description:
        "This exciting game is based on python using simple yet intuitive functionalities which includes generating a random maze and finding its way out.",
    link: "https://github.com/abraham-tech/uu_mazes/tree/master"
  },
  {
    id: 3,
    image: background,
    name: "Portfolio site",
    description:
      "Portfolio App using reactjs with HTML CSS Javascript Bootstrap ",
    link: "https://github.com/abraham-tech/my-portfolio"
  },
  {
    id: 4,
    image: restAPI,
    name: "Express REST API",
    description:
        "This is a game application implemented using Node Express, adhering to RESTful principles.",
    link: "https://github.com/abraham-tech/game-rest-api"
  },
  {
    id: 5,
    image: schoolApp,
    name: "Addis school",
    description:
        "This repository contains the codebase for the Addis-School project. It demonstrates the application of MERN stack technology",
    link: "https://github.com/abraham-tech/addis-school"
  }
];

export default projects;
