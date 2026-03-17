// dp-atex-data.js — DP ATEX (4400e / 4600e / 4800e) Accessory Data
// Batteries confirmed from Motorola Professional Tier Accessory Catalog.
// Categories 2-12: stubs pending PDF verification.

const DP_ATEX_DATA = {
  categories: {
    batteries: {
      label: 'Batteries',
      cols: ['dp4400e','dp4600e','dp4800e'],
      sections: [
        {
          title: 'DP ATEX / HazLoc Batteries',
          items: [
            { img: null, pn: 'NNTN8359', desc: 'IMPRES Li-Ion 2075mAh IP67 ATEX Battery',
              note: '135x57x23mm, 220g, -10 to +50°C',
              checks: { impres: 1, chem: 'Li-Ion', capacity_mah: 2075, dims_mm: '135x57x23', weight_g: 220, hazloc: 'ATEX', ip: 'IP67', op_temp: '-10/+50°C',
                dp4400e: 1, dp4600e: 1, dp4800e: 1 } },
            { img: null, pn: 'NNTN8386', desc: 'IMPRES Li-Ion 2075mAh IP67 CSA Battery',
              note: '135x57x23mm, 220g, -10 to +50°C',
              checks: { impres: 1, chem: 'Li-Ion', capacity_mah: 2075, dims_mm: '135x57x23', weight_g: 220, hazloc: 'CSA', ip: 'IP67', op_temp: '-10/+50°C',
                dp4400e: 1, dp4600e: 1, dp4800e: 1 } },
          ]
        }
      ]
    },
    chargers:     { label: 'Chargers',      cols: ['dp4400e','dp4600e','dp4800e'], sections: [] },
    rsm:          { label: 'RSM / Audio',   cols: ['dp4400e','dp4600e','dp4800e'], sections: [] },
    surveillance: { label: 'Surveillance & Earpieces', cols: ['dp4400e','dp4600e','dp4800e'], sections: [] },
    headsets:     { label: 'Headsets',      cols: ['dp4400e','dp4600e','dp4800e'], sections: [] },
    carry:        { label: 'Carry',         cols: ['dp4400e','dp4600e','dp4800e'], sections: [] },
    antennas:     { label: 'Antennas',      cols: ['dp4400e','dp4600e','dp4800e'], sections: [] },
    cables:       { label: 'Cables',        cols: ['dp4400e','dp4600e','dp4800e'], sections: [] },
    screen:       { label: 'Screen Protectors', cols: ['dp4400e','dp4600e','dp4800e'], sections: [] },
    programming:  { label: 'Programming Cables', cols: ['dp4400e','dp4600e','dp4800e'], sections: [] },
    impres_tools: { label: 'IMPRES Battery Mgmt Tools', cols: ['dp4400e','dp4600e','dp4800e'], sections: [] },
    bluetooth:    { label: 'Bluetooth / Ops Critical Wireless', cols: ['dp4400e','dp4600e','dp4800e'], sections: [] },
  }
};

if (!window.RADIOS_DATA) window.RADIOS_DATA = {};
window.RADIOS_DATA['dp-atex'] = DP_ATEX_DATA;
