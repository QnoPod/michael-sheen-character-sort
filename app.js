const characters = [
  {
    "name": "アジラフェル",
    "work": "Good Omens",
    "image": "images/aziraphale.png"
  },
  {
    "name": "ウィリアム・マスターズ",
    "work": "Masters of Sex",
    "image": "images/william-masters.png"
  },
  {
    "name": "マーティン・ウィットリー",
    "work": "Prodigal Son",
    "image": "images/martin-whitly.png"
  },
  {
    "name": "マイケル",
    "work": "Staged",
    "image": "images/michael-staged.png"
  },
  {
    "name": "トニー・ブレア",
    "work": "The Deal / The Queen / The Special Relationship",
    "image": "images/tony-blair.png"
  },
  {
    "name": "デヴィッド・フロスト",
    "work": "Frost/Nixon",
    "image": "images/david-frost.png"
  },
  {
    "name": "ブライアン・クラフ",
    "work": "The Damned United",
    "image": "images/brian-clough.png"
  },
  {
    "name": "ルシアン",
    "work": "Underworldシリーズ",
    "image": "images/lucian.png"
  },
  {
    "name": "アロ",
    "work": "The Twilight Saga",
    "image": "images/aro.png"
  },
  {
    "name": "キャスター／ズース",
    "work": "TRON: Legacy",
    "image": "images/castor-zuse.png"
  },
  {
    "name": "アーサー",
    "work": "Passengers",
    "image": "images/arthur.png"
  },
  {
    "name": "ポール・ベイツ",
    "work": "Midnight in Paris",
    "image": "images/paul-bates.png"
  },
  {
    "name": "ケネス・ウィリアムズ",
    "work": "Kenneth Williams: Fantabulosa!",
    "image": "images/kenneth-williams.png"
  },
  {
    "name": "マーク・ファーネス",
    "work": "Dirty Filthy Love",
    "image": "images/mark-furness.png"
  },
  {
    "name": "ネロ",
    "work": "Ancient Rome: The Rise and Fall of an Empire",
    "image": "images/nero.png"
  },
  {
    "name": "H・G・ウェルズ",
    "work": "H. G. Wells: War with the World",
    "image": "images/hg-wells.png"
  },
  {
    "name": "ウェズリー・スナイプス",
    "work": "30 Rock",
    "image": "images/wesley-snipes.png"
  },
  {
    "name": "ローランド・ブラム",
    "work": "The Good Fight",
    "image": "images/roland-blum.png"
  },
  {
    "name": "クリス・タラント",
    "work": "Quiz",
    "image": "images/chris-tarrant.png"
  },
  {
    "name": "アンドリュー",
    "work": "Best Interests",
    "image": "images/andrew-best-interests.png"
  },
  {
    "name": "アンドルー王子",
    "work": "A Very Royal Scandal",
    "image": "images/prince-andrew.png"
  },
  {
    "name": "デニー・ドリスコル",
    "work": "The Way",
    "image": "images/denny-driscoll.png"
  },
  {
    "name": "ポール",
    "work": "The Sandman",
    "image": "images/paul-sandman.png"
  },
  {
    "name": "デヴィッド・シャーボーン",
    "work": "Vardy v Rooney: A Courtroom Drama",
    "image": "images/david-sherborne.png"
  },
  {
    "name": "マルコム・ハウ",
    "work": "Apostle",
    "image": "images/malcolm-howe.png"
  },
  {
    "name": "ウィリアム・ボールドウッド",
    "work": "Far from the Madding Crowd",
    "image": "images/william-boldwood.png"
  },
  {
    "name": "カルロス",
    "work": "Nocturnal Animals",
    "image": "images/carlos.png"
  },
  {
    "name": "フィリップ・コーエン",
    "work": "Norman",
    "image": "images/philip-cohen.png"
  },
  {
    "name": "オースティン",
    "work": "Home Again",
    "image": "images/austen.png"
  },
  {
    "name": "クレイグ・フィッシャー",
    "work": "Brad's Status",
    "image": "images/craig-fisher.png"
  },
  {
    "name": "ブレア・マッドフライ",
    "work": "Dolittle",
    "image": "images/blair-mudfly.png"
  },
  {
    "name": "トニー・タワーズ",
    "work": "Last Train to Christmas",
    "image": "images/tony-towers.png"
  },
  {
    "name": "ロビー・ロス",
    "work": "Wilde",
    "image": "images/robbie-ross.png"
  },
  {
    "name": "マイルズ・メイトランド",
    "work": "Bright Young Things",
    "image": "images/miles-maitland.png"
  },
  {
    "name": "ウィリアム・トレンチ",
    "work": "The Four Feathers",
    "image": "images/william-trench.png"
  },
  {
    "name": "ブラッドショー",
    "work": "Mary Reilly",
    "image": "images/bradshaw.png"
  },
  {
    "name": "コリン",
    "work": "Heartlands",
    "image": "images/colin.png"
  },
  {
    "name": "ソーン・ジャミソン",
    "work": "Laws of Attraction",
    "image": "images/thorne-jamison.png"
  },
  {
    "name": "ルパート・シモンズ",
    "work": "Blood Diamond",
    "image": "images/rupert-simmons.png"
  },
  {
    "name": "アート・ハニーマン",
    "work": "Music Within",
    "image": "images/art-honeyman.png"
  },
  {
    "name": "ユスフ／スティーヴン・アーサー",
    "work": "Unthinkable",
    "image": "images/yusuf-steven-arthur.png"
  },
  {
    "name": "チェット・ハルナー",
    "work": "The Spoils of Babylon",
    "image": "images/chet-halner.png"
  },
  {
    "name": "ケントン・プライス",
    "work": "The Spoils Before Dying",
    "image": "images/kenton-price.png"
  },
  {
    "name": "カスピアン・ウィント",
    "work": "7 Days in Hell",
    "image": "images/caspian-wint.png"
  },
  {
    "name": "デイヴ・エヴァンス",
    "work": "The Green Hollow",
    "image": "images/dave-evans.png"
  },
  {
    "name": "カール・フロッシー",
    "work": "Michael Bolton's Big, Sexy Valentine's Day Special",
    "image": "images/carl-flossy.png"
  },
  {
    "name": "ポーター",
    "work": "To Provide All People",
    "image": "images/porter.png"
  },
  {
    "name": "アナイリン・ベヴァン",
    "work": "Nye",
    "image": "images/aneurin-bevan.png"
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
