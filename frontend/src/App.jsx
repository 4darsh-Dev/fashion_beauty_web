// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import './App.css';
// import HomePage from './pages/Homepage';
// // import AboutPage from './pages/AboutPage';
// // import ContactUsPage from './pages/ContactUsPage';
// // import Layout from './components/Layout'; // Assuming your Layout is in components folder

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         {/* <Route element={<Layout />}>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/about" element={<AboutPage />} />
//           <Route path="/contact" element={<ContactUsPage />} />
//         </Route> */}
//         <Route path="/" element={<HomePage />}>

//       </Routes>
//     </Router>
//   );
// };

// export default App;

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
// import AboutPage from './pages/AboutPage';
// import ContactUsPage from './pages/ContactUsPage';
// import Layout from './components/Layout'; // Assuming your Layout is in components folder

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Simple route without layout */}
        <Route path="/" element={<HomePage />} />

        {/* Uncomment and use this if you want nested layout routes */}
        {/* 
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
        </Route> 
        */}
      </Routes>
    </Router>
  );
};

export default App;
