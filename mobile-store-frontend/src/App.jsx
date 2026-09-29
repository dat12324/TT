import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from '@/pages/Home/HomePage'
import { routes } from '@/routes'

function App() {
  return (
    <Routes>
      <Route path={routes.home} element={<HomePage />} />
      <Route path="*" element={<Navigate to={routes.home} replace />} />
    </Routes>
  )
}

export default App
