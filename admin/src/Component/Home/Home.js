import React, { Component } from 'react';
import './Home.css'; // Import the CSS file for styling
import Typewriter from 'react-typewriter-effect';

// Import the images with correct paths and extensions
import image1 from '../../assets/Image1.jpg';
import image2 from '../../assets/Image2.jpg';
import image3 from '../../assets/Image3.jpg';
import image4 from '../../assets/Image4.jpg';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
    };
    this.images = [image1, image2, image3, image4]; // Use imported images here
  }

  componentDidMount() {
    // Automatically change the image every 8 seconds
    this.interval = setInterval(this.nextSlide, 8000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  nextSlide = () => {
    this.setState((prevState) => ({
      currentIndex: (prevState.currentIndex + 1) % this.images.length,
    }));
  };

  render() {
    return (
      <div className="slideshow">
        {this.images.map((image, index) => (
          <div key={index} className={`slide ${this.state.currentIndex === index ? 'active' : ''}`}>
            <img
              src={image}
              alt={`Slide ${index}`}
              className="slide-image"
            />
            <div className="text-overlay">
              <h2 className="maname-regular">
                <Typewriter
                  textStyle={{
                    fontSize: '32px',
                    display: 'flex', /* Use flexbox for centering */
                    justifyContent: 'center', /* Center horizontally */
                    alignItems: 'center', /* Center vertically */
                    textAlign: 'center',
                  }}
                  startDelay={100}
                  cursorColor="#ffbb00"
                  multiText={[
                    '⁜ ගොඩපිටිය ශ්‍රී සුදර්ශනාරාම පුරාණ මහා විහාරයේ ඇඩ්මින් පිටුවට ඔබව සාදරයෙන් පිලිගනිමු ⁜ ☸️ තෙරුවන් සරණයි ☸️ ⁜'
                  ]}
                  multiTextDelay={1000}
                  typeSpeed={50} // Slower typing speed
                  multiTextLoop={false}
                />
              </h2>
            </div>

          </div>
        ))}
      </div>
    );
  }
}

export default Home;
