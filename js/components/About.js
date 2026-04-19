import { languageService as ls } from '../languageService.js';

/**
 * Hakkımızda (Stüdyo) Bileşeni
 */
export function About() {
    const section = document.createElement('section');
    section.className = 'container fade-in';
    section.id = 'about';
    section.style.padding = '200px 2rem 100px 2rem';
    section.style.minHeight = '90vh';
    
    section.innerHTML = `
        <div style="display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 6rem; align-items: center;">
            <div>
                <span class="meta-label" style="font-weight: 800; color: #fff;">EST. 2010</span>
                <h1 style="font-size: clamp(2.5rem, 5vw, 3.5rem); margin-bottom: 2rem; line-height: 1.1; font-weight: 800; letter-spacing: -1px;">
                    ${ls.t('studio_title')}
                </h1>
                <p style="font-size: 1.3rem; color: var(--text-secondary); margin-bottom: 3rem; line-height: 1.8; max-width: 650px;">
                    ${ls.t('studio_desc')}
                </p>
                <div style="display: flex; gap: 4rem; margin-top: 4rem;">
                    <div>
                        <h2 style="font-size: 3.5rem; font-weight: 800; color: #fff;">120+</h2>
                        <span class="meta-label" style="letter-spacing: 2px;">${ls.t('stats_projects')}</span>
                    </div>
                    <div>
                        <h2 style="font-size: 3.5rem; font-weight: 800; color: #fff;">15</h2>
                        <span class="meta-label" style="letter-spacing: 2px;">${ls.t('stats_awards')}</span>
                    </div>
                    <div>
                        <h2 style="font-size: 3.5rem; font-weight: 800; color: #fff;">4</h2>
                        <span class="meta-label" style="letter-spacing: 2px;">${ls.t('stats_offices')}</span>
                    </div>
                </div>
            </div>
            
            <div class="glass" style="height: 650px; border-radius: 40px; overflow: hidden; position: relative; border-color: rgba(255,255,255,0.15);">
                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
                     style="width: 100%; height: 100%; object-fit: cover; opacity: 0.8;">
                <div style="position: absolute; inset: 0; background: linear-gradient(to top, var(--bg-dark), transparent);"></div>
            </div>
        </div>
    `;
    
    return section;
}
