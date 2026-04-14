import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'

export default function ContactSection() {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Alamat',
      value: 'Jl. Diponegoro, Sanggau, Kalimantan Barat',
      color: 'from-primary-500 to-primary-600',
      bgLight: 'bg-primary-50',
      borderColor: 'border-primary-200'
    },
    {
      icon: Phone,
      title: 'Telepon',
      value: '(0564) 1234 567',
      color: 'from-secondary-500 to-secondary-600',
      bgLight: 'bg-secondary-50',
      borderColor: 'border-secondary-200'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'info@sanggau.go.id',
      color: 'from-accent-500 to-accent-600',
      bgLight: 'bg-accent-50',
      borderColor: 'border-accent-200'
    },
    {
      icon: Clock,
      title: 'Jam Operasional',
      value: 'Senin - Jumat: 08:00 - 16:00',
      color: 'from-emerald-500 to-emerald-600',
      bgLight: 'bg-emerald-50',
      borderColor: 'border-emerald-200'
    }
  ]

  return (
    <section id="kontak" className="py-32 bg-gradient-to-b from-white via-slate-50 to-primary-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200 rounded-full blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-200 rounded-full blur-3xl opacity-10"></div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 rounded-full">
            <span className="text-sm font-bold text-primary-700">📞 HUBUNGI KAMI</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-primary-700 to-secondary-600 bg-clip-text text-transparent">
            Kami Siap Membantu Anda
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Ada pertanyaan atau butuh informasi lebih lanjut? Tim kami siap memberikan respons terbaik untuk mendukung Anda
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Contact Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {contactInfo.map((info, idx) => {
              const Icon = info.icon
              return (
                <div 
                  key={info.title}
                  className="group relative transform transition-all duration-300 hover:scale-105"
                >
                  {/* Glow effect */}
                  <div className={`absolute -inset-1 bg-gradient-to-br ${info.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-lg`}></div>
                  
                  {/* Card */}
                  <div className={`relative ${info.bgLight} border-2 ${info.borderColor} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all bg-white`}>
                    {/* Number badge */}
                    <div className="absolute top-4 right-4 w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-600">
                      {idx + 1}
                    </div>

                    {/* Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-br ${info.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all mb-6 group-hover:-translate-y-2`}>
                      <Icon className="text-white" size={28} />
                    </div>

                    {/* Content */}
                    <div>
                      <h4 className="font-bold text-lg text-slate-900 mb-3">
                        {info.title}
                      </h4>
                      <p className="text-slate-600 group-hover:text-slate-700 transition-colors text-base leading-relaxed">
                        {info.value}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* CTA Section */}
          <div className="group relative">
            {/* Glow effect */}
            <div className="absolute -inset-2 bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity blur-2xl animate-pulse"></div>
            
            <div className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-700 rounded-3xl shadow-2xl overflow-hidden">
              {/* Decorative pattern */}
              <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" viewBox="0 0 200 200">
                  <circle cx="50" cy="50" r="40" fill="white" opacity="0.2" />
                  <circle cx="150" cy="150" r="50" fill="white" opacity="0.15" />
                </svg>
              </div>

              {/* Floating blobs */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-36 h-36 bg-black/20 rounded-full blur-3xl"></div>

              {/* Content */}
              <div className="relative z-10 p-12 space-y-6">
                <div className="space-y-3">
                  <h3 className="text-4xl font-black text-white">Butuh Bantuan Lebih Lanjut?</h3>
                  <p className="text-white/90 text-lg max-w-2xl">
                    Hubungi tim kami untuk diskusi mendalam tentang program pembangunan desa dan layanan kami
                  </p>
                </div>
                
                <button className="inline-flex items-center gap-3 bg-white text-primary-600 px-8 py-4 rounded-full font-bold hover:shadow-2xl transition-all hover:scale-105 active:scale-95 text-lg">
                  <Send size={22} />
                  <span>Kirim Pesan</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
