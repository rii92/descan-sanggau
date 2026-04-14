export default function StatsSection() {
  const stats = [
    { label: 'Kecamatan', value: '14', icon: '🏛️', desc: 'Wilayah Administratif' },
    { label: 'Penduduk', value: '250K+', icon: '👥', desc: 'Jiwa' },
    { label: 'Desa/Kelurahan', value: '140+', icon: '🏘️', desc: 'Komunitas' },
    { label: 'Luas Wilayah', value: '14,876', icon: '📍', suffix: 'km²', desc: 'Luas Total' }
  ]

  return (
    <section id="statistik" className="py-32 bg-gradient-to-b from-white via-primary-50 to-primary-100 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-200 rounded-full blur-3xl opacity-15"></div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 rounded-full">
            <span className="text-sm font-bold text-primary-700">📊 STATISTIK KABUPATEN</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-primary-700 to-primary-600 bg-clip-text text-transparent">
            Data Kabupaten Sanggau 2024
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Informasi lengkap tentang wilayah, populasi, dan perkembangan desa di Kabupaten Sanggau
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, idx) => (
            <div 
              key={stat.label}
              className="group relative"
            >
              {/* Card with gradient border */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
              
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-105 border border-slate-100 hover:border-primary-200">
                {/* Top icon */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">{stat.icon}</div>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-primary-50 rounded-full flex items-center justify-center text-primary-600 font-bold text-lg">
                    {idx + 1}
                  </div>
                </div>

                {/* Main value */}
                <div className="space-y-2 mb-6">
                  <div className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-primary-700 to-primary-600 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  {stat.suffix && (
                    <div className="text-sm font-bold text-primary-600">{stat.suffix}</div>
                  )}
                </div>

                {/* Label and description */}
                <div className="space-y-1 border-t border-slate-100 pt-4">
                  <p className="font-bold text-slate-900">{stat.label}</p>
                  <p className="text-sm text-slate-600">{stat.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
