import emmanuel from "../assets/Emmanuel.jpg"
export default function About() {
  const aboutMe =`Fully committed to the philosophy of life-long learning. Making use of my broad developing skillset; 
The unique combination of creativity, logic, technology and never running out of new things to discover, 
drives my excitement and passion for web  and software development. 
When I’m not at my computer (very rare) I like to spend my time with friends and family.`;

  const skillPro = {
    "JavaScript":"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg",
    "React":"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    "HTML":"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain-wordmark.svg",
    "CSS":"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg",
    "Java":"https://cdn-icons-png.flaticon.com/512/5968/5968282.png",
    "Github":"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg",
    "C#":"https://icon-icons.com/download-file?file=https%3A%2F%2Fimages.icon-icons.com%2F2415%2FPNG%2F512%2Fcsharp_plain_logo_icon_146577.png&id=146577&pack_or_individual=pack",
    "Roblox Lua":"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/lua/lua-original.svg",
    "Python":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png",
    "C":"https://img.icons8.com/color/512/c-programming.png",
    "VS Code": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
    "Unity": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg",
  }

  return (
    <section id="about" className="section">
      <h2 className="section-title about-title">About Me</h2>

      <div>
          <img
            className="item about-image"
            src={emmanuel}
          ></img>
      </div>

      <div className="about">
        <div className="item about-summary">
          <p>{aboutMe}</p>
        </div>
        

        <div className="item about-skills">
          <ul className="skills-grid">
            {Object.entries(skillPro).map(([skill, source]) => (
              <li key={skill} className="skills-item bruhh">
                <div className="skills-item-div">
                  <img
                  className="skills-item-icon"
                  src={source}
                  alt={skill}
                ></img>
                </div>
                {/* {skill} */}
              </li>
            ))}
          </ul>
          
        </div>
      </div>
      
    </section>
  );
}
