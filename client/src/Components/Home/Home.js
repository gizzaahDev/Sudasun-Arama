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
      <div>
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
                <p className='maname-regular'>අකුරැස්ස



                </p>
              </div>

            </div>
          ))}
        </div>
        <div className='VM-container'>
        <div className='vision-container'>
          <div >
            <h4>෴ දැක්ම ෴</h4>
            <div className='vision-p'>
            <p >
              ශ්‍රී ලංකාව බහු සංස්කෘතික සහ බහු ආගම් ගමනාන්තයක් වශයෙන් ප්‍රකට එකක් වන අතර, එහි විවිධත්වය එරට සංස්කෘතික උරුමය, කලා, නාට්‍ය හා සංගීතයේදී හෝ, සිරිත් විරිත් වලදී හෝ ඉතා විශාල ලෙස දැක්වේ. 

            </p>
            </div>
          </div>

        </div>


        <div className='mission-container'>
          <div className="mission-pg">
            <h4>෴ මෙහෙවර ෴</h4>
            <div className='vision-p'>
            <p >
              ශ්‍රී ලංකාව බහු සංස්කෘතික සහ බහු ආගම් ගමනාන්තයක් වශයෙන් ප්‍රකට එකක් වන අතර, එහි විවිධත්වය එරට සංස්කෘතික උරුමය, කලා, නාට්‍ය හා සංගීතයේදී හෝ, සිරිත් විරිත් වලදී හෝ ඉතා විශාල ලෙස දැක්වේ. ශ්‍රී ලංකාවට විශිෂ්ට වූ ඉතිහාසයක් තිබේ. එය යුනෙස්කෝ සංරක්ෂණය කළ පැරණි නගරවල්, කෙලෑ, යාය සහ බොදු අයුතුයන්හිදී දක්නට ලැබේ. ඉන්දියානු සාගරයෙහි මුහුදු වෙරළ පිටිපස්සේ, හරිත වනාන්තර, තේ කඳුකර, සෙරසම් බිම් සහ මැටි ගල් වලින් සෑදූ විශාල ගල් පර්වතකයන්, දේශගුණවලට, සත්ව විශේෂවලට, හා ශාක සම්ප්‍රාප්තියට යටත්ව ශ්‍රී ලංකාව භූමිගතවී ඇත.

              


            </p>
            </div>
          </div>

        </div>
        </div>
      </div>
    );
  }
}

export default Home;
