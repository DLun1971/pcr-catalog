// sl7000-data.js — SL 7000 Series accessory data (PDF-verified, Professional Tier Catalog)
// Covers: SL 7000, SL 7000e

const SL7000_CATEGORIES = [
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
      { desc: 'Tri-Unit Rapid Rate Charger (radio + spare battery + BT device), US Plug', part: 'PMLN6701', impres: false, chem: 'Li-Ion', pwr_src: '120 VAC', dims_mm: '52x93x113', pockets: 3 },
      { desc: 'Tri-Unit Rapid Rate Charger, EU Plug', part: 'PMLN6705', impres: false, chem: 'Li-Ion', pwr_src: '220-240 VAC', dims_mm: '52x93x113', pockets: 3 },
      { desc: 'Tri-Unit Rapid Rate Charger, UK Plug', part: 'PMLN6704', impres: false, chem: 'Li-Ion', pwr_src: '230 VAC', dims_mm: '52x93x113', pockets: 3 },
      { desc: 'Tri-Unit Rapid Rate Charger, PRC Plug', part: 'PMLN6703', impres: false, chem: 'Li-Ion', pwr_src: null, dims_mm: '52x93x113', pockets: 3 },
      { desc: 'Tri-Unit Rapid Rate Charger, AU/NZ Plug', part: 'PMLN6700', impres: false, chem: 'Li-Ion', pwr_src: '220-240 VAC', dims_mm: '52x93x113', pockets: 3 },
      { desc: 'Tri-Unit Rapid Rate Charger, BZL Plug', part: 'PMLN6698', impres: false, chem: 'Li-Ion', pwr_src: '100-240 VAC', dims_mm: '52x93x113', pockets: 3 }
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
      { desc: 'Replacement Foam Plugs for RLN6242, Noise Reduction 24dB, Pack of 50 pairs', part: '5080384F72', impres: false, intel_audio: false, ai_noise: false, ear_type: 'Foam eartip', mic_type: null, full_duplex: false, hazloc: null },
      { desc: 'Replacement Standard Clear Rubber Eartip, Pack of 10', part: '67009254001', impres: false, intel_audio: false, ai_noise: false, ear_type: 'Clear rubber eartip', mic_type: null, full_duplex: false, hazloc: null },
      { desc: 'Replacement Quick Disconnect Translucent Tube with Clear Rubber Eartip for PMLN5957', part: 'PMLN6175', impres: false, intel_audio: false, ai_noise: false, ear_type: 'Clear rubber eartip', mic_type: null, full_duplex: false, hazloc: null },
      { desc: 'Clear EP7-Small Hearing Protectors [Sonic Defenders] Ultra Earplugs, Noise Reduction 28dB', part: 'RLN6511', impres: false, intel_audio: false, ai_noise: false, ear_type: 'Comply foam eartip', mic_type: null, full_duplex: false, hazloc: null },
      { desc: 'Clear EP7-Medium Hearing Protectors [Sonic Defenders] Ultra Earplugs, Noise Reduction 28dB', part: 'RLN6512', impres: false, intel_audio: false, ai_noise: false, ear_type: 'Comply foam eartip', mic_type: null, full_duplex: false, hazloc: null },
      { desc: 'Clear EP7-Large Hearing Protectors [Sonic Defenders] Ultra Earplugs, Noise Reduction 28dB', part: 'RLN6513', impres: false, intel_audio: false, ai_noise: false, ear_type: 'Comply foam eartip', mic_type: null, full_duplex: false, hazloc: null },
      { desc: 'Swivel Earpiece with In-Line Microphone and Push-to-Talk', part: 'PMLN7189', impres: false, intel_audio: false, ai_noise: false, ear_type: 'Over-the-ear', mic_type: 'In-line', full_duplex: false, hazloc: null },
      { desc: 'Adjustable D-Style Earpiece with In-Line Microphone and Push-to-Talk, Black', part: 'PMLN7159', impres: false, intel_audio: false, ai_noise: false, ear_type: 'Adjustable D-style', mic_type: 'In-line', full_duplex: false, hazloc: null }
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
      { desc: 'Carry Holder/Holster for SL Series Radio with Swivel Belt Loop', part: 'PMLN5956', material: 'Plastic', belt_sz: null, swivel: 'Swivel', display: null, d_rings: false },
      { desc: 'Soft Leather Case with 1.5 Inch Quick Release Swivel Belt Clip', part: 'PMLN7040', material: 'Soft leather', belt_sz: '1.5', swivel: 'Swivel', display: null, d_rings: false }
    ]
  },
  {
    id: 7,
    name: 'Antennas',
    items: [
      { desc: 'UHF Antenna Kit for 403-425 MHz Range', part: 'PMAE4078', band: 'UHF', freq_mhz: '403-425', len_cm: 1.9, ant_type: 'Stubby' },
      { desc: 'UHF Antenna Kit for 420-445 MHz Range', part: 'PMAE4076', band: 'UHF', freq_mhz: '420-445', len_cm: 1.9, ant_type: 'Stubby' },
      { desc: 'UHF Antenna Kit for 438-470 MHz Range', part: 'PMAE4077', band: 'UHF', freq_mhz: '438-470', len_cm: 1.9, ant_type: 'Stubby' },
      { desc: 'UHF Stubby Antenna Kit for 450-490 MHz Range', part: 'PMAE4091', band: 'UHF', freq_mhz: '450-490', len_cm: 3.2, ant_type: 'Stubby' },
      { desc: 'UHF Stubby Antenna Kit for 480-527 MHz Range', part: 'PMAE4092', band: 'UHF', freq_mhz: '480-527', len_cm: 3.2, ant_type: 'Stubby' },
      { desc: 'Antenna Kit for 800 MHz Range', part: 'PMAF4017', band: '800/900 MHz', freq_mhz: '806-870', len_cm: 2.5, ant_type: 'Stubby' },
      { desc: 'Antenna Kit for 900 MHz Range', part: 'PMAF4018', band: '800/900 MHz', freq_mhz: '896-941', len_cm: 1.9, ant_type: 'Stubby' }
    ]
  },
  {
    id: 8,
    name: 'Cables',
    items: [
      { desc: 'Programming Cable, Micro USB, with Tuning Connector', part: 'CB000262A01' }
    ]
  },
  {
    id: 9,
    name: 'Screen Protectors',
    items: [
      { desc: 'Screen Protector, Clear, Single Pack', part: 'AY000269A01' }
    ]
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
      { desc: 'XBT Operations Critical Wireless Behind-the-Neck Headset', part: 'RLN6490', ear_type: 'Dual-muff', mic_type: 'Boom', ptt: true, talk_time_hr: 22, charge_time_hr: 7, weight_g: 429 },
      { desc: 'XBT Operations Critical Wireless Headband Style Headset', part: 'RLN6491', ear_type: 'Dual-muff', mic_type: 'Boom', ptt: true, talk_time_hr: 22, charge_time_hr: 7, weight_g: 422 },
      { desc: 'Operations Critical Wireless Earpiece with 12 Inch Cable (with US/JP Charger)', part: 'NNTN8125', ear_type: 'Over-the-ear (CommPort)', mic_type: 'Directional', ptt: true, talk_time_hr: 10, charge_time_hr: 3, weight_g: 43 },
      { desc: 'Operations Critical Wireless Earpiece with 12 Inch Cable (without Charger)', part: 'NNTN8189', ear_type: null, mic_type: null, ptt: true, talk_time_hr: 10, charge_time_hr: 3, weight_g: 43 },
      { desc: 'Operations Critical Wireless PTT Pod (with US Charger)', part: 'NNTN8127', ear_type: null, mic_type: null, ptt: true, talk_time_hr: 10, charge_time_hr: 3, weight_g: 43 },
      { desc: 'Operations Critical Wireless PTT Pod (without Charger)', part: 'NNTN8191', ear_type: null, mic_type: null, ptt: true, talk_time_hr: 10, charge_time_hr: 3, weight_g: 43 },
      { desc: 'Bluetooth Accessory Kit with Flexible Earpiece, BT Pod and Charging Cradle (US Plug)', part: 'RLN6500', ear_type: 'Over-the-ear (swivel)', mic_type: 'In-line', ptt: false, talk_time_hr: 8, charge_time_hr: null, weight_g: 18 },
      { desc: 'Bluetooth Accessory Kit with Flexible Earpiece, BT Pod and Charging Cradle (ARG Plug)', part: 'RLN6502', ear_type: 'Over-the-ear (swivel)', mic_type: 'In-line', ptt: false, talk_time_hr: 8, charge_time_hr: null, weight_g: 18 },
      { desc: 'Bluetooth Accessory Kit with Flexible Earpiece, BT Pod and Charging Cradle (EURO Plug)', part: 'RLN6503', ear_type: 'Over-the-ear (swivel)', mic_type: 'In-line', ptt: false, talk_time_hr: 8, charge_time_hr: null, weight_g: 18 },
      { desc: 'Bluetooth Accessory Kit with Flexible Earpiece, BT Pod and Charging Cradle (BZL Plug)', part: 'RLN6504', ear_type: 'Over-the-ear (swivel)', mic_type: 'In-line', ptt: false, talk_time_hr: 8, charge_time_hr: null, weight_g: 18 },
      { desc: 'Operations Critical Wireless Bluetooth Earpiece with PTT (limited availability)', part: 'PMLN7851', ear_type: 'Over-the-ear (swivel)', mic_type: 'Boom', ptt: true, talk_time_hr: 8, charge_time_hr: 3, weight_g: 23 },
      { desc: 'Bluetooth Accessory Kit with Swivel Earpiece and Battery Clip', part: 'PMLN6462', ear_type: 'Over-the-ear (swivel)', mic_type: 'In-line', ptt: false, talk_time_hr: 8, charge_time_hr: null, weight_g: 18 },
      { desc: 'Bluetooth Accessory Kit with Swivel Earpiece and Battery Clip', part: 'PMLN6463', ear_type: 'Over-the-ear (swivel)', mic_type: 'In-line', ptt: false, talk_time_hr: 8, charge_time_hr: null, weight_g: 18 },
      { desc: 'Bluetooth Accessory Kit with Flexible Earpiece, BT Pod and Charging Cradle', part: 'PMLN7181', ear_type: 'Over-the-ear (swivel)', mic_type: 'Boom', ptt: false, talk_time_hr: 8, charge_time_hr: null, weight_g: 18 },
      { desc: 'Bluetooth Accessory Kit with Flexible Earpiece, BT Pod and Charging Cradle (US Plug)', part: 'RLN6556', ear_type: 'Over-the-ear (swivel)', mic_type: 'Boom', ptt: false, talk_time_hr: 8, charge_time_hr: null, weight_g: 18 },
      { desc: 'Operations Critical Wireless 1-Wire Surveillance Kit with Translucent Tube', part: 'PMLN7052', ear_type: 'Clear rubber eartip', mic_type: 'In-line', ptt: true, talk_time_hr: null, charge_time_hr: null, weight_g: null },
      { desc: 'Operations Critical Wireless Earbud with 11.5 Inch Cable', part: 'NNTN8294', ear_type: 'Earbud', mic_type: 'In-line', ptt: true, talk_time_hr: 10, charge_time_hr: null, weight_g: null },
      { desc: 'Operations Critical Wireless Earbud with 45 Inch Cable', part: 'NNTN8295', ear_type: 'Earbud', mic_type: 'In-line', ptt: true, talk_time_hr: 10, charge_time_hr: null, weight_g: null },
      { desc: 'Wireless Covert Kit (includes 2 sets two-wire earbud, single-wire black earbud, 3.5mm adapter)', part: 'NNTN8296', ear_type: 'Earbud', mic_type: 'In-line', ptt: true, talk_time_hr: null, charge_time_hr: null, weight_g: null },
      { desc: 'Swivel Earpiece with In-Line Microphone Multi-Pack (3 pack) for MOTOTRBO BT Accessory Kit', part: 'RLN6550', ear_type: 'Over-the-ear (swivel)', mic_type: 'Boom', ptt: false, talk_time_hr: null, charge_time_hr: null, weight_g: null },
      { desc: 'Flexible Fit Swivel Earpiece with Boom Microphone Multi-Pack (3 pack) for MOTOTRBO BT Accessory Kit', part: 'PMLN7203', ear_type: 'Over-the-ear (swivel)', mic_type: 'Boom', ptt: false, talk_time_hr: null, charge_time_hr: null, weight_g: null },
      { desc: 'Enhanced Operations Critical Wireless Earpiece with 12 Inch Cable and PTT Pod', part: 'NTN2570', ear_type: 'Over-the-ear (CommPort)', mic_type: 'Directional', ptt: true, talk_time_hr: 10, charge_time_hr: 3, weight_g: 43 },
      { desc: 'Enhanced Operations Critical Wireless PTT Pod', part: 'NTN2571', ear_type: null, mic_type: null, ptt: true, talk_time_hr: 10, charge_time_hr: 3, weight_g: 43 },
      { desc: 'Completely Discreet Earpiece Kit (includes RLN4920 inductive neckloop and RLN4921 phonito)', part: 'PMLN7696', ear_type: 'Completely discreet', mic_type: null, ptt: true, talk_time_hr: null, charge_time_hr: null, weight_g: null },
      { desc: 'Wireless Neckloop Y-Adapter and Retention Hook', part: 'NNTN8385', ear_type: null, mic_type: null, ptt: true, talk_time_hr: null, charge_time_hr: null, weight_g: null },
      { desc: 'Replacement Wireless Earpiece 12 Inch Cable for NNTN8125', part: 'NTN2572', ear_type: null, mic_type: null, ptt: null, talk_time_hr: null, charge_time_hr: null, weight_g: null },
      { desc: 'Ear Strap for Comfort Earpiece, Pack of 10', part: 'NTN8988', ear_type: null, mic_type: null, ptt: null, talk_time_hr: null, charge_time_hr: null, weight_g: null },
      { desc: 'Replacement Ear Tips Kit for Wireless Earbuds (20 sm/20 med/20 lg/10 clips)', part: 'NNTN8361', ear_type: null, mic_type: null, ptt: null, talk_time_hr: null, charge_time_hr: null, weight_g: null },
      { desc: 'Swivel Clip for OC Wireless Pods', part: 'PMLN6246', ear_type: null, mic_type: null, ptt: null, talk_time_hr: null, charge_time_hr: null, weight_g: null },
      { desc: 'Replacement Micro-USB Plug-In Charger for Wireless Pod, US Plug', part: 'PS000228A01', ear_type: null, mic_type: null, ptt: null, talk_time_hr: null, charge_time_hr: null, weight_g: null },
      { desc: 'Replacement Micro-USB Plug-In Charger for Wireless Pod, AU/NZ Plug', part: 'PMPN4007', ear_type: null, mic_type: null, ptt: null, talk_time_hr: null, charge_time_hr: null, weight_g: null },
      { desc: 'Replacement Micro-USB Plug-In Charger for Wireless Pod, EU/UK Plug', part: 'PMPN4006', ear_type: null, mic_type: null, ptt: null, talk_time_hr: null, charge_time_hr: null, weight_g: null },
      { desc: 'Replacement Micro-USB Plug-In Charger for Wireless Pod, PRC Plug', part: 'PMPN4008', ear_type: null, mic_type: null, ptt: null, talk_time_hr: null, charge_time_hr: null, weight_g: null },
      { desc: 'Replacement Micro-USB Plug-In Charger for Wireless Pod, Korea Plug', part: 'PMPN4015', ear_type: null, mic_type: null, ptt: null, talk_time_hr: null, charge_time_hr: null, weight_g: null },
      { desc: 'Replacement Micro-USB Plug-In Charger for Wireless Pod, ARG Plug', part: 'PMPN4016', ear_type: null, mic_type: null, ptt: null, talk_time_hr: null, charge_time_hr: null, weight_g: null },
      { desc: 'Replacement Micro-USB Plug-In Charger for Wireless Pod, BRZL Plug', part: 'PMPN4023', ear_type: null, mic_type: null, ptt: null, talk_time_hr: null, charge_time_hr: null, weight_g: null },
      { desc: 'Replacement Micro-USB Plug-In Charger for Wireless Pod, EU Plug', part: 'PMPN4028', ear_type: null, mic_type: null, ptt: null, talk_time_hr: null, charge_time_hr: null, weight_g: null },
      { desc: 'Replacement Universal 5V Power Supply for XBT Headsets', part: 'RLN6498', ear_type: null, mic_type: null, ptt: null, talk_time_hr: null, charge_time_hr: null, weight_g: null },
      { desc: 'Replacement Hygiene Kit for XBT Headsets', part: 'RLN6497', ear_type: null, mic_type: null, ptt: null, talk_time_hr: null, charge_time_hr: null, weight_g: null },
      { desc: 'Replacement Cooling Pads for XBT Headsets', part: 'RLN6496', ear_type: null, mic_type: null, ptt: null, talk_time_hr: null, charge_time_hr: null, weight_g: null },
      { desc: 'Replacement Boom Microphone for XBT Headsets', part: 'RLN6495', ear_type: null, mic_type: null, ptt: null, talk_time_hr: null, charge_time_hr: null, weight_g: null },
      { desc: 'Replacement Behind-the-Neck Band for XBT Headsets', part: 'RLN6493', ear_type: null, mic_type: null, ptt: null, talk_time_hr: null, charge_time_hr: null, weight_g: null },
      { desc: 'Replacement Headband Style Band for XBT Headsets', part: 'RLN6492', ear_type: null, mic_type: null, ptt: null, talk_time_hr: null, charge_time_hr: null, weight_g: null },
      { desc: 'Replacement Swivel Earpiece with Inline Microphone, Pack of 3, for RLN6500', part: 'PRLN6550', ear_type: null, mic_type: null, ptt: null, talk_time_hr: null, charge_time_hr: null, weight_g: null }
    ]
  }
];

window.RADIOS_DATA = window.RADIOS_DATA || {};
window.RADIOS_DATA['sl7000'] = SL7000_CATEGORIES;