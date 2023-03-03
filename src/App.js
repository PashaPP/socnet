import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { Header } from './components/Header/Header';
import { Profile } from "./components/Profile/Profile";
import { Dialogs } from "./components/Dialogs/Dialogs";
export const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        {/* <Profile /> */}
        <Dialogs />
      </div>
    </div>
  )
}

