import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Users, MapPin, Trophy, Leaf, Zap, Shield, Award, Calendar, Briefcase, Home } from 'lucide-react'

export default function VillageDetail() {
  // Mock data for villages
  const villageData: Record<string, any> = {
    'jangkang': {
      name: 'Desa Jangkang',
      district: 'Kecamatan Sanggau Ledo',
      population: '8,524',
      area: '45.23',
      status: 'Desa Cinta Statistik',
      icon: '🏔️',
      color: 'from-primary-500 to-primary-700',
      description: 'Desa Jangkang terletak di Kecamatan Sanggau Ledo dengan potensi pertanian yang besar. Desa ini telah mengimplementasikan program Desa Cinta Statistik untuk meningkatkan kemandirian data dan transparansi pengelolaan desa.',
      founded: '1975',
      headVillage: 'Bapak Sarno, S.Pd'
    },
    'sekurus': {
      name: 'Desa Sekurus',
      district: 'Kecamatan Entikong',
      population: '6,230',
      area: '32.45',
      status: 'Desa Cinta Statistik',
      icon: '🌿',
      color: 'from-secondary-500 to-secondary-700',
      description: 'Desa Sekurus adalah salah satu desa progresif di Kecamatan Entikong yang terus mengembangkan sistem manajemen data untuk pembangunan berkelanjutan dan meningkatkan kesejahteraan masyarakat.',
      founded: '1982',
      headVillage: 'Bapak Sutrisno, S.H'
    },
    'sepauk': {
      name: 'Desa Sepauk',
      district: 'Kecamatan Sepauk',
      population: '5,890',
      area: '28.67',
      status: 'Desa Cinta Statistik Baru',
      icon: '🌊',
      color: 'from-blue-500 to-blue-700',
      description: 'Desa Sepauk baru bergabung dengan program Desa Cinta Statistik tahun ini dengan komitmen penuh untuk transparansi data, akuntabilitas, dan pemberdayaan masyarakat yang berkelanjutan.',
      founded: '1988',
      headVillage: 'Bapak Husni, S.E'
    },
    'ribang': {
      name: 'Desa Ribang',
      district: 'Kecamatan Sanggau Kapuas',
      population: '7,120',
      area: '35.89',
      status: 'Desa Cinta Statistik',
      icon: '🌲',
      color: 'from-emerald-500 to-emerald-700',
      description: 'Desa Ribang memiliki potensi ekonomi lokal yang kuat dengan pertanian dan kerajinan tangan sebagai mata pencaharian utama masyarakat, serta komitmen terhadap pembangunan berkelanjutan.',
      founded: '1979',
      headVillage: 'Bapak Bambang, S.Kom'
    }
  }

  const { id } = useParams()
  const village = villageData[id || ''] || villageData['jangkang']

  const benefits = [
    {
      icon: <Zap size={32} />,
      title: 'Kebijakan Tepat Sasaran',
      description: 'Data hingga level individu memastikan bantuan sosial dan program pemerintah sampai ke yang paling membutuhkan'
    },
    {
      icon: <Shield size={32} />,
      title: 'Kemandirian Data Desa',
      description: 'Desa mengelola, menganalisis, dan menyajikan datanya sendiri dengan sistem terstruktur dan akurat'
    },
    {
      icon: <Award size={32} />,
      title: 'Perencanaan Berbasis Bukti',
      description: 'Setiap rencana pembangunan didasarkan pada data faktual, terkini, dan mendapat dukungan stakeholder'
    },
    {
      icon: <Briefcase size={32} />,
      title: 'Transparansi & Kolaborasi',
      description: 'Data valid meningkatkan kepercayaan publik dan membuka peluang kerjasama dengan berbagai pihak'
    }
  ]

  const highlights = [
    { icon: <Calendar size={20} />, label: 'Didirikan', value: village.founded },
    { icon: <Home size={20} />, label: 'Kepala Desa', value: village.headVillage },
    { icon: <Users size={20} />, label: 'Jumlah Penduduk', value: `${village.population} jiwa` },
    { icon: <MapPin size={20} />, label: 'Luas Wilayah', value: `${village.area} km²` }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className={`bg-gradient-to-br ${village.color} text-white py-24 relative overflow-hidden`}>
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -mt-40 -mr-40 rounded-full w-96 h-96 bg-white/10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-40 -ml-40 rounded-full w-80 h-80 bg-black/10 blur-3xl"></div>

        <div className="relative z-10 container-custom">
          {/* Breadcrumb */}
          <Link to="/" className="inline-flex items-center gap-2 mb-8 transition-colors text-white/80 hover:text-white group">
            <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
            <span className="text-sm font-medium">Kembali ke Beranda</span>
          </Link>

          {/* Title */}
          <div className="space-y-6">
            <div className="text-7xl">{village.icon}</div>
            <div>
              <h1 className="mb-3 text-5xl font-bold leading-tight sm:text-6xl">{village.name}</h1>
              <p className="text-xl text-white/90">{village.district}</p>
            </div>
            
            {/* Status Badge */}
            <div className="flex flex-wrap gap-3 pt-4">
              <div className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold border rounded-full bg-white/20 backdrop-blur-md border-white/30">
                <Trophy size={16} />
                {village.status}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container-custom">
          {/* Highlights Grid */}
          <div className="relative z-20 grid grid-cols-2 gap-4 mb-16 -mt-20 lg:grid-cols-4">
            {highlights.map((item, idx) => (
              <div key={idx} className="p-6 bg-white shadow-lg card">
                <div className="mb-3 text-primary-600">
                  {item.icon}
                </div>
                <p className="mb-2 text-sm text-slate-600">{item.label}</p>
                <p className="text-lg font-bold text-slate-900">{item.value}</p>
              </div>
            ))}
          </div>

          {/* About Section */}
          <div className="grid items-center grid-cols-1 gap-12 mb-20 lg:grid-cols-3">
            {/* Left - Visual */}
            <div className="lg:col-span-1">
              <div className={`bg-gradient-to-br ${village.color} rounded-3xl h-80 flex items-center justify-center shadow-2xl overflow-hidden group`}>
                <div className="transition-transform duration-500 opacity-50 text-8xl group-hover:scale-110">
                  {village.icon}
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="space-y-8 lg:col-span-2">
              <div>
                <p className="flex items-center gap-2 mb-2 text-sm font-semibold text-primary-600">
                  <Leaf size={16} />
                  TENTANG DESA
                </p>
                <h2 className="mb-4 text-3xl font-bold text-slate-900">Mengenal Lebih Dekat</h2>
                <p className="text-lg leading-relaxed text-slate-600">
                  {village.description}
                </p>
              </div>

              {/* Key Info Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-5 border card bg-primary-50 border-primary-100">
                  <p className="mb-1 text-2xl font-bold text-primary-700">{village.population}</p>
                  <p className="text-sm text-slate-600">Jumlah Penduduk</p>
                </div>
                <div className="p-5 border card bg-secondary-50 border-secondary-100">
                  <p className="mb-1 text-2xl font-bold text-secondary-700">{village.area}</p>
                  <p className="text-sm text-slate-600">Luas Wilayah (km²)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-20">
            <div className="mb-16 text-center">
              <p className="flex items-center justify-center gap-2 mb-3 text-sm font-semibold text-primary-600">
                <Zap size={16} />
                KEUNTUNGAN PROGRAM
              </p>
              <h2 className="mb-4 text-4xl font-bold text-slate-900">
                Manfaat Desa Cinta Statistik
              </h2>
              <p className="max-w-2xl mx-auto text-lg text-slate-600">
                Program ini membawa transformasi nyata bagi kemajuan dan kemandirian desa
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="p-8 bg-white border card-hover group border-slate-100">
                  <div className={`w-16 h-16 bg-gradient-to-br ${village.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                    {benefit.icon}
                  </div>
                  <h3 className="mb-3 text-xl font-bold transition-colors text-slate-900 group-hover:text-primary-700">
                    {benefit.title}
                  </h3>
                  <p className="leading-relaxed transition-colors text-slate-600 group-hover:text-slate-700">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Program Activities Section */}
          <div className="p-12 mb-20 text-white bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl">
            <div className="max-w-3xl mx-auto">
              <p className="flex items-center gap-2 mb-3 text-sm font-semibold text-secondary-400">
                <Calendar size={16} />
                KEGIATAN & PROGRAM
              </p>
              <h2 className="mb-8 text-3xl font-bold">Program Unggulan Tahun Ini</h2>

              <div className="space-y-4">
                {[
                  { month: 'Januari', program: 'Pendataan Basis Data Wilayah (BDW) Terpadu', status: 'Selesai' },
                  { month: 'Maret', program: 'Workshop Pelatihan Operator Data Desa', status: 'Selesai' },
                  { month: 'Juni', program: 'Pengembangan Platform Statistik Desa Online', status: 'Berjalan' },
                  { month: 'September', program: 'Audit Data dan Validasi Kualitas Informasi', status: 'Mendatang' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 pb-4 border-b border-white/10 last:border-0">
                    <div className="flex-shrink-0">
                      <div className={`w-3 h-3 rounded-full mt-2 ${item.status === 'Selesai' ? 'bg-emerald-400' : item.status === 'Berjalan' ? 'bg-blue-400' : 'bg-slate-400'}`}></div>
                    </div>
                    <div className="flex-grow">
                      <p className="mb-1 text-sm text-slate-300">{item.month}</p>
                      <p className="font-semibold">{item.program}</p>
                    </div>
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap ${
                      item.status === 'Selesai' ? 'bg-emerald-500/20 text-emerald-300' :
                      item.status === 'Berjalan' ? 'bg-blue-500/20 text-blue-300' :
                      'bg-slate-500/20 text-slate-300'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className={`bg-gradient-to-r ${village.color} rounded-3xl shadow-2xl overflow-hidden relative`}>
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" viewBox="0 0 1200 200">
                <path fill="currentColor" d="M0,100 Q150,50 300,100 T600,100 T900,100 T1200,100 L1200,200 L0,200 Z" />
              </svg>
            </div>

            <div className="relative z-10 p-12 space-y-8 text-center text-white sm:p-16">
              <div>
                <h3 className="mb-4 text-4xl font-bold">Ingin Tahu Lebih Lanjut?</h3>
                <p className="max-w-2xl mx-auto text-xl text-white/80">
                  Hubungi kami untuk mendapatkan informasi detail tentang program, statistik desa, dan peluang kolaborasi
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="#kontak"
                  className="font-semibold bg-white btn text-slate-900 hover:bg-slate-100 hover:shadow-xl"
                >
                  💬 Hubungi Kami
                </a>
                <Link
                  to="/"
                  className="font-semibold text-white border-2 border-white btn hover:bg-white/10"
                >
                  ← Kembali
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
