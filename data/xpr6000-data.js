// XPR 6000 Series Accessory Data
// Covers: XPR 6000
// TODO: Full data population in progress
const XPR6000_DATA = {
  categories: {
    rsm: {
      label: 'RSMs',
      sections: [
        { title: 'Remote Speaker Microphones', items: [
          { img: null, pn: 'PMMN4024', desc: 'Windporting RSM, Small (IP54)', note: '', checks: { impres: 0, ip: 'IP54', hazloc: 'UL', windport: 1, xpr6000: 1 } },
        ]}
      ]
    }
  }
};
if (!window.RADIOS_DATA) window.RADIOS_DATA = {};
window.RADIOS_DATA['xpr6000'] = XPR6000_DATA;
