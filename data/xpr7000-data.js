// XPR 7000 Series Accessory Data
// Covers: XPR 7000, XPR 7000e
// TODO: Full data population in progress
const XPR7000_DATA = {
  categories: {
    rsm: {
      label: 'RSMs',
      sections: [
        { title: 'Remote Speaker Microphones', items: [
          { img: null, pn: 'PMMN4024', desc: 'Windporting RSM, Small (IP54)', note: '', checks: { impres: 0, ip: 'IP54', hazloc: 'UL', windport: 1, xpr7000: 1, xpr7000e: 1 } },
        ]}
      ]
    }
  }
};
if (!window.RADIOS_DATA) window.RADIOS_DATA = {};
window.RADIOS_DATA['xpr7000'] = XPR7000_DATA;
