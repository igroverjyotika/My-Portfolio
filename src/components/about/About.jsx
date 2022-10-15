import "./about.css";


const About = () => {

  const func=(e)=>{
    // console.log(e.target);
    e.target.style.backgroundColor='#417c544d';
    e.target.style.borderRadius='10px';
    // e.target.;
  }
  return (
    <div className="a" >
      <div className="a-content" onMouseEnter={func}>
        <h1 className="a-heading">About Me</h1>
        <p className="a-text"> My name is Jyotika Grover. I'm an B.E student at Global Academy of
        Technology Computer Science department. I was born and raised in Delhi.
        I like coding in Python and also JavaScript. I spend my free time on
        side projects that earn me new skills, or relax by doing sketching
        or meditating. I am always working to better myself as an engineer and
        person.
        </p>
      </div>
    </div>
  );
};

export default About;
