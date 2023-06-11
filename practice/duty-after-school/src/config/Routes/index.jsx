import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About, Cast, Home, MainPage } from "../../pages";

const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                    <Route path="/" element={<MainPage />}>
                        <Route index element={<Home />} />
                        <Route path="/cast" element={<Cast />} />
                        <Route path="/about" element={<About />} />
                    </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Routing