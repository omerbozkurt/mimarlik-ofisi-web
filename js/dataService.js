/**
 * Mimari Proje Veri Servisi (Mock)
 * Gelecekte Supabase veya başka bir veritabanına bağlanmak üzere tasarlanmıştır.
 */
export const dataService = {
    // Tüm projeleri getirir
    async getProjects() {
        return [
            {
                id: 1,
                title: { tr: "Aurora Rezidans", en: "Aurora Residence" },
                category: { tr: "Lüks Konut", en: "Luxury Residential" },
                location: { tr: "Bodrum, Türkiye", en: "Bodrum, Turkey" },
                year: "2024",
                image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200",
                description: { 
                    tr: "Aurora Rezidans, Ege'nin kristal sularına bakan, modern ve minimalist bir yaşam alanıdır. Proje, doğayla iç içe, sürdürülebilir malzemeler kullanılarak tasarlanmıştır.",
                    en: "Aurora Residence is a modern and minimalist living space overlooking the crystal waters of the Aegean. The project was designed with sustainable materials, integrated with nature."
                },
                modelUrl: "assets/model.glb",
                gallery: [
                    "https://images.unsplash.com/photo-1600607687940-4e2a09697d6b?q=80&w=1200",
                    "https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e?q=80&w=1200",
                    "https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=1200"
                ]
            },
            {
                id: 2,
                title: { tr: "Monolit İş Merkezi", en: "Monolith Business Center" },
                category: { tr: "Ticari Alan", en: "Commercial Space" },
                location: { tr: "İstanbul, Türkiye", en: "Istanbul, Turkey" },
                year: "2023",
                image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200",
                description: { 
                    tr: "Şehrin kalbinde yükselen Monolit, dikey mimarinin ve teknolojik ofis çözümlerinin en güncel örneğidir.",
                    en: "Rising in the heart of the city, Monolith is the latest example of vertical architecture and technological office solutions."
                },
                modelUrl: "assets/model.glb",
                gallery: [
                    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200",
                    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1200",
                    "https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=1200"
                ]
            },
            {
                id: 3,
                title: { tr: "Zenith Pavilyonu", en: "Zenith Pavilion" },
                category: { tr: "Kültürel Yapı", en: "Cultural Landmark" },
                location: { tr: "Antalya, Türkiye", en: "Antalya, Turkey" },
                year: "2025",
                image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=1200",
                description: { 
                    tr: "Zenith Pavilyonu, ışık ve gölgenin dramatik oyunlarını sergileyen bir sanat galerisi ve etkinlik alanıdır.",
                    en: "Zenith Pavilion is an art gallery and event space showcasing the dramatic play of light and shadow."
                },
                modelUrl: "assets/model.glb",
                gallery: [
                    "https://images.unsplash.com/photo-1449156001437-3a1661dc92f1?q=80&w=1200",
                    "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=1200",
                    "https://images.unsplash.com/photo-1511816023274-01d5df4a7a12?q=80&w=1200"
                ]
            }
        ];
    },

    // ID'ye göre tek bir projeyi getirir
    async getProjectById(id) {
        const projects = await this.getProjects();
        return projects.find(p => p.id === parseInt(id));
    }
};
