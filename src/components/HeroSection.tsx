import { ArrowDown, BarChart3 } from 'lucide-react'
import kotaSanggauBg from '@/assets/kotaSanggau.svg'

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-40 overflow-hidden bg-gradient-to-br from-primary-50 via-white to-blue-50">
      {/* Large decorative blobs - Orange dominant */}
      <div className="absolute right-0 rounded-full top-10 w-96 h-96 bg-gradient-to-br from-primary-300 to-primary-200 blur-3xl opacity-30"></div>
      <div className="absolute -bottom-20 -left-40 w-[500px] h-[500px] bg-gradient-to-tr from-primary-400 to-primary-200 rounded-full blur-3xl opacity-25"></div>
      <div className="absolute rounded-full top-1/2 right-1/4 w-80 h-80 bg-gradient-to-br from-secondary-300 to-accent-300 blur-3xl opacity-15"></div>

      <div className="relative z-10 container-custom">
        <div className="grid items-center grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <div className="space-y-10">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100">
                <span className="text-sm font-bold text-primary-700">PORTAL DATA TERPERCAYA</span>
              </div>

              <h1 className="text-5xl font-black leading-tight text-transparent sm:text-6xl lg:text-7xl bg-gradient-to-r from-primary-700 via-primary-600 to-primary-500 bg-clip-text">
                Kabupaten Sanggau
              </h1>

              <p className="text-2xl font-semibold sm:text-3xl text-slate-700">
                Memberdayakan Desa Melalui Data dan Inovasi
              </p>

              <p className="text-lg leading-relaxed text-slate-600">
                Platform informasi terintegrasi yang mendukung pemberdayaan desa dan pengembangan berkelanjutan melalui data akurat dan real-time.
              </p>
            </div>

            {/* Enhanced Badges */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {/* Card 1 */}
              <div className="relative p-5 overflow-hidden text-white transition-all duration-300 shadow-md group bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl hover:shadow-xl hover:-translate-y-1">
                <div className="absolute top-0 left-0 w-1 h-full bg-white/30 rounded-l-2xl" />
                <p className="text-base font-bold leading-snug">Alam Lestari</p>
                <div className="mt-3 w-8 h-0.5 bg-white/40 transition-all duration-300 group-hover:w-14" />
              </div>

              {/* Card 2 */}
              <div className="relative p-5 overflow-hidden text-white transition-all duration-300 shadow-md group bg-gradient-to-br from-secondary-600 to-secondary-700 rounded-2xl hover:shadow-xl hover:-translate-y-1">
                <div className="absolute top-0 left-0 w-1 h-full bg-white/30 rounded-l-2xl" />
                <p className="text-base font-bold leading-snug">Masyarakat Sejahtera</p>
                <div className="mt-3 w-8 h-0.5 bg-white/40 transition-all duration-300 group-hover:w-14" />
              </div>

              {/* Card 3 */}
              <div className="relative p-5 overflow-hidden text-white transition-all duration-300 shadow-md group bg-gradient-to-br from-accent-600 to-accent-700 rounded-2xl hover:shadow-xl hover:-translate-y-1">
                <div className="absolute top-0 left-0 w-1 h-full bg-white/30 rounded-l-2xl" />
                <p className="text-base font-bold leading-snug">Pembangunan Terukur</p>
                <div className="mt-3 w-8 h-0.5 bg-white/40 transition-all duration-300 group-hover:w-14" />
              </div>
            </div>

            {/* CTA Buttons - More prominent */}
            <div className="flex flex-wrap gap-4 pt-6">
              <a
                href="#desa"
                className="inline-flex items-center gap-2 px-8 py-4 font-bold text-white transition-all shadow-xl bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl hover:shadow-2xl hover:scale-105"
              >
                <ArrowDown size={20} />
                Jelajahi Desa
              </a>
              <a
                href="#statistik"
                className="inline-flex items-center gap-2 px-8 py-4 font-bold transition-all bg-white border-2 shadow-lg border-secondary-600 text-secondary-600 rounded-xl hover:bg-secondary-50 hover:shadow-xl"
              >
                <BarChart3 size={20} />
                Lihat Statistik
              </a>
            </div>
          </div>

          {/* Right Visual - Enhanced design */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-md">
              {/* Main card with bold orange gradient */}
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-700 rounded-3xl opacity-30 blur-xl"></div>

                {/* Card */}
                <div className="relative p-2 shadow-2xl bg-gradient-to-br from-primary-600 to-primary-700 rounded-3xl">
                  <div
                    className="relative flex flex-col items-center justify-center p-16 space-y-6 overflow-hidden rounded-3xl min-h-[400px]"
                    style={{
                      backgroundImage: `url(${kotaSanggauBg})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  >
                    {/* Overlay agar konten tetap terbaca */}
                    <div className="absolute inset-0 bg-white/60 backdrop-blur-sm rounded-3xl" />

                    {/* Konten di atas overlay */}
                    <div className="relative z-10 flex flex-col items-center space-y-6">
                      <div className="space-y-3 text-center">
                        <h3 className="text-3xl font-black text-transparent bg-gradient-to-r from-primary-700 to-primary-600 bg-clip-text">
                          Keindahan Alam
                        </h3>
                        <p className="font-medium text-slate-600">Wilayah yang kaya akan potensi lokal dan inovasi</p>
                      </div>
                      <div className="flex justify-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-primary-500"></div>
                        <div className="w-2 h-2 rounded-full bg-secondary-500"></div>
                        <div className="w-2 h-2 rounded-full bg-accent-500"></div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Floating accent elements */}
              <div className="absolute w-40 h-40 -bottom-6 -right-6 bg-gradient-to-br from-secondary-400 to-secondary-600 rounded-3xl blur-3xl opacity-20"></div>
              <div className="absolute w-32 h-32 rounded-full -top-10 -left-10 bg-gradient-to-br from-accent-400 to-accent-500 blur-3xl opacity-15"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
