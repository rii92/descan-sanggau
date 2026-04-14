import { Link } from 'react-router-dom'
import { Mountain, Facebook, Twitter, Instagram, Youtube, Send } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary-600/10 to-primary-400/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-secondary-600/10 to-secondary-400/5 rounded-full blur-3xl"></div>

      {/* Top decorative stripe */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600"></div>

      <div className="container-custom pt-20 pb-12 relative z-10">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="space-y-6 lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl shadow-lg">
                <Mountain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-black text-white">Sanggau Portal</h3>
                <p className="text-xs font-bold text-primary-400">BPS Dashboard</p>
              </div>
            </div>
            
            <p className="text-slate-300 text-sm leading-relaxed">
              Platform informasi terintegrasi untuk pemberdayaan desa Kabupaten Sanggau melalui data akurat dan real-time.
            </p>
            
            {/* Social Links with BPS colors */}
            <div className="space-y-3">
              <p className="text-sm font-bold text-white">Ikuti Kami</p>
              <div className="flex gap-3">
                {[
                  { Icon: Facebook, bg: 'from-primary-600 to-primary-700' },
                  { Icon: Twitter, bg: 'from-secondary-600 to-secondary-700' },
                  { Icon: Instagram, bg: 'from-accent-600 to-accent-700' },
                  { Icon: Youtube, bg: 'from-primary-500 to-primary-600' }
                ].map(({ Icon, bg }) => (
                  <a 
                    key={Icon.name}
                    href="#" 
                    className={`w-12 h-12 bg-gradient-to-br ${bg} rounded-lg flex items-center justify-center transition-all hover:shadow-lg hover:scale-110`}
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Menu Links */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-primary-600 to-primary-400 rounded-full"></div>
              <h4 className="font-black text-lg text-white">Menu</h4>
            </div>
            <ul className="space-y-3">
              {[
                { label: 'Beranda', href: '/' },
                { label: 'Tentang Kami', href: '#tentang' },
                { label: 'Desa Kami', href: '#desa' },
                { label: 'Statistik', href: '#statistik' }
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.href} className="group flex items-center gap-2 text-slate-300 hover:text-primary-400 transition-colors font-medium">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-secondary-600 to-secondary-400 rounded-full"></div>
              <h4 className="font-black text-lg text-white">Layanan</h4>
            </div>
            <ul className="space-y-3">
              {[
                'Portal Data',
                'Statistik Desa',
                'Laporan Tahunan',
                'Panduan Pengguna'
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="group flex items-center gap-2 text-slate-300 hover:text-secondary-400 transition-colors font-medium">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-accent-600 to-accent-400 rounded-full"></div>
              <h4 className="font-black text-lg text-white">Hubungi Kami</h4>
            </div>
            <div className="space-y-4 text-slate-300 text-sm">
              <div className="space-y-1">
                <p className="font-bold text-white">Alamat</p>
                <p>Jl. Diponegoro, Sanggau 78651, Kalimantan Barat</p>
              </div>
              <div className="space-y-1">
                <p className="font-bold text-white">Telepon</p>
                <p>(0564) 1234 567</p>
              </div>
              <div className="space-y-1">
                <p className="font-bold text-white">Email</p>
                <p>info@sanggau.go.id</p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section - Enhanced */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-10 mb-16 shadow-2xl border border-primary-500/30">
          <div className="flex flex-col sm:flex-row gap-6 items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-6 bg-white rounded-full"></div>
                <h4 className="font-black text-lg">Berlangganan Newsletter</h4>
              </div>
              <p className="text-white/80 text-sm">Dapatkan update informasi dan statistik terbaru setiap minggu</p>
            </div>
            <div className="flex gap-2 w-full sm:w-auto">
              <input 
                type="email" 
                placeholder="Email Anda" 
                className="flex-1 sm:flex-none px-4 py-3 rounded-lg bg-white/15 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:border-white focus:bg-white/20 transition-all text-sm"
              />
              <button className="px-6 py-3 bg-white text-primary-700 rounded-lg font-bold hover:bg-slate-100 transition-all flex items-center gap-2 whitespace-nowrap shadow-lg">
                <Send size={18} />
                <span>Kirim</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 text-sm text-slate-400">
            <p className="font-medium">&copy; 2024 Kabupaten Sanggau. Hak Cipta Dilindungi.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a>
              <a href="#" className="hover:text-white transition-colors">Syarat Penggunaan</a>
              <a href="#" className="hover:text-white transition-colors">Peta Situs</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
