import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';

const Resume = () => {
  const resumeDownloadUrl = 'https://docs.google.com/document/d/1ykTPPALSczfyLSjzXr_hkcx85C5mgnTV/edit?usp=sharing&ouid=109583433263563084243&rtpof=true&sd=true';

  const handleDownload = () => {
    window.location.href = resumeDownloadUrl;
  };

  return (
    <div className="container mt-5 d-flex flex-column" style={{ minHeight: '100vh', position: 'relative', paddingBottom: '0', marginBottom: '0' }}>
      <div className="row flex-grow-1">
        <div className="col-md-6 offset-md-3">
          <div>
            <h1 className="text-xl text-blue-600" 
                style={{ 
                    textAlign: 'center', 
                    marginBottom: '1rem', 
                    fontSize: '50px', 
                    fontWeight: 'bold', 
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)', 
                    color: '#0d6efd' 
                }}>
                Front-End Proficiency
            </h1>
            <ul className="list-unstyled text-center">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Responsive Design</li>
              <li>React</li>
              <li>Bootstrap</li>
              <li>Bulma</li>
            </ul>
            <h1 className="text-xl text-blue-600"
                style={{ 
                    textAlign: 'center', 
                    marginBottom: '1rem', 
                    fontSize: '50px', 
                    fontWeight: 'bold', 
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)', 
                    color: '#0d6efd' 
                }}>
                Back-End Proficiency
            </h1>
            <ul className="list-unstyled text-center">
              <li>Node.js</li>
              <li>Express</li>
              <li>MongoDB - Mongoose</li>
              <li>MySQL - Sequelize</li>
              <li>RESTful APIs</li>
              <li>GraphQL</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row mt-auto justify-content-center" style={{position: 'absolute', bottom: '0', left: '0', right: '0', padding: '0', margin: '0', marginBottom: '200px'}}>
        <div className="col-md-12 text-center" style={{padding: '0', margin: '0'}}>
          <Button 
            variant="primary" 
            onClick={handleDownload}
            style={{marginBottom: '0'}}
          >
            <FontAwesomeIcon icon={faDownload} className="mr-2" />
            Download Resume
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Resume;