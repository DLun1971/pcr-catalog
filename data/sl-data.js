// SL Series Accessory Data
// Covers: SL 3500e, SL 3500Max, SL 7000, SL 7000e
// Source: MOTOTRBO Professional Tier Accessory Catalog (PDF)
const SL_DATA = {
  categories: {
    rsm: {
      label: 'RSMs',
      sections: [
        { title: 'Remote Speaker Microphones', items: [
          { img: null, pn: 'PMMN4125', desc: 'RM250 RSM (IP54)', note: 'SL Series specific', checks: { impres: 0, ip: 'IP54', hazloc: '', windport: 0, sl3500e: 1, sl3500max: 1, sl7000: 1, sl7000e: 1 } },
          { img: null, pn: 'PMMN4071', desc: 'IMPRES Noise-Canceling RSM, Large (IP54)', note: '', checks: { impres: 1, ip: 'IP54', hazloc: 'UL', windport: 0, sl3500e: 1, sl3500max: 1, sl7000: 1, sl7000e: 1 } },
          { img: null, pn: 'PMMN4073', desc: 'IMPRES Windporting RSM, Small (IP54)', note: '', checks: { impres: 1, ip: 'IP54', hazloc: 'UL', windport: 1, sl3500e: 1, sl3500max: 1, sl7000: 1, sl7000e: 1 } },
          { img: null, pn: 'PMMN4075', desc: 'RSM, Small (IP54)', note: '', checks: { impres: 0, ip: 'IP54', hazloc: '', windport: 0, sl3500e: 1, sl3500max: 1, sl7000: 1, sl7000e: 1 } },
          { img: null, pn: 'PMMN4076', desc: 'Noise-Canceling RSM, Large (IP54)', note: '', checks: { impres: 0, ip: 'IP54', hazloc: '', windport: 0, sl3500e: 1, sl3500max: 1, sl7000: 1, sl7000e: 1 } },
        ]},
      ]
    },
    surveillance: {
      label: 'Surveillance',
      sections: [
        { title: 'Surveillance Kits', items: [
          { img: null, pn: 'PMLN7157', desc: '1-Wire Surveillance Kit (IP54)', note: '', checks: { impres: 0, ip: 'IP54', hazloc: '', windport: 0, sl3500e: 1, sl3500max: 1, sl7000: 1, sl7000e: 1 } },
          { img: null, pn: 'PMLN7158', desc: '2-Wire Surveillance Kit (IP54)', note: '', checks: { impres: 0, ip: 'IP54', hazloc: '', windport: 0, sl3500e: 1, sl3500max: 1, sl7000: 1, sl7000e: 1 } },
          { img: null, pn: 'PMLN6754', desc: 'Earpiece Replacement Kit', note: '', checks: { impres: 0, ip: '', hazloc: '', windport: 0, sl3500e: 1, sl3500max: 1, sl7000: 1, sl7000e: 1 } },
          { img: null, pn: 'PMLN6755', desc: 'Earpiece Replacement Kit, Large', note: '', checks: { impres: 0, ip: '', hazloc: '', windport: 0, sl3500e: 1, sl3500max: 1, sl7000: 1, sl7000e: 1 } },
        ]},
      ]
    },
    headsets: {
      label: 'Headsets & Earpieces',
      sections: [
        { title: 'Mag One Headsets', items: [
          { img: null, pn: 'PMLN4620', desc: 'Mag One Receive-Only Earpiece', note: '', checks: { impres: 0, ip: '', hazloc: '', windport: 0, sl3500e: 1, sl3500max: 1, sl7000: 1, sl7000e: 1 } },
          { img: null, pn: 'PMLN4443', desc: 'Mag One Single-Wire Lapel Microphone with Earpiece', note: '', checks: { impres: 0, ip: '', hazloc: '', windport: 0, sl3500e: 1, sl3500max: 1, sl7000: 1, sl7000e: 1 } },
          { img: null, pn: 'PMLN5101', desc: 'Mag One Over-the-Ear Headset with Boom Microphone', note: '', checks: { impres: 0, ip: '', hazloc: '', windport: 0, sl3500e: 1, sl3500max: 1, sl7000: 1, sl7000e: 1 } },
          { img: null, pn: 'PMLN5096', desc: 'Mag One Two-Wire Surveillance Kit with Clear Earpiece', note: '', checks: { impres: 0, ip: '', hazloc: '', windport: 0, sl3500e: 1, sl3500max: 1, sl7000: 1, sl7000e: 1 } },
          { img: null, pn: 'PMLN5097', desc: 'Mag One Two-Wire Surveillance Kit with Beige Earpiece', note: '', checks: { impres: 0, ip: '', hazloc: '', windport: 0, sl3500e: 1, sl3500max: 1, sl7000: 1, sl7000e: 1 } },
        ]},
        { title: 'Bluetooth Accessories', items: [
          { img: null, pn: 'NNTN8189', desc: 'IMPRES Bluetooth RSM', note: '', checks: { impres: 1, ip: '', hazloc: '', windport: 0, sl3500e: 0, sl3500max: 0, sl7000: 1, sl7000e: 1 } },
          { img: null, pn: 'NN003748A01', desc: 'Bluetooth Earpiece (Motorola)', note: 'BT', checks: { impres: 0, ip: '', hazloc: '', windport: 0, sl3500e: 0, sl3500max: 0, sl7000: 1, sl7000e: 1 } },
        ]},
      ]
    },
    batteries: {
      label: 'Batteries',
      sections: [
        {
          title: 'SL 7000 / 7000e Batteries',
          items: [
            { img: null, pn: 'PMNN4440', desc: 'Li-Ion 1700mAh IP68 Battery', note: '96x56x15mm, 110g', checks: { impres: 0, ip: 'IP68', hazloc: '', windport: 0, sl3500e: 0, sl3500max: 0, sl7000: 1, sl7000e: 1 } },
            { img: null, pn: 'PMNN4502', desc: 'IMPRES Li-Ion 3000mAh IP68 Battery', note: '96x56x23mm, 155g', checks: { impres: 1, ip: 'IP68', hazloc: '', windport: 0, sl3500e: 0, sl3500max: 0, sl7000: 1, sl7000e: 1 } },
            { img: null, pn: 'PMNN4511', desc: 'IMPRES Li-Ion 2900mAh IP68 Battery', note: '96x56x23mm, 155g, -20 to +60C', checks: { impres: 1, ip: 'IP68', hazloc: 'UL', windport: 0, sl3500e: 0, sl3500max: 0, sl7000: 1, sl7000e: 1 } },
          ]
        },
        {
          title: 'SL 300 / 3500e / 3500Max Batteries',
          items: [
            { img: null, pn: 'PMNN4468', desc: 'Li-Ion 2300mAh Battery', note: '12x36x54mm, 50g', checks: { impres: 0, ip: '', hazloc: '', windport: 0, sl3500e: 1, sl3500max: 1, sl7000: 0, sl7000e: 0 } },
            { img: null, pn: 'PMLN6745', desc: 'Replacement Battery Cover (for PMNN4468)', note: '', checks: { impres: 0, ip: '', hazloc: '', windport: 0, sl3500e: 1, sl3500max: 1, sl7000: 0, sl7000e: 0 } },
            { img: null, pn: 'PMLN7074', desc: 'Replacement Battery Cover (for PMNN4468)', note: '', checks: { impres: 0, ip: '', hazloc: '', windport: 0, sl3500e: 1, sl3500max: 1, sl7000: 0, sl7000e: 0 } },
          ]
        }
      ]
    },
    chargers: {
      label: 'Chargers',
      sections: [
        { title: 'IMPRES Single-Unit Slim Chargers', items: [
          { img: null, pn: 'WPLN4228', desc: 'IMPRES Single-Unit Slim Charger (US)', note: 'SL Series specific', checks: { impres: 1, ip: '', hazloc: '', windport: 0, sl3500e: 1, sl3500max: 1, sl7000: 1, sl7000e: 1 } },
          { img: null, pn: 'WPLN4229', desc: 'IMPRES Single-Unit Slim Charger (UK)', note: 'SL Series specific', checks: { impres: 1, ip: '', hazloc: '', windport: 0, sl3500e: 1, sl3500max: 1, sl7000: 1, sl7000e: 1 } },
          { img: null, pn: 'WPLN4230', desc: 'IMPRES Single-Unit Slim Charger (EU)', note: 'SL Series specific', checks: { impres: 1, ip: '', hazloc: '', windport: 0, sl3500e: 1, sl3500max: 1, sl7000: 1, sl7000e: 1 } },
          { img: null, pn: 'WPLN4231', desc: 'IMPRES Single-Unit Slim Charger (AU)', note: 'SL Series specific', checks: { impres: 1, ip: '', hazloc: '', windport: 0, sl3500e: 1, sl3500max: 1, sl7000: 1, sl7000e: 1 } },
        ]},
        { title: 'Multi-Unit Slim Chargers', items: [
          { img: null, pn: 'WPLN4220', desc: 'IMPRES Multi-Unit Slim Charger, 6-Bank (US)', note: 'SL Series specific', checks: { impres: 1, ip: '', hazloc: '', windport: 0, sl3500e: 1, sl3500max: 1, sl7000: 1, sl7000e: 1 } },
          { img: null, pn: 'WPLN4221', desc: 'IMPRES Multi-Unit Slim Charger, 6-Bank (INTL)', note: 'SL Series specific', checks: { impres: 1, ip: '', hazloc: '', windport: 0, sl3500e: 1, sl3500max: 1, sl7000: 1, sl7000e: 1 } },
          { img: null, pn: 'PMPN4170', desc: 'Multi-Unit Slim Charger, 6-Bank (US)', note: 'SL Series specific', checks: { impres: 0, ip: '', hazloc: '', windport: 0, sl3500e: 1, sl3500max: 1, sl7000: 1, sl7000e: 1 } },
          { img: null, pn: 'PMPN4171', desc: 'Multi-Unit Slim Charger, 6-Bank (INTL)', note: 'SL Series specific', checks: { impres: 0, ip: '', hazloc: '', windport: 0, sl3500e: 1, sl3500max: 1, sl7000: 1, sl7000e: 1 } },
        ]},
        { title: 'Vehicle Chargers', items: [
          { img: null, pn: 'WPLN4265', desc: 'IMPRES Vehicle Charger (Slim)', note: 'SL Series specific', checks: { impres: 1, ip: '', hazloc: '', windport: 0, sl3500e: 1, sl3500max: 1, sl7000: 1, sl7000e: 1 } },
          { img: null, pn: 'PMPN4169', desc: 'Vehicle Charger (Slim)', note: 'SL Series specific', checks: { impres: 0, ip: '', hazloc: '', windport: 0, sl3500e: 1, sl3500max: 1, sl7000: 1, sl7000e: 1 } },
        ]},
      ]
    },
    carry: {
      label: 'Carry',
      sections: [
        { title: 'Cases', items: [
          { img: null, pn: 'PMLN6244', desc: 'Carry Case, Leather (SL Series)', note: 'Slim form factor', checks: { impres: 0, ip: '', hazloc: '', windport: 0, sl3500e: 1, sl3500max: 1, sl7000: 1, sl7000e: 1 } },
          { img: null, pn: 'PMLN6245', desc: 'Carry Case, Fabric (SL Series)', note: 'Slim form factor', checks: { impres: 0, ip: '', hazloc: '', windport: 0, sl3500e: 1, sl3500max: 1, sl7000: 1, sl7000e: 1 } },
        ]},
        { title: 'Belt Clips', items: [
          { img: null, pn: 'PMLN6246', desc: 'Replacement Belt Clip (SL Series)', note: 'Slim form factor', checks: { impres: 0, ip: '', hazloc: '', windport: 0, sl3500e: 1, sl3500max: 1, sl7000: 1, sl7000e: 1 } },
          { img: null, pn: 'PMLN6247', desc: 'Spring Action Belt Clip (SL Series)', note: 'Slim form factor', checks: { impres: 0, ip: '', hazloc: '', windport: 0, sl3500e: 1, sl3500max: 1, sl7000: 1, sl7000e: 1 } },
        ]},
      ]
    },
    antennas: {
      label: 'Antennas',
      sections: [
        { title: 'UHF Antennas', items: [
          { img: null, pn: 'PMAE4096', desc: 'UHF Slim Stubby Antenna (403-450 MHz)', note: 'SL Series slim', checks: { impres: 0, ip: '', hazloc: '', windport: 0, sl3500e: 1, sl3500max: 1, sl7000: 1, sl7000e: 1 } },
          { img: null, pn: 'PMAE4097', desc: 'UHF Slim Stubby Antenna (440-490 MHz)', note: 'SL Series slim', checks: { impres: 0, ip: '', hazloc: '', windport: 0, sl3500e: 1, sl3500max: 1, sl7000: 1, sl7000e: 1 } },
          { img: null, pn: 'PMAE4098', desc: 'UHF Slim Stubby Antenna (470-527 MHz)', note: 'SL Series slim', checks: { impres: 0, ip: '', hazloc: '', windport: 0, sl3500e: 1, sl3500max: 1, sl7000: 1, sl7000e: 1 } },
          { img: null, pn: 'PMAE4099', desc: 'UHF Slim Whip Antenna (403-527 MHz)', note: 'SL Series slim', checks: { impres: 0, ip: '', hazloc: '', windport: 0, sl3500e: 1, sl3500max: 1, sl7000: 1, sl7000e: 1 } },
        ]},
        { title: 'VHF Antennas', items: [
          { img: null, pn: 'PMAD4148', desc: 'VHF Slim Stubby Antenna (136-155 MHz)', note: 'SL Series slim', checks: { impres: 0, ip: '', hazloc: '', windport: 0, sl3500e: 1, sl3500max: 1, sl7000: 1, sl7000e: 1 } },
          { img: null, pn: 'PMAD4149', desc: 'VHF Slim Stubby Antenna (144-165 MHz)', note: 'SL Series slim', checks: { impres: 0, ip: '', hazloc: '', windport: 0, sl3500e: 1, sl3500max: 1, sl7000: 1, sl7000e: 1 } },
          { img: null, pn: 'PMAD4150', desc: 'VHF Slim Stubby Antenna (152-174 MHz)', note: 'SL Series slim', checks: { impres: 0, ip: '', hazloc: '', windport: 0, sl3500e: 1, sl3500max: 1, sl7000: 1, sl7000e: 1 } },
          { img: null, pn: 'PMAD4151', desc: 'VHF Slim Whip Antenna (136-174 MHz)', note: 'SL Series slim', checks: { impres: 0, ip: '', hazloc: '', windport: 0, sl3500e: 1, sl3500max: 1, sl7000: 1, sl7000e: 1 } },
        ]},
      ]
    },
    cables: {
      label: 'Cables',
      sections: [
        { title: 'Programming Cables', items: [
          { img: null, pn: 'PMKN4147', desc: 'Programming Cable (USB)', note: '', checks: { impres: 0, ip: '', hazloc: '', windport: 0, sl3500e: 1, sl3500max: 1, sl7000: 1, sl7000e: 1 } },
        ]},
      ]
    },
  }
};
if (!window.RADIOS_DATA) window.RADIOS_DATA = {};
window.RADIOS_DATA['sl'] = SL_DATA;