const skillTags = [
  "React.js", "Node.js", "MongoDB", "PostgreSQL", "Express.js",
  "JavaScript", "TypeScript", "Docker", "C", "C++", "Git", "DSA"
];

const devSkills = [
  { name: "React.js", level: 60 },
  { name: "Node.js", level: 60 },
  { name: "Express.js", level: 70 },
  { name: "MongoDB", level: 50 },
  { name: "PostgreSQL", level: 40 },
  { name: "JavaScript", level: 70 },
  { name: "TypeScript", level: 55 },
];

const otherSkills = [
  { name: "C", level: 40 },
  { name: "C++", level: 65 },
  { name: "Docker", level: 20 },
  { name: "Git", level: 65 },
  { name: "DSA", level: 50 },
];

const Skills = () => {
  const renderStars = (level: number) => {
    const filledStars = Math.round(level / 20);
    const emptyStars = 5 - filledStars;
    return (
      <span className="text-yellow-400">
        {"★".repeat(filledStars)}
        {"☆".repeat(emptyStars)}
      </span>
    );
  };

  return (
    <section id="skills" className="py-12 px-6  bg-black/60 text-white backdrop-blur-md  shadow-lg min-h-screen">
      <h2 className="text-3xl font-bold mb-4 text-center text-white">Skills</h2>

      {/* 🧠 Storytelling Section */}
      <p className="text-center text-gray-300 max-w-3xl mx-auto mb-10 text-sm leading-relaxed">
        I started my tech journey by learning <span className="text-teal-400 font-semibold">C and C++</span> to build
        a strong foundation in logic and programming. As I got comfortable, I transitioned into web development with
        <span className="text-teal-400 font-semibold"> JavaScript</span> and discovered a passion for building dynamic UIs using
        <span className="text-teal-400 font-semibold"> React.js</span>.
        Later, I explored the backend with <span className="text-teal-400 font-semibold">Node.js</span> and
        <span className="text-teal-400 font-semibold"> Express</span>, and now I’m confident with full stack tools like
        <span className="text-teal-400 font-semibold"> MongoDB</span>, <span className="text-teal-400 font-semibold">PostgreSQL</span>, and <span className="text-teal-400 font-semibold">Docker</span>.
        I believe in continuous learning and adapting — these tools have helped me bring ideas to life.
      </p>

      {/* Skill Tags */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {skillTags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-gray-800 text-teal-300 rounded-full text-sm hover:bg-teal-400 hover:text-black transition"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Star Rating Grid */}
      <div className="grid md:grid-cols-2 gap-10">
        {/* Dev Skills */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-blue-400">Development</h3>
          {devSkills.map((skill, index) => (
            <div key={index} className="mb-3 flex justify-between items-center border-b border-gray-700 pb-2">
              <span className="text-sm">{skill.name}</span>
              {renderStars(skill.level)}
            </div>
          ))}
        </div>

        {/* Core + Tools */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-blue-400">Core & Tools</h3>
          {otherSkills.map((skill, index) => (
            <div key={index} className="mb-3 flex justify-between items-center border-b border-gray-700 pb-2">
              <span className="text-sm">{skill.name}</span>
              {renderStars(skill.level)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
