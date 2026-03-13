# Session Context — Motorola Accessory Catalog

## Repos
- `DLun1971/Motorola-Solutions-Professional-Commercial-Catalog` — main catalog (r7.html, r7-data.js)
- `DLun1971/shared` — catalog.js, styles.css, report-tray.js

## Radios in Catalog
R7, Ion, R5, R7Ex (key names in r7-data.js: `r7`, `ion`, `r5`, `r7ex`)

## Reference PDF
https://www.motorolasolutions.com/content/dam/msi/docs/en_xp/products/mototrbo/mototrbo-professional-tier-accessory-catalog.pdf

## How to Bootstrap a New Session
1. Fetch r7-data.js via GitHub API using the JS tool in browser tab
2. Run part number comparison against the list below
3. Commit changes using GitHub API PUT (get SHA first)

## Last Commit
SHA: c94a7c0ba1cd18556151e23a23efc6d29dfbae52
Message: Add 11 missing part numbers: R7 800/900 antennas, Ion carry cases/belt loops, Ion 800/900 antenna, Ion UL programming cable, R5 IMPRES charger alt

## What Was Added in Last Session (11 items)
### R7 800/900 MHz Antennas
PMAF4011, PMAF4012, PMAF4009, PMAF4010

### Ion Carry Cases & Belt Loops
PMLN8126, PMLN8127, PMLN5407, PMLN5409

### Ion 800/900 MHz Antenna
AN000415A01

### Ion Programming Cable
PMKN4230

### R5 IMPRES Single-Unit Charger (alt variant)
NNTN8117ASP01

## PDF Comparison Status: COMPLETE ✅
All part numbers from the Motorola Professional-Tier Accessory PDF have been compared
against r7-data.js for R7, Ion, R5, and R7Ex. As of this session, the catalog is
fully in sync with the PDF (445 + 11 = 456 part numbers total).

## Data File Structure Notes
- File: PCR/r7-data.js in Motorola-Solutions-Professional-Commercial-Catalog repo
- Top-level: const RADIOS_DATA = { r7: {...}, r5: {...}, ion: {...}, r7ex: {...} }
- Each radio has: categories: { rsm, bt, surv, headsets, batteries, chargers, carry, antennas, cables }
- Each category has: label, icon, cols[], sections[]
- Each section has: title, items[]
- Each item: { img: null, pn: 'XXXX', desc: '...', note: '...', checks: {...} }
- Charger checks keys: impres, pockets, voltage, chem
- Carry checks keys: style, material, belt_sz, swivel
- Antenna checks keys: band, freq_mhz, ant_type, len_cm

## GitHub API Usage (via browser JS tool)
```js
// Fetch file
const r = await fetch('https://api.github.com/repos/DLun1971/Motorola-Solutions-Professional-Commercial-Catalog/contents/PCR/r7-data.js', {
  headers: { 'Authorization': 'token TOKEN', 'Accept': 'application/vnd.github.v3+json' }
});
const d = await r.json();
const content = atob(d.content);
window._r7data = { sha: d.sha, content };

// Commit file
await fetch('https://api.github.com/repos/DLun1971/Motorola-Solutions-Professional-Commercial-Catalog/contents/PCR/r7-data.js', {
  method: 'PUT',
  headers: { 'Authorization': 'token TOKEN', 'Content-Type': 'application/json' },
  body: JSON.stringify({ message: 'commit msg', content: btoa(unescape(encodeURIComponent(newContent))), sha: currentSha })
});
```

## Possible Next Tasks
- Add images (img fields are currently null for all items)
- Add R7Ex accessories (ATEX/IECEx) if not already complete
- UI/UX improvements to r7.html
- Re-audit if Motorola releases a new version of the PDF
