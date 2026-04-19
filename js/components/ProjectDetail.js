import { languageService as ls } from '../languageService.js';

/**
 * Proje Detay Bileşeni
 * 3D model görselleştirme ve resim galerisi içerir.
 */
export function ProjectDetail(project) {
    const section = document.createElement('section');
    section.className = 'detail-view container fade-in';
    
    const lang = ls.getLang();
    
    // Galeri HTML'ini oluştur
    const galleryHtml = project.gallery ? `
        <div class="project-gallery" style="margin-top: 100px;">
            <h2 style="margin-bottom: 3rem; font-weight: 700; letter-spacing: -1px;">${ls.getLang() === 'tr' ? 'Galeri' : 'Gallery'}</h2>
            <div class="gallery-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(400px, 1fr)); gap: 2rem;">
                ${project.gallery.map((img, index) => `
                    <div class="gallery-item glass" style="border-radius: 30px; overflow: hidden; height: 500px; cursor: pointer; background: #1a1a1a;">
                        <img src="${img}" 
                             alt="${project.title[lang]} - ${index + 1}" 
                             style="width: 100%; height: 100%; object-fit: cover; transition: 0.5s;" 
                             onmouseover="this.style.transform='scale(1.05)'" 
                             onmouseout="this.style.transform='scale(1)'"
                             onerror="this.src='https://via.placeholder.com/1200x800/111/fff?text=ArchStudio+Design'">
                    </div>
                `).join('')}
            </div>
        </div>
    ` : '';

    section.innerHTML = `
        <!-- 3D Deneyim Alanı -->
        <div class="model-container glass" style="background: #111; position: relative; height: 75vh; border-radius: 40px; overflow: hidden; margin-top: 2rem;">
            <div id="model-loader" style="position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; z-index: 5; color: var(--text-secondary); background: rgba(10,10,10,0.8);">
                <div class="spinner" style="width: 40px; height: 40px; border: 2px solid rgba(255,255,255,0.1); border-top-color: #fff; border-radius: 50%; animation: spin 1s linear infinite; margin-bottom: 1rem;"></div>
                <p style="font-size: 0.8rem; letter-spacing: 2px; text-transform: uppercase;">${ls.t('loading')}</p>
            </div>

            <a-scene embedded 
                     style="height: 100%; width: 100%; opacity: 0;" 
                     vr-mode-ui="enabled: true"
                     ar-mode-ui="enabled: true"
                     renderer="antialias: true; colorManagement: true;"
                     webxr="optionalFeatures: hit-test, local-floor; referenceSpaceType: local-floor">
                
                <a-assets>
                    <a-asset-item id="building-model" src="${project.modelUrl}"></a-asset-item>
                </a-assets>
                
                <a-entity id="rig" position="0 5 15" rotation="-15 0 0">
                    <a-entity camera look-controls wasd-controls></a-entity>
                </a-entity>
                
                <a-sky color="#111" hide-on-enter-ar></a-sky>
                <a-light type="ambient" color="#fff" intensity="0.6"></a-light>
                <a-light type="directional" position="-2 10 5" intensity="1.2" castShadow="true"></a-light>

                <a-entity 
                    id="model-entity"
                    gltf-model="#building-model" 
                    position="0 -1 0" 
                    scale="0.005 0.005 0.005"
                    shadow="receive: true; cast: true"
                    animation="property: rotation; to: 0 360 0; loop: true; dur: 30000; easing: linear">
                </a-entity>
                
                <a-plane position="0 -1.01 0" rotation="-90 0 0" width="100" height="100" color="#1a1a1a" shadow="receive: true" hide-on-enter-ar>
                    <a-grid width="100" height="100" opacity="0.1"></a-grid>
                </a-plane>
            </a-scene>
            
            <div style="position: absolute; bottom: 30px; left: 30px; z-index: 10; display: flex; gap: 15px;">
                <button class="btn glass" style="font-size: 0.7rem; padding: 1rem 2rem; border-color: rgba(255,255,255,0.3);" onclick="document.querySelector('a-scene').enterVR()">VR MODE</button>
                <button class="btn glass" style="font-size: 0.7rem; padding: 1rem 2rem; border-color: rgba(255,255,255,0.3);" onclick="document.querySelector('a-scene').enterAR()">AR MODE (MOBILE)</button>
            </div>
            
            <div style="position: absolute; top: 30px; right: 30px; z-index: 10; color: rgba(255,255,255,0.4); font-size: 0.7rem; letter-spacing: 1px;">
                WASD / MOUSE İLE GEZİNİN
            </div>
        </div>

        <!-- Proje Bilgileri -->
        <div class="project-details" style="margin-top: 5rem;">
            <div class="content-left">
                <h1 style="font-size: clamp(2.5rem, 6vw, 4.5rem); margin-bottom: 2rem; font-weight: 800; letter-spacing: -2px;">${project.title[lang]}</h1>
                <p style="font-size: 1.3rem; color: var(--text-secondary); max-width: 700px; line-height: 1.8; font-weight: 400;">
                    ${project.description[lang]}
                </p>
                
                <div style="margin-top: 5rem;">
                    <h4 style="margin-bottom: 1.5rem; color: #fff; text-transform: uppercase; letter-spacing: 3px; font-size: 0.8rem; font-weight: 700; opacity: 0.6;">${ls.t('detail_concept')}</h4>
                    <p style="color: var(--text-secondary); line-height: 1.9; font-size: 1.15rem; max-width: 650px;">
                        ${ls.t('detail_desc_extra')}
                    </p>
                </div>
            </div>
            
            <div class="content-right glass" style="padding: 3.5rem; border-radius: 40px; border-color: rgba(255,255,255,0.1); height: fit-content; position: sticky; top: 120px;">
                <div class="meta-item">
                    <span class="meta-label" style="opacity: 0.5;">${ls.t('meta_category')}</span>
                    <span class="meta-value" style="font-weight: 700; font-size: 1.2rem; color: #fff;">${project.category[lang]}</span>
                </div>
                <div class="meta-item">
                    <span class="meta-label" style="opacity: 0.5;">${ls.t('meta_location')}</span>
                    <span class="meta-value" style="font-weight: 700; font-size: 1.2rem; color: #fff;">${project.location[lang]}</span>
                </div>
                <div class="meta-item">
                    <span class="meta-label" style="opacity: 0.5;">${ls.t('meta_year')}</span>
                    <span class="meta-value" style="font-weight: 700; font-size: 1.2rem; color: #fff;">${project.year}</span>
                </div>
                <div class="meta-item">
                    <span class="meta-label" style="opacity: 0.5;">${ls.t('meta_client')}</span>
                    <span class="meta-value" style="font-weight: 700; font-size: 1.2rem; color: #fff;">${ls.t('meta_client_val')}</span>
                </div>
                
                <button class="btn" style="width: 100%; margin-top: 2.5rem; padding: 1.4rem; font-weight: 800; text-transform: uppercase; letter-spacing: 2px; background: #fff; color: #000;">${ls.t('btn_inquire')}</button>
            </div>
        </div>

        <!-- Galeri Bölümü -->
        ${galleryHtml}
        
        <div style="margin-top: 100px; padding-bottom: 100px;">
            <a href="#" id="back-to-home" style="color: white; text-decoration: none; display: flex; align-items: center; gap: 0.8rem; font-weight: 700; opacity: 0.4; transition: 0.4s; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 2px;">
                <span style="font-size: 1.2rem; transform: translateY(-1px);">←</span> ${ls.t('btn_back')}
            </a>
        </div>

        <style>
            @keyframes spin { to { transform: rotate(360deg); } }
            #back-to-home:hover { opacity: 1; transform: translateX(-8px); }
            .meta-item { border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 2rem; margin-bottom: 2rem; display: flex; flex-direction: column; gap: 0.5rem; }
            .meta-item:last-of-type { border: none; margin-bottom: 0; }
            
            @media (max-width: 992px) {
                .gallery-grid { grid-template-columns: 1fr !important; }
                .gallery-item { height: 350px !important; }
            }
        </style>
    `;

    // A-Frame ve Navigasyon Mantığı
    setTimeout(() => {
        const scene = section.querySelector('a-scene');
        const loader = section.querySelector('#model-loader');
        
        scene.addEventListener('model-loaded', () => {
            gsap.to(loader, { opacity: 0, duration: 0.8, onComplete: () => loader.style.display = 'none' });
            gsap.to(scene, { opacity: 1, duration: 1.5 });
        });

        setTimeout(() => {
            if (loader && loader.style.display !== 'none') {
                loader.innerHTML = '<p style="color: #ff4444; font-size: 0.8rem;">Model Yükleme Hatası</p>';
            }
        }, 10000);

        section.querySelector('#back-to-home').addEventListener('click', (e) => {
            e.preventDefault();
            window.history.back();
        });
    }, 0);
    
    return section;
}
