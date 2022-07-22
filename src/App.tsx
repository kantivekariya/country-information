import MainRoutes from "./routes";
import { BrowserRouter} from "react-router-dom";

import "./App.scss";

function App() {
  return (
    <BrowserRouter>
        <MainRoutes />
    </BrowserRouter>
  );
}

export default App;
