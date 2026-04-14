import { Database, BarChart3, Smartphone, Lock } from 'lucide-react'

export default function FeaturesSection() {
  const features = [
    {
      icon: Database,
      title: 'Data Terintegrasi',
      description: 'Sistem database terpusat untuk mengelola semua informasi desa dengan aman dan terstruktur.',
      color: 'from-primary-500 to-primary-600',
      bgColor: 'bg-primary-50',
      borderColor: 'border-primary-200'
    },
    {
      icon: BarChart3,
      title: 'Analitik Real-time',
      description: 'Visualisasi data dinamis untuk monitoring pembangunan desa secara real-time dan akurat.',
      color: 'from-secondary-500 to-secondary-600',
      bgColor: 'bg-secondary-50',
      borderColor: 'border-secondary-200'
    },
    {
      icon: Smartphone,
      title: 'Akses Mudah',
      description: 'Platform mobile-friendly yang dapat diakses oleh siapa saja, kapan saja, dari mana saja.',
      color: 'from-accent-500 to-accent-600',
      bgColor: 'bg-accent-50',
      borderColor: 'border-accent-200'
    },
    {
      icon: Lock,
      title: 'Keamanan Data',
      description: 'Enkripsi tingkat enterprise untuk melindungi privasi dan keamanan data masyarakat.',
      color: 'from-emerald-500 to-emerald-600',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-200'
    }
  ]

  return (
    <section className="py-32 bg-gradient-to-b from-white via-slate-50 to-primary-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-200 rounded-full blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-200 rounded-full blur-3xl opacity-10"></div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 rounded-full">
            <span className="text-sm font-bold text-primary-700">⭐ FITUR UNGGULAN</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-primary-700 to-secondary-600 bg-clip-text text-transparent">
            Keunggulan Platform Kami
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Solusi lengkap dan terintegrasi untuk pengelolaan data desa yang modern, aman, dan mudah digunakan
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <div 
                key={feature.title}
                className="group relative h-full transform transition-all duration-300 hover:scale-105"
              >
                {/* Glow effect on hover */}
                <div className={`absolute -inset-1 bg-gradient-to-br ${feature.color} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-2xl`}></div>
                
                {/* Main Card */}
                <div className={`relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all border-2 ${feature.borderColor} h-full flex flex-col`}>
                  {/* Number badge */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full flex items-center justify-center text-slate-700 font-bold">
                    {idx + 1}
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all group-hover:scale-110 group-hover:-translate-y-2 mb-6`}>
                    <Icon className="text-white" size={32} />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-primary-700 transition-colors">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 group-hover:text-slate-700 transition-colors leading-relaxed flex-1 mb-6">
                    {feature.description}
                  </p>

                  {/* CTA indicator */}
                  <div className="flex items-center gap-2 text-primary-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Selengkapnya</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
