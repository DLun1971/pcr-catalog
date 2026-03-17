// XPR Portable Radio Accessory Data
// Covers: XPR 3000/3000e, XPR 6000, XPR 7000/7000e
// Source: MOTOTRBO Professional Tier Accessory Catalog (part_3.pdf)
const XPR_PORTABLE_DATA = {
  categories: {
    rsm: {
      label: 'RSMs',
      sections: [
        {
          title: 'Remote Speaker Microphones',
          items: [
            { img: null, pn: 'PMMN4013', desc: 'Remote Speaker Microphone, Standard', note: '', checks: { impres: 0, ip: '', hazloc: '', xpr3000: 1, xpr6000: 1, xpr7000: 1 } },
            { img: null, pn: 'PMMN4015', desc: 'Remote Speaker Microphone, Heavy Duty', note: '', checks: { impres: 0, ip: '', hazloc: '', xpr3000: 1, xpr6000: 1, xpr7000: 1 } },
            { img: null, pn: 'PMMN4023', desc: 'IMPRES Noise Cancelling RSM', note: '', checks: { impres: 1, ip: '', hazloc: '', xpr3000: 0, xpr6000: 1, xpr7000: 1 } },
            { img: null, pn: 'PMMN4024', desc: 'IMPRES Windporting RSM', note: '', checks: { impres: 1, ip: '', hazloc: '', xpr3000: 0, xpr6000: 1, xpr7000: 1 } },
          ]
        }
      ]
    },
    wireless: {
      label: 'Wireless',
      sections: [
        {
          title: 'Wireless RSM',
          items: [
            { img: null, pn: 'PMMN4100', desc: 'WM500 Wireless RSM', note: '', checks: { impres: 0, ip: '', hazloc: '', xpr3000: 0, xpr6000: 0, xpr7000: 1 } },
          ]
        }
      ]
    },
    surveillance: {
      label: 'Surveillance',
      sections: [{ title: 'Surveillance Kits', items: [
        { img: null, pn: 'PMLN6530', desc: 'Surveillance Kit, Translucent Tube', note: '', checks: { impres: 0, ip: '', hazloc: '', xpr3000: 1, xpr6000: 1, xpr7000: 1 } },
      ]}]
    },
    headsets: {
      label: 'Headsets',
      sections: [{ title: 'Headsets', items: [
        { img: null, pn: 'RMN5127', desc: 'IMPRES Keypad Headset', note: '', checks: { impres: 1, ip: '', hazloc: '', xpr3000: 0, xpr6000: 1, xpr7000: 1 } },
      ]}]
    },
    batteries: {
      label: 'Batteries',
      sections: [
        {
          title: 'XPR 7000 / 7000e Batteries',
          items: [
            { img: null, pn: 'PMNN4491', desc: 'IMPRES Slim Li-Ion 2100mAh IP68 Battery', note: '113x52x18mm, 130g', checks: { impres: 1, ip: 'IP68', hazloc: '', xpr3000: 0, xpr6000: 0, xpr7000: 1 } },
            { img: null, pn: 'PMNN4544', desc: 'IMPRES Li-Ion 2450mAh IP68 Battery', note: '113x52x23mm, 150g', checks: { impres: 1, ip: 'IP68', hazloc: '', xpr3000: 0, xpr6000: 0, xpr7000: 1 } },
            { img: null, pn: 'PMNN4493', desc: 'IMPRES Li-Ion 3000mAh IP68 Battery', note: '113x52x23mm, 155g', checks: { impres: 1, ip: 'IP68', hazloc: '', xpr3000: 0, xpr6000: 0, xpr7000: 1 } },
            { img: null, pn: 'PMNN4488', desc: 'IMPRES Li-Ion 3000mAh IP68 Battery (silent alert belt clip)', note: 'Use with PMLN7296', checks: { impres: 1, ip: 'IP68', hazloc: '', xpr3000: 0, xpr6000: 0, xpr7000: 1 } },
            { img: null, pn: 'PMNN4490', desc: 'IMPRES Li-Ion 2900mAh IP68 Battery', note: '113x52x23mm, 210g', checks: { impres: 1, ip: 'IP68', hazloc: 'UL', xpr3000: 0, xpr6000: 0, xpr7000: 1 } },
          ]
        },
        {
          title: 'XPR 6000 Batteries',
          items: [
            { img: null, pn: 'PMNN4448', desc: 'IMPRES Li-Ion 2800mAh IP67 Battery', note: '113x52x23mm, 155g', checks: { impres: 1, ip: 'IP67', hazloc: '', xpr3000: 0, xpr6000: 1, xpr7000: 0 } },
            { img: null, pn: 'NNTN8560', desc: 'IMPRES Li-Ion 2500mAh IP68 TIA4950 Battery', note: '113x52x23mm, 210g', checks: { impres: 1, ip: 'IP68', hazloc: 'UL', xpr3000: 0, xpr6000: 1, xpr7000: 0 } },
            { img: null, pn: 'PMNN4489', desc: 'IMPRES Li-Ion 2900mAh IP68 TIA4950 Battery', note: '113x52x23mm, 210g', checks: { impres: 1, ip: 'IP68', hazloc: 'UL', xpr3000: 0, xpr6000: 1, xpr7000: 0 } },
            { img: null, pn: 'PMNN4066', desc: 'IMPRES Li-Ion 1700mAh IP57 Battery', note: '129x55x19mm, 145g', checks: { impres: 1, ip: 'IP57', hazloc: '', xpr3000: 0, xpr6000: 1, xpr7000: 0 } },
            { img: null, pn: 'PMNN4077', desc: 'IMPRES Li-Ion 2400mAh IP57 Battery', note: '129x55x23mm, 160g', checks: { impres: 1, ip: 'IP57', hazloc: '', xpr3000: 0, xpr6000: 1, xpr7000: 0 } },
            { img: null, pn: 'PMNN4065', desc: 'Motorola Original NiMH 1480mAh IP57 Battery', note: '129x55x21mm, 215g', checks: { impres: 0, ip: 'IP57', hazloc: '', xpr3000: 0, xpr6000: 1, xpr7000: 0 } },
          ]
        }
      ]
    },
    chargers: {
      label: 'Chargers',
      sections: [
        {
          title: 'Single-Unit Chargers',
          items: [
            { img: null, pn: 'NNTN8224', desc: 'Single-Unit Rapid Rate Charger, CHN plug', note: '240VAC', checks: { impres: 0, ip: '', hazloc: '', xpr3000: 1, xpr6000: 1, xpr7000: 1 } },
            { img: null, pn: 'NNTN8225', desc: 'Single-Unit Rapid Rate Charger, ARG plug', note: '', checks: { impres: 0, ip: '', hazloc: '', xpr3000: 1, xpr6000: 1, xpr7000: 1 } },
            { img: null, pn: 'NNTN8280', desc: 'Single-Unit Rapid Rate Charger, BZL plug', note: '100-240VAC', checks: { impres: 0, ip: '', hazloc: '', xpr3000: 1, xpr6000: 1, xpr7000: 1 } },
            { img: null, pn: 'NNTN8292', desc: 'Single-Unit Rapid Rate Charger, EURO plug', note: '240VAC', checks: { impres: 0, ip: '', hazloc: '', xpr3000: 1, xpr6000: 1, xpr7000: 1 } },
            { img: null, pn: 'NNTN8293', desc: 'Single-Unit Rapid Rate Charger, UK plug', note: '240VAC', checks: { impres: 0, ip: '', hazloc: '', xpr3000: 1, xpr6000: 1, xpr7000: 1 } },
            { img: null, pn: 'PMPN4576A', desc: 'IMPRES Single-Unit Charger, US plug', note: '120VAC', checks: { impres: 1, ip: '', hazloc: '', xpr3000: 1, xpr6000: 1, xpr7000: 1 } },
            { img: null, pn: 'PMPN4573A', desc: 'IMPRES Single-Unit Charger, ARG plug', note: '240VAC', checks: { impres: 1, ip: '', hazloc: '', xpr3000: 1, xpr6000: 1, xpr7000: 1 } },
            { img: null, pn: 'PMPN4575A', desc: 'IMPRES Single-Unit Charger, BRZ plug', note: '100-240VAC', checks: { impres: 1, ip: '', hazloc: '', xpr3000: 1, xpr6000: 1, xpr7000: 1 } },
            { img: null, pn: 'PMPN4572A', desc: 'IMPRES Single-Unit Charger, UK plug', note: '240VAC', checks: { impres: 1, ip: '', hazloc: '', xpr3000: 1, xpr6000: 1, xpr7000: 1 } },
            { img: null, pn: 'PMPN4577A', desc: 'IMPRES Single-Unit Charger, EURO plug', note: '240VAC', checks: { impres: 1, ip: '', hazloc: '', xpr3000: 1, xpr6000: 1, xpr7000: 1 } },
            { img: null, pn: 'PMPN4571A', desc: 'IMPRES Single-Unit Charger, AU/NZ plug', note: '240VAC', checks: { impres: 1, ip: '', hazloc: '', xpr3000: 1, xpr6000: 1, xpr7000: 1 } },
            { img: null, pn: 'PMPN4574A', desc: 'IMPRES Single-Unit Charger, KOR plug', note: '240VAC', checks: { impres: 1, ip: '', hazloc: '', xpr3000: 1, xpr6000: 1, xpr7000: 1 } },
            { img: null, pn: 'PMPN4579A', desc: 'IMPRES Single-Unit Charger, CHN plug', note: '240VAC', checks: { impres: 1, ip: '', hazloc: '', xpr3000: 1, xpr6000: 1, xpr7000: 1 } },
          ]
        },
        {
          title: 'Multi-Unit Chargers',
          items: [
            { img: null, pn: 'PMPN4284', desc: 'IMPRES 2 Multi-Unit Fast Charger with Display, US/CAN plug', note: '6-pocket, 100-240VAC', checks: { impres: 1, ip: '', hazloc: '', xpr3000: 1, xpr6000: 1, xpr7000: 1 } },
            { img: null, pn: 'PMPN4290', desc: 'IMPRES 2 Multi-Unit Fast Charger with Display, UK plug', note: '6-pocket', checks: { impres: 1, ip: '', hazloc: '', xpr3000: 1, xpr6000: 1, xpr7000: 1 } },
          ]
        },
        {
          title: 'Vehicle Chargers',
          items: [
            { img: null, pn: 'NNTN8525', desc: 'Travel Charger, Rapid Rate with 12VDC Cigarette Lighter Adapter', note: '12VDC', checks: { impres: 0, ip: '', hazloc: '', xpr3000: 1, xpr6000: 1, xpr7000: 1 } },
          ]
        }
      ]
    },
    carry: {
      label: 'Carry',
      sections: [{ title: 'Carry Solutions', items: [
        { img: null, pn: 'PMLN4651', desc: 'Carry Holder with Belt Clip', note: '', checks: { impres: 0, ip: '', hazloc: '', xpr3000: 1, xpr6000: 1, xpr7000: 1 } },
      ]}]
    },
    antennas: {
      label: 'Antennas',
      sections: [{ title: 'Antennas', items: [
        { img: null, pn: 'PMAE4089', desc: 'UHF Whip Antenna', note: '', checks: { impres: 0, ip: '', hazloc: '', xpr3000: 1, xpr6000: 1, xpr7000: 1 } },
      ]}]
    },
    cables: {
      label: 'Cables',
      sections: [{ title: 'Programming Cables', items: [
        { img: null, pn: 'PMKN4147', desc: 'USB Programming Cable', note: '', checks: { impres: 0, ip: '', hazloc: '', xpr3000: 1, xpr6000: 1, xpr7000: 1 } },
      ]}]
    }
  }
};
window.RADIOS_DATA = window.RADIOS_DATA || {};
window.RADIOS_DATA['xpr-portable'] = XPR_PORTABLE_DATA;
