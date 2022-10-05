
import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainNavigation from './modules/layout/MainNavigation';
import Download from './modules/pages/Download';
import AboutUs from './modules/pages/AboutUs';
import Home from './modules/pages/Home';

function App() {
  return (
  <div className="flex w-screen h-screen min-h-screen flex-col items-center justify-center relative bg-primary pb-20">
    <BrowserRouter>
      <MainNavigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/download' element={<Download />} />
        <Route path='/about-us' element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

