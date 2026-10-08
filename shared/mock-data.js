/*
 * 提案用モックデータ（Option 1 / Option 2 共通）
 * 全データ架空。実在の人物・企業・物件・電話番号とは一切関係ありません。
 * 電話番号は 03-0000-xxxx / 090-0000-xxxx、URL は example ドメインのみ使用。
 * 流れ: 顧客(ニーズ) → 条件に合う物件一覧 → ビル詳細(フロア6状態) → レポート設定 → レポートリスト
 */
(function (w) {
  var staff = { sakura: '佐倉 健', morino: '森野 葵', takaoka: '高岡 誠', system: 'システム' };

  // フロア状況 6 種（現行の Aki 区分に合わせた表記）
  var AKI = ['空', '未解約', '先行有', '申込有', '内定有', '済'];

  function floor(o) {
    // 坪単価 → 総額を自動計算（現行仕様: 坪単価⇔総額の自動換算）
    o.feeTotal = o.feePer ? o.feePer * o.tsubo : null;
    o.pubTotal = o.pubPer ? o.pubPer * o.tsubo : null;
    o.metor = Math.round(o.tsubo * 3.30578 * 100) / 100;
    return o;
  }

  var buildings = [
    {
      code: '010231', name: 'サンプル神田第1ビル', kana: 'サンプルカンダダイイチ', oldName: '旧 架空神田ビル',
      status: 'WEB表示', statusClass: 'status1', updated: '2026/10/05 14:20 ' + staff.morino,
      checkDate: '2026/10/06', checkStaff: staff.sakura, photos: 24,
      chikuCode: '13101', pref: '東京都', chikuName: '千代田区', address: 'サンプル町', cyoume: '1', banchi: '2', gou: '3', chiban: false, zip: '100-0000',
      locate: { street: true, street1: '架空通り', street2: '', corner: true, eki: false },
      stations: [
        { rosen: 'JR山手線', eki: '神田', tm: 4 },
        { rosen: '東京メトロ銀座線', eki: '神田', tm: 5 },
        { rosen: '東京メトロ丸ノ内線', eki: '淡路町', tm: 7 }
      ],
      kozo: { completion: '1998/03', renewal: '2019', rnWall: '2019', rnEntrance: '2019', rnEv: '2021', rnMemo: 'エントランス・共用トイレ改修',
        architect: 'SRC', ground: 9, underground: 1, baseFloor: 42.5, totalTsubo: 410.2, sumTsubo: 455.8, taishin1: '新耐震', taishin2: '' },
      spec: { ev: '2基', evPersons: 11, evOpt: '', evDate: '2026/09/12', evStaff: staff.sakura,
        p: '有', pTotal: 6, pAki: 1, pMemo: '月額 35,000円', pOpt: '機械式', pDate: '2026/09/12', pStaff: staff.sakura,
        entrance: 'オートロック', entranceMemo: '平日 8:00〜20:00 開放', security: '機械', hikari: '有',
        kashiKai: false, kashiSou: true, usetime: '無', usetimeMemo: '24時間使用可', churin: true, jikaHatuden: false, multiToilet: true,
        specialNeeds: '可', specialNeedsMemo: 'クリニック相談可' },
      contract: { teiki: '普通借', teikiMemo: '2年', teikiDate: '2026/09/12', teikiStaff: staff.sakura,
        tatekae: '無', tanki: '不可', hosho: '有', hoshoMemo: '加入必須', genjo: '有', genjoMemo: 'スケルトン返し',
        asbestos: '無', completeDoc: '有', taishinDoc: '無', history: 2 },
      web: { catchcopy: '神田駅徒歩4分・リニューアル済の基準階42坪', guide: '神田駅から徒歩圏の整形フロア。', wguide: '2019年にエントランスを改修。',
        wguide2: '周辺は飲食店・コンビニが充実。', staff: staff.morino, star1: 4, star2: 3, star3: 4, star4: 4 },
      biko: { sales: '10月末契約でフリーレント1ヶ月の相談可（架空）', external: '更新手数料：新賃料の1ヶ月分', request: '6F 図面差し替え依頼中' },
      owners: [
        { priority: '問', checkDate: '2026/10/06', code: '(SMP01)', name: 'サンプル不動産株式会社', bunrui: '管理会社', comment: '平日10時〜17時', tel: '03-0000-1101',
          type: '管理', staff: staff.sakura, biko: '[携:090-0000-2201] (担:架空 次郎)', holiday: '土日祝', pr: 'PR10' },
        { priority: '', checkDate: '2026/08/20', code: '', name: '架空ビルマネジメント株式会社', bunrui: 'PM', comment: '', tel: '03-0000-1102',
          type: 'PM', staff: staff.takaoka, biko: '', holiday: '土日', pr: '' }
      ],
      checks: ['図面有', 'パンフ有'],
      floors: [
        floor({ no: '010231-02', kai: '2F', name: '', type: '1フロア', gn: 'N', tsubo: 42.5, hosho: '6ヶ月', reikin: '無', feePer: 18500, pubPer: 3000, koshin: '1ヶ月', shokyaku: '無', nyukyo: '即日', aki: 0, yoto: ['事'], akiDate: '2026/09/01', staff: staff.sakura, aircon: '個別', floorSpec: 'OAフロア', toilet: '男女別', height: '2,600', memo: '' }),
        floor({ no: '010231-03', kai: '3F', name: '', type: '1フロア', gn: 'N', tsubo: 42.5, hosho: '6ヶ月', reikin: '無', feePer: 18500, pubPer: 3000, koshin: '1ヶ月', shokyaku: '無', nyukyo: '2027/01', aki: 1, yoto: ['事'], akiDate: '2026/08/10', staff: staff.sakura, aircon: '個別', floorSpec: 'OAフロア', toilet: '男女別', height: '2,600', memo: '解約予定 2026/12末' }),
        floor({ no: '010231-04', kai: '4F', name: '', type: '1フロア', gn: 'N', tsubo: 42.5, hosho: '6ヶ月', reikin: '無', feePer: 18800, pubPer: 3000, koshin: '1ヶ月', shokyaku: '無', nyukyo: '即日', aki: 2, yoto: ['事'], akiDate: '2026/07/15', staff: staff.takaoka, aircon: '個別', floorSpec: 'OAフロア', toilet: '男女別', height: '2,600', memo: '1社検討中' }),
        floor({ no: '010231-05', kai: '5F', name: '501', type: '分割', gn: 'N', tsubo: 21.0, hosho: '6ヶ月', reikin: '1ヶ月', feePer: 18000, pubPer: 3000, koshin: '1ヶ月', shokyaku: '無', nyukyo: '相談', aki: 3, yoto: ['事', '店'], akiDate: '2026/06/30', staff: staff.takaoka, aircon: '個別', floorSpec: 'タイルカーペット', toilet: '共用', height: '2,500', memo: '' }),
        floor({ no: '010231-06', kai: '6F', name: '', type: '1フロア', gn: 'G', tsubo: 45.0, hosho: '8ヶ月', reikin: '無', feePer: 19500, pubPer: 3000, koshin: '1ヶ月', shokyaku: '1ヶ月', nyukyo: '2026/12', aki: 4, yoto: ['事'], akiDate: '2026/05/20', staff: staff.sakura, aircon: 'セントラル+個別', floorSpec: 'OAフロア', toilet: '男女別', height: '2,700', memo: '' }),
        floor({ no: '010231-07', kai: '7F', name: '', type: '1フロア', gn: 'N', tsubo: 42.5, hosho: '6ヶ月', reikin: '無', feePer: 18500, pubPer: 3000, koshin: '1ヶ月', shokyaku: '無', nyukyo: '-', aki: 5, yoto: ['事'], akiDate: '2026/04/01', staff: staff.morino, aircon: '個別', floorSpec: 'OAフロア', toilet: '男女別', height: '2,600', memo: '' })
      ]
    },
    {
      code: '010487', name: 'サンプル日本橋ビル', kana: 'サンプルニホンバシ', oldName: '',
      status: 'WEB表示', statusClass: 'status1', updated: '2026/10/02 10:05 ' + staff.takaoka,
      checkDate: '2026/10/02', checkStaff: staff.takaoka, photos: 12,
      chikuCode: '13102', pref: '東京都', chikuName: '中央区', address: 'モデル町', cyoume: '2', banchi: '5', gou: '8', chiban: false, zip: '103-0000',
      locate: { street: false, street1: '', street2: '', corner: false, eki: true },
      stations: [{ rosen: '東京メトロ銀座線', eki: '三越前', tm: 2 }, { rosen: 'JR総武線快速', eki: '新日本橋', tm: 4 }],
      kozo: { completion: '2008/09', renewal: '', architect: 'S', ground: 8, underground: 0, baseFloor: 36.2, sumTsubo: 310.0, taishin1: '新耐震', taishin2: '制震' },
      spec: { ev: '1基', p: '無', entrance: 'オートロック', security: '機械', hikari: '有', kashiKai: false, kashiSou: false, usetime: '無', churin: true, jikaHatuden: false, multiToilet: false, specialNeeds: '未調査' },
      contract: { teiki: '定借', teikiMemo: '3年・再契約可', history: 0 },
      biko: { sales: '', external: '再契約可', request: '' },
      owners: [{ priority: '問', checkDate: '2026/10/02', code: '', name: '架空地所株式会社', bunrui: '貸主', comment: '', tel: '03-0000-1201', type: '貸主', staff: staff.takaoka, biko: '', holiday: '土日祝', pr: '' }],
      checks: ['図面有'],
      floors: [
        floor({ no: '010487-04', kai: '4F', name: '', type: '1フロア', gn: 'N', tsubo: 36.2, hosho: '6ヶ月', reikin: '無', feePer: 19000, pubPer: 2500, koshin: '再契約料1ヶ月', shokyaku: '無', nyukyo: '即日', aki: 0, yoto: ['事'], akiDate: '2026/09/20', staff: staff.takaoka, aircon: '個別', floorSpec: 'OAフロア', toilet: '男女別', height: '2,650', memo: '' }),
        floor({ no: '010487-06', kai: '6F', name: '', type: '1フロア', gn: 'N', tsubo: 36.2, hosho: '6ヶ月', reikin: '無', feePer: 19500, pubPer: 2500, koshin: '再契約料1ヶ月', shokyaku: '無', nyukyo: '2027/02', aki: 1, yoto: ['事'], akiDate: '2026/09/20', staff: staff.takaoka, aircon: '個別', floorSpec: 'OAフロア', toilet: '男女別', height: '2,650', memo: '' })
      ]
    },
    {
      code: '011052', name: 'サンプル岩本町ビル', kana: 'サンプルイワモトチョウ', oldName: '',
      status: 'WEB表示', statusClass: 'status1', updated: '2026/09/28 16:40 ' + staff.morino,
      checkDate: '2026/09/28', checkStaff: staff.morino, photos: 8,
      chikuCode: '13101', pref: '東京都', chikuName: '千代田区', address: 'テスト町', cyoume: '3', banchi: '1', gou: '4', chiban: false, zip: '101-0000',
      locate: { street: true, street1: '架空大通り', street2: '', corner: false, eki: false },
      stations: [{ rosen: '都営新宿線', eki: '岩本町', tm: 3 }, { rosen: 'JR総武線', eki: '秋葉原', tm: 8 }],
      kozo: { completion: '1991/11', renewal: '2016', architect: 'SRC', ground: 10, underground: 1, baseFloor: 38.0, sumTsubo: 402.5, taishin1: '新耐震', taishin2: '' },
      spec: { ev: '2基', p: '有', entrance: '全日開放', security: '有人', hikari: '有', kashiKai: true, kashiSou: false, usetime: '有', usetimeMemo: '22時まで', churin: false, jikaHatuden: false, multiToilet: false, specialNeeds: '不可' },
      contract: { teiki: '普通借', teikiMemo: '2年', history: 1 },
      biko: { sales: '', external: '', request: '' },
      owners: [{ priority: '問', checkDate: '2026/09/28', code: '(SMP02)', name: 'モデル管理株式会社', bunrui: '管理会社', comment: '', tel: '03-0000-1301', type: '代理', staff: staff.morino, biko: '', holiday: '土日', pr: '' }],
      checks: [],
      floors: [
        floor({ no: '011052-05', kai: '5F', name: '', type: '1フロア', gn: 'N', tsubo: 38.0, hosho: '5ヶ月', reikin: '無', feePer: 17500, pubPer: 2500, koshin: '1ヶ月', shokyaku: '無', nyukyo: '即日', aki: 0, yoto: ['事'], akiDate: '2026/09/01', staff: staff.morino, aircon: '個別', floorSpec: 'OAフロア', toilet: '男女別', height: '2,550', memo: '' }),
        floor({ no: '011052-08', kai: '8F', name: '', type: '1フロア', gn: 'N', tsubo: 38.0, hosho: '5ヶ月', reikin: '無', feePer: 17800, pubPer: 2500, koshin: '1ヶ月', shokyaku: '無', nyukyo: '相談', aki: 3, yoto: ['事'], akiDate: '2026/08/25', staff: staff.morino, aircon: '個別', floorSpec: 'OAフロア', toilet: '男女別', height: '2,550', memo: '' })
      ]
    },
    {
      code: '011390', name: 'サンプル小伝馬町ビル', kana: 'サンプルコデンマチョウ', oldName: '',
      status: 'WEB非表示', statusClass: 'status2', updated: '2026/09/30 11:15 ' + staff.sakura,
      checkDate: '2026/09/30', checkStaff: staff.sakura, photos: 5,
      chikuCode: '13102', pref: '東京都', chikuName: '中央区', address: 'ダミー町', cyoume: '4', banchi: '6', gou: '2', chiban: false, zip: '103-0000',
      locate: { street: false, street1: '', street2: '', corner: true, eki: false },
      stations: [{ rosen: '東京メトロ日比谷線', eki: '小伝馬町', tm: 3 }],
      kozo: { completion: '1985/04', renewal: '2012', architect: 'RC', ground: 7, underground: 0, baseFloor: 32.0, sumTsubo: 230.0, taishin1: '新耐震', taishin2: '' },
      spec: { ev: '1基', p: '無', entrance: '平日のみ', security: '機械', hikari: '有', kashiKai: false, kashiSou: false, usetime: '無', churin: false, jikaHatuden: false, multiToilet: false, specialNeeds: '未調査' },
      contract: { teiki: '普通借', teikiMemo: '', history: 0 },
      biko: { sales: '掲載不可のため WEB非表示', external: '', request: '' },
      owners: [{ priority: '問', checkDate: '2026/09/30', code: '', name: '架空商事株式会社', bunrui: '貸主', comment: '', tel: '03-0000-1401', type: '貸主', staff: staff.sakura, biko: '', holiday: '土日祝', pr: '' }],
      checks: [],
      floors: [
        floor({ no: '011390-03', kai: '3F', name: '', type: '1フロア', gn: 'N', tsubo: 32.0, hosho: '6ヶ月', reikin: '1ヶ月', feePer: 16000, pubPer: 2000, koshin: '1ヶ月', shokyaku: '無', nyukyo: '即日', aki: 0, yoto: ['事'], akiDate: '2026/09/30', staff: staff.sakura, aircon: '個別', floorSpec: 'タイルカーペット', toilet: '共用', height: '2,450', memo: '' })
      ]
    }
  ];

  var customer = {
    no: '100245', comName: '株式会社サンプル商事', comKana: 'サンプルショウジ', otherEnd: false, isNew: false,
    rank: 'メイン', status: '案内アポ', regist: '2026/09/02 10:12', register: staff.system, update: '2026/10/06 18:03', updater: staff.sakura,
    name: '本社', tel: '03-0000-3001', fax: '03-0000-3002', url: 'https://www.example.co.jp/',
    staff1: staff.sakura, getter: staff.morino, telResult: '接続', price: 85,
    zip: '101-0000', pref: '東京都', addr: '千代田区サンプル町', cyoume: '5', banchi: '1', gou: '1',
    pmarkA: '◎', priceA: 85, pmarkB: '○', priceB: 60, builName: '架空第2ビル', kai: '3', bukkenName: '',
    checks: ['電話済', 'ニーズ確認済'],
    todo1Limit: '2026/10/10', todo1: '神田・日本橋エリアの候補3棟を紹介', todo2Limit: '2026/10/17', todo2: '内覧日程の調整',
    progress: [
      { date: '2026/10/06', staff: staff.sakura, action: '案内アポ○', contact: 'TEL', result: '紹介した3棟のうち2棟で内覧希望。10/14 午後で調整中。' },
      { date: '2026/10/01', staff: staff.sakura, action: '物件紹介', contact: 'メール', result: 'レポートURLを送付（神田・日本橋 30〜45坪）。' },
      { date: '2026/09/25', staff: staff.sakura, action: '初回', contact: '面談', result: '移転理由は増員。現オフィスは手狭で会議室不足。' },
      { date: '2026/09/02', staff: staff.system, action: '顧客登録', contact: '', result: 'Webフォームから問い合わせ（架空）。' }
    ],
    candidates: [
      { builCode: '010231', buil: 'サンプル神田第1ビル', kai: '2F', name: '', tsubo: 42.5, type: '紹介', guideDate: '', koho: '', ichiban: '', candiDate: '', seq: '', memo: '' },
      { builCode: '010487', buil: 'サンプル日本橋ビル', kai: '4F', name: '', tsubo: 36.2, type: '紹介', guideDate: '', koho: '', ichiban: '', candiDate: '', seq: '', memo: '' }
    ],
    needs: {
      collect: '2026/09/02', entry: 'Web問合せ', entry2: '自社サイト', area: '東京', area2: '千代田区', space: '30〜50坪', other: '無', inner: '未確認', lastUpdate: '2026/10/06',
      usage: ['事務所'], bukken: 'サンプル神田第1ビル 2F', choice: '駅近・基準階40坪前後', reason: ['増床', '立地改善'], purpose: '会議室を2室確保し、来客対応をしやすくしたい。',
      areaSeq: 1, areaBuil: '千代田区サンプル町（現入居）', areaReq: '千代田区・中央区（神田／日本橋）', areaMemo: '取引先が日本橋に集中',
      spaceSeq: 2, curSpace: 25, gn: 'ネット', reqSpace1: 30, reqSpace2: 45, curNum: 18, curSpacePer: 1.4, reqNum: 25, reqSpacePer: 1.6, spaceMemo: '増員予定（+7名）',
      feeSeq: 3, curFee: 450000, reqFee: 900000, curFeePer: 18000, reqFeePer: 20000, feeMemo: '共益費込みで坪2万円以内',
      timingSeq: 4, isCancel: false, cancel: '2027/03', cancelM: 6, reqTiming: '2027年3月頃', timingMemo: '期末前に移転したい',
      specSeq: 5, curSpec: '空調が古い・会議室不足', reqSpec: ['個別空調', 'OAフロア', '24H使用可'], specMemo: '夜間作業あり',
      request: '駐輪場があると望ましい', flow: '総務部長→役員会（月1回）で決裁'
    },
    company: {
      biz1: '情報通信業', biz2: 'ソフトウェア', biz3: '', bizName: '', bossPosi: '代表取締役', bossName: '架空 太郎', bossKana: 'カクウ タロウ',
      start: '2012/04', capital: 3000, staffs: 25, ipo: '非上場', tsr: '000000000', tdb: '000000000', tdbRank: '-', tdbDate: '', visitDate: '',
      pamph: '送付可', pamphNG: '', pamphOK: '2026/09/10', pamph1st: '2026/09/10', pamphLast: '2026/10/01', pamphVer: '42',
      src: 'Web', product1: '', product2: '', domains: ['東京'], domainMemo: ''
    },
    contacts: [
      { type1: true, type2: false, seq: 1, sect: '総務部', post: '部長', name: '見本 花子', kana: 'ミホン ハナコ', tel: '03-0000-3011', mail: 'hanako@example.co.jp', memo: '決裁窓口' },
      { type1: false, type2: false, seq: 2, sect: '総務部', post: '主任', name: '例示 一郎', kana: 'レイジ イチロウ', tel: '03-0000-3012', mail: 'ichiro@example.co.jp', memo: '' }
    ]
  };

  var report = {
    no: 3021, type: 'P', typeName: '紹介', title: '神田・日本橋エリア 30〜45坪 最新物件資料', date: '2026/10/01', time: '17:30',
    staff: staff.sakura, fee: true, others: 0, builCodes: ['010231', '010487', '011052'],
    comments: {
      '010231': 'リニューアル済のエントランスで来客対応に好印象。2Fは即入居可、基準階42坪で会議室2室を確保しやすい形状です。',
      '010487': '三越前駅徒歩2分。日本橋の取引先へのアクセス重視ならこちらがおすすめです。',
      '011052': ''
    },
    floors: { '010231': ['010231-02', '010231-03', '010231-04'], '010487': ['010487-04'], '011052': ['011052-05'] },
    guide: { '010231': { nairan: '2026/10/14', koho: '○' }, '010487': { nairan: '2026/10/14', koho: '' } }
  };

  var reports = [
    { no: 3021, type: '紹介', dt: '2026/10/01 17:30', title: report.title, bcnt: 3, ocnt: 0, fcnt: 5, limit: '2026/12/30 00:00', remain: '残り84日', viewed: '2026/10/02 09:14', status: 'published', hash: 'a1b2c3d4e5' },
    { no: 3035, type: '案内', dt: '2026/10/07 11:05', title: '10/14 内覧予定ビル（神田・日本橋）', bcnt: 2, ocnt: 0, fcnt: 2, limit: '2027/01/05 00:00', remain: '残り90日', viewed: '', status: 'unpublished', hash: 'f6g7h8i9j0' },
    { no: 2874, type: '紹介', dt: '2026/06/20 15:00', title: '千代田区 25〜30坪 物件資料', bcnt: 4, ocnt: 1, fcnt: 6, limit: '2026/09/18 00:00', remain: '', viewed: '2026/06/21 08:40', status: 'expired', hash: 'k1l2m3n4o5' }
  ];

  w.MOCK = {
    note: '全データ架空（提案用イメージ）',
    today: '2026/10/07',
    staff: staff,
    AKI: AKI,
    customer: customer,
    buildings: buildings,
    report: report,
    reports: reports,
    reportBaseUrl: 'https://report.example.jp/',
    findBuilding: function (code) { for (var i = 0; i < buildings.length; i++) if (buildings[i].code === code) return buildings[i]; return null; },
    findFloor: function (no) { for (var i = 0; i < buildings.length; i++) for (var j = 0; j < buildings[i].floors.length; j++) if (buildings[i].floors[j].no === no) return buildings[i].floors[j]; return null; },
    yen: function (n) { return n == null ? '-' : n.toLocaleString('ja-JP'); }
  };
})(window);
