import { Outlet } from 'react-router-dom';
import Header from './Component/Header';
import MainPage from './pages/MainPage';
import Footer from './Component/Footer';


function App() {

  return (
    <>
     <Header/>
     <MainPage/>
     <Footer/>
    </>
  )
}

export default App
