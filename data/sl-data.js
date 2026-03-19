// sl-data.js — SL Series accessory data (PDF-verified, Professional Tier Catalog)
// Variants: SL 7000, SL 7000e, SL 3500e, SL 3500Max
// Sub-selector: [7000] [7000e] [3500e] [3500Max]

const SL_CATEGORIES = [
  {
    id: 1,
    name: 'Batteries',
    items: [
      // PMNN4440 — SL 7000/7000e only (different form factor)
      {
        desc: 'Motorola Original Li-Ion 1700mAh IP68 Battery (SL 7000/7000e only)',
        part: 'PMNN4440',
        impres: false,
        chem: 'Li-Ion',
        capacity_mah: 1700,
        dims_mm: '96x56x15',
        weight_g: 110,
        hazloc: null,
        ip: 'IP68',
        op_temp: '-10\u00b0C to +60\u00b0C',
        variants: ['7000', '7000e']
      },
      {
        desc: 'IMPRES Li-Ion 3000mAh IP68 Battery (SL 7000/7000e only)',
        part: 'PMNN4502',
        impres: true,
        chem: 'Li-Ion',
        capacity_mah: 3000,
        dims_mm: '96x56x23',
        weight_g: 155,
        hazloc: null,
        ip: 'IP68',
        op_temp: '-10\u00b0C to +60\u00b0C',
        variants: ['7000', '7000e']
      },
      {
        desc: 'IMPRES Li-Ion 2900mAh IP68 Battery (SL 7000/7000e only)',
        part: 'PMNN4511',
        impres: true,
        chem: 'Li-Ion',
        capacity_mah: 2900,
        dims_mm: '96x56x23',
        weight_g: 155,
        hazloc: 'UL',
        ip: 'IP68',
        op_temp: '-20\u00b0C to +60\u00b0C',
        variants: ['7000', '7000e']
      },
      // PMNN4468 — all SL variants
      {
        desc: 'Motorola Original Li-Ion 2300mAh Battery',
        part: 'PMNN4468',
        impres: false,
        chem: 'Li-Ion',
        capacity_mah: 2300,
        dims_mm: '12x36x54',
        weight_g: 50,
        hazloc: null,
        ip: null,
        op_temp: '-10\u00b0C to +60\u00b0C',
        variants: ['7000', '7000e', '3500e', '3500Max']
      },
      {
        desc: 'Replacement Battery Cover for PMNN4468 (SL 7000/7000e only)',
        part: 'PMLN7074',
        impres: false,
        chem: null,
        capacity_mah: null,
        dims_mm: null,
        weight_g: null,
        hazloc: null,
        ip: null,
        op_temp: null,
        variants: ['7000', '7000e']
      },
      {
        desc: 'Replacement Battery Cover for PMNN4468 (SL 3500e/3500Max only)',
        part: 'PMLN6745',
        impres: false,
        chem: null,
        capacity_mah: null,
        dims_mm: null,
        weight_g: null,
        hazloc: null,
        ip: null,
        op_temp: null,
        variants: ['3500e', '3500Max']
      }
    ]
  },
  {
    id: 2,
    name: 'Chargers',
    items: [
      // SL 3500e/3500Max — single-unit desk chargers
      { desc: 'Single-Unit Rapid Rate Desk Charger, US/CAN Plug', part: 'PMLN7109', impres: false, chem: 'Li-Ion', pwr_src: '100-240 VAC', dims_mm: '52x70x70', pockets: 1, variants: ['3500e', '3500Max'] },
      { desc: 'Single-Unit Rapid Rate Desk Charger, UK Plug', part: 'PMLN7163', impres: false, chem: 'Li-Ion', pwr_src: '100-240 VAC', dims_mm: '52x70x70', pockets: 1, variants: ['3500e', '3500Max'] },
      { desc: 'Single-Unit Rapid Rate Desk Charger, EU Plug', part: 'PMLN7110', impres: false, chem: 'Li-Ion', pwr_src: '100-240 VAC', dims_mm: '52x70x70', pockets: 1, variants: ['3500e', '3500Max'] },
      { desc: 'Single-Unit Rapid Rate Desk Charger, AU/NZ Plug', part: 'PMLN7111', impres: false, chem: 'Li-Ion', pwr_src: '100-240 VAC', dims_mm: '52x70x70', pockets: 1, variants: ['3500e', '3500Max'] },
      { desc: 'Single-Unit Rapid Rate Desk Charger, ARG Plug', part: 'PMLN7112', impres: false, chem: 'Li-Ion', pwr_src: '100-240 VAC', dims_mm: '52x70x70', pockets: 1, variants: ['3500e', '3500Max'] },
      { desc: 'Single-Unit Rapid Rate Desk Charger, BRL Plug', part: 'PMLN7114', impres: false, chem: 'Li-Ion', pwr_src: '100-240 VAC', dims_mm: '52x70x70', pockets: 1, variants: ['3500e', '3500Max'] },
      { desc: 'Single-Unit Rapid Rate Desk Charger, JAP Plug', part: 'PMLN7115', impres: false, chem: 'Li-Ion', pwr_src: '100-240 VAC', dims_mm: '52x70x70', pockets: 1, variants: ['3500e', '3500Max'] },
      { desc: 'Single-Unit Rapid Rate Desk Charger, KOR Plug', part: 'PMLN7113', impres: false, chem: 'Li-Ion', pwr_src: '100-240 VAC', dims_mm: '52x70x70', pockets: 1, variants: ['3500e', '3500Max'] },
      { desc: 'Single-Unit Rapid Rate Desk Charger, CHN Plug', part: 'PMLN7108', impres: false, chem: 'Li-Ion', pwr_src: '100-240 VAC', dims_mm: '52x70x70', pockets: 1, variants: ['3500e', '3500Max'] },
      { desc: 'Standard Micro-USB Single-Unit Rapid Rate Plug-In Charger, US/CAN Plug', part: 'PMPN4009', impres: false, chem: 'Li-Ion', pwr_src: '120 VAC', dims_mm: null, pockets: 1, variants: ['3500e', '3500Max'] },
      { desc: 'Micro-USB Rapid Rate Plug-In Charger', part: '25009298001', impres: false, chem: 'Li-Ion', pwr_src: '120 VAC', dims_mm: '44x34x70', pockets: 1, variants: ['3500e', '3500Max'] },
      // SL 3500e/3500Max — compact multi-unit
      { desc: 'Compact Multi-Unit Charger, US/CAN Plug', part: 'PMLN8569', impres: false, chem: 'Li-Ion', pwr_src: '100-240 VAC', dims_mm: '66x450x92', pockets: 6, variants: ['3500e', '3500Max'] },
      { desc: 'Compact Multi-Unit Charger, UK Plug', part: 'PMLN7162', impres: false, chem: 'Li-Ion', pwr_src: '100-240 VAC', dims_mm: '66x450x92', pockets: 6, variants: ['3500e', '3500Max'] },
      { desc: 'Compact Multi-Unit Charger, EU Plug', part: 'PMLN7102', impres: false, chem: 'Li-Ion', pwr_src: '100-240 VAC', dims_mm: '66x450x92', pockets: 6, variants: ['3500e', '3500Max'] },
      { desc: 'Compact Multi-Unit Charger, AU/NZ Plug', part: 'PMLN7103', impres: false, chem: 'Li-Ion', pwr_src: '100-240 VAC', dims_mm: '66x450x92', pockets: 6, variants: ['3500e', '3500Max'] },
      { desc: 'Compact Multi-Unit Charger, ARG Plug', part: 'PMLN7104', impres: false, chem: 'Li-Ion', pwr_src: '100-240 VAC', dims_mm: '66x450x92', pockets: 6, variants: ['3500e', '3500Max'] },
      { desc: 'Compact Multi-Unit Charger, KOR Plug', part: 'PMLN7105', impres: false, chem: 'Li-Ion', pwr_src: '100-240 VAC', dims_mm: '66x450x92', pockets: 6, variants: ['3500e', '3500Max'] },
      { desc: 'Compact Multi-Unit Charger, BRL Plug', part: 'PMLN7106', impres: false, chem: 'Li-Ion', pwr_src: '100-240 VAC', dims_mm: '66x450x92', pockets: 6, variants: ['3500e', '3500Max'] },
      { desc: 'Compact Multi-Unit Charger, JAP Plug', part: 'PMLN7107', impres: false, chem: 'Li-Ion', pwr_src: '100-240 VAC', dims_mm: '66x450x92', pockets: 6, variants: ['3500e', '3500Max'] },
      // SL 7000/7000e — tri-unit chargers
      { desc: 'Tri-Unit Rapid Rate Charger (radio + spare battery + BT device), US Plug', part: 'PMLN6701', impres: false, chem: 'Li-Ion', pwr_src: '120 VAC', dims_mm: '52x93x113', pockets: 3, variants: ['7000', '7000e'] },
      { desc: 'Tri-Unit Rapid Rate Charger, EU Plug', part: 'PMLN6705', impres: false, chem: 'Li-Ion', pwr_src: '220-240 VAC', dims_mm: '52x93x113', pockets: 3, variants: ['7000', '7000e'] },
      { desc: 'Tri-Unit Rapid Rate Charger, UK Plug', part: 'PMLN6704', impres: false, chem: 'Li-Ion', pwr_src: '230 VAC', dims_mm: '52x93x113', pockets: 3, variants: ['7000', '7000e'] },
      { desc: 'Tri-Unit Rapid Rate Charger, PRC Plug', part: 'PMLN6703', impres: false, chem: 'Li-Ion', pwr_src: null, dims_mm: '52x93x113', pockets: 3, variants: ['7000', '7000e'] },
      { desc: 'Tri-Unit Rapid Rate Charger, AU/NZ Plug', part: 'PMLN6700', impres: false, chem: 'Li-Ion', pwr_src: '220-240 VAC', dims_mm: '52x93x113', pockets: 3, variants: ['7000', '7000e'] },
      { desc: 'Tri-Unit Rapid Rate Charger, BZL Plug', part: 'PMLN6698', impres: false, chem: 'Li-Ion', pwr_src: '100-240 VAC', dims_mm: '52x93x113', pockets: 3, variants: ['7000', '7000e'] },
      { desc: 'Tri-Unit Rapid Rate Charger, ARG Plug', part: 'PMLN6702', impres: false, chem: 'Li-Ion', pwr_src: '220 VAC', dims_mm: '52x93x113', pockets: 3, variants: ['7000', '7000e'] },
      { desc: 'Tri-Unit Rapid Rate Charger, KOR Plug', part: 'PMLN6699', impres: false, chem: 'Li-Ion', pwr_src: '110-230 VAC', dims_mm: '52x93x113', pockets: 3, variants: ['7000', '7000e'] }
    ]
  },
  {
    id: 3,
    name: 'RSM/Audio',
    items: [
      { desc: 'IMPRES Noise-Canceling RSM, Large (IP54)', part: 'PMMN4071', impres: true, intel_audio: false, ai_noise: false, windporting: false, noise_cancel: true, full_duplex: false, vol_ctrl: false, prog_btn: null, audio_jack: true, ip: 'IP54', hazloc: 'UL', dims_mm: '60x78x28', variants: ['7000', '7000e', '3500e', '3500Max'] },
      { desc: 'IMPRES Windporting RSM, Small (IP55)', part: 'PMMN4073', impres: true, intel_audio: false, ai_noise: false, windporting: true, noise_cancel: false, full_duplex: false, vol_ctrl: false, prog_btn: null, audio_jack: true, ip: 'IP55', hazloc: 'UL', dims_mm: '55x60x27', variants: ['7000', '7000e', '3500e', '3500Max'] },
      { desc: 'Windporting RSM, Small, Submersible (IP57)', part: 'PMMN4075', impres: false, intel_audio: false, ai_noise: false, windporting: true, noise_cancel: false, full_duplex: false, vol_ctrl: false, prog_btn: null, audio_jack: true, ip: 'IP57', hazloc: 'UL', dims_mm: '55x60x27', variants: ['7000', '7000e', '3500e', '3500Max'] },
      { desc: 'Windporting RSM, Small (IP54)', part: 'PMMN4076', impres: false, intel_audio: false, ai_noise: false, windporting: true, noise_cancel: false, full_duplex: false, vol_ctrl: false, prog_btn: null, audio_jack: true, ip: 'IP54', hazloc: 'UL', dims_mm: '55x60x27', variants: ['7000', '7000e', '3500e', '3500Max'] },
      { desc: 'Windporting RSM, Small (IP67)', part: 'PMMN4108', impres: false, intel_audio: true, ai_noise: false, windporting: true, noise_cancel: false, full_duplex: false, vol_ctrl: true, prog_btn: null, audio_jack: false, ip: 'IP67', hazloc: null, dims_mm: '60x78x28', variants: ['7000', '7000e', '3500e', '3500Max'] },
      { desc: 'RM250 Wired RSM, Large (IP67)', part: 'PMMN4125', impres: false, intel_audio: false, ai_noise: false, windporting: true, noise_cancel: false, full_duplex: false, vol_ctrl: false, prog_btn: null, audio_jack: false, ip: 'IP67', hazloc: null, dims_mm: '58x84x24', variants: ['7000', '7000e', '3500e', '3500Max'] }
    ]
  },
  {
    id: 4,
    name: 'Surveillance/Earpieces',
    items: [
      { desc: 'IMPRES 2-Wire Surveillance Kit with Translucent Tube, Black', part: 'PMLN6129', impres: true, intel_audio: true, ai_noise: false, ear_type: 'Clear rubber eartip', mic_type: null, full_duplex: false, hazloc: 'UL', variants: ['7000', '7000e', '3500e', '3500Max'] },
      { desc: 'IMPRES 2-Wire Surveillance Kit with Translucent Tube, Beige', part: 'PMLN6130', impres: true, intel_audio: true, ai_noise: false, ear_type: 'Clear rubber eartip', mic_type: null, full_duplex: false, hazloc: 'UL', variants: ['7000', '7000e', '3500e', '3500Max'] },
      { desc: 'IMPRES 3-Wire Surveillance Kit with Translucent Tube, Black', part: 'PMLN6123', impres: true, intel_audio: true, ai_noise: false, ear_type: 'Clear rubber eartip', mic_type: null, full_duplex: false, hazloc: 'UL', variants: ['7000', '7000e', '3500e', '3500Max'] },
      { desc: 'IMPRES 3-Wire Surveillance Kit with Translucent Tube, Beige', part: 'PMLN6124', impres: true, intel_audio: true, ai_noise: false, ear_type: 'Clear rubber eartip', mic_type: null, full_duplex: false, hazloc: 'UL', variants: ['7000', '7000e', '3500e', '3500Max'] },
      { desc: '2-Wire Surveillance Kit with Translucent Tube, Black', part: 'PMLN7269', impres: false, intel_audio: false, ai_noise: false, ear_type: 'Clear rubber eartip', mic_type: null, full_duplex: false, hazloc: null, variants: ['7000', '7000e', '3500e', '3500Max'] },
      { desc: '2-Wire Surveillance Kit with Translucent Tube, Beige', part: 'PMLN7270', impres: false, intel_audio: false, ai_noise: false, ear_type: 'Clear rubber eartip', mic_type: null, full_duplex: false, hazloc: null, variants: ['7000', '7000e', '3500e', '3500Max'] },
      { desc: 'IMPRES 3-Wire Surveillance Kit with Quick Disconnect Translucent Tube, Black', part: 'PMLN6754', impres: true, intel_audio: true, ai_noise: false, ear_type: 'Clear rubber eartip', mic_type: null, full_duplex: false, hazloc: null, variants: ['7000', '7000e', '3500e', '3500Max'] },
      { desc: 'IMPRES 3-Wire Surveillance Kit with Quick Disconnect Translucent Tube, Beige', part: 'PMLN6755', impres: true, intel_audio: true, ai_noise: false, ear_type: 'Clear rubber eartip', mic_type: null, full_duplex: false, hazloc: null, variants: ['7000', '7000e', '3500e', '3500Max'] },
      { desc: '1-Wire Surveillance Kit, Black', part: 'PMLN7158', impres: false, intel_audio: false, ai_noise: false, ear_type: 'Clear rubber eartip', mic_type: null, full_duplex: false, hazloc: null, variants: ['7000', '7000e', '3500e', '3500Max'] },
      { desc: '2-Wire Surveillance Kit, Black', part: 'PMLN7157', impres: false, intel_audio: false, ai_noise: false, ear_type: 'Clear rubber eartip', mic_type: null, full_duplex: false, hazloc: null, variants: ['7000', '7000e', '3500e', '3500Max'] },
      // Replacement kits — SL 7000/7000e only
      { desc: 'Low Noise Kit with Translucent Tube and 1 Clear Rubber Eartip (SL 7000/7000e only)', part: 'RLN6242', impres: false, intel_audio: false, ai_noise: false, ear_type: 'Clear rubber eartip', mic_type: null, full_duplex: false, hazloc: null, variants: ['7000', '7000e'] },
      { desc: 'Replacement Standard Clear Rubber Eartip, Pack of 10 (SL 7000/7000e only)', part: '67009254001', impres: false, intel_audio: false, ai_noise: false, ear_type: 'Clear rubber eartip', mic_type: null, full_duplex: false, hazloc: null, variants: ['7000', '7000e'] },
      { desc: 'Replacement Quick Disconnect Translucent Tube with Clear Rubber Eartip (SL 7000/7000e only)', part: 'HKLN4608', impres: false, intel_audio: false, ai_noise: false, ear_type: 'Clear rubber eartip', mic_type: null, full_duplex: false, hazloc: null, variants: ['7000', '7000e'] },
      { desc: 'Replacement Quick Disconnect Translucent Tube with Clear Rubber Eartip for PMLN5957 (SL 7000/7000e only)', part: 'PMLN6175', impres: false, intel_audio: false, ai_noise: false, ear_type: 'Clear rubber eartip', mic_type: null, full_duplex: false, hazloc: null, variants: ['7000', '7000e'] }
    ]
  },
  {
    id: '4b',
    name: 'Surveillance Replacements & Earpieces',
    items: [
      { desc: 'Small Custom Earpiece, Right Ear', part: 'RLN4760', variants: ['7000','7000e'] },
      { desc: 'Medium Custom Earpiece, Right Ear', part: 'RLN4761', variants: ['7000','7000e'] },
      { desc: 'Large Custom Earpiece, Right Ear', part: 'RLN4762', variants: ['7000','7000e'] },
      { desc: 'Small Custom Earpiece, Left Ear', part: 'RLN4763', variants: ['7000','7000e'] },
      { desc: 'Medium Custom Earpiece, Left Ear', part: 'RLN4764', variants: ['7000','7000e'] },
      { desc: 'Large Custom Earpiece, Left Ear', part: 'RLN4765', variants: ['7000','7000e'] },
      { desc: 'Clear EP7-Small Hearing Protectors [Sonic Defenders] Ultra Earplugs, NR 28dB', part: 'RLN6511', variants: ['7000','7000e'] },
      { desc: 'Clear EP7-Medium Hearing Protectors [Sonic Defenders] Ultra Earplugs, NR 28dB', part: 'RLN6512', variants: ['7000','7000e'] },
      { desc: 'Clear EP7-Large Hearing Protectors [Sonic Defenders] Ultra Earplugs, NR 28dB', part: 'RLN6513', variants: ['7000','7000e'] }
    ]
  },
  {
    id: 5,
    name: 'Headsets',
    items: [
      { desc: 'Lightweight Over-the-Head Headset, Single Muff, with In-Line PTT and Boom Microphone', part: 'PMLN6635', impres: false, headset_type: 'Over-the-head', ear_style: 'Single-ear', nrr_db: null, mic_type: 'Boom', hazloc: 'UL', variants: ['7000', '7000e', '3500e', '3500Max'] },
      { desc: 'Heavy Duty Behind-the-Head Headset with Noise-Canceling Boom Microphone', part: 'PMLN6760', impres: true, headset_type: 'Behind-the-head', ear_style: 'Dual-muff', nrr_db: 24, mic_type: 'Boom', hazloc: null, variants: ['7000', '7000e', '3500e', '3500Max'] },
      { desc: 'Heavy Duty Behind-the-Head Headset with Noise-Canceling Boom Microphone', part: 'PMLN6763', impres: true, headset_type: 'Behind-the-head', ear_style: 'Dual-muff', nrr_db: 24, mic_type: 'Boom', hazloc: 'UL', variants: ['7000', '7000e', '3500e', '3500Max'] },
      { desc: 'Heavy Duty Over-the-Head Headset with Noise-Canceling Boom Microphone', part: 'PMLN7464', impres: true, headset_type: 'Over-the-head', ear_style: 'Dual-muff', nrr_db: 24, mic_type: 'Boom', hazloc: null, variants: ['7000', '7000e', '3500e', '3500Max'] },
      { desc: 'Heavy Duty Over-the-Head Headset with Noise-Canceling Boom Microphone', part: 'PMLN7465', impres: true, headset_type: 'Over-the-head', ear_style: 'Dual-muff', nrr_db: 24, mic_type: 'Boom', hazloc: 'UL', variants: ['7000', '7000e', '3500e', '3500Max'] },
      { desc: 'Mag One Ultra-Lite Behind-the-Head Headset', part: 'PMLN6761', impres: true, headset_type: 'Behind-the-head', ear_style: 'Single-ear', nrr_db: null, mic_type: 'Boom', hazloc: null, variants: ['7000', '7000e', '3500e', '3500Max'] },
      { desc: 'IMPRES Temple Transducer with Boom Microphone and In-Line PTT', part: 'PMLN6759', impres: true, headset_type: 'Behind-the-head', ear_style: 'Bone conduction', nrr_db: null, mic_type: 'Boom', hazloc: null, variants: ['7000', '7000e', '3500e', '3500Max'] }
    ]
  },
  {
    id: 6,
    name: 'Carry',
    items: [
      // SL 7000/7000e
      { desc: 'Carry Holder/Holster for SL Series Radio with Swivel Belt Loop (SL 7000/7000e only)', part: 'PMLN5956', material: 'Plastic', belt_sz: null, swivel: 'Swivel', display: 'Display', d_rings: false, variants: ['7000', '7000e'] },
      { desc: 'Soft Leather Case with 1.5 Inch Quick Release Swivel Belt Clip (SL 7000/7000e only)', part: 'PMLN7040', material: 'Soft leather', belt_sz: '1.5', swivel: 'Swivel', display: null, d_rings: false, variants: ['7000', '7000e'] },
      { desc: 'Flexible Hand Strap (SL 7000/7000e only)', part: 'PMLN7076', material: 'Nylon', belt_sz: null, swivel: null, display: null, d_rings: false, variants: ['7000', '7000e'] },
      // SL 3500e/3500Max
      { desc: 'Heavy-Duty Belt Clip (SL 3500e/3500Max only)', part: 'PMLN7128', material: 'Plastic', belt_sz: null, swivel: null, display: null, d_rings: false, variants: ['3500e', '3500Max'] },
      { desc: 'Swivel Carry Holster (SL 3500e/3500Max only)', part: 'PMLN7190', material: 'Plastic', belt_sz: null, swivel: 'Swivel', display: 'Display', d_rings: false, variants: ['3500e', '3500Max'] },
      { desc: 'Carry Holster with Belt Clip (SL 3500e/3500Max only)', part: 'PMLN7559', material: 'Plastic', belt_sz: null, swivel: 'Fixed', display: null, d_rings: false, variants: ['3500e', '3500Max'] },
      // All SL variants
      { desc: 'Nylon Wrist Strap', part: 'PMLN6074', material: 'Nylon', belt_sz: null, swivel: null, display: null, d_rings: false, variants: ['7000', '7000e', '3500e', '3500Max'] },
      { desc: 'Replacement 2.5 Inch Swivel Belt Loop', part: 'PMLN5610', material: 'Hard leather', belt_sz: '2.5', swivel: 'Swivel', display: 'Display/Non-display', d_rings: false, variants: ['7000', '7000e', '3500e', '3500Max'] },
      { desc: 'Spring Action 2 Inch Belt Clip', part: 'PMLN4651', material: 'Plastic', belt_sz: '2', swivel: 'Fixed', display: 'Display/Non-display', d_rings: false, variants: ['7000', '7000e', '3500e', '3500Max'] },
      { desc: 'Spring Action 2.5 Inch Belt Clip', part: 'PMLN7008', material: 'Plastic', belt_sz: '2.5', swivel: 'Fixed', display: 'Display/Non-display', d_rings: false, variants: ['7000', '7000e', '3500e', '3500Max'] }
    ]
  },
  {
    id: 7,
    name: 'Antennas',
    items: [
      // SL 7000/7000e — 800/900 MHz antennas
      { desc: '800 MHz Flexible Whip Antenna (806-870 MHz) (SL 7000/7000e only)', part: 'PMAF4011', band: '800/900 MHz', freq_mhz: '806-870', len_cm: 16.4, ant_type: 'Whip', variants: ['7000', '7000e'] },
      { desc: '900 MHz Flexible Whip Antenna (896-941 MHz) (SL 7000/7000e only)', part: 'PMAF4012', band: '800/900 MHz', freq_mhz: '896-941', len_cm: 14, ant_type: 'Whip', variants: ['7000', '7000e'] },
      { desc: '800/900 Stubby Antenna (806-870 MHz) (SL 7000/7000e only)', part: 'PMAF4009', band: '800/900 MHz', freq_mhz: '806-870', len_cm: 12, ant_type: 'Short whip', variants: ['7000', '7000e'] },
      { desc: '800/900 Stubby Antenna (896-941 MHz) (SL 7000/7000e only)', part: 'PMAF4010', band: '800/900 MHz', freq_mhz: '896-941', len_cm: 11.2, ant_type: 'Short whip', variants: ['7000', '7000e'] },
      // SL 7000/7000e — antenna kits
      { desc: 'UHF Antenna Kit for 403-425 MHz Range (SL 7000/7000e only)', part: 'PMAE4078', band: 'UHF', freq_mhz: '403-425', len_cm: 1.9, ant_type: 'Stubby', variants: ['7000', '7000e'] },
      { desc: 'UHF Antenna Kit for 420-445 MHz Range (SL 7000/7000e only)', part: 'PMAE4076', band: 'UHF', freq_mhz: '420-445', len_cm: 1.9, ant_type: 'Stubby', variants: ['7000', '7000e'] },
      { desc: 'UHF Antenna Kit for 438-470 MHz Range (SL 7000/7000e only)', part: 'PMAE4077', band: 'UHF', freq_mhz: '438-470', len_cm: 1.9, ant_type: 'Stubby', variants: ['7000', '7000e'] },
      { desc: 'UHF Stubby Antenna Kit for 450-490 MHz Range (SL 7000/7000e only)', part: 'PMAE4091', band: 'UHF', freq_mhz: '450-490', len_cm: 1.9, ant_type: 'Stubby', variants: ['7000', '7000e'] },
      { desc: 'UHF Stubby Antenna Kit for 480-527 MHz Range (SL 7000/7000e only)', part: 'PMAE4092', band: 'UHF', freq_mhz: '480-527', len_cm: 1.9, ant_type: 'Stubby', variants: ['7000', '7000e'] },
      { desc: 'Antenna Kit for 800 MHz Range (SL 7000/7000e only)', part: 'PMAF4017', band: '800/900 MHz', freq_mhz: '806-870', len_cm: 1.1, ant_type: 'Stubby', variants: ['7000', '7000e'] },
      { desc: 'Antenna Kit for 900 MHz Range (SL 7000/7000e only)', part: 'PMAF4018', band: '800/900 MHz', freq_mhz: '896-941', len_cm: 0.5, ant_type: 'Stubby', variants: ['7000', '7000e'] }
    ]
  },
  {
    id: 8,
    name: 'Cables',
    items: [
      { desc: 'Portable Programming Cable, Micro USB, for SL Series', part: '25-124330-01R', variants: ['7000', '7000e', '3500e', '3500Max'] }
    ]
  },
  {
    id: 9,
    name: 'Screen Protectors',
    items: [
      { desc: 'Screen Protector, Clear, Single Pack (SL 7000/7000e only)', part: 'AY000269A01', variants: ['7000', '7000e'] },
      { desc: 'Screen Protector, Clear, Single Pack (SL 7000/7000e only)', part: 'AY000267A01', variants: ['7000', '7000e'] }
    ]
  },
  {
    id: 11,
    name: 'IMPRES Tools',
    items: [
      // PDF lists HKVN4036-4039 for XPR 6000/7000/3000 Series. SL not explicitly listed.
      // Flagging as PENDING — do not display for SL until confirmed.
    ]
  },
  {
    id: 12,
    name: ,
      // OC Wireless replacement parts
      { desc: 'Replacement Wireless Earpiece 12 inch Cable (for NNTN8125)', part: 'NTN2572', ear_type: null, mic_type: null, ptt: null, talk_time_hr: null, charge_time_hr: null, weight_g: null, variants: ['7000','7000e'] },
      { desc: 'Wireless Earpiece Maintenance Kit (10 silicone tubes, 10 mic seal strips, 2 foam windscreens)', part: 'NTN8821', ear_type: null, mic_type: null, ptt: null, talk_time_hr: null, charge_time_hr: null, weight_g: null, variants: ['7000','7000e'] },
      { desc: 'Ear Strap for Comfort Earpiece, Pack of 10', part: 'NTN8988', ear_type: null, mic_type: null, ptt: null, talk_time_hr: null, charge_time_hr: null, weight_g: null, variants: ['7000','7000e'] },
      { desc: 'Replacement Ear Tips Kit for Wireless Earbuds (20 sm/20 med/20 lg/10 clips)', part: 'NNTN8361', ear_type: null, mic_type: null, ptt: null, talk_time_hr: null, charge_time_hr: null, weight_g: null, variants: ['7000','7000e'] },
      { desc: 'Swivel Clip for OC Wireless Pods', part: 'PMLN6246', ear_type: null, mic_type: null, ptt: null, talk_time_hr: null, charge_time_hr: null, weight_g: null, variants: ['7000','7000e'] },
      { desc: 'Replacement Micro-USB Plug-In Charger for Wireless Pod, US Plug', part: 'PMPN4027', ear_type: null, mic_type: null, ptt: null, talk_time_hr: null, charge_time_hr: null, weight_g: null, variants: ['7000','7000e'] },
      { desc: 'Replacement Micro-USB Plug-In Charger for Wireless Pod, AU/NZ Plug', part: 'PMPN4007', ear_type: null, mic_type: null, ptt: null, talk_time_hr: null, charge_time_hr: null, weight_g: null, variants: ['7000','7000e'] },
      { desc: 'Replacement Micro-USB Plug-In Charger for Wireless Pod, EU/UK Plug', part: 'PMPN4006', ear_type: null, mic_type: null, ptt: null, talk_time_hr: null, charge_time_hr: null, weight_g: null, variants: ['7000','7000e'] },
      { desc: 'Replacement Micro-USB Plug-In Charger for Wireless Pod, PRC Plug', part: 'PMPN4008', ear_type: null, mic_type: null, ptt: null, talk_time_hr: null, charge_time_hr: null, weight_g: null, variants: ['7000','7000e'] },
      { desc: 'Replacement Micro-USB Plug-In Charger for Wireless Pod, KOR Plug', part: 'PMPN4015', ear_type: null, mic_type: null, ptt: null, talk_time_hr: null, charge_time_hr: null, weight_g: null, variants: ['7000','7000e'] },
      { desc: 'Replacement Micro-USB Plug-In Charger for Wireless Pod, ARG Plug', part: 'PMPN4016', ear_type: null, mic_type: null, ptt: null, talk_time_hr: null, charge_time_hr: null, weight_g: null, variants: ['7000','7000e'] },
      { desc: 'Replacement Micro-USB Plug-In Charger for Wireless Pod, BZL Plug', part: 'PMPN4023', ear_type: null, mic_type: null, ptt: null, talk_time_hr: null, charge_time_hr: null, weight_g: null, variants: ['7000','7000e'] },
      { desc: 'Replacement Micro-USB Plug-In Charger for Wireless Pod, EU Plug', part: 'PMPN4028', ear_type: null, mic_type: null, ptt: null, talk_time_hr: null, charge_time_hr: null, weight_g: null, variants: ['7000','7000e'] }'Bluetooth',
    items: [
      // SL 7000/7000e
      { desc: 'Operations Critical Wireless RSM with Battery and Belt Clip', part: 'RLN6561', ear_type: null, mic_type: 'Omni directional, windporting equivalent', ptt: true, talk_time_hr: 28, charge_time_hr: 3, weight_g: 158, variants: ['7000', '7000e'] },
      { desc: 'Operations Critical Wireless RSM with Battery, Belt Clip and Dual Unit Charger (US Plug)', part: 'RLN6562', ear_type: null, mic_type: 'Omni directional, windporting equivalent', ptt: true, talk_time_hr: 28, charge_time_hr: 3, weight_g: 158, variants: ['7000', '7000e'] },
      { desc: 'Operations Critical Wireless RSM with Battery, Belt Clip and Dual Unit Charger (AU/NZ Plug)', part: 'PMLN7669', ear_type: null, mic_type: 'Omni directional, windporting equivalent', ptt: true, talk_time_hr: 28, charge_time_hr: 3, weight_g: 158, variants: ['7000', '7000e'] },
      { desc: 'XBT Operations Critical Wireless Behind-the-Neck Headset', part: 'RLN6490', ear_type: 'Dual-muff', mic_type: 'Boom', ptt: true, talk_time_hr: 22, charge_time_hr: 7, weight_g: 429, variants: ['7000', '7000e'] },
      { desc: 'XBT Operations Critical Wireless Headband Style Headset', part: 'RLN6491', ear_type: 'Dual-muff', mic_type: 'Boom', ptt: true, talk_time_hr: 22, charge_time_hr: 7, weight_g: 422, variants: ['7000', '7000e'] },
      { desc: 'Operations Critical Wireless Earpiece with 12 Inch Cable (with US/JP Charger)', part: 'NNTN8125', ear_type: 'Over-the-ear (CommPort)', mic_type: 'Directional', ptt: true, talk_time_hr: 10, charge_time_hr: 3, weight_g: 43, variants: ['7000', '7000e'] },
      { desc: 'Operations Critical Wireless Earpiece with 12 Inch Cable (without Charger)', part: 'NNTN8189', ear_type: null, mic_type: null, ptt: true, talk_time_hr: 10, charge_time_hr: 3, weight_g: 43, variants: ['7000', '7000e'] },
      { desc: 'Operations Critical Wireless PTT Pod (with US Charger)', part: 'NNTN8127', ear_type: null, mic_type: null, ptt: true, talk_time_hr: 10, charge_time_hr: 3, weight_g: 43, variants: ['7000', '7000e'] },
      { desc: 'Operations Critical Wireless PTT Pod (without Charger)', part: 'NNTN8191', ear_type: null, mic_type: null, ptt: true, talk_time_hr: 10, charge_time_hr: 3, weight_g: 43, variants: ['7000', '7000e'] },
      { desc: 'Bluetooth Accessory Kit with Flexible Earpiece, BT Pod and Charging Cradle (US Plug)', part: 'RLN6500', ear_type: 'Over-the-ear (swivel)', mic_type: 'In-line', ptt: false, talk_time_hr: 8, charge_time_hr: null, weight_g: 18, variants: ['7000', '7000e'] },
      { desc: 'Operations Critical Wireless Bluetooth Earpiece with PTT (limited availability)', part: 'PMLN7851', ear_type: 'Over-the-ear (swivel)', mic_type: 'Boom', ptt: true, talk_time_hr: 8, charge_time_hr: 3, weight_g: 23, variants: ['7000', '7000e'] },
      { desc: 'Bluetooth Accessory Kit with Swivel Earpiece and Battery Clip', part: 'PMLN6462', ear_type: 'Over-the-ear (swivel)', mic_type: 'In-line', ptt: false, talk_time_hr: 8, charge_time_hr: null, weight_g: 18, variants: ['7000', '7000e'] },
      { desc: 'Bluetooth Accessory Kit with Swivel Earpiece and Battery Clip', part: 'PMLN6463', ear_type: 'Over-the-ear (swivel)', mic_type: 'In-line', ptt: false, talk_time_hr: 8, charge_time_hr: null, weight_g: 18, variants: ['7000', '7000e'] },
      { desc: 'Bluetooth Accessory Kit with Flexible Earpiece, BT Pod and Charging Cradle', part: 'PMLN7181', ear_type: 'Over-the-ear (swivel)', mic_type: 'Boom', ptt: false, talk_time_hr: 8, charge_time_hr: null, weight_g: 18, variants: ['7000', '7000e'] },
      { desc: 'Bluetooth Accessory Kit with Flexible Earpiece, BT Pod and Charging Cradle (US Plug)', part: 'RLN6556', ear_type: 'Over-the-ear (swivel)', mic_type: 'Boom', ptt: false, talk_time_hr: 8, charge_time_hr: null, weight_g: 18, variants: ['7000', '7000e'] },
      // SL 3500e/3500Max
      { desc: 'Completely Discreet Earpiece Kit (includes RLN4920 inductive neckloop and RLN4921 phonito) (SL 3500e/3500Max only)', part: 'PMLN7696', ear_type: 'Completely discreet', mic_type: null, ptt: true, talk_time_hr: null, charge_time_hr: null, weight_g: null, variants: ['3500e', '3500Max'] },
      { desc: 'Wireless Neckloop Y-Adapter and Retention Hook (SL 3500e/3500Max only)', part: 'NNTN8385', ear_type: null, mic_type: null, ptt: true, talk_time_hr: null, charge_time_hr: null, weight_g: null, variants: ['3500e', '3500Max'] },
      { desc: 'Operations Critical Wireless 1-Wire Surveillance Kit with Translucent Tube (SL 3500e/3500Max only)', part: 'PMLN7052', ear_type: 'Clear rubber eartip', mic_type: 'In-line', ptt: true, talk_time_hr: null, charge_time_hr: null, weight_g: null, variants: ['3500e', '3500Max'] },
      { desc: 'Operations Critical Wireless Earbud with 11.5 Inch Cable (SL 3500e/3500Max only)', part: 'NNTN8294', ear_type: 'Earbud', mic_type: 'In-line', ptt: true, talk_time_hr: 10, charge_time_hr: null, weight_g: null, variants: ['3500e', '3500Max'] },
      { desc: 'Operations Critical Wireless Earbud with 45 Inch Cable (SL 3500e/3500Max only)', part: 'NNTN8295', ear_type: 'Earbud', mic_type: 'In-line', ptt: true, talk_time_hr: 10, charge_time_hr: null, weight_g: null, variants: ['3500e', '3500Max'] }
    ]
  }
];

window.RADIOS_DATA = window.RADIOS_DATA || {};
window.RADIOS_DATA['sl'] = SL_CATEGORIES;
