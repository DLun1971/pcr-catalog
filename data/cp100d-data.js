const CP100D_DATA = [
  {
    name: 'RSM/Audio',
    items: [
      {desc:'Windporting Remote Speaker Microphone, Submersible (IP57)',part:'PMMN4029',windporting:true,audio_jack:false,ip:'IP57',dims_mm:'55 x 60 x 27'},
      {desc:'Windporting Remote Speaker Microphone with 3.5mm Audio Jack (IP54)',part:'PMMN4013',windporting:true,audio_jack:true,ip:'IP54',dims_mm:'55 x 60 x 27'},
      {group:'RSM Accessories',desc:'Replacement RSM Cable',part:'PMKN4155'},
      {group:'RSM Earpieces',desc:'Receive-Only Foam Covered Earbud with Coiled Cord (3.5mm)',part:'AARLN4885',ear_type:'Foam Covered Earbud'},
      {group:'RSM Earpieces',desc:'Receive-Only Earpiece with Translucent Tube and Rubber Eartip (3.5mm)',part:'RLN4941',ear_type:'Clear Rubber Eartip'},
      {group:'RSM Earpieces',desc:'Receive-Only D-Shell Earpiece (3.5mm)',part:'PMLN4620',ear_type:'Over-the-ear'},
      {group:'RSM Earpieces',desc:'Receive-Only Flexible Earpiece (3.5mm)',part:'WADN4190',ear_type:'Over-the-ear'},
    ]
  },
  {
    name: 'Surveillance/Earpieces',
    items: [
      {desc:'2-Wire Surveillance Kit with Quick Disconnect Translucent Tube, Black',part:'PMLN6536',ear_type:'Clear Rubber Eartip',mic_type:'Inline',ptt:true},
      {desc:'2-Wire Surveillance Kit with Translucent Tube, Black',part:'PMLN6530',ear_type:'Clear Rubber Eartip',mic_type:'Inline',ptt:true},
      {desc:'2-Wire Surveillance Kit with Translucent Tube, Beige',part:'PMLN6445',ear_type:'Clear Rubber Eartip',mic_type:'Inline',ptt:true},
      {group:'Replacement Kits',desc:'Quick Disconnect Low Noise Kit with Translucent Tube and 1 Clear Rubber Eartip',part:'RLN6242',ear_type:'Clear Rubber Eartip'},
      {group:'Replacement Kits',desc:'Replacement Standard Clear Rubber Eartip for RLN6242, Pack of 25',part:'5080370E97',ear_type:'Clear Rubber Eartip'},
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
      {group:'Mag One Earpieces',desc:'Mag One Earset with Boom Microphone and In-Line PTT and VOX Switch',part:'PMLN6537',ear_type:'Earset',mic_type:'Boom',ptt:true},
    ]
  },
  {
    name: 'Headsets',
    items: [
      {desc:'Lightweight Headset, Over-the-Head Single Muff with Swivel Boom Mic',part:'PMLN6538',headset_type:'Over-the-Head',ear_style:'Single-Ear',nrr_db:null},
      {desc:'Mag One Ultra-Lite Headset, Behind-the-Head with Boom Mic and In-Line PTT',part:'PMLN6542',headset_type:'Behind-the-Head',ear_style:'Single-Ear',nrr_db:null},
      {desc:'Lightweight Temple Transducer Headset with In-Line Mic and PTT',part:'PMLN6541',headset_type:'Behind-the-Head',ear_style:'Bone Conduction',nrr_db:null},
      {group:'Replacement Parts',desc:'Replacement Cable for Headset',part:'AY000308A01'},
      {group:'Replacement Parts',desc:'Microphone Windscreen with Retaining O-Ring, Qty 5',part:'AY000310A01'},
      {group:'Replacement Parts',desc:'Gel Ear Seal with Mesh and O-Ring, Qty 2',part:'AY000311A01'},
      {group:'Replacement Parts',desc:'Headset Left Microphone Boom Assembly',part:'AY000312A01'},
      {group:'Replacement Parts',desc:'Headset Ring Microphone Boom Assembly',part:'AY000313A01'},
    ]
  },
  {
    name: 'Batteries',
    items: [
      {desc:'Slim Li-Ion 1750 mAh Battery',part:'PMNN4476',chem:'Li-Ion',capacity_mah:1750,dims_mm:'54 x 119 x 18',weight_g:125,ip:'IP54',op_temp:'-10°C to +60°C'},
      {desc:'Li-Ion 2250 mAh Battery',part:'PMNN4080',chem:'Li-Ion',capacity_mah:2250,dims_mm:'54 x 119 x 23',weight_g:150,ip:'IP54',op_temp:'-10°C to +60°C'},
    ]
  },
  {
    name: 'Chargers',
    items: [
      {desc:'Rapid-Rate Desktop Charger (US)',part:'PMPN4172',chem:'Li-Ion, NiMH',pwr_src:'100-240V',dims_mm:'52 x 113 x 113',pockets:1},
      {desc:'Universal Multi-Unit Charger, 6-Pocket (US)',part:'PMLN6597',chem:'Li-Ion, NiMH',pwr_src:'100-240V',dims_mm:'79 x 445 x 170',pockets:6},
      {group:'Replacement Parts',desc:'Replacement Power Supply Unit for Rapid-Rate Desktop Charger (US)',part:'25009297001',pwr_src:'100-240V'},
      {group:'Replacement Parts',desc:'Power Cord for Multi-Unit Charger (US)',part:'3004209T04'},
    ]
  },
  {
    name: 'Carry',
    items: [
      {desc:'Spring Action 2" Belt Clip',part:'HLN9844',material:'Plastic',belt_sz:'2"'},
      {desc:'Nylon Case with 3" Fixed Belt Loop',part:'PMLN7075',material:'Nylon',belt_sz:'3"',swivel:false},
      {desc:'Adjustable Nylon Carrying Strap',part:'NTN5243',material:'Nylon'},
      {desc:'Waterproof Bag with Large Strap',part:'HLN9985',material:'Nylon'},
      {desc:'Universal Chest Pack with Radio Holder, Pen Holder and Velcro Pouch',part:'HLN6602'},
      {desc:'Break-Away Chest Pack with Radio Holder, Pen Holder and Velcro Pouch',part:'RLN4570'},
      {desc:'Radio Pack Utility Case',part:'RLN4815'},
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
      {group:'UHF',desc:'UHF Stubby Antenna (403-433 MHz)',part:'PMAE4002',band:'UHF',freq_mhz:'403-433',len_cm:9,ant_type:'Stubby'},
      {group:'UHF',desc:'UHF Stubby Antenna (430-470 MHz)',part:'PMAE4003',band:'UHF',freq_mhz:'430-470',len_cm:9,ant_type:'Stubby'},
      {group:'UHF',desc:'UHF Stubby Antenna (465-495 MHz)',part:'PMAE4006',band:'UHF',freq_mhz:'465-495',len_cm:9,ant_type:'Stubby'},
      {group:'UHF',desc:'UHF Wideband Whip Antenna (403-520 MHz)',part:'PMAE4016',band:'UHF',freq_mhz:'403-520',len_cm:17,ant_type:'Whip'},
      {group:'VHF',desc:'VHF Whip Antenna (136-155 MHz)',part:'PMAD4014',band:'VHF',freq_mhz:'136-155',len_cm:14,ant_type:'Whip'},
      {group:'VHF',desc:'VHF Heliflex Antenna (136-150.8 MHz)',part:'PMAD4042',band:'VHF',freq_mhz:'136-150.8',len_cm:14,ant_type:'Heliflex'},
      {group:'VHF',desc:'VHF Heliflex Antenna (146-174 MHz)',part:'NAD6502AR',band:'VHF',freq_mhz:'146-174',len_cm:15,ant_type:'Heliflex'},
      {group:'VHF',desc:'VHF Heliflex Antenna (136-162 MHz)',part:'HAD9338BR',band:'VHF',freq_mhz:'136-162',len_cm:14,ant_type:'Heliflex'},
      {group:'VHF',desc:'VHF Stubby Antenna (136-155 MHz)',part:'PMAD4012',band:'VHF',freq_mhz:'136-155',len_cm:9,ant_type:'Stubby'},
      {group:'VHF',desc:'VHF Stubby Antenna (155-174 MHz)',part:'PMAD4013',band:'VHF',freq_mhz:'155-174',len_cm:9,ant_type:'Stubby'},
      {group:'VHF',desc:'VHF Stubby Antenna (146-162 MHz)',part:'HAD9742',band:'VHF',freq_mhz:'146-162',len_cm:9,ant_type:'Stubby'},
      {group:'VHF',desc:'VHF Stubby Antenna (162-174 MHz)',part:'HAD9743',band:'VHF',freq_mhz:'162-174',len_cm:9,ant_type:'Stubby'},
    ]
  },
];