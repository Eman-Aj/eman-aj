
export default function Skills() {
  const skills = [
    "JavaScript",
    "React",
    "HTML & CSS",
    "Java",
    "Python",
    "Git",
    "C#",
    "Microsoft",
    "Web Design",
    "Game Dev"
  ];

  return (
    <section id="skills" className="section">
      <h2>Skills</h2>
      <ul className="skills-grid">
        {skills.map(skill => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}
