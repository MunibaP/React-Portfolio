import ProjectCard from "../components/ProjectCard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

import TextEditor from "../assets/textEditor_homepage.jpeg"
import NoSQL from "../assets/noSQL_insomnia.png"
import Nestify from "../assets/projecr_2.jpeg"
import MagicalBookBrowser from "../assets/project_1.jpeg"
import TheTechBlog from "../assets/tech_blog_homepage.jpeg"
import NoteTaker from "../assets/note_taker.gif"
import BookSearchEngine from "../assets/homepage.png"
import EmployeeTracker from "../assets/E_tracker_img_3.png"


const Portfolio = () => {
  const projects = [
    {
      title: 'Nestify',
      imageUrl: Nestify,
      githubUrl: 'https://github.com/garrethil/Project2.git',
      deployedUrl: 'https://nestify-358bd404e9e4.herokuapp.com/',
      titleColor: '#0d6efd'
    },
    {
      title: 'Text Editor',
      imageUrl: TextEditor,
      githubUrl: 'https://github.com/MunibaP/Text-Editor.git',
      deployedUrl: 'https://text-editor-aj05.onrender.com/',
      titleColor: '#0d6efd'
    },
    {
      title: 'Note Taker',
      imageUrl: NoteTaker,
      githubUrl: 'https://github.com/MunibaP/Note_Taker.git',
      deployedUrl: 'https://github.com/MunibaP/Note_Taker/tree/main',
      titleColor: '#0d6efd'
    },
    {
      title: 'Magical Book Browser',
      imageUrl: MagicalBookBrowser,
      githubUrl: 'https://github.com/Jason897571/Magical-Book-Browser.git',
      deployedUrl: 'https://jason897571.github.io/Magical-Book-Browser/',
      titleColor: '#0d6efd'
    },
    {
      title: 'Social Network API',
      imageUrl: NoSQL,
      githubUrl: 'https://github.com/MunibaP/Social-Network-API.git',
      deployedUrl: 'https://drive.google.com/file/d/1T1Mrgv7-gHu8PeqRJqG2_9u_uHc4Z6Z5/view',
      titleColor: '#0d6efd'
    },
    {
      title: 'The Tech Blog',
      imageUrl: TheTechBlog,
      githubUrl: 'https://github.com/MunibaP/The-Tech-Blog.git',
      deployedUrl: 'https://protected-inlet-55523-04642559360f.herokuapp.com/',
      titleColor: '#0d6efd'
    },
    {
      title: 'The Book Search Engine',
      imageUrl: BookSearchEngine,
      githubUrl: 'https://github.com/MunibaP/Book-Search-Engine.git',
      deployedUrl: 'https://book-search-engine-im1z.onrender.com/',
      titleColor: '#0d6efd'
    },
    {
      title: 'Employee Tracker',
      imageUrl: EmployeeTracker,
      githubUrl: 'https://github.com/MunibaP/Employee-Tracker.git',
      deployedUrl: 'https://drive.google.com/file/d/1v0W8BCMPtDv8ZoJSKRREjfoPOx1pdRpb/view',
      titleColor: '#0d6efd'
    },
  ];

  return (
    <div className="container mt-5">
      <div className="row">
        {projects.map((project, index) => (
          <div className="col-md-6 mb-4" key={index}>
            <ProjectCard
              title={project.title}
              imageUrl={project.imageUrl}
              titleColor={project.titleColor}
            />
            <div className="d-flex justify-content-between mt-2">
              <a href={project.githubUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} className="mr-2" />
                GitHub
              </a>
              <a href={project.deployedUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faExternalLinkAlt} className="mr-2" />
                Deployed
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
