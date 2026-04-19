import { languageService as ls } from '../languageService.js';

/**
 * Hero (Karşılama) Bileşeni
 */
export function Hero() {
    const section = document.createElement('section');
    section.className = 'hero';
    section.id = 'home';
    
    section.innerHTML = `
        <div class="hero-content">
            <span class="fade-in" style="text-transform: uppercase; letter-spacing: 6px; font-size: 0.9rem; color: #fff; display: block; margin-bottom: 2rem; font-weight: 700;">
                ${ls.t('hero_subtitle')}
            </span>
            <h1 class="fade-in" style="color: #fff; text-shadow: 0 0 30px rgba(255,255,255,0.1);">
                ${ls.t('hero_title')}
            </h1>
            <p class="fade-in" style="color: rgba(255,255,255,0.6); line-height: 1.6;">
                ${ls.t('hero_desc')}
            </p>
            <div class="fade-in" style="margin-top: 3.5rem;">
                <a href="#projects" class="btn" style="padding: 1.2rem 3.5rem; font-weight: 700; text-transform: uppercase; letter-spacing: 2px;">
                    ${ls.t('hero_btn')}
                </a>
            </div>
        </div>
        
        <!-- Merkezdeki Işık Parıltısı -->
        <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 80vw; height: 80vh; background: radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%); z-index: 1; pointer-events: none;"></div>
    `;

    // Animasyonlar global olarak main.js tarafından yönetilmektedir
    return section;
}
