// import "../node_modules/reset-css/reset.css";
import "./styles/style.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Map } from "./components/Map";

function App() {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <Map />
        </QueryClientProvider>
    );
}

export default App;
