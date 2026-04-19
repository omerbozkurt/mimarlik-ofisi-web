import { languageService as ls } from '../languageService.js';

/**
 * İletişim Bileşeni
 */
export function Contact() {
    const section = document.createElement('section');
    section.id = 'contact';
    section.className = 'container fade-in'; // Container ve fade-in sınıflarını geri ekledik
    section.style.padding = '180px 0 100px 0';
    section.style.minHeight = '100vh';
    
    section.innerHTML = `
        <!-- Başlık Alanı -->
        <div style="max-width: 800px; margin: 0 auto; text-align: center; margin-bottom: 8rem; padding: 0 2rem;">
            <span style="display: block; text-transform: uppercase; letter-spacing: 5px; font-size: 0.8rem; color: #fff; opacity: 0.5; margin-bottom: 1.5rem;">
                ${ls.getLang() === 'tr' ? 'BİZE ULAŞIN' : 'GET IN TOUCH'}
            </span>
            <h1 style="font-size: clamp(2.5rem, 6vw, 4rem); font-weight: 800; letter-spacing: -2px; margin-bottom: 1.5rem; line-height: 1.1;">
                ${ls.t('contact_title')}
            </h1>
            <p style="color: var(--text-secondary); max-width: 600px; margin: 0 auto; font-size: 1.1rem; line-height: 1.6;">
                ${ls.t('contact_desc')}
            </p>
        </div>

        <!-- İletişim Grid Yapısı -->
        <div class="contact-grid-layout">
            <!-- Sol Sütun: Bilgiler ve Sosyal Medya -->
            <div class="info-column">
                <div class="info-cards-group">
                    <div class="modern-card glass">
                        <div class="icon-circle">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                        </div>
                        <div class="card-text">
                            <label>${ls.t('contact_email_label')}</label>
                            <a href="mailto:hello@archstudio.com">hello@archstudio.com</a>
                        </div>
                    </div>

                    <div class="modern-card glass">
                        <div class="icon-circle">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                        </div>
                        <div class="card-text">
                            <label>${ls.t('contact_phone_label')}</label>
                            <a href="tel:+902125550123">+90 (212) 555 0123</a>
                        </div>
                    </div>

                    <div class="modern-card glass">
                        <div class="icon-circle">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                        </div>
                        <div class="card-text">
                            <label>${ls.t('contact_address_label')}</label>
                            <span>Nişantaşı, İstanbul</span>
                        </div>
                    </div>
                </div>

                <!-- Sosyal Medya İkonları -->
                <div class="social-links-area">
                    <span class="social-tag">${ls.getLang() === 'tr' ? 'BİZİ TAKİP EDİN' : 'FOLLOW US'}</span>
                    <div class="icon-row">
                        <a href="#" class="social-icon-link" aria-label="Instagram">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                        </a>
                        <a href="#" class="social-icon-link" aria-label="LinkedIn">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                        </a>
                        <a href="#" class="social-icon-link" aria-label="Behance">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 12h2a3 3 0 1 0 0-6H9v6z"></path><path d="M9 18h3a3 3 0 1 0 0-6H9v6z"></path><path d="M17 12h5"></path></svg>
                        </a>
                    </div>
                </div>
            </div>

            <!-- Sağ Sütun: Form -->
            <div class="form-column glass">
                <form id="contact-form">
                    <div class="input-row">
                        <div class="input-group">
                            <label>${ls.t('contact_name')}</label>
                            <input type="text" required placeholder="...">
                        </div>
                        <div class="input-group">
                            <label>${ls.t('contact_email')}</label>
                            <input type="email" required placeholder="email@example.com">
                        </div>
                    </div>
                    <div class="input-group">
                        <label>${ls.t('contact_msg')}</label>
                        <textarea rows="6" required placeholder="${ls.getLang() === 'tr' ? 'Mesajınız...' : 'Your message...'}"></textarea>
                    </div>
                    <button type="submit" class="prime-btn">
                        ${ls.t('contact_send')}
                    </button>
                </form>
            </div>
        </div>

        <style>
            .contact-grid-layout {
                display: grid;
                grid-template-columns: 1fr 1.5fr;
                gap: 4rem;
                align-items: stretch;
                max-width: 1200px;
                margin: 0 auto;
            }

            @media (max-width: 992px) {
                .contact-grid-layout { grid-template-columns: 1fr; }
            }

            .info-column {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                min-height: 100%;
            }

            .info-cards-group { display: flex; flex-direction: column; gap: 1rem; }

            .modern-card {
                display: flex;
                align-items: center;
                gap: 1.5rem;
                padding: 1.8rem;
                border-radius: 20px;
            }

            .icon-circle {
                width: 44px;
                height: 44px;
                background: rgba(255,255,255,0.05);
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-shrink: 0;
            }

            .card-text label {
                display: block;
                font-size: 0.65rem;
                text-transform: uppercase;
                letter-spacing: 1.5px;
                opacity: 0.5;
                margin-bottom: 0.3rem;
            }

            .card-text a, .card-text span {
                font-weight: 700;
                color: #fff;
                text-decoration: none;
                font-size: 0.95rem;
            }

            .social-links-area {
                padding: 2.5rem 1.8rem 0 1.8rem;
                margin-top: 3rem;
                border-top: 1px solid rgba(255,255,255,0.05);
            }

            .social-tag {
                display: block;
                font-size: 0.65rem;
                text-transform: uppercase;
                letter-spacing: 3px;
                color: #fff;
                opacity: 0.3;
                margin-bottom: 1.5rem;
            }

            .icon-row { display: flex; gap: 2rem; }

            .social-icon-link {
                color: rgba(255,255,255,0.4);
                transition: 0.3s;
                text-decoration: none;
            }

            .social-icon-link:hover {
                color: #fff;
                transform: translateY(-3px);
            }

            .form-column { padding: 3.5rem; border-radius: 30px; }

            #contact-form { display: flex; flex-direction: column; gap: 2rem; }

            .input-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; }

            .input-group label {
                display: block;
                margin-bottom: 0.8rem;
                font-weight: 700;
                font-size: 0.85rem;
            }

            .input-group input, .input-group textarea {
                width: 100%;
                background: rgba(255,255,255,0.02);
                border: 1px solid rgba(255,255,255,0.1);
                padding: 1.2rem;
                color: #fff;
                border-radius: 15px;
                font-family: inherit;
            }

            .prime-btn {
                width: 100%;
                padding: 1.3rem;
                background: #fff;
                color: #000;
                border: none;
                border-radius: 50px;
                font-weight: 800;
                text-transform: uppercase;
                letter-spacing: 2px;
                cursor: pointer;
                transition: 0.3s;
            }
        </style>
    `;

    // Form İşleme
    setTimeout(() => {
        const form = section.querySelector('#contact-form');
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                alert(ls.getLang() === 'tr' ? 'Mesajınız iletildi!' : 'Message sent!');
            });
        }
    }, 0);
    
    return section;
}
