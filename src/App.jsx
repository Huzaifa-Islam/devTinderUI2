import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";

function App() {
  return (
    <>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<div>Base Page</div>} />
        <Route path="/login" element={<div>Login Page</div>} />
        <Route path="/test" element={<div>test page</div>} />
      </Routes>
    </BrowserRouter>
      <NavBar/>
      <h1 className="text-3xl font-bold">Hello</h1>
    </>
  );
}

export default App;
