import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from '@/pages/Home/HomePage'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import { routes } from '@/routes'

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path={routes.home} element={<HomePage />} />
          <Route path="*" element={<Navigate to={routes.home} replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
