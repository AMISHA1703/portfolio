// import quickpayImg from "../utils/Quickpay.png";
// import botImg from "../utils/bot.png";
// import weatherImg from "../utils/weather.png";
import Quickpayvideo from "../utils/quick-pay-fjil - Overview – Vercel (1).mp4"
import WeatherVideo from "../utils/AMISHA1703_Climate-Watch.mp4"

const Project = () => {
  const projects = [
    {
      title: "QuickPay",
      tech: "React.js, Node.js, Express.js, Tailwind CSS, MongoDB, JWT, Zod",
      // image: quickpayImg,
      video:Quickpayvideo ,
      description: `Developed a full-stack digital wallet app replicating features of P2P payment platforms.Enabled user registration, authentication, balance tracking, and secure fund transfers.Implemented JWT-based authentication, server-side validation using Zod, and responsive UI.`,
      live: "https://quick-pay-fjil.vercel.app/",
      github: "https://github.com/AMISHA1703/QuickPay",
    },
    {
      title: "Gemini Bot",
      tech: "React.js, Node.js, Express.js, Google Gemini API",
      // image: botImg,
      video:"",
      description: `Built full-stack AI chatbot using React.js frontend and Express.js backend.Integrated Google Gemini API to handle user queries and managed asynchronous flow using Axios.`,
      live: "https://gemini-bot-4ibv.vercel.app/",
      github: "https://github.com/AMISHA1703/Gemini-bot",
    },
    {
      title: "Weather App",
      tech: "HTML, CSS, JavaScript, OpenWeatherMap API",
      // image: weatherImg,
      video:WeatherVideo,
      description: `Created a responsive weather app that displays temperature, humidity, and wind speed.
Integrated OpenWeatherMap API and implemented dynamic UI changes based on weather conditions.`,
      live: "https://climate-watch.netlify.app/",
      github: "https://github.com/AMISHA1703/Climate-Watch",
    },
  ];

  return (
    <section
      id="project"
      className="px-6 py-20 bg-black/60 shadow-xl backdrop-blur-sm min-h-screen"
    >
      <h2 className="text-3xl font-bold text-center mb-12 text-white">
        Projects
      </h2>

      {/* Grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {projects.map((proj, index) => (
          <div
            key={index}
            className="bg-black/30 backdrop-blur-sm p-6 border border-gray-700 rounded-xl shadow-xl flex flex-col"
          >
            {/* Image */}
            <div className="w-full h-64 overflow-hidden rounded-lg shadow-md mb-4">
              {/* <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-full object-cover"
              /> */}

               <video
              src={proj.video}
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            />
            </div>
           

            {/* Title & Tech */}
            <h3 className="text-2xl font-semibold text-indigo-400 mb-1">
              {proj.title}
            </h3>
            <p className="text-sm text-gray-400 italic mb-3">{proj.tech}</p>

            {/* Description */}
            <p className="text-gray-300 whitespace-pre-line mb-6 leading-relaxed flex-1">
              {proj.description}
            </p>

            {/* Buttons */}
            <div className="flex justify-center gap-6 mt-auto">
              <a
                href={proj.live}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full bg-cyan-400 text-black font-semibold hover:bg-cyan-500 transition shadow-md"
              >
                View Project
              </a>
              <a
                href={proj.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full border border-cyan-400 text-cyan-300 hover:bg-cyan-500 hover:text-black transition shadow-md"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
