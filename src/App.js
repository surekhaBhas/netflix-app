
import {Routes,Route} from 'react-router-dom'
import HomePage from './components/Homepage/Homepage';
import SecondPage from './components/Secondpage/secondPage';
import Profile from './components/Secondpage/Profile/Profile';
import VideoPlay from './components/videoPlay/VideoPlay';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/signUp/SignUp';
import RequireAuth from './components/requireAuth';

function App() {
  return(
    <div>
      <Routes>
      <Route path='signIn' element={<SignIn/>}/>
      <Route path='signUp' element={<SignUp/>}/>
      <Route element={<RequireAuth/>}>
      <Route path='/' element={<HomePage/>}/>
       <Route path='movies' element={<SecondPage/>}/>
       <Route path='profile/:id' element={<Profile/>}/>
       <Route path='play/:id' element={<VideoPlay/>}/>
      </Route>
       
      </Routes>
     
    </div>
  )
  
}

export default App;
