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
      <nav className='nav'>
        <div>
          <a href="#s">Menu</a>
        </div>
        <div>
          <a href="#s">Profile</a>
        </div>
        <div>
          <a href="#s">Messages</a>
        </div>
      </nav>
      <div className='content'>
        <div>
          Main Content
        </div>
      </div>
    </div>
  )
}

