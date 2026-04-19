# ArchStudio - Mimari Portfolyo Platformu

Bu proje, yüksek performanslı, minimalist ve WebXR destekli bir mimari portfolyo sitesidir. Mevcut yapı, ileride **Supabase/PostgreSQL** entegrasyonuna tam uyumlu olacak şekilde "Service Layer" mimarisiyle kurgulanmıştır.

## 🏗 Mimari Yapı

-   **Service Layer (`js/dataService.js`):** Tüm veri çekme işlemleri burada yapılır. Fonksiyonlar `async/await` yapısındadır. Veritabanına geçildiğinde sadece bu dosyadaki `fetch` isteklerini güncellemek yeterlidir.
-   **Localization System (i18n):** Çok dilli destek (TR/EN) merkezi bir servis üzerinden yönetilir.
-   **Component Tabanlı Render:** UI bileşenleri (`Hero`, `About`, `ProjectGrid`, `ProjectDetail`, `Footer`) bağımsız modüller olarak tasarlanmıştır.
-   **Glassmorphism UI:** Modern, derinlik hissi veren ve transparan bileşenlerle kurgulanmış görsel dil.
-   **WebXR Entegrasyonu:** VR ve AR (Artırılmış Gerçeklik) desteği ile projelerin gerçek mekanda incelenmesi.

## 🛠 Kullanılan Teknolojiler

-   **Vanilla JavaScript (ES6+):** Modern, modüler ve hafif uygulama yapısı.
-   **GSAP (GreenSock Animation Platform):** Sinematik giriş animasyonları, pürüzsüz kaydırma ve etkileşimli efektler için kullanılan sektör standardı animasyon kütüphanesi.
    -   *ScrollTrigger:* Kaydırmaya duyarlı animasyonlar.
    -   *ScrollToPlugin:* Pürüzsüz sayfa içi navigasyon.
-   **A-Frame:** HTML tabanlı 3D, VR ve AR deneyimleri için güçlü WebXR kütüphanesi.
-   **HTML5 & CSS3:** 
    -   *Glassmorphism:* Modern buzlu cam efektleri.
    -   *CSS Grid & Flexbox:* Esnek ve responsive yerleşimler.
    -   *Clamp Typography:* Cihaz boyutuna göre otomatik ölçeklenen tipografi.
-   **Google Fonts:** 'Manrope' yazı tipi ailesi (Premium tipografi).

## 🚀 Gelecek Entegrasyonu (Supabase)

Şu anki `dataService.js` içeriğini Supabase'e taşımak için şu adımları izleyebilirsiniz:

1.  `supabase-js` kütüphanesini projeye dahil edin.
2.  `getProjects()` fonksiyonunu şu şekilde güncelleyin:

```javascript
async getProjects() {
    const { data, error } = await supabase
        .from('projects')
        .select('*');
    if (error) throw error;
    return data;
}
```

## 📱 WebXR (VR/AR) Kullanımı

Detay sayfalarındaki **"AR MODE"** butonu ile projeleri mobil cihazınız üzerinden masanızın üstüne yansıtabilir veya **"VR MODE"** ile sanal gerçeklik gözlükleriyle yapının içinde gezinebilirsiniz.

## 📄 Lisans

Bu projenin tüm hakları **Ömer Bozkurt**'a aittir (**All Rights Reserved**). Kodun izinsiz kullanımı, kopyalanması veya dağıtılması yasaktır. Detaylar için [LICENSE](LICENSE) dosyasına göz atabilirsiniz.

---
*Tasarlayan: Ömer Bozkurt*