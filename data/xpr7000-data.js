// xpr7000-data.js — XPR 7000 Series accessory data
// Source: MOTOTRBO Professional Tier Accessory Catalog (PDF verified Mar 17 2026)
// Variants: 7350, 7550, 7580, 7580e

const XPR7000_CATEGORIES = [

  // ── CATEGORY 1: BATTERIES ──────────────────────────────────────────────────
  {
    id: 'batteries',
    label: 'Batteries',
    columns: ['Description','Part Number','IMPRES','Chemistry','Typical Capacity (mAh)','Dimensions (mm)','Weight','HazLoc','IP Rating','Operating Temp'],
    items: [
      // XPR 7000 / XPR 7000e Series — first battery table in PDF
      {
        desc: 'IMPRES Slim Li-Ion 2100mAh IP68 Battery',
        part: 'PMNN4491',
        impres: true,
        chem: 'Li-Ion',
        capacity_mah: 2100,
        dims_mm: '113 x 52 x 18',
        weight_g: 130,
        hazloc: '',
        ip: 'IP68',
        op_temp: '-10\u00b0C to +60\u00b0C',
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'IMPRES Li-Ion 2450mAh IP68 Battery',
        part: 'PMNN4544',
        impres: true,
        chem: 'Li-Ion',
        capacity_mah: 2450,
        dims_mm: '113 x 52 x 23',
        weight_g: 150,
        hazloc: '',
        ip: 'IP68',
        op_temp: '-20\u00b0C to +60\u00b0C',
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'IMPRES Li-Ion 3000mAh IP68 Battery',
        part: 'PMNN4493',
        impres: true,
        chem: 'Li-Ion',
        capacity_mah: 3000,
        dims_mm: '113 x 52 x 23',
        weight_g: 155,
        hazloc: '',
        ip: 'IP68',
        op_temp: '-10\u00b0C to +60\u00b0C',
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'IMPRES Li-Ion 3000mAh IP68 Battery (for use with silent alert belt clip PMLN7296)',
        part: 'PMNN4488',
        impres: true,
        chem: 'Li-Ion',
        capacity_mah: 3000,
        dims_mm: '113 x 52 x 23',
        weight_g: 155,
        hazloc: '',
        ip: 'IP68',
        op_temp: '-10\u00b0C to +60\u00b0C',
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'IMPRES Li-Ion 2900mAh IP68 TIA4950 Battery',
        part: 'PMNN4490',
        impres: true,
        chem: 'Li-Ion',
        capacity_mah: 2900,
        dims_mm: '113 x 52 x 23',
        weight_g: 210,
        hazloc: 'UL',
        ip: 'IP68',
        op_temp: '-10\u00b0C to +60\u00b0C',
        variants: ['7350','7550','7580','7580e']
      },
      // XPR 7000 + XPR 6000 shared batteries — second battery table in PDF
      {
        desc: 'IMPRES Li-Ion 2800mAh IP67 Battery',
        part: 'PMNN4448',
        impres: true,
        chem: 'Li-Ion',
        capacity_mah: 2800,
        dims_mm: '113 x 52 x 23',
        weight_g: 155,
        hazloc: '',
        ip: 'IP67',
        op_temp: '-10\u00b0C to +60\u00b0C',
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'IMPRES Li-Ion 2500mAh IP68 TIA4950 Battery',
        part: 'NNTN8560',
        impres: true,
        chem: 'Li-Ion',
        capacity_mah: 2500,
        dims_mm: '113 x 52 x 23',
        weight_g: 210,
        hazloc: 'UL',
        ip: 'IP68',
        op_temp: '-10\u00b0C to +60\u00b0C',
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'IMPRES Li-Ion 2900mAh IP68 TIA4950 Battery',
        part: 'PMNN4489',
        impres: true,
        chem: 'Li-Ion',
        capacity_mah: 2900,
        dims_mm: '113 x 52 x 23',
        weight_g: 210,
        hazloc: 'UL',
        ip: 'IP68',
        op_temp: '-10\u00b0C to +60\u00b0C',
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'IMPRES Li-Ion 1700mAh IP57 Battery',
        part: 'PMNN4066',
        impres: true,
        chem: 'Li-Ion',
        capacity_mah: 1700,
        dims_mm: '129 x 55 x 19',
        weight_g: 145,
        hazloc: '',
        ip: 'IP57',
        op_temp: '-10\u00b0C to +60\u00b0C',
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'IMPRES Li-Ion 2400mAh IP57 Battery',
        part: 'PMNN4077',
        impres: true,
        chem: 'Li-Ion',
        capacity_mah: 2400,
        dims_mm: '129 x 55 x 23',
        weight_g: 160,
        hazloc: '',
        ip: 'IP57',
        op_temp: '-20\u00b0C to +60\u00b0C',
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'Motorola Original NiMH 1480mAh IP57 Battery',
        part: 'PMNN4065',
        impres: false,
        chem: 'NiMH',
        capacity_mah: 1480,
        dims_mm: '129 x 55 x 21',
        weight_g: 215,
        hazloc: '',
        ip: 'IP57',
        op_temp: '-20\u00b0C to +60\u00b0C',
        variants: ['7350','7550','7580','7580e']
      }
    ]
  },

  // ── CATEGORY 2: CHARGERS ───────────────────────────────────────────────────
  {
    id: 'chargers',
    label: 'Chargers',
    columns: ['Description','Part Number','IMPRES','Chemistry','Power Source','Dimensions (mm)','Pockets'],
    items: [
      // Single-unit chargers — IMPRES (R7 section applies to XPR 7000 same chargers)
      {
        desc: 'IMPRES Single-Unit Charger, US/CAN Plug',
        part: 'PMPN4576A',
        impres: true,
        chem: 'Li-Ion, NiMH',
        pwr_src: '120 VAC',
        dims_mm: '51 x 88 x 94',
        pockets: 1,
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'IMPRES Single-Unit Charger, ARG Plug',
        part: 'PMPN4573A',
        impres: true,
        chem: 'Li-Ion, NiMH',
        pwr_src: '240 VAC',
        dims_mm: '51 x 88 x 94',
        pockets: 1,
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'IMPRES Single-Unit Charger, BRZ Plug',
        part: 'PMPN4575A',
        impres: true,
        chem: 'Li-Ion, NiMH',
        pwr_src: '100-240 VAC',
        dims_mm: '51 x 88 x 94',
        pockets: 1,
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'IMPRES Single-Unit Charger, UK Plug',
        part: 'PMPN4572A',
        impres: true,
        chem: 'Li-Ion, NiMH',
        pwr_src: '240 VAC',
        dims_mm: '51 x 88 x 94',
        pockets: 1,
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'IMPRES Single-Unit Charger, EURO Plug',
        part: 'PMPN4577A',
        impres: true,
        chem: 'Li-Ion, NiMH',
        pwr_src: '240 VAC',
        dims_mm: '51 x 88 x 94',
        pockets: 1,
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'IMPRES Single-Unit Charger, AU/NZ Plug',
        part: 'PMPN4571A',
        impres: true,
        chem: 'Li-Ion, NiMH',
        pwr_src: '240 VAC',
        dims_mm: '51 x 88 x 94',
        pockets: 1,
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'IMPRES Single-Unit Charger, JAP Plug',
        part: 'PMPN4578A',
        impres: true,
        chem: 'Li-Ion, NiMH',
        pwr_src: '100-240 VAC',
        dims_mm: '51 x 88 x 94',
        pockets: 1,
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'IMPRES Single-Unit Charger, KOR Plug',
        part: 'PMPN4574A',
        impres: true,
        chem: 'Li-Ion, NiMH',
        pwr_src: '240 VAC',
        dims_mm: '51 x 88 x 94',
        pockets: 1,
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'IMPRES Single-Unit Charger, CHN Plug',
        part: 'PMPN4579A',
        impres: true,
        chem: 'Li-Ion, NiMH',
        pwr_src: '240 VAC',
        dims_mm: '51 x 88 x 94',
        pockets: 1,
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'IMPRES Single-Unit Charger, INDIA Plug',
        part: 'PMPN4582A',
        impres: true,
        chem: 'Li-Ion, NiMH',
        pwr_src: '100-240 VAC',
        dims_mm: '51 x 88 x 94',
        pockets: 1,
        variants: ['7350','7550','7580','7580e']
      },
      // Non-IMPRES single-unit chargers
      {
        desc: 'Single-Unit Rapid Rate Charger, CHN Plug',
        part: 'NNTN8224',
        impres: false,
        chem: 'Li-Ion, NiMH',
        pwr_src: '240 VAC',
        dims_mm: '61 x 97 x 163',
        pockets: 1,
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'Single-Unit Rapid Rate Charger, Switch-Mode 21W, BZL Plug',
        part: 'NNTN8280',
        impres: false,
        chem: 'Li-Ion, NiMH',
        pwr_src: '100-240 VAC',
        dims_mm: '61 x 97 x 163',
        pockets: 1,
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'Single-Unit Rapid Rate Charger, EURO Plug',
        part: 'NNTN8292',
        impres: false,
        chem: 'Li-Ion, NiMH',
        pwr_src: '240 VAC',
        dims_mm: '61 x 97 x 163',
        pockets: 1,
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'Single-Unit Rapid Rate Charger, UK Plug',
        part: 'NNTN8293',
        impres: false,
        chem: 'Li-Ion, NiMH',
        pwr_src: '240 VAC',
        dims_mm: '61 x 97 x 163',
        pockets: 1,
        variants: ['7350','7550','7580','7580e']
      },
      // Multi-unit chargers
      {
        desc: 'IMPRES 2 Multi-Unit Fast Charger with 1 Display, US/CAN Plug',
        part: 'PMPN4284',
        impres: true,
        chem: 'Li-Ion, NiMH',
        pwr_src: '100-240 VAC',
        dims_mm: '153 x 445 x 292',
        pockets: 6,
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'IMPRES 2 Multi-Unit Fast Charger with 1 Display, UK Plug',
        part: 'PMPN4290',
        impres: true,
        chem: 'Li-Ion, NiMH',
        pwr_src: '100-240 VAC',
        dims_mm: '153 x 445 x 292',
        pockets: 6,
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'IMPRES 2 Multi-Unit Fast Charger with 1 Display, EURO Plug',
        part: 'PMPN4289',
        impres: true,
        chem: 'Li-Ion, NiMH',
        pwr_src: '100-240 VAC',
        dims_mm: '153 x 445 x 292',
        pockets: 6,
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'IMPRES 2 Multi-Unit Fast Charger with 1 Display, AU/NZ Plug',
        part: 'PMPN4293',
        impres: true,
        chem: 'Li-Ion, NiMH',
        pwr_src: '100-240 VAC',
        dims_mm: '153 x 445 x 292',
        pockets: 6,
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'IMPRES 2 Multi-Unit Fast Charger with 1 Display, ARG Plug',
        part: 'PMPN4291',
        impres: true,
        chem: 'Li-Ion, NiMH',
        pwr_src: '100-240 VAC',
        dims_mm: '153 x 445 x 292',
        pockets: 6,
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'IMPRES 2 Multi-Unit Fast Charger with 1 Display, BZL Plug',
        part: 'PMPN4292',
        impres: true,
        chem: 'Li-Ion, NiMH',
        pwr_src: '100-240 VAC',
        dims_mm: '153 x 445 x 292',
        pockets: 6,
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'IMPRES 2 Multi-Unit Fast Charger with 1 Display, JAP Plug',
        part: 'PMPN4295',
        impres: true,
        chem: 'Li-Ion, NiMH',
        pwr_src: '100-240 VAC',
        dims_mm: '153 x 445 x 292',
        pockets: 6,
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'IMPRES 2 Multi-Unit Fast Charger with 1 Display, KOR Plug',
        part: 'PMPN4294',
        impres: true,
        chem: 'Li-Ion, NiMH',
        pwr_src: '100-240 VAC',
        dims_mm: '153 x 445 x 292',
        pockets: 6,
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'IMPRES 2 Multi-Unit Fast Charger with 1 Display, CHN Plug',
        part: 'PMPN4296',
        impres: true,
        chem: 'Li-Ion, NiMH',
        pwr_src: '100-240 VAC',
        dims_mm: '153 x 445 x 292',
        pockets: 6,
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'IMPRES 2 Multi-Unit Fast Charger with 1 Display, TW Plug',
        part: 'PMPN4462',
        impres: true,
        chem: 'Li-Ion, NiMH',
        pwr_src: '100-240 VAC',
        dims_mm: '153 x 445 x 292',
        pockets: 6,
        variants: ['7350','7550','7580','7580e']
      },
      // Vehicle chargers
      {
        desc: 'IMPRES Single-Unit Rapid Rate Vehicular Charger, Heavy-Duty Permanent Mount',
        part: 'NNTN7616',
        impres: true,
        chem: 'Li-Ion, NiMH',
        pwr_src: '12 VDC (hardwire)',
        dims_mm: '200 x 83 x 97',
        pockets: 1,
        variants: ['7350','7550','7580','7580e']
      },

      // ── SUC Replacement Power Supplies ───────────────────────────────────
      { desc: 'Replacement Power Supply for IMPRES Single-Unit Charger, US Plug', part: '25009297001', impres: false, chem: null, pwr_src: '120 VAC', dims_mm: null, pockets: null, variants: ['7350','7550','7580','7580e'] },
      { desc: 'Replacement Power Supply for IMPRES Single-Unit Charger, EU Plug', part: 'PS000037A01', impres: false, chem: null, pwr_src: '240 VAC', dims_mm: null, pockets: null, variants: ['7350','7550','7580','7580e'] },
      { desc: 'Replacement Power Supply for IMPRES Single-Unit Charger, UK Plug', part: 'PS000037A02', impres: false, chem: null, pwr_src: '240 VAC', dims_mm: null, pockets: null, variants: ['7350','7550','7580','7580e'] },
      { desc: 'Replacement Power Supply for IMPRES Single-Unit Charger, AUS/NZ Plug', part: 'PS000037A03', impres: false, chem: null, pwr_src: '240 VAC', dims_mm: null, pockets: null, variants: ['7350','7550','7580','7580e'] },
      { desc: 'Replacement Power Supply for IMPRES Single-Unit Charger, ARG Plug', part: 'PS000037A04', impres: false, chem: null, pwr_src: '240 VAC', dims_mm: null, pockets: null, variants: ['7350','7550','7580','7580e'] },
      { desc: 'Replacement Power Supply for IMPRES Single-Unit Charger, CHN Plug', part: 'PS000037A05', impres: false, chem: null, pwr_src: '240 VAC', dims_mm: null, pockets: null, variants: ['7350','7550','7580','7580e'] },
      { desc: 'Replacement Power Supply for IMPRES Single-Unit Charger, KOR Plug', part: 'PS000037A06', impres: false, chem: null, pwr_src: '240 VAC', dims_mm: null, pockets: null, variants: ['7350','7550','7580','7580e'] },
      { desc: 'Replacement Power Supply for IMPRES Single-Unit Charger, BRZ Plug', part: 'EPNN9356A', impres: false, chem: null, pwr_src: '100-240 VAC', dims_mm: null, pockets: null, variants: ['7350','7550','7580','7580e'] },
      { desc: 'Replacement Power Supply for IMPRES Single-Unit Charger, JAP Plug', part: 'PMLN5229A', impres: false, chem: null, pwr_src: '100-240 VAC', dims_mm: null, pockets: null, variants: ['7350','7550','7580','7580e'] },
      { desc: 'Replacement Power Supply for IMPRES Single-Unit Charger, India Plug', part: 'EPNN9295A', impres: false, chem: null, pwr_src: '100-240 VAC', dims_mm: null, pockets: null, variants: ['7350','7550','7580','7580e'] },

      // ── MUC Replacement Power Supply + Cords ─────────────────────────────
      { desc: 'Replacement Power Supply for IMPRES 2 Multi-Unit Charger, 100-240 VAC (no cord)', part: 'PS000242A01', impres: false, chem: null, pwr_src: '100-240 VAC', dims_mm: null, pockets: null, variants: ['7350','7550','7580','7580e'] },
      { desc: 'Power Cord for IMPRES 2 Multi-Unit Charger, US/CAN Plug', part: '3087791G01', impres: false, chem: null, pwr_src: null, dims_mm: null, pockets: null, variants: ['7350','7550','7580','7580e'] },
      { desc: 'Power Cord for IMPRES 2 Multi-Unit Charger, EURO Plug', part: '3087791G04', impres: false, chem: null, pwr_src: null, dims_mm: null, pockets: null, variants: ['7350','7550','7580','7580e'] },
      { desc: 'Power Cord for IMPRES 2 Multi-Unit Charger, UK Plug', part: '3087791G07', impres: false, chem: null, pwr_src: null, dims_mm: null, pockets: null, variants: ['7350','7550','7580','7580e'] },
      { desc: 'Power Cord for IMPRES 2 Multi-Unit Charger, AUS/NZ Plug', part: '3087791G10', impres: false, chem: null, pwr_src: null, dims_mm: null, pockets: null, variants: ['7350','7550','7580','7580e'] },
      { desc: 'Power Cord for IMPRES 2 Multi-Unit Charger, ARG Plug', part: '3087791G13', impres: false, chem: null, pwr_src: null, dims_mm: null, pockets: null, variants: ['7350','7550','7580','7580e'] },
      { desc: 'Power Cord for IMPRES 2 Multi-Unit Charger, KOR Plug', part: '3087791G16', impres: false, chem: null, pwr_src: null, dims_mm: null, pockets: null, variants: ['7350','7550','7580','7580e'] },
      { desc: 'Power Cord for IMPRES 2 Multi-Unit Charger, JAP Plug', part: '3087791G20', impres: false, chem: null, pwr_src: null, dims_mm: null, pockets: null, variants: ['7350','7550','7580','7580e'] },
      { desc: 'Power Cord for IMPRES 2 Multi-Unit Charger, BZL Plug', part: '3087791G22', impres: false, chem: null, pwr_src: null, dims_mm: null, pockets: null, variants: ['7350','7550','7580','7580e'] },
      { desc: 'Power Cord for IMPRES 2 Multi-Unit Charger, CHN Plug', part: 'CB000199A01', impres: false, chem: null, pwr_src: null, dims_mm: null, pockets: null, variants: ['7350','7550','7580','7580e'] },
      { desc: 'Power Cord for IMPRES 2 Multi-Unit Charger, TW Plug', part: 'CB000805A01', impres: false, chem: null, pwr_src: null, dims_mm: null, pockets: null, variants: ['7350','7550','7580','7580e'] },

      // ── MUC Accessories ──────────────────────────────────────────────────
      { desc: 'Interchangeable Charging Pocket for IMPRES 2 Multi-Unit Charger', part: 'AS000129A01', impres: false, chem: null, pwr_src: null, dims_mm: null, pockets: null, variants: ['7350','7550','7580','7580e'] },
      { desc: 'Wall Mount Bracket for IMPRES 2 Multi-Unit Charger', part: 'BR000272A01', impres: false, chem: null, pwr_src: null, dims_mm: null, pockets: null, variants: ['7350','7550','7580','7580e'] },
      {
        desc: 'Travel Charger, Rapid Rate with Voltage Regulated Adapter, Mounting Bracket and Coil Cord',
        part: 'NNTN8525',
        impres: false,
        chem: 'Li-Ion, NiMH',
        pwr_src: '12 VDC cigarette lighter adapter',
        dims_mm: '58 x 64 x 67',
        pockets: 1,
        variants: ['7350','7550','7580','7580e']
      }
    ]
  },

  // ── CATEGORY 3: RSM / AUDIO ────────────────────────────────────────────────
  {
    id: 'rsm',
    label: 'RSM/Audio',
    columns: ['Description','Part Number','IMPRES','Intelligent Audio','AI Noise Suppress','Windporting/Noise Type','Full Duplex','Vol Ctrl','Prog Button','Audio Jack','IP Rating','HazLoc','Dimensions (mm)'],
    items: [
      {
        desc: 'Windporting Remote Speaker Microphone, Small (IP54)',
        part: 'PMMN4024',
        impres: false,
        intel_audio: false,
        ai_noise: false,
        windporting: 'Windporting',
        noise_cancel: false,
        full_duplex: false,
        vol_ctrl: true,
        prog_btn: '',
        audio_jack: true,
        ip: 'IP54',
        hazloc: 'UL',
        dims_mm: '55 x 60 x 27',
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'IMPRES Windporting Remote Speaker Microphone, Small (IP54)',
        part: 'PMMN4025',
        impres: true,
        intel_audio: true,
        ai_noise: false,
        windporting: 'Windporting',
        noise_cancel: false,
        full_duplex: false,
        vol_ctrl: true,
        prog_btn: '',
        audio_jack: true,
        ip: 'IP54',
        hazloc: 'UL',
        dims_mm: '55 x 60 x 27',
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'Windporting Remote Speaker Microphone, Small, Submersible (IP57)',
        part: 'PMMN4040',
        impres: false,
        intel_audio: false,
        ai_noise: false,
        windporting: 'Windporting',
        noise_cancel: false,
        full_duplex: false,
        vol_ctrl: true,
        prog_btn: '',
        audio_jack: true,
        ip: 'IP57',
        hazloc: 'UL',
        dims_mm: '55 x 60 x 27',
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'IMPRES Windporting Remote Speaker Microphone, Large, Submersible (IP57)',
        part: 'PMMN4046',
        impres: true,
        intel_audio: false,
        ai_noise: false,
        windporting: 'Windporting',
        noise_cancel: false,
        full_duplex: false,
        vol_ctrl: true,
        prog_btn: '',
        audio_jack: true,
        ip: 'IP57',
        hazloc: 'UL',
        dims_mm: '60 x 78 x 28',
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'IMPRES Noise-Canceling Remote Speaker Microphone, Large (IP54)',
        part: 'PMMN4050',
        impres: true,
        intel_audio: false,
        ai_noise: false,
        windporting: 'Noise-Canceling',
        noise_cancel: true,
        full_duplex: false,
        vol_ctrl: true,
        prog_btn: '',
        audio_jack: true,
        ip: 'IP54',
        hazloc: 'UL',
        dims_mm: '60 x 78 x 28',
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'IMPRES Industrial Noise-Canceling (INC) Dual Mic Noise Suppression RSM, Submersible (IP57)',
        part: 'NNTN8382',
        impres: true,
        intel_audio: false,
        ai_noise: false,
        windporting: 'Dual Mic Noise Suppression',
        noise_cancel: false,
        full_duplex: false,
        vol_ctrl: false,
        prog_btn: '',
        audio_jack: true,
        ip: 'IP57',
        hazloc: 'UL',
        dims_mm: '60 x 78 x 28',
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'IMPRES Industrial Noise-Canceling (INC) Dual Mic Noise Suppression RSM (IP54)',
        part: 'NNTN8383',
        impres: true,
        intel_audio: false,
        ai_noise: false,
        windporting: 'Dual Mic Noise Suppression',
        noise_cancel: false,
        full_duplex: false,
        vol_ctrl: false,
        prog_btn: '',
        audio_jack: true,
        ip: 'IP54',
        hazloc: 'UL',
        dims_mm: '60 x 78 x 28',
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'IMPRES Windporting Remote Speaker Microphone (IP64)',
        part: 'PMMN4067',
        impres: true,
        intel_audio: false,
        ai_noise: false,
        windporting: 'Windporting',
        noise_cancel: false,
        full_duplex: false,
        vol_ctrl: true,
        prog_btn: '',
        audio_jack: true,
        ip: 'IP64',
        hazloc: 'ATEX',
        dims_mm: '60 x 78 x 28',
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'IMPRES Active Noise-Canceling RSM with Large Front PTT and Side PTT (IP67)',
        part: 'PMMN4102',
        impres: true,
        intel_audio: true,
        ai_noise: false,
        windporting: 'Noise-Canceling',
        noise_cancel: true,
        full_duplex: false,
        vol_ctrl: false,
        prog_btn: 'Nexus and 3.5mm locking',
        audio_jack: true,
        ip: 'IP67',
        hazloc: 'UL',
        dims_mm: '68 x 94 x 29',
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'IMPRES Omni Remote Speaker Microphone with Large Front PTT and Side PTT (IP67)',
        part: 'PMMN4113',
        impres: true,
        intel_audio: true,
        ai_noise: false,
        windporting: 'Windporting',
        noise_cancel: false,
        full_duplex: false,
        vol_ctrl: false,
        prog_btn: 'Nexus and 3.5mm locking',
        audio_jack: true,
        ip: 'IP67',
        hazloc: 'UL',
        dims_mm: '68 x 94 x 29',
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'IMPRES Windporting Remote Speaker Microphone, Large, Submersible (IP68)',
        part: 'PMMN4099',
        impres: true,
        intel_audio: false,
        ai_noise: false,
        windporting: 'Windporting',
        noise_cancel: false,
        full_duplex: false,
        vol_ctrl: false,
        prog_btn: '',
        audio_jack: true,
        ip: 'IP68',
        hazloc: 'UL',
        dims_mm: '60 x 78 x 28',
        variants: ['7350','7550','7580','7580e']
      }
    ]
  },

  // ── CATEGORY 4: SURVEILLANCE / EARPIECES ──────────────────────────────────
  {
    id: 'rsm_replacements',
    label: 'RSM/Audio Replacements',
    columns: ['Description','Part Number'],
    items: [
      // RSM accessories with standard 3.5mm jack
      { desc: 'Replacement Coil Cord Kit for PMMN4024 and PMMN4040', part: 'RLN6074', variants: ['7350','7550','7580','7580e'] },
      { desc: 'Replacement Coil Cord Kit for PMMN4025, PMMN4046, and PMMN4050', part: 'RLN6075', variants: ['7350','7550','7580','7580e'] },
      { desc: 'Translucent Tube (RX only) for PMMN4094, PMMN4110, PMMN4102, PMMN4113', part: 'PMLN7188', variants: ['7350','7550','7580','7580e'] },
      { desc: 'One-Wire Flexible Ear Receiver, Black (for NNTN8383 only)', part: 'BDN6719', variants: ['7350','7550','7580','7580e'] },
      { desc: 'One-Wire Earpiece, Black (for NNTN8383 only)', part: 'BDN6726', variants: ['7350','7550','7580','7580e'] },
      // Surveillance accessory replacement kits
      { desc: 'Low Noise Kit with Translucent Tube and 1 Clear Rubber Eartip', part: 'RLN6242', variants: ['7350','7550','7580','7580e'] },
      { desc: 'Replacement Standard Clear Rubber Eartip, Pack of 50', part: 'RLN6282', variants: ['7350','7550','7580','7580e'] },
      { desc: 'Replacement Foam Plugs for RLN6242, NR 24dB, Pack of 50 pairs', part: '5080384F72', variants: ['7350','7550','7580','7580e'] },
      { desc: 'Low Noise Kit with 1 Clear Rubber Eartip', part: 'RLN5886', variants: ['7350','7550','7580','7580e'] },
      { desc: 'Replacement Standard Clear Rubber Eartip, Pack of 10', part: '67009254001', variants: ['7350','7550','7580','7580e'] },
      { desc: 'Replacement Quick Disconnect Translucent Tube with Clear Rubber Eartip (for PMLN5724/5726)', part: 'HKLN4608', variants: ['7350','7550','7580','7580e'] },
      { desc: 'Replacement Quick Disconnect Translucent Tube with Clear Rubber Eartip (for PMLN5957)', part: 'PMLN6175', variants: ['7350','7550','7580','7580e'] }
    ]
  },
  {
    id: 'surveillance',
    label: 'Surveillance/Earpieces',
    columns: ['Description','Part Number','IMPRES','Intelligent Audio','AI Noise Suppress','Ear Type','Mic Type','Full Duplex','HazLoc'],
    items: [
      {
        desc: '1-Wire Receive-Only Earpiece, Black',
        part: 'PMLN6125',
        impres: true,
        intel_audio: false,
        ai_noise: false,
        ear_type: 'Earpiece',
        mic_type: '',
        full_duplex: false,
        hazloc: 'UL',
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: '1-Wire Receive-Only Earpiece, Beige',
        part: 'PMLN6126',
        impres: true,
        intel_audio: false,
        ai_noise: false,
        ear_type: 'Earpiece',
        mic_type: '',
        full_duplex: false,
        hazloc: 'UL',
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'IMPRES 2-Wire Earhook with Earbud Earpiece, Black',
        part: 'PMLN6127',
        impres: true,
        intel_audio: true,
        ai_noise: false,
        ear_type: 'Earpiece',
        mic_type: '',
        full_duplex: false,
        hazloc: 'UL',
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'IMPRES 2-Wire Earhook with Earbud Earpiece, Beige',
        part: 'PMLN6128',
        impres: true,
        intel_audio: true,
        ai_noise: false,
        ear_type: 'Earpiece',
        mic_type: '',
        full_duplex: false,
        hazloc: 'UL',
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: '1-Wire Surveillance Kit with Translucent Tube, Black',
        part: 'NNTN8459',
        impres: false,
        intel_audio: false,
        ai_noise: false,
        ear_type: 'Clear rubber eartip',
        mic_type: '',
        full_duplex: false,
        hazloc: 'UL',
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'IMPRES 2-Wire Surveillance Kit with Translucent Tube, Black',
        part: 'PMLN6129',
        impres: true,
        intel_audio: true,
        ai_noise: false,
        ear_type: 'Clear rubber eartip',
        mic_type: '',
        full_duplex: false,
        hazloc: 'UL',
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'IMPRES 2-Wire Surveillance Kit with Translucent Tube, Beige',
        part: 'PMLN6130',
        impres: true,
        intel_audio: true,
        ai_noise: false,
        ear_type: 'Clear rubber eartip',
        mic_type: '',
        full_duplex: false,
        hazloc: 'UL',
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'IMPRES 3-Wire Surveillance Kit with Translucent Tube, Black',
        part: 'PMLN6123',
        impres: true,
        intel_audio: true,
        ai_noise: false,
        ear_type: 'Clear rubber eartip',
        mic_type: '',
        full_duplex: false,
        hazloc: 'UL',
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'IMPRES 3-Wire Surveillance Kit with Translucent Tube, Beige',
        part: 'PMLN6124',
        impres: true,
        intel_audio: true,
        ai_noise: false,
        ear_type: 'Clear rubber eartip',
        mic_type: '',
        full_duplex: false,
        hazloc: 'UL',
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: '2-Wire Surveillance Kit with Translucent Tube, Black',
        part: 'PMLN7269',
        impres: false,
        intel_audio: false,
        ai_noise: false,
        ear_type: 'Clear rubber eartip',
        mic_type: '',
        full_duplex: false,
        hazloc: '',
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: '2-Wire Surveillance Kit with Translucent Tube, Beige',
        part: 'PMLN7270',
        impres: false,
        intel_audio: false,
        ai_noise: false,
        ear_type: 'Clear rubber eartip',
        mic_type: '',
        full_duplex: false,
        hazloc: '',
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'IMPRES 3-Wire Surveillance Kit with Quick Disconnect Translucent Tube, Black',
        part: 'PMLN6754',
        impres: true,
        intel_audio: true,
        ai_noise: false,
        ear_type: 'Clear rubber eartip',
        mic_type: '',
        full_duplex: false,
        hazloc: '',
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'IMPRES 3-Wire Surveillance Kit with Quick Disconnect Translucent Tube, Beige',
        part: 'PMLN6755',
        impres: true,
        intel_audio: true,
        ai_noise: false,
        ear_type: 'Clear rubber eartip',
        mic_type: '',
        full_duplex: false,
        hazloc: '',
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: '1-Wire Surveillance Kit, Black',
        part: 'PMLN7158',
        impres: false,
        intel_audio: false,
        ai_noise: false,
        ear_type: 'Clear rubber eartip',
        mic_type: '',
        full_duplex: false,
        hazloc: '',
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: '2-Wire Surveillance Kit, Black',
        part: 'PMLN7157',
        impres: false,
        intel_audio: false,
        ai_noise: false,
        ear_type: 'Clear rubber eartip',
        mic_type: '',
        full_duplex: false,
        hazloc: '',
        variants: ['7350','7550','7580','7580e']
      }
    ]
  },

  // ── CATEGORY 5: HEADSETS ──────────────────────────────────────────────────
  {
    id: 'surv_replacements',
    label: 'Surveillance Replacements & Earpieces',
    columns: ['Description','Part Number'],
    items: [
      // Custom earpieces (for RLN6242 compatible kits)
      { desc: 'Small Custom Earpiece, Right Ear', part: 'RLN4760', variants: ['7350','7550','7580','7580e'] },
      { desc: 'Medium Custom Earpiece, Right Ear', part: 'RLN4761', variants: ['7350','7550','7580','7580e'] },
      { desc: 'Large Custom Earpiece, Right Ear', part: 'RLN4762', variants: ['7350','7550','7580','7580e'] },
      { desc: 'Small Custom Earpiece, Left Ear', part: 'RLN4763', variants: ['7350','7550','7580','7580e'] },
      { desc: 'Medium Custom Earpiece, Left Ear', part: 'RLN4764', variants: ['7350','7550','7580','7580e'] },
      { desc: 'Large Custom Earpiece, Left Ear', part: 'RLN4765', variants: ['7350','7550','7580','7580e'] },
      // Hearing protection accessories
      { desc: 'Clear EP7-Small Hearing Protectors [Sonic Defenders] Ultra Earplugs, NR 28dB', part: 'RLN6511', variants: ['7350','7550','7580','7580e'] },
      { desc: 'Clear EP7-Medium Hearing Protectors [Sonic Defenders] Ultra Earplugs, NR 28dB', part: 'RLN6512', variants: ['7350','7550','7580','7580e'] },
      { desc: 'Clear EP7-Large Hearing Protectors [Sonic Defenders] Ultra Earplugs, NR 28dB', part: 'RLN6513', variants: ['7350','7550','7580','7580e'] }
    ]
  },
  {
    id: 'headsets',
    label: 'Headsets',
    columns: ['Description','Part Number','IMPRES','Headset Type','Ear Style','NRR (dB)','Mic Type','HazLoc'],
    items: [
      {
        desc: 'Heavy Duty Behind-the-Head Headset with Noise-Canceling Boom Mic (IP54)',
        part: 'PMLN6852',
        impres: true,
        headset_type: 'Behind-the-Head',
        ear_style: 'Dual-Muff',
        nrr_db: 24,
        mic_type: 'Boom',
        hazloc: '',
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'Heavy Duty Over-the-Head Headset with Noise-Canceling Boom Mic',
        part: 'PMLN7466',
        impres: true,
        headset_type: 'Over-the-Head',
        ear_style: 'Dual-Muff',
        nrr_db: 24,
        mic_type: 'Boom',
        hazloc: '',
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'IMPRES Temple Transducer Headset',
        part: 'PMLN5101',
        impres: true,
        headset_type: 'Behind-the-Head',
        ear_style: 'Bone Conduction',
        nrr_db: null,
        mic_type: 'Boom',
        hazloc: '',
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'Lightweight Over-the-Head Headset',
        part: 'RMN5058',
        impres: true,
        headset_type: 'Over-the-Head',
        ear_style: 'Single-Ear',
        nrr_db: null,
        mic_type: 'Boom',
        hazloc: 'UL',
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'Heavy Duty Behind-the-Head Headset with Noise-Canceling Boom Mic (UL)',
        part: 'PMLN6853',
        impres: true,
        headset_type: 'Behind-the-Head',
        ear_style: 'Dual-Muff',
        nrr_db: 24,
        mic_type: 'Boom',
        hazloc: 'UL',
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'Heavy Duty Over-the-Head Headset with Noise-Canceling Boom Mic (UL)',
        part: 'PMLN7467',
        impres: true,
        headset_type: 'Over-the-Head',
        ear_style: 'Dual-Muff',
        nrr_db: 24,
        mic_type: 'Boom',
        hazloc: 'UL',
        variants: ['7350','7550','7580','7580e']
      },
      // 3M Peltor headsets
      {
        desc: '3M Peltor MT Series Over-the-Head Headset, Direct Radio Connect',
        part: 'RMN5137',
        impres: false,
        headset_type: 'Over-the-Head',
        ear_style: 'Dual-Ear',
        nrr_db: 25,
        mic_type: 'Boom',
        hazloc: 'UL',
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: '3M Peltor MT Series Neckband Headset, Direct Radio Connect',
        part: 'RMN5138',
        impres: false,
        headset_type: 'Neckband',
        ear_style: 'Dual-Ear',
        nrr_db: 24,
        mic_type: 'Boom',
        hazloc: 'UL',
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: '3M Peltor MT Series Hard Hat Attached Headset, Direct Radio Connect',
        part: 'RMN5139',
        impres: false,
        headset_type: 'Hard Hat Attached',
        ear_style: 'Dual-Ear',
        nrr_db: 21,
        mic_type: 'Boom',
        hazloc: 'UL',
        variants: ['7350','7550','7580','7580e']
      },
      // Tactical headsets
      {
        desc: 'Tactical PTT Only Interface Module',
        part: 'PMLN6827',
        impres: false,
        headset_type: 'N/A',
        ear_style: 'N/A',
        nrr_db: null,
        mic_type: '',
        hazloc: '',
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'Tactical Temple Transducer with Noise-Canceling Boom Microphone (requires interface module PMLN6827)',
        part: 'PMLN6833',
        impres: false,
        headset_type: 'Over-the-Head',
        ear_style: 'Bone Conduction',
        nrr_db: null,
        mic_type: 'Boom',
        hazloc: '',
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'Tactical Remote Body PTT (for use with interface module PMLN6827)',
        part: 'PMLN6767',
        impres: false,
        headset_type: 'N/A',
        ear_style: 'N/A',
        nrr_db: null,
        mic_type: '',
        hazloc: '',
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'Tactical Remote Ring PTT (for use with interface module PMLN6827)',
        part: 'PMLN6830',
        impres: false,
        headset_type: 'N/A',
        ear_style: 'N/A',
        nrr_db: null,
        mic_type: '',
        hazloc: '',
        variants: ['7350','7550','7580','7580e']
      },
      // Mag One headsets
      {
        desc: 'Mag One Lightweight Over-the-Head Headset',
        part: 'PMLN5974',
        impres: false,
        headset_type: 'Over-the-Head',
        ear_style: 'Single-Ear',
        nrr_db: null,
        mic_type: 'Boom',
        hazloc: '',
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'Mag One Ultra-Lite Behind-the-Head Headset',
        part: 'PMLN5979',
        impres: false,
        headset_type: 'Behind-the-Head',
        ear_style: 'Single-Ear',
        nrr_db: null,
        mic_type: 'Boom',
        hazloc: '',
        variants: ['7350','7550','7580','7580e']
      },
      // 3M Peltor extras
      {
        desc: '3M Peltor TacticalPro Series Neckband Headset with Nexus Connector',
        part: 'RMN5135',
        impres: false,
        headset_type: 'Neckband',
        ear_style: 'Dual-Ear',
        nrr_db: 25,
        mic_type: 'Boom',
        hazloc: '',
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: '3M Peltor PTT Nexus Adapter (requires headset)',
        part: 'PMLN6095',
        impres: false,
        headset_type: 'N/A',
        ear_style: 'N/A',
        nrr_db: null,
        mic_type: '',
        hazloc: '',
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: '3M Peltor Earmuff Hygiene Kit Black Earseals',
        part: 'RLN4923',
        impres: false,
        headset_type: 'N/A',
        ear_style: 'N/A',
        nrr_db: null,
        mic_type: '',
        hazloc: '',
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: '3M Peltor Boom Microphone Wind Screen',
        part: 'RLN6543',
        impres: false,
        headset_type: 'N/A',
        ear_style: 'N/A',
        nrr_db: null,
        mic_type: '',
        hazloc: '',
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: '3M Peltor Metal Boom with Microphone',
        part: 'RMN5131',
        impres: false,
        headset_type: 'N/A',
        ear_style: 'N/A',
        nrr_db: null,
        mic_type: 'Boom',
        hazloc: '',
        variants: ['7350','7550','7580','7580e']
      }
    ]
  },

  // ── CATEGORY 6: CARRY SOLUTIONS ───────────────────────────────────────────
  {
    id: 'carry',
    label: 'Carry',
    columns: ['Description','Part Number','Material','Belt Size (in)','Swivel/Fixed','Display','D-Rings'],
    items: [
      {
        desc: 'Hard Leather Case with 2.5-Inch Swivel Belt Loop (Display)',
        part: 'PMLN5019',
        material: 'Hard leather',
        belt_sz: '2.5',
        swivel: 'Swivel',
        display: 'Display',
        d_rings: true,
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'Hard Leather Case with 3-Inch Swivel Belt Loop (Display)',
        part: 'PMLN5020',
        material: 'Hard leather',
        belt_sz: '3',
        swivel: 'Swivel',
        display: 'Display',
        d_rings: true,
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'Hard Leather Case with 3-Inch Fixed Belt Loop (Display)',
        part: 'PMLN5021',
        material: 'Hard leather',
        belt_sz: '3',
        swivel: 'Fixed',
        display: 'Display',
        d_rings: true,
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'Hard Leather Case with 2.5-Inch Swivel Belt Loop (Non-Display)',
        part: 'PMLN5028',
        material: 'Hard leather',
        belt_sz: '2.5',
        swivel: 'Swivel',
        display: 'Non-display',
        d_rings: true,
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'Hard Leather Case with 3-Inch Swivel Belt Loop (Non-Display)',
        part: 'PMLN5029',
        material: 'Hard leather',
        belt_sz: '3',
        swivel: 'Swivel',
        display: 'Non-display',
        d_rings: true,
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'Hard Leather Case with 3-Inch Fixed Belt Loop (Non-Display)',
        part: 'PMLN5030',
        material: 'Hard leather',
        belt_sz: '3',
        swivel: 'Fixed',
        display: 'Non-display',
        d_rings: true,
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'Nylon Case with 3-Inch Fixed Belt Loop (Full Keypad Model)',
        part: 'PMLN5844',
        material: 'Nylon',
        belt_sz: '3',
        swivel: 'Fixed',
        display: 'Display',
        d_rings: true,
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'Hard Leather Case with 2.5-Inch Swivel Belt Loop (Full Keypad)',
        part: 'PMLN5842',
        material: 'Hard leather',
        belt_sz: '2.5',
        swivel: 'Swivel',
        display: 'Display',
        d_rings: true,
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'Hard Leather Case with 3-Inch Swivel Belt Loop (Full Keypad)',
        part: 'PMLN5840',
        material: 'Hard leather',
        belt_sz: '3',
        swivel: 'Swivel',
        display: 'Display',
        d_rings: true,
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'Hard Leather Case with 3-Inch Fixed Belt Loop (Full Keypad)',
        part: 'PMLN5838',
        material: 'Hard leather',
        belt_sz: '3',
        swivel: 'Fixed',
        display: 'Display',
        d_rings: true,
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'Nylon Case with 3-Inch Fixed Belt Loop (Non-Display)',
        part: 'PMLN5845',
        material: 'Nylon',
        belt_sz: '3',
        swivel: 'Fixed',
        display: 'Non-display',
        d_rings: true,
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'Hard Leather Case with 2.5-Inch Swivel Belt Loop (Non-Display Full Keypad)',
        part: 'PMLN5843',
        material: 'Hard leather',
        belt_sz: '2.5',
        swivel: 'Swivel',
        display: 'Non-display',
        d_rings: true,
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'Hard Leather Case with 3-Inch Swivel Belt Loop (Non-Display Full Keypad)',
        part: 'PMLN5846',
        material: 'Hard leather',
        belt_sz: '3',
        swivel: 'Swivel',
        display: 'Non-display',
        d_rings: true,
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'Hard Leather Case with 3-Inch Fixed Belt Loop (Non-Display Full Keypad)',
        part: 'PMLN5839',
        material: 'Hard leather',
        belt_sz: '3',
        swivel: 'Fixed',
        display: 'Non-display',
        d_rings: true,
        variants: ['7350','7550','7580','7580e']
      },
      // Belt clips / loops
      {
        desc: 'Spring Action 2-Inch Belt Clip',
        part: 'PMLN4651',
        material: 'Plastic',
        belt_sz: '2',
        swivel: 'Fixed',
        display: 'Display/Non-display',
        d_rings: false,
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'Spring Action 2.5-Inch Belt Clip',
        part: 'PMLN7008',
        material: 'Plastic',
        belt_sz: '2.5',
        swivel: 'Fixed',
        display: 'Display/Non-display',
        d_rings: false,
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'Replacement 2.5-Inch Swivel Belt Loop',
        part: 'PMLN5610',
        material: 'Hard leather',
        belt_sz: '2.5',
        swivel: 'Swivel',
        display: 'Display/Non-display',
        d_rings: false,
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'Replacement 3-Inch Leather Swivel Belt Loop',
        part: 'PMLN5611',
        material: 'Hard leather',
        belt_sz: '3',
        swivel: 'Swivel',
        display: 'Display/Non-display',
        d_rings: false,
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'Nylon Wrist Strap for Carrying Motorola Two-Way Radios',
        part: 'PMLN6074',
        material: 'Nylon',
        belt_sz: '',
        swivel: '',
        display: 'Display/Non-display',
        d_rings: false,
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'Waterproof Bag with Large Strap',
        part: 'HLN9985',
        material: '',
        belt_sz: '',
        swivel: '',
        display: 'Display/Non-display',
        d_rings: false,
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'Universal Chest Pack with Radio Holder, Pen Holder and Velcro Secured Pouch',
        part: 'HLN6602',
        material: '',
        belt_sz: '',
        swivel: '',
        display: 'Display/Non-display',
        d_rings: false,
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'Adjustable Nylon Carrying Strap',
        part: 'NTN5243',
        material: 'Nylon',
        belt_sz: '',
        swivel: '',
        display: 'Display/Non-display',
        d_rings: false,
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'Leather Radio Strap',
        part: 'RLN6486',
        material: 'Leather',
        belt_sz: '',
        swivel: '',
        display: 'Display/Non-display',
        d_rings: false,
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'Leather Radio Strap - XL',
        part: 'RLN6487',
        material: 'Leather',
        belt_sz: '',
        swivel: '',
        display: 'Display/Non-display',
        d_rings: false,
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'Anti-Sway Strap for Leather Radio Straps',
        part: 'RLN6488',
        material: 'Leather',
        belt_sz: '',
        swivel: '',
        display: 'Display/Non-display',
        d_rings: false,
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: '1.75 Inch Wide Leather Belt',
        part: '4200865599',
        material: 'Leather',
        belt_sz: '1.75',
        swivel: '',
        display: 'Display/Non-display',
        d_rings: false,
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'Break-Away Chest Pack with Radio Holder, Pen Holder and Velcro Secured Pouch',
        part: 'RLN4570',
        material: '',
        belt_sz: '',
        swivel: '',
        display: 'Display/Non-display',
        d_rings: false,
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'Replacement Strap for HLN6602 and RLN4570',
        part: '1505596Z02',
        material: '',
        belt_sz: '',
        swivel: '',
        display: 'Display/Non-display',
        d_rings: false,
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'Radio Pack Radio Utility Case',
        part: 'RLN4815',
        material: '',
        belt_sz: '',
        swivel: '',
        display: 'Display/Non-display',
        d_rings: false,
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'Radio Pack Extension Belt for Waists Larger than 40 Inches',
        part: '4280384F89',
        material: '',
        belt_sz: '',
        swivel: '',
        display: 'Display/Non-display',
        d_rings: false,
        variants: ['7350','7550','7580','7580e']
      }
    ]
  },

  // ── CATEGORY 7: ANTENNAS ──────────────────────────────────────────────────
  {
    id: 'antennas',
    label: 'Antennas',
    columns: ['Description','Part Number','Band','Frequency (MHz)','Length (cm)','Type'],
    items: [
      // XPR 7000 / XPR 3000 shared antennas (GPS integrated)
      {
        desc: 'UHF/GPS Combination Wideband Slim Whip Antenna (400-527 MHz)',
        part: 'PMAE4079',
        band: 'UHF',
        freq_mhz: '403-527',
        len_cm: 15,
        ant_type: 'Whip',
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'VHF/GPS Combination Helical Antenna (136-155 MHz)',
        part: 'PMAD4117',
        band: 'VHF',
        freq_mhz: '136-155',
        len_cm: 15,
        ant_type: 'Helical',
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'VHF/GPS Combination Helical Antenna (144-165 MHz)',
        part: 'PMAD4116',
        band: 'VHF',
        freq_mhz: '144-165',
        len_cm: 15,
        ant_type: 'Helical',
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'VHF/GPS Combination Helical Antenna (152-174 MHz)',
        part: 'PMAD4118',
        band: 'VHF',
        freq_mhz: '152-174',
        len_cm: 15,
        ant_type: 'Helical',
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'UHF/GPS Combination Stubby Antenna (400-450 MHz)',
        part: 'PMAE4069',
        band: 'UHF',
        freq_mhz: '403-450',
        len_cm: 9,
        ant_type: 'Stubby',
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'UHF/GPS Combination Stubby Antenna (440-490 MHz)',
        part: 'PMAE4070',
        band: 'UHF',
        freq_mhz: '440-490',
        len_cm: 11,
        ant_type: 'Stubby',
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'UHF/GPS Combination Stubby Antenna (470-527 MHz)',
        part: 'PMAE4071',
        band: 'UHF',
        freq_mhz: '470-527',
        len_cm: 11,
        ant_type: 'Stubby',
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'VHF/GPS Combination Stubby Antenna (136-148 MHz)',
        part: 'PMAD4119',
        band: 'VHF',
        freq_mhz: '136-148',
        len_cm: 9,
        ant_type: 'Stubby',
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'VHF/GPS Combination Stubby Antenna (146-160 MHz)',
        part: 'PMAD4120',
        band: 'VHF',
        freq_mhz: '146-160',
        len_cm: 9,
        ant_type: 'Stubby',
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'VHF Stubby Antenna (320-360 MHz)',
        part: 'PMAD4135',
        band: 'VHF',
        freq_mhz: '320-360',
        len_cm: null,
        ant_type: 'Stubby',
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'VHF Stubby Antenna (300-337 MHz)',
        part: 'PMAD4137',
        band: 'VHF',
        freq_mhz: '300-337',
        len_cm: null,
        ant_type: 'Stubby',
        variants: ['7350','7550','7580','7580e']
      },
      // XPR 7000 / SL 7000 shared antennas
      {
        desc: '800 MHz Flexible Whip Antenna (806-870 MHz)',
        part: 'PMAF4011',
        band: '800/900 MHz',
        freq_mhz: '806-870',
        len_cm: 16.4,
        ant_type: 'Whip',
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: '900 MHz Flexible Whip Antenna (896-941 MHz)',
        part: 'PMAF4012',
        band: '800/900 MHz',
        freq_mhz: '896-941',
        len_cm: 14,
        ant_type: 'Whip',
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: '800/900 Stubby Antenna (806-870 MHz)',
        part: 'PMAF4009',
        band: '800/900 MHz',
        freq_mhz: '806-870',
        len_cm: 12,
        ant_type: 'Short whip',
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: '800/900 Stubby Antenna (896-941 MHz)',
        part: 'PMAF4010',
        band: '800/900 MHz',
        freq_mhz: '896-941',
        len_cm: 11.2,
        ant_type: 'Short whip',
        variants: ['7350','7550','7580','7580e']
      },
      // Mini stubby antenna kits
      {
        desc: 'UHF Antenna Kit (403-425 MHz)',
        part: 'PMAE4078',
        band: 'UHF',
        freq_mhz: '403-425',
        len_cm: 1.9,
        ant_type: 'Stubby',
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'UHF Antenna Kit (420-445 MHz)',
        part: 'PMAE4076',
        band: 'UHF',
        freq_mhz: '420-445',
        len_cm: 1.9,
        ant_type: 'Stubby',
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'UHF Antenna Kit (438-470 MHz)',
        part: 'PMAE4077',
        band: 'UHF',
        freq_mhz: '438-470',
        len_cm: 1.9,
        ant_type: 'Stubby',
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'UHF Stubby Antenna Kit (450-490 MHz)',
        part: 'PMAE4091',
        band: 'UHF',
        freq_mhz: '450-490',
        len_cm: 1.9,
        ant_type: 'Stubby',
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'UHF Stubby Antenna Kit (480-527 MHz)',
        part: 'PMAE4092',
        band: 'UHF',
        freq_mhz: '480-527',
        len_cm: 1.9,
        ant_type: 'Stubby',
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'Antenna Kit for 800 MHz Range (806-870 MHz)',
        part: 'PMAF4017',
        band: '800/900 MHz',
        freq_mhz: '806-870',
        len_cm: 1.1,
        ant_type: 'Stubby',
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'Antenna Kit for 900 MHz Range (896-941 MHz)',
        part: 'PMAF4018',
        band: '800/900 MHz',
        freq_mhz: '896-941',
        len_cm: 0.5,
        ant_type: 'Stubby',
        variants: ['7350','7550','7580','7580e']
      },
      // Antenna ID bands
      { desc: 'Gray antenna ID bands (pack of 10pcs)', part: '32012144001', band: null, freq_mhz: null, len_cm: null, ant_type: null, variants: ['7350','7550','7580','7580e'] },
      { desc: 'Yellow antenna ID bands (pack of 10pcs)', part: '32012144002', band: null, freq_mhz: null, len_cm: null, ant_type: null, variants: ['7350','7550','7580','7580e'] },
      { desc: 'Green antenna ID bands (pack of 10pcs)', part: '32012144003', band: null, freq_mhz: null, len_cm: null, ant_type: null, variants: ['7350','7550','7580','7580e'] },
      { desc: 'Blue antenna ID bands (pack of 10pcs)', part: '32012144004', band: null, freq_mhz: null, len_cm: null, ant_type: null, variants: ['7350','7550','7580','7580e'] },
      { desc: 'Purple antenna ID bands (pack of 10pcs)', part: '32012144005', band: null, freq_mhz: null, len_cm: null, ant_type: null, variants: ['7350','7550','7580','7580e'] }
    ]
  },

  // ── CATEGORY 8: CABLES ────────────────────────────────────────────────────
  {
    id: 'cables',
    label: 'Cables',
    columns: ['Description','Part Number'],
    items: [
      {
        desc: 'Portable Programming Cable (USB) for XPR 6000/7000 Series',
        part: 'PMKN4012',
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'Programming, Test and Alignment Cable for XPR 6000/7000 Series',
        part: 'PMKN4013',
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'Portable Telemetry Cable',
        part: 'PMKN4040',
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'Portable to RS232 DB25M Connector Cable',
        part: 'PMKN4071',
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'Test Alignment, TTR and Programming Cable',
        part: 'PMKN4126',
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'Programming Cable Slim Conn to DB25 and TTR',
        part: 'PMKN4116',
        variants: ['7350','7550','7580','7580e']
      }
    ]
  },

  // ── CATEGORY 9: SCREEN PROTECTORS ────────────────────────────────────────
  {
    id: 'screen_protectors',
    label: 'Screen Protectors',
    columns: ['Description','Part Number'],
    items: [
      // PDF shows AY000269A01 / AY000267A01 for SL series; XPR 7000 screen protector not listed in this PDF
      // No XPR 7000 screen protector found in PDF — stub only
    ]
  },

  // ── CATEGORY 10: PROGRAMMING CABLES ──────────────────────────────────────
  // (merged into category 8 — cables — per PDF structure; kept as alias)

  // ── CATEGORY 11: IMPRES BATTERY MGMT TOOLS ───────────────────────────────
  {
    id: 'impres_tools',
    label: 'IMPRES Tools',
    columns: ['Description','Part Number'],
    items: [
      {
        desc: 'IMPRES Battery Fleet Management License Key, NA/CAN',
        part: 'HKVN4036',
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'IMPRES Battery Fleet Management License Key, EMEA',
        part: 'HKVN4037',
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'IMPRES Battery Fleet Management License Key, LA',
        part: 'HKVN4038',
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'IMPRES Battery Fleet Management License Key, Asia',
        part: 'HKVN4039',
        variants: ['7350','7550','7580','7580e']
      }
    ]
  },

  // ── CATEGORY 12: BLUETOOTH / OPS CRITICAL WIRELESS ───────────────────────
  {
    id: 'bluetooth',
    label: 'Bluetooth',
    columns: ['Description','Part Number','Ear Type','Mic Type','PTT','Talk Time (hr)','Charge Time (hr)','Weight (g)'],
    items: [
      {
        desc: 'Operations Critical Wireless Bluetooth Adapter',
        part: 'PMLN5712',
        ear_type: '',
        mic_type: '',
        ptt: 'On adapter',
        talk_time_hr: 30,
        charge_time_hr: null,
        weight_g: null,
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'Operations Critical Wireless RSM with Battery and Belt Clip',
        part: 'RLN6561',
        ear_type: '',
        mic_type: 'Omni directional, windporting equivalent',
        ptt: 'On microphone',
        talk_time_hr: 28,
        charge_time_hr: 3,
        weight_g: 158,
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'XBT Operations Critical Wireless Behind-the-Neck Headset',
        part: 'RLN6490',
        ear_type: 'Dual-muff',
        mic_type: 'Boom',
        ptt: 'On ear cup',
        talk_time_hr: 22,
        charge_time_hr: 7,
        weight_g: 429,
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'XBT Operations Critical Wireless Headband Style Headset',
        part: 'RLN6491',
        ear_type: 'Dual-muff',
        mic_type: 'Boom',
        ptt: 'On ear cup',
        talk_time_hr: 22,
        charge_time_hr: 7,
        weight_g: 422,
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'Operations Critical Wireless Earpiece with 12-Inch Cable (with US/JP Charger)',
        part: 'NNTN8125',
        ear_type: 'Over-the-ear (CommPort)',
        mic_type: 'Directional, above earpiece',
        ptt: 'On PTT pod',
        talk_time_hr: 10,
        charge_time_hr: 3,
        weight_g: 43,
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'Operations Critical Wireless Earpiece with 12-Inch Cable (without Charger)',
        part: 'NNTN8189',
        ear_type: 'Over-the-ear (CommPort)',
        mic_type: '',
        ptt: 'On PTT pod',
        talk_time_hr: 10,
        charge_time_hr: 3,
        weight_g: 43,
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'Operations Critical Wireless Push-to-Talk Pod (with US Charger)',
        part: 'NNTN8127',
        ear_type: '',
        mic_type: '',
        ptt: 'On PTT pod',
        talk_time_hr: 10,
        charge_time_hr: 3,
        weight_g: 43,
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'Operations Critical Wireless Push-to-Talk Pod (without Charger)',
        part: 'NNTN8191',
        ear_type: '',
        mic_type: '',
        ptt: 'On PTT pod',
        talk_time_hr: 10,
        charge_time_hr: 3,
        weight_g: 43,
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'Bluetooth Accessory Kit with Flexible Earpiece, Pod and Charging Cradle with Power Supply (US Plug)',
        part: 'RLN6500',
        ear_type: 'Over-the-ear (swivel)',
        mic_type: 'In-line',
        ptt: 'Radio only',
        talk_time_hr: 8,
        charge_time_hr: 18,
        weight_g: null,
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'Bluetooth Accessory Kit with Flexible Earpiece, Pod and Charging Cradle (with Boom Mic)',
        part: 'PMLN7181',
        ear_type: 'Over-the-ear (swivel)',
        mic_type: 'Boom',
        ptt: 'Radio only',
        talk_time_hr: 8,
        charge_time_hr: 18,
        weight_g: null,
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'Operations Critical Wireless 1-Wire Surveillance Kit with Translucent Tube',
        part: 'PMLN7052',
        ear_type: 'Clear rubber eartip',
        mic_type: 'In-line',
        ptt: 'On pod (order separately)',
        talk_time_hr: null,
        charge_time_hr: null,
        weight_g: null,
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'Operations Critical Wireless Earbud with 11.5-Inch Cable',
        part: 'NNTN8294',
        ear_type: 'Earbud',
        mic_type: 'In-line',
        ptt: 'On pod (order separately)',
        talk_time_hr: 10,
        charge_time_hr: null,
        weight_g: null,
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'Operations Critical Wireless Earbud with 45-Inch Cable',
        part: 'NNTN8295',
        ear_type: 'Earbud',
        mic_type: 'In-line',
        ptt: 'On pod (order separately)',
        talk_time_hr: 10,
        charge_time_hr: null,
        weight_g: null,
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'Enhanced Operations Critical Wireless Adapter with Touch Pairing',
        part: 'PMLN5993',
        ear_type: '',
        mic_type: '',
        ptt: 'On adapter',
        talk_time_hr: 35,
        charge_time_hr: null,
        weight_g: null,
        variants: ['7580','7580e']
      },
      {
        desc: 'Enhanced Operations Critical Wireless Earpiece with 12-Inch Cable and PTT Pod',
        part: 'NTN2570',
        ear_type: 'Over-the-ear (CommPort)',
        mic_type: 'Directional, above earpiece',
        ptt: 'On PTT pod',
        talk_time_hr: 10,
        charge_time_hr: 3,
        weight_g: 43,
        variants: ['7580','7580e']
      },
      {
        desc: 'Enhanced Operations Critical Wireless Push-to-Talk Pod',
        part: 'NTN2571',
        ear_type: '',
        mic_type: '',
        ptt: 'On PTT pod',
        talk_time_hr: 10,
        charge_time_hr: 3,
        weight_g: 43,
        variants: ['7580','7580e']
      },
      // OC Wireless replacement parts
      { desc: 'Replacement Wireless Earpiece 12 inch Cable (for NNTN8125)', part: 'NTN2572', ear_type: null, mic_type: null, ptt: null, talk_time_hr: null, charge_time_hr: null, weight_g: null, variants: ['7350','7550','7580','7580e'] },
      { desc: 'Wireless Earpiece Maintenance Kit (10 silicone tubes, 10 mic seal strips, 2 foam windscreens)', part: 'NTN8821', ear_type: null, mic_type: null, ptt: null, talk_time_hr: null, charge_time_hr: null, weight_g: null, variants: ['7350','7550','7580','7580e'] },
      { desc: 'Ear Strap for Comfort Earpiece, Pack of 10', part: 'NTN8988', ear_type: null, mic_type: null, ptt: null, talk_time_hr: null, charge_time_hr: null, weight_g: null, variants: ['7350','7550','7580','7580e'] },
      { desc: 'Replacement Ear Tips Kit for Wireless Earbuds (20 sm/20 med/20 lg/10 clips)', part: 'NNTN8361', ear_type: null, mic_type: null, ptt: null, talk_time_hr: null, charge_time_hr: null, weight_g: null, variants: ['7350','7550','7580','7580e'] },
      { desc: 'Swivel Clip for OC Wireless Pods', part: 'PMLN6246', ear_type: null, mic_type: null, ptt: null, talk_time_hr: null, charge_time_hr: null, weight_g: null, variants: ['7350','7550','7580','7580e'] },
      { desc: 'Replacement Micro-USB Plug-In Charger for Wireless Pod, US Plug', part: 'PMPN4027', ear_type: null, mic_type: null, ptt: null, talk_time_hr: null, charge_time_hr: null, weight_g: null, variants: ['7350','7550','7580','7580e'] },
      { desc: 'Replacement Micro-USB Plug-In Charger for Wireless Pod, AU/NZ Plug', part: 'PMPN4007', ear_type: null, mic_type: null, ptt: null, talk_time_hr: null, charge_time_hr: null, weight_g: null, variants: ['7350','7550','7580','7580e'] },
      { desc: 'Replacement Micro-USB Plug-In Charger for Wireless Pod, EU/UK Plug', part: 'PMPN4006', ear_type: null, mic_type: null, ptt: null, talk_time_hr: null, charge_time_hr: null, weight_g: null, variants: ['7350','7550','7580','7580e'] },
      { desc: 'Replacement Micro-USB Plug-In Charger for Wireless Pod, PRC Plug', part: 'PMPN4008', ear_type: null, mic_type: null, ptt: null, talk_time_hr: null, charge_time_hr: null, weight_g: null, variants: ['7350','7550','7580','7580e'] },
      { desc: 'Replacement Micro-USB Plug-In Charger for Wireless Pod, KOR Plug', part: 'PMPN4015', ear_type: null, mic_type: null, ptt: null, talk_time_hr: null, charge_time_hr: null, weight_g: null, variants: ['7350','7550','7580','7580e'] },
      { desc: 'Replacement Micro-USB Plug-In Charger for Wireless Pod, ARG Plug', part: 'PMPN4016', ear_type: null, mic_type: null, ptt: null, talk_time_hr: null, charge_time_hr: null, weight_g: null, variants: ['7350','7550','7580','7580e'] },
      { desc: 'Replacement Micro-USB Plug-In Charger for Wireless Pod, BZL Plug', part: 'PMPN4023', ear_type: null, mic_type: null, ptt: null, talk_time_hr: null, charge_time_hr: null, weight_g: null, variants: ['7350','7550','7580','7580e'] },
      { desc: 'Replacement Micro-USB Plug-In Charger for Wireless Pod, EU Plug', part: 'PMPN4028', ear_type: null, mic_type: null, ptt: null, talk_time_hr: null, charge_time_hr: null, weight_g: null, variants: ['7350','7550','7580','7580e']
      // Completely Discreet Kit
      {
        desc: 'Operations Critical Wireless Completely Discreet Earpiece Kit (includes RLN4920 phonak inductive neckloop and RLN4921 phonak phonito)',
        part: 'PMLN7696',
        ear_type: 'Completely discreet',
        mic_type: '',
        ptt: 'On Y-adapter (order separately)',
        talk_time_hr: null,
        charge_time_hr: null,
        weight_g: null,
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'Wireless Neckloop Y-Adapter and Retention Hook',
        part: 'NNTN8385',
        ear_type: '',
        mic_type: '',
        ptt: 'On Pod (order separately)',
        talk_time_hr: null,
        charge_time_hr: null,
        weight_g: null,
        variants: ['7350','7550','7580','7580e']
      },
      // OC Wireless discreet kit replacement parts
      { desc: 'Replacement Retention Hooks for NNTN8385 and PMLN7696 (pack of 10)', part: 'NNTN8457', ear_type: null, mic_type: null, ptt: null, talk_time_hr: null, charge_time_hr: null, weight_g: null, variants: ['7350','7550','7580','7580e'] },
      { desc: 'Replacement Phonak Inductive Neckloop for PMLN7696', part: 'RLN4920', ear_type: null, mic_type: null, ptt: null, talk_time_hr: null, charge_time_hr: null, weight_g: null, variants: ['7350','7550','7580','7580e'] },
      { desc: 'Replacement Phonak Nano Ear Receiver, Brown for PMLN7696', part: 'GMLN5262', ear_type: null, mic_type: null, ptt: null, talk_time_hr: null, charge_time_hr: null, weight_g: null, variants: ['7350','7550','7580','7580e'] },
      { desc: 'Replacement Phonak Nano Ear Receiver, Beige for PMLN7696', part: 'GMLN5261', ear_type: null, mic_type: null, ptt: null, talk_time_hr: null, charge_time_hr: null, weight_g: null, variants: ['7350','7550','7580','7580e'] },
      { desc: 'Replacement 1.4 Volt Battery for PMLN7696 (pack of 6)', part: 'RNN4005', ear_type: null, mic_type: null, ptt: null, talk_time_hr: null, charge_time_hr: null, weight_g: null, variants: ['7350','7550','7580','7580e'] },
      // XBT headset replacement parts
      { desc: 'Replacement Universal 5V Power Supply for XBT Headsets', part: 'RLN6498', ear_type: null, mic_type: null, ptt: null, talk_time_hr: null, charge_time_hr: null, weight_g: null, variants: ['7350','7550','7580','7580e'] },
      { desc: 'Replacement Hygiene Kit for XBT Headsets', part: 'RLN6497', ear_type: null, mic_type: null, ptt: null, talk_time_hr: null, charge_time_hr: null, weight_g: null, variants: ['7350','7550','7580','7580e'] },
      { desc: 'Replacement Cooling Pads for XBT Headsets', part: 'RLN6496', ear_type: null, mic_type: null, ptt: null, talk_time_hr: null, charge_time_hr: null, weight_g: null, variants: ['7350','7550','7580','7580e'] },
      { desc: 'Replacement Boom Microphone for XBT Headsets', part: 'RLN6495', ear_type: null, mic_type: null, ptt: null, talk_time_hr: null, charge_time_hr: null, weight_g: null, variants: ['7350','7550','7580','7580e'] },
      { desc: 'Replacement Behind-the-Neck Band for XBT Headsets', part: 'RLN6493', ear_type: null, mic_type: null, ptt: null, talk_time_hr: null, charge_time_hr: null, weight_g: null, variants: ['7350','7550','7580','7580e'] },
      { desc: 'Replacement Headband Style Band for XBT Headsets', part: 'RLN6492', ear_type: null, mic_type: null, ptt: null, talk_time_hr: null, charge_time_hr: null, weight_g: null, variants: ['7350','7550','7580','7580e'] },
      { desc: 'Replacement Swivel Earpiece with Inline Microphone (pack of 3) for RLN6500', part: 'PRLN6550', ear_type: null, mic_type: null, ptt: null, talk_time_hr: null, charge_time_hr: null, weight_g: null, variants: ['7350','7550','7580','7580e'] },
      // OC Wireless RSM with charger variants
      {
        desc: 'Operations Critical Wireless RSM with Battery, Belt Clip and Dual Unit Charger (US Plug)',
        part: 'RLN6562',
        ear_type: '',
        mic_type: 'Omni directional, windporting equivalent',
        ptt: 'On microphone',
        talk_time_hr: 28,
        charge_time_hr: 3,
        weight_g: 158,
        variants: ['7350','7550','7580','7580e']
      },
      {
        desc: 'Operations Critical Wireless RSM with Battery, Belt Clip and Dual Unit Charger (AU/NZ Plug)',
        part: 'PMLN7669',
        ear_type: '',
        mic_type: 'Omni directional, windporting equivalent',
        ptt: 'On microphone',
        talk_time_hr: 28,
        charge_time_hr: 3,
        weight_g: 158,
        variants: ['7350','7550','7580','7580e']
      }
    ]
  }

];

// Wire into global RADIOS_DATA
if (typeof window.RADIOS_DATA === 'undefined') window.RADIOS_DATA = {};
window.RADIOS_DATA['xpr7000'] = XPR7000_CATEGORIES;
