import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faHtml5, faCss3, faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import profileImage from '../assets/mp_3.jpg';

const Home = () => {
  return (
    <div className="hero-section bg-light py-5 py-md-11 d-flex flex-column flex-md-row align-items-center justify-content-center min-vh-100"style={{ backgroundColor: '#f0f6f6' }}>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6 text-center text-md-left mb-5 mb-md-0">
            <h2 className="display-4 mb-4 text-black" 
              style={{ 
                background: 'linear-gradient(120deg, #007bff, #ffffff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 'bold',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)'
              }}>
              Full-Stack Web Developer
            </h2>
            <p className="lead text-black" style={{ fontSize: '20px', fontWeight: 'normal' }}>Hello! I am Muniba Pervez, an Enthusiastic Full-stack Developer dedicated to bringing ideas to life with precision and passion.</p>
            <div className="pt-5">
              <FontAwesomeIcon icon={faJs} className="icon" size="3x" style={{ margin: '0 10px' }} />
              <FontAwesomeIcon icon={faHtml5} className="icon" size="3x" style={{ margin: '0 10px' }} />
              <FontAwesomeIcon icon={faCss3} className="icon" size="3x" style={{ margin: '0 10px' }} />
              <FontAwesomeIcon icon={faReact} className="icon" size="3x" style={{ margin: '0 10px' }} />
              <FontAwesomeIcon icon={faLaptopCode} className="icon" size="3x" style={{ margin: '0 10px' }} />
              <FontAwesomeIcon icon={faNodeJs} className="icon" size="3x" style={{ margin: '0 10px' }} />
            </div>
          </div>
          <div className="col-md-6 text-center">
            <img src={profileImage} alt="Straw-Hat Pirate" className="img-fluid rounded-circle mb-4 mb-md-0" style={{ maxWidth: '300px' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
