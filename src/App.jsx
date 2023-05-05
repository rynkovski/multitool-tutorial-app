import "./Styles/App.css";
import "./Styles/Todo.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Weather from "./Pages/Weather";
import Timer from "./Pages/Timer";
import Todo from "./Pages/TodoApp";
import { Route, Routes } from "react-router-dom";

function App() {
  console.log(window.location.pathname);
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/timer" element={<Timer />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/weather" element={<Weather />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
