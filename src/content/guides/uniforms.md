---
title: Uniform Recognition Guide
description: Learn to identify all faction uniforms - know your enemy before they know you
category: basics
order: 3
---

<style>
.lightbox-overlay {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  z-index: 9999;
  cursor: zoom-out;
  justify-content: center;
  align-items: center;
}
.lightbox-overlay.active {
  display: flex;
}
.lightbox-overlay img {
  max-width: 90%;
  max-height: 90%;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 0 40px rgba(0,0,0,0.5);
}
.lightbox-close {
  position: absolute;
  top: 20px;
  right: 30px;
  color: #fff;
  font-size: 2rem;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.2s;
}
.lightbox-close:hover {
  opacity: 1;
}
.zoomable {
  cursor: zoom-in;
  transition: transform 0.2s, box-shadow 0.2s;
}
.zoomable:hover {
  transform: scale(1.02);
  box-shadow: 0 4px 20px rgba(0,0,0,0.3);
}
</style>

<div class="lightbox-overlay" onclick="closeLightbox()">
  <span class="lightbox-close">&times;</span>
  <img id="lightbox-img" src="" alt="Enlarged view" />
</div>

<script>
function openLightbox(src) {
  document.getElementById('lightbox-img').src = src;
  document.querySelector('.lightbox-overlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  document.querySelector('.lightbox-overlay').classList.remove('active');
  document.body.style.overflow = '';
}
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeLightbox();
});
</script>

# Uniform Recognition Guide

<div style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(245, 158, 11, 0.05)); border: 1px solid rgba(245, 158, 11, 0.3); border-radius: 12px; padding: 1.25rem; margin: 1.5rem 0;">
<div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
<span style="font-size: 1rem;">©</span>
<span style="color: #e5e7eb;">Thanks to <span style="color: #fbbf24; font-weight: 600;">Clark</span> for creating this guide</span>
</div>
<a href="https://steamcommunity.com/sharedfiles/filedetails/?id=3187707602" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 0.5rem; color: #60a5fa; font-size: 0.875rem; text-decoration: none;">
<span>View Original Guide on Steam</span>
<span>→</span>
</a>
</div>

Recognizing enemy uniforms is critical for target identification. A split-second hesitation can cost you your life - or worse, you might teamkill a friendly. Study these uniforms to react faster in combat.

---

## 🔵 BLUFOR Factions

NATO and allied forces. Generally use woodland or desert camouflage patterns with modern equipment.

---

### Armed Forces of Ukraine (AFU)

<img src="/img/units/unitwithflag/AFU_TeamImage.webp" alt="AFU Flag" style="height: 80px; object-fit: contain; border-radius: 8px; margin-bottom: 1rem;" />

<img src="/img/guides/Clark/AFU_uniform.png" alt="AFU Uniform" class="zoomable" onclick="openLightbox(this.src)" style="max-width: calc(50% - 0.5rem); height: auto; object-fit: contain; border-radius: 8px;" />

---

### Australian Defence Force (ADF)

<img src="/img/units/unitwithflag/AUS_Rifleman_Flag.webp" alt="ADF Flag" style="height: 80px; object-fit: contain; border-radius: 8px; margin-bottom: 1rem;" />

<img src="/img/guides/Clark/ADF_uniform.png" alt="ADF Uniform" class="zoomable" onclick="openLightbox(this.src)" style="max-width: calc(50% - 0.5rem); height: auto; object-fit: contain; border-radius: 8px;" />

---

### British Armed Forces (BAF)

<img src="/img/units/unitwithflag/GB_Rifleman_Flag.webp" alt="BAF Flag" style="height: 80px; object-fit: contain; border-radius: 8px; margin-bottom: 1rem;" />

<img src="/img/guides/Clark/BAF_uniform.png" alt="BAF Uniform" class="zoomable" onclick="openLightbox(this.src)" style="max-width: calc(50% - 0.5rem); height: auto; object-fit: contain; border-radius: 8px;" />

---

### Canadian Armed Forces (CAF)

<img src="/img/units/unitwithflag/CAF_Rifleman_Flag.webp" alt="CAF Flag" style="height: 80px; object-fit: contain; border-radius: 8px; margin-bottom: 1rem;" />

<div style="display: flex; gap: 1rem; margin: 1rem 0; flex-wrap: wrap;">
<div style="text-align: center; flex: 1 1 calc(50% - 0.5rem);">
<img src="/img/guides/Clark/CAF_forest_uniform.png" alt="CAF Forest Uniform" class="zoomable" onclick="openLightbox(this.src)" style="max-width: 100%; height: auto; object-fit: contain; border-radius: 8px;" />
<p style="margin-top: 0.5rem; color: #94a3b8; font-size: 0.875rem;">Forest</p>
</div>
<div style="text-align: center; flex: 1 1 calc(50% - 0.5rem);">
<img src="/img/guides/Clark/CAF_desert_uniform.png" alt="CAF Desert Uniform" class="zoomable" onclick="openLightbox(this.src)" style="max-width: 100%; height: auto; object-fit: contain; border-radius: 8px;" />
<p style="margin-top: 0.5rem; color: #94a3b8; font-size: 0.875rem;">Desert</p>
</div>
</div>

---

### United States Army (US)

<img src="/img/units/unitwithflag/US_Rifleman_Flag.webp" alt="US Flag" style="height: 80px; object-fit: contain; border-radius: 8px; margin-bottom: 1rem;" />

<img src="/img/guides/Clark/US_uniform.png" alt="US Army Uniform" class="zoomable" onclick="openLightbox(this.src)" style="max-width: calc(50% - 0.5rem); height: auto; object-fit: contain; border-radius: 8px;" />

---

### United States Marine Corps (USMC)

<img src="/img/units/unitwithflag/USMC_Rifleman_Flag.webp" alt="USMC Flag" style="height: 80px; object-fit: contain; border-radius: 8px; margin-bottom: 1rem;" />

<div style="display: flex; gap: 1rem; margin: 1rem 0; flex-wrap: wrap;">
<div style="text-align: center; flex: 1 1 calc(50% - 0.5rem);">
<img src="/img/guides/Clark/USMC_forest_uniform.png" alt="USMC Forest Uniform" class="zoomable" onclick="openLightbox(this.src)" style="max-width: 100%; height: auto; object-fit: contain; border-radius: 8px;" />
<p style="margin-top: 0.5rem; color: #94a3b8; font-size: 0.875rem;">Forest</p>
</div>
<div style="text-align: center; flex: 1 1 calc(50% - 0.5rem);">
<img src="/img/guides/Clark/USMC_desert_uniform.png" alt="USMC Desert Uniform" class="zoomable" onclick="openLightbox(this.src)" style="max-width: 100%; height: auto; object-fit: contain; border-radius: 8px;" />
<p style="margin-top: 0.5rem; color: #94a3b8; font-size: 0.875rem;">Desert</p>
</div>
</div>

---

## 🟡 PAC Factions

Pan-Asian Coalition forces. Chinese military branches with distinct digital camouflage patterns.

---

### People's Liberation Army (PLA)

<img src="/img/units/unitwithflag/PLAImage.webp" alt="PLA Flag" style="height: 80px; object-fit: contain; border-radius: 8px; margin-bottom: 1rem;" />

<div style="display: flex; gap: 1rem; margin: 1rem 0; flex-wrap: wrap;">
<div style="text-align: center; flex: 1 1 calc(50% - 0.5rem);">
<img src="/img/guides/Clark/PLA_forest_uniform.png" alt="PLA Forest Uniform" class="zoomable" onclick="openLightbox(this.src)" style="max-width: 100%; height: auto; object-fit: contain; border-radius: 8px;" />
<p style="margin-top: 0.5rem; color: #94a3b8; font-size: 0.875rem;">Forest</p>
</div>
<div style="text-align: center; flex: 1 1 calc(50% - 0.5rem);">
<img src="/img/guides/Clark/PLA_desert_uniform.png" alt="PLA Desert Uniform" class="zoomable" onclick="openLightbox(this.src)" style="max-width: 100%; height: auto; object-fit: contain; border-radius: 8px;" />
<p style="margin-top: 0.5rem; color: #94a3b8; font-size: 0.875rem;">Desert</p>
</div>
</div>

---

### PLA Amphibious Ground Forces (PLAAGF)

<img src="/img/units/unitwithflag/PLAAGF_Rifleman_Flag.webp" alt="PLAAGF Flag" style="height: 80px; object-fit: contain; border-radius: 8px; margin-bottom: 1rem;" />

<div style="display: flex; gap: 1rem; margin: 1rem 0; flex-wrap: wrap;">
<div style="text-align: center; flex: 1 1 calc(50% - 0.5rem);">
<img src="/img/guides/Clark/PLAAGF_forest_uniform.png" alt="PLAAGF Forest Uniform" class="zoomable" onclick="openLightbox(this.src)" style="max-width: 100%; height: auto; object-fit: contain; border-radius: 8px;" />
<p style="margin-top: 0.5rem; color: #94a3b8; font-size: 0.875rem;">Forest</p>
</div>
<div style="text-align: center; flex: 1 1 calc(50% - 0.5rem);">
<img src="/img/guides/Clark/PLAAGF_desert_uniform.png" alt="PLAAGF Desert Uniform" class="zoomable" onclick="openLightbox(this.src)" style="max-width: 100%; height: auto; object-fit: contain; border-radius: 8px;" />
<p style="margin-top: 0.5rem; color: #94a3b8; font-size: 0.875rem;">Desert</p>
</div>
</div>

---

### PLA Navy Marine Corps (PLANMC)

<img src="/img/units/unitwithflag/PLANMC_Rifleman_Flag.webp" alt="PLANMC Flag" style="height: 80px; object-fit: contain; border-radius: 8px; margin-bottom: 1rem;" />

<div style="display: flex; gap: 1rem; margin: 1rem 0; flex-wrap: wrap;">
<div style="text-align: center; flex: 1 1 calc(50% - 0.5rem);">
<img src="/img/guides/Clark/PLANMC_forest_uniform.png" alt="PLANMC Forest Uniform" class="zoomable" onclick="openLightbox(this.src)" style="max-width: 100%; height: auto; object-fit: contain; border-radius: 8px;" />
<p style="margin-top: 0.5rem; color: #94a3b8; font-size: 0.875rem;">Forest</p>
</div>
<div style="text-align: center; flex: 1 1 calc(50% - 0.5rem);">
<img src="/img/guides/Clark/PLANMC_desert_uniform.png" alt="PLANMC Desert Uniform" class="zoomable" onclick="openLightbox(this.src)" style="max-width: 100%; height: auto; object-fit: contain; border-radius: 8px;" />
<p style="margin-top: 0.5rem; color: #94a3b8; font-size: 0.875rem;">Desert</p>
</div>
</div>

---

## 🔴 REDFOR Factions

Russian military forces. Recognizable by their distinctive Flora and desert camouflage patterns.

---

### Russian Airborne Forces (VDV)

<img src="/img/units/unitwithflag/VDV_Rifleman_Flag.webp" alt="VDV Flag" style="height: 80px; object-fit: contain; border-radius: 8px; margin-bottom: 1rem;" />

<div style="display: flex; gap: 1rem; margin: 1rem 0; flex-wrap: wrap;">
<div style="text-align: center; flex: 1 1 calc(50% - 0.5rem);">
<img src="/img/guides/Clark/VDV_forest_uniform.png" alt="VDV Forest Uniform" class="zoomable" onclick="openLightbox(this.src)" style="max-width: 100%; height: auto; object-fit: contain; border-radius: 8px;" />
<p style="margin-top: 0.5rem; color: #94a3b8; font-size: 0.875rem;">Forest</p>
</div>
<div style="text-align: center; flex: 1 1 calc(50% - 0.5rem);">
<img src="/img/guides/Clark/VDV_desert_uniform.png" alt="VDV Desert Uniform" class="zoomable" onclick="openLightbox(this.src)" style="max-width: 100%; height: auto; object-fit: contain; border-radius: 8px;" />
<p style="margin-top: 0.5rem; color: #94a3b8; font-size: 0.875rem;">Desert</p>
</div>
</div>

---

### Russian Ground Forces (RGF)

<img src="/img/units/unitwithflag/RUS_Rifleman_Flag.webp" alt="RGF Flag" style="height: 80px; object-fit: contain; border-radius: 8px; margin-bottom: 1rem;" />

<div style="display: flex; gap: 1rem; margin: 1rem 0; flex-wrap: wrap;">
<div style="text-align: center; flex: 1 1 calc(50% - 0.5rem);">
<img src="/img/guides/Clark/RGF_forest_uniform.png" alt="RGF Forest Uniform" class="zoomable" onclick="openLightbox(this.src)" style="max-width: 100%; height: auto; object-fit: contain; border-radius: 8px;" />
<p style="margin-top: 0.5rem; color: #94a3b8; font-size: 0.875rem;">Forest</p>
</div>
<div style="text-align: center; flex: 1 1 calc(50% - 0.5rem);">
<img src="/img/guides/Clark/RGF_desert_uniform.png" alt="RGF Desert Uniform" class="zoomable" onclick="openLightbox(this.src)" style="max-width: 100%; height: auto; object-fit: contain; border-radius: 8px;" />
<p style="margin-top: 0.5rem; color: #94a3b8; font-size: 0.875rem;">Desert</p>
</div>
</div>

---

## 🟢 Independent Factions

Various independent military forces with diverse equipment and camouflage patterns.

---

### Ground Forces of Iran (GFI)

<img src="/img/units/unitwithflag/MEA_Rifleman_Flag.webp" alt="GFI Flag" style="height: 80px; object-fit: contain; border-radius: 8px; margin-bottom: 1rem;" />

<img src="/img/guides/Clark/GFI_uniform.png" alt="GFI Uniform" class="zoomable" onclick="openLightbox(this.src)" style="max-width: calc(50% - 0.5rem); height: auto; object-fit: contain; border-radius: 8px;" />

---

### Turkish Land Forces (TLF)

<img src="/img/units/unitwithflag/TLFTeamImage_desert.webp" alt="TLF Flag" style="height: 80px; object-fit: contain; border-radius: 8px; margin-bottom: 1rem;" />

<img src="/img/guides/Clark/TLF_uniform.png" alt="TLF Uniform" class="zoomable" onclick="openLightbox(this.src)" style="max-width: calc(50% - 0.5rem); height: auto; object-fit: contain; border-radius: 8px;" />

---

### Canadian Resistance Forces (CRF)

<img src="/img/units/unitwithflag/CRF_TeamImage.webp" alt="CRF Flag" style="height: 80px; object-fit: contain; border-radius: 8px; margin-bottom: 1rem;" />

<img src="/img/guides/Clark/CRF_uniform.png" alt="CRF Uniform" class="zoomable" onclick="openLightbox(this.src)" style="max-width: calc(50% - 0.5rem); height: auto; object-fit: contain; border-radius: 8px;" />

---

### Insurgents (INS)

<img src="/img/units/unitwithflag/INS_Rifleman_Flag.webp" alt="INS Flag" style="height: 80px; object-fit: contain; border-radius: 8px; margin-bottom: 1rem;" />

<img src="/img/guides/Clark/INS_uniform.png" alt="INS Uniform" class="zoomable" onclick="openLightbox(this.src)" style="max-width: calc(50% - 0.5rem); height: auto; object-fit: contain; border-radius: 8px;" />

---

### Irregular Militia Forces (IMF)

<img src="/img/units/unitwithflag/IMF_TeamImage.webp" alt="IMF Flag" style="height: 80px; object-fit: contain; border-radius: 8px; margin-bottom: 1rem;" />

<img src="/img/guides/Clark/IMF_uniform.png" alt="IMF Uniform" class="zoomable" onclick="openLightbox(this.src)" style="max-width: calc(50% - 0.5rem); height: auto; object-fit: contain; border-radius: 8px;" />

---

### Western Private Military Contractors (WPMC)

<img src="/img/units/unitwithflag/WPMC_Rifleman_Flag.webp" alt="WPMC Flag" style="height: 80px; object-fit: contain; border-radius: 8px; margin-bottom: 1rem;" />

<img src="/img/guides/Clark/WPMC_uniform.png" alt="WPMC Uniform" class="zoomable" onclick="openLightbox(this.src)" style="max-width: calc(50% - 0.5rem); height: auto; object-fit: contain; border-radius: 8px;" />

---

## Quick Recognition Tips

| Coalition | Key Features |
|-----------|--------------|
| **BLUFOR** | Modern helmets, plate carriers, woodland/desert multicam |
| **PAC** | Digital camo patterns, distinctive Chinese equipment |
| **REDFOR** | Flora camo, Russian-style gear, rounded helmets |
| **Independent** | Mixed equipment, civilian clothing elements, varied camo |

> **Pro Tip:** Before engaging, check your map for friendly positions. When in doubt, don't shoot - a teamkill hurts your team more than a delayed kill.
