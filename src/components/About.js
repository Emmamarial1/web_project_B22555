import '../style/About.css';

function About() {
  return (
    <section id='about-page'>
      <p className='section-title'>ABOUT US</p>
      <div className="about-cards">
        <div className="about-section">
          <img className="about-section-image" id='about1' src='images/image.jpeg'></img>
          <div className="about-section-info">
            <p className="about-section-title">WHO ARE WE?</p>
            <p className="about-section-text">We are a start up based in Uganda with the aim of transforming the reading culture in this country.</p>
          </div>
        </div>
        <div className="about-section">
          <div className="about-section-info">
            <p className="about-section-title">OUR MISSION</p>
            <p className="about-section-text">Our mission is to connect people with the written word, to ignite the joy of reading, and to be a source of inspiration for all. We curate an extensive collection of books spanning various genres, from timeless classics to contemporary bestsellers, ensuring there's something for everyone. We take pride in our role as cultural custodians, preserving the rich tapestry of human stories through literature.</p>
          </div>
          <img className="about-section-image" id='about2' src='images/images.jpeg'></img>
        </div>
      </div>
    </section>
  );
}

export default About;
