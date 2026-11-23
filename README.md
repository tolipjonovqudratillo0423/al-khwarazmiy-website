# Muhammad al-Xorazmiy Nomidagi Ixtisoslashtirilgan Maktab (Farg'ona Filiali) Rasmiy Veb-Sayti

Ushbu loyiha [al-khwarizmischool.uz](https://al-khwarizmischool.uz/) rasmiy platformasi dizayni, arxitekturasi va standartlari asosida yaratilgan bo'lib, **Muhammad al-Xorazmiy nomidagi ixtisoslashtirilgan maktabning Farg'ona filiali** ([t.me/alXorazmiyfargonafiliali](https://t.me/alXorazmiyfargonafiliali)) ma'lumotlari, dars jarayonlari, yutuqlari va maktab gazetasiga to'liq moslashtirilgan.

---

## 🌟 Asosiy Xususiyatlar va Imkoniyatlar

1. **Zamonaviy va Tezkor Dizayn (Lag va Xatoliklarsiz)**:
   - React 19 + Vite 8 + Tailwind CSS asosida qurilgan.
   - Sahifalar bir zumda (SPA) ochiladi, ortiqcha yuklanishlarsiz juda tez ishlaydi.
   - Asl saytning brend ranglari (`#00265B` to'q ko'k, `#0047AB` qirollik ko'ki, `#3BAAFF` och moviy) va Poppins tipografiyasi.
   - Mobil, planshet va kompyuter ekranlariga 100% moslashuvchan (Responsive).

2. **Farg'ona Filiali Haqiqiy Ma'lumotlari**:
   - Manzil: **Farg'ona shahar, Ilg'or MFY, Mustaqillik shoh ko'chasi 1e-uy**.
   - Murojaat: `@xorazmiyfergana` va rasmiy kanal: `@alXorazmiyfargonafiliali`.
   - Pedagoglarimizning yuksak attestatsiya natijalari (Izzatillo Rahmatov A+ Milliy sertifikat, Ibrohimjon Umurzaqov 92 ballik natija va b.).
   - Yangi ta'lim loyihalari: **SAT MAXING CLUB**, **Raqamli avlod qizlari** startaplari, **Robototexnika va sun'iy intellekt**.

3. **To'liq Sahifalar Tuzilmasi**:
   - `Bosh sahifa (/)` — Hero slayder, interaktiv statistika, yo'nalishlar, gazeta xabarlari, sharoitlar, o'quvchilar klublari, hamkorlar va FAQ.
   - `Biz haqimizda`:
     - `/history` — Maktab tarixi
     - `/maqsad-vazifalar` — Missiya va vazifalar
     - `/rahbariyat` — Rahbariyat va malakali o'qituvchilar jamoasi
     - `/documents` — Me'yoriy hujjatlar va nizomlar
     - `/fotogalereya` — Maktab hayoti fotogalereyasi (interaktiv lightbox bilan)
   - `Fan yo'nalishlari`:
     - `/fan-yonalishlari` — Barcha yo'nalishlar
     - `/web` — Web dasturlash (Full-Stack)
     - `/mobil` — Mobil dasturlash (Flutter & Android)
     - `/grafika` — Kompyuter grafikasi (UI/UX & 3D Blender)
     - `/tarmoq` — Kompyuter tarmoqlari (Cisco & Kiberxavfsizlik)
   - `Ta'lim`:
     - `/oquv-dasturlari` — 7–11 sinflar o'quv modeli
     - `/olympics` — Fan olimpiadalari tayyorgarligi
   - `Maktab hayoti`:
     - `/yotoqxona` — Bepul maktab-internat yotoqxonasi, 3 mahal ovqat va kun tartibi
     - `/oquvchilar-tashkilotlari` — SAT MAXING CLUB, IT to'garaklar
     - `/maktab-tadbirlari` — Maktab tadbirlari va e'lonlar
   - `Qabul`:
     - `/qabul-tartibi` — 7-sinfga qabul bosqichlari, imtihon fanlari va hujjatlar ro'yxati
   - `Maktab Gazetasi & Yangiliklar`:
     - `/yangiliklar` — Gazeta maqolalari, kategoriya filtrlari, qidiruv
     - `/yangiliklar/:id` — To'liq mutolaa, ko'rishlar soni, ulashish va chop etish
   - `Aloqa`:
     - `/kontaktlar` — Bog'lanish, onlayn xabar yuborish formasi, xarita

---

## 🔒 Xavfsiz Admin Panel (Maktab Gazetasi Tahririyati)

Foydalanuvchi talabiga binoan, admin panel oddiy foydalanuvchilar ko'zidan yashirilgan bo'lib, unga faqat `/admin-login` havolasi orqali kirish mumkin:

- **Kirish sahifasi**: `http://localhost:5000/admin-login` (yoki dev rejimda `http://localhost:5173/admin-login`)
- **Standart login**: `admin`
- **Standart parol**: `adminXorazmiy2026!`

### Admin Panel Imkoniyatlari:
1. **Gazeta & Yangiliklar qo'shish va tahrirlash**:
   - Sarlavha, kategoriya, muallif, qisqacha izoh, to'liq matn.
   - Maktab fotosuratlaridan bir bosishda tanlash yoki rasm URL kiritish.
   - Chop etilgach, xabar darhol bosh sahifa va gazeta bo'limida jonli ko'rinadi.
2. **«Al-Xorazmiy Ziyo» Gazetasi Nashrlarini boshqarish**:
   - Maxsus sonlarni yaratish va arxivlash.
3. **Murojaatlar qutisi (Inbox)**:
   - Saytdagi `/kontaktlar` sahifasidan yuborilgan ota-onalar va mehmonlar xabarlarini o'qish va boshqarish.
4. **Statistika tahririyati**:
   - O'quvchilar soni, ustozlar soni, laboratoriyalar sonini dinamik yangilash.
5. **Xavfsizlik & Parol o'zgartirish**:
   - Admin parolini bcrypt orqali yangilash.

---

## 🚀 Ishga Tushirish Qo'llanmasi

### 1. Dasturni ishga tushirish (Production server):
Saytni to'liq bitta buyruq bilan ishga tushirish:
```bash
npm start
```
Brauzerda oching: **`http://localhost:5000`**

### 2. Dasturchilar uchun (Development rejimi):
Backend va Frontendni bir vaqtda jonli yangilanish (hot reload) bilan ishga tushirish:
```bash
npm run dev
```
- Frontend: **`http://localhost:5173`**
- Backend API: **`http://localhost:5000`**

---

© 2026 Muhammad al-Xorazmiy nomidagi ixtisoslashtirilgan maktab Farg'ona filiali.
