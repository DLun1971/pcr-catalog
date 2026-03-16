// XPR Portable Radio Accessory Data
// Covers: XPR 3000, XPR 6000, XPR 7000 series (aggregated)
const XPR_PORTABLE_DATA = {
  categories: {
    rsm: {
      label: 'RSMs',
      sections: [
        {
          title: 'Remote Speaker Microphones',
          items: [
            { img: null, pn: 'PMMN4013', desc: 'Remote Speaker Microphone, Standard', note: '', checks: { impres: 0, ip: '', hazloc: '', windport: 0, xpr3000: 1, xpr6000: 1, xpr7000: 1 } },
            { img: null, pn: 'PMMN4015', desc: 'Remote Speaker Microphone, Heavy Duty', note: '', checks: { impres: 0, ip: '', hazloc: '', windport: 0, xpr3000: 1, xpr6000: 1, xpr7000: 1 } },
            { img: null, pn: 'PMMN4023', desc: 'IMPRES Noise Cancelling RSM', note: '', checks: { impres: 1, ip: '', hazloc: '', windport: 0, xpr3000: 0, xpr6000: 1, xpr7000: 1 } },
            { img: null, pn: 'PMMN4024', desc: 'IMPRES Windporting RSM', note: '', checks: { impres: 1, ip: '', hazloc: '', windport: 1, xpr3000: 0, xpr6000: 1, xpr7000: 1 } },
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
            { img: null, pn: 'PMMN4100', desc: 'WM500 Wireless RSM', note: '', checks: { impres: 0, ip: '', hazloc: '', windport: 0, xpr3000: 0, xpr6000: 0, xpr7000: 1 } },
          ]
        }
      ]
    },
    surveillance: { label: 'Surveillance', sections: [{ title: 'Surveillance Kits', items: [
      { img: null, pn: 'PMLN6530', desc: 'Surveillance Kit, Translucent Tube', note: '', checks: { impres: 0, ip: '', hazloc: '', windport: 0, xpr3000: 1, xpr6000: 1, xpr7000: 1 } },
    ]}]},
    headsets: { label: 'Headsets', sections: [{ title: 'Headsets', items: [
      { img: null, pn: 'RMN5127', desc: 'IMPRES Keypad Headset', note: '', checks: { impres: 1, ip: '', hazloc: '', windport: 0, xpr3000: 0, xpr6000: 1, xpr7000: 1 } },
    ]}]},
    batteries: { label: 'Batteries', sections: [{ title: 'Batteries', items: [
      { img: null, pn: 'PMNN4491', desc: 'IMPRES Li-Ion 2450mAh Battery', note: '', checks: { impres: 1, ip: '', hazloc: '', windport: 0, xpr3000: 0, xpr6000: 0, xpr7000: 1 } },
      { img: null, pn: 'PMNN4409', desc: 'Li-Ion 2150mAh Battery', note: '', checks: { impres: 0, ip: '', hazloc: '', windport: 0, xpr3000: 1, xpr6000: 1, xpr7000: 0 } },
    ]}]},
    chargers: { label: 'Chargers', sections: [{ title: 'Chargers', items: [
      { img: null, pn: 'WPLN4226', desc: 'IMPRES Single Unit Charger', note: '', checks: { impres: 1, ip: '', hazloc: '', windport: 0, xpr3000: 0, xpr6000: 1, xpr7000: 1 } },
      { img: null, pn: 'WPLN4232', desc: 'Single Unit Charger', note: '', checks: { impres: 0, ip: '', hazloc: '', windport: 0, xpr3000: 1, xpr6000: 0, xpr7000: 0 } },
    ]}]},
    carry: { label: 'Carry', sections: [{ title: 'Carry Solutions', items: [
      { img: null, pn: 'PMLN4651', desc: 'Carry Holder, Belt Clip', note: '', checks: { impres: 0, ip: '', hazloc: '', windport: 0, xpr3000: 1, xpr6000: 1, xpr7000: 1 } },
    ]}]},
    antennas: { label: 'Antennas', sections: [{ title: 'Antennas', items: [
      { img: null, pn: 'PMAE4089', desc: 'UHF Whip Antenna', note: '', checks: { impres: 0, ip: '', hazloc: '', windport: 0, xpr3000: 1, xpr6000: 1, xpr7000: 1 } },
    ]}]},
    cables: { label: 'Cables', sections: [{ title: 'Programming Cables', items: [
      { img: null, pn: 'PMKN4147', desc: 'USB Programming Cable', note: '', checks: { impres: 0, ip: '', hazloc: '', windport: 0, xpr3000: 1, xpr6000: 1, xpr7000: 1 } },
    ]}]}
  }
};