# 🚀 Demir6 Web - Natro Hosting Deployment Rehberi

## 📦 Yüklenecek Dosyalar

### ✅ MUTLAKA Yüklenecek:
```
demir6web/
├── .next/                  ✅ Build çıktısı
├── public/                 ✅ Statik dosyalar (images, sitemap, robots.txt, favicon)
├── src/                    ✅ Kaynak kodlar
├── package.json            ✅ Bağımlılıklar
├── package-lock.json       ✅ Lock file
├── next.config.ts          ✅ Next.js ayarları
├── tsconfig.json           ✅ TypeScript ayarları
├── tailwind.config.ts      ✅ Tailwind CSS ayarları
└── postcss.config.mjs      ✅ PostCSS ayarları
```

### ❌ Yüklenmeyecek:
```
node_modules/               ❌ Sunucuda yüklenecek
.git/                       ❌ Git dosyaları
.next/cache/                ❌ Cache dosyaları
```

## 🔧 Natro'da Yapılacak İşlemler

### 1. FTP ile Dosya Yükleme
- FileZilla veya Natro File Manager kullanın
- Yukarıdaki dosyaları `public_html` veya site klasörüne yükleyin
- **NOT:** node_modules klasörünü YÜKLEMEYİN!

### 2. SSH/Terminal Erişimi (Eğer Varsa)
Natro SSH erişimi veriyorsa:

```bash
# 1. Site klasörüne gidin
cd /home/[kullaniciadi]/public_html

# 2. Node.js bağımlılıklarını yükleyin
npm install --production

# 3. Uygulamayı başlatın
npm start
```

### 3. Node.js Ayarları
Natro kontrol panelinde:
- **Node.js Versiyonu:** 18.x veya 20.x seçin
- **Entry Point:** `npm start` veya `node .next/standalone/server.js`
- **Port:** 3000 (veya Natro'nun belirttiği port)

### 4. Environment Variables (Opsiyonel)
Eğer `.env` dosyanız varsa, Natro panelinden ekleyin.

## 🌐 Domain Ayarları

1. Domain DNS kayıtlarını Natro'ya yönlendirin:
   - A kaydı: Natro IP adresi
   - veya Nameserver: Natro nameserver'ları

2. SSL Sertifikası:
   - Natro otomatik Let's Encrypt sağlıyor
   - Kontrol panelinden SSL'i aktif edin

## ⚠️ Önemli Notlar

### API Route Sorunu
- `/api/contact` route'u çalışmak için Node.js gerektirir
- Eğer Natro Node.js desteklemiyorsa, iletişim formu çalışmayacak
- Alternatif: Formspree veya EmailJS kullanın

### Static Export Seçeneği
Eğer Node.js desteği yoksa:
```bash
# next.config.ts'ye ekleyin:
output: 'export'

# Build alın:
npm run build

# Sadece out/ klasörünü yükleyin
```

## 📞 Sorun Giderme

### Site Açılmıyorsa:
1. `.next` klasörünün yüklendiğinden emin olun
2. `package.json` dosyasının mevcut olduğunu kontrol edin
3. Node.js versiyonunun 18.x+ olduğunu doğrulayın
4. SSH'dan `npm install` komutunu çalıştırın

### 404 Hatası:
- `.htaccess` dosyası gerekebilir (Next.js için)
- Natro desteğinden yardım isteyin

### Yavaş Çalışıyor:
- Natro'nun performans planını kontrol edin
- CDN kullanmayı düşünün

## 📊 Dosya Boyutları

- Toplam proje boyutu: ~50-100 MB (node_modules hariç)
- .next klasörü: ~20-30 MB
- public klasörü: ~10-20 MB
- src klasörü: ~1-2 MB

## ✨ Son Kontroller

- [ ] Tüm dosyalar yüklendi
- [ ] npm install çalıştırıldı
- [ ] npm start çalışıyor
- [ ] Domain SSL aktif
- [ ] Site açılıyor ve çalışıyor
- [ ] Animasyonlar çalışıyor
- [ ] Görseller yükleniyor
- [ ] Responsive tasarım çalışıyor

## 🆘 Destek

Sorun yaşarsanız:
1. Natro destek ekibine başvurun
2. Node.js desteği olup olmadığını sorun
3. Alternatif olarak Vercel'e geçmeyi düşünün (Ücretsiz + Node.js destekli)

---

**Hazırlayan:** Claude Code
**Tarih:** 07.02.2026
**Proje:** Demir6 Web Platform
