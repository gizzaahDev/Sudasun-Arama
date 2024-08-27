import React, { Component } from 'react';
import './Home.css'; // Import the CSS file for styling

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
              <h2 className='maname-regular'>ගොඩපිටිය ශ්‍රී සුදර්ශනාරාම පුරාණ මහා විහාරය</h2>
              <p className='maname-regular'>අකුරැස්ස</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Home;
