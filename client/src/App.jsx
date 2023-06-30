import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import NewBlogPage from "./pages/NewBlog";
import SpecificBlogPage from "./pages/SpecificBlogPage";
import AuthLayout from "./layout/AuthLayout";
import LoginForm from "./components/LoginForm";
import SigninForm from "./components/SigninForm";
import Protected from "./components/Protected";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/new" element={<NewBlogPage />} />
                <Route path="/blog/:id" element={<SpecificBlogPage />} />
                <Route path="/*" element={<Protected />}>
                    <Route
                        path="login"
                        element={
                            <AuthLayout>
                                <LoginForm />
                            </AuthLayout>
                        }
                    />
                    <Route
                        path="signin"
                        element={
                            <AuthLayout>
                                <SigninForm />
                            </AuthLayout>
                        }
                    />
                </Route>
                {/* <Route path="/*" element={<Protected>{"404"}</Protected>} /> */}
            </Routes>
        </>
    );
}

export default App;
