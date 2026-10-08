const characters = [
  {
    "name": "アダム・バントン",
    "work": "Airlock Or How To Say Goodbye In Space",
    "image": "images/Adam Banton.jpg"
  },
  {
    "name": "アレクサンドロス・エリオポロス",
    "work": "When She Danced",
    "image": "images/Alexandros.jpg"
  },
  {
    "name": "アンドリュー",
    "work": "Best Interests",
    "image": "images/Andrew.jpg"
  },
  {
    "name": "アナイリン・ベヴァン",
    "work": "Nye",
    "image": "images/Aneurin Bevan.JPG"
  },
  {
    "name": "アロ",
    "work": "ニュームーン／トワイライト・サーガ",
    "image": "images/Aro Volturi.jpg"
  },
  {
    "name": "アート・ハニーマン",
    "work": "Music Within",
    "image": "images/Art Honeyman.jpg"
  },
  {
    "name": "アーサー",
    "work": "パッセンジャー",
    "image": "images/Arthur.jpg"
  },
  {
    "name": "アジラフェル",
    "work": "グッド・オーメンズ",
    "image": "images/Aziraphale.jpg"
  },
  {
    "name": "ビル・キャロル",
    "work": "Beautiful Boy",
    "image": "images/Bill Carroll.jpg"
  },
  {
    "name": "ブレア・マッドフライ",
    "work": "ドクター・ドリトル",
    "image": "images/Blair Müdfly.jpg"
  },
  {
    "name": "ブラッドショー",
    "work": "ジキル＆ハイド",
    "image": "images/Bradshaw.jpg"
  },
  {
    "name": "ブライアン・クラフ",
    "work": "くたばれ！ユナイテッド −サッカー万歳！−",
    "image": "images/Brian Clough.jpg"
  },
  {
    "name": "カリギュラ",
    "work": "Caligula",
    "image": "images/Caligula.jpg"
  },
  {
    "name": "ウィル・チャリティ大尉",
    "work": "マライアと失われた秘宝の謎",
    "image": "images/Captain Will Charity.jpg"
  },
  {
    "name": "カール・フロッシー",
    "work": "Michael Bolton's Big, Sexy Valentine's Day Special",
    "image": "images/Carl Flossy.jpg"
  },
  {
    "name": "カルロス",
    "work": "ノクターナル・アニマルズ",
    "image": "images/Carlos.jpg"
  },
  {
    "name": "カスピアン・ウィント",
    "work": "7 Days in Hell",
    "image": "images/Caspian Wint.jpg"
  },
  {
    "name": "チャーリー・チャップリン",
    "work": "Shooting the Hollywood Stars",
    "image": "images/Charlie Chaplin.jpg"
  },
  {
    "name": "クリス・タラント",
    "work": "クイズ〜100万ポンドを夢見た男〜",
    "image": "images/Chris Tarrant.jpg"
  },
  {
    "name": "コリン",
    "work": "Heartlands",
    "image": "images/Colin.jpg"
  },
  {
    "name": "クレイグ・フィッシャー",
    "work": "47歳 人生のステータス",
    "image": "images/Craig Fisher.jpg"
  },
  {
    "name": "デヴィッド・フロスト",
    "work": "フロスト×ニクソン",
    "image": "images/David Frost.jpg"
  },
  {
    "name": "デヴィッド・シャーボーン",
    "work": "Vardy v Rooney: A Courtroom Drama",
    "image": "images/David Sherborne.jpg"
  },
  {
    "name": "デヴィッド",
    "work": "Barbados",
    "image": "images/David.jpg"
  },
  {
    "name": "デニー・ドリスコル",
    "work": "The Way",
    "image": "images/Denny Driscoll.jpg"
  },
  {
    "name": "ヒューズ医師",
    "work": "Pobol y Cwm",
    "image": "images/Dr. Hughes.jpg"
  },
  {
    "name": "マーティン・ウィットリー医師",
    "work": "プロディガル・サン 殺人鬼の系譜",
    "image": "images/Dr. Martin Whitly.jpg"
  },
  {
    "name": "花屋",
    "work": "Few Options",
    "image": "images/Florist.jpg"
  },
  {
    "name": "フラムトン・ナッテル",
    "work": "The Open Doors",
    "image": "images/Framton Nuttel.jpg"
  },
  {
    "name": "フランシス・ハーディ",
    "work": "Faith Healer",
    "image": "images/Francis Hardy.jpg"
  },
  {
    "name": "フレッド・ウェイル",
    "work": "Kill the Messenger",
    "image": "images/Fred Weil.jpg"
  },
  {
    "name": "H・G・ウェルズ",
    "work": "H. G. Wells: War with the World",
    "image": "images/H. G. Wells.jpg"
  },
  {
    "name": "ハムレット",
    "work": "Hamlet",
    "image": "images/Hamlet.jpg"
  },
  {
    "name": "ハリー・ジョーンズ",
    "work": "Dead Long Enough",
    "image": "images/Harry Jones.jpg"
  },
  {
    "name": "ヘンリー五世",
    "work": "Henry V",
    "image": "images/Henry V.jpg"
  },
  {
    "name": "ジェレミー・ダイソン",
    "work": "The League of Gentlemen's Apocalypse",
    "image": "images/Jeremy Dyson.jpg"
  },
  {
    "name": "ジミー・ポーター",
    "work": "怒りを込めて振り返れ",
    "image": "images/Jimmy Porter.jpg"
  },
  {
    "name": "ジミー・ポーター",
    "work": "怒りを込めて振り返れ",
    "image": "images/Jimmy.jpg"
  },
  {
    "name": "ジョー",
    "work": "哀しきギャロウグラス",
    "image": "images/Joe.jpg"
  },
  {
    "name": "ケネス・ウィリアムズ",
    "work": "Kenneth Williams: Fantabulosa!",
    "image": "images/Kenneth Williams.jpg"
  },
  {
    "name": "ケントン・プライス",
    "work": "The Spoils Before Dying",
    "image": "images/Kenton Price.jpg"
  },
  {
    "name": "ランプリド",
    "work": "The Blind Men",
    "image": "images/Lamprido.jpg"
  },
  {
    "name": "レニー",
    "work": "The Homecoming",
    "image": "images/Lenny.jpg"
  },
  {
    "name": "ロドヴィコ",
    "work": "オセロ",
    "image": "images/Lodovico.jpg"
  },
  {
    "name": "オリヴァー卿",
    "work": "タイムライン",
    "image": "images/Lord Oliver de Vannes.jpg"
  },
  {
    "name": "ルシアン",
    "work": "アンダーワールド",
    "image": "images/Lucian.jpg"
  },
  {
    "name": "マルコム・ハウ",
    "work": "アポストル 復讐の掟",
    "image": "images/Malcolm Howe.jpg"
  },
  {
    "name": "マーク・ファーネス",
    "work": "Dirty Filthy Love",
    "image": "images/Mark Furness.jpg"
  },
  {
    "name": "マーク",
    "work": "アドミッション −親たちの入学試験−",
    "image": "images/Mark.jpg"
  },
  {
    "name": "マーティン・ギャモン",
    "work": "The UN Inspector",
    "image": "images/Martin Gammon.jpg"
  },
  {
    "name": "マイケル",
    "work": "ステージド",
    "image": "images/Michael.jpg"
  },
  {
    "name": "マイルズ・メイトランド",
    "work": "ブライト・ヤング・シングス",
    "image": "images/Miles Maitland.jpg"
  },
  {
    "name": "モーツァルト",
    "work": "アマデウス",
    "image": "images/Mozart.jpg"
  },
  {
    "name": "ネロ",
    "work": "ザ・ローマ 帝国の興亡",
    "image": "images/Nero.jpg"
  },
  {
    "name": "オウェイン・ジェンキンス",
    "work": "Under Milk Wood",
    "image": "images/Owain Jenkins.jpg"
  },
  {
    "name": "ポール・ベイツ",
    "work": "ミッドナイト・イン・パリ",
    "image": "images/Paul Bates.jpg"
  },
  {
    "name": "ペール・ギュント",
    "work": "ペール・ギュント",
    "image": "images/Peer Gynt.jpg"
  },
  {
    "name": "ペルディカン",
    "work": "Don't Fool With Love",
    "image": "images/Perdican.jpg"
  },
  {
    "name": "フィリップ・コーエン",
    "work": "嘘はフィクサーのはじまり",
    "image": "images/Philip Cohen.jpg"
  },
  {
    "name": "フィリップ",
    "work": "Maigret",
    "image": "images/Philippe.jpg"
  },
  {
    "name": "ポーター",
    "work": "To Provide All People",
    "image": "images/Porter.jpg"
  },
  {
    "name": "司祭",
    "work": "キングダム・オブ・ヘブン",
    "image": "images/Priest.jpg"
  },
  {
    "name": "ヨーク公爵アンドリュー王子",
    "work": "英国スキャンダル〜王室を揺るがしたインタビュー",
    "image": "images/Prince Andrew.jpg"
  },
  {
    "name": "ロビー・ロス",
    "work": "オスカー・ワイルド",
    "image": "images/Robbie Ross.jpg"
  },
  {
    "name": "ローランド・ブラム",
    "work": "グッド・ファイト",
    "image": "images/Roland Blum.jpg"
  },
  {
    "name": "ロミオ",
    "work": "ロミオとジュリエット",
    "image": "images/Romeo.jpg"
  },
  {
    "name": "ルパート・シモンズ",
    "work": "ブラッド・ダイヤモンド",
    "image": "images/Rupert Simmons.jpg"
  },
  {
    "name": "シフティ・グラフ",
    "work": "Out There",
    "image": "images/Shifty Gruff.jpg"
  },
  {
    "name": "スラヴキン・オハラ博士",
    "work": "ヘンリー・アンド・ザ・ファミリー",
    "image": "images/Slavkin O'Hara.jpg"
  },
  {
    "name": "スペンサー・ギャヴェストン",
    "work": "Le Livre de Spencer",
    "image": "images/Spencer Gaveston.jpg"
  },
  {
    "name": "舞台監督",
    "work": "Our Town",
    "image": "images/Stage Manager.jpg"
  },
  {
    "name": "スティーブン・アーサー・ヤンガー",
    "work": "4デイズ",
    "image": "images/Steven Arthur.jpg"
  },
  {
    "name": "バンカー",
    "work": "The Banker",
    "image": "images/The Banker.jpg"
  },
  {
    "name": "バット",
    "work": "スローターハウス・ルールズ",
    "image": "images/The Bat.jpg"
  },
  {
    "name": "教師",
    "work": "The Gospel of Us",
    "image": "images/The Teacher.jpg"
  },
  {
    "name": "ソーン・ジェイミソン",
    "work": "恋の法律",
    "image": "images/Thorne Jamison.jpg"
  },
  {
    "name": "トミー・アトキンス",
    "work": "Resistance",
    "image": "images/Tommy Atkins.jpg"
  },
  {
    "name": "トニー・ブレア",
    "work": "The Deal",
    "image": "images/Tony Blair_The Deal.jpg"
  },
  {
    "name": "トニー・ブレア",
    "work": "クィーン",
    "image": "images/Tony Blair_The Queen.jpg"
  },
  {
    "name": "トニー・タワーズ",
    "work": "Last Train to Christmas",
    "image": "images/Tony Towers.jpg"
  },
  {
    "name": "ウェズリー・スナイプス",
    "work": "30 Rock",
    "image": "images/Wesley Snipes.jpg"
  },
  {
    "name": "ウィリアム・ボールドウッド",
    "work": "Far from the Madding Crowd",
    "image": "images/William Boldwood.jpg"
  },
  {
    "name": "ウィリアム・マスターズ博士",
    "work": "マスターズ・オブ・セックス",
    "image": "images/William H. Masters.jpg"
  },
  {
    "name": "ウィリアム・トレンチ",
    "work": "サハラに舞う羽根",
    "image": "images/William Trench.jpg"
  },
  {
    "name": "ウィンストン・チャーチル",
    "work": "Fortitude",
    "image": "images/Winston Churchill.jpg"
  },
  {
    "name": "ズース／キャスター",
    "work": "トロン: レガシー",
    "image": "images/Zuse.jpg"
  }
];

const HERO_IMAGES = [
  "images/Carl Flossy.jpg",
  "images/Alexandros.jpg",
  "images/Andrew.jpg",
  "images/Aneurin Bevan.JPG",
  "images/Aro Volturi.jpg",
  "images/Art Honeyman.jpg",
  "images/Arthur.jpg",
  "images/Aziraphale.jpg",
  "images/Lucian.jpg"
];

// Two complete qualifying passes, followed by adaptive comparisons of contenders.
// The sorter intentionally uses winner-only, four-photo choices (three if needed).
const SCREENING_ROUNDS = 2;
const CONTENDER_COUNT = 24;
const SEMIFINAL_CHOICES = 8;
const FINALIST_COUNT = 16;
const FINAL_CHOICES = 12;

const state = {
  all: [],
  phase: "screening",
  screeningRound: 0,
  groups: [],
  groupIndex: 0,
  currentGroup: null,
  pool: [],
  stageChoices: 0,
  stageAppearances: new Map(),
  pairCounts: new Map(),
  rating: new Map(),
  wins: new Map(),
  appearances: new Map(),
  seedOrder: new Map(),
  answered: 0,
  totalEstimated: 0,
  result: []
};

const $ = id => document.getElementById(id);

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function initials(name) {
  return name.replace(/[・\s\.／]/g, "").slice(0, 2);
}

function show(id) {
  document.querySelectorAll(".screen").forEach(el => el.classList.remove("active"));
  $(id).classList.add("active");
  window.scrollTo({top: 0, behavior: "instant"});
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, m => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;'
  }[m]));
}

function imageSrc(path) {
  return encodeURI(path);
}

function imageMarkup(c) {
  return `<img src="${imageSrc(c.image)}" alt="${escapeHtml(c.name)}"
    onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
    <div class="fallback" style="display:none">${escapeHtml(initials(c.name))}</div>`;
}

function renderHero() {
  $("member-count").textContent = `${characters.length}人から、あなたのTOP9を。`;
  const box = $("hero-collage");
  box.innerHTML = "";

  const heroPaths = HERO_IMAGES;
  const showItems = heroPaths
    ? heroPaths.map(path => characters.find(c => c.image === path)).filter(Boolean)
    : characters.slice(0, 9);

  showItems.forEach(c => {
    const el = document.createElement("div");
    el.className = "hero-tile";
    el.innerHTML = imageMarkup(c);
    box.appendChild(el);
  });
}

function groupSizes(n) {
  const groupCount = Math.ceil(n / 4);
  if (groupCount === 0) return [];
  const smaller = Math.floor(n / groupCount);
  const extra = n % groupCount;
  return Array.from({length: groupCount}, (_, i) => smaller + (i < extra ? 1 : 0));
}

function splitGroups(items, sizes) {
  let pos = 0;
  return sizes.map(size => {
    const group = items.slice(pos, pos + size);
    pos += size;
    return group;
  });
}

function pairKey(a, b) {
  return a < b ? `${a}:${b}` : `${b}:${a}`;
}

function previousMeetings(a, b) {
  return state.pairCounts.get(pairKey(a.id, b.id)) || 0;
}

// Find a shuffled distribution with as few repeat opponents as possible.
function makeScreeningGroups() {
  const sizes = groupSizes(state.all.length);
  let best = null;
  let bestPenalty = Infinity;
  for (let attempt = 0; attempt < 100; attempt++) {
    const trial = splitGroups(shuffle(state.all), sizes);
    let penalty = 0;
    for (const group of trial) {
      for (let i = 0; i < group.length; i++) {
        for (let j = i + 1; j < group.length; j++) {
          penalty += previousMeetings(group[i], group[j]);
        }
      }
    }
    if (penalty < bestPenalty) {
      bestPenalty = penalty;
      best = trial;
    }
    if (penalty === 0) break;
  }
  return best;
}

function rankCandidates(items) {
  return [...items].sort((a, b) => {
    const ratingDiff = (state.rating.get(b.id) || 1000) - (state.rating.get(a.id) || 1000);
    if (Math.abs(ratingDiff) > 0.0000001) return ratingDiff;
    const winsDiff = (state.wins.get(b.id) || 0) - (state.wins.get(a.id) || 0);
    if (winsDiff) return winsDiff;
    return (state.seedOrder.get(a.id) || 0) - (state.seedOrder.get(b.id) || 0);
  });
}

function startQuiz() {
  state.all = characters.map((c, id) => ({...c, id}));
  state.phase = "screening";
  state.screeningRound = 0;
  state.groups = [];
  state.groupIndex = 0;
  state.currentGroup = null;
  state.pool = [];
  state.stageChoices = 0;
  state.stageAppearances = new Map();
  state.pairCounts = new Map();
  state.rating = new Map(state.all.map(c => [c.id, 1000]));
  state.wins = new Map(state.all.map(c => [c.id, 0]));
  state.appearances = new Map(state.all.map(c => [c.id, 0]));
  state.seedOrder = new Map(shuffle(state.all).map((c, i) => [c.id, i]));
  state.answered = 0;
  state.totalEstimated = groupSizes(state.all.length).length * SCREENING_ROUNDS
    + SEMIFINAL_CHOICES + FINAL_CHOICES;
  state.result = [];
  beginScreeningRound();
  show("quiz");
}

function beginScreeningRound() {
  state.screeningRound += 1;
  state.groups = makeScreeningGroups();
  state.groupIndex = 0;
  renderGroup();
}

function beginFocusedStage(phase, count) {
  state.phase = phase;
  state.pool = rankCandidates(phase === "semifinal" ? state.all : state.pool).slice(0, count);
  state.stageChoices = 0;
  state.stageAppearances = new Map(state.pool.map(c => [c.id, 0]));
  renderGroup();
}

// Every remaining contender receives similar numbers of comparisons.
// Within that restriction, prefer closely matched photos and fresh opponents.
function chooseFocusedGroup() {
  const pool = state.pool;
  const minPlayed = Math.min(...pool.map(c => state.stageAppearances.get(c.id) || 0));
  const underShown = pool.filter(c => (state.stageAppearances.get(c.id) || 0) === minPlayed);
  const currentRank = rankCandidates(pool);
  const rankOf = new Map(currentRank.map((c, i) => [c.id, i]));

  const anchor = shuffle(underShown).sort((a, b) => {
    const da = Math.abs((rankOf.get(a.id) || 0) - 8);
    const db = Math.abs((rankOf.get(b.id) || 0) - 8);
    return da - db;
  })[0];

  const selected = [anchor];
  while (selected.length < Math.min(4, pool.length)) {
    const next = shuffle(pool.filter(c => !selected.some(s => s.id === c.id)))
      .sort((a, b) => {
        const ratingA = state.rating.get(a.id) || 1000;
        const ratingB = state.rating.get(b.id) || 1000;
        const target = selected.reduce((sum, c) => sum + (state.rating.get(c.id) || 1000), 0) / selected.length;
        const cost = c => (state.stageAppearances.get(c.id) || 0) * 1000
          + Math.abs((state.rating.get(c.id) || 1000) - target) * 1.7
          + selected.reduce((sum, s) => sum + previousMeetings(c, s) * 75, 0);
        return cost(a) - cost(b);
      })[0];
    selected.push(next);
  }
  return shuffle(selected);
}

function updateProgress() {
  const pct = Math.min(100, Math.round(state.answered / state.totalEstimated * 100));
  $("percent").textContent = `${pct}%`;
  $("bar").style.width = `${pct}%`;
}

function renderGroup() {
  updateProgress();
  if (state.phase === "screening") {
    if (state.groupIndex >= state.groups.length) {
      if (state.screeningRound < SCREENING_ROUNDS) {
        beginScreeningRound();
      } else {
        beginFocusedStage("semifinal", CONTENDER_COUNT);
      }
      return;
    }
    state.currentGroup = state.groups[state.groupIndex];
  } else {
    if (state.stageChoices >= (state.phase === "semifinal" ? SEMIFINAL_CHOICES : FINAL_CHOICES)) {
      if (state.phase === "semifinal") {
        beginFocusedStage("final", FINALIST_COUNT);
      } else {
        buildFinalRanking();
      }
      return;
    }
    state.currentGroup = chooseFocusedGroup();
  }

  const group = state.currentGroup;
  const wrap = $("choices");
  wrap.innerHTML = "";
  wrap.dataset.count = String(group.length);

  group.forEach(c => {
    const card = document.createElement("article");
    card.className = "choice";
    const work = c.work ? `<div class="choice-work">${escapeHtml(c.work)}</div>` : "";
    card.innerHTML = `<div class="choice-media">${imageMarkup(c)}</div>
      <div class="choice-body"><div class="choice-name">${escapeHtml(c.name)}</div>${work}</div>`;
    card.addEventListener("click", () => selectCharacter(c));
    wrap.appendChild(card);
  });
}

function selectCharacter(winner) {
  const group = state.currentGroup;
  const winnerRating = state.rating.get(winner.id) || 1000;
  const changes = new Map();
  const k = state.phase === "screening" ? 20 : state.phase === "semifinal" ? 24 : 28;
  const multiplier = 1 / Math.sqrt(Math.max(1, group.length - 1));

  // Elo-like pairwise evidence from the single 4-way choice.
  group.forEach(c => {
    state.appearances.set(c.id, (state.appearances.get(c.id) || 0) + 1);
    if (state.phase !== "screening") {
      state.stageAppearances.set(c.id, (state.stageAppearances.get(c.id) || 0) + 1);
    }
    if (c.id === winner.id) return;
    const otherRating = state.rating.get(c.id) || 1000;
    const expected = 1 / (1 + Math.pow(10, (otherRating - winnerRating) / 400));
    const delta = k * multiplier * (1 - expected);
    changes.set(winner.id, (changes.get(winner.id) || 0) + delta);
    changes.set(c.id, (changes.get(c.id) || 0) - delta);
  });

  for (let i = 0; i < group.length; i++) {
    for (let j = i + 1; j < group.length; j++) {
      const key = pairKey(group[i].id, group[j].id);
      state.pairCounts.set(key, (state.pairCounts.get(key) || 0) + 1);
    }
  }
  changes.forEach((delta, id) => state.rating.set(id, (state.rating.get(id) || 1000) + delta));
  state.wins.set(winner.id, (state.wins.get(winner.id) || 0) + 1);
  state.answered += 1;

  if (state.phase === "screening") state.groupIndex += 1;
  else state.stageChoices += 1;
  renderGroup();
}

function buildFinalRanking() {
  state.result = rankCandidates(state.pool).slice(0, 9);
  renderResult();
}

function renderResult() {
  const box = $("ranking");
  box.innerHTML = "";
  const displayOrder = [3, 4, 5, 1, 0, 2, 6, 7, 8];

  displayOrder.forEach(resultIndex => {
    const c = state.result[resultIndex];
    if (!c) return;
    const rank = resultIndex + 1;
    const el = document.createElement("article");
    el.className = `rank rank-${rank}`;
    el.dataset.rank = String(rank);
    const work = c.work ? `<div class="rank-work">${escapeHtml(c.work)}</div>` : "";
    el.innerHTML = `<div class="rank-badge">${rank}位</div>
      <div class="rank-media">${imageMarkup(c)}</div>
      <div class="rank-body"><div class="rank-name">${escapeHtml(c.name)}</div>${work}</div>`;
    box.appendChild(el);
  });
  show("result");
}


$("start-btn").addEventListener("click",startQuiz);$("restart-btn").addEventListener("click",()=>show("home"));

function loadImage(src){return new Promise(resolve=>{const img=new Image();img.onload=()=>resolve(img);img.onerror=()=>resolve(null);img.src=imageSrc(src);});}
function fitText(ctx,text,maxWidth,startSize,minSize=14){let size=startSize;while(size>minSize){ctx.font=`700 ${size}px sans-serif`;if(ctx.measureText(text).width<=maxWidth)return size;size-=2;}return minSize;}
function drawSquareCoverTop(ctx,img,x,y,size){const scale=Math.max(size/img.width,size/img.height);const dw=img.width*scale,dh=img.height*scale;const dx=x+(size-dw)/2,dy=y;ctx.save();ctx.beginPath();ctx.rect(x,y,size,size);ctx.clip();ctx.drawImage(img,dx,dy,dw,dh);ctx.restore();}

async function createResultBlob(){
  const W=1200,margin=70,gap=18,top=245,cell=(W-margin*2-gap*2)/3,imgH=cell,labelH=112,H=Math.ceil(top+3*(imgH+labelH)+2*gap+110);
  const canvas=document.createElement("canvas");canvas.width=W;canvas.height=H;const ctx=canvas.getContext("2d");
  ctx.fillStyle="#fff";ctx.fillRect(0,0,W,H);ctx.fillStyle="#111827";ctx.font="800 38px sans-serif";ctx.fillText("MICHAEL SHEEN",70,78);
  const grad=ctx.createLinearGradient(70,100,650,100);grad.addColorStop(0,"#7060ea");grad.addColorStop(1,"#ec2f9c");ctx.fillStyle=grad;ctx.font="900 74px sans-serif";ctx.fillText("好き顔9選",70,155);
  ctx.fillStyle="#6b7280";ctx.font="400 25px sans-serif";ctx.fillText("マイケル・シーン 好き顔9選",72,198);
  const displayOrder=[3,4,5,1,0,2,6,7,8];
  for(let i=0;i<displayOrder.length;i++){const resultIndex=displayOrder[i],c=state.result[resultIndex];if(!c)continue;const rank=resultIndex+1,row=Math.floor(i/3),col=i%3,x=margin+col*(cell+gap),y=top+row*(imgH+labelH+gap);ctx.fillStyle="#eef0f3";ctx.fillRect(x,y,cell,imgH);const im=await loadImage(c.image);if(im)drawSquareCoverTop(ctx,im,x,y,cell);
    ctx.fillStyle=rank===1?"#b03bd1":rank===2?"#5f82d9":"#fff";ctx.beginPath();if(ctx.roundRect)ctx.roundRect(x+10,y+10,68,48,24);else ctx.rect(x+10,y+10,68,48);ctx.fill();ctx.fillStyle=rank<=2?"#fff":"#111827";ctx.textAlign="center";ctx.textBaseline="middle";ctx.font="800 22px sans-serif";ctx.fillText(`${rank}位`,x+44,y+34);ctx.textAlign="left";ctx.textBaseline="alphabetic";
    ctx.fillStyle="#111827";const ns=fitText(ctx,c.name,cell-24,27,16);ctx.font=`800 ${ns}px sans-serif`;ctx.fillText(c.name,x+10,y+imgH+38);ctx.fillStyle="#6b7280";const ws=fitText(ctx,c.work,cell-24,18,12);ctx.font=`400 ${ws}px sans-serif`;ctx.fillText(c.work,x+10,y+imgH+73);
  }
  ctx.fillStyle="#9ca3af";ctx.font="400 20px sans-serif";ctx.fillText(location.hostname+location.pathname,70,H-38);return new Promise(resolve=>canvas.toBlob(resolve,"image/png",1));
}
function downloadBlob(blob,name){const url=URL.createObjectURL(blob),a=document.createElement("a");a.href=url;a.download=name;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);}
$("save-btn").addEventListener("click",async()=>{const blob=await createResultBlob();if(blob)downloadBlob(blob,"ms-sukigao-top9.png");});
$("share-btn").addEventListener("click",async()=>{const shareText=`私のマイケル・シーン 好き顔9選 👑

#MS
https://qnopod.github.io/michael-sheen-character-sort/?v=3`;const blob=await createResultBlob();if(!blob)return;const file=new File([blob],"ms-sukigao-top9.png",{type:"image/png"});if(navigator.share&&navigator.canShare&&navigator.canShare({files:[file]})){try{await navigator.share({title:"マイケル・シーン好き顔9選",text:shareText,files:[file]});return;}catch(e){if(e&&e.name==="AbortError")return;}}const intent="https://twitter.com/intent/tweet?text="+encodeURIComponent(shareText);window.open(intent,"_blank","noopener,noreferrer");downloadBlob(blob,"ms-sukigao-top9.png");});
renderHero();
