/* MOTOTRBO R7, Ion, R5, R7Ex — Product Data — r7-data.js */

const RADIOS_DATA = {'r7': {
    name: 'MOTOTRBO R7',
    sub: 'Professional DMR Portable',
    tags: ['DMR Tier II/III', 'IP68 Rugged', 'IMPRES', 'Bluetooth 5.0', 'Wi-Fi'],
    tagStyles: ['', 'green', 'orange', '', ''],
    categories: {
      rsm: {
        cols: ["Part Number", "Description", "IMPRES", "IP68", "UL HazLoc", "Intel Audio", "Ion FW Req", "BT/Wireless", "Full Duplex"],
        label: 'Remote Speaker Mics',
        icon: '',
        sections: [
          {
            title: 'RM Series — GCAI Mini Connector (R7 / Ion)',
            items: [
              { pn: 'PMMN4128', desc: 'RM780 IMPRES Windporting RSM, Large, Work-When-Wet', note: 'IP68, UL HazLoc, 2 prog buttons + emergency, intelligent audio', checks: {impres: 1, ip68: 1, ul: 1, intel: 1, ion_fw: 0, bt: 0, fulldx: 0} },
              { pn: 'PMMN4140', desc: 'RM760 IMPRES Windporting RSM, Large Basic, Work-When-Wet', note: 'IP68, UL HazLoc, intelligent audio — requires Ion firmware M-Ion.2022.03+', checks: {impres: 1, ip68: 1, ul: 1, intel: 1, ion_fw: 1, bt: 0, fulldx: 0} },
              { pn: 'PMMN4131', desc: 'RM730 IMPRES Windporting RSM, Small', note: 'IP68, UL HazLoc, emergency button — requires Ion firmware M-Ion.2022.03+', checks: {impres: 1, ip68: 1, ul: 1, intel: 0, ion_fw: 1, bt: 0, fulldx: 0} },
            ]
          },
          {
            title: 'NS750 Series — Omni-Directional RSM (R7)',
            items: [
              { pn: 'PMMN4150', desc: 'NS750 IMPRES Omni-Directional RSM, Large Front PTT + Side PTT, Long Cable', note: 'IP68, UL HazLoc, smart audio switching, work-when-wet — EMEA only', checks: {impres: 1, ip68: 1, ul: 1, intel: 0, ion_fw: 0, bt: 0, fulldx: 0} },
              { pn: 'PMMN4151', desc: 'NS750 IMPRES Omni-Directional RSM, Large Front PTT + Side PTT, Short Cable', note: 'IP68, UL HazLoc, smart audio switching, work-when-wet — EMEA only', checks: {impres: 1, ip68: 1, ul: 1, intel: 0, ion_fw: 0, bt: 0, fulldx: 0} },
              { pn: 'PMMN4150_BLK', desc: 'NS750 IMPRES Omni-Directional RSM, Black, Long Cable', note: 'IP68, UL HazLoc, smart audio switching, work-when-wet', checks: {impres: 1, ip68: 1, ul: 1, intel: 0, ion_fw: 0, bt: 0, fulldx: 0} },
              { pn: 'PMMN4151_BLK', desc: 'NS750 IMPRES Omni-Directional RSM, Black, Short Cable', note: 'IP68, UL HazLoc, smart audio switching, work-when-wet', checks: {impres: 1, ip68: 1, ul: 1, intel: 0, ion_fw: 0, bt: 0, fulldx: 0} },
            ]
          },
          {
            title: 'Wireless RSM',
            items: [
              { pn: 'PMMN4127', desc: 'WM500 Wireless Remote Speaker Microphone', note: 'Operations Critical BT, 18hr battery, IP67, requires R7 fw R04.00.00+', checks: {impres: 0, ip68: 0, ul: 0, intel: 0, ion_fw: 0, bt: 1, fulldx: 0} },
            ]
          },
          {
            title: 'RSM Replacement Parts',
            items: [
              { pn: 'PMKN4232', desc: 'Replacement Coil Cord Kit', note: 'For PMMN4128, PMMN4131, PMMN4140', checks: {impres: 0, ip68: 0, ul: 0, intel: 0, ion_fw: 0, bt: 0, fulldx: 0} },
              { pn: 'PMLN8121', desc: 'Low Profile Swivel Clip', note: 'For PMMN4128, PMMN4131, PMMN4140', checks: {impres: 0, ip68: 0, ul: 0, intel: 0, ion_fw: 0, bt: 0, fulldx: 0} },
              { pn: 'PMLN8122', desc: 'Replacement Dust Cover (10/pack)', note: 'For PMMN4128, PMMN4140', checks: {impres: 0, ip68: 0, ul: 0, intel: 0, ion_fw: 0, bt: 0, fulldx: 0} },
              { pn: 'PMLN8253', desc: 'Replacement Dust Cover (10/pack)', note: 'For PMMN4131', checks: {impres: 0, ip68: 0, ul: 0, intel: 0, ion_fw: 0, bt: 0, fulldx: 0} },
              { pn: '0104068J78', desc: 'Replacement Swivel Clip', note: 'For NS750 (PMMN4150/4151)', checks: {impres: 0, ip68: 0, ul: 0, intel: 0, ion_fw: 0, bt: 0, fulldx: 0} },
              { pn: 'PMLN8466', desc: 'NS750 Color ID Labels — Red (10/pack)', note: '', checks: {impres: 0, ip68: 0, ul: 0, intel: 0, ion_fw: 0, bt: 0, fulldx: 0} },
              { pn: 'PMLN8468', desc: 'NS750 Color ID Labels — Yellow (10/pack)', note: '', checks: {impres: 0, ip68: 0, ul: 0, intel: 0, ion_fw: 0, bt: 0, fulldx: 0} },
              { pn: 'PMLN8465', desc: 'NS750 Color ID Labels — Blue (10/pack)', note: '', checks: {impres: 0, ip68: 0, ul: 0, intel: 0, ion_fw: 0, bt: 0, fulldx: 0} },
              { pn: 'PMLN8469', desc: 'NS750 Color ID Labels — Silver (10/pack)', note: '', checks: {impres: 0, ip68: 0, ul: 0, intel: 0, ion_fw: 0, bt: 0, fulldx: 0} },
              { pn: 'PMLN8464', desc: 'NS750 Color ID Labels — Green (10/pack)', note: '', checks: {impres: 0, ip68: 0, ul: 0, intel: 0, ion_fw: 0, bt: 0, fulldx: 0} },
              { pn: 'PMLN8523', desc: 'NS750 Color ID Labels — Orange (10/pack)', note: '', checks: {impres: 0, ip68: 0, ul: 0, intel: 0, ion_fw: 0, bt: 0, fulldx: 0} },
            ]
          },
          {
            title: 'NS750 Secondary Audio (Nexus Connector)',
            items: [
              { pn: 'PMLN7188', desc: 'Earpiece with Translucent Tube and Eartip', note: '3.5mm jack, transmit only, UL HazLoc', checks: {impres: 0, ip68: 0, ul: 1, intel: 0, ion_fw: 0, bt: 0, fulldx: 0} },
              { pn: 'GMMN4585', desc: 'Savox HC-1 Helmet Headset — Bone Mic, Single Speaker', note: 'Nexus connector, transmit & receive', checks: {impres: 0, ip68: 0, ul: 0, intel: 0, ion_fw: 0, bt: 0, fulldx: 0} },
              { pn: 'GMMN4584', desc: 'Savox HC-2 Helmet Headset — Bone Mic, Dual Speaker', note: 'Nexus connector, transmit & receive', checks: {impres: 0, ip68: 0, ul: 0, intel: 0, ion_fw: 0, bt: 0, fulldx: 0} },
              { pn: 'PMLN8265', desc: 'Over-The-Head Headset with Nexus Connector', note: 'Transmit & receive', checks: {impres: 0, ip68: 0, ul: 0, intel: 0, ion_fw: 0, bt: 0, fulldx: 0} },
              { pn: 'PMLN8266', desc: 'Backend Headset with Nexus Connector', note: 'Transmit & receive', checks: {impres: 0, ip68: 0, ul: 0, intel: 0, ion_fw: 0, bt: 0, fulldx: 0} },
              { pn: 'PMLN8267', desc: 'Hard Hat Attached Headset with Nexus Connector', note: 'Transmit & receive', checks: {impres: 0, ip68: 0, ul: 0, intel: 0, ion_fw: 0, bt: 0, fulldx: 0} },
            ]
          },
          {
            title: 'RSM Earpieces (3.5mm)',
            items: [
              { pn: 'PMLN8120', desc: 'Receive-Only Earpiece with Translucent Tube, Loud Audio', note: 'For RM780/RM760/RM730 (PMMN4128/4140/4131), UL HazLoc', checks: {impres: 0, ip68: 0, ul: 1, intel: 0, ion_fw: 0, bt: 0, fulldx: 0} },
              { pn: 'PMLN7560', desc: 'Receive-Only Earpiece with Translucent Tube and Rubber Eartip', note: 'For WM500 (PMMN4127)', checks: {impres: 0, ip68: 0, ul: 0, intel: 0, ion_fw: 0, bt: 1, fulldx: 0} },
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
              { pn: 'PMMN4127', desc: 'WM500 Wireless Remote Speaker Microphone', note: 'Operations Critical BT, 18hr, IP67, omni windporting mic, requires fw R04.00.00+', checks: {ip: 1, bt: 1, fulldx: 0, nfc: 0, emg: 0, fw_req: "r04.00.00"} },
              { pn: 'PMLN8123', desc: 'Operations Critical Wireless BT Earpiece with PTT', note: 'Over-ear swivel, boom mic, 8hr battery, full duplex with Ion, standard pairing, 30ft', checks: {ip: 0, bt: 1, fulldx: 1, nfc: 0, emg: 0, fw_req: "\u2014"} },
            ]
          },
          {
            title: 'WP300 Wireless Bluetooth PTT Pod',
            items: [
              { pn: 'PMLN8298', desc: 'WP300 Wireless Bluetooth PTT Pod', note: 'IP67, 18hr battery, NFC, 30m range, emergency button — requires fw R02.25.02.1000+', checks: {ip: 1, bt: 1, fulldx: 0, nfc: 1, emg: 1, fw_req: "r02.25.02.1000"} },
              { pn: 'PMLN8401', desc: 'WP300 Wireless Bluetooth PTT Pod with Surveillance Earpiece', note: 'IP67, 18hr battery, NFC, 30m range', checks: {ip: 1, bt: 1, fulldx: 0, nfc: 1, emg: 0, fw_req: "\u2014"} },
            ]
          },
          {
            title: 'WP300 Optional Earpieces',
            items: [
              { pn: 'PMLN8190', desc: 'Surveillance Earpiece with Translucent Tube', note: 'Clear rubber eartip', checks: {ip: 0, bt: 0, fulldx: 0, nfc: 0, emg: 0, fw_req: "\u2014"} },
              { pn: 'PMLN8125', desc: 'Swivel Earpiece with Eartip, Short Cord', note: 'Over-the-ear', checks: {ip: 0, bt: 0, fulldx: 0, nfc: 0, emg: 0, fw_req: "\u2014"} },
              { pn: 'PMLN8077', desc: 'Swivel Earpiece with Eartip, Long Cord', note: 'Over-the-ear', checks: {ip: 0, bt: 0, fulldx: 0, nfc: 0, emg: 0, fw_req: "\u2014"} },
            ]
          },
          {
            title: 'WP300 Replacement Parts',
            items: [
              { pn: 'PMLN8332', desc: 'Vehicle Mount Option for WP300', note: 'Steering wheel / motorcycle handlebar attachment', checks: {ip: 0, bt: 0, fulldx: 0, nfc: 0, emg: 0, fw_req: "\u2014"} },
              { pn: 'PMLN6246', desc: 'Replacement Swivel Clip', note: '', checks: {ip: 0, bt: 0, fulldx: 0, nfc: 0, emg: 0, fw_req: "\u2014"} },
              { pn: 'PMLN8068', desc: 'Replacement Eartip, Small (5/pack)', note: '', checks: {ip: 0, bt: 0, fulldx: 0, nfc: 0, emg: 0, fw_req: "\u2014"} },
              { pn: 'PMLN8069', desc: 'Replacement Eartip, Medium (5/pack)', note: '', checks: {ip: 0, bt: 0, fulldx: 0, nfc: 0, emg: 0, fw_req: "\u2014"} },
              { pn: 'PMLN8070', desc: 'Replacement Eartip, Large (5/pack)', note: '', checks: {ip: 0, bt: 0, fulldx: 0, nfc: 0, emg: 0, fw_req: "\u2014"} },
              { pn: 'PMLN8092', desc: 'Replacement Translucent Tube with Clear Rubber Eartip', note: '', checks: {ip: 0, bt: 0, fulldx: 0, nfc: 0, emg: 0, fw_req: "\u2014"} },
            ]
          }
        ]
      },
      surveillance: {
        cols: ["Part Number", "Description", "IMPRES", "UL HazLoc", "Intel Audio", "Full Duplex", "Ion FW Req", "Wires"],
        label: 'Surveillance & Earpieces',
        icon: '',
        sections: [
          {
            title: 'IMPRES Surveillance Kits — R7 & Ion (Extra Loud)',
            items: [
              { pn: 'PMLN8341', desc: 'IMPRES 1-Wire Surveillance Kit, Translucent Tube, Extra Loud, Black', note: 'Intelligent audio, full duplex with Ion, UL HazLoc', checks: {impres: 1, ul: 1, intel: 1, fulldx: 1, ion_fw: 0, wires: "1"} },
              { pn: 'PMLN8342', desc: 'IMPRES 2-Wire Surveillance Kit, Translucent Tube, Extra Loud, Black', note: 'Intelligent audio, full duplex with Ion, UL HazLoc', checks: {impres: 1, ul: 1, intel: 1, fulldx: 1, ion_fw: 0, wires: "2"} },
              { pn: 'PMLN8343', desc: 'IMPRES 3-Wire Surveillance Kit, Translucent Tube, Extra Loud, Black', note: 'Intelligent audio, full duplex with Ion, UL HazLoc', checks: {impres: 1, ul: 1, intel: 1, fulldx: 1, ion_fw: 0, wires: "3"} },
              { pn: 'PMLN8295', desc: 'IMPRES 2-Wire Swivel Earhook with Removable Eartip, Loud, Black', note: 'Intelligent audio, full duplex with Ion — requires Ion fw M-Ion.2022.03+', checks: {impres: 1, ul: 0, intel: 1, fulldx: 1, ion_fw: 1, wires: "2"} },
              { pn: 'PMLN8337', desc: 'IMPRES 1-Wire Single Earbud with Removable Earhook, Loud, Black', note: 'Intelligent audio, full duplex with Ion — requires Ion fw M-Ion.2022.03+', checks: {impres: 1, ul: 0, intel: 1, fulldx: 1, ion_fw: 1, wires: "1"} },
            ]
          },
          {
            title: 'IMPRES Surveillance Kits — R7 Only (Loud)',
            items: [
              { pn: 'PMLN8644', desc: 'IMPRES 1-Wire Surveillance Kit, Translucent Tube, Loud, Black', note: 'Intelligent audio, R7 only', checks: {impres: 1, ul: 0, intel: 1, fulldx: 0, ion_fw: 0, wires: "1"} },
              { pn: 'PMLN8645', desc: 'IMPRES 2-Wire Surveillance Kit, Translucent Tube, Loud, Black', note: 'Intelligent audio, R7 only', checks: {impres: 1, ul: 0, intel: 1, fulldx: 0, ion_fw: 0, wires: "2"} },
              { pn: 'PMLN8646', desc: 'IMPRES 3-Wire Surveillance Kit, Translucent Tube, Loud, Black', note: 'Intelligent audio, R7 only', checks: {impres: 1, ul: 0, intel: 1, fulldx: 0, ion_fw: 0, wires: "3"} },
            ]
          },
          {
            title: 'Surveillance Replacement Parts',
            items: [
              { pn: 'PMLN8092', desc: 'Replacement Quick-Disconnect Translucent Tube with Rubber Eartip', note: 'Compatible with PMLN8120/8341/8342/8343', checks: {impres: 0, ul: 0, intel: 0, fulldx: 0, ion_fw: 0, wires: "\u2014"} },
              { pn: 'PMLN8068', desc: 'Replacement Rubber Eartip, Small (5/pack)', note: 'Black rubber — for PMLN8295', checks: {impres: 0, ul: 0, intel: 0, fulldx: 0, ion_fw: 0, wires: "\u2014"} },
              { pn: 'PMLN8069', desc: 'Replacement Rubber Eartip, Medium (5/pack)', note: 'Black rubber — for PMLN8295', checks: {impres: 0, ul: 0, intel: 0, fulldx: 0, ion_fw: 0, wires: "\u2014"} },
              { pn: 'PMLN8070', desc: 'Replacement Rubber Eartip, Large (5/pack)', note: 'Black rubber — for PMLN8295', checks: {impres: 0, ul: 0, intel: 0, fulldx: 0, ion_fw: 0, wires: "\u2014"} },
              { pn: 'PMLN8363', desc: 'Replacement Rubber Sleeve, Small (25/pack)', note: 'For PMLN8337', checks: {impres: 0, ul: 0, intel: 0, fulldx: 0, ion_fw: 0, wires: "\u2014"} },
              { pn: 'PMLN8364', desc: 'Replacement Rubber Sleeve, Medium (25/pack)', note: 'For PMLN8337', checks: {impres: 0, ul: 0, intel: 0, fulldx: 0, ion_fw: 0, wires: "\u2014"} },
              { pn: 'PMLN8365', desc: 'Replacement Rubber Sleeve, Large (25/pack)', note: 'For PMLN8337', checks: {impres: 0, ul: 0, intel: 0, fulldx: 0, ion_fw: 0, wires: "\u2014"} },
            ]
          }
        ]
      },
      headsets: {
        cols: ["Part Number", "Description", "IMPRES", "IP Rated", "UL HazLoc", "Intel Audio", "Ion FW Req", "NRR", "Noise Cancel"],
        label: 'Headsets',
        icon: '',
        sections: [
          {
            title: 'Heavy Duty Headsets — IMPRES (R7 & Ion)',
            items: [
              { pn: 'PMLN8085', desc: 'Heavy Duty Behind-the-Head Headset, Noise-Canceling Boom Mic, IP54', note: '24dB NRR, dual-muff, IMPRES intelligent audio, UL HazLoc, PTT on ear cup', checks: {impres: 1, ip: 1, ul: 1, intel: 1, ion_fw: 0, nrr: "24dB", nc: 1} },
              { pn: 'PMLN8086', desc: 'Heavy Duty Over-the-Head Headset, Noise-Canceling Boom Mic, IP54', note: '24dB NRR, dual-muff, IMPRES intelligent audio, UL HazLoc, PTT on ear cup', checks: {impres: 1, ip: 1, ul: 1, intel: 1, ion_fw: 0, nrr: "24dB", nc: 1} },
            ]
          },
          {
            title: '3M Peltor CH-3 Series (R7 & Ion)',
            items: [
              { pn: 'PMLN8265', desc: 'CH-3 Over-the-Head Headset with Nexus Connector', note: '26dB NRR, dual-ear, boom mic — requires PTT adapter PMLN8297. Ion fw M-Ion.2022.03+', checks: {impres: 0, ip: 0, ul: 0, intel: 0, ion_fw: 1, nrr: "26dB", nc: 0} },
              { pn: 'PMLN8266', desc: 'CH-3 Neckband Headset with Nexus Connector', note: '24dB NRR, dual-ear, boom mic — requires PTT adapter PMLN8297. Ion fw M-Ion.2022.03+', checks: {impres: 0, ip: 0, ul: 0, intel: 0, ion_fw: 1, nrr: "24dB", nc: 0} },
              { pn: 'PMLN8267', desc: 'CH-3 Hard Hat Attached Headset with Nexus Connector (hat not included)', note: '24dB NRR, dual-ear, boom mic — requires PTT adapter PMLN8297. Ion fw M-Ion.2022.03+', checks: {impres: 0, ip: 0, ul: 0, intel: 0, ion_fw: 1, nrr: "24dB", nc: 0} },
              { pn: 'PMLN8297', desc: 'PTT Nexus Adapter (required for CH-3 headsets above)', note: 'Ion fw M-Ion.2022.03+', checks: {impres: 0, ip: 0, ul: 0, intel: 0, ion_fw: 1, nrr: "\u2014", nc: 0} },
            ]
          }
        ]
      },
      batteries: {
        cols: ["Part Number", "Description", "IMPRES", "Capacity", "IP Rating", "UL HazLoc", "Temp Range"],
        label: 'Batteries',
        icon: '',
        sections: [
          {
            title: 'IMPRES Li-Ion Batteries — R7',
            items: [
              { pn: 'PMNN4807', desc: 'IMPRES Li-Ion 2200mAh IP68 Slim Battery', note: 'IP66/IP68, -20°C to +60°C, 116×55×17mm, 118g', checks: {impres: 1, mah: "2200", ip: "IP68", ul: 0, temp: "\u2014"} },
              { pn: 'PMNN4809', desc: 'IMPRES Li-Ion 2850mAh IP68 Slim Battery', note: 'IP66/IP68, -20°C to +60°C, 116×55×17mm, 135g', checks: {impres: 1, mah: "2850", ip: "IP68", ul: 0, temp: "\u2014"} },
              { pn: 'PMNN4810', desc: 'IMPRES Li-Ion 3200mAh IP68 TIA4950 Battery', note: 'IP66/IP68, UL HazLoc, -20°C to +60°C, 116×55×23mm, 168g', checks: {impres: 1, mah: "3200", ip: "IP68", ul: 1, temp: "\u2014"} },
              { pn: 'PMNN4603', desc: 'IMPRES Li-Ion 3200mAh IP68 Battery', note: 'IP66/IP68, -20°C to +60°C, 116×55×23mm, 168g', checks: {impres: 1, mah: "3200", ip: "IP68", ul: 0, temp: "\u2014"} },
            ]
          }
        ]
      },
      chargers: {
        cols: ["Part Number", "Description", "IMPRES", "Pockets", "Recond."],
        label: 'Chargers',
        icon: '',
        sections: [
{
  title: 'IMPRES Single-Unit Chargers',
  items: [
    { pn: 'PMPN4576A', desc: 'IMPRES Single-Unit Charger, US/CAN Plug', note: 'IMPRES, Li-Ion/NiMH, 120VAC', checks: {impres: 1, pockets: "1", recondn: 0} },
    { pn: 'PMPN4573A', desc: 'IMPRES Single-Unit Charger, ARG Plug', note: 'IMPRES, Li-Ion/NiMH, 240VAC', checks: {impres: 1, pockets: "1", recondn: 0} },
    { pn: 'PMPN4575A', desc: 'IMPRES Single-Unit Charger, BRZ Plug', note: 'IMPRES, Li-Ion/NiMH, 100-240VAC', checks: {impres: 1, pockets: "1", recondn: 0} },
    { pn: 'PMPN4572A', desc: 'IMPRES Single-Unit Charger, UK Plug', note: 'IMPRES, Li-Ion/NiMH, 240VAC', checks: {impres: 1, pockets: "1", recondn: 0} },
    { pn: 'PMPN4577A', desc: 'IMPRES Single-Unit Charger, EURO Plug', note: 'IMPRES, Li-Ion/NiMH, 240VAC', checks: {impres: 1, pockets: "1", recondn: 0} },
    { pn: 'PMPN4571A', desc: 'IMPRES Single-Unit Charger, AU/NZ Plug', note: 'IMPRES, Li-Ion/NiMH, 240VAC', checks: {impres: 1, pockets: "1", recondn: 0} },
    { pn: 'PMPN4578A', desc: 'IMPRES Single-Unit Charger, JAP Plug', note: 'IMPRES, Li-Ion/NiMH, 100-240VAC', checks: {impres: 1, pockets: "1", recondn: 0} },
    { pn: 'PMPN4574A', desc: 'IMPRES Single-Unit Charger, KOR Plug', note: 'IMPRES, Li-Ion/NiMH, 240VAC', checks: {impres: 1, pockets: "1", recondn: 0} },
    { pn: 'PMPN4579A', desc: 'IMPRES Single-Unit Charger, CHN Plug', note: 'IMPRES, Li-Ion/NiMH, 240VAC', checks: {impres: 1, pockets: "1", recondn: 0} },
    { pn: 'PMPN4582A', desc: 'IMPRES Single-Unit Charger, INDIA Plug', note: 'IMPRES, Li-Ion/NiMH, 100-240VAC', checks: {impres: 1, pockets: "1", recondn: 0} },
  ]
},
          {
            title: 'IMPRES Multi-Unit Chargers',
            items: [
              { pn: 'PMPN4560', desc: 'IMPRES Multi-Unit Charger, US/NA Plug', note: 'IMPRES, 6-pocket, 100-240VAC, 117×445×170mm', checks: {impres: 1, pockets: "6", recondn: 0} },
              { pn: 'PMPN4561', desc: 'IMPRES Multi-Unit Charger, EU Plug', note: 'IMPRES, 6-pocket, 100-240VAC', checks: {impres: 1, pockets: "6", recondn: 0} },
              { pn: 'PMPN4562', desc: 'IMPRES Multi-Unit Charger, UK/HK Plug', note: 'IMPRES, 6-pocket, 100-240VAC', checks: {impres: 1, pockets: "6", recondn: 0} },
              { pn: 'PMPN4563', desc: 'IMPRES Multi-Unit Charger, AUS/NZ Plug', note: 'IMPRES, 6-pocket, 100-240VAC', checks: {impres: 1, pockets: "6", recondn: 0} },
            ]
          },
          {
            title: 'Vehicular Charger',
            items: [
              { pn: 'NNTN7616', desc: 'IMPRES Vehicular Charger Kit', note: 'IMPRES, Li-Ion/NiMH, hard-wired to vehicle battery, 133×88×88mm', checks: {impres: 1, pockets: "1", recondn: 0} },
            ]
          }
        ]
      },
      carry: {
        label: 'Carry Solutions',
        icon: '',
        sections: [
          {
            title: 'Holsters & Belt Clips',
            items: [
              { pn: 'PMLN7989', desc: 'Nylon Swivel Holster with 3-inch Belt Loop', note: 'Display model' },
              { pn: 'PMLN7990', desc: 'Nylon Fixed Holster with 3-inch Belt Loop', note: 'Display model' },
              { pn: 'PMLN4651', desc: 'Spring Action 2-inch Belt Clip', note: 'Plastic, display/non-display' },
              { pn: 'PMLN7008', desc: 'Spring Action 2.5-inch Belt Clip', note: 'Plastic, display/non-display' },
            ]
          },
          {
            title: 'Carry Straps & Cases',
            items: [
              { pn: 'HLN9985',  desc: 'Waterproof Bag with Large Strap', note: 'Securely carries MOTOTRBO two-way radios' },
              { pn: 'NTN5243',  desc: 'Adjustable Nylon Carrying Strap', note: 'Nylon' },
              { pn: 'RLN6486',  desc: 'Leather Radio Strap', note: 'Leather' },
              { pn: 'RLN6487',  desc: 'Leather Radio Strap — XL', note: 'Leather' },
              { pn: 'RLN6488',  desc: 'Anti-Sway Strap for Leather Radio Straps', note: 'Leather' },
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
              { pn: 'PMAE4079', desc: 'UHF/GPS Wideband Slim Whip Antenna', note: '400–527 MHz, 15cm' },
              { pn: 'PMAE4069', desc: 'UHF/GPS Stubby Antenna', note: '403–450 MHz, 9cm' },
              { pn: 'PMAE4070', desc: 'UHF/GPS Stubby Antenna', note: '440–490 MHz, 9cm' },
              { pn: 'PMAE4071', desc: 'UHF/GPS Stubby Antenna', note: '470–527 MHz, 9cm' },
              { pn: 'AN000348A01', desc: 'UHF Stubby Wideband Antenna', note: '400–527 MHz, 9cm' },
            ]
          },
          {
            title: 'VHF Antennas',
            items: [
              { pn: 'PMAD4117', desc: 'VHF/GPS Helical Antenna', note: '136–155 MHz, 15cm' },
              { pn: 'PMAD4116', desc: 'VHF/GPS Helical Antenna', note: '144–165 MHz, 15cm' },
              { pn: 'PMAD4118', desc: 'VHF/GPS Helical Antenna', note: '152–174 MHz, 15cm' },
              { pn: 'PMAD4147', desc: 'VHF/GPS Wideband Slim Whip Antenna', note: '136–174 MHz, 20cm' },
              { pn: 'PMAD4119', desc: 'VHF/GPS Stubby Antenna', note: '136–148 MHz, 9cm' },
              { pn: 'PMAD4120', desc: 'VHF/GPS Stubby Antenna', note: '146–160 MHz, 9cm' },
              { pn: 'PMAD4121', desc: 'VHF Stubby Antenna', note: '160–174 MHz, 9cm' },
            ]
          },
          {
            title: 'Antenna Accessories',
            items: [
              { pn: '32012144001', desc: 'Antenna ID Bands — Gray (10/pack)', note: '' },
              { pn: '32012144002', desc: 'Antenna ID Bands — Yellow (10/pack)', note: '' },
              { pn: '32012144003', desc: 'Antenna ID Bands — Green (10/pack)', note: '' },
              { pn: '32012144004', desc: 'Antenna ID Bands — Blue (10/pack)', note: '' },
              { pn: '32012144005', desc: 'Antenna ID Bands — Purple (10/pack)', note: '' },
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
              { pn: 'PMKN4115', desc: 'Portable Programming Cable (USB)', note: 'R7 / Ion / R5' },
              { pn: 'PMKN4117', desc: 'Programming, Test, and Alignment Cable', note: 'R7 / Ion / R5' },
            ]
          },
          {
            title: 'Miscellaneous',
            items: [
              { pn: '0104058J40', desc: 'Dust Cover', note: 'Accessory port protection' },
              { pn: 'PMLN8671', desc: 'NFC Kit', note: '' },
              { pn: 'PMLN8672', desc: 'RFID Tag Kit (EU)', note: '' },
              { pn: 'PMLN8673', desc: 'RFID Tag Kit (US)', note: '' },
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
        cols: ["Part Number", "Description", "IMPRES", "IP68", "UL HazLoc", "Intel Audio", "Ion FW Req", "BT/Wireless", "Full Duplex"],
        label: 'Remote Speaker Mics',
        icon: '',
        sections: [
          {
            title: 'RM Series — New GCAI Mini Connector',
            items: [
              { pn: 'PMMN4170', desc: 'RM560 IMPRES Windporting RSM, Large, Work-When-Wet', note: 'IP67, UL HazLoc, AI-trained suppression, intelligent audio, emergency button, prog button', checks: {impres: 1, ip68: 0, ul: 1, intel: 1, ion_fw: 0, bt: 0, fulldx: 0} },
              { pn: 'PMMN4171', desc: 'RM530 IMPRES Windporting RSM, Small, Work-When-Wet', note: 'IP67, UL HazLoc, AI-trained suppression, intelligent audio, emergency button', checks: {impres: 1, ip68: 0, ul: 1, intel: 1, ion_fw: 0, bt: 0, fulldx: 0} },
            ]
          },
          {
            title: 'Standard RSMs (Legacy Connector)',
            items: [
              { pn: 'PMMN4071', desc: 'IMPRES Noise-Canceling RSM, Large', note: 'IP54, UL HazLoc, noise-canceling, volume control high/low', checks: {impres: 1, ip68: 0, ul: 1, intel: 0, ion_fw: 0, bt: 0, fulldx: 0} },
              { pn: 'PMMN4073', desc: 'IMPRES Windporting RSM, Small', note: 'IP55, UL HazLoc, windporting, volume control high/low', checks: {impres: 1, ip68: 0, ul: 1, intel: 0, ion_fw: 0, bt: 0, fulldx: 0} },
              { pn: 'PMMN4075', desc: 'Windporting RSM, Small, Submersible', note: 'IP57, UL HazLoc, windporting', checks: {impres: 0, ip68: 0, ul: 1, intel: 0, ion_fw: 0, bt: 0, fulldx: 0} },
              { pn: 'PMMN4076', desc: 'Windporting RSM, Small', note: 'IP54, UL HazLoc, windporting, prog button', checks: {impres: 0, ip68: 0, ul: 1, intel: 0, ion_fw: 0, bt: 0, fulldx: 0} },
              { pn: 'PMMN4108', desc: 'Windporting RSM', note: 'IP67, windporting, volume control high/low', checks: {impres: 0, ip68: 0, ul: 0, intel: 0, ion_fw: 0, bt: 0, fulldx: 0} },
            ]
          },
          {
            title: 'Wireless RSM',
            items: [
              { pn: 'PMMN4127', desc: 'WM500 Wireless Remote Speaker Microphone', note: 'Operations Critical BT, 18hr, IP67, omni windporting mic, 30ft range', checks: {impres: 0, ip68: 0, ul: 0, intel: 0, ion_fw: 0, bt: 1, fulldx: 0} },
            ]
          },
          {
            title: 'RM560 / RM530 Replacement Parts',
            items: [
              { pn: 'PMLN8121', desc: 'Low Profile Swivel Clip', note: 'For RM560 / RM530', checks: {impres: 0, ip68: 0, ul: 0, intel: 0, ion_fw: 0, bt: 0, fulldx: 0} },
              { pn: 'PMLN8122', desc: 'Replacement Dust Cover (10/pack)', note: 'For RM560 / RM530', checks: {impres: 0, ip68: 0, ul: 0, intel: 0, ion_fw: 0, bt: 0, fulldx: 0} },
              { pn: 'PMLN8120', desc: 'Receive-Only Loud Audio Earpiece, Translucent Tube, 3.5mm', note: 'For RM560 / RM530', checks: {impres: 0, ip68: 0, ul: 0, intel: 0, ion_fw: 0, bt: 0, fulldx: 0} },
              { pn: 'PMLN8652', desc: 'Receive-Only Loud Audio Earpiece, Translucent Tube, 3.5mm', note: 'Alternate version for RM560 / RM530', checks: {impres: 0, ip68: 0, ul: 0, intel: 0, ion_fw: 0, bt: 0, fulldx: 0} },
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
              { pn: 'PMMN4127', desc: 'WM500 Wireless Remote Speaker Microphone', note: 'Operations Critical BT, 18hr, IP67, standard pairing, 30ft range', checks: {ip: 1, bt: 1, fulldx: 0, nfc: 0, emg: 0, fw_req: "\u2014"} },
            ]
          },
          {
            title: 'WP300 Wireless Bluetooth PTT Pod',
            items: [
              { pn: 'PMLN8298', desc: 'WP300 Wireless Bluetooth PTT Pod', note: 'IP67, 18hr battery, NFC, 30m range, emergency button — requires R5 fw R02.25.02.1000+', checks: {ip: 1, bt: 1, fulldx: 0, nfc: 1, emg: 1, fw_req: "r02.25.02.1000"} },
              { pn: 'PMLN8401', desc: 'WP300 Wireless Bluetooth PTT Pod with Surveillance Earpiece', note: 'IP67, 18hr battery, NFC, 30m range — requires R5 fw R02.25.02.1000+', checks: {ip: 1, bt: 1, fulldx: 0, nfc: 1, emg: 0, fw_req: "r02.25.02.1000"} },
            ]
          },
          {
            title: 'WP300 Optional Earpieces',
            items: [
              { pn: 'PMLN8190', desc: 'Surveillance Earpiece with Translucent Tube', note: 'Clear rubber eartip', checks: {ip: 0, bt: 0, fulldx: 0, nfc: 0, emg: 0, fw_req: "\u2014"} },
              { pn: 'PMLN8125', desc: 'Swivel Earpiece with Eartip, Short Cord', note: 'Over-the-ear', checks: {ip: 0, bt: 0, fulldx: 0, nfc: 0, emg: 0, fw_req: "\u2014"} },
              { pn: 'PMLN8077', desc: 'Swivel Earpiece with Eartip, Long Cord', note: 'Over-the-ear', checks: {ip: 0, bt: 0, fulldx: 0, nfc: 0, emg: 0, fw_req: "\u2014"} },
            ]
          },
          {
            title: 'WP300 Replacement Parts',
            items: [
              { pn: 'PMLN8332', desc: 'Vehicle Mount Option for WP300', note: 'Steering wheel / motorcycle handlebar attachment', checks: {ip: 0, bt: 0, fulldx: 0, nfc: 0, emg: 0, fw_req: "\u2014"} },
              { pn: 'PMLN6246', desc: 'Replacement Swivel Clip', note: '', checks: {ip: 0, bt: 0, fulldx: 0, nfc: 0, emg: 0, fw_req: "\u2014"} },
              { pn: 'PMLN8068', desc: 'Replacement Eartip, Small (5/pack)', note: '', checks: {ip: 0, bt: 0, fulldx: 0, nfc: 0, emg: 0, fw_req: "\u2014"} },
              { pn: 'PMLN8069', desc: 'Replacement Eartip, Medium (5/pack)', note: '', checks: {ip: 0, bt: 0, fulldx: 0, nfc: 0, emg: 0, fw_req: "\u2014"} },
              { pn: 'PMLN8070', desc: 'Replacement Eartip, Large (5/pack)', note: '', checks: {ip: 0, bt: 0, fulldx: 0, nfc: 0, emg: 0, fw_req: "\u2014"} },
              { pn: 'PMLN8092', desc: 'Replacement Translucent Tube with Clear Rubber Eartip', note: '', checks: {ip: 0, bt: 0, fulldx: 0, nfc: 0, emg: 0, fw_req: "\u2014"} },
            ]
          }
        ]
      },
      surveillance: {
        cols: ["Part Number", "Description", "IMPRES", "UL HazLoc", "Intel Audio", "Full Duplex", "Ion FW Req", "Wires"],
        label: 'Surveillance & Earpieces',
        icon: '',
        sections: [
          {
            title: 'IMPRES Surveillance Kits',
            items: [
              { pn: 'PMLN7269', desc: 'IMPRES 2-Wire Surveillance Kit, Translucent Tube, Black', note: 'AI-trained suppression, intelligent audio, UL HazLoc', checks: {impres: 1, ul: 1, intel: 1, fulldx: 0, ion_fw: 0, wires: "2"} },
              { pn: 'PMLN7270', desc: '2-Wire Surveillance Kit, Translucent Tube, Beige', note: 'Clear rubber eartip', checks: {impres: 0, ul: 0, intel: 0, fulldx: 0, ion_fw: 0, wires: "2"} },
              { pn: 'PMLN6754', desc: 'IMPRES 3-Wire Surveillance Kit, Quick-Disconnect Translucent Tube, Black', note: 'Intelligent audio, UL HazLoc', checks: {impres: 1, ul: 1, intel: 1, fulldx: 0, ion_fw: 0, wires: "3"} },
              { pn: 'PMLN6755', desc: 'IMPRES 3-Wire Surveillance Kit, Quick-Disconnect Translucent Tube, Beige', note: 'Intelligent audio, UL HazLoc', checks: {impres: 1, ul: 1, intel: 1, fulldx: 0, ion_fw: 0, wires: "3"} },
            ]
          },
          {
            title: 'Mag One Earpieces',
            items: [
              { pn: 'PMLN5733', desc: 'Mag One Earbud with In-Line Mic and PTT', note: 'Earbud style', checks: {impres: 0, ul: 0, intel: 0, fulldx: 0, ion_fw: 0, wires: "\u2014"} },
              { pn: 'PMLN5727', desc: 'Mag One Swivel Earpiece with In-Line Mic and PTT', note: 'Over-the-ear, in-line PTT, UL HazLoc', checks: {impres: 0, ul: 1, intel: 0, fulldx: 0, ion_fw: 0, wires: "\u2014"} },
              { pn: 'PMLN5732', desc: 'Mag One Earset with Boom Mic and In-Line PTT', note: 'Earset, boom mic', checks: {impres: 0, ul: 0, intel: 0, fulldx: 0, ion_fw: 0, wires: "\u2014"} },
              { pn: 'PMLN6757', desc: 'Adjustable D-Style Earpiece with In-Line Mic and PTT', note: 'In-line PTT', checks: {impres: 0, ul: 0, intel: 0, fulldx: 0, ion_fw: 0, wires: "\u2014"} },
            ]
          },
          {
            title: 'Receive-Only Earpieces',
            items: [
              { pn: 'AARLN4885', desc: 'Receive-Only Covered Earbud with Coiled Cord', note: 'Foam covered earbud, UL HazLoc', checks: {impres: 0, ul: 1, intel: 0, fulldx: 0, ion_fw: 0, wires: "\u2014"} },
              { pn: 'RLN4941',   desc: 'Receive-Only Earpiece, Translucent Tube, Rubber Eartip', note: 'Clear rubber eartip, UL HazLoc' },
              { pn: 'PMLN7560', desc: 'Receive-Only Earpiece, Translucent Tube, Rubber Eartip', note: 'Clear rubber eartip', checks: {impres: 0, ul: 0, intel: 0, fulldx: 0, ion_fw: 0, wires: "\u2014"} },
              { pn: 'WADN4190', desc: 'Receive-Only Flexible Earpiece', note: 'Over-the-ear, UL HazLoc', checks: {impres: 0, ul: 1, intel: 0, fulldx: 0, ion_fw: 0, wires: "\u2014"} },
              { pn: 'PMLN4620', desc: 'Receive-Only D-Shell Earpiece', note: 'Over-the-ear, UL HazLoc', checks: {impres: 0, ul: 1, intel: 0, fulldx: 0, ion_fw: 0, wires: "\u2014"} },
              { pn: 'PMLN7396', desc: 'D-Shell Adjustable Earpiece', note: 'Over-the-ear', checks: {impres: 0, ul: 0, intel: 0, fulldx: 0, ion_fw: 0, wires: "\u2014"} },
            ]
          },
          {
            title: 'Custom Fit Earpieces',
            items: [
              { pn: 'RLN4760', desc: 'Small Custom Earpiece — Right Ear', note: 'For use with RLN6242', checks: {impres: 0, ul: 0, intel: 0, fulldx: 0, ion_fw: 0, wires: "\u2014"} },
              { pn: 'RLN4761', desc: 'Medium Custom Earpiece — Right Ear', note: '', checks: {impres: 0, ul: 0, intel: 0, fulldx: 0, ion_fw: 0, wires: "\u2014"} },
              { pn: 'RLN4762', desc: 'Large Custom Earpiece — Right Ear', note: '', checks: {impres: 0, ul: 0, intel: 0, fulldx: 0, ion_fw: 0, wires: "\u2014"} },
              { pn: 'RLN4763', desc: 'Small Custom Earpiece — Left Ear', note: '', checks: {impres: 0, ul: 0, intel: 0, fulldx: 0, ion_fw: 0, wires: "\u2014"} },
              { pn: 'RLN4764', desc: 'Medium Custom Earpiece — Left Ear', note: '', checks: {impres: 0, ul: 0, intel: 0, fulldx: 0, ion_fw: 0, wires: "\u2014"} },
              { pn: 'RLN4765', desc: 'Large Custom Earpiece — Left Ear', note: '', checks: {impres: 0, ul: 0, intel: 0, fulldx: 0, ion_fw: 0, wires: "\u2014"} },
            ]
          },
          {
            title: 'Hearing Protection',
            items: [
              { pn: 'RLN6511', desc: 'EP7 Small Hearing Protectors (Sonic Defenders) Ultra Earplugs', note: '28dB NRR, Comply foam eartip', checks: {impres: 0, ul: 0, intel: 0, fulldx: 0, ion_fw: 0, wires: "\u2014"} },
              { pn: 'RLN6512', desc: 'EP7 Medium Hearing Protectors (Sonic Defenders) Ultra Earplugs', note: '28dB NRR, Comply foam eartip', checks: {impres: 0, ul: 0, intel: 0, fulldx: 0, ion_fw: 0, wires: "\u2014"} },
              { pn: 'RLN6513', desc: 'EP7 Large Hearing Protectors (Sonic Defenders) Ultra Earplugs', note: '28dB NRR, Comply foam eartip', checks: {impres: 0, ul: 0, intel: 0, fulldx: 0, ion_fw: 0, wires: "\u2014"} },
            ]
          },
          {
            title: 'Surveillance Replacement Parts',
            items: [
              { pn: 'HKLN4608', desc: 'Replacement Quick-Disconnect Translucent Tube with Rubber Eartip', note: 'Replacement for PMLN5724/5726', checks: {impres: 0, ul: 0, intel: 0, fulldx: 0, ion_fw: 0, wires: "\u2014"} },
              { pn: 'RLN6242',  desc: 'Low Noise Kit with Translucent Tube and Rubber Eartip', note: 'Combine with 5080384F72 for high noise solution' },
              { pn: 'RLN6282',  desc: 'Replacement Standard Clear Rubber Eartip (50/pack)', note: '' },
              { pn: '5080384F72', desc: 'Replacement Foam Plugs for RLN6242 (50 pairs)', note: '24dB noise reduction, foam eartip', checks: {impres: 0, ul: 0, intel: 0, fulldx: 0, ion_fw: 0, wires: "\u2014"} },
            ]
          }
        ]
      },
      headsets: {
        cols: ["Part Number", "Description", "IMPRES", "IP Rated", "UL HazLoc", "Intel Audio", "Ion FW Req", "NRR", "Noise Cancel"],
        label: 'Headsets',
        icon: '',
        sections: [
          {
            title: 'Heavy Duty Headsets — IMPRES',
            items: [
              { pn: 'PMLN6760', desc: 'Heavy Duty Behind-the-Head Headset, Noise-Canceling Boom Mic', note: '24dB NRR, dual-muff, IMPRES intelligent audio, PTT on ear cup', checks: {impres: 1, ip: 0, ul: 0, intel: 1, ion_fw: 0, nrr: "24dB", nc: 1} },
              { pn: 'PMLN6763', desc: 'Heavy Duty Behind-the-Head Headset, Noise-Canceling Boom Mic', note: '24dB NRR, dual-muff, IMPRES intelligent audio, UL HazLoc', checks: {impres: 1, ip: 0, ul: 1, intel: 1, ion_fw: 0, nrr: "24dB", nc: 1} },
              { pn: 'PMLN7464', desc: 'Heavy Duty Over-the-Head Headset, Noise-Canceling Boom Mic', note: '24dB NRR, dual-muff, IMPRES intelligent audio', checks: {impres: 1, ip: 0, ul: 0, intel: 1, ion_fw: 0, nrr: "24dB", nc: 1} },
              { pn: 'PMLN7465', desc: 'Heavy Duty Over-the-Head Headset, Noise-Canceling Boom Mic', note: '24dB NRR, dual-muff, IMPRES intelligent audio, UL HazLoc', checks: {impres: 1, ip: 0, ul: 1, intel: 1, ion_fw: 0, nrr: "24dB", nc: 1} },
            ]
          },
          {
            title: 'Lightweight & Mag One Headsets',
            items: [
              { pn: 'PMLN6635', desc: 'Lightweight Over-the-Head Headset, Single Muff, In-Line PTT, Boom Mic', note: 'UL HazLoc, lightweight', checks: {impres: 0, ip: 0, ul: 1, intel: 0, ion_fw: 0, nrr: "\u2014", nc: 0} },
              { pn: 'PMLN6761', desc: 'Mag One Ultra-Lite Behind-the-Head Headset', note: 'Single-ear, IMPRES, boom mic, in-line PTT', checks: {impres: 1, ip: 0, ul: 0, intel: 0, ion_fw: 0, nrr: "\u2014", nc: 0} },
              { pn: 'PMLN6759', desc: 'IMPRES Temple Transducer with Boom Mic and In-Line PTT', note: 'Behind-the-head, bone conduction, IMPRES intelligent audio', checks: {impres: 1, ip: 0, ul: 0, intel: 1, ion_fw: 0, nrr: "\u2014", nc: 0} },
            ]
          },
          {
            title: '3M Peltor Headsets',
            items: [
              { pn: 'PMLN8265', desc: 'CH-3 Over-the-Head Headset with Nexus Connector', note: '26dB NRR, dual-ear, boom mic — requires PTT adapter PMLN8297', checks: {impres: 0, ip: 0, ul: 0, intel: 0, ion_fw: 0, nrr: "26dB", nc: 0} },
              { pn: 'PMLN8266', desc: 'CH-3 Neckband Headset with Nexus Connector', note: '24dB NRR, dual-ear, boom mic — requires PTT adapter PMLN8297', checks: {impres: 0, ip: 0, ul: 0, intel: 0, ion_fw: 0, nrr: "24dB", nc: 0} },
              { pn: 'PMLN8267', desc: 'CH-3 Hard Hat Attached Headset with Nexus Connector', note: '24dB NRR, dual-ear — requires PTT adapter PMLN8297', checks: {impres: 0, ip: 0, ul: 0, intel: 0, ion_fw: 0, nrr: "24dB", nc: 0} },
              { pn: 'PMLN8297', desc: 'PTT Nexus Adapter (required for CH-3 headsets)', note: '', checks: {impres: 0, ip: 0, ul: 0, intel: 0, ion_fw: 0, nrr: "\u2014", nc: 0} },
            ]
          }
        ]
      },
      batteries: {
        cols: ["Part Number", "Description", "IMPRES", "Capacity", "IP Rating", "UL HazLoc", "Temp Range"],
        label: 'Batteries',
        icon: '',
        sections: [
          {
            title: 'IMPRES Li-Ion Batteries — R5',
            items: [
              { pn: 'PMNN4878', desc: 'Li-Ion IP67 2400mAh Battery', note: 'IP67, -20°C to +60°C, 122×55×24mm, 144g — EMEA and APAC only', checks: {impres: 0, mah: "2400", ip: "IP67", ul: 0, temp: "\u2014"} },
              { pn: 'PMNN4888', desc: 'IMPRES Slim Li-Ion IP67 2200mAh Battery', note: 'IMPRES, IP67, -20°C to +60°C, 122×55×18mm, 120g', checks: {impres: 1, mah: "2200", ip: "IP67", ul: 0, temp: "\u2014"} },
              { pn: 'PMNN4889', desc: 'IMPRES High Capacity Li-Ion IP67 3200mAh Battery', note: 'IMPRES, IP67, -20°C to +60°C, 122×55×24mm, 148g', checks: {impres: 1, mah: "3200", ip: "IP67", ul: 0, temp: "\u2014"} },
              { pn: 'PMNN4890', desc: 'IMPRES UL High Capacity Li-Ion IP67 3200mAh Battery', note: 'IMPRES, IP67, UL HazLoc, -20°C to +60°C, 122×55×24mm, 162g', checks: {impres: 1, mah: "3200", ip: "IP67", ul: 1, temp: "\u2014"} },
            ]
          }
        ]
      },
      chargers: {
        cols: ["Part Number", "Description", "IMPRES", "Pockets", "Recond."],
        label: 'Chargers',
        icon: '',
        sections: [
          {
            title: 'IMPRES Single-Unit Chargers',
            items: [
              { pn: 'PMPN4527', desc: 'IMPRES Single-Unit Charger Base Only', note: 'IMPRES, Li-Ion/NiMH, 51×88×94mm', checks: {impres: 1, pockets: "1", recondn: 0} },
              { pn: 'PMPN4576', desc: 'IMPRES Single-Unit Charger, US/NA/TW Plug', note: 'IMPRES, Li-Ion/NiMH, 120VAC', checks: {impres: 1, pockets: "1", recondn: 0} },
              { pn: 'PMPN4577', desc: 'IMPRES Single-Unit Charger, EU Plug', note: 'IMPRES, Li-Ion/NiMH, 240VAC', checks: {impres: 1, pockets: "1", recondn: 0} },
              { pn: 'PMPN4572', desc: 'IMPRES Single-Unit Charger, UK/HK Plug', note: 'IMPRES, Li-Ion/NiMH, 240VAC', checks: {impres: 1, pockets: "1", recondn: 0} },
              { pn: 'PMPN4571', desc: 'IMPRES Single-Unit Charger, AUS/NZ Plug', note: 'IMPRES, Li-Ion/NiMH, 240VAC', checks: {impres: 1, pockets: "1", recondn: 0} },
              { pn: 'PMPN4578', desc: 'IMPRES Single-Unit Charger, JP Plug', note: 'IMPRES, Li-Ion/NiMH, 100-240VAC', checks: {impres: 1, pockets: "1", recondn: 0} },
              { pn: 'PMPN4579', desc: 'IMPRES Single-Unit Charger, CH Plug', note: 'IMPRES, Li-Ion/NiMH, 240VAC', checks: {impres: 1, pockets: "1", recondn: 0} },
              { pn: 'PMPN4574', desc: 'IMPRES Single-Unit Charger, KOR Plug', note: 'IMPRES, Li-Ion/NiMH, 240VAC', checks: {impres: 1, pockets: "1", recondn: 0} },
              { pn: 'PMPN4582', desc: 'IMPRES Single-Unit Charger, India Plug', note: 'IMPRES, Li-Ion/NiMH, 100-240VAC', checks: {impres: 1, pockets: "1", recondn: 0} },
            ]
          },
          {
            title: 'Standard Single-Unit Chargers',
            items: [
              { pn: 'NNTN8117', desc: 'Single-Unit Charger Base Only', note: 'Li-Ion/NiMH, 26×115×114mm', checks: {impres: 0, pockets: "1", recondn: 0} },
              { pn: 'NNTN8226', desc: 'Single-Unit Charger 1.25A, US/NA Plug', note: 'Li-Ion/NiMH, 115VAC', checks: {impres: 0, pockets: "1", recondn: 0} },
              { pn: 'NNTN8224', desc: 'Single-Unit Charger 1.25A, China Plug', note: 'Li-Ion/NiMH, 230VAC', checks: {impres: 0, pockets: "1", recondn: 0} },
              { pn: 'NNTN8273', desc: 'Single-Unit Charger with Switch-Mode 21W PSU, EU Plug', note: 'Li-Ion/NiMH, 240VAC', checks: {impres: 0, pockets: "1", recondn: 0} },
              { pn: 'NNTN8274', desc: 'Single-Unit Charger with Switch-Mode 21W PSU, UK/HK Plug', note: 'IMPRES, Li-Ion/NiMH, 240VAC', checks: {impres: 1, pockets: "1", recondn: 0} },
              { pn: 'NNTN8292', desc: 'Single-Unit Charger 1.25A, EU/EA Plug', note: 'Li-Ion/NiMH, 230VAC', checks: {impres: 0, pockets: "1", recondn: 0} },
            ]
          },
          {
            title: 'IMPRES Multi-Unit Chargers',
            items: [
              { pn: 'PMPN4283', desc: 'IMPRES Multi-Unit Charger (Universal)', note: 'IMPRES, 6-pocket, 100-240VAC, 117×445×170mm', checks: {impres: 1, pockets: "6", recondn: 0} },
              { pn: 'PMPN4284', desc: 'IMPRES Multi-Unit Charger, US/NA Plug', note: 'IMPRES, 6-pocket, 100-240VAC', checks: {impres: 1, pockets: "6", recondn: 0} },
              { pn: 'PMPN4289', desc: 'IMPRES Multi-Unit Charger, EU Plug', note: 'IMPRES, 6-pocket, 100-240VAC', checks: {impres: 1, pockets: "6", recondn: 0} },
              { pn: 'PMPN4290', desc: 'IMPRES Multi-Unit Charger, UK/HK Plug', note: 'IMPRES, 6-pocket, 100-240VAC', checks: {impres: 1, pockets: "6", recondn: 0} },
              { pn: 'PMPN4291', desc: 'IMPRES Multi-Unit Charger, ARG Plug', note: 'IMPRES, 6-pocket, 100-240VAC', checks: {impres: 1, pockets: "6", recondn: 0} },
              { pn: 'PMPN4292', desc: 'IMPRES Multi-Unit Charger, BZ Plug', note: 'IMPRES, 6-pocket, 100-240VAC', checks: {impres: 1, pockets: "6", recondn: 0} },
              { pn: 'PMPN4293', desc: 'IMPRES Multi-Unit Charger, AUS/NZ Plug', note: 'IMPRES, 6-pocket, 100-240VAC', checks: {impres: 1, pockets: "6", recondn: 0} },
              { pn: 'PMPN4294', desc: 'IMPRES Multi-Unit Charger, KOR Plug', note: 'IMPRES, 6-pocket, 100-240VAC', checks: {impres: 1, pockets: "6", recondn: 0} },
              { pn: 'PMPN4295', desc: 'IMPRES Multi-Unit Charger, JP Plug', note: 'IMPRES, 6-pocket, 100-240VAC', checks: {impres: 1, pockets: "6", recondn: 0} },
              { pn: 'PMPN4296', desc: 'IMPRES Multi-Unit Charger, CN Plug', note: 'IMPRES, 6-pocket, 100-240VAC', checks: {impres: 1, pockets: "6", recondn: 0} },
              { pn: 'PMPN4462', desc: 'IMPRES Multi-Unit Charger, TW Plug', note: 'IMPRES, 6-pocket, 100-240VAC', checks: {impres: 1, pockets: "6", recondn: 0} },
              { pn: 'PMPN4610', desc: 'IMPRES Multi-Unit Charger, BIS Plug', note: 'IMPRES, 6-pocket, 100-240VAC', checks: {impres: 1, pockets: "6", recondn: 0} },
            ]
          },
          {
            title: 'Vehicular & Power Supply',
            items: [
              { pn: 'NNTN7616',   desc: 'IMPRES Vehicular Charger Kit', note: 'IMPRES, Li-Ion/NiMH, hard-wired to vehicle battery, 133×88×88mm' },
              { pn: 'PS000577A01', desc: 'Power Supply Adaptor AC/DC 14.5V/1.15A, US/NA/TW/JP Plug', note: '120VAC', checks: {impres: 0, pockets: "1", recondn: 0} },
              { pn: 'PS000576A21', desc: 'Power Supply Adaptor AC/DC Fixed Blade 14.5V/1.15A, US/NA Plug', note: '120VAC', checks: {impres: 0, pockets: "1", recondn: 0} },
              { pn: 'PS000576A02', desc: 'Power Supply Adaptor AC/DC Fixed Blade 14.5V/1.15A, EU Plug', note: '100-240VAC', checks: {impres: 0, pockets: "1", recondn: 0} },
              { pn: 'PS000576A03', desc: 'Power Supply Adaptor AC/DC Fixed Blade 14.5V/1.15A, UK/HK Plug', note: '100-240VAC', checks: {impres: 0, pockets: "1", recondn: 0} },
              { pn: 'PS000576A04', desc: 'Power Supply Adaptor AC/DC Fixed Blade 14.5V/1.15A, AUS/NZ Plug', note: '', checks: {impres: 0, pockets: "1", recondn: 0} },
            ]
          }
        ]
      },
      carry: {
        label: 'Carry Solutions',
        icon: '',
        sections: [
          {
            title: 'Hard Leather Cases',
            items: [
              { pn: 'PMLN8662', desc: 'Hard Leather Case, 3-inch Swivel Belt Loop (Display)', note: 'Hard leather, D-rings' },
              { pn: 'PMLN8663', desc: 'Hard Leather Case, 3-inch Fixed Belt Loop (Display)', note: 'Hard leather, D-rings' },
              { pn: 'PMLN8665', desc: 'Hard Leather Case, 3-inch Swivel Belt Loop (Non-Display)', note: 'Hard leather, D-rings' },
              { pn: 'PMLN8666', desc: 'Hard Leather Case, 3-inch Fixed Belt Loop (Non-Display)', note: 'Hard leather, D-rings' },
            ]
          },
          {
            title: 'Nylon Cases',
            items: [
              { pn: 'PMLN8664', desc: 'Nylon Case, 3-inch Fixed Belt Loop (Display)', note: 'Nylon, D-rings' },
              { pn: 'PMLN8667', desc: 'Nylon Case, 3-inch Fixed Belt Loop (Non-Display)', note: 'Nylon' },
            ]
          },
          {
            title: 'Belt Loops & Clips',
            items: [
              { pn: 'PMLN5610', desc: 'Replacement 2.5-inch Swivel Belt Loop', note: 'Hard leather, display/non-display' },
              { pn: 'PMLN5611', desc: 'Replacement 3-inch Leather Swivel Belt Loop', note: 'Hard leather, display/non-display' },
              { pn: 'PMLN4651', desc: 'Spring Action 2-inch Belt Clip', note: 'Plastic' },
              { pn: 'PMLN7008', desc: 'Spring Action 2.5-inch Belt Clip', note: 'Plastic' },
            ]
          },
          {
            title: 'Carry Straps & Bags',
            items: [
              { pn: 'HLN9985', desc: 'Waterproof Bag with Large Strap', note: 'Securely carries MOTOTRBO two-way radios' },
              { pn: 'NTN5243', desc: 'Adjustable Nylon Carrying Strap', note: 'Nylon' },
              { pn: 'RLN6486', desc: 'Leather Radio Strap', note: 'Leather' },
              { pn: 'RLN6487', desc: 'Leather Radio Strap — XL', note: 'Leather' },
              { pn: 'RLN6488', desc: 'Anti-Sway Strap for Leather Radio Straps', note: 'Leather' },
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
              { pn: 'PMAE4079',   desc: 'UHF/GPS Wideband Slim Whip Antenna', note: '403–527 MHz, 15cm, whip' },
              { pn: 'PMAE4069',   desc: 'UHF/GPS Stubby Antenna', note: '403–450 MHz, 9cm, stubby' },
              { pn: 'PMAE4070',   desc: 'UHF/GPS Stubby Antenna', note: '440–490 MHz, 9cm, stubby' },
              { pn: 'PMAE4071',   desc: 'UHF/GPS Stubby Antenna', note: '470–527 MHz, 9cm, stubby' },
              { pn: 'AN000348A01', desc: 'UHF Stubby Wideband Antenna', note: '400–527 MHz, 9cm, stubby' },
            ]
          },
          {
            title: 'VHF Antennas',
            items: [
              { pn: 'PMAD4117', desc: 'VHF/GPS Helical Antenna', note: '136–155 MHz, 15cm' },
              { pn: 'PMAD4116', desc: 'VHF/GPS Helical Antenna', note: '144–165 MHz, 15cm' },
              { pn: 'PMAD4118', desc: 'VHF/GPS Helical Antenna', note: '152–174 MHz, 15cm' },
              { pn: 'PMAD4147', desc: 'VHF/GPS Wideband Slim Whip Antenna', note: '136–174 MHz, 20cm' },
              { pn: 'PMAD4119', desc: 'VHF/GPS Stubby Antenna', note: '136–148 MHz, 9cm' },
              { pn: 'PMAD4120', desc: 'VHF/GPS Stubby Antenna', note: '146–160 MHz, 9cm' },
              { pn: 'PMAD4121', desc: 'VHF Stubby Antenna', note: '160–174 MHz, 9cm' },
            ]
          },
          {
            title: 'Antenna Accessories',
            items: [
              { pn: '32012144001', desc: 'Antenna ID Bands — Gray (10/pack)', note: '' },
              { pn: '32012144002', desc: 'Antenna ID Bands — Yellow (10/pack)', note: '' },
              { pn: '32012144003', desc: 'Antenna ID Bands — Green (10/pack)', note: '' },
              { pn: '32012144004', desc: 'Antenna ID Bands — Blue (10/pack)', note: '' },
              { pn: '32012144005', desc: 'Antenna ID Bands — Purple (10/pack)', note: '' },
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
              { pn: 'PMKN4115', desc: 'Portable Programming Cable (USB)', note: 'R7 / Ion / R5' },
              { pn: 'PMKN4117', desc: 'Programming, Test, and Alignment Cable', note: 'R7 / Ion / R5' },
            ]
          },
          {
            title: 'Screen Protectors & Misc',
            items: [
              { pn: '0104058J40', desc: 'Dust Cover', note: 'Accessory port protection' },
              { pn: 'PMLN8671',   desc: 'NFC Kit', note: '' },
              { pn: 'PMLN8672',   desc: 'RFID Tag Kit (EU)', note: '' },
              { pn: 'PMLN8673',   desc: 'RFID Tag Kit (US)', note: '' },
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
        cols: ["Part Number", "Description", "IMPRES", "IP68", "UL HazLoc", "Intel Audio", "Ion FW Req", "BT/Wireless", "Full Duplex"],
        label: 'Remote Speaker Mics',
        icon: '',
        sections: [
          {
            title: 'RM Series — GCAI Mini Connector (R7 / Ion)',
            items: [
              { pn: 'PMMN4128', desc: 'RM780 IMPRES Windporting RSM, Large, Work-When-Wet', note: 'IP68, UL HazLoc, 2 prog buttons + emergency, intelligent audio, full duplex telephony with Ion', checks: {impres: 1, ip68: 1, ul: 1, intel: 1, ion_fw: 0, bt: 0, fulldx: 1} },
              { pn: 'PMMN4140', desc: 'RM760 IMPRES Windporting RSM, Large Basic, Work-When-Wet', note: 'IP68, UL HazLoc, intelligent audio — requires Ion fw M-Ion.2022.03+', checks: {impres: 1, ip68: 1, ul: 1, intel: 1, ion_fw: 1, bt: 0, fulldx: 0} },
              { pn: 'PMMN4131', desc: 'RM730 IMPRES Windporting RSM, Small', note: 'IP68, UL HazLoc, emergency button — requires Ion fw M-Ion.2022.03+', checks: {impres: 1, ip68: 1, ul: 1, intel: 0, ion_fw: 1, bt: 0, fulldx: 0} },
            ]
          },
          {
            title: 'Wireless RSM',
            items: [
              { pn: 'PMMN4127', desc: 'WM500 Wireless Remote Speaker Microphone', note: 'Operations Critical BT, 18hr, IP67, omni windporting mic, full duplex with Ion — requires Ion fw M-Ion.2022.03+', checks: {impres: 0, ip68: 0, ul: 0, intel: 0, ion_fw: 1, bt: 1, fulldx: 1} },
            ]
          },
          {
            title: 'RSM Replacement Parts',
            items: [
              { pn: 'PMKN4232', desc: 'Replacement Coil Cord Kit', note: 'For PMMN4128, PMMN4131, PMMN4140', checks: {impres: 0, ip68: 0, ul: 0, intel: 0, ion_fw: 0, bt: 0, fulldx: 0} },
              { pn: 'PMLN8121', desc: 'Low Profile Swivel Clip', note: 'For PMMN4128, PMMN4131, PMMN4140', checks: {impres: 0, ip68: 0, ul: 0, intel: 0, ion_fw: 0, bt: 0, fulldx: 0} },
              { pn: 'PMLN8122', desc: 'Replacement Dust Cover (10/pack)', note: 'For PMMN4128, PMMN4140', checks: {impres: 0, ip68: 0, ul: 0, intel: 0, ion_fw: 0, bt: 0, fulldx: 0} },
              { pn: 'PMLN8253', desc: 'Replacement Dust Cover (10/pack)', note: 'For PMMN4131', checks: {impres: 0, ip68: 0, ul: 0, intel: 0, ion_fw: 0, bt: 0, fulldx: 0} },
            ]
          },
          {
            title: 'RSM Earpieces (3.5mm)',
            items: [
              { pn: 'PMLN8120', desc: 'Receive-Only Earpiece with Translucent Tube, Loud Audio', note: 'Required for RM780/RM760/RM730 telephony calls with Ion, UL HazLoc', checks: {impres: 0, ip68: 0, ul: 1, intel: 0, ion_fw: 0, bt: 0, fulldx: 0} },
              { pn: 'PMLN7560', desc: 'Receive-Only Earpiece with Translucent Tube and Rubber Eartip', note: 'For WM500 (PMMN4127) telephony calls with Ion', checks: {impres: 0, ip68: 0, ul: 0, intel: 0, ion_fw: 0, bt: 1, fulldx: 0} },
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
              { pn: 'PMMN4127', desc: 'WM500 Wireless Remote Speaker Microphone', note: 'Full duplex telephony with Ion, 18hr, IP67 — requires Ion fw M-Ion.2022.03+', checks: {ip: 1, bt: 0, fulldx: 1, nfc: 0, emg: 0, fw_req: "m"} },
              { pn: 'PMLN8123', desc: 'Operations Critical Wireless BT Earpiece with PTT', note: 'Over-ear swivel, boom mic, 8hr battery, full duplex telephony with Ion, standard pairing, 30ft', checks: {ip: 0, bt: 1, fulldx: 1, nfc: 0, emg: 0, fw_req: "\u2014"} },
            ]
          },
          {
            title: 'WP300 Wireless Bluetooth PTT Pod',
            items: [
              { pn: 'PMLN8298', desc: 'WP300 Wireless Bluetooth PTT Pod', note: 'IP67, 18hr battery, NFC, 30m range, emergency button — requires Ion fw M-Ion.2022.03+', checks: {ip: 1, bt: 1, fulldx: 0, nfc: 1, emg: 1, fw_req: "m"} },
              { pn: 'PMLN8401', desc: 'WP300 Wireless Bluetooth PTT Pod with Surveillance Earpiece', note: 'IP67, 18hr battery, NFC, 30m range — requires Ion fw M-Ion.2022.03+', checks: {ip: 1, bt: 1, fulldx: 0, nfc: 1, emg: 0, fw_req: "m"} },
            ]
          },
          {
            title: 'WP300 Optional Earpieces',
            items: [
              { pn: 'PMLN8190', desc: 'Surveillance Earpiece with Translucent Tube', note: 'Clear rubber eartip', checks: {ip: 0, bt: 0, fulldx: 0, nfc: 0, emg: 0, fw_req: "\u2014"} },
              { pn: 'PMLN8125', desc: 'Swivel Earpiece with Eartip, Short Cord', note: 'Over-the-ear', checks: {ip: 0, bt: 0, fulldx: 0, nfc: 0, emg: 0, fw_req: "\u2014"} },
              { pn: 'PMLN8077', desc: 'Swivel Earpiece with Eartip, Long Cord', note: 'Over-the-ear', checks: {ip: 0, bt: 0, fulldx: 0, nfc: 0, emg: 0, fw_req: "\u2014"} },
            ]
          },
          {
            title: 'WP300 Replacement Parts',
            items: [
              { pn: 'PMLN8332', desc: 'Vehicle Mount Option for WP300', note: 'Steering wheel / motorcycle handlebar attachment', checks: {ip: 0, bt: 0, fulldx: 0, nfc: 0, emg: 0, fw_req: "\u2014"} },
              { pn: 'PMLN6246', desc: 'Replacement Swivel Clip', note: '', checks: {ip: 0, bt: 0, fulldx: 0, nfc: 0, emg: 0, fw_req: "\u2014"} },
              { pn: 'PMLN8068', desc: 'Replacement Eartip, Small (5/pack)', note: '', checks: {ip: 0, bt: 0, fulldx: 0, nfc: 0, emg: 0, fw_req: "\u2014"} },
              { pn: 'PMLN8069', desc: 'Replacement Eartip, Medium (5/pack)', note: '', checks: {ip: 0, bt: 0, fulldx: 0, nfc: 0, emg: 0, fw_req: "\u2014"} },
              { pn: 'PMLN8070', desc: 'Replacement Eartip, Large (5/pack)', note: '', checks: {ip: 0, bt: 0, fulldx: 0, nfc: 0, emg: 0, fw_req: "\u2014"} },
              { pn: 'PMLN8092', desc: 'Replacement Translucent Tube with Clear Rubber Eartip', note: '', checks: {ip: 0, bt: 0, fulldx: 0, nfc: 0, emg: 0, fw_req: "\u2014"} },
            ]
          }
        ]
      },
      surveillance: {
        cols: ["Part Number", "Description", "IMPRES", "UL HazLoc", "Intel Audio", "Full Duplex", "Ion FW Req", "Wires"],
        label: 'Surveillance & Earpieces',
        icon: '',
        sections: [
          {
            title: 'IMPRES Surveillance Kits — R7 & Ion (Extra Loud, Full Duplex)',
            items: [
              { pn: 'PMLN8341', desc: 'IMPRES 1-Wire Surveillance Kit, Translucent Tube, Extra Loud, Black', note: 'Intelligent audio, full duplex telephony with Ion, UL HazLoc', checks: {impres: 1, ul: 1, intel: 1, fulldx: 1, ion_fw: 0, wires: "1"} },
              { pn: 'PMLN8342', desc: 'IMPRES 2-Wire Surveillance Kit, Translucent Tube, Extra Loud, Black', note: 'Intelligent audio, full duplex telephony with Ion, UL HazLoc', checks: {impres: 1, ul: 1, intel: 1, fulldx: 1, ion_fw: 0, wires: "2"} },
              { pn: 'PMLN8343', desc: 'IMPRES 3-Wire Surveillance Kit, Translucent Tube, Extra Loud, Black', note: 'Intelligent audio, full duplex telephony with Ion, UL HazLoc', checks: {impres: 1, ul: 1, intel: 1, fulldx: 1, ion_fw: 0, wires: "3"} },
              { pn: 'PMLN8295', desc: 'IMPRES 2-Wire Swivel Earhook, Removable Eartip, Loud, Black', note: 'Intelligent audio, full duplex with Ion — requires Ion fw M-Ion.2022.03+', checks: {impres: 1, ul: 0, intel: 1, fulldx: 1, ion_fw: 1, wires: "2"} },
              { pn: 'PMLN8337', desc: 'IMPRES 1-Wire Single Earbud, Removable Earhook, Loud, Black', note: 'Intelligent audio, full duplex with Ion — requires Ion fw M-Ion.2022.03+', checks: {impres: 1, ul: 0, intel: 1, fulldx: 1, ion_fw: 1, wires: "1"} },
            ]
          },
          {
            title: 'Surveillance Replacement Parts',
            items: [
              { pn: 'PMLN8092', desc: 'Replacement Quick-Disconnect Translucent Tube with Rubber Eartip', note: 'Compatible with PMLN8120/8341/8342/8343', checks: {impres: 0, ul: 0, intel: 0, fulldx: 0, ion_fw: 0, wires: "\u2014"} },
              { pn: 'PMLN8068', desc: 'Replacement Rubber Eartip, Small (5/pack)', note: 'Black rubber — for PMLN8295', checks: {impres: 0, ul: 0, intel: 0, fulldx: 0, ion_fw: 0, wires: "\u2014"} },
              { pn: 'PMLN8069', desc: 'Replacement Rubber Eartip, Medium (5/pack)', note: '', checks: {impres: 0, ul: 0, intel: 0, fulldx: 0, ion_fw: 0, wires: "\u2014"} },
              { pn: 'PMLN8070', desc: 'Replacement Rubber Eartip, Large (5/pack)', note: '', checks: {impres: 0, ul: 0, intel: 0, fulldx: 0, ion_fw: 0, wires: "\u2014"} },
              { pn: 'PMLN8363', desc: 'Replacement Rubber Sleeve, Small (25/pack)', note: 'For PMLN8337', checks: {impres: 0, ul: 0, intel: 0, fulldx: 0, ion_fw: 0, wires: "\u2014"} },
              { pn: 'PMLN8364', desc: 'Replacement Rubber Sleeve, Medium (25/pack)', note: '', checks: {impres: 0, ul: 0, intel: 0, fulldx: 0, ion_fw: 0, wires: "\u2014"} },
              { pn: 'PMLN8365', desc: 'Replacement Rubber Sleeve, Large (25/pack)', note: '', checks: {impres: 0, ul: 0, intel: 0, fulldx: 0, ion_fw: 0, wires: "\u2014"} },
            ]
          }
        ]
      },
      headsets: {
        cols: ["Part Number", "Description", "IMPRES", "IP Rated", "UL HazLoc", "Intel Audio", "Ion FW Req", "NRR", "Noise Cancel"],
        label: 'Headsets',
        icon: '',
        sections: [
          {
            title: 'Heavy Duty Headsets — IMPRES (R7 & Ion)',
            items: [
              { pn: 'PMLN8085', desc: 'Heavy Duty Behind-the-Head Headset, Noise-Canceling Boom Mic, IP54', note: '24dB NRR, dual-muff, IMPRES intelligent audio, UL HazLoc', checks: {impres: 1, ip: 1, ul: 1, intel: 1, ion_fw: 0, nrr: "24dB", nc: 1} },
              { pn: 'PMLN8086', desc: 'Heavy Duty Over-the-Head Headset, Noise-Canceling Boom Mic, IP54', note: '24dB NRR, dual-muff, IMPRES intelligent audio, UL HazLoc', checks: {impres: 1, ip: 1, ul: 1, intel: 1, ion_fw: 0, nrr: "24dB", nc: 1} },
            ]
          },
          {
            title: '3M Peltor CH-3 Series (R7 & Ion)',
            items: [
              { pn: 'PMLN8265', desc: 'CH-3 Over-the-Head Headset with Nexus Connector', note: '26dB NRR, dual-ear, boom mic — requires PTT adapter PMLN8297. Ion fw M-Ion.2022.03+', checks: {impres: 0, ip: 0, ul: 0, intel: 0, ion_fw: 1, nrr: "26dB", nc: 0} },
              { pn: 'PMLN8266', desc: 'CH-3 Neckband Headset with Nexus Connector', note: '24dB NRR, dual-ear, boom mic — requires PTT adapter PMLN8297. Ion fw M-Ion.2022.03+', checks: {impres: 0, ip: 0, ul: 0, intel: 0, ion_fw: 1, nrr: "24dB", nc: 0} },
              { pn: 'PMLN8267', desc: 'CH-3 Hard Hat Attached Headset with Nexus Connector (hat not included)', note: '24dB NRR, dual-ear — requires PTT adapter PMLN8297. Ion fw M-Ion.2022.03+', checks: {impres: 0, ip: 0, ul: 0, intel: 0, ion_fw: 1, nrr: "24dB", nc: 0} },
              { pn: 'PMLN8297', desc: 'PTT Nexus Adapter (required for CH-3 headsets above)', note: 'Ion fw M-Ion.2022.03+', checks: {impres: 0, ip: 0, ul: 0, intel: 0, ion_fw: 1, nrr: "\u2014", nc: 0} },
            ]
          }
        ]
      },
 batteries: {
  cols: ["Part Number", "Description", "IMPRES", "Capacity", "IP Rating", "UL HazLoc", "Temp Range"],
  label: 'Batteries',
  icon: '',
  sections: [
    {
      title: 'IMPRES 2 Li-Ion Batteries — Ion',
      items: [
        { pn: 'PMNN4803', desc: 'IMPRES 2 Li-Ion 2820mAh IP68 Slim Battery', note: 'IP68, -20°C to +60°C, 114×69×16mm, 145g', checks: {impres: 1, mah: "2820", ip: "IP68", ul: 0, temp: "—"} },
        { pn: 'PMNN4804', desc: 'IMPRES 2 Li-Ion 2900mAh IP68 TIA4950 Battery', note: 'IP68, UL HazLoc, -20°C to +60°C, 114×69×24mm, 171g', checks: {impres: 1, mah: "2900", ip: "IP68", ul: 1, temp: "—"} },
        { pn: 'PMNN4805', desc: 'IMPRES 2 Li-Ion 4400mAh IP68 TIA4950 Battery', note: 'IP68, UL HazLoc, -20°C to +60°C, 114×69×27mm, 211g', checks: {impres: 1, mah: "4400", ip: "IP68", ul: 1, temp: "—"} },
      ]
    }
  ]
},
      chargers: {
        cols: ["Part Number", "Description", "IMPRES", "Pockets", "Recond."],
        label: 'Chargers',
        icon: '',
        sections: [
        {
  title: 'IMPRES 2 Single-Unit Chargers — Ion',
  items: [
    { pn: 'PMPN4524', desc: 'IMPRES 2 Single-Unit Charger, US Plug', note: 'IMPRES 2, Li-Ion, 120VAC', checks: {impres: 1, pockets: "1", recondn: 0} },
    { pn: 'PMPN4512', desc: 'IMPRES 2 Single-Unit Charger, ARG Plug', note: 'IMPRES 2, Li-Ion, 240VAC', checks: {impres: 1, pockets: "1", recondn: 0} },
    { pn: 'PMPN4515', desc: 'IMPRES 2 Single-Unit Charger, BRZ Plug', note: 'IMPRES 2, Li-Ion, 240VAC', checks: {impres: 1, pockets: "1", recondn: 0} },
    { pn: 'PMPN4510', desc: 'IMPRES 2 Single-Unit Charger, UK Plug', note: 'IMPRES 2, Li-Ion, 240VAC', checks: {impres: 1, pockets: "1", recondn: 0} },
    { pn: 'PMPN4525', desc: 'IMPRES 2 Single-Unit Charger, EURO Plug', note: 'IMPRES 2, Li-Ion, 240VAC', checks: {impres: 1, pockets: "1", recondn: 0} },
    { pn: 'PMPN4511', desc: 'IMPRES 2 Single-Unit Charger, AU/NZ Plug', note: 'IMPRES 2, Li-Ion, 240VAC', checks: {impres: 1, pockets: "1", recondn: 0} },
    { pn: 'PMPN4609', desc: 'IMPRES 2 Single-Unit Charger, JAP Plug', note: 'IMPRES 2, Li-Ion, 100-240VAC', checks: {impres: 1, pockets: "1", recondn: 0} },
    { pn: 'PMPN4514', desc: 'IMPRES 2 Single-Unit Charger, KOR Plug', note: 'IMPRES 2, Li-Ion, 240VAC', checks: {impres: 1, pockets: "1", recondn: 0} },
    { pn: 'PMPN4641', desc: 'IMPRES 2 Single-Unit Charger, INDIA Plug', note: 'IMPRES 2, Li-Ion, 240VAC', checks: {impres: 1, pockets: "1", recondn: 0} },
  ]
},
   {
  title: 'IMPRES 2 Multi-Unit Fast Chargers — Ion',
  items: [
    { pn: 'PMPN4498', desc: 'IMPRES 2 Multi-Unit Fast Charger, US Plug', note: 'IMPRES 2, Li-Ion/NiMH, 100-240VAC, 6 pockets', checks: {impres: 1, pockets: "6", recondn: 0} },
    { pn: 'PMPN4516', desc: 'IMPRES 2 Multi-Unit Fast Charger, UK Plug', note: 'IMPRES 2, Li-Ion/NiMH, 100-240VAC, 6 pockets', checks: {impres: 1, pockets: "6", recondn: 0} },
    { pn: 'PMPN4499', desc: 'IMPRES 2 Multi-Unit Fast Charger, EURO Plug', note: 'IMPRES 2, Li-Ion/NiMH, 100-240VAC, 6 pockets', checks: {impres: 1, pockets: "6", recondn: 0} },
    { pn: 'PMPN4517', desc: 'IMPRES 2 Multi-Unit Fast Charger, AU/NZ Plug', note: 'IMPRES 2, Li-Ion/NiMH, 100-240VAC, 6 pockets', checks: {impres: 1, pockets: "6", recondn: 0} },
    { pn: 'PMPN4518', desc: 'IMPRES 2 Multi-Unit Fast Charger, ARG Plug', note: 'IMPRES 2, Li-Ion/NiMH, 100-240VAC, 6 pockets', checks: {impres: 1, pockets: "6", recondn: 0} },
    { pn: 'PMPN4521', desc: 'IMPRES 2 Multi-Unit Fast Charger, BZL Plug', note: 'IMPRES 2, Li-Ion/NiMH, 100-240VAC, 6 pockets', checks: {impres: 1, pockets: "6", recondn: 0} },
    { pn: 'PMPN4295', desc: 'IMPRES 2 Multi-Unit Fast Charger, JAP Plug', note: 'IMPRES 2, Li-Ion/NiMH, 100-240VAC, 6 pockets', checks: {impres: 1, pockets: "6", recondn: 0} },
    { pn: 'PMPN4520', desc: 'IMPRES 2 Multi-Unit Fast Charger, KOR Plug', note: 'IMPRES 2, Li-Ion/NiMH, 100-240VAC, 6 pockets', checks: {impres: 1, pockets: "6", recondn: 0} },
    { pn: 'PMPN4642', desc: 'IMPRES 2 Multi-Unit Fast Charger, INDIA Plug', note: 'IMPRES 2, Li-Ion/NiMH, 100-240VAC, 6 pockets', checks: {impres: 1, pockets: "6", recondn: 0} },
    { pn: 'AS000180A01', desc: 'Interchangeable Charging Pocket for Ion', note: 'For IMPRES 2 Multi-Unit Fast Charger', checks: {impres: 0, pockets: "", recondn: 0} },
  ]
  
}, 
            title: 'Vehicular Charger',
            items: [
              { pn: 'NNTN7616', desc: 'IMPRES Vehicular Charger Kit', note: 'IMPRES, Li-Ion/NiMH, hard-wired to vehicle battery', checks: {impres: 1, pockets: "1", recondn: 0} },
            ]
          }
        ]
      },
      carry: {
        label: 'Carry Solutions',
        icon: '',
        sections: [
          {
            title: 'Holsters & Belt Clips',
            items: [
              { pn: 'PMLN4651', desc: 'Spring Action 2-inch Belt Clip', note: 'Plastic, display/non-display' },
              { pn: 'PMLN7008', desc: 'Spring Action 2.5-inch Belt Clip', note: 'Plastic, display/non-display' },
            ]
          },
          {
            title: 'Carry Straps & Cases',
            items: [
              { pn: 'HLN9985',  desc: 'Waterproof Bag with Large Strap', note: 'Securely carries MOTOTRBO two-way radios' },
              { pn: 'NTN5243',  desc: 'Adjustable Nylon Carrying Strap', note: 'Nylon' },
              { pn: 'RLN6486',  desc: 'Leather Radio Strap', note: 'Leather' },
              { pn: 'RLN6487',  desc: 'Leather Radio Strap — XL', note: 'Leather' },
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
              { pn: 'PMKN4115', desc: 'Portable Programming Cable (USB)', note: 'R7 / Ion / R5' },
              { pn: 'PMKN4117', desc: 'Programming, Test, and Alignment Cable', note: 'R7 / Ion / R5' },
            ]
          },
          {
            title: 'Miscellaneous',
            items: [
              { pn: '0104058J40', desc: 'Dust Cover', note: 'Accessory port protection' },
            ]
          }
        ]
      }
    }
  },

  // ── R7Ex ATEX ──────────────────────────────────────────────────────────────
  'r7ex': {
    name: 'MOTOTRBO R7Ex',
    sub: 'ATEX/IECEx — Zone 1 & 2, Ex ib IIC T4 Gb',
    tags: ['ATEX/IECEx Certified', 'IP67/IP68', 'IMPRES', 'Zone 1 & 2'],
    tagStyles: ['red', 'green', 'orange', 'amber'],
    discontinued: false,
    categories: {
      rsm: {
        cols: ["Part Number", "Description", "IMPRES", "IP68", "UL HazLoc", "Intel Audio", "Ion FW Req", "BT/Wireless", "Full Duplex"],
        label: 'Remote Speaker Mics',
        icon: '',
        sections: [
          {
            title: 'ATEX/IECEx RSMs',
            items: [
              { pn: 'PMMN4163', desc: 'NS750Ex IMPRES ATEX Omni-Directional RSM with Large Front PTT, Side PTT, Nexus + 3.5mm Locking Jack, IP66/IP67', note: 'ATEX/IECEx certified; AI-trained Noise Suppression with R7Ex; up to 103 phons', checks: {impres: 1, ip68: 0, ul: 0, intel: 0, ion_fw: 0, bt: 0, fulldx: 0} },
              { pn: 'PMMN4164', desc: 'RM750Ex IMPRES ATEX RSM, IP66/IP68', note: 'ATEX/IECEx certified; AI-trained Noise Suppression with R7Ex; 102 phon max; compact form factor', checks: {impres: 1, ip68: 1, ul: 0, intel: 0, ion_fw: 0, bt: 0, fulldx: 0} },
            ]
          },
          {
            title: 'NS750Ex RSM Accessories & Replacement Parts',
            items: [
              { pn: '0104064J25', desc: 'NS750Ex Replacement Swivel Clip (1 pc/pack)', note: '', checks: {impres: 0, ip68: 0, ul: 0, intel: 0, ion_fw: 0, bt: 0, fulldx: 0} },
              { pn: 'PMLN8466',   desc: 'NS750Ex Front PTT Paddle Label — Red (10/pack)', note: '' },
              { pn: 'PMLN8465',   desc: 'NS750Ex Front PTT Paddle Label — Blue (10/pack)', note: '' },
              { pn: 'PMLN8464',   desc: 'NS750Ex Front PTT Paddle Label — Green (10/pack)', note: '' },
              { pn: 'PMLN8468',   desc: 'NS750Ex Front PTT Paddle Label — Yellow (10/pack)', note: '' },
              { pn: 'PMLN8523',   desc: 'NS750Ex Front PTT Paddle Label — Orange (10/pack)', note: '' },
              { pn: 'PMLN8469',   desc: 'NS750Ex Front PTT Paddle Label — Silver (10/pack)', note: '' },
              { pn: 'PMLN8121',   desc: 'RM750Ex Low Profile Swivel Clip (1 pc/pack)', note: '' },
            ]
          },
          {
            title: 'Surveillance Earpiece for NS750Ex (3.5mm)',
            items: [
              { pn: 'PMLN8643', desc: 'Receive-Only Earpiece with Translucent Tube, Extra Loud Audio, 3.5mm Jack (ATEX/IECEx)', note: 'For use with NS750Ex RSM (PMMN4163); 122 dB SPL', checks: {impres: 0, ip68: 0, ul: 0, intel: 0, ion_fw: 0, bt: 0, fulldx: 0} },
            ]
          },
          {
            title: 'Surveillance Replacement Kits',
            items: [
              { pn: 'RLN6242', desc: 'Low Noise Kit with Translucent Tube and Clear Rubber Eartip', note: 'For use with PMLN8643', checks: {impres: 0, ip68: 0, ul: 0, intel: 0, ion_fw: 0, bt: 0, fulldx: 0} },
              { pn: 'RLN6282', desc: 'Replacement Standard Clear Rubber Eartip (50/pack)', note: 'For RLN6242 / PMLN8643', checks: {impres: 0, ip68: 0, ul: 0, intel: 0, ion_fw: 0, bt: 0, fulldx: 0} },
              { pn: 'RLN4760', desc: 'Custom Earpiece — Small, Right Ear', note: '', checks: {impres: 0, ip68: 0, ul: 0, intel: 0, ion_fw: 0, bt: 0, fulldx: 0} },
              { pn: 'RLN4761', desc: 'Custom Earpiece — Medium, Right Ear', note: '', checks: {impres: 0, ip68: 0, ul: 0, intel: 0, ion_fw: 0, bt: 0, fulldx: 0} },
              { pn: 'RLN4762', desc: 'Custom Earpiece — Large, Right Ear', note: '', checks: {impres: 0, ip68: 0, ul: 0, intel: 0, ion_fw: 0, bt: 0, fulldx: 0} },
              { pn: 'RLN4763', desc: 'Custom Earpiece — Small, Left Ear', note: '', checks: {impres: 0, ip68: 0, ul: 0, intel: 0, ion_fw: 0, bt: 0, fulldx: 0} },
              { pn: 'RLN4764', desc: 'Custom Earpiece — Medium, Left Ear', note: '', checks: {impres: 0, ip68: 0, ul: 0, intel: 0, ion_fw: 0, bt: 0, fulldx: 0} },
              { pn: 'RLN4765', desc: 'Custom Earpiece — Large, Left Ear', note: '', checks: {impres: 0, ip68: 0, ul: 0, intel: 0, ion_fw: 0, bt: 0, fulldx: 0} },
            ]
          },
        ]
      },
      headsets: {
        cols: ["Part Number", "Description", "IMPRES", "IP Rated", "UL HazLoc", "Intel Audio", "Ion FW Req", "NRR", "Noise Cancel"],
        label: 'Headsets',
        icon: '',
        sections: [
          {
            title: 'HS700Ex Heavy-Duty Headsets (ATEX/IECEx, IP65/IP67)',
            items: [
              { pn: 'PMLN8628', desc: 'HS700Ex Heavy-Duty Over-the-Head Headset with NC Boom Mic, IP65/IP67, 26dB NRR (SNR 33dB)', note: 'ATEX/IECEx; Nexus connector; requires PMMN4163 RSM or AD700Ex adapter PMLN8634', checks: {impres: 0, ip: 1, ul: 0, intel: 0, ion_fw: 0, nrr: "26dB", nc: 0} },
              { pn: 'PMLN8629', desc: 'HS700Ex Heavy-Duty Hard-Hat Attached Headset with NC Boom Mic, IP65/IP67, 24dB NRR (SNR 32dB)', note: 'ATEX/IECEx; hard hat not included; compatible: 3M G3000, Kask Zenith, MSA V-Gard, Petzl Vertex, Uvex Pheos', checks: {impres: 0, ip: 1, ul: 0, intel: 0, ion_fw: 0, nrr: "24dB", nc: 0} },
            ]
          },
          {
            title: 'HS750Ex Headsets with Ambient Sound Control (ATEX/IECEx, IP65)',
            items: [
              { pn: 'PMLN8631', desc: 'HS750Ex Over-the-Head Headset with NC Boom Mic + Ambient Sound Control, IP65, 25dB NRR (SNR 32dB)', note: 'ATEX/IECEx; Nexus connector; requires PMMN4163 RSM or AD700Ex adapter PMLN8634', checks: {impres: 0, ip: 1, ul: 0, intel: 0, ion_fw: 0, nrr: "25dB", nc: 0} },
              { pn: 'PMLN8632', desc: 'HS750Ex Hard-Hat Attached Headset with NC Boom Mic + Ambient Sound Control, IP65, 24dB NRR (SNR 30dB)', note: 'ATEX/IECEx; hard hat not included', checks: {impres: 0, ip: 1, ul: 0, intel: 0, ion_fw: 0, nrr: "24dB", nc: 0} },
            ]
          },
          {
            title: 'Bone Conduction Headsets (ATEX/IECEx)',
            items: [
              { pn: 'PMLN8765', desc: 'HC-10 Helmet-COM Bone Conduction Headset with Single Speaker', note: 'ATEX/IECEx; hard-hat attached; Nexus connector; requires PMMN4163 RSM', checks: {impres: 0, ip: 0, ul: 0, intel: 0, ion_fw: 0, nrr: "\u2014", nc: 0} },
              { pn: 'PMLN8766', desc: 'HC-20 Helmet-COM Bone Conduction Headset with Dual Speaker', note: 'ATEX/IECEx; hard-hat attached; Nexus connector; requires PMMN4163 RSM', checks: {impres: 0, ip: 0, ul: 0, intel: 0, ion_fw: 0, nrr: "\u2014", nc: 0} },
            ]
          },
          {
            title: 'PTT Adapter',
            items: [
              { pn: 'PMLN8634', desc: 'AD700Ex Push-To-Talk Adapter, IP65/IP67 (ATEX/IECEx)', note: 'Connects HS700Ex/HS750Ex/HC headsets directly to radio without RSM; large front PTT button; swivel clip', checks: {impres: 0, ip: 1, ul: 0, intel: 0, ion_fw: 0, nrr: "\u2014", nc: 0} },
            ]
          },
          {
            title: 'Headset Replacement Parts',
            items: [
              { pn: 'PMLN8756', desc: 'Headband for HS700Ex & HS750Ex Series (Over-the-Head models)', note: 'For PMLN8628, PMLN8631', checks: {impres: 0, ip: 0, ul: 0, intel: 0, ion_fw: 0, nrr: "\u2014", nc: 0} },
              { pn: 'PMLN8757', desc: 'Boom Microphone for HS700Ex & HS750Ex Series', note: 'All HS700Ex/HS750Ex models', checks: {impres: 0, ip: 0, ul: 0, intel: 0, ion_fw: 0, nrr: "\u2014", nc: 0} },
              { pn: 'PMLN8758', desc: 'Boom Microphone Windscreen for HS700Ex & HS750Ex Series (5/pack)', note: 'All HS700Ex/HS750Ex models', checks: {impres: 0, ip: 0, ul: 0, intel: 0, ion_fw: 0, nrr: "\u2014", nc: 0} },
              { pn: 'PMLN8759', desc: 'Ambient Sound Wind Cover and Grid Holder for HS750Ex Series (5 sets/pack)', note: 'For PMLN8631, PMLN8632', checks: {impres: 0, ip: 0, ul: 0, intel: 0, ion_fw: 0, nrr: "\u2014", nc: 0} },
              { pn: 'PMLN8761', desc: 'Earmuff Hygiene Kit for HS700Ex Series', note: 'For PMLN8628, PMLN8629', checks: {impres: 0, ip: 0, ul: 0, intel: 0, ion_fw: 0, nrr: "\u2014", nc: 0} },
              { pn: 'PMLN8760', desc: 'Earmuff Hygiene Kit for HS750Ex Series', note: 'For PMLN8631, PMLN8632', checks: {impres: 0, ip: 0, ul: 0, intel: 0, ion_fw: 0, nrr: "\u2014", nc: 0} },
              { pn: 'PMLN8762', desc: 'Belt Clip for AD700Ex PTT Adapter', note: 'For PMLN8634', checks: {impres: 0, ip: 0, ul: 0, intel: 0, ion_fw: 0, nrr: "\u2014", nc: 0} },
            ]
          },
        ]
      },
      batteries: {
        cols: ["Part Number", "Description", "IMPRES", "Capacity", "IP Rating", "UL HazLoc", "Temp Range"],
        label: 'Batteries',
        icon: '',
        sections: [
          {
            title: 'ATEX/IECEx Battery',
            items: [
              { pn: 'PMNN4848', desc: 'IMPRES Li-Ion 2150mAh IP66/IP68 ATEX Battery', note: 'ATEX/IECEx certified; R7Ex IIA: -25°C to +60°C digital / -20°C to +60°C analogue; R7Ex IIC: -30°C to +60°C', checks: {impres: 1, mah: "2150", ip: "IP66", ul: 0, temp: "\u2014"} },
            ]
          },
        ]
      },
      chargers: {
        cols: ["Part Number", "Description", "IMPRES", "Pockets", "Recond."],
        label: 'Chargers',
        icon: '',
        sections: [
          {
            title: 'IMPRES Single-Unit Chargers',
            items: [
              { pn: 'PMPN4527', desc: 'IMPRES Single-Unit Charger Base Only (no power supply)', note: '100-240 VAC', checks: {impres: 1, pockets: "1", recondn: 0} },
              { pn: 'PMPN4576', desc: 'IMPRES Single-Unit Charger — US/NA/TW Plug', note: '120 VAC', checks: {impres: 1, pockets: "1", recondn: 0} },
              { pn: 'PMPN4577', desc: 'IMPRES Single-Unit Charger — EU Plug', note: '240 VAC', checks: {impres: 1, pockets: "1", recondn: 0} },
              { pn: 'PMPN4572', desc: 'IMPRES Single-Unit Charger — UK/HK Plug', note: '240 VAC', checks: {impres: 1, pockets: "1", recondn: 0} },
              { pn: 'PMPN4573', desc: 'IMPRES Single-Unit Charger — ARG Plug', note: '240 VAC', checks: {impres: 1, pockets: "1", recondn: 0} },
              { pn: 'PMPN4575', desc: 'IMPRES Single-Unit Charger — BRZ Plug', note: '100-240 VAC', checks: {impres: 1, pockets: "1", recondn: 0} },
              { pn: 'PMPN4571', desc: 'IMPRES Single-Unit Charger — AUS/NZ Plug', note: '240 VAC', checks: {impres: 1, pockets: "1", recondn: 0} },
              { pn: 'PMPN4574', desc: 'IMPRES Single-Unit Charger — KOR Plug', note: '240 VAC', checks: {impres: 1, pockets: "1", recondn: 0} },
              { pn: 'PMPN4578', desc: 'IMPRES Single-Unit Charger — JP Plug', note: '100-240 VAC', checks: {impres: 1, pockets: "1", recondn: 0} },
              { pn: 'PMPN4579', desc: 'IMPRES Single-Unit Charger — CH Plug', note: '240 VAC', checks: {impres: 1, pockets: "1", recondn: 0} },
              { pn: 'PMPN4582', desc: 'IMPRES Single-Unit Charger — India Plug', note: '100-240 VAC', checks: {impres: 1, pockets: "1", recondn: 0} },
            ]
          },
          {
            title: 'IMPRES 2 Multi-Unit Chargers (6-pocket)',
            items: [
              { pn: 'PMPN4283', desc: 'IMPRES 2 Multi-Unit Charger Base Only', note: '100-240 VAC; 6-pocket', checks: {impres: 1, pockets: "6", recondn: 0} },
              { pn: 'PMPN4284', desc: 'IMPRES 2 Multi-Unit Charger — US/NA Plug', note: '100-240 VAC; 6-pocket', checks: {impres: 1, pockets: "6", recondn: 0} },
              { pn: 'PMPN4289', desc: 'IMPRES 2 Multi-Unit Charger — EU Plug', note: '100-240 VAC; 6-pocket', checks: {impres: 1, pockets: "6", recondn: 0} },
              { pn: 'PMPN4290', desc: 'IMPRES 2 Multi-Unit Charger — UK/HK Plug', note: '100-240 VAC; 6-pocket', checks: {impres: 1, pockets: "6", recondn: 0} },
              { pn: 'PMPN4291', desc: 'IMPRES 2 Multi-Unit Charger — ARG Plug', note: '100-240 VAC; 6-pocket', checks: {impres: 1, pockets: "6", recondn: 0} },
              { pn: 'PMPN4292', desc: 'IMPRES 2 Multi-Unit Charger — BRZ Plug', note: '100-240 VAC; 6-pocket', checks: {impres: 1, pockets: "6", recondn: 0} },
              { pn: 'PMPN4293', desc: 'IMPRES 2 Multi-Unit Charger — AUS/NZ Plug', note: '100-240 VAC; 6-pocket', checks: {impres: 1, pockets: "6", recondn: 0} },
              { pn: 'PMPN4294', desc: 'IMPRES 2 Multi-Unit Charger — KOR Plug', note: '100-240 VAC; 6-pocket', checks: {impres: 1, pockets: "6", recondn: 0} },
              { pn: 'PMPN4295', desc: 'IMPRES 2 Multi-Unit Charger — JP Plug', note: '100-240 VAC; 6-pocket', checks: {impres: 1, pockets: "6", recondn: 0} },
              { pn: 'PMPN4296', desc: 'IMPRES 2 Multi-Unit Charger — CN Plug', note: '100-240 VAC; 6-pocket', checks: {impres: 1, pockets: "6", recondn: 0} },
              { pn: 'PMPN4462', desc: 'IMPRES 2 Multi-Unit Charger — TW Plug', note: '100-240 VAC; 6-pocket', checks: {impres: 1, pockets: "6", recondn: 0} },
              { pn: 'PMPN4610', desc: 'IMPRES 2 Multi-Unit Charger — BIS (India) Plug', note: '100-240 VAC; 6-pocket', checks: {impres: 1, pockets: "6", recondn: 0} },
              { pn: 'BR000272A01', desc: 'Wall Mount Bracket for IMPRES 2 Multi-Unit Charger', note: '', checks: {impres: 1, pockets: "1", recondn: 0} },
              { pn: 'AS000129A01', desc: 'Interchangeable Charging Pocket', note: '', checks: {impres: 0, pockets: "1", recondn: 0} },
            ]
          },
        ]
      },
      carry: {
        label: 'Carry Solutions',
        icon: '',
        sections: [
          {
            title: 'Hard Leather Carry Cases (ATEX)',
            items: [
              { pn: 'PMLN8636', desc: 'Hard Leather Case with 2.5-inch Swivel Belt Loop — R7Ex Non-Display (NKP)', note: 'D-rings for body strap; straps with snap buttons' },
              { pn: 'PMLN8637', desc: 'Hard Leather Case with 2.5-inch Swivel Belt Loop — R7Ex Display (FKP)', note: 'D-rings for body strap; straps with snap buttons' },
              { pn: 'PMLN8641', desc: 'Hard Leather Case with 2.5-inch Fixed Belt Loop — R7Ex Non-Display (NKP)', note: 'D-rings for body strap' },
              { pn: 'PMLN8642', desc: 'Hard Leather Case with 2.5-inch Fixed Belt Loop — R7Ex Display (FKP)', note: 'D-rings for body strap' },
              { pn: 'PMLN8722', desc: '2.5-inch Swivel Belt Loop for ATEX Model', note: 'Hard leather replacement' },
              { pn: 'PMLN6086', desc: '2.5-inch Belt Clip — Display and Non-Display', note: 'Plastic; fixed' },
            ]
          },
          {
            title: 'Straps',
            items: [
              { pn: 'RLN6486', desc: 'Leather Radio Strap (up to 157.5 cm / 62 in)', note: '' },
              { pn: 'RLN6487', desc: 'Leather Radio Strap XL (up to 177.8 cm / 70 in)', note: '' },
              { pn: 'NTN5243', desc: 'Adjustable Nylon Carrying Strap (up to 91.4 cm / 36 in)', note: '' },
              { pn: 'RLN6488', desc: 'Anti-Sway Strap for Leather Radio Straps (up to 22.9 cm / 9 in)', note: '' },
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
              { pn: 'PMAE4079',    desc: 'UHF Wideband Whip Antenna (400-527 MHz), 15cm', note: '' },
              { pn: 'AN000348A01', desc: 'UHF Stubby Wideband Antenna (400-527 MHz), 9cm', note: '' },
              { pn: 'AN000350A01', desc: 'UHF Short Stubby Antenna (400-450 MHz), 6cm', note: '' },
              { pn: 'AN000351A01', desc: 'UHF Short Stubby Antenna (440-490 MHz), 6cm', note: '' },
            ]
          },
          {
            title: '350 MHz Antenna',
            items: [
              { pn: 'PMAD4139', desc: 'Whip Antenna (350-400 MHz), 16cm', note: '' },
            ]
          },
          {
            title: 'Antenna ID Bands (10/pack)',
            items: [
              { pn: '32012144001', desc: 'Antenna ID Band — Grey (10/pack)', note: '' },
              { pn: '32012144002', desc: 'Antenna ID Band — Yellow (10/pack)', note: '' },
              { pn: '32012144003', desc: 'Antenna ID Band — Green (10/pack)', note: '' },
              { pn: '32012144004', desc: 'Antenna ID Band — Blue (10/pack)', note: '' },
              { pn: '32012144005', desc: 'Antenna ID Band — Purple (10/pack)', note: '' },
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
              { pn: '15012157001', desc: 'Accessory Connector Dust Cover', note: '' },
              { pn: 'PMKN4160',    desc: 'ATEX USB Data Cable', note: '' },
              { pn: 'PMLN8700',    desc: 'Back Bezel Kit with US RFID Tag', note: '' },
              { pn: 'PMLN8707',    desc: 'Back Bezel Kit with EU RFID Tag', note: '' },
              { pn: 'PMLN8699',    desc: 'Back Bezel Kit with NFC Tag', note: '' },
              { pn: 'PMLN8750',    desc: 'ATEX Approved Identification Label (50/pack)', note: 'For identifying ATEX-approved radios in hazardous areas' },
            ]
          },
        ]
      },
    }
  }
};
const RADIOS = RADIOS_DATA;