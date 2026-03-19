// r7-data.js — MOTOTRBO R7 Accessory Data
// Source: MOTOTRBO Professional Tier Accessory Catalog (Motorola Solutions)
// All part numbers PDF-verified. Do not extrapolate or add unverified items.

const r7Categories = [

  // ── CAT 1: BATTERIES ──────────────────────────────────────────────────────
  {
    id: 1,
    name: 'Batteries',
    items: [
      {
        desc: 'IMPRES Li-Ion 2200mAh IP68 Slim Battery',
        part: 'PMNN4807',
        impres: true,
        chem: 'Li-Ion',
        capacity_mah: 2200,
        dims_mm: '116 x 55 x 17',
        weight_g: 118,
        hazloc: '',
        ip: 'IP66, IP68',
        op_temp: '-20\u00b0C to +60\u00b0C'
      },
      {
        desc: 'IMPRES Li-Ion 2850mAh IP68 Slim Battery',
        part: 'PMNN4809',
        impres: true,
        chem: 'Li-Ion',
        capacity_mah: 2850,
        dims_mm: '116 x 55 x 17',
        weight_g: 135,
        hazloc: '',
        ip: 'IP66, IP68',
        op_temp: '-20\u00b0C to +60\u00b0C'
      },
      {
        desc: 'IMPRES Li-Ion 3200mAh IP68 TIA4950 Battery',
        part: 'PMNN4810',
        impres: true,
        chem: 'Li-Ion',
        capacity_mah: 3200,
        dims_mm: '116 x 55 x 23',
        weight_g: 168,
        hazloc: 'UL',
        ip: 'IP66, IP68',
        op_temp: '-20\u00b0C to +60\u00b0C'
      },
      {
        desc: 'IMPRES Li-Ion 3200mAh IP68 Battery',
        part: 'PMNN4603',
        impres: true,
        chem: 'Li-Ion',
        capacity_mah: 3200,
        dims_mm: '116 x 55 x 23',
        weight_g: 168,
        hazloc: '',
        ip: 'IP66, IP68',
        op_temp: '-20\u00b0C to +60\u00b0C'
      }
    ]
  },

  // ── CAT 2: CHARGERS ───────────────────────────────────────────────────────
  {
    id: 2,
    name: 'Chargers',
    items: [
      // IMPRES Single-Unit (PMPN4576A series)
      { desc: 'IMPRES Single-Unit Charger, US/CAN Plug', part: 'PMPN4576A', impres: true, chem: 'Li-Ion, NiMh', pwr_src: '120 VAC', dims_mm: '51 x 88 x 94', pockets: 1 },

      // ── SUC Replacement Power Supplies ───────────────────────────────────
      { desc: 'Replacement Power Supply for IMPRES Single-Unit Charger, US/CAN Plug', part: 'PS000577A01', impres: false, chem: null, pwr_src: '120 VAC', dims_mm: null, pockets: null },
      { desc: 'Replacement Power Supply for IMPRES Single-Unit Charger, EU Plug', part: 'PS000576A02', impres: false, chem: null, pwr_src: '100-240 VAC', dims_mm: null, pockets: null },
      { desc: 'Replacement Power Supply for IMPRES Single-Unit Charger, UK/HK Plug', part: 'PS000576A03', impres: false, chem: null, pwr_src: '100-240 VAC', dims_mm: null, pockets: null },
      { desc: 'Replacement Power Supply for IMPRES Single-Unit Charger, AUS/NZ Plug', part: 'PS000576A04', impres: false, chem: null, pwr_src: null, dims_mm: null, pockets: null },
      { desc: 'Replacement Power Supply for IMPRES Single-Unit Charger, ARG Plug', part: 'PS000576A05', impres: false, chem: null, pwr_src: null, dims_mm: null, pockets: null },
      { desc: 'Replacement Power Supply for IMPRES Single-Unit Charger, CHN Plug', part: 'PS000576A06', impres: false, chem: null, pwr_src: null, dims_mm: null, pockets: null },
      { desc: 'Replacement Power Supply for IMPRES Single-Unit Charger, KOR Plug', part: 'PS000576A07', impres: false, chem: null, pwr_src: null, dims_mm: null, pockets: null },
      { desc: 'Replacement Power Supply for IMPRES Single-Unit Charger, BRZ Plug', part: 'PS000576A08', impres: false, chem: null, pwr_src: '100-240 VAC', dims_mm: null, pockets: null },
      { desc: 'Replacement Power Supply for IMPRES Single-Unit Charger, India Plug', part: 'PS000576A09', impres: false, chem: null, pwr_src: '100-240 VAC', dims_mm: null, pockets: null },

      // ── MUC Replacement Power Supply + Cords ─────────────────────────────
      { desc: 'Replacement Power Supply for IMPRES 2 Multi-Unit Charger, 100-240 VAC (no cord)', part: 'PS000242A01', impres: false, chem: null, pwr_src: '100-240 VAC', dims_mm: null, pockets: null },
      { desc: 'Power Cord for IMPRES 2 Multi-Unit Charger, US/CAN Plug', part: '3087791G01', impres: false, chem: null, pwr_src: null, dims_mm: null, pockets: null },
      { desc: 'Power Cord for IMPRES 2 Multi-Unit Charger, EURO Plug', part: '3087791G04', impres: false, chem: null, pwr_src: null, dims_mm: null, pockets: null },
      { desc: 'Power Cord for IMPRES 2 Multi-Unit Charger, UK Plug', part: '3087791G07', impres: false, chem: null, pwr_src: null, dims_mm: null, pockets: null },
      { desc: 'Power Cord for IMPRES 2 Multi-Unit Charger, AUS/NZ Plug', part: '3087791G10', impres: false, chem: null, pwr_src: null, dims_mm: null, pockets: null },
      { desc: 'Power Cord for IMPRES 2 Multi-Unit Charger, ARG Plug', part: '3087791G13', impres: false, chem: null, pwr_src: null, dims_mm: null, pockets: null },
      { desc: 'Power Cord for IMPRES 2 Multi-Unit Charger, KOR Plug', part: '3087791G16', impres: false, chem: null, pwr_src: null, dims_mm: null, pockets: null },
      { desc: 'Power Cord for IMPRES 2 Multi-Unit Charger, JAP Plug', part: '3087791G20', impres: false, chem: null, pwr_src: null, dims_mm: null, pockets: null },
      { desc: 'Power Cord for IMPRES 2 Multi-Unit Charger, BZL Plug', part: '3087791G22', impres: false, chem: null, pwr_src: null, dims_mm: null, pockets: null },
      { desc: 'Power Cord for IMPRES 2 Multi-Unit Charger, CHN Plug', part: 'CB000199A01', impres: false, chem: null, pwr_src: null, dims_mm: null, pockets: null },
      { desc: 'Power Cord for IMPRES 2 Multi-Unit Charger, TW Plug', part: 'CB000805A01', impres: false, chem: null, pwr_src: null, dims_mm: null, pockets: null },

      // ── MUC Accessories ──────────────────────────────────────────────────
      { desc: 'Interchangeable Charging Pocket for IMPRES 2 Multi-Unit Charger', part: 'AS000129A01', impres: false, chem: null, pwr_src: null, dims_mm: null, pockets: null },
      { desc: 'Wall Mount Bracket for IMPRES 2 Multi-Unit Charger', part: 'BR000272A01', impres: false, chem: null, pwr_src: null, dims_mm: null, pockets: null },

      // ── IMPRES 2 Vehicle Charging Cradle ─────────────────────────────────
      { desc: 'IMPRES 2 Charging Cradle with Mounting Kit', part: 'PMPN4607', impres: true, chem: 'Li-Ion', pwr_src: '12 VDC cigarette lighter', dims_mm: '75 x 45 x 133', pockets: 1 },
      { desc: 'IMPRES Single-Unit Charger, ARG Plug',    part: 'PMPN4573A', impres: true, chem: 'Li-Ion, NiMh', pwr_src: '240 VAC', dims_mm: '51 x 88 x 94', pockets: 1 },
      { desc: 'IMPRES Single-Unit Charger, BRZ Plug',    part: 'PMPN4575A', impres: true, chem: 'Li-Ion, NiMh', pwr_src: '100-240 VAC', dims_mm: '51 x 88 x 94', pockets: 1 },
      { desc: 'IMPRES Single-Unit Charger, UK Plug',     part: 'PMPN4572A', impres: true, chem: 'Li-Ion, NiMh', pwr_src: '240 VAC', dims_mm: '51 x 88 x 94', pockets: 1 },
      { desc: 'IMPRES Single-Unit Charger, EURO Plug',   part: 'PMPN4577A', impres: true, chem: 'Li-Ion, NiMh', pwr_src: '240 VAC', dims_mm: '51 x 88 x 94', pockets: 1 },
      { desc: 'IMPRES Single-Unit Charger, AU/NZ Plug',  part: 'PMPN4571A', impres: true, chem: 'Li-Ion, NiMh', pwr_src: '240 VAC', dims_mm: '51 x 88 x 94', pockets: 1 },
      { desc: 'IMPRES Single-Unit Charger, JAP Plug',    part: 'PMPN4578A', impres: true, chem: 'Li-Ion, NiMh', pwr_src: '100-240 VAC', dims_mm: '51 x 88 x 94', pockets: 1 },
      { desc: 'IMPRES Single-Unit Charger, KOR Plug',    part: 'PMPN4574A', impres: true, chem: 'Li-Ion, NiMh', pwr_src: '240 VAC', dims_mm: '51 x 88 x 94', pockets: 1 },
      { desc: 'IMPRES Single-Unit Charger, CHN Plug',    part: 'PMPN4579A', impres: true, chem: 'Li-Ion, NiMh', pwr_src: '240 VAC', dims_mm: '51 x 88 x 94', pockets: 1 },
      { desc: 'IMPRES Single-Unit Charger, INDIA Plug',  part: 'PMPN4582A', impres: true, chem: 'Li-Ion, NiMh', pwr_src: '100-240 VAC', dims_mm: '51 x 88 x 94', pockets: 1 },
      // IMPRES 2 Multi-Unit (PMPN4284 series — shared with R5/Ion)
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
      {
        desc: 'RM780 IMPRES Windporting Remote Speaker Microphone, Large, Work-When-Wet, IP68',
        part: 'PMMN4128',
        impres: true,
        intel_audio: true,
        ai_noise: true,
        windporting: true,
        noise_cancel: false,
        full_duplex: false,
        vol_ctrl: '2-step',
        prog_btn: '2 programmable + 1 emergency',
        audio_jack: true,
        ip: 'IP68',
        hazloc: 'UL',
        dims_mm: '77 x 58 x 25'
      },
      {
        desc: 'RM760 IMPRES Windporting Remote Speaker Microphone, Large Basic, Work-When-Wet, IP68',
        part: 'PMMN4140',
        impres: true,
        intel_audio: true,
        ai_noise: true,
        windporting: true,
        noise_cancel: false,
        full_duplex: false,
        vol_ctrl: '2-step',
        prog_btn: '',
        audio_jack: false,
        ip: 'IP68',
        hazloc: 'UL',
        dims_mm: '77 x 58 x 25'
      },
      {
        desc: 'RM730 IMPRES Windporting Remote Speaker Microphone, Small, IP68',
        part: 'PMMN4131',
        impres: true,
        intel_audio: true,
        ai_noise: true,
        windporting: true,
        noise_cancel: false,
        full_duplex: false,
        vol_ctrl: '2-step',
        prog_btn: '1 emergency',
        audio_jack: false,
        ip: 'IP68',
        hazloc: 'UL',
        dims_mm: '70 x 55 x 22'
      },
      {
        desc: 'NS750 IMPRES Omni-Directional Remote Speaker Microphone with Large Front PTT and Side PTT (Long Cable)',
        part: 'PMMN4150',
        impres: true,
        intel_audio: true,
        ai_noise: false,
        windporting: true,
        noise_cancel: false,
        full_duplex: false,
        vol_ctrl: '',
        prog_btn: '1 programmable + 1 emergency',
        audio_jack: true,
        ip: 'IP68',
        hazloc: 'UL',
        dims_mm: '94 x 68 x 45'
      },
      {
        desc: 'NS750 IMPRES Omni-Directional Remote Speaker Microphone with Large Front PTT and Side PTT (Short Cable)',
        part: 'PMMN4151',
        impres: true,
        intel_audio: true,
        ai_noise: false,
        windporting: true,
        noise_cancel: false,
        full_duplex: false,
        vol_ctrl: '',
        prog_btn: '1 programmable + 1 emergency',
        audio_jack: true,
        ip: 'IP68',
        hazloc: 'UL',
        dims_mm: '94 x 68 x 45'
      }
    ]
  },

  // ── CAT 4: SURVEILLANCE / EARPIECES ──────────────────────────────────────
  {
    id: '3b',
    name: 'RSM/Audio Replacements',
    items: [
      // RSM replacement kits (PDF: R7 & Ion accessories section)
      { desc: 'Replacement Coil Cord Kit for PMMN4128, PMMN4131, PMMN4140', part: 'PMKN4232', material: null, belt_sz: null, swivel: null, display: null, d_rings: null },
      { desc: 'Low Profile Swivel Clip for PMMN4128, PMMN4131, PMMN4140', part: 'PMLN8121', material: null, belt_sz: null, swivel: null, display: null, d_rings: null },
      { desc: 'Replacement Dust Cover, 10-pack, for PMMN4128, PMMN4140', part: 'PMLN8122', material: null, belt_sz: null, swivel: null, display: null, d_rings: null },
      { desc: 'Replacement Dust Cover, 10-pack, for PMMN4131', part: 'PMLN8253', material: null, belt_sz: null, swivel: null, display: null, d_rings: null },
      // Surveillance accessory replacement kits
      { desc: 'Replacement Quick Disconnect Translucent Tube with Clear Rubber Eartip', part: 'PMLN8092', material: null, belt_sz: null, swivel: null, display: null, d_rings: null },
      { desc: 'Replacement Rubber Eartip, Small (5 per pack)', part: 'PMLN8068', material: null, belt_sz: null, swivel: null, display: null, d_rings: null },
      { desc: 'Replacement Rubber Eartip, Medium (5 per pack)', part: 'PMLN8069', material: null, belt_sz: null, swivel: null, display: null, d_rings: null },
      { desc: 'Replacement Rubber Eartip, Large (5 per pack)', part: 'PMLN8070', material: null, belt_sz: null, swivel: null, display: null, d_rings: null },
      { desc: 'Replacement Rubber Sleeve, Small (25 per pack)', part: 'PMLN8363', material: null, belt_sz: null, swivel: null, display: null, d_rings: null },
      { desc: 'Replacement Rubber Sleeve, Medium (25 per pack)', part: 'PMLN8364', material: null, belt_sz: null, swivel: null, display: null, d_rings: null },
      { desc: 'Replacement Rubber Sleeve, Large (25 per pack)', part: 'PMLN8365', material: null, belt_sz: null, swivel: null, display: null, d_rings: null }
    ]
  },
  {
    id: 4,
    name: 'Surveillance/Earpieces',
    items: [
      { desc: 'IMPRES 1-Wire Surveillance Kit with Translucent Tube, Extra Loud Audio, Black', part: 'PMLN8341', impres: true, intel_audio: true, ai_noise: false, ear_type: 'Clear rubber eartip', mic_type: '', full_duplex: false, hazloc: 'UL' },
      { desc: 'IMPRES 2-Wire Surveillance Kit with Translucent Tube, Extra Loud Audio, Black', part: 'PMLN8342', impres: true, intel_audio: true, ai_noise: false, ear_type: 'Clear rubber eartip', mic_type: '', full_duplex: false, hazloc: 'UL' },
      { desc: 'IMPRES 3-Wire Surveillance Kit with Translucent Tube, Extra Loud Audio, Black', part: 'PMLN8343', impres: true, intel_audio: true, ai_noise: false, ear_type: 'Clear rubber eartip', mic_type: '', full_duplex: false, hazloc: 'UL' },
      { desc: 'IMPRES 2-Wire Swivel Earhook with Removable Eartip, Loud Audio, Black',         part: 'PMLN8295', impres: true, intel_audio: true, ai_noise: false, ear_type: 'Removable black rubber eartip', mic_type: '', full_duplex: false, hazloc: 'UL' },
      { desc: 'IMPRES 1-Wire Single Earbud with Removable Earhook, Loud Audio, Black',         part: 'PMLN8337', impres: true, intel_audio: true, ai_noise: false, ear_type: 'Single earbud', mic_type: '', full_duplex: false, hazloc: 'UL' },
      // R7-only loud audio (no Ion)
      { desc: 'IMPRES 1-Wire Surveillance Kit with Translucent Tube, Loud Audio, Black (R7 only)', part: 'PMLN8644', impres: true, intel_audio: true, ai_noise: false, ear_type: 'Translucent tube', mic_type: '', full_duplex: false, hazloc: '' },
      { desc: 'IMPRES 2-Wire Surveillance Kit with Translucent Tube, Loud Audio, Black (R7 only)', part: 'PMLN8645', impres: true, intel_audio: true, ai_noise: false, ear_type: 'Translucent tube', mic_type: '', full_duplex: false, hazloc: '' },
      { desc: 'IMPRES 3-Wire Surveillance Kit with Translucent Tube, Loud Audio, Black (R7 only)', part: 'PMLN8646', impres: true, intel_audio: true, ai_noise: false, ear_type: 'Translucent tube', mic_type: '', full_duplex: false, hazloc: '' }
    ]
  },

  // ── CAT 5: HEADSETS ───────────────────────────────────────────────────────
  {
    id: 5,
    name: 'Headsets',
    items: [
      {
        desc: 'Heavy Duty Behind-the-Head Headset with Noise-Canceling Boom Microphone, IP54',
        part: 'PMLN8085',
        impres: true,
        headset_type: 'Behind-the-head',
        ear_style: 'Dual-muff',
        nrr_db: 24,
        mic_type: 'Boom',
        hazloc: 'UL'
      },
      {
        desc: 'Heavy Duty Over-the-Head Headset with Noise-Canceling Boom Microphone, IP54',
        part: 'PMLN8086',
        impres: true,
        headset_type: 'Over-the-head',
        ear_style: 'Dual-muff',
        nrr_db: 24,
        mic_type: 'Boom',
        hazloc: 'UL'
      },
      // 3M Peltor CH-3 Series
      {
        desc: 'CH-3 Series Over-the-Head Headset with Nexus Connector (3M Peltor MT74H52A-110-34A)',
        part: 'PMLN8265',
        impres: false,
        headset_type: 'Over-the-head',
        ear_style: 'Dual-ear',
        nrr_db: 26,
        mic_type: 'Boom',
        hazloc: ''
      },
      {
        desc: 'CH-3 Series Neckband Headset with Nexus Connector (3M Peltor MT74H52A-110-34B)',
        part: 'PMLN8266',
        impres: false,
        headset_type: 'Neckband',
        ear_style: 'Dual-ear',
        nrr_db: 24,
        mic_type: 'Boom',
        hazloc: ''
      },
      {
        desc: 'CH-3 Series Hard Hat Attached with Nexus Connector (3M Peltor MT74H52P3E-110-34A)',
        part: 'PMLN8267',
        impres: false,
        headset_type: 'Hard hat attached',
        ear_style: 'Dual-ear',
        nrr_db: 24,
        mic_type: 'Boom',
        hazloc: ''
      }
    ]
  },

  // ── CAT 6: CARRY ──────────────────────────────────────────────────────────
  {
    id: 6,
    name: 'Carry',
    items: [
      // Leather cases
      { desc: 'Hard Leather Case with 3in Swivel Belt Loop (Display)',     part: 'PMLN8299', material: 'Hard leather', belt_sz: '3', swivel: true,  display: true,  d_rings: true },
      { desc: 'Hard Leather Case with 2.5in Swivel Belt Loop (Display)',   part: 'PMLN8300', material: 'Hard leather', belt_sz: '2.5', swivel: true,  display: true,  d_rings: true },
      { desc: 'Hard Leather Case with 3in Fixed Belt Loop (Display)',      part: 'PMLN8301', material: 'Hard leather', belt_sz: '3', swivel: false, display: true,  d_rings: true },
      { desc: 'Hard Leather Case with 3in Swivel Belt Loop (Non-Display)', part: 'PMLN8302', material: 'Hard leather', belt_sz: '3', swivel: true,  display: false, d_rings: true },
      { desc: 'Hard Leather Case with 2.5in Swivel Belt Loop (Non-Display)', part: 'PMLN8303', material: 'Hard leather', belt_sz: '2.5', swivel: true,  display: false, d_rings: true },
      { desc: 'Hard Leather Case with 3in Fixed Belt Loop (Non-Display)',  part: 'PMLN8304', material: 'Hard leather', belt_sz: '3', swivel: false, display: false, d_rings: true },
      // Belt loops / clips
      { desc: 'Replacement 2.5in Swivel Belt Loop',  part: 'PMLN5610', material: 'Hard leather', belt_sz: '2.5', swivel: true,  display: false, d_rings: false },
      { desc: 'Replacement 3in Leather Swivel Belt Loop', part: 'PMLN5611', material: 'Hard leather', belt_sz: '3', swivel: true,  display: false, d_rings: false },
      { desc: 'Spring Action 2in Belt Clip',         part: 'PMLN4651', material: 'Plastic', belt_sz: '2',   swivel: false, display: false, d_rings: false },
      { desc: 'Spring Action 2.5in Belt Clip',       part: 'PMLN7008', material: 'Plastic', belt_sz: '2.5', swivel: false, display: false, d_rings: false },
      // Straps / bags / misc
      { desc: 'Waterproof Bag with Large Strap',     part: 'HLN9985',  material: '',        belt_sz: '',    swivel: false, display: false, d_rings: false },
      { desc: 'Universal Chest Pack with Radio Holder, Pen Holder and Velcro Secured Pouch', part: 'HLN6602', material: '', belt_sz: '', swivel: false, display: false, d_rings: false },
      { desc: 'Adjustable Nylon Carrying Strap',     part: 'NTN5243',  material: 'Nylon',   belt_sz: '',    swivel: false, display: false, d_rings: false },
      { desc: 'Leather Radio Strap',                 part: 'RLN6486',  material: 'Leather', belt_sz: '',    swivel: false, display: false, d_rings: false },
      { desc: 'Leather Radio Strap \u2013 XL',       part: 'RLN6487',  material: 'Leather', belt_sz: '',    swivel: false, display: false, d_rings: false },
      { desc: 'Anti-Sway Strap for Leather Radio Straps', part: 'RLN6488', material: 'Leather', belt_sz: '', swivel: false, display: false, d_rings: false },
      { desc: 'Nylon Wrist Strap',                   part: 'PMLN6074', material: 'Nylon',   belt_sz: '',    swivel: false, display: false, d_rings: false },
      { desc: 'Mini GCAI Dust Cover',                part: 'PMHN4429', material: 'Plastic', belt_sz: '',    swivel: false, display: false, d_rings: false }
    ]
  },

  // ── CAT 7: ANTENNAS ───────────────────────────────────────────────────────
  {
    id: 7,
    name: 'Antennas',
    items: [
      // UHF Whip
      { desc: 'UHF/GPS Combination Wideband Slim Whip Antenna', part: 'PMAE4079', band: 'UHF', freq_mhz: '403-527', len_cm: 15, ant_type: 'Whip' },
      // VHF Helical
      { desc: 'VHF/GPS Combination Helical Antenna',            part: 'PMAD4117', band: 'VHF', freq_mhz: '136-155', len_cm: 15, ant_type: 'Helical' },
      { desc: 'VHF/GPS Combination Helical Antenna',            part: 'PMAD4116', band: 'VHF', freq_mhz: '144-165', len_cm: 15, ant_type: 'Helical' },
      { desc: 'VHF/GPS Combination Helical Antenna',            part: 'PMAD4118', band: 'VHF', freq_mhz: '152-174', len_cm: 15, ant_type: 'Helical' },
      // VHF Whip (wideband)
      { desc: 'VHF/GPS Combination Wideband Slim Whip Antenna', part: 'PMAD4147', band: 'VHF', freq_mhz: '136-174', len_cm: 20, ant_type: 'Whip' },
      // UHF Stubby
      { desc: 'UHF/GPS Combination Stubby Antenna',             part: 'PMAE4069', band: 'UHF', freq_mhz: '403-450', len_cm: 9,  ant_type: 'Stubby' },
      { desc: 'UHF/GPS Combination Stubby Antenna',             part: 'PMAE4070', band: 'UHF', freq_mhz: '440-490', len_cm: 9,  ant_type: 'Stubby' },
      { desc: 'UHF/GPS Combination Stubby Antenna',             part: 'PMAE4071', band: 'UHF', freq_mhz: '470-527', len_cm: 9,  ant_type: 'Stubby' },
      // VHF Stubby
      { desc: 'VHF/GPS Combination Stubby Antenna',             part: 'PMAD4119', band: 'VHF', freq_mhz: '136-148', len_cm: 9,  ant_type: 'Stubby' },
      { desc: 'VHF/GPS Combination Stubby Antenna',             part: 'PMAD4120', band: 'VHF', freq_mhz: '146-160', len_cm: 9,  ant_type: 'Stubby' },
      { desc: 'VHF Stubby Antenna',                             part: 'PMAD4121', band: 'VHF', freq_mhz: '160-174', len_cm: 9,  ant_type: 'Stubby' },
      // 800/900 MHz
      { desc: '800 MHz Flexible Whip Antenna',                  part: 'PMAF4011', band: '800/900', freq_mhz: '806-870', len_cm: 16.4, ant_type: 'Whip' },
      { desc: '900 MHz Flexible Whip Antenna',                  part: 'PMAF4012', band: '800/900', freq_mhz: '896-941', len_cm: 14,   ant_type: 'Whip' },
      { desc: '800/900 Stubby Antenna',                         part: 'PMAF4009', band: '800/900', freq_mhz: '806-870', len_cm: 12,   ant_type: 'Short whip' },
      { desc: '800/900 Stubby Antenna',                         part: 'PMAF4010', band: '800/900', freq_mhz: '896-941', len_cm: 11.2, ant_type: 'Short whip' },
      // Short stubbies (shared R7/Ion)
      { desc: 'UHF Short Stubby Antenna',                       part: 'AN000350A01', band: 'UHF', freq_mhz: '400-450', len_cm: 6, ant_type: 'Short stubby' },
      { desc: 'UHF Short Stubby Antenna',                       part: 'AN000351A01', band: 'UHF', freq_mhz: '440-490', len_cm: 6, ant_type: 'Short stubby' },
      { desc: 'UHF Stubby Wideband Antenna',                    part: 'AN000348A01', band: 'UHF', freq_mhz: '400-527', len_cm: 9, ant_type: 'Stubby' },
      { desc: "Gray antenna ID bands (pack of 10pcs)", part: "32012144001", band: null, freq_mhz: null, len_cm: null, ant_type: null, radios: ["r7","ion"] },
      { desc: "Yellow antenna ID bands (pack of 10pcs)", part: "32012144002", band: null, freq_mhz: null, len_cm: null, ant_type: null, radios: ["r7","ion"] },
      { desc: "Green antenna ID bands (pack of 10pcs)", part: "32012144003", band: null, freq_mhz: null, len_cm: null, ant_type: null, radios: ["r7","ion"] },
      { desc: "Blue antenna ID bands (pack of 10pcs)", part: "32012144004", band: null, freq_mhz: null, len_cm: null, ant_type: null, radios: ["r7","ion"] },
      { desc: "Purple antenna ID bands (pack of 10pcs)", part: "32012144005", band: null, freq_mhz: null, len_cm: null, ant_type: null, radios: ["r7","ion"] },
      { desc: "Gray antenna ID bands (pack of 10pcs)", part: "32012144001", band: null, freq_mhz: null, len_cm: null, ant_type: null, radios: ["r7","ion"] },
      { desc: "Yellow antenna ID bands (pack of 10pcs)", part: "32012144002", band: null, freq_mhz: null, len_cm: null, ant_type: null, radios: ["r7","ion"] },
      { desc: "Green antenna ID bands (pack of 10pcs)", part: "32012144003", band: null, freq_mhz: null, len_cm: null, ant_type: null, radios: ["r7","ion"] },
      { desc: "Blue antenna ID bands (pack of 10pcs)", part: "32012144004", band: null, freq_mhz: null, len_cm: null, ant_type: null, radios: ["r7","ion"] },
      { desc: "Purple antenna ID bands (pack of 10pcs)", part: "32012144005", band: null, freq_mhz: null, len_cm: null, ant_type: null, radios: ["r7","ion"] }
    ]
  },

  // ── CAT 8: CABLES ─────────────────────────────────────────────────────────
  {
    id: 8,
    name: 'Cables',
    items: [
      { desc: 'Mini GCAI Interface Cable (USB) \u2014 connects radio to computer via USB port', part: 'PMKN4265' }
    ]
  },

  // ── CAT 9: SCREEN PROTECTORS ──────────────────────────────────────────────
  {
    id: 9,
    name: 'Screen Protectors',
    items: [
      { desc: 'Screen Protector, Clear (Single Pack \u2014 Qty 1)',  part: 'AY000808A01' },
      { desc: 'Screen Protector, Clear (Bulk Pack \u2014 Qty 10)',   part: 'AY000808A02' },
      { desc: 'Screen Protector, Clear (Bulk Pack \u2014 Qty 50)',   part: 'AY000808A03' }
    ]
  },

  // ── CAT 10: PROGRAMMING CABLES ────────────────────────────────────────────,

  // ── CAT 11: IMPRES BATTERY MGMT TOOLS ─────────────────────────────────────
  {
    id: 11,
    name: 'IMPRES Tools',
    items: [
      { desc: 'IMPRES Battery Fleet Management Entitlement ID (EID), NA/CAN', part: 'HKVN4036' },
      { desc: 'IMPRES Battery Fleet Management Entitlement ID (EID), EMEA',   part: 'HKVN4037' },
      { desc: 'IMPRES Battery Fleet Management Entitlement ID (EID), LA',     part: 'HKVN4038' },
      { desc: 'IMPRES Battery Fleet Management Entitlement ID (EID), Asia',   part: 'HKVN4039' }
    ]
  },

  // ── CAT 12: BLUETOOTH / OPS CRITICAL WIRELESS ─────────────────────────────
  {
    id: 12,
    name: 'Bluetooth',
    items: [
      {
        desc: 'WM500 Wireless Remote Speaker Microphone (compatible with PMLN7560 earpiece)',
        part: 'PMMN4127',
        ear_type: 'N/A',
        mic_type: 'Omni directional, Windporting',
        ptt: true,
        talk_time_hr: 18,
        charge_time_hr: 2,
        weight_g: 128
      },
      {
        desc: '1.75 Inch Wide Leather Belt',
        part: '4200865599',
        material: 'Leather',
        belt_sz: '1.75',
        swivel: '',
        display: 'Display/Non-display',
        d_rings: false
      },
      {
        desc: 'Break-Away Chest Pack with Radio Holder, Pen Holder and Velcro Secured Pouch',
        part: 'RLN4570',
        material: '',
        belt_sz: '',
        swivel: '',
        display: 'Display/Non-display',
        d_rings: false
      },
      {
        desc: 'Replacement Strap for HLN6602 and RLN4570',
        part: '1505596Z02',
        material: '',
        belt_sz: '',
        swivel: '',
        display: 'Display/Non-display',
        d_rings: false
      },
      {
        desc: 'Radio Pack Radio Utility Case',
        part: 'RLN4815',
        material: '',
        belt_sz: '',
        swivel: '',
        display: 'Display/Non-display',
        d_rings: false
      },
      {
        desc: 'Radio Pack Extension Belt for Waists Larger than 40 Inches',
        part: '4280384F89',
        material: '',
        belt_sz: '',
        swivel: '',
        display: 'Display/Non-display',
        d_rings: false
      },
      {
        desc: 'Operations Critical Wireless Bluetooth Earpiece with PTT',
        part: 'PMLN8123',
        ear_type: 'Over-the-ear (swivel)',
        mic_type: 'Boom',
        ptt: true,
        talk_time_hr: 8,
        charge_time_hr: 3,
        weight_g: 23
      },
      {
        desc: 'WP300 Wireless Bluetooth PTT POD',
        part: 'PMLN8298',
        ear_type: 'N/A',
        mic_type: 'N/A',
        ptt: true,
        talk_time_hr: 18,
        charge_time_hr: null,
        weight_g: null
      },
      {
        desc: 'WP300 Wireless Bluetooth PTT POD with Surveillance Earpiece',
        part: 'PMLN8401',
        ear_type: 'Clear rubber eartip',
        mic_type: 'N/A',
        ptt: true,
        talk_time_hr: 18,
        charge_time_hr: null,
        weight_g: null
      },
      { desc: "WP300 Surveillance Earpiece with Translucent Tube", part: "PMLN8190", ear_type: "Clear rubber eartip", mic_type: "N/A", ptt: false, talk_time_hr: null, charge_time_hr: null, weight_g: null },
      { desc: "WP300 Swivel Earpiece with Eartip, Short Cord", part: "PMLN8125", ear_type: "Over the ear", mic_type: "N/A", ptt: false, talk_time_hr: null, charge_time_hr: null, weight_g: null },
      { desc: "WP300 Swivel Earpiece with Eartip, Long Cord", part: "PMLN8077", ear_type: "Over the ear", mic_type: "N/A", ptt: false, talk_time_hr: null, charge_time_hr: null, weight_g: null },
      { desc: "WP300 Vehicle Mount Option", part: "PMLN8332", ear_type: "N/A", mic_type: "N/A", ptt: false, talk_time_hr: null, charge_time_hr: null, weight_g: null },
      { desc: "WP300 Swivel Clip", part: "PMLN6246", ear_type: "N/A", mic_type: "N/A", ptt: false, talk_time_hr: null, charge_time_hr: null, weight_g: null },
      { desc: "WP300 Replacement Eartip, Small (5-pack)", part: "PMLN8068", ear_type: "N/A", mic_type: "N/A", ptt: false, talk_time_hr: null, charge_time_hr: null, weight_g: null },
      { desc: "WP300 Replacement Eartip, Medium (5-pack)", part: "PMLN8069", ear_type: "N/A", mic_type: "N/A", ptt: false, talk_time_hr: null, charge_time_hr: null, weight_g: null },
      { desc: "WP300 Replacement Eartip, Large (5-pack)", part: "PMLN8070", ear_type: "N/A", mic_type: "N/A", ptt: false, talk_time_hr: null, charge_time_hr: null, weight_g: null },
      { desc: "WP300 Replacement Translucent Tube", part: "PMLN8092", ear_type: "N/A", mic_type: "N/A", ptt: false, talk_time_hr: null, charge_time_hr: null, weight_g: null },
      {
        desc: 'OC Wireless Earpiece - Standard Eartip',
        part: 'NTN2572',
        ear_type: 'In-ear',
        mic_type: 'N/A',
        ptt: false,
        talk_time_hr: null,
        charge_time_hr: null,
        weight_g: null
      },
      {
        desc: 'OC Wireless Earpiece - Eartip Kit (S/M/L)',
        part: 'NTN8821',
        ear_type: 'In-ear',
        mic_type: 'N/A',
        ptt: false,
        talk_time_hr: null,
        charge_time_hr: null,
        weight_g: null
      },
      {
        desc: 'OC Wireless Earpiece - Behind-the-Head Adapter',
        part: 'NTN8988',
        ear_type: 'Behind-the-head',
        mic_type: 'N/A',
        ptt: false,
        talk_time_hr: null,
        charge_time_hr: null,
        weight_g: null
      },
      {
        desc: 'OC Wireless Charger Clip',
        part: 'NNTN8361',
        ear_type: 'N/A',
        mic_type: 'N/A',
        ptt: false,
        talk_time_hr: null,
        charge_time_hr: null,
        weight_g: null
      },
      {
        desc: 'OC Wireless Pod Charger Cable',
        part: 'PMLN6246',
        ear_type: 'N/A',
        mic_type: 'N/A',
        ptt: false,
        talk_time_hr: null,
        charge_time_hr: null,
        weight_g: null
      },
      {
        desc: 'OC Wireless Earpiece - Medium Eartip',
        part: 'PMPN4027',
        ear_type: 'In-ear',
        mic_type: 'N/A',
        ptt: false,
        talk_time_hr: null,
        charge_time_hr: null,
        weight_g: null
      },
      {
        desc: 'OC Wireless Earpiece - Small Eartip',
        part: 'PMPN4007',
        ear_type: 'In-ear',
        mic_type: 'N/A',
        ptt: false,
        talk_time_hr: null,
        charge_time_hr: null,
        weight_g: null
      },
      {
        desc: 'OC Wireless Earpiece - Large Eartip',
        part: 'PMPN4006',
        ear_type: 'In-ear',
        mic_type: 'N/A',
        ptt: false,
        talk_time_hr: null,
        charge_time_hr: null,
        weight_g: null
      },
      {
        desc: 'OC Wireless Earpiece - Swivel Adapter',
        part: 'PMPN4008',
        ear_type: 'Over-the-ear',
        mic_type: 'N/A',
        ptt: false,
        talk_time_hr: null,
        charge_time_hr: null,
        weight_g: null
      },
      {
        desc: 'OC Wireless Earpiece - Earhook (Standard)',
        part: 'PMPN4015',
        ear_type: 'Over-the-ear',
        mic_type: 'N/A',
        ptt: false,
        talk_time_hr: null,
        charge_time_hr: null,
        weight_g: null
      },
      {
        desc: 'OC Wireless Earpiece - Earhook (Large)',
        part: 'PMPN4016',
        ear_type: 'Over-the-ear',
        mic_type: 'N/A',
        ptt: false,
        talk_time_hr: null,
        charge_time_hr: null,
        weight_g: null
      },
      {
        desc: 'OC Wireless Earpiece - Earhook (Small)',
        part: 'PMPN4023',
        ear_type: 'Over-the-ear',
        mic_type: 'N/A',
        ptt: false,
        talk_time_hr: null,
        charge_time_hr: null,
        weight_g: null
      },
      {
        desc: 'OC Wireless Pod Carrying Case',
        part: 'PMPN4028',
        ear_type: 'N/A',
        mic_type: 'N/A',
        ptt: false,
        talk_time_hr: null,
        charge_time_hr: null,
        weight_g: null
      }
    ]
  }

];

// Wire into global RADIOS_DATA
if (typeof window !== 'undefined') {
  window.RADIOS_DATA = window.RADIOS_DATA || {};
  window.RADIOS_DATA['r7'] = r7Categories;
}
