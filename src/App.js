import Header from './Components/Header';
import Location from './Components/Location';
import data from './data';

function App() {
    let locations = data.map(place => <Location key={place.id} place={place} />);

    return (
        <div className="App">
            <Header />
            <div className="location-container">
                {locations}
            </div>
        </div>
    );
}

export default App;
