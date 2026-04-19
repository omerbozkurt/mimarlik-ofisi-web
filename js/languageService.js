import { translations } from './translations.js';

// Varsayılan dili localStorage'dan al veya Türkçe olarak ayarla
let currentLang = localStorage.getItem('lang') || 'tr';

/**
 * Dil yönetim servisi (i18n)
 */
export const languageService = {
    // Mevcut aktif dili döner
    getLang() {
        return currentLang;
    },
    // Dili günceller ve değişiklik olayını tetikler
    setLang(lang) {
        currentLang = lang;
        localStorage.setItem('lang', lang);
        // Sayfa genelinde dilin değiştiğini haber ver
        window.dispatchEvent(new CustomEvent('languageChanged', { detail: lang }));
    },
    // Belirtilen anahtar için çeviri metnini döner
    t(key) {
        return translations[currentLang][key] || key;
    }
};
