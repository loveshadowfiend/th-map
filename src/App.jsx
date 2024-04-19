import "../node_modules/leaflet/dist/leaflet.css";
import "../node_modules/reset-css/reset.css";
import "./styles/style.css";
import { Map } from "./components/Map";

function App() {
    return (
        <div className="map-container">
            <Map />
        </div>
    );
}

export default App;
