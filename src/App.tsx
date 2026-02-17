import {Navigate, Route, Routes} from 'react-router-dom';

import {DetailPage} from './pages/detail-page';
import {HomePage} from './pages/home-page';
import {ListPage} from './pages/list-page';

export function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="notes" element={<ListPage />} />
      <Route path="notes/:slug" element={<DetailPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
