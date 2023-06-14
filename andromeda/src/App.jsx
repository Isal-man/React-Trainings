/* eslint-disable react/prop-types */

import { useState } from "react";
import { SolarSystem } from "./components";

const App = () => {
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);
    return (
        <div>
            <SolarSystem index={index} setIndex={setIndex} showMore={showMore} setShowMore={setShowMore} />
            <SolarSystem index={index} setIndex={setIndex} showMore={showMore} setShowMore={setShowMore} />
            <SolarSystem index={index} setIndex={setIndex} showMore={showMore} setShowMore={setShowMore} />
        </div>
    );
};

export default App;
