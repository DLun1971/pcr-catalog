# PCR Catalog — Schema Reference

> **Rule:** All schema fields must be grounded in actual PDF content (Motorola Professional Tier Accessory Catalog). No assumptions or extrapolation. If PDF has not been read, mark schema as PENDING.

---

## Radio Inventory (Professional Catalog)

| Tier | Radios |
|------|--------|
| Professional Portable | R7, R7Ex, Ion, R5 |
| XPR Portable | XPR 7000 (7350/7550/7580/7580e), XPR 6000 (6350/6550/6580), SL Series (7000/7000e/3500e/3500Max), XPR 3000 (3000/3000e) |
| DP ATEX | DP 4400e, DP 4600e, DP 4800e |
| XPR Mobile | XPR 5550e, XPR 4000, XPR 2500 |

---

## Category List

| # | Category |
|---|----------|
| 1 | Batteries |
| 2 | Chargers |
| 3 | RSM / Audio |
| 4 | Surveillance / Earpieces |
| 5 | Headsets |
| 6 | Carry |
| 7 | Antennas |
| 8 | Cables |
| 9 | Screen Protectors |
| 10 | Programming Cables |
| 11 | IMPRES Battery Management Tools |
| 12 | Bluetooth / Ops Critical Wireless |

---

## Schemas

### 1 — Batteries
| Field | Type | Notes |
|-------|------|-------|
| desc | string | Product name |
| part | string | Part number |
| impres | boolean | IMPRES-capable |
| chem | string | Battery chemistry (e.g. Li-Ion) |
| capacity_mah | number | Capacity in mAh |
| dims_mm | string | Dimensions in mm |
| weight_g | number | Weight in grams |
| hazloc | string | HazLoc rating (e.g. UL, ATEX) |
| ip | string | IP rating (e.g. IP68) |
| op_temp | string | Operating temperature range |

### 2 — Chargers
| Field | Type | Notes |
|-------|------|-------|
| desc | string | Product name |
| part | string | Part number |
| impres | boolean | IMPRES-capable |
| chem | string | Compatible chemistry |
| pwr_src | string | Power source (e.g. AC, DC) |
| dims_mm | string | Dimensions in mm |
| pockets | number | Number of charging pockets |

### 3 — RSM / Audio
| Field | Type | Notes |
|-------|------|-------|
| desc | string | Product name |
| part | string | Part number |
| impres | boolean | |
| intel_audio | boolean | Intelligent Audio |
| ai_noise | boolean | AI noise cancellation |
| windporting | boolean | Windporting feature |
| noise_cancel | boolean | Noise canceling mic |
| full_duplex | boolean | Full duplex capable |
| vol_ctrl | boolean | Volume control |
| prog_btn | string | Programmable button description |
| audio_jack | string | Audio jack type |
| ip | string | IP rating |
| hazloc | boolean | HazLoc rated |
| dims_mm | string | Dimensions |

### 4 — Surveillance / Earpieces
| Field | Type | Notes |
|-------|------|-------|
| desc | string | Product name |
| part | string | Part number |
| impres | boolean | |
| intel_audio | boolean | |
| ai_noise | boolean | |
| ear_type | string | e.g. custom, standard |
| mic_type | string | Microphone type |
| full_duplex | boolean | |
| hazloc | boolean | |

### 5 — Headsets
| Field | Type | Notes |
|-------|------|-------|
| desc | string | Product name |
| part | string | Part number |
| impres | boolean | |
| headset_type | string | e.g. lightweight, heavy duty |
| ear_style | string | over-ear, behind-neck, etc. |
| nrr_db | number | Noise Reduction Rating in dB |
| mic_type | string | Microphone type |
| hazloc | boolean | |

### 6 — Carry
| Field | Type | Notes |
|-------|------|-------|
| desc | string | Product name |
| part | string | Part number |
| material | string | e.g. plastic, leather |
| belt_sz | string | Belt loop/clip size in inches |
| swivel | boolean | Swivel capable |
| display | boolean | Has display window |
| d_rings | boolean | Has D-rings |

### 7 — Antennas
| Field | Type | Notes |
|-------|------|-------|
| desc | string | Product name |
| part | string | Part number |
| band | string | UHF / VHF / 800-900 MHz |
| freq_mhz | string | Frequency range in MHz |
| len_cm | number | Length in cm |
| ant_type | string | e.g. whip, helical |

### 8 — Cables
| Field | Type | Notes |
|-------|------|-------|
| desc | string | Product name |
| part | string | Part number |

### 9 — Screen Protectors
| Field | Type | Notes |
|-------|------|-------|
| desc | string | Product name |
| part | string | Part number |

### 10 — Programming Cables
| Field | Type | Notes |
|-------|------|-------|
| desc | string | Product name |
| part | string | Part number |

### 11 — IMPRES Battery Management Tools
| Field | Type | Notes |
|-------|------|-------|
| desc | string | Product name |
| part | string | Part number |

### 12 — Bluetooth / Ops Critical Wireless
| Field | Type | Notes |
|-------|------|-------|
| desc | string | Product name |
| part | string | Part number |
| ear_type | string | Earpiece type |
| mic_type | string | Microphone type |
| ptt | boolean | Has PTT |
| talk_time_hr | number | Talk time in hours (5/5/90 duty cycle) |
| charge_time_hr | number | Charge time in hours |
| weight_g | number | Weight in grams |

---

*Source: Motorola Professional Tier Accessory Catalog PDF*
*Schema rule enforced: fields must be grounded in PDF — no assumptions*
