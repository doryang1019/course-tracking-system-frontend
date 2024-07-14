import { Routes, Route } from 'react-router-dom'
import HomePage from './components/homePage'
import LoginPage from './components/loginPage'
import SearchCourse from './components/searchCoursePage'
import AboutUs from './components/aboutUsPage'
import Signup from './components/signupPage'
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