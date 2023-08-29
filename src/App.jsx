import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';

import Spinner from './component/spinner';
import TestReview from './pages/TestReview';

// Lazy-loaded components
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/services'));
const ContactUS = lazy(() => import('./pages/ContactUS'));
const Gallery = lazy(() => import('./pages/gallery'));
const Blogs = lazy(() => import('./pages/Blogs'));
const Testnomials = lazy(() => import('./pages/Testonomial'));
const StudioForRent = lazy(() => import('./pages/StudioForRent'))
const WeddingCreagraphy = lazy(() => import('./pages/WeddingCreagraphy'))
const BollywoodDance = lazy(() => import('./pages/BollywoodDance'))


function App() {

  return (
    <>
      <HashRouter>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact-us" element={<ContactUS />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/testimonials" element={<TestReview />} />
            <Route path='/services/StudioForRent' element={<StudioForRent />} />
            <Route path='/services/BollywoodDanceClass' element={<BollywoodDance />} />
            <Route path='/services/WeddingChoreography' element={<WeddingCreagraphy />} />
          </Routes>
        </Suspense>
      </HashRouter>
    </>
  );
}

export default App;