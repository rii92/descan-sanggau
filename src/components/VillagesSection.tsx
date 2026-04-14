import { Link } from 'react-router-dom'
import { Mountain, Leaf, Waves, Trees, ChevronRight, ArrowUpRight } from 'lucide-react'

export default function VillagesSection() {
  const villages = [
    {
      id: 'jangkang',
      name: 'Desa Jangkang',
      district: 'Kecamatan Sanggau Ledo',
      icon: Mountain,
      bgGradient: 'from-primary-500 to-primary-700',
      iconBg: 'bg-primary-100',
      iconColor: 'text-primary-600',
      status: 'Aktif'
    },
    {
      id: 'sekurus',
      name: 'Desa Sekurus',
      district: 'Kecamatan Entikong',
      icon: Leaf,
      bgGradient: 'from-secondary-500 to-secondary-700',
      iconBg: 'bg-secondary-100',
      iconColor: 'text-secondary-600',
      status: 'Aktif'
    },
    {
      id: 'sepauk',
      name: 'Desa Sepauk',
      district: 'Kecamatan Sepauk',
      icon: Waves,
      bgGradient: 'from-blue-500 to-blue-700',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
      status: 'Baru'
    },
    {
      id: 'ribang',
      name: 'Desa Ribang',
      district: 'Kecamatan Sanggau Kapuas',
      icon: Trees,
      bgGradient: 'from-emerald-500 to-emerald-700',
      iconBg: 'bg-emerald-100',
      iconColor: 'text-emerald-600',
      status: 'Aktif'
    }
  ]

  return (
    <section id="desa" className="py-32 bg-gradient-to-b from-slate-50 via-white to-primary-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-secondary-200 rounded-full blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-200 rounded-full blur-3xl opacity-10"></div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 rounded-full">
            <span className="text-sm font-bold text-primary-700">🏘️ JELAJAHI DESA</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-primary-700 to-secondary-600 bg-clip-text text-transparent">
            Desa dan Kelurahan Unggulan
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Kumpulan desa berkembang yang telah melaksanakan program pembangunan data dan statistik terintegrasi
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {villages.map((village) => {
            const Icon = village.icon
            const statusBg = village.status === 'Baru' 
              ? 'bg-gradient-to-r from-accent-500 to-accent-600' 
              : 'bg-gradient-to-r from-primary-600 to-primary-700'
            
            return (
              <Link key={village.id} to={`/desa/${village.id}`}>
                <div className="group h-full relative transform transition-all duration-300 hover:scale-105">
                  {/* Glow effect on hover */}
                  <div className="absolute -inset-1 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-2xl"></div>
                  
                  {/* Main Card */}
                  <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col border border-slate-100 hover:border-primary-200">
                    {/* Hero Image Area */}
                    <div className={`bg-gradient-to-br ${village.bgGradient} h-56 relative overflow-hidden flex flex-col justify-end p-6`}>
                      {/* Decorative Icon in background */}
                      <Icon className="absolute top-3 right-3 text-white opacity-20 group-hover:opacity-30 transition-opacity" size={64} />
                      
                      {/* Decorative pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <svg className="w-full h-full" viewBox="0 0 100 100">
                          <circle cx="20" cy="20" r="15" fill="white" opacity="0.2" />
                          <circle cx="80" cy="80" r="20" fill="white" opacity="0.15" />
                        </svg>
                      </div>

                      {/* Status Badge */}
                      <div className={`${statusBg} text-white text-xs font-bold px-4 py-2 rounded-full w-fit shadow-lg`}>
                        ✓ {village.status}
                      </div>
                    </div>

                    {/* Content Area */}
                    <div className="p-8 flex-1 flex flex-col space-y-6">
                      {/* Icon with background */}
                      <div className="flex items-center gap-4">
                        <div className={`w-14 h-14 ${village.iconBg} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                          <Icon className={`${village.iconColor}`} size={28} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-black text-slate-900 group-hover:text-primary-700 transition-colors leading-tight">
                            {village.name}
                          </h3>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-slate-600 text-sm leading-relaxed flex-1">
                        {village.district}
                      </p>

                      {/* Separator */}
                      <div className="border-t border-slate-100"></div>

                      {/* Footer Link */}
                      <div className="flex items-center justify-between group/link pt-2">
                        <span className="text-primary-600 font-bold text-sm group-hover/link:text-primary-700">
                          Lihat Detail
                        </span>
                        <ArrowUpRight className="text-primary-600 group-hover/link:text-primary-700 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-all" size={20} />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="flex flex-col items-center gap-6">
          <p className="text-center text-slate-600 max-w-xl">
            Pelajari lebih lanjut tentang program pembangunan data dan statistik di masing-masing desa
          </p>
          <Link 
            to="/desa/jangkang"
            className="btn btn-primary text-lg px-8 py-4 shadow-xl hover:shadow-2xl transform hover:scale-105"
          >
            <span>Jelajahi Semua Desa</span>
            <ChevronRight size={24} />
          </Link>
        </div>
      </div>
    </section>
  )
}
