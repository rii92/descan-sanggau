# Kabupaten Sanggau - Portal Informasi Desa

Website modern untuk Kabupaten Sanggau yang menampilkan informasi dan statistik desa dengan antarmuka yang menarik dan responsif.

## 🚀 Fitur Utama

- **Hero Section** - Tampilan menarik dengan deskripsi kabupaten
- **Statistik Cepat** - Overview data kabupaten (14 kecamatan, 250K+ penduduk, dll)
- **Tentang Sanggau** - Informasi lengkap tentang kabupaten
- **Fitur Platform** - 4 keunggulan platform data
- **Desa dan Kelurahan Unggulan** - Grid cards untuk setiap desa dengan link detail
- **Kontak** - Informasi kontak dan lokasi
- **Responsive Design** - Fully responsive untuk semua ukuran layar

## 🛠 Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **React Router** - Navigation
- **Lucide React** - Icons

## 📋 Prasyarat

- Node.js 16+ 
- npm atau yarn

## 🏃 Cara Menjalankan

### 1. Install Dependencies

```bash
npm install
# atau
yarn install
```

### 2. Development Server

```bash
npm run dev
# atau
yarn dev
```

Server akan berjalan di `http://localhost:5173`

### 3. Build untuk Production

```bash
npm run build
# atau
yarn build
```

### 4. Preview Production Build

```bash
npm run preview
# atau
yarn preview
```

## 📁 Struktur Project

```
src/
├── components/          # React components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── StatsSection.tsx
│   ├── AboutSection.tsx
│   ├── FeaturesSection.tsx
│   ├── VillagesSection.tsx
│   └── ContactSection.tsx
├── pages/               # Page components
│   ├── Home.tsx
│   └── VillageDetail.tsx
├── App.tsx              # Main app component
├── main.tsx             # Entry point
└── index.css            # Global styles

public/                 # Static assets
index.html              # HTML entry point
tailwind.config.js      # Tailwind configuration
tsconfig.json           # TypeScript configuration
vite.config.ts          # Vite configuration
```

## 🎨 Customization

### Color Scheme

Edit `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      primary: '#1e5a3f',    // Dark green
      secondary: '#2ecc71',  // Light green
      accent: '#f39c12',     // Orange
    }
  }
}
```

### Konten

- **Heroes & Stats**: Edit di `src/components/HeroSection.tsx` dan `StatsSection.tsx`
- **Desa**: Tambah/edit desa di `src/components/VillagesSection.tsx`
- **Kontak**: Update info kontak di `src/components/ContactSection.tsx`

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔄 Navigasi

- `/` - Halaman utama
- `/desa/:id` - Detail desa (jangkang, sekurus, sepauk, ribang)

## 📞 Support

Untuk pertanyaan atau bantuan, hubungi:
- Email: info@sanggau.go.id
- Telepon: (0564) 1234 567

## 📄 License

© 2024 Kabupaten Sanggau. All rights reserved.
