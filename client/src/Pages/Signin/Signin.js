import React, { Component } from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "normalize.css/normalize.css";
import "./Signin.css";
import scrollToComponent from 'react-scroll-to-component';
import DescriptionPart1 from '../../components/DescriptionPart1/DescriptionPart1';
import DescriptionPart2 from '../../components/DescriptionPart2/DescriptionPart2';
import DescriptionPart3 from '../../components/DescriptionPart3/DescriptionPart3';

const content = [
  {
    title: "Run Together. No Matter Where Your Path Takes You",
    description:
      "See your FitBit stats in real time. Connect with friends. Compete away.",
    button: "Read More",
    image: "/assets/photo1.jpg"
  },
  {
    title: "Like to Run? Have Friends All Over The World?",
    description:
      "Getting together with your friends to go on a run does not mean you have to be in the same place at the same time.",
    button: "Discover",
    image: "/assets/photo2.jpg"
  },
  {
    title: "Running Together Sounds Like a Great Idea",
    description:
      "No matter where you are, as long as you have your FitBit. Connect with your friends and track your stats.",
    button: "Check Us Out",
    image: "/assets/photo3.jpg"
  }
];

class Signin extends Component {
    constructor(props) {
        super(props);
        this.scrollToTopWithCallback = this.scrollToTopWithCallback.bind(this)
      }

    componentDidMount() {
        scrollToComponent(this.Slider, { offset: 0, align: 'middle', duration: 500, ease:'inCirc'});
      }

      scrollToTopWithCallback() {
        let scroller = scrollToComponent(this.Violet, { offset: 0, align: 'top', duration: 1500});
        scroller.on('end', () => console.log('Scrolling end!') );
      }
    
  render() {
    return (
      <div>
        <Slider className="slider-wrapper">
          {content.map((item, index) => (
            <div
              key={index}
              className="slider-content"
              style={{
                background: `url('${item.image}') no-repeat center center`
              }}
            >
              <div className="inner">
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <button onClick={() => scrollToComponent(this.Violet, { offset: 0, align: 'top', duration: 1500, ease:'inCirc'})}>{item.button}</button>
              </div>
            </div>
          ))}
        </Slider>
        <section className="violet" ref={(section)=> {this.Violet=section;}}><DescriptionPart1/></section>
           
        <DescriptionPart2/>
        <DescriptionPart3/>
      </div>
    );
  }
}

export default Signin;
