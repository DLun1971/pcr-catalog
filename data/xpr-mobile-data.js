// xpr-mobile-data.js — MOTOTRBO Mobile Radio Accessories
// Source: MOTOTRBO Professional Tier Accessory Catalog (pages 73-90)
// Models: XPR 5550e (XPR 5000/5000e Series), XPR 4000 Series, XPR 2500 Series

window.RADIOS_DATA = window.RADIOS_DATA || {};
window.RADIOS_DATA['xpr-mobile'] = {
  categories: {

    microphones: {
      cols: [
        { key: 'desc',      label: 'Description',    type: 'text' },
        { key: 'pn',        label: 'Part #',         type: 'pn' },
        { key: 'impres',    label: 'IMPRES',         type: 'check' },
        { key: 'xpr5000e',  label: 'XPR 5000/5000e', type: 'check' },
        { key: 'xpr4000',   label: 'XPR 4000',       type: 'check' },
        { key: 'xpr2500',   label: 'XPR 2500',       type: 'check' },
      ],
      sections: [
        {
          title: 'Microphones',
          items: [
            { desc: 'IMPRES keypad microphone with 4-way navigation', pn: 'RMN5127',  impres: true,  xpr5000e: true,  xpr4000: false, xpr2500: false },
            { desc: 'IMPRES keypad microphone',                       pn: 'RMN5065',  impres: true,  xpr5000e: false, xpr4000: true,  xpr2500: false },
            { desc: 'Keypad microphone',                              pn: 'PMMN4089', impres: false, xpr5000e: false, xpr4000: false, xpr2500: true  },
            { desc: 'Standard compact microphone',                    pn: 'RMN5052',  impres: false, xpr5000e: true,  xpr4000: true,  xpr2500: false },
            { desc: 'IMPRES heavy-duty microphone',                   pn: 'RMN5053',  impres: true,  xpr5000e: true,  xpr4000: true,  xpr2500: false },
            { desc: 'Heavy-duty microphone',                          pn: 'PMMN4091', impres: false, xpr5000e: false, xpr4000: false, xpr2500: true  },
            { desc: 'IMPRES telephone style handset',                 pn: 'HMN4098',  impres: true,  xpr5000e: true,  xpr4000: true,  xpr2500: false },
            { desc: 'Telephone style handset with hang-up cup',       pn: 'PMLN6481', impres: false, xpr5000e: false, xpr4000: false, xpr2500: true  },
            { desc: 'IMPRES visor microphone',                        pn: 'RMN5054',  impres: true,  xpr5000e: true,  xpr4000: true,  xpr2500: false },
            { desc: 'Visor microphone',                               pn: 'GMMN4065', impres: false, xpr5000e: false, xpr4000: false, xpr2500: true  },
            { desc: 'Desktop microphone',                             pn: 'RMN5050',  impres: false, xpr5000e: true,  xpr4000: true,  xpr2500: false },
            { desc: 'Desktop microphone',                             pn: 'PMMN4098', impres: false, xpr5000e: false, xpr4000: false, xpr2500: true  },
            { desc: 'Mobile microphone with Bluetooth gateway',       pn: 'PMMN4097', impres: false, xpr5000e: true,  xpr4000: true,  xpr2500: false },
          ]
        }
      ]
    },

    mic_accessories: {
      cols: [
        { key: 'desc',     label: 'Description',    type: 'text' },
        { key: 'pn',       label: 'Part #',         type: 'pn' },
        { key: 'xpr5000e', label: 'XPR 5000/5000e', type: 'check' },
        { key: 'xpr4000',  label: 'XPR 4000',       type: 'check' },
        { key: 'xpr2500',  label: 'XPR 2500',       type: 'check' },
      ],
      sections: [
        {
          title: 'Microphone Accessories',
          items: [
            { desc: 'Microphone hang-up clip (requires installation)',     pn: 'HLN9073',  xpr5000e: true,  xpr4000: true,  xpr2500: true  },
            { desc: 'Universal microphone hang-up clip (no installation)', pn: 'HLN9414',  xpr5000e: true,  xpr4000: true,  xpr2500: true  },
            { desc: '10-foot mobile microphone extension cable',           pn: 'PMKN4033', xpr5000e: true,  xpr4000: true,  xpr2500: false },
            { desc: '20-foot mobile microphone extension cable',           pn: 'PMKN4034', xpr5000e: true,  xpr4000: true,  xpr2500: false },
          ]
        }
      ]
    },

    ext_ptt: {
      cols: [
        { key: 'desc',     label: 'Description',    type: 'text' },
        { key: 'pn',       label: 'Part #',         type: 'pn' },
        { key: 'xpr5000e', label: 'XPR 5000/5000e', type: 'check' },
        { key: 'xpr4000',  label: 'XPR 4000',       type: 'check' },
        { key: 'xpr2500',  label: 'XPR 2500',       type: 'check' },
      ],
      sections: [
        {
          title: 'External PTT (XPR 5000/5000e / XPR 4000)',
          items: [
            { desc: 'Pushbutton PTT for visor microphone',       pn: 'RLN5926',  xpr5000e: true,  xpr4000: true,  xpr2500: false },
            { desc: 'Emergency footswitch for visor microphone', pn: 'RLN5929',  xpr5000e: true,  xpr4000: true,  xpr2500: false },
          ]
        },
        {
          title: 'External PTT (XPR 2500)',
          items: [
            { desc: 'Remote mount footswitch PTT',          pn: 'RLN4856',  xpr5000e: false, xpr4000: false, xpr2500: true },
            { desc: 'Remote mount pushbutton PTT',          pn: 'RLN4857',  xpr5000e: false, xpr4000: false, xpr2500: true },
            { desc: 'External PTT with emergency footswitch', pn: 'RLN4836', xpr5000e: false, xpr4000: false, xpr2500: true },
            { desc: 'Gooseneck PTT',                        pn: 'RLN4858A', xpr5000e: false, xpr4000: false, xpr2500: true },
          ]
        }
      ]
    },

    wireless_kits: {
      cols: [
        { key: 'desc',     label: 'Description',    type: 'text' },
        { key: 'pn',       label: 'Part #',         type: 'pn' },
        { key: 'xpr5000e', label: 'XPR 5000/5000e', type: 'check' },
        { key: 'xpr4000',  label: 'XPR 4000',       type: 'check' },
        { key: 'xpr2500',  label: 'XPR 2500',       type: 'check' },
      ],
      sections: [
        {
          title: 'Long Range Wireless Kits (XPR 5000/5000e / XPR 4000)',
          items: [
            { desc: 'Long range wireless kit with vehicular charger', pn: 'RLN6551', xpr5000e: true, xpr4000: true, xpr2500: false },
            { desc: 'Long range wireless kit (RSM and gateway)',      pn: 'RLN6552', xpr5000e: true, xpr4000: true, xpr2500: false },
            { desc: 'Wireless RSM with battery and clip',             pn: 'RLN6544', xpr5000e: true, xpr4000: true, xpr2500: false },
          ]
        }
      ]
    },

    wireless_chargers: {
      cols: [
        { key: 'desc',     label: 'Description',    type: 'text' },
        { key: 'pn',       label: 'Part #',         type: 'pn' },
        { key: 'xpr5000e', label: 'XPR 5000/5000e', type: 'check' },
        { key: 'xpr4000',  label: 'XPR 4000',       type: 'check' },
        { key: 'xpr2500',  label: 'XPR 2500',       type: 'check' },
      ],
      sections: [
        {
          title: 'Long Range Wireless Chargers (XPR 5000/5000e / XPR 4000)',
          items: [
            { desc: 'Wireless RSM battery, 1750 mAh Li-Ion',         pn: 'PMNN4461', xpr5000e: true, xpr4000: true, xpr2500: false },
            { desc: 'Dual unit charger with US/CAN power supply',     pn: 'PMLN7120', xpr5000e: true, xpr4000: true, xpr2500: false },
            { desc: 'Vehicular charger with cigarette lighter plug',  pn: 'PMLN6716', xpr5000e: true, xpr4000: true, xpr2500: false },
          ]
        }
      ]
    },

    opcrit_wireless: {
      cols: [
        { key: 'desc',     label: 'Description',    type: 'text' },
        { key: 'pn',       label: 'Part #',         type: 'pn' },
        { key: 'xpr5000e', label: 'XPR 5000/5000e', type: 'check' },
        { key: 'xpr4000',  label: 'XPR 4000',       type: 'check' },
        { key: 'xpr2500',  label: 'XPR 2500',       type: 'check' },
      ],
      sections: [
        {
          title: 'OpCrit Wireless BT (XPR 5000/5000e)',
          items: [
            { desc: 'BT accessory kit with flexible earpiece, pod and cradle (US)',  pn: 'RLN6500',  xpr5000e: true, xpr4000: false, xpr2500: false },
            { desc: 'BT accessory kit with flexible earpiece, pod and cradle',       pn: 'PMLN7181', xpr5000e: true, xpr4000: false, xpr2500: false },
            { desc: 'BT accessory kit with flexible earpiece, pod and cradle (US)',  pn: 'RLN6556',  xpr5000e: true, xpr4000: false, xpr2500: false },
            { desc: 'OpCrit wireless 1-wire surveillance kit with translucent tube', pn: 'PMLN7052', xpr5000e: true, xpr4000: false, xpr2500: false },
            { desc: 'XBT wireless behind-the-neck headset',                          pn: 'RLN6490',  xpr5000e: true, xpr4000: false, xpr2500: false },
            { desc: 'XBT wireless headband style headset',                           pn: 'RLN6491',  xpr5000e: true, xpr4000: false, xpr2500: false },
            { desc: 'Wireless earpiece with 12-inch cable',                          pn: 'NNTN8125', xpr5000e: true, xpr4000: false, xpr2500: false },
            { desc: 'Wireless PTT pod with US charger',                              pn: 'NNTN8127', xpr5000e: true, xpr4000: false, xpr2500: false },
            { desc: 'Wireless PTT pod (without charger)',                            pn: 'NNTN8191', xpr5000e: true, xpr4000: false, xpr2500: false },
            { desc: 'Wireless earbud, 11.5" cable',                                  pn: 'NNTN8294', xpr5000e: true, xpr4000: false, xpr2500: false },
            { desc: 'Wireless earbud, 45" cable',                                    pn: 'NNTN8295', xpr5000e: true, xpr4000: false, xpr2500: false },
          ]
        }
      ]
    },

    opcrit_parts: {
      cols: [
        { key: 'desc',     label: 'Description',    type: 'text' },
        { key: 'pn',       label: 'Part #',         type: 'pn' },
        { key: 'xpr5000e', label: 'XPR 5000/5000e', type: 'check' },
        { key: 'xpr4000',  label: 'XPR 4000',       type: 'check' },
        { key: 'xpr2500',  label: 'XPR 2500',       type: 'check' },
      ],
      sections: [
        {
          title: 'OpCrit Wireless Replacement Parts (XPR 5000/5000e)',
          items: [
            { desc: 'Eartube for comport earpiece (pack of 10)',                  pn: 'RLN5037',  xpr5000e: true, xpr4000: false, xpr2500: false },
            { desc: 'Replacement ear tips kit (20 sm, 20 med, 20 lg, 10 clips)', pn: 'NNTN8361', xpr5000e: true, xpr4000: false, xpr2500: false },
            { desc: 'Swivel clip for OpCrit/enhanced OpCrit wireless pods',      pn: 'PMLN6246', xpr5000e: true, xpr4000: false, xpr2500: false },
            { desc: 'Replacement micro-USB charger for wireless pod (US)',        pn: 'PMPN4027', xpr5000e: true, xpr4000: false, xpr2500: false },
            { desc: 'Replacement micro-USB charger for wireless pod (AU/NZ)',     pn: 'PMPN4007', xpr5000e: true, xpr4000: false, xpr2500: false },
            { desc: 'Replacement micro-USB charger for wireless pod (EU/UK)',     pn: 'PMPN4006', xpr5000e: true, xpr4000: false, xpr2500: false },
            { desc: 'Replacement micro-USB charger for wireless pod (PRC)',       pn: 'PMPN4008', xpr5000e: true, xpr4000: false, xpr2500: false },
            { desc: 'Replacement micro-USB charger for wireless pod (ARG)',       pn: 'PMPN4016', xpr5000e: true, xpr4000: false, xpr2500: false },
            { desc: 'Replacement micro-USB charger for wireless pod (BRZ)',       pn: 'PMPN4023', xpr5000e: true, xpr4000: false, xpr2500: false },
            { desc: 'Replacement micro-USB charger for wireless pod (EU)',        pn: 'PMPN4028', xpr5000e: true, xpr4000: false, xpr2500: false },
          ]
        }
      ]
    },

    control_station: {
      cols: [
        { key: 'desc',     label: 'Description',    type: 'text' },
        { key: 'pn',       label: 'Part #',         type: 'pn' },
        { key: 'xpr5000e', label: 'XPR 5000/5000e', type: 'check' },
        { key: 'xpr4000',  label: 'XPR 4000',       type: 'check' },
        { key: 'xpr2500',  label: 'XPR 2500',       type: 'check' },
      ],
      sections: [
        {
          title: 'Control Station (XPR 5000/5000e / XPR 4000)',
          items: [
            { desc: 'Power supply 14V 10 amp (1-25W)', pn: 'HPN4008', xpr5000e: true, xpr4000: true, xpr2500: false },
            { desc: 'Desktop tray with speaker',        pn: 'RSN4005', xpr5000e: true, xpr4000: true, xpr2500: false },
          ]
        }
      ]
    },

    installation: {
      cols: [
        { key: 'desc',     label: 'Description',    type: 'text' },
        { key: 'pn',       label: 'Part #',         type: 'pn' },
        { key: 'xpr5000e', label: 'XPR 5000/5000e', type: 'check' },
        { key: 'xpr4000',  label: 'XPR 4000',       type: 'check' },
        { key: 'xpr2500',  label: 'XPR 2500',       type: 'check' },
      ],
      sections: [
        {
          title: 'Installation & Mounting',
          items: [
            { desc: 'Low profile trunnion kit (under dash)',         pn: 'RLN6466',  xpr5000e: true,  xpr4000: false, xpr2500: false },
            { desc: 'Low profile trunnion kit (under dash)',         pn: 'RLN6077',  xpr5000e: false, xpr4000: true,  xpr2500: false },
            { desc: 'High profile trunnion kit (under dash/floor)',  pn: 'RLN6467',  xpr5000e: true,  xpr4000: false, xpr2500: false },
            { desc: 'High profile trunnion kit (under dash/floor)',  pn: 'RLN6078',  xpr5000e: false, xpr4000: true,  xpr2500: false },
            { desc: 'Key lock trunnion kit',                         pn: 'RLN6079',  xpr5000e: false, xpr4000: true,  xpr2500: false },
            { desc: 'Key lock trunnion kit',                         pn: 'RLN6468',  xpr5000e: true,  xpr4000: false, xpr2500: true  },
            { desc: 'Direct in-dashboard mounting kit',              pn: 'RLN5933',  xpr5000e: false, xpr4000: true,  xpr2500: false },
            { desc: 'Direct in-dashboard mounting kit',              pn: 'RLN6465',  xpr5000e: true,  xpr4000: false, xpr2500: false },
            { desc: 'In-dash mounting kit DIN',                      pn: 'FTN6083',  xpr5000e: true,  xpr4000: false, xpr2500: false },
            { desc: 'Mobile remote mount adapter kit',               pn: 'PMLN5404', xpr5000e: false, xpr4000: true,  xpr2500: false },
            { desc: 'Mobile remote mount adapter kit',               pn: 'PMLN6404', xpr5000e: true,  xpr4000: false, xpr2500: true  },
          ]
        }
      ]
    },

    speakers: {
      cols: [
        { key: 'desc',     label: 'Description',    type: 'text' },
        { key: 'pn',       label: 'Part #',         type: 'pn' },
        { key: 'watts',    label: 'Watts',          type: 'text' },
        { key: 'xpr5000e', label: 'XPR 5000/5000e', type: 'check' },
        { key: 'xpr4000',  label: 'XPR 4000',       type: 'check' },
        { key: 'xpr2500',  label: 'XPR 2500',       type: 'check' },
      ],
      sections: [
        {
          title: 'External Speakers',
          items: [
            { desc: '13W external speaker',    pn: 'RSN4002',  watts: '13W',  xpr5000e: true,  xpr4000: false, xpr2500: false },
            { desc: '13W external speaker',    pn: 'RSN4001',  watts: '13W',  xpr5000e: false, xpr4000: false, xpr2500: true  },
            { desc: '7.5W external speaker',   pn: 'RSN4003',  watts: '7.5W', xpr5000e: false, xpr4000: false, xpr2500: true  },
            { desc: '5W external speaker',     pn: 'RSN4004',  watts: '5W',   xpr5000e: false, xpr4000: false, xpr2500: true  },
            { desc: '7.5W external speaker',   pn: 'HSN8145',  watts: '7.5W', xpr5000e: false, xpr4000: true,  xpr2500: false },
            { desc: 'Speaker extension cable', pn: 'GMKN4084', watts: '\u2014', xpr5000e: false, xpr4000: false, xpr2500: true  },
          ]
        }
      ]
    },

    cables: {
      cols: [
        { key: 'desc',     label: 'Description',    type: 'text' },
        { key: 'pn',       label: 'Part #',         type: 'pn' },
        { key: 'xpr5000e', label: 'XPR 5000/5000e', type: 'check' },
        { key: 'xpr4000',  label: 'XPR 4000',       type: 'check' },
        { key: 'xpr2500',  label: 'XPR 2500',       type: 'check' },
      ],
      sections: [
        {
          title: 'Cables',
          items: [
            { desc: 'Mobile remote mount 5-meter cable kit',                          pn: 'PMKN4073', xpr5000e: true,  xpr4000: false, xpr2500: false },
            { desc: 'Mobile remote mount 3-meter cable kit',                          pn: 'PMKN4074', xpr5000e: true,  xpr4000: false, xpr2500: false },
            { desc: 'Mobile remote mount 5-meter cable kit',                          pn: 'PMKN4144', xpr5000e: false, xpr4000: true,  xpr2500: false },
            { desc: 'Mobile remote mount 3-meter cable kit',                          pn: 'PMKN4143', xpr5000e: false, xpr4000: true,  xpr2500: false },
            { desc: 'IMPRES mobile MAP non-PC adapter',                               pn: 'PMKN4070', xpr5000e: true,  xpr4000: true,  xpr2500: false },
            { desc: 'IMPRES mobile MMP non-PC adapter',                               pn: 'PMKN4072', xpr5000e: true,  xpr4000: true,  xpr2500: false },
            { desc: 'Power cable to battery, 10ft, 15A, 14AWG (1-25W radios)',        pn: 'HKN4137',  xpr5000e: true,  xpr4000: true,  xpr2500: true  },
            { desc: 'Power cable to battery, 10ft, 20A, 12AWG (1-60W radios)',        pn: 'HKN4191',  xpr5000e: true,  xpr4000: true,  xpr2500: true  },
            { desc: 'Power cable to battery, 20ft, 20A, 10AWG (1-60W radios)',        pn: 'HKN4192',  xpr5000e: true,  xpr4000: true,  xpr2500: true  },
            { desc: 'Ignition sense cable',                                           pn: 'RKN4136',  xpr5000e: true,  xpr4000: true,  xpr2500: false },
            { desc: 'Mobile and repeater rear accessory programming cable',           pn: 'PMKN4010', xpr5000e: true,  xpr4000: true,  xpr2500: false },
            { desc: 'Mobile and repeater rear programming, test and alignment cable', pn: 'PMKN4016', xpr5000e: true,  xpr4000: true,  xpr2500: false },
            { desc: 'Mobile rear accessory connector universal cable',                pn: 'PMKN4018', xpr5000e: true,  xpr4000: true,  xpr2500: false },
          ]
        }
      ]
    },

    antennas: {
      cols: [
        { key: 'desc',  label: 'Description', type: 'text' },
        { key: 'pn',    label: 'Part #',      type: 'pn' },
        { key: 'band',  label: 'Band',        type: 'text' },
        { key: 'freq',  label: 'Freq (MHz)',  type: 'text' },
        { key: 'gps',   label: 'GPS',         type: 'check' },
        { key: 'mount', label: 'Mount',       type: 'text' },
      ],
      sections: [
        {
          title: 'UHF Antennas',
          items: [
            { desc: 'GPS/UHF combination 1/4 wave (403-430 MHz)',    pn: 'PMAE4030',   band: 'UHF',     freq: '403-430',   gps: true,  mount: 'Through-hole' },
            { desc: 'GPS/UHF combination 1/4 wave (450-470 MHz)',    pn: 'PMAE4031',   band: 'UHF',     freq: '450-470',   gps: true,  mount: 'Through-hole' },
            { desc: 'GPS/UHF combination 3.5 dB gain (406-420 MHz)', pn: 'PMAE4032',   band: 'UHF',     freq: '406-420',   gps: true,  mount: 'Through-hole' },
            { desc: 'GPS/UHF combination 3.5 dB gain (450-470 MHz)', pn: 'PMAE4033',   band: 'UHF',     freq: '450-470',   gps: true,  mount: 'Through-hole' },
            { desc: 'GPS/UHF combination 5 dB gain (450-470 MHz)',   pn: 'PMAE4034',   band: 'UHF',     freq: '450-470',   gps: true,  mount: 'Through-hole' },
            { desc: 'GPS/UHF combination 2 dB gain (403-527 MHz)',   pn: 'HAE6019',    band: 'UHF',     freq: '403-527',   gps: true,  mount: 'Through-hole' },
            { desc: 'GPS/UHF combination 1/4 wave (470-527 MHz)',    pn: 'HAE6020',    band: 'UHF',     freq: '470-527',   gps: true,  mount: 'Through-hole' },
            { desc: 'UHF wide area 3.5 dB gain (450-470 MHz)',       pn: 'HAE4011',    band: 'UHF',     freq: '450-470',   gps: false, mount: 'Through-hole' },
            { desc: 'UHF wide area 2 dB gain (403-527 MHz)',         pn: 'HAE6022',    band: 'UHF',     freq: '403-527',   gps: false, mount: 'Through-hole' },
            { desc: 'UHF wide area 5 dB gain (445-470 MHz)',         pn: 'RAE4004ARB', band: 'UHF',     freq: '445-470',   gps: false, mount: 'Through-hole' },
            { desc: 'UHF urban roof mount 1/4 wave (403-430 MHz)',   pn: 'PMAE4040',   band: 'UHF',     freq: '403-430',   gps: false, mount: 'Roof mount' },
            { desc: 'UHF urban roof mount 1/4 wave (450-470 MHz)',   pn: 'PMAE4041',   band: 'UHF',     freq: '450-470',   gps: false, mount: 'Roof mount' },
            { desc: 'UHF urban roof mount 1/4 wave (470-512 MHz)',   pn: 'HAE4004',    band: 'UHF',     freq: '470-512',   gps: false, mount: 'Roof mount' },
          ]
        },
        {
          title: 'VHF Antennas',
          items: [
            { desc: 'GPS/VHF combination 1/4 wave (136-144 MHz)',   pn: 'RAD4214', band: 'VHF', freq: '136-144',   gps: true,  mount: 'Through-hole' },
            { desc: 'GPS/VHF combination 1/4 wave (146-150.8 MHz)', pn: 'RAD4215', band: 'VHF', freq: '146-150.8', gps: true,  mount: 'Through-hole' },
            { desc: 'GPS/VHF combination 1/4 wave (150.8-162 MHz)', pn: 'RAD4216', band: 'VHF', freq: '150.8-162', gps: true,  mount: 'Through-hole' },
            { desc: 'GPS/VHF combination 1/4 wave (162-174 MHz)',   pn: 'RAD4217', band: 'VHF', freq: '162-174',   gps: true,  mount: 'Through-hole' },
            { desc: 'GPS/VHF combination 3 dB gain (146-172 MHz)',  pn: 'RAD4218', band: 'VHF', freq: '146-172',   gps: true,  mount: 'Through-hole' },
            { desc: 'VHF urban roof mount 1/4 wave (162-174 MHz)',  pn: 'HAD4009', band: 'VHF', freq: '162-174',   gps: false, mount: 'Roof mount' },
          ]
        },
        {
          title: '800/900 MHz Antennas',
          items: [
            { desc: 'GPS/800-900 MHz 1/4 wave (806-941 MHz)',  pn: 'HAF4029',  band: '800/900', freq: '806-941', gps: true,  mount: 'Through-hole' },
            { desc: 'GPS/800-900 MHz 3 dB gain (806-941 MHz)', pn: 'HAF4030',  band: '800/900', freq: '806-941', gps: true,  mount: 'Through-hole' },
            { desc: 'GPS/800-900 MHz stubby (806-941 MHz)',    pn: 'HAF4032',  band: '800/900', freq: '806-941', gps: true,  mount: 'Through-hole' },
            { desc: 'GPS/800-900 MHz 5 dB gain (806-941 MHz)', pn: 'HAF4033',  band: '800/900', freq: '806-941', gps: true,  mount: 'Through-hole' },
          ]
        },
        {
          title: 'GPS Antennas',
          items: [
            { desc: 'GPS fixed mount active antenna',   pn: 'PMAN4000', band: 'GPS', freq: '\u2014', gps: true, mount: 'Fixed' },
            { desc: 'GPS glass mount active antenna',   pn: 'PMAN4001', band: 'GPS', freq: '\u2014', gps: true, mount: 'Glass' },
            { desc: 'GPS magnetic mount active antenna', pn: 'PMAN4002', band: 'GPS', freq: '\u2014', gps: true, mount: 'Magnetic' },
            { desc: 'GPS fixed mount active antenna',   pn: 'PMAN4008', band: 'GPS', freq: '\u2014', gps: true, mount: 'Fixed' },
            { desc: 'GPS glass mount active antenna',   pn: 'PMAN4009', band: 'GPS', freq: '\u2014', gps: true, mount: 'Glass' },
            { desc: 'GPS magnetic mount active antenna', pn: 'PMAN4010', band: 'GPS', freq: '\u2014', gps: true, mount: 'Magnetic' },
          ]
        }
      ]
    },

    ant_accessories: {
      cols: [
        { key: 'desc',     label: 'Description',    type: 'text' },
        { key: 'pn',       label: 'Part #',         type: 'pn' },
        { key: 'xpr5000e', label: 'XPR 5000/5000e', type: 'check' },
        { key: 'xpr4000',  label: 'XPR 4000',       type: 'check' },
        { key: 'xpr2500',  label: 'XPR 2500',       type: 'check' },
      ],
      sections: [
        {
          title: 'Antenna Accessories (XPR 5000/5000e)',
          items: [
            { desc: 'Mobile mini-U antenna adapter, 8-foot cable', pn: 'HKN9088', xpr5000e: true, xpr4000: false, xpr2500: false },
          ]
        }
      ]
    },

  }
};
