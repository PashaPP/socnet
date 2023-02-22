import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Navigation } from "./components/Navigation";
export const App = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <Footer />
    </div>
  )
}

