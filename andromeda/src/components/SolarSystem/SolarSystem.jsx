/* eslint-disable react/prop-types */
// SolarSystem css
import './SolarSystem.css'

const planets = [
    "Mercury",
    "Venus",
    "Mars",
    "Earth",
    "Uranus",
    "Neptunus",
    "Saturnus",
    "Jupiter",
];

const SolarSystem = ({ index, setIndex, showMore, setShowMore }) => {
    function handleMoreClick() {
        setShowMore(!showMore);
    }

    return (
        <div className="solarsystem-wrapper">
            <h1>{planets[index]}</h1>
            {showMore && <p>Planet ke-{index + 1} dalam tata surya.</p>}
            <button onClick={handleMoreClick}>
                {showMore ? "Sembunyikan" : "Tampilkan"} detail
            </button>
            <div className="pagination">
            <button onClick={() => setIndex(index - 1)} hidden={index === 0}>
                Sebelumnya
            </button>
            <button
                onClick={() => setIndex(index + 1)}
                hidden={index === (planets.length - 1)}
            >
                Berikutnya
            </button>
            </div>
        </div>
    );
};

export default SolarSystem;
