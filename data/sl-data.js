// SL Series Portable Radio Accessory Data
// Covers: SL 3500, SL 7000 series (aggregated)
const SL_DATA = {
  categories: {
    rsm: { label: 'RSMs', sections: [{ title: 'Remote Speaker Microphones', items: [
      { img: null, pn: 'PMMN4013', desc: 'Remote Speaker Microphone, Standard', note: '', checks: { impres: 0, ip: '', hazloc: '', windport: 0, sl3500: 1, sl7000: 1 } },
      { img: null, pn: 'PMMN4075', desc: 'IMPRES Compact Microphone', note: '', checks: { impres: 1, ip: '', hazloc: '', windport: 0, sl3500: 0, sl7000: 1 } },
    ]}]},
    wireless: { label: 'Wireless', sections: [{ title: 'Wireless RSM', items: [
      { img: null, pn: 'PMMN4100', desc: 'WM500 Wireless RSM', note: '', checks: { impres: 0, ip: '', hazloc: '', windport: 0, sl3500: 0, sl7000: 1 } },
    ]}]},
    surveillance: { label: 'Surveillance', sections: [{ title: 'Surveillance Kits', items: [
      { img: null, pn: 'PMLN6530', desc: 'Surveillance Kit, Translucent Tube', note: '', checks: { impres: 0, ip: '', hazloc: '', windport: 0, sl3500: 1, sl7000: 1 } },
    ]}]},
    headsets: { label: 'Headsets', sections: [{ title: 'Headsets', items: [
      { img: null, pn: 'RMN5127', desc: 'IMPRES Keypad Headset', note: '', checks: { impres: 1, ip: '', hazloc: '', windport: 0, sl3500: 0, sl7000: 1 } },
    ]}]},
    batteries: { label: 'Batteries', sections: [{ title: 'Batteries', items: [
      { img: null, pn: 'PMNN4468', desc: 'IMPRES Li-Ion 2300mAh Slim Battery', note: '', checks: { impres: 1, ip: '', hazloc: '', windport: 0, sl3500: 1, sl7000: 0 } },
      { img: null, pn: 'PMNN4424', desc: 'IMPRES Li-Ion 2150mAh Battery', note: '', checks: { impres: 1, ip: '', hazloc: '', windport: 0, sl3500: 0, sl7000: 1 } },
    ]}]},
    chargers: { label: 'Chargers', sections: [{ title: 'Chargers', items: [
      { img: null, pn: 'WPLN4228', desc: 'IMPRES Single Unit Charger', note: '', checks: { impres: 1, ip: '', hazloc: '', windport: 0, sl3500: 1, sl7000: 1 } },
    ]}]},
    carry: { label: 'Carry', sections: [{ title: 'Carry Solutions', items: [
      { img: null, pn: 'PMLN7128', desc: 'Carry Holster with Belt Clip', note: '', checks: { impres: 0, ip: '', hazloc: '', windport: 0, sl3500: 1, sl7000: 0 } },
      { img: null, pn: 'PMLN4651', desc: 'Carry Holder, Belt Clip', note: '', checks: { impres: 0, ip: '', hazloc: '', windport: 0, sl3500: 0, sl7000: 1 } },
    ]}]},
    antennas: { label: 'Antennas', sections: [{ title: 'Antennas', items: [
      { img: null, pn: 'PMAE4089', desc: 'UHF Whip Antenna', note: '', checks: { impres: 0, ip: '', hazloc: '', windport: 0, sl3500: 1, sl7000: 1 } },
    ]}]},
    cables: { label: 'Cables', sections: [{ title: 'Programming Cables', items: [
      { img: null, pn: 'PMKN4147', desc: 'USB Programming Cable', note: '', checks: { impres: 0, ip: '', hazloc: '', windport: 0, sl3500: 1, sl7000: 1 } },
    ]}]}
  }
};
window.RADIOS_DATA = window.RADIOS_DATA || {};
window.RADIOS_DATA['sl'] = SL_DATA;
