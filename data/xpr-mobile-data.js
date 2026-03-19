// xpr-mobile-data.js — MOTOTRBO XPR Mobile Radio Accessory Data
// Source: MOTOTRBO Professional Tier Accessory Catalog (Motorola Solutions)
// Covers: XPR 5550e (XPR 5000/5000e Series), XPR 4000 Series, XPR 2500 Series
// All part numbers PDF-verified. Do not extrapolate or add unverified items.
// Mobile category structure differs from portable — see category list below.

// ── CATEGORY DEFINITIONS ────────────────────────────────────────────────
// 1  Microphones
// 2  Microphone Accessories
// 3  External PTT
// 4  Long Range Wireless
// 5  Bluetooth/Ops Critical Wireless
// 6  Control Station Accessories
// 7  Installation & Mounting
// 8  External Speakers
// 9  Cables
// 10 Antennas

// ── XPR 5000 / 5000e SERIES ──────────────────────────────────────────────
const xpr5000Categories = [
  {
    id: 1,
    name: 'Microphones',
    items: [
      { desc: 'IMPRES Keypad Microphone with 4-Way Navigation Button', part: 'RMN5127', impres: true },
      { desc: 'Standard Compact Microphone',                           part: 'RMN5052', impres: false },
      { desc: 'IMPRES Heavy-Duty Microphone',                          part: 'RMN5053', impres: true },
      { desc: 'IMPRES Telephone Style Handset',                        part: 'HMN4098', impres: true },
      { desc: 'IMPRES Visor Microphone',                               part: 'RMN5054', impres: true },
      { desc: 'Desktop Microphone',                                    part: 'RMN5050', impres: false },
      { desc: 'MOTOTRBO Mobile Handheld Control Head Upgrade Kit with 3M Straight Cable', part: 'PMLN7131', impres: false },
      { desc: 'MOTOTRBO Mobile Handheld Control Head 5-Meter Straight Extension Cable',   part: 'PMKN4174', impres: false },
      { desc: 'MOTOTRBO Mobile Handheld Control Head Upgrade Kit without Transceiver Adaptor', part: 'PMLN7209', impres: false },
      { desc: 'MOTOTRBO Mobile Handheld Control Head Transceiver Adaptor',                part: 'PMLN7033', impres: false }
    ]
  },
  {
    id: 2,
    name: 'Mic Accessories',
    items: [
      { desc: 'Microphone Hang-Up Clip (requires installation)',     part: 'HLN9073' },
      { desc: 'Universal Microphone Hang-Up Clip (no installation)', part: 'HLN9414' },
      { desc: '10-Foot Mobile Microphone Extension Cable',           part: 'PMKN4033' },
      { desc: '20-Foot Mobile Microphone Extension Cable',           part: 'PMKN4034' },
      { desc: 'Compact Microphone Replacement Cable',                part: '3075336B07' },
      { desc: 'Heavy Duty Keypad Microphone Replacement Cable',      part: '3075336B10' }
    ]
  },
  {
    id: 3,
    name: 'External PTT',
    items: [
      { desc: 'Pushbutton Push-to-Talk (for visor microphone)', part: 'RLN5926' },
      { desc: 'Emergency Footswitch (for visor microphone)',    part: 'RLN5929' }
    ]
  },
  {
    id: 4,
    name: 'Wireless Kits',
    items: [
      { desc: 'Long Range Wireless Kit with Charger (includes long range wireless RSM, mobile microphone Bluetooth gateway, vehicular charger)', part: 'RLN6551' },
      { desc: 'Long Range Wireless Kit (includes long range wireless RSM, mobile microphone Bluetooth gateway)', part: 'RLN6552' },
      { desc: 'Mobile Microphone with Bluetooth Gateway',               part: 'PMMN4097' },
      { desc: 'Wireless RSM with Battery and Clip',                     part: 'RLN6544' },
      { desc: 'Wireless RSM Battery, 1750mAh Li-Ion 3.6VDC',           part: 'PMNN4461' },
      { desc: 'Dual Unit Charger with Power Supply, US/CAN',            part: 'PMLN7120' },
      { desc: 'Dual Unit Charger with Power Supply, EU',                part: 'PMLN7121' },
      { desc: 'Dual Unit Charger with Power Supply, UK',                part: 'PMLN7122' },
      { desc: 'Dual Unit Charger with Power Supply, PRC',               part: 'PMLN7123' },
      { desc: 'Dual Unit Charger with Power Supply, AU/NZ',             part: 'PMLN7124' },
      { desc: 'Dual Unit Charger with Power Supply, BZL',               part: 'PMLN7125' },
      { desc: 'Dual Unit Charger with Power Supply, ARG',               part: 'PMLN7126' },
      { desc: 'Dual Unit Charger with Power Supply, KOR',               part: 'PMLN7127' },
      { desc: 'Vehicular Charger with Coil Cord Cigarette Lighter Plug', part: 'PMLN6716' },
      { desc: 'Hang-Up Clip for Vehicular Charger (requires installation)', part: 'HLN5391' },
      { desc: 'Swivel Clip',                                            part: 'PMLN6743' },
      { desc: 'D-Ring Swivel Clip',                                     part: '4200931201' },
      { desc: 'Receive-Only Earpiece with Comfort Eartube',             part: 'PMLN7560' },
      { desc: 'Receive-Only Earbud',                                    part: 'AARLN4885' }
    ]
  },
  {
    id: 5,
    name: 'Bluetooth',
    items: [
      { desc: 'XBT Operations Critical Wireless Behind-the-Neck Headset',  part: 'RLN6490', ear_type: 'Dual-muff', mic_type: 'Boom', ptt: true, talk_time_hr: 22, charge_time_hr: 7, weight_g: 429 },
      { desc: 'XBT Operations Critical Wireless Headband Style Headset',    part: 'RLN6491', ear_type: 'Dual-muff', mic_type: 'Boom', ptt: true, talk_time_hr: 22, charge_time_hr: 7, weight_g: 422 },
      { desc: 'Operations Critical Wireless Earpiece with 12-Inch Cable',   part: 'NNTN8125', ear_type: 'Over-the-ear (CommPort)', mic_type: 'Directional', ptt: true, talk_time_hr: 10, charge_time_hr: 3, weight_g: 43 },
      { desc: 'Operations Critical Wireless Push-to-Talk Pod (with US charger)', part: 'NNTN8127', ear_type: 'N/A', mic_type: 'N/A', ptt: true, talk_time_hr: 10, charge_time_hr: 3, weight_g: 43 },
      { desc: 'Operations Critical Wireless Push-to-Talk Pod (without charger)', part: 'NNTN8191', ear_type: 'N/A', mic_type: 'N/A', ptt: true, talk_time_hr: 10, charge_time_hr: 3, weight_g: 43 },
      { desc: 'Bluetooth Accessory Kit with Flexible Earpiece, Pod and Charging Cradle with Power Supply (US)', part: 'RLN6500', ear_type: 'Over-the-ear (swivel)', mic_type: 'In-line', ptt: false, talk_time_hr: 8, charge_time_hr: null, weight_g: null },
      { desc: 'Bluetooth Accessory Kit with Flexible Earpiece, Pod and Charging Cradle',                        part: 'PMLN7181', ear_type: 'Over-the-ear (swivel)', mic_type: 'Boom', ptt: false, talk_time_hr: 8, charge_time_hr: null, weight_g: null },
      { desc: 'Bluetooth Accessory Kit with Flexible Earpiece, Pod and Charging Cradle with Power Supply (US)', part: 'RLN6556', ear_type: 'Over-the-ear (swivel)', mic_type: 'Boom', ptt: false, talk_time_hr: 8, charge_time_hr: null, weight_g: null },
      { desc: 'Operations Critical Wireless 1-Wire Surveillance Kit with Translucent Tube', part: 'PMLN7052', ear_type: 'Clear rubber eartip', mic_type: 'In-line', ptt: false, talk_time_hr: null, charge_time_hr: null, weight_g: null },
      { desc: 'Operations Critical Wireless Earbud with 11.5-Inch Cable',   part: 'NNTN8294', ear_type: 'Earbud', mic_type: 'In-line', ptt: false, talk_time_hr: 10, charge_time_hr: null, weight_g: null },
      { desc: 'Operations Critical Wireless Earbud with 45-Inch Cable',     part: 'NNTN8295', ear_type: 'Earbud', mic_type: 'In-line', ptt: false, talk_time_hr: 10, charge_time_hr: null, weight_g: null },
      { desc: 'Swivel Earpiece with In-Line Microphone Multi-Pack (3-pack)', part: 'RLN6550', ear_type: 'Over-the-ear (swivel)', mic_type: 'Boom', ptt: false, talk_time_hr: null, charge_time_hr: null, weight_g: null },
      { desc: 'Flexible Fit Swivel Earpiece with Boom Microphone Multi-Pack (3-pack)', part: 'PMLN7203', ear_type: 'Over-the-ear (swivel)', mic_type: 'Boom', ptt: false, talk_time_hr: null, charge_time_hr: null, weight_g: null },
      { desc: 'Replacement Wireless Earpiece 12-Inch Cable (for NNTN8125)', part: 'NTN2572', ear_type: null, mic_type: null, ptt: false, talk_time_hr: null, charge_time_hr: null, weight_g: null },
      { desc: 'Wireless Earpiece Maintenance Kit (10 silicone ear tubes, 10 mic seal strips, 2 foam windscreens)', part: 'NTN8821', ear_type: null, mic_type: null, ptt: false, talk_time_hr: null, charge_time_hr: null, weight_g: null },
      { desc: 'Ear Strap for Comfort Earpiece (pack of 10)',               part: 'NTN8988', ear_type: null, mic_type: null, ptt: false, talk_time_hr: null, charge_time_hr: null, weight_g: null },
      { desc: 'Eartube for Comfort Earpiece (pack of 10)',                 part: 'RLN5037', ear_type: null, mic_type: null, ptt: false, talk_time_hr: null, charge_time_hr: null, weight_g: null },
      { desc: 'Replacement Ear Tips Kit for Wireless Earbuds (20 small, 20 medium, 20 large, 10 clips)', part: 'NNTN8361', ear_type: null, mic_type: null, ptt: false, talk_time_hr: null, charge_time_hr: null, weight_g: null },
      { desc: 'Swivel Clip for Ops Critical Wireless Pods',                part: 'PMLN6246', ear_type: null, mic_type: null, ptt: false, talk_time_hr: null, charge_time_hr: null, weight_g: null },
      { desc: 'Replacement Micro-USB Charger for Wireless Pod, US',        part: 'PMPN4027', ear_type: null, mic_type: null, ptt: false, talk_time_hr: null, charge_time_hr: null, weight_g: null },
      { desc: 'Replacement Micro-USB Charger for Wireless Pod, AU/NZ',     part: 'PMPN4007', ear_type: null, mic_type: null, ptt: false, talk_time_hr: null, charge_time_hr: null, weight_g: null },
      { desc: 'Replacement Micro-USB Charger for Wireless Pod, EU/UK',     part: 'PMPN4006', ear_type: null, mic_type: null, ptt: false, talk_time_hr: null, charge_time_hr: null, weight_g: null },
      { desc: 'Replacement Micro-USB Charger for Wireless Pod, PRC',       part: 'PMPN4008', ear_type: null, mic_type: null, ptt: false, talk_time_hr: null, charge_time_hr: null, weight_g: null },
      { desc: 'Replacement Micro-USB Charger for Wireless Pod, ARG',       part: 'PMPN4016', ear_type: null, mic_type: null, ptt: false, talk_time_hr: null, charge_time_hr: null, weight_g: null },
      { desc: 'Replacement Micro-USB Charger for Wireless Pod, BZL',       part: 'PMPN4023', ear_type: null, mic_type: null, ptt: false, talk_time_hr: null, charge_time_hr: null, weight_g: null },
      { desc: 'Replacement Micro-USB Charger for Wireless Pod, EU',        part: 'PMPN4028', ear_type: null, mic_type: null, ptt: false, talk_time_hr: null, charge_time_hr: null, weight_g: null }
    ]
  },
  {
    id: 6,
    name: 'Control Station',
    items: [
      { desc: 'Power Supply 14V 10 Amp 117/240 VAC (1-25W)',             part: 'HPN4008' },
      { desc: 'Desktop Tray with Speaker',                               part: 'RSN4005' },
      { desc: 'Desktop Tray without Speaker',                            part: 'GLN7318' },
      { desc: 'Adapter Cable for Control Station',                       part: 'HKN9088' },
      { desc: 'Power Supply, 25-60W, 1-60W Cord Included',              part: 'HPN4007' },
      { desc: 'Power Cable for GPN6145',                                 part: 'GKN6266' },
      { desc: 'Euro Line Cord PS Power Cable',                           part: 'NTN7374AR' },
      { desc: 'Power Cable (UK, straight)',                              part: '3002695B05' },
      { desc: 'UK Line Cord PS Power Cable',                             part: 'NTN7375AR' },
      { desc: 'Argentina Line Cord PS Power Cable',                      part: '3085801L01' },
      { desc: 'US Line Cord for GPN6145',                                part: 'NTN7373AR' },
      { desc: 'Mini-UHF to PL259 Antenna Adapter Cable',                 part: 'HKN9557' }
    ]
  },
  {
    id: 7,
    name: 'Installation',
    items: [
      { desc: 'Low Profile Trunnion Kit, Under Dash (box)',             part: 'RLN6077' },
      { desc: 'Low Profile Trunnion Kit, Under Dash (box)',             part: 'RLN6466' },
      { desc: 'High Profile Trunnion Kit, Under Dash or Floor Mount',   part: 'RLN6078' },
      { desc: 'High Profile Trunnion Kit, Under Dash or Floor Mount',   part: 'RLN6467' },
      { desc: 'Key Lock Trunnion Kit',                                  part: 'RLN6079' },
      { desc: 'Key Lock Trunnion Kit',                                  part: 'RLN6468' },
      { desc: 'Direct In-Dashboard Mounting Kit',                       part: 'RLN5933' },
      { desc: 'Direct In-Dashboard Mounting Kit',                       part: 'RLN6465' },
      { desc: 'MOTOTRBO Mobile Remote Mount Adapter Kit',               part: 'PMLN5404' },
      { desc: 'MOTOTRBO Mobile Remote Mount Adapter Kit',               part: 'PMLN6404' },
      { desc: 'Power Cable to Battery, 10-Foot, 15 Amp, 14 AWG',       part: 'HKN4137' },
      { desc: 'Power Cable to Battery, 10-Foot, 20 Amp, 12 AWG',       part: 'HKN4191' },
      { desc: 'Power Cable to Battery, 20-Foot, 20 Amp, 10 AWG',       part: 'HKN4192' },
      { desc: 'Ignition Sense Cable',                                   part: 'HKN9327' }
    ]
  },
  {
    id: 8,
    name: 'Speakers',
    items: [
      { desc: '13W External Speaker',    part: 'RSN4002' },
      { desc: '7.5W External Speaker',   part: 'RSN4003' },
      { desc: '5W External Speaker',     part: 'RSN4004' },
      { desc: '7.5W External Speaker',   part: 'HSN8145' },
      { desc: '13W External Speaker',    part: 'RSN4001' },
      { desc: 'Speaker Extension Cable', part: 'GMKN4084' }
    ]
  },
  {
    id: 9,
    name: 'Cables',
    items: [
      { desc: 'Mobile Remote Mount 5-Meter Cable Kit',                        part: 'PMKN4073' },
      { desc: 'Mobile Remote Mount 3-Meter Cable Kit',                        part: 'PMKN4074' },
      { desc: 'Mobile Remote Mount 5-Meter Cable Kit',                        part: 'PMKN4144' },
      { desc: 'Mobile Remote Mount 3-Meter Cable Kit',                        part: 'PMKN4143' },
      { desc: 'IMPRES Mobile MAP Non-PC Adapter',                             part: 'PMKN4070' },
      { desc: 'IMPRES Mobile MMP Non-PC Adapter',                             part: 'PMKN4072' },
      { desc: 'Mobile and Repeater Rear Accessory Programming Cable',         part: 'PMKN4010' },
      { desc: 'Mobile and Repeater Rear Programming, Test and Alignment Cable', part: 'PMKN4016' },
      { desc: 'Mobile Rear Accessory Connector Universal Cable',              part: 'PMKN4018' },
      { desc: 'Mobile Front Programming Cable',                               part: 'HKN6184' },
      { desc: 'Mobile Front Programming Cable',                               part: 'PMKN4147' },
      { desc: 'Mobile Rear Accessory Connector Universal Cable',              part: 'PMKN4151' },
      { desc: 'Rear Accessory Connector USB Programming Cable',               part: 'PMLN4148' },
      { desc: 'Ignition Sense Cable',                                         part: 'RKN4136' },
      { desc: 'Hardware Kit for Rear Accessory Connector',                    part: 'PMLN5072' },
      { desc: '16-Pin MAP Connector Housing (APAC only)',                     part: '1580922V01' },
      { desc: 'Rear Accessory Connector Seal with Connector and Pins',        part: 'GMBN1021' },
      { desc: 'Connector Extender (20 pieces)',                               part: 'PMLN5620' },
      { desc: 'Gasket, Cover, Accessory Connector',                          part: '3202607Y01' },
      { desc: 'Mobile Crimping Tool',                                         part: '6680388A26' },
      { desc: 'Generic Option Board (APAC, EMEA, LACR)',                      part: 'PMLN6544' }
    ]
  },
  {
    id: 10,
    name: 'Antennas',
    items: [
      { desc: 'GPS/UHF Combination 1/4 Wave Antenna, 403-430 MHz',     part: 'PMAE4030', band: 'UHF', freq_mhz: '403-430', gps: true,  mount: 'Through-hole' },
      { desc: 'GPS/UHF Combination 1/4 Wave Antenna, 450-470 MHz',     part: 'PMAE4031', band: 'UHF', freq_mhz: '450-470', gps: true,  mount: 'Through-hole' },
      { desc: 'GPS/UHF Combination Antenna, 406-420 MHz, 3.5 dB gain', part: 'PMAE4032', band: 'UHF', freq_mhz: '406-420', gps: true,  mount: 'Through-hole' },
      { desc: 'GPS/UHF Combination Antenna, 450-470 MHz, 3.5 dB gain', part: 'PMAE4033', band: 'UHF', freq_mhz: '450-470', gps: true,  mount: 'Through-hole' },
      { desc: 'GPS/UHF Combination Antenna, 450-470 MHz, 5 dB gain',   part: 'PMAE4034', band: 'UHF', freq_mhz: '450-470', gps: true,  mount: 'Through-hole' },
      { desc: 'GPS/UHF Combination Antenna, 403-527 MHz, 2 dB gain',   part: 'HAE6019',  band: 'UHF', freq_mhz: '403-527', gps: true,  mount: 'Through-hole' },
      { desc: 'GPS/UHF Combination 1/4 Wave Antenna, 470-527 MHz',     part: 'HAE6020',  band: 'UHF', freq_mhz: '470-527', gps: true,  mount: 'Through-hole' },
      { desc: 'GPS/UHF Combination Antenna, 470-494 MHz, 3.5 dB gain', part: 'HAE6024',  band: 'UHF', freq_mhz: '470-494', gps: true,  mount: 'Through-hole' },
      { desc: 'GPS/UHF Combination Antenna, 494-512 MHz, 3 dB gain',   part: 'HAE6026',  band: 'UHF', freq_mhz: '494-512', gps: true,  mount: 'Through-hole' },
      { desc: 'UHF Wide Area Antenna, 450-470 MHz, 3.5 dB gain',       part: 'HAE4011',  band: 'UHF', freq_mhz: '450-470', gps: false, mount: 'Through-hole' },
      { desc: 'UHF Wide Area Antenna, 403-527 MHz, 2 dB gain',         part: 'HAE6022',  band: 'UHF', freq_mhz: '403-527', gps: false, mount: 'Through-hole' },
      { desc: 'UHF Urban Roof Mount 1/4 Wave Antenna, 403-430 MHz',    part: 'PMAE4040', band: 'UHF', freq_mhz: '403-430', gps: false, mount: 'Roof mount' },
      { desc: 'UHF Urban Roof Mount 1/4 Wave Antenna, 450-470 MHz',    part: 'PMAE4041', band: 'UHF', freq_mhz: '450-470', gps: false, mount: 'Roof mount' },
      { desc: 'UHF Urban Roof Mount 1/4 Wave Antenna, 470-512 MHz',    part: 'HAE4004',  band: 'UHF', freq_mhz: '470-512', gps: false, mount: 'Roof mount' },
      { desc: 'GPS/VHF Combination 1/4 Wave Antenna, 136-144 MHz',     part: 'RAD4214',  band: 'VHF', freq_mhz: '136-144',   gps: true,  mount: 'Through-hole' },
      { desc: 'GPS/VHF Combination 1/4 Wave Antenna, 146-150.8 MHz',   part: 'RAD4215',  band: 'VHF', freq_mhz: '146-150.8', gps: true,  mount: 'Through-hole' },
      { desc: 'GPS/VHF Combination 1/4 Wave Antenna, 150.8-162 MHz',   part: 'RAD4216',  band: 'VHF', freq_mhz: '150.8-162', gps: true,  mount: 'Through-hole' },
      { desc: 'GPS/VHF Combination 1/4 Wave Antenna, 162-174 MHz',     part: 'RAD4217',  band: 'VHF', freq_mhz: '162-174',   gps: true,  mount: 'Through-hole' },
      { desc: 'GPS/VHF Combination Antenna, 146-172 MHz, 3 dB gain',   part: 'RAD4218',  band: 'VHF', freq_mhz: '146-172',   gps: true,  mount: 'Through-hole' },
      { desc: 'VHF Urban Roof Mount 1/4 Wave Antenna, 136-144 MHz',    part: 'HAD4006',  band: 'VHF', freq_mhz: '136-144',   gps: false, mount: 'Roof mount' },
      { desc: 'VHF Urban Roof Mount 1/4 Wave Antenna, 146-150.8 MHz',  part: 'HAD4007',  band: 'VHF', freq_mhz: '146-150.8', gps: false, mount: 'Roof mount' },
      { desc: 'VHF Urban Roof Mount 1/4 Wave Antenna, 150.8-162 MHz',  part: 'HAD4008',  band: 'VHF', freq_mhz: '150.8-162', gps: false, mount: 'Roof mount' },
      { desc: 'VHF Urban Roof Mount 1/4 Wave Antenna, 162-174 MHz',    part: 'HAD4009',  band: 'VHF', freq_mhz: '162-174',   gps: false, mount: 'Roof mount' },
      { desc: 'VHF Wide Area Antenna, 132-174 MHz, 3 dB gain',         part: 'HAD4022',  band: 'VHF', freq_mhz: '132-174',   gps: false, mount: 'Through-hole' },
      { desc: 'GPS/800/900 MHz 1/4 Wave Combination Antenna, 806-941 MHz', part: 'HAF4029', band: '800/900', freq_mhz: '806-941', gps: true, mount: 'Through-hole' },
      { desc: 'GPS/800/900 MHz Combination Antenna, 806-941 MHz, 3 dB gain', part: 'HAF4030', band: '800/900', freq_mhz: '806-941', gps: true, mount: 'Through-hole' },
      { desc: 'GPS/800/900 MHz Stubby Antenna, 806-941 MHz',           part: 'HAF4032', band: '800/900', freq_mhz: '806-941', gps: true, mount: 'Through-hole' },
      { desc: 'Fixed Mount GPS Active Antenna',                         part: 'PMAN4000', band: 'GPS', freq_mhz: '', gps: true, mount: 'Fixed' },
      { desc: 'Glass Mount GPS Active Antenna',                         part: 'PMAN4001', band: 'GPS', freq_mhz: '', gps: true, mount: 'Glass' },
      { desc: 'Magnetic Mount GPS Active Antenna',                      part: 'PMAN4002', band: 'GPS', freq_mhz: '', gps: true, mount: 'Magnetic' }
    ]
  }
];

// ── XPR 4000 SERIES ─────────────────────────────────────────────────────
const xpr4000Categories = [
  {
    id: 1,
    name: 'Microphones',
    items: [
      { desc: 'IMPRES Keypad Microphone',       part: 'RMN5065', impres: true },
      { desc: 'Standard Compact Microphone',    part: 'RMN5052', impres: false },
      { desc: 'IMPRES Heavy-Duty Microphone',   part: 'RMN5053', impres: true },
      { desc: 'IMPRES Telephone Style Handset', part: 'HMN4098', impres: true },
      { desc: 'IMPRES Visor Microphone',        part: 'RMN5054', impres: true },
      { desc: 'Desktop Microphone',             part: 'RMN5050', impres: false }
    ]
  },
  {
    id: 2,
    name: 'Mic Accessories',
    items: [
      { desc: 'Microphone Hang-Up Clip (requires installation)',     part: 'HLN9073' },
      { desc: 'Universal Microphone Hang-Up Clip (no installation)', part: 'HLN9414' },
      { desc: '10-Foot Mobile Microphone Extension Cable',           part: 'PMKN4033' },
      { desc: '20-Foot Mobile Microphone Extension Cable',           part: 'PMKN4034' },
      { desc: 'Compact Microphone Replacement Cable',                part: '3075336B07' },
      { desc: 'Heavy Duty Keypad Microphone Replacement Cable',      part: '3075336B10' }
    ]
  },
  {
    id: 3,
    name: 'External PTT',
    items: [
      { desc: 'Pushbutton Push-to-Talk (for visor microphone)', part: 'RLN5926' },
      { desc: 'Emergency Footswitch (for visor microphone)',    part: 'RLN5929' }
    ]
  },
  {
    id: 4,
    name: 'Wireless Kits',
    items: [
      { desc: 'Long Range Wireless Kit with Charger',                  part: 'RLN6551' },
      { desc: 'Long Range Wireless Kit',                               part: 'RLN6552' },
      { desc: 'Mobile Microphone with Bluetooth Gateway',              part: 'PMMN4097' },
      { desc: 'Wireless RSM with Battery and Clip',                    part: 'RLN6544' },
      { desc: 'Wireless RSM Battery, 1750mAh Li-Ion 3.6VDC',          part: 'PMNN4461' },
      { desc: 'Dual Unit Charger with Power Supply, US/CAN',           part: 'PMLN7120' },
      { desc: 'Dual Unit Charger with Power Supply, EU',               part: 'PMLN7121' },
      { desc: 'Dual Unit Charger with Power Supply, UK',               part: 'PMLN7122' },
      { desc: 'Dual Unit Charger with Power Supply, PRC',              part: 'PMLN7123' },
      { desc: 'Dual Unit Charger with Power Supply, AU/NZ',            part: 'PMLN7124' },
      { desc: 'Dual Unit Charger with Power Supply, BZL',              part: 'PMLN7125' },
      { desc: 'Dual Unit Charger with Power Supply, ARG',              part: 'PMLN7126' },
      { desc: 'Dual Unit Charger with Power Supply, KOR',              part: 'PMLN7127' },
      { desc: 'Vehicular Charger with Coil Cord Cigarette Lighter Plug', part: 'PMLN6716' },
      { desc: 'Hang-Up Clip for Vehicular Charger (requires installation)', part: 'HLN5391' },
      { desc: 'Swivel Clip',                                           part: 'PMLN6743' },
      { desc: 'D-Ring Swivel Clip',                                    part: '4200931201' }
    ]
  },
  {
    id: 5,
    name: 'Bluetooth',
    items: [
      { desc: 'XBT Operations Critical Wireless Behind-the-Neck Headset',  part: 'RLN6490', ear_type: 'Dual-muff', mic_type: 'Boom', ptt: true, talk_time_hr: 22, charge_time_hr: 7, weight_g: 429 },
      { desc: 'XBT Operations Critical Wireless Headband Style Headset',    part: 'RLN6491', ear_type: 'Dual-muff', mic_type: 'Boom', ptt: true, talk_time_hr: 22, charge_time_hr: 7, weight_g: 422 },
      { desc: 'Operations Critical Wireless Earpiece with 12-Inch Cable',   part: 'NNTN8125', ear_type: 'Over-the-ear (CommPort)', mic_type: 'Directional', ptt: true, talk_time_hr: 10, charge_time_hr: 3, weight_g: 43 },
      { desc: 'Operations Critical Wireless Push-to-Talk Pod (with US charger)', part: 'NNTN8127', ear_type: 'N/A', mic_type: 'N/A', ptt: true, talk_time_hr: 10, charge_time_hr: 3, weight_g: 43 },
      { desc: 'Operations Critical Wireless Push-to-Talk Pod (without charger)', part: 'NNTN8191', ear_type: 'N/A', mic_type: 'N/A', ptt: true, talk_time_hr: 10, charge_time_hr: 3, weight_g: 43 },
      { desc: 'Replacement Wireless Earpiece 12-Inch Cable (for NNTN8125)', part: 'NTN2572', ear_type: null, mic_type: null, ptt: false, talk_time_hr: null, charge_time_hr: null, weight_g: null },
      { desc: 'Wireless Earpiece Maintenance Kit (10 silicone ear tubes, 10 mic seal strips, 2 foam windscreens)', part: 'NTN8821', ear_type: null, mic_type: null, ptt: false, talk_time_hr: null, charge_time_hr: null, weight_g: null },
      { desc: 'Ear Strap for Comfort Earpiece (pack of 10)',               part: 'NTN8988', ear_type: null, mic_type: null, ptt: false, talk_time_hr: null, charge_time_hr: null, weight_g: null },
      { desc: 'Eartube for Comfort Earpiece (pack of 10)',                 part: 'RLN5037', ear_type: null, mic_type: null, ptt: false, talk_time_hr: null, charge_time_hr: null, weight_g: null },
      { desc: 'Replacement Ear Tips Kit for Wireless Earbuds (20 small, 20 medium, 20 large, 10 clips)', part: 'NNTN8361', ear_type: null, mic_type: null, ptt: false, talk_time_hr: null, charge_time_hr: null, weight_g: null },
      { desc: 'Swivel Clip for Ops Critical Wireless Pods',                part: 'PMLN6246', ear_type: null, mic_type: null, ptt: false, talk_time_hr: null, charge_time_hr: null, weight_g: null },
      { desc: 'Replacement Micro-USB Charger for Wireless Pod, US',        part: 'PMPN4027', ear_type: null, mic_type: null, ptt: false, talk_time_hr: null, charge_time_hr: null, weight_g: null },
      { desc: 'Replacement Micro-USB Charger for Wireless Pod, AU/NZ',     part: 'PMPN4007', ear_type: null, mic_type: null, ptt: false, talk_time_hr: null, charge_time_hr: null, weight_g: null },
      { desc: 'Replacement Micro-USB Charger for Wireless Pod, EU/UK',     part: 'PMPN4006', ear_type: null, mic_type: null, ptt: false, talk_time_hr: null, charge_time_hr: null, weight_g: null },
      { desc: 'Replacement Micro-USB Charger for Wireless Pod, PRC',       part: 'PMPN4008', ear_type: null, mic_type: null, ptt: false, talk_time_hr: null, charge_time_hr: null, weight_g: null },
      { desc: 'Replacement Micro-USB Charger for Wireless Pod, ARG',       part: 'PMPN4016', ear_type: null, mic_type: null, ptt: false, talk_time_hr: null, charge_time_hr: null, weight_g: null },
      { desc: 'Replacement Micro-USB Charger for Wireless Pod, BZL',       part: 'PMPN4023', ear_type: null, mic_type: null, ptt: false, talk_time_hr: null, charge_time_hr: null, weight_g: null },
      { desc: 'Replacement Micro-USB Charger for Wireless Pod, EU',        part: 'PMPN4028', ear_type: null, mic_type: null, ptt: false, talk_time_hr: null, charge_time_hr: null, weight_g: null }
    ]
  },
  {
    id: 6,
    name: 'Control Station',
    items: [
      { desc: 'Power Supply 14V 10 Amp 117/240 VAC (1-25W)',             part: 'HPN4008' },
      { desc: 'Desktop Tray with Speaker',                               part: 'RSN4005' },
      { desc: 'Desktop Tray without Speaker',                            part: 'GLN7318' },
      { desc: 'Adapter Cable for Control Station',                       part: 'HKN9088' },
      { desc: 'Power Supply, 25-60W, 1-60W Cord Included',              part: 'HPN4007' },
      { desc: 'Power Cable for GPN6145',                                 part: 'GKN6266' },
      { desc: 'Euro Line Cord PS Power Cable',                           part: 'NTN7374AR' },
      { desc: 'Power Cable (UK, straight)',                              part: '3002695B05' },
      { desc: 'UK Line Cord PS Power Cable',                             part: 'NTN7375AR' },
      { desc: 'Argentina Line Cord PS Power Cable',                      part: '3085801L01' },
      { desc: 'US Line Cord for GPN6145',                                part: 'NTN7373AR' },
      { desc: 'Mini-UHF to PL259 Antenna Adapter Cable',                 part: 'HKN9557' }
    ]
  },
  {
    id: 7,
    name: 'Installation',
    items: [
      { desc: 'Low Profile Trunnion Kit, Under Dash (box)',             part: 'RLN6077' },
      { desc: 'Low Profile Trunnion Kit, Under Dash (box)',             part: 'RLN6466' },
      { desc: 'High Profile Trunnion Kit, Under Dash or Floor Mount',   part: 'RLN6078' },
      { desc: 'High Profile Trunnion Kit, Under Dash or Floor Mount',   part: 'RLN6467' },
      { desc: 'Key Lock Trunnion Kit',                                  part: 'RLN6079' },
      { desc: 'Key Lock Trunnion Kit',                                  part: 'RLN6468' },
      { desc: 'Direct In-Dashboard Mounting Kit',                       part: 'RLN5933' },
      { desc: 'Direct In-Dashboard Mounting Kit',                       part: 'RLN6465' },
      { desc: 'MOTOTRBO Mobile Remote Mount Adapter Kit',               part: 'PMLN5404' },
      { desc: 'MOTOTRBO Mobile Remote Mount Adapter Kit',               part: 'PMLN6404' },
      { desc: 'Power Cable to Battery, 10-Foot, 15 Amp, 14 AWG',       part: 'HKN4137' },
      { desc: 'Power Cable to Battery, 10-Foot, 20 Amp, 12 AWG',       part: 'HKN4191' },
      { desc: 'Power Cable to Battery, 20-Foot, 20 Amp, 10 AWG',       part: 'HKN4192' },
      { desc: 'Ignition Sense Cable',                                   part: 'HKN9327' }
    ]
  },
  {
    id: 8,
    name: 'Speakers',
    items: [
      { desc: '13W External Speaker',    part: 'RSN4002' },
      { desc: '7.5W External Speaker',   part: 'RSN4003' },
      { desc: '5W External Speaker',     part: 'RSN4004' },
      { desc: '7.5W External Speaker',   part: 'HSN8145' },
      { desc: '13W External Speaker',    part: 'RSN4001' },
      { desc: 'Speaker Extension Cable', part: 'GMKN4084' }
    ]
  },
  {
    id: 9,
    name: 'Cables',
    items: [
      { desc: 'Mobile Remote Mount 5-Meter Cable Kit',                        part: 'PMKN4073' },
      { desc: 'Mobile Remote Mount 3-Meter Cable Kit',                        part: 'PMKN4074' },
      { desc: 'Mobile Remote Mount 5-Meter Cable Kit',                        part: 'PMKN4144' },
      { desc: 'Mobile Remote Mount 3-Meter Cable Kit',                        part: 'PMKN4143' },
      { desc: 'IMPRES Mobile MAP Non-PC Adapter',                             part: 'PMKN4070' },
      { desc: 'IMPRES Mobile MMP Non-PC Adapter',                             part: 'PMKN4072' },
      { desc: 'Mobile and Repeater Rear Accessory Programming Cable',         part: 'PMKN4010' },
      { desc: 'Mobile and Repeater Rear Programming, Test and Alignment Cable', part: 'PMKN4016' },
      { desc: 'Mobile Rear Accessory Connector Universal Cable',              part: 'PMKN4018' },
      { desc: 'Mobile Front Programming Cable',                               part: 'HKN6184' },
      { desc: 'Mobile Front Programming Cable',                               part: 'PMKN4147' },
      { desc: 'Mobile Rear Accessory Connector Universal Cable',              part: 'PMKN4151' },
      { desc: 'Rear Accessory Connector USB Programming Cable',               part: 'PMLN4148' },
      { desc: 'Ignition Sense Cable',                                         part: 'RKN4136' },
      { desc: 'Hardware Kit for Rear Accessory Connector',                    part: 'PMLN5072' },
      { desc: '16-Pin MAP Connector Housing (APAC only)',                     part: '1580922V01' },
      { desc: 'Rear Accessory Connector Seal with Connector and Pins',        part: 'GMBN1021' },
      { desc: 'Connector Extender (20 pieces)',                               part: 'PMLN5620' },
      { desc: 'Gasket, Cover, Accessory Connector',                          part: '3202607Y01' },
      { desc: 'Mobile Crimping Tool',                                         part: '6680388A26' },
      { desc: 'Generic Option Board (APAC, EMEA, LACR)',                      part: 'PMLN6544' }
    ]
  },
  {
    id: 10,
    name: 'Antennas',
    items: [
      { desc: 'GPS/UHF Combination 1/4 Wave Antenna, 403-430 MHz',     part: 'PMAE4030', band: 'UHF', freq_mhz: '403-430', gps: true,  mount: 'Through-hole' },
      { desc: 'GPS/UHF Combination 1/4 Wave Antenna, 450-470 MHz',     part: 'PMAE4031', band: 'UHF', freq_mhz: '450-470', gps: true,  mount: 'Through-hole' },
      { desc: 'GPS/UHF Combination Antenna, 406-420 MHz, 3.5 dB gain', part: 'PMAE4032', band: 'UHF', freq_mhz: '406-420', gps: true,  mount: 'Through-hole' },
      { desc: 'GPS/UHF Combination Antenna, 450-470 MHz, 3.5 dB gain', part: 'PMAE4033', band: 'UHF', freq_mhz: '450-470', gps: true,  mount: 'Through-hole' },
      { desc: 'GPS/UHF Combination Antenna, 450-470 MHz, 5 dB gain',   part: 'PMAE4034', band: 'UHF', freq_mhz: '450-470', gps: true,  mount: 'Through-hole' },
      { desc: 'GPS/UHF Combination Antenna, 403-527 MHz, 2 dB gain',   part: 'HAE6019',  band: 'UHF', freq_mhz: '403-527', gps: true,  mount: 'Through-hole' },
      { desc: 'GPS/UHF Combination 1/4 Wave Antenna, 470-527 MHz',     part: 'HAE6020',  band: 'UHF', freq_mhz: '470-527', gps: true,  mount: 'Through-hole' },
      { desc: 'UHF Urban Roof Mount 1/4 Wave Antenna, 403-430 MHz',    part: 'PMAE4040', band: 'UHF', freq_mhz: '403-430', gps: false, mount: 'Roof mount' },
      { desc: 'UHF Urban Roof Mount 1/4 Wave Antenna, 450-470 MHz',    part: 'PMAE4041', band: 'UHF', freq_mhz: '450-470', gps: false, mount: 'Roof mount' },
      { desc: 'GPS/VHF Combination 1/4 Wave Antenna, 136-144 MHz',     part: 'RAD4214',  band: 'VHF', freq_mhz: '136-144',   gps: true,  mount: 'Through-hole' },
      { desc: 'GPS/VHF Combination 1/4 Wave Antenna, 146-150.8 MHz',   part: 'RAD4215',  band: 'VHF', freq_mhz: '146-150.8', gps: true,  mount: 'Through-hole' },
      { desc: 'GPS/VHF Combination 1/4 Wave Antenna, 150.8-162 MHz',   part: 'RAD4216',  band: 'VHF', freq_mhz: '150.8-162', gps: true,  mount: 'Through-hole' },
      { desc: 'GPS/VHF Combination 1/4 Wave Antenna, 162-174 MHz',     part: 'RAD4217',  band: 'VHF', freq_mhz: '162-174',   gps: true,  mount: 'Through-hole' },
      { desc: 'GPS/800/900 MHz 1/4 Wave Combination Antenna, 806-941 MHz', part: 'HAF4029', band: '800/900', freq_mhz: '806-941', gps: true, mount: 'Through-hole' },
      { desc: 'Fixed Mount GPS Active Antenna',    part: 'PMAN4000', band: 'GPS', freq_mhz: '', gps: true, mount: 'Fixed' },
      { desc: 'Glass Mount GPS Active Antenna',    part: 'PMAN4001', band: 'GPS', freq_mhz: '', gps: true, mount: 'Glass' },
      { desc: 'Magnetic Mount GPS Active Antenna', part: 'PMAN4002', band: 'GPS', freq_mhz: '', gps: true, mount: 'Magnetic' }
    ]
  }
];

// ── XPR 2500 SERIES ─────────────────────────────────────────────────────
const xpr2500Categories = [
  {
    id: 1,
    name: 'Microphones',
    items: [
      { desc: 'Compact Microphone',                          part: 'PMMN4090', impres: false },
      { desc: 'Heavy-Duty Microphone',                       part: 'PMMN4091', impres: false },
      { desc: 'Keypad Microphone',                           part: 'PMMN4089', impres: false },
      { desc: 'Visor Microphone',                            part: 'GMMN4065', impres: false },
      { desc: 'Telephone Style Handset with Hang-Up Cup',    part: 'PMLN6481', impres: false },
      { desc: 'Desktop Microphone',                          part: 'PMMN4098', impres: false }
    ]
  },
  {
    id: 2,
    name: 'Mic Accessories',
    items: [
      { desc: 'Microphone Hang-Up Clip (requires installation)',     part: 'HLN9073' },
      { desc: 'Universal Microphone Hang-Up Clip (no installation)', part: 'HLN9414' }
    ]
  },
  {
    id: 3,
    name: 'External PTT',
    items: [
      { desc: 'Remote Mount Footswitch Push-to-Talk (for visor microphone)', part: 'RLN4856' },
      { desc: 'Remote Mount Pushbutton Push-to-Talk (for visor microphone)', part: 'RLN4857' },
      { desc: 'External PTT with Emergency Footswitch',                      part: 'RLN4836' },
      { desc: 'Gooseneck PTT',                                               part: 'RLN4858A' }
    ]
  },
  {
    id: 4,
    name: 'Wireless Kits',
    items: []
  },
  {
    id: 5,
    name: 'Bluetooth',
    items: []
  },
  {
    id: 6,
    name: 'Control Station',
    items: [
      { desc: 'Power Supply 14V 10 Amp 117/240 VAC (1-25W)', part: 'HPN4008' },
      { desc: 'Desktop Tray with Speaker',                   part: 'RSN4005' },
      { desc: 'Desktop Tray without Speaker',                part: 'GLN7318' },
      { desc: 'Adapter Cable for Control Station',           part: 'HKN9088' },
      { desc: 'Power Supply, 25-60W, 1-60W Cord Included',  part: 'HPN4007' }
    ]
  },
  {
    id: 7,
    name: 'Installation',
    items: [
      { desc: 'In-Dash Mounting Kit — DIN',                      part: 'FTN6083' },
      { desc: 'Power Cable to Battery, 10-Foot, 15 Amp, 14 AWG', part: 'HKN4137' },
      { desc: 'Power Cable to Battery, 10-Foot, 20 Amp, 12 AWG', part: 'HKN4191' },
      { desc: 'Power Cable to Battery, 20-Foot, 20 Amp, 10 AWG', part: 'HKN4192' },
      { desc: 'Ignition Sense Cable',                              part: 'HKN9327' },
      { desc: 'Trunnion Mounting Screws',                          part: '3012045001' }
    ]
  },
  {
    id: 8,
    name: 'Speakers',
    items: [
      { desc: '13W External Speaker',    part: 'RSN4002' },
      { desc: '7.5W External Speaker',   part: 'RSN4003' },
      { desc: '5W External Speaker',     part: 'RSN4004' },
      { desc: '7.5W External Speaker',   part: 'HSN8145' },
      { desc: '13W External Speaker',    part: 'RSN4001' },
      { desc: 'Speaker Extension Cable', part: 'GMKN4084' }
    ]
  },
  {
    id: 9,
    name: 'Cables',
    items: [
      { desc: 'Mobile Front Programming Cable',                   part: 'HKN6184' },
      { desc: 'Power Cable to Battery, 10-Foot, 15 Amp, 14 AWG', part: 'HKN4137' },
      { desc: 'Power Cable to Battery, 10-Foot, 20 Amp, 12 AWG', part: 'HKN4191' },
      { desc: 'Power Cable to Battery, 20-Foot, 20 Amp, 10 AWG', part: 'HKN4192' },
      { desc: 'Ignition Sense Cable',                             part: 'RKN4136' }
    ]
  },
  {
    id: 10,
    name: 'Antennas',
    items: [
      { desc: 'UHF Urban Roof Mount 1/4 Wave Antenna, 403-430 MHz',   part: 'PMAE4040', band: 'UHF', freq_mhz: '403-430',   gps: false, mount: 'Roof mount' },
      { desc: 'UHF Urban Roof Mount 1/4 Wave Antenna, 450-470 MHz',   part: 'PMAE4041', band: 'UHF', freq_mhz: '450-470',   gps: false, mount: 'Roof mount' },
      { desc: 'VHF Urban Roof Mount 1/4 Wave Antenna, 136-144 MHz',   part: 'HAD4006',  band: 'VHF', freq_mhz: '136-144',   gps: false, mount: 'Roof mount' },
      { desc: 'VHF Urban Roof Mount 1/4 Wave Antenna, 146-150.8 MHz', part: 'HAD4007',  band: 'VHF', freq_mhz: '146-150.8', gps: false, mount: 'Roof mount' },
      { desc: 'VHF Urban Roof Mount 1/4 Wave Antenna, 150.8-162 MHz', part: 'HAD4008',  band: 'VHF', freq_mhz: '150.8-162', gps: false, mount: 'Roof mount' },
      { desc: 'VHF Urban Roof Mount 1/4 Wave Antenna, 162-174 MHz',   part: 'HAD4009',  band: 'VHF', freq_mhz: '162-174',   gps: false, mount: 'Roof mount' },
      { desc: 'VHF Wide Area Antenna, 132-174 MHz, 3 dB gain',        part: 'HAD4022',  band: 'VHF', freq_mhz: '132-174',   gps: false, mount: 'Through-hole' }
    ]
  }
];

// ── WIRE INTO RADIOS_DATA ─────────────────────────────────────────────────────
if (typeof window !== 'undefined') {
  window.RADIOS_DATA = window.RADIOS_DATA || {};
  window.RADIOS_DATA['xpr5000'] = xpr5000Categories;
  window.RADIOS_DATA['xpr4000'] = xpr4000Categories;
  window.RADIOS_DATA['xpr2500'] = xpr2500Categories;
}
