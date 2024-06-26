import codingImage from '../assets/coding_1.png';

const About = () => {
  return (
    <section id="about" className="bg-light py-5 pb-0 min-vh-100">
      <div className="container">
        <div className="row align-items-center">

          <div className="col-md-6 mb-4 mb-md-0">
            <img
              src={codingImage}
              alt="cartoon of boy coding on laptop"
              className="img-fluid rounded-lg d-none d-md-block"
              style={{ maxWidth: '90%', height: 'auto', boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)' }}
            />
          </div>
          

          <div className="col-md-6 px-4 py-3">
            <div>
              <h2 className="text-center text-md-left display-4 text-primary mb-4" style={{fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)'}}>About Me</h2>
              <p className="text-center text-md-left mb-5" style={{ fontSize: '17px', color: 'black', fontWeight: 'normal' }}>
                    Hello there! 👋 I am Muniba Pervez, a passionate full-stack web developer freshly graduated and ready to dive into the world of tech. With a strong foundation in both front-end and back-end development, I bring creativity, problem-solving skills, and a love for clean, efficient code to every project I tackle.
              </p>
              <p className="text-center text-md-left mb-5" style={{ fontSize: '17px', color: 'black', }}>
                    During my time in university, I honed my skills in JavaScript, React, Node.js, and various other technologies, crafting responsive and intuitive web applications that deliver exceptional user experiences. Whether it is building sleek user interfaces, architecting robust back-end systems, or optimizing performance, I thrive on turning ideas into reality through the power of code.
              </p>
              <p className="text-center text-md-left mb-5" style={{ fontSize: '17px', color: 'black', }}>
                    I am constantly seeking new challenges and opportunities to learn and grow in this ever-evolving field. My goal is to contribute my expertise and enthusiasm to innovative projects, collaborate with talented teams, and make a meaningful impact in the world of technology.
              </p>
              <h4 className="text-center text-md-left mb-5" 
                    style={{fontWeight: 'bold', color: '#016fb9', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)'}}>
                    I look forward to working with you!
                </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;
