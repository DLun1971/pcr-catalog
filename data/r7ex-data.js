// r7ex-data.js — MOTOTRBO R7Ex Accessory Data
// Source: MOTOTRBO Professional Tier Accessory Catalog (Motorola Solutions)
// R7Ex is the ATEX/CSA intrinsically safe variant of the R7.
// Battery data: ATEX (NNTN8359) and CSA157 (NNTN8386) — PDF verified.
// Charger, RSM, headset, carry, antenna data: shared with R7/DP4000 EX per PDF.
// NOTE: R7Ex programming cable not listed in this PDF — stub pending verification.

const r7exCategories = [

  // ── CAT 1: BATTERIES ──────────────────────────────────────────────────────
  {
    id: 1,
    name: 'Batteries',
    items: [
      {
        desc: 'IMPRES Li-Ion 2075mAh IP67 ATEX/IECEx Battery',
        part: 'NNTN8359',
        impres: true,
        chem: 'Li-Ion',
        capacity_mah: 2075,
        dims_mm: '135 x 57 x 23',
        weight_g: 220,
        hazloc: 'ATEX',
        ip: 'IP67',
        op_temp: '-10\u00b0C to +50\u00b0C'
      },
      {
        desc: 'IMPRES Li-Ion 2075mAh IP67 CSA157 Battery',
        part: 'NNTN8386',
        impres: true,
        chem: 'Li-Ion',
        capacity_mah: 2075,
        dims_mm: '135 x 57 x 23',
        weight_g: 220,
        hazloc: 'CSA',
        ip: 'IP67',
        op_temp: '-10\u00b0C to +50\u00b0C'
      }
    ]
  },

  // ── CAT 2: CHARGERS ───────────────────────────────────────────────────────
  {
    id: 2,
    name: 'Chargers',
    items: [
      // IMPRES Single-Unit (PMPN4576A series — shared with R7, listed for DP4000 EX in PDF)
      { desc: 'IMPRES Single-Unit Charger, US/CAN Plug', part: 'PMPN4576A', impres: true, chem: 'Li-Ion, NiMh', pwr_src: '120 VAC',     dims_mm: '51 x 88 x 94', pockets: 1 },
      { desc: 'IMPRES Single-Unit Charger, ARG Plug',    part: 'PMPN4573A', impres: true, chem: 'Li-Ion, NiMh', pwr_src: '240 VAC',     dims_mm: '51 x 88 x 94', pockets: 1 },
      { desc: 'IMPRES Single-Unit Charger, BRZ Plug',    part: 'PMPN4575A', impres: true, chem: 'Li-Ion, NiMh', pwr_src: '100-240 VAC', dims_mm: '51 x 88 x 94', pockets: 1 },
      { desc: 'IMPRES Single-Unit Charger, UK Plug',     part: 'PMPN4572A', impres: true, chem: 'Li-Ion, NiMh', pwr_src: '240 VAC',     dims_mm: '51 x 88 x 94', pockets: 1 },
      { desc: 'IMPRES Single-Unit Charger, EURO Plug',   part: 'PMPN4577A', impres: true, chem: 'Li-Ion, NiMh', pwr_src: '240 VAC',     dims_mm: '51 x 88 x 94', pockets: 1 },
      { desc: 'IMPRES Single-Unit Charger, AU/NZ Plug',  part: 'PMPN4571A', impres: true, chem: 'Li-Ion, NiMh', pwr_src: '240 VAC',     dims_mm: '51 x 88 x 94', pockets: 1 },
      { desc: 'IMPRES Single-Unit Charger, JAP Plug',    part: 'PMPN4578A', impres: true, chem: 'Li-Ion, NiMh', pwr_src: '100-240 VAC', dims_mm: '51 x 88 x 94', pockets: 1 },
      { desc: 'IMPRES Single-Unit Charger, KOR Plug',    part: 'PMPN4574A', impres: true, chem: 'Li-Ion, NiMh', pwr_src: '240 VAC',     dims_mm: '51 x 88 x 94', pockets: 1 },
      { desc: 'IMPRES Single-Unit Charger, CHN Plug',    part: 'PMPN4579A', impres: true, chem: 'Li-Ion, NiMh', pwr_src: '240 VAC',     dims_mm: '51 x 88 x 94', pockets: 1 },
      { desc: 'IMPRES Single-Unit Charger, INDIA Plug',  part: 'PMPN4582A', impres: true, chem: 'Li-Ion, NiMh', pwr_src: '100-240 VAC', dims_mm: '51 x 88 x 94', pockets: 1 },
      // IMPRES 2 Multi-Unit (PMPN4284 series — listed for DP4000 EX in PDF)
      { desc: 'IMPRES 2 Multi-Unit Fast Charger, US/CAN Plug', part: 'PMPN4284', impres: true, chem: 'Li-Ion, NiMh', pwr_src: '100-240 VAC', dims_mm: '153 x 445 x 292', pockets: 6 },
      { desc: 'IMPRES 2 Multi-Unit Fast Charger, UK Plug',     part: 'PMPN4290', impres: true, chem: 'Li-Ion, NiMh', pwr_src: '100-240 VAC', dims_mm: '153 x 445 x 292', pockets: 6 },
      { desc: 'IMPRES 2 Multi-Unit Fast Charger, EURO Plug',   part: 'PMPN4289', impres: true, chem: 'Li-Ion, NiMh', pwr_src: '100-240 VAC', dims_mm: '153 x 445 x 292', pockets: 6 },
      { desc: 'IMPRES 2 Multi-Unit Fast Charger, AU/NZ Plug',  part: 'PMPN4293', impres: true, chem: 'Li-Ion, NiMh', pwr_src: '100-240 VAC', dims_mm: '153 x 445 x 292', pockets: 6 },
      { desc: 'IMPRES 2 Multi-Unit Fast Charger, ARG Plug',    part: 'PMPN4291', impres: true, chem: 'Li-Ion, NiMh', pwr_src: '100-240 VAC', dims_mm: '153 x 445 x 292', pockets: 6 },
      { desc: 'IMPRES 2 Multi-Unit Fast Charger, BZL Plug',    part: 'PMPN4292', impres: true, chem: 'Li-Ion, NiMh', pwr_src: '100-240 VAC', dims_mm: '153 x 445 x 292', pockets: 6 },
      { desc: 'IMPRES 2 Multi-Unit Fast Charger, JAP Plug',    part: 'PMPN4295', impres: true, chem: 'Li-Ion, NiMh', pwr_src: '100-240 VAC', dims_mm: '153 x 445 x 292', pockets: 6 },
      { desc: 'IMPRES 2 Multi-Unit Fast Charger, KOR Plug',    part: 'PMPN4294', impres: true, chem: 'Li-Ion, NiMh', pwr_src: '100-240 VAC', dims_mm: '153 x 445 x 292', pockets: 6 },
      { desc: 'IMPRES 2 Multi-Unit Fast Charger, CHN Plug',    part: 'PMPN4296', impres: true, chem: 'Li-Ion, NiMh', pwr_src: '100-240 VAC', dims_mm: '153 x 445 x 292', pockets: 6 },
      { desc: 'IMPRES 2 Multi-Unit Fast Charger, TW Plug',     part: 'PMPN4462', impres: true, chem: 'Li-Ion, NiMh', pwr_src: '100-240 VAC', dims_mm: '153 x 445 x 292', pockets: 6 },
      // Vehicle
      { desc: 'IMPRES Single-Unit Rapid Rate Vehicular Charger, Heavy-Duty Permanent Mount', part: 'NNTN7616', impres: true, chem: 'Li-Ion, NiMh', pwr_src: '12 VDC (hardwire)', dims_mm: '200 x 83 x 97', pockets: 1 }
    ]
  },

  // ── CAT 3: RSM / AUDIO ────────────────────────────────────────────────────
  {
    id: 3,
    name: 'RSM/Audio',
    items: [
      // ATEX-rated RSMs from PDF (PMMN4094, PMMN4110)
      {
        desc: 'IMPRES ATEX Active Noise-Canceling Remote Speaker Microphone with Large Front PTT and Side PTT, IP67',
        part: 'PMMN4094',
        impres: true,
        intel_audio: true,
        ai_noise: false,
        windporting: false,
        noise_cancel: true,
        full_duplex: false,
        vol_ctrl: '',
        prog_btn: '1 orange programmable',
        audio_jack: true,
        ip: 'IP67',
        hazloc: 'ATEX',
        dims_mm: '68 x 94 x 29'
      },
      {
        desc: 'IMPRES ATEX Omni Remote Speaker Microphone with Large Front PTT and Side PTT, IP67',
        part: 'PMMN4110',
        impres: true,
        intel_audio: true,
        ai_noise: false,
        windporting: true,
        noise_cancel: false,
        full_duplex: false,
        vol_ctrl: '',
        prog_btn: '1 orange programmable',
        audio_jack: true,
        ip: 'IP67',
        hazloc: 'ATEX',
        dims_mm: '68 x 94 x 29'
      }
    ]
  },

  // ── CAT 4: SURVEILLANCE / EARPIECES ──────────────────────────────────────
  {
    id: 4,
    name: 'Surveillance/Earpieces',
    items: [
      // Standard surveillance kits compatible with DP4000 EX per PDF
      { desc: 'IMPRES 2-Wire Surveillance Kit with Translucent Tube, Black', part: 'PMLN6129', impres: true, intel_audio: true, ai_noise: false, ear_type: 'Clear rubber eartip', mic_type: '', full_duplex: false, hazloc: 'UL' },
      { desc: 'IMPRES 2-Wire Surveillance Kit with Translucent Tube, Beige', part: 'PMLN6130', impres: true, intel_audio: true, ai_noise: false, ear_type: 'Clear rubber eartip', mic_type: '', full_duplex: false, hazloc: 'UL' },
      { desc: 'IMPRES 3-Wire Surveillance Kit with Translucent Tube, Black', part: 'PMLN6123', impres: true, intel_audio: true, ai_noise: false, ear_type: 'Clear rubber eartip', mic_type: '', full_duplex: false, hazloc: 'UL' },
      { desc: 'IMPRES 3-Wire Surveillance Kit with Translucent Tube, Beige', part: 'PMLN6124', impres: true, intel_audio: true, ai_noise: false, ear_type: 'Clear rubber eartip', mic_type: '', full_duplex: false, hazloc: 'UL' },
      { desc: '1-Wire Receive-Only Earpiece, Black', part: 'PMLN6125', impres: true, intel_audio: false, ai_noise: false, ear_type: 'Earpiece', mic_type: '', full_duplex: false, hazloc: 'UL' },
      { desc: '1-Wire Receive-Only Earpiece, Beige', part: 'PMLN6126', impres: true, intel_audio: false, ai_noise: false, ear_type: 'Earpiece', mic_type: '', full_duplex: false, hazloc: 'UL' },
      { desc: '1-Wire Surveillance Kit with Translucent Tube, Black', part: 'NNTN8459', impres: false, intel_audio: false, ai_noise: false, ear_type: 'Clear rubber eartip', mic_type: '', full_duplex: false, hazloc: 'UL' },
      // ATEX translucent tube earpiece for PMMN4094/4110
      { desc: 'Translucent Tube (RX Only) for PMMN4094 and PMMN4110', part: 'PMLN7188', impres: false, intel_audio: false, ai_noise: false, ear_type: 'Clear rubber eartip', mic_type: '', full_duplex: false, hazloc: 'ATEX' }
    ]
  },

  // ── CAT 5: HEADSETS ───────────────────────────────────────────────────────
  {
    id: 5,
    name: 'Headsets',
    items: [
      // ATEX heavy duty headsets (DP4000 EX Series, PDF p.47-48)
      { desc: 'Heavy Duty Headset with Over-The-Head Headband and Boom Microphone (ATEX)',                                    part: 'PMLN6087', impres: false, headset_type: 'Over-the-head',    ear_style: 'Dual-ear', nrr_db: 33, mic_type: 'Boom', hazloc: 'ATEX' },
      { desc: 'Heavy Duty Headset with Helmet Attachment and Boom Microphone (ATEX)',                                         part: 'PMLN6092', impres: false, headset_type: 'Helmet attached',  ear_style: 'Dual-ear', nrr_db: 32, mic_type: 'Boom', hazloc: 'ATEX' },
      { desc: 'Twin Cup Heavy Duty Headset with Helmet Attachment, Boom Microphone and Extra High-Attenuating Twin Shells (ATEX)', part: 'PMLN6333', impres: false, headset_type: 'Helmet attached', ear_style: 'Dual-ear', nrr_db: 33, mic_type: 'Boom', hazloc: 'ATEX' },
      { desc: 'Tactical Heavy Duty Headset with Helmet Attachment, Boom Microphone and Volume Control (ATEX)',                part: 'PMLN6089', impres: false, headset_type: 'Helmet attached',  ear_style: 'Dual-ear', nrr_db: 31, mic_type: 'Boom', hazloc: 'ATEX' },
      { desc: 'Tactical Heavy Duty Headset with Neck Band, Boom Microphone and Volume Control (ATEX)',                        part: 'PMLN7535', impres: false, headset_type: 'Over-the-head',    ear_style: 'Dual-ear', nrr_db: 33, mic_type: 'Boom', hazloc: 'ATEX' },
      { desc: 'HC-1 Helmet-COM Bone Conduction Microphone with Single Speaker (ATEX)',                                        part: 'RMN5123',  impres: false, headset_type: 'Helmet attached',  ear_style: 'Dual-ear', nrr_db: null, mic_type: 'Bone conduction', hazloc: 'ATEX' },
      { desc: 'HC-2 Helmet-COM Bone Conduction Microphone with Dual Speaker (ATEX)',                                          part: 'GMMN4580', impres: false, headset_type: 'Helmet attached',  ear_style: 'Dual-ear', nrr_db: null, mic_type: 'Bone conduction', hazloc: 'ATEX' }
    ]
  },

  // ── CAT 6: CARRY ──────────────────────────────────────────────────────────
  // ATEX-specific carry cases from PDF carry solutions section (DP4000 EX)
  {
    id: 6,
    name: 'Carry',
    items: [
      { desc: 'Hard Leather Case with 2.5in Swivel Belt Loop (Non-Display ATEX)',  part: 'PMLN6096', material: 'Hard leather',     belt_sz: '2.5', swivel: true,  display: false, d_rings: true },
      { desc: 'Hard Leather Case with 2.5in Swivel Belt Loop (Display ATEX)',      part: 'PMLN6097', material: 'Hard leather',     belt_sz: '2.5', swivel: true,  display: true,  d_rings: true },
      { desc: 'Soft Leather Case with 2.5in Swivel Belt Loop (Non-Display ATEX)',  part: 'PMLN6098', material: 'Soft leather',     belt_sz: '2.5', swivel: true,  display: false, d_rings: true },
      { desc: 'Soft Leather Case with 2.5in Swivel Belt Loop (Display ATEX)',      part: 'PMLN6099', material: 'Soft leather',     belt_sz: '2.5', swivel: true,  display: true,  d_rings: true },
      { desc: '2.5in Belt Clip for ATEX Models',                                   part: 'PMLN6086', material: 'Plastic',          belt_sz: '2.5', swivel: false, display: false, d_rings: false },
      { desc: 'Heavy-Duty Belt Clip',                                              part: 'PMLN7128', material: 'Plastic',          belt_sz: '',    swivel: false, display: false, d_rings: false },
      { desc: 'Swivel Carry Holster',                                              part: 'PMLN7190', material: 'Plastic',          belt_sz: '',    swivel: true,  display: true,  d_rings: false },
      { desc: 'Carry Holster with Belt Clip',                                      part: 'PMLN7559', material: 'Plastic',          belt_sz: '',    swivel: false, display: false, d_rings: false },
      { desc: 'Waterproof Bag with Large Strap',                                   part: 'HLN9985',  material: '',                belt_sz: '',    swivel: false, display: false, d_rings: false },
      { desc: 'Adjustable Nylon Carrying Strap',                                   part: 'NTN5243',  material: 'Nylon',           belt_sz: '',    swivel: false, display: false, d_rings: false },
      { desc: 'Leather Radio Strap',                                               part: 'RLN6486',  material: 'Leather',         belt_sz: '',    swivel: false, display: false, d_rings: false },
      { desc: 'Leather Radio Strap \u2013 XL',                                     part: 'RLN6487',  material: 'Leather',         belt_sz: '',    swivel: false, display: false, d_rings: false },
      { desc: 'Anti-Sway Strap for Leather Radio Straps',                          part: 'RLN6488',  material: 'Leather',         belt_sz: '',    swivel: false, display: false, d_rings: false }
    ]
  },

  // ── CAT 7: ANTENNAS ───────────────────────────────────────────────────────
  // ATEX-specific antennas from PDF (DP4000 EX Series section)
  {
    id: 7,
    name: 'Antennas',
    items: [
      { desc: 'UHF Folded Monopole Whip Antenna for ATEX Radio',  part: 'PMAE4081', band: 'UHF', freq_mhz: '403-433', len_cm: null, ant_type: 'Whip' },
      { desc: 'UHF Folded Monopole Whip Antenna for ATEX Radio',  part: 'PMAE4082', band: 'UHF', freq_mhz: '430-470', len_cm: null, ant_type: 'Whip' },
      { desc: 'UHF Stubby Antenna for ATEX Radio',                part: 'PMAE4083', band: 'UHF', freq_mhz: '403-433', len_cm: null, ant_type: 'Stubby' },
      { desc: 'UHF Stubby Antenna for ATEX Radio',                part: 'PMAE4084', band: 'UHF', freq_mhz: '430-470', len_cm: null, ant_type: 'Stubby' },
      { desc: 'UHF Wideband Whip Antenna for ATEX Radio',         part: 'PMAE4085', band: 'UHF', freq_mhz: '403-470', len_cm: null, ant_type: 'Whip' },
      { desc: 'VHF/GPS Helical Whip Antenna for ATEX Radio',      part: 'PMAD4126', band: 'VHF', freq_mhz: '136-147', len_cm: null, ant_type: 'Whip' },
      { desc: 'VHF/GPS Helical Whip Antenna for ATEX Radio',      part: 'PMAD4127', band: 'VHF', freq_mhz: '147-160', len_cm: null, ant_type: 'Whip' },
      { desc: 'VHF/GPS Helical Whip Antenna for ATEX Radio',      part: 'PMAD4128', band: 'VHF', freq_mhz: '160-174', len_cm: null, ant_type: 'Whip' },
      { desc: 'VHF Stubby Antenna for ATEX Radio',                part: 'PMAD4129', band: 'VHF', freq_mhz: '136-147', len_cm: 11,   ant_type: 'Stubby' },
      { desc: 'VHF Stubby Antenna for ATEX Radio',                part: 'PMAD4130', band: 'VHF', freq_mhz: '147-160', len_cm: 11,   ant_type: 'Stubby' },
      { desc: 'VHF Stubby Antenna for ATEX Radio',                part: 'PMAD4131', band: 'VHF', freq_mhz: '160-174', len_cm: 11,   ant_type: 'Stubby' },
      { desc: 'VHF Wideband Antenna for ATEX Radio',              part: 'PMAD4132', band: 'VHF', freq_mhz: '136-174', len_cm: null, ant_type: 'Whip' }
    ]
  },

  // ── CAT 8: CABLES ─────────────────────────────────────────────────────────
  // No R7Ex-specific cable listed in this PDF — stub pending verification
  {
    id: 8,
    name: 'Cables',
    items: []
  },

  // ── CAT 9: SCREEN PROTECTORS ──────────────────────────────────────────────
  // No R7Ex screen protector listed in this PDF
  {
    id: 9,
    name: 'Screen Protectors',
    items: []
  },

  // ── CAT 10: PROGRAMMING CABLES ────────────────────────────────────────────
  // No R7Ex-specific programming cable listed in this PDF — stub pending verification
  {
    id: 10,
    name: 'Programming Cables',
    items: []
  },

  // ── CAT 11: IMPRES BATTERY MGMT TOOLS ─────────────────────────────────────
  {
    id: 11,
    name: 'IMPRES Battery Mgmt Tools',
    items: [
      { desc: 'IMPRES Battery Fleet Management Entitlement ID (EID), NA/CAN', part: 'HKVN4036' },
      { desc: 'IMPRES Battery Fleet Management Entitlement ID (EID), EMEA',   part: 'HKVN4037' },
      { desc: 'IMPRES Battery Fleet Management Entitlement ID (EID), LA',     part: 'HKVN4038' },
      { desc: 'IMPRES Battery Fleet Management Entitlement ID (EID), Asia',   part: 'HKVN4039' }
    ]
  },

  // ── CAT 12: BLUETOOTH / OPS CRITICAL WIRELESS ─────────────────────────────
  // ATEX radios: no OCW accessories listed in this PDF for DP4000 EX / R7Ex
  {
    id: 12,
    name: 'Bluetooth/Ops Critical Wireless',
    items: []
  }

];

// Wire into global RADIOS_DATA
if (typeof window !== 'undefined') {
  window.RADIOS_DATA = window.RADIOS_DATA || {};
  window.RADIOS_DATA['r7ex'] = r7exCategories;
}
