// XPR 7000 / XPR 7000e Series Accessory Data
// Source: MOTOTRBO Professional Tier Accessory Catalog (2026)
// Part numbers and specs verified from PDF pages 55-57

const xpr7000Categories = [
  // ── Category 1: Batteries ──────────────────────────────────────────────────
  {
    id: 'batteries',
    label: 'Batteries',
    cols: [
      'Description', 'Part Number',
      'IMPRES', 'Chemistry', 'Typical Capacity (mAh)',
      'Dimensions (mm)', 'Weight', 'HazLoc', 'IP Rating', 'Operating Temp'
    ],
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
        op_temp: '-10\u00b0C to +60\u00b0C'
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
        op_temp: '-20\u00b0C to +60\u00b0C'
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
        op_temp: '-10\u00b0C to +60\u00b0C'
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
        op_temp: '-10\u00b0C to +60\u00b0C'
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
        op_temp: '-10\u00b0C to +60\u00b0C'
      },
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
        op_temp: '-10\u00b0C to +60\u00b0C'
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
        op_temp: '-10\u00b0C to +60\u00b0C'
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
        op_temp: '-10\u00b0C to +60\u00b0C'
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
        op_temp: '-10\u00b0C to +60\u00b0C'
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
        op_temp: '-20\u00b0C to +60\u00b0C'
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
        op_temp: '-20\u00b0C to +60\u00b0C'
      }
    ]
  },

  // ── Category 2: Chargers ───────────────────────────────────────────────────
  {
    id: 'chargers',
    label: 'Chargers',
    cols: [
      'Description', 'Part Number',
      'IMPRES', 'Chemistry', 'Power Source', 'Dimensions (mm)', 'Pockets'
    ],
    items: [
      // Single-Unit Chargers
      {
        desc: 'IMPRES Single-Unit Charger, US/CAN Plug',
        part: 'PMPN4576A',
        impres: true,
        chem: 'Li-Ion, NiMH',
        pwr_src: '120 VAC',
        dims_mm: '51 x 88 x 94',
        pockets: 1
      },
      {
        desc: 'IMPRES Single-Unit Charger, ARG Plug',
        part: 'PMPN4573A',
        impres: true,
        chem: 'Li-Ion, NiMH',
        pwr_src: '240 VAC',
        dims_mm: '51 x 88 x 94',
        pockets: 1
      },
      {
        desc: 'IMPRES Single-Unit Charger, BRZ Plug',
        part: 'PMPN4575A',
        impres: true,
        chem: 'Li-Ion, NiMH',
        pwr_src: '100-240 VAC',
        dims_mm: '51 x 88 x 94',
        pockets: 1
      },
      {
        desc: 'IMPRES Single-Unit Charger, UK Plug',
        part: 'PMPN4572A',
        impres: true,
        chem: 'Li-Ion, NiMH',
        pwr_src: '240 VAC',
        dims_mm: '51 x 88 x 94',
        pockets: 1
      },
      {
        desc: 'IMPRES Single-Unit Charger, EURO Plug',
        part: 'PMPN4577A',
        impres: true,
        chem: 'Li-Ion, NiMH',
        pwr_src: '240 VAC',
        dims_mm: '51 x 88 x 94',
        pockets: 1
      },
      {
        desc: 'IMPRES Single-Unit Charger, AU/NZ Plug',
        part: 'PMPN4571A',
        impres: true,
        chem: 'Li-Ion, NiMH',
        pwr_src: '240 VAC',
        dims_mm: '51 x 88 x 94',
        pockets: 1
      },
      {
        desc: 'IMPRES Single-Unit Charger, JAP Plug',
        part: 'PMPN4578A',
        impres: true,
        chem: 'Li-Ion, NiMH',
        pwr_src: '100-240 VAC',
        dims_mm: '51 x 88 x 94',
        pockets: 1
      },
      {
        desc: 'IMPRES Single-Unit Charger, KOR Plug',
        part: 'PMPN4574A',
        impres: true,
        chem: 'Li-Ion, NiMH',
        pwr_src: '240 VAC',
        dims_mm: '51 x 88 x 94',
        pockets: 1
      },
      {
        desc: 'IMPRES Single-Unit Charger, CHN Plug',
        part: 'PMPN4579A',
        impres: true,
        chem: 'Li-Ion, NiMH',
        pwr_src: '240 VAC',
        dims_mm: '51 x 88 x 94',
        pockets: 1
      },
      {
        desc: 'IMPRES Single-Unit Charger, INDIA Plug',
        part: 'PMPN4582A',
        impres: true,
        chem: 'Li-Ion, NiMH',
        pwr_src: '100-240 VAC',
        dims_mm: '51 x 88 x 94',
        pockets: 1
      },
      // Multi-Unit Chargers
      {
        desc: 'IMPRES 2 Multi-Unit Fast Charger with 1 Display, US/CAN Plug',
        part: 'PMPN4284',
        impres: true,
        chem: 'Li-Ion, NiMH',
        pwr_src: '100-240 VAC',
        dims_mm: '153 x 445 x 292',
        pockets: 6
      },
      {
        desc: 'IMPRES 2 Multi-Unit Fast Charger with 1 Display, UK Plug',
        part: 'PMPN4290',
        impres: true,
        chem: 'Li-Ion, NiMH',
        pwr_src: '100-240 VAC',
        dims_mm: '153 x 445 x 292',
        pockets: 6
      },
      {
        desc: 'IMPRES 2 Multi-Unit Fast Charger with 1 Display, EURO Plug',
        part: 'PMPN4289',
        impres: true,
        chem: 'Li-Ion, NiMH',
        pwr_src: '100-240 VAC',
        dims_mm: '153 x 445 x 292',
        pockets: 6
      },
      {
        desc: 'IMPRES 2 Multi-Unit Fast Charger with 1 Display, AU/NZ Plug',
        part: 'PMPN4293',
        impres: true,
        chem: 'Li-Ion, NiMH',
        pwr_src: '100-240 VAC',
        dims_mm: '153 x 445 x 292',
        pockets: 6
      },
      {
        desc: 'IMPRES 2 Multi-Unit Fast Charger with 1 Display, ARG Plug',
        part: 'PMPN4291',
        impres: true,
        chem: 'Li-Ion, NiMH',
        pwr_src: '100-240 VAC',
        dims_mm: '153 x 445 x 292',
        pockets: 6
      },
      {
        desc: 'IMPRES 2 Multi-Unit Fast Charger with 1 Display, BZL Plug',
        part: 'PMPN4292',
        impres: true,
        chem: 'Li-Ion, NiMH',
        pwr_src: '100-240 VAC',
        dims_mm: '153 x 445 x 292',
        pockets: 6
      },
      {
        desc: 'IMPRES 2 Multi-Unit Fast Charger with 1 Display, JAP Plug',
        part: 'PMPN4295',
        impres: true,
        chem: 'Li-Ion, NiMH',
        pwr_src: '100-240 VAC',
        dims_mm: '153 x 445 x 292',
        pockets: 6
      },
      {
        desc: 'IMPRES 2 Multi-Unit Fast Charger with 1 Display, KOR Plug',
        part: 'PMPN4294',
        impres: true,
        chem: 'Li-Ion, NiMH',
        pwr_src: '100-240 VAC',
        dims_mm: '153 x 445 x 292',
        pockets: 6
      },
      {
        desc: 'IMPRES 2 Multi-Unit Fast Charger with 1 Display, CHN Plug',
        part: 'PMPN4296',
        impres: true,
        chem: 'Li-Ion, NiMH',
        pwr_src: '100-240 VAC',
        dims_mm: '153 x 445 x 292',
        pockets: 6
      },
      {
        desc: 'IMPRES 2 Multi-Unit Fast Charger with 1 Display, TW Plug',
        part: 'PMPN4462',
        impres: true,
        chem: 'Li-Ion, NiMH',
        pwr_src: '100-240 VAC',
        dims_mm: '153 x 445 x 292',
        pockets: 6
      },
      // Vehicle Chargers
      {
        desc: 'IMPRES Single-Unit Rapid Rate Vehicular Charger, Heavy-Duty Permanent Mount',
        part: 'NNTN7616',
        impres: true,
        chem: 'Li-Ion, NiMH',
        pwr_src: '12 VDC (hardwire)',
        dims_mm: '200 x 83 x 97',
        pockets: 1
      }
    ]
  },

  // ── Category 3: RSM / Audio ────────────────────────────────────────────────
  {
    id: 'rsm',
    label: 'RSM / Audio',
    cols: [
      'Description', 'Part Number',
      'IMPRES', 'Intelligent Audio', 'AI Noise Suppression',
      'Windporting/Noise Canceling', 'Full Duplex', 'Volume Control',
      'Prog Button', 'Audio Jack', 'IP Rating', 'HazLoc', 'Dimensions (mm)'
    ],
    items: [
      {
        desc: 'Windporting Remote Speaker Microphone, Small (IP54)',
        part: 'PMMN4024',
        impres: false,
        intel_audio: false,
        ai_noise: false,
        windporting: 'Windporting',
        full_duplex: false,
        vol_ctrl: true,
        prog_btn: '',
        audio_jack: true,
        ip: 'IP54',
        hazloc: '',
        dims_mm: '55 x 60 x 27'
      },
      {
        desc: 'IMPRES Windporting Remote Speaker Microphone, Small (IP54)',
        part: 'PMMN4025',
        impres: true,
        intel_audio: true,
        ai_noise: false,
        windporting: 'Windporting',
        full_duplex: false,
        vol_ctrl: true,
        prog_btn: '',
        audio_jack: true,
        ip: 'IP54',
        hazloc: 'UL',
        dims_mm: '55 x 60 x 27'
      },
      {
        desc: 'Windporting Remote Speaker Microphone, Small, Submersible (IP57)',
        part: 'PMMN4040',
        impres: false,
        intel_audio: false,
        ai_noise: false,
        windporting: 'Windporting',
        full_duplex: false,
        vol_ctrl: false,
        prog_btn: '',
        audio_jack: true,
        ip: 'IP57',
        hazloc: 'UL',
        dims_mm: '55 x 60 x 27'
      },
      {
        desc: 'IMPRES Windporting Remote Speaker Microphone, Large, Submersible (IP57)',
        part: 'PMMN4046',
        impres: true,
        intel_audio: false,
        ai_noise: false,
        windporting: 'Windporting',
        full_duplex: false,
        vol_ctrl: false,
        prog_btn: '',
        audio_jack: true,
        ip: 'IP57',
        hazloc: 'UL',
        dims_mm: '60 x 78 x 28'
      },
      {
        desc: 'IMPRES Noise-Canceling Remote Speaker Microphone, Large (IP54)',
        part: 'PMMN4050',
        impres: true,
        intel_audio: false,
        ai_noise: false,
        windporting: 'Noise-Canceling',
        full_duplex: false,
        vol_ctrl: false,
        prog_btn: '',
        audio_jack: true,
        ip: 'IP54',
        hazloc: 'UL',
        dims_mm: '60 x 78 x 28'
      },
      {
        desc: 'IMPRES Industrial Noise-Canceling (INC) Dual Mic. Noise Suppression RSM, Submersible (IP57)',
        part: 'NNTN8382',
        impres: true,
        intel_audio: false,
        ai_noise: false,
        windporting: 'Dual Mic. Noise Suppression',
        full_duplex: false,
        vol_ctrl: false,
        prog_btn: '',
        audio_jack: true,
        ip: 'IP57',
        hazloc: 'UL',
        dims_mm: '60 x 78 x 28'
      },
      {
        desc: 'IMPRES Industrial Noise-Canceling (INC) Dual Mic. Noise Suppression RSM (IP54)',
        part: 'NNTN8383',
        impres: true,
        intel_audio: false,
        ai_noise: false,
        windporting: 'Dual Mic. Noise Suppression',
        full_duplex: false,
        vol_ctrl: false,
        prog_btn: '',
        audio_jack: true,
        ip: 'IP54',
        hazloc: 'UL',
        dims_mm: '60 x 78 x 28'
      },
      {
        desc: 'IMPRES Windporting Remote Speaker Microphone (IP64)',
        part: 'PMMN4067',
        impres: true,
        intel_audio: false,
        ai_noise: false,
        windporting: 'Windporting',
        full_duplex: false,
        vol_ctrl: true,
        prog_btn: '',
        audio_jack: true,
        ip: 'IP64',
        hazloc: 'ATEX',
        dims_mm: '60 x 78 x 28'
      },
      {
        desc: 'IMPRES Active Noise-Canceling RSM with Large Front PTT and Side PTT (IP67)',
        part: 'PMMN4102',
        impres: true,
        intel_audio: true,
        ai_noise: false,
        windporting: 'Noise-Canceling',
        full_duplex: false,
        vol_ctrl: true,
        prog_btn: 'Nexus and 3.5mm locking',
        audio_jack: true,
        ip: 'IP67',
        hazloc: 'UL',
        dims_mm: '68 x 94 x 29'
      },
      {
        desc: 'IMPRES Omni Remote Speaker Microphone with Large Front PTT and Side PTT (IP67)',
        part: 'PMMN4113',
        impres: true,
        intel_audio: true,
        ai_noise: false,
        windporting: 'Windporting',
        full_duplex: false,
        vol_ctrl: true,
        prog_btn: 'Nexus and 3.5mm locking',
        audio_jack: true,
        ip: 'IP67',
        hazloc: 'UL',
        dims_mm: '68 x 94 x 29'
      },
      {
        desc: 'IMPRES Windporting Remote Speaker Microphone, Large, Submersible (IP68)',
        part: 'PMMN4099',
        impres: true,
        intel_audio: false,
        ai_noise: false,
        windporting: 'Windporting',
        full_duplex: false,
        vol_ctrl: false,
        prog_btn: '',
        audio_jack: true,
        ip: 'IP68',
        hazloc: 'UL',
        dims_mm: '60 x 78 x 28'
      }
    ]
  },

  // ── Category 4: Surveillance / Earpieces ──────────────────────────────────
  {
    id: 'surveillance',
    label: 'Surveillance / Earpieces',
    cols: [
      'Description', 'Part Number',
      'IMPRES', 'Intelligent Audio', 'AI Noise Suppression',
      'Ear Type', 'Mic Type', 'Full Duplex', 'HazLoc'
    ],
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
        hazloc: 'UL'
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
        hazloc: 'UL'
      },
      {
        desc: 'IMPRES 2-Wire Earhook with Earbud Earpiece, Black',
        part: 'PMLN6127',
        impres: true,
        intel_audio: true,
        ai_noise: false,
        ear_type: 'Earpiece',
        mic_type: 'In-line',
        full_duplex: false,
        hazloc: 'UL'
      },
      {
        desc: 'IMPRES 2-Wire Earhook with Earbud Earpiece, Beige',
        part: 'PMLN6128',
        impres: true,
        intel_audio: true,
        ai_noise: false,
        ear_type: 'Earpiece',
        mic_type: 'In-line',
        full_duplex: false,
        hazloc: 'UL'
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
        hazloc: 'UL'
      },
      {
        desc: 'IMPRES 2-Wire Surveillance Kit with Translucent Tube, Black',
        part: 'PMLN6129',
        impres: true,
        intel_audio: true,
        ai_noise: false,
        ear_type: 'Clear rubber eartip',
        mic_type: 'In-line',
        full_duplex: false,
        hazloc: 'UL'
      },
      {
        desc: 'IMPRES 2-Wire Surveillance Kit with Translucent Tube, Beige',
        part: 'PMLN6130',
        impres: true,
        intel_audio: true,
        ai_noise: false,
        ear_type: 'Clear rubber eartip',
        mic_type: 'In-line',
        full_duplex: false,
        hazloc: 'UL'
      },
      {
        desc: 'IMPRES 3-Wire Surveillance Kit with Translucent Tube, Black',
        part: 'PMLN6123',
        impres: true,
        intel_audio: true,
        ai_noise: false,
        ear_type: 'Clear rubber eartip',
        mic_type: 'Separate',
        full_duplex: false,
        hazloc: 'UL'
      },
      {
        desc: 'IMPRES 3-Wire Surveillance Kit with Translucent Tube, Beige',
        part: 'PMLN6124',
        impres: true,
        intel_audio: true,
        ai_noise: false,
        ear_type: 'Clear rubber eartip',
        mic_type: 'Separate',
        full_duplex: false,
        hazloc: 'UL'
      },
      {
        desc: '2-Wire Surveillance Kit with Translucent Tube, Black',
        part: 'PMLN7269',
        impres: false,
        intel_audio: false,
        ai_noise: false,
        ear_type: 'Clear rubber eartip',
        mic_type: 'In-line',
        full_duplex: false,
        hazloc: ''
      },
      {
        desc: '2-Wire Surveillance Kit with Translucent Tube, Beige',
        part: 'PMLN7270',
        impres: false,
        intel_audio: false,
        ai_noise: false,
        ear_type: 'Clear rubber eartip',
        mic_type: 'In-line',
        full_duplex: false,
        hazloc: ''
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
        hazloc: ''
      },
      {
        desc: '2-Wire Surveillance Kit, Black',
        part: 'PMLN7157',
        impres: false,
        intel_audio: false,
        ai_noise: false,
        ear_type: 'Clear rubber eartip',
        mic_type: 'In-line',
        full_duplex: false,
        hazloc: ''
      }
    ]
  },

  // ── Category 5: Headsets ───────────────────────────────────────────────────
  {
    id: 'headsets',
    label: 'Headsets',
    cols: [
      'Description', 'Part Number',
      'IMPRES', 'Headset Type', 'Ear Style', 'NRR (dB)', 'Mic Type', 'HazLoc'
    ],
    items: [
      {
        desc: 'Heavy Duty Behind-the-Head Headset with Noise-Canceling Boom Microphone IP54',
        part: 'PMLN8085',
        impres: true,
        headset_type: 'Behind-the-head',
        ear_style: 'Dual-muff',
        nrr_db: 24,
        mic_type: 'Boom',
        hazloc: 'UL'
      },
      {
        desc: 'Heavy Duty Over-the-Head Headset with Noise-Canceling Boom Microphone IP54',
        part: 'PMLN8086',
        impres: true,
        headset_type: 'Over-the-head',
        ear_style: 'Dual-muff',
        nrr_db: 24,
        mic_type: 'Boom',
        hazloc: 'UL'
      },
      {
        desc: 'Heavy Duty Behind-the-Head Headset with Noise-Canceling Boom Microphone',
        part: 'PMLN6852',
        impres: true,
        headset_type: 'Behind-the-head',
        ear_style: 'Dual-muff',
        nrr_db: 24,
        mic_type: 'Boom',
        hazloc: ''
      },
      {
        desc: 'Heavy Duty Over-the-Head Headset with Noise-Canceling Boom Microphone',
        part: 'PMLN7466',
        impres: true,
        headset_type: 'Over-the-head',
        ear_style: 'Dual-muff',
        nrr_db: 24,
        mic_type: 'Boom',
        hazloc: ''
      },
      {
        desc: 'Heavy Duty Behind-the-Head Headset with Noise-Canceling Boom Microphone (UL)',
        part: 'PMLN6853',
        impres: true,
        headset_type: 'Behind-the-head',
        ear_style: 'Dual-muff',
        nrr_db: 24,
        mic_type: 'Boom',
        hazloc: 'UL'
      },
      {
        desc: 'Heavy Duty Over-the-Head Headset with Noise-Canceling Boom Microphone (UL)',
        part: 'PMLN7467',
        impres: true,
        headset_type: 'Over-the-head',
        ear_style: 'Dual-muff',
        nrr_db: 24,
        mic_type: 'Boom',
        hazloc: 'UL'
      },
      {
        desc: 'IMPRES Temple Transducer Headset',
        part: 'PMLN5101',
        impres: true,
        headset_type: 'Behind-the-head',
        ear_style: 'Bone conduction',
        nrr_db: null,
        mic_type: 'Boom',
        hazloc: ''
      },
      {
        desc: 'Lightweight Over-the-Head Headset',
        part: 'RMN5058',
        impres: true,
        headset_type: 'Over-the-head',
        ear_style: 'Single-ear',
        nrr_db: null,
        mic_type: 'Boom',
        hazloc: 'UL'
      },
      // 3M Peltor
      {
        desc: 'MT Series Over-The-Head Headset, Direct Radio Connect (3M Peltor MT7H79A-97-UL-34)',
        part: 'RMN5137',
        impres: false,
        headset_type: 'Over-the-head',
        ear_style: 'Dual-ear',
        nrr_db: 25,
        mic_type: 'Boom',
        hazloc: 'UL'
      },
      {
        desc: 'MT Series Neckband Headset, Direct Radio Connect (3M Peltor MT7H79B-97-UL-34)',
        part: 'RMN5138',
        impres: false,
        headset_type: 'Neckband',
        ear_style: 'Dual-ear',
        nrr_db: 24,
        mic_type: 'Boom',
        hazloc: 'UL'
      },
      {
        desc: 'MT Series Hard Hat Attached Headset, Direct Radio Connect (3M Peltor MT7H79P3E-97-UL-34)',
        part: 'RMN5139',
        impres: false,
        headset_type: 'Hard hat attached',
        ear_style: 'Dual-ear',
        nrr_db: 21,
        mic_type: 'Boom',
        hazloc: 'UL'
      }
    ]
  },

  // ── Category 6: Carry ──────────────────────────────────────────────────────
  {
    id: 'carry',
    label: 'Carry Solutions',
    cols: [
      'Description', 'Part Number',
      'Material', 'Belt Size (in)', 'Swivel/Fixed', 'Display', 'D-Rings'
    ],
    items: [
      {
        desc: 'Hard Leather Case with 2.5 Inch Swivel Belt Loop (Display Model)',
        part: 'PMLN8300',
        material: 'Hard leather',
        belt_sz: '2.5',
        swivel: 'Swivel',
        display: 'Display',
        d_rings: true
      },
      {
        desc: 'Hard Leather Case with 3 Inch Swivel Belt Loop (Display Model)',
        part: 'PMLN8299',
        material: 'Hard leather',
        belt_sz: '3',
        swivel: 'Swivel',
        display: 'Display',
        d_rings: true
      },
      {
        desc: 'Hard Leather Case with 3 Inch Fixed Belt Loop (Display Model)',
        part: 'PMLN8301',
        material: 'Hard leather',
        belt_sz: '3',
        swivel: 'Fixed',
        display: 'Display',
        d_rings: true
      },
      {
        desc: 'Hard Leather Case with 2.5 Inch Swivel Belt Loop (Non-Display Model)',
        part: 'PMLN8303',
        material: 'Hard leather',
        belt_sz: '2.5',
        swivel: 'Swivel',
        display: 'Non-display',
        d_rings: true
      },
      {
        desc: 'Hard Leather Case with 3 Inch Swivel Belt Loop (Non-Display Model)',
        part: 'PMLN8302',
        material: 'Hard leather',
        belt_sz: '3',
        swivel: 'Swivel',
        display: 'Non-display',
        d_rings: true
      },
      {
        desc: 'Hard Leather Case with 3 Inch Fixed Belt Loop (Non-Display Model)',
        part: 'PMLN8304',
        material: 'Hard leather',
        belt_sz: '3',
        swivel: 'Fixed',
        display: 'Non-display',
        d_rings: true
      },
      {
        desc: 'Replacement 2.5 Inch Swivel Belt Loop',
        part: 'PMLN5610',
        material: 'Hard leather',
        belt_sz: '2.5',
        swivel: 'Swivel',
        display: 'Display/Non-display',
        d_rings: false
      },
      {
        desc: 'Replacement 3 Inch Leather Swivel Belt Loop',
        part: 'PMLN5611',
        material: 'Hard leather',
        belt_sz: '3',
        swivel: 'Swivel',
        display: 'Display/Non-display',
        d_rings: false
      },
      {
        desc: 'Spring Action 2 Inch Belt Clip',
        part: 'PMLN4651',
        material: 'Plastic',
        belt_sz: '2',
        swivel: 'Fixed',
        display: 'Display/Non-display',
        d_rings: false
      },
      {
        desc: 'Spring Action 2.5 Inch Belt Clip',
        part: 'PMLN7008',
        material: 'Plastic',
        belt_sz: '2.5',
        swivel: 'Fixed',
        display: 'Display/Non-display',
        d_rings: false
      },
      {
        desc: 'Waterproof Bag with Large Strap',
        part: 'HLN9985',
        material: 'Waterproof',
        belt_sz: '',
        swivel: '',
        display: '',
        d_rings: false
      },
      {
        desc: 'Universal Chest Pack with Radio Holder, Pen Holder and Velcro Secured Pouch',
        part: 'HLN6602',
        material: 'Nylon',
        belt_sz: '',
        swivel: '',
        display: '',
        d_rings: false
      },
      {
        desc: 'Adjustable Nylon Carrying Strap',
        part: 'NTN5243',
        material: 'Nylon',
        belt_sz: '',
        swivel: '',
        display: '',
        d_rings: false
      },
      {
        desc: 'Leather Radio Strap',
        part: 'RLN6486',
        material: 'Leather',
        belt_sz: '',
        swivel: '',
        display: '',
        d_rings: false
      },
      {
        desc: 'Leather Radio Strap - XL',
        part: 'RLN6487',
        material: 'Leather',
        belt_sz: '',
        swivel: '',
        display: '',
        d_rings: false
      },
      {
        desc: 'Nylon Wrist Strap',
        part: 'PMLN6074',
        material: 'Nylon',
        belt_sz: '',
        swivel: '',
        display: '',
        d_rings: false
      }
    ]
  },

  // ── Category 7: Antennas ───────────────────────────────────────────────────
  {
    id: 'antennas',
    label: 'Antennas',
    cols: [
      'Description', 'Part Number',
      'Band', 'Frequency (MHz)', 'Length (cm)', 'Type'
    ],
    items: [
      { desc: 'UHF/GPS Combination Wideband Slim Whip Antenna (400-527 MHz)', part: 'PMAE4079', band: 'UHF', freq_mhz: '403-527', len_cm: 15, ant_type: 'Whip' },
      { desc: 'VHF/GPS Combination Helical Antenna (136-155 MHz)', part: 'PMAD4117', band: 'VHF', freq_mhz: '136-155', len_cm: 15, ant_type: 'Helical' },
      { desc: 'VHF/GPS Combination Helical Antenna (144-165 MHz)', part: 'PMAD4116', band: 'VHF', freq_mhz: '144-165', len_cm: 15, ant_type: 'Helical' },
      { desc: 'VHF/GPS Combination Helical Antenna (152-174 MHz)', part: 'PMAD4118', band: 'VHF', freq_mhz: '152-174', len_cm: 15, ant_type: 'Helical' },
      { desc: 'UHF/GPS Combination Stubby Antenna (400-450 MHz)', part: 'PMAE4069', band: 'UHF', freq_mhz: '403-450', len_cm: 9, ant_type: 'Stubby' },
      { desc: 'UHF/GPS Combination Stubby Antenna (440-490 MHz)', part: 'PMAE4070', band: 'UHF', freq_mhz: '440-490', len_cm: 11, ant_type: 'Stubby' },
      { desc: 'UHF/GPS Combination Stubby Antenna (470-527 MHz)', part: 'PMAE4071', band: 'UHF', freq_mhz: '470-527', len_cm: 11, ant_type: 'Stubby' },
      { desc: 'VHF/GPS Combination Stubby Antenna (136-148 MHz)', part: 'PMAD4119', band: 'VHF', freq_mhz: '136-148', len_cm: 9, ant_type: 'Stubby' },
      { desc: 'VHF/GPS Combination Stubby Antenna (146-160 MHz)', part: 'PMAD4120', band: 'VHF', freq_mhz: '146-160', len_cm: 9, ant_type: 'Stubby' },
      { desc: 'VHF Stubby Antenna (320-360 MHz)', part: 'PMAD4135', band: 'VHF', freq_mhz: '320-360', len_cm: null, ant_type: 'Stubby' },
      { desc: 'VHF Stubby Antenna (300-337 MHz)', part: 'PMAD4137', band: 'VHF', freq_mhz: '300-337', len_cm: null, ant_type: 'Stubby' },
      { desc: '800 MHz Flexible Whip Antenna (806-870 MHz)', part: 'PMAF4011', band: '800/900 MHz', freq_mhz: '806-870', len_cm: 16.4, ant_type: 'Whip' },
      { desc: '900 MHz Flexible Whip Antenna (896-941 MHz)', part: 'PMAF4012', band: '800/900 MHz', freq_mhz: '896-941', len_cm: 14, ant_type: 'Whip' },
      { desc: '800/900 Stubby Antenna (806-870 MHz)', part: 'PMAF4009', band: '800/900 MHz', freq_mhz: '806-870', len_cm: 12, ant_type: 'Short whip' },
      { desc: '800/900 Stubby Antenna (896-941 MHz)', part: 'PMAF4010', band: '800/900 MHz', freq_mhz: '896-941', len_cm: 11.2, ant_type: 'Short whip' },
      { desc: 'UHF Antenna Kit for the 403-425 MHz Range', part: 'PMAE4078', band: 'UHF', freq_mhz: '403-425', len_cm: 1.9, ant_type: 'Stubby' },
      { desc: 'UHF Antenna Kit for the 420-445 MHz Range', part: 'PMAE4076', band: 'UHF', freq_mhz: '420-445', len_cm: 1.9, ant_type: 'Stubby' },
      { desc: 'UHF Antenna Kit for the 438-470 MHz Range', part: 'PMAE4077', band: 'UHF', freq_mhz: '438-470', len_cm: 1.9, ant_type: 'Stubby' },
      { desc: 'UHF Stubby Antenna Kit for the 450-490 MHz Range', part: 'PMAE4091', band: 'UHF', freq_mhz: '450-490', len_cm: 1.9, ant_type: 'Stubby' },
      { desc: 'UHF Stubby Antenna Kit for the 480-527 MHz Range', part: 'PMAE4092', band: 'UHF', freq_mhz: '480-527', len_cm: 1.9, ant_type: 'Stubby' },
      { desc: 'UHF SHORT Stubby Antenna (400-450 MHz)', part: 'AN000350A01', band: 'UHF', freq_mhz: '400-450', len_cm: 6, ant_type: 'Short stubby' },
      { desc: 'UHF SHORT Stubby Antenna (440-490 MHz)', part: 'AN000351A01', band: 'UHF', freq_mhz: '440-490', len_cm: 6, ant_type: 'Short stubby' },
      { desc: 'UHF Stubby Wideband (400-527 MHz)', part: 'AN000348A01', band: 'UHF', freq_mhz: '400-527', len_cm: 9, ant_type: 'Stubby' },
      { desc: 'Antenna Kit for the 800 MHz Range', part: 'PMAF4017', band: '800/900 MHz', freq_mhz: '806-870', len_cm: 1.1, ant_type: 'Stubby' },
      { desc: 'Antenna Kit for the 900 MHz Range', part: 'PMAF4018', band: '800/900 MHz', freq_mhz: '896-941', len_cm: 0.5, ant_type: 'Stubby' }
    ]
  },

  // ── Category 8: Cables ─────────────────────────────────────────────────────
  {
    id: 'cables',
    label: 'Cables',
    cols: ['Description', 'Part Number'],
    items: [
      { desc: 'Portable Programming Cable (USB) for XPR 6000/7000 Series', part: 'PMKN4012' },
      { desc: 'Programming, Test, and Alignment Cable for XPR 6000/7000 Series', part: 'PMKN4013' },
      { desc: 'Portable Telemetry Cable', part: 'PMKN4040' },
      { desc: 'Portable to RS232 DB25M Connector Cable', part: 'PMKN4071' },
      { desc: 'Test Alignment, TTR and Programming Cable', part: 'PMKN4126' }
    ]
  },

  // ── Category 9: Screen Protectors ─────────────────────────────────────────
  {
    id: 'screen_protectors',
    label: 'Screen Protectors',
    cols: ['Description', 'Part Number'],
    items: [
      { desc: 'Screen Protector, Clear (Single Pack - Qty 1)', part: 'AY000808A01' },
      { desc: 'Screen Protector, Clear (Bulk Pack - Qty 10)', part: 'AY000808A02' },
      { desc: 'Screen Protector, Clear (Bulk Pack - Qty 50)', part: 'AY000808A03' }
    ]
  },

  // ── Category 10: Programming Cables ───────────────────────────────────────
  {
    id: 'programming_cables',
    label: 'Programming Cables',
    cols: ['Description', 'Part Number'],
    items: [
      { desc: 'Portable Programming Cable (USB) for XPR 6000/7000 Series', part: 'PMKN4012' },
      { desc: 'Programming, Test, and Alignment Cable for XPR 6000/7000 Series', part: 'PMKN4013' }
    ]
  },

  // ── Category 11: IMPRES Battery Management Tools ───────────────────────────
  {
    id: 'impres_tools',
    label: 'IMPRES Battery Mgmt Tools',
    cols: ['Description', 'Part Number'],
    items: [
      { desc: 'IMPRES Battery Fleet Management License Key, NA/CAN', part: 'HKVN4036' },
      { desc: 'IMPRES Battery Fleet Management License Key, EMEA', part: 'HKVN4037' },
      { desc: 'IMPRES Battery Fleet Management License Key, LA', part: 'HKVN4038' },
      { desc: 'IMPRES Battery Fleet Management License Key, Asia', part: 'HKVN4039' }
    ]
  },

  // ── Category 12: Bluetooth / Ops Critical Wireless ────────────────────────
  {
    id: 'bluetooth',
    label: 'Bluetooth / Ops Critical Wireless',
    cols: [
      'Description', 'Part Number',
      'Ear Type', 'Mic Type', 'PTT',
      'Talk Time (hrs)', 'Charge Time (hrs)', 'Weight (g)'
    ],
    items: [
      {
        desc: 'Operations Critical Wireless Bluetooth Adapter',
        part: 'PMLN5712',
        ear_type: 'N/A',
        mic_type: 'N/A',
        ptt: 'On adapter',
        talk_time_hr: 30,
        charge_time_hr: null,
        weight_g: 65
      },
      {
        desc: 'Operations Critical Wireless RSM with Battery and Belt Clip',
        part: 'RLN6561',
        ear_type: 'N/A',
        mic_type: 'Omni directional, windporting equivalent',
        ptt: 'On microphone',
        talk_time_hr: 28,
        charge_time_hr: 3,
        weight_g: 158
      },
      {
        desc: 'XBT Operations Critical Wireless Behind-the-Neck Headset',
        part: 'RLN6490',
        ear_type: 'Dual-muff',
        mic_type: 'Boom',
        ptt: 'On ear cup',
        talk_time_hr: 22,
        charge_time_hr: 7,
        weight_g: 429
      },
      {
        desc: 'XBT Operations Critical Wireless Headband Style Headset',
        part: 'RLN6491',
        ear_type: 'Dual-muff',
        mic_type: 'Boom',
        ptt: 'On ear cup',
        talk_time_hr: 22,
        charge_time_hr: 7,
        weight_g: 422
      },
      {
        desc: 'Operations Critical Wireless Earpiece with 12 Inch Cable (with US/JP Charger)',
        part: 'NNTN8125',
        ear_type: 'Over-the-ear (CommPort)',
        mic_type: 'Directional, above earpiece',
        ptt: 'On PTT pod',
        talk_time_hr: 10,
        charge_time_hr: 3,
        weight_g: 43
      },
      {
        desc: 'Operations Critical Wireless Push-To-Talk Pod (with US Charger)',
        part: 'NNTN8127',
        ear_type: 'N/A',
        mic_type: 'N/A',
        ptt: 'On PTT pod',
        talk_time_hr: 10,
        charge_time_hr: 3,
        weight_g: 43
      },
      {
        desc: 'Operation Critical Wireless Bluetooth Earpiece with PTT',
        part: 'PMLN7851',
        ear_type: 'Over-the-ear (swivel)',
        mic_type: 'Boom',
        ptt: 'On boom mic',
        talk_time_hr: 8,
        charge_time_hr: 3,
        weight_g: 23
      },
      {
        desc: 'Bluetooth Accessory Kit with Flexible Earpiece, Pod and Charging Cradle with Power Supply (US Plug)',
        part: 'RLN6500',
        ear_type: 'Over-the-ear (swivel)',
        mic_type: 'In-line',
        ptt: 'Radio only',
        talk_time_hr: 8,
        charge_time_hr: 18,
        weight_g: null
      },
      {
        desc: 'Bluetooth Accessory Kit with Flexible Earpiece, Pod and Charging Cradle',
        part: 'PMLN7181',
        ear_type: 'Over-the-ear (swivel)',
        mic_type: 'Boom',
        ptt: 'Radio only',
        talk_time_hr: 8,
        charge_time_hr: 18,
        weight_g: null
      },
      {
        desc: 'Bluetooth Accessory Kit with Flexible Earpiece, Pod and Charging Cradle with Power Supply (US Plug)',
        part: 'RLN6556',
        ear_type: 'Over-the-ear (swivel)',
        mic_type: 'Boom',
        ptt: 'Radio only',
        talk_time_hr: 8,
        charge_time_hr: 18,
        weight_g: null
      },
      {
        desc: 'Operations Critical Wireless 1-Wire Surveillance Kit with Translucent Tube',
        part: 'PMLN7052',
        ear_type: 'Clear rubber eartip',
        mic_type: 'In-line',
        ptt: 'On pod (order separately)',
        talk_time_hr: null,
        charge_time_hr: null,
        weight_g: null
      },
      {
        desc: 'Enhanced Operations Critical Wireless Adapter with Touch Pairing',
        part: 'PMLN5993',
        ear_type: 'N/A',
        mic_type: 'N/A',
        ptt: 'On adapter',
        talk_time_hr: 35,
        charge_time_hr: null,
        weight_g: 65
      },
      {
        desc: 'Enhanced Operations Critical Wireless Earpiece with 12 Inch Cable and PTT Pod',
        part: 'NTN2570',
        ear_type: 'Over-the-ear (CommPort)',
        mic_type: 'Directional, above earpiece',
        ptt: 'On PTT pod',
        talk_time_hr: 10,
        charge_time_hr: 3,
        weight_g: 43
      },
      {
        desc: 'Enhanced Operations Critical Wireless Push-To-Talk Pod',
        part: 'NTN2571',
        ear_type: 'N/A',
        mic_type: 'N/A',
        ptt: 'On PTT pod',
        talk_time_hr: 10,
        charge_time_hr: 3,
        weight_g: 43
      }
    ]
  }
];

// Wire into RADIOS_DATA
window.RADIOS_DATA = window.RADIOS_DATA || {};
window.RADIOS_DATA['xpr7000'] = xpr7000Categories;
