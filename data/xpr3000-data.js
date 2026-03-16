// XPR 3000 Series Accessory Data
// Covers: XPR 3000, XPR 3000e
// TODO: Full data population in progress
const XPR3000_DATA = {
  categories: {
    rsm: {
      label: 'RSMs',
      sections: [
        { title: 'Remote Speaker Microphones', items: [
          { img: null, pn: 'PMMN4071', desc: 'IMPRES Noise-Canceling RSM, Large (IP54)', note: '', checks: { impres: 1, ip: 'IP54', hazloc: 'UL', windport: 0, xpr3000: 1, xpr3000e: 1 } },
        ]}
      ]
    }
  }
};
if (!window.RADIOS_DATA) window.RADIOS_DATA = {};
window.RADIOS_DATA['xpr3000'] = XPR3000_DATA;
