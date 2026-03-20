// dp-atex-data.js — DP ATEX Series (DP4000 EX) accessory data
// Source: MOTOTRBO Professional Tier Accessory Catalog (PDF verified Mar 17 2026)
// Variants: 4400e, 4600e, 4800e

const DPATEX_CATEGORIES = [

  // ── CATEGORY 1: BATTERIES ──────────────────────────────────────────────────
  {
    id: 'batteries',
    label: 'Batteries',
    columns: ['Description','Part Number','IMPRES','Chemistry','Typical Capacity (mAh)','Dimensions (mm)','Weight','HazLoc','IP Rating','Operating Temp'],
    items: [
      {
        desc: 'IMPRES Li-Ion 2075mAh IP67 ATEX/IECEx Battery',
        part: 'NNTN8359',
        impres: true,
        chem: 'Li-Ion',
        capacity_mah: 2075,
        dims_mm: '135 x 57 x 23',
        weight_g: 220,
        hazloc: 'ATEX',
        ip: 'IP67',
        op_temp: '-10\u00b0C to +50\u00b0C',
        variants: ['4400e','4600e','4800e']
      },
      {
        desc: 'IMPRES Li-Ion 2075mAh IP67 CSA157 Battery (CSA157)',
        part: 'NNTN8386',
        impres: true,
        chem: 'Li-Ion',
        capacity_mah: 2075,
        dims_mm: '135 x 57 x 23',
        weight_g: 220,
        hazloc: 'CSA',
        ip: 'IP67',
        op_temp: '-10\u00b0C to +50\u00b0C',
        variants: ['4400e','4600e','4800e']
      }
    ]
  },

  // ── CATEGORY 2: CHARGERS ───────────────────────────────────────────────────
  {
    id: 'chargers',
    label: 'Chargers',
    columns: ['Description','Part Number','IMPRES','Chemistry','Power Source','Dimensions (mm)','Pockets'],
    items: [
      // Single-unit IMPRES chargers — shared with XPR 6000/7000/3000/DP4000 EX per PDF
      {
        desc: 'IMPRES Single-Unit Charger, US/CAN Plug',
        part: 'PMPN4576A',
        impres: true,
        chem: 'Li-Ion, NiMH',
        pwr_src: '120 VAC',
        dims_mm: '51 x 88 x 94',
        pockets: 1,
        variants: ['4400e','4600e','4800e']
      },
      {
        desc: 'IMPRES Single-Unit Charger, ARG Plug',
        part: 'PMPN4573A',
        impres: true,
        chem: 'Li-Ion, NiMH',
        pwr_src: '240 VAC',
        dims_mm: '51 x 88 x 94',
        pockets: 1,
        variants: ['4400e','4600e','4800e']
      },
      {
        desc: 'IMPRES Single-Unit Charger, BRZ Plug',
        part: 'PMPN4575A',
        impres: true,
        chem: 'Li-Ion, NiMH',
        pwr_src: '100-240 VAC',
        dims_mm: '51 x 88 x 94',
        pockets: 1,
        variants: ['4400e','4600e','4800e']
      },
      {
        desc: 'IMPRES Single-Unit Charger, UK Plug',
        part: 'PMPN4572A',
        impres: true,
        chem: 'Li-Ion, NiMH',
        pwr_src: '240 VAC',
        dims_mm: '51 x 88 x 94',
        pockets: 1,
        variants: ['4400e','4600e','4800e']
      },
      {
        desc: 'IMPRES Single-Unit Charger, EURO Plug',
        part: 'PMPN4577A',
        impres: true,
        chem: 'Li-Ion, NiMH',
        pwr_src: '240 VAC',
        dims_mm: '51 x 88 x 94',
        pockets: 1,
        variants: ['4400e','4600e','4800e']
      },
      {
        desc: 'IMPRES Single-Unit Charger, AU/NZ Plug',
        part: 'PMPN4571A',
        impres: true,
        chem: 'Li-Ion, NiMH',
        pwr_src: '240 VAC',
        dims_mm: '51 x 88 x 94',
        pockets: 1,
        variants: ['4400e','4600e','4800e']
      },
      {
        desc: 'IMPRES Single-Unit Charger, JAP Plug',
        part: 'PMPN4578A',
        impres: true,
        chem: 'Li-Ion, NiMH',
        pwr_src: '100-240 VAC',
        dims_mm: '51 x 88 x 94',
        pockets: 1,
        variants: ['4400e','4600e','4800e']
      },
      {
        desc: 'IMPRES Single-Unit Charger, KOR Plug',
        part: 'PMPN4574A',
        impres: true,
        chem: 'Li-Ion, NiMH',
        pwr_src: '240 VAC',
        dims_mm: '51 x 88 x 94',
        pockets: 1,
        variants: ['4400e','4600e','4800e']
      },
      {
        desc: 'IMPRES Single-Unit Charger, CHN Plug',
        part: 'PMPN4579A',
        impres: true,
        chem: 'Li-Ion, NiMH',
        pwr_src: '240 VAC',
        dims_mm: '51 x 88 x 94',
        pockets: 1,
        variants: ['4400e','4600e','4800e']
      },
      {
        desc: 'IMPRES Single-Unit Charger, INDIA Plug',
        part: 'PMPN4582A',
        impres: true,
        chem: 'Li-Ion, NiMH',
        pwr_src: '100-240 VAC',
        dims_mm: '51 x 88 x 94',
        pockets: 1,
        variants: ['4400e','4600e','4800e']
      },
      // Non-IMPRES single-unit chargers
      // Multi-unit chargers
      {
        desc: 'IMPRES 2 Multi-Unit Fast Charger with 1 Display, US/CAN Plug',
        part: 'PMPN4284',
        impres: true,
        chem: 'Li-Ion, NiMH',
        pwr_src: '100-240 VAC',
        dims_mm: '153 x 445 x 292',
        pockets: 6,
        variants: ['4400e','4600e','4800e']
      },
      {
        desc: 'IMPRES 2 Multi-Unit Fast Charger with 1 Display, UK Plug',
        part: 'PMPN4290',
        impres: true,
        chem: 'Li-Ion, NiMH',
        pwr_src: '100-240 VAC',
        dims_mm: '153 x 445 x 292',
        pockets: 6,
        variants: ['4400e','4600e','4800e']
      },
      {
        desc: 'IMPRES 2 Multi-Unit Fast Charger with 1 Display, EURO Plug',
        part: 'PMPN4289',
        impres: true,
        chem: 'Li-Ion, NiMH',
        pwr_src: '100-240 VAC',
        dims_mm: '153 x 445 x 292',
        pockets: 6,
        variants: ['4400e','4600e','4800e']
      },
      {
        desc: 'IMPRES 2 Multi-Unit Fast Charger with 1 Display, AU/NZ Plug',
        part: 'PMPN4293',
        impres: true,
        chem: 'Li-Ion, NiMH',
        pwr_src: '100-240 VAC',
        dims_mm: '153 x 445 x 292',
        pockets: 6,
        variants: ['4400e','4600e','4800e']
      },
      {
        desc: 'IMPRES 2 Multi-Unit Fast Charger with 1 Display, ARG Plug',
        part: 'PMPN4291',
        impres: true,
        chem: 'Li-Ion, NiMH',
        pwr_src: '100-240 VAC',
        dims_mm: '153 x 445 x 292',
        pockets: 6,
        variants: ['4400e','4600e','4800e']
      },
      {
        desc: 'IMPRES 2 Multi-Unit Fast Charger with 1 Display, BZL Plug',
        part: 'PMPN4292',
        impres: true,
        chem: 'Li-Ion, NiMH',
        pwr_src: '100-240 VAC',
        dims_mm: '153 x 445 x 292',
        pockets: 6,
        variants: ['4400e','4600e','4800e']
      },
      {
        desc: 'IMPRES 2 Multi-Unit Fast Charger with 1 Display, JAP Plug',
        part: 'PMPN4295',
        impres: true,
        chem: 'Li-Ion, NiMH',
        pwr_src: '100-240 VAC',
        dims_mm: '153 x 445 x 292',
        pockets: 6,
        variants: ['4400e','4600e','4800e']
      },
      {
        desc: 'IMPRES 2 Multi-Unit Fast Charger with 1 Display, KOR Plug',
        part: 'PMPN4294',
        impres: true,
        chem: 'Li-Ion, NiMH',
        pwr_src: '100-240 VAC',
        dims_mm: '153 x 445 x 292',
        pockets: 6,
        variants: ['4400e','4600e','4800e']
      },
      {
        desc: 'IMPRES 2 Multi-Unit Fast Charger with 1 Display, CHN Plug',
        part: 'PMPN4296',
        impres: true,
        chem: 'Li-Ion, NiMH',
        pwr_src: '100-240 VAC',
        dims_mm: '153 x 445 x 292',
        pockets: 6,
        variants: ['4400e','4600e','4800e']
      },
      {
        desc: 'IMPRES 2 Multi-Unit Fast Charger with 1 Display, TW Plug',
        part: 'PMPN4462',
        impres: true,
        chem: 'Li-Ion, NiMH',
        pwr_src: '100-240 VAC',
        dims_mm: '153 x 445 x 292',
        pockets: 6,
        variants: ['4400e','4600e','4800e']
      },
      // Vehicle charger
      {
        desc: 'IMPRES Single-Unit Rapid Rate Vehicular Charger, Heavy-Duty Permanent Mount',
        part: 'NNTN7616',
        impres: true,
        chem: 'Li-Ion, NiMH',
        pwr_src: '12 VDC (hardwire)',
        dims_mm: '200 x 83 x 97',
        pockets: 1,
        variants: ['4400e','4600e','4800e']
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
        desc: 'IMPRES ATEX Active Noise-Canceling RSM with Large Front PTT and Side PTT (IP67)',
        part: 'PMMN4094',
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
        hazloc: 'ATEX',
        dims_mm: '68 x 94 x 29',
        variants: ['4400e','4600e','4800e']
      },
      {
        desc: 'IMPRES ATEX Omni RSM with Large Front PTT and Side PTT (IP67)',
        part: 'PMMN4110',
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
        hazloc: 'ATEX',
        dims_mm: '68 x 94 x 29',
        variants: ['4400e','4600e','4800e']
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
        variants: ['4400e','4600e','4800e']
      }
    ]
  },

    {
    id: 'surveillance',
    label: 'Surveillance/Earpieces',
    columns: ['Description','Part Number','IMPRES','Intelligent Audio','AI Noise Suppress','Ear Type','Mic Type','Full Duplex','HazLoc'],
    items: [
      {
        desc: 'Translucent Tube Receive-Only Earpiece (for PMMN4094/PMMN4110)',
        part: 'PMLN7188',
        impres: false,
        intel_audio: false,
        ai_noise: false,
        ear_type: 'Clear rubber eartip',
        mic_type: '',
        full_duplex: false,
        hazloc: 'ATEX',
        variants: ['4400e','4600e','4800e']
      },
      { desc: 'Low Noise Kit with Translucent Tube and 1 Clear Rubber Eartip', part: 'RLN6242', impres: false, intel_audio: false, ai_noise: false, ear_type: 'Clear rubber eartip', mic_type: '', full_duplex: false, hazloc: '', variants: ['4400e','4600e','4800e'] },
      { desc: 'Replacement Standard Clear Rubber Eartip, Pack of 50', part: 'RLN6282', impres: false, intel_audio: false, ai_noise: false, ear_type: 'Clear rubber eartip', mic_type: '', full_duplex: false, hazloc: '', variants: ['4400e','4600e','4800e'] },
      { desc: 'Replacement Foam Plugs for RLN6242, NR 24dB, Pack of 50 pairs', part: '5080384F72', impres: false, intel_audio: false, ai_noise: false, ear_type: 'Foam eartip', mic_type: '', full_duplex: false, hazloc: '', variants: ['4400e','4600e','4800e'] },
    ]
  },

  // ── CATEGORY 5: HEADSETS ──────────────────────────────────────────────────
  {
    id: 'headsets',
    label: 'Headsets',
    columns: ['Description','Part Number','IMPRES','Headset Type','Ear Style','NRR (dB)','Mic Type','HazLoc'],
    items: [
      {
        desc: 'Heavy Duty Headset with Over-the-Head Headband and Boom Mic (ATEX)',
        part: 'PMLN6087',
        impres: false,
        headset_type: 'Over-the-Head',
        ear_style: 'Dual-Ear',
        nrr_db: 33,
        mic_type: 'Boom',
        hazloc: 'ATEX',
        variants: ['4400e','4600e','4800e']
      },
      {
        desc: 'Heavy Duty Headset with Helmet Attachment and Boom Mic (ATEX)',
        part: 'PMLN6092',
        impres: false,
        headset_type: 'Helmet Attach',
        ear_style: 'Dual-Ear',
        nrr_db: 32,
        mic_type: 'Boom',
        hazloc: 'ATEX',
        variants: ['4400e','4600e','4800e']
      },
      {
        desc: 'Twin Cup Heavy Duty Headset with Helmet Attachment, Boom Mic and Extra High-Attenuating Twin Shells (ATEX)',
        part: 'PMLN6333',
        impres: false,
        headset_type: 'Helmet Attach',
        ear_style: 'Dual-Ear',
        nrr_db: 33,
        mic_type: 'Boom',
        hazloc: 'ATEX',
        variants: ['4400e','4600e','4800e']
      },
      {
        desc: 'Tactical Heavy Duty Headset with Helmet Attachment, Boom Mic and Volume Control (ATEX)',
        part: 'PMLN6089',
        impres: false,
        headset_type: 'Helmet Attach',
        ear_style: 'Dual-Ear',
        nrr_db: 31,
        mic_type: 'Boom',
        hazloc: 'ATEX',
        variants: ['4400e','4600e','4800e']
      },
      {
        desc: 'Tactical Heavy Duty Headset with Neck Band, Boom Mic and Volume Control (ATEX)',
        part: 'PMLN7535',
        impres: false,
        headset_type: 'Over-the-Head',
        ear_style: 'Dual-Ear',
        nrr_db: 33,
        mic_type: 'Boom',
        hazloc: 'ATEX',
        variants: ['4400e','4600e','4800e']
      },
      {
        desc: 'HC-1 Helmet-COM Bone Conduction Mic with Single Speaker (ATEX)',
        part: 'RMN5123',
        impres: false,
        headset_type: 'Helmet Attach',
        ear_style: 'Bone Conduction',
        nrr_db: null,
        mic_type: 'Bone conduction',
        hazloc: 'ATEX',
        variants: ['4400e','4600e','4800e']
      },
      {
        desc: 'HC-2 Helmet-COM Bone Conduction Mic with Dual Speaker (ATEX)',
        part: 'GMMN4580',
        impres: false,
        headset_type: 'Helmet Attach',
        ear_style: 'Bone Conduction',
        nrr_db: null,
        mic_type: 'Bone conduction',
        hazloc: 'ATEX',
        variants: ['4400e','4600e','4800e']
      },
      // ATEX PTT adapters
      {
        desc: 'ATEX Push-to-Talk Adapter (must be ordered with any Heavy Duty Headset)',
        part: 'PMLN6368',
        impres: false,
        headset_type: 'PTT adapter',
        ear_style: null,
        nrr_db: null,
        mic_type: null,
        hazloc: 'ATEX',
        variants: ['4400e','4600e','4800e']
      },
      {
        desc: 'ATEX Small Push-to-Talk Adapter',
        part: 'PMLN6803',
        impres: false,
        headset_type: 'PTT adapter',
        ear_style: null,
        nrr_db: null,
        mic_type: null,
        hazloc: 'ATEX',
        variants: ['4400e','4600e','4800e']
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
        desc: 'Hard Leather Case with 2.5-Inch Swivel Belt Loop (Non-Display ATEX)',
        part: 'PMLN6096',
        material: 'Hard leather',
        belt_sz: '2.5',
        swivel: 'Swivel',
        display: 'Non-display',
        d_rings: true,
        variants: ['4400e','4600e','4800e']
      },
      {
        desc: 'Hard Leather Case with 2.5-Inch Swivel Belt Loop (Display ATEX)',
        part: 'PMLN6097',
        material: 'Hard leather',
        belt_sz: '2.5',
        swivel: 'Swivel',
        display: 'Display',
        d_rings: true,
        variants: ['4400e','4600e','4800e']
      },
      {
        desc: 'Soft Leather Case with 2.5-Inch Swivel Belt Loop (Non-Display ATEX)',
        part: 'PMLN6098',
        material: 'Soft leather',
        belt_sz: '2.5',
        swivel: 'Swivel',
        display: 'Non-display',
        d_rings: true,
        variants: ['4400e','4600e','4800e']
      },
      {
        desc: 'Soft Leather Case with 2.5-Inch Swivel Belt Loop (Display ATEX)',
        part: 'PMLN6099',
        material: 'Soft leather',
        belt_sz: '2.5',
        swivel: 'Swivel',
        display: 'Display',
        d_rings: true,
        variants: ['4400e','4600e','4800e']
      },
      {
        desc: 'Synthetic Leather Case with 3-Inch Fixed Belt Loop (Standard Battery)',
        part: 'PMLN7536',
        material: 'Synthetic leather',
        belt_sz: '3',
        swivel: 'Fixed',
        display: 'Display/Non-display',
        d_rings: true,
        variants: ['4400e','4600e','4800e']
      },
      {
        desc: 'Synthetic Leather Case with 3-Inch Fixed Belt Loop (High Capacity Battery)',
        part: 'PMLN7537',
        material: 'Synthetic leather',
        belt_sz: '3',
        swivel: 'Fixed',
        display: 'Display/Non-display',
        d_rings: true,
        variants: ['4400e','4600e','4800e']
      },
      {
        desc: 'Heavy-Duty Belt Clip',
        part: 'PMLN7128',
        material: 'Plastic',
        belt_sz: '',
        swivel: '',
        display: '',
        d_rings: false,
        variants: ['4400e','4600e','4800e']
      },
      {
        desc: 'Swivel Carry Holster',
        part: 'PMLN7190',
        material: 'Plastic',
        belt_sz: '',
        swivel: 'Swivel',
        display: 'Display',
        d_rings: false,
        variants: ['4400e','4600e','4800e']
      },
      {
        desc: 'Carry Holster with Belt Clip',
        part: 'PMLN7559',
        material: 'Plastic',
        belt_sz: '',
        swivel: 'Fixed',
        display: '',
        d_rings: false,
        variants: ['4400e','4600e','4800e']
      },
      {
        desc: '2.5-Inch Belt Clip for ATEX Models',
        part: 'PMLN6086',
        material: 'Plastic',
        belt_sz: '2.5',
        swivel: 'Fixed',
        display: '',
        d_rings: false,
        variants: ['4400e','4600e','4800e']
      },
      {
        desc: 'Universal Chest Pack with Radio Holder, Pen Holder and Velcro Secured Pouch',
        part: 'HLN6602',
        material: '',
        belt_sz: '',
        swivel: '',
        display: '',
        d_rings: false,
        variants: ['4400e','4600e','4800e']
      },
      {
        desc: '1.75 Inch Wide Leather Belt',
        part: '4200865599',
        material: 'Leather',
        belt_sz: '1.75',
        swivel: '',
        display: '',
        d_rings: false,
        variants: ['4400e','4600e','4800e']
      },
      {
        desc: 'Break-Away Chest Pack with Radio Holder, Pen Holder and Velcro Secured Pouch',
        part: 'RLN4570',
        material: '',
        belt_sz: '',
        swivel: '',
        display: '',
        d_rings: false,
        variants: ['4400e','4600e','4800e']
      },
      {
        desc: 'Replacement Strap for HLN6602 and RLN4570',
        part: '1505596Z02',
        material: '',
        belt_sz: '',
        swivel: '',
        display: '',
        d_rings: false,
        variants: ['4400e','4600e','4800e']
      },
      {
        desc: 'Radio Pack Radio Utility Case',
        part: 'RLN4815',
        material: '',
        belt_sz: '',
        swivel: '',
        display: '',
        d_rings: false,
        variants: ['4400e','4600e','4800e']
      },
      {
        desc: 'Radio Pack Extension Belt for Waists Larger than 40 Inches',
        part: '4280384F89',
        material: '',
        belt_sz: '',
        swivel: '',
        display: '',
        d_rings: false,
        variants: ['4400e','4600e','4800e']
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
        desc: 'UHF Folded Monopole Whip Antenna for ATEX Radio (403-433 MHz)',
        part: 'PMAE4081',
        band: 'UHF',
        freq_mhz: '403-433',
        len_cm: null,
        ant_type: 'Whip',
        variants: ['4400e','4600e','4800e']
      },
      {
        desc: 'UHF Folded Monopole Whip Antenna for ATEX Radio (430-470 MHz)',
        part: 'PMAE4082',
        band: 'UHF',
        freq_mhz: '430-470',
        len_cm: null,
        ant_type: 'Whip',
        variants: ['4400e','4600e','4800e']
      },
      {
        desc: 'UHF Stubby Antenna for ATEX Radio (403-433 MHz)',
        part: 'PMAE4083',
        band: 'UHF',
        freq_mhz: '403-433',
        len_cm: null,
        ant_type: 'Stubby',
        variants: ['4400e','4600e','4800e']
      },
      {
        desc: 'UHF Stubby Antenna for ATEX Radio (430-470 MHz)',
        part: 'PMAE4084',
        band: 'UHF',
        freq_mhz: '430-470',
        len_cm: null,
        ant_type: 'Stubby',
        variants: ['4400e','4600e','4800e']
      },
      {
        desc: 'UHF Wideband Whip Antenna for ATEX Radio (403-470 MHz)',
        part: 'PMAE4085',
        band: 'UHF',
        freq_mhz: '403-470',
        len_cm: null,
        ant_type: 'Whip',
        variants: ['4400e','4600e','4800e']
      },
      {
        desc: 'VHF/GPS Helical Whip Antenna for ATEX Radio (136-147 MHz)',
        part: 'PMAD4126',
        band: 'VHF',
        freq_mhz: '136-147',
        len_cm: null,
        ant_type: 'Whip',
        variants: ['4400e','4600e','4800e']
      },
      {
        desc: 'VHF/GPS Helical Whip Antenna for ATEX Radio (147-160 MHz)',
        part: 'PMAD4127',
        band: 'VHF',
        freq_mhz: '147-160',
        len_cm: null,
        ant_type: 'Whip',
        variants: ['4400e','4600e','4800e']
      },
      {
        desc: 'VHF/GPS Helical Whip Antenna for ATEX Radio (160-174 MHz)',
        part: 'PMAD4128',
        band: 'VHF',
        freq_mhz: '160-174',
        len_cm: null,
        ant_type: 'Whip',
        variants: ['4400e','4600e','4800e']
      },
      {
        desc: 'VHF Stubby Antenna for ATEX Radio (136-147 MHz)',
        part: 'PMAD4129',
        band: 'VHF',
        freq_mhz: '136-147',
        len_cm: 11,
        ant_type: 'Stubby',
        variants: ['4400e','4600e','4800e']
      },
      {
        desc: 'VHF Stubby Antenna for ATEX Radio (147-160 MHz)',
        part: 'PMAD4130',
        band: 'VHF',
        freq_mhz: '147-160',
        len_cm: 11,
        ant_type: 'Stubby',
        variants: ['4400e','4600e','4800e']
      },
      {
        desc: 'VHF Stubby Antenna for ATEX Radio (160-174 MHz)',
        part: 'PMAD4131',
        band: 'VHF',
        freq_mhz: '160-174',
        len_cm: 11,
        ant_type: 'Stubby',
        variants: ['4400e','4600e','4800e']
      },
      {
        desc: 'VHF Wideband Antenna for ATEX Radio (136-174 MHz)',
        part: 'PMAD4132',
        band: 'VHF',
        freq_mhz: '136-174',
        len_cm: null,
        ant_type: 'Whip',
        variants: ['4400e','4600e','4800e']
      },
      {
        desc: 'VHF Stubby Antenna (160-174 MHz)',
        part: 'PMAD4121',
        band: 'VHF',
        freq_mhz: '160-174',
        len_cm: null,
        ant_type: 'Stubby',
        variants: ['4400e','4600e','4800e']
      },
      {
        desc: 'VHF Stubby Antenna (350-380 MHz)',
        part: 'PMAD4136',
        band: 'VHF',
        freq_mhz: '350-380',
        len_cm: null,
        ant_type: 'Stubby',
        variants: ['4400e','4600e','4800e']
      },
      {
        desc: 'VHF Stubby Antenna (360-400 MHz)',
        part: 'PMAD4133',
        band: 'VHF',
        freq_mhz: '360-400',
        len_cm: null,
        ant_type: 'Stubby',
        variants: ['4400e','4600e','4800e']
      },
      {
        desc: 'VHF Whip Antenna (300-360 MHz)',
        part: 'PMAD4138',
        band: 'VHF',
        freq_mhz: '300-360',
        len_cm: null,
        ant_type: 'Whip',
        variants: ['4400e','4600e','4800e']
      },
      {
        desc: 'VHF Whip Antenna (350-400 MHz)',
        part: 'PMAD4139',
        band: 'VHF',
        freq_mhz: '350-400',
        len_cm: null,
        ant_type: 'Whip',
        variants: ['4400e','4600e','4800e']
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
        desc: 'Portable Programming Cable (USB) for XPR 6000/7000 Series',
        part: 'PMKN4012',
        variants: ['4400e','4600e','4800e']
      },
      {
        desc: 'Programming, Test and Alignment Cable for XPR 6000/7000 Series',
        part: 'PMKN4013',
        variants: ['4400e','4600e','4800e']
      }
    ]
  },

  // ── CATEGORY 9: SCREEN PROTECTORS ────────────────────────────────────────
  {
    id: 'screen_protectors',
    label: 'Screen Protectors',
    columns: ['Description','Part Number'],
    items: []
    // No DP ATEX screen protector listed in PDF
  },

  // ── CATEGORY 10: PROGRAMMING CABLES ──────────────────────────────────────
  // Merged into category 8

  // ── CATEGORY 11: IMPRES BATTERY MGMT TOOLS ───────────────────────────────
  {
    id: 'impres_tools',
    label: 'Battery Fleet Management',
    columns: ['Description','Part Number'],
    items: [
      {
        desc: 'IMPRES Battery Fleet Management License Key, NA/CAN',
        part: 'HKVN4036',
        variants: ['4400e','4600e','4800e']
      },
      {
        desc: 'IMPRES Battery Fleet Management License Key, EMEA',
        part: 'HKVN4037',
        variants: ['4400e','4600e','4800e']
      },
      {
        desc: 'IMPRES Battery Fleet Management License Key, LA',
        part: 'HKVN4038',
        variants: ['4400e','4600e','4800e']
      },
      {
        desc: 'IMPRES Battery Fleet Management License Key, Asia',
        part: 'HKVN4039',
        variants: ['4400e','4600e','4800e']
      }
    ]
  },

  // ── CATEGORY 12: BLUETOOTH / OPS CRITICAL WIRELESS ───────────────────────
  {
    id: 'bluetooth',
    label: 'Bluetooth',
    columns: ['Description','Part Number','Ear Type','Mic Type','PTT','Talk Time (hr)','Charge Time (hr)','Weight (g)'],
    items: []
    // PDF does not list Ops Critical Wireless accessories for DP4000 EX Series —
    // Bluetooth is not embedded; ATEX-rated wireless accessories are not listed.
  }

];

// Wire into global RADIOS_DATA
if (typeof window.RADIOS_DATA === 'undefined') window.RADIOS_DATA = {};
window.RADIOS_DATA['dpatex'] = DPATEX_CATEGORIES;
