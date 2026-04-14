import { Target, Sparkles, MapPin } from 'lucide-react'

export default function AboutSection() {
  return (
    <section id="tentang" className="py-32 bg-gradient-to-b from-white via-primary-50 to-white relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary-200 rounded-full blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-200 rounded-full blur-3xl opacity-10"></div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="relative h-96 lg:h-[500px]">
              {/* Main visual card with enhanced design */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary-400 via-secondary-500 to-secondary-700 rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300 group">
                {/* Multiple layered decorative elements */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-9xl opacity-40 animate-bounce">🌿</div>
                </div>
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-3xl"></div>

                {/* Pattern overlay */}
                <div className="absolute inset-0 opacity-20">
                  <svg className="w-full h-full" viewBox="0 0 200 200">
                    <circle cx="50" cy="50" r="40" fill="white" opacity="0.1" />
                    <circle cx="150" cy="150" r="50" fill="white" opacity="0.1" />
                    <path d="M0,100 Q50,50 100,100 T200,100" stroke="white" strokeWidth="0.5" fill="none" opacity="0.2" />
                  </svg>
                </div>
              </div>
              
              {/* Enhanced floating accents */}
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-accent-300 rounded-3xl opacity-30 blur-3xl animate-pulse"></div>
              <div className="absolute -top-4 -left-4 w-40 h-40 bg-primary-300 rounded-full opacity-25 blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>

          {/* Right Content */}
          <div className="order-1 lg:order-2 space-y-8">
            {/* Header */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary-100 rounded-full mb-4">
                <Sparkles className="text-secondary-600" size={18} />
                <span className="text-sm font-bold text-secondary-700">TENTANG KAMI</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-primary-700 to-secondary-600 bg-clip-text text-transparent mb-6">
                Sanggau Maju Bersama
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed">
                Kabupaten Sanggau adalah bagian integral dari Provinsi Kalimantan Barat dengan kekayaan sumber daya alam yang luar biasa. Kami berkomitmen untuk memberdayakan setiap desa melalui teknologi, data, dan inovasi berkelanjutan.
              </p>
            </div>

            {/* Vision & Mission Cards - Enhanced */}
            <div className="space-y-4">
              <div className="group relative">
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-400 to-primary-300 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-lg"></div>
                
                <div className="relative bg-gradient-to-br from-primary-50 to-primary-100 border-2 border-primary-200 rounded-2xl p-6 hover:shadow-xl transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Target className="text-white" size={24} />
                    </div>
                    <div className="flex-1 space-y-2">
                      <h3 className="text-xl font-bold text-primary-900">Visi Kami</h3>
                      <p className="text-slate-700">
                        Mewujudkan Sanggau yang maju, mandiri, dan berkelanjutan dengan pemberdayaan desa digital.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group relative">
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-secondary-400 to-secondary-300 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-lg"></div>
                
                <div className="relative bg-gradient-to-br from-secondary-50 to-secondary-100 border-2 border-secondary-200 rounded-2xl p-6 hover:shadow-xl transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-white" size={24} />
                    </div>
                    <div className="flex-1 space-y-2">
                      <h3 className="text-xl font-bold text-secondary-900">Misi Kami</h3>
                      <p className="text-slate-700">
                        Membangun ekosistem data terpadu yang memberdayakan desa dalam pengambilan keputusan strategis.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Points - Enhanced */}
            <div className="grid grid-cols-2 gap-4">
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-br from-primary-400 to-primary-300 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur"></div>
                <div className="relative bg-white border-2 border-primary-100 rounded-xl p-6 text-center hover:shadow-lg">
                  <div className="text-4xl font-black text-primary-600 mb-2">50+</div>
                  <p className="text-sm font-semibold text-slate-700">Program Pembangunan</p>
                </div>
              </div>
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-br from-secondary-400 to-secondary-300 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur"></div>
                <div className="relative bg-white border-2 border-secondary-100 rounded-xl p-6 text-center hover:shadow-lg">
                  <div className="text-4xl font-black text-secondary-600 mb-2">100%</div>
                  <p className="text-sm font-semibold text-slate-700">Komitmen Transparansi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
