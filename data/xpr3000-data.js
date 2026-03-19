
// Covers: XPR 3000, XPR 3000e (NA), DP3000e (EMEA variant of XPR 3000e)
// Each item tagged with radios:[] array

const XPR3000_CATEGORIES = [

  {
    id: 1,
    name: 'Batteries',
    cols: ['Description','Part Number','IMPRES','Chemistry','Typical Capacity (mAh)','Dimensions (mm)','Weight','HazLoc','IP Rating','Operating Temp'],
    items: [
      { desc: 'IMPRES Slim Li-Ion 2100mAh IP68 Battery', part: 'PMNN4491', impres: true, chem: 'Li-Ion', capacity_mah: 2100, dims_mm: '113 x 52 x 18', weight_g: 130, hazloc: null, ip: 'IP68', op_temp: '-10\u00b0C to +60\u00b0C', radios: ['xpr3000','dp3000e'] },
      { desc: 'IMPRES Li-Ion 2450mAh IP68 Battery', part: 'PMNN4544', impres: true, chem: 'Li-Ion', capacity_mah: 2450, dims_mm: '113 x 52 x 23', weight_g: 150, hazloc: null, ip: 'IP68', op_temp: '-20\u00b0C to +60\u00b0C', radios: ['xpr3000','dp3000e'] },
      { desc: 'IMPRES Li-Ion 3000mAh IP68 Battery', part: 'PMNN4493', impres: true, chem: 'Li-Ion', capacity_mah: 3000, dims_mm: '113 x 52 x 23', weight_g: 155, hazloc: null, ip: 'IP68', op_temp: '-10\u00b0C to +60\u00b0C', radios: ['xpr3000','dp3000e'] },
      { desc: 'IMPRES Li-Ion 3000mAh IP68 Battery (for use with silent alert belt clip PMLN7296)', part: 'PMNN4488', impres: true, chem: 'Li-Ion', capacity_mah: 3000, dims_mm: '113 x 52 x 23', weight_g: 155, hazloc: null, ip: 'IP68', op_temp: '-10\u00b0C to +60\u00b0C', radios: ['xpr3000','dp3000e'] },
      { desc: 'IMPRES Li-Ion 2900mAh IP68 TIA4950 Battery', part: 'PMNN4490', impres: true, chem: 'Li-Ion', capacity_mah: 2900, dims_mm: '113 x 52 x 23', weight_g: 210, hazloc: 'UL', ip: 'IP68', op_temp: '-10\u00b0C to +60\u00b0C', radios: ['xpr3000','dp3000e'] },
      { desc: 'IMPRES Li-Ion 2500mAh IP68 TIA4950 Battery (XPR 3000e only)', part: 'NNTN8560', impres: true, chem: 'Li-Ion', capacity_mah: 2500, dims_mm: '113 x 52 x 23', weight_g: 210, hazloc: 'UL', ip: 'IP68', op_temp: '-10\u00b0C to +60\u00b0C', radios: ['xpr3000','dp3000e'] },
      { desc: 'IMPRES Li-Ion 2900mAh IP68 TIA4950 Battery (XPR 3000e only)', part: 'PMNN4489', impres: true, chem: 'Li-Ion', capacity_mah: 2900, dims_mm: '113 x 52 x 23', weight_g: 210, hazloc: 'UL', ip: 'IP68', op_temp: '-10\u00b0C to +60\u00b0C', radios: ['xpr3000','dp3000e'] }
    ]
  },

  {
    id: 2,
    name: 'Chargers',
    cols: ['Description','Part Number','IMPRES','Chemistry','Power Source','Dimensions (mm)','Pockets'],
    items: [
      { desc: 'Single-Unit Rapid Rate Charger, CHN Plug', part: 'NNTN8224', impres: false, chem: 'Li-Ion, NiMH', pwr_src: '240 VAC', dims_mm: '61 x 97 x 163', pockets: 1, radios: ['xpr3000','dp3000e'] },
      { desc: 'Single-Unit Rapid Rate Charger, ARG Plug', part: 'NNTN8225', impres: false, chem: 'Li-Ion, NiMH', pwr_src: null, dims_mm: '61 x 97 x 163', pockets: 1, radios: ['xpr3000','dp3000e'] },
      { desc: 'Single-Unit Rapid Rate Charger, Switch-Mode 21W, BZL Plug', part: 'NNTN8280', impres: false, chem: 'Li-Ion, NiMH', pwr_src: '100-240 VAC', dims_mm: '61 x 97 x 163', pockets: 1, radios: ['xpr3000','dp3000e'] },
      { desc: 'Single-Unit Rapid Rate Charger, EURO Plug', part: 'NNTN8292', impres: false, chem: 'Li-Ion, NiMH', pwr_src: '240 VAC', dims_mm: '61 x 97 x 163', pockets: 1, radios: ['xpr3000','dp3000e'] },
      { desc: 'Single-Unit Rapid Rate Charger, UK Plug', part: 'NNTN8293', impres: false, chem: 'Li-Ion, NiMH', pwr_src: '240 VAC', dims_mm: '61 x 97 x 163', pockets: 1, radios: ['xpr3000','dp3000e'] },
      { desc: 'IMPRES Single-Unit Charger, US Plug', part: 'PMPN4576A', impres: true, chem: 'Li-Ion, NiMH', pwr_src: '120 VAC', dims_mm: '51 x 88 x 94', pockets: 1, radios: ['xpr3000','dp3000e'] },
      { desc: 'IMPRES Single-Unit Charger, ARG Plug', part: 'PMPN4573A', impres: true, chem: 'Li-Ion, NiMH', pwr_src: '240 VAC', dims_mm: '51 x 88 x 94', pockets: 1, radios: ['xpr3000','dp3000e'] },
      { desc: 'IMPRES Single-Unit Charger, BRZ Plug', part: 'PMPN4575A', impres: true, chem: 'Li-Ion, NiMH', pwr_src: '100-240 VAC', dims_mm: '51 x 88 x 94', pockets: 1, radios: ['xpr3000','dp3000e'] },
      { desc: 'IMPRES Single-Unit Charger, UK Plug', part: 'PMPN4572A', impres: true, chem: 'Li-Ion, NiMH', pwr_src: '240 VAC', dims_mm: '51 x 88 x 94', pockets: 1, radios: ['xpr3000','dp3000e'] },
      { desc: 'IMPRES Single-Unit Charger, EURO Plug', part: 'PMPN4577A', impres: true, chem: 'Li-Ion, NiMH', pwr_src: '240 VAC', dims_mm: '51 x 88 x 94', pockets: 1, radios: ['xpr3000','dp3000e'] },
      { desc: 'IMPRES Single-Unit Charger, AU/NZ Plug', part: 'PMPN4571A', impres: true, chem: 'Li-Ion, NiMH', pwr_src: '240 VAC', dims_mm: '51 x 88 x 94', pockets: 1, radios: ['xpr3000','dp3000e'] },
      { desc: 'IMPRES Single-Unit Charger, JAP Plug', part: 'PMPN4578A', impres: true, chem: 'Li-Ion, NiMH', pwr_src: '100-240 VAC', dims_mm: '51 x 88 x 94', pockets: 1, radios: ['xpr3000','dp3000e'] },
      { desc: 'IMPRES Single-Unit Charger, KOR Plug', part: 'PMPN4574A', impres: true, chem: 'Li-Ion, NiMH', pwr_src: '240 VAC', dims_mm: '51 x 88 x 94', pockets: 1, radios: ['xpr3000','dp3000e'] },
      { desc: 'IMPRES Single-Unit Charger, CHN Plug', part: 'PMPN4579A', impres: true, chem: 'Li-Ion, NiMH', pwr_src: '240 VAC', dims_mm: '51 x 88 x 94', pockets: 1, radios: ['xpr3000','dp3000e'] },
      { desc: 'IMPRES Single-Unit Charger, India Plug', part: 'PMPN4582A', impres: true, chem: 'Li-Ion, NiMH', pwr_src: '100-240 VAC', dims_mm: '51 x 88 x 94', pockets: 1, radios: ['xpr3000','dp3000e'] },
      { desc: 'IMPRES 2 Multi-Unit Fast Charger, US/CAN Plug', part: 'PMPN4284', impres: true, chem: 'Li-Ion, NiMH', pwr_src: '100-240 VAC', dims_mm: '153 x 445 x 292', pockets: 6, radios: ['xpr3000','dp3000e'] },
      { desc: 'IMPRES 2 Multi-Unit Fast Charger, UK Plug', part: 'PMPN4290', impres: true, chem: 'Li-Ion, NiMH', pwr_src: '100-240 VAC', dims_mm: '153 x 445 x 292', pockets: 6, radios: ['xpr3000','dp3000e'] },
      { desc: 'IMPRES 2 Multi-Unit Fast Charger, EURO Plug', part: 'PMPN4289', impres: true, chem: 'Li-Ion, NiMH', pwr_src: '100-240 VAC', dims_mm: '153 x 445 x 292', pockets: 6, radios: ['xpr3000','dp3000e'] },
      { desc: 'IMPRES 2 Multi-Unit Fast Charger, AU/NZ Plug', part: 'PMPN4293', impres: true, chem: 'Li-Ion, NiMH', pwr_src: '100-240 VAC', dims_mm: '153 x 445 x 292', pockets: 6, radios: ['xpr3000','dp3000e'] },
      { desc: 'IMPRES 2 Multi-Unit Fast Charger, ARG Plug', part: 'PMPN4291', impres: true, chem: 'Li-Ion, NiMH', pwr_src: '100-240 VAC', dims_mm: '153 x 445 x 292', pockets: 6, radios: ['xpr3000','dp3000e'] },
      { desc: 'IMPRES 2 Multi-Unit Fast Charger, BZL Plug', part: 'PMPN4292', impres: true, chem: 'Li-Ion, NiMH', pwr_src: '100-240 VAC', dims_mm: '153 x 445 x 292', pockets: 6, radios: ['xpr3000','dp3000e'] },
      { desc: 'IMPRES 2 Multi-Unit Fast Charger, JAP Plug', part: 'PMPN4295', impres: true, chem: 'Li-Ion, NiMH', pwr_src: '100-240 VAC', dims_mm: '153 x 445 x 292', pockets: 6, radios: ['xpr3000','dp3000e'] },
      { desc: 'IMPRES 2 Multi-Unit Fast Charger, KOR Plug', part: 'PMPN4294', impres: true, chem: 'Li-Ion, NiMH', pwr_src: '100-240 VAC', dims_mm: '153 x 445 x 292', pockets: 6, radios: ['xpr3000','dp3000e'] },
      { desc: 'IMPRES 2 Multi-Unit Fast Charger, CHN Plug', part: 'PMPN4296', impres: true, chem: 'Li-Ion, NiMH', pwr_src: '100-240 VAC', dims_mm: '153 x 445 x 292', pockets: 6, radios: ['xpr3000','dp3000e'] },
      { desc: 'IMPRES 2 Multi-Unit Fast Charger, TW Plug', part: 'PMPN4462', impres: true, chem: 'Li-Ion, NiMH', pwr_src: '100-240 VAC', dims_mm: '153 x 445 x 292', pockets: 6, radios: ['xpr3000','dp3000e'] },
      { desc: 'IMPRES Single-Unit Rapid Rate Vehicular Charger, Heavy-Duty Permanent Mount', part: 'NNTN7616', impres: true, chem: 'Li-Ion, NiMH', pwr_src: '12 VDC hardwire', dims_mm: '200 x 83 x 97', pockets: 1, radios: ['xpr3000','dp3000e'] },
      { desc: 'Travel Charger, Rapid Rate with Voltage Regulated Adapter', part: 'NNTN8525', impres: false, chem: 'Li-Ion, NiMH', pwr_src: '12 VDC cigarette lighter', dims_mm: '58 x 64 x 67', pockets: 1, radios: ['xpr3000','dp3000e'] }
    ]
  },

  {
    id: 3,
    name: 'RSM/Audio',
    cols: ['Description','Part Number','IMPRES','Intelligent Audio','AI Noise Suppression','Windporting / Noise Type','Full Duplex','Vol Ctrl','Prog Button','Audio Jack','IP Rating','HazLoc','Dimensions (mm)'],
    items: [
      { desc: 'IMPRES Noise-Canceling Remote Speaker Microphone, Large (IP54)', part: 'PMMN4071', impres: true, intel_audio: false, ai_noise: false, noise_type: 'Noise-canceling', full_duplex: false, vol_ctrl: null, prog_btn: null, audio_jack: true, ip: 'IP54', hazloc: 'UL', dims_mm: '60 x 78 x 28', radios: ['xpr3000','dp3000e'] },
      { desc: 'IMPRES Windporting Remote Speaker Microphone, Small (IP55)', part: 'PMMN4073', impres: true, intel_audio: false, ai_noise: false, noise_type: 'Windporting', full_duplex: false, vol_ctrl: null, prog_btn: null, audio_jack: true, ip: 'IP55', hazloc: 'UL', dims_mm: '55 x 60 x 27', radios: ['xpr3000','dp3000e'] },
      { desc: 'Windporting Remote Speaker Microphone, Small, Submersible (IP57)', part: 'PMMN4075', impres: false, intel_audio: false, ai_noise: false, noise_type: 'Windporting', full_duplex: false, vol_ctrl: null, prog_btn: null, audio_jack: true, ip: 'IP57', hazloc: 'UL', dims_mm: '55 x 60 x 27', radios: ['xpr3000','dp3000e'] },
      { desc: 'Windporting Remote Speaker Microphone, Small (IP54)', part: 'PMMN4076', impres: false, intel_audio: false, ai_noise: false, noise_type: 'Windporting', full_duplex: false, vol_ctrl: null, prog_btn: null, audio_jack: true, ip: 'IP54', hazloc: 'UL', dims_mm: '55 x 60 x 27', radios: ['xpr3000','dp3000e'] },
      { desc: 'Windporting Remote Speaker Microphone (IP67)', part: 'PMMN4108', impres: false, intel_audio: false, ai_noise: false, noise_type: 'Windporting', full_duplex: false, vol_ctrl: 'High/Low', prog_btn: null, audio_jack: false, ip: 'IP67', hazloc: null, dims_mm: '60 x 78 x 28', radios: ['xpr3000','dp3000e'] },
      { desc: 'RM250 Wired Remote Speaker Microphone, Large (IP67)', part: 'PMMN4125', impres: false, intel_audio: false, ai_noise: false, noise_type: 'Windporting', full_duplex: false, vol_ctrl: null, prog_btn: null, audio_jack: false, ip: 'IP67', hazloc: null, dims_mm: '58 x 84 x 24', radios: ['xpr3000','dp3000e'] }
    ]
  },

  {
    id: 4,
    name: 'Surveillance/Earpieces',
    cols: ['Description','Part Number','IMPRES','Intelligent Audio','AI Noise Suppression','Ear Type','Mic Type','Full Duplex','HazLoc'],
    items: [
      { desc: 'IMPRES 2-Wire Surveillance Kit with Translucent Tube, Black', part: 'PMLN6129', impres: true, intel_audio: true, ai_noise: false, ear_type: 'Clear rubber eartip', mic_type: null, full_duplex: false, hazloc: 'UL', radios: ['xpr3000'] },
      { desc: 'IMPRES 2-Wire Surveillance Kit with Translucent Tube, Beige', part: 'PMLN6130', impres: true, intel_audio: true, ai_noise: false, ear_type: 'Clear rubber eartip', mic_type: null, full_duplex: false, hazloc: 'UL', radios: ['xpr3000'] },
      { desc: 'IMPRES 3-Wire Surveillance Kit with Translucent Tube, Black', part: 'PMLN6123', impres: true, intel_audio: true, ai_noise: false, ear_type: 'Clear rubber eartip', mic_type: null, full_duplex: false, hazloc: 'UL', radios: ['xpr3000'] },
      { desc: 'IMPRES 3-Wire Surveillance Kit with Translucent Tube, Beige', part: 'PMLN6124', impres: true, intel_audio: true, ai_noise: false, ear_type: 'Clear rubber eartip', mic_type: null, full_duplex: false, hazloc: 'UL', radios: ['xpr3000'] },
      { desc: '2-Wire Surveillance Kit with Translucent Tube, Black', part: 'PMLN7269', impres: false, intel_audio: false, ai_noise: false, ear_type: 'Clear rubber eartip', mic_type: null, full_duplex: false, hazloc: null, radios: ['xpr3000','dp3000e'] },
      { desc: '2-Wire Surveillance Kit with Translucent Tube, Beige', part: 'PMLN7270', impres: false, intel_audio: false, ai_noise: false, ear_type: 'Clear rubber eartip', mic_type: null, full_duplex: false, hazloc: null, radios: ['xpr3000','dp3000e'] },
      { desc: 'IMPRES 3-Wire Surveillance Kit with Quick Disconnect Translucent Tube, Black', part: 'PMLN6754', impres: true, intel_audio: false, ai_noise: false, ear_type: 'Clear rubber eartip', mic_type: null, full_duplex: false, hazloc: null, radios: ['xpr3000','dp3000e'] },
      { desc: 'IMPRES 3-Wire Surveillance Kit with Quick Disconnect Translucent Tube, Beige', part: 'PMLN6755', impres: true, intel_audio: false, ai_noise: false, ear_type: 'Clear rubber eartip', mic_type: null, full_duplex: false, hazloc: null, radios: ['xpr3000','dp3000e'] },
      { desc: '1-Wire Surveillance Kit, Black', part: 'PMLN7158', impres: false, intel_audio: false, ai_noise: false, ear_type: 'Clear rubber eartip', mic_type: null, full_duplex: false, hazloc: null, radios: ['xpr3000','dp3000e'] },
      { desc: '2-Wire Surveillance Kit, Black', part: 'PMLN7157', impres: false, intel_audio: false, ai_noise: false, ear_type: 'Clear rubber eartip', mic_type: null, full_duplex: false, hazloc: null, radios: ['xpr3000','dp3000e'] },
      { desc: 'Receive-Only Covered Earbud with Coiled Cord', part: 'AARLN4885', impres: false, intel_audio: false, ai_noise: false, ear_type: 'Foam Covered Earbud', mic_type: null, full_duplex: false, hazloc: 'UL', radios: ['xpr3000','dp3000e'] },
      { desc: 'Receive-Only Earpiece with Translucent Tube and Rubber Eartip', part: 'RLN4941', impres: false, intel_audio: false, ai_noise: false, ear_type: 'Clear Rubber Eartip', mic_type: null, full_duplex: false, hazloc: 'UL', radios: ['xpr3000','dp3000e'] },
      { desc: 'Receive-Only Earpiece with Translucent Tube and Rubber Eartip', part: 'PMLN7560', impres: false, intel_audio: false, ai_noise: false, ear_type: 'Clear Rubber Eartip', mic_type: null, full_duplex: false, hazloc: null, radios: ['xpr3000','dp3000e'] },
      { desc: 'Receive-Only Flexible Earpiece', part: 'WADN4190', impres: false, intel_audio: false, ai_noise: false, ear_type: 'Over-the-Ear', mic_type: null, full_duplex: false, hazloc: 'UL', radios: ['xpr3000','dp3000e'] },
      { desc: 'Receive-Only D-Shell Earpiece', part: 'PMLN4620', impres: false, intel_audio: false, ai_noise: false, ear_type: 'Over-the-Ear', mic_type: null, full_duplex: false, hazloc: 'UL', radios: ['xpr3000','dp3000e'] },
      { desc: 'D-Shell Adjustable Earpiece', part: 'PMLN7396', impres: false, intel_audio: false, ai_noise: false, ear_type: 'Over-the-Ear', mic_type: null, full_duplex: false, hazloc: null, radios: ['xpr3000','dp3000e'] },
      { desc: 'Mag One Earbud with In-Line Microphone and PTT', part: 'PMLN6069', impres: false, intel_audio: false, ai_noise: false, ear_type: 'Earbud', mic_type: 'In-line', full_duplex: false, hazloc: null, radios: ['xpr3000'] },
      { desc: 'Mag One Flexible Earpiece with In-Line Microphone and PTT', part: 'PMLN5973', impres: false, intel_audio: false, ai_noise: false, ear_type: 'Over-the-ear', mic_type: 'In-line', full_duplex: false, hazloc: null, radios: ['xpr3000'] },
      { desc: 'Mag One Swivel Earpiece with In-Line Microphone and PTT', part: 'PMLN5975', impres: false, intel_audio: false, ai_noise: false, ear_type: 'Over-the-ear', mic_type: 'In-line', full_duplex: false, hazloc: null, radios: ['xpr3000'] },
      { desc: 'Mag One Earset with Boom Microphone and In-Line PTT', part: 'PMLN5976', impres: false, intel_audio: false, ai_noise: false, ear_type: 'Earset', mic_type: 'Boom', full_duplex: false, hazloc: null, radios: ['xpr3000'] },
      { desc: 'Mag One Earbud with In-Line Microphone and PTT, Black', part: 'PMLN7156', impres: false, intel_audio: false, ai_noise: false, ear_type: 'Earbud', mic_type: 'In-line', full_duplex: false, hazloc: null, radios: ['xpr3000'] },
      { desc: 'Adjustable D-Style Earpiece with In-Line Microphone and PTT, Black', part: 'PMLN6757', impres: false, intel_audio: false, ai_noise: false, ear_type: 'Adjustable D-Style', mic_type: 'In-line', full_duplex: false, hazloc: null, radios: ['xpr3000'] },
      { desc: 'Adjustable D-Style Earpiece with In-Line Microphone and PTT, Black', part: 'PMLN7159', impres: false, intel_audio: false, ai_noise: false, ear_type: 'Adjustable D-Style', mic_type: 'In-line', full_duplex: false, hazloc: null, radios: ['xpr3000'] },
      { desc: 'Swivel Earpiece with In-Line Microphone and PTT', part: 'PMLN7189', impres: false, intel_audio: false, ai_noise: false, ear_type: 'Over-the-ear', mic_type: 'In-line', full_duplex: false, hazloc: null, radios: ['xpr3000'] }
    ]
  },

  {
    id: 5,
    name: 'Headsets',
    cols: ['Description','Part Number','IMPRES','Headset Type','Ear Style','NRR (dB)','Mic Type','HazLoc'],
    items: [
      { desc: 'Lightweight Over-the-Head Headset, Single Muff with In-Line PTT and Boom Mic', part: 'PMLN6635', impres: false, headset_type: 'Over-the-head', ear_style: 'Single-ear', nrr_db: null, mic_type: 'Boom', hazloc: 'UL', radios: ['xpr3000','dp3000e'] },
      { desc: 'Heavy Duty Behind-the-Head Headset with Noise-Canceling Boom Mic', part: 'PMLN6760', impres: true, headset_type: 'Behind-the-head', ear_style: 'Dual-muff', nrr_db: 24, mic_type: 'Boom', hazloc: null, radios: ['xpr3000','dp3000e'] },
      { desc: 'Heavy Duty Behind-the-Head Headset with Noise-Canceling Boom Mic (UL)', part: 'PMLN6763', impres: true, headset_type: 'Behind-the-head', ear_style: 'Dual-muff', nrr_db: 24, mic_type: 'Boom', hazloc: 'UL', radios: ['xpr3000','dp3000e'] },
      { desc: 'Heavy Duty Over-the-Head Headset with Noise-Canceling Boom Mic', part: 'PMLN7464', impres: true, headset_type: 'Over-the-head', ear_style: 'Dual-muff', nrr_db: 24, mic_type: 'Boom', hazloc: null, radios: ['xpr3000','dp3000e'] },
      { desc: 'Heavy Duty Over-the-Head Headset with Noise-Canceling Boom Mic (UL)', part: 'PMLN7465', impres: true, headset_type: 'Over-the-head', ear_style: 'Dual-muff', nrr_db: 24, mic_type: 'Boom', hazloc: 'UL', radios: ['xpr3000','dp3000e'] },
      { desc: 'Mag One Ultra-Lite Behind-the-Head Headset', part: 'PMLN6761', impres: true, headset_type: 'Behind-the-head', ear_style: 'Single-ear', nrr_db: null, mic_type: 'Boom', hazloc: null, radios: ['xpr3000','dp3000e'] },
      { desc: 'IMPRES Temple Transducer with Boom Mic and In-Line PTT', part: 'PMLN6759', impres: true, headset_type: 'Behind-the-head', ear_style: 'Bone conduction', nrr_db: null, mic_type: 'Boom', hazloc: null, radios: ['xpr3000','dp3000e'] }
    ]
  },

  {
    id: 6,
    name: 'Carry',
    cols: ['Description','Part Number','Material','Belt Size (in)','Swivel','Display','D-Rings'],
    items: [
      { desc: 'Hard Leather Case with 2.5" Swivel Belt Loop (Non-Display, ATEX)', part: 'PMLN6096', material: 'Hard leather', belt_sz: 2.5, swivel: true, display: false, d_rings: true, radios: ['dp3000e'] },
      { desc: 'Hard Leather Case with 2.5" Swivel Belt Loop (Display, ATEX)', part: 'PMLN6097', material: 'Hard leather', belt_sz: 2.5, swivel: true, display: true, d_rings: true, radios: ['dp3000e'] },
      { desc: 'Soft Leather Case with 2.5" Swivel Belt Loop (Non-Display, ATEX)', part: 'PMLN6098', material: 'Soft leather', belt_sz: 2.5, swivel: true, display: false, d_rings: true, radios: ['dp3000e'] },
      { desc: 'Soft Leather Case with 2.5" Swivel Belt Loop (Display, ATEX)', part: 'PMLN6099', material: 'Soft leather', belt_sz: 2.5, swivel: true, display: true, d_rings: true, radios: ['dp3000e'] },
      { desc: 'Synthetic Leather Case with 3" Fixed Belt Loop (Standard Battery)', part: 'PMLN7536', material: 'Synthetic leather', belt_sz: 3, swivel: false, display: null, d_rings: true, radios: ['dp3000e'] },
      { desc: 'Synthetic Leather Case with 3" Fixed Belt Loop (High Capacity Battery)', part: 'PMLN7537', material: 'Synthetic leather', belt_sz: 3, swivel: false, display: null, d_rings: true, radios: ['dp3000e'] },
      { desc: 'Nylon Case with 3" Fixed Belt Loop (Limited Keypad Display)', part: 'PMLN5869', material: 'Nylon', belt_sz: 3, swivel: false, display: true, d_rings: true, radios: ['xpr3000','dp3000e'] },
      { desc: 'Hard Leather Case with 2.5" Swivel Belt Loop (Limited Keypad Display)', part: 'PMLN5867', material: 'Hard leather', belt_sz: 2.5, swivel: true, display: true, d_rings: true, radios: ['xpr3000','dp3000e'] },
      { desc: 'Hard Leather Case with 3" Swivel Belt Loop (Limited Keypad Display)', part: 'PMLN5865', material: 'Hard leather', belt_sz: 3, swivel: true, display: true, d_rings: true, radios: ['xpr3000','dp3000e'] },
      { desc: 'Hard Leather Carry Case with 3" Fixed Belt Loop (Limited Keypad Display)', part: 'PMLN5863', material: 'Hard leather', belt_sz: 3, swivel: false, display: true, d_rings: true, radios: ['xpr3000','dp3000e'] },
      { desc: 'Soft Leather Case with 2.5" Swivel Belt Loop (Display)', part: 'PMLN5016', material: 'Soft leather', belt_sz: 2.5, swivel: true, display: true, d_rings: true, radios: ['xpr3000','dp3000e'] },
      { desc: 'Soft Leather Case with 3" Swivel Belt Loop (Display)', part: 'PMLN5017', material: 'Soft leather', belt_sz: 3, swivel: true, display: true, d_rings: true, radios: ['xpr3000','dp3000e'] },
      { desc: 'Soft Leather Case with 3" Fixed Belt Loop (Display)', part: 'PMLN5018', material: 'Soft leather', belt_sz: 3, swivel: false, display: true, d_rings: true, radios: ['xpr3000','dp3000e'] },
      { desc: 'Hard Leather Case with 2.5" Swivel Belt Loop (Display)', part: 'PMLN5019', material: 'Hard leather', belt_sz: 2.5, swivel: true, display: true, d_rings: true, radios: ['xpr3000','dp3000e'] },
      { desc: 'Nylon Case with 3" Fixed Belt Loop (Display)', part: 'PMLN5015', material: 'Nylon', belt_sz: 3, swivel: false, display: true, d_rings: true, radios: ['xpr3000','dp3000e'] },
      { desc: 'Nylon Case with 3" Fixed Belt Loop (Non-Display)', part: 'PMLN5870', material: 'Nylon', belt_sz: 3, swivel: false, display: false, d_rings: true, radios: ['xpr3000','dp3000e'] },
      { desc: 'Hard Leather Case with 2.5" Swivel Belt Loop (Non-Display)', part: 'PMLN5868', material: 'Hard leather', belt_sz: 2.5, swivel: true, display: false, d_rings: true, radios: ['xpr3000','dp3000e'] },
      { desc: 'Hard Leather Case with 3" Swivel Belt Loop (Non-Display)', part: 'PMLN5866', material: 'Hard leather', belt_sz: 3, swivel: true, display: false, d_rings: true, radios: ['xpr3000','dp3000e'] },
      { desc: 'Hard Leather Case with 3" Fixed Belt Loop (Non-Display)', part: 'PMLN5864', material: 'Hard leather', belt_sz: 3, swivel: false, display: false, d_rings: true, radios: ['xpr3000','dp3000e'] },
      { desc: 'Soft Leather Case with 2.5" Swivel Belt Loop (Non-Display)', part: 'PMLN5025', material: 'Soft leather', belt_sz: 2.5, swivel: true, display: false, d_rings: true, radios: ['xpr3000','dp3000e'] },
      { desc: 'Soft Leather Case with 3" Swivel Belt Loop (Non-Display)', part: 'PMLN5026', material: 'Soft leather', belt_sz: 3, swivel: true, display: false, d_rings: true, radios: ['xpr3000','dp3000e'] },
      { desc: 'Soft Leather Case with 3" Fixed Belt Loop (Non-Display)', part: 'PMLN5027', material: 'Soft leather', belt_sz: 3, swivel: false, display: false, d_rings: true, radios: ['xpr3000','dp3000e'] },
      { desc: 'Silent Alert Belt Clip (for use with PMNN4488)', part: 'PMLN7296', material: 'Plastic', belt_sz: null, swivel: false, display: null, d_rings: false, radios: ['xpr3000'] },
      { desc: 'Spring Action 2" Belt Clip', part: 'PMLN4651', material: 'Plastic', belt_sz: 2, swivel: false, display: null, d_rings: false, radios: ['xpr3000','dp3000e'] },
      { desc: 'Spring Action 2.5" Belt Clip', part: 'PMLN7008', material: 'Plastic', belt_sz: 2.5, swivel: false, display: null, d_rings: false, radios: ['xpr3000','dp3000e'] },
      { desc: 'Replacement 2.5" Swivel Belt Loop', part: 'PMLN5610', material: 'Hard leather', belt_sz: 2.5, swivel: true, display: null, d_rings: false, radios: ['xpr3000','dp3000e'] },
      { desc: 'Replacement 3" Leather Swivel Belt Loop', part: 'PMLN5611', material: 'Hard leather', belt_sz: 3, swivel: true, display: null, d_rings: false, radios: ['xpr3000','dp3000e'] },
      { desc: 'Nylon Wrist Strap', part: 'PMLN6074', material: 'Nylon', belt_sz: null, swivel: null, display: null, d_rings: false, radios: ['xpr3000','dp3000e'] },
      { desc: 'Waterproof Bag with Large Strap', part: 'HLN9985', material: null, belt_sz: null, swivel: null, display: null, d_rings: false, radios: ['xpr3000','dp3000e'] },
      { desc: 'Adjustable Nylon Carrying Strap', part: 'NTN5243', material: 'Nylon', belt_sz: null, swivel: null, display: null, d_rings: false, radios: ['xpr3000','dp3000e'] },
      { desc: 'Leather Radio Strap', part: 'RLN6486', material: 'Leather', belt_sz: null, swivel: null, display: null, d_rings: false, radios: ['xpr3000','dp3000e'] },
      { desc: 'Leather Radio Strap - XL', part: 'RLN6487', material: 'Leather', belt_sz: null, swivel: null, display: null, d_rings: false, radios: ['xpr3000','dp3000e'] },
      { desc: 'Anti-Sway Strap for Leather Radio Straps', part: 'RLN6488', material: 'Leather', belt_sz: null, swivel: null, display: null, d_rings: false, radios: ['xpr3000','dp3000e'] }
    ]
  },

  {
    id: 7,
    name: 'Antennas',
    cols: ['Description','Part Number','Band','Frequency (MHz)','Length (cm)','Type'],
    items: [
      { desc: 'UHF/GPS Combination Wideband Slim Whip Antenna (400-527 MHz)', part: 'PMAE4079', band: 'UHF', freq_mhz: '403-527', len_cm: 15, ant_type: 'Whip', radios: ['xpr3000','dp3000e'] },
      { desc: 'VHF/GPS Combination Helical Antenna (136-155 MHz)', part: 'PMAD4117', band: 'VHF', freq_mhz: '136-155', len_cm: 15, ant_type: 'Helical', radios: ['xpr3000','dp3000e'] },
      { desc: 'VHF/GPS Combination Helical Antenna (144-165 MHz)', part: 'PMAD4116', band: 'VHF', freq_mhz: '144-165', len_cm: 15, ant_type: 'Helical', radios: ['xpr3000','dp3000e'] },
      { desc: 'VHF/GPS Combination Helical Antenna (152-174 MHz)', part: 'PMAD4118', band: 'VHF', freq_mhz: '152-174', len_cm: 15, ant_type: 'Helical', radios: ['xpr3000','dp3000e'] },
      { desc: 'UHF/GPS Combination Stubby Antenna (400-450 MHz)', part: 'PMAE4069', band: 'UHF', freq_mhz: '403-450', len_cm: 9, ant_type: 'Stubby', radios: ['xpr3000','dp3000e'] },
      { desc: 'UHF/GPS Combination Stubby Antenna (440-490 MHz)', part: 'PMAE4070', band: 'UHF', freq_mhz: '440-490', len_cm: 9, ant_type: 'Stubby', radios: ['xpr3000','dp3000e'] },
      { desc: 'UHF/GPS Combination Stubby Antenna (470-527 MHz)', part: 'PMAE4071', band: 'UHF', freq_mhz: '470-527', len_cm: 9, ant_type: 'Stubby', radios: ['xpr3000','dp3000e'] },
      { desc: 'VHF/GPS Combination Stubby Antenna (136-148 MHz)', part: 'PMAD4119', band: 'VHF', freq_mhz: '136-148', len_cm: 9, ant_type: 'Stubby', radios: ['xpr3000','dp3000e'] },
      { desc: 'VHF/GPS Combination Stubby Antenna (146-160 MHz)', part: 'PMAD4120', band: 'VHF', freq_mhz: '146-160', len_cm: 9, ant_type: 'Stubby', radios: ['xpr3000','dp3000e'] },
      { desc: 'VHF Stubby Antenna (320-360 MHz)', part: 'PMAD4135', band: 'VHF', freq_mhz: '320-360', len_cm: null, ant_type: 'Stubby', radios: ['xpr3000'] },
      { desc: 'VHF Stubby Antenna (300-337 MHz)', part: 'PMAD4137', band: 'VHF', freq_mhz: '300-337', len_cm: null, ant_type: 'Stubby', radios: ['xpr3000'] },
      { desc: 'VHF Stubby Antenna (160-174 MHz)', part: 'PMAD4121', band: 'VHF', freq_mhz: '160-174', len_cm: null, ant_type: 'Stubby', radios: ['xpr3000','dp3000e'] },
      { desc: 'VHF Stubby Antenna (350-380 MHz)', part: 'PMAD4136', band: 'VHF', freq_mhz: '350-380', len_cm: null, ant_type: 'Stubby', radios: ['xpr3000','dp3000e'] },
      { desc: 'VHF Stubby Antenna (360-400 MHz)', part: 'PMAD4133', band: 'VHF', freq_mhz: '360-400', len_cm: null, ant_type: 'Stubby', radios: ['xpr3000','dp3000e'] },
      { desc: 'VHF Whip Antenna (300-360 MHz)', part: 'PMAD4138', band: 'VHF', freq_mhz: '300-360', len_cm: null, ant_type: 'Whip', radios: ['xpr3000','dp3000e'] },
      { desc: 'VHF Whip Antenna (350-400 MHz)', part: 'PMAD4139', band: 'VHF', freq_mhz: '350-400', len_cm: null, ant_type: 'Whip', radios: ['xpr3000','dp3000e'] }
    ]
  },

  {
    id: 8,
    name: 'Cables',
    cols: ['Description','Part Number'],
    items: [
      { desc: 'Portable Programming Cable (USB) for XPR 3000 Series', part: 'PMKN4115', radios: ['xpr3000','dp3000e'] },
      { desc: 'Programming, Test and Alignment Cable for XPR 3000 Series', part: 'PMKN4117', radios: ['xpr3000','dp3000e'] },
      { desc: 'Programming Cable Slim Conn to DB25 and TTR', part: 'PMKN4116', radios: ['xpr3000','dp3000e'] },
      { desc: 'Portable to RS232 DB25M Connector Cable', part: 'PMKN4071', radios: ['xpr3000'] },
      { desc: 'Portable Telemetry Cable', part: 'PMKN4040', radios: ['xpr3000'] },
      { desc: 'Test Alignment, TTR and Programming Cable', part: 'PMKN4126', radios: ['xpr3000'] }
    ]
  },

  {
    id: 9,
    name: 'Screen Protectors',
    cols: ['Description','Part Number'],
    items: [
      { desc: 'Accessory Connector Dust Cover', part: '15012157001', radios: ['xpr3000'] },
      { desc: 'Accessory Connector Dust Cover', part: '1571477L01', radios: ['xpr3000'] },
      { desc: 'Accessory Connector Dust Cover', part: 'PMLN6066', radios: ['xpr3000'] }
    ]
  },

  {
    id: 10,
    name: 'IMPRES Tools',
    cols: ['Description','Part Number'],
    items: [
      { desc: 'IMPRES Battery Fleet Management License Key, NA/CAN', part: 'HKVN4036', radios: ['xpr3000','dp3000e'] },
      { desc: 'IMPRES Battery Fleet Management License Key, EMEA', part: 'HKVN4037', radios: ['xpr3000','dp3000e'] },
      { desc: 'IMPRES Battery Fleet Management License Key, LA', part: 'HKVN4038', radios: ['xpr3000','dp3000e'] },
      { desc: 'IMPRES Battery Fleet Management License Key, Asia', part: 'HKVN4039', radios: ['xpr3000','dp3000e'] }
    ]
  },

  {
    id: 11,
    name: 'Bluetooth',
    cols: ['Description','Part Number','Ear Type','Mic Type','PTT','Talk Time (hr)','Charge Time (hr)','Weight (g)'],
    items: [
      { desc: 'Operations Critical Wireless Earpiece with 12" Cable (with US/JP Charger)', part: 'NNTN8125', ear_type: 'Over-the-ear (CommPort)', mic_type: 'Directional', ptt: true, talk_time_hr: 10, charge_time_hr: 3, weight_g: 43, radios: ['xpr3000'] },
      { desc: 'Operations Critical Wireless Earpiece with 12" Cable (without Charger)', part: 'NNTN8189', ear_type: null, mic_type: null, ptt: true, talk_time_hr: 10, charge_time_hr: 3, weight_g: 43, radios: ['xpr3000'] },
      { desc: 'Operations Critical Wireless Push-to-Talk Pod (with US Charger)', part: 'NNTN8127', ear_type: null, mic_type: null, ptt: true, talk_time_hr: 10, charge_time_hr: 3, weight_g: 43, radios: ['xpr3000','dp3000e'] },
      { desc: 'Operations Critical Wireless Push-to-Talk Pod (without Charger)', part: 'NNTN8191', ear_type: null, mic_type: null, ptt: true, talk_time_hr: 10, charge_time_hr: 3, weight_g: 43, radios: ['xpr3000','dp3000e'] },
      { desc: 'Bluetooth Accessory Kit with Flexible Earpiece, Pod and Charging Cradle (US Plug)', part: 'RLN6500', ear_type: 'Over-the-ear (swivel)', mic_type: 'In-line', ptt: false, talk_time_hr: 8, charge_time_hr: 18, weight_g: null, radios: ['xpr3000','dp3000e'] },
      { desc: 'Bluetooth Accessory Kit with Flexible Earpiece, Pod and Charging Cradle (ARG Plug)', part: 'RLN6502', ear_type: 'Over-the-ear (swivel)', mic_type: 'In-line', ptt: false, talk_time_hr: 8, charge_time_hr: null, weight_g: null, radios: ['xpr3000'] },
      { desc: 'Bluetooth Accessory Kit with Flexible Earpiece, Pod and Charging Cradle (EURO Plug)', part: 'RLN6503', ear_type: 'Over-the-ear (swivel)', mic_type: 'In-line', ptt: false, talk_time_hr: 8, charge_time_hr: null, weight_g: null, radios: ['xpr3000'] },
      { desc: 'Bluetooth Accessory Kit with Flexible Earpiece, Pod and Charging Cradle (BZL Plug)', part: 'RLN6504', ear_type: 'Over-the-ear (swivel)', mic_type: 'In-line', ptt: false, talk_time_hr: 8, charge_time_hr: null, weight_g: null, radios: ['xpr3000'] },
      { desc: 'Operations Critical Wireless 1-Wire Surveillance Kit with Translucent Tube', part: 'PMLN7052', ear_type: 'Clear rubber eartip', mic_type: 'In-line', ptt: false, talk_time_hr: null, charge_time_hr: null, weight_g: null, radios: ['xpr3000','dp3000e'] },
      { desc: 'Operations Critical Wireless Earbud with 11.5" Cable', part: 'NNTN8294', ear_type: 'Earbud', mic_type: 'In-line', ptt: false, talk_time_hr: 10, charge_time_hr: null, weight_g: null, radios: ['xpr3000','dp3000e'] },
      { desc: 'Operations Critical Wireless Earbud with 45" Cable', part: 'NNTN8295', ear_type: 'Earbud', mic_type: 'In-line', ptt: false, talk_time_hr: 10, charge_time_hr: null, weight_g: null, radios: ['xpr3000','dp3000e'] }
    ]
  }

];

window.RADIOS_DATA = window.RADIOS_DATA || {};
window.RADIOS_DATA['xpr3000'] = XPR3000_CATEGORIES;
window.RADIOS_DATA['dp3000'] = XPR3000_CATEGORIES;
`;

  const encoded = btoa(unescape(encodeURIComponent(content)));
  const res = await fetch('https://api.github.com/repos/' + repo + '/contents/' + path, {
    method: 'PUT',
    headers: { 'Authorization': 'token ' + PAT, 'Content-Type': 'application/json' },
    body: JSON.stringify({ message: 'Fix xpr3000-data.js — commit actual file content', content: encoded, sha: sha })
  });
  const result = await res.json();
  console.log(result.commit ? 'OK: ' + result.commit.sha : JSON.stringify(result));
})();PASTE_FULL_FILE_CONTENT_HERE
