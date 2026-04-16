import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Users, MapPin, Trophy, Leaf, Zap, Shield, Award, Calendar, Briefcase, Home, Loader } from 'lucide-react'
import { useState, useEffect } from 'react'
import RTPopulationChart from '../components/RTPopulationChart'
import { fetchVillageData, fetchVillageMetadata, aggregateVillageData, VillagePopulation, VillageMetadata, PopulationRecord } from '../services/villageService'

export default function VillageDetail() {
  const { id } = useParams()
  const [allRecords, setAllRecords] = useState<PopulationRecord[]>([])
  const [villages, setVillages] = useState<VillagePopulation[]>([])
  const [metadata, setMetadata] = useState<VillageMetadata[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true)
        // Fetch both village data and metadata in parallel
        const [records, metadataRecords] = await Promise.all([
          fetchVillageData(),
          fetchVillageMetadata()
        ])
        
        setAllRecords(records)
        setMetadata(metadataRecords)
        
        if (records.length === 0) {
          setError('Tidak ada data tersedia')
          return
        }

        const aggregated = aggregateVillageData(records)
        setVillages(aggregated)
      } catch (err) {
        setError('Gagal memuat data desa')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [])

  // Find village by name or id
  const currentVillage = villages.find(v => 
    v.desa.toLowerCase().includes(id?.toLowerCase().replace('-', ' ') || '')
  ) || (villages.length > 0 ? villages[0] : null)

  // Get metadata for current village
  const getVillageMetadata = (villageName: string): VillageMetadata | undefined => {
    return metadata.find(m => 
      m.name.toLowerCase().includes(villageName.toLowerCase()) || 
      m.id === villageName.toLowerCase().replace(/\s+/g, '-')
    )
  }

  const villageMetadata = currentVillage ? getVillageMetadata(currentVillage.desa) : undefined

  const village = currentVillage && villageMetadata
    ? {
        name: villageMetadata.name,
        district: villageMetadata.district,
        population: currentVillage.totalPopulation.toLocaleString('id-ID'),
        area: '12.45',
        status: villageMetadata.status,
        icon: villageMetadata.icon,
        color: villageMetadata.color,
        description: villageMetadata.description,
        founded: villageMetadata.founded.toString(),
        headVillage: villageMetadata.headVillage
      }
    : currentVillage
    ? {
        name: currentVillage.desa,
        district: currentVillage.kecamatan,
        population: currentVillage.totalPopulation.toLocaleString('id-ID'),
        area: '12.45',
        status: 'Kelurahan Cantik',
        icon: '🏘️',
        color: 'from-slate-500 to-slate-700',
        description: `${currentVillage.desa} merupakan desa dengan potensi pengembangan statistik dan data yang akurat untuk perencanaan pembangunan berkelanjutan.`,
        founded: '-',
        headVillage: '-'
      }
    : null

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

  // Only create highlights when village data is available
  const highlights = village ? [
    { icon: <Calendar size={20} />, label: 'Didirikan', value: village.founded },
    { icon: <Home size={20} />, label: 'Kepala Desa', value: village.headVillage },
    { icon: <Users size={20} />, label: 'Jumlah Penduduk', value: `${village.population} jiwa` },
    { icon: <MapPin size={20} />, label: 'Luas Wilayah', value: `${village.area} km²` }
  ] : []

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Loading State */}
      {loading && (
        <div className="flex items-center justify-center min-h-screen">
          <div className="space-y-4 text-center">
            <Loader size={48} className="mx-auto text-blue-600 animate-spin" />
            <p className="text-lg text-slate-600">Memuat data desa...</p>
          </div>
        </div>
      )}

      {/* Error State */}
      {error && !loading && (
        <div className="flex items-center justify-center min-h-screen">
          <div className="space-y-4 text-center">
            <p className="text-lg font-semibold text-red-600">{error}</p>
            <Link to="/" className="inline-block text-blue-600 hover:text-blue-700">
              ← Kembali ke Beranda
            </Link>
          </div>
        </div>
      )}

      {/* Village Not Found */}
      {!loading && !error && !village && villages.length > 0 && (
        <div className="flex items-center justify-center min-h-screen">
          <div className="space-y-4 text-center">
            <p className="text-lg text-slate-600">Desa tidak ditemukan</p>
            <p className="text-slate-500">Pilih salah satu desa dari daftar berikut:</p>
            <div className="mt-6 space-y-2">
              {villages.map((v) => (
                <Link 
                  key={v.desa}
                  to={`/village/${v.desa.toLowerCase().replace(/\s+/g, '-')}`}
                  className="block text-blue-600 hover:text-blue-700"
                >
                  {v.desa}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      {!loading && !error && village && currentVillage && (
        <>
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
                {[
                  { icon: <Calendar size={20} />, label: 'Didirikan', value: village.founded },
                  { icon: <Home size={20} />, label: 'Kepala Desa', value: village.headVillage },
                  { icon: <Users size={20} />, label: 'Jumlah Penduduk', value: `${village.population} jiwa` },
                  { icon: <MapPin size={20} />, label: 'Luas Wilayah', value: `${village.area} km²` }
                ].map((item, idx) => (
                  <div key={idx} className="p-6 bg-white shadow-lg card">
                    <div className="mb-3 text-primary-600">
                      {item.icon}
                    </div>
                    <p className="mb-2 text-sm text-slate-600">{item.label}</p>
                    <p className="text-lg font-bold text-slate-900">{item.value}</p>
                  </div>
                ))}
              </div>

              {/* Population Chart Section */}
              <div className="mb-20">
                <div className="mb-8">
                  <p className="flex items-center gap-2 mb-3 text-sm font-semibold text-primary-600">
                    <Users size={16} />
                    VISUALISASI DATA
                  </p>
                  <h2 className="text-3xl font-bold text-slate-900">Distribusi Penduduk per RT</h2>
                </div>
                <RTPopulationChart 
                  villageeName={currentVillage.desa}
                  totalPopulation={currentVillage.totalPopulation}
                  rtData={currentVillage.rtData}
                />
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
                    {/* <div className="p-5 border card bg-secondary-50 border-secondary-100">
                      <p className="mb-1 text-2xl font-bold text-secondary-700">{villages.length}</p>
                      <p className="text-sm text-slate-600">Total Desa</p>
                    </div> */}
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
                  {[
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
                  ].map((benefit, idx) => (
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
        </>
      )}
    </div>
  )
}