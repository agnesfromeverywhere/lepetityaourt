const { useState, useEffect } = React;

const LESSONS = [
  { id:"numbers", emoji:"1️⃣", grad:"from-blue-400 to-blue-600", topic:"Numbers", topicFr:"Les Chiffres", words:[
    { fr:"un", en:"one", e:"1️⃣", sound:"uh" },
    { fr:"deux", en:"two", e:"2️⃣", sound:"duh" },
    { fr:"trois", en:"three", e:"3️⃣", sound:"twah" },
    { fr:"quatre", en:"four", e:"4️⃣", sound:"KAT-ruh" },
    { fr:"cinq", en:"five", e:"5️⃣", sound:"sank" },
    { fr:"six", en:"six", e:"6️⃣", sound:"sees" },
    { fr:"sept", en:"seven", e:"7️⃣", sound:"set" },
    { fr:"huit", en:"eight", e:"8️⃣", sound:"weet" },
    { fr:"neuf", en:"nine", e:"9️⃣", sound:"nuhf" },
    { fr:"dix", en:"ten", e:"🔟", sound:"dees" },
  ]},
  { id:"animals", emoji:"🐶", grad:"from-green-400 to-green-600", topic:"Animals", topicFr:"Les Animaux", words:[
    { fr:"le chien", en:"dog", e:"🐶", sound:"shee-EN" },
    { fr:"le chat", en:"cat", e:"🐱", sound:"sha" },
    { fr:"le lapin", en:"rabbit", e:"🐰", sound:"la-PAN" },
    { fr:"l'oiseau", en:"bird", e:"🐦", sound:"wah-ZOH" },
    { fr:"le canard", en:"duck", e:"🦆", sound:"ka-NAR" },
    { fr:"le poisson", en:"fish", e:"🐟", sound:"pwah-SON" },
    { fr:"le cheval", en:"horse", e:"🐴", sound:"shuh-VAL" },
    { fr:"la vache", en:"cow", e:"🐄", sound:"vash" },
  ]},
  { id:"fruits", emoji:"🍎", grad:"from-red-400 to-pink-500", topic:"Fruits", topicFr:"Les Fruits", words:[
    { fr:"la pomme", en:"apple", e:"🍎", sound:"la POM" },
    { fr:"la banane", en:"banana", e:"🍌", sound:"ba-NAN" },
    { fr:"la fraise", en:"strawberry", e:"🍓", sound:"frez" },
    { fr:"l'orange", en:"orange", e:"🍊", sound:"oh-RONZH" },
    { fr:"le raisin", en:"grapes", e:"🍇", sound:"reh-ZAN" },
    { fr:"la mangue", en:"mango", e:"🥭", sound:"mong" },
    { fr:"la pasteque", en:"watermelon", e:"🍉", sound:"pas-TEK" },
    { fr:"la peche", en:"peach", e:"🍑", sound:"pesh" },
  ]},
  { id:"vegetables", emoji:"🥕", grad:"from-orange-400 to-orange-600", topic:"Vegetables", topicFr:"Les Legumes", words:[
    { fr:"la carotte", en:"carrot", e:"🥕", sound:"ka-ROT" },
    { fr:"la tomate", en:"tomato", e:"🍅", sound:"to-MAT" },
    { fr:"le mais", en:"corn", e:"🌽", sound:"ma-EES" },
    { fr:"le brocoli", en:"broccoli", e:"🥦", sound:"bro-ko-LEE" },
    { fr:"la pomme de terre", en:"potato", e:"🥔", sound:"pom duh TAIR" },
    { fr:"le concombre", en:"cucumber", e:"🥒", sound:"kon-KOM-bruh" },
    { fr:"l'oignon", en:"onion", e:"🧅", sound:"on-YON" },
    { fr:"le poivron", en:"pepper", e:"🫑", sound:"pwah-VRON" },
  ]},
  { id:"food", emoji:"🍝", grad:"from-yellow-400 to-yellow-600", topic:"Meals", topicFr:"Les Repas", words:[
    { fr:"le riz", en:"rice", e:"🍚", sound:"ree" },
    { fr:"les pates", en:"pasta", e:"🍝", sound:"pat" },
    { fr:"le pain", en:"bread", e:"🍞", sound:"pan" },
    { fr:"le lait", en:"milk", e:"🥛", sound:"leh" },
    { fr:"l'oeuf", en:"egg", e:"🥚", sound:"uhf" },
    { fr:"le fromage", en:"cheese", e:"🧀", sound:"fro-MAZH" },
    { fr:"le gateau", en:"cake", e:"🎂", sound:"ga-TOH" },
    { fr:"la soupe", en:"soup", e:"🍲", sound:"soop" },
  ]},
  { id:"cutlery", emoji:"🍴", grad:"from-purple-400 to-purple-600", topic:"Table", topicFr:"La Table", words:[
    { fr:"la fourchette", en:"fork", e:"🍴", sound:"foor-SHET" },
    { fr:"le couteau", en:"knife", e:"🔪", sound:"koo-TOH" },
    { fr:"la cuillere", en:"spoon", e:"🥄", sound:"kwee-YAIR" },
    { fr:"l'assiette", en:"plate", e:"🍽️", sound:"ah-SYET" },
    { fr:"le verre", en:"glass", e:"🥛", sound:"vair" },
    { fr:"le bol", en:"bowl", e:"🥣", sound:"bol" },
    { fr:"la tasse", en:"cup", e:"☕", sound:"tass" },
    { fr:"la serviette", en:"napkin", e:"🧻", sound:"sair-VYET" },
  ]},
  { id:"vehicles", emoji:"🚗", grad:"from-sky-400 to-sky-600", topic:"Vehicles", topicFr:"Les Vehicules", words:[
    { fr:"la voiture", en:"car", e:"🚗", sound:"vwah-TOOR" },
    { fr:"le camion", en:"truck", e:"🚚", sound:"kam-YON" },
    { fr:"le camion de pompiers", en:"fire truck", e:"🚒", sound:"kam-YON duh pom-PYAY" },
    { fr:"le bus", en:"bus", e:"🚌", sound:"boos" },
    { fr:"le train", en:"train", e:"🚂", sound:"tran" },
    { fr:"l'avion", en:"plane", e:"✈️", sound:"av-YON" },
    { fr:"le velo", en:"bike", e:"🚲", sound:"vay-LOH" },
    { fr:"le bateau", en:"boat", e:"⛵", sound:"ba-TOH" },
  ]},
  { id:"body", emoji:"🧒", grad:"from-rose-400 to-rose-600", topic:"Body", topicFr:"Le Corps", words:[
    { fr:"la tete", en:"head", e:"🧠", sound:"tet" },
    { fr:"les yeux", en:"eyes", e:"👀", sound:"yuh" },
    { fr:"le nez", en:"nose", e:"👃", sound:"neh" },
    { fr:"la bouche", en:"mouth", e:"👄", sound:"boosh" },
    { fr:"les oreilles", en:"ears", e:"👂", sound:"oh-RAY" },
    { fr:"les mains", en:"hands", e:"👐", sound:"man" },
    { fr:"les pieds", en:"feet", e:"🦶", sound:"pyeh" },
    { fr:"le ventre", en:"tummy", e:"🫃", sound:"von-truh" },
  ]},
  { id:"clothes", emoji:"👕", grad:"from-teal-400 to-teal-600", topic:"Clothes", topicFr:"Les Vetements", words:[
    { fr:"le t-shirt", en:"t-shirt", e:"👕", sound:"tee-shirt" },
    { fr:"le pantalon", en:"trousers", e:"👖", sound:"pon-ta-LON" },
    { fr:"les chaussures", en:"shoes", e:"👟", sound:"shoh-SYOOR" },
    { fr:"le chapeau", en:"hat", e:"🎩", sound:"sha-POH" },
    { fr:"la robe", en:"dress", e:"👗", sound:"rob" },
    { fr:"le manteau", en:"coat", e:"🧥", sound:"mon-TOH" },
    { fr:"les chaussettes", en:"socks", e:"🧦", sound:"shoh-SET" },
    { fr:"le pyjama", en:"pyjamas", e:"🛌", sound:"pee-zha-MA" },
  ]},
  { id:"colors", emoji:"🌈", grad:"from-pink-400 to-rose-500", topic:"Colors", topicFr:"Les Couleurs", words:[
    { fr:"rouge", en:"red", e:"🔴", sound:"roozh" },
    { fr:"bleu", en:"blue", e:"🔵", sound:"bluh" },
    { fr:"jaune", en:"yellow", e:"🟡", sound:"zhohn" },
    { fr:"vert", en:"green", e:"🟢", sound:"vair" },
    { fr:"rose", en:"pink", e:"🌸", sound:"rohz" },
    { fr:"orange", en:"orange", e:"🟠", sound:"oh-RONZH" },
    { fr:"violet", en:"purple", e:"🟣", sound:"vyo-LAY" },
    { fr:"blanc", en:"white", e:"⬜", sound:"blon" },
  ]},
  { id:"greetings", emoji:"👋", grad:"from-indigo-400 to-indigo-600", topic:"Hello!", topicFr:"Bonjour!", words:[
    { fr:"Bonjour", en:"Hello", e:"👋", sound:"bon-ZHOOR" },
    { fr:"Au revoir", en:"Goodbye", e:"🙋", sound:"oh ruh-VWAR" },
    { fr:"Merci", en:"Thank you", e:"🙏", sound:"mair-SEE" },
    { fr:"S'il te plait", en:"Please", e:"😊", sound:"seel tuh PLAY" },
    { fr:"Oui", en:"Yes", e:"✅", sound:"wee" },
    { fr:"Non", en:"No", e:"❌", sound:"non" },
    { fr:"Bravo", en:"Well done", e:"🎉", sound:"bra-VOH" },
    { fr:"Encore", en:"Again", e:"🔁", sound:"on-KOR" },
  ]},
];

const STICKERS = ["⭐","🌟","🏆","🎉","🎈","🦄","🌈","💫","🥳","👏"];

const speak = (text) => {
  if (!window.speechSynthesis) return;
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "fr-FR";
  u.rate = 0.7;
  u.pitch = 1.3;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(u);
};

const celebrate = () => {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    [523,659,784,1047].forEach((f,i) => {
      const o = ctx.createOscillator(), g = ctx.createGain();
      o.connect(g); g.connect(ctx.destination);
      o.frequency.value = f; o.type = "sine";
      g.gain.setValueAtTime(0.3, ctx.currentTime + i*0.15);
      g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i*0.15 + 0.4);
      o.start(ctx.currentTime + i*0.15);
      o.stop(ctx.currentTime + i*0.15 + 0.4);
    });
  } catch(e) {}
};

const totalWords = LESSONS.reduce((a,l) => a + l.words.length, 0);

function App() {
  const [screen, setScreen] = useState("splash");
  const [lesson, setLesson] = useState(null);
  const [idx, setIdx] = useState(0);
  const [stars, setStars] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [quizWord, setQuizWord] = useState(null);
  const [choices, setChoices] = useState([]);
  const [quizResult, setQuizResult] = useState(null);
  const [done, setDone] = useState({});
  const [dark, setDark] = useState(false);
  const [sticker, setSticker] = useState(null);
  const [printLesson, setPrintLesson] = useState(null);

  useEffect(() => {
    if (screen === "splash") {
      const t = setTimeout(() => setScreen("home"), 2800);
      return () => clearTimeout(t);
    }
  }, [screen]);

  const showSticker = () => {
    setSticker(STICKERS[Math.floor(Math.random() * STICKERS.length)]);
    setTimeout(() => setSticker(null), 1800);
  };

  const startQuiz = (l) => {
    const word = l.words[Math.floor(Math.random() * l.words.length)];
    const others = l.words.filter(w => w.fr !== word.fr).sort(() => .5 - Math.random()).slice(0,3);
    setQuizWord(word);
    setChoices([word, ...others].sort(() => .5 - Math.random()));
    setQuizResult(null);
  };

  const nextQuiz = (l) => {
    const word = l.words[Math.floor(Math.random() * l.words.length)];
    const others = l.words.filter(w => w.fr !== word.fr).sort(() => .5 - Math.random()).slice(0,3);
    setQuizWord(word);
    setChoices([word, ...others].sort(() => .5 - Math.random()));
    setQuizResult(null);
  };

  const bg = dark ? "bg-gray-900" : "bg-gradient-to-b from-indigo-100 via-purple-50 to-yellow-100";
  const card = dark ? "bg-gray-800" : "bg-white";
  const tx = dark ? "text-white" : "text-gray-800";
  const su = dark ? "text-gray-300" : "text-gray-500";

  return (
    <div className={`min-h-screen ${bg} flex flex-col items-center pb-10`} style={{fontFamily:"'Segoe UI',sans-serif"}}>
      <style>{`
        @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
        @keyframes slideIn{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
        @keyframes popIn{0%{transform:scale(0)}70%{transform:scale(1.2)}100%{transform:scale(1)}}
        @keyframes fadeAway{to{opacity:0;transform:scale(2)}}
        @keyframes splashIn{0%{transform:scale(0.5);opacity:0}70%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}
        .float{animation:float 3s ease-in-out infinite}
        .slide{animation:slideIn 0.4s ease}
        .splash{animation:splashIn 0.7s ease forwards}
        .sticker{animation:popIn 0.3s ease-out,fadeAway 0.5s ease-in 1.2s forwards}
      `}</style>

      {sticker && (
        <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
          <div className="text-9xl sticker">{sticker}</div>
        </div>
      )}

      {printLesson && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{background:"rgba(0,0,0,0.6)"}}>
          <div className={`${card} ${tx} rounded-3xl shadow-2xl p-6 w-full max-w-sm`}>
            <h2 className="text-xl font-extrabold mb-1">🖨️ Print Flashcards</h2>
            <p className={`text-sm mb-4 ${su}`}>Print the {printLesson.topic} cards!</p>
            <div className="grid grid-cols-2 gap-2 mb-4">
              {printLesson.words.map(w => (
                <div key={w.fr} className="border-2 border-dashed border-gray-300 rounded-xl p-3 flex flex-col items-center text-center">
                  <span className="text-4xl">{w.e}</span>
                  <span className="font-extrabold text-purple-700 text-sm mt-1">{w.fr}</span>
                  <span className="text-gray-500 text-xs">{w.en}</span>
                  <span className="text-xs text-blue-500 mt-1">🗣 {w.sound}</span>
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              <button onClick={() => setPrintLesson(null)} className={`flex-1 ${dark?"bg-gray-700":"bg-gray-100"} py-3 rounded-2xl font-bold`}>Cancel</button>
              <button onClick={() => window.print()} className="flex-1 bg-purple-500 text-white py-3 rounded-2xl font-bold">🖨️ Print!</button>
            </div>
          </div>
        </div>
      )}

      {screen === "splash" && (
        <div className="fixed inset-0 bg-gradient-to-br from-purple-600 to-indigo-700 flex flex-col items-center justify-center z-50">
          <div className="splash flex flex-col items-center gap-4">
            <div className="float text-8xl">🇫🇷</div>
            <div className="text-center">
              <h1 className="text-4xl font-extrabold text-white">Le Petit Yaourt</h1>
              <p className="text-purple-200 mt-2">Learn French • Pour les tout-petits</p>
            </div>
          </div>
          <p className="absolute bottom-8 text-purple-300 text-xs">© Le Petit Yaourt</p>
        </div>
      )}

      {screen !== "splash" && (
        <div className={`w-full max-w-md sticky top-0 z-10 ${dark?"bg-gray-900 border-gray-700":"bg-white bg-opacity-90 border-purple-100"} border-b px-4 py-3 flex items-center justify-between shadow-sm`}>
          <div className="flex items-center gap-2">
            {screen !== "home"
              ? <button onClick={() => { setScreen("home"); setLesson(null); }} className="text-xl bg-purple-100 rounded-full w-9 h-9 flex items-center justify-center">⬅️</button>
              : <div className="float text-2xl">🇫🇷</div>
            }
            <div>
              <h1 className={`text-base font-extrabold ${dark?"text-white":"text-purple-700"}`}>
                {screen==="home"
                  ? "Le Petit Yaourt"
                  : screen==="lesson"
                    ? (lesson ? `${lesson.emoji} ${lesson.topicFr}` : "📖 Lesson")
                    : screen==="quiz"
                      ? "🎯 Quiz!"
                      : screen==="about"
                        ? "ℹ️ About"
                        : "👨‍👩‍👧 Parents"}
              </h1>
              {screen==="home" && <p className={`text-xs ${su}`}>{totalWords} words • {LESSONS.length} topics</p>}
            </div>
          </div>
          <div className="flex items-center gap-2">
            {lesson && (screen==="lesson" || screen==="quiz") && (
              <button onClick={() => setPrintLesson(lesson)} className="text-lg bg-orange-100 rounded-full w-9 h-9 flex items-center justify-center">🖨️</button>
            )}
            <button onClick={() => setDark(d=>!d)} className={`text-lg ${dark?"bg-gray-700":"bg-indigo-100"} rounded-full w-9 h-9 flex items-center justify-center`}>{dark?"☀️":"🌙"}</button>
            <div className="bg-yellow-400 rounded-full px-3 py-1 font-extrabold text-white text-sm">⭐{stars}</div>
          </div>
        </div>
      )}

      <div className="w-full max-w-md px-4 mt-4">

        {screen === "home" && (
          <div className="slide flex flex-col gap-3">
            <div className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-3xl p-5 text-white shadow-lg">
              <p className="text-purple-200 text-sm mb-1">Bonjour, petit ami! 👋</p>
              <h2 className="text-2xl font-extrabold">Ready to learn French?</h2>
              <div className="mt-3 grid grid-cols-3 gap-2 text-center">
                {[{v:Object.keys(done).length,l:"Topics done"},{v:stars,l:"Stars"},{v:totalWords,l:"Words"}].map(({v,l}) => (
                  <div key={l} className="bg-white bg-opacity-20 rounded-2xl py-2">
                    <p className="text-xl font-extrabold">{v}</p>
                    <p className="text-xs text-purple-100">{l}</p>
                  </div>
                ))}
              </div>
            </div>

            {LESSONS.map(l => (
              <div key={l.id} className={`bg-gradient-to-r ${l.grad} rounded-3xl shadow-md p-4 text-white`}>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-4xl bg-white bg-opacity-20 rounded-2xl w-14 h-14 flex items-center justify-center">{l.emoji}</span>
                    <div>
                      <p className="font-extrabold text-base">{l.topic}</p>
                      <p className="text-xs opacity-80">{l.topicFr} • {l.words.length} words</p>
                    </div>
                  </div>
                  {done[l.id] && <span className="text-2xl">✅</span>}
                </div>
                <div className="flex gap-2">
                  <button onClick={() => { setLesson(l); setIdx(0); setFlipped(false); setScreen("lesson"); }} className="flex-1 bg-white bg-opacity-25 font-bold py-2 rounded-2xl text-sm">📖 Learn</button>
                  <button onClick={() => { setLesson(l); startQuiz(l); setScreen("quiz"); }} className="flex-1 bg-white bg-opacity-25 font-bold py-2 rounded-2xl text-sm">🎯 Quiz</button>
                  <button onClick={() => setPrintLesson(l)} className="bg-white bg-opacity-25 font-bold py-2 px-3 rounded-2xl text-sm">🖨️</button>
                </div>
              </div>
            ))}

            <div className="flex gap-2">
              <button onClick={() => setScreen("parents")} className={`flex-1 ${card} ${tx} rounded-2xl py-3 font-bold text-sm shadow`}>👨‍👩‍👧 For Parents</button>
              <button onClick={() => setScreen("about")} className={`flex-1 ${card} ${tx} rounded-2xl py-3 font-bold text-sm shadow`}>ℹ️ About</button>
            </div>
            <p className="text-center text-xs text-gray-400">🦘 Made for little learners in Sydney • © Le Petit Yaourt</p>
          </div>
        )}

        {screen === "lesson" && lesson && (() => {
          const w = lesson.words[idx];
          const pct = ((idx+1)/lesson.words.length)*100;
          return (
            <div className="slide flex flex-col items-center gap-4">
              <div className="w-full flex items-center gap-2">
                <span className={`text-xs ${su} w-16`}>{idx+1} of {lesson.words.length}</span>
                <div className="flex-1 bg-gray-200 rounded-full h-3">
                  <div className="bg-purple-500 h-3 rounded-full transition-all duration-500" style={{width:`${pct}%`}} />
                </div>
              </div>
              <div onClick={() => { setFlipped(f=>!f); speak(w.fr); }} className={`w-full bg-gradient-to-br ${lesson.grad} rounded-3xl shadow-xl p-8 flex flex-col items-center gap-4 cursor-pointer`}>
                <div className="float text-8xl">{w.e}</div>
                <div className="text-5xl font-extrabold text-white drop-shadow">{w.fr}</div>
                {flipped ? (
                  <div className="slide flex flex-col items-center gap-2 w-full">
                    <div className="text-2xl text-white font-bold">{w.en}</div>
                    <div className="bg-white bg-opacity-25 rounded-2xl px-5 py-2 text-white text-sm">
                      🗣 Sounds like: <strong>{w.sound}</strong>
                    </div>
                  </div>
                ) : <p className="text-white text-opacity-70 text-sm">👆 Tap to see meaning!</p>}
              </div>
              <button onClick={() => speak(w.fr)} className="w-full bg-orange-400 text-white font-extrabold py-4 rounded-2xl text-xl shadow-lg">🔊 Say it in French!</button>
              <div className="flex gap-3 w-full">
                <button onClick={() => { if(idx>0){setIdx(i=>i-1);setFlipped(false);} }} disabled={idx===0}
                  className={`flex-1 ${dark?"bg-gray-700 text-white":"bg-gray-200 text-gray-700"} disabled:opacity-40 font-bold py-3 rounded-2xl text-lg`}>⬅️ Back</button>
                <button onClick={() => {
                  if (idx < lesson.words.length-1) { setIdx(i=>i+1); setFlipped(false); }
                  else { setStars(s=>s+2); setDone(d=>({...d,[lesson.id]:true})); celebrate(); showSticker(); setTimeout(()=>{setScreen("home");setLesson(null);},2000); }
                }} className="flex-1 bg-purple-500 text-white font-bold py-3 rounded-2xl text-lg shadow">
                  {idx===lesson.words.length-1?"🎉 Finish!":"Next ➡️"}
                </button>
              </div>
            </div>
          );
        })()}

        {screen === "quiz" && lesson && quizWord && (
          <div className="slide flex flex-col items-center gap-5">
            <p className={`text-base font-semibold ${su}`}>Which picture matches...</p>
            <div className={`w-full bg-gradient-to-r ${lesson.grad} rounded-3xl shadow-xl px-8 py-6 flex flex-col items-center`}>
              <p className="text-5xl font-extrabold text-white">{quizWord.fr}</p>
              <p className="text-white text-opacity-70 text-sm mt-1">Pick the right one! 👇</p>
            </div>
            <div className="grid grid-cols-2 gap-3 w-full">
              {choices.map((c,i) => {
                let cls = `${card} border-2 border-transparent`;
                if (quizResult==="correct" && c.fr===quizWord.fr) cls = "bg-green-100 border-2 border-green-400";
                return (
                  <button key={i} onClick={() => {
                    if (quizResult) return;
                    if (c.fr === quizWord.fr) {
                      setQuizResult("correct"); setStars(s=>s+1); speak(quizWord.fr); showSticker();
                      setTimeout(() => nextQuiz(lesson), 1800);
                    } else {
                      setQuizResult("wrong");
                      setTimeout(() => setQuizResult(null), 1000);
                    }
                  }} className={`${cls} rounded-2xl shadow-md p-5 flex flex-col items-center gap-2`}>
                    <span className="text-5xl">{c.e}</span>
                    <span className={`text-sm font-semibold ${tx}`}>{c.en}</span>
                  </button>
                );
              })}
            </div>
            {quizResult==="correct" && <div className="text-green-600 font-extrabold text-2xl animate-bounce">✅ Super bien! 🎉</div>}
            {quizResult==="wrong" && <div className="text-red-400 font-bold text-xl">Essaie encore! 💪</div>}
            <button onClick={() => speak(quizWord.fr)} className="w-full bg-orange-400 text-white font-extrabold py-3 rounded-2xl text-lg shadow">🔊 Hear the word!</button>
          </div>
        )}

        {screen === "parents" && (
          <div className="slide flex flex-col gap-4">
            <div className="bg-gradient-to-r from-teal-400 to-teal-600 rounded-3xl p-5 text-white shadow-lg">
              <div className="text-4xl mb-2">👨‍👩‍👧</div>
              <h2 className="text-2xl font-extrabold">Parent Corner</h2>
              <p className="text-teal-100 text-sm mt-1">Tips for teaching French to your toddler</p>
            </div>
            {[
              {icon:"🕐",title:"Best time to learn",tip:"10-15 minutes a day is perfect for toddlers. Try after breakfast or before bathtime."},
              {icon:"🔊",title:"Always say it out loud",tip:"Tap the sound button and repeat the word together! Hearing and repeating is how toddlers learn best."},
              {icon:"🎯",title:"Start Quiz after 3 lessons",tip:"Learn a few topics first, then use Quiz mode to make it a fun game."},
              {icon:"🖨️",title:"Print and play offline",tip:"Print flashcards and cut them out. Play find the card around the house!"},
              {icon:"🌙",title:"Bedtime mode",tip:"Turn on dark mode for a calm session before sleep."},
              {icon:"🏆",title:"Celebrate the stars",tip:"Every star earned is a big deal! Count them together and cheer."},
              {icon:"🔁",title:"Repetition is key",tip:"Repeat the same topic several days in a row. Children need to hear words many times to remember them."},
              {icon:"🇫🇷",title:"Make it part of daily life",tip:"Point to a carrot at dinner and say la carotte! Real life practice is the best."},
            ].map(({icon,title,tip}) => (
              <div key={title} className={`${card} rounded-2xl shadow p-4 flex gap-3`}>
                <span className="text-3xl">{icon}</span>
                <div>
                  <p className={`font-extrabold text-sm ${tx}`}>{title}</p>
                  <p className={`text-sm mt-1 ${su}`}>{tip}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {screen === "about" && (
          <div className="slide flex flex-col gap-4">
            <div className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-3xl p-6 text-white text-center shadow-lg">
              <div className="float text-6xl mb-3">🇫🇷</div>
              <h2 className="text-2xl font-extrabold">Le Petit Yaourt</h2>
              <p className="text-purple-200 text-sm mt-1">Premium French for Toddlers</p>
            </div>
            {[
              {icon:"✨",title:"What is Le Petit Yaourt?",body:"A beautifully designed French learning app for toddlers aged 1-4. No ads, no subscriptions, just pure joyful learning."},
              {icon:"📚",title:`${totalWords} Words across ${LESSONS.length} Topics`,body:"Numbers, animals, fruits, vegetables, meals, table items, vehicles, body parts, clothes, colors and greetings!"},
              {icon:"🔊",title:"Real French Pronunciation",body:"Every word is spoken aloud in real French so your child hears exactly how it is spoken in France."},
              {icon:"🎯",title:"Learn and Quiz Mode",body:"Flashcard lessons build vocabulary gently. Quiz mode turns learning into a game with instant celebrations."},
              {icon:"🖨️",title:"Printable Flashcards",body:"Every topic has printable flashcards you can cut out and use anywhere!"},
              {icon:"🌙",title:"Day and Night Mode",body:"Soft dark mode for relaxed evening sessions. Perfect for winding down before bedtime."},
            ].map(({icon,title,body}) => (
              <div key={title} className={`${card} rounded-2xl shadow p-4 flex gap-3`}>
                <span className="text-3xl">{icon}</span>
                <div>
                  <p className={`font-extrabold text-sm ${tx}`}>{title}</p>
                  <p className={`text-sm mt-1 ${su}`}>{body}</p>
                </div>
              </div>
            ))}
            <div className={`${card} rounded-2xl shadow p-4 text-center`}>
              <p className={`font-extrabold text-sm ${tx}`}>© Le Petit Yaourt</p>
              <p className={`text-xs mt-1 ${su}`}>Made with love for bilingual families around the world 🌍</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
