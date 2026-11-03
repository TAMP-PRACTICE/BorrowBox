import Login from "./Pages/Login";
import Register from "./Pages/Register";
import LandingPage from "./Pages/LandingPage";
import {Route,Routes} from "react-router-dom";
import MainUserDashboard from "./components/MainUserDashboard";
import Explores from "./components/Explores";
import Bookings from "./components/Bookings";
import History from "./components/History";
import Profile from "./components/Profile";
import UserDashBoard from "./Pages/userDashBoard";
function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<LandingPage/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/user-dashboard" element={<UserDashBoard/>}>
      <Route path="dashboard" element={<MainUserDashboard/>}></Route>
      <Route path="explore" element={<Explores/>}></Route>
      <Route path="bookings" element={<Bookings/>}></Route>
      <Route path="profile" element={<Profile/>}></Route>
      </Route>
    </Routes>
    </>
  )
}

export default App
