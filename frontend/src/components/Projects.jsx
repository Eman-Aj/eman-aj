import "../css/projects.css";
import descriptions from "../assets/Descriptions";
import info from "../assets/ProjectInfo";
export default function Projects() {
  return (
    <section id="projects" className="project-section section">
      <h1 className="section-title">Projects</h1>

      {Object.entries(info).map(([title, info]) => (
        <li key={title} className="project-list">
          <div className="project">
            <div className="project-details">
              <h1 className="project-title"> {title} </h1>
              <h3 className="project-description"> {info.description}</h3>
              <h3 className="project-tools">{info.used}</h3>
              <div className="project-links">
              <a href={info.github || null} target="_blank" rel="noopener noreferrer">{info.github ? "Repo": null}</a>
              <a href={info.view || null} target="_blank" rel="noopener noreferrer">{info.github ? "Visit": null}</a>
              </div>
            </div>
            <div className="project-visuals">
              <img className="project-visuals-1" src={info.image1}></img>
              <img className="project-visuals-2" src={info.image2}></img>
            </div>
          </div>
        </li>
      ))}

      {/* <h2>Projects</h2>
      <div className="project-card">
        <h3>QuestLine</h3>
        <a href="https://questline.emanaj.dev/"> Visit</a>
        <p>
          A productivity web app that combines to-do lists, timers, and
          gamification elements to encourage consistent task completion and
          sustained focus.
        </p>
        <span>React · CSS · Python · Flask · Vercel Deployment</span>
      </div>

      <div className="project-card">
        <h3>Home Page</h3>
        <a> You're Already Here :)</a>
        <p>Here, just to make the projects section more meaty.</p>
        <span>React · CSS · Vercel Deployment</span>
      </div>

      <div></div> */}
    </section>
  );
}
