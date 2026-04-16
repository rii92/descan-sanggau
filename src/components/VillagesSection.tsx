import { Link } from 'react-router-dom'
import { ChevronRight, ArrowUpRight } from 'lucide-react'
import { useState, useEffect } from 'react'
import { fetchVillageMetadata, VillageMetadata } from '../services/villageService'

export default function VillagesSection() {
  const [villages, setVillages] = useState<VillageMetadata[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadMetadata = async () => {
      try {
        const metadata = await fetchVillageMetadata()
        setVillages(metadata)
      } catch (error) {
        console.error('Error loading village metadata:', error)
      } finally {
        setLoading(false)
      }
    }

    loadMetadata()
  }, [])

  return (
    <section id="desa" className="relative py-32 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-primary-50">
      {/* Decorative elements */}
      <div className="absolute right-0 rounded-full top-20 w-96 h-96 bg-secondary-200 blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 left-0 rounded-full w-96 h-96 bg-accent-200 blur-3xl opacity-10"></div>

      <div className="relative z-10 container-custom">
        {/* Header */}
        <div className="mb-20 space-y-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100">
            <span className="text-sm font-bold text-primary-700">🏘️ JELAJAHI DESA</span>
          </div>
          <h2 className="text-4xl font-black text-transparent sm:text-5xl bg-gradient-to-r from-primary-700 to-secondary-600 bg-clip-text">
            Desa dan Kelurahan Unggulan
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-slate-600">
            Kumpulan desa berkembang yang telah melaksanakan program pembangunan data dan statistik terintegrasi
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mb-16 md:grid-cols-2 lg:grid-cols-4">
          {loading ? (
            <div className="col-span-full text-center py-12 text-slate-500">
              Memuat data desa...
            </div>
          ) : villages.length === 0 ? (
            <div className="col-span-full text-center py-12 text-slate-500">
              Tidak ada data desa tersedia
            </div>
          ) : (
            villages.map((village) => {
              const statusBg = 'bg-gradient-to-r from-primary-600 to-primary-700'
              
              return (
                <Link key={village.id} to={`/desa/${village.id}`}>
                  <div className="relative h-full transition-all duration-300 transform group hover:scale-105">
                    {/* Glow effect on hover */}
                    <div className="absolute transition-opacity duration-300 opacity-0 -inset-1 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-3xl group-hover:opacity-100 blur-2xl"></div>
                    
                    {/* Main Card */}
                    <div className="relative flex flex-col h-full overflow-hidden transition-all duration-300 bg-white border shadow-lg rounded-3xl hover:shadow-2xl border-slate-100 hover:border-primary-200">
                      {/* Hero Image Area */}
                      <div className={`bg-gradient-to-br ${village.color} h-56 relative overflow-hidden flex flex-col justify-end p-6`}>
                        {/* Decorative Icon in background */}
                        <div className="absolute text-white transition-opacity top-3 right-3 opacity-20 group-hover:opacity-30 text-6xl">
                          {village.icon}
                        </div>
                        
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
                      <div className="flex flex-col flex-1 p-8 space-y-6">
                        {/* Icon with background */}
                        <div className="flex items-center gap-4">
                          <div className={`w-14 h-14 ${village.iconBg} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform text-2xl`}>
                            {village.icon}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-black leading-tight transition-colors text-slate-900 group-hover:text-primary-700">
                              {village.name}
                            </h3>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="flex-1 text-sm leading-relaxed text-slate-600">
                          {village.district}
                        </p>

                        {/* Separator */}
                        <div className="border-t border-slate-100"></div>

                        {/* Footer Link */}
                        <div className="flex items-center justify-between pt-2 group/link">
                          <span className="text-sm font-bold text-primary-600 group-hover/link:text-primary-700">
                            Lihat Detail
                          </span>
                          <ArrowUpRight className="transition-all text-primary-600 group-hover/link:text-primary-700 group-hover/link:translate-x-1 group-hover/link:-translate-y-1" size={20} />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })
          )}
        </div>

        {/* CTA Section */}
        <div className="flex flex-col items-center gap-6">
          <p className="max-w-xl text-center text-slate-600">
            Pelajari lebih lanjut tentang program pembangunan data dan statistik di masing-masing desa
          </p>
          <Link 
            to="/desa/tanjung-kapuas"
            className="px-8 py-4 text-lg transform shadow-xl btn btn-primary hover:shadow-2xl hover:scale-105"
          >
            <span>Jelajahi Semua Desa</span>
            <ChevronRight size={24} />
          </Link>
        </div>
      </div>
    </section>
  )
}
