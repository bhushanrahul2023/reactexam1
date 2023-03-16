import Dashboard from "./components/dashboard";
import { Route,Routes } from "react-router-dom";
import Login from "./components/login";
import Tickets from "./components/tickets";

function App() {
  return (
   

    <Routes>
      <Route index element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/tickets" element={<Tickets/>}/>
    </Routes>
  );
}

export default App;
