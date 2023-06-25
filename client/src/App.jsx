import "./App.css";
import {Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import NewBlogPage from "./pages/NewBlog";
import SpecificBlogPage from "./pages/SpecificBlogPage";
function App() {
    return <>
        <Navbar/>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/new" element={<NewBlogPage/>}/>
            <Route path="/blog/:id" element={<SpecificBlogPage/>}/>
        </Routes>
    </>;
}

export default App;
