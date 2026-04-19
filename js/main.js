import { dataService } from './dataService.js';
import { languageService } from './languageService.js';
import { Hero } from './components/Hero.js';
import { ProjectGrid } from './components/ProjectGrid.js';
import { ProjectDetail } from './components/ProjectDetail.js';
import { About } from './components/About.js';
import { Contact } from './components/Contact.js';
import { Footer } from './components/Footer.js';

const app = document.getElementById('app');
const header = document.getElementById('main-header');

/**
 * Uygulama Durum Yönetimi ve Router (Basit seviye)
 */
const state = {
    view: 'home',
    projectId: null
};

// GSAP Eklentilerini Kaydet
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// Açılış Ekranı (Preloader) Animasyonu ve Güvenlik Zamanlayıcısı
function hidePreloader() {
    const preloader = document.getElementById('preloader');
    if (!preloader || preloader.style.display === 'none') return;
    
    const tl = gsap.timeline();
    tl.to('.loader-logo', { opacity: 1, y: -20, duration: 0.8, ease: "power4.out" })
      .to('#preloader', { 
          yPercent: -100, 
          duration: 1, 
          ease: "expo.inOut",
          onComplete: () => {
              preloader.style.display = 'none';
          }
      }, "+=0.2");
}

window.addEventListener('load', hidePreloader);
setTimeout(hidePreloader, 3000); // Sayfa yüklenmezse 3 saniye sonra zorla kapat

// Arka Plandaki Hareketli Balonlar (Parallax)
gsap.to('.blob-1', {
    x: '20vw',
    y: '20vh',
    duration: 20,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});

gsap.to('.blob-2', {
    x: '-10vw',
    y: '-30vh',
    duration: 25,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});

/**
 * Sayfayı Render Eden Ana Fonksiyon
 */
async function render() {
    // Sayfa Geçiş Efekti (Çıkış)
    await gsap.to(app, { opacity: 0, y: 10, duration: 0.3 });
    
    app.innerHTML = ''; // İçeriği temizle
    window.scrollTo(0, 0); // Sayfa geçişlerinde en başa dön
    
    if (state.view === 'home') {
        const projects = await dataService.getProjects();
        app.appendChild(Hero());
        app.appendChild(About());
        app.appendChild(ProjectGrid(projects));
        app.appendChild(Contact());
        app.appendChild(Footer());
        
        // Bölüm Giriş Animasyonları (Gelişmiş ScrollTrigger)
        gsap.utils.toArray('section').forEach((section, index) => {
            const elements = section.querySelectorAll('.fade-in, h1, h2, .project-card, .glass');
            
            if (index === 0) {
                // Hero bölümü için hemen başla
                gsap.from(elements, {
                    opacity: 0,
                    y: 60,
                    stagger: 0.15,
                    duration: 1.5,
                    ease: "expo.out",
                    delay: 0.5 // Preloader'ın bitmesini bekle
                });
            } else if (index === 2) {
                // Projeler Bölümü: Görünürlük sorunlarını önlemek için opacity animasyonu hafifletildi
                gsap.from(elements, {
                    y: 60,
                    stagger: 0.15,
                    duration: 1.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 95%",
                        toggleActions: "play none none none"
                    }
                });
            } else {
                // Diğer bölümler için kaydırmaya duyarlı giriş
                gsap.from(elements, {
                    opacity: 0,
                    y: 60,
                    stagger: 0.15,
                    duration: 1.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 85%",
                        toggleActions: "play none none none"
                    }
                });
            }
        });

        // Proje Kartları İçin 3D Eğilme Efekti (Tilt)
        document.querySelectorAll('.project-card').forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = (y - centerY) / 10;
                const rotateY = (centerX - x) / 10;

                gsap.to(card, {
                    rotateX: rotateX,
                    rotateY: rotateY,
                    scale: 1.05,
                    duration: 0.5,
                    ease: "power2.out"
                });
            });

            card.addEventListener('mouseleave', () => {
                gsap.to(card, {
                    rotateX: 0,
                    rotateY: 0,
                    scale: 1,
                    duration: 0.5,
                    ease: "power2.out"
                });
            });

            card.addEventListener('click', () => navigateTo('detail', card.dataset.id));
        });

    } else if (state.view === 'detail') {
        const project = await dataService.getProjectById(state.projectId);
        if (project) {
            app.appendChild(ProjectDetail(project));
            app.appendChild(Footer());
            // Detay sayfası giriş animasyonu
            gsap.from('.detail-view > *', { opacity: 0, y: 30, stagger: 0.2, duration: 1 });
        } else navigateTo('home');
    }
    
    // Sayfa Giriş Efekti
    gsap.to(app, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" });
    
    // URL'deki Anchor (#) Etiketini Yönet
    if (window.location.hash && state.view === 'home') {
        const target = document.querySelector(window.location.hash);
        if (target) {
            gsap.to(window, { scrollTo: { y: target, offsetY: 80 }, duration: 1.5, ease: "expo.inOut" });
        }
    }

    // Yeni içerik geldiği için ScrollTrigger hesaplamalarını yenile
    ScrollTrigger.refresh();
}

// Global Navigasyon Dinleyicileri (Smooth Scroll)
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('href');
        
        if (targetId.startsWith('#')) {
            if (state.view !== 'home') {
                e.preventDefault();
                state.view = 'home';
                render().then(() => {
                    const target = document.querySelector(targetId);
                    if (target) gsap.to(window, { scrollTo: { y: target, offsetY: 80 }, duration: 1 });
                });
            } else {
                e.preventDefault();
                const target = document.querySelector(targetId);
                if (target) gsap.to(window, { scrollTo: { y: target, offsetY: 80 }, duration: 1 });
            }
        }
    });
});

/**
 * Görünüm Değiştirme ve URL Yönetimi
 */
function navigateTo(view, id = null) {
    state.view = view;
    state.projectId = id;
    
    // Sayfayı yenilemeden URL'yi güncelle
    const url = view === 'home' ? '/' : `?project=${id}`;
    window.history.pushState({view, id}, '', url);
    
    render();
}

// Tarayıcı geri/ileri butonlarını yönet
window.addEventListener('popstate', (e) => {
    if (e.state) {
        state.view = e.state.view;
        state.projectId = e.state.id;
        render();
    }
});

// Logo Tıklanınca Ana Sayfaya Dön
document.getElementById('nav-logo').addEventListener('click', () => navigateTo('home'));

// Header Kaydırma Efekti (Bulanıklık ekleme)
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

/**
 * Statik Çevirileri Güncelle (data-i18n olan yerler)
 */
function updateStaticTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.innerHTML = languageService.t(key);
    });
    
    // Dil değiştirici butonların aktiflik durumunu güncelle
    const lang = languageService.getLang();
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.id === `lang-${lang}`);
    });
}

// Dil Değiştirme Butonları
document.getElementById('lang-tr').addEventListener('click', () => languageService.setLang('tr'));
document.getElementById('lang-en').addEventListener('click', () => languageService.setLang('en'));

window.addEventListener('languageChanged', () => {
    updateStaticTranslations();
    render();
});

// Uygulamayı Başlat
updateStaticTranslations();
render();
