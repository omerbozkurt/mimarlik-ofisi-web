import { languageService as ls } from '../languageService.js';

/**
 * Proje Listesi (Izgara) Bileşeni
 * Çok dilli destek ile projeleri listeler.
 */
export function ProjectGrid(projects) {
    const section = document.createElement('section');
    section.className = 'projects-section container';
    section.id = 'projects';
    section.style.minHeight = '400px'; // Sayfa yapısının bozulmaması için minimum yükseklik
    
    // Veri gelmezse hata göstermek yerine boş durum yönetimi
    if (!projects || projects.length === 0) {
        section.innerHTML = `<h2>Proje bulunamadı.</h2>`;
        return section;
    }

    const lang = ls.getLang();
    
    section.innerHTML = `
        <h2 class="section-title fade-in" style="opacity: 1 !important; visibility: visible !important;">
            ${ls.t('section_projects')}
        </h2>
        <div class="project-grid">
            ${projects.map(project => `
                <div class="project-card fade-in" data-id="${project.id}" style="opacity: 1 !important; visibility: visible !important;">
                    <img src="${project.image}" 
                     alt="${project.title[lang]}" 
                     loading="lazy"
                     onerror="this.src='https://via.placeholder.com/800x1200/111/fff?text=ArchStudio+Design'">
                    <div class="project-info">
                        <p>${project.category[lang]}</p>
                        <h3>${project.title[lang]}</h3>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
    
    return section;
}
