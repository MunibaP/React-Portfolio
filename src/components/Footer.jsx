import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <footer className="text-white py-3 fixed bottom-0 w-full shadow-emerald-950 shadow-md" style={{ backgroundColor: '#084b83' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">

        <div className="flex space-x-4">
          <a
            href="https://github.com/MunibaP"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-blue-600"
            title="Clickable Github icon"
            style={{ marginRight: '15px' }}
            onMouseEnter={(e) => e.target.style.color = 'white'}
            onMouseLeave={(e) => e.target.style.color = 'black'}
          >
            <FontAwesomeIcon 
              icon={faGithub} 
              size="3x" 
              style={{ transition: 'color 0.3s' }}
            />
          </a>
          <a
            href="https://www.linkedin.com/signup"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-blue-600"
            title="Clickable LinkedIn icon"
            style={{ marginRight: '15px' }}
            onMouseEnter={(e) => e.target.style.color = 'white'}
            onMouseLeave={(e) => e.target.style.color = 'black'}
          >
            <FontAwesomeIcon 
              icon={faLinkedin}
              size="3x" 
              style={{transition: 'color 0.3s' }} 
            />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-blue-600"
            title="Clickable Twitter icon"
            style={{ marginRight: '15px' }}
            onMouseEnter={(e) => e.target.style.color = 'white'}
            onMouseLeave={(e) => e.target.style.color = 'black'}
          >
            <FontAwesomeIcon 
              icon={faTwitter} 
              size="3x" 
              style={{transition: 'color 0.3s' }} 
            />
          </a>
          <a
            href="mailto:munibapervez596@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-blue-600"
            title="Clickable Email icon"
            style={{ marginRight: '15px' }}
            onMouseEnter={(e) => e.target.style.color = 'white'}
            onMouseLeave={(e) => e.target.style.color = 'black'}
          >
            <FontAwesomeIcon 
              icon={faEnvelope} 
              size="3x"
              style={{transition: 'color 0.3s' }}  
            />
          </a>

          <div className="mt-3">
          <p style={{ fontWeight: 'bold' }}>Copyright © 2024 MP Portfolio - All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;











// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";

// const socials = [
//     {
//         name: "GitHub",
//         url: "https://github.com/MunibaP",
//         icon: faGithub,
//         color: "#5DE512",
//     },
//     {
//         name: "LinkedIn",
//         url: "https://www.linkedin.com/signup",
//         icon: faLinkedin,
//         color: "#2EACE8",
//     },
// ]

// const Footer = () => {
//     return (
//       <footer className="footer text-white" style={{ backgroundColor: '#084b83' }}>
//         <div className="footer-container">
//           <section className="social-icons-wrapper d-flex flex-md-row justify-content-center">
//             {socials.map(({ name, url, icon, color }) => (
//               <div
//                 key={name}
//                 className="d-flex flex-column align-items-center mx-md-2 transparent-bg"
//               >
//                 <a
//                   href={url}
//                   className={`icon ${name}`}
//                   target="_blank"
//                   rel="noreferrer"
//                 >
//                   <FontAwesomeIcon
//                     icon={icon}
//                     bounce
//                     className="footer-icon-size" 
//                     style={{ color: color }}
//                   />
//                 </a>
//                 <a href={url} target="_blank" rel="noreferrer">
//                   <span className="d-inline-block mx-1 name">{name}</span>
//                 </a>
//               </div>
//             ))}
//           </section>
//           <section className="form-footer">
//             <p>
//             <h6 className="copyright-text">&copy; {new Date().getFullYear()} Copyright © 2024 MP Portfolio - All Rights Reserved.</h6>
//             </p>
//           </section>
//         </div>
//       </footer>
//     );
//   };
//   // Export Footer
//   export default Footer;