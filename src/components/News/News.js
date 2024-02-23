import React , {useEffect}from 'react';
import './News.css';
import newsData from './newsData';
import Aos from 'aos';
import eventImage1 from '../../resources/mainImg.jpg';
// import eventImage2 from './images/event2.jpg';
// import eventImage3 from './images/event3.jpg';

function News() {
  useEffect(()=>{
        Aos.init({duration:1000});
      },[])

    const eventImages = [eventImage1];

    return (
        <div className="events-container" data-aos="zoom-in">
            {newsData.map((event, index) => (
                <div key={index} className="event">
                    <div className="image-container" data-aos="flip-right">
                        <img src={eventImages[0]} alt={event.name} />
                    </div>
                    <div className="description-container" data-aos="zoom-in">
                        <h2>{event.name}</h2>
                        <p>Date: {event.date}</p>
                        <p className='description-para'>{event.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default News;