import fs from 'node:fs'
import path from 'node:path'
import PDFDocument from 'pdfkit'

const outPath = path.resolve('public/Michael-Owusu-Resume.pdf')

const doc = new PDFDocument({
  size: 'A4',
  margins: { top: 48, bottom: 48, left: 48, right: 48 },
  info: {
    Title: 'Michael Owusu — Resume',
    Author: 'Michael Owusu',
  },
})

const stream = fs.createWriteStream(outPath)
doc.pipe(stream)

const ink = '#10141c'
const slate = '#3d4656'
const mist = '#6b7383'
const accent = '#0f766e'

function sectionTitle(text) {
  doc.moveDown(0.7)
  doc
    .fillColor(accent)
    .font('Helvetica-Bold')
    .fontSize(10)
    .text(text.toUpperCase(), { characterSpacing: 1.2 })
  doc
    .moveTo(doc.page.margins.left, doc.y + 4)
    .lineTo(doc.page.width - doc.page.margins.right, doc.y + 4)
    .strokeColor('#d5dae2')
    .lineWidth(1)
    .stroke()
  doc.moveDown(0.55)
  doc.fillColor(slate)
}

function jobHeader(org, period) {
  const left = doc.page.margins.left
  const right = doc.page.width - doc.page.margins.right
  const y = doc.y
  doc.fillColor(ink).font('Helvetica-Bold').fontSize(11).text(org, left, y, {
    width: right - left - 130,
  })
  doc
    .fillColor(mist)
    .font('Helvetica')
    .fontSize(9)
    .text(period, left, y, { width: right - left, align: 'right' })
  doc.moveDown(0.15)
}

function bullets(items) {
  doc.fillColor(slate).font('Helvetica').fontSize(10)
  for (const item of items) {
    doc.text(`•  ${item}`, {
      width: doc.page.width - doc.page.margins.left - doc.page.margins.right,
      paragraphGap: 2,
    })
  }
}

// Header
doc.fillColor(ink).font('Helvetica-Bold').fontSize(24).text('Michael Owusu')
doc.moveDown(0.15)
doc.fillColor(accent).font('Helvetica-Bold').fontSize(12).text('Frontend Developer')
doc.moveDown(0.3)
doc.fillColor(mist).font('Helvetica').fontSize(9.5)
doc.text('Accra, Ghana · Open to remote')
doc.text('owusumichael0573@gmail.com  ·  +233 50 657 4617')
doc.text('linkedin.com/in/michael-owusu-41b162296  ·  github.com/BankyGod')
doc.moveDown(0.45)
doc.fillColor(slate).font('Helvetica').fontSize(10)
doc.text(
  'Frontend developer focused on shipping clean, responsive web and mobile interfaces. Experienced with React and Flutter, with production apps live on Google Play. Final-year IT student at Ghana Communication Technology University.',
  { lineGap: 1.5 }
)

sectionTitle('Experience')

jobHeader('Greenbrain Technology', 'June 2026 — Present')
doc.fillColor(slate).font('Helvetica-Bold').fontSize(10).text('Frontend Developer')
doc.moveDown(0.15)
bullets([
  'Build and ship production frontend interfaces for web and mobile products.',
  'Collaborate with the team to deliver polished UI flows, API-connected screens, and Play Store releases.',
  'Contribute to products including Autobus and Nexus Asset Management.',
])

doc.moveDown(0.35)
jobHeader('St. Francis Xavier Hospital', 'Feb 2025 — Mar 2025')
doc.fillColor(slate).font('Helvetica-Bold').fontSize(10).text('IT Intern · Server Room')
doc.moveDown(0.15)
bullets([
  'Completed a one-month internship supporting hospital IT operations in the server room.',
  'Gained practical exposure to infrastructure, systems support, and real-world IT environments.',
])

sectionTitle('Projects')

jobHeader('Autobus', 'Frontend Developer · Flutter')
bullets([
  'Built the mobile app frontend for an AI-powered business automation platform for African enterprises.',
  'Implemented UI flows for onboarding, operations, and day-to-day business tasks; shipped on Google Play.',
])

doc.moveDown(0.35)
jobHeader('Nexus Asset Management', 'Frontend Developer · Flutter')
bullets([
  'Developed the Flutter frontend for a field-ready asset management app (dashboard, asset detail, modules, sign-in).',
  'Connected screens to backend APIs for live asset data, tracking, and operations; published on Google Play.',
])

sectionTitle('Education')
jobHeader('Ghana Communication Technology University', 'Expected 2026')
doc.fillColor(slate).font('Helvetica-Bold').fontSize(10).text('BSc Information Technology · Final-year student')

sectionTitle('Skills')
doc.fillColor(slate).font('Helvetica').fontSize(10)
doc.text(
  'Frontend: React, Vite, Tailwind CSS, JavaScript, HTML, CSS, Flutter, Dart, Responsive UI',
  { paragraphGap: 3 }
)
doc.text('Backend & data: Node.js, REST APIs, PostgreSQL, Auth flows', { paragraphGap: 3 })
doc.text('Tools & delivery: Git, Play Store deployment, Vercel / Netlify, Rapid prototyping')

doc.end()

await new Promise((resolve, reject) => {
  stream.on('finish', resolve)
  stream.on('error', reject)
})

console.log(`Wrote ${outPath}`)
