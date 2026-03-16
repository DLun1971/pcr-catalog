// XPR 3000 Series Accessory Data
// Covers: XPR 3000, XPR 3000e
// Source: MOTOTRBO Professional Tier Accessory Catalog (PDF)
const XPR3000_DATA = {
  categories: {
    rsm: {
      label: 'RSMs',
      sections: [
        { title: 'Remote Speaker Microphones', items: [
          { img: null, pn: 'PMMN4071', desc: 'IMPRES Noise-Canceling RSM, Large (IP54)', note: '', checks: { impres: 1, ip: 'IP54', hazloc: 'UL', windport: 0, xpr3000: 1, xpr3000e: 1 } },
          { img: null, pn: 'PMMN4073', desc: 'IMPRES Windporting RSM, Small (IP54)', note: '', checks: { impres: 1, ip: 'IP54', hazloc: 'UL', windport: 1, xpr3000: 1, xpr3000e: 1 } },
          { img: null, pn: 'PMMN4075', desc: 'RSM, Small (IP54)', note: '', checks: { impres: 0, ip: 'IP54', hazloc: '', windport: 0, xpr3000: 1, xpr3000e: 1 } },
          { img: null, pn: 'PMMN4076', desc: 'Noise-Canceling RSM, Large (IP54)', note: '', checks: { impres: 0, ip: 'IP54', hazloc: '', windport: 0, xpr3000: 1, xpr3000e: 1 } },
          { img: null, pn: 'PMMN4108', desc: 'IMPRES RSM, Small, Submersible (IP57)', note: '', checks: { impres: 1, ip: 'IP57', hazloc: 'UL', windport: 0, xpr3000: 0, xpr3000e: 1 } },
        ]},
        { title: 'RSM Accessories', items: [
          { img: null, pn: 'RLN6074', desc: 'Replacement Coil Cord for PMMN4073', note: '', checks: { impres: 0, ip: '', hazloc: '', windport: 0, xpr3000: 1, xpr3000e: 1 } },
          { img: null, pn: 'RLN6075', desc: 'Replacement Straight Cord for PMMN4073', note: '', checks: { impres: 0, ip: '', hazloc: '', windport: 0, xpr3000: 1, xpr3000e: 1 } },
        ]},
      ]
    },
    surveillance: {
      label: 'Surveillance',
      sections: [
        { title: 'Surveillance Kits', items: [
          { img: null, pn: 'PMLN7157', desc: '1-Wire Surveillance Kit (IP54)', note: '', checks: { impres: 0, ip: 'IP54', hazloc: '', windport: 0, xpr3000: 1, xpr3000e: 1 } },
          { img: null, pn: 'PMLN7158', desc: '2-Wire Surveillance Kit (IP54)', note: '', checks: { impres: 0, ip: 'IP54', hazloc: '', windport: 0, xpr3000: 1, xpr3000e: 1 } },
          { img: null, pn: 'PMLN7269', desc: '1-Wire Surveillance Kit, ATEX (IP54)', note: 'ATEX/IECEx', checks: { impres: 0, ip: 'IP54', hazloc: 'ATEX', windport: 0, xpr3000: 0, xpr3000e: 1 } },
          { img: null, pn: 'PMLN7270', desc: '2-Wire Surveillance Kit, ATEX (IP54)', note: 'ATEX/IECEx', checks: { impres: 0, ip: 'IP54', hazloc: 'ATEX', windport: 0, xpr3000: 0, xpr3000e: 1 } },
          { img: null, pn: 'PMLN6754', desc: 'Earpiece Replacement Kit', note: '', checks: { impres: 0, ip: '', hazloc: '', windport: 0, xpr3000: 1, xpr3000e: 1 } },
          { img: null, pn: 'PMLN6755', desc: 'Earpiece Replacement Kit, Large', note: '', checks: { impres: 0, ip: '', hazloc: '', windport: 0, xpr3000: 1, xpr3000e: 1 } },
        ]},
      ]
    },
    headsets: {
      label: 'Headsets & Earpieces',
      sections: [
        { title: 'Mag One Headsets', items: [
          { img: null, pn: 'PMLN4620', desc: 'Mag One Receive-Only Earpiece', note: '', checks: { impres: 0, ip: '', hazloc: '', windport: 0, xpr3000: 1, xpr3000e: 1 } },
          { img: null, pn: 'PMLN4443', desc: 'Mag One Single-Wire Lapel Microphone with Earpiece', note: '', checks: { impres: 0, ip: '', hazloc: '', windport: 0, xpr3000: 1, xpr3000e: 1 } },
          { img: null, pn: 'PMLN5101', desc: 'Mag One Over-the-Ear Headset with Boom Microphone', note: '', checks: { impres: 0, ip: '', hazloc: '', windport: 0, xpr3000: 1, xpr3000e: 1 } },
          { img: null, pn: 'PMLN5096', desc: 'Mag One Two-Wire Surveillance Kit with Clear Earpiece', note: '', checks: { impres: 0, ip: '', hazloc: '', windport: 0, xpr3000: 1, xpr3000e: 1 } },
          { img: null, pn: 'PMLN5097', desc: 'Mag One Two-Wire Surveillance Kit with Beige Earpiece', note: '', checks: { impres: 0, ip: '', hazloc: '', windport: 0, xpr3000: 1, xpr3000e: 1 } },
        ]},
      ]
    },
    batteries: {
      label: 'Batteries',
      sections: [
        { title: 'IMPRES Batteries', items: [
          { img: null, pn: 'PMNN4468', desc: 'IMPRES Li-Ion Battery, 2300 mAh (Standard)', note: 'Li-Ion', checks: { impres: 1, ip: '', hazloc: '', windport: 0, xpr3000: 1, xpr3000e: 1 } },
          { img: null, pn: 'PMNN4477', desc: 'IMPRES Li-Ion Battery, 2300 mAh (Rugged)', note: 'Li-Ion', checks: { impres: 1, ip: '', hazloc: '', windport: 0, xpr3000: 1, xpr3000e: 1 } },
          { img: null, pn: 'PMNN4496', desc: 'IMPRES Li-Ion Battery, 4350 mAh (High Capacity)', note: 'Li-Ion', checks: { impres: 1, ip: '', hazloc: '', windport: 0, xpr3000: 1, xpr3000e: 1 } },
        ]},
        { title: 'Non-IMPRES Batteries', items: [
          { img: null, pn: 'PMNN4440', desc: 'Li-Ion Battery, 1600 mAh (Standard)', note: 'Li-Ion', checks: { impres: 0, ip: '', hazloc: '', windport: 0, xpr3000: 1, xpr3000e: 1 } },
          { img: null, pn: 'PMNN4441', desc: 'Li-Ion Battery, 2300 mAh (High Capacity)', note: 'Li-Ion', checks: { impres: 0, ip: '', hazloc: '', windport: 0, xpr3000: 1, xpr3000e: 1 } },
          { img: null, pn: 'PMNN4463', desc: 'NiMH Battery, 1800 mAh', note: 'NiMH', checks: { impres: 0, ip: '', hazloc: '', windport: 0, xpr3000: 1, xpr3000e: 1 } },
        ]},
      ]
    },
    chargers: {
      label: 'Chargers',
      sections: [
        { title: 'IMPRES Single-Unit Chargers', items: [
          { img: null, pn: 'WPLN4232', desc: 'IMPRES Single-Unit Charger (US)', note: '', checks: { impres: 1, ip: '', hazloc: '', windport: 0, xpr3000: 1, xpr3000e: 1 } },
          { img: null, pn: 'WPLN4233', desc: 'IMPRES Single-Unit Charger (UK)', note: '', checks: { impres: 1, ip: '', hazloc: '', windport: 0, xpr3000: 1, xpr3000e: 1 } },
          { img: null, pn: 'WPLN4234', desc: 'IMPRES Single-Unit Charger (EU)', note: '', checks: { impres: 1, ip: '', hazloc: '', windport: 0, xpr3000: 1, xpr3000e: 1 } },
          { img: null, pn: 'WPLN4235', desc: 'IMPRES Single-Unit Charger (AU)', note: '', checks: { impres: 1, ip: '', hazloc: '', windport: 0, xpr3000: 1, xpr3000e: 1 } },
        ]},
        { title: 'Multi-Unit Chargers', items: [
          { img: null, pn: 'WPLN4236', desc: 'IMPRES Multi-Unit Charger, 6-Bank (US)', note: '', checks: { impres: 1, ip: '', hazloc: '', windport: 0, xpr3000: 1, xpr3000e: 1 } },
          { img: null, pn: 'WPLN4237', desc: 'IMPRES Multi-Unit Charger, 6-Bank (INTL)', note: '', checks: { impres: 1, ip: '', hazloc: '', windport: 0, xpr3000: 1, xpr3000e: 1 } },
          { img: null, pn: 'PMPN4174', desc: 'Multi-Unit Charger, 6-Bank (US)', note: '', checks: { impres: 0, ip: '', hazloc: '', windport: 0, xpr3000: 1, xpr3000e: 1 } },
          { img: null, pn: 'PMPN4175', desc: 'Multi-Unit Charger, 6-Bank (INTL)', note: '', checks: { impres: 0, ip: '', hazloc: '', windport: 0, xpr3000: 1, xpr3000e: 1 } },
        ]},
        { title: 'Vehicle Chargers', items: [
          { img: null, pn: 'WPLN4267', desc: 'IMPRES Vehicle Charger', note: '', checks: { impres: 1, ip: '', hazloc: '', windport: 0, xpr3000: 1, xpr3000e: 1 } },
          { img: null, pn: 'PMPN4173', desc: 'Vehicle Charger', note: '', checks: { impres: 0, ip: '', hazloc: '', windport: 0, xpr3000: 1, xpr3000e: 1 } },
        ]},
      ]
    },
    carry: {
      label: 'Carry',
      sections: [
        { title: 'Cases', items: [
          { img: null, pn: 'PMLN6074', desc: 'Carry Case, Soft (Fabric)', note: '', checks: { impres: 0, ip: '', hazloc: '', windport: 0, xpr3000: 1, xpr3000e: 1 } },
          { img: null, pn: 'PMLN6075', desc: 'Carry Case, Hard', note: '', checks: { impres: 0, ip: '', hazloc: '', windport: 0, xpr3000: 1, xpr3000e: 1 } },
        ]},
        { title: 'Belt Clips & Loops', items: [
          { img: null, pn: 'PMLN5609', desc: 'Replacement 2-inch Swivel Belt Loop', note: 'Hard leather', checks: { impres: 0, ip: '', hazloc: '', windport: 0, xpr3000: 1, xpr3000e: 1 } },
          { img: null, pn: 'PMLN5610', desc: 'Replacement 2.5-inch Swivel Belt Loop', note: 'Hard leather', checks: { impres: 0, ip: '', hazloc: '', windport: 0, xpr3000: 1, xpr3000e: 1 } },
          { img: null, pn: 'PMLN5611', desc: 'Replacement 3-inch Leather Swivel Belt Loop', note: 'Hard leather', checks: { impres: 0, ip: '', hazloc: '', windport: 0, xpr3000: 1, xpr3000e: 1 } },
          { img: null, pn: 'PMLN4651', desc: 'Spring Action 2-inch Belt Clip', note: 'Plastic', checks: { impres: 0, ip: '', hazloc: '', windport: 0, xpr3000: 1, xpr3000e: 1 } },
          { img: null, pn: 'PMLN7008', desc: 'Spring Action 2.5-inch Belt Clip', note: 'Plastic', checks: { impres: 0, ip: '', hazloc: '', windport: 0, xpr3000: 1, xpr3000e: 1 } },
        ]},
        { title: 'Carry Straps & Bags', items: [
          { img: null, pn: 'HLN9985', desc: 'Waterproof Bag with Large Strap', note: '', checks: { impres: 0, ip: '', hazloc: '', windport: 0, xpr3000: 1, xpr3000e: 1 } },
          { img: null, pn: 'NTN5243', desc: 'Adjustable Nylon Carrying Strap', note: '', checks: { impres: 0, ip: '', hazloc: '', windport: 0, xpr3000: 1, xpr3000e: 1 } },
          { img: null, pn: 'RLN6486', desc: 'Leather Radio Strap', note: '', checks: { impres: 0, ip: '', hazloc: '', windport: 0, xpr3000: 1, xpr3000e: 1 } },
          { img: null, pn: 'RLN6487', desc: 'Leather Radio Strap -- XL', note: '', checks: { impres: 0, ip: '', hazloc: '', windport: 0, xpr3000: 1, xpr3000e: 1 } },
          { img: null, pn: 'RLN6488', desc: 'Anti-Sway Strap for Leather Radio Straps', note: '', checks: { impres: 0, ip: '', hazloc: '', windport: 0, xpr3000: 1, xpr3000e: 1 } },
        ]},
      ]
    },
    antennas: {
      label: 'Antennas',
      sections: [
        { title: 'UHF Antennas', items: [
          { img: null, pn: 'PMAE4079', desc: 'UHF/GPS Wideband Slim Whip Antenna (403-527 MHz)', note: '15cm, whip', checks: { impres: 0, ip: '', hazloc: '', windport: 0, xpr3000: 1, xpr3000e: 1 } },
          { img: null, pn: 'PMAE4069', desc: 'UHF/GPS Stubby Antenna (403-450 MHz)', note: '9cm, stubby', checks: { impres: 0, ip: '', hazloc: '', windport: 0, xpr3000: 1, xpr3000e: 1 } },
          { img: null, pn: 'PMAE4070', desc: 'UHF/GPS Stubby Antenna (440-490 MHz)', note: '9cm, stubby', checks: { impres: 0, ip: '', hazloc: '', windport: 0, xpr3000: 1, xpr3000e: 1 } },
          { img: null, pn: 'PMAE4071', desc: 'UHF/GPS Stubby Antenna (470-527 MHz)', note: '9cm, stubby', checks: { impres: 0, ip: '', hazloc: '', windport: 0, xpr3000: 1, xpr3000e: 1 } },
          { img: null, pn: 'AN000348A01', desc: 'UHF Stubby Wideband Antenna (400-527 MHz)', note: '9cm, stubby', checks: { impres: 0, ip: '', hazloc: '', windport: 0, xpr3000: 1, xpr3000e: 1 } },
        ]},
        { title: 'VHF Antennas', items: [
          { img: null, pn: 'PMAD4117', desc: 'VHF/GPS Helical Antenna (136-155 MHz)', note: '15cm', checks: { impres: 0, ip: '', hazloc: '', windport: 0, xpr3000: 1, xpr3000e: 1 } },
          { img: null, pn: 'PMAD4116', desc: 'VHF/GPS Helical Antenna (144-165 MHz)', note: '15cm', checks: { impres: 0, ip: '', hazloc: '', windport: 0, xpr3000: 1, xpr3000e: 1 } },
          { img: null, pn: 'PMAD4118', desc: 'VHF/GPS Helical Antenna (152-174 MHz)', note: '15cm', checks: { impres: 0, ip: '', hazloc: '', windport: 0, xpr3000: 1, xpr3000e: 1 } },
          { img: null, pn: 'PMAD4147', desc: 'VHF/GPS Wideband Slim Whip Antenna (136-174 MHz)', note: '20cm', checks: { impres: 0, ip: '', hazloc: '', windport: 0, xpr3000: 1, xpr3000e: 1 } },
          { img: null, pn: 'PMAD4119', desc: 'VHF/GPS Stubby Antenna (136-148 MHz)', note: '9cm', checks: { impres: 0, ip: '', hazloc: '', windport: 0, xpr3000: 1, xpr3000e: 1 } },
          { img: null, pn: 'PMAD4120', desc: 'VHF/GPS Stubby Antenna (150-174 MHz)', note: '9cm', checks: { impres: 0, ip: '', hazloc: '', windport: 0, xpr3000: 1, xpr3000e: 1 } },
          { img: null, pn: 'AN000347A01', desc: 'VHF Stubby Wideband Antenna (136-174 MHz)', note: '9cm', checks: { impres: 0, ip: '', hazloc: '', windport: 0, xpr3000: 1, xpr3000e: 1 } },
        ]},
        { title: 'Antenna Accessories', items: [
          { img: null, pn: '32012144001', desc: 'Yellow Antenna ID Bands, Pack of 10', note: '', checks: { impres: 0, ip: '', hazloc: '', windport: 0, xpr3000: 1, xpr3000e: 1 } },
          { img: null, pn: '32012144002', desc: 'Orange Antenna ID Bands, Pack of 10', note: '', checks: { impres: 0, ip: '', hazloc: '', windport: 0, xpr3000: 1, xpr3000e: 1 } },
          { img: null, pn: '32012144003', desc: 'Green Antenna ID Bands, Pack of 10', note: '', checks: { impres: 0, ip: '', hazloc: '', windport: 0, xpr3000: 1, xpr3000e: 1 } },
          { img: null, pn: '32012144004', desc: 'Blue Antenna ID Bands, Pack of 10', note: '', checks: { impres: 0, ip: '', hazloc: '', windport: 0, xpr3000: 1, xpr3000e: 1 } },
          { img: null, pn: '32012144005', desc: 'Purple Antenna ID Bands, Pack of 10', note: '', checks: { impres: 0, ip: '', hazloc: '', windport: 0, xpr3000: 1, xpr3000e: 1 } },
        ]},
      ]
    },
    cables: {
      label: 'Cables',
      sections: [
        { title: 'Programming Cables', items: [
          { img: null, pn: 'PMKN4147', desc: 'Programming Cable (USB)', note: '', checks: { impres: 0, ip: '', hazloc: '', windport: 0, xpr3000: 1, xpr3000e: 1 } },
        ]},
      ]
    },
  }
};
if (!window.RADIOS_DATA) window.RADIOS_DATA = {};
window.RADIOS_DATA['xpr3000'] = XPR3000_DATA;