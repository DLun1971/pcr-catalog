const R2_DATA = [
  {
    name: 'RSM/Audio',
    items: [
      {desc:'RM110 Remote Speaker Microphone with 3.5mm Audio Jack (IP55)',part:'PMMN4148',windporting:true,audio_jack:true,ip:'IP55',dims_mm:'59 x 76 x 22'},
      {desc:'RM110 Remote Speaker Microphone without 3.5mm Audio Jack (IP55)',part:'PMMN4149',windporting:true,audio_jack:false,ip:'IP55',dims_mm:'59 x 76 x 22'},
      {desc:'Windporting Remote Speaker Microphone, submersible (IP57)',part:'PMMN4029',windporting:true,audio_jack:false,ip:'IP57',dims_mm:'55 x 60 x 27'},
      {desc:'Windporting Remote Speaker Microphone with 3.5mm Audio Jack (IP54)',part:'PMMN4013',windporting:true,audio_jack:true,ip:'IP54',dims_mm:'55 x 60 x 27'},
      {group:'RSM Accessories',desc:'Low Profile Swivel Clip',part:'PMLN8121'},
      {group:'RSM Accessories',desc:'Replacement Dust Cover for PMMN4148/PMMN4149 (Pack of 10)',part:'PMLN8253'},
      {group:'RSM Accessories',desc:'Replacement RSM Cable',part:'PMKN4155'},
      {group:'RSM Earpieces',desc:'Receive-Only XL Clear Tube Earpiece, 3.5mm Jack',part:'PMLN8120',ear_type:'Clear Rubber Eartip'},
      {group:'RSM Earpieces',desc:'Receive-Only Foam Covered Earbud with Coiled Cord (3.5mm)',part:'AARLN4885',ear_type:'Foam Covered Earbud'},
      {group:'RSM Earpieces',desc:'Receive-Only Earpiece with Translucent Tube and Rubber Eartip (3.5mm)',part:'RLN4941',ear_type:'Clear Rubber Eartip'},
      {group:'RSM Earpieces',desc:'Receive-Only D-Shell Earpiece (3.5mm)',part:'PMLN4620',ear_type:'Over-the-ear'},
      {group:'RSM Earpieces',desc:'Receive-Only Flexible Earpiece (3.5mm)',part:'WADN4190',ear_type:'Over-the-ear'},
      {group:'RSM Earpieces',desc:'Receive-Only Earpiece with Translucent Tube and Rubber Eartip (3.5mm)',part:'PMLN7560',ear_type:'Clear Rubber Eartip'},
      {group:'RSM Earpieces',desc:'Receive-Only Adjustable D Style with Standard 3.5mm Jack',part:'PMLN7396',ear_type:'Over-the-ear'},
    ]
  },
  {
    name: 'Surveillance/Earpieces',
    items: [
      {desc:'2-Wire Surveillance Kit with Translucent Tube, Black',part:'PMLN6530',ear_type:'Clear Rubber Eartip',mic_type:'Inline',ptt:true},
      {desc:'2-Wire Surveillance Kit with Translucent Tube, Beige',part:'PMLN6445',ear_type:'Clear Rubber Eartip',mic_type:'Inline',ptt:true},
      {group:'Replacement Kits',desc:'Quick Disconnect Low Noise Kit with Translucent Tube and 1 Clear Rubber Eartip',part:'RLN6242',ear_type:'Clear Rubber Eartip'},
      {group:'Replacement Kits',desc:'Replacement Standard Clear Rubber Eartip for RLN6242, Pack of 25',part:'5080370E97',ear_type:'Clear Rubber Eartip'},
      {group:'Replacement Kits',desc:'Replacement Foam Plugs for RLN6242, Noise Reduction 24dB, Pack of 50 Pairs',part:'5080384F72'},
      {group:'Replacement Kits',desc:'Replacement Standard Clear Rubber Eartip, Pack of 50',part:'RLN6282',ear_type:'Clear Rubber Eartip'},
      {group:'Replacement Kits',desc:'Clear EP7-Small Hearing Protectors, Sonic Defenders Ultra, 28dB NRR',part:'RLN6511'},
      {group:'Replacement Kits',desc:'Clear EP7-Medium Hearing Protectors, Sonic Defenders Ultra, 28dB NRR',part:'RLN6512'},
      {group:'Replacement Kits',desc:'Clear EP7-Large Hearing Protectors, Sonic Defenders Ultra, 28dB NRR',part:'RLN6513'},
      {group:'Custom Earpieces',desc:'Small Custom Earpiece, Right Ear',part:'RLN4760',ear_type:'Custom Earpiece'},
      {group:'Custom Earpieces',desc:'Medium Custom Earpiece, Right Ear',part:'RLN4761',ear_type:'Custom Earpiece'},
      {group:'Custom Earpieces',desc:'Large Custom Earpiece, Right Ear',part:'RLN4762',ear_type:'Custom Earpiece'},
      {group:'Custom Earpieces',desc:'Small Custom Earpiece, Left Ear',part:'RLN4763',ear_type:'Custom Earpiece'},
      {group:'Custom Earpieces',desc:'Medium Custom Earpiece, Left Ear',part:'RLN4764',ear_type:'Custom Earpiece'},
      {group:'Custom Earpieces',desc:'Large Custom Earpiece, Left Ear',part:'RLN4765',ear_type:'Custom Earpiece'},
      {group:'Mag One Earpieces',desc:'Earbud with Combined Microphone and PTT',part:'PMLN6533',ear_type:'Earbud',mic_type:'Inline',ptt:true},
      {group:'Mag One Earpieces',desc:'D-Style Earpiece with Microphone and Push-to-Talk',part:'PMLN6535',ear_type:'D-Style',mic_type:'Inline',ptt:true},
      {group:'Mag One Earpieces',desc:'Mag One Swivel Earpiece with In-Line Microphone and PTT',part:'PMLN6532',ear_type:'Over-the-ear',mic_type:'Inline',ptt:true},
      {group:'Mag One Earpieces',desc:'Mag One Earbud with In-Line Microphone, PTT and VOX Switch',part:'PMLN6534',ear_type:'Earbud',mic_type:'Inline',ptt:true},
      {group:'Mag One Earpieces',desc:'Mag One Ear Receiver with In-Line Microphone, PTT and VOX Switch',part:'PMLN6531',ear_type:'Over-the-ear',mic_type:'Inline',ptt:true},
    ]
  },
  {
    name: 'Headsets',
    items: [
      {desc:'Heavy-Duty Headset, Over-the-Head Dual Muff with Swivel Noise Cancelling Boom Mic (24dB NRR)',part:'PMLN7468',headset_type:'Over-the-Head',ear_style:'Dual-Ear',nrr_db:24},
      {desc:'Heavy-Duty Headset, Behind-the-Head Dual Muff with Noise Cancelling Boom Mic, In-Line PTT (24dB NRR)',part:'PMLN6854',headset_type:'Behind-the-Head',ear_style:'Dual-Ear',nrr_db:24},
      {desc:'Lightweight Headset, Over-the-Head Single Muff with Swivel Boom Mic',part:'PMLN6538',headset_type:'Over-the-Head',ear_style:'Single-Ear',nrr_db:null},
      {desc:'Mag One Ultra-Lite Headset, Behind-the-Head with Boom Mic and In-Line PTT',part:'PMLN6542',headset_type:'Behind-the-Head',ear_style:'Single-Ear',nrr_db:null},
      {group:'Replacement Parts',desc:'Foam Ear Seal (for PMLN6854)',part:'75012068001'},
      {group:'Replacement Parts',desc:'Cloth Covers (for PMLN6854)',part:'15012094001'},
      {group:'Replacement Parts',desc:'Over-the-Head Strap (for PMLN6854)',part:'4204004K01'},
      {group:'Replacement Parts',desc:'Headset Windscreen (for PMLN6854)',part:'3578010A01'},
      {group:'Replacement Parts',desc:'Kit: Foam Earpad and Microphone Cover (for PMLN6538)',part:'REX4648'},
      {group:'Replacement Parts',desc:'Replacement Cable for Headset',part:'AY000308A01'},
      {group:'Replacement Parts',desc:'Microphone Windscreen with Retaining O-Ring, Qty 5',part:'AY000310A01'},
      {group:'Replacement Parts',desc:'Gel Ear Seal with Mesh and O-Ring, Qty 2',part:'AY000311A01'},
      {group:'Replacement Parts',desc:'Headset Left Microphone Boom Assembly',part:'AY000312A01'},
      {group:'Replacement Parts',desc:'Headset Ring Microphone Boom Assembly',part:'AY000313A01'},
      {group:'Hearing Protection',desc:'Clear EP7-Small Hearing Protectors, Sonic Defenders Ultra, 28dB NRR',part:'RLN6511'},
      {group:'Hearing Protection',desc:'Clear EP7-Medium Hearing Protectors, Sonic Defenders Ultra, 28dB NRR',part:'RLN6512'},
      {group:'Hearing Protection',desc:'Clear EP7-Large Hearing Protectors, Sonic Defenders Ultra, 28dB NRR',part:'RLN6513'},
    ]
  },
  {
    name: 'Batteries',
    items: [
      {desc:'Slim Li-Ion 2100 mAh Battery (CE)',part:'PMNN4600',chem:'Li-Ion',capacity_mah:2100,dims_mm:'54 x 122 x 18',weight_g:120,ip:'IP55',op_temp:'-20°C to +60°C'},
      {desc:'Li-Ion 2300 mAh Battery (CE)',part:'PMNN4598',chem:'Li-Ion',capacity_mah:2300,dims_mm:'54 x 122 x 23',weight_g:140,ip:'IP55',op_temp:'-20°C to +60°C'},
    ]
  },
  {
    name: 'Chargers',
    items: [
      {desc:'Rapid-Rate Desktop Charger, 120V (US)',part:'WPLN4138',chem:'Li-Ion, NiMH',pwr_src:'120V',dims_mm:'52 x 113 x 113',pockets:1},
      {desc:'Rapid-Rate Charger with Switch Mode Power Supply (US)',part:'PMLN5193',chem:'Li-Ion, NiMH',pwr_src:'100-240V',dims_mm:'52 x 113 x 113',pockets:1},
      {desc:'Universal Multi-Unit Charger, 6-Pocket (US)',part:'PMLN6588',chem:'Li-Ion, NiMH',pwr_src:'100-240V',dims_mm:'79 x 447 x 172',pockets:6},
      {desc:'Travel Charger with Vehicular Adapter, Mounting Bracket and Coil Cord',part:'PMLN7089',chem:'Li-Ion, NiMH',pwr_src:'Cigarette Lighter',dims_mm:'58 x 64 x 67',pockets:1},
      {group:'Replacement Parts',desc:'Replacement Power Supply Unit for Rapid-Rate Desktop Charger (US)',part:'25009297001',pwr_src:'100-240V'},
      {group:'Replacement Parts',desc:'Power Cord for Multi-Unit Charger (US)',part:'3004209T04'},
    ]
  },
  {
    name: 'Carry',
    items: [
      {desc:'Spring Action 2" Belt Clip',part:'HLN9844',material:'Plastic',belt_sz:'2"'},
      {desc:'Spring Action 2.5" Belt Clip',part:'HLN9714',material:'Plastic',belt_sz:'2.5"'},
      {desc:'2" Belt Clip',part:'PMLN4651',material:'Plastic',belt_sz:'2"'},
      {desc:'2.5" Belt Clip',part:'PMLN7008',material:'Plastic',belt_sz:'2.5"'},
      {desc:'Nylon Case with 3" Fixed Belt Loop and D-Ring',part:'PMLN8427',material:'Nylon',belt_sz:'3"',swivel:false,display:false},
      {desc:'Hard Leather Case with 3" Fixed Belt Loop and D-Rings',part:'PMLN8433',material:'Hard Leather',belt_sz:'3"',swivel:false,display:false},
      {desc:'Hard Leather Case with 2.5" Swivel Belt Loop and D-Rings',part:'PMLN8434',material:'Hard Leather',belt_sz:'2.5"',swivel:true,display:false},
      {desc:'Hard Leather Case with 3" Swivel Belt Loop and D-Rings',part:'PMLN8435',material:'Hard Leather',belt_sz:'3"',swivel:true,display:false},
      {desc:'Replacement 2.5" Swivel Belt Loop',part:'PMLN5610',material:'Hard Leather',belt_sz:'2.5"',swivel:true},
      {desc:'Replacement 3" Swivel Belt Loop',part:'PMLN5611',material:'Hard Leather',belt_sz:'3"',swivel:true},
      {desc:'Retainer Kit for R2 Accessories',part:'PMLN8502',material:'Plastic'},
      {desc:'Adjustable Nylon Carrying Strap',part:'NTN5243',material:'Nylon'},
      {desc:'Waterproof Bag with Large Strap',part:'HLN9985',material:'Nylon'},
      {desc:'Universal Chest Pack with Radio Holder, Pen Holder and Velcro Pouch',part:'HLN6602'},
    ]
  },
  {
    name: 'Cables',
    items: [
      {desc:'Portable Programming USB Cable',part:'PMKN4128'},
    ]
  },
  {
    name: 'Antennas',
    items: [
      {group:'UHF',desc:'UHF/GPS Combination Stubby Antenna (400-450 MHz)',part:'PMAE4069',band:'UHF',freq_mhz:'403-450',len_cm:9,ant_type:'Stubby'},
      {group:'UHF',desc:'UHF/GPS Combination Stubby Antenna (440-490 MHz)',part:'PMAE4070',band:'UHF',freq_mhz:'440-490',len_cm:9,ant_type:'Stubby'},
      {group:'UHF',desc:'UHF Stubby Antenna (470-527 MHz)',part:'PMAE4071',band:'UHF',freq_mhz:'470-527',len_cm:9,ant_type:'Stubby'},
      {group:'UHF',desc:'UHF/GPS Combination Whip Antenna (400-527 MHz)',part:'PMAE4079',band:'UHF',freq_mhz:'400-527',len_cm:15,ant_type:'Whip'},
      {group:'UHF',desc:'UHF Wideband Whip Antenna (403-520 MHz)',part:'PMAE4016',band:'UHF',freq_mhz:'403-520',len_cm:17,ant_type:'Whip'},
      {group:'UHF',desc:'UHF Stubby Antenna (403-433 MHz)',part:'PMAE4002',band:'UHF',freq_mhz:'403-433',len_cm:9,ant_type:'Stubby'},
      {group:'UHF',desc:'UHF Stubby Antenna (430-470 MHz)',part:'PMAE4003',band:'UHF',freq_mhz:'430-470',len_cm:9,ant_type:'Stubby'},
      {group:'VHF',desc:'VHF/GPS Combination Helical Antenna (136-155 MHz)',part:'PMAD4117',band:'VHF',freq_mhz:'136-155',len_cm:15,ant_type:'Helical'},
      {group:'VHF',desc:'VHF/GPS Combination Helical Antenna (144-165 MHz)',part:'PMAD4116',band:'VHF',freq_mhz:'144-165',len_cm:15,ant_type:'Helical'},
      {group:'VHF',desc:'VHF/GPS Combination Helical Antenna (152-174 MHz)',part:'PMAD4118',band:'VHF',freq_mhz:'152-174',len_cm:15,ant_type:'Helical'},
      {group:'VHF',desc:'VHF/GPS Combination Wideband Slim Whip Antenna (136-174 MHz)',part:'PMAD4147',band:'VHF',freq_mhz:'136-174',len_cm:20,ant_type:'Whip'},
      {group:'VHF',desc:'VHF/GPS Combination Stubby Antenna (136-148 MHz)',part:'PMAD4119',band:'VHF',freq_mhz:'136-148',len_cm:9,ant_type:'Stubby'},
      {group:'VHF',desc:'VHF/GPS Combination Stubby Antenna (146-160 MHz)',part:'PMAD4120',band:'VHF',freq_mhz:'146-160',len_cm:9,ant_type:'Stubby'},
      {group:'VHF',desc:'VHF Stubby Antenna (160-174 MHz)',part:'PMAD4121',band:'VHF',freq_mhz:'160-174',len_cm:9,ant_type:'Stubby'},
      {group:'350 MHz',desc:'Stubby Antenna (360-400 MHz)',part:'PMAD4133',band:'350',freq_mhz:'360-400',len_cm:9,ant_type:'Stubby'},
      {group:'350 MHz',desc:'Stubby Antenna (350-380 MHz)',part:'PMAD4136',band:'350',freq_mhz:'350-380',len_cm:9,ant_type:'Stubby'},
      {group:'350 MHz',desc:'VHF Whip Antenna (350-400 MHz)',part:'PMAD4139',band:'350',freq_mhz:'350-400',len_cm:16,ant_type:'Whip'},
    ]
  },
];