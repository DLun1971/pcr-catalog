/* MOTOTRBO R7, Ion, R5, R7Ex — Product Data — r7-data.js */

const RADIOS_DATA = {'r7': {
    name: 'MOTOTRBO R7',
    sub: 'Professional DMR Portable',
    tags: ['DMR Tier II/III', 'IP68 Rugged', 'IMPRES', 'Bluetooth 5.0', 'Wi-Fi'],
    tagStyles: ['', 'green', 'orange', '', ''],
    categories: {
      rsm: {
        cols: ["Part Number", "Description", "IMPRES", "IP", "HazLoc", "Intel Audio", "Ion FW Req", "BT/Wireless", "Full Duplex"],
        label: 'Remote Speaker Mics',
        icon: '',
        sections: [
          {
            title: 'RM Series — GCAI Mini Connector (R7 / Ion)',
            items: [
              { img: null, pn: 'PMMN4128', desc: 'RM780 IMPRES Windporting RSM, Large, Work-When-Wet', note: 'IP68, UL HazLoc, 2 prog buttons + emergency, intelligent audio', checks: {impres: 1, ip: 'IP68', hazloc: 'UL', intel: 1, ion_fw: 0, bt: 0, fulldx: 0} },
              { img: null, pn: 'PMMN4140', desc: 'RM760 IMPRES Windporting RSM, Large Basic, Work-When-Wet', note: 'IP68, UL HazLoc, intelligent audio — requires Ion firmware M-Ion.2022.03+', checks: {impres: 1, ip: 'IP68', hazloc: 'UL', intel: 1, ion_fw: 1, bt: 0, fulldx: 0} },
              { img: null, pn: 'PMMN4131', desc: 'RM730 IMPRES Windporting RSM, Small', note: 'IP68, UL HazLoc, emergency button — requires Ion firmware M-Ion.2022.03+', checks: {impres: 1, ip: 'IP68', hazloc: 'UL', intel: 0, ion_fw: 1, bt: 0, fulldx: 0} },
            ]
          },
          {
            title: 'NS750 Series — Omni-Directional RSM (R7)',
            items: [
              { img: null, pn: 'PMMN4150', desc: 'NS750 IMPRES Omni-Directional RSM, Large Front PTT + Side PTT, Long Cable', note: 'IP68, UL HazLoc, smart audio switching, work-when-wet — EMEA only', checks: {impres: 1, ip: 'IP68', hazloc: 'UL', intel: 0, ion_fw: 0, bt: 0, fulldx: 0} },
              { img: null, pn: 'PMMN4151', desc: 'NS750 IMPRES Omni-Directional RSM, Large Front PTT + Side PTT, Short Cable', note: 'IP68, UL HazLoc, smart audio switching, work-when-wet — EMEA only', checks: {impres: 1, ip: 'IP68', hazloc: 'UL', intel: 0, ion_fw: 0, bt: 0, fulldx: 0} },
              { img: null, pn: 'PMMN4150_BLK', desc: 'NS750 IMPRES Omni-Directional RSM, Black, Long Cable', note: 'IP68, UL HazLoc, smart audio switching, work-when-wet', checks: {impres: 1, ip: 'IP68', hazloc: 'UL', intel: 0, ion_fw: 0, bt: 0, fulldx: 0} },
              { img: null, pn: 'PMMN4151_BLK', desc: 'NS750 IMPRES Omni-Directional RSM, Black, Short Cable', note: 'IP68, UL HazLoc, smart audio switching, work-when-wet', checks: {impres: 1, ip: 'IP68', hazloc: 'UL', intel: 0, ion_fw: 0, bt: 0, fulldx: 0} },
            ]
          },
          {
            title: 'Wireless RSM',
            items: [
              { img: null, pn: 'PMMN4127', desc: 'WM500 Wireless Remote Speaker Microphone', note: 'Operations Critical BT, 18hr battery, IP67, requires R7 fw R04.00.00+', checks: {impres: 0, ip: 'IP67', hazloc: 0, intel: 0, ion_fw: 0, bt: 1, fulldx: 0} },
            ]
          },
          {
            title: 'RSM Replacement Parts',
            items: [
              { img: null, pn: 'PMKN4232', desc: 'Replacement Coil Cord Kit', note: 'For PMMN4128, PMMN4131, PMMN4140', checks: {impres: 0, ip: 0, hazloc: 0, intel: 0, ion_fw: 0, bt: 0, fulldx: 0} },
              { img: null, pn: 'PMLN8121', desc: 'Low Profile Swivel Clip', note: 'For PMMN4128, PMMN4131, PMMN4140', checks: {impres: 0, ip: 0, hazloc: 0, intel: 0, ion_fw: 0, bt: 0, fulldx: 0} },
              { img: null, pn: 'PMLN8122', desc: 'Replacement Dust Cover (10/pack)', note: 'For PMMN4128, PMMN4140', checks: {impres: 0, ip: 0, hazloc: 0, intel: 0, ion_fw: 0, bt: 0, fulldx: 0} },
              { img: null, pn: 'PMLN8253', desc: 'Replacement Dust Cover (10/pack)', note: 'For PMMN4131', checks: {impres: 0, ip: 0, hazloc: 0, intel: 0, ion_fw: 0, bt: 0, fulldx: 0} },
              { img: null, pn: '0104068J78', desc: 'Replacement Swivel Clip', note: 'For NS750 (PMMN4150/4151)', checks: {impres: 0, ip: 0, hazloc: 0, intel: 0, ion_fw: 0, bt: 0, fulldx: 0} },
              { img: null, pn: 'PMLN8466', desc: 'NS750 Color ID Labels — Red (10/pack)', note: '', checks: {impres: 0, ip: 0, hazloc: 0, intel: 0, ion_fw: 0, bt: 0, fulldx: 0} },
              { img: null, pn: 'PMLN8468', desc: 'NS750 Color ID Labels — Yellow (10/pack)', note: '', checks: {impres: 0, ip: 0, hazloc: 0, intel: 0, ion_fw: 0, bt: 0, fulldx: 0} },
              { img: null, pn: 'PMLN8465', desc: 'NS750 Color ID Labels — Blue (10/pack)', note: '', checks: {impres: 0, ip: 0, hazloc: 0, intel: 0, ion_fw: 0, bt: 0, fulldx: 0} },
              { img: null, pn: 'PMLN8469', desc: 'NS750 Color ID Labels — Silver (10/pack)', note: '', checks: {impres: 0, ip: 0, hazloc: 0, intel: 0, ion_fw: 0, bt: 0, fulldx: 0} },
              { img: null, pn: 'PMLN8464', desc: 'NS750 Color ID Labels — Green (10/pack)', note: '', checks: {impres: 0, ip: 0, hazloc: 0, intel: 0, ion_fw: 0, bt: 0, fulldx: 0} },
              { img: null, pn: 'PMLN8523', desc: 'NS750 Color ID Labels — Orange (10/pack)', note: '', checks: {impres: 0, ip: 0, hazloc: 0, intel: 0, ion_fw: 0, bt: 0, fulldx: 0} },
            ]
          },
          {
            title: 'NS750 Secondary Audio (Nexus Connector)',
            items: [
              { img: null, pn: 'PMLN7188', desc: 'Earpiece with Translucent Tube and Eartip', note: '3.5mm jack, transmit only, UL HazLoc', checks: {impres: 0, ip: 0, hazloc: 'UL', intel: 0, ion_fw: 0, bt: 0, fulldx: 0} },
              { img: null, pn: 'GMMN4585', desc: 'Savox HC-1 Helmet Headset — Bone Mic, Single Speaker', note: 'Nexus connector, transmit & receive', checks: {impres: 0, ip: 0, hazloc: 0, intel: 0, ion_fw: 0, bt: 0, fulldx: 0} },
              { img: null, pn: 'GMMN4584', desc: 'Savox HC-2 Helmet Headset — Bone Mic, Dual Speaker', note: 'Nexus connector, transmit & receive', checks: {impres: 0, ip: 0, hazloc: 0, intel: 0, ion_fw: 0, bt: 0, fulldx: 0} },
              { img: null, pn: 'PMLN8265', desc: 'Over-The-Head Headset with Nexus Connector', note: 'Transmit & receive', checks: {impres: 0, ip: 0, hazloc: 0, intel: 0, ion_fw: 0, bt: 0, fulldx: 0} },
              { img: null, pn: 'PMLN8266', desc: 'Backend Headset with Nexus Connector', note: 'Transmit & receive', checks: {impres: 0, ip: 0, hazloc: 0, intel: 0, ion_fw: 0, bt: 0, fulldx: 0} },
              { img: null, pn: 'PMLN8267', desc: 'Hard Hat Attached Headset with Nexus Connector', note: 'Transmit & receive', checks: {impres: 0, ip: 0, hazloc: 0, intel: 0, ion_fw: 0, bt: 0, fulldx: 0} },
            ]
          },
          {
            title: 'RSM Earpieces (3.5mm)',
            items: [
              { img: null, pn: 'PMLN8120', desc: 'Receive-Only Earpiece with Translucent Tube, Loud Audio', note: 'For RM780/RM760/RM730 (PMMN4128/4140/4131), UL HazLoc', checks: {impres: 0, ip: 0, hazloc: 'UL', intel: 0, ion_fw: 0, bt: 0, fulldx: 0} },
              { img: null, pn: 'PMLN7560', desc: 'Receive-Only Earpiece with Translucent Tube and Rubber Eartip', note: 'For WM500 (PMMN4127)', checks: {impres: 0, ip: 0, hazloc: 0, intel: 0, ion_fw: 0, bt: 1, fulldx: 0} },
            ]
          }
        ]
      },
      wireless: {
        cols: ["Part Number", "Description", "IP Rated", "BT", "Full Duplex", "NFC", "Emg Btn", "FW Required"],
        label: 'Wireless / Bluetooth',
        icon: '',
        sections: [
          {
            title: 'Operations Critical Wireless',
            items: [
              { img: null, pn: 'PMMN4127', desc: 'WM500 Wireless Remote Speaker Microphone', note: 'Operations Critical BT, 18hr, IP67, omni windporting mic, requires fw R04.00.00+', checks: {ip: 1, bt: 1, fulldx: 0, nfc: 0, emg: 0, fw_req: "r04.00.00"} },
              { img: null, pn: 'PMLN8123', desc: 'Operations Critical Wireless BT Earpiece with PTT', note: 'Over-ear swivel, boom mic, 8hr battery, full duplex with Ion, standard pairing, 30ft', checks: {ip: 0, bt: 1, fulldx: 1, nfc: 0, emg: 0, fw_req: "\u2014"} },
            ]
          },
          {
            title: 'WP300 Wireless Bluetooth PTT Pod',
            items: [
              { img: null, pn: 'PMLN8298', desc: 'WP300 Wireless Bluetooth PTT Pod', note: 'IP67, 18hr battery, NFC, 30m range, emergency button — requires fw R02.25.02.1000+', checks: {ip: 1, bt: 1, fulldx: 0, nfc: 1, emg: 1, fw_req: "r02.25.02.1000"} },
              { img: null, pn: 'PMLN8401', desc: 'WP300 Wireless Bluetooth PTT Pod with Surveillance Earpiece', note: 'IP67, 18hr battery, NFC, 30m range', checks: {ip: 1, bt: 1, fulldx: 0, nfc: 1, emg: 0, fw_req: "\u2014"} },
            ]
          },
          {
            title: 'WP300 Optional Earpieces',
            items: [
              { img: null, pn: 'PMLN8190', desc: 'Surveillance Earpiece with Translucent Tube', note: 'Clear rubber eartip', checks: {ip: 0, bt: 0, fulldx: 0, nfc: 0, emg: 0, fw_req: "\u2014"} },
              { img: null, pn: 'PMLN8125', desc: 'Swivel Earpiece with Eartip, Short Cord', note: 'Over-the-ear', checks: {ip: 0, bt: 0, fulldx: 0, nfc: 0, emg: 0, fw_req: "\u2014"} },
              { img: null, pn: 'PMLN8077', desc: 'Swivel Earpiece with Eartip, Long Cord', note: 'Over-the-ear', checks: {ip: 0, bt: 0, fulldx: 0, nfc: 0, emg: 0, fw_req: "\u2014"} },
            ]
          },
          {
            title: 'WP300 Replacement Parts',
            items: [
              { img: null, pn: 'PMLN8332', desc: 'Vehicle Mount Option for WP300', note: 'Steering wheel / motorcycle handlebar attachment', checks: {ip: 0, bt: 0, fulldx: 0, nfc: 0, emg: 0, fw_req: "\u2014"} },
              { img: null, pn: 'PMLN6246', desc: 'Replacement Swivel Clip', note: '', checks: {ip: 0, bt: 0, fulldx: 0, nfc: 0, emg: 0, fw_req: "\u2014"} },
              { img: null, pn: 'PMLN8068', desc: 'Replacement Eartip, Small (5/pack)', note: '', checks: {ip: 0, bt: 0, fulldx: 0, nfc: 0, emg: 0, fw_req: "\u2014"} },
              { img: null, pn: 'PMLN8069', desc: 'Replacement Eartip, Medium (5/pack)', note: '', checks: {ip: 0, bt: 0, fulldx: 0, nfc: 0, emg: 0, fw_req: "\u2014"} },
              { img: null, pn: 'PMLN8070', desc: 'Replacement Eartip, Large (5/pack)', note: '', checks: {ip: 0, bt: 0, fulldx: 0, nfc: 0, emg: 0, fw_req: "\u2014"} },
              { img: null, pn: 'PMLN8092', desc: 'Replacement Translucent Tube with Clear Rubber Eartip', note: '', checks: {ip: 0, bt: 0, fulldx: 0, nfc: 0, emg: 0, fw_req: "\u2014"} },
            ]
          }
        ]
      },
      surveillance: {
        cols: ["Part Number", "Description", "IMPRES", "HazLoc", "Intel Audio", "Full Duplex", "Ion FW Req", "Wires"],
        label: 'Surveillance & Earpieces',
        icon: '',
        sections: [
          {
            title: 'IMPRES Surveillance Kits — R7 & Ion (Extra Loud)',
            items: [
              { img: null, pn: 'PMLN8341', desc: 'IMPRES 1-Wire Surveillance Kit, Translucent Tube, Extra Loud, Black', note: 'Intelligent audio, full duplex with Ion, UL HazLoc', checks: {impres: 1, hazloc: 'UL', intel: 1, fulldx: 1, ion_fw: 0, wires: "1"} },
              { img: null, pn: 'PMLN8342', desc: 'IMPRES 2-Wire Surveillance Kit, Translucent Tube, Extra Loud, Black', note: 'Intelligent audio, full duplex with Ion, UL HazLoc', checks: {impres: 1, hazloc: 'UL', intel: 1, fulldx: 1, ion_fw: 0, wires: "2"} },
              { img: null, pn: 'PMLN8343', desc: 'IMPRES 3-Wire Surveillance Kit, Translucent Tube, Extra Loud, Black', note: 'Intelligent audio, full duplex with Ion, UL HazLoc', checks: {impres: 1, hazloc: 'UL', intel: 1, fulldx: 1, ion_fw: 0, wires: "3"} },
              { img: null, pn: 'PMLN8295', desc: 'IMPRES 2-Wire Swivel Earhook with Removable Eartip, Loud, Black', note: 'Intelligent audio, full duplex with Ion — requires Ion fw M-Ion.2022.03+', checks: {impres: 1, hazloc: 0, intel: 1, fulldx: 1, ion_fw: 1, wires: "2"} },
              { img: null, pn: 'PMLN8337', desc: 'IMPRES 1-Wire Single Earbud with Removable Earhook, Loud, Black', note: 'Intelligent audio, full duplex with Ion — requires Ion fw M-Ion.2022.03+', checks: {impres: 1, hazloc: 0, intel: 1, fulldx: 1, ion_fw: 1, wires: "1"} },
            ]
          },
          {
            title: 'IMPRES Surveillance Kits — R7 Only (Loud)',
            items: [
              { img: null, pn: 'PMLN8644', desc: 'IMPRES 1-Wire Surveillance Kit, Translucent Tube, Loud, Black', note: 'Intelligent audio, R7 only', checks: {impres: 1, hazloc: 0, intel: 1, fulldx: 0, ion_fw: 0, wires: "1"} },
              { img: null, pn: 'PMLN8645', desc: 'IMPRES 2-Wire Surveillance Kit, Translucent Tube, Loud, Black', note: 'Intelligent audio, R7 only', checks: {impres: 1, hazloc: 0, intel: 1, fulldx: 0, ion_fw: 0, wires: "2"} },
              { img: null, pn: 'PMLN8646', desc: 'IMPRES 3-Wire Surveillance Kit, Translucent Tube, Loud, Black', note: 'Intelligent audio, R7 only', checks: {impres: 1, hazloc: 0, intel: 1, fulldx: 0, ion_fw: 0, wires: "3"} },
            ]
          },
          {
            title: 'Surveillance Replacement Parts',
            items: [
              { img: null, pn: 'PMLN8092', desc: 'Replacement Quick-Disconnect Translucent Tube with Rubber Eartip', note: 'Compatible with PMLN8120/8341/8342/8343', checks: {impres: 0, hazloc: 0, intel: 0, fulldx: 0, ion_fw: 0, wires: "\u2014"} },
              { img: null, pn: 'PMLN8068', desc: 'Replacement Rubber Eartip, Small (5/pack)', note: 'Black rubber — for PMLN8295', checks: {impres: 0, hazloc: 0, intel: 0, fulldx: 0, ion_fw: 0, wires: "\u2014"} },
              { img: null, pn: 'PMLN8069', desc: 'Replacement Rubber Eartip, Medium (5/pack)', note: 'Black rubber — for PMLN8295', checks: {impres: 0, hazloc: 0, intel: 0, fulldx: 0, ion_fw: 0, wires: "\u2014"} },
              { img: null, pn: 'PMLN8070', desc: 'Replacement Rubber Eartip, Large (5/pack)', note: 'Black rubber — for PMLN8295', checks: {impres: 0, hazloc: 0, intel: 0, fulldx: 0, ion_fw: 0, wires: "\u2014"} },
              { img: null, pn: 'PMLN8363', desc: 'Replacement Rubber Sleeve, Small (25/pack)', note: 'For PMLN8337', checks: {impres: 0, hazloc: 0, intel: 0, fulldx: 0, ion_fw: 0, wires: "\u2014"} },
              { img: null, pn: 'PMLN8364', desc: 'Replacement Rubber Sleeve, Medium (25/pack)', note: 'For PMLN8337', checks: {impres: 0, hazloc: 0, intel: 0, fulldx: 0, ion_fw: 0, wires: "\u2014"} },
              { img: null, pn: 'PMLN8365', desc: 'Replacement Rubber Sleeve, Large (25/pack)', note: 'For PMLN8337', checks: {impres: 0, hazloc: 0, intel: 0, fulldx: 0, ion_fw: 0, wires: "\u2014"} },
            ]
          }
        ]
      },
      headsets: {
        cols: ["Part Number", "Description", "IMPRES", "IP Rated", "HazLoc", "Intel Audio", "Ion FW Req", "NRR", "Noise Cancel"],
        label: 'Headsets',
        icon: '',
        sections: [
          {
            title: 'Heavy Duty Headsets — IMPRES (R7 & Ion)',
            items: [
              { img: null, pn: 'PMLN8085', desc: 'Heavy Duty Behind-the-Head Headset, Noise-Canceling Boom Mic, IP54', note: '24dB NRR, dual-muff, IMPRES intelligent audio, UL HazLoc, PTT on ear cup', checks: {impres: 1, ip: 1, hazloc: 'UL', intel: 1, ion_fw: 0, nrr: "24dB", nc: 1} },
              { img: null, pn: 'PMLN8086', desc: 'Heavy Duty Over-the-Head Headset, Noise-Canceling Boom Mic, IP54', note: '24dB NRR, dual-muff, IMPRES intelligent audio, UL HazLoc, PTT on ear cup', checks: {impres: 1, ip: 1, hazloc: 'UL', intel: 1, ion_fw: 0, nrr: "24dB", nc: 1} },
            ]
          },
          {
            title: '3M Peltor CH-3 Series (R7 & Ion)',
            items: [
              { img: null, pn: 'PMLN8265', desc: 'CH-3 Over-the-Head Headset with Nexus Connector', note: '26dB NRR, dual-ear, boom mic — requires PTT adapter PMLN8297. Ion fw M-Ion.2022.03+', checks: {impres: 0, ip: 0, hazloc: 0, intel: 0, ion_fw: 1, nrr: "26dB", nc: 0} },
              { img: null, pn: 'PMLN8266', desc: 'CH-3 Neckband Headset with Nexus Connector', note: '24dB NRR, dual-ear, boom mic — requires PTT adapter PMLN8297. Ion fw M-Ion.2022.03+', checks: {impres: 0, ip: 0, hazloc: 0, intel: 0, ion_fw: 1, nrr: "24dB", nc: 0} },
              { img: null, pn: 'PMLN8267', desc: 'CH-3 Hard Hat Attached Headset with Nexus Connector (hat not included)', note: '24dB NRR, dual-ear, boom mic — requires PTT adapter PMLN8297. Ion fw M-Ion.2022.03+', checks: {impres: 0, ip: 0, hazloc: 0, intel: 0, ion_fw: 1, nrr: "24dB", nc: 0} },
              { img: null, pn: 'PMLN8297', desc: 'PTT Nexus Adapter (required for CH-3 headsets above)', note: 'Ion fw M-Ion.2022.03+', checks: {impres: 0, ip: 0, hazloc: 0, intel: 0, ion_fw: 1, nrr: "\u2014", nc: 0} },
            ]
          }
        ]
      },
      batteries: {
        cols: ["Part Number", "Description", "IMPRES", "Chemistry", "Capacity", "IP Rating", "HazLoc", "Temp Range"],
        label: 'Batteries',
        icon: '',
        sections: [
          {
            title: 'IMPRES Li-Ion Batteries — R7',
            items: [
              { img: null, pn: 'PMNN4807', desc: 'IMPRES Li-Ion 2200mAh IP68 Slim Battery', note: 'IP66/IP68, 116x55x17mm, 118g', checks: {impres: 1, chem: 'Li-Ion', mah: "2200", ip: "IP68", hazloc: 0, temp: "-20 to +60°C"} },
              { img: null, pn: 'PMNN4809', desc: 'IMPRES Li-Ion 2850mAh IP68 Slim Battery', note: 'IP66/IP68, 116x55x17mm, 135g', checks: {impres: 1, chem: 'Li-Ion', mah: "2850", ip: "IP68", hazloc: 0, temp: "-20 to +60°C"} },
              { img: null, pn: 'PMNN4810', desc: 'IMPRES Li-Ion 3200mAh IP68 TIA4950 Battery', note: 'IP66/IP68, UL HazLoc, 116x55x23mm, 168g', checks: {impres: 1, chem: 'Li-Ion', mah: "3200", ip: "IP68", hazloc: 'UL', temp: "-20 to +60°C"} },
              { img: null, pn: 'PMNN4603', desc: 'IMPRES Li-Ion 3200mAh IP68 Battery', note: 'IP66/IP68, 116x55x23mm, 168g', checks: {impres: 1, chem: 'Li-Ion', mah: "3200", ip: "IP68", hazloc: 0, temp: "-20 to +60°C"} },
            ]
          }
        ]
      },
      chargers: {
        cols: ["Part Number", "Description", "IMPRES", "Pockets", "Voltage", "Chemistry"],
        label: 'Chargers',
        icon: '',
        sections: [
          { title: 'IMPRES Single-Unit Chargers', items: [
              { img: null, pn: 'PMPN4522', desc: 'IMPRES Single-Unit Charger, US/NA Plug', note: 'IMPRES, Li-Ion/NiMH, 120VAC', checks: {impres: 1, pockets: "1", voltage: "120VAC", chem: "Li-Ion/NiMH"} },
              { img: null, pn: 'PMPN4523', desc: 'IMPRES Single-Unit Charger, EU Plug', note: 'IMPRES, Li-Ion/NiMH, 240VAC', checks: {impres: 1, pockets: "1", voltage: "240VAC", chem: "Li-Ion/NiMH"} },
              { img: null, pn: 'PMPN4524', desc: 'IMPRES Single-Unit Charger, UK/HK Plug', note: 'IMPRES, Li-Ion/NiMH, 240VAC', checks: {impres: 1, pockets: "1", voltage: "240VAC", chem: "Li-Ion/NiMH"} },
              { img: null, pn: 'PMPN4525', desc: 'IMPRES Single-Unit Charger, AUS/NZ Plug', note: 'IMPRES, Li-Ion/NiMH, 240VAC', checks: {impres: 1, pockets: "1", voltage: "240VAC", chem: "Li-Ion/NiMH"} },
          ] },
          { title: 'IMPRES Multi-Unit Chargers', items: [
              { img: null, pn: 'PMPN4560', desc: 'IMPRES Multi-Unit Charger, US/NA Plug', note: 'IMPRES, 6-pocket, 100-240VAC', checks: {impres: 1, pockets: "6", voltage: "100-240VAC", chem: "Li-Ion/NiMH"} },
              { img: null, pn: 'PMPN4561', desc: 'IMPRES Multi-Unit Charger, EU Plug', note: 'IMPRES, 6-pocket, 100-240VAC', checks: {impres: 1, pockets: "6", voltage: "100-240VAC", chem: "Li-Ion/NiMH"} },
              { img: null, pn: 'PMPN4562', desc: 'IMPRES Multi-Unit Charger, UK/HK Plug', note: 'IMPRES, 6-pocket, 100-240VAC', checks: {impres: 1, pockets: "6", voltage: "100-240VAC", chem: "Li-Ion/NiMH"} },
              { img: null, pn: 'PMPN4563', desc: 'IMPRES Multi-Unit Charger, AUS/NZ Plug', note: 'IMPRES, 6-pocket, 100-240VAC', checks: {impres: 1, pockets: "6", voltage: "100-240VAC", chem: "Li-Ion/NiMH"} },
          ] },
          { title: 'Vehicular Charger', items: [
              { img: null, pn: 'NNTN7616', desc: 'IMPRES Vehicular Charger Kit', note: 'IMPRES, Li-Ion/NiMH, hard-wired to vehicle battery', checks: {impres: 1, pockets: "1", voltage: "12VDC", chem: "Li-Ion/NiMH"} },
          ] }
        ]
      },
      carry: {
        label: 'Carry Solutions',
        icon: '',
        sections: [
          {
            title: 'Holsters & Belt Clips',
            items: [
              { img: null, pn: 'PMLN7989', desc: 'Nylon Swivel Holster with 3-inch Belt Loop', note: 'Display model' },
              { img: null, pn: 'PMLN7990', desc: 'Nylon Fixed Holster with 3-inch Belt Loop', note: 'Display model' },
              { img: null, pn: 'PMLN4651', desc: 'Spring Action 2-inch Belt Clip', note: 'Plastic, display/non-display' },
              { img: null, pn: 'PMLN7008', desc: 'Spring Action 2.5-inch Belt Clip', note: 'Plastic, display/non-display' },
            ]
          },
          {
            title: 'Carry Straps & Cases',
            items: [
              { img: null, pn: 'HLN9985',  desc: 'Waterproof Bag with Large Strap', note: 'Securely carries MOTOTRBO two-way radios' },
              { img: null, pn: 'NTN5243',  desc: 'Adjustable Nylon Carrying Strap', note: 'Nylon' },
              { img: null, pn: 'RLN6486',  desc: 'Leather Radio Strap', note: 'Leather' },
              { img: null, pn: 'RLN6487',  desc: 'Leather Radio Strap — XL', note: 'Leather' },
              { img: null, pn: 'RLN6488',  desc: 'Anti-Sway Strap for Leather Radio Straps', note: 'Leather' },
            ]
          }
        ]
      },
      antennas: {
        label: 'Antennas',
        icon: '',
        sections: [
          {
            title: 'UHF Antennas',
            items: [
              { img: null, pn: 'PMAE4079', desc: 'UHF/GPS Wideband Slim Whip Antenna', note: '400-527 MHz, 15cm' },
              { img: null, pn: 'PMAE4069', desc: 'UHF/GPS Stubby Antenna', note: '403-450 MHz, 9cm' },
              { img: null, pn: 'PMAE4070', desc: 'UHF/GPS Stubby Antenna', note: '440-490 MHz, 9cm' },
              { img: null, pn: 'PMAE4071', desc: 'UHF/GPS Stubby Antenna', note: '470-527 MHz, 9cm' },
              { img: null, pn: 'AN000348A01', desc: 'UHF Stubby Wideband Antenna', note: '400-527 MHz, 9cm' },
            ]
          },
          {
            title: 'VHF Antennas',
            items: [
              { img: null, pn: 'PMAD4117', desc: 'VHF/GPS Helical Antenna', note: '136-155 MHz, 15cm' },
              { img: null, pn: 'PMAD4116', desc: 'VHF/GPS Helical Antenna', note: '144-165 MHz, 15cm' },
              { img: null, pn: 'PMAD4118', desc: 'VHF/GPS Helical Antenna', note: '152-174 MHz, 15cm' },
              { img: null, pn: 'PMAD4147', desc: 'VHF/GPS Wideband Slim Whip Antenna', note: '136-174 MHz, 20cm' },
              { img: null, pn: 'PMAD4119', desc: 'VHF/GPS Stubby Antenna', note: '136-148 MHz, 9cm' },
              { img: null, pn: 'PMAD4120', desc: 'VHF/GPS Stubby Antenna', note: '146-160 MHz, 9cm' },
              { img: null, pn: 'PMAD4121', desc: 'VHF Stubby Antenna', note: '160-174 MHz, 9cm' },
            ]
          },
          {
            title: 'Antenna Accessories',
            items: [
              { img: null, pn: '32012144001', desc: 'Antenna ID Bands — Gray (10/pack)', note: '' },
              { img: null, pn: '32012144002', desc: 'Antenna ID Bands — Yellow (10/pack)', note: '' },
              { img: null, pn: '32012144003', desc: 'Antenna ID Bands — Green (10/pack)', note: '' },
              { img: null, pn: '32012144004', desc: 'Antenna ID Bands — Blue (10/pack)', note: '' },
              { img: null, pn: '32012144005', desc: 'Antenna ID Bands — Purple (10/pack)', note: '' },
            ]
          }
        ]
      },
      cables: {
        label: 'Cables & Programming',
        icon: '',
        sections: [
          {
            title: 'Programming Cables',
            items: [
              { img: null, pn: 'PMKN4115', desc: 'Portable Programming Cable (USB)', note: 'R7 / Ion / R5' },
              { img: null, pn: 'PMKN4117', desc: 'Programming, Test, and Alignment Cable', note: 'R7 / Ion / R5' },
            ]
          },
          {
            title: 'Miscellaneous',
            items: [
              { img: null, pn: '0104058J40', desc: 'Dust Cover', note: 'Accessory port protection' },
              { img: null, pn: 'PMLN8671', desc: 'NFC Kit', note: '' },
              { img: null, pn: 'PMLN8672', desc: 'RFID Tag Kit (EU)', note: '' },
              { img: null, pn: 'PMLN8673', desc: 'RFID Tag Kit (US)', note: '' },
            ]
          }
        ]
      }
    }
  },

  'r5': {
    name: 'MOTOTRBO R5',
    sub: 'Professional DMR Portable',
    tags: ['DMR Tier II/III', 'IP67 Rugged', 'IMPRES', 'Bluetooth', 'AI Noise Suppression'],
    tagStyles: ['', 'green', 'orange', '', 'purple'],
    categories: {
      rsm: {
        cols: ["Part Number", "Description", "IMPRES", "IP", "HazLoc", "Intel Audio", "Ion FW Req", "BT/Wireless", "Full Duplex"],
        label: 'Remote Speaker Mics',
        icon: '',
        sections: [
          {
            title: 'RM Series — New GCAI Mini Connector',
            items: [
              { img: null, pn: 'PMMN4170', desc: 'RM560 IMPRES Windporting RSM, Large, Work-When-Wet', note: 'IP67, UL HazLoc, AI-trained suppression, intelligent audio, emergency button, prog button', checks: {impres: 1, ip: 'IP67', hazloc: 'UL', intel: 1, ion_fw: 0, bt: 0, fulldx: 0} },
              { img: null, pn: 'PMMN4171', desc: 'RM530 IMPRES Windporting RSM, Small, Work-When-Wet', note: 'IP67, UL HazLoc, AI-trained suppression, intelligent audio, emergency button', checks: {impres: 1, ip: 'IP67', hazloc: 'UL', intel: 1, ion_fw: 0, bt: 0, fulldx: 0} },
            ]
          },
          {
            title: 'Standard RSMs (Legacy Connector)',
            items: [
              { img: null, pn: 'PMMN4071', desc: 'IMPRES Noise-Canceling RSM, Large', note: 'IP54, UL HazLoc, noise-canceling, volume control high/low', checks: {impres: 1, ip: 'IP54', hazloc: 'UL', intel: 0, ion_fw: 0, bt: 0, fulldx: 0} },
              { img: null, pn: 'PMMN4073', desc: 'IMPRES Windporting RSM, Small', note: 'IP55, UL HazLoc, windporting, volume control high/low', checks: {impres: 1, ip: 'IP55', hazloc: 'UL', intel: 0, ion_fw: 0, bt: 0, fulldx: 0} },
              { img: null, pn: 'PMMN4075', desc: 'Windporting RSM, Small, Submersible', note: 'IP57, UL HazLoc, windporting', checks: {impres: 0, ip: 'IP57', hazloc: 'UL', intel: 0, ion_fw: 0, bt: 0, fulldx: 0} },
              { img: null, pn: 'PMMN4076', desc: 'Windporting RSM, Small', note: 'IP54, UL HazLoc, windporting, prog button', checks: {impres: 0, ip: 'IP54', hazloc: 'UL', intel: 0, ion_fw: 0, bt: 0, fulldx: 0} },
              { img: null, pn: 'PMMN4108', desc: 'Windporting RSM', note: 'IP67, windporting, volume control high/low', checks: {impres: 0, ip: 'IP67', hazloc: 0, intel: 0, ion_fw: 0, bt: 0, fulldx: 0} },
            ]
          },
          {
            title: 'Wireless RSM',
            items: [
              { img: null, pn: 'PMMN4127', desc: 'WM500 Wireless Remote Speaker Microphone', note: 'Operations Critical BT, 18hr, IP67, omni windporting mic, 30ft range', checks: {impres: 0, ip: 'IP67', hazloc: 0, intel: 0, ion_fw: 0, bt: 1, fulldx: 0} },
            ]
          },
          {
            title: 'RM560 / RM530 Replacement Parts',
            items: [
              { img: null, pn: 'PMLN8121', desc: 'Low Profile Swivel Clip', note: 'For RM560 / RM530', checks: {impres: 0, ip: 0, hazloc: 0, intel: 0, ion_fw: 0, bt: 0, fulldx: 0} },
              { img: null, pn: 'PMLN8122', desc: 'Replacement Dust Cover (10/pack)', note: 'For RM560 / RM530', checks: {impres: 0, ip: 0, hazloc: 0, intel: 0, ion_fw: 0, bt: 0, fulldx: 0} },
              { img: null, pn: 'PMLN8120', desc: 'Receive-Only Loud Audio Earpiece, Translucent Tube, 3.5mm', note: 'For RM560 / RM530', checks: {impres: 0, ip: 0, hazloc: 0, intel: 0, ion_fw: 0, bt: 0, fulldx: 0} },
              { img: null, pn: 'PMLN8652', desc: 'Receive-Only Loud Audio Earpiece, Translucent Tube, 3.5mm', note: 'Alternate version for RM560 / RM530', checks: {impres: 0, ip: 0, hazloc: 0, intel: 0, ion_fw: 0, bt: 0, fulldx: 0} },
            ]
          }
        ]
      },
      wireless: {
        cols: ["Part Number", "Description", "IP Rated", "BT", "Full Duplex", "NFC", "Emg Btn", "FW Required"],
        label: 'Wireless / Bluetooth',
        icon: '',
        sections: [
          {
            title: 'Operations Critical Wireless',
            items: [
              { img: null, pn: 'PMMN4127', desc: 'WM500 Wireless Remote Speaker Microphone', note: 'Operations Critical BT, 18hr, IP67, standard pairing, 30ft range', checks: {ip: 1, bt: 1, fulldx: 0, nfc: 0, emg: 0, fw_req: "\u2014"} },
            ]
          },
          {
            title: 'WP300 Wireless Bluetooth PTT Pod',
            items: [
              { img: null, pn: 'PMLN8298', desc: 'WP300 Wireless Bluetooth PTT Pod', note: 'IP67, 18hr battery, NFC, 30m range, emergency button — requires R5 fw R02.25.02.1000+', checks: {ip: 1, bt: 1, fulldx: 0, nfc: 1, emg: 1, fw_req: "r02.25.02.1000"} },
              { img: null, pn: 'PMLN8401', desc: 'WP300 Wireless Bluetooth PTT Pod with Surveillance Earpiece', note: 'IP67, 18hr battery, NFC, 30m range — requires R5 fw R02.25.02.1000+', checks: {ip: 1, bt: 1, fulldx: 0, nfc: 1, emg: 0, fw_req: "r02.25.02.1000"} },
            ]
          },
          {
            title: 'WP300 Optional Earpieces',
            items: [
              { img: null, pn: 'PMLN8190', desc: 'Surveillance Earpiece with Translucent Tube', note: 'Clear rubber eartip', checks: {ip: 0, bt: 0, fulldx: 0, nfc: 0, emg: 0, fw_req: "\u2014"} },
              { img: null, pn: 'PMLN8125', desc: 'Swivel Earpiece with Eartip, Short Cord', note: 'Over-the-ear', checks: {ip: 0, bt: 0, fulldx: 0, nfc: 0, emg: 0, fw_req: "\u2014"} },
              { img: null, pn: 'PMLN8077', desc: 'Swivel Earpiece with Eartip, Long Cord', note: 'Over-the-ear', checks: {ip: 0, bt: 0, fulldx: 0, nfc: 0, emg: 0, fw_req: "\u2014"} },
            ]
          },
          {
            title: 'WP300 Replacement Parts',
            items: [
              { img: null, pn: 'PMLN8332', desc: 'Vehicle Mount Option for WP300', note: 'Steering wheel / motorcycle handlebar attachment', checks: {ip: 0, bt: 0, fulldx: 0, nfc: 0, emg: 0, fw_req: "\u2014"} },
              { img: null, pn: 'PMLN6246', desc: 'Replacement Swivel Clip', note: '', checks: {ip: 0, bt: 0, fulldx: 0, nfc: 0, emg: 0, fw_req: "\u2014"} },
              { img: null, pn: 'PMLN8068', desc: 'Replacement Eartip, Small (5/pack)', note: '', checks: {ip: 0, bt: 0, fulldx: 0, nfc: 0, emg: 0, fw_req: "\u2014"} },
              { img: null, pn: 'PMLN8069', desc: 'Replacement Eartip, Medium (5/pack)', note: '', checks: {ip: 0, bt: 0, fulldx: 0, nfc: 0, emg: 0, fw_req: "\u2014"} },
              { img: null, pn: 'PMLN8070', desc: 'Replacement Eartip, Large (5/pack)', note: '', checks: {ip: 0, bt: 0, fulldx: 0, nfc: 0, emg: 0, fw_req: "\u2014"} },
              { img: null, pn: 'PMLN8092', desc: 'Replacement Translucent Tube with Clear Rubber Eartip', note: '', checks: {ip: 0, bt: 0, fulldx: 0, nfc: 0, emg: 0, fw_req: "\u2014"} },
            ]
          }
        ]
      },
      surveillance: {
        cols: ["Part Number", "Description", "IMPRES", "HazLoc", "Intel Audio", "Full Duplex", "Ion FW Req", "Wires"],
        label: 'Surveillance & Earpieces',
        icon: '',
        sections: [
          {
            title: 'IMPRES Surveillance Kits',
            items: [
              { img: null, pn: 'PMLN7269', desc: 'IMPRES 2-Wire Surveillance Kit, Translucent Tube, Black', note: 'AI-trained suppression, intelligent audio, UL HazLoc', checks: {impres: 1, hazloc: 'UL', intel: 1, fulldx: 0, ion_fw: 0, wires: "2"} },
              { img: null, pn: 'PMLN7270', desc: '2-Wire Surveillance Kit, Translucent Tube, Beige', note: 'Clear rubber eartip', checks: {impres: 0, hazloc: 0, intel: 0, fulldx: 0, ion_fw: 0, wires: "2"} },
              { img: null, pn: 'PMLN6754', desc: 'IMPRES 3-Wire Surveillance Kit, Quick-Disconnect Translucent Tube, Black', note: 'Intelligent audio, UL HazLoc', checks: {impres: 1, hazloc: 'UL', intel: 1, fulldx: 0, ion_fw: 0, wires: "3"} },
              { img: null, pn: 'PMLN6755', desc: 'IMPRES 3-Wire Surveillance Kit, Quick-Disconnect Translucent Tube, Beige', note: 'Intelligent audio, UL HazLoc', checks: {impres: 1, hazloc: 'UL', intel: 1, fulldx: 0, ion_fw: 0, wires: "3"} },
            ]
          },
          {
            title: 'Mag One Earpieces',
            items: [
              { img: null, pn: 'PMLN5733', desc: 'Mag One Earbud with In-Line Mic and PTT', note: 'Earbud style', checks: {impres: 0, hazloc: 0, intel: 0, fulldx: 0, ion_fw: 0, wires: "\u2014"} },
              { img: null, pn: 'PMLN5727', desc: 'Mag One Swivel Earpiece with In-Line Mic and PTT', note: 'Over-the-ear, in-line PTT, UL HazLoc', checks: {impres: 0, hazloc: 'UL', intel: 0, fulldx: 0, ion_fw: 0, wires: "\u2014"} },
              { img: null, pn: 'PMLN5732', desc: 'Mag One Earset with Boom Mic and In-Line PTT', note: 'Earset, boom mic', checks: {impres: 0, hazloc: 0, intel: 0, fulldx: 0, ion_fw: 0, wires: "\u2014"} },
              { img: null, pn: 'PMLN6757', desc: 'Adjustable D-Style Earpiece with In-Line Mic and PTT', note: 'In-line PTT', checks: {impres: 0, hazloc: 0, intel: 0, fulldx: 0, ion_fw: 0, wires: "\u2014"} },
            ]
          },
          {
            title: 'Receive-Only Earpieces',
            items: [
              { img: null, pn: 'AARLN4885', desc: 'Receive-Only Covered Earbud with Coiled Cord', note: 'Foam covered earbud, UL HazLoc', checks: {impres: 0, hazloc: 'UL', intel: 0, fulldx: 0, ion_fw: 0, wires: "\u2014"} },
              { img: null, pn: 'RLN4941',   desc: 'Receive-Only Earpiece, Translucent Tube, Rubber Eartip', note: 'Clear rubber eartip, UL HazLoc' },
              { img: null, pn: 'PMLN7560', desc: 'Receive-Only Earpiece, Translucent Tube, Rubber Eartip', note: 'Clear rubber eartip', checks: {impres: 0, hazloc: 0, intel: 0, fulldx: 0, ion_fw: 0, wires: "\u2014"} },
              { img: null, pn: 'WADN4190', desc: 'Receive-Only Flexible Earpiece', note: 'Over-the-ear, UL HazLoc', checks: {impres: 0, hazloc: 'UL', intel: 0, fulldx: 0, ion_fw: 0, wires: "\u2014"} },
              { img: null, pn: 'PMLN4620', desc: 'Receive-Only D-Shell Earpiece', note: 'Over-the-ear, UL HazLoc', checks: {impres: 0, hazloc: 'UL', intel: 0, fulldx: 0, ion_fw: 0, wires: "\u2014"} },
              { img: null, pn: 'PMLN7396', desc: 'D-Shell Adjustable Earpiece', note: 'Over-the-ear', checks: {impres: 0, hazloc: 0, intel: 0, fulldx: 0, ion_fw: 0, wires: "\u2014"} },
            ]
          },
          {
            title: 'Custom Fit Earpieces',
            items: [
              { img: null, pn: 'RLN4760', desc: 'Small Custom Earpiece — Right Ear', note: 'For use with RLN6242', checks: {impres: 0, hazloc: 0, intel: 0, fulldx: 0, ion_fw: 0, wires: "\u2014"} },
              { img: null, pn: 'RLN4761', desc: 'Medium Custom Earpiece — Right Ear', note: '', checks: {impres: 0, hazloc: 0, intel: 0, fulldx: 0, ion_fw: 0, wires: "\u2014"} },
              { img: null, pn: 'RLN4762', desc: 'Large Custom Earpiece — Right Ear', note: '', checks: {impres: 0, hazloc: 0, intel: 0, fulldx: 0, ion_fw: 0, wires: "\u2014"} },
              { img: null, pn: 'RLN4763', desc: 'Small Custom Earpiece — Left Ear', note: '', checks: {impres: 0, hazloc: 0, intel: 0, fulldx: 0, ion_fw: 0, wires: "\u2014"} },
              { img: null, pn: 'RLN4764', desc: 'Medium Custom Earpiece — Left Ear', note: '', checks: {impres: 0, hazloc: 0, intel: 0, fulldx: 0, ion_fw: 0, wires: "\u2014"} },
              { img: null, pn: 'RLN4765', desc: 'Large Custom Earpiece — Left Ear', note: '', checks: {impres: 0, hazloc: 0, intel: 0, fulldx: 0, ion_fw: 0, wires: "\u2014"} },
            ]
          },
          {
            title: 'Hearing Protection',
            items: [
              { img: null, pn: 'RLN6511', desc: 'EP7 Small Hearing Protectors (Sonic Defenders) Ultra Earplugs', note: '28dB NRR, Comply foam eartip', checks: {impres: 0, hazloc: 0, intel: 0, fulldx: 0, ion_fw: 0, wires: "\u2014"} },
              { img: null, pn: 'RLN6512', desc: 'EP7 Medium Hearing Protectors (Sonic Defenders) Ultra Earplugs', note: '28dB NRR, Comply foam eartip', checks: {impres: 0, hazloc: 0, intel: 0, fulldx: 0, ion_fw: 0, wires: "\u2014"} },
              { img: null, pn: 'RLN6513', desc: 'EP7 Large Hearing Protectors (Sonic Defenders) Ultra Earplugs', note: '28dB NRR, Comply foam eartip', checks: {impres: 0, hazloc: 0, intel: 0, fulldx: 0, ion_fw: 0, wires: "\u2014"} },
            ]
          },
          {
            title: 'Surveillance Replacement Parts',
            items: [
              { img: null, pn: 'HKLN4608', desc: 'Replacement Quick-Disconnect Translucent Tube with Rubber Eartip', note: 'Replacement for PMLN5724/5726', checks: {impres: 0, hazloc: 0, intel: 0, fulldx: 0, ion_fw: 0, wires: "\u2014"} },
              { img: null, pn: 'RLN6242',  desc: 'Low Noise Kit with Translucent Tube and Rubber Eartip', note: 'Combine with 5080384F72 for high noise solution' },
              { img: null, pn: 'RLN6282',  desc: 'Replacement Standard Clear Rubber Eartip (50/pack)', note: '' },
              { img: null, pn: '5080384F72', desc: 'Replacement Foam Plugs for RLN6242 (50 pairs)', note: '24dB noise reduction, foam eartip', checks: {impres: 0, hazloc: 0, intel: 0, fulldx: 0, ion_fw: 0, wires: "\u2014"} },
            ]
          }
        ]
      },
      headsets: {
        cols: ["Part Number", "Description", "IMPRES", "IP Rated", "HazLoc", "Intel Audio", "Ion FW Req", "NRR", "Noise Cancel"],
        label: 'Headsets',
        icon: '',
        sections: [
          {
            title: 'Heavy Duty Headsets — IMPRES',
            items: [
              { img: null, pn: 'PMLN6760', desc: 'Heavy Duty Behind-the-Head Headset, Noise-Canceling Boom Mic', note: '24dB NRR, dual-muff, IMPRES intelligent audio, PTT on ear cup', checks: {impres: 1, ip: 0, hazloc: 0, intel: 1, ion_fw: 0, nrr: "24dB", nc: 1} },
              { img: null, pn: 'PMLN6763', desc: 'Heavy Duty Behind-the-Head Headset, Noise-Canceling Boom Mic', note: '24dB NRR, dual-muff, IMPRES intelligent audio, UL HazLoc', checks: {impres: 1, ip: 0, hazloc: 'UL', intel: 1, ion_fw: 0, nrr: "24dB", nc: 1} },
              { img: null, pn: 'PMLN7464', desc: 'Heavy Duty Over-the-Head Headset, Noise-Canceling Boom Mic', note: '24dB NRR, dual-muff, IMPRES intelligent audio', checks: {impres: 1, ip: 0, hazloc: 0, intel: 1, ion_fw: 0, nrr: "24dB", nc: 1} },
              { img: null, pn: 'PMLN7465', desc: 'Heavy Duty Over-the-Head Headset, Noise-Canceling Boom Mic', note: '24dB NRR, dual-muff, IMPRES intelligent audio, UL HazLoc', checks: {impres: 1, ip: 0, hazloc: 'UL', intel: 1, ion_fw: 0, nrr: "24dB", nc: 1} },
            ]
          },
          {
            title: 'Lightweight & Mag One Headsets',
            items: [
              { img: null, pn: 'PMLN6635', desc: 'Lightweight Over-the-Head Headset, Single Muff, In-Line PTT, Boom Mic', note: 'UL HazLoc, lightweight', checks: {impres: 0, ip: 0, hazloc: 'UL', intel: 0, ion_fw: 0, nrr: "\u2014", nc: 0} },
              { img: null, pn: 'PMLN6761', desc: 'Mag One Ultra-Lite Behind-the-Head Headset', note: 'Single-ear, IMPRES, boom mic, in-line PTT', checks: {impres: 1, ip: 0, hazloc: 0, intel: 0, ion_fw: 0, nrr: "\u2014", nc: 0} },
              { img: null, pn: 'PMLN6759', desc: 'IMPRES Temple Transducer with Boom Mic and In-Line PTT', note: 'Behind-the-head, bone conduction, IMPRES intelligent audio', checks: {impres: 1, ip: 0, hazloc: 0, intel: 1, ion_fw: 0, nrr: "\u2014", nc: 0} },
            ]
          },
          {
            title: '3M Peltor Headsets',
            items: [
              { img: null, pn: 'PMLN8265', desc: 'CH-3 Over-the-Head Headset with Nexus Connector', note: '26dB NRR, dual-ear, boom mic — requires PTT adapter PMLN8297', checks: {impres: 0, ip: 0, hazloc: 0, intel: 0, ion_fw: 0, nrr: "26dB", nc: 0} },
              { img: null, pn: 'PMLN8266', desc: 'CH-3 Neckband Headset with Nexus Connector', note: '24dB NRR, dual-ear, boom mic — requires PTT adapter PMLN8297', checks: {impres: 0, ip: 0, hazloc: 0, intel: 0, ion_fw: 0, nrr: "24dB", nc: 0} },
              { img: null, pn: 'PMLN8267', desc: 'CH-3 Hard Hat Attached Headset with Nexus Connector', note: '24dB NRR, dual-ear — requires PTT adapter PMLN8297', checks: {impres: 0, ip: 0, hazloc: 0, intel: 0, ion_fw: 0, nrr: "24dB", nc: 0} },
              { img: null, pn: 'PMLN8297', desc: 'PTT Nexus Adapter (required for CH-3 headsets)', note: '', checks: {impres: 0, ip: 0, hazloc: 0, intel: 0, ion_fw: 0, nrr: "\u2014", nc: 0} },
            ]
          }
        ]
      },
      batteries: {
        cols: ["Part Number", "Description", "IMPRES", "Chemistry", "Capacity", "IP Rating", "HazLoc", "Temp Range"],
        label: 'Batteries',
        icon: '',
        sections: [
          {
            title: 'IMPRES Li-Ion Batteries — R5',
            items: [
              { img: null, pn: 'PMNN4878', desc: 'Li-Ion IP67 2400mAh Battery', note: 'IP67, 122x55x24mm, 144g — EMEA and APAC only', checks: {impres: 0, chem: 'Li-Ion', mah: "2400", ip: "IP67", hazloc: 0, temp: "-20 to +60°C"} },
              { img: null, pn: 'PMNN4888', desc: 'IMPRES Slim Li-Ion IP67 2200mAh Battery', note: 'IP67, 122x55x18mm, 120g', checks: {impres: 1, chem: 'Li-Ion', mah: "2200", ip: "IP67", hazloc: 0, temp: "-20 to +60°C"} },
              { img: null, pn: 'PMNN4889', desc: 'IMPRES High Capacity Li-Ion IP67 3200mAh Battery', note: 'IP67, 122x55x24mm, 148g', checks: {impres: 1, chem: 'Li-Ion', mah: "3200", ip: "IP67", hazloc: 0, temp: "-20 to +60°C"} },
              { img: null, pn: 'PMNN4890', desc: 'IMPRES UL High Capacity Li-Ion IP67 3200mAh Battery', note: 'IP67, UL HazLoc, 122x55x24mm, 162g', checks: {impres: 1, chem: 'Li-Ion', mah: "3200", ip: "IP67", hazloc: 'UL', temp: "-20 to +60°C"} },
            ]
          }
        ]
      },
      chargers: {
        cols: ["Part Number", "Description", "IMPRES", "Pockets", "Voltage", "Chemistry"],
        label: 'Chargers',
        icon: '',
        sections: [
          { title: 'IMPRES Single-Unit Chargers', items: [
              { img: null, pn: 'PMPN4527', desc: 'IMPRES Single-Unit Charger Base Only', note: 'IMPRES, Li-Ion/NiMH', checks: {impres: 1, pockets: "1", voltage: "—", chem: "Li-Ion/NiMH"} },
              { img: null, pn: 'PMPN4576', desc: 'IMPRES Single-Unit Charger, US/NA/TW Plug', note: 'IMPRES, Li-Ion/NiMH, 120VAC', checks: {impres: 1, pockets: "1", voltage: "120VAC", chem: "Li-Ion/NiMH"} },
              { img: null, pn: 'PMPN4577', desc: 'IMPRES Single-Unit Charger, EU Plug', note: 'IMPRES, Li-Ion/NiMH, 240VAC', checks: {impres: 1, pockets: "1", voltage: "240VAC", chem: "Li-Ion/NiMH"} },
              { img: null, pn: 'PMPN4572', desc: 'IMPRES Single-Unit Charger, UK/HK Plug', note: 'IMPRES, Li-Ion/NiMH, 240VAC', checks: {impres: 1, pockets: "1", voltage: "240VAC", chem: "Li-Ion/NiMH"} },
              { img: null, pn: 'PMPN4571', desc: 'IMPRES Single-Unit Charger, AUS/NZ Plug', note: 'IMPRES, Li-Ion/NiMH, 240VAC', checks: {impres: 1, pockets: "1", voltage: "240VAC", chem: "Li-Ion/NiMH"} },
              { img: null, pn: 'PMPN4578', desc: 'IMPRES Single-Unit Charger, JP Plug', note: 'IMPRES, Li-Ion/NiMH, 100-240VAC', checks: {impres: 1, pockets: "1", voltage: "100-240VAC", chem: "Li-Ion/NiMH"} },
              { img: null, pn: 'PMPN4579', desc: 'IMPRES Single-Unit Charger, CH Plug', note: 'IMPRES, Li-Ion/NiMH, 240VAC', checks: {impres: 1, pockets: "1", voltage: "240VAC", chem: "Li-Ion/NiMH"} },
              { img: null, pn: 'PMPN4574', desc: 'IMPRES Single-Unit Charger, KOR Plug', note: 'IMPRES, Li-Ion/NiMH, 240VAC', checks: {impres: 1, pockets: "1", voltage: "240VAC", chem: "Li-Ion/NiMH"} },
              { img: null, pn: 'PMPN4582', desc: 'IMPRES Single-Unit Charger, India Plug', note: 'IMPRES, Li-Ion/NiMH, 100-240VAC', checks: {impres: 1, pockets: "1", voltage: "100-240VAC", chem: "Li-Ion/NiMH"} },
          ] },
          { title: 'Standard Single-Unit Chargers', items: [
              { img: null, pn: 'NNTN8117', desc: 'Single-Unit Charger Base Only', note: 'Li-Ion/NiMH', checks: {impres: 0, pockets: "1", voltage: "—", chem: "Li-Ion/NiMH"} },
              { img: null, pn: 'NNTN8226', desc: 'Single-Unit Charger 1.25A, US/NA Plug', note: 'Li-Ion/NiMH, 115VAC', checks: {impres: 0, pockets: "1", voltage: "115VAC", chem: "Li-Ion/NiMH"} },
              { img: null, pn: 'NNTN8224', desc: 'Single-Unit Charger 1.25A, China Plug', note: 'Li-Ion/NiMH, 230VAC', checks: {impres: 0, pockets: "1", voltage: "230VAC", chem: "Li-Ion/NiMH"} },
              { img: null, pn: 'NNTN8273', desc: 'Single-Unit Charger, Switch-Mode 21W PSU, EU Plug', note: 'Li-Ion/NiMH, 240VAC', checks: {impres: 0, pockets: "1", voltage: "240VAC", chem: "Li-Ion/NiMH"} },
              { img: null, pn: 'NNTN8274', desc: 'Single-Unit Charger, Switch-Mode 21W PSU, UK/HK Plug', note: 'Li-Ion/NiMH, 240VAC', checks: {impres: 0, pockets: "1", voltage: "240VAC", chem: "Li-Ion/NiMH"} },
              { img: null, pn: 'NNTN8292', desc: 'Single-Unit Charger 1.25A, EU/EA Plug', note: 'Li-Ion/NiMH, 230VAC', checks: {impres: 0, pockets: "1", voltage: "230VAC", chem: "Li-Ion/NiMH"} },
          ] },
          { title: 'IMPRES Multi-Unit Chargers', items: [
              { img: null, pn: 'PMPN4283', desc: 'IMPRES Multi-Unit Charger (Universal)', note: 'IMPRES, 6-pocket, 100-240VAC', checks: {impres: 1, pockets: "6", voltage: "100-240VAC", chem: "Li-Ion/NiMH"} },
              { img: null, pn: 'PMPN4284', desc: 'IMPRES Multi-Unit Charger, US/NA Plug', note: 'IMPRES, 6-pocket, 100-240VAC', checks: {impres: 1, pockets: "6", voltage: "100-240VAC", chem: "Li-Ion/NiMH"} },
              { img: null, pn: 'PMPN4289', desc: 'IMPRES Multi-Unit Charger, EU Plug', note: 'IMPRES, 6-pocket, 100-240VAC', checks: {impres: 1, pockets: "6", voltage: "100-240VAC", chem: "Li-Ion/NiMH"} },
              { img: null, pn: 'PMPN4290', desc: 'IMPRES Multi-Unit Charger, UK/HK Plug', note: 'IMPRES, 6-pocket, 100-240VAC', checks: {impres: 1, pockets: "6", voltage: "100-240VAC", chem: "Li-Ion/NiMH"} },
              { img: null, pn: 'PMPN4291', desc: 'IMPRES Multi-Unit Charger, ARG Plug', note: 'IMPRES, 6-pocket, 100-240VAC', checks: {impres: 1, pockets: "6", voltage: "100-240VAC", chem: "Li-Ion/NiMH"} },
              { img: null, pn: 'PMPN4292', desc: 'IMPRES Multi-Unit Charger, BZ Plug', note: 'IMPRES, 6-pocket, 100-240VAC', checks: {impres: 1, pockets: "6", voltage: "100-240VAC", chem: "Li-Ion/NiMH"} },
              { img: null, pn: 'PMPN4293', desc: 'IMPRES Multi-Unit Charger, AUS/NZ Plug', note: 'IMPRES, 6-pocket, 100-240VAC', checks: {impres: 1, pockets: "6", voltage: "100-240VAC", chem: "Li-Ion/NiMH"} },
              { img: null, pn: 'PMPN4294', desc: 'IMPRES Multi-Unit Charger, KOR Plug', note: 'IMPRES, 6-pocket, 100-240VAC', checks: {impres: 1, pockets: "6", voltage: "100-240VAC", chem: "Li-Ion/NiMH"} },
              { img: null, pn: 'PMPN4295', desc: 'IMPRES Multi-Unit Charger, JP Plug', note: 'IMPRES, 6-pocket, 100-240VAC', checks: {impres: 1, pockets: "6", voltage: "100-240VAC", chem: "Li-Ion/NiMH"} },
              { img: null, pn: 'PMPN4296', desc: 'IMPRES Multi-Unit Charger, CN Plug', note: 'IMPRES, 6-pocket, 100-240VAC', checks: {impres: 1, pockets: "6", voltage: "100-240VAC", chem: "Li-Ion/NiMH"} },
              { img: null, pn: 'PMPN4462', desc: 'IMPRES Multi-Unit Charger, TW Plug', note: 'IMPRES, 6-pocket, 100-240VAC', checks: {impres: 1, pockets: "6", voltage: "100-240VAC", chem: "Li-Ion/NiMH"} },
              { img: null, pn: 'PMPN4610', desc: 'IMPRES Multi-Unit Charger, BIS Plug', note: 'IMPRES, 6-pocket, 100-240VAC', checks: {impres: 1, pockets: "6", voltage: "100-240VAC", chem: "Li-Ion/NiMH"} },
          ] },
          { title: 'Vehicular & Power Supply', items: [
              { img: null, pn: 'NNTN7616',    desc: 'IMPRES Vehicular Charger Kit', note: 'IMPRES, Li-Ion/NiMH, hard-wired to vehicle battery', checks: {impres: 1, pockets: "1", voltage: "12VDC", chem: "Li-Ion/NiMH"} },
              { img: null, pn: 'PS000577A01', desc: 'Power Supply Adaptor 14.5V/1.15A, US/NA/TW/JP Plug', note: '120VAC', checks: {impres: 0, pockets: "1", voltage: "120VAC", chem: "—"} },
              { img: null, pn: 'PS000576A21', desc: 'Power Supply Adaptor Fixed Blade 14.5V/1.15A, US/NA Plug', note: '120VAC', checks: {impres: 0, pockets: "1", voltage: "120VAC", chem: "—"} },
              { img: null, pn: 'PS000576A02', desc: 'Power Supply Adaptor Fixed Blade 14.5V/1.15A, EU Plug', note: '100-240VAC', checks: {impres: 0, pockets: "1", voltage: "100-240VAC", chem: "—"} },
              { img: null, pn: 'PS000576A03', desc: 'Power Supply Adaptor Fixed Blade 14.5V/1.15A, UK/HK Plug', note: '100-240VAC', checks: {impres: 0, pockets: "1", voltage: "100-240VAC", chem: "—"} },
              { img: null, pn: 'PS000576A04', desc: 'Power Supply Adaptor Fixed Blade 14.5V/1.15A, AUS/NZ Plug', note: '100-240VAC', checks: {impres: 0, pockets: "1", voltage: "100-240VAC", chem: "—"} },
          ] }
        ]
      },
      carry: {
        label: 'Carry Solutions',
        icon: '',
        sections: [
          {
            title: 'Hard Leather Cases',
            items: [
              { img: null, pn: 'PMLN8662', desc: 'Hard Leather Case, 3-inch Swivel Belt Loop (Display)', note: 'Hard leather, D-rings' },
              { img: null, pn: 'PMLN8663', desc: 'Hard Leather Case, 3-inch Fixed Belt Loop (Display)', note: 'Hard leather, D-rings' },
              { img: null, pn: 'PMLN8665', desc: 'Hard Leather Case, 3-inch Swivel Belt Loop (Non-Display)', note: 'Hard leather, D-rings' },
              { img: null, pn: 'PMLN8666', desc: 'Hard Leather Case, 3-inch Fixed Belt Loop (Non-Display)', note: 'Hard leather, D-rings' },
            ]
          },
          {
            title: 'Nylon Cases',
            items: [
              { img: null, pn: 'PMLN8664', desc: 'Nylon Case, 3-inch Fixed Belt Loop (Display)', note: 'Nylon, D-rings' },
              { img: null, pn: 'PMLN8667', desc: 'Nylon Case, 3-inch Fixed Belt Loop (Non-Display)', note: 'Nylon' },
            ]
          },
          {
            title: 'Belt Loops & Clips',
            items: [
              { img: null, pn: 'PMLN5610', desc: 'Replacement 2.5-inch Swivel Belt Loop', note: 'Hard leather, display/non-display' },
              { img: null, pn: 'PMLN5611', desc: 'Replacement 3-inch Leather Swivel Belt Loop', note: 'Hard leather, display/non-display' },
              { img: null, pn: 'PMLN4651', desc: 'Spring Action 2-inch Belt Clip', note: 'Plastic' },
              { img: null, pn: 'PMLN7008', desc: 'Spring Action 2.5-inch Belt Clip', note: 'Plastic' },
            ]
          },
          {
            title: 'Carry Straps & Bags',
            items: [
              { img: null, pn: 'HLN9985', desc: 'Waterproof Bag with Large Strap', note: 'Securely carries MOTOTRBO two-way radios' },
              { img: null, pn: 'NTN5243', desc: 'Adjustable Nylon Carrying Strap', note: 'Nylon' },
              { img: null, pn: 'RLN6486', desc: 'Leather Radio Strap', note: 'Leather' },
              { img: null, pn: 'RLN6487', desc: 'Leather Radio Strap — XL', note: 'Leather' },
              { img: null, pn: 'RLN6488', desc: 'Anti-Sway Strap for Leather Radio Straps', note: 'Leather' },
            ]
          }
        ]
      },
      antennas: {
        label: 'Antennas',
        icon: '',
        sections: [
          {
            title: 'UHF Antennas',
            items: [
              { img: null, pn: 'PMAE4079',   desc: 'UHF/GPS Wideband Slim Whip Antenna', note: '403-527 MHz, 15cm, whip' },
              { img: null, pn: 'PMAE4069',   desc: 'UHF/GPS Stubby Antenna', note: '403-450 MHz, 9cm, stubby' },
              { img: null, pn: 'PMAE4070',   desc: 'UHF/GPS Stubby Antenna', note: '440-490 MHz, 9cm, stubby' },
              { img: null, pn: 'PMAE4071',   desc: 'UHF/GPS Stubby Antenna', note: '470-527 MHz, 9cm, stubby' },
              { img: null, pn: 'AN000348A01', desc: 'UHF Stubby Wideband Antenna', note: '400-527 MHz, 9cm, stubby' },
            ]
          },
          {
            title: 'VHF Antennas',
            items: [
              { img: null, pn: 'PMAD4117', desc: 'VHF/GPS Helical Antenna', note: '136-155 MHz, 15cm' },
              { img: null, pn: 'PMAD4116', desc: 'VHF/GPS Helical Antenna', note: '144-165 MHz, 15cm' },
              { img: null, pn: 'PMAD4118', desc: 'VHF/GPS Helical Antenna', note: '152-174 MHz, 15cm' },
              { img: null, pn: 'PMAD4147', desc: 'VHF/GPS Wideband Slim Whip Antenna', note: '136-174 MHz, 20cm' },
              { img: null, pn: 'PMAD4119', desc: 'VHF/GPS Stubby Antenna', note: '136-148 MHz, 9cm' },
              { img: null, pn: 'PMAD4120', desc: 'VHF/GPS Stubby Antenna', note: '146-160 MHz, 9cm' },
              { img: null, pn: 'PMAD4121', desc: 'VHF Stubby Antenna', note: '160-174 MHz, 9cm' },
            ]
          },
          {
            title: 'Antenna Accessories',
            items: [
              { img: null, pn: '32012144001', desc: 'Antenna ID Bands — Gray (10/pack)', note: '' },
              { img: null, pn: '32012144002', desc: 'Antenna ID Bands — Yellow (10/pack)', note: '' },
              { img: null, pn: '32012144003', desc: 'Antenna ID Bands — Green (10/pack)', note: '' },
              { img: null, pn: '32012144004', desc: 'Antenna ID Bands — Blue (10/pack)', note: '' },
              { img: null, pn: '32012144005', desc: 'Antenna ID Bands — Purple (10/pack)', note: '' },
            ]
          }
        ]
      },
      cables: {
        label: 'Cables & Programming',
        icon: '',
        sections: [
          {
            title: 'Programming Cables',
            items: [
              { img: null, pn: 'PMKN4115', desc: 'Portable Programming Cable (USB)', note: 'R7 / Ion / R5' },
              { img: null, pn: 'PMKN4117', desc: 'Programming, Test, and Alignment Cable', note: 'R7 / Ion / R5' },
            ]
          },
          {
            title: 'Screen Protectors & Misc',
            items: [
              { img: null, pn: '0104058J40', desc: 'Dust Cover', note: 'Accessory port protection' },
              { img: null, pn: 'PMLN8671',   desc: 'NFC Kit', note: '' },
              { img: null, pn: 'PMLN8672',   desc: 'RFID Tag Kit (EU)', note: '' },
              { img: null, pn: 'PMLN8673',   desc: 'RFID Tag Kit (US)', note: '' },
            ]
          }
        ]
      }
    }
  },

  'ion': {
    name: 'MOTOTRBO Ion',
    sub: 'Android Smart Radio',
    tags: ['Android OS', 'LTE / Wi-Fi', 'Full-Duplex Telephony', 'IMPRES', 'IP68'],
    tagStyles: ['orange', 'orange', 'green', '', 'green'],
    categories: {
      rsm: {
        cols: ["Part Number", "Description", "IMPRES", "IP", "HazLoc", "Intel Audio", "Ion FW Req", "BT/Wireless", "Full Duplex"],
        label: 'Remote Speaker Mics',
        icon: '',
        sections: [
          {
            title: 'RM Series — GCAI Mini Connector (R7 / Ion)',
            items: [
              { img: null, pn: 'PMMN4128', desc: 'RM780 IMPRES Windporting RSM, Large, Work-When-Wet', note: 'IP68, UL HazLoc, 2 prog buttons + emergency, intelligent audio, full duplex telephony with Ion', checks: {impres: 1, ip: 'IP68', hazloc: 'UL', intel: 1, ion_fw: 0, bt: 0, fulldx: 1} },
              { img: null, pn: 'PMMN4140', desc: 'RM760 IMPRES Windporting RSM, Large Basic, Work-When-Wet', note: 'IP68, UL HazLoc, intelligent audio — requires Ion fw M-Ion.2022.03+', checks: {impres: 1, ip: 'IP68', hazloc: 'UL', intel: 1, ion_fw: 1, bt: 0, fulldx: 0} },
              { img: null, pn: 'PMMN4131', desc: 'RM730 IMPRES Windporting RSM, Small', note: 'IP68, UL HazLoc, emergency button — requires Ion fw M-Ion.2022.03+', checks: {impres: 1, ip: 'IP68', hazloc: 'UL', intel: 0, ion_fw: 1, bt: 0, fulldx: 0} },
            ]
          },
          {
            title: 'Wireless RSM',
            items: [
              { img: null, pn: 'PMMN4127', desc: 'WM500 Wireless Remote Speaker Microphone', note: 'Operations Critical BT, 18hr, IP67, omni windporting mic, full duplex with Ion — requires Ion fw M-Ion.2022.03+', checks: {impres: 0, ip: 'IP67', hazloc: 0, intel: 0, ion_fw: 1, bt: 1, fulldx: 1} },
            ]
          },
          {
            title: 'RSM Replacement Parts',
            items: [
              { img: null, pn: 'PMKN4232', desc: 'Replacement Coil Cord Kit', note: 'For PMMN4128, PMMN4131, PMMN4140', checks: {impres: 0, ip: 0, hazloc: 0, intel: 0, ion_fw: 0, bt: 0, fulldx: 0} },
              { img: null, pn: 'PMLN8121', desc: 'Low Profile Swivel Clip', note: 'For PMMN4128, PMMN4131, PMMN4140', checks: {impres: 0, ip: 0, hazloc: 0, intel: 0, ion_fw: 0, bt: 0, fulldx: 0} },
              { img: null, pn: 'PMLN8122', desc: 'Replacement Dust Cover (10/pack)', note: 'For PMMN4128, PMMN4140', checks: {impres: 0, ip: 0, hazloc: 0, intel: 0, ion_fw: 0, bt: 0, fulldx: 0} },
              { img: null, pn: 'PMLN8253', desc: 'Replacement Dust Cover (10/pack)', note: 'For PMMN4131', checks: {impres: 0, ip: 0, hazloc: 0, intel: 0, ion_fw: 0, bt: 0, fulldx: 0} },
            ]
          },
          {
            title: 'RSM Earpieces (3.5mm)',
            items: [
              { img: null, pn: 'PMLN8120', desc: 'Receive-Only Earpiece with Translucent Tube, Loud Audio', note: 'Required for RM780/RM760/RM730 telephony calls with Ion, UL HazLoc', checks: {impres: 0, ip: 0, hazloc: 'UL', intel: 0, ion_fw: 0, bt: 0, fulldx: 0} },
              { img: null, pn: 'PMLN7560', desc: 'Receive-Only Earpiece with Translucent Tube and Rubber Eartip', note: 'For WM500 (PMMN4127) telephony calls with Ion', checks: {impres: 0, ip: 0, hazloc: 0, intel: 0, ion_fw: 0, bt: 1, fulldx: 0} },
            ]
          }
        ]
      },
      wireless: {
        cols: ["Part Number", "Description", "IP Rated", "BT", "Full Duplex", "NFC", "Emg Btn", "FW Required"],
        label: 'Wireless / Bluetooth',
        icon: '',
        sections: [
          {
            title: 'Operations Critical Wireless',
            items: [
              { img: null, pn: 'PMMN4127', desc: 'WM500 Wireless Remote Speaker Microphone', note: 'Full duplex telephony with Ion, 18hr, IP67 — requires Ion fw M-Ion.2022.03+', checks: {ip: 1, bt: 0, fulldx: 1, nfc: 0, emg: 0, fw_req: "m"} },
              { img: null, pn: 'PMLN8123', desc: 'Operations Critical Wireless BT Earpiece with PTT', note: 'Over-ear swivel, boom mic, 8hr battery, full duplex telephony with Ion, standard pairing, 30ft', checks: {ip: 0, bt: 1, fulldx: 1, nfc: 0, emg: 0, fw_req: "\u2014"} },
            ]
          },
          {
            title: 'WP300 Wireless Bluetooth PTT Pod',
            items: [
              { img: null, pn: 'PMLN8298', desc: 'WP300 Wireless Bluetooth PTT Pod', note: 'IP67, 18hr battery, NFC, 30m range, emergency button — requires Ion fw M-Ion.2022.03+', checks: {ip: 1, bt: 1, fulldx: 0, nfc: 1, emg: 1, fw_req: "m"} },
              { img: null, pn: 'PMLN8401', desc: 'WP300 Wireless Bluetooth PTT Pod with Surveillance Earpiece', note: 'IP67, 18hr battery, NFC, 30m range — requires Ion fw M-Ion.2022.03+', checks: {ip: 1, bt: 1, fulldx: 0, nfc: 1, emg: 0, fw_req: "m"} },
            ]
          },
          {
            title: 'WP300 Optional Earpieces',
            items: [
              { img: null, pn: 'PMLN8190', desc: 'Surveillance Earpiece with Translucent Tube', note: 'Clear rubber eartip', checks: {ip: 0, bt: 0, fulldx: 0, nfc: 0, emg: 0, fw_req: "\u2014"} },
              { img: null, pn: 'PMLN8125', desc: 'Swivel Earpiece with Eartip, Short Cord', note: 'Over-the-ear', checks: {ip: 0, bt: 0, fulldx: 0, nfc: 0, emg: 0, fw_req: "\u2014"} },
              { img: null, pn: 'PMLN8077', desc: 'Swivel Earpiece with Eartip, Long Cord', note: 'Over-the-ear', checks: {ip: 0, bt: 0, fulldx: 0, nfc: 0, emg: 0, fw_req: "\u2014"} },
            ]
          },
          {
            title: 'WP300 Replacement Parts',
            items: [
              { img: null, pn: 'PMLN8332', desc: 'Vehicle Mount Option for WP300', note: '', checks: {ip: 0, bt: 0, fulldx: 0, nfc: 0, emg: 0, fw_req: "\u2014"} },
              { img: null, pn: 'PMLN6246', desc: 'Replacement Swivel Clip', note: '', checks: {ip: 0, bt: 0, fulldx: 0, nfc: 0, emg: 0, fw_req: "\u2014"} },
              { img: null, pn: 'PMLN8068', desc: 'Replacement Eartip, Small (5/pack)', note: '', checks: {ip: 0, bt: 0, fulldx: 0, nfc: 0, emg: 0, fw_req: "\u2014"} },
              { img: null, pn: 'PMLN8069', desc: 'Replacement Eartip, Medium (5/pack)', note: '', checks: {ip: 0, bt: 0, fulldx: 0, nfc: 0, emg: 0, fw_req: "\u2014"} },
              { img: null, pn: 'PMLN8070', desc: 'Replacement Eartip, Large (5/pack)', note: '', checks: {ip: 0, bt: 0, fulldx: 0, nfc: 0, emg: 0, fw_req: "\u2014"} },
              { img: null, pn: 'PMLN8092', desc: 'Replacement Translucent Tube with Clear Rubber Eartip', note: '', checks: {ip: 0, bt: 0, fulldx: 0, nfc: 0, emg: 0, fw_req: "\u2014"} },
            ]
          }
        ]
      },
      surveillance: {
        cols: ["Part Number", "Description", "IMPRES", "HazLoc", "Intel Audio", "Full Duplex", "Ion FW Req", "Wires"],
        label: 'Surveillance & Earpieces',
        icon: '',
        sections: [
          {
            title: 'IMPRES Surveillance Kits — R7 & Ion (Extra Loud, Full Duplex)',
            items: [
              { img: null, pn: 'PMLN8341', desc: 'IMPRES 1-Wire Surveillance Kit, Translucent Tube, Extra Loud, Black', note: 'Intelligent audio, full duplex telephony with Ion, UL HazLoc', checks: {impres: 1, hazloc: 'UL', intel: 1, fulldx: 1, ion_fw: 0, wires: "1"} },
              { img: null, pn: 'PMLN8342', desc: 'IMPRES 2-Wire Surveillance Kit, Translucent Tube, Extra Loud, Black', note: 'Intelligent audio, full duplex telephony with Ion, UL HazLoc', checks: {impres: 1, hazloc: 'UL', intel: 1, fulldx: 1, ion_fw: 0, wires: "2"} },
              { img: null, pn: 'PMLN8343', desc: 'IMPRES 3-Wire Surveillance Kit, Translucent Tube, Extra Loud, Black', note: 'Intelligent audio, full duplex telephony with Ion, UL HazLoc', checks: {impres: 1, hazloc: 'UL', intel: 1, fulldx: 1, ion_fw: 0, wires: "3"} },
              { img: null, pn: 'PMLN8295', desc: 'IMPRES 2-Wire Swivel Earhook, Removable Eartip, Loud, Black', note: 'Intelligent audio, full duplex with Ion — requires Ion fw M-Ion.2022.03+', checks: {impres: 1, hazloc: 0, intel: 1, fulldx: 1, ion_fw: 1, wires: "2"} },
              { img: null, pn: 'PMLN8337', desc: 'IMPRES 1-Wire Single Earbud, Removable Earhook, Loud, Black', note: 'Intelligent audio, full duplex with Ion — requires Ion fw M-Ion.2022.03+', checks: {impres: 1, hazloc: 0, intel: 1, fulldx: 1, ion_fw: 1, wires: "1"} },
            ]
          },
          {
            title: 'Surveillance Replacement Parts',
            items: [
              { img: null, pn: 'PMLN8092', desc: 'Replacement Quick-Disconnect Translucent Tube with Rubber Eartip', note: '', checks: {impres: 0, hazloc: 0, intel: 0, fulldx: 0, ion_fw: 0, wires: "\u2014"} },
              { img: null, pn: 'PMLN8068', desc: 'Replacement Rubber Eartip, Small (5/pack)', note: '', checks: {impres: 0, hazloc: 0, intel: 0, fulldx: 0, ion_fw: 0, wires: "\u2014"} },
              { img: null, pn: 'PMLN8069', desc: 'Replacement Rubber Eartip, Medium (5/pack)', note: '', checks: {impres: 0, hazloc: 0, intel: 0, fulldx: 0, ion_fw: 0, wires: "\u2014"} },
              { img: null, pn: 'PMLN8070', desc: 'Replacement Rubber Eartip, Large (5/pack)', note: '', checks: {impres: 0, hazloc: 0, intel: 0, fulldx: 0, ion_fw: 0, wires: "\u2014"} },
              { img: null, pn: 'PMLN8363', desc: 'Replacement Rubber Sleeve, Small (25/pack)', note: '', checks: {impres: 0, hazloc: 0, intel: 0, fulldx: 0, ion_fw: 0, wires: "\u2014"} },
              { img: null, pn: 'PMLN8364', desc: 'Replacement Rubber Sleeve, Medium (25/pack)', note: '', checks: {impres: 0, hazloc: 0, intel: 0, fulldx: 0, ion_fw: 0, wires: "\u2014"} },
              { img: null, pn: 'PMLN8365', desc: 'Replacement Rubber Sleeve, Large (25/pack)', note: '', checks: {impres: 0, hazloc: 0, intel: 0, fulldx: 0, ion_fw: 0, wires: "\u2014"} },
            ]
          }
        ]
      },
      headsets: {
        cols: ["Part Number", "Description", "IMPRES", "IP Rated", "HazLoc", "Intel Audio", "Ion FW Req", "NRR", "Noise Cancel"],
        label: 'Headsets',
        icon: '',
        sections: [
          {
            title: 'Heavy Duty Headsets — IMPRES (R7 & Ion)',
            items: [
              { img: null, pn: 'PMLN8085', desc: 'Heavy Duty Behind-the-Head Headset, Noise-Canceling Boom Mic, IP54', note: '24dB NRR, dual-muff, IMPRES intelligent audio, UL HazLoc', checks: {impres: 1, ip: 1, hazloc: 'UL', intel: 1, ion_fw: 0, nrr: "24dB", nc: 1} },
              { img: null, pn: 'PMLN8086', desc: 'Heavy Duty Over-the-Head Headset, Noise-Canceling Boom Mic, IP54', note: '24dB NRR, dual-muff, IMPRES intelligent audio, UL HazLoc', checks: {impres: 1, ip: 1, hazloc: 'UL', intel: 1, ion_fw: 0, nrr: "24dB", nc: 1} },
            ]
          },
          {
            title: '3M Peltor CH-3 Series (R7 & Ion)',
            items: [
              { img: null, pn: 'PMLN8265', desc: 'CH-3 Over-the-Head Headset with Nexus Connector', note: '26dB NRR — requires PTT adapter PMLN8297. Ion fw M-Ion.2022.03+', checks: {impres: 0, ip: 0, hazloc: 0, intel: 0, ion_fw: 1, nrr: "26dB", nc: 0} },
              { img: null, pn: 'PMLN8266', desc: 'CH-3 Neckband Headset with Nexus Connector', note: '24dB NRR — requires PTT adapter PMLN8297. Ion fw M-Ion.2022.03+', checks: {impres: 0, ip: 0, hazloc: 0, intel: 0, ion_fw: 1, nrr: "24dB", nc: 0} },
              { img: null, pn: 'PMLN8267', desc: 'CH-3 Hard Hat Attached Headset with Nexus Connector', note: '24dB NRR — requires PTT adapter PMLN8297. Ion fw M-Ion.2022.03+', checks: {impres: 0, ip: 0, hazloc: 0, intel: 0, ion_fw: 1, nrr: "24dB", nc: 0} },
              { img: null, pn: 'PMLN8297', desc: 'PTT Nexus Adapter (required for CH-3 headsets above)', note: 'Ion fw M-Ion.2022.03+', checks: {impres: 0, ip: 0, hazloc: 0, intel: 0, ion_fw: 1, nrr: "\u2014", nc: 0} },
            ]
          }
        ]
      },
      batteries: {
        cols: ["Part Number", "Description", "IMPRES", "Chemistry", "Capacity", "IP Rating", "HazLoc", "Temp Range"],
        label: 'Batteries',
        icon: '',
        sections: [
          {
            title: 'IMPRES 2 Li-Ion Batteries — Ion',
            items: [
              { img: null, pn: 'PMNN4803', desc: 'IMPRES 2 Li-Ion 2820mAh IP68 Slim Battery', note: 'IP68, 114x69x16mm, 145g', checks: {impres: 1, chem: 'Li-Ion', mah: "2820", ip: "IP68", hazloc: 0, temp: "-20 to +60°C"} },
              { img: null, pn: 'PMNN4804', desc: 'IMPRES 2 Li-Ion 2900mAh IP68 TIA4950 Battery', note: 'IP68, UL HazLoc, 114x69x24mm, 171g', checks: {impres: 1, chem: 'Li-Ion', mah: "2900", ip: "IP68", hazloc: 'UL', temp: "-20 to +60°C"} },
              { img: null, pn: 'PMNN4805', desc: 'IMPRES 2 Li-Ion 4400mAh IP68 TIA4950 Battery', note: 'IP68, UL HazLoc, 114x69x27mm, 211g', checks: {impres: 1, chem: 'Li-Ion', mah: "4400", ip: "IP68", hazloc: 'UL', temp: "-20 to +60°C"} },
            ]
          }
        ]
      },
      chargers: {
        cols: ["Part Number", "Description", "IMPRES", "Pockets", "Voltage", "Chemistry"],
        label: 'Chargers',
        icon: '',
        sections: [
          { title: 'Ion Single-Unit Charger', items: [
              { img: null, pn: 'PMPN4526', desc: 'IMPRES Single-Unit Charger for Ion, US/NA Plug', note: 'IMPRES, Li-Ion, 120VAC — Ion specific', checks: {impres: 1, pockets: "1", voltage: "120VAC", chem: "Li-Ion"} },
              { img: null, pn: 'PMPN4540', desc: 'IMPRES Multi-Unit Charger for Ion, US/NA Plug', note: 'IMPRES, 6-pocket, 100-240VAC — Ion specific', checks: {impres: 1, pockets: "6", voltage: "100-240VAC", chem: "Li-Ion"} },
          ] },
          { title: 'Vehicular Charger', items: [
              { img: null, pn: 'NNTN7616', desc: 'IMPRES Vehicular Charger Kit', note: 'IMPRES, Li-Ion/NiMH, hard-wired to vehicle battery', checks: {impres: 1, pockets: "1", voltage: "12VDC", chem: "Li-Ion/NiMH"} },
          ] }
        ]
      },
      carry: {
        label: 'Carry Solutions',
        icon: '',
        sections: [
          {
            title: 'Holsters & Belt Clips',
            items: [
              { img: null, pn: 'PMLN4651', desc: 'Spring Action 2-inch Belt Clip', note: 'Plastic, display/non-display' },
              { img: null, pn: 'PMLN7008', desc: 'Spring Action 2.5-inch Belt Clip', note: 'Plastic, display/non-display' },
            ]
          },
          {
            title: 'Carry Straps & Cases',
            items: [
              { img: null, pn: 'HLN9985', desc: 'Waterproof Bag with Large Strap', note: 'Securely carries MOTOTRBO two-way radios' },
              { img: null, pn: 'NTN5243', desc: 'Adjustable Nylon Carrying Strap', note: 'Nylon' },
              { img: null, pn: 'RLN6486', desc: 'Leather Radio Strap', note: 'Leather' },
              { img: null, pn: 'RLN6487', desc: 'Leather Radio Strap — XL', note: 'Leather' },
            ]
          }
        ]
      },
      cables: {
        label: 'Cables & Programming',
        icon: '',
        sections: [
          {
            title: 'Programming Cables',
            items: [
              { img: null, pn: 'PMKN4115', desc: 'Portable Programming Cable (USB)', note: 'R7 / Ion / R5' },
              { img: null, pn: 'PMKN4117', desc: 'Programming, Test, and Alignment Cable', note: 'R7 / Ion / R5' },
            ]
          },
          {
            title: 'Miscellaneous',
            items: [
              { img: null, pn: '0104058J40', desc: 'Dust Cover', note: 'Accessory port protection' },
            ]
          }
        ]
      }
    }
  },

  'r7ex': {
    name: 'MOTOTRBO R7Ex',
    sub: 'ATEX/IECEx — Zone 1 & 2, Ex ib IIC T4 Gb',
    tags: ['ATEX/IECEx Certified', 'IP67/IP68', 'IMPRES', 'Zone 1 & 2'],
    tagStyles: ['red', 'green', 'orange', 'amber'],
    discontinued: false,
    categories: {
      rsm: {
        cols: ["Part Number", "Description", "IMPRES", "IP", "HazLoc", "Intel Audio", "Ion FW Req", "BT/Wireless", "Full Duplex"],
        label: 'Remote Speaker Mics',
        icon: '',
        sections: [
          {
            title: 'ATEX/IECEx RSMs',
            items: [
              { img: null, pn: 'PMMN4163', desc: 'NS750Ex IMPRES ATEX Omni-Directional RSM, IP66/IP67', note: 'ATEX/IECEx certified; AI-trained Noise Suppression with R7Ex; up to 103 phons', checks: {impres: 1, ip: 'IP67', hazloc: 'ATEX', intel: 0, ion_fw: 0, bt: 0, fulldx: 0} },
              { img: null, pn: 'PMMN4164', desc: 'RM750Ex IMPRES ATEX RSM, IP66/IP68', note: 'ATEX/IECEx certified; AI-trained Noise Suppression with R7Ex; 102 phon max; compact form factor', checks: {impres: 1, ip: 'IP68', hazloc: 'ATEX', intel: 0, ion_fw: 0, bt: 0, fulldx: 0} },
            ]
          },
          {
            title: 'NS750Ex RSM Accessories & Replacement Parts',
            items: [
              { img: null, pn: '0104064J25', desc: 'NS750Ex Replacement Swivel Clip (1 pc/pack)', note: '', checks: {impres: 0, ip: 0, hazloc: 0, intel: 0, ion_fw: 0, bt: 0, fulldx: 0} },
              { img: null, pn: 'PMLN8466', desc: 'NS750Ex Front PTT Paddle Label — Red (10/pack)', note: '' },
              { img: null, pn: 'PMLN8465', desc: 'NS750Ex Front PTT Paddle Label — Blue (10/pack)', note: '' },
              { img: null, pn: 'PMLN8464', desc: 'NS750Ex Front PTT Paddle Label — Green (10/pack)', note: '' },
              { img: null, pn: 'PMLN8468', desc: 'NS750Ex Front PTT Paddle Label — Yellow (10/pack)', note: '' },
              { img: null, pn: 'PMLN8523', desc: 'NS750Ex Front PTT Paddle Label — Orange (10/pack)', note: '' },
              { img: null, pn: 'PMLN8469', desc: 'NS750Ex Front PTT Paddle Label — Silver (10/pack)', note: '' },
              { img: null, pn: 'PMLN8121', desc: 'RM750Ex Low Profile Swivel Clip (1 pc/pack)', note: '' },
            ]
          },
          {
            title: 'Surveillance Earpiece for NS750Ex (3.5mm)',
            items: [
              { img: null, pn: 'PMLN8643', desc: 'Receive-Only Earpiece with Translucent Tube, Extra Loud Audio, 3.5mm Jack (ATEX/IECEx)', note: 'For use with NS750Ex RSM (PMMN4163); 122 dB SPL', checks: {impres: 0, ip: 0, hazloc: 0, intel: 0, ion_fw: 0, bt: 0, fulldx: 0} },
            ]
          },
          {
            title: 'Surveillance Replacement Kits',
            items: [
              { img: null, pn: 'RLN6242', desc: 'Low Noise Kit with Translucent Tube and Clear Rubber Eartip', note: 'For use with PMLN8643', checks: {impres: 0, ip: 0, hazloc: 0, intel: 0, ion_fw: 0, bt: 0, fulldx: 0} },
              { img: null, pn: 'RLN6282', desc: 'Replacement Standard Clear Rubber Eartip (50/pack)', note: 'For RLN6242 / PMLN8643', checks: {impres: 0, ip: 0, hazloc: 0, intel: 0, ion_fw: 0, bt: 0, fulldx: 0} },
              { img: null, pn: 'RLN4760', desc: 'Custom Earpiece — Small, Right Ear', note: '', checks: {impres: 0, ip: 0, hazloc: 0, intel: 0, ion_fw: 0, bt: 0, fulldx: 0} },
              { img: null, pn: 'RLN4761', desc: 'Custom Earpiece — Medium, Right Ear', note: '', checks: {impres: 0, ip: 0, hazloc: 0, intel: 0, ion_fw: 0, bt: 0, fulldx: 0} },
              { img: null, pn: 'RLN4762', desc: 'Custom Earpiece — Large, Right Ear', note: '', checks: {impres: 0, ip: 0, hazloc: 0, intel: 0, ion_fw: 0, bt: 0, fulldx: 0} },
              { img: null, pn: 'RLN4763', desc: 'Custom Earpiece — Small, Left Ear', note: '', checks: {impres: 0, ip: 0, hazloc: 0, intel: 0, ion_fw: 0, bt: 0, fulldx: 0} },
              { img: null, pn: 'RLN4764', desc: 'Custom Earpiece — Medium, Left Ear', note: '', checks: {impres: 0, ip: 0, hazloc: 0, intel: 0, ion_fw: 0, bt: 0, fulldx: 0} },
              { img: null, pn: 'RLN4765', desc: 'Custom Earpiece — Large, Left Ear', note: '', checks: {impres: 0, ip: 0, hazloc: 0, intel: 0, ion_fw: 0, bt: 0, fulldx: 0} },
            ]
          },
        ]
      },
      headsets: {
        cols: ["Part Number", "Description", "IMPRES", "IP Rated", "HazLoc", "Intel Audio", "Ion FW Req", "NRR", "Noise Cancel"],
        label: 'Headsets',
        icon: '',
        sections: [
          {
            title: 'HS700Ex Heavy-Duty Headsets (ATEX/IECEx, IP65/IP67)',
            items: [
              { img: null, pn: 'PMLN8628', desc: 'HS700Ex Heavy-Duty Over-the-Head Headset with NC Boom Mic, IP65/IP67, 26dB NRR', note: 'ATEX/IECEx; Nexus connector; requires PMMN4163 RSM or AD700Ex adapter PMLN8634', checks: {impres: 0, ip: 1, hazloc: 'ATEX', intel: 0, ion_fw: 0, nrr: "26dB", nc: 0} },
              { img: null, pn: 'PMLN8629', desc: 'HS700Ex Heavy-Duty Hard-Hat Attached Headset with NC Boom Mic, IP65/IP67, 24dB NRR', note: 'ATEX/IECEx; hard hat not included', checks: {impres: 0, ip: 1, hazloc: 'ATEX', intel: 0, ion_fw: 0, nrr: "24dB", nc: 0} },
            ]
          },
          {
            title: 'HS750Ex Headsets with Ambient Sound Control (ATEX/IECEx, IP65)',
            items: [
              { img: null, pn: 'PMLN8631', desc: 'HS750Ex Over-the-Head Headset with NC Boom Mic + Ambient Sound Control, IP65, 25dB NRR', note: 'ATEX/IECEx; Nexus connector', checks: {impres: 0, ip: 1, hazloc: 'ATEX', intel: 0, ion_fw: 0, nrr: "25dB", nc: 0} },
              { img: null, pn: 'PMLN8632', desc: 'HS750Ex Hard-Hat Attached Headset with NC Boom Mic + Ambient Sound Control, IP65, 24dB NRR', note: 'ATEX/IECEx; hard hat not included', checks: {impres: 0, ip: 1, hazloc: 'ATEX', intel: 0, ion_fw: 0, nrr: "24dB", nc: 0} },
            ]
          },
          {
            title: 'Bone Conduction Headsets (ATEX/IECEx)',
            items: [
              { img: null, pn: 'PMLN8765', desc: 'HC-10 Helmet-COM Bone Conduction Headset with Single Speaker', note: 'ATEX/IECEx; hard-hat attached; Nexus connector', checks: {impres: 0, ip: 0, hazloc: 'ATEX', intel: 0, ion_fw: 0, nrr: "\u2014", nc: 0} },
              { img: null, pn: 'PMLN8766', desc: 'HC-20 Helmet-COM Bone Conduction Headset with Dual Speaker', note: 'ATEX/IECEx; hard-hat attached; Nexus connector', checks: {impres: 0, ip: 0, hazloc: 'ATEX', intel: 0, ion_fw: 0, nrr: "\u2014", nc: 0} },
            ]
          },
          {
            title: 'PTT Adapter',
            items: [
              { img: null, pn: 'PMLN8634', desc: 'AD700Ex Push-To-Talk Adapter, IP65/IP67 (ATEX/IECEx)', note: 'Connects headsets directly to radio without RSM; large front PTT button; swivel clip', checks: {impres: 0, ip: 1, hazloc: 'ATEX', intel: 0, ion_fw: 0, nrr: "\u2014", nc: 0} },
            ]
          },
          {
            title: 'Headset Replacement Parts',
            items: [
              { img: null, pn: 'PMLN8756', desc: 'Headband for HS700Ex & HS750Ex Series', note: 'For PMLN8628, PMLN8631', checks: {impres: 0, ip: 0, hazloc: 0, intel: 0, ion_fw: 0, nrr: "\u2014", nc: 0} },
              { img: null, pn: 'PMLN8757', desc: 'Boom Microphone for HS700Ex & HS750Ex Series', note: '', checks: {impres: 0, ip: 0, hazloc: 0, intel: 0, ion_fw: 0, nrr: "\u2014", nc: 0} },
              { img: null, pn: 'PMLN8758', desc: 'Boom Microphone Windscreen (5/pack)', note: '', checks: {impres: 0, ip: 0, hazloc: 0, intel: 0, ion_fw: 0, nrr: "\u2014", nc: 0} },
              { img: null, pn: 'PMLN8759', desc: 'Ambient Sound Wind Cover and Grid Holder for HS750Ex (5 sets/pack)', note: 'For PMLN8631, PMLN8632', checks: {impres: 0, ip: 0, hazloc: 0, intel: 0, ion_fw: 0, nrr: "\u2014", nc: 0} },
              { img: null, pn: 'PMLN8761', desc: 'Earmuff Hygiene Kit for HS700Ex Series', note: '', checks: {impres: 0, ip: 0, hazloc: 0, intel: 0, ion_fw: 0, nrr: "\u2014", nc: 0} },
              { img: null, pn: 'PMLN8760', desc: 'Earmuff Hygiene Kit for HS750Ex Series', note: '', checks: {impres: 0, ip: 0, hazloc: 0, intel: 0, ion_fw: 0, nrr: "\u2014", nc: 0} },
              { img: null, pn: 'PMLN8762', desc: 'Belt Clip for AD700Ex PTT Adapter', note: '', checks: {impres: 0, ip: 0, hazloc: 0, intel: 0, ion_fw: 0, nrr: "\u2014", nc: 0} },
            ]
          },
        ]
      },
      batteries: {
        cols: ["Part Number", "Description", "IMPRES", "Chemistry", "Capacity", "IP Rating", "HazLoc", "Temp Range"],
        label: 'Batteries',
        icon: '',
        sections: [
          {
            title: 'ATEX/IECEx Battery',
            items: [
              { img: null, pn: 'PMNN4848', desc: 'IMPRES Li-Ion 2150mAh IP66/IP68 ATEX Battery', note: 'ATEX/IECEx certified', checks: {impres: 1, chem: 'Li-Ion', mah: "2150", ip: "IP66", hazloc: 'ATEX', temp: "-25 to +60°C"} },
            ]
          },
        ]
      },
      chargers: {
        cols: ["Part Number", "Description", "IMPRES", "Pockets", "Voltage", "Chemistry"],
        label: 'Chargers',
        icon: '',
        sections: [
          { title: 'IMPRES Single-Unit Chargers', items: [
              { img: null, pn: 'PMPN4527', desc: 'IMPRES Single-Unit Charger Base Only', note: '100-240VAC', checks: {impres: 1, pockets: "1", voltage: "100-240VAC", chem: "Li-Ion/NiMH"} },
              { img: null, pn: 'PMPN4576', desc: 'IMPRES Single-Unit Charger, US/NA/TW Plug', note: '120VAC', checks: {impres: 1, pockets: "1", voltage: "120VAC", chem: "Li-Ion/NiMH"} },
              { img: null, pn: 'PMPN4577', desc: 'IMPRES Single-Unit Charger, EU Plug', note: '240VAC', checks: {impres: 1, pockets: "1", voltage: "240VAC", chem: "Li-Ion/NiMH"} },
              { img: null, pn: 'PMPN4572', desc: 'IMPRES Single-Unit Charger, UK/HK Plug', note: '240VAC', checks: {impres: 1, pockets: "1", voltage: "240VAC", chem: "Li-Ion/NiMH"} },
              { img: null, pn: 'PMPN4573', desc: 'IMPRES Single-Unit Charger, ARG Plug', note: '240VAC', checks: {impres: 1, pockets: "1", voltage: "240VAC", chem: "Li-Ion/NiMH"} },
              { img: null, pn: 'PMPN4575', desc: 'IMPRES Single-Unit Charger, BZ Plug', note: '240VAC', checks: {impres: 1, pockets: "1", voltage: "240VAC", chem: "Li-Ion/NiMH"} },
              { img: null, pn: 'PMPN4571', desc: 'IMPRES Single-Unit Charger, AUS/NZ Plug', note: '240VAC', checks: {impres: 1, pockets: "1", voltage: "240VAC", chem: "Li-Ion/NiMH"} },
              { img: null, pn: 'PMPN4574', desc: 'IMPRES Single-Unit Charger, KOR Plug', note: '240VAC', checks: {impres: 1, pockets: "1", voltage: "240VAC", chem: "Li-Ion/NiMH"} },
              { img: null, pn: 'PMPN4578', desc: 'IMPRES Single-Unit Charger, JP Plug', note: '100-240VAC', checks: {impres: 1, pockets: "1", voltage: "100-240VAC", chem: "Li-Ion/NiMH"} },
              { img: null, pn: 'PMPN4579', desc: 'IMPRES Single-Unit Charger, CH Plug', note: '240VAC', checks: {impres: 1, pockets: "1", voltage: "240VAC", chem: "Li-Ion/NiMH"} },
              { img: null, pn: 'PMPN4582', desc: 'IMPRES Single-Unit Charger, India Plug', note: '100-240VAC', checks: {impres: 1, pockets: "1", voltage: "100-240VAC", chem: "Li-Ion/NiMH"} },
          ] },
          { title: 'IMPRES Multi-Unit Chargers', items: [
              { img: null, pn: 'PMPN4283', desc: 'IMPRES Multi-Unit Charger (Universal)', note: 'IMPRES, 6-pocket, 100-240VAC', checks: {impres: 1, pockets: "6", voltage: "100-240VAC", chem: "Li-Ion/NiMH"} },
              { img: null, pn: 'PMPN4284', desc: 'IMPRES Multi-Unit Charger, US/NA Plug', note: 'IMPRES, 6-pocket, 100-240VAC', checks: {impres: 1, pockets: "6", voltage: "100-240VAC", chem: "Li-Ion/NiMH"} },
              { img: null, pn: 'PMPN4289', desc: 'IMPRES Multi-Unit Charger, EU Plug', note: 'IMPRES, 6-pocket, 100-240VAC', checks: {impres: 1, pockets: "6", voltage: "100-240VAC", chem: "Li-Ion/NiMH"} },
              { img: null, pn: 'PMPN4290', desc: 'IMPRES Multi-Unit Charger, UK/HK Plug', note: 'IMPRES, 6-pocket, 100-240VAC', checks: {impres: 1, pockets: "6", voltage: "100-240VAC", chem: "Li-Ion/NiMH"} },
              { img: null, pn: 'PMPN4291', desc: 'IMPRES Multi-Unit Charger, ARG Plug', note: 'IMPRES, 6-pocket, 100-240VAC', checks: {impres: 1, pockets: "6", voltage: "100-240VAC", chem: "Li-Ion/NiMH"} },
              { img: null, pn: 'PMPN4292', desc: 'IMPRES Multi-Unit Charger, BZ Plug', note: 'IMPRES, 6-pocket, 100-240VAC', checks: {impres: 1, pockets: "6", voltage: "100-240VAC", chem: "Li-Ion/NiMH"} },
              { img: null, pn: 'PMPN4293', desc: 'IMPRES Multi-Unit Charger, AUS/NZ Plug', note: 'IMPRES, 6-pocket, 100-240VAC', checks: {impres: 1, pockets: "6", voltage: "100-240VAC", chem: "Li-Ion/NiMH"} },
              { img: null, pn: 'PMPN4294', desc: 'IMPRES Multi-Unit Charger, KOR Plug', note: 'IMPRES, 6-pocket, 100-240VAC', checks: {impres: 1, pockets: "6", voltage: "100-240VAC", chem: "Li-Ion/NiMH"} },
              { img: null, pn: 'PMPN4295', desc: 'IMPRES Multi-Unit Charger, JP Plug', note: 'IMPRES, 6-pocket, 100-240VAC', checks: {impres: 1, pockets: "6", voltage: "100-240VAC", chem: "Li-Ion/NiMH"} },
              { img: null, pn: 'PMPN4296', desc: 'IMPRES Multi-Unit Charger, CN Plug', note: 'IMPRES, 6-pocket, 100-240VAC', checks: {impres: 1, pockets: "6", voltage: "100-240VAC", chem: "Li-Ion/NiMH"} },
              { img: null, pn: 'PMPN4462', desc: 'IMPRES Multi-Unit Charger, TW Plug', note: 'IMPRES, 6-pocket, 100-240VAC', checks: {impres: 1, pockets: "6", voltage: "100-240VAC", chem: "Li-Ion/NiMH"} },
              { img: null, pn: 'PMPN4610', desc: 'IMPRES Multi-Unit Charger, BIS Plug', note: 'IMPRES, 6-pocket, 100-240VAC', checks: {impres: 1, pockets: "6", voltage: "100-240VAC", chem: "Li-Ion/NiMH"} },
          ] }
        ]
      },
      carry: {
        label: 'Carry Solutions',
        icon: '',
        sections: [
          {
            title: 'Hard Leather Carry Cases (ATEX)',
            items: [
              { img: null, pn: 'PMLN8636', desc: 'Hard Leather Case, 2.5-inch Swivel Belt Loop — R7Ex Non-Display', note: 'D-rings; straps with snap buttons' },
              { img: null, pn: 'PMLN8637', desc: 'Hard Leather Case, 2.5-inch Swivel Belt Loop — R7Ex Display', note: 'D-rings; straps with snap buttons' },
              { img: null, pn: 'PMLN8641', desc: 'Hard Leather Case, 2.5-inch Fixed Belt Loop — R7Ex Non-Display', note: 'D-rings' },
              { img: null, pn: 'PMLN8642', desc: 'Hard Leather Case, 2.5-inch Fixed Belt Loop — R7Ex Display', note: 'D-rings' },
              { img: null, pn: 'PMLN8722', desc: '2.5-inch Swivel Belt Loop for ATEX Model', note: 'Hard leather replacement' },
              { img: null, pn: 'PMLN6086', desc: '2.5-inch Belt Clip — Display and Non-Display', note: 'Plastic; fixed' },
            ]
          },
          {
            title: 'Straps',
            items: [
              { img: null, pn: 'RLN6486', desc: 'Leather Radio Strap (up to 157.5 cm)', note: '' },
              { img: null, pn: 'RLN6487', desc: 'Leather Radio Strap XL (up to 177.8 cm)', note: '' },
              { img: null, pn: 'NTN5243', desc: 'Adjustable Nylon Carrying Strap (up to 91.4 cm)', note: '' },
              { img: null, pn: 'RLN6488', desc: 'Anti-Sway Strap for Leather Radio Straps', note: '' },
            ]
          },
        ]
      },
      antennas: {
        label: 'Antennas',
        icon: '',
        sections: [
          {
            title: 'UHF Antennas',
            items: [
              { img: null, pn: 'PMAE4079',    desc: 'UHF Wideband Whip Antenna (400-527 MHz), 15cm', note: '' },
              { img: null, pn: 'AN000348A01', desc: 'UHF Stubby Wideband Antenna (400-527 MHz), 9cm', note: '' },
              { img: null, pn: 'AN000350A01', desc: 'UHF Short Stubby Antenna (400-450 MHz), 6cm', note: '' },
              { img: null, pn: 'AN000351A01', desc: 'UHF Short Stubby Antenna (440-490 MHz), 6cm', note: '' },
            ]
          },
          {
            title: '350 MHz Antenna',
            items: [
              { img: null, pn: 'PMAD4139', desc: 'Whip Antenna (350-400 MHz), 16cm', note: '' },
            ]
          },
          {
            title: 'Antenna ID Bands (10/pack)',
            items: [
              { img: null, pn: '32012144001', desc: 'Antenna ID Band — Grey (10/pack)', note: '' },
              { img: null, pn: '32012144002', desc: 'Antenna ID Band — Yellow (10/pack)', note: '' },
              { img: null, pn: '32012144003', desc: 'Antenna ID Band — Green (10/pack)', note: '' },
              { img: null, pn: '32012144004', desc: 'Antenna ID Band — Blue (10/pack)', note: '' },
              { img: null, pn: '32012144005', desc: 'Antenna ID Band — Purple (10/pack)', note: '' },
            ]
          },
        ]
      },
      misc: {
        label: 'Miscellaneous',
        icon: '',
        sections: [
          {
            title: 'Miscellaneous Accessories',
            items: [
              { img: null, pn: '15012157001', desc: 'Accessory Connector Dust Cover', note: '' },
              { img: null, pn: 'PMKN4160',    desc: 'ATEX USB Data Cable', note: '' },
              { img: null, pn: 'PMLN8700',    desc: 'Back Bezel Kit with US RFID Tag', note: '' },
              { img: null, pn: 'PMLN8707',    desc: 'Back Bezel Kit with EU RFID Tag', note: '' },
              { img: null, pn: 'PMLN8699',    desc: 'Back Bezel Kit with NFC Tag', note: '' },
              { img: null, pn: 'PMLN8750',    desc: 'ATEX Approved Identification Label (50/pack)', note: '' },
            ]
          },
        ]
      },
    }
  }
};
const RADIOS = RADIOS_DATA;
