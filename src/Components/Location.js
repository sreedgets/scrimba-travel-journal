import React from 'react';

export default function Location({place}) {
    return (
        <section className="travel-location">
            <div className="image-container">
                <div className="image-placeholder"></div>
            </div>
            <div className="desc-container">
                <div className="desc-location">
                    <div className="location-top">
                        <h3>{place.location}</h3>
                        <a href={place.googleMapsUrl}>View on Google Maps</a>
                    </div>
                    <div className="location-bot">
                        <h2>{place.title}</h2>
                    </div>
                </div>
                <div className="dates-visited">
                    {place.startDate} - {place.endDate}
                </div>
                <div className="desc">
                    <p>
                        {place.description}
                    </p>
                </div>
            </div>
        </section>
    )
}