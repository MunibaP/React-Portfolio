import PropTypes from 'prop-types';

const Card = ({ title, imageUrl, githubUrl, deployedUrl, index, titleColor }) => {
  const cardClass = index % 2 === 0 ? 'flex-row-reverse' : 'flex-row';

  return (
    <div className={`bg-white max-w-md shadow-lg mx-auto border rounded-md mb-8 p-4 ${cardClass}`} style={{ height: '400px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.9)'}}>
      <div className="flex flex-col justify-center flex-1">
        <div className="relative mb-2">
          <h2 className="text-lg font-bold text-center absolute w-full top-0 -mt-4" style={{ color: titleColor, textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>{title}</h2>
        </div>
        <div className="flex justify-center mb-2">
          <a href={githubUrl} alt='github icon' target="_blank" rel="noopener noreferrer" className="" style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', bottom: '20px' }}>
          </a>
          <a href={deployedUrl} alt='View deployed project' target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 d-inline-block align-middle"  style={{ position: 'absolute', left: '100%', transform: 'translateX(-50%)', bottom: '20px' }}>
          </a>
        </div>
      </div>
      <div className="hidden md:block w-full h-auto rounded-lg items-center justify-center">
        <img src={imageUrl} alt={title} className="w-full h-auto rounded-lg object-cover" style={{ maxWidth: '95%', maxHeight: '100%' }} />
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  githubUrl: PropTypes.string.isRequired,
  deployedUrl: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  titleColor: PropTypes.string.isRequired,
};

export default Card;
