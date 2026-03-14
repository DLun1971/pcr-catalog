// xpr-mobile-data.js — MOTOTRBO Mobile Radio Accessories
// Source: MOTOTRBO Professional Tier Accessory Catalog (pages 73-90)
// Models: XPR 5550e, XPR 4000 Series, XPR 2500

const XPR_MOBILE_DATA = {

  // ── MICROPHONES ─────────────────────────────────────────────────────────────
  Microphones: {
    cols: ['IMPRES','Description','Part #','XPR 5000/5000e','XPR 4000','XPR 2500'],
    checks: {},
    items: [
      { desc: 'IMPRES keypad microphone with 4-way navigation', pn: 'RMN5127', xpr5000e: true, xpr4000: false, xpr2500: false, impres: true },
      { desc: 'IMPRES keypad microphone', pn: 'RMN5065', xpr5000e: false, xpr4000: true, xpr2500: false, impres: true },
      { desc: 'Keypad microphone', pn: 'PMMN4089', xpr5000e: false, xpr4000: false, xpr2500: true, impres: false },
      { desc: 'Standard compact microphone', pn: 'RMN5052', xpr5000e: true, xpr4000: true, xpr2500: false, impres: false },
      { desc: 'IMPRES heavy-duty microphone', pn: 'RMN5053', xpr5000e: true, xpr4000: true, xpr2500: false, impres: true },
      { desc: 'Heavy-duty microphone', pn: 'PMMN4091', xpr5000e: false, xpr4000: false, xpr2500: true, impres: false },
      { desc: 'IMPRES telephone style handset', pn: 'HMN4098', xpr5000e: true, xpr4000: true, xpr2500: false, impres: true },
      { desc: 'Telephone style handset with hang-up cup', pn: 'PMLN6481', xpr5000e: false, xpr4000: false, xpr2500: true, impres: false },
      { desc: 'IMPRES visor microphone', pn: 'RMN5054', xpr5000e: true, xpr4000: true, xpr2500: false, impres: true },
      { desc: 'Visor microphone', pn: 'GMMN4065', xpr5000e: false, xpr4000: false, xpr2500: true, impres: false },
      { desc: 'Desktop microphone', pn: 'RMN5050', xpr5000e: true, xpr4000: true, xpr2500: false, impres: false },
      { desc: 'Desktop microphone', pn: 'PMMN4098', xpr5000e: false, xpr4000: false, xpr2500: true, impres: false },
    ]
  },

  // ── MICROPHONE ACCESSORIES ───────────────────────────────────────────────────
  'Microphone Accessories': {
    cols: ['Description','Part #','XPR 5000/5000e','XPR 4000','XPR 2500'],
    checks: {},
    items: [
      { desc: 'Microphone hang-up clip (requires installation)', pn: 'HLN9073', xpr5000e: true, xpr4000: true, xpr2500: true },
      { desc: 'Universal microphone hang-up clip (no installation required)', pn: 'HLN9414', xpr5000e: true, xpr4000: true, xpr2500: true },
      { desc: '10-foot mobile microphone extension cable', pn: 'PMKN4033', xpr5000e: true, xpr4000: true, xpr2500: false },
      { desc: '20-foot mobile microphone extension cable', pn: 'PMKN4034', xpr5000e: true, xpr4000: true, xpr2500: false },
    ]
  },

  // ── EXTERNAL PTT ─────────────────────────────────────────────────────────────
  'External PTT': {
    cols: ['Description','Part #','XPR 5000/5000e','XPR 4000','XPR 2500'],
    checks: {},
    items: [
      { desc: 'Pushbutton PTT for visor microphone', pn: 'RLN5926', xpr5000e: true, xpr4000: true, xpr2500: false },
      { desc: 'Emergency footswitch for visor microphone', pn: 'RLN5929', xpr5000e: true, xpr4000: true, xpr2500: false },
      { desc: 'Remote mount footswitch PTT', pn: 'RLN4856', xpr5000e: false, xpr4000: false, xpr2500: true },
      { desc: 'Remote mount pushbutton PTT', pn: 'RLN4857', xpr5000e: false, xpr4000: false, xpr2500: true },
      { desc: 'External PTT with emergency footswitch', pn: 'RLN4836', xpr5000e: false, xpr4000: false, xpr2500: true },
      { desc: 'Gooseneck PTT', pn: 'RLN4858A', xpr5000e: false, xpr4000: false, xpr2500: true },
    ]
  },

  // ── LONG RANGE WIRELESS MOBILE ACCESSORY KITS ────────────────────────────────
  'Long Range Wireless Kits': {
    cols: ['Description','Part #','XPR 5000/5000e','XPR 4000','XPR 2500'],
    checks: {},
    items: [
      { desc: 'Long range wireless kit with vehicular charger', pn: 'RLN6551', xpr5000e: true, xpr4000: true, xpr2500: false },
      { desc: 'Long range wireless kit (RSM and gateway)', pn: 'RLN6552', xpr5000e: true, xpr4000: true, xpr2500: false },
      { desc: 'Mobile microphone with Bluetooth gateway', pn: 'PMMN4097', xpr5000e: true, xpr4000: true, xpr2500: false },
      { desc: 'Wireless RSM with battery and clip', pn: 'RLN6544', xpr5000e: true, xpr4000: true, xpr2500: false },
    ]
  },

  // ── LONG RANGE WIRELESS CHARGERS & REPLACEMENT PARTS ────────────────────────
  'Long Range Wireless Chargers': {
    cols: ['Description','Part #','XPR 5000/5000e','XPR 4000','XPR 2500'],
    checks: {},
    items: [
      { desc: 'Wireless RSM battery, 1750 mAh Li-Ion', pn: 'PMNN4461', xpr5000e: true, xpr4000: true, xpr2500: false },
      { desc: 'Dual unit charger with US/CAN power supply', pn: 'PMLN7120', xpr5000e: true, xpr4000: true, xpr2500: false },
      { desc: 'Vehicular charger with cigarette lighter plug', pn: 'PMLN6716', xpr5000e: true, xpr4000: true, xpr2500: false },
    ]
  },

  // ── OPCRIT WIRELESS BT ACCESSORIES ───────────────────────────────────────────
  'OpCrit Wireless BT': {
    cols: ['Description','Part #','XPR 5000/5000e','XPR 4000','XPR 2500'],
    checks: {},
    items: [
      { desc: 'BT accessory kit with flexible earpiece, pod, and cradle (US)', pn: 'RLN6500', xpr5000e: true, xpr4000: false, xpr2500: false },
      { desc: 'XBT wireless behind-the-neck headset', pn: 'RLN6490', xpr5000e: true, xpr4000: false, xpr2500: false },
      { desc: 'XBT wireless headband style headset', pn: 'RLN6491', xpr5000e: true, xpr4000: false, xpr2500: false },
      { desc: 'Wireless earpiece with 12-inch cable', pn: 'NNTN8125', xpr5000e: true, xpr4000: false, xpr2500: false },
      { desc: 'Wireless PTT pod with US charger', pn: 'NNTN8127', xpr5000e: true, xpr4000: false, xpr2500: false },
      { desc: 'Wireless PTT pod (without charger)', pn: 'NNTN8191', xpr5000e: true, xpr4000: false, xpr2500: false },
      { desc: 'Wireless 1-wire surveillance kit with translucent tube', pn: 'PMLN7052', xpr5000e: true, xpr4000: false, xpr2500: false },
      { desc: 'Wireless earbud, 11.5" cable', pn: 'NNTN8294', xpr5000e: true, xpr4000: false, xpr2500: false },
      { desc: 'Wireless earbud, 45" cable', pn: 'NNTN8295', xpr5000e: true, xpr4000: false, xpr2500: false },
    ]
  },

  // ── OPCRIT WIRELESS REPLACEMENT PARTS ────────────────────────────────────────
  'OpCrit Wireless Replacement Parts': {
    cols: ['Description','Part #','XPR 5000/5000e'],
    checks: {},
    items: [
      // Placeholder — PDF data needed
    ]
  },

  // ── CONTROL STATION ACCESSORIES ──────────────────────────────────────────────
  'Control Station': {
    cols: ['Description','Part #','XPR 5000/5000e','XPR 4000','XPR 2500'],
    checks: {},
    items: [
      { desc: 'Power supply 14V 10 amp (1-25W)', pn: 'HPN4008', xpr5000e: true, xpr4000: true, xpr2500: false },
      { desc: 'Desktop tray with speaker', pn: 'RSN4005', xpr5000e: true, xpr4000: true, xpr2500: false },
    ]
  },

  // ── INSTALLATION & MOUNTING ───────────────────────────────────────────────────
  'Installation & Mounting': {
    cols: ['Description','Part #','XPR 5000/5000e','XPR 4000','XPR 2500'],
    checks: {},
    items: [
      { desc: 'Low profile trunnion kit', pn: 'RLN6466', xpr5000e: true, xpr4000: false, xpr2500: false },
      { desc: 'Low profile trunnion kit', pn: 'RLN6077', xpr5000e: false, xpr4000: true, xpr2500: false },
      { desc: 'High profile trunnion kit', pn: 'RLN6467', xpr5000e: true, xpr4000: false, xpr2500: false },
      { desc: 'High profile trunnion kit', pn: 'RLN6078', xpr5000e: false, xpr4000: true, xpr2500: true },
      { desc: 'Key lock trunnion kit', pn: 'RLN6468', xpr5000e: true, xpr4000: false, xpr2500: true },
      { desc: 'Remote mount adapter kit', pn: 'PMLN6404', xpr5000e: true, xpr4000: false, xpr2500: false },
    ]
  },

  // ── EXTERNAL SPEAKERS ────────────────────────────────────────────────────────
  'External Speakers': {
    cols: ['Description','Part #','Watts','XPR 5000/5000e','XPR 4000','XPR 2500'],
    checks: {},
    items: [
      { desc: '13W external speaker', pn: 'RSN4002', watts: 13, xpr5000e: true, xpr4000: false, xpr2500: false },
      { desc: '13W external speaker', pn: 'RSN4001', watts: 13, xpr5000e: false, xpr4000: false, xpr2500: true },
      { desc: '7.5W external speaker', pn: 'HSN8145', watts: 7.5, xpr5000e: false, xpr4000: true, xpr2500: false },
    ]
  },

  // ── CABLES ───────────────────────────────────────────────────────────────────
  Cables: {
    cols: ['Description','Part #','XPR 5000/5000e','XPR 4000','XPR 2500'],
    checks: {},
    items: [
      // Placeholder — PDF data needed
    ]
  },

  // ── ANTENNAS ─────────────────────────────────────────────────────────────────
  Antennas: {
    cols: ['Description','Part #','Band','Freq (MHz)','XPR 5000/5000e','XPR 4000','XPR 2500'],
    checks: {},
    items: [
      { desc: 'GPS/UHF combination 1/4 wave antenna (403-430 MHz)', pn: 'PMAE4030', band: 'UHF', freq: '403-430', xpr5000e: true, xpr4000: true, xpr2500: false },
      { desc: 'GPS/VHF combination through-hole antenna (136-144 MHz)', pn: 'RAD4214', band: 'VHF', freq: '136-144', xpr5000e: true, xpr4000: true, xpr2500: false },
      { desc: 'VHF urban roof mount 1/4 wave (162-174 MHz)', pn: 'HAD4009', band: 'VHF', freq: '162-174', xpr5000e: true, xpr4000: true, xpr2500: true },
      { desc: 'Magnetic mount GPS active antenna', pn: 'PMAN4002', band: 'GPS', freq: '—', xpr5000e: true, xpr4000: true, xpr2500: false },
      { desc: 'Mobile mini-U antenna adapter, 8-foot cable', pn: 'HKN9088', band: '—', freq: '—', xpr5000e: true, xpr4000: false, xpr2500: false },
    ]
  },

  // ── ANTENNA ACCESSORIES ───────────────────────────────────────────────────────
  'Antenna Accessories': {
    cols: ['Description','Part #','XPR 5000/5000e','XPR 4000','XPR 2500'],
    checks: {},
    items: [
      // Placeholder — PDF data needed
    ]
  },

};