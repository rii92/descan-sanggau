import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import VillageDetail from './pages/VillageDetail'

export default function App() {
  return (
    <Router basename="/">
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/desa/:id" element={<VillageDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}
