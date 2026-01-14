import QuestLineMain from "./images/QuestLineMain.png";
import QuestLineMixed from "./images/QuestLineMixed.png";
import JumpHomeScreen from "./images/JumpHomeScreen.png";
import JumpShowcase from "./images/JumpShowcase.gif";
import ShowTrackerLoggedIn from "./images/ShowTrackerLoggedIn.png";
import ShowTrackerLogin from "./images/ShowTrackerLogin.png";

const info = {
  "Full-Stack Productivity Webapp": {
    image1: QuestLineMain,
    image2: QuestLineMixed,
    description: `
        Productivity Webapp With A Quest-Like Gamification.  
        Integrating AI task renaming to encourage interaction/improve UX.
        Future Plans to rewward users for app activity.
      `,
    used: "React - JavaScript - Node.Js - Vercel - SupaBase - HTML/CSS",
    github: "https://github.com/Eman-Aj/QuestLine",
    view: "https://questline.emanaj.dev",
  },

  "Full-Stack Show Tracker Webapp": {
    image1: ShowTrackerLoggedIn,
    image2: ShowTrackerLogin,
    description: `
        Full-stack show tracker built with Flask and SQL for REST APIs,
         data persistence, and user authentication, with a React frontend 
         for stateful UI and client-side routing.
      `,
    used: "React - JavaScript - Flask/SQL - Python  - HTML/CSS",
    github: null,
    view: null,
  },


  "Multiplayer Platformer": {
    image1: JumpShowcase,
    image2: JumpHomeScreen,
    description: `
        Personal project built and finished in Roblox using Lua. Implemented 
        client-server architecture for player behavior featuring 
        server-authoritative game logic, synchronized player movement, 
        and modular systems for scalability and exploit prevention. 
        Reaching a player count of 13,000.

      `,
    used: "Roblox Lua - Heavy Debugging - Game Sytems - Client - Server Architecture",
    github: null,
    view: "Other Link",
  },
};

export default info;
