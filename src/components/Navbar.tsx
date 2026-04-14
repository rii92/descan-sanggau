import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Mountain } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    setIsOpen(false)
    
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-lg border-b-4 border-primary-600">
      <div className="container-custom">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="p-2.5 bg-gradient-to-br from-primary-600 to-primary-700 rounded-lg group-hover:shadow-lg transition-all hover:scale-110">
              <Mountain className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-black bg-gradient-to-r from-primary-700 to-primary-600 bg-clip-text text-transparent">
                Sanggau Portal
              </span>
              <span className="text-xs font-bold text-secondary-600">BPS Dashboard</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            <Link to="/" className="text-slate-700 hover:text-primary-600 transition-colors font-semibold">
              Beranda
            </Link>
            <a href="#tentang" onClick={(e) => handleScroll(e, 'tentang')} className="text-slate-700 hover:text-primary-600 transition-colors font-semibold">
              Tentang
            </a>
            <a href="#desa" onClick={(e) => handleScroll(e, 'desa')} className="text-slate-700 hover:text-primary-600 transition-colors font-semibold">
              Desa Kami
            </a>
            <a href="#statistik" onClick={(e) => handleScroll(e, 'statistik')} className="text-slate-700 hover:text-primary-600 transition-colors font-semibold">
              Statistik
            </a>
            <a href="#kontak" onClick={(e) => handleScroll(e, 'kontak')} className="text-slate-700 hover:text-primary-600 transition-colors font-semibold">
              Kontak
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-primary-700 hover:text-primary-600 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-1 border-t-2 border-primary-200 bg-gradient-to-b from-primary-50 to-white">
            <Link to="/" className="block text-slate-700 hover:text-primary-700 hover:bg-primary-100 transition-all py-3 px-3 rounded-lg font-semibold">
              Beranda
            </Link>
            <a href="#tentang" onClick={(e) => handleScroll(e, 'tentang')} className="block text-slate-700 hover:text-primary-700 hover:bg-primary-100 transition-all py-3 px-3 rounded-lg font-semibold">
              Tentang
            </a>
            <a href="#desa" onClick={(e) => handleScroll(e, 'desa')} className="block text-slate-700 hover:text-primary-700 hover:bg-primary-100 transition-all py-3 px-3 rounded-lg font-semibold">
              Desa Kami
            </a>
            <a href="#statistik" onClick={(e) => handleScroll(e, 'statistik')} className="block text-slate-700 hover:text-primary-700 hover:bg-primary-100 transition-all py-3 px-3 rounded-lg font-semibold">
              Statistik
            </a>
            <a href="#kontak" onClick={(e) => handleScroll(e, 'kontak')} className="block text-slate-700 hover:text-primary-700 hover:bg-primary-100 transition-all py-3 px-3 rounded-lg font-semibold">
              Kontak
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
