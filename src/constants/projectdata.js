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
    logo: "logos:flask",
    description:
        "This blog application boasts a comprehensive set of features, built using Flask, including seamless user registration and login functionality, profile management with profile pictures. Additionally, create, update, read, and delete blog posts without seamlessly.",
    link: "https://github.com/abraham-tech/Flask_Blog"
  },
  {
    id: 2,
    image: mazes,
    name: "UU game",
    logo: "logos:python",
    description:
        "UU-GAME is a comprehensive gaming platform that offers a variety of features to enhance your gaming experience. This platform includes a game engine with different AI difficulty levels and a communication platform that lets players connect via local internet for round-robin tournaments or 1v1 games.",
    link: "https://github.com/abraham-tech/UUgame"
  },
  {
    id: 3,
    image: background,
    name: "Portfolio site",
    logo: "logos:nodejs",
    description:
      "Portfolio App using reactjs with HTML CSS Javascript Bootstrap ",
    link: "https://github.com/abraham-tech/my-portfolio"
  },
  {
    id: 4,
    image: restAPI,
    name: "Express REST API",
    logo: "eos-icons:api",
    description:
        "This is a game application implemented using Node Express, adhering to RESTful principles.",
    link: "https://github.com/abraham-tech/game-rest-api"
  },
  {
    id: 5,
    image: schoolApp,
    name: "Addis school",
    logo: "logos:nodejs",
    description:
        "This repository contains the codebase for the Addis-School project. It demonstrates the application of MERN stack technology",
    link: "https://github.com/abraham-tech/addis-school"
  }
];

export default projects;
