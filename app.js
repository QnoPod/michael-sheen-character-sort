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

const state={active:[],groups:[],groupIndex:0,round:0,roundWinners:[],score:new Map(),reachedRound:new Map(),totalEstimated:1,answered:0,result:[]};
const $=id=>document.getElementById(id);

function shuffle(arr){const a=[...arr];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
function initials(name){return name.replace(/[・\s\.／]/g,"").slice(0,2);}
function show(id){document.querySelectorAll(".screen").forEach(el=>el.classList.remove("active"));$(id).classList.add("active");window.scrollTo({top:0,behavior:"instant"});}
function escapeHtml(s){return String(s).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]));}
function imageSrc(path){return encodeURI(path);}
function imageMarkup(c){return `<img src="${imageSrc(c.image)}" alt="${escapeHtml(c.name)}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"><div class="fallback" style="display:none">${escapeHtml(initials(c.name))}</div>`;}

function renderHero(){
  $("member-count").textContent=`${characters.length}人から、あなたのTOP9を。`;
  const box=$("hero-collage");box.innerHTML="";
  characters.slice(0,9).forEach(c=>{const el=document.createElement("div");el.className="hero-tile";el.innerHTML=imageMarkup(c);box.appendChild(el);});
}
function estimateQuestions(n){let total=0,current=n;while(current>9){total+=Math.floor(current/4);current=Math.floor(current/4)+(current%4);}return Math.max(total,1);}
function startQuiz(){
  state.active=shuffle(characters.map((c,i)=>({...c,id:i})));state.groups=[];state.groupIndex=0;state.round=0;state.roundWinners=[];
  state.score=new Map(state.active.map(c=>[c.id,0]));state.reachedRound=new Map(state.active.map(c=>[c.id,0]));
  state.totalEstimated=estimateQuestions(state.active.length);state.answered=0;state.result=[];beginRound();show("quiz");
}
function beginRound(){
  state.round++;state.active=shuffle(state.active);state.active.forEach(c=>state.reachedRound.set(c.id,state.round));
  state.groups=[];state.roundWinners=[];const fullCount=Math.floor(state.active.length/4)*4;const matched=state.active.slice(0,fullCount);const byes=state.active.slice(fullCount);
  for(let i=0;i<matched.length;i+=4)state.groups.push(matched.slice(i,i+4));state.roundWinners.push(...byes);state.groupIndex=0;renderGroup();
}
function updateProgress(){const pct=Math.min(99,Math.round(state.answered/state.totalEstimated*100));$("percent").textContent=`${pct}%`;$("bar").style.width=`${pct}%`;}
function renderGroup(){
  updateProgress();const group=state.groups[state.groupIndex];if(!group)return endRound();const wrap=$("choices");wrap.innerHTML="";
  group.forEach(c=>{const card=document.createElement("article");card.className="choice";card.innerHTML=`<div class="choice-media">${imageMarkup(c)}</div><div class="choice-body"><div class="choice-name">${escapeHtml(c.name)}</div><div class="choice-work">${escapeHtml(c.work)}</div></div>`;card.addEventListener("click",()=>selectCharacter(c));wrap.appendChild(card);});
}
function selectCharacter(c){state.roundWinners.push(c);state.score.set(c.id,(state.score.get(c.id)||0)+100*state.round);state.answered++;state.groupIndex++;renderGroup();}
function endRound(){const winners=[...new Map(state.roundWinners.map(c=>[c.id,c])).values()];if(winners.length<=9)return buildFinalRanking(winners);state.active=winners;beginRound();}
function buildFinalRanking(finalists){
  const finalistIds=new Set(finalists.map(c=>c.id));const all=characters.map((c,i)=>({...c,id:i}));
  const sorted=[...all].sort((a,b)=>{const af=finalistIds.has(a.id)?1:0,bf=finalistIds.has(b.id)?1:0;if(af!==bf)return bf-af;const rd=(state.reachedRound.get(b.id)||0)-(state.reachedRound.get(a.id)||0);if(rd)return rd;const sd=(state.score.get(b.id)||0)-(state.score.get(a.id)||0);if(sd)return sd;return a.name.localeCompare(b.name,"ja");});
  state.result=sorted.slice(0,9);renderResult();
}
function renderResult(){
  const box=$("ranking");box.innerHTML="";const displayOrder=[3,4,5,1,0,2,6,7,8];
  displayOrder.forEach(resultIndex=>{const c=state.result[resultIndex];if(!c)return;const rank=resultIndex+1;const el=document.createElement("article");el.className=`rank rank-${rank}`;el.innerHTML=`<div class="rank-badge">${rank}位</div><div class="rank-media">${imageMarkup(c)}</div><div class="rank-body"><div class="rank-name">${escapeHtml(c.name)}</div><div class="rank-work">${escapeHtml(c.work)}</div></div>`;box.appendChild(el);});
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

#MSCharacterSort
${location.href}`;const blob=await createResultBlob();if(!blob)return;const file=new File([blob],"ms-sukigao-top9.png",{type:"image/png"});if(navigator.share&&navigator.canShare&&navigator.canShare({files:[file]})){try{await navigator.share({title:"マイケル・シーン好き顔9選",text:shareText,files:[file]});return;}catch(e){if(e&&e.name==="AbortError")return;}}const intent="https://twitter.com/intent/tweet?text="+encodeURIComponent(shareText);window.open(intent,"_blank","noopener,noreferrer");downloadBlob(blob,"ms-sukigao-top9.png");});
renderHero();
