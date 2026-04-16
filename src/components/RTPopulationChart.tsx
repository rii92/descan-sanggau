import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import { Users, TrendingUp } from 'lucide-react'
import { RTPopulation } from '../services/villageService'

interface RTPopulationChartProps {
  villageeName: string
  totalPopulation: number
  rtData: RTPopulation[]
}

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899', '#06b6d4', '#14b8a6', '#f97316', '#6366f1']

export default function RTPopulationChart({ villageeName, totalPopulation, rtData }: RTPopulationChartProps) {
  const chartData = rtData.map(rt => ({
    name: `RT ${rt.rt} RW ${rt.rw}`,
    count: rt.count,
    rt: rt.rt,
    rw: rt.rw
  }))

  const getColor = (index: number) => COLORS[index % COLORS.length]

  const maxPopulation = Math.max(...rtData.map(rt => rt.count), 1)
  const avgPopulation = Math.round(totalPopulation / rtData.length)

  return (
    <div className="w-full">
      {/* Header Stats */}
      <div className="grid grid-cols-1 gap-4 mb-8 md:grid-cols-3">
        <div className="p-6 bg-white border rounded-lg shadow-sm card border-slate-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-600">Total Penduduk</p>
              <p className="text-3xl font-bold text-slate-900">{totalPopulation.toLocaleString('id-ID')}</p>
            </div>
            <div className="p-3 text-blue-600 bg-blue-100 rounded-full">
              <Users size={24} />
            </div>
          </div>
        </div>

        <div className="p-6 bg-white border rounded-lg shadow-sm card border-slate-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-600">Jumlah RT</p>
              <p className="text-3xl font-bold text-slate-900">{rtData.length}</p>
            </div>
            <div className="p-3 rounded-full bg-emerald-100 text-emerald-600">
              <TrendingUp size={24} />
            </div>
          </div>
        </div>

        <div className="p-6 bg-white border rounded-lg shadow-sm card border-slate-200">
          <div>
            <p className="text-sm text-slate-600">Rata-rata per RT</p>
            <p className="text-3xl font-bold text-slate-900">{avgPopulation}</p>
          </div>
        </div>
      </div>

      {/* Charts Container */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Bar Chart - 2 columns */}
        <div className="lg:col-span-2">
          <div className="p-6 bg-white border rounded-lg card border-slate-200">
            <h3 className="mb-6 text-lg font-bold text-slate-900">Distribusi Penduduk per RT</h3>
            {chartData.length > 0 ? (
              <div className="-mx-6 h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData} margin={{ top: 20, right: 30, left: 0, bottom: 60 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis 
                      dataKey="name" 
                      angle={-45}
                      textAnchor="end"
                      height={100}
                      tick={{ fontSize: 12 }}
                    />
                    <YAxis 
                      tick={{ fontSize: 12 }}
                      label={{ value: 'Jumlah Penduduk', angle: -90, position: 'insideLeft' }}
                    />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px' }}
                      formatter={(value) => [`${value} jiwa`, 'Jumlah']}
                    />
                    <Bar dataKey="count" fill="#3b82f6" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            ) : (
              <div className="flex items-center justify-center h-80 text-slate-500">
                Tidak ada data
              </div>
            )}
          </div>
        </div>

        {/* Pie Chart */}
        <div className="p-6 bg-white border rounded-lg card border-slate-200">
          <h3 className="mb-6 text-lg font-bold text-slate-900">Proporsi Penduduk</h3>
          {chartData.length > 0 ? (
            <div className="flex justify-center h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="count"
                  >
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={getColor(index)} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `${value} jiwa`} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          ) : (
            <div className="flex items-center justify-center h-80 text-slate-500">
              Tidak ada data
            </div>
          )}
        </div>
      </div>

      {/* Table View */}
      <div className="mt-8">
        <div className="p-6 bg-white border rounded-lg card border-slate-200">
          <h3 className="mb-6 text-lg font-bold text-slate-900">Detail Penduduk per RT</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="px-6 py-3 font-semibold text-left text-slate-900">RT/RW</th>
                  <th className="px-6 py-3 font-semibold text-left text-slate-900">Jumlah Penduduk</th>
                  <th className="px-6 py-3 font-semibold text-left text-slate-900">Persentase</th>
                  <th className="px-6 py-3 font-semibold text-left text-slate-900">Status</th>
                </tr>
              </thead>
              <tbody>
                {rtData.map((rt, index) => {
                  const percentage = ((rt.count / totalPopulation) * 100).toFixed(1)
                  const isAboveAvg = rt.count > avgPopulation
                  return (
                    <tr key={rt.rt} className="transition-colors border-b border-slate-100 hover:bg-slate-50">
                      <td className="px-6 py-4 font-medium text-slate-900">
                        RT {rt.rt} RW {rt.rw}
                      </td>
                      <td className="px-6 py-4">
                        <span className="font-semibold text-slate-900">{rt.count}</span> jiwa
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <div className="flex-grow h-2 rounded-full bg-slate-200">
                            <div 
                              className={`h-2 rounded-full transition-all ${isAboveAvg ? 'bg-emerald-500' : 'bg-blue-500'}`}
                              style={{ width: `${(rt.count / maxPopulation) * 100}%` }}
                            ></div>
                          </div>
                          <span className="text-slate-600">{percentage}%</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        {isAboveAvg ? (
                          <span className="inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full bg-emerald-100 text-emerald-800">
                            Padat
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full bg-slate-100 text-slate-800">
                            Normal
                          </span>
                        )}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
