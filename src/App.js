import {BrowserRouter, Route, Routes, Link} from 'react-router-dom'
import UsersScreen from './components/UsersScreen';
import Navbar from './components/Navbar';
import ViewPosts from './components/ViewPosts';
import ViewAlbums from './components/ViewAlbums';
import UserDetails from './components/UserDetails';
import Posts from './components/Posts';
import Home from './components/Home';
import PostDetails from './components/PostDetails';
import Albums from './components/Albums';
import AlbumDetails from './components/AlbumDetails';


function App() {
  return (
    <BrowserRouter >
    <Navbar />
      <Routes>
        <Route path='/' element={< Home />}></Route>
        <Route path='/post-details' element={<PostDetails />} > </Route>
        <Route path='/users' element= {< UsersScreen />}></Route>
        <Route path='/albums' element= {< Albums />}></Route>
        <Route path='/posts' element= {< Posts />}></Route>
        <Route path='/view-posts' element= {< ViewPosts />}></Route>
        <Route path='/view-albums' element= {< ViewAlbums />}></Route>
        <Route path='/album-details' element= {< AlbumDetails />}></Route>
        <Route path='/user-details' element= {< UserDetails />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
