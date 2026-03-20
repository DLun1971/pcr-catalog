// r5-data.js — R5 Series accessory data (PDF-verified: Professional Tier Accessory Catalog)
// Variants: R5

const R5_CATEGORIES = [

  // ── CATEGORY 1: BATTERIES ──────────────────────────────────────────────────
  {
    id: 1,
    name: 'Batteries',
    cols: ['Description','Part Number','IMPRES','Chemistry','Typical Capacity (mAh)','Dimensions (mm)','Weight','HazLoc','IP Rating','Operating Temp'],
    items: [
      {
        desc: 'Li-Ion IP67 2400mAh Battery (EMEA and APAC Only)',
        part: 'PMNN4878',
        impres: false, chem: 'Li-Ion', capacity_mah: 2400,
        dims_mm: '122 x 55 x 24', weight_g: 144,
        hazloc: null, ip: 'IP67', op_temp: '-20\u00b0C to +60\u00b0C'
      },
      {
        desc: 'IMPRES Slim Li-Ion IP67 2200mAh Battery',
        part: 'PMNN4888',
        impres: true, chem: 'Li-Ion', capacity_mah: 2200,
        dims_mm: '122 x 55 x 18', weight_g: 120,
        hazloc: null, ip: 'IP67', op_temp: '-20\u00b0C to +60\u00b0C'
      },
      {
        desc: 'IMPRES High Capacity Li-Ion IP67 3200mAh Battery',
        part: 'PMNN4889',
        impres: true, chem: 'Li-Ion', capacity_mah: 3200,
        dims_mm: '122 x 55 x 24', weight_g: 148,
        hazloc: null, ip: 'IP67', op_temp: '-20\u00b0C to +60\u00b0C'
      },
      {
        desc: 'IMPRES UL High Capacity Li-Ion IP67 3200mAh Battery',
        part: 'PMNN4890',
        impres: true, chem: 'Li-Ion', capacity_mah: 3200,
        dims_mm: '122 x 55 x 24', weight_g: 162,
        hazloc: 'UL', ip: 'IP67', op_temp: '-20\u00b0C to +60\u00b0C'
      }
    ]
  },

  // ── CATEGORY 2: CHARGERS ───────────────────────────────────────────────────
  {
    id: 2,
    name: 'Chargers',
    cols: ['Description','Part Number','IMPRES','Chemistry','Power Source','Dimensions (mm)','Pockets'],
    items: [
      // Single-Unit Chargers
      { desc: 'Single-Unit Charger Base Only', part: 'NNTN8117', impres: false, chem: 'Li-Ion, NiMh', pwr_src: null, dims_mm: '26 x 115 x 114', pockets: 1 },
      { desc: 'Single-Unit Charger, 1.25A, China Plug', part: 'NNTN8224', impres: false, chem: 'Li-Ion, NiMh', pwr_src: '230 VAC', dims_mm: '26 x 115 x 114', pockets: 1 },
      { desc: 'Single-Unit Charger, 1.25A, US/NA Plug', part: 'NNTN8226', impres: false, chem: 'Li-Ion, NiMh', pwr_src: '115 VAC', dims_mm: '26 x 115 x 114', pockets: 1 },
      { desc: 'Single-Unit Charger with Power Supply, Switch-Mode 21W, EU Plug', part: 'NNTN8273', impres: false, chem: 'Li-Ion, NiMh', pwr_src: '240 VAC', dims_mm: '26 x 115 x 114', pockets: 1 },
      { desc: 'Single-Unit Charger with Power Supply, Switch-Mode 21W, UK/HK Plug', part: 'NNTN8274', impres: true, chem: 'Li-Ion, NiMh', pwr_src: '240 VAC', dims_mm: '26 x 115 x 114', pockets: 1 },
      { desc: 'Single-Unit Charger, 1.25A, EU/EA Plug', part: 'NNTN8292', impres: false, chem: 'Li-Ion, NiMh', pwr_src: '230 VAC', dims_mm: '26 x 115 x 114', pockets: 1 },
      // IMPRES Single-Unit Chargers
      { desc: 'IMPRES Single-Unit Charger Base Only', part: 'PMPN4527', impres: true, chem: 'Li-Ion, NiMh', pwr_src: null, dims_mm: '51 x 88 x 94', pockets: 1 },
      { desc: 'IMPRES Single-Unit Charger, UK/HK Plug', part: 'PMPN4572', impres: true, chem: 'Li-Ion, NiMh', pwr_src: '240 VAC', dims_mm: '51 x 88 x 94', pockets: 1 },
      { desc: 'IMPRES Single-Unit Charger, US/NA/TW Plug', part: 'PMPN4576', impres: true, chem: 'Li-Ion, NiMh', pwr_src: '120 VAC', dims_mm: '51 x 88 x 94', pockets: 1 },
      { desc: 'IMPRES Single-Unit Charger, EU Plug', part: 'PMPN4577', impres: true, chem: 'Li-Ion, NiMh', pwr_src: '240 VAC', dims_mm: '51 x 88 x 94', pockets: 1 },
      { desc: 'IMPRES Single-Unit Charger, JP Plug', part: 'PMPN4578', impres: true, chem: 'Li-Ion, NiMh', pwr_src: '100-240 VAC', dims_mm: '51 x 88 x 94', pockets: 1 },
      { desc: 'IMPRES Single-Unit Charger, CH Plug', part: 'PMPN4579', impres: true, chem: 'Li-Ion, NiMh', pwr_src: '240 VAC', dims_mm: '51 x 88 x 94', pockets: 1 },
      { desc: 'IMPRES Single-Unit Charger, India Plug', part: 'PMPN4582', impres: true, chem: 'Li-Ion, NiMh', pwr_src: '100-240 VAC', dims_mm: '51 x 88 x 94', pockets: 1 },
      { desc: 'IMPRES Single-Unit Charger, KOR Plug', part: 'PMPN4574', impres: true, chem: 'Li-Ion, NiMh', pwr_src: '240 VAC', dims_mm: '51 x 88 x 94', pockets: 1 },
      { desc: 'IMPRES Single-Unit Charger, AUS/NZ Plug', part: 'PMPN4571', impres: true, chem: 'Li-Ion, NiMh', pwr_src: '240 VAC', dims_mm: '51 x 88 x 94', pockets: 1 },
      { desc: 'IMPRES Single-Unit Charger Base Only', part: 'NNTN8117ASP01', impres: true, chem: 'Li-Ion, NiMh', pwr_src: null, dims_mm: '47 x 114 x 115', pockets: 1 },
      // Multi-Unit Chargers
      { desc: 'IMPRES Multi-Unit Charger, US/NA Plug', part: 'PMPN4284', impres: true, chem: 'Li-Ion, NiMh', pwr_src: '100-240 VAC', dims_mm: '117 x 445 x 170', pockets: 6 },
      { desc: 'IMPRES Multi-Unit Charger, EU Plug', part: 'PMPN4289', impres: true, chem: 'Li-Ion, NiMh', pwr_src: '100-240 VAC', dims_mm: '117 x 445 x 170', pockets: 6 },
      { desc: 'IMPRES Multi-Unit Charger, UK/HK Plug', part: 'PMPN4290', impres: true, chem: 'Li-Ion, NiMh', pwr_src: '100-240 VAC', dims_mm: '117 x 445 x 170', pockets: 6 },
      { desc: 'IMPRES Multi-Unit Charger, ARG Plug', part: 'PMPN4291', impres: true, chem: 'Li-Ion, NiMh', pwr_src: '100-240 VAC', dims_mm: '117 x 445 x 170', pockets: 6 },
      { desc: 'IMPRES Multi-Unit Charger, BZ Plug', part: 'PMPN4292', impres: true, chem: 'Li-Ion, NiMh', pwr_src: '100-240 VAC', dims_mm: '117 x 445 x 170', pockets: 6 },
      { desc: 'IMPRES Multi-Unit Charger, AUS/NZ Plug', part: 'PMPN4293', impres: true, chem: 'Li-Ion, NiMh', pwr_src: '100-240 VAC', dims_mm: '117 x 445 x 170', pockets: 6 },
      { desc: 'IMPRES Multi-Unit Charger, KOR Plug', part: 'PMPN4294', impres: true, chem: 'Li-Ion, NiMh', pwr_src: '100-240 VAC', dims_mm: '117 x 445 x 170', pockets: 6 },
      { desc: 'IMPRES Multi-Unit Charger, JP Plug', part: 'PMPN4295', impres: true, chem: 'Li-Ion, NiMh', pwr_src: '100-240 VAC', dims_mm: '117 x 445 x 170', pockets: 6 },
      { desc: 'IMPRES Multi-Unit Charger, CN Plug', part: 'PMPN4296', impres: true, chem: 'Li-Ion, NiMh', pwr_src: '100-240 VAC', dims_mm: '117 x 445 x 170', pockets: 6 },
      { desc: 'IMPRES Multi-Unit Charger, TW Plug', part: 'PMPN4462', impres: true, chem: 'Li-Ion, NiMh', pwr_src: '100-240 VAC', dims_mm: '117 x 445 x 170', pockets: 6 },
      { desc: 'IMPRES Multi-Unit Charger, BIS Plug', part: 'PMPN4610', impres: true, chem: 'Li-Ion, NiMh', pwr_src: '100-240 VAC', dims_mm: '117 x 445 x 170', pockets: 6 },
      { desc: 'IMPRES Multi-Unit Charger (Base Only, No Plug)', part: 'PMPN4283', impres: true, chem: 'Li-Ion, NiMh', pwr_src: null, dims_mm: '117 x 445 x 170', pockets: 6 },
      // Vehicle
      { desc: 'IMPRES Vehicular Charger Kit', part: 'NNTN7616', impres: true, chem: 'Li-Ion, NiMh', pwr_src: 'Hardwired 12VDC', dims_mm: '133 x 88 x 88', pockets: 1 },

      // ── SUC Replacement Power Supplies ───────────────────────────────────
      { desc: 'Replacement Power Supply for IMPRES Single-Unit Charger, US/CAN/TW/JP Plug', part: 'PS000577A01', impres: false, chem: null, pwr_src: '120 VAC', dims_mm: null, pockets: null },
      { desc: 'Replacement Power Supply AC/DC Fixed Blade, US/NA Plug', part: 'PS000576A21', impres: false, chem: null, pwr_src: '120 VAC', dims_mm: null, pockets: null },
      { desc: 'Replacement Power Supply AC/DC Fixed Blade, EU Plug', part: 'PS000576A02', impres: false, chem: null, pwr_src: '100-240 VAC', dims_mm: null, pockets: null },
      { desc: 'Replacement Power Supply AC/DC Fixed Blade, UK/HK Plug', part: 'PS000576A03', impres: false, chem: null, pwr_src: '100-240 VAC', dims_mm: null, pockets: null },
      { desc: 'Replacement Power Supply AC/DC Fixed Blade, AUS/NZ Plug', part: 'PS000576A04', impres: false, chem: null, pwr_src: null, dims_mm: null, pockets: null },
      { desc: 'Replacement Power Supply AC/DC Fixed Blade, ARG Plug', part: 'PS000576A05', impres: false, chem: null, pwr_src: null, dims_mm: null, pockets: null },
      { desc: 'Replacement Power Supply AC/DC Fixed Blade, CHN Plug', part: 'PS000576A06', impres: false, chem: null, pwr_src: null, dims_mm: null, pockets: null },
      { desc: 'Replacement Power Supply AC/DC Fixed Blade, KOR Plug', part: 'PS000576A07', impres: false, chem: null, pwr_src: null, dims_mm: null, pockets: null },
      { desc: 'Replacement Power Supply AC/DC Fixed Blade, BRZ Plug', part: 'PS000576A08', impres: false, chem: null, pwr_src: '100-240 VAC', dims_mm: null, pockets: null },
      { desc: 'Replacement Power Supply AC/DC Fixed Blade, India Plug', part: 'PS000576A09', impres: false, chem: null, pwr_src: '100-240 VAC', dims_mm: null, pockets: null },

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
      { desc: 'Wall Mount Bracket for IMPRES 2 Multi-Unit Charger', part: 'BR000272A01', impres: false, chem: null, pwr_src: null, dims_mm: null, pockets: null }
    ]
  },

  // ── CATEGORY 3: RSM / AUDIO ────────────────────────────────────────────────
  {
    id: 3,
    name: 'RSM/Audio',
    cols: ['Description','Part Number','IMPRES','Intelligent Audio','AI Noise Suppression','Windporting / Noise Type','Full Duplex','Vol Ctrl','Prog Button','Audio Jack','IP Rating','HazLoc','Dimensions (mm)'],
    items: [
      {
        desc: 'RM560 IMPRES Windporting Remote Speaker, Large (IP67)',
        part: 'PMMN4170',
        impres: true, intel_audio: true, ai_noise: true,
        noise_type: 'Windporting with Noise Suppression',
        full_duplex: true, vol_ctrl: null, prog_btn: 'Emergency',
        audio_jack: true, ip: 'IP67', hazloc: 'UL',
        dims_mm: '61 x 85 x 26'
      },
      {
        desc: 'RM530 IMPRES Windporting Remote Speaker, Small (IP67)',
        part: 'PMMN4171',
        impres: true, intel_audio: true, ai_noise: true,
        noise_type: 'Windporting with Noise Suppression',
        full_duplex: true, vol_ctrl: null, prog_btn: 'Emergency',
        audio_jack: true, ip: 'IP67', hazloc: 'UL',
        dims_mm: '59 x 78 x 22'
      },
      {
        desc: 'IMPRES Noise-Canceling Remote Speaker Microphone, Large (IP54)',
        part: 'PMMN4071',
        impres: true, intel_audio: false, ai_noise: false,
        noise_type: 'Noise-canceling',
        full_duplex: false, vol_ctrl: null, prog_btn: null,
        audio_jack: true, ip: 'IP54', hazloc: 'UL',
        dims_mm: '60 x 78 x 28'
      },
      {
        desc: 'IMPRES Windporting Remote Speaker Microphone, Small (IP55)',
        part: 'PMMN4073',
        impres: true, intel_audio: false, ai_noise: false,
        noise_type: 'Windporting',
        full_duplex: false, vol_ctrl: null, prog_btn: null,
        audio_jack: true, ip: 'IP55', hazloc: 'UL',
        dims_mm: '55 x 60 x 27'
      },
      {
        desc: 'Windporting Remote Speaker Microphone, Small, Submersible (IP57)',
        part: 'PMMN4075',
        impres: false, intel_audio: false, ai_noise: false,
        noise_type: 'Windporting',
        full_duplex: false, vol_ctrl: null, prog_btn: null,
        audio_jack: true, ip: 'IP57', hazloc: 'UL',
        dims_mm: '55 x 60 x 27'
      },
      {
        desc: 'Windporting Remote Speaker Microphone, Small (IP54)',
        part: 'PMMN4076',
        impres: false, intel_audio: false, ai_noise: false,
        noise_type: 'Windporting',
        full_duplex: false, vol_ctrl: null, prog_btn: null,
        audio_jack: true, ip: 'IP54', hazloc: 'UL',
        dims_mm: '55 x 60 x 27'
      },
      {
        desc: 'Windporting Remote Speaker Microphone (IP67)',
        part: 'PMMN4108',
        impres: false, intel_audio: false, ai_noise: false,
        noise_type: 'Windporting',
        full_duplex: false, vol_ctrl: 'High/Low', prog_btn: null,
        audio_jack: false, ip: 'IP67', hazloc: null,
        dims_mm: '60 x 78 x 28'
      },
    ]
  },

  // ── CATEGORY 4: SURVEILLANCE / EARPIECES ──────────────────────────────────
  {
    id: '3b',
    name: 'RSM/Audio Replacements',
    items: [
      // RSM replacement kits (for RM560/RM530)
      { desc: 'Low Profile Swivel Clip for RM560/RM530', part: 'PMLN8121', material: null, belt_sz: null, swivel: null, display: null, d_rings: null },
      { desc: 'Replacement Dust Cover, 10-pack', part: 'PMLN8122', material: null, belt_sz: null, swivel: null, display: null, d_rings: null },
      { desc: 'Receive-Only Earpiece with Translucent Tube, Loud Audio (for RM560/RM530)', part: 'PMLN8120', material: null, belt_sz: null, swivel: null, display: null, d_rings: null },
      { desc: 'Receive-Only Earpiece with Translucent Tube and Rubber Eartip (for RM560/RM530)', part: 'PMLN8652', material: null, belt_sz: null, swivel: null, display: null, d_rings: null },
      // Surveillance accessory replacement kits
      { desc: 'Low Noise Kit with Translucent Tube and 1 Clear Rubber Eartip', part: 'RLN6242', material: null, belt_sz: null, swivel: null, display: null, d_rings: null },
      { desc: 'Replacement Standard Clear Rubber Eartip, Pack of 50', part: 'RLN6282', material: null, belt_sz: null, swivel: null, display: null, d_rings: null },
      { desc: 'Replacement Foam Plugs for RLN6242, NR 24dB, Pack of 50 pairs', part: '5080384F72', material: null, belt_sz: null, swivel: null, display: null, d_rings: null },
      { desc: 'Replacement Quick Disconnect Translucent Tube with Clear Rubber Eartip', part: 'HKLN4608', material: null, belt_sz: null, swivel: null, display: null, d_rings: null }
    ]
  },
  {
    id: 4,
    name: 'Surveillance/Earpieces',
    cols: ['Description','Part Number','IMPRES','Intelligent Audio','AI Noise Suppression','Ear Type','Mic Type','Full Duplex','HazLoc'],
    items: [
      { desc: 'IMPRES 2-Wire Surveillance Kit with Translucent Tube, Black', part: 'PMLN7269ANS', impres: true, intel_audio: true, ai_noise: true, ear_type: 'Clear rubber eartip', mic_type: null, full_duplex: false, hazloc: null },
      { desc: '2-Wire Surveillance Kit with Translucent Tube, Beige', part: 'PMLN7270', impres: false, intel_audio: false, ai_noise: false, ear_type: 'Clear rubber eartip', mic_type: null, full_duplex: false, hazloc: null },
      { desc: 'IMPRES 3-Wire Surveillance Kit with Quick Disconnect Translucent Tube, Black', part: 'PMLN6754', impres: true, intel_audio: false, ai_noise: false, ear_type: 'Clear rubber eartip', mic_type: null, full_duplex: false, hazloc: null },
      { desc: 'IMPRES 3-Wire Surveillance Kit with Quick Disconnect Translucent Tube, Beige', part: 'PMLN6755', impres: true, intel_audio: false, ai_noise: false, ear_type: 'Clear rubber eartip', mic_type: null, full_duplex: false, hazloc: null },
      { desc: 'Mag One Earbud with In-Line Microphone and PTT', part: 'PMLN5733', impres: false, intel_audio: false, ai_noise: false, ear_type: 'Earbud', mic_type: 'In-line', full_duplex: false, hazloc: null },
      { desc: 'Mag One Swivel Earpiece with In-Line Microphone and PTT', part: 'PMLN5727', impres: false, intel_audio: false, ai_noise: false, ear_type: 'Over-the-ear', mic_type: 'In-line', full_duplex: false, hazloc: 'UL' },
      { desc: 'Mag One Earset with Boom Microphone and In-Line PTT', part: 'PMLN5732', impres: false, intel_audio: false, ai_noise: false, ear_type: 'Earset', mic_type: 'Boom', full_duplex: false, hazloc: null },
      { desc: 'Adjustable D-Style Earpiece with In-Line Microphone and PTT', part: 'PMLN6757', impres: false, intel_audio: false, ai_noise: false, ear_type: 'Adjustable D-Style', mic_type: 'In-line', full_duplex: false, hazloc: null },
      { desc: 'Receive-Only Covered Earbud with Coiled Cord', part: 'AARLN4885', impres: false, intel_audio: false, ai_noise: false, ear_type: 'Foam Covered Earbud', mic_type: null, full_duplex: false, hazloc: 'UL' },
      { desc: 'Receive-Only Earpiece with Translucent Tube and Rubber Eartip', part: 'RLN4941', impres: false, intel_audio: false, ai_noise: false, ear_type: 'Clear Rubber Eartip', mic_type: null, full_duplex: false, hazloc: 'UL' },
      { desc: 'Receive-Only Earpiece with Translucent Tube and Rubber Eartip', part: 'PMLN7560', impres: false, intel_audio: false, ai_noise: false, ear_type: 'Clear Rubber Eartip', mic_type: null, full_duplex: false, hazloc: null },
      { desc: 'Receive-Only Flexible Earpiece', part: 'WADN4190', impres: false, intel_audio: false, ai_noise: false, ear_type: 'Over-the-Ear', mic_type: null, full_duplex: false, hazloc: 'UL' },
      { desc: 'Receive-Only D-Shell Earpiece', part: 'PMLN4620', impres: false, intel_audio: false, ai_noise: false, ear_type: 'Over-the-Ear', mic_type: null, full_duplex: false, hazloc: 'UL' },
      { desc: 'D-Shell Adjustable Earpiece', part: 'PMLN7396', impres: false, intel_audio: false, ai_noise: false, ear_type: 'Over-the-Ear', mic_type: null, full_duplex: false, hazloc: null },
      // WP300
      { desc: 'WP300 Wireless Bluetooth PTT POD', part: 'PMLN8298', impres: false, intel_audio: false, ai_noise: false, ear_type: null, mic_type: null, full_duplex: false, hazloc: null,
        ip: 'IP67'
      }
    ]
  },

  // ── CATEGORY 5: HEADSETS ──────────────────────────────────────────────────
  {
    id: '4b',
    name: 'Surveillance Replacements & Earpieces',
    items: [
      { desc: 'Small Custom Earpiece, Right Ear', part: 'RLN4760', variants: ['R5'] },
      { desc: 'Medium Custom Earpiece, Right Ear', part: 'RLN4761', variants: ['R5'] },
      { desc: 'Large Custom Earpiece, Right Ear', part: 'RLN4762', variants: ['R5'] },
      { desc: 'Small Custom Earpiece, Left Ear', part: 'RLN4763', variants: ['R5'] },
      { desc: 'Medium Custom Earpiece, Left Ear', part: 'RLN4764', variants: ['R5'] },
      { desc: 'Large Custom Earpiece, Left Ear', part: 'RLN4765', variants: ['R5'] },
      { desc: 'Clear EP7-Small Hearing Protectors [Sonic Defenders] Ultra Earplugs, NR 28dB', part: 'RLN6511', variants: ['R5'] },
      { desc: 'Clear EP7-Medium Hearing Protectors [Sonic Defenders] Ultra Earplugs, NR 28dB', part: 'RLN6512', variants: ['R5'] },
      { desc: 'Clear EP7-Large Hearing Protectors [Sonic Defenders] Ultra Earplugs, NR 28dB', part: 'RLN6513', variants: ['R5'] }
    ]
  },
  {
    id: 5,
    name: 'Headsets',
    cols: ['Description','Part Number','IMPRES','Headset Type','Ear Style','NRR (dB)','Mic Type','HazLoc'],
    items: [
      { desc: 'Lightweight Over-the-Head Headset, Single Muff with In-Line PTT and Boom Mic', part: 'PMLN6635', impres: false, headset_type: 'Over-the-head', ear_style: 'Single-ear', nrr_db: null, mic_type: 'Boom', hazloc: 'UL' },
      { desc: 'Heavy Duty Behind-the-Head Headset with Noise-Canceling Boom Mic', part: 'PMLN6760', impres: true, headset_type: 'Behind-the-head', ear_style: 'Dual-muff', nrr_db: 24, mic_type: 'Boom', hazloc: null },
      { desc: 'Heavy Duty Behind-the-Head Headset with Noise-Canceling Boom Mic', part: 'PMLN6763', impres: true, headset_type: 'Behind-the-head', ear_style: 'Dual-muff', nrr_db: 24, mic_type: 'Boom', hazloc: 'UL' },
      { desc: 'Heavy Duty Over-the-Head Headset with Noise-Canceling Boom Mic', part: 'PMLN7464', impres: true, headset_type: 'Over-the-head', ear_style: 'Dual-muff', nrr_db: 24, mic_type: 'Boom', hazloc: null },
      { desc: 'Heavy Duty Over-the-Head Headset with Noise-Canceling Boom Mic', part: 'PMLN7465', impres: true, headset_type: 'Over-the-head', ear_style: 'Dual-muff', nrr_db: 24, mic_type: 'Boom', hazloc: 'UL' },
      { desc: 'Mag One Ultra-Lite Behind-the-Head Headset', part: 'PMLN6761', impres: true, headset_type: 'Behind-the-head', ear_style: 'Single-ear', nrr_db: null, mic_type: 'Boom', hazloc: null },
      { desc: 'IMPRES Temple Transducer with Boom Mic and In-Line PTT', part: 'PMLN6759', impres: true, headset_type: 'Behind-the-head', ear_style: 'Bone conduction', nrr_db: null, mic_type: 'Boom', hazloc: null }
    ]
  },

  // ── CATEGORY 6: CARRY ─────────────────────────────────────────────────────
  {
    id: 6,
    name: 'Carry',
    cols: ['Description','Part Number','Material','Belt Size (in)','Swivel','Display','D-Rings'],
    items: [
      { desc: 'Hard Leather Case with 3" Swivel Belt Loop (Display)', part: 'PMLN8662', material: 'Hard leather', belt_sz: 3, swivel: true, display: true, d_rings: true },
      { desc: 'Hard Leather Case with 3" Fixed Belt Loop (Display)', part: 'PMLN8663', material: 'Hard leather', belt_sz: 3, swivel: false, display: true, d_rings: true },
      { desc: 'Nylon Case with 3" Fixed Belt Loop (Display)', part: 'PMLN8664', material: 'Nylon', belt_sz: 3, swivel: false, display: true, d_rings: true },
      { desc: 'Hard Leather Case with 3" Swivel Belt Loop (Non-Display)', part: 'PMLN8665', material: 'Hard leather', belt_sz: 3, swivel: true, display: false, d_rings: true },
      { desc: 'Hard Leather Case with 3" Fixed Belt Loop (Non-Display)', part: 'PMLN8666', material: 'Hard leather', belt_sz: 3, swivel: false, display: false, d_rings: true },
      { desc: 'Nylon Case with 3" Fixed Belt Loop (Non-Display)', part: 'PMLN8667', material: 'Nylon', belt_sz: 3, swivel: false, display: false, d_rings: false },
      { desc: 'Replacement 2.5" Swivel Belt Loop', part: 'PMLN5610', material: 'Hard leather', belt_sz: 2.5, swivel: true, display: null, d_rings: false },
      { desc: 'Replacement 3" Leather Swivel Belt Loop', part: 'PMLN5611', material: 'Hard leather', belt_sz: 3, swivel: true, display: null, d_rings: false },
      { desc: 'Spring Action 2" Belt Clip', part: 'PMLN4651', material: 'Plastic', belt_sz: 2, swivel: false, display: null, d_rings: false },
      { desc: 'Spring Action 2.5" Belt Clip', part: 'PMLN7008', material: 'Plastic', belt_sz: 2.5, swivel: false, display: null, d_rings: false },
      { desc: 'Waterproof Bag with Large Strap', part: 'HLN9985', material: null, belt_sz: null, swivel: null, display: null, d_rings: false },
      { desc: 'Adjustable Nylon Carrying Strap', part: 'NTN5243', material: 'Nylon', belt_sz: null, swivel: null, display: null, d_rings: false },
      { desc: 'Leather Radio Strap', part: 'RLN6486', material: 'Leather', belt_sz: null, swivel: null, display: null, d_rings: false },
      { desc: 'Leather Radio Strap - XL', part: 'RLN6487', material: 'Leather', belt_sz: null, swivel: null, display: null, d_rings: false },
      { desc: 'Anti-Sway Strap for Leather Radio Straps', part: 'RLN6488', material: 'Leather', belt_sz: null, swivel: null, display: null, d_rings: false }
    ]
  },

  // ── CATEGORY 7: ANTENNAS ──────────────────────────────────────────────────
  {
    id: 7,
    name: 'Antennas',
    cols: ['Description','Part Number','Band','Frequency (MHz)','Length (cm)','Type'],
    items: [
      { desc: 'UHF/GPS Combination Wideband Slim Whip Antenna (400-527 MHz)', part: 'PMAE4079', band: 'UHF', freq_mhz: '403-527', len_cm: 15, ant_type: 'Whip' },
      { desc: 'VHF/GPS Combination Helical Antenna (136-155 MHz)', part: 'PMAD4117', band: 'VHF', freq_mhz: '136-155', len_cm: 15, ant_type: 'Helical' },
      { desc: 'VHF/GPS Combination Helical Antenna (144-165 MHz)', part: 'PMAD4116', band: 'VHF', freq_mhz: '144-165', len_cm: 15, ant_type: 'Helical' },
      { desc: 'VHF/GPS Combination Helical Antenna (152-174 MHz)', part: 'PMAD4118', band: 'VHF', freq_mhz: '152-174', len_cm: 15, ant_type: 'Helical' },
      { desc: 'VHF/GPS Combination Wideband Slim Whip Antenna (136-174 MHz)', part: 'PMAD4147', band: 'VHF', freq_mhz: '136-174', len_cm: 20, ant_type: 'Whip' },
      { desc: 'UHF/GPS Combination Stubby Antenna (400-450 MHz)', part: 'PMAE4069', band: 'UHF', freq_mhz: '403-450', len_cm: 9, ant_type: 'Stubby' },
      { desc: 'UHF/GPS Combination Stubby Antenna (440-490 MHz)', part: 'PMAE4070', band: 'UHF', freq_mhz: '440-490', len_cm: 9, ant_type: 'Stubby' },
      { desc: 'UHF/GPS Combination Stubby Antenna (470-527 MHz)', part: 'PMAE4071', band: 'UHF', freq_mhz: '470-527', len_cm: 9, ant_type: 'Stubby' },
      { desc: 'VHF/GPS Combination Stubby Antenna (136-148 MHz)', part: 'PMAD4119', band: 'VHF', freq_mhz: '136-148', len_cm: 9, ant_type: 'Stubby' },
      { desc: 'VHF/GPS Combination Stubby Antenna (146-160 MHz)', part: 'PMAD4120', band: 'VHF', freq_mhz: '146-160', len_cm: 9, ant_type: 'Stubby' },
      { desc: 'VHF Stubby Antenna (160-174 MHz)', part: 'PMAD4121', band: 'VHF', freq_mhz: '160-174', len_cm: 9, ant_type: 'Stubby' },
      { desc: 'UHF Stubby Wideband (400-527 MHz)', part: 'AN000348A01', band: 'UHF', freq_mhz: '400-527', len_cm: 9, ant_type: 'Stubby' },
      { desc: "Gray antenna ID bands (pack of 10pcs)", part: "32012144001", band: null, freq_mhz: null, len_cm: null, ant_type: null, radios: ["r5"] },
      { desc: "Yellow antenna ID bands (pack of 10pcs)", part: "32012144002", band: null, freq_mhz: null, len_cm: null, ant_type: null, radios: ["r5"] },
      { desc: "Green antenna ID bands (pack of 10pcs)", part: "32012144003", band: null, freq_mhz: null, len_cm: null, ant_type: null, radios: ["r5"] },
      { desc: "Blue antenna ID bands (pack of 10pcs)", part: "32012144004", band: null, freq_mhz: null, len_cm: null, ant_type: null, radios: ["r5"] },
      { desc: "Purple antenna ID bands (pack of 10pcs)", part: "32012144005", band: null, freq_mhz: null, len_cm: null, ant_type: null, radios: ["r5"] }
    ]
  },

  // ── CATEGORY 8: CABLES ────────────────────────────────────────────────────
  {
    id: 8,
    name: 'Cables',
    cols: ['Description','Part Number'],
    items: [
      { desc: 'Portable Programming Cable (USB)', part: 'PMKN4115' },
      { desc: 'Programming, Test, and Alignment Cable', part: 'PMKN4117' }
    ]
  },

  // ── CATEGORY 9: SCREEN PROTECTORS ────────────────────────────────────────
  {
    id: 9,
    name: 'Screen Protectors',
    cols: ['Description','Part Number'],
    items: [
      { desc: 'Dust Cover', part: '0104058J40' },
      { desc: 'NFC Kit', part: 'PMLN8671' },
      { desc: 'RFID Tag Kit (EU)', part: 'PMLN8672' },
      { desc: 'RFID Tag Kit (US)', part: 'PMLN8673' },
    ]
  },

  // ── CATEGORY 10: PROGRAMMING CABLES ──────────────────────────────────────,

  // ── CATEGORY 11: IMPRES BATTERY MGMT TOOLS ───────────────────────────────
  {
    id: 11,
    name: 'Battery Fleet Management',
    cols: ['Description','Part Number'],
    items: [
      { desc: 'IMPRES Battery Fleet Management Entitlement ID (EID), NA/CAN', part: 'HKVN4036' },
      { desc: 'IMPRES Battery Fleet Management Entitlement ID (EID), EMEA',   part: 'HKVN4037' },
      { desc: 'IMPRES Battery Fleet Management Entitlement ID (EID), LA',     part: 'HKVN4038' },
      { desc: 'IMPRES Battery Fleet Management Entitlement ID (EID), Asia',   part: 'HKVN4039' }
    ]
  },

  // ── CATEGORY 12: BLUETOOTH / OPS CRITICAL WIRELESS ───────────────────────
  {
    id: 12,
    name: 'Bluetooth',
    cols: ['Description','Part Number','Ear Type','Mic Type','PTT','Talk Time (hr)','Charge Time (hr)','Weight (g)'],
    items: [
      {
        desc: 'WM500 Wireless Remote Speaker Microphone',
        part: 'PMMN4127',
        ear_type: null, mic_type: 'Omni directional, Windporting',
        ptt: true, talk_time_hr: 18, charge_time_hr: 2, weight_g: 128,
        ip: 'IP67'
      },
      {
        desc: 'WP300 Wireless Bluetooth PTT POD with Surveillance Earpiece',
        part: 'PMLN8401',
        ear_type: 'Clear rubber eartip', mic_type: null,
        ptt: true, talk_time_hr: 18, charge_time_hr: null, weight_g: null,
        ip: 'IP67'
      },
      { desc: 'WP300 Surveillance Earpiece with Translucent Tube', part: 'PMLN8190', ear_type: 'Clear rubber eartip', mic_type: null, ptt: null, talk_time_hr: null, charge_time_hr: null, weight_g: null },
      { desc: 'WP300 Swivel Earpiece with Eartip, Short Cord', part: 'PMLN8125', ear_type: 'Over-the-ear', mic_type: null, ptt: null, talk_time_hr: null, charge_time_hr: null, weight_g: null },
      { desc: 'WP300 Swivel Earpiece with Eartip, Long Cord', part: 'PMLN8077', ear_type: 'Over-the-ear', mic_type: null, ptt: null, talk_time_hr: null, charge_time_hr: null, weight_g: null },
      { desc: 'WP300 Vehicle Mount Option', part: 'PMLN8332', ear_type: null, mic_type: null, ptt: null, talk_time_hr: null, charge_time_hr: null, weight_g: null },
      { desc: 'WP300 Swivel Clip', part: 'PMLN6246', ear_type: null, mic_type: null, ptt: null, talk_time_hr: null, charge_time_hr: null, weight_g: null },
      { desc: 'WP300 Replacement Eartip, Small (5-pack)', part: 'PMLN8068', ear_type: null, mic_type: null, ptt: null, talk_time_hr: null, charge_time_hr: null, weight_g: null },
      { desc: 'WP300 Replacement Eartip, Medium (5-pack)', part: 'PMLN8069', ear_type: null, mic_type: null, ptt: null, talk_time_hr: null, charge_time_hr: null, weight_g: null },
      { desc: 'WP300 Replacement Eartip, Large (5-pack)', part: 'PMLN8070', ear_type: null, mic_type: null, ptt: null, talk_time_hr: null, charge_time_hr: null, weight_g: null },
      { desc: 'WP300 Replacement Translucent Tube', part: 'PMLN8092', ear_type: null, mic_type: null, ptt: null, talk_time_hr: null, charge_time_hr: null, weight_g: null }
    ]
  }

];

window.RADIOS_DATA = window.RADIOS_DATA || {};
window.RADIOS_DATA['r5'] = R5_CATEGORIES;
