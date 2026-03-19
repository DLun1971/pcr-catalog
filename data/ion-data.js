// ion-data.js — MOTOTRBO Ion Accessory Data
// Source: MOTOTRBO Professional Tier Accessory Catalog (Motorola Solutions)
// All part numbers PDF-verified. Do not extrapolate or add unverified items.
// Ion uses IMPRES 2 batteries and chargers (distinct from R7 IMPRES series).
// Ion carry cases are plastic (unique form factor vs R7 leather cases).

const ionCategories = [

  // ── CAT 1: BATTERIES ──────────────────────────────────────────────────────
  {
    id: 1,
    name: 'Batteries',
    items: [
      {
        desc: 'IMPRES 2 Li-Ion 2820mAh IP68 Slim Battery',
        part: 'PMNN4803',
        impres: true,
        chem: 'Li-Ion',
        capacity_mah: 2820,
        dims_mm: '114 x 69 x 16',
        weight_g: 145,
        hazloc: '',
        ip: 'IP68',
        op_temp: '-20\u00b0C to +60\u00b0C'
      },
      {
        desc: 'IMPRES 2 Li-Ion 2900mAh IP68 TIA4950 Battery',
        part: 'PMNN4804',
        impres: true,
        chem: 'Li-Ion',
        capacity_mah: 2900,
        dims_mm: '114 x 69 x 24',
        weight_g: 171,
        hazloc: 'UL',
        ip: 'IP68',
        op_temp: '-20\u00b0C to +60\u00b0C'
      },
      {
        desc: 'IMPRES 2 Li-Ion 4400mAh IP68 TIA4950 Battery',
        part: 'PMNN4805',
        impres: true,
        chem: 'Li-Ion',
        capacity_mah: 4400,
        dims_mm: '114 x 69 x 27',
        weight_g: 211,
        hazloc: 'UL',
        ip: 'IP68',
        op_temp: '-20\u00b0C to +60\u00b0C'
      }
    ]
  },

  // ── CAT 2: CHARGERS ───────────────────────────────────────────────────────
  {
    id: 2,
    name: 'Chargers',
    items: [
      // IMPRES 2 Single-Unit (Ion-specific PMPN45xx series)
      { desc: 'IMPRES 2 Single-Unit Charger, US Plug',    part: 'PMPN4524', impres: true, chem: 'Li-Ion, NiMh', pwr_src: '120 VAC',     dims_mm: '52 x 88 x 94', pockets: 1 },
      { desc: 'IMPRES 2 Single-Unit Charger, ARG Plug',   part: 'PMPN4512', impres: true, chem: 'Li-Ion, NiMh', pwr_src: '240 VAC',     dims_mm: '52 x 88 x 94', pockets: 1 },
      { desc: 'IMPRES 2 Single-Unit Charger, BRZ Plug',   part: 'PMPN4515', impres: true, chem: 'Li-Ion, NiMh', pwr_src: '240 VAC',     dims_mm: '52 x 88 x 94', pockets: 1 },
      { desc: 'IMPRES 2 Single-Unit Charger, UK Plug',    part: 'PMPN4510', impres: true, chem: 'Li-Ion, NiMh', pwr_src: '240 VAC',     dims_mm: '52 x 88 x 94', pockets: 1 },
      { desc: 'IMPRES 2 Single-Unit Charger, EURO Plug',  part: 'PMPN4525', impres: true, chem: 'Li-Ion, NiMh', pwr_src: '240 VAC',     dims_mm: '52 x 88 x 94', pockets: 1 },
      { desc: 'IMPRES 2 Single-Unit Charger, AU/NZ Plug', part: 'PMPN4511', impres: true, chem: 'Li-Ion, NiMh', pwr_src: '240 VAC',     dims_mm: '52 x 88 x 94', pockets: 1 },
      { desc: 'IMPRES 2 Single-Unit Charger, JAP Plug',   part: 'PMPN4609', impres: true, chem: 'Li-Ion, NiMh', pwr_src: '100-240 VAC', dims_mm: '52 x 88 x 94', pockets: 1 },
      { desc: 'IMPRES 2 Single-Unit Charger, KOR Plug',   part: 'PMPN4514', impres: true, chem: 'Li-Ion, NiMh', pwr_src: '240 VAC',     dims_mm: '52 x 88 x 94', pockets: 1 },
      { desc: 'IMPRES 2 Single-Unit Charger, INDIA Plug', part: 'PMPN4641', impres: true, chem: 'Li-Ion, NiMh', pwr_src: '240 VAC',     dims_mm: '52 x 88 x 94', pockets: 1 },
      // IMPRES 2 Multi-Unit (Ion-specific PMPN4498 series — different dims from R7)
      { desc: 'IMPRES 2 Multi-Unit Fast Charger, US Plug',    part: 'PMPN4498', impres: true, chem: 'Li-Ion, NiMh', pwr_src: '100-240 VAC', dims_mm: '170 x 445 x 116', pockets: 6 },
      { desc: 'IMPRES 2 Multi-Unit Fast Charger, UK Plug',    part: 'PMPN4516', impres: true, chem: 'Li-Ion, NiMh', pwr_src: '100-240 VAC', dims_mm: '170 x 445 x 116', pockets: 6 },
      { desc: 'IMPRES 2 Multi-Unit Fast Charger, EURO Plug',  part: 'PMPN4499', impres: true, chem: 'Li-Ion, NiMh', pwr_src: '100-240 VAC', dims_mm: '170 x 445 x 116', pockets: 6 },
      { desc: 'IMPRES 2 Multi-Unit Fast Charger, AU/NZ Plug', part: 'PMPN4517', impres: true, chem: 'Li-Ion, NiMh', pwr_src: '100-240 VAC', dims_mm: '170 x 445 x 116', pockets: 6 },
      { desc: 'IMPRES 2 Multi-Unit Fast Charger, ARG Plug',   part: 'PMPN4518', impres: true, chem: 'Li-Ion, NiMh', pwr_src: '100-240 VAC', dims_mm: '170 x 445 x 116', pockets: 6 },
      { desc: 'IMPRES 2 Multi-Unit Fast Charger, BZL Plug',   part: 'PMPN4521', impres: true, chem: 'Li-Ion, NiMh', pwr_src: '100-240 VAC', dims_mm: '170 x 445 x 116', pockets: 6 },
      { desc: 'IMPRES 2 Multi-Unit Fast Charger, JAP Plug',   part: 'PMPN4295', impres: true, chem: 'Li-Ion, NiMh', pwr_src: '100-240 VAC', dims_mm: '170 x 445 x 116', pockets: 6 },
      { desc: 'IMPRES 2 Multi-Unit Fast Charger, KOR Plug',   part: 'PMPN4520', impres: true, chem: 'Li-Ion, NiMh', pwr_src: '100-240 VAC', dims_mm: '170 x 445 x 116', pockets: 6 },
      { desc: 'IMPRES 2 Multi-Unit Fast Charger, INDIA Plug', part: 'PMPN4642', impres: true, chem: 'Li-Ion, NiMh', pwr_src: '100-240 VAC', dims_mm: '170 x 445 x 116', pockets: 6 },
      // Vehicle — Ion-specific cradle
      { desc: 'IMPRES 2 Charging Cradle with Mounting Kit (cigarette lighter adapter)', part: 'PMPN4607', impres: true, chem: 'Li-Ion', pwr_src: '12 VDC (cigarette lighter)', dims_mm: '75 x 45 x 133', pockets: 1 },

      // ── Ion Vehicle Charger Replacement Parts ────────────────────────────
      { desc: 'Replacement Cigarette Lighter Adapter for IMPRES 2 Charging Cradle', part: 'PS000514A01', impres: false, chem: null, pwr_src: '12 VDC', dims_mm: null, pockets: null },
      { desc: 'Replacement Strap for IMPRES 2 Charging Cradle', part: 'HW003289A01', impres: false, chem: null, pwr_src: null, dims_mm: null, pockets: null },

      // ── SUC Replacement Power Supplies ───────────────────────────────────
      { desc: 'Replacement Power Supply for IMPRES 2 Single-Unit Charger, US/CAN Plug', part: 'PS000577A01', impres: false, chem: null, pwr_src: '120 VAC', dims_mm: null, pockets: null },
      { desc: 'Replacement Power Supply for IMPRES 2 Single-Unit Charger, EU Plug', part: 'PS000576A02', impres: false, chem: null, pwr_src: '100-240 VAC', dims_mm: null, pockets: null },
      { desc: 'Replacement Power Supply for IMPRES 2 Single-Unit Charger, UK/HK Plug', part: 'PS000576A03', impres: false, chem: null, pwr_src: '100-240 VAC', dims_mm: null, pockets: null },
      { desc: 'Replacement Power Supply for IMPRES 2 Single-Unit Charger, AUS/NZ Plug', part: 'PS000576A04', impres: false, chem: null, pwr_src: null, dims_mm: null, pockets: null },
      { desc: 'Replacement Power Supply for IMPRES 2 Single-Unit Charger, ARG Plug', part: 'PS000576A05', impres: false, chem: null, pwr_src: null, dims_mm: null, pockets: null },
      { desc: 'Replacement Power Supply for IMPRES 2 Single-Unit Charger, CHN Plug', part: 'PS000576A06', impres: false, chem: null, pwr_src: null, dims_mm: null, pockets: null },
      { desc: 'Replacement Power Supply for IMPRES 2 Single-Unit Charger, KOR Plug', part: 'PS000576A07', impres: false, chem: null, pwr_src: null, dims_mm: null, pockets: null },
      { desc: 'Replacement Power Supply for IMPRES 2 Single-Unit Charger, BRZ Plug', part: 'PS000576A08', impres: false, chem: null, pwr_src: '100-240 VAC', dims_mm: null, pockets: null },
      { desc: 'Replacement Power Supply for IMPRES 2 Single-Unit Charger, India Plug', part: 'PS000576A09', impres: false, chem: null, pwr_src: '100-240 VAC', dims_mm: null, pockets: null },

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
      { desc: 'Interchangeable Charging Pocket for Ion IMPRES 2 Multi-Unit Charger', part: 'AS000180A01', impres: false, chem: null, pwr_src: null, dims_mm: null, pockets: null },
      { desc: 'Wall Mount Bracket for IMPRES 2 Multi-Unit Charger', part: 'BR000272A01', impres: false, chem: null, pwr_src: null, dims_mm: null, pockets: null }
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
        desc: 'WM500 Wireless Remote Speaker Microphone (compatible with PMLN7560 earpiece)',
        part: 'PMMN4127',
        impres: false,
        intel_audio: false,
        ai_noise: false,
        windporting: true,
        noise_cancel: false,
        full_duplex: true,
        vol_ctrl: '',
        prog_btn: '',
        audio_jack: false,
        ip: 'IP67',
        hazloc: '',
        dims_mm: '80 x 57.5 x 24.5'
      }
    ]
  },

  // ── CAT 4: SURVEILLANCE / EARPIECES ──────────────────────────────────────
  {
    id: '3b',
    name: 'RSM/Audio Replacements',
    items: [
      // RSM replacement kits
      { desc: 'Replacement Coil Cord Kit for PMMN4128, PMMN4131, PMMN4140', part: 'PMKN4232', material: null, belt_sz: null, swivel: null, display: null, d_rings: null },
      { desc: 'Low Profile Swivel Clip for PMMN4128, PMMN4131, PMMN4140', part: 'PMLN8121', material: null, belt_sz: null, swivel: null, display: null, d_rings: null },
      { desc: 'Replacement Dust Cover, 10-pack, for PMMN4128, PMMN4140', part: 'PMLN8122', material: null, belt_sz: null, swivel: null, display: null, d_rings: null },
      { desc: 'Replacement Dust Cover, 10-pack, for PMMN4131', part: 'PMLN8253', material: null, belt_sz: null, swivel: null, display: null, d_rings: null },
      // Surveillance replacement kits
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
      // Ion supports full duplex telephony on these kits
      { desc: 'IMPRES 1-Wire Surveillance Kit with Translucent Tube, Extra Loud Audio, Black', part: 'PMLN8341', impres: true, intel_audio: true, ai_noise: false, ear_type: 'Clear rubber eartip', mic_type: '', full_duplex: true, hazloc: 'UL' },
      { desc: 'IMPRES 2-Wire Surveillance Kit with Translucent Tube, Extra Loud Audio, Black', part: 'PMLN8342', impres: true, intel_audio: true, ai_noise: false, ear_type: 'Clear rubber eartip', mic_type: '', full_duplex: true, hazloc: 'UL' },
      { desc: 'IMPRES 3-Wire Surveillance Kit with Translucent Tube, Extra Loud Audio, Black', part: 'PMLN8343', impres: true, intel_audio: true, ai_noise: false, ear_type: 'Clear rubber eartip', mic_type: '', full_duplex: true, hazloc: 'UL' },
      { desc: 'IMPRES 2-Wire Swivel Earhook with Removable Eartip, Loud Audio, Black',         part: 'PMLN8295', impres: true, intel_audio: true, ai_noise: false, ear_type: 'Removable black rubber eartip', mic_type: '', full_duplex: true, hazloc: 'UL' },
      { desc: 'IMPRES 1-Wire Single Earbud with Removable Earhook, Loud Audio, Black',         part: 'PMLN8337', impres: true, intel_audio: true, ai_noise: false, ear_type: 'Single earbud', mic_type: '', full_duplex: true, hazloc: 'UL' }
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
      // 3M Peltor CH-3 Series (Ion compatible per PDF)
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
  // Ion has unique plastic carry cases — different from R7 leather cases
  {
    id: 6,
    name: 'Carry',
    items: [
      { desc: 'Plastic Carry Case with 2.5in Fixed-Angle Spring-Action Belt Clip', part: 'PMLN8126', material: 'Plastic', belt_sz: '2.5', swivel: false, display: false, d_rings: false },
      { desc: 'Plastic Carry Case with 2.5in Hard Leather Swivel Belt Loop',       part: 'PMLN8127', material: 'Plastic', belt_sz: '2.5', swivel: true,  display: false, d_rings: false },
      { desc: 'Replacement 2in Fixed Angle Spring-Action Belt Clip',               part: 'PMLN4651', material: 'Plastic', belt_sz: '2',   swivel: false, display: false, d_rings: false },
      { desc: 'Replacement 2.5in Fixed Angle Spring-Action Belt Clip',             part: 'PMLN7008', material: 'Plastic', belt_sz: '2.5', swivel: false, display: false, d_rings: false },
      { desc: 'Replacement 2.5in Hard Leather Swivel Belt Loop',                   part: 'PMLN5407', material: 'Leather', belt_sz: '2.5', swivel: true,  display: false, d_rings: false },
      { desc: 'Replacement 3in Hard Leather Swivel Belt Loop',                     part: 'PMLN5409', material: 'Leather', belt_sz: '3',   swivel: true,  display: false, d_rings: false }
    ]
  },

  // ── CAT 7: ANTENNAS ───────────────────────────────────────────────────────
  // Ion shares R7 antenna lineup plus adds short stubbies and 800/900 whip
  {
    id: 7,
    name: 'Antennas',
    items: [
      { desc: 'UHF/GPS Combination Wideband Slim Whip Antenna', part: 'PMAE4079',    band: 'UHF',     freq_mhz: '403-527', len_cm: 15,   ant_type: 'Whip' },
      { desc: 'VHF/GPS Combination Helical Antenna',            part: 'PMAD4117',    band: 'VHF',     freq_mhz: '136-155', len_cm: 15,   ant_type: 'Helical' },
      { desc: 'VHF/GPS Combination Helical Antenna',            part: 'PMAD4116',    band: 'VHF',     freq_mhz: '144-165', len_cm: 15,   ant_type: 'Helical' },
      { desc: 'VHF/GPS Combination Helical Antenna',            part: 'PMAD4118',    band: 'VHF',     freq_mhz: '152-174', len_cm: 15,   ant_type: 'Helical' },
      { desc: 'UHF/GPS Combination Stubby Antenna',             part: 'PMAE4069',    band: 'UHF',     freq_mhz: '403-450', len_cm: 9,    ant_type: 'Stubby' },
      { desc: 'UHF/GPS Combination Stubby Antenna',             part: 'PMAE4070',    band: 'UHF',     freq_mhz: '440-490', len_cm: 9,    ant_type: 'Stubby' },
      { desc: 'UHF/GPS Combination Stubby Antenna',             part: 'PMAE4071',    band: 'UHF',     freq_mhz: '470-527', len_cm: 9,    ant_type: 'Stubby' },
      // Short stubbies (Ion-specific additions)
      { desc: 'UHF Short Stubby Antenna',                       part: 'AN000350A01', band: 'UHF',     freq_mhz: '400-450', len_cm: 6,    ant_type: 'Short stubby' },
      { desc: 'UHF Short Stubby Antenna',                       part: 'AN000351A01', band: 'UHF',     freq_mhz: '440-490', len_cm: 6,    ant_type: 'Short stubby' },
      { desc: 'UHF Stubby Wideband Antenna',                    part: 'AN000348A01', band: 'UHF',     freq_mhz: '400-527', len_cm: 9,    ant_type: 'Stubby' },
      // 800/900 MHz (Ion-specific)
      { desc: 'Ion 800/900 Whip Antenna',                       part: 'AN000415A01', band: '800/900', freq_mhz: '806-941', len_cm: 14,   ant_type: 'Whip' },
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
      { desc: 'Mini GCAI Interface Cable (USB) \u2014 connects radio to computer via USB port', part: 'PMKN4265' },
      { desc: 'RIB-Less Programming Cable (USB)', part: 'PMKN4230' },
      { desc: 'RIB-Less Programming Cable (USB)', part: 'PMKN4230' }
    ]
  },

  // ── CAT 9: SCREEN PROTECTORS ──────────────────────────────────────────────
  // No Ion screen protector listed in this PDF
  {
    id: 9,
    name: 'Screen Protectors',
    items: []
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
  window.RADIOS_DATA['ion'] = ionCategories;
}
