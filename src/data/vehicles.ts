// Squad Vehicle Database
// Categorized by vehicle type with faction assignments

export interface Vehicle {
  name: string;
  image: string;
  factions: string[]; // Faction codes: USA, USMC, BAF, CAF, ADF, RGF, VDV, PLA, PLANMC, PLAAGF, MEA, TLF, INS, IMF, AFU
  link?: string; // Link to vehicle detail page slug (e.g., "m1a2-abrams")
}

export interface VehicleSubcategory {
  name: string;
  slug: string;
  icon: string;
  description: string;
  vehicles: Vehicle[];
}

export interface VehicleCategory {
  name: string;
  slug: string;
  color: string;
  colorClass: string;
  subcategories: VehicleSubcategory[];
}

// Faction display names
export const factionNames: Record<string, string> = {
  USA: "US Army",
  USMC: "US Marines",
  BAF: "British Army",
  CAF: "Canadian Forces",
  ADF: "Australian Defence",
  RGF: "Russian Ground Forces",
  VDV: "Russian Airborne",
  PLA: "PLA",
  PLANMC: "PLA Navy Marines",
  PLAAGF: "PLA Amphibious",
  MEA: "Middle Eastern Alliance",
  TLF: "Turkish Land Forces",
  INS: "Insurgents",
  IMF: "Irregular Militia",
  AFU: "Armed Forces Ukraine",
  WPMC: "Western PMC",
  GFI: "GFI",
};

export const vehicleCategories: VehicleCategory[] = [
  {
    name: "Combat Vehicles",
    slug: "combat",
    color: "red",
    colorClass: "bg-red-500/20 text-red-400",
    subcategories: [
      {
        name: "Main Battle Tanks (MBTs)",
        slug: "mbt",
        icon: "/img/icons/default/vehicles/map_tank.svg",
        description: "MBTs are the most powerful land vehicles in Squad. With unmatched long range firepower and heavy armor, they're the kings of the battlefield.",
        vehicles: [
          { name: "FV4034 Challenger 2", image: "FV4034.webp", factions: ["BAF"], link: "fv4034" },
          { name: "Leopard 2A6M CAN", image: "Leopard 2A6M CAN.webp", factions: ["CAF"], link: "leopard-2a6m" },
          { name: "M1A1 Abrams", image: "M1A1.webp", factions: ["ADF", "USMC"], link: "m1a1-abrams" },
          { name: "M1A2 Abrams", image: "M1A2.webp", factions: ["USA"], link: "m1a2-abrams" },
          { name: "M60T Sabra", image: "M60T.webp", factions: ["TLF", "WPMC"], link: "m60t" },
          { name: "T-62", image: "T-62.webp", factions: ["INS", "IMF", "GFI"], link: "t-62" },
          { name: "T-64BM2", image: "T-64BM2.webp", factions: ["AFU"], link: "t-64" },
          { name: "T-72A", image: "T-72A.webp", factions: ["RGF", "MEA", "VDV"], link: "t-72b3" },
          { name: "T-72B3", image: "T-72B3.webp", factions: ["RGF", "VDV"], link: "t-72b3" },
          { name: "T-72S", image: "T-72S.webp", factions: ["GFI"], link: "t-72b3" },
          { name: "T-90A", image: "T-90A.webp", factions: ["RGF"], link: "t-90a" },
          { name: "ZTZ99A", image: "ZTZ99A.webp", factions: ["PLA", "PLAAGF"], link: "ztz99a" },
        ]
      },
      {
        name: "Mobile Gun Systems (MGS)",
        slug: "mgs",
        icon: "/img/icons/default/vehicles/T_map_mgs.svg",
        description: "MGSs are fire support vehicles equipped with tank cannons but light armor.",
        vehicles: [
          { name: "M1128 MGS Stryker", image: "M1128 MGS.webp", factions: ["USA"], link: "m1128-mgs" },
          { name: "Sprut-SDM1", image: "Sprut-SDM1.webp", factions: ["VDV"], link: "sprut-sdm1" },
          { name: "ZTD05", image: "ZTD05.webp", factions: ["PLANMC", "PLAAGF"], link: "ztd05" },
        ]
      },
      {
        name: "Infantry Fighting Vehicles (IFVs)",
        slug: "ifv",
        icon: "/img/icons/default/vehicles/map_trackedifv.svg",
        description: "IFVs are autocannon-equipped vehicles that can also transport infantry. Their weapon systems can cripple other vehicles and even damage tanks.",
        vehicles: [
          { name: "ACV-15 25mm", image: "ACV-15 25mm.webp", factions: ["TLF"], link: "acv-15" },
          { name: "BMD-1M", image: "BMD-1M.webp", factions: ["VDV"], link: "bmd-1m" },
          { name: "BMD-4M", image: "BMD-4M.webp", factions: ["VDV"], link: "bmd-4m" },
          { name: "BMP-1", image: "BMP-1.webp", factions: ["INS", "IMF", "GFI"], link: "bmp-1" },
          { name: "BMP-1AM", image: "BMP-1AM.webp", factions: ["RGF"], link: "bmp-1" },
          { name: "BMP-1TS", image: "BMP-1TS.webp", factions: ["AFU"], link: "bmp-1" },
          { name: "BMP-2", image: "BMP-2.webp", factions: ["RGF", "GFI", "IMF"], link: "bmp-2" },
          { name: "BMP-2M", image: "BMP-2M.webp", factions: ["RGF"], link: "bmp-2m" },
          { name: "BMP-3M", image: "BMP-3M.webp", factions: ["RGF"], link: "bmp-3m" },
          { name: "BTR-4", image: "BTR-4.webp", factions: ["AFU"], link: "btr-4" },
          { name: "FV510 Warrior", image: "FV510.webp", factions: ["BAF"], link: "fv510" },
          { name: "FV510 UA Warrior", image: "FV510 UA.webp", factions: ["BAF"], link: "fv510-ua" },
          { name: "LAV-25", image: "LAV-25.webp", factions: ["USMC"], link: "lav-25" },
          { name: "M2A3 Bradley", image: "M2A3.webp", factions: ["USA"], link: "m2a3-bradley" },
          { name: "PARS III 25mm", image: "PARS III 25mm.webp", factions: ["TLF"], link: "pars-iii" },
          { name: "ZBD04A", image: "ZBD04A.webp", factions: ["PLA"], link: "zbd04a" },
          { name: "ZBD05", image: "ZBD05.webp", factions: ["PLANMC", "PLAAGF"], link: "zbd05" },
          { name: "ZBD05 HJ73C", image: "ZBD05.webp", factions: ["PLAAGF", "PLANMC"], link: "zbd05" },
          { name: "ZBL08 HJ73C", image: "ZBL08.webp", factions: ["PLANMC"], link: "zbl08" },
          { name: "ZBL08", image: "ZBL08.webp", factions: ["PLA"], link: "zbl08" },
          { name: "ZSD89II IFV", image: "ZSD89II IFV.webp", factions: ["PLA", "PLAAGF"], link: "zsd89" },
          { name: "ZSL92 IFV", image: "ZSL92A APC QJZ89.webp", factions: ["PLA"], link: "zsl92" },
          { name: "ASLAV-25", image: "ASLAV.webp", factions: ["ADF"], link: "aslav-25" },
        ]
      },
      {
        name: "Armored Personnel Carriers (APCs)",
        slug: "apc",
        icon: "/img/icons/default/vehicles/map_trackedapc.svg",
        description: "APCs are designed to transport infantry across the battlefield with protection against small arms fire and turret-mounted weapons for fire support.",
        vehicles: [
          { name: "AAVC-7A1", image: "AAVC-7A1.webp", factions: ["USMC"], link: "aavc-7a1" },
          { name: "AAVP-7A1", image: "AAVP-7A1.webp", factions: ["USMC"], link: "aavp-7a1" },
          { name: "ACV-15 M2", image: "ACV-15 M2.webp", factions: ["TLF"], link: "acv-15" },
          { name: "ACV-15 MG3", image: "ACV-15 MG3.webp", factions: ["TLF"], link: "acv-15" },
          { name: "BTR-80", image: "BTR-80.webp", factions: ["RGF", "IMF", "INS", "GFI"], link: "btr-80" },
          { name: "BTR-82A", image: "BTR-82A.webp", factions: ["RGF"], link: "btr-82a" },
          { name: "BTR-D", image: "BTR-D.webp", factions: ["VDV"], link: "btr-d" },
          { name: "BTR-D AGS-17", image: "BTR-D AGS-17.webp", factions: ["VDV"], link: "btr-d" },
          { name: "BTR-D Kord", image: "BTR-D Kord.webp", factions: ["VDV"], link: "btr-d" },
          { name: "BTR-D PKM", image: "BTR-D.webp", factions: ["VDV"], link: "btr-d" },
          { name: "BTR-MDM", image: "BTR-MDM.webp", factions: ["VDV"], link: "btr-mdm" },
          { name: "Cobra II M2", image: "Cobra II M2.webp", factions: ["TLF"], link: "cobra-ii" },
          { name: "Cobra II M2 RWS", image: "Cobra II M2 RWS.webp", factions: ["TLF"], link: "cobra-ii" },
          { name: "Cobra II MG3", image: "Cobra II MG3.webp", factions: ["TLF"], link: "cobra-ii" },
          { name: "Cobra II MG3 RWS", image: "Cobra II MG3.webp", factions: ["TLF"], link: "cobra-ii" },
          { name: "FV432 L11A1", image: "FV432 L11A1.webp", factions: ["BAF"], link: "fv432" },
          { name: "FV432 L11A1 RWS", image: "FV432 L11A1 RWS.webp", factions: ["BAF"], link: "fv432" },
          { name: "FV432 L37A2 RWS", image: "FV432 L37A2 RWS.webp", factions: ["BAF"], link: "fv432" },
          { name: "LAV 6", image: "LAV 6.webp", factions: ["CAF"], link: "lav-6" },
          { name: "LAV III C6 RWS", image: "LAV III C6 RWS.webp", factions: ["CAF"], link: "lav-iii" },
          { name: "Lynx8x8 QJZ89", image: "Lynx8x8 QJZ89.webp", factions: ["PLA", "PLAAGF", "PLANMC"], link: "lynx" },
          { name: "Lynx8x8 QLZ87", image: "Lynx8x8 QLZ87.webp", factions: ["PLA", "PLAAGF", "PLANMC"], link: "lynx" },
          { name: "M1126 CROWS M2", image: "M1126 CROWS M2.webp", factions: ["USA"], link: "m1126-stryker" },
          { name: "M1126 CROWS M240", image: "M1126 CROWS M240.webp", factions: ["USA"], link: "m1126-stryker" },
          { name: "M113A3", image: "M113A3.webp", factions: ["USA", "CAF"], link: "m113a3" },
          { name: "M113A3 M2", image: "M113A3 M2.webp", factions: ["USA", "WPMC", "CRF"], link: "m113a3" },
          { name: "M113A3 Mk19", image: "M113A3 Mk19.webp", factions: ["USA"], link: "m113a3" },
          { name: "M113A3 MSV", image: "M113A3 MSV.webp", factions: ["CAF", "WPMC"], link: "m113a3" },
          { name: "M113A3 TLAV", image: "M113A3 TLAV.webp", factions: ["CAF"], link: "m113a3" },
          { name: "MT-LB PKT", image: "MT-LB PKT.webp", factions: ["RGF", "INS"], link: "mt-lb" },
          { name: "MT-LB VMK", image: "MT-LB VMK.webp", factions: ["RGF", "GFI", "IMF"], link: "mt-lb" },
          { name: "MT-LBM 6MA", image: "MT-LBM 6MA.webp", factions: ["RGF"], link: "mt-lbm" },
          { name: "MT-LBM 6MB", image: "MT-LBM 6MB.webp", factions: ["RGF", "IMF"], link: "mt-lbm" },
          { name: "MTLB PKT", image: "MTLB PKT.webp", factions: ["INS", "IMF"], link: "mt-lb" },
          { name: "PARS III M2 RWS", image: "PARS III M2 RWS.webp", factions: ["TLF"], link: "pars-iii" },
          { name: "PARS III MG3 RWS", image: "PARS III MG3 RWS.webp", factions: ["TLF"], link: "pars-iii" },
          { name: "PARS III Mk19 RWS", image: "PARS III Mk19 RWS.webp", factions: ["TLF"], link: "pars-iii" },
          { name: "ZSD05", image: "ZSD05.webp", factions: ["PLANMC", "PLAAGF"], link: "zsd05" },
          { name: "ZSD05 QJZ89", image: "ZSD05.webp", factions: ["PLANMC"], link: "zsd05" },
          { name: "ZSD89 QJZ89", image: "ZSD89 QJZ89.webp", factions: ["PLA", "PLAAGF"], link: "zsd89" },
          { name: "ZSD89 QLZ87", image: "ZSD89 QLZ87.webp", factions: ["PLA", "PLAAGF"], link: "zsd89" },
          { name: "ZSL10", image: "ZSL10.webp", factions: ["PLA", "PLANMC"], link: "zsl10" },
          { name: "ZSL10 QJZ89", image: "ZSL10.webp", factions: ["PLA"], link: "zsl10" },
          { name: "ZSL10 QLZ87", image: "ZSL10.webp", factions: ["PLA"], link: "zsl10" },
          { name: "ZSL92A APC QJZ89", image: "ZSL92A APC QJZ89.webp", factions: ["PLA"], link: "zsl92" },
          { name: "ZSL92A QLZ87", image: "ZSL92A APC QJZ89.webp", factions: ["PLA"], link: "zsl92" },
        ]
      },
      {
        name: "Reconnaissance Vehicles",
        slug: "recon",
        icon: "/img/icons/default/vehicles/T_map_wheeledrecon.svg",
        description: "Reconnaissance vehicles are dedicated armored fighting vehicles for forward observation, intelligence gathering, and skirmish operations.",
        vehicles: [
          { name: "BRDM-2", image: "BRDM-2.webp", factions: ["RGF", "VDV", "INS", "IMF", "GFI"], link: "brdm-2" },
          { name: "BRDM-2L1", image: "BRDM-2L1.webp", factions: ["AFU"], link: "brdm-2" },
          { name: "Coyote", image: "Coyote.webp", factions: ["CAF", "CRF"], link: "coyote" },
          { name: "FV107 Scimitar", image: "FV107.webp", factions: ["BAF"], link: "fv107" },
        ]
      },
    ]
  },
  {
    name: "Light Vehicles",
    slug: "light",
    color: "yellow",
    colorClass: "bg-yellow-500/20 text-yellow-400",
    subcategories: [
      {
        name: "Armed Light Vehicles",
        slug: "armed-light",
        icon: "/img/icons/default/vehicles/map_jeep_turret.svg",
        description: "Light vehicles with mounted weapons ranging from machine guns to grenade launchers. Fast but vulnerable.",
        vehicles: [
          { name: "CSK131 QJC88 RWS", image: "CSK131 QJC88 RWS.webp", factions: ["PLA", "PLAAGF", "PLANMC"], link: "csk131" },
          { name: "CSK131 QJY88", image: "CSK131 QJY88.webp", factions: ["PLA", "PLAAGF", "PLANMC"], link: "csk131" },
          { name: "CSK131 QJZ89", image: "CSK131 QJZ89.webp", factions: ["PLA", "PLAAGF", "PLANMC"], link: "csk131" },
          { name: "CSK131 QLZ87", image: "CSK131 QLZ87.webp", factions: ["PLA"], link: "csk131" },
          { name: "CTM131 QJY88", image: "CTM131 QJY88.webp", factions: ["PLA"], link: "ctm131" },
          { name: "CTM131 QJZ89", image: "CTM131 QJZ89.webp", factions: ["PLA"], link: "ctm131" },
          { name: "Kozak-2M1 AGS-17", image: "Kozak-2M1 AGS-17.webp", factions: ["AFU"], link: "kozak-2m1" },
          { name: "Kozak-2M1 NSV", image: "Kozak-2M1 NSV.webp", factions: ["AFU"], link: "kozak-2m1" },
          { name: "Light FSV", image: "Light FSV.webp", factions: ["INS"] },
          { name: "LPPV", image: "LPPV.webp", factions: ["BAF"], link: "lppv" },
          { name: "LPPV RWS", image: "LPPV RWS.webp", factions: ["BAF"], link: "lppv" },
          { name: "LUVW C6", image: "LUVW C6.webp", factions: ["CAF"], link: "luvw" },
          { name: "LUVW M2", image: "LUVW M2.webp", factions: ["CAF"], link: "luvw" },
          { name: "M-ATV CROWS M2", image: "M-ATV CROWS M2.webp", factions: ["USA"], link: "m-atv" },
          { name: "M-ATV CROWS M240", image: "M-ATV M240.webp", factions: ["USA"], link: "m-atv" },
          { name: "M-ATV M2", image: "M-ATV M2.webp", factions: ["USA"], link: "m-atv" },
          { name: "M-ATV M240", image: "M-ATV M240.webp", factions: ["USA"], link: "m-atv" },
          { name: "M-ATV Mk19", image: "M-ATV Mk19.webp", factions: ["USA"], link: "m-atv" },
          { name: "M1117 ASV", image: "M1117.webp", factions: ["USA", "WPMC"] },
          { name: "M1151 CROWS M2", image: "M1151 CROWS M2.webp", factions: ["USA", "USMC"], link: "m1151-hmmwv" },
          { name: "M1151 M2", image: "M1151 M2.webp", factions: ["USA", "USMC", "WPMC"], link: "m1151-hmmwv" },
          { name: "M1151 M240", image: "M1151 M240.webp", factions: ["USA", "USMC", "WPMC"], link: "m1151-hmmwv" },
          { name: "M1151 Mk19", image: "M1151 Mk19.webp", factions: ["USA", "USMC"], link: "m1151-hmmwv" },
          { name: "M1151 Open Doors M2", image: "M1151 M2.webp", factions: ["USMC"], link: "m1151-hmmwv" },
          { name: "M1151 Open Doors M240", image: "M1151 M240.webp", factions: ["USMC"], link: "m1151-hmmwv" },
          { name: "M1151 Open Doors Mk19", image: "M1151 Mk19.webp", factions: ["USMC"], link: "m1151-hmmwv" },
          { name: "MATV CROWS M2", image: "MATV CROWS M2.webp", factions: ["USMC"], link: "m-atv" },
          { name: "MATV M2", image: "MATV M2.webp", factions: ["USMC"], link: "m-atv" },
          { name: "MATV Mk19", image: "MATV Mk19.webp", factions: ["USMC"], link: "m-atv" },
          { name: "PMV Mag58", image: "PMV Mag58.webp", factions: ["ADF"], link: "bushmaster-pmv" },
          { name: "PMV Mag58 x3", image: "PMV Mag58.webp", factions: ["ADF"], link: "bushmaster-pmv" },
          { name: "PMV RWS M2", image: "PMV RWS M2.webp", factions: ["ADF"], link: "bushmaster-pmv" },
          { name: "Safir Kord", image: "Safir Kord.webp", factions: ["GFI"], link: "safir" },
          { name: "Safir MG3", image: "Safir MG3.webp", factions: ["GFI"], link: "safir" },
          { name: "Simir Kord", image: "Simir Kord.webp", factions: ["MEA"], link: "safir" },
          { name: "Simir MG3", image: "Simir MG3.webp", factions: ["MEA"], link: "safir" },
          { name: "TAPV", image: "TAPV.webp", factions: ["CAF"], link: "tapv" },
          { name: "Tigr-M", image: "Tigr-M.webp", factions: ["RGF", "IMF"], link: "tigr-m" },
          { name: "Tigr-M AGS-17", image: "Tigr-M AGS-17.webp", factions: ["RGF"], link: "tigr-m" },
          { name: "Tigr-M Kord", image: "Tigr-M Kord.webp", factions: ["RGF", "IMF", "VDV"], link: "tigr-m" },
          { name: "Tigr-M RWS Kord", image: "Tigr-M RWS Kord.webp", factions: ["RGF"], link: "tigr-m" },
        ]
      },
      {
        name: "Technicals",
        slug: "technicals",
        icon: "/img/icons/default/vehicles/map_jeep_turret.svg",
        description: "Improvised fighting vehicles, typically civilian trucks with mounted weapons. Glass cannons - huge punch but extremely vulnerable.",
        vehicles: [
          { name: "M1151 Technical DSHK", image: "M1151 Technical DSHK.webp", factions: ["INS"], link: "technical" },
          { name: "Technical AGS-17", image: "Technical AGS-17.webp", factions: ["INS", "IMF"], link: "technical" },
          { name: "Technical BMP-1", image: "Technical BMP-1.webp", factions: ["INS"], link: "technical" },
          { name: "Technical HMG", image: "Technical HMG.webp", factions: ["INS", "IMF"], link: "technical" },
          { name: "Technical M2", image: "Technical M2.webp", factions: ["INS", "IMF", "WPMC", "CRF"], link: "technical" },
          { name: "Technical M134 Minigun", image: "Technical M134 Minigun.webp", factions: ["INS", "WPMC"], link: "technical" },
          { name: "CPV M134 Minigun", image: "CPV M134 Minigun.webp", factions: ["INS", "WPMC"], link: "cpv" },
          { name: "Technical SPG-9", image: "Technical SPG-9.webp", factions: ["INS", "IMF"], link: "technical" },
          { name: "Technical UB-32", image: "Technical UB-32.webp", factions: ["INS", "IMF"], link: "technical" },
          { name: "Technical ZU-23-2", image: "Technical ZU-23-2.webp", factions: ["INS", "IMF"], link: "technical" },
        ]
      },
      {
        name: "Anti-Tank Light Vehicles",
        slug: "at-light",
        icon: "/img/icons/default/vehicles/map_jeep_antitank.svg",
        description: "Light vehicles with anti-tank missile launchers. Glass cannons with devastating anti-armor capability.",
        vehicles: [
          { name: "BRDM-2 Spandrel", image: "BRDM-2 Spandrel.webp", factions: ["RGF", "GFI"], link: "brdm-2" },
          { name: "CSK131 HJ8", image: "CSK131 HJ8.webp", factions: ["PLA", "PLANMC"], link: "csk131" },
          { name: "M-ATV TOW", image: "M-ATV TOW.webp", factions: ["USA"], link: "m-atv" },
          { name: "M1151 TOW", image: "M1151 TOW.webp", factions: ["USA", "WPMC"], link: "m1151-hmmwv" },
          { name: "M1151 Open Doors TOW", image: "M1151 TOW.webp", factions: ["USMC", "CRF"], link: "m1151-hmmwv" },
          { name: "MATV TOW", image: "MATV TOW.webp", factions: ["USMC"], link: "m-atv" },
          { name: "Safir Kornet", image: "Safir Kornet.webp", factions: ["GFI"], link: "safir" },
          { name: "Simir Kornet", image: "Simir Kornet.webp", factions: ["MEA"], link: "safir" },
          { name: "Technical Kornet", image: "Technical Kornet.webp", factions: ["AFU", "INS", "IMF"], link: "technical" },
        ]
      },
      {
        name: "Scout Cars & Transport",
        slug: "scout",
        icon: "/img/icons/default/vehicles/map_jeep_transport.svg",
        description: "Open-topped, nimble vehicles for quick transportation with minimal or no armament.",
        vehicles: [
          { name: "Light Transport", image: "Light Transport.webp", factions: ["INS", "IMF"], link: "technical" },
          { name: "LUVW Transport", image: "LUVW Transport.webp", factions: ["CAF"], link: "luvw" },
          { name: "CPV Transport", image: "CPV Transport.webp", factions: ["INS", "WPMC"], link: "cpv" },
        ]
      },
      {
        name: "Motorbikes",
        slug: "motorbikes",
        icon: "/img/icons/default/vehicles/map_motorcycle.svg",
        description: "Small personal transportation. Extremely nimble and small targets but no protection.",
        vehicles: [
          { name: "Minsk 400", image: "Minsk 400.webp", factions: ["INS", "IMF"], link: "minsk-400" },
          { name: "Quad Bike", image: "Quad Bike.webp", factions: ["USA", "USMC", "BAF", "CAF", "ADF", "WPMC", "CRF"], link: "quad-bike" },
        ]
      },
    ]
  },
  {
    name: "Support Vehicles",
    slug: "support",
    color: "blue",
    colorClass: "bg-blue-500/20 text-blue-400",
    subcategories: [
      {
        name: "Anti-Air Vehicles",
        slug: "anti-air",
        icon: "/img/icons/default/vehicles/map_antiair.svg",
        description: "AA vehicles can strike against air targets like helicopters. Their guns can also be used for ground-fire support.",
        vehicles: [
          { name: "BTR-ZD", image: "BTR-ZD.webp", factions: ["VDV"], link: "btr-zd" },
          { name: "MT-LB ZU-23-2", image: "MT-LB ZU-23-2.webp", factions: ["RGF", "IMF"], link: "mt-lb" },
          { name: "MTLB ZU23", image: "MTLB ZU23.webp", factions: ["INS"], link: "mt-lb" },
          { name: "Ural-375D ZU-23-2", image: "Ural-375D ZU-23-2.webp", factions: ["INS", "IMF"], link: "ural-375d" },
        ]
      },
      {
        name: "Artillery Vehicles",
        slug: "artillery",
        icon: "/img/icons/default/vehicles/map_jeep_artillery.svg",
        description: "Artillery vehicles provide long-range indirect fire support. Requires coordination and skill but can be devastating.",
        vehicles: [
          { name: "BRDM-2 UB-32", image: "BRDM-2 UB-32.webp", factions: ["GFI"], link: "brdm-2" },
          { name: "KrAZ-6322 BM-21 Grad", image: "KrAZ-6322 BM-21 Grad.webp", factions: ["AFU"], link: "bm-21-grad" },
          { name: "M1064A3 M121", image: "M1064A3 M121.webp", factions: ["USA"], link: "m1064a3" },
          { name: "M113A2T M121", image: "M113A2T M121.webp", factions: ["CAF"], link: "m113a3" },
          { name: "MTLB 6MA UB-32", image: "MTLB 6MA UB-32.webp", factions: ["IMF"], link: "mt-lb" },
          { name: "Technical Mortar", image: "Technical Mortar.webp", factions: ["INS", "IMF", "WPMC"], link: "technical" },
          { name: "Ural-375D BM-21 Grad", image: "Ural-375D BM-21 Grad.webp", factions: ["IMF"], link: "bm-21-grad" },
        ]
      },
    ]
  },
  {
    name: "Logistics & Transport",
    slug: "logistics",
    color: "green",
    colorClass: "bg-green-500/20 text-green-400",
    subcategories: [
      {
        name: "Logistics Trucks",
        slug: "logi-trucks",
        icon: "/img/icons/default/vehicles/map_truck_logistics.svg",
        description: "Logistics vehicles are crucial for supply chains, delivering construction and ammo supplies. Truck logis carry 3000 supplies.",
        vehicles: [
          { name: "BMC-185 Logistics", image: "BMC-185 Logistics.webp", factions: ["TLF"], link: "bmc-185" },
          { name: "CTM131 Logistics", image: "CTM131 Logistics.webp", factions: ["PLA", "PLANMC", "PLAAGF"], link: "ctm131" },
          { name: "HX60 Logistics", image: "HX60 Logistics.webp", factions: ["BAF", "ADF"], link: "man-hx" },
          { name: "KamAZ 5350 Logistics", image: "KamAZ 5350 Logistics.webp", factions: ["RGF", "VDV"], link: "kamaz-5350" },
          { name: "KrAZ-6322 Logistics", image: "KrAZ-6322 Logistics.webp", factions: ["AFU"], link: "kraz-6322" },
          { name: "M939 Logistics", image: "M939 Logistics.webp", factions: ["USA", "USMC", "WPMC", "CRF"], link: "m939-truck" },
          { name: "MSVS Logistics", image: "MSVS Logistics.webp", factions: ["CAF"], link: "msvs" },
          { name: "Ural-375D Logistics", image: "Ural-375D Logistics.webp", factions: ["INS", "IMF"], link: "ural-375d" },
          { name: "Ural-4320 Logistics", image: "Ural-4320 Logistics.webp", factions: ["GFI"], link: "ural-4320" },
        ]
      },
      {
        name: "Logistics Light Vehicles",
        slug: "logi-light",
        icon: "/img/icons/default/vehicles/map_jeep_logistics.svg",
        description: "Smaller logistics vehicles with reduced capacity but better mobility.",
        vehicles: [
          { name: "AAVC-7A1 Logistics", image: "AAVC-7A1 Logistics.webp", factions: ["USMC"], link: "aavc-7a1" },
          { name: "BTR-DG Logistics", image: "BTR-DG Logistics.webp", factions: ["VDV"], link: "btr-d" },
          { name: "Logistics Modern Pickup", image: "Logistics Modern Pickup.webp", factions: ["INS"], link: "technical" },
          { name: "Logistics Pickup Truck", image: "Logistics Pickup Truck.webp", factions: ["INS", "IMF", "WPMC"], link: "technical" },
          { name: "Pickup Truck", image: "Logistics Pickup Truck.webp", factions: ["INS", "IMF", "WPMC", "CRF"], link: "technical" },
          { name: "LUVW Logistics", image: "LUVW Logistics.webp", factions: ["CAF"], link: "luvw" },
          { name: "Lynx8x8 Logistics", image: "Lynx8x8 Logistics.webp", factions: ["PLA", "PLAAGF", "PLANMC"], link: "lynx" },
          { name: "M113A2 Logistics", image: "M113A2 Logistics.webp", factions: ["USA"], link: "m113a3" },
          { name: "M113A3 Logistics", image: "M113A3 Logistics.webp", factions: ["USA", "CAF"], link: "m113a3" },
          { name: "MT-LB Logistics", image: "MT-LB Logistics.webp", factions: ["AFU", "RGF", "IMF"], link: "mt-lb" },
          { name: "MTLB Logistics", image: "MTLB Logistics.webp", factions: ["INS"], link: "mt-lb" },
          { name: "Safir Logistics", image: "Safir Logistics.webp", factions: ["GFI"], link: "safir" },
          { name: "Simir Logi", image: "Simir Logi.webp", factions: ["MEA"], link: "safir" },
          { name: "Technical Logistics", image: "Technical Logistics.webp", factions: ["INS", "IMF", "WPMC", "CRF"], link: "technical" },
          { name: "ZSD05 Logistics", image: "ZSD05 Logistics.webp", factions: ["PLANMC", "PLAAGF"], link: "zsd05" },
        ]
      },
      {
        name: "Transport Trucks",
        slug: "transport-trucks",
        icon: "/img/icons/default/vehicles/map_truck_transport.svg",
        description: "Transport trucks can carry up to 16 infantrymen across the battlefield.",
        vehicles: [
          { name: "BMC-185 Transport", image: "BMC-185 Transport.webp", factions: ["TLF"], link: "bmc-185" },
          { name: "CTM131 Transport QJY88", image: "CTM131 Transport QJY88.webp", factions: ["PLA", "PLAAGF", "PLANMC"], link: "ctm131" },
          { name: "CTM131 Transport QJZ89", image: "CTM131 Transport QJZ89.webp", factions: ["PLA", "PLAAGF", "PLANMC"], link: "ctm131" },
          { name: "HX60 Transport", image: "HX60 Transport.webp", factions: ["BAF", "ADF"], link: "man-hx" },
          { name: "KamAZ 5350 Transport", image: "KamAZ 5350 Transport.webp", factions: ["RGF", "VDV"], link: "kamaz-5350" },
          { name: "KrAZ-6322 Transport", image: "KrAZ-6322 Transport.webp", factions: ["AFU"], link: "kraz-6322" },
          { name: "Lynx8x8 Transport", image: "Lynx8x8 Transport.webp", factions: ["PLA", "PLAAGF", "PLANMC"], link: "lynx" },
          { name: "M939 Transport", image: "M939 Transport.webp", factions: ["USA", "USMC", "WPMC"], link: "m939-truck" },
          { name: "MSVS Transport", image: "MSVS Transport.webp", factions: ["CAF"], link: "msvs" },
          { name: "Ural-375D Transport", image: "Ural-375D Transport.webp", factions: ["INS", "IMF"], link: "ural-375d" },
          { name: "Ural-4320 Transport", image: "Ural-4320 Transport.webp", factions: ["GFI"], link: "ural-4320" },
        ]
      },
    ]
  },
  {
    name: "Aircraft",
    slug: "aircraft",
    color: "purple",
    colorClass: "bg-purple-500/20 text-purple-400",
    subcategories: [
      {
        name: "Transport Helicopters",
        slug: "transport-heli",
        icon: "/img/icons/default/vehicles/map_transporthelo.svg",
        description: "Transport helicopters quickly move infantry and supplies across the battlefield. Essential for rapid deployment.",
        vehicles: [
          { name: "CH-146 Griffon", image: "CH-146.webp", factions: ["CAF"], link: "ch-146" },
          { name: "Mi-17", image: "Mi-17.webp", factions: ["GFI"], link: "mi-8" },
          { name: "Mi-8", image: "Mi-8.webp", factions: ["RGF", "VDV", "GFI", "CAF"], link: "mi-8" },
          { name: "Mi-8MTV-5", image: "Mi-8MTV-5.webp", factions: ["AFU"], link: "mi-8" },
          { name: "MRH-90", image: "MRH-90.webp", factions: ["ADF"], link: "mrh-90" },
          { name: "SA330 Puma", image: "SA330.webp", factions: ["BAF"], link: "sa330" },
          { name: "UH-60M Black Hawk", image: "UH-60M.webp", factions: ["USA", "ADF", "TLF"], link: "uh-60m" },
          { name: "Z-8G", image: "Z-8G.webp", factions: ["PLA", "PLAAGF"], link: "z-8" },
          { name: "Z-8J", image: "Z-8J.webp", factions: ["PLANMC"], link: "z-8" },
          { name: "Raven Transport", image: "Raven Transport.webp", factions: ["WPMC"] },
        ]
      },
      {
        name: "Attack / CAS Helicopters",
        slug: "attack-heli",
        icon: "/img/icons/default/vehicles/map_attackhelo.svg",
        description: "Attack helicopters provide close air support with miniguns and rockets. Devastating against infantry and light armor.",
        vehicles: [
          { name: "CH-146 CAS", image: "CH-146 CAS.webp", factions: ["CAF"], link: "ch-146-cas" },
          { name: "Loach CAS Small", image: "Loach CAS Small.webp", factions: ["INS", "WPMC"], link: "loach" },
          { name: "Loach Scout", image: "Loach Scout.webp", factions: ["INS", "WPMC"], link: "loach" },
          { name: "UH-1H", image: "UH-1H MG3.webp", factions: ["TLF"], link: "uh-1" },
          { name: "UH-1H MG3", image: "UH-1H MG3.webp", factions: ["TLF"], link: "uh-1" },
          { name: "UH-1Y Venom", image: "UH-1Y.webp", factions: ["USMC"], link: "uh-1" },
          { name: "Z-9A", image: "Z-9A.webp", factions: ["PLA", "PLAAGF"], link: "z-9" },
        ]
      },
    ]
  },
  {
    name: "Watercraft",
    slug: "watercraft",
    color: "cyan",
    colorClass: "bg-cyan-500/20 text-cyan-400",
    subcategories: [
      {
        name: "Boats",
        slug: "boats",
        icon: "/img/icons/default/vehicles/T_map_boat_logistics.svg",
        description: "Boats traverse water at high speed for transport or logistics but have poor protection against incoming fire.",
        vehicles: [
          { name: "RHIB", image: "RHIB.webp", factions: ["USA", "USMC", "BAF", "CAF", "RGF", "PLA", "PLAAGF", "PLANMC", "IMF", "GFI", "WPMC"], link: "rhib" },
          { name: "RHIB DShK", image: "RHIB DShK.webp", factions: ["RGF"], link: "rhib" },
          { name: "RHIB GM3", image: "RHIB GM3.webp", factions: ["TLF"], link: "rhib" },
          { name: "RHIB Logistics", image: "RHIB Logistics.webp", factions: ["USA", "USMC", "BAF", "CAF", "RGF", "PLA", "PLAAGF", "PLANMC", "IMF", "GFI", "WPMC"], link: "rhib" },
          { name: "RHIB M134", image: "RHIB M134.webp", factions: ["USA", "USMC", "WPMC"], link: "rhib" },
          { name: "RHIB M2", image: "RHIB M2.webp", factions: ["USA", "USMC", "BAF", "CAF", "TLF", "WPMC", "CRF"], link: "rhib" },
          { name: "RHIB M240", image: "RHIB M240.webp", factions: ["USA", "USMC", "BAF", "CRF"], link: "rhib" },
          { name: "RHIB MG3", image: "RHIB MG3.webp", factions: ["GFI"], link: "rhib" },
          { name: "RHIB Mk19", image: "RHIB Mk19.webp", factions: ["USA", "USMC", "WPMC"], link: "rhib" },
          { name: "RHIB NSV", image: "RHIB NSV.webp", factions: ["RGF"], link: "rhib" },
          { name: "RHIB PKM", image: "RHIB PKM.webp", factions: ["RGF", "IMF", "INS"], link: "rhib" },
          { name: "RHIB PKP", image: "RHIB PKP.webp", factions: ["RGF", "VDV"], link: "rhib" },
          { name: "RHIB QJY88", image: "RHIB QJY88.webp", factions: ["PLA", "PLANMC", "PLAAGF"], link: "rhib" },
          { name: "RHIB QJZ89", image: "RHIB QJZ89.webp", factions: ["PLA", "PLANMC", "PLAAGF"], link: "rhib" },
        ]
      },
    ]
  },
];

// Helper function to get all vehicles flat
export function getAllVehicles(): Vehicle[] {
  return vehicleCategories.flatMap(cat =>
    cat.subcategories.flatMap(sub => sub.vehicles)
  );
}

// Helper function to get total vehicle count
export function getVehicleCount(): number {
  return getAllVehicles().length;
}

// Helper function to find a subcategory by slug
export function findSubcategory(categorySlug: string, subcategorySlug: string): VehicleSubcategory | undefined {
  const category = vehicleCategories.find(c => c.slug === categorySlug);
  return category?.subcategories.find(s => s.slug === subcategorySlug);
}
