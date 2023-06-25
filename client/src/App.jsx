import "./App.css";
import {Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import NewBlogPage from "./pages/NewBlog";
function App() {
    return <>
        <Navbar/>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/new" element={<NewBlogPage/>}/>
            <Route path="/blog" element={"Blog"}/>
        </Routes>
    </>;
}

export default App;
