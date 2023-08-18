import { lazy, Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import tw from 'twin.macro';

const MainPage = lazy(() => import('./pages/main'));

const RouteWrapper = tw.main`relative w-full bg-black flex justify-center`;
const App = () => {
  return (
    <Suspense fallback={<></>}>
      <BrowserRouter>
        <RouteWrapper>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </RouteWrapper>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
