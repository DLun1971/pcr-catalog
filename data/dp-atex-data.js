// dp-atex-data.js — DP ATEX (4400e / 4600e / 4800e) Accessory Data
// Cat 1: Batteries — confirmed from Motorola Professional Tier Accessory Catalog
// Cat 2: Chargers — confirmed from Motorola Professional Tier Accessory Catalog
// Cat 5: Headsets — confirmed from Motorola Professional Tier Accessory Catalog
// Cat 6: Carry — confirmed from Motorola Professional Tier Accessory Catalog
// Cat 7: Antennas — confirmed from Motorola Professional Tier Accessory Catalog
// Cats 3,4,8,9,10,11,12: stubs pending PDF verification

const DP_ATEX_DATA = {
  categories: {

    // ── CAT 1: BATTERIES ──────────────────────────────────────────────────────
 batteries: {
  label: 'Batteries',
  cols: ['dp4400e','dp4600e','dp4800e','Chem','Typical Capacity (mAh)','Dims','Weight','IP','HazLoc','Temp'],
  sections: [
    {
      title: 'DP ATEX / HazLoc Batteries',
      items: [
        { img: null, pn: 'NNTN8359', desc: 'IMPRES Li-Ion 2075mAh IP67 ATEX/IECEx Battery',
          checks: { impres: 1, chem: 'Li-Ion', mah: 2075, dims: '135x57x23', weight: 220, hazloc: 'ATEX/IECEx', ip: 'IP67', temp: '-10/+50\u00b0C',
            dp4400e: 1, dp4600e: 1, dp4800e: 1 } },
        { img: null, pn: 'NNTN8386', desc: 'IMPRES Li-Ion 2075mAh IP67 CSA157 Battery',
          checks: { impres: 1, chem: 'Li-Ion', mah: 2075, dims: '135x57x23', weight: 220, hazloc: 'CSA157', ip: 'IP67', temp: '-10/+50\u00b0C',
            dp4400e: 1, dp4600e: 1, dp4800e: 1 } },
      ]
    }
  ]
},

    // ── CAT 2: CHARGERS ───────────────────────────────────────────────────────
    chargers: {
      label: 'Chargers',
      cols: ['dp4400e','dp4600e','dp4800e'],
      sections: [
        {
          title: 'IMPRES Single-Unit Chargers',
          items: [
            { img: null, pn: 'PMPN4576A', desc: 'IMPRES single-unit charger, US plug',
              checks: { impres: 1, chem: 'Li-Ion/NiMh', pwr_src: '120 VAC', dims_mm: '51x88x94', dp4400e: 1, dp4600e: 1, dp4800e: 1 } },
            { img: null, pn: 'PMPN4573A', desc: 'IMPRES single-unit charger, ARG plug',
              checks: { impres: 1, chem: 'Li-Ion/NiMh', pwr_src: '240 VAC', dims_mm: '51x88x94', dp4400e: 1, dp4600e: 1, dp4800e: 1 } },
            { img: null, pn: 'PMPN4575A', desc: 'IMPRES single-unit charger, BRZ plug',
              checks: { impres: 1, chem: 'Li-Ion/NiMh', pwr_src: '100-240 VAC', dims_mm: '51x88x94', dp4400e: 1, dp4600e: 1, dp4800e: 1 } },
            { img: null, pn: 'PMPN4572A', desc: 'IMPRES single-unit charger, UK plug',
              checks: { impres: 1, chem: 'Li-Ion/NiMh', pwr_src: '240 VAC', dims_mm: '51x88x94', dp4400e: 1, dp4600e: 1, dp4800e: 1 } },
            { img: null, pn: 'PMPN4577A', desc: 'IMPRES single-unit charger, EURO plug',
              checks: { impres: 1, chem: 'Li-Ion/NiMh', pwr_src: '240 VAC', dims_mm: '51x88x94', dp4400e: 1, dp4600e: 1, dp4800e: 1 } },
            { img: null, pn: 'PMPN4571A', desc: 'IMPRES single-unit charger, AU/NZ plug',
              checks: { impres: 1, chem: 'Li-Ion/NiMh', pwr_src: '240 VAC', dims_mm: '51x88x94', dp4400e: 1, dp4600e: 1, dp4800e: 1 } },
            { img: null, pn: 'PMPN4574A', desc: 'IMPRES single-unit charger, KOR plug',
              checks: { impres: 1, chem: 'Li-Ion/NiMh', pwr_src: '240 VAC', dims_mm: '51x88x94', dp4400e: 1, dp4600e: 1, dp4800e: 1 } },
            { img: null, pn: 'PMPN4579A', desc: 'IMPRES single-unit charger, CHN plug',
              checks: { impres: 1, chem: 'Li-Ion/NiMh', pwr_src: '240 VAC', dims_mm: '51x88x94', dp4400e: 1, dp4600e: 1, dp4800e: 1 } },
            { img: null, pn: 'PMPN4582A', desc: 'IMPRES single-unit charger, INDIA plug',
              checks: { impres: 1, chem: 'Li-Ion/NiMh', pwr_src: '100-240 VAC', dims_mm: '51x88x94', dp4400e: 1, dp4600e: 1, dp4800e: 1 } },
          ]
        },
        {
          title: 'IMPRES 2 Multi-Unit Fast Chargers',
          items: [
            { img: null, pn: 'PMPN4284', desc: 'IMPRES 2 multi-unit fast charger with 1 display, US/CAN plug',
              checks: { impres: 1, chem: 'Li-Ion/NiMh', pwr_src: '100-240 VAC', dims_mm: '153x445x292', pockets: 6, dp4400e: 1, dp4600e: 1, dp4800e: 1 } },
            { img: null, pn: 'PMPN4290', desc: 'IMPRES 2 multi-unit fast charger with 1 display, UK plug',
              checks: { impres: 1, chem: 'Li-Ion/NiMh', pwr_src: '100-240 VAC', dims_mm: '153x445x292', pockets: 6, dp4400e: 1, dp4600e: 1, dp4800e: 1 } },
            { img: null, pn: 'PMPN4289', desc: 'IMPRES 2 multi-unit fast charger with 1 display, EURO plug',
              checks: { impres: 1, chem: 'Li-Ion/NiMh', pwr_src: '100-240 VAC', dims_mm: '153x445x292', pockets: 6, dp4400e: 1, dp4600e: 1, dp4800e: 1 } },
            { img: null, pn: 'PMPN4293', desc: 'IMPRES 2 multi-unit fast charger with 1 display, AU/NZ plug',
              checks: { impres: 1, chem: 'Li-Ion/NiMh', pwr_src: '100-240 VAC', dims_mm: '153x445x292', pockets: 6, dp4400e: 1, dp4600e: 1, dp4800e: 1 } },
            { img: null, pn: 'PMPN4291', desc: 'IMPRES 2 multi-unit fast charger with 1 display, ARG plug',
              checks: { impres: 1, chem: 'Li-Ion/NiMh', pwr_src: '100-240 VAC', dims_mm: '153x445x292', pockets: 6, dp4400e: 1, dp4600e: 1, dp4800e: 1 } },
            { img: null, pn: 'PMPN4292', desc: 'IMPRES 2 multi-unit fast charger with 1 display, BZL plug',
              checks: { impres: 1, chem: 'Li-Ion/NiMh', pwr_src: '100-240 VAC', dims_mm: '153x445x292', pockets: 6, dp4400e: 1, dp4600e: 1, dp4800e: 1 } },
            { img: null, pn: 'PMPN4295', desc: 'IMPRES 2 multi-unit fast charger with 1 display, JAP plug',
              checks: { impres: 1, chem: 'Li-Ion/NiMh', pwr_src: '100-240 VAC', dims_mm: '153x445x292', pockets: 6, dp4400e: 1, dp4600e: 1, dp4800e: 1 } },
            { img: null, pn: 'PMPN4294', desc: 'IMPRES 2 multi-unit fast charger with 1 display, KOR plug',
              checks: { impres: 1, chem: 'Li-Ion/NiMh', pwr_src: '100-240 VAC', dims_mm: '153x445x292', pockets: 6, dp4400e: 1, dp4600e: 1, dp4800e: 1 } },
            { img: null, pn: 'PMPN4296', desc: 'IMPRES 2 multi-unit fast charger with 1 display, CHN plug',
              checks: { impres: 1, chem: 'Li-Ion/NiMh', pwr_src: '100-240 VAC', dims_mm: '153x445x292', pockets: 6, dp4400e: 1, dp4600e: 1, dp4800e: 1 } },
            { img: null, pn: 'PMPN4462', desc: 'IMPRES 2 multi-unit fast charger with 1 display, TW plug',
              checks: { impres: 1, chem: 'Li-Ion/NiMh', pwr_src: '100-240 VAC', dims_mm: '153x445x292', pockets: 6, dp4400e: 1, dp4600e: 1, dp4800e: 1 } },
          ]
        },
        {
          title: 'Multi-Unit Charger Accessories',
          items: [
            { img: null, pn: 'BR000272A01', desc: 'Wall mount bracket for IMPRES 2 multi-unit charger', checks: {} },
            { img: null, pn: 'AS000129A01', desc: 'Interchangeable charging pocket', checks: {} },
            { img: null, pn: 'PS000242A01', desc: 'Replacement power supply, 100-240 VAC without power cord', checks: { pwr_src: '100-240 VAC' } },
          ]
        },
        {
          title: 'Single-Unit Charger Replacement Power Supplies',
          items: [
            { img: null, pn: '25009297001', desc: 'Replacement power supply, IMPRES single-unit charger, US plug', checks: { pwr_src: '120 VAC' } },
            { img: null, pn: 'PS000037A04', desc: 'Replacement power supply, single-unit charger, ARG plug', checks: { pwr_src: '240 VAC' } },
            { img: null, pn: 'EPNN9356A',   desc: 'Replacement power supply, single-unit charger, BRZ plug', checks: { pwr_src: '100-240 VAC' } },
            { img: null, pn: 'PS000037A02', desc: 'Replacement power supply, single-unit charger, UK plug', checks: { pwr_src: '240 VAC' } },
            { img: null, pn: 'PS000037A01', desc: 'Replacement power supply, single-unit charger, EURO plug', checks: { pwr_src: '240 VAC' } },
            { img: null, pn: 'PS000037A03', desc: 'Replacement power supply, single-unit charger, AU/NZ plug', checks: { pwr_src: '240 VAC' } },
            { img: null, pn: 'PMLN5229A',   desc: 'Replacement power supply, single-unit charger, JAP plug', checks: { pwr_src: '100-240 VAC' } },
            { img: null, pn: 'PS000037A06', desc: 'Replacement power supply, single-unit charger, KOR plug', checks: { pwr_src: '240 VAC' } },
            { img: null, pn: 'PS000037A05', desc: 'Replacement power supply, single-unit charger, CHN plug', checks: { pwr_src: '240 VAC' } },
            { img: null, pn: 'EPNN9295A',   desc: 'Replacement power supply, single-unit charger, INDIA plug', checks: { pwr_src: '100-240 VAC' } },
          ]
        },
        {
          title: 'Multi-Unit Charger Power Cords',
          items: [
            { img: null, pn: '3087791G01',  desc: 'Power cord, IMPRES 2 multi-unit charger, US/CAN plug', checks: {} },
            { img: null, pn: '3087791G07',  desc: 'Power cord, IMPRES 2 multi-unit charger, UK plug', checks: {} },
            { img: null, pn: '3087791G04',  desc: 'Power cord, IMPRES 2 multi-unit charger, EURO plug', checks: {} },
            { img: null, pn: '3087791G10',  desc: 'Power cord, IMPRES 2 multi-unit charger, AU/NZ plug', checks: {} },
            { img: null, pn: '3087791G22',  desc: 'Power cord, IMPRES 2 multi-unit charger, BZL plug', checks: {} },
            { img: null, pn: '3087791G20',  desc: 'Power cord, IMPRES 2 multi-unit charger, JAP plug', checks: {} },
            { img: null, pn: '3087791G16',  desc: 'Power cord, IMPRES 2 multi-unit charger, KOR plug', checks: {} },
            { img: null, pn: 'CB000199A01', desc: 'Power cord, IMPRES 2 multi-unit charger, CHN plug', checks: {} },
            { img: null, pn: 'CB000805A01', desc: 'Power cord, IMPRES 2 multi-unit charger, TW plug', checks: {} },
          ]
        },
      ]
    },

    // ── CAT 3: RSM / AUDIO ────────────────────────────────────────────────────
    rsm: {
      label: 'RSM / Audio',
      cols: ['dp4400e','dp4600e','dp4800e'],
      sections: [
        {
          title: 'Audio Accessory Adapters',
          items: [
            { img: null, pn: 'PMLN6368', desc: 'ATEX Push-to-Talk Adapter (must be ordered with any Heavy Duty Headset) — limited availability',
              checks: { hazloc: 'ATEX', dp4400e: 1, dp4600e: 1, dp4800e: 1 } },
            { img: null, pn: 'PMLN6803', desc: 'ATEX Small Push-to-Talk Adapter',
              checks: { hazloc: 'ATEX', dp4400e: 1, dp4600e: 1, dp4800e: 1 } },
          ]
        }
      ]
    },

    // ── CAT 4: SURVEILLANCE & EARPIECES ───────────────────────────────────────
    surveillance: {
      label: 'Surveillance & Earpieces',
      cols: ['dp4400e','dp4600e','dp4800e'],
      sections: []
    },

    // ── CAT 5: HEADSETS ───────────────────────────────────────────────────────
    headsets: {
      label: 'Headsets',
      cols: ['dp4400e','dp4600e','dp4800e'],
      sections: [
        {
          title: 'Heavy Duty Headsets',
          items: [
            { img: null, pn: 'PMLN6087', desc: 'Heavy Duty Headset with Over-The-Head Headband and Boom Microphone, ATEX (limited availability)',
              checks: { headset_type: 'Over-the-head', ear_style: 'Dual-ear', nrr_db: null, mic_type: 'Boom', hazloc: 'ATEX', dp4400e: 1, dp4600e: 1, dp4800e: 1 } },
            { img: null, pn: 'PMLN6092', desc: 'Heavy Duty Headset with Helmet Attachment and Boom Microphone, ATEX (limited availability)',
              checks: { headset_type: 'Helmet attach', ear_style: 'Dual-ear', nrr_db: null, mic_type: 'Boom', hazloc: 'ATEX', dp4400e: 1, dp4600e: 1, dp4800e: 1 } },
            { img: null, pn: 'PMLN6333', desc: 'Twin Cup Heavy Duty Headset with Helmet Attachment, Boom Microphone and Extra High-Attenuating Twin Shells, ATEX',
              checks: { headset_type: 'Helmet attach', ear_style: 'Dual-ear', nrr_db: null, mic_type: 'Boom', hazloc: 'ATEX', dp4400e: 1, dp4600e: 1, dp4800e: 1 } },
            { img: null, pn: 'PMLN6089', desc: 'Tactical Heavy Duty Headset with Helmet Attachment, Boom Microphone, Includes Volume Control, ATEX',
              checks: { headset_type: 'Helmet attach', ear_style: 'Dual-ear', nrr_db: null, mic_type: 'Boom', hazloc: 'ATEX', dp4400e: 1, dp4600e: 1, dp4800e: 1 } },
            { img: null, pn: 'PMLN7535', desc: 'Tactical Heavy Duty Headset with Neck Band, Boom Microphone and Volume Control, ATEX',
              checks: { headset_type: 'Over-the-head', ear_style: 'Dual-ear', nrr_db: null, mic_type: 'Boom', hazloc: 'ATEX', dp4400e: 1, dp4600e: 1, dp4800e: 1 } },
          ]
        },
        {
          title: 'Helmet-COM Bone Conduction Headsets',
          items: [
            { img: null, pn: 'RMN5123', desc: 'HC-1 Helmet-COM Bone Conduction Microphone with Single Speaker, ATEX',
              checks: { headset_type: 'Helmet attach', ear_style: 'Dual-ear', nrr_db: null, mic_type: 'Bone conduction', hazloc: 'ATEX', dp4400e: 1, dp4600e: 1, dp4800e: 1 } },
            { img: null, pn: 'GMMN4580', desc: 'HC-2 Helmet-COM Bone Conduction Microphone with Dual Speaker, ATEX',
              checks: { headset_type: 'Helmet attach', ear_style: 'Dual-ear', nrr_db: null, mic_type: 'Bone conduction', hazloc: 'ATEX', dp4400e: 1, dp4600e: 1, dp4800e: 1 } },
          ]
        }
      ]
    },

    // ── CAT 6: CARRY ──────────────────────────────────────────────────────────
    carry: {
      label: 'Carry',
      cols: ['dp4400e','dp4600e','dp4800e'],
      sections: [
        {
          title: 'Leather Cases',
          items: [
            { img: null, pn: 'PMLN6096', desc: 'Hard leather case with 2.5 inch swivel belt loop for non-display ATEX model',
              checks: { material: 'Hard leather', belt_sz: '2.5"', swivel: 1, display: 0, dp4400e: 1, dp4600e: 1, dp4800e: 1 } },
            { img: null, pn: 'PMLN6097', desc: 'Hard leather case with 2.5 inch swivel belt loop for display ATEX model',
              checks: { material: 'Hard leather', belt_sz: '2.5"', swivel: 1, display: 1, dp4400e: 1, dp4600e: 1, dp4800e: 1 } },
            { img: null, pn: 'PMLN6098', desc: 'Soft leather case with 2.5 inch swivel belt loop for non-display ATEX model',
              checks: { material: 'Soft leather', belt_sz: '2.5"', swivel: 1, display: 0, dp4400e: 1, dp4600e: 1, dp4800e: 1 } },
            { img: null, pn: 'PMLN6099', desc: 'Soft leather case with 2.5 inch swivel belt loop for display ATEX model',
              checks: { material: 'Soft leather', belt_sz: '2.5"', swivel: 1, display: 1, dp4400e: 1, dp4600e: 1, dp4800e: 1 } },
          ]
        },
        {
          title: 'Belt Clips & Accessories',
          items: [
            { img: null, pn: 'PMLN6086', desc: '2.5 inch belt clip for ATEX models',
              checks: { material: 'Plastic', belt_sz: '2.5"', swivel: 0, dp4400e: 1, dp4600e: 1, dp4800e: 1 } },
            { img: null, pn: 'PMLN5610', desc: '2.5 inch replacement leather swivel belt loop',
              checks: { material: 'Hard leather', belt_sz: '2.5"', swivel: 1, dp4400e: 1, dp4600e: 1, dp4800e: 1 } },
            { img: null, pn: '15012157001', desc: 'Accessory connector dust cover',
              checks: { material: 'Plastic', dp4400e: 1, dp4600e: 1, dp4800e: 1 } },
          ]
        }
      ]
    },

    // ── CAT 7: ANTENNAS ───────────────────────────────────────────────────────
    antennas: {
      label: 'Antennas',
      cols: ['dp4400e','dp4600e','dp4800e'],
      sections: [
        {
          title: 'UHF Antennas',
          items: [
            { img: null, pn: 'PMAE4081', desc: 'UHF folded monopole whip antenna for ATEX radio (403-433 MHz)',
              checks: { band: 'UHF', freq_mhz: '403-433', len_cm: null, ant_type: 'Whip', dp4400e: 1, dp4600e: 1, dp4800e: 1 } },
            { img: null, pn: 'PMAE4082', desc: 'UHF folded monopole whip antenna for ATEX radio (430-470 MHz)',
              checks: { band: 'UHF', freq_mhz: '430-470', len_cm: null, ant_type: 'Whip', dp4400e: 1, dp4600e: 1, dp4800e: 1 } },
            { img: null, pn: 'PMAE4083', desc: 'UHF stubby antenna for ATEX radio (403-433 MHz)',
              checks: { band: 'UHF', freq_mhz: '403-433', len_cm: null, ant_type: 'Stubby', dp4400e: 1, dp4600e: 1, dp4800e: 1 } },
            { img: null, pn: 'PMAE4084', desc: 'UHF stubby antenna for ATEX radio (430-470 MHz)',
              checks: { band: 'UHF', freq_mhz: '430-470', len_cm: null, ant_type: 'Stubby', dp4400e: 1, dp4600e: 1, dp4800e: 1 } },
            { img: null, pn: 'PMAE4085', desc: 'UHF wideband whip antenna for ATEX radio (403-470 MHz)',
              checks: { band: 'UHF', freq_mhz: '403-470', len_cm: null, ant_type: 'Whip', dp4400e: 1, dp4600e: 1, dp4800e: 1 } },
          ]
        },
        {
          title: 'VHF Antennas',
          items: [
            { img: null, pn: 'PMAD4126', desc: 'VHF/GPS helical whip antenna for ATEX radio (136-147 MHz)',
              checks: { band: 'VHF', freq_mhz: '136-147', len_cm: null, ant_type: 'Whip', dp4400e: 1, dp4600e: 1, dp4800e: 1 } },
            { img: null, pn: 'PMAD4127', desc: 'VHF/GPS helical whip antenna for ATEX radio (147-160 MHz)',
              checks: { band: 'VHF', freq_mhz: '147-160', len_cm: null, ant_type: 'Whip', dp4400e: 1, dp4600e: 1, dp4800e: 1 } },
            { img: null, pn: 'PMAD4128', desc: 'VHF/GPS helical whip antenna for ATEX radio (160-174 MHz)',
              checks: { band: 'VHF', freq_mhz: '160-174', len_cm: null, ant_type: 'Whip', dp4400e: 1, dp4600e: 1, dp4800e: 1 } },
            { img: null, pn: 'PMAD4129', desc: 'VHF stubby antenna for ATEX radio (136-147 MHz)',
              checks: { band: 'VHF', freq_mhz: '136-147', len_cm: 11, ant_type: 'Stubby', dp4400e: 1, dp4600e: 1, dp4800e: 1 } },
            { img: null, pn: 'PMAD4130', desc: 'VHF stubby antenna for ATEX radio (147-160 MHz)',
              checks: { band: 'VHF', freq_mhz: '147-160', len_cm: 11, ant_type: 'Stubby', dp4400e: 1, dp4600e: 1, dp4800e: 1 } },
            { img: null, pn: 'PMAD4131', desc: 'VHF stubby antenna for ATEX radio (160-174 MHz)',
              checks: { band: 'VHF', freq_mhz: '160-174', len_cm: 11, ant_type: 'Stubby', dp4400e: 1, dp4600e: 1, dp4800e: 1 } },
            { img: null, pn: 'PMAD4132', desc: 'VHF wideband antenna for ATEX radio (136-174 MHz)',
              checks: { band: 'VHF', freq_mhz: '136-174', len_cm: null, ant_type: 'Whip', dp4400e: 1, dp4600e: 1, dp4800e: 1 } },
          ]
        }
      ]
    },

    // ── CAT 8: CABLES ─────────────────────────────────────────────────────────
    cables: {
      label: 'Cables',
      cols: ['dp4400e','dp4600e','dp4800e'],
      sections: []
    },

    // ── CAT 9: SCREEN PROTECTORS ──────────────────────────────────────────────
    screen: {
      label: 'Screen Protectors',
      cols: ['dp4400e','dp4600e','dp4800e'],
      sections: []
    },

    // ── CAT 10: PROGRAMMING CABLES ────────────────────────────────────────────
    programming: {
      label: 'Programming Cables',
      cols: ['dp4400e','dp4600e','dp4800e'],
      sections: []
    },

    // ── CAT 11: IMPRES BATTERY MGMT TOOLS ────────────────────────────────────
    impres_tools: {
      label: 'IMPRES Battery Mgmt Tools',
      cols: ['dp4400e','dp4600e','dp4800e'],
      sections: []
    },

    // ── CAT 12: BLUETOOTH / OPS CRITICAL WIRELESS ─────────────────────────────
    bluetooth: {
      label: 'Bluetooth / Ops Critical Wireless',
      cols: ['dp4400e','dp4600e','dp4800e'],
      sections: []
    },

  }
};

if (!window.RADIOS_DATA) window.RADIOS_DATA = {};
window.RADIOS_DATA['dp-atex'] = DP_ATEX_DATA;
