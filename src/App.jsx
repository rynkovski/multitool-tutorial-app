import "./Styles/App.css";
import "./Styles/Todo.css";
import Home from "./Pages/Home";
import Weather from "./Pages/Weather";
import Timer from "./Pages/Timer";
import Todo from "./Pages/TodoApp";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";

function App() {
  return (
    <>
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/timer" element={<Timer />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/weather" element={<Weather />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
