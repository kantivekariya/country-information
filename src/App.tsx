import MainRoutes from "./routes";
import { BrowserRouter} from "react-router-dom";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
        <MainRoutes />
    </BrowserRouter>
  );
}

export default App;
