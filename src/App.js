import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Navigation } from "./components/Navigation";
export const App = () => {
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2CFxacNIJXeP5bv3-HwPBw-vf9pqnxeHbG4QP6cgjuTVO1BMppIM1oMkg66V-E7CBUUw&usqp=CAU" alt="" />
      </header>
      <div className='nav'>
        <nav >
          <div>
            <a href="#s">Profile</a>
          </div>
          <div>
            <a href="#s">Messages</a>
          </div>
          <div>
            <a href="#s">News</a>
          </div>
          <div>
            <a href="#s">Music</a>
          </div>
          <div>
            <a href="#s">Settings</a>
          </div>
        </nav></div>
      <div className='content'>
        <img src="https://c4.wallpaperflare.com/wallpaper/4/285/220/wave-yellow-background-yellow-fon-hd-wallpaper-preview.jpg" alt="oboi" />
      </div>
    </div>
  )
}

