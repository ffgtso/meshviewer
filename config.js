module.exports = function () {
  return {
    'nodeInfos': [
      {
        'name': 'Clientstatistik',
        'href': 'https://grafana.sum7.eu/d/000000006/node?var-node={NODE_ID}',
        'image': 'https://multi.meshviewer.org/graph/000000006/node?panelId=1&var-node={NODE_ID}&from=now-86399s&width=650&height=350&theme=light',
        'title': 'Entwicklung der Anzahl der Clients innerhalb des letzten Tages'
      },
      {
        'name': 'Hardwareauslastung',
        'href': 'https://grafana.sum7.eu/d/000000006/node?var-node={NODE_ID}',
        'image': 'https://multi.meshviewer.org/graph/000000006/node?panelId=4&var-node={NODE_ID}&from=now-86399s&width=650&height=350&theme=light',
        'title': 'Loadavg und Arbeitspeicherauslastung innerhalb des letzten Tages'
      }
    ],
    'linkInfos': [
      {
        'name': 'Statistik für alle Links zwischen diese Knoten',
        'href': 'https://grafana.sum7.eu/d/000000006/node?var-node={SOURCE_ID}&var-nodetolink={TARGET_ID}',
        'image': 'https://multi.meshviewer.org/graph/000000006/node?panelId=7&var-node={SOURCE_ID}&var-nodetolink={TARGET_ID}&from=now-86399s&width=650&height=350&theme=light',
        'title': 'Linkstatistik des letzten Tages, min und max aller Links zwischen diesen Knoten'
      }
    ],
    'linkTypeInfos': [
      {
        'name': 'Statistik für {TYPE}',
        'href': 'https://grafana.sum7.eu/d/000000006/node?var-node={SOURCE_ID}&var-nodetolink={TARGET_ID}&var-source_mac={SOURCE_MAC}&var-target_mac={TARGET_MAC}',
        'image': 'https://multi.meshviewer.org/graph/000000006/node?panelId=8&var-node={SOURCE_ID}&var-nodetolink={TARGET_ID}&var-source_mac={SOURCE_MAC}&var-target_mac={TARGET_MAC}&from=now-86399s&width=650&height=350&theme=light',
        'title': 'Linkstatistik des letzten Tages des einzelnen Links in beide Richtungen'
      }
    ],
    'globalInfos': [
      {
        'name': 'Wochenstatistik',
        'href': 'https://grafana.sum7.eu/d/000000004/global',
        'image': 'https://multi.meshviewer.org/graph/000000004/global?panelId=1&from=now-7d&width=650&height=400&theme=light',
        'title': 'Entwicklung der Anzahl der Knoten und der Clients innerhalb der letzten 7 Tage'
      }
    ],
    'maxAge': 2,
    // Array of data provider are supported
    'dataPath': ['https://multi.meshviewer.org/data/'],
    'siteName': 'Freifunk Multiple Communities',
    'mapLayers': [
      {
        'name': 'Freifunk Regensburg',
        // Please ask Freifunk Regensburg before using its tile server c- example with retina tiles
        'url': 'https://{s}.tiles.ffrgb.net/{z}/{x}/{y}{retina}.png',
        'config': {
          'maxZoom': 20,
          'subdomains': '1234',
          'attribution': '<a href="http://www.openmaptiles.org/" target="_blank">&copy; OpenMapTiles</a> <a href="http://www.openstreetmap.org/about/" target="_blank">&copy; OpenStreetMap contributors</a>'
        }
      }
    ],
    // Set a visible frame
    'fixedCenter': [
      // Northwest
      [
        54.8449,
        6.07543
      ],
      // Southeast
      [
        47.8721,
        13.9526
      ]
    ],
    'siteNames': [
      {
        'site': 'ffac',
        'name': 'Aachen',
        'web': 'https://freifunk-aachen.de/'
      }, {
        'site': 'tecff',
        'name': 'Altdorf',
        'web': 'https://www.freifunk-altdorf.de/'
      }, {
        'site': 'ffhb',
        'name': 'Bremen',
        'web': 'https://bremen.freifunk.net/',
        'map': 'https://map.bremen.freifunk.net/'
      }, {
        'site': 'ffda',
        'name': 'Darmstadt',
        'web': 'https://darmstadt.freifunk.net/',
        'map': 'https://meshviewerDarmstadt.freifunk.net/'
      }, {
        'site': 'ffein',
        'name': 'Einbeck',
        'web': 'https://freifunk-einbeck.de/',
        'map': 'http://vpn1.freifunk-einbeck.de/meshviewer/'
      }, {
        'site': 'ffept',
        'name': 'Ennepe-Ruhr-Kreis (Ennepetal)',
        'web': 'https://www.freifunk-en.de/',
        'map': 'https://map.ff-en.de/ennepetal/'
      }, {
        'site': 'ffhat',
        'name': 'Ennepe-Ruhr-Kreis (Hattingen)',
        'web': 'https://www.freifunk-en.de/',
        'map': 'https://map.ff-en.de/hattingen/'
      }, {
        'site': 'ffen',
        'name': 'Ennepe-Ruhr-Kreis (EN-Kreis)',
        'web': 'https://www.freifunk-en.de/',
        'map': 'https://map.ff-en.de/enkreis/'
      }, {
        'site': 'ffspr',
        'name': 'Ennepe-Ruhr-Kreis (Sprockhoevel)',
        'web': 'https://www.freifunk-en.de/',
        'map': 'https://map.ff-en.de/sprockhoevel/'
      }, {
        'site': 'ffwtt',
        'name': 'Ennepe-Ruhr-Kreis (Wetter)',
        'web': 'https://www.freifunk-en.de/',
        'map': 'https://map.ff-en.de/wetter/'
      }, {
        'site': 'ffwit',
        'name': 'Ennepe-Ruhr-Kreis (Witten)',
        'web': 'https://www.freifunk-en.de/',
        'map': 'https://map.ff-en.de/witten/'
      }, {
        'site': 'ffef',
        'name': 'Erfurt',
        'web': 'https://erfurt.freifunk.net/',
        'map': 'https://map.erfurt.freifunk.net/'
      }, {
        'site': 'ffe',
        'name': 'Essen',
        'web': 'https://freifunk-essen.de/',
        'map': 'https://map.freifunk-essen.de/'
      }, {
        'site': 'ff_fkb_frankenberg',
        'name': 'Frankenberg',
        'web': 'https://www.freifunk-frankenberg.de/',
        'map': 'https://map.freifunk-fkb.de/'
      }, {
        'site': 'ffffm',
        'name': 'Frankfurt',
        'web': 'https://ffm.freifunk.net/',
        'map': 'https://map.ffm.freifunk.net/'
      }, {
        'site': 'ffggrz',
        'name': 'Gera-Greiz',
        'web': 'https://www.freifunk-gera-greiz.de/',
        'map': 'https://www.freifunk-gera-greiz.de/meshviewer/'
      }, {
        'site': 'ffh',
        'name': 'Hannover',
        'web': 'https://hannover.freifunk.net/',
        'map': 'https://hannover.freifunk.net/karte/'
      }, {
        'site': 'hennef',
        'name': 'Hennef',
        'web': 'https://www.freifunk-hennef.de/',
        'map': 'https://map.freifunk-hennef.de/'
      },      {
        'site': 'ffho',
        'name': 'Hochstift',
        'web': 'https://hochstift.freifunk.net/',
        'map': 'https://map.hochstift.freifunk.net/'
      }, {
        'site': 'ffka',
        'name': 'Karlsruhe',
        'web': 'https://karlsruhe.freifunk.net/',
        'map': 'https://map.karlsruhe.freifunk.net/'
      }, {
        'site': 'ffki',
        'name': 'Kiel',
        'web': 'https://freifunk.in-kiel.de/'
      }, {
        'site': 'leverkusen',
        'name': 'Leverkusen',
        'web': 'http://freifunk-leverkusen.de/',
        'map': 'https://map.fflev.de/'
      }, {
        'site': 'fflg',
        'name': 'Lüneburg',
        'web': 'http://freifunk-lueneburg.de/',
        'map': 'http://map.freifunk-lueneburg.de/meshviewer/'
      }, {
        'site': 'ffmz',
        'name': 'Mainz, Wiesbaden und Umgebung',
        'web': 'https://www.freifunk-mainz.de/',
        'map': 'https://map.freifunk-mwu.de/'
      }, {
        'site': 'ffkbuk',
        'name': 'Köln, Bonn und Umgebung',
        'web': 'https://kbu.freifunk.net/',
        'map': 'https://map.kbu.freifunk.net/'
      }, {
        'site': 'ffniers',
        'name': 'Niersufer',
        'web': 'http://freifunk-niersufer.de/'
      }, {
        'site': 'ffnord',
        'name': 'Nord',
        'web': 'https://nord.freifunk.net/',
        'map': 'https://mesh.freifunknord.de/'
      }, {
        'site': 'ffnw',
        'name': 'Nordwest',
        'web': 'https://ffnw.de/',
        'map': 'https://map.ffnw.de/'
      }, {
        'site': 'ffrgb',
        'name': 'Regensburg',
        'web': 'https://regensburg.freifunk.net/',
        'map': 'https://regensburg.freifunk.net/meshviewer/'
      }, {
        'site': 'ffrn',
        'name': 'Rhein-Neckar',
        'web': 'https://ffrn.de/',
        'map': 'https://map.ffrn.de/'
      }, {
        'site': 'ffsh',
        'name': 'Südholstein',
        'web': 'https://www.freifunk-suedholstein.de/',
        'map': 'https://map.freifunk-suedholstein.de/'
      }, {
        'site': 'fftr',
        'name': 'Trier',
        'web': 'https://trier.freifunk.net/',
        'map': 'http://maps.tackin.de/'
      }, {
        'site': 'tdf',
        'name': 'Troisdorf',
        'web': 'https://freifunk-troisdorf.de/',
        'map': 'https://map.freifunk-troisdorf.de/'
      }, {
        'site': 'ffv',
        'name': 'Vogtland',
        'web': 'https://vogtland.freifunk.net/map/'
      }, {
        'site': 'ffwels',
        'name': 'Wels',
        'web': 'http://wels.funkfeuer.at/',
        'map': 'http://leto.wels.funkfeuer.at:8080/meshviewer/meshviewer/build/'
      }, {
        'site': 'ffwp',
        'name': 'Westpfalz',
        'web': 'https://www.freifunk-westpfalz.de/',
        'map': 'https://map.freifunk-westpfalz.de/'
      }, {
        'site': 'ffwtbg_kernstadt',
        'name': 'Winterberg',
        'web': 'https://www.freifunk-winterberg.net/',
        'map': 'https://map.freifunk-winterberg.net/'
      },
      // Duplicates for links
      {
        site: 'ffrgb-bat15',
        name: 'Regensburg'
      },
      {
        site: 'ffwi',
        name: 'Mainz, Wiesbaden und Umgebung'
      },
      {
        site: 'ffrhg',
        name: 'Mainz, Wiesbaden und Umgebung'
      },
      {
        site: 'ffta',
        name: 'Mainz, Wiesbaden und Umgebung'
      },
      {
        site: 'ffbin',
        name: 'Mainz, Wiesbaden und Umgebung'
      },
      {
        site: 'ffog',
        name: 'Karlsruhe'
      }, {
        site: 'ffhoh',
        name: 'Karlsruhe'
      }, {
        site: 'ffpf',
        name: 'Karlsruhe'
      }, {
        site: 'ffgi',
        name: 'Karlsruhe'
      },
      {
        site: 'ffho_abn',
        name: 'Hochstift'
      }, {
        site: 'ffho_bdr',
        name: 'Hochstift'
      }, {
        site: 'ffho_rwb',
        name: 'Hochstift'
      }, {
        site: 'ffho_wux',
        name: 'Hochstift'
      }, {
        site: 'ffho_bev',
        name: 'Hochstift'
      }, {
        site: 'ffho_rhc',
        name: 'Hochstift'
      }, {
        site: 'ffho_bxg',
        name: 'Hochstift'
      }, {
        site: 'ffho_bkk',
        name: 'Hochstift'
      }, {
        site: 'ffho_buq',
        name: 'Hochstift'
      }, {
        site: 'ffho_dek',
        name: 'Hochstift'
      }, {
        site: 'ffho_gee',
        name: 'Hochstift'
      }, {
        site: 'ffho_zwg',
        name: 'Hochstift'
      }, {
        site: 'ffho_hvf',
        name: 'Hochstift'
      }, {
        site: 'ffho_hox',
        name: 'Hochstift'
      }, {
        site: 'ffho_lit',
        name: 'Hochstift'
      }, {
        site: 'ffho_lip',
        name: 'Hochstift'
      }, {
        site: 'ffho_mms',
        name: 'Hochstift'
      }, {
        site: 'ffho_msg',
        name: 'Hochstift'
      }, {
        site: 'ffho_yni',
        name: 'Hochstift'
      }, {
        site: 'ffho_pad_cty',
        name: 'Hochstift'
      }, {
        site: 'ffho_pad_uml',
        name: 'Hochstift'
      }, {
        site: 'ffho_szn',
        name: 'Hochstift'
      }, {
        site: 'ffho_yss',
        name: 'Hochstift'
      }, {
        site: 'ffho_xsc',
        name: 'Hochstift'
      }, {
        site: 'ffho_stm',
        name: 'Hochstift'
      }, {
        site: 'ffho_wag',
        name: 'Hochstift'
      }, {
        site: 'ffho_ywl',
        name: 'Hochstift'
      }, {
        site: 'ffho_yho',
        name: 'Hochstift'
      }, {
        site: 'ffho_ham',
        name: 'Hochstift'
      }, {
        site: 'ffho_ybb',
        name: 'Hochstift'
      },
      {
        site: 'ffeu',
        name: 'Köln, Bonn und Umgebung'
      }, {
        site: 'ffkbuu',
        name: 'Köln, Bonn und Umgebung'
      }, {
        site: 'ffkbu',
        name: 'Köln, Bonn und Umgebung'
      }, {
        site: 'ffkw',
        name: 'Köln, Bonn und Umgebung'
      }, {
        site: 'ffkbu-V2',
        name: 'Köln, Bonn und Umgebung'
      },
      {
        site: 'dom2',
        name: 'Darmstadt'
      }, {
        site: 'ffda_64367',
        name: 'Darmstadt'
      }, {
        site: 'dom1',
        name: 'Darmstadt'
      }, {
        site: 'dom61',
        name: 'Darmstadt'
      }, {
        site: 'dom0',
        name: 'Darmstadt'
      }, {
        site: 'dom5',
        name: 'Darmstadt'
      }, {
        site: 'dom7',
        name: 'Darmstadt'
      }, {
        site: 'dom12',
        name: 'Darmstadt'
      }, {
        site: 'dom16',
        name: 'Darmstadt'
      }, {
        site: 'dom13',
        name: 'Darmstadt'
      }, {
        site: 'dom8',
        name: 'Darmstadt'
      }, {
        site: 'dom17',
        name: 'Darmstadt'
      }, {
        site: 'dom9',
        name: 'Darmstadt'
      }, {
        site: 'dom11',
        name: 'Darmstadt'
      }, {
        site: 'dom14',
        name: 'Darmstadt'
      }, {
        site: 'dom3',
        name: 'Darmstadt'
      }, {
        site: 'dom4',
        name: 'Darmstadt'
      }, {
        site: 'dom15',
        name: 'Darmstadt'
      }, {
        site: 'dom10',
        name: 'Darmstadt'
      }, {
        site: 'dom6',
        name: 'Darmstadt'
      }, {
        site: 'ffda_da_220_230',
        name: 'Darmstadt'
      }, {
        site: 'ffda_da_430',
        name: 'Darmstadt'
      }, {
        site: 'ffda_da_140',
        name: 'Darmstadt'
      }, {
        site: 'ffda_64560',
        name: 'Darmstadt'
      }, {
        site: 'ffda_64297',
        name: 'Darmstadt'
      }, {
        site: 'ffda_da_250',
        name: 'Darmstadt'
      },
      {
        site: 'ffh.legacy',
        name: 'Hannover'
      }, {
        site: 'ffh.hameln',
        name: 'Hannover'
      }, {
        site: 'ffh.alfeld',
        name: 'Hannover'
      }, {
        site: 'ffh.lenthe',
        name: 'Hannover'
      }, {
        site: 'ffh.steinhude',
        name: 'Hannover'
      }, {
        site: 'ffh.springe',
        name: 'Hannover'
      }, {
        site: 'ffh.nordstadt',
        name: 'Hannover'
      }, {
        site: 'ffh.wunstorf',
        name: 'Hannover'
      }, {
        site: 'ffh.neustadt',
        name: 'Hannover'
      }, {
        site: 'ffh.wettbergen',
        name: 'Hannover'
      }, {
        site: 'ffh.oberricklingen',
        name: 'Hannover'
      }, {
        site: 'ffh.muehlenberg',
        name: 'Hannover'
      }, {
        site: 'ffh.bornum',
        name: 'Hannover'
      }, {
        site: 'ffh.ricklingen',
        name: 'Hannover'
      }, {
        site: 'ffh.barsinghausen',
        name: 'Hannover'
      }, {
        site: 'ffh.davenstedt',
        name: 'Hannover'
      }, {
        site: 'ffh.ahlem',
        name: 'Hannover'
      }, {
        site: 'ffh.badenstedt',
        name: 'Hannover'
      }, {
        site: 'ffh.lindenmitte',
        name: 'Hannover'
      }, {
        site: 'ffh.lindennord',
        name: 'Hannover'
      }, {
        site: 'ffh.lindensued',
        name: 'Hannover'
      }, {
        site: 'ffh.limmer',
        name: 'Hannover'
      }, {
        site: 'ffh.calenbergerneustadt',
        name: 'Hannover'
      }, {
        site: 'ffh.garbsen',
        name: 'Hannover'
      }, {
        site: 'ffh.stoecken',
        name: 'Hannover'
      }, {
        site: 'ffh.marienwerder',
        name: 'Hannover'
      }, {
        site: 'ffh.ledeburg',
        name: 'Hannover'
      }, {
        site: 'ffh.nordhafen',
        name: 'Hannover'
      }, {
        site: 'ffh.burg',
        name: 'Hannover'
      }, {
        site: 'ffh.hainholz',
        name: 'Hannover'
      }, {
        site: 'ffh.vahrenwald',
        name: 'Hannover'
      }, {
        site: 'ffh.herrenhausen',
        name: 'Hannover'
      }, {
        site: 'ffh.leinhausen',
        name: 'Hannover'
      }, {
        site: 'ffh.langenhagen',
        name: 'Hannover'
      }, {
        site: 'ffh.vinnhorst',
        name: 'Hannover'
      }, {
        site: 'ffh.brinkhafen',
        name: 'Hannover'
      }, {
        site: 'ffh.mitte',
        name: 'Hannover'
      }, {
        site: 'ffh.suedstadt',
        name: 'Hannover'
      }, {
        site: 'ffh.bult',
        name: 'Hannover'
      }, {
        site: 'ffh.zoo',
        name: 'Hannover'
      }, {
        site: 'ffh.wuelfel',
        name: 'Hannover'
      }, {
        site: 'ffh.doehren',
        name: 'Hannover'
      }, {
        site: 'ffh.waldhausen',
        name: 'Hannover'
      }, {
        site: 'ffh.waldheim',
        name: 'Hannover'
      }, {
        site: 'ffh.seelhorst',
        name: 'Hannover'
      }, {
        site: 'ffh.mittelfeld',
        name: 'Hannover'
      }, {
        site: 'ffh.bemerode',
        name: 'Hannover'
      }, {
        site: 'ffh.kirchrode',
        name: 'Hannover'
      }, {
        site: 'ffh.anderten',
        name: 'Hannover'
      }, {
        site: 'ffh.wuelferode',
        name: 'Hannover'
      }, {
        site: 'ffh.anderten',
        name: 'Hannover'
      }, {
        site: 'ffh.laatzen',
        name: 'Hannover'
      }, {
        site: 'ffh.pattensen',
        name: 'Hannover'
      }, {
        site: 'ffh.heideviertel',
        name: 'Hannover'
      }, {
        site: 'ffh.misburgnord',
        name: 'Hannover'
      }, {
        site: 'ffh.misburgsued',
        name: 'Hannover'
      }, {
        site: 'ffh.kleefeld',
        name: 'Hannover'
      }, {
        site: 'ffh.grossbuchholz',
        name: 'Hannover'
      }, {
        site: 'ffh.lahe',
        name: 'Hannover'
      }, {
        site: 'ffh.bothfeld',
        name: 'Hannover'
      }, {
        site: 'ffh.sahlkamp',
        name: 'Hannover'
      }, {
        site: 'ffh.vahrenheide',
        name: 'Hannover'
      }, {
        site: 'ffh.list',
        name: 'Hannover'
      }, {
        site: 'ffh.oststadt',
        name: 'Hannover'
      }, {
        site: 'ffh.lehrte',
        name: 'Hannover'
      }, {
        site: 'ffh.isernhagensued',
        name: 'Hannover'
      }, {
        site: 'ffh.umland',
        name: 'Hannover'
      }, {
        site: 'ffh.special_port',
        name: 'Hannover'
      }, {
        site: 'ffh.leetfeld',
        name: 'Hannover'
      },
      {
        site: 'ffv_pl',
        name: 'Vogtland'
      }, {
        site: 'ffv_tr',
        name: 'Vogtland'
      }, {
        site: 'ffv_rc',
        name: 'Vogtland'
      }, {
        site: 'ffv_oel',
        name: 'Vogtland'
      }, {
        site: 'ffv_ae',
        name: 'Vogtland'
      }, {
        site: 'ffv_s',
        name: 'Vogtland'
      }, {
        site: 'ffv_le',
        name: 'Vogtland'
      }, {
        site: 'ffv_mtl',
        name: 'Vogtland'
      }, {
        site: 'fferz',
        name: 'Vogtland'
      }, {
        site: 'ffv_rbh',
        name: 'Vogtland'
      }, {
        site: 'ffv_poe',
        name: 'Vogtland'
      }, {
        site: 'ffv_fst',
        name: 'Vogtland'
      }, {
        site: 'ffv_nsz',
        name: 'Vogtland'
      }, {
        site: 'ffv_sbg',
        name: 'Vogtland'
      }, {
        site: 'ffv_rdw',
        name: 'Vogtland'
      }, {
        site: 'ffv_a',
        name: 'Vogtland'
      }, {
        site: 'ffv_wei',
        name: 'Vogtland'
      }, {
        site: 'ffv_t',
        name: 'Vogtland'
      }, {
        site: 'ffv_ell',
        name: 'Vogtland'
      },
      {
        site: 'ffwtbg_doerfer',
        name: 'Winterberg'
      }, {
        site: 'ffwtbg_mdb',
        name: 'Winterberg'
      }, {
        site: 'ffwtbg_hlb',
        name: 'Winterberg'
      }, {
        site: 'ffwtbg_hd',
        name: 'Winterberg'
      }, {
        site: 'ffwtbg_sdlh',
        name: 'Winterberg'
      },
      {
        site: 'ff_fkb_burgwald',
        name: 'Frankenberg'
      }, {
        site: 'ff_fkb_ederbergland',
        name: 'Frankenberg'
      }, {
        site: 'ff_fkb_korbach',
        name: 'Frankenberg'
      },
      {
        site: 'ffrz',
        name: 'Südholstein'
      }, {
        site: 'ffod',
        name: 'Südholstein'
      },
      {
        site: 'ffmo',
        name: 'Niersufer'
      }, {
        site: 'ffmg',
        name: 'Niersufer'
      }, {
        site: 'ffkk',
        name: 'Niersufer'
      },
      {
        site: 'ffef-bat15',
        name: 'Erfurt'
      }, {
        site: 'ffil',
        name: 'Erfurt'
      }, {
        site: 'ffsp',
        name: 'Erfurt'
      },
      {
        site: 'tdf-inn',
        name: 'Troisdorf'
      }, {
        site: 'inn',
        name: 'Troisdorf'
      }, {
        site: 'flu',
        name: 'Troisdorf'
      },
      {
        site: 'ffgri.init.tk',
        name: 'Altdorf'
      },
      {
        site: 'ffffm-babel',
        name: 'Frankfurt'
      }
    ],
    'linkList': [
      {
        'title': 'Impressum',
        'href': 'https://regensburg.freifunk.net/verein/impressum/'
      },
      {
        'title': 'Datenschutz',
        'href': 'https://regensburg.freifunk.net/verein/datenschutz/'
      }
    ]
  };
};
