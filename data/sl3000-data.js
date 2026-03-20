// sl3000-data.js — SL 3000 Series accessory data (PDF-verified, Professional Tier Catalog)
// Covers: SL 3500e, SL 3500Max

const SL3000_CATEGORIES = [
  {
    id: 1,
    name: 'Batteries',
    items: [
      { desc: 'Motorola Original Li-Ion 2300mAh Battery', part: 'PMNN4468', impres: false, chem: 'Li-Ion', capacity_mah: 2300, dims_mm: '12x36x54', weight_g: 50, hazloc: null, ip: null, op_temp: '-10°C to +60°C' },
      { desc: 'Replacement Battery Cover for PMNN4468', part: 'PMLN6745', impres: false, chem: null, capacity_mah: null, dims_mm: null, weight_g: null, hazloc: null, ip: null, op_temp: null }
    ]
  },
  {
    id: 2,
    name: 'Chargers',
    items: [
      { desc: 'Single-Unit Rapid Rate Desk Charger, US/CAN Plug', part: 'PMLN7109', impres: false, chem: 'Li-Ion', pwr_src: '100-240 VAC', dims_mm: '52x70x70', pockets: 1 },
      { desc: 'Single-Unit Rapid Rate Desk Charger, UK Plug', part: 'PMLN7163', impres: false, chem: 'Li-Ion', pwr_src: '100-240 VAC', dims_mm: '52x70x70', pockets: 1 },
      { desc: 'Single-Unit Rapid Rate Desk Charger, EU Plug', part: 'PMLN7110', impres: false, chem: 'Li-Ion', pwr_src: '100-240 VAC', dims_mm: '52x70x70', pockets: 1 },
      { desc: 'Single-Unit Rapid Rate Desk Charger, AU/NZ Plug', part: 'PMLN7111', impres: false, chem: 'Li-Ion', pwr_src: '100-240 VAC', dims_mm: '52x70x70', pockets: 1 },
      { desc: 'Single-Unit Rapid Rate Desk Charger, ARG Plug', part: 'PMLN7112', impres: false, chem: 'Li-Ion', pwr_src: '100-240 VAC', dims_mm: '52x70x70', pockets: 1 },
      { desc: 'Single-Unit Rapid Rate Desk Charger, BRL Plug', part: 'PMLN7114', impres: false, chem: 'Li-Ion', pwr_src: '100-240 VAC', dims_mm: '52x70x70', pockets: 1 },
      { desc: 'Single-Unit Rapid Rate Desk Charger, JAP Plug', part: 'PMLN7115', impres: false, chem: 'Li-Ion', pwr_src: '100-240 VAC', dims_mm: '52x70x70', pockets: 1 },
      { desc: 'Single-Unit Rapid Rate Desk Charger, KOR Plug', part: 'PMLN7113', impres: false, chem: 'Li-Ion', pwr_src: '100-240 VAC', dims_mm: '52x70x70', pockets: 1 },
      { desc: 'Single-Unit Rapid Rate Desk Charger, CHN Plug', part: 'PMLN7108', impres: false, chem: 'Li-Ion', pwr_src: '100-240 VAC', dims_mm: '52x70x70', pockets: 1 },
      { desc: 'Standard Micro-USB Single-Unit Rapid Rate Plug-In Charger, US/CAN Plug', part: 'PMPN4009', impres: false, chem: 'Li-Ion', pwr_src: '120 VAC', dims_mm: null, pockets: 1 },
      { desc: 'Micro-USB Rapid Rate Plug-In Charger', part: '25009298001', impres: false, chem: 'Li-Ion', pwr_src: '120 VAC', dims_mm: '44x34x70', pockets: 1 },
      { desc: 'Compact Multi-Unit Charger, US/CAN Plug', part: 'PMLN8569', impres: false, chem: 'Li-Ion', pwr_src: '100-240 VAC', dims_mm: '66x450x92', pockets: 6 },
      { desc: 'Compact Multi-Unit Charger, UK Plug', part: 'PMLN7162', impres: false, chem: 'Li-Ion', pwr_src: '100-240 VAC', dims_mm: '66x450x92', pockets: 6 },
      { desc: 'Compact Multi-Unit Charger, EU Plug', part: 'PMLN7102', impres: false, chem: 'Li-Ion', pwr_src: '100-240 VAC', dims_mm: '66x450x92', pockets: 6 },
      { desc: 'Compact Multi-Unit Charger, AU/NZ Plug', part: 'PMLN7103', impres: false, chem: 'Li-Ion', pwr_src: '100-240 VAC', dims_mm: '66x450x92', pockets: 6 },
      { desc: 'Compact Multi-Unit Charger, ARG Plug', part: 'PMLN7104', impres: false, chem: 'Li-Ion', pwr_src: '100-240 VAC', dims_mm: '66x450x92', pockets: 6 },
      { desc: 'Compact Multi-Unit Charger, KOR Plug', part: 'PMLN7105', impres: false, chem: 'Li-Ion', pwr_src: '100-240 VAC', dims_mm: '66x450x92', pockets: 6 },
      { desc: 'Compact Multi-Unit Charger, BRL Plug', part: 'PMLN7106', impres: false, chem: 'Li-Ion', pwr_src: '100-240 VAC', dims_mm: '66x450x92', pockets: 6 },
      { desc: 'Compact Multi-Unit Charger, JAP Plug', part: 'PMLN7107', impres: false, chem: 'Li-Ion', pwr_src: '100-240 VAC', dims_mm: '66x450x92', pockets: 6 }
    ]
  },
  {
    id: 3,
    name: 'RSM/Audio',
    items: [
      { desc: 'IMPRES Noise-Canceling RSM, Large (IP54)', part: 'PMMN4071', impres: true, intel_audio: false, ai_noise: false, windporting: false, noise_cancel: true, full_duplex: false, vol_ctrl: false, prog_btn: null, audio_jack: true, ip: 'IP54', hazloc: 'UL', dims_mm: '60x78x28' },
      { desc: 'IMPRES Windporting RSM, Small (IP55)', part: 'PMMN4073', impres: true, intel_audio: false, ai_noise: false, windporting: true, noise_cancel: false, full_duplex: false, vol_ctrl: false, prog_btn: null, audio_jack: true, ip: 'IP55', hazloc: 'UL', dims_mm: '55x60x27' },
      { desc: 'Windporting RSM, Small, Submersible (IP57)', part: 'PMMN4075', impres: false, intel_audio: false, ai_noise: false, windporting: true, noise_cancel: false, full_duplex: false, vol_ctrl: false, prog_btn: null, audio_jack: true, ip: 'IP57', hazloc: 'UL', dims_mm: '55x60x27' },
      { desc: 'Windporting RSM, Small (IP54)', part: 'PMMN4076', impres: false, intel_audio: false, ai_noise: false, windporting: true, noise_cancel: false, full_duplex: false, vol_ctrl: false, prog_btn: null, audio_jack: true, ip: 'IP54', hazloc: 'UL', dims_mm: '55x60x27' },
      { desc: 'Windporting RSM, Small (IP67)', part: 'PMMN4108', impres: false, intel_audio: true, ai_noise: false, windporting: true, noise_cancel: false, full_duplex: false, vol_ctrl: true, prog_btn: null, audio_jack: false, ip: 'IP67', hazloc: null, dims_mm: '60x78x28' },
      { desc: 'RM250 Wired RSM, Large (IP67)', part: 'PMMN4125', impres: false, intel_audio: false, ai_noise: false, windporting: true, noise_cancel: false, full_duplex: false, vol_ctrl: false, prog_btn: null, audio_jack: false, ip: 'IP67', hazloc: null, dims_mm: '58x84x24' }
    ]
  },
  {
    id: 4,
    name: 'Surveillance/Earpieces',
    items: [
      { desc: 'IMPRES 2-Wire Surveillance Kit with Translucent Tube, Black', part: 'PMLN6129', impres: true, intel_audio: true, ai_noise: false, ear_type: 'Clear rubber eartip', mic_type: null, full_duplex: false, hazloc: 'UL' },
      { desc: 'IMPRES 2-Wire Surveillance Kit with Translucent Tube, Beige', part: 'PMLN6130', impres: true, intel_audio: true, ai_noise: false, ear_type: 'Clear rubber eartip', mic_type: null, full_duplex: false, hazloc: 'UL' },
      { desc: 'IMPRES 3-Wire Surveillance Kit with Translucent Tube, Black', part: 'PMLN6123', impres: true, intel_audio: true, ai_noise: false, ear_type: 'Clear rubber eartip', mic_type: null, full_duplex: false, hazloc: 'UL' },
      { desc: 'IMPRES 3-Wire Surveillance Kit with Translucent Tube, Beige', part: 'PMLN6124', impres: true, intel_audio: true, ai_noise: false, ear_type: 'Clear rubber eartip', mic_type: null, full_duplex: false, hazloc: 'UL' },
      { desc: '2-Wire Surveillance Kit with Translucent Tube, Black', part: 'PMLN7269', impres: false, intel_audio: false, ai_noise: false, ear_type: 'Clear rubber eartip', mic_type: null, full_duplex: false, hazloc: null },
      { desc: '2-Wire Surveillance Kit with Translucent Tube, Beige', part: 'PMLN7270', impres: false, intel_audio: false, ai_noise: false, ear_type: 'Clear rubber eartip', mic_type: null, full_duplex: false, hazloc: null },
      { desc: 'IMPRES 3-Wire Surveillance Kit with Quick Disconnect Translucent Tube, Black', part: 'PMLN6754', impres: true, intel_audio: true, ai_noise: false, ear_type: 'Clear rubber eartip', mic_type: null, full_duplex: false, hazloc: null },
      { desc: 'IMPRES 3-Wire Surveillance Kit with Quick Disconnect Translucent Tube, Beige', part: 'PMLN6755', impres: true, intel_audio: true, ai_noise: false, ear_type: 'Clear rubber eartip', mic_type: null, full_duplex: false, hazloc: null },
      { desc: '1-Wire Surveillance Kit, Black', part: 'PMLN7158', impres: false, intel_audio: false, ai_noise: false, ear_type: 'Clear rubber eartip', mic_type: null, full_duplex: false, hazloc: null },
      { desc: '2-Wire Surveillance Kit, Black', part: 'PMLN7157', impres: false, intel_audio: false, ai_noise: false, ear_type: 'Clear rubber eartip', mic_type: null, full_duplex: false, hazloc: null }
    ]
  },
  {
    id: 5,
    name: 'Headsets',
    items: [
      { desc: 'Lightweight Over-the-Head Headset, Single Muff, with In-Line PTT and Boom Microphone', part: 'PMLN6635', impres: false, headset_type: 'Over-the-head', ear_style: 'Single-ear', nrr_db: null, mic_type: 'Boom', hazloc: 'UL' },
      { desc: 'Heavy Duty Behind-the-Head Headset with Noise-Canceling Boom Microphone', part: 'PMLN6760', impres: true, headset_type: 'Behind-the-head', ear_style: 'Dual-muff', nrr_db: 24, mic_type: 'Boom', hazloc: null },
      { desc: 'Heavy Duty Behind-the-Head Headset with Noise-Canceling Boom Microphone', part: 'PMLN6763', impres: true, headset_type: 'Behind-the-head', ear_style: 'Dual-muff', nrr_db: 24, mic_type: 'Boom', hazloc: 'UL' },
      { desc: 'Heavy Duty Over-the-Head Headset with Noise-Canceling Boom Microphone', part: 'PMLN7464', impres: true, headset_type: 'Over-the-head', ear_style: 'Dual-muff', nrr_db: 24, mic_type: 'Boom', hazloc: null },
      { desc: 'Heavy Duty Over-the-Head Headset with Noise-Canceling Boom Microphone', part: 'PMLN7465', impres: true, headset_type: 'Over-the-head', ear_style: 'Dual-muff', nrr_db: 24, mic_type: 'Boom', hazloc: 'UL' },
      { desc: 'Mag One Ultra-Lite Behind-the-Head Headset', part: 'PMLN6761', impres: true, headset_type: 'Behind-the-head', ear_style: 'Single-ear', nrr_db: null, mic_type: 'Boom', hazloc: null },
      { desc: 'IMPRES Temple Transducer with Boom Microphone and In-Line PTT', part: 'PMLN6759', impres: true, headset_type: 'Behind-the-head', ear_style: 'Bone conduction', nrr_db: null, mic_type: 'Boom', hazloc: null }
    ]
  },
  {
    id: 6,
    name: 'Carry',
    items: [
      { desc: 'Heavy-Duty Belt Clip', part: 'PMLN7128', material: 'Plastic', belt_sz: null, swivel: null, display: null, d_rings: false },
      { desc: 'Swivel Carry Holster', part: 'PMLN7190', material: 'Plastic', belt_sz: null, swivel: 'Swivel', display: 'Display', d_rings: false },
      { desc: 'Carry Holster with Belt Clip', part: 'PMLN7559', material: 'Plastic', belt_sz: null, swivel: 'Fixed', display: null, d_rings: false },
      { desc: 'Nylon Wrist Strap', part: 'PMLN6074', material: 'Nylon', belt_sz: null, swivel: null, display: null, d_rings: false },
      { desc: 'Replacement 2.5 Inch Swivel Belt Loop', part: 'PMLN5610', material: 'Hard leather', belt_sz: '2.5', swivel: 'Swivel', display: 'Display/Non-display', d_rings: false },
      { desc: 'Spring Action 2 Inch Belt Clip', part: 'PMLN4651', material: 'Plastic', belt_sz: '2', swivel: 'Fixed', display: 'Display/Non-display', d_rings: false },
      { desc: 'Spring Action 2.5 Inch Belt Clip', part: 'PMLN7008', material: 'Plastic', belt_sz: '2.5', swivel: 'Fixed', display: 'Display/Non-display', d_rings: false }
    ]
  },
  {
    id: 7,
    name: 'Antennas',
    items: []
  },
  {
    id: 8,
    name: 'Cables',
    items: [
      { desc: 'Portable Programming Cable, Micro USB, for SL Series', part: '25-124330-01R' },
      { desc: 'Programming Cable, Micro USB, with Tuning Connector', part: '30012055001' }
    ]
  },
  {
    id: 9,
    name: 'Screen Protectors',
    items: []
  },
  {
    id: 10,
    name: 'Battery Fleet Management',
    items: [
      { desc: 'IMPRES Battery Fleet Management Entitlement ID (EID), NA/CAN', part: 'HKVN4036' },
      { desc: 'IMPRES Battery Fleet Management Entitlement ID (EID), EMEA', part: 'HKVN4037' },
      { desc: 'IMPRES Battery Fleet Management Entitlement ID (EID), LA', part: 'HKVN4038' },
      { desc: 'IMPRES Battery Fleet Management Entitlement ID (EID), Asia', part: 'HKVN4039' }
    ]
  },
  {
    id: 11,
    name: 'BT/Ops Critical Wireless',
    items: [
      { desc: 'Completely Discreet Earpiece Kit (includes RLN4920 inductive neckloop and RLN4921 phonito)', part: 'PMLN7696', ear_type: 'Completely discreet', mic_type: null, ptt: true, talk_time_hr: null, charge_time_hr: null, weight_g: null },
      { desc: 'Wireless Neckloop Y-Adapter and Retention Hook', part: 'NNTN8385', ear_type: null, mic_type: null, ptt: true, talk_time_hr: null, charge_time_hr: null, weight_g: null },
      { desc: 'Operations Critical Wireless 1-Wire Surveillance Kit with Translucent Tube', part: 'PMLN7052', ear_type: 'Clear rubber eartip', mic_type: 'In-line', ptt: true, talk_time_hr: null, charge_time_hr: null, weight_g: null },
      { desc: 'Operations Critical Wireless Earbud with 11.5 Inch Cable', part: 'NNTN8294', ear_type: 'Earbud', mic_type: 'In-line', ptt: true, talk_time_hr: 10, charge_time_hr: null, weight_g: null },
      { desc: 'Operations Critical Wireless Earbud with 45 Inch Cable', part: 'NNTN8295', ear_type: 'Earbud', mic_type: 'In-line', ptt: true, talk_time_hr: 10, charge_time_hr: null, weight_g: null }
    ]
  }
];

window.RADIOS_DATA = window.RADIOS_DATA || {};
window.RADIOS_DATA['sl3000'] = SL3000_CATEGORIES;