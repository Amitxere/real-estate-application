/* =========================================================
   REAL ESTATE
   PREMIUM DARK GREEN + GOLD DESIGN
========================================================= */

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family:
    Inter,
    "Segoe UI",
    Arial,
    sans-serif;

  background: #eef3ef;
  color: #102f25;
}

button,
select,
a {
  font: inherit;
}

button,
select {
  cursor: pointer;
}

a {
  text-decoration: none;
  color: inherit;
}

/* =========================================================
   APP
========================================================= */

.app {
  min-height: 100vh;
  background: #eef3ef;
}

/* =========================================================
   NAVBAR
========================================================= */

.navbar {
  position: sticky;
  top: 0;
  z-index: 1000;

  background: rgba(16, 47, 37, 0.97);

  backdrop-filter: blur(12px);

  border-bottom:
    1px solid rgba(217, 182, 92, 0.3);
}

.nav-inner {
  width: min(1400px, 92%);
  margin: auto;

  min-height: 78px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 30px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;

  color: white;
}

.brand-mark {
  width: 45px;
  height: 45px;

  display: grid;
  place-items: center;

  background: #d9b65c;
  color: #102f25;

  border-radius: 12px;

  font-weight: 900;
  letter-spacing: -1px;
}

.brand h2 {
  font-size: 17px;
  letter-spacing: 2px;
}

.brand span {
  display: block;

  margin-top: 3px;

  font-size: 8px;

  letter-spacing: 2px;

  color: #d9b65c;

  font-weight: 800;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 28px;

  color: #e9f0eb;
}

.nav-links a {
  font-size: 13px;
  font-weight: 700;

  transition: 0.3s;
}

.nav-links a:hover {
  color: #d9b65c;
}

.contact-nav {
  border: 1px solid #d9b65c;

  background: #d9b65c;
  color: #102f25;

  padding: 12px 18px;

  border-radius: 8px;

  font-size: 12px;
  font-weight: 900;

  transition: 0.3s;
}

.contact-nav:hover {
  background: transparent;
  color: #d9b65c;
}

/* =========================================================
   PROPERTY SELECTOR
========================================================= */

.property-selector {
  background: #dce7e1;

  border-bottom:
    1px solid rgba(16, 47, 37, 0.08);
}

.selector-inner {
  width: min(1400px, 92%);
  margin: auto;

  min-height: 125px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 30px;
}

.selector-label,
.section-label {
  display: block;

  color: #a78a3e;

  font-size: 10px;

  font-weight: 900;

  letter-spacing: 2px;
}

.selector-inner h1 {
  margin-top: 7px;

  font-size: 28px;

  letter-spacing: -0.7px;
}

.selector-inner select {
  width: 400px;

  padding: 15px 18px;

  background: white;

  color: #102f25;

  border:
    1px solid rgba(16, 47, 37, 0.15);

  border-radius: 10px;

  outline: none;

  font-weight: 700;

  box-shadow:
    0 8px 25px rgba(16, 47, 37, 0.08);
}

/* =========================================================
   HERO
========================================================= */

.hero-section {
  width: min(1400px, 92%);
  margin: 55px auto 0;

  min-height: 430px;

  position: relative;

  display: grid;
  grid-template-columns: 1fr 300px;

  overflow: hidden;

  background:
    linear-gradient(
      120deg,
      #102f25 0%,
      #164737 55%,
      #1c5945 100%
    );

  border-radius: 30px;

  box-shadow:
    0 25px 60px rgba(16, 47, 37, 0.18);
}

.hero-content {
  padding: 65px;
  color: white;
}

.hero-label {
  display: flex;
  align-items: center;
  gap: 10px;

  color: #d9b65c;

  font-size: 10px;

  font-weight: 900;

  letter-spacing: 2px;
}

.hero-label span {
  width: 35px;
  height: 2px;

  background: #d9b65c;
}

.hero-content h1 {
  max-width: 750px;

  margin-top: 18px;

  font-size: clamp(42px, 5vw, 68px);

  line-height: 0.98;

  letter-spacing: -3px;
}

.hero-location {
  margin-top: 22px;

  font-size: 16px;

  color: #dce9e2;

  font-weight: 700;
}

.hero-description {
  max-width: 720px;

  margin-top: 18px;

  line-height: 1.7;

  color: #c7d7cf;

  font-size: 15px;
}

.hero-price-row {
  margin-top: 30px;

  display: flex;
  align-items: center;

  gap: 25px;
}

.price-label {
  display: block;

  margin-bottom: 5px;

  color: #9eb5aa;

  font-size: 9px;

  letter-spacing: 1.5px;

  font-weight: 900;
}

.hero-price-row strong {
  font-size: 32px;

  color: #d9b65c;
}

.hero-status {
  padding: 9px 14px;

  border:
    1px solid rgba(217, 182, 92, 0.6);

  border-radius: 30px;

  color: #d9b65c;

  font-size: 11px;

  font-weight: 900;
}

.hero-stats {
  display: flex;

  margin-top: 35px;

  gap: 0;
}

.hero-stats div {
  padding-right: 30px;
  margin-right: 30px;

  border-right:
    1px solid rgba(255, 255, 255, 0.15);
}

.hero-stats div:last-child {
  border: none;
}

.hero-stats strong {
  display: block;

  font-size: 22px;

  color: white;
}

.hero-stats span {
  display: block;

  margin-top: 5px;

  font-size: 10px;

  color: #9eb5aa;

  text-transform: uppercase;

  letter-spacing: 1px;
}

.hero-accent {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  gap: 30px;

  padding: 40px;

  background:
    linear-gradient(
      160deg,
      rgba(217, 182, 92, 0.95),
      #c6a54d
    );

  color: #102f25;
}

.hero-accent div {
  padding-top: 20px;

  border-top:
    1px solid rgba(16, 47, 37, 0.25);
}

.hero-accent span {
  display: block;

  font-size: 9px;

  font-weight: 900;

  letter-spacing: 1.5px;
}

.hero-accent strong {
  display: block;

  margin-top: 5px;

  font-size: 20px;
}

/* =========================================================
   GENERAL SECTIONS
========================================================= */

.showcase-section,
.details-section,
.gallery-section,
.amenities-section,
.similar-section {
  width: min(1400px, 92%);
  margin: 90px auto 0;
}

.section-heading {
  display: flex;

  align-items: flex-end;
  justify-content: space-between;

  gap: 30px;

  margin-bottom: 30px;
}

.section-heading h2 {
  margin-top: 8px;

  font-size: 38px;

  letter-spacing: -1.5px;
}

.section-heading p {
  max-width: 470px;

  color: #61736a;

  line-height: 1.7;

  font-size: 14px;
}

.section-heading.centered {
  display: block;

  text-align: center;
}

.section-heading.centered p {
  margin: 12px auto 0;
}

/* =========================================================
   MAIN SHOWCASE
========================================================= */

.main-property-showcase {
  display: grid;

  grid-template-columns:
    1.7fr 1fr;

  gap: 18px;

  height: 590px;
}

.showcase-main,
.showcase-small {
  position: relative;

  overflow: hidden;

  border-radius: 22px;

  background: #dce7e1;

  cursor: pointer;
}

.showcase-main img,
.showcase-small img {
  width: 100%;
  height: 100%;

  display: block;

  object-fit: cover;

  transition:
    transform 0.6s ease;
}

.showcase-main:hover img,
.showcase-small:hover img {
  transform: scale(1.05);
}

.showcase-main::after,
.showcase-small::after {
  content: "";

  position: absolute;

  inset: 0;

  background:
    linear-gradient(
      to top,
      rgba(0, 0, 0, 0.65),
      transparent 55%
    );
}

.property-badge {
  position: absolute;

  top: 22px;
  left: 22px;

  z-index: 2;

  padding: 9px 13px;

  border-radius: 6px;

  background: #d9b65c;

  color: #102f25;

  font-size: 9px;

  font-weight: 900;

  letter-spacing: 1px;
}

.image-count {
  position: absolute;

  right: 22px;
  top: 22px;

  z-index: 2;

  padding: 9px 13px;

  border-radius: 6px;

  background:
    rgba(16, 47, 37, 0.85);

  color: white;

  font-size: 10px;

  font-weight: 800;
}

.showcase-view {
  position: absolute;

  left: 25px;
  bottom: 25px;

  z-index: 2;

  color: white;

  font-size: 14px;

  font-weight: 900;
}

.showcase-side {
  display: grid;

  grid-template-columns: 1fr 1fr;

  gap: 18px;
}

.more-images {
  position: absolute;

  inset: 0;

  z-index: 3;

  display: flex;

  flex-direction: column;

  align-items: center;
  justify-content: center;

  background:
    rgba(16, 47, 37, 0.76);

  color: white;

  text-align: center;
}

.more-images strong {
  font-size: 36px;

  color: #d9b65c;
}

.more-images span {
  margin-top: 5px;

  font-size: 10px;

  letter-spacing: 1.5px;

  font-weight: 900;
}

/* =========================================================
   DETAILS
========================================================= */

.details-section {
  margin-top: 90px;
}

.details-card {
  padding: 45px;

  background: white;

  border-radius: 25px;

  box-shadow:
    0 15px 45px rgba(16, 47, 37, 0.08);
}

.details-grid {
  display: grid;

  grid-template-columns:
    repeat(3, 1fr);

  gap: 15px;
}

.detail-box {
  padding: 22px;

  background: #f1f5f2;

  border-radius: 15px;

  border-left:
    3px solid #d9b65c;
}

.detail-box span {
  display: block;

  font-size: 9px;

  color: #7c8c84;

  letter-spacing: 1.3px;

  font-weight: 900;
}

.detail-box strong {
  display: block;

  margin-top: 7px;

  font-size: 17px;
}

/* =========================================================
   GALLERY
========================================================= */

.gallery-section {
  padding-top: 20px;
}

.property-gallery {
  width: 100%;

  display: grid;

  grid-template-columns:
    repeat(4, minmax(0, 1fr));

  gap: 20px;
}

.gallery-card {
  width: 100%;

  aspect-ratio: 4 / 3;

  position: relative;

  overflow: hidden;

  border-radius: 20px;

  background: #dce7e1;

  cursor: pointer;
}

.gallery-card img {
  position: absolute;

  inset: 0;

  width: 100%;
  height: 100%;

  display: block;

  object-fit: cover;

  transition:
    transform 0.5s ease;
}

.gallery-card:hover img {
  transform: scale(1.08);
}

.gallery-number {
  position: absolute;

  top: 14px;
  left: 14px;

  z-index: 2;

  width: 35px;
  height: 35px;

  display: grid;

  place-items: center;

  background:
    rgba(16, 47, 37, 0.9);

  color: #d9b65c;

  border-radius: 10px;

  font-size: 11px;

  font-weight: 900;
}

.gallery-overlay {
  position: absolute;

  inset: 0;

  z-index: 2;

  display: flex;

  align-items: flex-end;

  justify-content: center;

  padding-bottom: 20px;

  opacity: 0;

  background:
    linear-gradient(
      to top,
      rgba(16, 47, 37, 0.75),
      transparent 60%
    );

  transition: 0.3s;
}

.gallery-overlay span {
  color: white;

  font-size: 12px;

  font-weight: 900;
}

.gallery-card:hover .gallery-overlay {
  opacity: 1;
}

/* =========================================================
   VIDEO
========================================================= */

.video-section {
  width: 100%;

  margin-top: 100px;

  padding:
    80px max(4%, calc((100% - 1400px) / 2));

  display: grid;

  grid-template-columns: 1fr 1fr;

  gap: 60px;

  background: #102f25;

  color: white;
}

.video-content {
  align-self: center;
}

.video-content h2 {
  margin-top: 10px;

  max-width: 550px;

  font-size: 48px;

  line-height: 1;

  letter-spacing: -2px;
}

.video-content p {
  max-width: 500px;

  margin-top: 20px;

  color: #b8c9c0;

  line-height: 1.7;
}

.gold-button {
  display: inline-flex;

  align-items: center;
  justify-content: center;

  margin-top: 25px;

  padding: 14px 22px;

  border: 1px solid #d9b65c;

  border-radius: 8px;

  background: #d9b65c;

  color: #102f25;

  font-weight: 900;

  font-size: 12px;

  transition: 0.3s;
}

.gold-button:hover {
  background: transparent;

  color: #d9b65c;
}

.video-preview {
  position: relative;

  min-height: 350px;

  overflow: hidden;

  border-radius: 25px;

  cursor: pointer;
}

.video-preview img {
  width: 100%;
  height: 100%;

  display: block;

  object-fit: cover;

  transition: 0.5s;
}

.video-preview:hover img {
  transform: scale(1.05);
}

.video-preview::after {
  content: "";

  position: absolute;

  inset: 0;

  background:
    rgba(16, 47, 37, 0.3);
}

.play-button {
  position: absolute;

  left: 50%;
  top: 50%;

  transform:
    translate(-50%, -50%);

  z-index: 2;

  width: 80px;
  height: 80px;

  display: grid;

  place-items: center;

  border-radius: 50%;

  background: #d9b65c;

  color: #102f25;

  font-size: 25px;

  box-shadow:
    0 10px 30px
    rgba(0, 0, 0, 0.25);
}

/* =========================================================
   AMENITIES
========================================================= */

.amenities-section {
  background: #f6f8f5;

  max-width: none;

  width: 100%;

  padding:
    90px 4%;
}

.amenities-image-grid {
  display: grid;

  grid-template-columns:
    repeat(4, minmax(0, 1fr));

  gap: 22px;
}

.amenity-image-card {
  overflow: hidden;

  background: white;

  border-radius: 20px;

  box-shadow:
    0 12px 30px
    rgba(16, 47, 37, 0.08);

  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.amenity-image-card:hover {
  transform: translateY(-8px);

  box-shadow:
    0 20px 40px
    rgba(16, 47, 37, 0.14);
}

.amenity-image {
  position: relative;

  height: 220px;

  overflow: hidden;
}

.amenity-image img {
  width: 100%;
  height: 100%;

  object-fit: cover;

  display: block;

  transition:
    transform 0.5s ease;
}

.amenity-image-card:hover
.amenity-image img {
  transform: scale(1.08);
}

.amenity-image-overlay {
  position: absolute;

  top: 15px;
  right: 15px;

  width: 48px;
  height: 48px;

  display: grid;

  place-items: center;

  background:
    rgba(16, 47, 37, 0.85);

  border:
    1px solid
    rgba(217, 182, 92, 0.7);

  border-radius: 14px;

  font-size: 22px;
}

.amenity-image-content {
  min-height: 100px;

  padding: 20px;

  display: flex;

  align-items: center;
  justify-content: space-between;

  gap: 15px;
}

.amenity-image-content span:first-child {
  font-size: 9px;

  color: #a78a3e;

  font-weight: 900;

  letter-spacing: 1.5px;
}

.amenity-image-content h3 {
  margin-top: 5px;

  font-size: 19px;
}

.amenity-arrow {
  width: 38px;
  height: 38px;

  flex-shrink: 0;

  display: grid;

  place-items: center;

  background: #edf3ef;

  border-radius: 50%;

  font-size: 20px;

  transition: 0.3s;
}

.amenity-image-card:hover
.amenity-arrow {
  background: #d9b65c;
}

/* =========================================================
   LOCATION
========================================================= */

.location-section {
  width: min(1400px, 92%);

  margin: 100px auto;

  display: grid;

  grid-template-columns: 1fr 1fr;

  gap: 60px;

  align-items: center;
}

.location-content h2 {
  max-width: 620px;

  margin-top: 10px;

  font-size: 48px;

  line-height: 1;

  letter-spacing: -2px;
}

.location-content > p {
  margin-top: 18px;

  font-size: 18px;

  color: #61736a;

  font-weight: 800;
}

.location-points {
  margin-top: 35px;

  display: grid;

  grid-template-columns: 1fr 1fr;

  gap: 18px;
}

.location-points div {
  display: flex;

  align-items: center;

  gap: 12px;

  padding: 17px;

  background: white;

  border-radius: 12px;
}

.location-points span {
  color: #a78a3e;

  font-weight: 900;

  font-size: 11px;
}

.location-points strong {
  font-size: 12px;
}

.map-card {
  min-height: 450px;

  border-radius: 25px;

  overflow: hidden;

  box-shadow:
    0 20px 50px
    rgba(16, 47, 37, 0.1);
}

.map-background {
  height: 100%;
  min-height: 450px;

  position: relative;

  background:
    #d9e4dc;
}

.map-grid {
  position: absolute;

  inset: 0;

  opacity: 0.6;

  background-image:
    linear-gradient(
      90deg,
      rgba(16, 47, 37, 0.12) 1px,
      transparent 1px
    ),
    linear-gradient(
      rgba(16, 47, 37, 0.12) 1px,
      transparent 1px
    );

  background-size: 45px 45px;

  transform:
    rotate(-8deg)
    scale(1.3);
}

.map-pin {
  position: absolute;

  left: 50%;
  top: 45%;

  transform:
    translate(-50%, -50%);

  width: 70px;
  height: 70px;

  display: grid;

  place-items: center;

  border-radius: 50%;

  background: #d9b65c;

  font-size: 30px;

  box-shadow:
    0 12px 35px
    rgba(16, 47, 37, 0.2);
}

.map-location {
  position: absolute;

  left: 50%;
  bottom: 35px;

  transform:
    translateX(-50%);

  width: 75%;

  padding: 18px;

  background:
    rgba(255, 255, 255, 0.92);

  border-radius: 14px;

  text-align: center;

  box-shadow:
    0 10px 25px
    rgba(16, 47, 37, 0.08);
}

.map-location strong {
  display: block;

  font-size: 15px;
}

.map-location span {
  display: block;

  margin-top: 4px;

  color: #74837b;

  font-size: 11px;
}

/* =========================================================
   AGENT
========================================================= */

.agent-section {
  width: min(1400px, 92%);

  margin: 100px auto;
}

.agent-card {
  display: grid;

  grid-template-columns:
    130px 1fr auto;

  align-items: center;

  gap: 35px;

  padding: 45px;

  background:
    linear-gradient(
      120deg,
      #102f25,
      #194737
    );

  color: white;

  border-radius: 25px;

  box-shadow:
    0 20px 50px
    rgba(16, 47, 37, 0.15);
}

.agent-avatar {
  width: 120px;
  height: 120px;

  display: grid;

  place-items: center;

  border-radius: 50%;

  background: #d9b65c;

  color: #102f25;

  font-size: 30px;

  font-weight: 900;

  border:
    6px solid
    rgba(255, 255, 255, 0.12);
}

.agent-info h2 {
  margin-top: 8px;

  font-size: 30px;
}

.agent-role {
  margin-top: 5px;

  color: #d9b65c;

  font-size: 12px;

  font-weight: 900;
}

.agent-info > p:not(.agent-role) {
  max-width: 600px;

  margin-top: 12px;

  color: #bfd0c7;

  line-height: 1.6;

  font-size: 13px;
}

.agent-contact {
  display: flex;

  gap: 20px;

  margin-top: 18px;

  flex-wrap: wrap;
}

.agent-contact a {
  color: #e4eee8;

  font-size: 12px;

  font-weight: 700;
}

.agent-contact a:hover {
  color: #d9b65c;
}

.agent-action .gold-button {
  margin-top: 0;
}

/* =========================================================
   VIRTUAL TOUR
========================================================= */

.virtual-tour-section {
  width: min(1400px, 92%);

  margin: 100px auto;
}

.virtual-tour-header {
  display: flex;

  justify-content: space-between;

  align-items: flex-end;

  gap: 30px;

  margin-bottom: 25px;
}

.virtual-tour-header h2 {
  margin-top: 8px;

  font-size: 38px;
}

.virtual-tour-header p {
  max-width: 400px;

  color: #687970;

  font-size: 14px;

  line-height: 1.6;
}

.virtual-tour-card {
  display: flex;

  align-items: center;

  gap: 25px;

  padding: 30px;

  background: white;

  border-radius: 20px;

  box-shadow:
    0 15px 40px
    rgba(16, 47, 37, 0.08);
}

.virtual-tour-icon {
  width: 80px;
  height: 80px;

  flex-shrink: 0;

  display: grid;

  place-items: center;

  border-radius: 18px;

  background: #102f25;

  color: #d9b65c;

  font-size: 20px;

  font-weight: 900;
}

.virtual-tour-card h3 {
  font-size: 21px;
}

.virtual-tour-card p {
  margin-top: 6px;

  color: #75847c;

  font-size: 13px;
}

.outline-button {
  margin-left: auto;

  padding: 13px 18px;

  border:
    1px solid #102f25;

  border-radius: 8px;

  color: #102f25;

  font-size: 11px;

  font-weight: 900;

  transition: 0.3s;
}

.outline-button:hover {
  background: #102f25;

  color: white;
}

/* =========================================================
   SIMILAR PROPERTIES
========================================================= */

.similar-grid {
  display: grid;

  grid-template-columns:
    repeat(3, 1fr);

  gap: 25px;
}

.similar-card {
  overflow: hidden;

  background: white;

  border-radius: 20px;

  box-shadow:
    0 12px 35px
    rgba(16, 47, 37, 0.08);

  cursor: pointer;

  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.similar-card:hover {
  transform: translateY(-8px);

  box-shadow:
    0 22px 45px
    rgba(16, 47, 37, 0.14);
}

.similar-image {
  height: 240px;

  position: relative;

  overflow: hidden;
}

.similar-image img {
  width: 100%;
  height: 100%;

  object-fit: cover;

  transition: 0.5s;
}

.similar-card:hover
.similar-image img {
  transform: scale(1.06);
}

.similar-image span {
  position: absolute;

  left: 15px;
  top: 15px;

  padding: 7px 10px;

  border-radius: 6px;

  background: #d9b65c;

  color: #102f25;

  font-size: 9px;

  font-weight: 900;
}

.similar-content {
  padding: 22px;
}

.similar-location {
  color: #a78a3e;

  font-size: 10px;

  font-weight: 800;
}

.similar-content h3 {
  margin-top: 8px;

  font-size: 20px;
}

.similar-content > strong {
  display: block;

  margin-top: 10px;

  font-size: 22px;

  color: #102f25;
}

.similar-meta {
  display: flex;

  flex-wrap: wrap;

  gap: 12px;

  margin-top: 15px;

  color: #718078;

  font-size: 10px;

  font-weight: 700;
}

/* =========================================================
   FOOTER
========================================================= */

.footer {
  margin-top: 100px;

  background: #0a2119;

  color: white;
}

.footer-main {
  width: min(1400px, 92%);

  margin: auto;

  padding: 70px 0;

  display: grid;

  grid-template-columns:
    2fr 1fr 1fr;

  gap: 70px;
}

.footer-brand p {
  max-width: 400px;

  margin-top: 20px;

  color: #9eb5aa;

  font-size: 13px;

  line-height: 1.7;
}

.footer-column {
  display: flex;

  flex-direction: column;

  gap: 13px;
}

.footer-column h4 {
  margin-bottom: 5px;

  color: #d9b65c;

  font-size: 10px;

  letter-spacing: 1.5px;
}

.footer-column a,
.footer-column span {
  color: #aabcb3;

  font-size: 12px;
}

.footer-column a:hover {
  color: #d9b65c;
}

.footer-bottom {
  width: min(1400px, 92%);

  margin: auto;

  padding:
    20px 0;

  display: flex;

  justify-content: space-between;

  gap: 20px;

  border-top:
    1px solid rgba(255, 255, 255, 0.1);

  color: #71847a;

  font-size: 10px;
}

/* =========================================================
   IMAGE MODAL
========================================================= */

.image-modal,
.video-modal {
  position: fixed;

  inset: 0;

  z-index: 5000;

  display: flex;

  align-items: center;
  justify-content: center;

  padding: 30px;

  background:
    rgba(0, 0, 0, 0.92);
}

.modal-image-container {
  position: relative;

  max-width: 90vw;
  max-height: 88vh;
}

.modal-image-container img {
  max-width: 90vw;
  max-height: 82vh;

  display: block;

  object-fit: contain;

  border-radius: 10px;
}

.modal-counter {
  position: absolute;

  left: 50%;
  bottom: -30px;

  transform:
    translateX(-50%);

  color: white;

  font-size: 12px;
}

.modal-close,
.modal-prev,
.modal-next {
  position: fixed;

  z-index: 10;

  border: none;

  background: transparent;

  color: white;

  font-size: 45px;

  line-height: 1;
}

.modal-close {
  top: 20px;
  right: 30px;

  font-size: 40px;
}

.modal-prev {
  left: 25px;
  top: 50%;

  transform:
    translateY(-50%);
}

.modal-next {
  right: 25px;
  top: 50%;

  transform:
    translateY(-50%);
}

.modal-close:hover,
.modal-prev:hover,
.modal-next:hover {
  color: #d9b65c;
}

/* =========================================================
   VIDEO MODAL
========================================================= */

.video-modal-container {
  width: min(1000px, 90vw);

  aspect-ratio: 16 / 9;

  overflow: hidden;

  border-radius: 15px;

  background: black;
}

.video-modal-container iframe {
  width: 100%;
  height: 100%;

  border: none;
}

/* =========================================================
   RESPONSIVE
========================================================= */

@media (max-width: 1100px) {

  .nav-links {
    display: none;
  }

  .hero-section {
    grid-template-columns: 1fr;
  }

  .hero-accent {
    flex-direction: row;

    justify-content: space-between;
  }

  .main-property-showcase {
    height: 520px;
  }

  .amenities-image-grid {
    grid-template-columns:
      repeat(3, 1fr);
  }

  .property-gallery {
    grid-template-columns:
      repeat(3, 1fr);
  }

  .location-section {
    grid-template-columns: 1fr;
  }

  .similar-grid {
    grid-template-columns:
      repeat(2, 1fr);
  }

}

@media (max-width: 800px) {

  .selector-inner {
    flex-direction: column;

    align-items: flex-start;

    padding: 25px 0;
  }

  .selector-inner select {
    width: 100%;
  }

  .hero-content {
    padding: 45px 35px;
  }

  .hero-content h1 {
    font-size: 48px;
  }

  .main-property-showcase {
    grid-template-columns: 1fr;

    height: auto;
  }

  .showcase-main {
    height: 400px;
  }

  .showcase-side {
    height: 300px;
  }

  .details-grid {
    grid-template-columns:
      repeat(2, 1fr);
  }

  .property-gallery {
    grid-template-columns:
      repeat(2, 1fr);
  }

  .video-section {
    grid-template-columns: 1fr;

    padding:
      60px 4%;
  }

  .video-preview {
    min-height: 300px;
  }

  .amenities-image-grid {
    grid-template-columns:
      repeat(2, 1fr);
  }

  .agent-card {
    grid-template-columns: 1fr;

    text-align: center;

    justify-items: center;
  }

  .agent-contact {
    justify-content: center;
  }

  .virtual-tour-header {
    flex-direction: column;

    align-items: flex-start;
  }

  .virtual-tour-card {
    flex-wrap: wrap;
  }

  .outline-button {
    margin-left: 0;
  }

  .footer-main {
    grid-template-columns: 1fr 1fr;
  }

  .footer-brand {
    grid-column: 1 / -1;
  }

}

@media (max-width: 560px) {

  .nav-inner {
    min-height: 70px;
  }

  .contact-nav {
    display: none;
  }

  .brand h2 {
    font-size: 14px;
  }

  .brand-mark {
    width: 40px;
    height: 40px;
  }

  .hero-section {
    width: 94%;

    margin-top: 30px;

    border-radius: 20px;
  }

  .hero-content {
    padding: 35px 25px;
  }

  .hero-content h1 {
    font-size: 38px;

    letter-spacing: -2px;
  }

  .hero-price-row {
    flex-direction: column;

    align-items: flex-start;
  }

  .hero-stats {
    flex-wrap: wrap;

    gap: 20px;
  }

  .hero-stats div {
    margin-right: 0;

    padding-right: 20px;
  }

  .hero-accent {
    flex-direction: column;

    gap: 15px;

    padding: 25px;
  }

  .section-heading {
    display: block;
  }

  .section-heading h2 {
    font-size: 31px;
  }

  .showcase-section,
  .details-section,
  .gallery-section,
  .similar-section {
    width: 94%;
  }

  .showcase-main {
    height: 300px;
  }

  .showcase-side {
    grid-template-columns: 1fr 1fr;

    height: 200px;
  }

  .details-card {
    padding: 25px;
  }

  .details-grid {
    grid-template-columns: 1fr;
  }

  .property-gallery {
    grid-template-columns: 1fr;
  }

  .amenities-section {
    padding:
      70px 4%;
  }

  .amenities-image-grid {
    grid-template-columns: 1fr;
  }

  .location-section {
    width: 94%;
  }

  .location-content h2 {
    font-size: 38px;
  }

  .location-points {
    grid-template-columns: 1fr;
  }

  .map-card,
  .map-background {
    min-height: 350px;
  }

  .agent-section,
  .virtual-tour-section {
    width: 94%;
  }

  .agent-card {
    padding: 30px 20px;
  }

  .similar-grid {
    grid-template-columns: 1fr;
  }

  .footer-main {
    grid-template-columns: 1fr;
  }

  .footer-brand {
    grid-column: auto;
  }

  .footer-bottom {
    flex-direction: column;
  }

  .video-content h2 {
    font-size: 38px;
  }

}
