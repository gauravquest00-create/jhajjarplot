# JhajjarPlots.com - High-Level SEO & Organic Traffic Real Estate Platform

A high-performance, SEO-optimized Real Estate web application built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**.

Engineered specifically to capture high-intent organic Google search traffic for plot buyers in **Jhajjar, Reliance MET City (Model Economic Township), and Delhi-NCR**, with integrated **Google Sheets lead capture** and **WhatsApp conversion workflows**.

---

## 🌟 Featured Projects in Dataset (`data/projects.json`)

1. **Reliance MET City (Sector 1, Jhajjar)**:
   - **8,260 Acres** Mega Greenfield Smart City by Reliance Industries
   - Rate: **₹1,10,000 per Gaj (₹1.10 Lakh/Gaj)**
   - Plot Sizes: 150 to 1,000 Gaj (1,350 to 9,000+ Sq.Ft)
   - RERA Registered & DTCP Approved (`HRERA-PKL-JJR-2018/142`)
   - Global MNC Hub (Panasonic, Denso, FM Logistic, Nihon Kohden)
   - Direct 0-KM KMP Expressway frontage

2. **Nobel Economic Township (Sector 1, Jhajjar)**:
   - **210 Acres** Gated Residential Community
   - Rate: **₹30,000 per Gaj (30k/Gaj)** (Most affordable in Sector 1)
   - Plot Sizes: 100 to 550 Gaj (900 to 4,950 Sq.Ft)
   - Immediate Registry & Mutation (Dakhil Kharij)
   - Located right opposite Reliance MET City Phase-1

3. **Om Dream Home (Sector 25, Jhajjar)**:
   - **65 Acres** Prime Urban Plotted Development
   - Rate: **₹55,000 per Gaj (55k/Gaj)**
   - Plot Sizes: 100 to 500 Gaj (900 to 4,500 Sq.Ft)
   - Urban city center location near Civil Hospital, courts, and colleges
   - Immediate construction ready with municipal water & sewerage

---

## 📊 Google Sheets Form Lead Capture (`components/EnquiryForm.tsx`)

Every user submission is dispatched directly to your Google Sheet via Google Apps Script:
- **Target URL**: Configured via `NEXT_PUBLIC_SHEET_URL` in `.env.local`:
  `https://script.google.com/macros/s/AKfycbz1lZx0IPy322FjMpB-2ZttKZTauds-X3uHRnN0NEWN_o4uO51kJ5JEmrje1oUHeE-FWg/exec`
- **Method**: `POST` with `mode: "no-cors"` and `Content-Type: "text/plain;charset=utf-8"`.
- **Payload Format**:
  ```json
  {
    "name": "User Name",
    "phone": "9876543210",
    "budget": "30-60 Lakh",
    "project": "Reliance MET City Sector 1",
    "page": "https://www.jhajjarplots.com/plots/reliance-met-city-sector-1-jhajjar",
    "website": ""
  }
  ```
- **Bot Protection**: Includes a hidden off-screen honeypot input (`name="website"`, `tabIndex={-1}`).
- **Success State**: Displays *"Thanks, your enquiry is saved"* along with a dedicated **"Continue on WhatsApp"** button (`https://wa.me/918860827578?text=...`) without triggering popup blockers.
- **Fallback / Error State**: Shows an informative message with a direct *"Send it on WhatsApp instead"* link.

---

## 📞 Centralized Site Configuration (`lib/site.ts`)

All phone numbers, display formats, and WhatsApp URLs are centralized:
- **Phone**: `918860827578`
- **Display**: `+91 88608 27578`
- Header Call button, Sticky Mobile Bar, and all WhatsApp buttons sync from this single source.

---

## 🎨 Theme & UI Highlights

- **Light Theme**: Modern, crisp white and slate-50 styling with warm gold/amber accents (`amber-600`) and emerald green WhatsApp CTAs.
- **Sticky Navbar on Scroll**: Elevated sticky navbar with smooth backdrop blur (`bg-white/95 backdrop-blur-md`).
- **Icons & Premium Typography**: High-resolution SVG icons, clean font hierarchy, and micro-animations.
- **Web URL Logo / Favicon**: Native SVG favicon badge (`/icon.svg` & `/favicon.ico`).
- **Extra SEO Meta Tags**: OpenGraph, Twitter Cards, Geotagging (`IN-HR`, Jhajjar coordinates), and full JSON-LD structured data (`RealEstateListing`, `FAQPage`, `BreadcrumbList`, `LocalBusiness`).
- **Mobile Responsive (<= 377px)**: Strict `overflow-x: hidden` layout tested for iPhone SE, Galaxy Fold, and small mobile displays with a sticky action bar (`Call Now`, `WhatsApp`, `Site Visit`).

---

## 🛠️ How to Unzip and Run

### 1. Extract the project
```bash
unzip jhajar-plots-seo-nextjs.zip
cd jhajar-plots-seo-nextjs
```

### 2. Verify `.env.local`
Ensure `.env.local` exists in the root directory:
```env
NEXT_PUBLIC_SHEET_URL=https://script.google.com/macros/s/AKfycbz1lZx0IPy322FjMpB-2ZttKZTauds-X3uHRnN0NEWN_o4uO51kJ5JEmrje1oUHeE-FWg/exec
```

### 3. Install dependencies
```bash
npm install
```

### 4. Start development server
```bash
npm run dev
```
Open **[http://localhost:3000](http://localhost:3000)** in your browser!

### 5. Build for Production
```bash
npm run build
npm start
```
