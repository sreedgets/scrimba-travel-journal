import React from 'react';

export default function Location() {
    return (
        <section className="travel-location">
            <div className="image-container">
                <div className="image-placeholder"></div>
            </div>
            <div className="desc-container">
                <div className="desc-location">
                    <div className="location-top">
                        <h3>SKYRIM</h3>
                        <a href="#">View on Google Maps</a>
                    </div>
                    <div className="location-bot">
                        <h2>WHITERUN</h2>
                    </div>
                </div>
                <div className="dates-visited">
                    15 Second Seed, 4E 203 - 28 Second Seed, 4E 203 
                </div>
                <div className="desc">
                    <p>Whiterun is teh capital city of Whiterun Hold, in the center of Skyrim. In whiterun, you can find strong Nord women on strong Nord crack.</p>
                </div>
            </div>
        </section>
    )
}