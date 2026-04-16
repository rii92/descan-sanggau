const API_URL = 'https://script.google.com/macros/s/AKfycbz8HTlZz7aIyVUiZbOF6ArVlTKCLWJ2j_4E4-6wddQuH1841xqnPTH4kPZW0HlTRsCEAQ/exec?action=read'
const METADATA_API_URL = 'https://script.google.com/macros/s/AKfycbz8HTlZz7aIyVUiZbOF6ArVlTKCLWJ2j_4E4-6wddQuH1841xqnPTH4kPZW0HlTRsCEAQ/exec?action=read-metadata'

export interface PopulationRecord {
  id: string
  nama: string
  alamat: string
  nomor: number
  provinsi: string
  kabupaten: string
  kecamatan: string
  desa: string
  sls: string
  subsls: string
  longitude: number
  latitude: number
  tanggal_dibuat: string
  tanggal_diubah: string
  source_file: number
}

export interface RTPopulation {
  rt: string
  count: number
  rw: string
}

export interface VillagePopulation {
  desa: string
  kecamatan: string
  kabupaten: string
  totalPopulation: number
  rtData: RTPopulation[]
}

export interface VillageMetadata {
  id: string
  name: string
  district: string
  icon: string
  bgGradient: string
  iconBg: string
  iconColor: string
  status: string
  color: string
  description: string
  founded: number
  headVillage: string
}

export async function fetchVillageData(): Promise<PopulationRecord[]> {
  try {
    const response = await fetch(API_URL)
    const data = await response.json()
    return data.records || []
  } catch (error) {
    console.error('Error fetching village data:', error)
    return []
  }
}

export async function fetchVillageMetadata(): Promise<VillageMetadata[]> {
  try {
    const response = await fetch(METADATA_API_URL)
    const data = await response.json()
    return data.records || []
  } catch (error) {
    console.error('Error fetching village metadata:', error)
    return []
  }
}

export function aggregateVillageData(records: PopulationRecord[]): VillagePopulation[] {
  const villageMap = new Map<string, PopulationRecord[]>()

  // Group records by village
  records.forEach(record => {
    const key = record.desa
    if (!villageMap.has(key)) {
      villageMap.set(key, [])
    }
    villageMap.get(key)!.push(record)
  })

  // Convert to VillagePopulation array
  const villages: VillagePopulation[] = []
  
  villageMap.forEach((records, villageName) => {
    const rtMap = new Map<string, number>()
    const rwMap = new Map<string, string>()

    // Group by RT and count
    records.forEach(record => {
      const rtKey = extractRTNumber(record.sls)
      const rwValue = extractRWNumber(record.sls)
      
      if (rtKey) {
        rtMap.set(rtKey, (rtMap.get(rtKey) || 0) + 1)
        rwMap.set(rtKey, rwValue)
      }
    })

    // Create RT data array
    const rtData: RTPopulation[] = Array.from(rtMap.entries()).map(([rt, count]) => ({
      rt,
      count,
      rw: rwMap.get(rt) || ''
    })).sort((a, b) => parseInt(a.rt) - parseInt(b.rt))

    villages.push({
      desa: villageName,
      kecamatan: records[0]?.kecamatan || '',
      kabupaten: records[0]?.kabupaten || '',
      totalPopulation: records.length,
      rtData
    })
  })

  return villages.sort((a, b) => a.desa.localeCompare(b.desa))
}

function extractRTNumber(sls: string): string {
  const match = sls.match(/RT\s*(\d+)/i)
  return match ? match[1].padStart(3, '0') : ''
}

function extractRWNumber(sls: string): string {
  const match = sls.match(/RW\s*(\d+)/i)
  return match ? match[1].padStart(3, '0') : ''
}
