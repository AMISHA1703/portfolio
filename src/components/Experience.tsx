
type ExperienceCardProps = {
  title: string;
  company: string;
  date: string;
  description: string;
  linkText?: string;
  linkUrl?: string;
};

const experiences: ExperienceCardProps[] = [
   {
    title: 'Web developer Intern',
    company: 'Nk technologies ITSol pvt Ltd ,noida, uttar pradesh - on site',
    date: 'Aug 2025 – present',
    description:
      'Worked on a Node.js-based project, building and optimizing backend APIs. Gained exposure to React for frontend integration, WordPress development for content management, and SEO techniques for improving website visibility. Collaborated on code enhancements, bug fixes, and feature implementation.'
      ,
    linkUrl:"",
    linkText:""
  },
  {
    title: 'Full Stack Intern',
    company: 'SmartInternz in collaboration with SmartBridge & MongoDB – Virtual',
    date: 'Jan 2025 – Mar 2025',
    description:
      'Gained practical experience in full-stack development using MongoDB, Express.js, React.js, Node.js. Built multiple mini projects applying individual technologies. Implemented backend concepts like JWT authentication and request validation using Zod.'
      ,
    linkUrl:"https://drive.google.com/file/d/1kfCw3mzlQVMkEw8X0-Xqof6-ZL58YOBu/view",
    linkText:"certificate"
  },
];

const ExperienceCard = ({
  title,
  company,
  date,
  description,
  linkText,
  linkUrl,
}: ExperienceCardProps) => (
  <div className="relative   bg-black/60  shadow-xl backdrop-blur-sm rounded-lg  p-6 mb-8">
    <div className="absolute -left-4 top-4 w-3 h-3 bg-teal-500 rounded-full"></div>
    <h3 className="text-xl font-semibold text-white">{title}</h3>
    <p className="text-blue-400 font-medium">{company}</p>
    <p className="text-sm text-gray-400">{date}</p>
    <p className="mt-3 text-gray-300">{description}</p>
    {linkText && linkUrl && (
      <a
        href={linkUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 bg-teal-500 text-white px-4 py-2 rounded hover:bg-blue-500 transition"
      >
        {linkText}
      </a>
    )}
  </div>
);

const Experience = () => (
  <section id="experience" className=" bg-black/60  shadow-xl backdrop-blur-sm py-16 px-6 md:px-20 min-h-screen">
    <h2 className="text-4xl font-bold text-white mb-10 text-center">Experience</h2>
    <div className="border-l-4 border-blue-500 pl-6">
      {experiences.map((exp, index) => (
        <ExperienceCard key={index} {...exp} />
      ))}
    </div>

  </section>
);

export default Experience;
