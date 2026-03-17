// dp-atex-data.js — DP ATEX (4400e / 4600e / 4800e) Accessory Data
// Batteries confirmed from Motorola Professional Tier Accessory Catalog.
// Categories 2–12: stubs pending PDF verification.

window.DP_ATEX_DATA = {
  batteries: {
    label: 'Batteries',
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
            checks: { impres: 1, chem: 'Li-Ion', capacity_mah: 2075, dims_mm: '135x57x23', weight_g: 220, hazloc: 'UL', ip: 'IP67', op_temp: '-10/+50°C',
              dp4400e: 1, dp4600e: 1, dp4800e: 1 } },
        ]
      }
    ]
  },
  chargers:       { label: 'Chargers',      sections: [] },
  rsm:            { label: 'RSM / Audio',   sections: [] },
  surveillance:   { label: 'Surveillance & Earpieces', sections: [] },
  headsets:       { label: 'Headsets',      sections: [] },
  carry:          { label: 'Carry',         sections: [] },
  antennas:       { label: 'Antennas',      sections: [] },
  cables:         { label: 'Cables',        sections: [] },
  screen:         { label: 'Screen Protectors', sections: [] },
  programming:    { label: 'Programming Cables', sections: [] },
  impres_tools:   { label: 'IMPRES Battery Mgmt Tools', sections: [] },
  bluetooth:      { label: 'Bluetooth / Ops Critical Wireless', sections: [] },
};
