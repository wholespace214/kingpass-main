import { Suspense } from 'react';
import { Route, Routes, BrowserRouter as Router, Navigate } from 'react-router-dom';

import { PUBLIC_ROUTES } from './config/routes';

import { Provider } from './Provider';
import { Layout } from './layouts/layout';

import { Home } from './pages/home';
import { MintPage } from './pages/mint';

function App() {
  return (
    <Suspense fallback={<>Loading</>}>
      <Router>
        <Provider>
          <Layout>
            <Routes>
              <Route path={PUBLIC_ROUTES.default} element={<Home />} />
              <Route path={PUBLIC_ROUTES.home} element={<Home />} />
              <Route path={PUBLIC_ROUTES.mint} element={<MintPage />} />
              <Route path="*" element={<Navigate to={PUBLIC_ROUTES.error404} replace />} />
            </Routes>
          </Layout>
        </Provider>
      </Router>
    </Suspense>
  );
}

export default App;
