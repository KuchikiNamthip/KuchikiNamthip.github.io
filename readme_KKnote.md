# readme_KKnote — วิธีอัปเดตเว็บ KuchikiNamthip.github.io

โน้ตส่วนตัวสำหรับการอัปเดตเว็บครั้งต่อไป (ไฟล์นี้อยู่ใน `exclude:` ของ `_config.yml` จึงไม่ถูกเผยแพร่ขึ้นเว็บ)

## ระบบทำงานยังไง

1. `git push` ขึ้น branch `main`
2. workflow **Deploy site** build เว็บด้วย Jekyll แล้ว push ผลลัพธ์ไปที่ branch `gh-pages`
3. workflow **pages-build-deployment** เอา `gh-pages` ขึ้นเว็บจริง

รวมประมาณ 5–8 นาที ส่วน workflow **Prettier code formatter** เป็นแค่การเช็ก format แยกต่างหาก ถ้าขึ้น ❌ เว็บก็ยังอัปเดตตามปกติ แต่ควรทำให้ผ่านทุกครั้ง

## ครั้งแรกบนเครื่องใหม่ (ทำครั้งเดียว)

ต้องมี Node.js + npm (และ Docker ถ้าจะ preview ในเครื่อง)

```bash
git clone git@github.com:KuchikiNamthip/KuchikiNamthip.github.io.git
cd KuchikiNamthip.github.io
npm ci   # ติดตั้ง prettier 3.9.9 + @shopify/prettier-plugin-liquid 1.11.2 ตามที่ล็อกไว้ใน package-lock.json
```

เครื่องอื่นที่มี repo อยู่แล้ว ให้ `git pull` แล้วรัน `npm ci` หนึ่งครั้ง เพื่อให้ได้ prettier เวอร์ชันเดียวกับ CI

## ทุกครั้งที่อัปเดตเว็บ

1. ดึงของล่าสุด: `git pull`
2. แก้ไฟล์ (ดูหัวข้อ "อะไรอยู่ไฟล์ไหน")
3. (ไม่บังคับ) preview ในเครื่อง: `docker compose pull && docker compose up` แล้วเปิด `http://localhost:8080` หยุดด้วย `Ctrl+C` (ครั้งแรกจะโหลด image หลายร้อย MB)
4. จัด format: `npm run format`
5. เช็กซ้ำ: `npm run format:check` ต้องขึ้น `All matched files use Prettier code style!`
6. commit แล้ว push:

   ```bash
   git status            # ดูว่ามีไฟล์อะไรเปลี่ยนบ้าง
   git add -A
   git commit -m "อธิบายสิ่งที่แก้"
   git push
   ```

7. ดูผลที่ [GitHub Actions](https://github.com/KuchikiNamthip/KuchikiNamthip.github.io/actions): รอ **Deploy site** ✅ ตามด้วย **pages-build-deployment** ✅
8. เปิด [เว็บ](https://kuchikinamthip.github.io/) แล้วกด `Ctrl+Shift+R` (GitHub Pages cache ประมาณ 10 นาที)

## อะไรอยู่ไฟล์ไหน

| อยากแก้            | ไฟล์                                                                           |
| ------------------ | ------------------------------------------------------------------------------ |
| หน้าแรก (about)    | `_pages/about.md`                                                              |
| CV                 | `assets/json/resume.json` (หน้า CV ดึงจากไฟล์นี้ ไม่ใช่ `_data/cv.yml`)        |
| News               | `_news/YYYYMMDD_ชื่อ.md` (วันที่ที่แสดงมาจาก `date:` ใน front matter)          |
| Blog post          | `_posts/YYYY-MM-DD-ชื่อ.md`                                                    |
| Projects           | `_projects/ชื่อ.md`                                                            |
| Publications       | `_bibliography/papers.bib`                                                     |
| รูป                | `assets/img/<โฟลเดอร์>/` (ระบบสร้างไฟล์ .webp หลายขนาดให้เอง)                  |
| บทความจาก Blogspot | ดึงอัตโนมัติจาก RSS ตอน build (ตั้งค่าที่ `external_sources` ใน `_config.yml`) |

ห้ามแก้ไฟล์ใน `_site/` เพราะเป็นผล build ในเครื่อง (ไม่ได้ขึ้น git)

## ปักหมุด (pin)

- **ข่าวบนหน้าแรก**: ใส่ `pinned: true` ใน front matter ของไฟล์ใน `_news/` ข่าวนั้นจะอยู่บนสุดของ News ในหน้าแรกพร้อมไอคอน 📌 (ในหน้า /news/ ยังเรียงตามวันที่ตามปกติ) เลิกปักหมุดก็ลบบรรทัดนั้นออก
- **post ในหน้า blog**: ใส่ `featured: true` ใน front matter ของ post จะขึ้นเป็นการ์ดปักหมุดด้านบนของหน้า /blog/
- **publication บนหน้าแรก**: ใส่ `selected={true}` ใน entry ของ `_bibliography/papers.bib`

## ข้อควรระวัง (bug ที่เคยเจอ)

- **ชื่อไฟล์ post** ต้องเป็น `YYYY-MM-DD-ชื่อ.md` (ใช้ `-` หลังวันที่ ไม่ใช่ `_`) ไม่งั้น post ไม่ขึ้น และ `date:` ใน front matter จะทับวันที่ในชื่อไฟล์ (ทั้งวันที่ที่แสดงและ URL)
- **post ที่ลงวันที่ล่วงหน้าจะยังไม่ขึ้นเว็บ** เพราะ Jekyll ข้าม post ที่วันที่ยังไม่ถึง และตอน build ใช้เวลา UTC (ช้ากว่าไทย 7 ชม.) ถ้า push ระหว่างเที่ยงคืนถึง 07:00 น. เวลาไทย post ที่ลงวันที่วันนั้นจะยังไม่ขึ้น ให้ใส่วันที่เมื่อวาน หรือกด Run workflow ใหม่หลัง 07:00 น.
- **รูป** ให้ใช้ include ของธีม:

  ```html
  <div class="row">
    <div class="col-sm mt-3 mt-md-0">
      {% include figure.liquid loading="eager" path="assets/img/โฟลเดอร์/รูป.jpg" title="คำอธิบายรูป" class="img-fluid rounded z-depth-1" %}
    </div>
  </div>
  ```

  ถ้าอยากให้รูปกว้างครึ่งหน้า ใช้ `<div class="row justify-content-center">` คู่กับ `<div class="col-sm-6 mt-3 mt-md-0">` และห้ามใช้ syntax ของ R Markdown อย่าง `![](pic/x.jpeg){width=50%}` หรือ `<center>` เพราะบนเว็บจะขึ้นเป็นข้อความดิบ

- **ขึ้นบรรทัดใหม่ด้วย `\` ท้ายบรรทัด** ใช้ได้เฉพาะเมื่อมีบรรทัดต่อในย่อหน้าเดียวกัน ห้ามใส่ `\` ท้าย bullet หรือท้ายบรรทัดสุดท้ายของย่อหน้า และห้ามมีช่องว่างหลัง `\` ไม่งั้นจะเห็น `\` โผล่บนเว็บ
- **ชื่อไฟล์/โฟลเดอร์รูปต้องตรงตัวพิมพ์เล็ก-ใหญ่** เช่น `GRF_wtAdvisor.jpg` กับ `grf_wtadvisor.jpg` ถือเป็นคนละไฟล์
- **`resume.json` ต้องเป็น JSON ที่ถูกต้อง** (ระวัง comma เกินหรือขาด) ถ้าพัง `npm run format:check` จะฟ้อง
- **อย่า push ไฟล์ทดสอบ** ถ้าอยากลองให้ใช้ Docker preview แทน ส่วนร่างที่ยังไม่อยากให้ขึ้นเว็บให้ใส่ `published: false` ใน front matter

## โพสต์ใน Blogspot แล้วเว็บไม่ขึ้น

บทความจาก Blogspot ถูกดึงตอน build เท่านั้น ถ้าไม่มีการ push ใหม่เว็บจะยังไม่แสดง ให้ไปที่ GitHub Actions → **Deploy site** → **Run workflow** (branch `main`)

## แก้ปัญหา

- **Prettier ❌**: รัน `npm run format` แล้ว commit + push ใหม่ (ดูว่าไฟล์ไหนผิดได้จาก artifact "HTML Diff" ในหน้า run ที่ fail)
- **Deploy site ❌**: เปิด log ของ step "Install and Build 🔧" ส่วนใหญ่เป็น Liquid error หรือ front matter (YAML) เขียนผิด
- **`fatal: Unable to create '.git/index.lock': File exists`**: เช็กว่าไม่มีคำสั่ง git อื่นรันค้างอยู่ แล้วลบด้วย `rm .git/index.lock`
- **เว็บยังเป็นของเก่า**: เช็กว่า push แล้วจริง (`git status` ต้องไม่ขึ้นว่า ahead) และ Deploy site ✅ แล้ว จากนั้นกด `Ctrl+Shift+R`

## อัปเกรด prettier (ทำเมื่ออยากอัปเดตเท่านั้น)

```bash
npm install --save-dev --save-exact prettier@latest @shopify/prettier-plugin-liquid@latest
npm run format
git add -A && git commit -m "chore: upgrade prettier" && git push
```

ต้อง commit `package.json`, `package-lock.json` และไฟล์ที่ถูก format ใหม่ไปพร้อมกัน เพราะ CI ติดตั้ง prettier ตาม `package-lock.json` (`npm ci`)

## ประวัติ

- 2026-10-02: ล็อกเวอร์ชัน prettier ไว้ที่ 3.9.9 (เดิม CI ติดตั้งเวอร์ชันล่าสุดทุกครั้ง แต่ในเครื่องเป็น 3.1.1 ทำให้ Prettier check fail วนไม่จบ) และให้ CI ใช้ `npm ci`
