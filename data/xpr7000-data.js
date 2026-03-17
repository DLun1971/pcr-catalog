// XPR 7000 Series Accessory Data
// Covers: XPR 7000, XPR 7000e
// Source: MOTOTRBO Professional Tier Accessory Catalog (PDF)
const XPR7000_DATA = {
  categories: {
    rsm: {
      label: 'RSMs',
      sections: [
        { title: 'Remote Speaker Microphones', items: [
          { img: null, pn: 'PMMN4024', desc: 'Windporting RSM, Small (IP54)', note: '', checks: { impres: 0, ip: 'IP54', hazloc: 'UL', windport: 1, xpr7000: 1, xpr7000e: 1 } },
          { img: null, pn: 'PMMN4025', desc: 'IMPRES Windporting RSM, Small (IP54)', note: '', checks: { impres: 1, ip: 'IP54', hazloc: 'UL', windport: 1, xpr7000: 1, xpr7000e: 1 } },
          { img: null, pn: 'PMMN4040', desc: 'Windporting RSM, Small, Submersible (IP57)', note: '', checks: { impres: 0, ip: 'IP57', hazloc: 'UL', windport: 1, xpr7000: 1, xpr7000e: 1 } },
          { img: null, pn: 'PMMN4046', desc: 'IMPRES Windporting RSM, Large, Submersible (IP57)', note: '', checks: { impres: 1, ip: 'IP57', hazloc: 'UL', windport: 1, xpr7000: 1, xpr7000e: 1 } },
          { img: null, pn: 'PMMN4050', desc: 'IMPRES Noise-Canceling RSM, Large (IP54)', note: '', checks: { impres: 1, ip: 'IP54', hazloc: 'UL', windport: 0, xpr7000: 1, xpr7000e: 1 } },
          { img: null, pn: 'NNTN8382', desc: 'IMPRES INC Dual Mic Noise Suppression RSM, Submersible (IP57)', note: '', checks: { impres: 1, ip: 'IP57', hazloc: 'UL', windport: 0, xpr7000: 1, xpr7000e: 1 } },
          { img: null, pn: 'NNTN8383', desc: 'IMPRES INC Dual Mic Noise Suppression RSM (IP54)', note: '', checks: { impres: 1, ip: 'IP54', hazloc: 'UL', windport: 0, xpr7000: 1, xpr7000e: 1 } },
          { img: null, pn: 'PMMN4067', desc: 'IMPRES Windporting RSM (IP64)', note: '', checks: { impres: 1, ip: 'IP64', hazloc: '', windport: 1, xpr7000: 0, xpr7000e: 1 } },
          { img: null, pn: 'PMMN4094', desc: 'IMPRES ATEX Active Noise-Canceling RSM, Large Front PTT + Side PTT (IP67)', note: 'ATEX', checks: { impres: 1, ip: 'IP67', hazloc: 'ATEX', windport: 0, xpr7000: 0, xpr7000e: 1 } },
          { img: null, pn: 'PMMN4110', desc: 'IMPRES ATEX Omni RSM, Large Front PTT + Side PTT (IP67)', note: 'ATEX', checks: { impres: 1, ip: 'IP67', hazloc: 'ATEX', windport: 1, xpr7000: 0, xpr7000e: 1 } },
          { img: null, pn: 'PMMN4102', desc: 'IMPRES Active Noise-Canceling RSM, Large Front PTT + Side PTT (IP67)', note: '', checks: { impres: 1, ip: 'IP67', hazloc: 'UL', windport: 0, xpr7000: 0, xpr7000e: 1 } },
          { img: null, pn: 'PMMN4113', desc: 'IMPRES Omni RSM, Large Front PTT + Side PTT (IP67)', note: '', checks: { impres: 1, ip: 'IP67', hazloc: 'UL', windport: 1, xpr7000: 0, xpr7000e: 1 } },
          { img: null, pn: 'PMMN4099', desc: 'IMPRES Windporting RSM, Large, Submersible (IP68)', note: '', checks: { impres: 1, ip: 'IP68', hazloc: 'UL', windport: 1, xpr7000: 1, xpr7000e: 1 } },
        ]},
        { title: 'RSM Accessories - Standard 3.5mm Jack', items: [
          { img: null, pn: 'AARLN4885', desc: 'Receive-Only Covered Earbud with Coiled Cord', note: '', checks: { impres: 0, ip: '', hazloc: 'UL', windport: 0, xpr7000: 1, xpr7000e: 1 } },
          { img: null, pn: 'RLN4941',   desc: 'Receive-Only Earpiece with Translucent Tube and Rubber Eartip', note: '', checks: { impres: 0, ip: '', hazloc: 'UL', windport: 0, xpr7000: 1, xpr7000e: 1 } },
          { img: null, pn: 'PMLN7560',  desc: 'Receive-Only Earpiece with Translucent Tube and Rubber Eartip', note: '', checks: { impres: 0, ip: '', hazloc: '', windport: 0, xpr7000: 1, xpr7000e: 1 } },
          { img: null, pn: 'WADN4190',  desc: 'Receive-Only Flexible Earpiece', note: '', checks: { impres: 0, ip: '', hazloc: 'UL', windport: 0, xpr7000: 1, xpr7000e: 1 } },
          { img: null, pn: 'PMLN4620',  desc: 'Receive-Only D-Shell Earpiece', note: '', checks: { impres: 0, ip: '', hazloc: 'UL', windport: 0, xpr7000: 1, xpr7000e: 1 } },
          { img: null, pn: 'PMLN7396',  desc: 'D-Shell Adjustable Earpiece', note: '', checks: { impres: 0, ip: '', hazloc: '', windport: 0, xpr7000: 1, xpr7000e: 1 } },
          { img: null, pn: 'PMLN7188',  desc: 'Translucent Tube RX Only (for ATEX RSMs)', note: 'For PMMN4094/4110/4102/4113', checks: { impres: 0, ip: '', hazloc: 'ATEX', windport: 0, xpr7000: 0, xpr7000e: 1 } },
        ]},
        { title: 'RSM Accessories - Threaded 3.5mm Jack', items: [
          { img: null, pn: 'BDN6719',   desc: 'One-Wire Flexible Ear Receiver, Black (NNTN8383 only)', note: '', checks: { impres: 0, ip: '', hazloc: 'UL', windport: 0, xpr7000: 1, xpr7000e: 1 } },
          { img: null, pn: 'BDN6726',   desc: 'One-Wire Earpiece, Black (NNTN8383 only)', note: '', checks: { impres: 0, ip: '', hazloc: 'UL', windport: 0, xpr7000: 1, xpr7000e: 1 } },
        ]},
        { title: 'RSM Replacement Parts', items: [
          { img: null, pn: 'RLN6074',   desc: 'Replacement Coil Cord Kit (for PMMN4024, PMMN4040)', note: '', checks: { impres: 0, ip: '', hazloc: '', windport: 0, xpr7000: 1, xpr7000e: 1 } },
          { img: null, pn: 'RLN6075',   desc: 'Replacement Coil Cord Kit (for PMMN4025, PMMN4046, PMMN4050)', note: '', checks: { impres: 0, ip: '', hazloc: '', windport: 0, xpr7000: 1, xpr7000e: 1 } },
        ]},
      ]
    },
    surveillance: {
      label: 'Surveillance',
      sections: [
        { title: 'Surveillance Kits', items: [
          { img: null, pn: 'PMLN6125',  desc: '1-Wire Receive-Only Earpiece, Black', note: '', checks: { impres: 1, ip: '', hazloc: 'UL', windport: 0, xpr7000: 1, xpr7000e: 1 } },
          { img: null, pn: 'PMLN6126',  desc: '1-Wire Receive-Only Earpiece, Beige', note: '', checks: { impres: 1, ip: '', hazloc: 'UL', windport: 0, xpr7000: 1, xpr7000e: 1 } },
          { img: null, pn: 'PMLN6127',  desc: 'IMPRES 2-Wire Earhook with Earbud Earpiece, Black', note: '', checks: { impres: 1, ip: '', hazloc: 'UL', windport: 0, xpr7000: 1, xpr7000e: 1 } },
          { img: null, pn: 'PMLN6128',  desc: 'IMPRES 2-Wire Earhook with Earbud Earpiece, Beige', note: '', checks: { impres: 1, ip: '', hazloc: 'UL', windport: 0, xpr7000: 1, xpr7000e: 1 } },
          { img: null, pn: 'NNTN8459',  desc: '1-Wire Surveillance Kit with Translucent Tube, Black', note: '', checks: { impres: 0, ip: '', hazloc: 'UL', windport: 0, xpr7000: 1, xpr7000e: 1 } },
          { img: null, pn: 'PMLN6129',  desc: 'IMPRES 2-Wire Surveillance Kit with Translucent Tube, Black', note: '', checks: { impres: 1, ip: '', hazloc: 'UL', windport: 0, xpr7000: 1, xpr7000e: 1 } },
          { img: null, pn: 'PMLN6130',  desc: 'IMPRES 2-Wire Surveillance Kit with Translucent Tube, Beige', note: '', checks: { impres: 1, ip: '', hazloc: 'UL', windport: 0, xpr7000: 1, xpr7000e: 1 } },
          { img: null, pn: 'PMLN6123',  desc: 'IMPRES 3-Wire Surveillance Kit with Translucent Tube, Black', note: '', checks: { impres: 1, ip: '', hazloc: 'UL', windport: 0, xpr7000: 1, xpr7000e: 1 } },
          { img: null, pn: 'PMLN6124',  desc: 'IMPRES 3-Wire Surveillance Kit with Translucent Tube, Beige', note: '', checks: { impres: 1, ip: '', hazloc: 'UL', windport: 0, xpr7000: 1, xpr7000e: 1 } },
          { img: null, pn: 'PMLN7269',  desc: '2-Wire Surveillance Kit with Translucent Tube, Black', note: '', checks: { impres: 0, ip: '', hazloc: '', windport: 0, xpr7000: 1, xpr7000e: 1 } },
          { img: null, pn: 'PMLN7270',  desc: '2-Wire Surveillance Kit with Translucent Tube, Beige', note: '', checks: { impres: 0, ip: '', hazloc: '', windport: 0, xpr7000: 1, xpr7000e: 1 } },
          { img: null, pn: 'PMLN6754',  desc: 'IMPRES 3-Wire Surveillance Kit with QD Translucent Tube, Black', note: '', checks: { impres: 1, ip: '', hazloc: '', windport: 0, xpr7000: 1, xpr7000e: 1 } },
          { img: null, pn: 'PMLN6755',  desc: 'IMPRES 3-Wire Surveillance Kit with QD Translucent Tube, Beige', note: '', checks: { impres: 1, ip: '', hazloc: '', windport: 0, xpr7000: 1, xpr7000e: 1 } },
          { img: null, pn: 'PMLN7158',  desc: '1-Wire Surveillance Kit, Black', note: '', checks: { impres: 0, ip: '', hazloc: '', windport: 0, xpr7000: 1, xpr7000e: 1 } },
          { img: null, pn: 'PMLN7157',  desc: '2-Wire Surveillance Kit, Black', note: '', checks: { impres: 0, ip: '', hazloc: '', windport: 0, xpr7000: 1, xpr7000e: 1 } },
        ]},
        { title: 'Surveillance Replacement Parts', items: [
          { img: null, pn: 'RLN6242',     desc: 'Low Noise Kit with Translucent Tube and 1 Clear Rubber Eartip', note: '', checks: { impres: 0, ip: '', hazloc: '', windport: 0, xpr7000: 1, xpr7000e: 1 } },
          { img: null, pn: 'RLN6282',     desc: 'Replacement Standard Clear Rubber Eartip, Pack of 50', note: '', checks: { impres: 0, ip: '', hazloc: '', windport: 0, xpr7000: 1, xpr7000e: 1 } },
          { img: null, pn: '5080384F72',  desc: 'Replacement Foam Plugs for RLN6242, Pack of 50 Pairs (NRR 24dB)', note: '', checks: { impres: 0, ip: '', hazloc: '', windport: 0, xpr7000: 1, xpr7000e: 1 } },
          { img: null, pn: 'RLN5886',     desc: 'Low Noise Kit with 1 Clear Rubber Eartip', note: '', checks: { impres: 0, ip: '', hazloc: '', windport: 0, xpr7000: 1, xpr7000e: 1 } },
          { img: null, pn: '67009254001', desc: 'Replacement Standard Clear Rubber Eartip, Pack of 10', note: '', checks: { impres: 0, ip: '', hazloc: '', windport: 0, xpr7000: 1, xpr7000e: 1 } },
          { img: null, pn: 'HKLN4608',   desc: 'Replacement QD Translucent Tube with 1 Clear Rubber Eartip (for PMLN5724/26)', note: '', checks: { impres: 0, ip: '', hazloc: '', windport: 0, xpr7000: 1, xpr7000e: 1 } },
          { img: null, pn: 'PMLN6175',   desc: 'Replacement QD Translucent Tube with 1 Clear Rubber Eartip (for PMLN5957)', note: '', checks: { impres: 0, ip: '', hazloc: '', windport: 0, xpr7000: 1, xpr7000e: 1 } },
        ]},
      ]
    },
    headsets: {
      label: 'Headsets',
      sections: [
        { title: 'Heavy Duty Headsets', items: [
          { img: null, pn: 'PMLN6760',  desc: 'Heavy Duty Behind-the-Head Headset, Dual Muff, Noise-Canceling Boom (IP54)', note: 'See user guide for replacement parts', checks: { impres: 1, ip: 'IP54', hazloc: '', windport: 0, xpr7000: 1, xpr7000e: 1 } },
          { img: null, pn: 'PMLN6763',  desc: 'Heavy Duty Behind-the-Head Headset, Dual Muff, Noise-Canceling Boom (IP54) HazLoc', note: 'See user guide for replacement parts', checks: { impres: 1, ip: 'IP54', hazloc: 'UL', windport: 0, xpr7000: 1, xpr7000e: 1 } },
          { img: null, pn: 'PMLN7464',  desc: 'Heavy Duty Over-the-Head Headset, Dual Muff, Noise-Canceling Boom (IP54)', note: 'See user guide for replacement parts', checks: { impres: 1, ip: 'IP54', hazloc: '', windport: 0, xpr7000: 1, xpr7000e: 1 } },
          { img: null, pn: 'PMLN7465',  desc: 'Heavy Duty Over-the-Head Headset, Dual Muff, Noise-Canceling Boom (IP54) HazLoc', note: 'See user guide for replacement parts', checks: { impres: 1, ip: 'IP54', hazloc: 'UL', windport: 0, xpr7000: 1, xpr7000e: 1 } },
        ]},
        { title: 'Mag One Headsets', items: [
          { img: null, pn: 'PMLN6635',  desc: 'Lightweight Over-the-Head Headset, Single Muff, In-Line PTT', note: '', checks: { impres: 0, ip: '', hazloc: 'UL', windport: 0, xpr7000: 1, xpr7000e: 1 } },
          { img: null, pn: 'PMLN6761',  desc: 'Mag One Ultra-Lite Behind-the-Head Headset, Single Ear', note: 'Replacement parts: 6104000K01 windscreen, 4204005K01 clothing clip', checks: { impres: 1, ip: '', hazloc: '', windport: 0, xpr7000: 1, xpr7000e: 1 } },
          { img: null, pn: 'PMLN6759',  desc: 'IMPRES Temple Transducer with Boom Mic and In-Line PTT', note: 'Bone conduction', checks: { impres: 1, ip: '', hazloc: '', windport: 0, xpr7000: 1, xpr7000e: 1 } },
        ]},
        { title: '3M Peltor Headsets', items: [
          { img: null, pn: 'PMLN8265',  desc: 'CH-3 Series Over-the-Head Headset with Nexus Connector, Dual Ear (NRR 26dB)', note: '3M Peltor MT74H52A-110-34A', checks: { impres: 0, ip: '', hazloc: '', windport: 0, xpr7000: 1, xpr7000e: 1 } },
          { img: null, pn: 'PMLN8266',  desc: 'CH-3 Series Neckband Headset with Nexus Connector, Dual Ear (NRR 24dB)', note: '3M Peltor MT74H52A-110-34B', checks: { impres: 0, ip: '', hazloc: '', windport: 0, xpr7000: 1, xpr7000e: 1 } },
          { img: null, pn: 'PMLN8267',  desc: 'CH-3 Series Hard Hat Attached with Nexus Connector, Dual Ear (NRR 24dB)', note: '3M Peltor MT74H52P3E-110-34A. Hat not included.', checks: { impres: 0, ip: '', hazloc: '', windport: 0, xpr7000: 1, xpr7000e: 1 } },
          { img: null, pn: 'PMLN8297',  desc: 'PTT Nexus Adapter (for 3M Peltor headsets)', note: '3M Peltor FL40114-34', checks: { impres: 0, ip: '', hazloc: '', windport: 0, xpr7000: 1, xpr7000e: 1 } },
        ]},
        { title: 'Mag One Earpieces', items: [
          { img: null, pn: 'PMLN5733',  desc: 'Mag One Earbud with In-Line Mic and PTT', note: '', checks: { impres: 0, ip: '', hazloc: '', windport: 0, xpr7000: 1, xpr7000e: 1 } },
          { img: null, pn: 'PMLN5727',  desc: 'Mag One Swivel Earpiece with In-Line Mic and PTT', note: '', checks: { impres: 0, ip: '', hazloc: 'UL', windport: 0, xpr7000: 1, xpr7000e: 1 } },
          { img: null, pn: 'PMLN5732',  desc: 'Mag One Earset with Boom Mic and In-Line PTT', note: '', checks: { impres: 0, ip: '', hazloc: '', windport: 0, xpr7000: 1, xpr7000e: 1 } },
          { img: null, pn: 'PMLN6757',  desc: 'Adjustable D-Style Earpiece with In-Line Mic and PTT', note: '', checks: { impres: 0, ip: '', hazloc: '', windport: 0, xpr7000: 1, xpr7000e: 1 } },
        ]},
        { title: 'Hearing Protection', items: [
          { img: null, pn: 'RLN6511',  desc: 'EP7-Small Hearing Protector [Sonic Defenders] Ultra Earplugs (NRR 28dB)', note: '', checks: { impres: 0, ip: '', hazloc: '', windport: 0, xpr7000: 1, xpr7000e: 1 } },
          { img: null, pn: 'RLN6512',  desc: 'EP7-Medium Hearing Protector [Sonic Defenders] Ultra Earplugs (NRR 28dB)', note: '', checks: { impres: 0, ip: '', hazloc: '', windport: 0, xpr7000: 1, xpr7000e: 1 } },
          { img: null, pn: 'RLN6513',  desc: 'EP7-Large Hearing Protector [Sonic Defenders] Ultra Earplugs (NRR 28dB)', note: '', checks: { impres: 0, ip: '', hazloc: '', windport: 0, xpr7000: 1, xpr7000e: 1 } },
        ]},
      ]
    },
batteries: {
  label: 'Batteries',
  cols: ['xpr7000','xpr7000e','Chem','Typical Capacity (mAh)','Dims','Weight','IP','HazLoc','Temp'],
  sections: [
    { title: 'Li-Ion Batteries', items: [
      { img: null, pn: 'PMNN4491', desc: 'IMPRES Li-Ion 2150mAh Battery',
        checks: { impres: 1, chem: 'Li-Ion', mah: 2150, dims: null, weight: null, ip: null, hazloc: null, temp: null, xpr7000: 1, xpr7000e: 1 } },
      { img: null, pn: 'PMNN4409', desc: 'IMPRES Li-Ion 2300mAh Battery',
        checks: { impres: 1, chem: 'Li-Ion', mah: 2300, dims: null, weight: null, ip: null, hazloc: null, temp: null, xpr7000: 1, xpr7000e: 1 } },
      { img: null, pn: 'PMNN4407', desc: 'Li-Ion 2300mAh Battery',
        checks: { impres: 0, chem: 'Li-Ion', mah: 2300, dims: null, weight: null, ip: null, hazloc: null, temp: null, xpr7000: 1, xpr7000e: 1 } },
      { img: null, pn: 'PMNN4468', desc: 'IMPRES Li-Ion 2300mAh Slim Battery',
        checks: { impres: 1, chem: 'Li-Ion', mah: 2300, dims: null, weight: null, ip: null, hazloc: null, temp: null, xpr7000: 0, xpr7000e: 1 } },
      { img: null, pn: 'PMNN4424', desc: 'IMPRES Li-Ion 3000mAh Battery',
        checks: { impres: 1, chem: 'Li-Ion', mah: 3000, dims: null, weight: null, ip: null, hazloc: null, temp: null, xpr7000: 1, xpr7000e: 1 } },
      { img: null, pn: 'PMNN4477', desc: 'IMPRES Li-Ion 3600mAh Battery',
        checks: { impres: 1, chem: 'Li-Ion', mah: 3600, dims: null, weight: null, ip: null, hazloc: null, temp: null, xpr7000: 1, xpr7000e: 1 } },
    ]},
  ]
},
    chargers: {
      label: 'Chargers',
      sections: [
        { title: 'Single-Unit Chargers', items: [
          { img: null, pn: 'WPLN4226',  desc: 'IMPRES Single-Unit Charger, US/NA Plug', note: '', checks: { impres: 1, ip: '', hazloc: '', windport: 0, xpr7000: 1, xpr7000e: 1 } },
          { img: null, pn: 'WPLN4228',  desc: 'IMPRES Single-Unit Charger, EU Plug', note: '', checks: { impres: 1, ip: '', hazloc: '', windport: 0, xpr7000: 1, xpr7000e: 1 } },
          { img: null, pn: 'WPLN4232',  desc: 'IMPRES Single-Unit Charger, UK Plug', note: '', checks: { impres: 1, ip: '', hazloc: '', windport: 0, xpr7000: 1, xpr7000e: 1 } },
          { img: null, pn: 'WPLN4253',  desc: 'IMPRES Single-Unit Charger, AUS Plug', note: '', checks: { impres: 1, ip: '', hazloc: '', windport: 0, xpr7000: 1, xpr7000e: 1 } },
        ]},
        { title: 'Multi-Unit Chargers', items: [
          { img: null, pn: 'WPLN4284',  desc: 'IMPRES Multi-Unit Charger, US/NA Plug (6-pocket)', note: '', checks: { impres: 1, ip: '', hazloc: '', windport: 0, xpr7000: 1, xpr7000e: 1 } },
          { img: null, pn: 'WPLN4285',  desc: 'IMPRES Multi-Unit Charger, EU Plug (6-pocket)', note: '', checks: { impres: 1, ip: '', hazloc: '', windport: 0, xpr7000: 1, xpr7000e: 1 } },
        ]},
        { title: 'Vehicle Chargers', items: [
          { img: null, pn: 'NNTN7616',  desc: 'IMPRES Single-Unit Rapid Rate Vehicular Charger, Heavy-Duty Permanent Mount', note: 'Hard-wired to vehicle battery', checks: { impres: 1, ip: '', hazloc: '', windport: 0, xpr7000: 1, xpr7000e: 1 } },
        ]},
      ]
    },
    carry: {
      label: 'Carry',
      sections: [
        { title: 'Carry Cases', items: [
          { img: null, pn: 'PMLN4651',  desc: 'Spring Action 2-Inch Belt Clip', note: '', checks: { impres: 0, ip: '', hazloc: '', windport: 0, xpr7000: 1, xpr7000e: 1 } },
          { img: null, pn: 'PMLN7008',  desc: 'Spring Action 2.5-Inch Belt Clip', note: '', checks: { impres: 0, ip: '', hazloc: '', windport: 0, xpr7000: 1, xpr7000e: 1 } },
          { img: null, pn: 'PMLN5610',  desc: 'Replacement 2.5-Inch Swivel Belt Loop', note: '', checks: { impres: 0, ip: '', hazloc: '', windport: 0, xpr7000: 1, xpr7000e: 1 } },
          { img: null, pn: 'PMLN5611',  desc: 'Replacement 3-Inch Leather Swivel Belt Loop', note: '', checks: { impres: 0, ip: '', hazloc: '', windport: 0, xpr7000: 1, xpr7000e: 1 } },
          { img: null, pn: 'HLN9985',   desc: 'Waterproof Bag with Large Strap', note: '', checks: { impres: 0, ip: '', hazloc: '', windport: 0, xpr7000: 1, xpr7000e: 1 } },
          { img: null, pn: 'NTN5243',   desc: 'Adjustable Nylon Carrying Strap', note: '', checks: { impres: 0, ip: '', hazloc: '', windport: 0, xpr7000: 1, xpr7000e: 1 } },
          { img: null, pn: 'RLN6486',   desc: 'Leather Radio Strap', note: '', checks: { impres: 0, ip: '', hazloc: '', windport: 0, xpr7000: 1, xpr7000e: 1 } },
          { img: null, pn: 'RLN6487',   desc: 'Leather Radio Strap - XL', note: '', checks: { impres: 0, ip: '', hazloc: '', windport: 0, xpr7000: 1, xpr7000e: 1 } },
          { img: null, pn: 'RLN6488',   desc: 'Anti-Sway Strap for Leather Radio Straps', note: '', checks: { impres: 0, ip: '', hazloc: '', windport: 0, xpr7000: 1, xpr7000e: 1 } },
        ]},
      ]
    },
    antennas: {
      label: 'Antennas',
      sections: [
        { title: 'Antennas', items: [
          { img: null, pn: 'PMAE4079',     desc: 'UHF/GPS Wideband Slim Whip Antenna (403-527 MHz, 15cm)', note: '', checks: { impres: 0, ip: '', hazloc: '', windport: 0, xpr7000: 1, xpr7000e: 1 } },
          { img: null, pn: 'PMAD4117',     desc: 'VHF/GPS Helical Antenna (136-155 MHz, 15cm)', note: '', checks: { impres: 0, ip: '', hazloc: '', windport: 0, xpr7000: 1, xpr7000e: 1 } },
          { img: null, pn: 'PMAD4116',     desc: 'VHF/GPS Helical Antenna (144-165 MHz, 15cm)', note: '', checks: { impres: 0, ip: '', hazloc: '', windport: 0, xpr7000: 1, xpr7000e: 1 } },
          { img: null, pn: 'PMAD4118',     desc: 'VHF/GPS Helical Antenna (152-174 MHz, 15cm)', note: '', checks: { impres: 0, ip: '', hazloc: '', windport: 0, xpr7000: 1, xpr7000e: 1 } },
          { img: null, pn: 'PMAD4147',     desc: 'VHF/GPS Wideband Slim Whip Antenna (136-174 MHz, 20cm)', note: '', checks: { impres: 0, ip: '', hazloc: '', windport: 0, xpr7000: 1, xpr7000e: 1 } },
          { img: null, pn: 'PMAE4069',     desc: 'UHF/GPS Stubby Antenna (403-450 MHz, 9cm)', note: '', checks: { impres: 0, ip: '', hazloc: '', windport: 0, xpr7000: 1, xpr7000e: 1 } },
          { img: null, pn: 'PMAE4070',     desc: 'UHF/GPS Stubby Antenna (440-490 MHz, 9cm)', note: '', checks: { impres: 0, ip: '', hazloc: '', windport: 0, xpr7000: 1, xpr7000e: 1 } },
          { img: null, pn: 'PMAE4071',     desc: 'UHF/GPS Stubby Antenna (470-527 MHz, 9cm)', note: '', checks: { impres: 0, ip: '', hazloc: '', windport: 0, xpr7000: 1, xpr7000e: 1 } },
          { img: null, pn: 'PMAD4119',     desc: 'VHF/GPS Stubby Antenna (136-148 MHz, 9cm)', note: '', checks: { impres: 0, ip: '', hazloc: '', windport: 0, xpr7000: 1, xpr7000e: 1 } },
          { img: null, pn: 'PMAD4120',     desc: 'VHF/GPS Stubby Antenna (146-160 MHz, 9cm)', note: '', checks: { impres: 0, ip: '', hazloc: '', windport: 0, xpr7000: 1, xpr7000e: 1 } },
          { img: null, pn: 'PMAD4121',     desc: 'VHF Stubby Antenna (160-174 MHz, 9cm)', note: '', checks: { impres: 0, ip: '', hazloc: '', windport: 0, xpr7000: 1, xpr7000e: 1 } },
        ]},
        { title: 'Antenna Accessories', items: [
          { img: null, pn: '32012144001', desc: 'Gray Antenna ID Bands, Pack of 10', note: '', checks: { impres: 0, ip: '', hazloc: '', windport: 0, xpr7000: 1, xpr7000e: 1 } },
          { img: null, pn: '32012144002', desc: 'Yellow Antenna ID Bands, Pack of 10', note: '', checks: { impres: 0, ip: '', hazloc: '', windport: 0, xpr7000: 1, xpr7000e: 1 } },
          { img: null, pn: '32012144003', desc: 'Green Antenna ID Bands, Pack of 10', note: '', checks: { impres: 0, ip: '', hazloc: '', windport: 0, xpr7000: 1, xpr7000e: 1 } },
          { img: null, pn: '32012144004', desc: 'Blue Antenna ID Bands, Pack of 10', note: '', checks: { impres: 0, ip: '', hazloc: '', windport: 0, xpr7000: 1, xpr7000e: 1 } },
          { img: null, pn: '32012144005', desc: 'Purple Antenna ID Bands, Pack of 10', note: '', checks: { impres: 0, ip: '', hazloc: '', windport: 0, xpr7000: 1, xpr7000e: 1 } },
        ]},
      ]
    },
    cables: {
      label: 'Cables',
      sections: [
        { title: 'Programming Cables', items: [
          { img: null, pn: 'PMKN4147',  desc: 'Programming Cable (USB)', note: '', checks: { impres: 0, ip: '', hazloc: '', windport: 0, xpr7000: 1, xpr7000e: 1 } },
        ]},
      ]
    },
    software: {
      label: 'Software & Licenses',
      sections: [
        { title: 'IMPRES Battery Fleet Management (License Keys)', items: [
          { img: null, pn: 'HKVN4036',  desc: 'IMPRES Battery Fleet Management Entitlement ID (EID) - NA/CAN', note: '', checks: { impres: 0, ip: '', hazloc: '', windport: 0, xpr7000: 1, xpr7000e: 1 } },
          { img: null, pn: 'HKVN4037',  desc: 'IMPRES Battery Fleet Management Entitlement ID (EID) - EMEA', note: '', checks: { impres: 0, ip: '', hazloc: '', windport: 0, xpr7000: 1, xpr7000e: 1 } },
          { img: null, pn: 'HKVN4038',  desc: 'IMPRES Battery Fleet Management Entitlement ID (EID) - Latin America', note: '', checks: { impres: 0, ip: '', hazloc: '', windport: 0, xpr7000: 1, xpr7000e: 1 } },
          { img: null, pn: 'HKVN4039',  desc: 'IMPRES Battery Fleet Management Entitlement ID (EID) - Asia', note: '', checks: { impres: 0, ip: '', hazloc: '', windport: 0, xpr7000: 1, xpr7000e: 1 } },
        ]},
      ]
    },
  }
};
if (!window.RADIOS_DATA) window.RADIOS_DATA = {};
window.RADIOS_DATA['xpr7000'] = XPR7000_DATA;
