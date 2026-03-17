// XPR 6000 Series Accessory Data
// Source: MOTOTRBO Professional Tier Accessory Catalog (2026)
// Part numbers and specs verified from PDF

const xpr6000Categories = [
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
      // Single-unit (shared with XPR 7000)
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
      // Single-unit rapid rate (non-IMPRES, XPR 6000 listed)
      {
        desc: 'Single-Unit Rapid Rate Charger, Linear, CHN Plug',
        part: 'NNTN8224',
        impres: false,
        chem: 'Li-Ion, NiMH',
        pwr_src: '240 VAC',
        dims_mm: '61 x 97 x 163',
        pockets: 1
      },
      {
        desc: 'Single-Unit Rapid Rate Charger, Switch-Mode 21W, BZL Plug',
        part: 'NNTN8280',
        impres: false,
        chem: 'Li-Ion, NiMH',
        pwr_src: '100-240 VAC',
        dims_mm: '61 x 97 x 163',
        pockets: 1
      },
      {
        desc: 'Single-Unit Rapid Rate Charger, Linear, EURO Plug',
        part: 'NNTN8292',
        impres: false,
        chem: 'Li-Ion, NiMH',
        pwr_src: '240 VAC',
        dims_mm: '61 x 97 x 163',
        pockets: 1
      },
      {
        desc: 'Single-Unit Rapid Rate Charger, Linear, UK Plug',
        part: 'NNTN8293',
        impres: false,
        chem: 'Li-Ion, NiMH',
        pwr_src: '240 VAC',
        dims_mm: '61 x 97 x 163',
        pockets: 1
      },
      // Multi-unit (shared with XPR 7000)
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
      // Vehicle
      {
        desc: 'IMPRES Single-Unit Rapid Rate Vehicular Charger, Heavy-Duty Permanent Mount',
        part: 'NNTN7616',
        impres: true,
        chem: 'Li-Ion, NiMH',
        pwr_src: '12 VDC (hardwire)',
        dims_mm: '200 x 83 x 97',
        pockets: 1
      },
      {
        desc: 'Travel Charger, Rapid Rate with Voltage Regulated Adapter and Coil Cord',
        part: 'NNTN8525',
        impres: false,
        chem: 'Li-Ion, NiMH',
        pwr_src: '12 VDC cigarette lighter',
        dims_mm: '58 x 64 x 67',
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
        impres: false, intel_audio: false, ai_noise: false,
        windporting: 'Windporting', full_duplex: false, vol_ctrl: true,
        prog_btn: '', audio_jack: true, ip: 'IP54', hazloc: '',
        dims_mm: '55 x 60 x 27'
      },
      {
        desc: 'IMPRES Windporting Remote Speaker Microphone, Small (IP54)',
        part: 'PMMN4025',
        impres: true, intel_audio: true, ai_noise: false,
        windporting: 'Windporting', full_duplex: false, vol_ctrl: true,
        prog_btn: '', audio_jack: true, ip: 'IP54', hazloc: 'UL',
        dims_mm: '55 x 60 x 27'
      },
      {
        desc: 'Windporting Remote Speaker Microphone, Small, Submersible (IP57)',
        part: 'PMMN4040',
        impres: false, intel_audio: false, ai_noise: false,
        windporting: 'Windporting', full_duplex: false, vol_ctrl: false,
        prog_btn: '', audio_jack: true, ip: 'IP57', hazloc: 'UL',
        dims_mm: '55 x 60 x 27'
      },
      {
        desc: 'IMPRES Windporting Remote Speaker Microphone, Large, Submersible (IP57)',
        part: 'PMMN4046',
        impres: true, intel_audio: false, ai_noise: false,
        windporting: 'Windporting', full_duplex: false, vol_ctrl: false,
        prog_btn: '', audio_jack: true, ip: 'IP57', hazloc: 'UL',
        dims_mm: '60 x 78 x 28'
      },
      {
        desc: 'IMPRES Noise-Canceling Remote Speaker Microphone, Large (IP54)',
        part: 'PMMN4050',
        impres: true, intel_audio: false, ai_noise: false,
        windporting: 'Noise-Canceling', full_duplex: false, vol_ctrl: false,
        prog_btn: '', audio_jack: true, ip: 'IP54', hazloc: 'UL',
        dims_mm: '60 x 78 x 28'
      },
      {
        desc: 'IMPRES Industrial Noise-Canceling (INC) Dual Mic. Noise Suppression RSM, Submersible (IP57)',
        part: 'NNTN8382',
        impres: true, intel_audio: false, ai_noise: false,
        windporting: 'Dual Mic. Noise Suppression', full_duplex: false, vol_ctrl: false,
        prog_btn: '', audio_jack: true, ip: 'IP57', hazloc: 'UL',
        dims_mm: '60 x 78 x 28'
      },
      {
        desc: 'IMPRES Industrial Noise-Canceling (INC) Dual Mic. Noise Suppression RSM (IP54)',
        part: 'NNTN8383',
        impres: true, intel_audio: false, ai_noise: false,
        windporting: 'Dual Mic. Noise Suppression', full_duplex: false, vol_ctrl: false,
        prog_btn: '', audio_jack: true, ip: 'IP54', hazloc: 'UL',
        dims_mm: '60 x 78 x 28'
      },
      {
        desc: 'IMPRES Windporting Remote Speaker Microphone (IP64)',
        part: 'PMMN4067',
        impres: true, intel_audio: false, ai_noise: false,
        windporting: 'Windporting', full_duplex: false, vol_ctrl: true,
        prog_btn: '', audio_jack: true, ip: 'IP64', hazloc: 'ATEX',
        dims_mm: '60 x 78 x 28'
      },
      {
        desc: 'IMPRES ATEX Active Noise-Canceling RSM with Large Front PTT and Side PTT (IP67)',
        part: 'PMMN4094',
        impres: true, intel_audio: true, ai_noise: false,
        windporting: 'Noise-Canceling', full_duplex: false, vol_ctrl: true,
        prog_btn: 'Nexus and 3.5mm locking', audio_jack: true, ip: 'IP67', hazloc: 'ATEX',
        dims_mm: '68 x 94 x 29'
      },
      {
        desc: 'IMPRES ATEX Omni RSM with Large Front PTT and Side PTT (IP67)',
        part: 'PMMN4110',
        impres: true, intel_audio: true, ai_noise: false,
        windporting: 'Windporting', full_duplex: false, vol_ctrl: true,
        prog_btn: 'Nexus and 3.5mm locking', audio_jack: true, ip: 'IP67', hazloc: 'ATEX',
        dims_mm: '68 x 94 x 29'
      },
      {
        desc: 'IMPRES Active Noise-Canceling RSM with Large Front PTT and Side PTT (IP67)',
        part: 'PMMN4102',
        impres: true, intel_audio: true, ai_noise: false,
        windporting: 'Noise-Canceling', full_duplex: false, vol_ctrl: true,
        prog_btn: 'Nexus and 3.5mm locking', audio_jack: true, ip: 'IP67', hazloc: 'UL',
        dims_mm: '68 x 94 x 29'
      },
      {
        desc: 'IMPRES Omni RSM with Large Front PTT and Side PTT (IP67)',
        part: 'PMMN4113',
        impres: true, intel_audio: true, ai_noise: false,
        windporting: 'Windporting', full_duplex: false, vol_ctrl: true,
        prog_btn: 'Nexus and 3.5mm locking', audio_jack: true, ip: 'IP67', hazloc: 'UL',
        dims_mm: '68 x 94 x 29'
      },
      {
        desc: 'IMPRES Windporting Remote Speaker Microphone, Large, Submersible (IP68)',
        part: 'PMMN4099',
        impres: true, intel_audio: false, ai_noise: false,
        windporting: 'Windporting', full_duplex: false, vol_ctrl: false,
        prog_btn: '', audio_jack: true, ip: 'IP68', hazloc: 'UL',
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
      { desc: '1-Wire Receive-Only Earpiece, Black', part: 'PMLN6125', impres: true, intel_audio: false, ai_noise: false, ear_type: 'Earpiece', mic_type: '', full_duplex: false, hazloc: 'UL' },
      { desc: '1-Wire Receive-Only Earpiece, Beige', part: 'PMLN6126', impres: true, intel_audio: false, ai_noise: false, ear_type: 'Earpiece', mic_type: '', full_duplex: false, hazloc: 'UL' },
      { desc: 'IMPRES 2-Wire Earhook with Earbud Earpiece, Black', part: 'PMLN6127', impres: true, intel_audio: true, ai_noise: false, ear_type: 'Earpiece', mic_type: 'In-line', full_duplex: false, hazloc: 'UL' },
      { desc: 'IMPRES 2-Wire Earhook with Earbud Earpiece, Beige', part: 'PMLN6128', impres: true, intel_audio: true, ai_noise: false, ear_type: 'Earpiece', mic_type: 'In-line', full_duplex: false, hazloc: 'UL' },
      { desc: '1-Wire Surveillance Kit with Translucent Tube, Black', part: 'NNTN8459', impres: false, intel_audio: false, ai_noise: false, ear_type: 'Clear rubber eartip', mic_type: '', full_duplex: false, hazloc: 'UL' },
      { desc: 'IMPRES 2-Wire Surveillance Kit with Translucent Tube, Black', part: 'PMLN6129', impres: true, intel_audio: true, ai_noise: false, ear_type: 'Clear rubber eartip', mic_type: 'In-line', full_duplex: false, hazloc: 'UL' },
      { desc: 'IMPRES 2-Wire Surveillance Kit with Translucent Tube, Beige', part: 'PMLN6130', impres: true, intel_audio: true, ai_noise: false, ear_type: 'Clear rubber eartip', mic_type: 'In-line', full_duplex: false, hazloc: 'UL' },
      { desc: 'IMPRES 3-Wire Surveillance Kit with Translucent Tube, Black', part: 'PMLN6123', impres: true, intel_audio: true, ai_noise: false, ear_type: 'Clear rubber eartip', mic_type: 'Separate', full_duplex: false, hazloc: 'UL' },
      { desc: 'IMPRES 3-Wire Surveillance Kit with Translucent Tube, Beige', part: 'PMLN6124', impres: true, intel_audio: true, ai_noise: false, ear_type: 'Clear rubber eartip', mic_type: 'Separate', full_duplex: false, hazloc: 'UL' },
      { desc: '2-Wire Surveillance Kit with Translucent Tube, Black', part: 'PMLN7269', impres: false, intel_audio: false, ai_noise: false, ear_type: 'Clear rubber eartip', mic_type: 'In-line', full_duplex: false, hazloc: '' },
      { desc: '2-Wire Surveillance Kit with Translucent Tube, Beige', part: 'PMLN7270', impres: false, intel_audio: false, ai_noise: false, ear_type: 'Clear rubber eartip', mic_type: 'In-line', full_duplex: false, hazloc: '' },
      { desc: '1-Wire Surveillance Kit, Black', part: 'PMLN7158', impres: false, intel_audio: false, ai_noise: false, ear_type: 'Clear rubber eartip', mic_type: '', full_duplex: false, hazloc: '' },
      { desc: '2-Wire Surveillance Kit, Black', part: 'PMLN7157', impres: false, intel_audio: false, ai_noise: false, ear_type: 'Clear rubber eartip', mic_type: 'In-line', full_duplex: false, hazloc: '' }
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
      { desc: 'Heavy Duty Behind-the-Head Headset with Noise-Canceling Boom Microphone', part: 'PMLN6852', impres: true, headset_type: 'Behind-the-head', ear_style: 'Dual-muff', nrr_db: 24, mic_type: 'Boom', hazloc: '' },
      { desc: 'Heavy Duty Over-the-Head Headset with Noise-Canceling Boom Microphone', part: 'PMLN7466', impres: true, headset_type: 'Over-the-head', ear_style: 'Dual-muff', nrr_db: 24, mic_type: 'Boom', hazloc: '' },
      { desc: 'Heavy Duty Behind-the-Head Headset with Noise-Canceling Boom Microphone (UL)', part: 'PMLN6853', impres: true, headset_type: 'Behind-the-head', ear_style: 'Dual-muff', nrr_db: 24, mic_type: 'Boom', hazloc: 'UL' },
      { desc: 'Heavy Duty Over-the-Head Headset with Noise-Canceling Boom Microphone (UL)', part: 'PMLN7467', impres: true, headset_type: 'Over-the-head', ear_style: 'Dual-muff', nrr_db: 24, mic_type: 'Boom', hazloc: 'UL' },
      { desc: 'IMPRES Temple Transducer Headset', part: 'PMLN5101', impres: true, headset_type: 'Behind-the-head', ear_style: 'Bone conduction', nrr_db: null, mic_type: 'Boom', hazloc: '' },
      { desc: 'Lightweight Over-the-Head Headset', part: 'RMN5058', impres: true, headset_type: 'Over-the-head', ear_style: 'Single-ear', nrr_db: null, mic_type: 'Boom', hazloc: 'UL' },
      // 3M Peltor
      { desc: 'MT Series Over-The-Head Headset, Direct Radio Connect (3M Peltor MT7H79A-97-UL-34)', part: 'RMN5137', impres: false, headset_type: 'Over-the-head', ear_style: 'Dual-ear', nrr_db: 25, mic_type: 'Boom', hazloc: 'UL' },
      { desc: 'MT Series Neckband Headset, Direct Radio Connect (3M Peltor MT7H79B-97-UL-34)', part: 'RMN5138', impres: false, headset_type: 'Neckband', ear_style: 'Dual-ear', nrr_db: 24, mic_type: 'Boom', hazloc: 'UL' },
      { desc: 'MT Series Hard Hat Attached Headset, Direct Radio Connect (3M Peltor MT7H79P3E-97-UL-34)', part: 'RMN5139', impres: false, headset_type: 'Hard hat attached', ear_style: 'Dual-ear', nrr_db: 21, mic_type: 'Boom', hazloc: 'UL' }
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
      { desc: 'Soft Leather Case with 2.5 Inch Swivel Belt Loop (Display Model)', part: 'PMLN5016', material: 'Soft leather', belt_sz: '2.5', swivel: 'Swivel', display: 'Display', d_rings: true },
      { desc: 'Soft Leather Case with 3 Inch Swivel Belt Loop (Display Model)', part: 'PMLN5017', material: 'Soft leather', belt_sz: '3', swivel: 'Swivel', display: 'Display', d_rings: true },
      { desc: 'Soft Leather Case with 3 Inch Fixed Belt Loop (Display Model)', part: 'PMLN5018', material: 'Soft leather', belt_sz: '3', swivel: 'Fixed', display: 'Display', d_rings: true },
      { desc: 'Nylon Case with 3 Inch Fixed Belt Loop (Display Model)', part: 'PMLN5015', material: 'Nylon', belt_sz: '3', swivel: 'Fixed', display: 'Display', d_rings: true },
      { desc: 'Hard Leather Case with 2.5 Inch Swivel Belt Loop (Display Model)', part: 'PMLN5019', material: 'Hard leather', belt_sz: '2.5', swivel: 'Swivel', display: 'Display', d_rings: true },
      { desc: 'Hard Leather Case with 3 Inch Swivel Belt Loop (Display Model)', part: 'PMLN5020', material: 'Hard leather', belt_sz: '3', swivel: 'Swivel', display: 'Display', d_rings: true },
      { desc: 'Hard Leather Case with 3 Inch Fixed Belt Loop (Display Model)', part: 'PMLN5021', material: 'Hard leather', belt_sz: '3', swivel: 'Fixed', display: 'Display', d_rings: true },
      { desc: 'Nylon Case with 3 Inch Fixed Belt Loop (Non-Display Model)', part: 'PMLN5870', material: 'Nylon', belt_sz: '3', swivel: 'Fixed', display: 'Non-display', d_rings: true },
      { desc: 'Hard Leather Case with 2.5 Inch Swivel Belt Loop (Non-Display Model)', part: 'PMLN5868', material: 'Hard leather', belt_sz: '2.5', swivel: 'Swivel', display: 'Non-display', d_rings: true },
      { desc: 'Hard Leather Case with 3 Inch Swivel Belt Loop (Non-Display Model)', part: 'PMLN5866', material: 'Hard leather', belt_sz: '3', swivel: 'Swivel', display: 'Non-display', d_rings: true },
      { desc: 'Hard Leather Case with 3 Inch Fixed Belt Loop (Non-Display Model)', part: 'PMLN5864', material: 'Hard leather', belt_sz: '3', swivel: 'Fixed', display: 'Non-display', d_rings: true },
      { desc: 'Soft Leather Case with 2.5 Inch Swivel Belt Loop (Non-Display Model)', part: 'PMLN5025', material: 'Soft leather', belt_sz: '2.5', swivel: 'Swivel', display: 'Non-display', d_rings: true },
      { desc: 'Soft Leather Case with 3 Inch Swivel Belt Loop (Non-Display Model)', part: 'PMLN5026', material: 'Soft leather', belt_sz: '3', swivel: 'Swivel', display: 'Non-display', d_rings: true },
      { desc: 'Soft Leather Case with 3 Inch Fixed Belt Loop (Non-Display Model)', part: 'PMLN5027', material: 'Soft leather', belt_sz: '3', swivel: 'Fixed', display: 'Non-display', d_rings: true },
      { desc: 'Nylon Case with 3 Inch Fixed Belt Loop (Non-Display Model)', part: 'PMLN5024', material: 'Nylon', belt_sz: '3', swivel: 'Fixed', display: 'Non-display', d_rings: true },
      // Full keypad model
      { desc: 'Nylon Case with 3 Inch Fixed Belt Loop (Full Keypad Model)', part: 'PMLN5844', material: 'Nylon', belt_sz: '3', swivel: 'Fixed', display: 'Display', d_rings: true },
      { desc: 'Hard Leather Case with 2.5 Inch Swivel Belt Loop (Full Keypad Model)', part: 'PMLN5842', material: 'Hard leather', belt_sz: '2.5', swivel: 'Swivel', display: 'Display', d_rings: true },
      { desc: 'Hard Leather Case with 3 Inch Swivel Belt Loop (Full Keypad Model)', part: 'PMLN5840', material: 'Hard leather', belt_sz: '3', swivel: 'Swivel', display: 'Display', d_rings: true },
      { desc: 'Hard Leather Case with 3 Inch Fixed Belt Loop (Full Keypad Model)', part: 'PMLN5838', material: 'Hard leather', belt_sz: '3', swivel: 'Fixed', display: 'Display', d_rings: true },
      { desc: 'Nylon Case with 3 Inch Fixed Belt Loop (Non-Display, Full Keypad)', part: 'PMLN5845', material: 'Nylon', belt_sz: '3', swivel: 'Fixed', display: 'Non-display', d_rings: true },
      { desc: 'Hard Leather Case with 2.5 Inch Swivel Belt Loop (Non-Display, Full Keypad)', part: 'PMLN5843', material: 'Hard leather', belt_sz: '2.5', swivel: 'Swivel', display: 'Non-display', d_rings: true },
      { desc: 'Hard Leather Case with 3 Inch Swivel Belt Loop (Non-Display, Full Keypad)', part: 'PMLN5846', material: 'Hard leather', belt_sz: '3', swivel: 'Swivel', display: 'Non-display', d_rings: true },
      { desc: 'Hard Leather Case with 3 Inch Fixed Belt Loop (Non-Display, Full Keypad)', part: 'PMLN5839', material: 'Hard leather', belt_sz: '3', swivel: 'Fixed', display: 'Non-display', d_rings: true },
      // Clips and straps
      { desc: 'Spring Action 2 Inch Belt Clip', part: 'PMLN4651', material: 'Plastic', belt_sz: '2', swivel: 'Fixed', display: 'Display/Non-display', d_rings: false },
      { desc: 'Spring Action 2.5 Inch Belt Clip', part: 'PMLN7008', material: 'Plastic', belt_sz: '2.5', swivel: 'Fixed', display: 'Display/Non-display', d_rings: false },
      { desc: 'Replacement 2.5 Inch Swivel Belt Loop', part: 'PMLN5610', material: 'Hard leather', belt_sz: '2.5', swivel: 'Swivel', display: 'Display/Non-display', d_rings: false },
      { desc: 'Replacement 3 Inch Leather Swivel Belt Loop', part: 'PMLN5611', material: 'Hard leather', belt_sz: '3', swivel: 'Swivel', display: 'Display/Non-display', d_rings: false },
      { desc: 'Waterproof Bag with Large Strap', part: 'HLN9985', material: 'Waterproof', belt_sz: '', swivel: '', display: '', d_rings: false },
      { desc: 'Adjustable Nylon Carrying Strap', part: 'NTN5243', material: 'Nylon', belt_sz: '', swivel: '', display: '', d_rings: false },
      { desc: 'Leather Radio Strap', part: 'RLN6486', material: 'Leather', belt_sz: '', swivel: '', display: '', d_rings: false },
      { desc: 'Leather Radio Strap - XL', part: 'RLN6487', material: 'Leather', belt_sz: '', swivel: '', display: '', d_rings: false }
    ]
  },

  // ── Category 7: Antennas ───────────────────────────────────────────────────
  {
    id: 'antennas',
    label: 'Antennas',
    cols: ['Description', 'Part Number', 'Band', 'Frequency (MHz)', 'Length (cm)', 'Type'],
    items: [
      { desc: 'UHF/GPS Combination Folded Monopole Whip Antenna (403-433 MHz)', part: 'PMAE4018', band: 'UHF', freq_mhz: '403-433', len_cm: 14, ant_type: 'Whip' },
      { desc: 'UHF/GPS Combination Folded Monopole Whip Antenna (430-470 MHz)', part: 'PMAE4024', band: 'UHF', freq_mhz: '430-470', len_cm: 14, ant_type: 'Whip' },
      { desc: 'UHF/GPS Combination Folded Monopole Whip Antenna (450-495 MHz)', part: 'PMAE4050', band: 'UHF', freq_mhz: '450-495', len_cm: 14, ant_type: 'Whip' },
      { desc: 'UHF/GPS Combination Folded Monopole Whip Antenna (495-527 MHz)', part: 'PMAE4051', band: 'UHF', freq_mhz: '495-527', len_cm: 14, ant_type: 'Whip' },
      { desc: 'VHF/GPS Combination Helical Whip Antenna (136-147 MHz)', part: 'PMAD4067', band: 'VHF', freq_mhz: '136-147', len_cm: 16, ant_type: 'Helical' },
      { desc: 'VHF/GPS Combination Helical Whip Antenna (147-160 MHz)', part: 'PMAD4068', band: 'VHF', freq_mhz: '147-160', len_cm: 16, ant_type: 'Helical' },
      { desc: 'VHF/GPS Combination Helical Whip Antenna (160-174 MHz)', part: 'PMAD4069', band: 'VHF', freq_mhz: '160-174', len_cm: 16, ant_type: 'Helical' },
      { desc: 'GPS/800/900 MHz Combination Helical Antenna', part: 'PMAF4003', band: '800/900 MHz', freq_mhz: '806-941', len_cm: 18, ant_type: 'Helical' },
      { desc: 'Whip Antenna 806-870 MHz 1/2 Wave', part: 'NAF5087', band: '800/900 MHz', freq_mhz: '806-870', len_cm: 7, ant_type: 'Whip' },
      { desc: 'Whip Antenna 896-941 MHz 1/2 Wave', part: 'NAF5088', band: '800/900 MHz', freq_mhz: '896-941', len_cm: 6.6, ant_type: 'Whip' },
      { desc: 'UHF Wideband Flexible Whip Antenna (403-470 MHz)', part: 'PMAE4022', band: 'UHF', freq_mhz: '403-470', len_cm: 16, ant_type: 'Whip' },
      { desc: 'UHF Wideband Flexible Whip Antenna (450-512 MHz)', part: 'PMAE4049', band: 'UHF', freq_mhz: '450-512', len_cm: 16, ant_type: 'Whip' },
      { desc: 'VHF Wideband Flexible Whip Antenna (136-174 MHz)', part: 'PMAD4124', band: 'VHF', freq_mhz: '136-174', len_cm: 21, ant_type: 'Whip' },
      { desc: 'UHF/GPS Combination Stubby Antenna (403-433 MHz)', part: 'PMAE4021', band: 'UHF', freq_mhz: '403-433', len_cm: 9, ant_type: 'Stubby' },
      { desc: 'UHF/GPS Combination Stubby Antenna (430-470 MHz)', part: 'PMAE4023', band: 'UHF', freq_mhz: '430-470', len_cm: 9, ant_type: 'Stubby' },
      { desc: 'UHF/GPS Combination Stubby Antenna (450-512 MHz)', part: 'PMAE4048', band: 'UHF', freq_mhz: '450-512', len_cm: 9, ant_type: 'Stubby' },
      { desc: 'VHF Stubby Antenna (136-147 MHz)', part: 'PMAD4093', band: 'VHF', freq_mhz: '136-147', len_cm: 11, ant_type: 'Stubby' },
      { desc: 'VHF Stubby Antenna (147-160 MHz)', part: 'PMAD4094', band: 'VHF', freq_mhz: '147-160', len_cm: 11, ant_type: 'Stubby' },
      { desc: 'VHF Stubby Antenna (160-174 MHz)', part: 'PMAD4095', band: 'VHF', freq_mhz: '160-174', len_cm: 11, ant_type: 'Stubby' }
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
      { desc: 'Screen Protector, Clear (Single Pack - Qty 1)', part: 'AY000269A01' },
      { desc: 'Screen Protector, Clear (Single Pack - Qty 1)', part: 'AY000267A01' }
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
      { desc: 'Operations Critical Wireless Bluetooth Adapter', part: 'PMLN5712', ear_type: 'N/A', mic_type: 'N/A', ptt: 'On adapter', talk_time_hr: 30, charge_time_hr: null, weight_g: 65 },
      { desc: 'Operations Critical Wireless RSM with Battery and Belt Clip', part: 'RLN6561', ear_type: 'N/A', mic_type: 'Omni directional, windporting equivalent', ptt: 'On microphone', talk_time_hr: 28, charge_time_hr: 3, weight_g: 158 },
      { desc: 'Operations Critical Wireless RSM with Battery, Belt Clip and Dual Unit Charger (US Plug)', part: 'RLN6562', ear_type: 'N/A', mic_type: 'Omni directional, windporting equivalent', ptt: 'On microphone', talk_time_hr: 28, charge_time_hr: 3, weight_g: 158 },
      { desc: 'XBT Operations Critical Wireless Behind-the-Neck Headset', part: 'RLN6490', ear_type: 'Dual-muff', mic_type: 'Boom', ptt: 'On ear cup', talk_time_hr: 22, charge_time_hr: 7, weight_g: 429 },
      { desc: 'XBT Operations Critical Wireless Headband Style Headset', part: 'RLN6491', ear_type: 'Dual-muff', mic_type: 'Boom', ptt: 'On ear cup', talk_time_hr: 22, charge_time_hr: 7, weight_g: 422 },
      { desc: 'Operations Critical Wireless Earpiece with 12 Inch Cable (with US/JP Charger)', part: 'NNTN8125', ear_type: 'Over-the-ear (CommPort)', mic_type: 'Directional, above earpiece', ptt: 'On PTT pod', talk_time_hr: 10, charge_time_hr: 3, weight_g: 43 },
      { desc: 'Operations Critical Wireless Push-To-Talk Pod (with US Charger)', part: 'NNTN8127', ear_type: 'N/A', mic_type: 'N/A', ptt: 'On PTT pod', talk_time_hr: 10, charge_time_hr: 3, weight_g: 43 },
      { desc: 'Bluetooth Accessory Kit with Flexible Earpiece, Pod and Charging Cradle with Power Supply (US Plug)', part: 'RLN6500', ear_type: 'Over-the-ear (swivel)', mic_type: 'In-line', ptt: 'Radio only', talk_time_hr: 8, charge_time_hr: 18, weight_g: null },
      { desc: 'Operations Critical Wireless 1-Wire Surveillance Kit with Translucent Tube', part: 'PMLN7052', ear_type: 'Clear rubber eartip', mic_type: 'In-line', ptt: 'On pod (order separately)', talk_time_hr: null, charge_time_hr: null, weight_g: null },
      { desc: 'Enhanced Operations Critical Wireless Adapter with Touch Pairing', part: 'PMLN5993', ear_type: 'N/A', mic_type: 'N/A', ptt: 'On adapter', talk_time_hr: 35, charge_time_hr: null, weight_g: 65 }
    ]
  }
];

// Wire into RADIOS_DATA
window.RADIOS_DATA = window.RADIOS_DATA || {};
window.RADIOS_DATA['xpr6000'] = xpr6000Categories;
