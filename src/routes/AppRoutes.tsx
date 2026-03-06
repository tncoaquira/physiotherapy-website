// routes/AppRoutes.tsx
import { Routes, Route } from 'react-router-dom';
import Home from '~/pages/home';
// etc.

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<></>}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path="/pricing" element={<Home />} />
        <Route path="/contact" element={<Home />} />
        <Route path="/blog" element={<Home />} />
      </Route>
    </Routes>
  );
};