import { languageService as ls } from '../languageService.js';

/**
 * Footer (Alt Bilgi) Bileşeni
 */
export function Footer() {
    const footer = document.createElement('footer');
    footer.className = 'glass';
    footer.style.marginTop = '150px';
    footer.style.padding = '80px 0 40px 0';
    footer.style.borderTop = '1px solid rgba(255,255,255,0.05)';
    
    footer.innerHTML = `
        <div class="container">
            <div style="display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 4rem; margin-bottom: 60px;">
                <div>
                    <!-- Footer Logo ve Açıklama -->
                    <div class="logo" style="margin-bottom: 1.5rem;">ArchStudio.</div>
                    <p style="color: var(--text-secondary); max-width: 300px; line-height: 1.8;">
                        ${ls.t('footer_desc')}
                    </p>
                </div>
                
                <div>
                    <!-- Site İçi Hızlı Linkler -->
                    <h4 style="margin-bottom: 1.5rem; color: #fff; text-transform: uppercase; font-size: 0.8rem; letter-spacing: 2px;">
                        ${ls.t('footer_explore')}
                    </h4>
                    <ul style="list-style: none; display: flex; flex-direction: column; gap: 1rem;">
                        <li><a href="#home" class="nav-link" style="font-size: 0.85rem; opacity: 0.7;">${ls.t('nav_home')}</a></li>
                        <li><a href="#about" class="nav-link" style="font-size: 0.85rem; opacity: 0.7;">${ls.t('nav_about')}</a></li>
                        <li><a href="#projects" class="nav-link" style="font-size: 0.85rem; opacity: 0.7;">${ls.t('nav_projects')}</a></li>
                        <li><a href="#contact" class="nav-link" style="font-size: 0.85rem; opacity: 0.7;">${ls.t('nav_contact')}</a></li>
                    </ul>
                </div>
                
                <div>
                    <!-- Sosyal Medya Kanalları -->
                    <h4 style="margin-bottom: 1.5rem; color: #fff; text-transform: uppercase; font-size: 0.8rem; letter-spacing: 2px;">
                        ${ls.t('footer_social')}
                    </h4>
                    <ul style="list-style: none; display: flex; flex-direction: column; gap: 1rem;">
                        <li><a href="#" class="nav-link" style="font-size: 0.85rem; opacity: 0.7;">INSTAGRAM</a></li>
                        <li><a href="#" class="nav-link" style="font-size: 0.85rem; opacity: 0.7;">BEHANCE</a></li>
                        <li><a href="#" class="nav-link" style="font-size: 0.85rem; opacity: 0.7;">LINKEDIN</a></li>
                    </ul>
                </div>
            </div>
            
            <!-- Footer Alt Bar (Copyright ve Yasal Linkler) -->
            <div style="padding-top: 40px; border-top: 1px solid rgba(255,255,255,0.05); display: flex; justify-content: space-between; align-items: center;">
                <p style="color: var(--text-secondary); font-size: 0.8rem;">
                    ${ls.t('footer_copyright')}
                </p>
                <div style="display: flex; gap: 2rem;">
                    <a href="#" style="color: var(--text-secondary); text-decoration: none; font-size: 0.8rem;">${ls.t('footer_privacy')}</a>
                    <a href="#" style="color: var(--text-secondary); text-decoration: none; font-size: 0.8rem;">${ls.t('footer_terms')}</a>
                </div>
            </div>
        </div>
    `;
    
    return footer;
}
