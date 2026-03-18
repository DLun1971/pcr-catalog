// dp3000-data.js — DP3000e Series accessory data
// Source: MOTOTRBO Professional Tier Accessory Catalog (PDF verified Mar 17 2026)
// DP3000e is the EMEA variant of XPR 3000e Series
// Variants: 3000e (single variant — no sub-selector needed, use DP ATEX pill sub-variant)

const DP3000_CATEGORIES = [

  // ── CATEGORY 1: BATTERIES ──────────────────────────────────────────────────
  {
    id: 'batteries',
    label: 'Batteries',
    columns: ['Description','Part Number','IMPRES','Chemistry','Typical Capacity (mAh)','Dimensions (mm)','Weight','HazLoc','IP Rating','Operating Temp'],
    items: [
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
        variants: ['3000e']
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
        variants: ['3000e']
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
        variants: ['3000e']
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
        variants: ['3000e']
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
        variants: ['3000e']
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
        variants: ['3000e']
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
        variants: ['3000e']
      }
    ]
  },

  // ── CATEGORY 2: CHARGERS ───────────────────────────────────────────────────
  {
    id: 'chargers',
    label: 'Chargers',
    columns: ['Description','Part Number','IMPRES','Chemistry','Power Source','Dimensions (mm)','Pockets'],
    items: [
      {
        desc: 'IMPRES Single-Unit Charger, US/CAN Plug',
        part: 'PMPN4576A',
        impres: true,
        chem: 'Li-Ion, NiMH',
        pwr_src: '120 VAC',
        dims_mm: '51 x 88 x 94',
        pockets: 1,
        variants: ['3000e']
      },
      {
        desc: 'IMPRES Single-Unit Charger, ARG Plug',
        part: 'PMPN4573A',
        impres: true,
        chem: 'Li-Ion, NiMH',
        pwr_src: '240 VAC',
        dims_mm: '51 x 88 x 94',
        pockets: 1,
        variants: ['3000e']
      },
      {
        desc: 'IMPRES Single-Unit Charger, BRZ Plug',
        part: 'PMPN4575A',
        impres: true,
        chem: 'Li-Ion, NiMH',
        pwr_src: '100-240 VAC',
        dims_mm: '51 x 88 x 94',
        pockets: 1,
        variants: ['3000e']
      },
      {
        desc: 'IMPRES Single-Unit Charger, UK Plug',
        part: 'PMPN4572A',
        impres: true,
        chem: 'Li-Ion, NiMH',
        pwr_src: '240 VAC',
        dims_mm: '51 x 88 x 94',
        pockets: 1,
        variants: ['3000e']
      },
      {
        desc: 'IMPRES Single-Unit Charger, EURO Plug',
        part: 'PMPN4577A',
        impres: true,
        chem: 'Li-Ion, NiMH',
        pwr_src: '240 VAC',
        dims_mm: '51 x 88 x 94',
        pockets: 1,
        variants: ['3000e']
      },
      {
        desc: 'IMPRES Single-Unit Charger, AU/NZ Plug',
        part: 'PMPN4571A',
        impres: true,
        chem: 'Li-Ion, NiMH',
        pwr_src: '240 VAC',
        dims_mm: '51 x 88 x 94',
        pockets: 1,
        variants: ['3000e']
      },
      {
        desc: 'IMPRES Single-Unit Charger, JAP Plug',
        part: 'PMPN4578A',
        impres: true,
        chem: 'Li-Ion, NiMH',
        pwr_src: '100-240 VAC',
        dims_mm: '51 x 88 x 94',
        pockets: 1,
        variants: ['3000e']
      },
      {
        desc: 'IMPRES Single-Unit Charger, KOR Plug',
        part: 'PMPN4574A',
        impres: true,
        chem: 'Li-Ion, NiMH',
        pwr_src: '240 VAC',
        dims_mm: '51 x 88 x 94',
        pockets: 1,
        variants: ['3000e']
      },
      {
        desc: 'IMPRES Single-Unit Charger, CHN Plug',
        part: 'PMPN4579A',
        impres: true,
        chem: 'Li-Ion, NiMH',
        pwr_src: '240 VAC',
        dims_mm: '51 x 88 x 94',
        pockets: 1,
        variants: ['3000e']
      },
      {
        desc: 'IMPRES Single-Unit Charger, INDIA Plug',
        part: 'PMPN4582A',
        impres: true,
        chem: 'Li-Ion, NiMH',
        pwr_src: '100-240 VAC',
        dims_mm: '51 x 88 x 94',
        pockets: 1,
        variants: ['3000e']
      },
      {
        desc: 'Single-Unit Rapid Rate Charger, CHN Plug',
        part: 'NNTN8224',
        impres: false,
        chem: 'Li-Ion, NiMH',
        pwr_src: '240 VAC',
        dims_mm: '61 x 97 x 163',
        pockets: 1,
        variants: ['3000e']
      },
      {
        desc: 'Single-Unit Rapid Rate Charger, ARG Plug',
        part: 'NNTN8225',
        impres: false,
        chem: 'Li-Ion, NiMH',
        pwr_src: '240 VAC',
        dims_mm: '61 x 97 x 163',
        pockets: 1,
        variants: ['3000e']
      },
      {
        desc: 'Single-Unit Rapid Rate Charger, Switch-Mode 21W, BZL Plug',
        part: 'NNTN8280',
        impres: false,
        chem: 'Li-Ion, NiMH',
        pwr_src: '100-240 VAC',
        dims_mm: '61 x 97 x 163',
        pockets: 1,
        variants: ['3000e']
      },
      {
        desc: 'Single-Unit Rapid Rate Charger, EURO Plug',
        part: 'NNTN8292',
        impres: false,
        chem: 'Li-Ion, NiMH',
        pwr_src: '240 VAC',
        dims_mm: '61 x 97 x 163',
        pockets: 1,
        variants: ['3000e']
      },
      {
        desc: 'Single-Unit Rapid Rate Charger, UK Plug',
        part: 'NNTN8293',
        impres: false,
        chem: 'Li-Ion, NiMH',
        pwr_src: '240 VAC',
        dims_mm: '61 x 97 x 163',
        pockets: 1,
        variants: ['3000e']
      },
      {
        desc: 'IMPRES 2 Multi-Unit Fast Charger with 1 Display, US/CAN Plug',
        part: 'PMPN4284',
        impres: true,
        chem: 'Li-Ion, NiMH',
        pwr_src: '100-240 VAC',
        dims_mm: '153 x 445 x 292',
        pockets: 6,
        variants: ['3000e']
      },
      {
        desc: 'IMPRES 2 Multi-Unit Fast Charger with 1 Display, UK Plug',
        part: 'PMPN4290',
        impres: true,
        chem: 'Li-Ion, NiMH',
        pwr_src: '100-240 VAC',
        dims_mm: '153 x 445 x 292',
        pockets: 6,
        variants: ['3000e']
      },
      {
        desc: 'IMPRES 2 Multi-Unit Fast Charger with 1 Display, EURO Plug',
        part: 'PMPN4289',
        impres: true,
        chem: 'Li-Ion, NiMH',
        pwr_src: '100-240 VAC',
        dims_mm: '153 x 445 x 292',
        pockets: 6,
        variants: ['3000e']
      },
      {
        desc: 'IMPRES 2 Multi-Unit Fast Charger with 1 Display, AU/NZ Plug',
        part: 'PMPN4293',
        impres: true,
        chem: 'Li-Ion, NiMH',
        pwr_src: '100-240 VAC',
        dims_mm: '153 x 445 x 292',
        pockets: 6,
        variants: ['3000e']
      },
      {
        desc: 'IMPRES 2 Multi-Unit Fast Charger with 1 Display, ARG Plug',
        part: 'PMPN4291',
        impres: true,
        chem: 'Li-Ion, NiMH',
        pwr_src: '100-240 VAC',
        dims_mm: '153 x 445 x 292',
        pockets: 6,
        variants: ['3000e']
      },
      {
        desc: 'IMPRES 2 Multi-Unit Fast Charger with 1 Display, BZL Plug',
        part: 'PMPN4292',
        impres: true,
        chem: 'Li-Ion, NiMH',
        pwr_src: '100-240 VAC',
        dims_mm: '153 x 445 x 292',
        pockets: 6,
        variants: ['3000e']
      },
      {
        desc: 'IMPRES 2 Multi-Unit Fast Charger with 1 Display, JAP Plug',
        part: 'PMPN4295',
        impres: true,
        chem: 'Li-Ion, NiMH',
        pwr_src: '100-240 VAC',
        dims_mm: '153 x 445 x 292',
        pockets: 6,
        variants: ['3000e']
      },
      {
        desc: 'IMPRES 2 Multi-Unit Fast Charger with 1 Display, KOR Plug',
        part: 'PMPN4294',
        impres: true,
        chem: 'Li-Ion, NiMH',
        pwr_src: '100-240 VAC',
        dims_mm: '153 x 445 x 292',
        pockets: 6,
        variants: ['3000e']
      },
      {
        desc: 'IMPRES 2 Multi-Unit Fast Charger with 1 Display, CHN Plug',
        part: 'PMPN4296',
        impres: true,
        chem: 'Li-Ion, NiMH',
        pwr_src: '100-240 VAC',
        dims_mm: '153 x 445 x 292',
        pockets: 6,
        variants: ['3000e']
      },
      {
        desc: 'IMPRES 2 Multi-Unit Fast Charger with 1 Display, TW Plug',
        part: 'PMPN4462',
        impres: true,
        chem: 'Li-Ion, NiMH',
        pwr_src: '100-240 VAC',
        dims_mm: '153 x 445 x 292',
        pockets: 6,
        variants: ['3000e']
      },
      {
        desc: 'IMPRES Single-Unit Rapid Rate Vehicular Charger, Heavy-Duty Permanent Mount',
        part: 'NNTN7616',
        impres: true,
        chem: 'Li-Ion, NiMH',
        pwr_src: '12 VDC (hardwire)',
        dims_mm: '200 x 83 x 97',
        pockets: 1,
        variants: ['3000e']
      },
      {
        desc: 'Travel Charger, Rapid Rate with Voltage Regulated Adapter, Mounting Bracket and Coil Cord',
        part: 'NNTN8525',
        impres: false,
        chem: 'Li-Ion, NiMH',
        pwr_src: '12 VDC cigarette lighter adapter',
        dims_mm: '58 x 64 x 67',
        pockets: 1,
        variants: ['3000e']
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
        desc: 'IMPRES Noise-Canceling Remote Speaker Microphone, Large (IP54)',
        part: 'PMMN4071',
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
        variants: ['3000e']
      },
      {
        desc: 'IMPRES Windporting Remote Speaker Microphone, Small (IP55)',
        part: 'PMMN4073',
        impres: true,
        intel_audio: false,
        ai_noise: false,
        windporting: 'Windporting',
        noise_cancel: false,
        full_duplex: false,
        vol_ctrl: true,
        prog_btn: '',
        audio_jack: true,
        ip: 'IP55',
        hazloc: 'UL',
        dims_mm: '55 x 60 x 27',
        variants: ['3000e']
      },
      {
        desc: 'Windporting Remote Speaker Microphone, Small, Submersible (IP57)',
        part: 'PMMN4075',
        impres: false,
        intel_audio: false,
        ai_noise: false,
        windporting: 'Windporting',
        noise_cancel: false,
        full_duplex: false,
        vol_ctrl: false,
        prog_btn: '',
        audio_jack: true,
        ip: 'IP57',
        hazloc: 'UL',
        dims_mm: '55 x 60 x 27',
        variants: ['3000e']
      },
      {
        desc: 'Windporting Remote Speaker Microphone, Small (IP54)',
        part: 'PMMN4076',
        impres: false,
        intel_audio: false,
        ai_noise: false,
        windporting: 'Windporting',
        noise_cancel: false,
        full_duplex: false,
        vol_ctrl: false,
        prog_btn: '',
        audio_jack: true,
        ip: 'IP54',
        hazloc: 'UL',
        dims_mm: '55 x 60 x 27',
        variants: ['3000e']
      },
      {
        desc: 'Windporting Remote Speaker Microphone, Small (IP67)',
        part: 'PMMN4108',
        impres: false,
        intel_audio: true,
        ai_noise: false,
        windporting: 'Windporting',
        noise_cancel: false,
        full_duplex: false,
        vol_ctrl: true,
        prog_btn: '',
        audio_jack: true,
        ip: 'IP67',
        hazloc: '',
        dims_mm: '60 x 78 x 28',
        variants: ['3000e']
      },
      {
        desc: 'RM250 Wired Remote Speaker Microphone, Large (IP67)',
        part: 'PMMN4125',
        impres: false,
        intel_audio: false,
        ai_noise: false,
        windporting: 'Windporting',
        noise_cancel: false,
        full_duplex: false,
        vol_ctrl: false,
        prog_btn: '',
        audio_jack: true,
        ip: 'IP67',
        hazloc: '',
        dims_mm: '58 x 84 x 24',
        variants: ['3000e']
      }
    ]
  },

  // ── CATEGORY 4: SURVEILLANCE / EARPIECES ──────────────────────────────────
  {
    id: 'surveillance',
    label: 'Surveillance/Earpieces',
    columns: ['Description','Part Number','IMPRES','Intelligent Audio','AI Noise Suppress','Ear Type','Mic Type','Full Duplex','HazLoc'],
    items: [
      {
        desc: 'IMPRES 2-Wire Surveillance Kit with Translucent Tube, Black',
        part: 'PMLN7269',
        impres: false,
        intel_audio: false,
        ai_noise: false,
        ear_type: 'Clear rubber eartip',
        mic_type: '',
        full_duplex: false,
        hazloc: '',
        variants: ['3000e']
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
        variants: ['3000e']
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
        variants: ['3000e']
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
        variants: ['3000e']
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
        variants: ['3000e']
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
        variants: ['3000e']
      }
    ]
  },

  // ── CATEGORY 5: HEADSETS ──────────────────────────────────────────────────
  {
    id: 'headsets',
    label: 'Headsets',
    columns: ['Description','Part Number','IMPRES','Headset Type','Ear Style','NRR (dB)','Mic Type','HazLoc'],
    items: [
      {
        desc: 'Lightweight Over-the-Head Headset, Single Muff with In-Line PTT and Boom Mic',
        part: 'PMLN6635',
        impres: false,
        headset_type: 'Over-the-Head',
        ear_style: 'Single-Ear',
        nrr_db: null,
        mic_type: 'Boom',
        hazloc: 'UL',
        variants: ['3000e']
      },
      {
        desc: 'Heavy Duty Behind-the-Head Headset with Noise-Canceling Boom Mic',
        part: 'PMLN6760',
        impres: true,
        headset_type: 'Behind-the-Head',
        ear_style: 'Dual-Muff',
        nrr_db: 24,
        mic_type: 'Boom',
        hazloc: '',
        variants: ['3000e']
      },
      {
        desc: 'Heavy Duty Behind-the-Head Headset with Noise-Canceling Boom Mic (UL)',
        part: 'PMLN6763',
        impres: true,
        headset_type: 'Behind-the-Head',
        ear_style: 'Dual-Muff',
        nrr_db: 24,
        mic_type: 'Boom',
        hazloc: 'UL',
        variants: ['3000e']
      },
      {
        desc: 'Heavy Duty Over-the-Head Headset with Noise-Canceling Boom Mic',
        part: 'PMLN7464',
        impres: true,
        headset_type: 'Over-the-Head',
        ear_style: 'Dual-Muff',
        nrr_db: 24,
        mic_type: 'Boom',
        hazloc: '',
        variants: ['3000e']
      },
      {
        desc: 'Heavy Duty Over-the-Head Headset with Noise-Canceling Boom Mic (UL)',
        part: 'PMLN7465',
        impres: true,
        headset_type: 'Over-the-Head',
        ear_style: 'Dual-Muff',
        nrr_db: 24,
        mic_type: 'Boom',
        hazloc: 'UL',
        variants: ['3000e']
      },
      {
        desc: 'Mag One Ultra-Lite Behind-the-Head Headset',
        part: 'PMLN6761',
        impres: true,
        headset_type: 'Behind-the-Head',
        ear_style: 'Single-Ear',
        nrr_db: null,
        mic_type: 'Boom',
        hazloc: '',
        variants: ['3000e']
      },
      {
        desc: 'IMPRES Temple Transducer with Boom Mic and In-Line PTT',
        part: 'PMLN6759',
        impres: true,
        headset_type: 'Behind-the-Head',
        ear_style: 'Bone Conduction',
        nrr_db: null,
        mic_type: 'Boom',
        hazloc: '',
        variants: ['3000e']
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
        desc: 'Nylon Case with 3-Inch Fixed Belt Loop (Limited Keypad Model)',
        part: 'PMLN5869',
        material: 'Nylon',
        belt_sz: '3',
        swivel: 'Fixed',
        display: 'Display',
        d_rings: true,
        variants: ['3000e']
      },
      {
        desc: 'Hard Leather Case with 2.5-Inch Swivel Belt Loop (Limited Keypad Model)',
        part: 'PMLN5867',
        material: 'Hard leather',
        belt_sz: '2.5',
        swivel: 'Swivel',
        display: 'Display',
        d_rings: true,
        variants: ['3000e']
      },
      {
        desc: 'Hard Leather Case with 3-Inch Swivel Belt Loop (Limited Keypad Model)',
        part: 'PMLN5865',
        material: 'Hard leather',
        belt_sz: '3',
        swivel: 'Swivel',
        display: 'Display',
        d_rings: true,
        variants: ['3000e']
      },
      {
        desc: 'Hard Leather Carry Case with 3-Inch Fixed Belt Loop (Limited Keypad Model)',
        part: 'PMLN5863',
        material: 'Hard leather',
        belt_sz: '3',
        swivel: 'Fixed',
        display: 'Display',
        d_rings: true,
        variants: ['3000e']
      },
      {
        desc: 'Soft Leather Case with 2.5-Inch Swivel Belt Loop (Display)',
        part: 'PMLN5016',
        material: 'Soft leather',
        belt_sz: '2.5',
        swivel: 'Swivel',
        display: 'Display',
        d_rings: true,
        variants: ['3000e']
      },
      {
        desc: 'Soft Leather Case with 3-Inch Swivel Belt Loop (Display)',
        part: 'PMLN5017',
        material: 'Soft leather',
        belt_sz: '3',
        swivel: 'Swivel',
        display: 'Display',
        d_rings: true,
        variants: ['3000e']
      },
      {
        desc: 'Soft Leather Case with 3-Inch Fixed Belt Loop (Display)',
        part: 'PMLN5018',
        material: 'Soft leather',
        belt_sz: '3',
        swivel: 'Fixed',
        display: 'Display',
        d_rings: true,
        variants: ['3000e']
      },
      {
        desc: 'Nylon Case with 3-Inch Fixed Belt Loop (Non-Display)',
        part: 'PMLN5870',
        material: 'Nylon',
        belt_sz: '3',
        swivel: 'Fixed',
        display: 'Non-display',
        d_rings: true,
        variants: ['3000e']
      },
      {
        desc: 'Hard Leather Case with 2.5-Inch Swivel Belt Loop (Non-Display)',
        part: 'PMLN5868',
        material: 'Hard leather',
        belt_sz: '2.5',
        swivel: 'Swivel',
        display: 'Non-display',
        d_rings: true,
        variants: ['3000e']
      },
      {
        desc: 'Hard Leather Case with 3-Inch Swivel Belt Loop (Non-Display)',
        part: 'PMLN5866',
        material: 'Hard leather',
        belt_sz: '3',
        swivel: 'Swivel',
        display: 'Non-display',
        d_rings: true,
        variants: ['3000e']
      },
      {
        desc: 'Hard Leather Case with 3-Inch Fixed Belt Loop (Non-Display)',
        part: 'PMLN5864',
        material: 'Hard leather',
        belt_sz: '3',
        swivel: 'Fixed',
        display: 'Non-display',
        d_rings: true,
        variants: ['3000e']
      },
      {
        desc: 'Soft Leather Case with 2.5-Inch Swivel Belt Loop (Non-Display)',
        part: 'PMLN5025',
        material: 'Soft leather',
        belt_sz: '2.5',
        swivel: 'Swivel',
        display: 'Non-display',
        d_rings: true,
        variants: ['3000e']
      },
      {
        desc: 'Soft Leather Case with 3-Inch Swivel Belt Loop (Non-Display)',
        part: 'PMLN5026',
        material: 'Soft leather',
        belt_sz: '3',
        swivel: 'Swivel',
        display: 'Non-display',
        d_rings: true,
        variants: ['3000e']
      },
      {
        desc: 'Soft Leather Case with 3-Inch Fixed Belt Loop (Non-Display)',
        part: 'PMLN5027',
        material: 'Soft leather',
        belt_sz: '3',
        swivel: 'Fixed',
        display: 'Non-display',
        d_rings: true,
        variants: ['3000e']
      },
      {
        desc: 'Nylon Case with 3-Inch Fixed Belt Loop (Display)',
        part: 'PMLN5015',
        material: 'Nylon',
        belt_sz: '3',
        swivel: 'Fixed',
        display: 'Display',
        d_rings: true,
        variants: ['3000e']
      },
      {
        desc: 'Spring Action 2-Inch Belt Clip',
        part: 'PMLN4651',
        material: 'Plastic',
        belt_sz: '2',
        swivel: 'Fixed',
        display: 'Display/Non-display',
        d_rings: false,
        variants: ['3000e']
      },
      {
        desc: 'Spring Action 2.5-Inch Belt Clip',
        part: 'PMLN7008',
        material: 'Plastic',
        belt_sz: '2.5',
        swivel: 'Fixed',
        display: 'Display/Non-display',
        d_rings: false,
        variants: ['3000e']
      },
      {
        desc: 'Replacement 2.5-Inch Swivel Belt Loop',
        part: 'PMLN5610',
        material: 'Hard leather',
        belt_sz: '2.5',
        swivel: 'Swivel',
        display: 'Display/Non-display',
        d_rings: false,
        variants: ['3000e']
      },
      {
        desc: 'Replacement 3-Inch Leather Swivel Belt Loop',
        part: 'PMLN5611',
        material: 'Hard leather',
        belt_sz: '3',
        swivel: 'Swivel',
        display: 'Display/Non-display',
        d_rings: false,
        variants: ['3000e']
      },
      {
        desc: 'Nylon Wrist Strap',
        part: 'PMLN6074',
        material: 'Nylon',
        belt_sz: '',
        swivel: '',
        display: 'Display/Non-display',
        d_rings: false,
        variants: ['3000e']
      },
      {
        desc: 'Waterproof Bag with Large Strap',
        part: 'HLN9985',
        material: '',
        belt_sz: '',
        swivel: '',
        display: 'Display/Non-display',
        d_rings: false,
        variants: ['3000e']
      },
      {
        desc: 'Adjustable Nylon Carrying Strap',
        part: 'NTN5243',
        material: 'Nylon',
        belt_sz: '',
        swivel: '',
        display: 'Display/Non-display',
        d_rings: false,
        variants: ['3000e']
      },
      {
        desc: 'Leather Radio Strap',
        part: 'RLN6486',
        material: 'Leather',
        belt_sz: '',
        swivel: '',
        display: 'Display/Non-display',
        d_rings: false,
        variants: ['3000e']
      },
      {
        desc: 'Leather Radio Strap - XL',
        part: 'RLN6487',
        material: 'Leather',
        belt_sz: '',
        swivel: '',
        display: 'Display/Non-display',
        d_rings: false,
        variants: ['3000e']
      },
      {
        desc: 'Anti-Sway Strap for Leather Radio Straps',
        part: 'RLN6488',
        material: 'Leather',
        belt_sz: '',
        swivel: '',
        display: 'Display/Non-display',
        d_rings: false,
        variants: ['3000e']
      }
    ]
  },

  // ── CATEGORY 7: ANTENNAS ──────────────────────────────────────────────────
  {
    id: 'antennas',
    label: 'Antennas',
    columns: ['Description','Part Number','Band','Frequency (MHz)','Length (cm)','Type'],
    items: [
      {
        desc: 'UHF/GPS Combination Wideband Slim Whip Antenna (403-527 MHz)',
        part: 'PMAE4079',
        band: 'UHF',
        freq_mhz: '403-527',
        len_cm: 15,
        ant_type: 'Whip',
        variants: ['3000e']
      },
      {
        desc: 'VHF/GPS Combination Helical Antenna (136-155 MHz)',
        part: 'PMAD4117',
        band: 'VHF',
        freq_mhz: '136-155',
        len_cm: 15,
        ant_type: 'Helical',
        variants: ['3000e']
      },
      {
        desc: 'VHF/GPS Combination Helical Antenna (144-165 MHz)',
        part: 'PMAD4116',
        band: 'VHF',
        freq_mhz: '144-165',
        len_cm: 15,
        ant_type: 'Helical',
        variants: ['3000e']
      },
      {
        desc: 'VHF/GPS Combination Helical Antenna (152-174 MHz)',
        part: 'PMAD4118',
        band: 'VHF',
        freq_mhz: '152-174',
        len_cm: 15,
        ant_type: 'Helical',
        variants: ['3000e']
      },
      {
        desc: 'UHF/GPS Combination Stubby Antenna (403-450 MHz)',
        part: 'PMAE4069',
        band: 'UHF',
        freq_mhz: '403-450',
        len_cm: 9,
        ant_type: 'Stubby',
        variants: ['3000e']
      },
      {
        desc: 'UHF/GPS Combination Stubby Antenna (440-490 MHz)',
        part: 'PMAE4070',
        band: 'UHF',
        freq_mhz: '440-490',
        len_cm: 11,
        ant_type: 'Stubby',
        variants: ['3000e']
      },
      {
        desc: 'UHF/GPS Combination Stubby Antenna (470-527 MHz)',
        part: 'PMAE4071',
        band: 'UHF',
        freq_mhz: '470-527',
        len_cm: 11,
        ant_type: 'Stubby',
        variants: ['3000e']
      },
      {
        desc: 'VHF/GPS Combination Stubby Antenna (136-148 MHz)',
        part: 'PMAD4119',
        band: 'VHF',
        freq_mhz: '136-148',
        len_cm: 9,
        ant_type: 'Stubby',
        variants: ['3000e']
      },
      {
        desc: 'VHF/GPS Combination Stubby Antenna (146-160 MHz)',
        part: 'PMAD4120',
        band: 'VHF',
        freq_mhz: '146-160',
        len_cm: 9,
        ant_type: 'Stubby',
        variants: ['3000e']
      },
      {
        desc: 'VHF Stubby Antenna (320-360 MHz)',
        part: 'PMAD4135',
        band: 'VHF',
        freq_mhz: '320-360',
        len_cm: null,
        ant_type: 'Stubby',
        variants: ['3000e']
      },
      {
        desc: 'VHF Stubby Antenna (300-337 MHz)',
        part: 'PMAD4137',
        band: 'VHF',
        freq_mhz: '300-337',
        len_cm: null,
        ant_type: 'Stubby',
        variants: ['3000e']
      },
      {
        desc: 'VHF Stubby Antenna (160-174 MHz)',
        part: 'PMAD4121',
        band: 'VHF',
        freq_mhz: '160-174',
        len_cm: null,
        ant_type: 'Stubby',
        variants: ['3000e']
      },
      {
        desc: 'VHF Stubby Antenna (350-380 MHz)',
        part: 'PMAD4136',
        band: 'VHF',
        freq_mhz: '350-380',
        len_cm: null,
        ant_type: 'Stubby',
        variants: ['3000e']
      },
      {
        desc: 'VHF Stubby Antenna (360-400 MHz)',
        part: 'PMAD4133',
        band: 'VHF',
        freq_mhz: '360-400',
        len_cm: null,
        ant_type: 'Stubby',
        variants: ['3000e']
      },
      {
        desc: 'VHF Whip Antenna (300-360 MHz)',
        part: 'PMAD4138',
        band: 'VHF',
        freq_mhz: '300-360',
        len_cm: null,
        ant_type: 'Whip',
        variants: ['3000e']
      },
      {
        desc: 'VHF Whip Antenna (350-400 MHz)',
        part: 'PMAD4139',
        band: 'VHF',
        freq_mhz: '350-400',
        len_cm: null,
        ant_type: 'Whip',
        variants: ['3000e']
      }
    ]
  },

  // ── CATEGORY 8: CABLES ────────────────────────────────────────────────────
  {
    id: 'cables',
    label: 'Cables',
    columns: ['Description','Part Number'],
    items: [
      {
        desc: 'Portable Programming Cable (USB) for XPR 3000 Series',
        part: 'PMKN4115',
        variants: ['3000e']
      },
      {
        desc: 'Programming, Test and Alignment Cable for XPR 3000 Series',
        part: 'PMKN4117',
        variants: ['3000e']
      },
      {
        desc: 'Programming Cable Slim Conn to DB25 and TTR',
        part: 'PMKN4116',
        variants: ['3000e']
      }
    ]
  },

  // ── CATEGORY 9: SCREEN PROTECTORS ────────────────────────────────────────
  {
    id: 'screen_protectors',
    label: 'Screen Protectors',
    columns: ['Description','Part Number'],
    items: []
    // No DP3000e screen protector listed in PDF
  },

  // ── CATEGORY 11: IMPRES BATTERY MGMT TOOLS ───────────────────────────────
  {
    id: 'impres_tools',
    label: 'IMPRES Tools',
    columns: ['Description','Part Number'],
    items: [
      {
        desc: 'IMPRES Battery Fleet Management License Key, NA/CAN',
        part: 'HKVN4036',
        variants: ['3000e']
      },
      {
        desc: 'IMPRES Battery Fleet Management License Key, EMEA',
        part: 'HKVN4037',
        variants: ['3000e']
      },
      {
        desc: 'IMPRES Battery Fleet Management License Key, LA',
        part: 'HKVN4038',
        variants: ['3000e']
      },
      {
        desc: 'IMPRES Battery Fleet Management License Key, Asia',
        part: 'HKVN4039',
        variants: ['3000e']
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
        desc: 'Operations Critical Wireless Earpiece with 12-Inch Cable (with US/JP Charger)',
        part: 'NNTN8125',
        ear_type: 'Over-the-ear (CommPort)',
        mic_type: 'Directional, above earpiece',
        ptt: 'On PTT pod',
        talk_time_hr: 10,
        charge_time_hr: 3,
        weight_g: 43,
        variants: ['3000e']
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
        variants: ['3000e']
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
        variants: ['3000e']
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
        variants: ['3000e']
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
        variants: ['3000e']
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
        variants: ['3000e']
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
        variants: ['3000e']
      }
    ]
  }
,
  {
    id: 'programming_cables',
    label: 'Programming Cables',
    columns: ['Description','Part Number'],
    items: [
      {desc:'Portable Programming Cable (USB)', part:'PMKN4115'},
      {desc:'Programming, Test, and Alignment Cable', part:'PMKN4117'}
    ]
  }
];

// Wire into global RADIOS_DATA
if (typeof window.RADIOS_DATA === 'undefined') window.RADIOS_DATA = {};
window.RADIOS_DATA['dp3000'] = DP3000_CATEGORIES;
