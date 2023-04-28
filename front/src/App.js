


import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from './Components/Header';
import Services from './pages/Services';
import Price from './pages/Price';
import './pages/Home.css';
import Login from './pages/Login';
import Signup from './pages/Signup/Signup';
import Footer from './Components/Footer';
import About from './pages/About';
import Registration from './pages/Registration';
import RegForm from './pages/RegForm';

const App = () => {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />}> </Route>
          <Route path='/services' element={<Services />}></Route>
          <Route path='/price' element={<Price />}></Route>
          <Route path='/About' element={<About />}></Route>
          <Route path='/Registration' element={<Registration />}></Route>
          <Route path='/Login' element={<Login />}></Route>
          <Route path='/Signup' element={<Signup />}></Route>
          <Route path='/RegForm' element={<RegForm />}></Route>
        </Routes>
      </Router>
      <Footer />
    </>
  )
}

export default App




// import './App.css';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './Home';
// import Header from './Components/Header';
// import Services from './Services';
// import Price from './Price';
// import './Home.css';
// import Footer from './Components/Footer';
// // import LK from './LK';
// import About from './About';
// const App = () => {
//   return (
//     <>
//       <Header />
//       <Router>


//         <Routes>
//           <Route exact path='/' element={<Home />}> </Route>
//           <Route path='/services' element={<Services />}></Route>
//           <Route path='/price' element={<Price />}></Route>
//           <Route path='/About' element={<About />}></Route>
//           {/* <Route path='/LK' element={<LK />}></Route> */}
//         </Routes>
//       </Router>
// <Footer/>
//     </>
//   )
// }

// export default App

