import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/homePage'
import LoginPage from './pages/loginPage'
import SearchCourse from './pages/searchCoursePage'
import AboutUs from './pages/aboutUsPage'
import Signup from './pages/signupPage'
import Testing from './components/testing'
const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/search" element={<SearchCourse />}></Route>
            <Route path="/about" element={<AboutUs />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/test" element={<Testing />}></Route>
        </Routes>
    );
}
export default AppRoutes;