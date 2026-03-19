// xpr6000-data.js — XPR 6000 Series accessory data (PDF-verified, Professional Tier Catalog)
// Variants: XPR 6350, XPR 6550, XPR 6580
// Sub-selector: [6350] [6550] [6580]
// NOTE: XPR 6580 is 800/900 MHz — variant-specific antenna rows apply
// NOTE: Bluetooth is NOT embedded — requires external adapter (PMLN5712 or PMLN5993)

const XPR6000_CATEGORIES = [
  {
    id: 1,
    name: 'Batteries',
    items: [
      { desc: 'IMPRES Li-Ion 2800mAh IP67 Battery', part: 'PMNN4448', impres: true, chem: 'Li-Ion', capacity_mah: 2800, dims_mm: '113x52x23', weight_g: 155, hazloc: null, ip: 'IP67', op_temp: '-10\u00b0C to +60\u00b0C', variants: ['6350','6550','6580'] },
      { desc: 'IMPRES Li-Ion 2500mAh IP68 TIA4950 Battery', part: 'NNTN8560', impres: true, chem: 'Li-Ion', capacity_mah: 2500, dims_mm: '113x52x23', weight_g: 210, hazloc: 'UL', ip: 'IP68', op_temp: '-10\u00b0C to +60\u00b0C', variants: ['6350','6550','6580'] },
      { desc: 'IMPRES Li-Ion 2900mAh IP68 TIA4950 Battery', part: 'PMNN4489', impres: true, chem: 'Li-Ion', capacity_mah: 2900, dims_mm: '113x52x23', weight_g: 210, hazloc: 'UL', ip: 'IP68', op_temp: '-10\u00b0C to +60\u00b0C', variants: ['6350','6550','6580'] },
      { desc: 'IMPRES Li-Ion 1700mAh IP57 Battery', part: 'PMNN4066', impres: true, chem: 'Li-Ion', capacity_mah: 1700, dims_mm: '129x55x19', weight_g: 145, hazloc: null, ip: 'IP57', op_temp: '-10\u00b0C to +60\u00b0C', variants: ['6350','6550','6580'] },
      { desc: 'IMPRES Li-Ion 2400mAh IP57 Battery', part: 'PMNN4077', impres: true, chem: 'Li-Ion', capacity_mah: 2400, dims_mm: '129x55x23', weight_g: 160, hazloc: null, ip: 'IP57', op_temp: '-20\u00b0C to +60\u00b0C', variants: ['6350','6550','6580'] },
      { desc: 'Motorola Original NiMH 1480mAh IP57 Battery', part: 'PMNN4065', impres: false, chem: 'NiMH', capacity_mah: 1480, dims_mm: '129x55x21', weight_g: 215, hazloc: null, ip: 'IP57', op_temp: '-20\u00b0C to +60\u00b0C', variants: ['6350','6550','6580'] }
    ]
  },
  {
    id: 2,
    name: 'Chargers',
    items: [
      // Single-unit rapid rate (non-IMPRES)
      { desc: 'Single-Unit Rapid Rate Charger with Power Supply, CHN Plug', part: 'NNTN8224', impres: false, chem: 'Li-Ion, NiMH', pwr_src: '240 VAC', dims_mm: '61x97x163', pockets: 1, variants: ['6350','6550','6580'] },
      { desc: 'Single-Unit Rapid Rate Charger with Power Supply, ARG Plug', part: 'NNTN8225', impres: false, chem: 'Li-Ion, NiMH', pwr_src: null, dims_mm: '61x97x163', pockets: 1, variants: ['6350','6550','6580'] },
      { desc: 'Single-Unit Rapid Rate Charger with Power Supply, BZL Plug', part: 'NNTN8280', impres: false, chem: 'Li-Ion, NiMH', pwr_src: '100-240 VAC', dims_mm: '61x97x163', pockets: 1, variants: ['6350','6550','6580'] },
      { desc: 'Single-Unit Rapid Rate Charger with Power Supply, EURO Plug', part: 'NNTN8292', impres: false, chem: 'Li-Ion, NiMH', pwr_src: '240 VAC', dims_mm: '61x97x163', pockets: 1, variants: ['6350','6550','6580'] },
      { desc: 'Single-Unit Rapid Rate Charger with Power Supply, UK Plug', part: 'NNTN8293', impres: false, chem: 'Li-Ion, NiMH', pwr_src: '240 VAC', dims_mm: '61x97x163', pockets: 1, variants: ['6350','6550','6580'] },
      // IMPRES single-unit
      { desc: 'IMPRES Single-Unit Charger, US/CAN Plug', part: 'PMPN4576A', impres: true, chem: 'Li-Ion, NiMH', pwr_src: '120 VAC', dims_mm: '51x88x94', pockets: 1, variants: ['6350','6550','6580'] },
      { desc: 'IMPRES Single-Unit Charger, ARG Plug', part: 'PMPN4573A', impres: true, chem: 'Li-Ion, NiMH', pwr_src: '240 VAC', dims_mm: '51x88x94', pockets: 1, variants: ['6350','6550','6580'] },
      { desc: 'IMPRES Single-Unit Charger, BRZ Plug', part: 'PMPN4575A', impres: true, chem: 'Li-Ion, NiMH', pwr_src: '100-240 VAC', dims_mm: '51x88x94', pockets: 1, variants: ['6350','6550','6580'] },
      { desc: 'IMPRES Single-Unit Charger, UK Plug', part: 'PMPN4572A', impres: true, chem: 'Li-Ion, NiMH', pwr_src: '240 VAC', dims_mm: '51x88x94', pockets: 1, variants: ['6350','6550','6580'] },
      { desc: 'IMPRES Single-Unit Charger, EURO Plug', part: 'PMPN4577A', impres: true, chem: 'Li-Ion, NiMH', pwr_src: '240 VAC', dims_mm: '51x88x94', pockets: 1, variants: ['6350','6550','6580'] },
      { desc: 'IMPRES Single-Unit Charger, AU/NZ Plug', part: 'PMPN4571A', impres: true, chem: 'Li-Ion, NiMH', pwr_src: '240 VAC', dims_mm: '51x88x94', pockets: 1, variants: ['6350','6550','6580'] },
      { desc: 'IMPRES Single-Unit Charger, KOR Plug', part: 'PMPN4574A', impres: true, chem: 'Li-Ion, NiMH', pwr_src: '240 VAC', dims_mm: '51x88x94', pockets: 1, variants: ['6350','6550','6580'] },
      { desc: 'IMPRES Single-Unit Charger, CHN Plug', part: 'PMPN4579A', impres: true, chem: 'Li-Ion, NiMH', pwr_src: '240 VAC', dims_mm: '51x88x94', pockets: 1, variants: ['6350','6550','6580'] },
      { desc: 'IMPRES Single-Unit Charger, INDIA Plug', part: 'PMPN4582A', impres: true, chem: 'Li-Ion, NiMH', pwr_src: '100-240 VAC', dims_mm: '51x88x94', pockets: 1, variants: ['6350','6550','6580'] },
      // Vehicular / travel
      { desc: 'IMPRES Single-Unit Rapid Rate Vehicular Charger, Heavy-Duty Permanent Mount', part: 'NNTN7616', impres: true, chem: 'Li-Ion, NiMH', pwr_src: '12 VDC hardwire', dims_mm: '200x83x97', pockets: 1, variants: ['6350','6550','6580'] },
      { desc: 'Travel Charger, Rapid Rate with Voltage Regulated Adapter, Mounting Bracket and Coil Cord', part: 'NNTN8525', impres: false, chem: 'Li-Ion, NiMH', pwr_src: '12 VDC cigarette lighter', dims_mm: '58x64x67', pockets: 1, variants: ['6350','6550','6580'] },
      // IMPRES 2 multi-unit
      { desc: 'IMPRES 2 Multi-Unit Fast Charger with 1 Display, US/CAN Plug', part: 'PMPN4284', impres: true, chem: 'Li-Ion, NiMH', pwr_src: '100-240 VAC', dims_mm: '153x445x292', pockets: 6, variants: ['6350','6550','6580'] },
      { desc: 'IMPRES 2 Multi-Unit Fast Charger with 1 Display, UK Plug', part: 'PMPN4290', impres: true, chem: 'Li-Ion, NiMH', pwr_src: '100-240 VAC', dims_mm: '153x445x292', pockets: 6, variants: ['6350','6550','6580'] },
      { desc: 'IMPRES 2 Multi-Unit Fast Charger with 1 Display, EURO Plug', part: 'PMPN4289', impres: true, chem: 'Li-Ion, NiMH', pwr_src: '100-240 VAC', dims_mm: '153x445x292', pockets: 6, variants: ['6350','6550','6580'] },
      { desc: 'IMPRES 2 Multi-Unit Fast Charger with 1 Display, AU/NZ Plug', part: 'PMPN4293', impres: true, chem: 'Li-Ion, NiMH', pwr_src: '100-240 VAC', dims_mm: '153x445x292', pockets: 6, variants: ['6350','6550','6580'] },
      { desc: 'IMPRES 2 Multi-Unit Fast Charger with 1 Display, ARG Plug', part: 'PMPN4291', impres: true, chem: 'Li-Ion, NiMH', pwr_src: '100-240 VAC', dims_mm: '153x445x292', pockets: 6, variants: ['6350','6550','6580'] },
      { desc: 'IMPRES 2 Multi-Unit Fast Charger with 1 Display, BZL Plug', part: 'PMPN4292', impres: true, chem: 'Li-Ion, NiMH', pwr_src: '100-240 VAC', dims_mm: '153x445x292', pockets: 6, variants: ['6350','6550','6580'] },
      { desc: 'IMPRES 2 Multi-Unit Fast Charger with 1 Display, JAP Plug', part: 'PMPN4295', impres: true, chem: 'Li-Ion, NiMH', pwr_src: '100-240 VAC', dims_mm: '153x445x292', pockets: 6, variants: ['6350','6550','6580'] },
      { desc: 'IMPRES 2 Multi-Unit Fast Charger with 1 Display, KOR Plug', part: 'PMPN4294', impres: true, chem: 'Li-Ion, NiMH', pwr_src: '100-240 VAC', dims_mm: '153x445x292', pockets: 6, variants: ['6350','6550','6580'] },
      { desc: 'IMPRES 2 Multi-Unit Fast Charger with 1 Display, CHN Plug', part: 'PMPN4296', impres: true, chem: 'Li-Ion, NiMH', pwr_src: '100-240 VAC', dims_mm: '153x445x292', pockets: 6, variants: ['6350','6550','6580'] },
      { desc: 'IMPRES 2 Multi-Unit Fast Charger with 1 Display, TW Plug', part: 'PMPN4462', impres: true, chem: 'Li-Ion, NiMH', pwr_src: '100-240 VAC', dims_mm: '153x445x292', pockets: 6, variants: ['6350','6550','6580'] }
    ]
  },
  {
    id: '2b',
    name: 'Charger Replacements',
    items: [
      // SUC Replacement Power Supply Units (PDF-verified, XPR 6000 section)
      { desc: 'Replacement Power Supply for IMPRES Single-Unit Charger, US Plug', part: '25009297001', impres: false, chem: null, pwr_src: '120 VAC', dims_mm: null, pockets: null, variants: ['6350','6550','6580'] },
      { desc: 'Replacement Power Supply for IMPRES Single-Unit Charger, ARG Plug', part: 'PS000037A04', impres: false, chem: null, pwr_src: '240 VAC', dims_mm: null, pockets: null, variants: ['6350','6550','6580'] },
      { desc: 'Replacement Power Supply for IMPRES Single-Unit Charger, BRZ Plug', part: 'EPNN9356A', impres: false, chem: null, pwr_src: '100-240 VAC', dims_mm: null, pockets: null, variants: ['6350','6550','6580'] },
      { desc: 'Replacement Power Supply for IMPRES Single-Unit Charger, UK Plug', part: 'PS000037A02', impres: false, chem: null, pwr_src: '240 VAC', dims_mm: null, pockets: null, variants: ['6350','6550','6580'] },
      { desc: 'Replacement Power Supply for IMPRES Single-Unit Charger, EURO Plug', part: 'PS000037A01', impres: false, chem: null, pwr_src: '240 VAC', dims_mm: null, pockets: null, variants: ['6350','6550','6580'] },
      { desc: 'Replacement Power Supply for IMPRES Single-Unit Charger, AU/NZ Plug', part: 'PS000037A03', impres: false, chem: null, pwr_src: '240 VAC', dims_mm: null, pockets: null, variants: ['6350','6550','6580'] },
      { desc: 'Replacement Power Supply for IMPRES Single-Unit Charger, JAP Plug', part: 'PMLN5229A', impres: false, chem: null, pwr_src: '100-240 VAC', dims_mm: null, pockets: null, variants: ['6350','6550','6580'] },
      { desc: 'Replacement Power Supply for IMPRES Single-Unit Charger, KOR Plug', part: 'PS000037A06', impres: false, chem: null, pwr_src: '240 VAC', dims_mm: null, pockets: null, variants: ['6350','6550','6580'] },
      { desc: 'Replacement Power Supply for IMPRES Single-Unit Charger, CHN Plug', part: 'PS000037A05', impres: false, chem: null, pwr_src: '240 VAC', dims_mm: null, pockets: null, variants: ['6350','6550','6580'] },
      { desc: 'Replacement Power Supply for IMPRES Single-Unit Charger, INDIA Plug', part: 'EPNN9295A', impres: false, chem: null, pwr_src: '100-240 VAC', dims_mm: null, pockets: null, variants: ['6350','6550','6580'] },
      // MUC Replacement Power Supply (without cord)
      { desc: 'Replacement Power Supply for IMPRES 2 Multi-Unit Charger, 100-240 VAC (no cord)', part: 'PS000242A01', impres: false, chem: null, pwr_src: '100-240 VAC', dims_mm: null, pockets: null, variants: ['6350','6550','6580'] },
      // MUC Power Cords (PDF-verified)
      { desc: 'Power Cord for IMPRES 2 Multi-Unit Charger, US/CAN Plug', part: '3087791G01', impres: false, chem: null, pwr_src: null, dims_mm: null, pockets: null, variants: ['6350','6550','6580'] },
      { desc: 'Power Cord for IMPRES 2 Multi-Unit Charger, UK Plug', part: '3087791G07', impres: false, chem: null, pwr_src: null, dims_mm: null, pockets: null, variants: ['6350','6550','6580'] },
      { desc: 'Power Cord for IMPRES 2 Multi-Unit Charger, EURO Plug', part: '3087791G04', impres: false, chem: null, pwr_src: null, dims_mm: null, pockets: null, variants: ['6350','6550','6580'] },
      { desc: 'Power Cord for IMPRES 2 Multi-Unit Charger, AU/NZ Plug', part: '3087791G10', impres: false, chem: null, pwr_src: null, dims_mm: null, pockets: null, variants: ['6350','6550','6580'] },
      { desc: 'Power Cord for IMPRES 2 Multi-Unit Charger, BZL Plug', part: '3087791G22', impres: false, chem: null, pwr_src: null, dims_mm: null, pockets: null, variants: ['6350','6550','6580'] },
      { desc: 'Power Cord for IMPRES 2 Multi-Unit Charger, JAP Plug', part: '3087791G20', impres: false, chem: null, pwr_src: null, dims_mm: null, pockets: null, variants: ['6350','6550','6580'] },
      { desc: 'Power Cord for IMPRES 2 Multi-Unit Charger, KOR Plug', part: '3087791G16', impres: false, chem: null, pwr_src: null, dims_mm: null, pockets: null, variants: ['6350','6550','6580'] },
      { desc: 'Power Cord for IMPRES 2 Multi-Unit Charger, CHN Plug', part: 'CB000199A01', impres: false, chem: null, pwr_src: null, dims_mm: null, pockets: null, variants: ['6350','6550','6580'] },
      { desc: 'Power Cord for IMPRES 2 Multi-Unit Charger, TW Plug', part: 'CB000805A01', impres: false, chem: null, pwr_src: null, dims_mm: null, pockets: null, variants: ['6350','6550','6580'] },
      // MUC Accessories
      { desc: 'IMPRES 2 Multi-Unit Charger Interchangeable Charging Pocket', part: 'AS000129A01', impres: false, chem: null, pwr_src: null, dims_mm: null, pockets: null, variants: ['6350','6550','6580'] },
      { desc: 'Wall Mount Bracket for IMPRES 2 Multi-Unit Charger', part: 'BR000272A01', impres: false, chem: null, pwr_src: null, dims_mm: null, pockets: null, variants: ['6350','6550','6580'] }
    ]
  },
  {
    id: 3,
    name: 'RSM/Audio',
    items: [
      { desc: 'Windporting RSM, Small (IP54)', part: 'PMMN4024', impres: false, intel_audio: false, ai_noise: false, windporting: true, noise_cancel: false, full_duplex: false, vol_ctrl: false, prog_btn: null, audio_jack: true, ip: 'IP54', hazloc: 'UL', dims_mm: '55x60x27', variants: ['6350','6550','6580'] },
      { desc: 'IMPRES Windporting RSM, Small (IP54)', part: 'PMMN4025', impres: true, intel_audio: true, ai_noise: false, windporting: true, noise_cancel: false, full_duplex: false, vol_ctrl: false, prog_btn: null, audio_jack: true, ip: 'IP54', hazloc: 'UL', dims_mm: '55x60x27', variants: ['6350','6550','6580'] },
      { desc: 'Windporting RSM, Small, Submersible (IP57)', part: 'PMMN4040', impres: false, intel_audio: false, ai_noise: false, windporting: true, noise_cancel: false, full_duplex: false, vol_ctrl: false, prog_btn: null, audio_jack: true, ip: 'IP57', hazloc: 'UL', dims_mm: '55x60x27', variants: ['6350','6550','6580'] },
      { desc: 'IMPRES Windporting RSM, Large, Submersible (IP57)', part: 'PMMN4046', impres: true, intel_audio: false, ai_noise: false, windporting: true, noise_cancel: false, full_duplex: false, vol_ctrl: false, prog_btn: null, audio_jack: true, ip: 'IP57', hazloc: 'UL', dims_mm: '60x78x28', variants: ['6350','6550','6580'] },
      { desc: 'IMPRES Noise-Canceling RSM, Large (IP54)', part: 'PMMN4050', impres: true, intel_audio: false, ai_noise: false, windporting: false, noise_cancel: true, full_duplex: false, vol_ctrl: false, prog_btn: null, audio_jack: true, ip: 'IP54', hazloc: 'UL', dims_mm: '60x78x28', variants: ['6350','6550','6580'] },
      { desc: 'IMPRES INC Dual Mic Noise Suppression RSM, Submersible (IP57)', part: 'NNTN8382', impres: true, intel_audio: false, ai_noise: false, windporting: false, noise_cancel: true, full_duplex: false, vol_ctrl: false, prog_btn: null, audio_jack: true, ip: 'IP57', hazloc: 'UL', dims_mm: '60x78x28', variants: ['6350','6550','6580'] },
      { desc: 'IMPRES INC Dual Mic Noise Suppression RSM (IP54)', part: 'NNTN8383', impres: true, intel_audio: false, ai_noise: false, windporting: false, noise_cancel: true, full_duplex: false, vol_ctrl: false, prog_btn: null, audio_jack: true, ip: 'IP54', hazloc: 'UL', dims_mm: '60x78x28', variants: ['6350','6550','6580'] },
      { desc: 'IMPRES Windporting RSM (IP64)', part: 'PMMN4067', impres: true, intel_audio: false, ai_noise: false, windporting: true, noise_cancel: false, full_duplex: false, vol_ctrl: true, prog_btn: null, audio_jack: true, ip: 'IP64', hazloc: 'ATEX', dims_mm: '60x78x28', variants: ['6350','6550','6580'] },
      { desc: 'IMPRES ATEX Active Noise-Canceling RSM with Large Front PTT and Side PTT (IP67)', part: 'PMMN4094', impres: true, intel_audio: true, ai_noise: false, windporting: false, noise_cancel: true, full_duplex: false, vol_ctrl: true, prog_btn: 'Orange', audio_jack: true, ip: 'IP67', hazloc: 'ATEX', dims_mm: '68x94x29', variants: ['6350','6550','6580'] },
      { desc: 'IMPRES ATEX Omni RSM with Large Front PTT and Side PTT (IP67)', part: 'PMMN4110', impres: true, intel_audio: true, ai_noise: false, windporting: true, noise_cancel: false, full_duplex: false, vol_ctrl: true, prog_btn: 'Orange', audio_jack: true, ip: 'IP67', hazloc: 'ATEX', dims_mm: '68x94x29', variants: ['6350','6550','6580'] },
      { desc: 'IMPRES Active Noise-Canceling RSM with Large Front PTT and Side PTT (IP67)', part: 'PMMN4102', impres: true, intel_audio: true, ai_noise: false, windporting: false, noise_cancel: true, full_duplex: false, vol_ctrl: true, prog_btn: 'Orange', audio_jack: true, ip: 'IP67', hazloc: 'UL', dims_mm: '68x94x29', variants: ['6350','6550','6580'] },
      { desc: 'IMPRES Omni RSM with Large Front PTT and Side PTT (IP67)', part: 'PMMN4113', impres: true, intel_audio: true, ai_noise: false, windporting: true, noise_cancel: false, full_duplex: false, vol_ctrl: true, prog_btn: 'Orange', audio_jack: true, ip: 'IP67', hazloc: 'UL', dims_mm: '68x94x29', variants: ['6350','6550','6580'] },
      { desc: 'IMPRES Windporting RSM, Large, Submersible (IP68)', part: 'PMMN4099', impres: true, intel_audio: false, ai_noise: false, windporting: true, noise_cancel: false, full_duplex: false, vol_ctrl: false, prog_btn: null, audio_jack: true, ip: 'IP68', hazloc: 'UL', dims_mm: '60x78x28', variants: ['6350','6550','6580'] },
      // Public safety mics — UHF/VHF only (not 6580)
      { desc: 'IMPRES Windporting Public Safety Mic with 3.5mm Audio Jack, Large (IP54), 30" Cable (XPR 6350/6550 only)', part: 'PMMN4041', impres: true, intel_audio: false, ai_noise: false, windporting: true, noise_cancel: false, full_duplex: false, vol_ctrl: false, prog_btn: null, audio_jack: true, ip: 'IP54', hazloc: null, dims_mm: null, variants: ['6350','6550'] },
      { desc: 'IMPRES Windporting Public Safety Mic with 3.5mm Audio Jack, Large (IP54), 24" Cable (XPR 6350/6550 only)', part: 'PMMN4042', impres: true, intel_audio: false, ai_noise: false, windporting: true, noise_cancel: false, full_duplex: false, vol_ctrl: false, prog_btn: null, audio_jack: true, ip: 'IP54', hazloc: null, dims_mm: null, variants: ['6350','6550'] },
      { desc: 'IMPRES Windporting Public Safety Mic with 3.5mm Audio Jack, Large (IP54), 18" Cable (XPR 6350/6550 only)', part: 'PMMN4043', impres: true, intel_audio: false, ai_noise: false, windporting: true, noise_cancel: false, full_duplex: false, vol_ctrl: false, prog_btn: null, audio_jack: true, ip: 'IP54', hazloc: null, dims_mm: null, variants: ['6350','6550'] },
      { desc: 'IMPRES Windporting Public Safety Mic, Large, Submersible (IP57), 30" Cable (XPR 6350/6550 only)', part: 'PMMN4047', impres: true, intel_audio: false, ai_noise: false, windporting: true, noise_cancel: false, full_duplex: false, vol_ctrl: false, prog_btn: null, audio_jack: false, ip: 'IP57', hazloc: null, dims_mm: null, variants: ['6350','6550'] },
      { desc: 'IMPRES Windporting Public Safety Mic, Large, Submersible (IP57), 24" Cable (XPR 6350/6550 only)', part: 'PMMN4048', impres: true, intel_audio: false, ai_noise: false, windporting: true, noise_cancel: false, full_duplex: false, vol_ctrl: false, prog_btn: null, audio_jack: false, ip: 'IP57', hazloc: null, dims_mm: null, variants: ['6350','6550'] },
      { desc: 'IMPRES Windporting Public Safety Mic, Large, Submersible (IP57), 18" Cable (XPR 6350/6550 only)', part: 'PMMN4049', impres: true, intel_audio: false, ai_noise: false, windporting: true, noise_cancel: false, full_duplex: false, vol_ctrl: false, prog_btn: null, audio_jack: false, ip: 'IP57', hazloc: null, dims_mm: null, variants: ['6350','6550'] }
    ]
  },
  {
    id: '3b',
    name: 'RSM/Audio Replacements',
    items: [
      // RSM accessories with standard 3.5mm jack
      { desc: 'Replacement Coil Cord Kit for PMMN4024 and PMMN4040', part: 'RLN6074', variants: ['6350','6550','6580'] },
      { desc: 'Replacement Coil Cord Kit for PMMN4025, PMMN4046, and PMMN4050', part: 'RLN6075', variants: ['6350','6550','6580'] },
      { desc: 'Translucent Tube (RX only) for PMMN4094, PMMN4110, PMMN4102, PMMN4113', part: 'PMLN7188', variants: ['6350','6550','6580'] },
      { desc: 'One-Wire Flexible Ear Receiver, Black (for NNTN8383 only)', part: 'BDN6719', variants: ['6350','6550','6580'] },
      { desc: 'One-Wire Earpiece, Black (for NNTN8383 only)', part: 'BDN6726', variants: ['6350','6550','6580'] },
      // Surveillance accessory replacement kits
      { desc: 'Low Noise Kit with Translucent Tube and 1 Clear Rubber Eartip', part: 'RLN6242', variants: ['6350','6550','6580'] },
      { desc: 'Replacement Standard Clear Rubber Eartip, Pack of 50', part: 'RLN6282', variants: ['6350','6550','6580'] },
      { desc: 'Replacement Foam Plugs for RLN6242, NR 24dB, Pack of 50 pairs', part: '5080384F72', variants: ['6350','6550','6580'] },
      { desc: 'Low Noise Kit with 1 Clear Rubber Eartip', part: 'RLN5886', variants: ['6350','6550','6580'] },
      { desc: 'Replacement Standard Clear Rubber Eartip, Pack of 10', part: '67009254001', variants: ['6350','6550','6580'] },
      { desc: 'Replacement Quick Disconnect Translucent Tube with Clear Rubber Eartip (for PMLN5724/5726)', part: 'HKLN4608', variants: ['6350','6550','6580'] },
      { desc: 'Replacement Quick Disconnect Translucent Tube with Clear Rubber Eartip (for PMLN5957)', part: 'PMLN6175', variants: ['6350','6550','6580'] }
    ]
  },
  {
    id: 4,
    name: 'Surveillance/Earpieces',
    items: [
      { desc: '1-Wire Receive-Only Earpiece, Black', part: 'PMLN6125', impres: true, intel_audio: false, ai_noise: false, ear_type: 'Earpiece', mic_type: null, full_duplex: false, hazloc: 'UL', variants: ['6350','6550','6580'] },
      { desc: '1-Wire Receive-Only Earpiece, Beige', part: 'PMLN6126', impres: true, intel_audio: false, ai_noise: false, ear_type: 'Earpiece', mic_type: null, full_duplex: false, hazloc: 'UL', variants: ['6350','6550','6580'] },
      { desc: 'IMPRES 2-Wire Earhook with Earbud Earpiece, Black', part: 'PMLN6127', impres: true, intel_audio: true, ai_noise: false, ear_type: 'Earpiece', mic_type: null, full_duplex: false, hazloc: 'UL', variants: ['6350','6550','6580'] },
      { desc: 'IMPRES 2-Wire Earhook with Earbud Earpiece, Beige', part: 'PMLN6128', impres: true, intel_audio: true, ai_noise: false, ear_type: 'Earpiece', mic_type: null, full_duplex: false, hazloc: 'UL', variants: ['6350','6550','6580'] },
      { desc: '1-Wire Surveillance Kit with Translucent Tube, Black', part: 'NNTN8459', impres: false, intel_audio: false, ai_noise: false, ear_type: 'Clear rubber eartip', mic_type: null, full_duplex: false, hazloc: 'UL', variants: ['6350','6550','6580'] },
      { desc: 'IMPRES 2-Wire Surveillance Kit with Translucent Tube, Black', part: 'PMLN6129', impres: true, intel_audio: true, ai_noise: false, ear_type: 'Clear rubber eartip', mic_type: null, full_duplex: false, hazloc: 'UL', variants: ['6350','6550','6580'] },
      { desc: 'IMPRES 2-Wire Surveillance Kit with Translucent Tube, Beige', part: 'PMLN6130', impres: true, intel_audio: true, ai_noise: false, ear_type: 'Clear rubber eartip', mic_type: null, full_duplex: false, hazloc: 'UL', variants: ['6350','6550','6580'] },
      { desc: 'IMPRES 3-Wire Surveillance Kit with Translucent Tube, Black', part: 'PMLN6123', impres: true, intel_audio: true, ai_noise: false, ear_type: 'Clear rubber eartip', mic_type: null, full_duplex: false, hazloc: 'UL', variants: ['6350','6550','6580'] },
      { desc: 'IMPRES 3-Wire Surveillance Kit with Translucent Tube, Beige', part: 'PMLN6124', impres: true, intel_audio: true, ai_noise: false, ear_type: 'Clear rubber eartip', mic_type: null, full_duplex: false, hazloc: 'UL', variants: ['6350','6550','6580'] },
      { desc: '2-Wire Surveillance Kit with Translucent Tube, Black', part: 'PMLN7269', impres: false, intel_audio: false, ai_noise: false, ear_type: 'Clear rubber eartip', mic_type: null, full_duplex: false, hazloc: null, variants: ['6350','6550','6580'] },
      { desc: '2-Wire Surveillance Kit with Translucent Tube, Beige', part: 'PMLN7270', impres: false, intel_audio: false, ai_noise: false, ear_type: 'Clear rubber eartip', mic_type: null, full_duplex: false, hazloc: null, variants: ['6350','6550','6580'] },
      { desc: 'IMPRES 3-Wire Surveillance Kit with Quick Disconnect Translucent Tube, Black', part: 'PMLN6754', impres: true, intel_audio: true, ai_noise: false, ear_type: 'Clear rubber eartip', mic_type: null, full_duplex: false, hazloc: null, variants: ['6350','6550','6580'] },
      { desc: 'IMPRES 3-Wire Surveillance Kit with Quick Disconnect Translucent Tube, Beige', part: 'PMLN6755', impres: true, intel_audio: true, ai_noise: false, ear_type: 'Clear rubber eartip', mic_type: null, full_duplex: false, hazloc: null, variants: ['6350','6550','6580'] }
    ]
  },
  {
    id: 5,
    name: 'Headsets',
    items: [
      { desc: 'Heavy Duty Behind-the-Head Headset with Noise-Canceling Boom Microphone', part: 'PMLN6852', impres: true, headset_type: 'Behind-the-head', ear_style: 'Dual-muff', nrr_db: 24, mic_type: 'Boom', hazloc: null, variants: ['6350','6550','6580'] },
      { desc: 'Heavy Duty Over-the-Head Headset with Noise-Canceling Boom Microphone', part: 'PMLN7466', impres: true, headset_type: 'Over-the-head', ear_style: 'Dual-muff', nrr_db: 24, mic_type: 'Boom', hazloc: null, variants: ['6350','6550','6580'] },
      { desc: 'IMPRES Temple Transducer Headset', part: 'PMLN5101', impres: true, headset_type: 'Behind-the-head', ear_style: 'Bone conduction', nrr_db: null, mic_type: 'Boom', hazloc: null, variants: ['6350','6550','6580'] },
      { desc: 'Lightweight Over-the-Head Headset', part: 'RMN5058', impres: true, headset_type: 'Over-the-head', ear_style: 'Single-ear', nrr_db: null, mic_type: 'Boom', hazloc: 'UL', variants: ['6350','6550','6580'] },
      { desc: 'Heavy Duty Behind-the-Head Headset with Noise-Canceling Boom Microphone', part: 'PMLN6853', impres: true, headset_type: 'Behind-the-head', ear_style: 'Dual-muff', nrr_db: 24, mic_type: 'Boom', hazloc: 'UL', variants: ['6350','6550','6580'] },
      { desc: 'Heavy Duty Over-the-Head Headset with Noise-Canceling Boom Microphone', part: 'PMLN7467', impres: true, headset_type: 'Over-the-head', ear_style: 'Dual-muff', nrr_db: 24, mic_type: 'Boom', hazloc: 'UL', variants: ['6350','6550','6580'] },
      // Tactical
      { desc: 'Tactical PTT Only Interface Module', part: 'PMLN6827', impres: false, headset_type: 'Interface module', ear_style: null, nrr_db: null, mic_type: null, hazloc: null, variants: ['6350','6550','6580'] },
      { desc: 'Tactical Temple Transducer with Noise-Canceling Boom Microphone (requires PMLN6827)', part: 'PMLN6833', impres: false, headset_type: 'Over-the-head', ear_style: 'Bone conduction', nrr_db: null, mic_type: 'Boom', hazloc: null, variants: ['6350','6550','6580'] },
      { desc: 'Tactical Remote Body PTT (for use with PMLN6827)', part: 'PMLN6767', impres: false, headset_type: 'PTT accessory', ear_style: null, nrr_db: null, mic_type: null, hazloc: null, variants: ['6350','6550','6580'] },
      { desc: 'Tactical Remote Ring PTT (for use with PMLN6827)', part: 'PMLN6830', impres: false, headset_type: 'PTT accessory', ear_style: null, nrr_db: null, mic_type: null, hazloc: null, variants: ['6350','6550','6580'] },
      // Mag One
      { desc: 'Mag One Lightweight Over-the-Head Headset', part: 'PMLN5974', impres: false, headset_type: 'Over-the-head', ear_style: 'Single-ear', nrr_db: null, mic_type: 'Boom', hazloc: null, variants: ['6350','6550','6580'] },
      { desc: 'Mag One Ultra-Lite Behind-the-Head Headset', part: 'PMLN5979', impres: false, headset_type: 'Behind-the-head', ear_style: 'Single-ear', nrr_db: null, mic_type: 'Boom', hazloc: null, variants: ['6350','6550','6580'] },
      // 3M Peltor
      { desc: '3M Peltor MT Series Over-the-Head Headset, Direct Radio Connect', part: 'RMN5137', impres: false, headset_type: 'Over-the-head', ear_style: 'Dual-ear', nrr_db: 25, mic_type: 'Boom', hazloc: 'UL', variants: ['6350','6550','6580'] },
      { desc: '3M Peltor MT Series Neckband Headset, Direct Radio Connect', part: 'RMN5138', impres: false, headset_type: 'Neckband', ear_style: 'Dual-ear', nrr_db: 24, mic_type: 'Boom', hazloc: 'UL', variants: ['6350','6550','6580'] },
      { desc: '3M Peltor MT Series Hard Hat Attached Headset, Direct Radio Connect', part: 'RMN5139', impres: false, headset_type: 'Hard hat attached', ear_style: 'Dual-ear', nrr_db: 21, mic_type: 'Boom', hazloc: 'UL', variants: ['6350','6550','6580'] },
      { desc: '3M Peltor TacticalPro Series Neckband Headset with Nexus Connector (limited availability)', part: 'RMN5135', impres: false, headset_type: 'Neckband', ear_style: 'Dual-ear', nrr_db: 25, mic_type: 'Boom', hazloc: null, variants: ['6350','6550','6580'] },
      { desc: '3M Peltor PTT Nexus Adapter (requires headset)', part: 'PMLN6095', impres: false, headset_type: 'PTT adapter', ear_style: null, nrr_db: null, mic_type: null, hazloc: null, variants: ['6350','6550','6580'] }
    ]
  },
  {
    id: 6,
    name: 'Carry',
    items: [
      // ATEX carry cases
      { desc: 'Hard Leather Case with 2.5" Swivel Belt Loop, Non-Display ATEX Model', part: 'PMLN6096', material: 'Hard leather', belt_sz: '2.5', swivel: 'Swivel', display: 'Non-display', d_rings: true, variants: ['6350','6550','6580'] },
      { desc: 'Hard Leather Case with 2.5" Swivel Belt Loop, Display ATEX Model', part: 'PMLN6097', material: 'Hard leather', belt_sz: '2.5', swivel: 'Swivel', display: 'Display', d_rings: true, variants: ['6350','6550','6580'] },
      { desc: 'Soft Leather Case with 2.5" Swivel Belt Loop, Non-Display ATEX Model', part: 'PMLN6098', material: 'Soft leather', belt_sz: '2.5', swivel: 'Swivel', display: 'Non-display', d_rings: true, variants: ['6350','6550','6580'] },
      { desc: 'Soft Leather Case with 2.5" Swivel Belt Loop, Display ATEX Model', part: 'PMLN6099', material: 'Soft leather', belt_sz: '2.5', swivel: 'Swivel', display: 'Display', d_rings: true, variants: ['6350','6550','6580'] },
      // Standard carry
      { desc: 'Synthetic Leather Case with 3" Fixed Belt Loop, Standard Battery', part: 'PMLN7536', material: 'Synthetic leather', belt_sz: '3', swivel: 'Fixed', display: 'Display/Non-display', d_rings: true, variants: ['6350','6550','6580'] },
      { desc: 'Synthetic Leather Case with 3" Fixed Belt Loop, High Capacity Battery', part: 'PMLN7537', material: 'Synthetic leather', belt_sz: '3', swivel: 'Fixed', display: 'Display/Non-display', d_rings: true, variants: ['6350','6550','6580'] },
      { desc: 'Soft Leather Case with 2.5" Swivel Belt Loop (Display)', part: 'PMLN5016', material: 'Soft leather', belt_sz: '2.5', swivel: 'Swivel', display: 'Display', d_rings: true, variants: ['6350','6550','6580'] },
      { desc: 'Soft Leather Case with 3" Swivel Belt Loop (Display)', part: 'PMLN5017', material: 'Soft leather', belt_sz: '3', swivel: 'Swivel', display: 'Display', d_rings: true, variants: ['6350','6550','6580'] },
      { desc: 'Soft Leather Case with 3" Fixed Belt Loop (Display)', part: 'PMLN5018', material: 'Soft leather', belt_sz: '3', swivel: 'Fixed', display: 'Display', d_rings: true, variants: ['6350','6550','6580'] },
      { desc: 'Nylon Case with 3" Fixed Belt Loop (Non-Display)', part: 'PMLN5870', material: 'Nylon', belt_sz: '3', swivel: 'Fixed', display: 'Non-display', d_rings: true, variants: ['6350','6550','6580'] },
      { desc: 'Hard Leather Case with 2.5" Swivel Belt Loop (Non-Display)', part: 'PMLN5868', material: 'Hard leather', belt_sz: '2.5', swivel: 'Swivel', display: 'Non-display', d_rings: true, variants: ['6350','6550','6580'] },
      { desc: 'Hard Leather Case with 3" Swivel Belt Loop (Non-Display)', part: 'PMLN5866', material: 'Hard leather', belt_sz: '3', swivel: 'Swivel', display: 'Non-display', d_rings: true, variants: ['6350','6550','6580'] },
      { desc: 'Hard Leather Case with 3" Fixed Belt Loop (Non-Display)', part: 'PMLN5864', material: 'Hard leather', belt_sz: '3', swivel: 'Fixed', display: 'Non-display', d_rings: true, variants: ['6350','6550','6580'] },
      { desc: 'Soft Leather Case with 2.5" Swivel Belt Loop (Non-Display)', part: 'PMLN5025', material: 'Soft leather', belt_sz: '2.5', swivel: 'Swivel', display: 'Non-display', d_rings: true, variants: ['6350','6550','6580'] },
      { desc: 'Soft Leather Case with 3" Swivel Belt Loop (Non-Display)', part: 'PMLN5026', material: 'Soft leather', belt_sz: '3', swivel: 'Swivel', display: 'Non-display', d_rings: true, variants: ['6350','6550','6580'] },
      { desc: 'Soft Leather Case with 3" Fixed Belt Loop (Non-Display)', part: 'PMLN5027', material: 'Soft leather', belt_sz: '3', swivel: 'Fixed', display: 'Non-display', d_rings: true, variants: ['6350','6550','6580'] },
      { desc: 'Nylon Case with 3" Fixed Belt Loop (Display)', part: 'PMLN5015', material: 'Nylon', belt_sz: '3', swivel: 'Fixed', display: 'Display', d_rings: true, variants: ['6350','6550','6580'] },
      { desc: 'Hard Leather Case with 2.5" Swivel Belt Loop (Display)', part: 'PMLN5019', material: 'Hard leather', belt_sz: '2.5', swivel: 'Swivel', display: 'Display', d_rings: true, variants: ['6350','6550','6580'] },
      { desc: 'Hard Leather Case with 3" Swivel Belt Loop (Display)', part: 'PMLN5020', material: 'Hard leather', belt_sz: '3', swivel: 'Swivel', display: 'Display', d_rings: true, variants: ['6350','6550','6580'] },
      { desc: 'Hard Leather Case with 3" Fixed Belt Loop (Display)', part: 'PMLN5021', material: 'Hard leather', belt_sz: '3', swivel: 'Fixed', display: 'Display', d_rings: true, variants: ['6350','6550','6580'] },
      { desc: 'Hard Leather Case with 2.5" Swivel Belt Loop (Non-Display)', part: 'PMLN5028', material: 'Hard leather', belt_sz: '2.5', swivel: 'Swivel', display: 'Non-display', d_rings: true, variants: ['6350','6550','6580'] },
      { desc: 'Hard Leather Case with 3" Swivel Belt Loop (Non-Display)', part: 'PMLN5029', material: 'Hard leather', belt_sz: '3', swivel: 'Swivel', display: 'Non-display', d_rings: true, variants: ['6350','6550','6580'] },
      { desc: 'Hard Leather Case with 3" Fixed Belt Loop (Non-Display)', part: 'PMLN5030', material: 'Hard leather', belt_sz: '3', swivel: 'Fixed', display: 'Non-display', d_rings: true, variants: ['6350','6550','6580'] },
      // Full keypad model cases
      { desc: 'Nylon Case with 3" Fixed Belt Loop (Full Keypad)', part: 'PMLN5844', material: 'Nylon', belt_sz: '3', swivel: 'Fixed', display: 'Display', d_rings: true, variants: ['6350','6550','6580'] },
      { desc: 'Hard Leather Case with 2.5" Swivel Belt Loop (Full Keypad)', part: 'PMLN5842', material: 'Hard leather', belt_sz: '2.5', swivel: 'Swivel', display: 'Display', d_rings: true, variants: ['6350','6550','6580'] },
      { desc: 'Hard Leather Case with 3" Swivel Belt Loop (Full Keypad)', part: 'PMLN5840', material: 'Hard leather', belt_sz: '3', swivel: 'Swivel', display: 'Display', d_rings: true, variants: ['6350','6550','6580'] },
      { desc: 'Hard Leather Case with 3" Fixed Belt Loop (Full Keypad)', part: 'PMLN5838', material: 'Hard leather', belt_sz: '3', swivel: 'Fixed', display: 'Display', d_rings: true, variants: ['6350','6550','6580'] },
      { desc: 'Nylon Case with 3" Fixed Belt Loop (Non-Display)', part: 'PMLN5845', material: 'Nylon', belt_sz: '3', swivel: 'Fixed', display: 'Non-display', d_rings: true, variants: ['6350','6550','6580'] },
      { desc: 'Hard Leather Case with 2.5" Swivel Belt Loop (Non-Display)', part: 'PMLN5843', material: 'Hard leather', belt_sz: '2.5', swivel: 'Swivel', display: 'Non-display', d_rings: true, variants: ['6350','6550','6580'] },
      { desc: 'Hard Leather Case with 3" Swivel Belt Loop (Non-Display)', part: 'PMLN5846', material: 'Hard leather', belt_sz: '3', swivel: 'Swivel', display: 'Non-display', d_rings: true, variants: ['6350','6550','6580'] },
      { desc: 'Hard Leather Case with 3" Fixed Belt Loop (Non-Display)', part: 'PMLN5839', material: 'Hard leather', belt_sz: '3', swivel: 'Fixed', display: 'Non-display', d_rings: true, variants: ['6350','6550','6580'] },
      // Clips and straps
      { desc: '2.5" Belt Clip for ATEX Models', part: 'PMLN6086', material: 'Plastic', belt_sz: '2.5', swivel: null, display: null, d_rings: false, variants: ['6350','6550','6580'] },
      { desc: 'Silent Alert Belt Clip for use with IMPRES Battery PMNN4488', part: 'PMLN7296', material: 'Plastic', belt_sz: null, swivel: null, display: null, d_rings: false, variants: ['6350','6550','6580'] },
      { desc: 'Spring Action 2" Belt Clip', part: 'PMLN4651', material: 'Plastic', belt_sz: '2', swivel: 'Fixed', display: 'Display/Non-display', d_rings: false, variants: ['6350','6550','6580'] },
      { desc: 'Spring Action 2.5" Belt Clip', part: 'PMLN7008', material: 'Plastic', belt_sz: '2.5', swivel: 'Fixed', display: 'Display/Non-display', d_rings: false, variants: ['6350','6550','6580'] },
      { desc: 'Replacement 2.5" Swivel Belt Loop', part: 'PMLN5610', material: 'Hard leather', belt_sz: '2.5', swivel: 'Swivel', display: 'Display/Non-display', d_rings: false, variants: ['6350','6550','6580'] },
      { desc: 'Replacement 3" Leather Swivel Belt Loop', part: 'PMLN5611', material: 'Hard leather', belt_sz: '3', swivel: 'Swivel', display: 'Display/Non-display', d_rings: false, variants: ['6350','6550','6580'] },
      { desc: 'Replacement 2.5" Leather Swivel Belt Loop', part: 'PMLN5022', material: 'Hard leather', belt_sz: '2.5', swivel: 'Swivel', display: null, d_rings: false, variants: ['6350','6550','6580'] },
      { desc: 'Replacement 3" Leather Swivel Belt Loop', part: 'PMLN5023', material: 'Hard leather', belt_sz: '3', swivel: 'Swivel', display: null, d_rings: false, variants: ['6350','6550','6580'] },
      { desc: 'Waterproof Bag with Large Strap', part: 'HLN9985', material: null, belt_sz: null, swivel: null, display: null, d_rings: false, variants: ['6350','6550','6580'] },
      { desc: 'Universal Chest Pack with Radio Holder, Pen Holder and Velcro Pouch', part: 'HLN6602', material: null, belt_sz: null, swivel: null, display: null, d_rings: false, variants: ['6350','6550','6580'] },
      { desc: 'Adjustable Nylon Carrying Strap', part: 'NTN5243', material: 'Nylon', belt_sz: null, swivel: null, display: null, d_rings: false, variants: ['6350','6550','6580'] },
      { desc: 'Leather Radio Strap', part: 'RLN6486', material: 'Leather', belt_sz: null, swivel: null, display: null, d_rings: false, variants: ['6350','6550','6580'] },
      { desc: 'Leather Radio Strap \u2013 XL', part: 'RLN6487', material: 'Leather', belt_sz: null, swivel: null, display: null, d_rings: false, variants: ['6350','6550','6580'] },
      { desc: 'Anti-Sway Strap for Leather Radio Straps', part: 'RLN6488', material: 'Leather', belt_sz: null, swivel: null, display: null, d_rings: false, variants: ['6350','6550','6580'] }
    ]
  },
  {
    id: 7,
    name: 'Antennas',
    items: [
      // UHF/GPS folded monopole whip — all variants
      { desc: 'UHF/GPS Folded Monopole Whip Antenna, 403-433 MHz', part: 'PMAE4018', band: 'UHF', freq_mhz: '403-433', len_cm: 14, ant_type: 'Whip', variants: ['6350','6550','6580'] },
      { desc: 'UHF/GPS Folded Monopole Whip Antenna, 430-470 MHz', part: 'PMAE4024', band: 'UHF', freq_mhz: '430-470', len_cm: 14, ant_type: 'Whip', variants: ['6350','6550','6580'] },
      { desc: 'UHF/GPS Folded Monopole Whip Antenna, 450-495 MHz', part: 'PMAE4050', band: 'UHF', freq_mhz: '450-495', len_cm: 14, ant_type: 'Whip', variants: ['6350','6550','6580'] },
      { desc: 'UHF/GPS Folded Monopole Whip Antenna, 495-527 MHz', part: 'PMAE4051', band: 'UHF', freq_mhz: '495-527', len_cm: 14, ant_type: 'Whip', variants: ['6350','6550','6580'] },
      // VHF/GPS helical whip
      { desc: 'VHF/GPS Helical Whip Antenna, 136-147 MHz', part: 'PMAD4067', band: 'VHF', freq_mhz: '136-147', len_cm: 16, ant_type: 'Helical', variants: ['6350','6550'] },
      { desc: 'VHF/GPS Helical Whip Antenna, 147-160 MHz', part: 'PMAD4068', band: 'VHF', freq_mhz: '147-160', len_cm: 16, ant_type: 'Helical', variants: ['6350','6550'] },
      { desc: 'VHF/GPS Helical Whip Antenna, 160-174 MHz', part: 'PMAD4069', band: 'VHF', freq_mhz: '160-174', len_cm: 16, ant_type: 'Helical', variants: ['6350','6550'] },
      // 800/900 MHz — 6580 only
      { desc: 'GPS/800/900 MHz Combination Helical Antenna, 806-941 MHz (XPR 6580 only)', part: 'PMAF4003', band: '800/900 MHz', freq_mhz: '806-941', len_cm: 18, ant_type: 'Helical', variants: ['6580'] },
      { desc: 'Whip Antenna 806-870 MHz 1/2 Wave (XPR 6580 only)', part: 'NAF5087', band: '800/900 MHz', freq_mhz: '806-870', len_cm: 7, ant_type: 'Whip', variants: ['6580'] },
      { desc: 'Whip Antenna 896-941 MHz 1/2 Wave (XPR 6580 only)', part: 'NAF5088', band: '800/900 MHz', freq_mhz: '896-941', len_cm: 6.6, ant_type: 'Whip', variants: ['6580'] },
      // UHF non-GPS wideband whip
      { desc: 'UHF Wideband Flexible Whip Antenna, 403-470 MHz', part: 'PMAE4022', band: 'UHF', freq_mhz: '403-470', len_cm: 16, ant_type: 'Whip', variants: ['6350','6550'] },
      { desc: 'UHF Wideband Flexible Whip Antenna, 450-512 MHz', part: 'PMAE4049', band: 'UHF', freq_mhz: '450-512', len_cm: 16, ant_type: 'Whip', variants: ['6350','6550'] },
      { desc: 'VHF Wideband Flexible Whip Antenna, 136-174 MHz', part: 'PMAD4124', band: 'VHF', freq_mhz: '136-174', len_cm: 21, ant_type: 'Whip', variants: ['6350','6550'] },
      // UHF/GPS stubby
      { desc: 'UHF/GPS Stubby Antenna, 403-433 MHz', part: 'PMAE4021', band: 'UHF', freq_mhz: '403-433', len_cm: 9, ant_type: 'Stubby', variants: ['6350','6550'] },
      { desc: 'UHF/GPS Stubby Antenna, 430-470 MHz', part: 'PMAE4023', band: 'UHF', freq_mhz: '430-470', len_cm: 9, ant_type: 'Stubby', variants: ['6350','6550'] },
      { desc: 'UHF/GPS Stubby Antenna, 450-512 MHz', part: 'PMAE4048', band: 'UHF', freq_mhz: '450-512', len_cm: 9, ant_type: 'Stubby', variants: ['6350','6550'] },
      // VHF stubby
      { desc: 'VHF Stubby Antenna, 136-147 MHz', part: 'PMAD4093', band: 'VHF', freq_mhz: '136-147', len_cm: 11, ant_type: 'Stubby', variants: ['6350','6550'] },
      { desc: 'VHF Stubby Antenna, 147-160 MHz', part: 'PMAD4094', band: 'VHF', freq_mhz: '147-160', len_cm: 11, ant_type: 'Stubby', variants: ['6350','6550'] },
      { desc: 'VHF Stubby Antenna, 160-174 MHz', part: 'PMAD4095', band: 'VHF', freq_mhz: '160-174', len_cm: 11, ant_type: 'Stubby', variants: ['6350','6550'] },
      // Public safety mic antennas — 6350/6550 only
      { desc: 'UHF Public Safety Microphone Antenna, 403-433 MHz (XPR 6350/6550 only)', part: 'PMAE4046', band: 'UHF', freq_mhz: '403-433', len_cm: 9, ant_type: 'Stubby', variants: ['6350','6550'] },
      { desc: 'UHF Public Safety Microphone Antenna, 430-470 MHz (XPR 6350/6550 only)', part: 'PMAE4047', band: 'UHF', freq_mhz: '430-470', len_cm: 9, ant_type: 'Stubby', variants: ['6350','6550'] },
      { desc: 'VHF Public Safety Microphone Antenna, 136-153 MHz (XPR 6350/6550 only)', part: 'PMAD4087', band: 'VHF', freq_mhz: '136-153', len_cm: 11, ant_type: 'Whip', variants: ['6350','6550'] },
      { desc: 'VHF Public Safety Microphone Antenna, 150-174 MHz (XPR 6350/6550 only)', part: 'PMAD4086', band: 'VHF', freq_mhz: '150-174', len_cm: 11, ant_type: 'Whip', variants: ['6350','6550'] }
    ]
  },
  { id: 8, name: 'Cables', items: [
      { desc: 'Portable Programming Cable (USB) for XPR 6000/7000 Series', part: 'PMKN4012', variants: ['6350','6550','6580'] },
      { desc: 'Programming, Test, and Alignment Cable for XPR 6000/7000 Series', part: 'PMKN4013', variants: ['6350','6550','6580'] }
    ]
  },
  {
    id: 9,
    name: 'Screen Protectors',
    items: [
      // Screen protectors for XPR 6000 not explicitly listed in PDF — PENDING
    ]
  },
  {
    id: 11,
    name: 'IMPRES Tools',
    items: [
      { desc: 'IMPRES Battery Fleet Management License Key, NA/CAN', part: 'HKVN4036', variants: ['6350','6550','6580'] },
      { desc: 'IMPRES Battery Fleet Management License Key, EMEA', part: 'HKVN4037', variants: ['6350','6550','6580'] },
      { desc: 'IMPRES Battery Fleet Management License Key, LA', part: 'HKVN4038', variants: ['6350','6550','6580'] },
      { desc: 'IMPRES Battery Fleet Management License Key, Asia', part: 'HKVN4039', variants: ['6350','6550','6580'] }
    ]
  },
  {
    id: 12,
    name: 'Bluetooth',
    items: [
      // External adapters required — XPR 6000 has no embedded BT
      { desc: 'Operations Critical Wireless Bluetooth Adapter (required for XPR 6000)', part: 'PMLN5712', ear_type: null, mic_type: null, ptt: true, talk_time_hr: 30, charge_time_hr: null, weight_g: null, variants: ['6350','6550','6580'] },
      { desc: 'Enhanced Operations Critical Wireless Adapter with Touch Pairing (required for XPR 6000)', part: 'PMLN5993', ear_type: null, mic_type: null, ptt: true, talk_time_hr: 35, charge_time_hr: null, weight_g: null, variants: ['6350','6550','6580'] },
      // RSM wireless
      { desc: 'Operations Critical Wireless RSM with Battery and Belt Clip', part: 'RLN6561', ear_type: null, mic_type: 'Omni directional, windporting equivalent', ptt: true, talk_time_hr: 28, charge_time_hr: 3, weight_g: 158, variants: ['6350','6550','6580'] },
      { desc: 'Operations Critical Wireless RSM with Battery, Belt Clip and Dual Unit Charger (US Plug)', part: 'RLN6562', ear_type: null, mic_type: 'Omni directional, windporting equivalent', ptt: true, talk_time_hr: 28, charge_time_hr: 3, weight_g: 158, variants: ['6350','6550','6580'] },
      { desc: 'Operations Critical Wireless RSM with Battery, Belt Clip and Dual Unit Charger (AU/NZ Plug)', part: 'PMLN7669', ear_type: null, mic_type: 'Omni directional, windporting equivalent', ptt: true, talk_time_hr: 28, charge_time_hr: 3, weight_g: 158, variants: ['6350','6550','6580'] },
      // XBT headsets
      { desc: 'XBT Operations Critical Wireless Behind-the-Neck Headset', part: 'RLN6490', ear_type: 'Dual-muff', mic_type: 'Boom', ptt: true, talk_time_hr: 22, charge_time_hr: 7, weight_g: 429, variants: ['6350','6550','6580'] },
      { desc: 'XBT Operations Critical Wireless Headband Style Headset', part: 'RLN6491', ear_type: 'Dual-muff', mic_type: 'Boom', ptt: true, talk_time_hr: 22, charge_time_hr: 7, weight_g: 422, variants: ['6350','6550','6580'] },
      // Earpieces and PTT pods
      { desc: 'Operations Critical Wireless Earpiece with 12" Cable (with US/JP Charger)', part: 'NNTN8125', ear_type: 'Over-the-ear (CommPort)', mic_type: 'Directional', ptt: true, talk_time_hr: 10, charge_time_hr: 3, weight_g: 43, variants: ['6350','6550','6580'] },
      { desc: 'Operations Critical Wireless Earpiece with 12" Cable (without Charger)', part: 'NNTN8189', ear_type: null, mic_type: null, ptt: true, talk_time_hr: 10, charge_time_hr: 3, weight_g: 43, variants: ['6350','6550','6580'] },
      { desc: 'Operations Critical Wireless PTT Pod (with US Charger)', part: 'NNTN8127', ear_type: null, mic_type: null, ptt: true, talk_time_hr: 10, charge_time_hr: 3, weight_g: 43, variants: ['6350','6550','6580'] },
      { desc: 'Operations Critical Wireless PTT Pod (without Charger)', part: 'NNTN8191', ear_type: null, mic_type: null, ptt: true, talk_time_hr: 10, charge_time_hr: 3, weight_g: 43, variants: ['6350','6550','6580'] },
      // Enhanced ops critical
      { desc: 'Enhanced Operations Critical Wireless Earpiece with 12" Cable and PTT Pod', part: 'NTN2570', ear_type: 'Over-the-ear (CommPort)', mic_type: 'Directional', ptt: true, talk_time_hr: 10, charge_time_hr: 3, weight_g: 43, variants: ['6350','6550','6580'] },
      { desc: 'Enhanced Operations Critical Wireless PTT Pod', part: 'NTN2571', ear_type: null, mic_type: null, ptt: true, talk_time_hr: 10, charge_time_hr: 3, weight_g: 43, variants: ['6350','6550','6580'] },
      // BT accessory kits
      { desc: 'Bluetooth Accessory Kit with Flexible Earpiece, BT Pod and Charging Cradle (US Plug)', part: 'RLN6500', ear_type: 'Over-the-ear (swivel)', mic_type: 'In-line', ptt: false, talk_time_hr: 8, charge_time_hr: null, weight_g: 18, variants: ['6350','6550','6580'] },
      { desc: 'Bluetooth Accessory Kit with Flexible Earpiece, BT Pod and Charging Cradle (ARG Plug)', part: 'RLN6502', ear_type: 'Over-the-ear (swivel)', mic_type: 'In-line', ptt: false, talk_time_hr: 8, charge_time_hr: null, weight_g: 18, variants: ['6350','6550','6580'] },
      { desc: 'Bluetooth Accessory Kit with Flexible Earpiece, BT Pod and Charging Cradle (EURO Plug)', part: 'RLN6503', ear_type: 'Over-the-ear (swivel)', mic_type: 'In-line', ptt: false, talk_time_hr: 8, charge_time_hr: null, weight_g: 18, variants: ['6350','6550','6580'] },
      { desc: 'Bluetooth Accessory Kit with Flexible Earpiece, BT Pod and Charging Cradle (BZL Plug)', part: 'RLN6504', ear_type: 'Over-the-ear (swivel)', mic_type: 'In-line', ptt: false, talk_time_hr: 8, charge_time_hr: null, weight_g: 18, variants: ['6350','6550','6580'] },
      { desc: 'Operations Critical Wireless Bluetooth Earpiece with PTT (limited availability)', part: 'PMLN7851', ear_type: 'Over-the-ear (swivel)', mic_type: 'Boom', ptt: true, talk_time_hr: 8, charge_time_hr: 3, weight_g: 23, variants: ['6350','6550','6580'] },
      { desc: 'Bluetooth Accessory Kit with Swivel Earpiece and Battery Clip', part: 'PMLN6462', ear_type: 'Over-the-ear (swivel)', mic_type: 'In-line', ptt: false, talk_time_hr: 8, charge_time_hr: null, weight_g: 18, variants: ['6350','6550','6580'] },
      { desc: 'Bluetooth Accessory Kit with Swivel Earpiece and Battery Clip', part: 'PMLN6463', ear_type: 'Over-the-ear (swivel)', mic_type: 'In-line', ptt: false, talk_time_hr: 8, charge_time_hr: null, weight_g: 18, variants: ['6350','6550','6580'] },
      { desc: 'Bluetooth Accessory Kit with Flexible Earpiece, BT Pod and Charging Cradle', part: 'PMLN7181', ear_type: 'Over-the-ear (swivel)', mic_type: 'Boom', ptt: false, talk_time_hr: 8, charge_time_hr: null, weight_g: 18, variants: ['6350','6550','6580'] },
      { desc: 'Bluetooth Accessory Kit with Flexible Earpiece, BT Pod and Charging Cradle (US Plug)', part: 'RLN6556', ear_type: 'Over-the-ear (swivel)', mic_type: 'Boom', ptt: false, talk_time_hr: 8, charge_time_hr: null, weight_g: 18, variants: ['6350','6550','6580'] },
      // Wireless surveillance / earbuds
      { desc: 'Operations Critical Wireless 1-Wire Surveillance Kit with Translucent Tube', part: 'PMLN7052', ear_type: 'Clear rubber eartip', mic_type: 'In-line', ptt: true, talk_time_hr: null, charge_time_hr: null, weight_g: null, variants: ['6350','6550','6580'] },
      { desc: 'Operations Critical Wireless Earbud with 11.5" Cable', part: 'NNTN8294', ear_type: 'Earbud', mic_type: 'In-line', ptt: true, talk_time_hr: 10, charge_time_hr: null, weight_g: null, variants: ['6350','6550','6580'] },
      { desc: 'Operations Critical Wireless Earbud with 45" Cable', part: 'NNTN8295', ear_type: 'Earbud', mic_type: 'In-line', ptt: true, talk_time_hr: 10, charge_time_hr: null, weight_g: null, variants: ['6350','6550','6580'] },
      { desc: 'Wireless Covert Kit (2 sets 2-wire earbud, 1 black single-wire earbud, 3.5mm adapter)', part: 'NNTN8296', ear_type: 'Earbud', mic_type: 'In-line', ptt: true, talk_time_hr: null, charge_time_hr: null, weight_g: null, variants: ['6350','6550','6580'] },
      // Completely discreet — requires PMLN5993 Enhanced adapter
      { desc: 'Completely Discreet Earpiece Kit (includes RLN4920 inductive neckloop and RLN4921 phonito) — use with PMLN5993', part: 'PMLN7696', ear_type: 'Completely discreet', mic_type: null, ptt: true, talk_time_hr: null, charge_time_hr: null, weight_g: null, variants: ['6350','6550','6580'] },
      { desc: 'Wireless Neckloop Y-Adapter and Retention Hook — use with PMLN5993', part: 'NNTN8385', ear_type: null, mic_type: null, ptt: true, talk_time_hr: null, charge_time_hr: null, weight_g: null, variants: ['6350','6550','6580'] }
    ]
  }
];

window.RADIOS_DATA = window.RADIOS_DATA || {};
window.RADIOS_DATA['xpr6000'] = XPR6000_CATEGORIES;
