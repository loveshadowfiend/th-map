import "../node_modules/reset-css/reset.css";
import "./styles/style.css";
import { Map } from "./components/Map";

function App() {
    return (
        <div>
            <div className="map-container">
                <Map />
            </div>
        </div>
    );
}

export default App;
