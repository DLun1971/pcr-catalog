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
      { desc: 'Compact Multi-Unit Charger, US/CAN Plug', part: 'PMLN8569', impres: false, chem: 'Li-Ion', pwr_src: '100-240 VAC', dims_mm: '66x450x92', pockets: 6 },
      { desc: 'Micro-USB Rapid Rate Plug-In Charger', part: 'PS000242A11', impres: false, chem: null, pwr_src: '120 VAC', dims_mm: '44x34x70', pockets: 1 }
    ]
  },
  {
    id: 3,
    name: 'RSM/Audio',
    items: [
      { desc: 'RM250 Wired Remote Speaker Microphone, Large (IP67)', part: 'PMMN4125', impres: false, intel_audio: false, ai_noise: false, windporting: true, noise_cancel: false, full_duplex: false, vol_ctrl: false, prog_btn: null, audio_jack: false, ip: 'IP67', hazloc: null, dims_mm: '58x84x24' }
    ]
  },
  {
    id: 4,
    name: 'Surveillance/Earpieces',
    items: [
      { desc: '1-Wire Surveillance Kit, Black', part: 'PMLN7158', impres: false, intel_audio: false, ai_noise: false, ear_type: 'Clear rubber eartip', mic_type: null, full_duplex: false, hazloc: null },
      { desc: '2-Wire Surveillance Kit, Black', part: 'PMLN7157', impres: false, intel_audio: false, ai_noise: false, ear_type: 'Clear rubber eartip', mic_type: null, full_duplex: false, hazloc: null },
      { desc: 'Mag One Earbud with In-Line Microphone and Push-To-Talk, Black', part: 'PMLN7156', impres: false, intel_audio: false, ai_noise: false, ear_type: 'Earbud', mic_type: 'In-line', full_duplex: false, hazloc: null }
    ]
  },
  {
    id: 5,
    name: 'Headsets',
    items: []
  },
  {
    id: 6,
    name: 'Carry',
    items: [
      { desc: 'Heavy-Duty Belt Clip', part: 'PMLN7128', material: 'Plastic', belt_sz: null, swivel: null, display: null, d_rings: false },
      { desc: 'Swivel Carry Holster', part: 'PMLN7190', material: 'Plastic', belt_sz: null, swivel: 'Swivel', display: 'Display', d_rings: false },
      { desc: 'Nylon Wrist Strap', part: 'PMLN6074', material: 'Nylon', belt_sz: null, swivel: null, display: null, d_rings: false },
      { desc: 'Flexible Hand Strap', part: 'PMLN7076', material: 'Nylon', belt_sz: null, swivel: null, display: null, d_rings: false }
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
      { desc: 'Programming Cable, Micro USB, with Tuning Connector', part: 'CB000262A01' }
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
    items: []
  },
  {
    id: 11,
    name: 'Bluetooth',
    items: [
      { desc: 'Wireless Neckloop Y-Adapter and Retention Hook', part: 'NNTN8385', ear_type: null, mic_type: null, ptt: true, talk_time_hr: null, charge_time_hr: null, weight_g: null },
      { desc: 'Wireless Push-to-Talk Pod', part: 'NNTN8127', ear_type: null, mic_type: null, ptt: true, talk_time_hr: 10, charge_time_hr: 3, weight_g: 43 }
    ]
  }
];

window.RADIOS_DATA = window.RADIOS_DATA || {};
window.RADIOS_DATA['sl3000'] = SL3000_CATEGORIES;