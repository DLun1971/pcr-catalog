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
SHA: bcc20a483e6a410d6b983e45b1038c624bd10822
Message: Add 64 missing part numbers: R7 A-suffix chargers, Ion chargers/vehicle, R7 carry cases, screen protectors, replacement parts, EIDs, R5 PSU adaptors

## What Was Added in Last Session (64 items)
### R7 IMPRES Single-Unit Chargers (A-suffix, R7-specific)
PMPN4576A, PMPN4573A, PMPN4575A, PMPN4572A, PMPN4577A, PMPN4571A, PMPN4578A, PMPN4574A, PMPN4579A, PMPN4582A

### Ion Single-Unit Chargers
PMPN4512, PMPN4515, PMPN4510, PMPN4511, PMPN4609, PMPN4514, PMPN4641

### Ion Multi-Unit Chargers
PMPN4498, PMPN4516, PMPN4499, PMPN4517, PMPN4518, PMPN4521, PMPN4520, PMPN4642, AS000180A01

### Ion Vehicle Charger
PMPN4607, PS000514A01, HW003289A01

### Charger Replacement Parts / Power Cords (R7)
PS000242A01, 3087791G01, 3087791G04, 3087791G07, 3087791G10, 3087791G13, 3087791G16, 3087791G20, 3087791G22, CB000199A01, CB000805A01, AS000129A01, BR000272A01

### IMPRES Battery Management EIDs (R7)
HKVN4036, HKVN4037, HKVN4038, HKVN4039

### R7 Carry Cases
PMLN8299, PMLN8300, PMLN8301, PMLN8302, PMLN8303, PMLN8304

### R7 Screen Protectors
AY000808A01, AY000808A02, AY000808A03

### R7 Carry Misc / Replacement Belt Loops
HLN6602, PMLN6074, PMHN4429

### R7 Programming Cable
PMKN4265

### R5 Power Supply Adaptors
PS000576A05, PS000576A06, PS000576A07, PS000576A08, PS000576A09

## Next Task: Full PDF Comparison
Goal: fetch the Motorola PDF section by section and compare ALL part numbers against r7-data.js to find anything still missing for R7, Ion, R5, R7Ex.

Categories to audit:
- RSM / Remote Speaker Mics
- Wireless / Bluetooth
- Surveillance & Earpieces
- Headsets
- Batteries
- Chargers (done for known list — but PDF may have more)
- Carry Solutions
- Antennas
- Cables & Programming
- Screen Protectors / Misc

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
