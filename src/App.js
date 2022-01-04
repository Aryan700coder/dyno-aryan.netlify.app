import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/home';
function App() {
  return (
    <main>
      <Header />
      <Home />
      <Footer />
    </main>
  );
}

export default App;
