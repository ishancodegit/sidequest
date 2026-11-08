var __toBinary = /* @__PURE__ */ (() => {
  var table = new Uint8Array(128);
  for (var i = 0; i < 64; i++) table[i < 26 ? i + 65 : i < 52 ? i + 71 : i < 62 ? i - 4 : i * 4 - 205] = i;
  return (base64) => {
    var n = base64.length, bytes = new Uint8Array((n - (base64[n - 1] == "=") - (base64[n - 2] == "=")) * 3 / 4 | 0);
    for (var i2 = 0, j = 0; i2 < n; ) {
      var c0 = table[base64.charCodeAt(i2++)], c1 = table[base64.charCodeAt(i2++)];
      var c2 = table[base64.charCodeAt(i2++)], c3 = table[base64.charCodeAt(i2++)];
      bytes[j++] = c0 << 2 | c1 >> 4;
      bytes[j++] = c1 << 4 | c2 >> 2;
      bytes[j++] = c2 << 6 | c3;
    }
    return bytes;
  };
})();

// src/landing.html
var landing_default = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<title>Sidequest Lift: level up in real life</title>
<meta name="description" content="Turn your workouts into an RPG. Daily quests, loot chests, weekly bosses and an AI coach that counts your reps out loud.">
<meta name="theme-color" content="#03050b">
<meta property="og:title" content="Sidequest Lift: level up in real life">
<meta property="og:description" content="Daily quests, loot chests, weekly bosses and an AI rep counter. Your workouts, turned into a game.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Caveat:wght@600&family=Chakra+Petch:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>
:root{
  --bg:#03050b;--ink:#e8f5ff;--muted:#7d93ad;--glow:#5ad8ff;--gold:#ffc94a;--red:#ff4d6d;--green:#4fe39a;--violet:#a77bff;
  --line:rgba(90,216,255,.22);color-scheme:dark;
}
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth;-webkit-text-size-adjust:100%;overflow-x:clip}
body{background:var(--bg);color:var(--ink);font-family:'Chakra Petch',system-ui,sans-serif;font-size:17px;line-height:1.55;-webkit-font-smoothing:antialiased;overflow-x:clip}
a{color:inherit}
button{font:inherit;color:inherit;border:0;background:none;cursor:pointer}
:focus-visible{outline:2px solid var(--glow);outline-offset:3px}
body::after{content:"";position:fixed;inset:0;pointer-events:none;z-index:100;background:repeating-linear-gradient(0deg,rgba(255,255,255,.02) 0 1px,transparent 1px 3px)}
.grid-bg{position:fixed;inset:0;z-index:-2;background:linear-gradient(rgba(90,216,255,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(90,216,255,.035) 1px,transparent 1px);background-size:44px 44px;mask-image:radial-gradient(ellipse at 50% 20%,#000 30%,transparent 80%)}
.aurora{position:fixed;inset:-20%;z-index:-3;pointer-events:none}
.aurora i{position:absolute;border-radius:50%;filter:blur(90px);will-change:transform}
.aurora i:nth-child(1){width:60vmax;height:60vmax;background:#2f6bff;opacity:.22;left:20%;top:-25%;animation:d1 24s ease-in-out infinite alternate}
.aurora i:nth-child(2){width:45vmax;height:45vmax;background:#a77bff;opacity:.16;right:-10%;top:30%;animation:d2 30s ease-in-out infinite alternate}
.aurora i:nth-child(3){width:40vmax;height:40vmax;background:#5ad8ff;opacity:.10;left:-10%;top:60%;animation:d1 36s ease-in-out infinite alternate-reverse}
@keyframes d1{to{transform:translate(10vmax,12vmax) scale(1.15)}}
@keyframes d2{to{transform:translate(-12vmax,-10vmax) scale(.9)}}
.wrap{max-width:1120px;margin:0 auto;padding:0 20px}

/* nav */
nav{position:sticky;top:0;z-index:50;backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);background:rgba(3,5,11,.6);border-bottom:1px solid rgba(90,216,255,.1)}
nav .wrap{display:flex;align-items:center;justify-content:space-between;height:62px}
.logo{display:flex;align-items:center;gap:10px;font-weight:700;letter-spacing:.16em;font-size:15px;text-decoration:none}
.logo i{width:10px;height:10px;background:var(--glow);box-shadow:0 0 14px var(--glow);transform:rotate(45deg)}
.cta{display:inline-flex;align-items:center;justify-content:center;gap:10px;background:var(--gold);color:#140c00;font-weight:700;letter-spacing:.08em;padding:14px 26px;text-decoration:none;box-shadow:0 0 30px rgba(255,201,74,.35),inset 0 -3px 0 rgba(0,0,0,.18);transition:transform .15s,box-shadow .15s;clip-path:polygon(10px 0,100% 0,100% calc(100% - 10px),calc(100% - 10px) 100%,0 100%,0 10px)}
.cta:hover{transform:translateY(-2px);box-shadow:0 0 44px rgba(255,201,74,.55),inset 0 -3px 0 rgba(0,0,0,.18)}
.cta.sm{padding:9px 16px;font-size:14px}
.ghost{display:inline-flex;align-items:center;gap:8px;color:var(--glow);font-weight:700;letter-spacing:.06em;text-decoration:none;padding:14px 6px;text-shadow:0 0 12px rgba(90,216,255,.5)}

/* hero */
.hero{position:relative;padding:56px 0 40px}
.hero .wrap{display:grid;gap:40px;align-items:center}
@media(min-width:940px){.hero .wrap{grid-template-columns:1.05fr .95fr}.hero{padding:90px 0 70px}}
.sysline{display:inline-flex;align-items:center;gap:10px;border:1px solid var(--line);background:rgba(6,16,32,.6);padding:6px 14px;font-size:13px;font-weight:600;color:var(--glow);margin-bottom:22px}
.sysline b{width:7px;height:7px;background:var(--green);border-radius:50%;box-shadow:0 0 10px var(--green);animation:blink 1.4s infinite}
@keyframes blink{50%{opacity:.25}}
h1{font-size:clamp(42px,7.4vw,78px);line-height:.98;font-weight:700;letter-spacing:-.015em}
h1 .lv{display:block;background:linear-gradient(90deg,#fff 0%,var(--glow) 45%,var(--violet) 100%);-webkit-background-clip:text;background-clip:text;color:transparent;filter:drop-shadow(0 0 24px rgba(90,216,255,.35))}
.lead{font-size:clamp(17px,2.1vw,20px);color:#b8c9dc;max-width:34em;margin-top:22px}
.ctas{display:flex;flex-wrap:wrap;gap:12px 22px;align-items:center;margin-top:30px}
.fine{font-size:13.5px;color:var(--muted);margin-top:14px}
.stage{position:relative;display:grid;place-items:center;min-height:620px}
#embers{position:absolute;inset:-40px;width:calc(100% + 80px);height:calc(100% + 80px);pointer-events:none}
.toast{position:absolute;z-index:3;background:linear-gradient(180deg,rgba(10,30,62,.92),rgba(3,10,22,.95));border:1px solid var(--line);padding:10px 14px;font-size:13px;box-shadow:0 0 30px rgba(47,140,255,.2);white-space:nowrap;animation:float 6s ease-in-out infinite}
.toast small{display:block;font-size:10px;letter-spacing:.24em;font-weight:700;color:var(--glow)}
.toast b{font-size:16px}
.toast.g{border-color:rgba(255,201,74,.5)}.toast.g small,.toast.g b em{color:var(--gold)}
.toast.r{border-color:rgba(255,77,109,.5)}.toast.r small{color:var(--red)}
.toast b em{font-style:normal;color:var(--glow)}
.t1{left:0;top:16%}.t2{right:0;top:40%;animation-delay:-2s}.t3{left:4%;bottom:14%;animation-delay:-4s}
@media(max-width:520px){.t1{left:-6px}.t2{right:-6px}.t3{left:-2px}}
@keyframes float{50%{transform:translateY(-12px)}}

/* phone */
.phone{--pc:var(--glow);width:270px;aspect-ratio:9/19.5;border-radius:44px;padding:10px;position:relative;z-index:2;
  background:linear-gradient(145deg,#2c3548,#0a0e17 60%);box-shadow:0 0 0 1px rgba(255,255,255,.09),0 50px 90px rgba(0,0,0,.65),0 0 90px color-mix(in srgb,var(--pc) 30%,transparent)}
.phone.big{width:300px}
.scr{position:relative;width:100%;height:100%;border-radius:35px;overflow:hidden;background:#03050b;font-size:12px}
.scr::before{content:"";position:absolute;top:9px;left:50%;transform:translateX(-50%);width:84px;height:24px;background:#000;border-radius:14px;z-index:9}
.scr .bar{position:absolute;top:0;left:0;right:0;height:46px;display:flex;justify-content:space-between;align-items:center;padding:6px 22px 0;font-size:11px;font-weight:700;z-index:8}

/* status screen */
.st-scr{background:radial-gradient(circle at 50% 30%,rgba(167,123,255,.28),transparent 60%),#03050b}
.mini-top{position:absolute;top:50px;left:16px;right:16px;display:flex;justify-content:space-between;align-items:center;font-size:10px;font-weight:700;letter-spacing:.14em}
.mini-top span:last-child{color:var(--gold);border:1px solid var(--line);padding:2px 8px}
.circ{position:absolute;top:84px;left:50%;transform:translateX(-50%);width:220px;height:220px}
.circ svg{position:absolute;inset:0;width:100%;height:100%;overflow:visible}
.r{fill:none;stroke:var(--a,#a77bff);filter:drop-shadow(0 0 5px var(--a,#a77bff))}
.sp{animation:spin 40s linear infinite;transform-origin:50% 50%}
.sp.rv{animation-duration:24s;animation-direction:reverse}.sp.sl{animation-duration:70s}
@keyframes spin{to{transform:rotate(360deg)}}
.circ .core{position:absolute;inset:0;display:grid;place-items:center;align-content:center}
.circ small{font-size:9px;letter-spacing:.4em;font-weight:700;color:#a77bff;margin-right:-.4em}
.circ b{font-size:84px;line-height:.9;font-weight:700;text-shadow:0 0 26px #a77bff,0 0 4px #fff}
.circ em{font-style:normal;font-size:10px;color:var(--muted)}
.idr{position:absolute;top:318px;left:0;right:0;display:flex;justify-content:center;gap:12px;align-items:center}
.hx{width:44px;height:50px;clip-path:polygon(50% 0,100% 25%,100% 75%,50% 100%,0 75%,0 25%);background:#a77bff;display:grid;place-items:center;position:relative}
.hx::after{content:"";position:absolute;inset:2px;clip-path:inherit;background:#0b1630}
.hx span{position:relative;z-index:1;font-size:24px;font-weight:700;color:#a77bff;text-shadow:0 0 10px #a77bff}
.idr .nm b{display:block;font-size:17px}.idr .nm span{font-size:10px;color:var(--gold);font-weight:700;letter-spacing:.08em}
.mstats{position:absolute;left:14px;right:14px;top:392px;border:1px solid var(--line);background:rgba(10,24,48,.6);padding:12px;display:grid;gap:7px}
.ms{display:grid;grid-template-columns:30px 1fr 22px;gap:8px;align-items:center;font-size:10px;font-weight:700;color:var(--muted)}
.ms i{height:5px;background:rgba(90,216,255,.1);transform:skewX(-20deg);overflow:hidden;display:block}
.ms i s{display:block;height:100%;text-decoration:none}
.ms b{color:var(--ink);font-size:12px;text-align:right}
.mnav{position:absolute;bottom:0;left:0;right:0;height:52px;border-top:1px solid var(--line);display:grid;grid-template-columns:repeat(5,1fr);align-items:center;justify-items:center;background:rgba(3,5,11,.95)}
.mnav i{width:16px;height:16px;border:2px solid var(--muted);border-radius:50%}
.mnav i.on{border-color:var(--glow);box-shadow:0 0 8px var(--glow)}

/* sections */
.marq{border-block:1px solid var(--line);background:rgba(6,16,32,.5);overflow:hidden;padding:14px 0;margin:30px 0 20px}
.marq div{display:flex;gap:40px;width:max-content;animation:marq 32s linear infinite;font-weight:700;letter-spacing:.18em;font-size:14px;color:var(--glow);text-shadow:0 0 10px rgba(90,216,255,.4)}
.marq span::after{content:"\u25C6";margin-left:40px;color:var(--gold)}
@keyframes marq{to{transform:translateX(-50%)}}
.feat{padding:80px 0}
.feat .wrap{display:grid;gap:44px;align-items:center}
@media(min-width:900px){.feat .wrap{grid-template-columns:1fr 1fr;gap:80px}.feat.flip .copy{order:2}}
.feat .vis{display:grid;place-items:center;position:relative}
.tag{display:inline-block;font-size:14px;font-weight:600;color:var(--c,var(--glow));margin-bottom:12px}
h2{font-size:clamp(34px,5vw,54px);line-height:1.02;font-weight:700;letter-spacing:-.01em}
.copy p{color:#b8c9dc;margin-top:18px;font-size:18px;max-width:30em}
.bul{list-style:none;margin-top:22px;display:grid;gap:10px}
.bul li{display:flex;gap:12px;align-items:baseline;font-weight:600}
.bul li::before{content:"";width:8px;height:8px;flex:none;background:var(--c,var(--glow));transform:rotate(45deg) translateY(-2px);box-shadow:0 0 8px var(--c,var(--glow))}

/* rep screen */
.rep-scr{background:linear-gradient(180deg,#1a2233 0%,#121826 55%,#0c1019 56%,#0a0d14 100%)}
.rep-scr .vig{position:absolute;inset:0;background:radial-gradient(ellipse at 50% 50%,transparent 40%,rgba(0,0,0,.6));z-index:2}
.rep-scr .hud{position:absolute;inset:60px 10px 90px;z-index:3;background:
  linear-gradient(var(--glow),var(--glow)) top left/22px 2px no-repeat,linear-gradient(var(--glow),var(--glow)) top left/2px 22px no-repeat,
  linear-gradient(var(--glow),var(--glow)) top right/22px 2px no-repeat,linear-gradient(var(--glow),var(--glow)) top right/2px 22px no-repeat,
  linear-gradient(var(--glow),var(--glow)) bottom left/22px 2px no-repeat,linear-gradient(var(--glow),var(--glow)) bottom left/2px 22px no-repeat,
  linear-gradient(var(--glow),var(--glow)) bottom right/22px 2px no-repeat,linear-gradient(var(--glow),var(--glow)) bottom right/2px 22px no-repeat;filter:drop-shadow(0 0 5px var(--glow))}
.rep-scr svg.fig{position:absolute;left:0;right:0;bottom:120px;width:100%;z-index:1}
.rep-n{position:absolute;top:62px;left:18px;z-index:4}
.rep-n b{display:block;font-size:86px;line-height:.9;font-weight:700;text-shadow:0 0 26px var(--glow),0 0 6px var(--glow);transform-origin:left center}
.rep-n b.pop{animation:pop .35s}
@keyframes pop{40%{transform:scale(1.25);color:var(--gold);text-shadow:0 0 30px var(--gold)}}
.rep-n span{font-size:10px;letter-spacing:.32em;font-weight:700;color:var(--glow)}
.rep-n em{display:block;font-style:normal;font-size:10px;color:#cfd9e6;margin-top:2px}
.perf{position:absolute;top:44%;left:0;right:0;text-align:center;z-index:4;font-size:34px;font-weight:700;color:var(--gold);text-shadow:0 0 20px var(--gold);opacity:0}
.perf.go{animation:fl .9s ease-out}
@keyframes fl{0%{opacity:0;transform:scale(1.5)}20%{opacity:1;transform:none}70%{opacity:1}100%{opacity:0;transform:translateY(-20px)}}
.rep-st{position:absolute;right:16px;top:64px;z-index:4;text-align:right;font-size:8px;letter-spacing:.18em;font-weight:700;color:#9fb0c4;display:grid;gap:6px}
.rep-st b{display:block;font-size:16px;letter-spacing:0;color:#fff}
.rep-bot{position:absolute;bottom:0;left:0;right:0;z-index:4;padding:12px 12px 22px;display:flex;gap:6px;background:linear-gradient(transparent,rgba(0,0,0,.9) 40%)}
.rep-bot span{flex:1;background:var(--gold);color:#140c00;font-weight:700;text-align:center;padding:10px 0;font-size:11px;letter-spacing:.1em}
.rep-bot i{width:34px;border:1px solid var(--line)}
.voice{position:absolute;right:-10px;top:30%;z-index:5;background:rgba(10,30,62,.95);border:1px solid var(--line);padding:8px 12px;font-weight:700;font-size:14px;box-shadow:0 0 24px rgba(90,216,255,.25)}
.voice::before{content:"";position:absolute;left:-7px;top:50%;width:12px;height:12px;background:inherit;border-left:1px solid var(--line);border-bottom:1px solid var(--line);transform:translateY(-50%) rotate(45deg)}

/* penalty */
.pen-scr{background:radial-gradient(circle at 50% 40%,#4a0614,#060002 75%);display:grid;place-items:center;text-align:center;padding:30px 18px}
.pen-scr h4{font-size:26px;color:var(--red);text-shadow:0 0 18px var(--red);letter-spacing:.08em;line-height:1.1}
.siren{height:4px;width:100%;margin:14px 0;background:repeating-linear-gradient(90deg,var(--red) 0 16px,transparent 16px 32px);box-shadow:0 0 10px var(--red);animation:sir .6s linear infinite}
@keyframes sir{to{background-position:32px 0}}
.pen-scr p{font-size:12px;color:#ffb3c0}
.pen-scr .bp{font-size:30px;font-weight:700;color:var(--red);text-shadow:0 0 16px var(--red);margin-top:4px}
.pen-scr .btn{display:block;background:var(--red);color:#fff;font-weight:700;letter-spacing:.12em;padding:12px;margin-top:6px;font-size:12px;box-shadow:0 0 18px rgba(255,77,109,.5)}
.flash-red{position:absolute;inset:0;background:rgba(255,40,70,.18);animation:redp 1.2s ease-in-out infinite;pointer-events:none}
@keyframes redp{50%{opacity:0}}

/* loot */
.loot-scr{background:radial-gradient(circle at 50% 35%,rgba(255,201,74,.32),#03050b 65%);display:grid;place-items:center;align-content:center;text-align:center;padding:20px 16px;gap:10px}
.loot-scr .rar{font-weight:700;letter-spacing:.34em;color:var(--gold);text-shadow:0 0 14px var(--gold);font-size:12px}
.loot-scr svg{width:150px;filter:drop-shadow(0 0 26px var(--gold));animation:float 3s ease-in-out infinite}
.loot-scr .it{border:1px solid var(--gold);padding:8px;font-weight:700;width:200px;background:rgba(10,20,40,.8);box-shadow:0 0 12px rgba(255,201,74,.25);font-size:13px}
.spark{position:absolute;width:5px;height:5px;border-radius:50%;background:#fff;box-shadow:0 0 10px var(--gold),0 0 20px var(--gold);animation:spk 2.4s ease-out infinite}
@keyframes spk{0%{transform:translate(0,0);opacity:1}100%{transform:translate(var(--x),var(--y));opacity:0}}

/* raid */
.raid-scr{background:radial-gradient(circle at 50% 30%,rgba(255,77,109,.25),#03050b 60%);text-align:center;padding:64px 18px 20px}
.raid-scr .tt{font-size:10px;letter-spacing:.3em;font-weight:700;color:var(--red)}
.raid-scr svg{width:150px;margin:14px auto 4px;display:block;filter:drop-shadow(0 0 20px rgba(255,77,109,.6));animation:hurt 2.2s infinite}
@keyframes hurt{0%,70%,100%{transform:none;filter:drop-shadow(0 0 20px rgba(255,77,109,.6))}74%{transform:translateX(-8px) rotate(-4deg);filter:drop-shadow(0 0 20px #fff) brightness(2.5)}80%{transform:translateX(6px) rotate(3deg)}}
.raid-scr h4{font-size:24px;color:#ffd9df;text-shadow:0 0 14px rgba(255,77,109,.6)}
.raid-scr p{font-size:11px;color:var(--muted);margin-top:4px}
.hpb{display:grid;grid-template-columns:repeat(20,1fr);gap:2px;height:12px;margin-top:16px}
.hpb i{background:var(--red);transform:skewX(-18deg);box-shadow:0 0 6px rgba(255,77,109,.6)}
.hpb i.off{background:rgba(255,77,109,.14);box-shadow:none}
.dmgpop{position:absolute;left:66%;top:96px;font-weight:700;font-size:22px;color:#fff;text-shadow:0 0 10px var(--red);animation:dmg 2.2s infinite}
@keyframes dmg{0%,70%{opacity:0;transform:none}74%{opacity:1}100%{opacity:0;transform:translateY(-40px)}}

/* share */
.card-scr{background:#03050b;display:grid;place-items:center;align-content:center;text-align:center;gap:6px;padding:20px}
.card-scr .c{width:170px;height:170px;border-radius:50%;border:5px solid rgba(255,255,255,.07);position:relative;display:grid;place-items:center;align-content:center;box-shadow:0 0 40px rgba(255,201,74,.25)}
.card-scr .c::before{content:"";position:absolute;inset:-5px;border-radius:50%;border:5px solid transparent;border-top-color:var(--gold);border-right-color:var(--gold);filter:drop-shadow(0 0 10px var(--gold))}
.card-scr .c b{font-size:70px;line-height:.9;text-shadow:0 0 24px var(--gold)}
.card-scr .c small{font-size:9px;letter-spacing:.4em;color:var(--gold)}
.card-scr h5{font-size:20px;margin-top:10px}
.card-scr .ti{font-size:11px;color:var(--gold);letter-spacing:.14em;font-weight:700}
.card-scr .ss{display:flex;gap:12px;margin-top:10px;font-size:9px;font-weight:700;color:var(--muted)}
.card-scr .ss b{display:block;font-size:17px}

/* grid features */
.allf{padding:70px 0}
.cards{display:grid;gap:14px;margin-top:34px;grid-template-columns:repeat(auto-fill,minmax(240px,1fr))}
.fc{position:relative;border:1px solid var(--line);background:linear-gradient(180deg,rgba(12,30,58,.6),rgba(4,11,24,.75));padding:22px 20px}
.fc::before{content:"";position:absolute;inset:-1px;pointer-events:none;background:linear-gradient(var(--k),var(--k)) top left/12px 2px no-repeat,linear-gradient(var(--k),var(--k)) top left/2px 12px no-repeat,linear-gradient(var(--k),var(--k)) bottom right/12px 2px no-repeat,linear-gradient(var(--k),var(--k)) bottom right/2px 12px no-repeat}
.fc h3{font-size:19px;margin-top:12px}
.fc p{color:var(--muted);font-size:15px;margin-top:6px}
.fc .ic{width:38px;height:38px;color:var(--k);filter:drop-shadow(0 0 8px var(--k))}
.nums{display:grid;grid-template-columns:repeat(2,1fr);gap:1px;background:var(--line);border:1px solid var(--line);margin-top:60px}
@media(min-width:760px){.nums{grid-template-columns:repeat(4,1fr)}}
.nums div{background:#050b17;padding:26px 16px;text-align:center}
.nums b{display:block;font-size:46px;line-height:1;font-weight:700;color:var(--glow);text-shadow:0 0 20px rgba(90,216,255,.5)}
.nums span{font-size:14px;color:var(--muted)}

/* steps */
.steps{display:grid;gap:14px;margin-top:34px}
@media(min-width:820px){.steps{grid-template-columns:repeat(3,1fr)}}
.step{border-left:2px solid var(--glow);padding:6px 0 6px 20px}
.step b{font-size:13px;letter-spacing:.2em;color:var(--glow)}
.step h3{font-size:22px;margin-top:4px}
.step p{color:var(--muted);margin-top:6px;font-size:15.5px}

/* price */
.price{padding:90px 0}
.pcard{max-width:520px;margin:0 auto;position:relative;border:1px solid rgba(255,201,74,.5);background:linear-gradient(180deg,rgba(40,30,8,.5),rgba(4,8,18,.9));padding:44px 30px 34px;text-align:center;box-shadow:0 0 80px rgba(255,201,74,.16)}
.pcard .rar{font-size:12px;letter-spacing:.34em;font-weight:700;color:var(--gold);text-shadow:0 0 12px var(--gold)}
.pcard .amt{font-size:84px;font-weight:700;line-height:1;margin-top:12px;text-shadow:0 0 30px rgba(255,201,74,.5)}
.pcard .amt sup{font-size:34px;vertical-align:top;margin-right:4px}
.pcard .once{color:var(--muted)}
.pcard ul{list-style:none;text-align:left;margin:26px auto;display:grid;gap:10px;max-width:340px}
.pcard li{display:flex;gap:12px;align-items:baseline;font-weight:600}
.pcard li::before{content:"\u2713";color:var(--gold);font-weight:700;text-shadow:0 0 8px var(--gold)}
.pcard .cta{width:100%;padding:18px;font-size:18px}

/* faq */
.faq{padding:40px 0 90px;max-width:760px;margin:0 auto}
.faq details{border-bottom:1px solid var(--line);padding:18px 0}
.faq summary{cursor:pointer;font-weight:700;font-size:18px;list-style:none;display:flex;justify-content:space-between;gap:20px}
.faq summary::-webkit-details-marker{display:none}
.faq summary::after{content:"+";color:var(--glow);font-size:24px;line-height:1}
.faq details[open] summary::after{content:"\u2212"}
.faq p{color:#b8c9dc;margin-top:10px}
.end{text-align:center;padding:80px 0 100px;border-top:1px solid var(--line);background:radial-gradient(ellipse at 50% 0%,rgba(90,216,255,.12),transparent 60%)}
.end h2{max-width:14em;margin:0 auto}
footer{text-align:center;color:var(--muted);font-size:13px;padding:30px 0 40px}
.center{text-align:center}
.center p.sub{color:var(--muted);margin-top:12px;font-size:18px}
/* maker note */
.note{max-width:640px;margin:0 auto;padding:90px 20px 40px}
.note .paper{position:relative;background:#f4f1e8;color:#1d2230;padding:34px 30px 30px;transform:rotate(-.6deg);box-shadow:0 30px 60px rgba(0,0,0,.45),0 0 0 1px rgba(0,0,0,.05)}
.note .paper::before{content:"";position:absolute;top:-12px;left:50%;width:110px;height:26px;margin-left:-55px;background:rgba(255,201,74,.55);transform:rotate(2deg)}
.note h2{font-size:28px;color:#1d2230;letter-spacing:0}
.note p{margin-top:14px;font-size:17px;line-height:1.65;color:#2c3344}
.note .sig{margin-top:22px;font-family:'Caveat',cursive;font-size:34px;color:#2f5bd6;line-height:1}
.note .ps{margin-top:14px;font-size:14px;color:#5a6274}
/* checklist + changelog */
.two{display:grid;gap:40px;margin-top:30px}
@media(min-width:860px){.two{grid-template-columns:1.1fr .9fr;gap:60px}}
.chk{list-style:none;display:grid;gap:12px}
.chk li{padding-left:30px;position:relative;color:#c8d5e4}
.chk li b{color:var(--ink)}
.chk li::before{content:"";position:absolute;left:2px;top:7px;width:14px;height:8px;border-left:2.5px solid var(--green);border-bottom:2.5px solid var(--green);transform:rotate(-45deg)}
.log{border:1px solid var(--line);background:rgba(6,16,32,.55);padding:22px 22px 8px}
.log h3{font-size:18px}
.log .ent{padding:14px 0;border-bottom:1px dashed rgba(90,216,255,.16)}
.log .ent:last-child{border-bottom:0}
.log time{font-size:13px;color:var(--glow);font-weight:600}
.log p{color:#b8c9dc;font-size:15px;margin-top:2px}
.log .soon time{color:var(--muted)}
.log .soon p{color:var(--muted)}
@media (prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important}html{scroll-behavior:auto}}
</style>
</head>
<body>
<div class="aurora" aria-hidden="true"><i></i><i></i><i></i></div>
<div class="grid-bg" aria-hidden="true"></div>

<nav><div class="wrap">
  <a class="logo" href="#top"><i></i>SIDEQUEST LIFT</a>
  <span style="display:flex;gap:16px;align-items:center"><a href="/unlock" style="color:var(--muted);font-size:14px;font-weight:600;text-decoration:none">Unlock</a><a class="cta sm buy" href="#price">Get it</a></span>
</div></nav>

<header class="hero" id="top">
  <div class="wrap">
    <div>
      <div class="sysline"><b></b>[ SYSTEM ] You have been selected as a Player</div>
      <h1>Your workouts are now<span class="lv">an RPG.</span></h1>
      <p class="lead">Every rep gives you XP. Clear your daily quests before midnight, crack open loot chests, take down a new boss every week, and let your phone camera count your push-ups out loud.</p>
      <div class="ctas">
        <a class="cta buy" href="#price">START LEVELING UP</a>
        <a class="ghost" href="#ai">See the AI rep counter \u25B8</a>
      </div>
      <p class="fine">CA$14 once. No subscription, no account. Runs in your phone's browser.</p>
    </div>
    <div class="stage">
      <canvas id="embers" aria-hidden="true"></canvas>
      <div class="toast t1"><small>QUEST COMPLETE</small><b>100 Push-ups <em>+30 XP</em></b></div>
      <div class="toast g t2"><small>LOOT DROP</small><b><em>LEGENDARY</em> chest</b></div>
      <div class="toast r t3"><small>NEW RECORD</small><b>Bench 225 lb \xD7 5</b></div>
      <div class="phone big" style="--pc:#a77bff" role="img" aria-label="Sidequest Lift status screen showing level 27, B rank">
        <div class="scr st-scr">
          <div class="bar"><span>9:41</span><span>\u25CF\u25CF\u25CF</span></div>
          <div class="mini-top"><span>\u25C6 SIDEQUEST LIFT</span><span>\u{1F525} 41</span></div>
          <div class="circ" style="--a:#a77bff">
            <svg class="sp sl" viewBox="0 0 300 300"><circle class="r" cx="150" cy="150" r="146" stroke-width="1" stroke-dasharray="1 7"/></svg>
            <svg class="sp" viewBox="0 0 300 300"><circle class="r" cx="150" cy="150" r="138" stroke-width="2" stroke-dasharray="40 14 4 14" opacity=".8"/></svg>
            <svg class="sp rv" viewBox="0 0 300 300" style="opacity:.5"><polygon class="r" points="150,52 248,150 150,248 52,150" stroke-width="1.2"/><polygon class="r" points="81,81 219,81 219,219 81,219" stroke-width="1.2"/></svg>
            <svg viewBox="0 0 300 300"><circle cx="150" cy="150" r="122" fill="none" stroke="rgba(255,255,255,.07)" stroke-width="7"/><circle class="r" cx="150" cy="150" r="122" stroke-width="7" stroke-linecap="round" stroke-dasharray="766" stroke-dashoffset="230" transform="rotate(-90 150 150)"/></svg>
            <div class="core"><small>LEVEL</small><b>27</b><em>1,240 / 1,400 EXP</em></div>
          </div>
          <div class="idr"><div class="hx"><span>B</span></div><div class="nm"><b>Player</b><span>VOLUME MONSTER</span></div></div>
          <div class="mstats">
            <div class="ms">STR<i><s style="width:92%;background:#ff4d6d;box-shadow:0 0 8px #ff4d6d"></s></i><b>46</b></div>
            <div class="ms">AGI<i><s style="width:60%;background:#5ad8ff;box-shadow:0 0 8px #5ad8ff"></s></i><b>30</b></div>
            <div class="ms">VIT<i><s style="width:74%;background:#4fe39a;box-shadow:0 0 8px #4fe39a"></s></i><b>37</b></div>
            <div class="ms">END<i><s style="width:66%;background:#a77bff;box-shadow:0 0 8px #a77bff"></s></i><b>33</b></div>
            <div class="ms">WIL<i><s style="width:80%;background:#ffc94a;box-shadow:0 0 8px #ffc94a"></s></i><b>40</b></div>
          </div>
          <div class="mnav"><i class="on"></i><i></i><i></i><i></i><i></i></div>
        </div>
      </div>
    </div>
  </div>
</header>

<div class="marq" aria-hidden="true"><div>
  <span>AI REP COUNTER</span><span>DAILY QUESTS</span><span>LOOT CHESTS</span><span>WEEKLY BOSSES</span><span>PENALTY QUESTS</span><span>9 AURAS</span><span>STATUS CARDS</span><span>RANK E TO S</span>
  <span>AI REP COUNTER</span><span>DAILY QUESTS</span><span>LOOT CHESTS</span><span>WEEKLY BOSSES</span><span>PENALTY QUESTS</span><span>9 AURAS</span><span>STATUS CARDS</span><span>RANK E TO S</span>
</div></div>

<!-- AI -->
<section class="feat" id="ai">
  <div class="wrap">
    <div class="copy">
      <span class="tag">The rep counter</span>
      <h2>Prop up your phone. It counts every rep out loud.</h2>
      <p>The camera tracks your elbows, hips and knees and only counts a rep when you actually go the full range. Half reps get a "go deeper" instead.</p>
      <ul class="bul">
        <li>Works for 15 exercises, from push-ups and squats to deadlifts and pull-ups</li>
        <li>Full-range reps build a combo</li>
        <li>Everything runs on your phone. No video gets uploaded</li>
      </ul>
    </div>
    <div class="vis">
      <div class="phone" role="img" aria-label="AI rep counter tracking a push-up">
        <div class="scr rep-scr">
          <div class="bar"><span>9:41</span><span>\u25CF\u25CF\u25CF</span></div>
          <svg class="fig" viewBox="0 0 200 200" aria-hidden="true">
            <line x1="0" y1="168" x2="200" y2="168" stroke="rgba(255,255,255,.08)"/>
            <g stroke="#5ad8ff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" fill="none" style="filter:drop-shadow(0 0 6px #5ad8ff)">
              <polyline points="58,92 120,108 158,128 186,160">
                <animate attributeName="points" dur="1.6s" repeatCount="indefinite" calcMode="spline" keyTimes="0;.5;1" keySplines=".45 0 .55 1;.45 0 .55 1" values="58,92 120,108 158,128 186,160;58,134 122,136 158,146 186,160;58,92 120,108 158,128 186,160"/>
              </polyline>
            </g>
            <g stroke="#ffc94a" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" fill="none" style="filter:drop-shadow(0 0 8px #ffc94a)">
              <polyline points="58,92 58,130 58,166">
                <animate attributeName="points" dur="1.6s" repeatCount="indefinite" calcMode="spline" keyTimes="0;.5;1" keySplines=".45 0 .55 1;.45 0 .55 1" values="58,92 58,130 58,166;58,134 86,150 58,166;58,92 58,130 58,166"/>
              </polyline>
            </g>
            <circle r="9" fill="#5ad8ff" style="filter:drop-shadow(0 0 6px #5ad8ff)" cx="44" cy="84"><animate attributeName="cy" dur="1.6s" repeatCount="indefinite" calcMode="spline" keyTimes="0;.5;1" keySplines=".45 0 .55 1;.45 0 .55 1" values="84;126;84"/></circle>
            <circle r="5" fill="#ffc94a" cx="58" cy="130"><animate attributeName="cx" dur="1.6s" repeatCount="indefinite" calcMode="spline" keyTimes="0;.5;1" keySplines=".45 0 .55 1;.45 0 .55 1" values="58;86;58"/><animate attributeName="cy" dur="1.6s" repeatCount="indefinite" calcMode="spline" keyTimes="0;.5;1" keySplines=".45 0 .55 1;.45 0 .55 1" values="130;150;130"/></circle>
            <text x="66" y="126" fill="#ffc94a" font-size="11" font-weight="700" font-family="Chakra Petch,sans-serif" id="angTxt">172\xB0</text>
          </svg>
          <div class="vig"></div><div class="hud"></div>
          <div class="rep-n"><b id="repN">11</b><span>REPS</span><em>Push-ups</em></div>
          <div class="rep-st"><div>PACE<b>34</b></div><div>COMBO<b id="cmb">6</b></div></div>
          <div class="perf" id="perf">PERFECT</div>
          <div class="rep-bot"><i></i><i></i><span id="logT">LOG 11 REPS</span></div>
        </div>
      </div>
      <div class="voice" id="voice">"Twelve"</div>
    </div>
  </div>
</section>

<!-- PENALTY -->
<section class="feat flip">
  <div class="wrap">
    <div class="copy" style="--c:var(--red)">
      <span class="tag" style="--c:var(--red)">Skipped a day?</span>
      <h2>Skip your dailies? You pay for it.</h2>
      <p>Miss your dailies and the next morning opens with a red alert and 50 burpees added to your list. It's annoying on purpose.</p>
      <ul class="bul" style="--c:var(--red)">
        <li>Daily quests reset at midnight with a live countdown</li>
        <li>Streak shields save you when life gets in the way</li>
        <li>Penalty burpees can be counted by the AI coach too</li>
      </ul>
    </div>
    <div class="vis">
      <div class="phone" style="--pc:#ff4d6d" role="img" aria-label="Penalty quest alert screen">
        <div class="scr pen-scr">
          <div class="flash-red"></div>
          <div style="position:relative">
            <h4>PENALTY<br>QUEST</h4>
            <div class="siren"></div>
            <p>You failed to clear yesterday's daily quests.</p>
            <div class="bp">50 BURPEES</div>
            <div class="siren"></div>
            <span class="btn">ACCEPT PENALTY</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- LOOT -->
<section class="feat">
  <div class="wrap">
    <div class="copy" style="--c:var(--gold)">
      <span class="tag" style="--c:var(--gold)">Loot</span>
      <h2>Every quest can drop a chest.</h2>
      <p>Quests, PRs and boss kills can drop Common, Rare, Epic or Legendary chests. Tap to shake them open for gold, double XP potions, streak shields and auras.</p>
      <ul class="bul" style="--c:var(--gold)">
        <li>Spend gold on 9 aura colors that change your whole app</li>
        <li>Double XP potions stack up your levels fast</li>
        <li>Legendary chests can unlock auras for free</li>
      </ul>
    </div>
    <div class="vis">
      <div class="phone" style="--pc:#ffc94a" role="img" aria-label="Legendary chest opening with rewards">
        <div class="scr loot-scr">
          <div class="rar">LEGENDARY CHEST</div>
          <svg viewBox="0 0 120 120" aria-hidden="true"><polygon points="60,62 6,0 114,0" fill="#ffc94a" opacity=".22"/><polygon points="60,62 34,0 86,0" fill="#ffc94a" opacity=".3"/><rect x="16" y="54" width="88" height="50" rx="4" fill="#0b1a33" stroke="#ffc94a" stroke-width="3"/><ellipse cx="60" cy="56" rx="40" ry="7" fill="#ffc94a"/><path d="M18 46 Q22 12 64 6 Q98 4 104 30 Z" fill="#11264a" stroke="#ffc94a" stroke-width="3" transform="rotate(-18 18 46)"/><path d="M16 70 H104" stroke="#ffc94a" stroke-width="2" opacity=".45"/></svg>
          <div class="it">+384 gold</div>
          <div class="it">Double XP potion</div>
          <div class="it">Streak shield</div>
          <div class="it">Inferno aura unlocked</div>
          <i class="spark" style="left:48%;top:30%;--x:-60px;--y:-80px"></i><i class="spark" style="left:52%;top:30%;--x:70px;--y:-60px;animation-delay:.6s"></i><i class="spark" style="left:50%;top:32%;--x:20px;--y:-110px;animation-delay:1.2s"></i><i class="spark" style="left:50%;top:32%;--x:-30px;--y:-120px;animation-delay:1.8s"></i>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- RAID -->
<section class="feat flip">
  <div class="wrap">
    <div class="copy" style="--c:var(--red)">
      <span class="tag" style="--c:var(--red)">Weekly boss</span>
      <h2>A new boss every single week.</h2>
      <p>This week it might be The Plateau, Couch Golem or Leg Day Dodger. Every XP you earn hits it. Take it down before Sunday night for bonus XP and an Epic chest.</p>
    </div>
    <div class="vis">
      <div class="phone" style="--pc:#ff4d6d" role="img" aria-label="Weekly raid boss screen">
        <div class="scr raid-scr">
          <div class="tt">DUNGEON BOSS</div>
          <svg viewBox="0 0 120 120" aria-hidden="true"><defs><linearGradient id="mg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3a0d1a"/><stop offset="1" stop-color="#14040a"/></linearGradient></defs><path d="M10 22 L40 46 L60 20 L80 46 L110 22 L98 70 L80 100 L60 108 L40 100 L22 70 Z" fill="url(#mg)" stroke="#ff4d6d" stroke-width="2.5" stroke-linejoin="round"/><ellipse cx="44" cy="60" rx="9" ry="4.5" fill="#ff4d6d" transform="rotate(14 44 60)"/><ellipse cx="76" cy="60" rx="9" ry="4.5" fill="#ff4d6d" transform="rotate(-14 76 60)"/><ellipse cx="44" cy="60" rx="3" ry="2" fill="#fff"/><ellipse cx="76" cy="60" rx="3" ry="2" fill="#fff"/></svg>
          <span class="dmgpop">-60</span>
          <h4>Leg Day Dodger</h4>
          <p>Grows stronger every time you skip legs.</p>
          <div class="hpb"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i class="off"></i><i class="off"></i><i class="off"></i><i class="off"></i><i class="off"></i><i class="off"></i><i class="off"></i><i class="off"></i><i class="off"></i><i class="off"></i><i class="off"></i><i class="off"></i></div>
          <p style="margin-top:8px">208 / 520 HP &nbsp; 3 days left</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- SHARE -->
<section class="feat">
  <div class="wrap">
    <div class="copy" style="--c:var(--gold)">
      <span class="tag" style="--c:var(--gold)">Show it off</span>
      <h2>Post your level to your story.</h2>
      <p>One tap turns your level, rank, title and stats into a story-sized card. Your aura color carries over too.</p>
    </div>
    <div class="vis">
      <div class="phone" style="--pc:#ffc94a" role="img" aria-label="Shareable status card">
        <div class="scr card-scr">
          <div style="font-size:10px;letter-spacing:.3em;font-weight:700">SIDEQUEST LIFT</div>
          <div class="c" style="margin-top:14px"><small>LEVEL</small><b>35</b></div>
          <h5>Player</h5>
          <div class="ti">UNSTOPPABLE</div>
          <div class="ss"><div><b style="color:#ff4d6d">58</b>STR</div><div><b style="color:#5ad8ff">41</b>AGI</div><div><b style="color:#4fe39a">47</b>VIT</div><div><b style="color:#a77bff">39</b>END</div><div><b style="color:#ffc94a">52</b>WIL</div></div>
          <div style="font-size:10px;color:var(--muted);margin-top:12px;letter-spacing:.14em">A-RANK WARRIOR</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- NOTE -->
<section class="note">
  <div class="paper">
    <h2>Hey, I'm Ishan.</h2>
    <p>I made Sidequest Lift by myself. I wanted a workout tracker that felt like the games I actually play instead of another boring checklist, so I built the one I wanted.</p>
    <p>It's still early and it's just me working on it, so if something breaks or you want a feature, reply to your receipt email. I read all of them.</p>
    <div class="sig">Ishan</div>
    <p class="ps">P.S. The rep counter works best with your phone propped up to the side, about two metres away.</p>
  </div>
</section>

<!-- WHAT'S IN IT -->
<section class="allf">
  <div class="wrap">
    <h2>What you get</h2>
    <div class="two">
      <ul class="chk">
        <li><b>The awakening intro.</b> Name your player and pick Warrior, Assassin, Titan or Monk.</li>
        <li><b>Daily quests</b> with tap counters for push-ups, protein, water, steps and sleep, plus packs for bulking, cutting and calisthenics.</li>
        <li><b>A workout logger</b> that spots new PRs on its own and has a rest timer that beeps.</li>
        <li><b>Levels, stat points and ranks</b> from E up to S, with titles to unlock.</li>
        <li><b>Progress charts</b> for XP and bodyweight, your records, and 16 achievements.</li>
        <li><b>No account.</b> Progress saves on your phone, and you can export a backup whenever.</li>
      </ul>
      <div class="log">
        <h3>Changelog</h3>
        <div class="ent"><time>Oct 16, 2026</time><p>License keys, and a cleaner look for the rep counter screen.</p></div>
        <div class="ent"><time>Oct 15, 2026</time><p>AI rep counter, loot chests, penalty quests and the aura shop.</p></div>
        <div class="ent"><time>Oct 15, 2026</time><p>First version. Quests, levels, workout logger, weekly boss.</p></div>
        <div class="ent soon"><time>Next up</time><p>More bosses and more exercises for the counter. No promises on dates.</p></div>
      </div>
    </div>
  </div>
</section>

<!-- HOW -->
<section class="allf" style="padding-top:10px">
  <div class="wrap">
    <h2>How it works</h2>
    <div class="steps">
      <div class="step"><b>1</b><h3>Buy it</h3><p>You get a license key right after checkout. Screenshot it.</p></div>
      <div class="step"><b>2</b><h3>Open it on your phone</h3><p>Tap Enter, then Share and Add to Home Screen so it opens like an app.</p></div>
      <div class="step"><b>3</b><h3>Start your first quest</h3><p>Your key works on up to 3 of your devices.</p></div>
    </div>
  </div>
</section>

<!-- PRICE -->
<section class="price" id="price">
  <div class="wrap">
    <div class="pcard">
      <div class="rar">LEGENDARY DROP</div>
      <div class="amt"><sup>$</sup><span id="priceTxt">14</span></div>
      <div class="once">One payment, keep it forever. Updates included.</div>
      <ul>
        <li>AI rep counter for 15 exercises</li>
        <li>Daily quests, packs and penalty quests</li>
        <li>Loot chests, gold and 9 auras</li>
        <li>Weekly raid bosses</li>
        <li>Workout logger with PRs and rest timer</li>
        <li>Shareable status cards</li>
              </ul>
      <a class="cta buy" href="#">CLAIM SIDEQUEST LIFT</a>
      <p class="fine">Secure checkout by Stripe. Already bought? <a href="/unlock" style="color:var(--glow)">Unlock here</a>.</p>
    </div>
  </div>
</section>

<!-- FAQ -->
<section class="wrap">
  <div class="faq">
    <h2 class="center" style="margin-bottom:20px">Questions</h2>
    <details><summary>Does it work on iPhone and Android?</summary><p>Yes, in Safari or Chrome. Add it to your home screen and it opens full screen like any other app.</p></details>
    <details><summary>Is my camera video uploaded anywhere?</summary><p>No. The rep counter runs on your phone and nothing gets sent anywhere. I never see your video.</p></details>
    <details><summary>What if it miscounts?</summary><p>It's not perfect. Lighting and camera angle matter a lot, so prop your phone to the side with your whole body in frame. If it misses one, tap mode or the minus button on the quest fixes it in a second.</p></details>
    <details><summary>Do I need an account?</summary><p>No. Checkout gives you a license key that works on up to 3 of your devices. Your progress lives in your browser, so export a backup from Settings once in a while.</p></details>
    <details><summary>Is this a subscription?</summary><p>No. You pay once and you keep getting updates.</p></details>
    <details><summary>Which exercises can the AI count?</summary><p>Push-ups, squats, pull-ups and pulldowns, burpees, sit-ups, lunges, jumping jacks, dips, curls, overhead press, bench press, rows, lateral raises, deadlifts and hip thrusts. Anything else works with tap counting.</p></details>
    <details><summary>Do I need gym equipment?</summary><p>Nope. Pick the Monk class or the Calisthenics pack and everything is bodyweight.</p></details>
  </div>
</section>

<section class="end">
  <div class="wrap">
    <h2>The system has chosen you. Will you accept?</h2>
    <div class="ctas" style="justify-content:center"><a class="cta buy" href="#price">ACCEPT</a></div>
  </div>
</section>

<nav class="seo-links" style="position:static;background:none;backdrop-filter:none;border:0;text-align:center;font-size:14px;padding:10px 20px 0;display:flex;flex-wrap:wrap;justify-content:center;gap:8px 18px"><a href="/push-up-counter">Push-up counter</a><a href="/ai-rep-counter">AI rep counter</a><a href="/gamified-workout-tracker">Gamified workout tracker</a><a href="/rpg-workout-app">RPG workout app</a><a href="/calisthenics-skill-tree">Calisthenics skill tree</a><a href="/habitica-alternative">Habitica alternative</a></nav>
<footer>Made by Ishan in Canada. \xA9 <span id="yr"></span> Sidequest. Train safe and know your limits.</footer>

<script>
(function(){
  /* Set your checkout link and price here */
  const BUY_URL='/buy';
  const PRICE='14';
  document.getElementById('priceTxt').textContent=PRICE;
  document.getElementById('yr').textContent=new Date().getFullYear();
  if(BUY_URL!=='#')document.querySelectorAll('.pcard .buy').forEach(a=>a.href=BUY_URL);

  const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* live rep counter demo, synced to the 1.6s animation */
  const words=['','One','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten','Eleven','Twelve','Thirteen','Fourteen','Fifteen','Sixteen','Seventeen','Eighteen','Nineteen','Twenty'];
  let n=11,c=6;const N=document.getElementById('repN'),P=document.getElementById('perf'),V=document.getElementById('voice'),L=document.getElementById('logT'),C=document.getElementById('cmb'),A=document.getElementById('angTxt');
  if(!reduced)setInterval(()=>{n=n>=20?1:n+1;c=n===1?0:c+1;N.textContent=n;N.classList.remove('pop');void N.offsetWidth;N.classList.add('pop');
    P.classList.remove('go');void P.offsetWidth;P.classList.add('go');V.textContent='"'+(words[n]||n)+'"';L.textContent='LOG '+n+' REPS';C.textContent=c;},1600);
  let t0=performance.now();
  if(!reduced)(function ang(){const ph=((performance.now()-t0)%1600)/1600,e=.5-.5*Math.cos(ph*2*Math.PI);A.textContent=Math.round(172-e*90)+'\xB0';A.setAttribute('y',String(126+e*22));A.setAttribute('x',String(66+e*28));requestAnimationFrame(ang);})();

  /* embers */
  const cv=document.getElementById('embers'),x=cv.getContext('2d');let W=0,H=0,ps=[];
  const sp=document.createElement('canvas');sp.width=sp.height=32;const g=sp.getContext('2d'),gr=g.createRadialGradient(16,16,0,16,16,16);
  gr.addColorStop(0,'#fff');gr.addColorStop(.2,'#a77bff');gr.addColorStop(.5,'#a77bff66');gr.addColorStop(1,'#a77bff00');g.fillStyle=gr;g.fillRect(0,0,32,32);
  function size(){const d=devicePixelRatio||1,r=cv.getBoundingClientRect();W=r.width;H=r.height;cv.width=W*d;cv.height=H*d;x.setTransform(d,0,0,d,0,0);}
  size();addEventListener('resize',size);
  function loop(){
    if(ps.length<60&&Math.random()<.6)ps.push({x:W/2+(Math.random()-.5)*W*.7,y:H*.75+Math.random()*60,vy:-(.3+Math.random()*.9),vx:(Math.random()-.5)*.3,l:1,r:1+Math.random()*2.4});
    x.clearRect(0,0,W,H);x.globalCompositeOperation='lighter';ps=ps.filter(p=>p.l>0);
    ps.forEach(p=>{p.x+=p.vx+Math.sin(p.y/30)*.2;p.y+=p.vy;p.l-=.005;x.globalAlpha=p.l*.8;const d=p.r*5;x.drawImage(sp,p.x-d/2,p.y-d/2,d,d);});
    x.globalAlpha=1;requestAnimationFrame(loop);
  }
  if(!reduced)loop();
})();
<\/script>
</body>
</html>
`;

// src/app.html
var app_default = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<title>Sidequest Lift</title>
<meta name="theme-color" content="#03050b">
<meta name="apple-mobile-web-app-capable" content="yes">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>
:root{
  --bg:#03050b;
  --ink:#e4f4ff;
  --muted:#6d86a0;
  --glow:#5ad8ff;
  --gold:#ffc94a;
  --red:#ff4d6d;
  --green:#4fe39a;
  --violet:#a77bff;
  --aura:#7f9cff;
  --line:rgba(90,216,255,.24);
  --panel:linear-gradient(180deg,rgba(12,30,58,.78),rgba(4,11,24,.92));
  color-scheme:dark;
}
*{box-sizing:border-box;margin:0;padding:0;-webkit-tap-highlight-color:transparent}
html{-webkit-text-size-adjust:100%}
body{
  background-color:var(--bg);
  background-image:
    radial-gradient(700px 520px at 50% -120px,color-mix(in srgb,var(--aura) 22%,transparent),transparent 70%),
    linear-gradient(rgba(90,216,255,.03) 1px,transparent 1px),
    linear-gradient(90deg,rgba(90,216,255,.03) 1px,transparent 1px);
  background-size:auto,40px 40px,40px 40px;
  color:var(--ink);
  font-family:'Chakra Petch',system-ui,sans-serif;
  font-size:15px;line-height:1.45;
  min-height:100vh;
  -webkit-font-smoothing:antialiased;
  overscroll-behavior-y:none;
}
button,input,select{font:inherit;color:inherit}
button{cursor:pointer;background:none;border:0}
:focus-visible{outline:2px solid var(--glow);outline-offset:3px}
.app{max-width:480px;margin:0 auto;padding:14px 16px calc(100px + env(safe-area-inset-bottom))}
body.shake .app{animation:quake .5s}
@keyframes quake{10%,50%,90%{transform:translate(-6px,2px)}30%,70%{transform:translate(6px,-2px)}}

/* top bar */
.top{display:flex;align-items:center;justify-content:space-between;margin-bottom:6px}
.brand{font-weight:700;font-size:14px;letter-spacing:.14em;display:flex;align-items:center;gap:9px}
.brand i{width:9px;height:9px;background:var(--aura);box-shadow:0 0 12px var(--aura);transform:rotate(45deg);display:inline-block}
.topr{display:flex;gap:8px;align-items:center}
.flame{display:flex;align-items:center;gap:5px;border:1px solid var(--line);background:rgba(6,16,32,.8);padding:5px 11px;font-weight:700;font-size:15px;color:var(--gold)}
.flame svg{width:15px;height:15px;filter:drop-shadow(0 0 6px var(--gold))}
.ibtn{width:34px;height:34px;border:1px solid var(--line);background:rgba(6,16,32,.8);display:grid;place-items:center;color:var(--muted)}
.ibtn svg{width:17px;height:17px}

/* views */
.view{display:none}
.view.on{display:block;animation:vin .35s ease-out}
@keyframes vin{from{opacity:0;transform:translateY(8px)}}
.stack{display:grid;gap:26px;margin-top:26px}

/* window */
.win{position:relative;background:var(--panel);border:1px solid var(--line);padding:26px 16px 16px;
  box-shadow:0 0 34px rgba(47,140,255,.10),inset 0 0 44px rgba(90,216,255,.04)}
.win::before{content:"";position:absolute;inset:-2px;pointer-events:none;
  background:
    linear-gradient(var(--c,var(--glow)),var(--c,var(--glow))) top left/14px 2px no-repeat,
    linear-gradient(var(--c,var(--glow)),var(--c,var(--glow))) top left/2px 14px no-repeat,
    linear-gradient(var(--c,var(--glow)),var(--c,var(--glow))) top right/14px 2px no-repeat,
    linear-gradient(var(--c,var(--glow)),var(--c,var(--glow))) top right/2px 14px no-repeat,
    linear-gradient(var(--c,var(--glow)),var(--c,var(--glow))) bottom left/14px 2px no-repeat,
    linear-gradient(var(--c,var(--glow)),var(--c,var(--glow))) bottom left/2px 14px no-repeat,
    linear-gradient(var(--c,var(--glow)),var(--c,var(--glow))) bottom right/14px 2px no-repeat,
    linear-gradient(var(--c,var(--glow)),var(--c,var(--glow))) bottom right/2px 14px no-repeat;
  filter:drop-shadow(0 0 4px var(--c,var(--glow)))}
.wt{position:absolute;top:-13px;left:50%;transform:translateX(-50%);background:#050d1c;border:1px solid var(--line);
  padding:2px 16px;font-weight:700;letter-spacing:.22em;font-size:11.5px;color:var(--c,var(--glow));text-shadow:0 0 10px currentColor;white-space:nowrap}
.wt::before,.wt::after{content:"";position:absolute;top:50%;width:6px;height:6px;background:currentColor;transform:translateY(-50%) rotate(45deg);box-shadow:0 0 8px currentColor}
.wt::before{left:-4px}.wt::after{right:-4px}
.sub{color:var(--muted);font-size:13px}
.rowh{display:flex;justify-content:space-between;align-items:center;gap:10px;margin-bottom:12px}
.lnk{color:var(--muted);font-size:13px;font-weight:600;padding:3px 4px}
.lnk:hover{color:var(--glow)}
.btn{background:var(--glow);color:#03111f;font-weight:700;padding:10px 16px;letter-spacing:.06em;box-shadow:0 0 18px rgba(90,216,255,.35);white-space:nowrap}
.btn:hover{filter:brightness(1.12)}
.btn.big{width:100%;padding:16px;font-size:17px;letter-spacing:.14em}
.btn.gold{background:var(--gold);box-shadow:0 0 18px rgba(255,201,74,.4)}
.btn.red{background:var(--red);color:#fff;box-shadow:0 0 18px rgba(255,77,109,.4)}
.btn.ghost{background:transparent;color:var(--ink);border:1px solid var(--line);box-shadow:none}
.f{background:rgba(4,12,24,.85);border:1px solid var(--line);padding:10px 11px;min-width:0;border-radius:0}
.f:focus{outline:none;border-color:var(--glow);box-shadow:0 0 10px rgba(90,216,255,.25)}
.empty{color:var(--muted);font-size:13px;padding:6px 0}

/* HERO */
.hero{position:relative;text-align:center;padding-top:4px}
.hero canvas{position:absolute;inset:-20px -16px 0;width:calc(100% + 32px);height:calc(100% + 20px);pointer-events:none}
.circle{position:relative;width:min(300px,78vw);aspect-ratio:1;margin:0 auto}
.circle svg{position:absolute;inset:0;width:100%;height:100%;overflow:visible}
.circle .ring{fill:none;stroke:var(--aura);filter:drop-shadow(0 0 6px var(--aura))}
.spin{transform-origin:50% 50%;animation:spin 40s linear infinite;will-change:transform}
.spin.rev{animation-duration:26s;animation-direction:reverse}
.spin.slow{animation-duration:70s}
@keyframes spin{to{transform:rotate(360deg)}}
.xparc{fill:none;stroke:var(--aura);stroke-width:7;stroke-linecap:round;transform:rotate(-90deg);transform-origin:150px 150px;transition:stroke-dashoffset .9s cubic-bezier(.2,.9,.3,1);filter:drop-shadow(0 0 10px var(--aura))}
.xptrack{fill:none;stroke:rgba(255,255,255,.07);stroke-width:7}
.core{position:absolute;inset:0;display:grid;place-items:center;align-content:center}
.core small{font-weight:700;letter-spacing:.4em;font-size:12px;color:var(--aura);text-shadow:0 0 10px var(--aura);margin-right:-.4em}
.core b{font-weight:700;font-size:clamp(84px,25vw,112px);line-height:.92;letter-spacing:-.04em;text-shadow:0 0 30px var(--aura),0 0 4px rgba(255,255,255,.6);font-variant-numeric:tabular-nums}
.core span{font-size:13px;color:var(--muted);font-weight:600;font-variant-numeric:tabular-nums}
.core span em{font-style:normal;color:var(--ink)}
.idrow{display:flex;align-items:center;justify-content:center;gap:14px;margin-top:6px}
.rk{width:58px;height:66px;position:relative;display:grid;place-items:center;flex:none}
.rk::before,.rk::after{content:"";position:absolute;clip-path:polygon(50% 0,100% 25%,100% 75%,50% 100%,0 75%,0 25%)}
.rk::before{inset:0;background:var(--aura);box-shadow:0 0 20px var(--aura)}
.rk::after{inset:2px;background:linear-gradient(180deg,#0c1b35,#040a16)}
.rk b{position:relative;z-index:1;font-size:32px;font-weight:700;color:var(--aura);text-shadow:0 0 14px var(--aura)}
.ident{text-align:left;min-width:0}
.ident .nm{font-weight:700;font-size:21px;letter-spacing:.02em;line-height:1.1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.ident .tt{font-weight:700;font-size:13px;color:var(--gold);text-shadow:0 0 10px rgba(255,201,74,.45);letter-spacing:.06em}
.ident .rkn{font-size:12px;color:var(--muted);letter-spacing:.08em}
.heroact{display:flex;gap:8px;justify-content:center;margin-top:14px}
.pill{border:1px solid var(--line);background:rgba(6,16,32,.7);padding:7px 14px;font-weight:600;font-size:13px;display:flex;align-items:center;gap:7px}
.pill svg{width:15px;height:15px}
.pill:hover{border-color:var(--glow);color:var(--glow)}

/* stats */
.cp{display:flex;justify-content:space-between;align-items:baseline;margin-bottom:12px}
.cp b{font-size:28px;font-weight:700;color:var(--aura);text-shadow:0 0 14px var(--aura);font-variant-numeric:tabular-nums}
.stats{display:grid;gap:9px}
.st{display:grid;grid-template-columns:42px 1fr 36px 28px;gap:10px;align-items:center}
.st .k{font-weight:700;letter-spacing:.1em;font-size:13px;color:var(--muted)}
.st .bar{height:8px;background:rgba(90,216,255,.08);overflow:hidden;transform:skewX(-20deg)}
.st .bar div{height:100%;background:var(--sc);box-shadow:0 0 10px var(--sc);transition:width .5s}
.st .v{font-weight:700;font-size:18px;text-align:right;font-variant-numeric:tabular-nums}
.st .plus{width:28px;height:28px;border:1px solid var(--gold);color:var(--gold);display:grid;place-items:center;font-weight:700;font-size:16px;box-shadow:0 0 10px rgba(255,201,74,.35);visibility:hidden}
.has-pts .st .plus{visibility:visible}
.st.bump .v{animation:bump .45s}
@keyframes bump{40%{transform:scale(1.45);color:var(--gold);text-shadow:0 0 14px var(--gold)}}
.pts{display:flex;justify-content:space-between;align-items:center;margin-top:12px;padding:9px 12px;border:1px dashed var(--line);color:var(--muted);font-weight:600;font-size:13px}
.has-pts .pts{border-color:var(--gold);color:var(--gold);box-shadow:0 0 16px rgba(255,201,74,.14);animation:pulse 1.6s ease-in-out infinite}
@keyframes pulse{50%{box-shadow:0 0 26px rgba(255,201,74,.32)}}
.pts b{font-size:18px}

/* quests */
.timer{font-weight:700;color:var(--red);font-variant-numeric:tabular-nums;letter-spacing:.04em;text-shadow:0 0 10px rgba(255,77,109,.45)}
.ql{display:grid;gap:8px}
.q{display:grid;grid-template-columns:1fr auto;gap:6px 10px;align-items:center;padding:12px 10px 12px 14px;border:1px solid rgba(90,216,255,.12);background:rgba(6,16,32,.55);position:relative;transition:border-color .25s,background .25s}
.q::before{content:"";position:absolute;left:0;top:0;bottom:0;width:3px;background:rgba(90,216,255,.2)}
.q.done{border-color:rgba(79,227,154,.35);background:rgba(10,40,34,.35)}
.q.done::before{background:var(--green);box-shadow:0 0 10px var(--green)}
.qn{font-weight:600;display:flex;gap:8px;align-items:baseline;min-width:0}
.qn span{min-width:0;overflow-wrap:anywhere}
.qn .xp{font-size:12px;font-weight:700;color:var(--glow);margin-left:auto;white-space:nowrap}
.q.done .qn .xp{color:var(--green)}
.qbar{display:flex;align-items:center;gap:10px}
.qbar .bar{flex:1;height:5px;background:rgba(90,216,255,.1);overflow:hidden}
.qbar .bar div{height:100%;background:var(--glow);box-shadow:0 0 8px var(--glow);transition:width .35s}
.q.done .qbar .bar div{background:var(--green);box-shadow:0 0 8px var(--green)}
.qbar .n{font-size:12.5px;color:var(--muted);font-variant-numeric:tabular-nums;white-space:nowrap}
.qbar .n b{color:var(--ink)}
.ctl{grid-column:2;grid-row:1/3;display:flex;gap:6px}
.ctl button{width:40px;height:40px;border:1px solid var(--line);display:grid;place-items:center;font-weight:700;font-size:20px;color:var(--glow);background:rgba(4,12,24,.7)}
.ctl button:active{transform:scale(.92)}
.ctl .minus{color:var(--muted);width:30px;font-size:17px}
.q.done .ctl .plusq{color:var(--green);border-color:rgba(79,227,154,.5)}
.ctl .rm{display:none;color:var(--red);border-color:rgba(255,77,109,.4);font-size:15px}
.editing .ctl .rm{display:grid}
.editing .ctl .minus,.editing .ctl .plusq{display:none}
.bonus{margin-top:12px;display:flex;justify-content:space-between;padding:10px 12px;border:1px dashed var(--line);font-size:13px;color:var(--muted)}
.bonus.got{border-color:var(--gold);color:var(--gold)}
.addf{display:none;gap:8px;flex-wrap:wrap;margin-top:10px}
.addf.open{display:flex}
.addf .grow{flex:1 1 150px}.addf .sm{flex:0 1 84px}
.packs{display:grid;grid-template-columns:1fr 1fr;gap:8px}
.pack{border:1px solid var(--line);background:rgba(6,16,32,.6);padding:12px;text-align:left}
.pack b{display:block;font-size:14px}
.pack span{font-size:12px;color:var(--muted)}
.pack:hover,.pack.on{border-color:var(--glow);box-shadow:0 0 14px rgba(90,216,255,.18)}
.pack.on b{color:var(--glow)}

/* train */
.sess{display:flex;justify-content:space-between;align-items:baseline}
.clock{font-size:34px;font-weight:700;font-variant-numeric:tabular-nums;text-shadow:0 0 14px rgba(90,216,255,.5)}
.logf{display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-top:12px}
.logf .ex{grid-column:1/-1}
.logf label{font-size:11px;color:var(--muted);letter-spacing:.12em;font-weight:700;display:block;margin-bottom:4px}
.logf input{width:100%}
.logf .btn{align-self:end;height:43px}
.steppers{display:flex;gap:6px;margin-top:8px;flex-wrap:wrap}
.steppers button{border:1px solid var(--line);padding:5px 10px;font-size:13px;font-weight:600;color:var(--muted)}
.steppers button:hover{color:var(--glow);border-color:var(--glow)}
.rest{display:none;align-items:center;gap:14px;margin-top:14px;padding:12px;border:1px solid rgba(255,201,74,.4);background:rgba(40,30,8,.35)}
.rest.on{display:flex}
.rest svg{width:56px;height:56px;flex:none}
.rest .rt{font-size:26px;font-weight:700;color:var(--gold);font-variant-numeric:tabular-nums;text-shadow:0 0 12px rgba(255,201,74,.5)}
.rest .sub b{color:var(--ink)}
.rest .btns{margin-left:auto;display:flex;gap:6px}
.rest .btns button{border:1px solid rgba(255,201,74,.4);color:var(--gold);padding:6px 9px;font-weight:700;font-size:13px}
.exg{border-top:1px solid rgba(90,216,255,.1);padding:10px 0}
.exg:first-child{border-top:0}
.exg h4{font-size:15px;font-weight:700;display:flex;justify-content:space-between}
.exg h4 span{font-size:12px;color:var(--muted);font-weight:600}
.sets{display:flex;flex-wrap:wrap;gap:6px;margin-top:6px}
.set{border:1px solid rgba(90,216,255,.18);padding:4px 9px;font-size:13px;font-weight:600;font-variant-numeric:tabular-nums}
.set.pr{border-color:var(--gold);color:var(--gold);box-shadow:0 0 10px rgba(255,201,74,.25)}
.set button{color:var(--muted);margin-left:6px;font-size:12px}
.hist .h{display:flex;justify-content:space-between;align-items:center;padding:10px 0;border-bottom:1px solid rgba(90,216,255,.08)}
.hist .h:last-child{border-bottom:0}
.hist .h b{display:block;font-size:14px}
.hist .h span{font-size:12px;color:var(--muted)}
.hist .h em{font-style:normal;font-weight:700;color:var(--glow)}
.tot{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:12px}
.tot div{border:1px solid rgba(90,216,255,.12);padding:10px;text-align:center}
.tot b{display:block;font-size:20px;font-weight:700;font-variant-numeric:tabular-nums}
.tot span{font-size:11px;color:var(--muted);letter-spacing:.1em}

/* raid */
.raid .win{--c:var(--red);border-color:rgba(255,77,109,.3);box-shadow:0 0 40px rgba(255,77,109,.12),inset 0 0 44px rgba(255,77,109,.05)}
.raid .wt{border-color:rgba(255,77,109,.3)}
.monster{width:170px;height:170px;margin:0 auto 6px;display:block;filter:drop-shadow(0 0 22px rgba(255,77,109,.55));animation:hover 3.2s ease-in-out infinite}
@keyframes hover{50%{transform:translateY(-8px)}}
.raid.hit .monster{animation:hurt .4s}
@keyframes hurt{0%{filter:drop-shadow(0 0 22px #fff) brightness(3)}30%{transform:translateX(-10px) rotate(-4deg)}60%{transform:translateX(8px) rotate(3deg)}}
.raid.dead .monster{filter:grayscale(1) opacity(.35);animation:none;transform:rotate(-8deg) translateY(10px)}
.bn{font-weight:700;font-size:30px;text-align:center;color:#ffd9df;text-shadow:0 0 18px rgba(255,77,109,.55);line-height:1.05}
.bl{color:var(--muted);font-size:13px;text-align:center;margin:6px auto 0;max-width:36ch}
.hp{display:grid;grid-template-columns:repeat(25,1fr);gap:2px;height:16px;margin-top:16px}
.hp i{background:rgba(255,77,109,.12);transform:skewX(-18deg);transition:background .35s}
.hp i.on{background:var(--red);box-shadow:0 0 6px rgba(255,77,109,.7)}
.hpt{display:flex;justify-content:space-between;margin-top:8px;font-size:13px;color:var(--muted)}
.hpt b{color:#ffd9df}
.cleared{display:none;margin-top:12px;text-align:center;font-weight:700;letter-spacing:.2em;color:var(--gold);text-shadow:0 0 12px var(--gold)}
.raid.dead .cleared{display:block}
.dmg{display:grid;grid-template-columns:repeat(7,1fr);gap:6px;align-items:end;height:90px;margin-top:6px}
.dmg div{display:flex;flex-direction:column;justify-content:flex-end;align-items:center;height:100%;gap:4px}
.dmg i{width:100%;background:linear-gradient(180deg,var(--red),rgba(255,77,109,.3));min-height:2px;box-shadow:0 0 8px rgba(255,77,109,.4)}
.dmg span{font-size:11px;color:var(--muted)}
.dmg div.t span{color:var(--ink);font-weight:700}

/* progress */
.chart{width:100%;height:150px;display:block}
.bwf{display:flex;gap:8px;margin-bottom:10px}
.bwf .f{flex:1}
.pr{display:grid;grid-template-columns:1fr auto;padding:9px 0;border-bottom:1px solid rgba(90,216,255,.08)}
.pr:last-child{border-bottom:0}
.pr span{font-weight:600}
.pr small{grid-column:1;font-size:12px;color:var(--muted)}
.pr b{grid-column:2;grid-row:1/3;align-self:center;font-weight:700;font-size:19px;color:var(--glow);text-shadow:0 0 10px rgba(90,216,255,.4)}
.pr b em{font-style:normal;font-size:12px;color:var(--muted);margin-left:3px;text-shadow:none}
.heat{display:grid;grid-template-columns:repeat(7,1fr);gap:4px}
.heat i{aspect-ratio:1;background:rgba(90,216,255,.06);border:1px solid rgba(90,216,255,.08)}
.heat i.l1{background:rgba(90,216,255,.22)}.heat i.l2{background:rgba(90,216,255,.45)}
.heat i.l3{background:rgba(90,216,255,.7);box-shadow:0 0 6px rgba(90,216,255,.4)}
.heat i.l4{background:var(--glow);box-shadow:0 0 10px rgba(90,216,255,.7)}
.heat i.t{outline:1px solid var(--gold);outline-offset:1px}
.heat i.fu{opacity:.3}
.hl{display:grid;grid-template-columns:repeat(7,1fr);gap:4px;font-size:11px;color:var(--muted);text-align:center;margin-bottom:4px}
.ach{display:grid;grid-template-columns:repeat(4,1fr);gap:12px 6px}
.a{text-align:center;opacity:.3}
.a.got{opacity:1}
.a .h{width:40px;height:45px;margin:0 auto 5px;clip-path:polygon(50% 0,100% 25%,100% 75%,50% 100%,0 75%,0 25%);background:var(--bc);display:grid;place-items:center;font-weight:700;font-size:13px;color:#03111f}
.a:not(.got) .h{background:rgba(110,134,160,.35);color:var(--muted)}
.a .bt{font-size:11px;font-weight:600;line-height:1.2}

/* nav */
/* ---------- skill tree ---------- */
.tree-head{display:grid;gap:12px}
.br-tabs{display:grid;grid-template-columns:repeat(4,1fr);gap:6px}
.br-tabs button{border:1px solid var(--line);padding:8px 2px 7px;display:grid;gap:2px;justify-items:center;font-weight:700;font-size:12px;letter-spacing:.1em;color:var(--muted);background:rgba(4,12,24,.6)}
.br-tabs button span{font-size:11px;letter-spacing:.02em;font-weight:600;opacity:.8}
.br-tabs button.on{color:var(--bc);border-color:var(--bc);box-shadow:0 0 14px color-mix(in srgb,var(--bc) 35%,transparent),inset 0 0 18px color-mix(in srgb,var(--bc) 12%,transparent);text-shadow:0 0 10px var(--bc)}
.tree-meter{height:6px;background:rgba(255,255,255,.06);overflow:hidden}
.tree-meter i{display:block;height:100%;background:var(--bc);box-shadow:0 0 10px var(--bc);transition:width .5s}
.tree{position:relative;margin:4px -4px 0}
.tree svg.lines{position:absolute;inset:0;width:100%;height:100%;overflow:visible;pointer-events:none}
.tree svg.lines path{fill:none;stroke-width:3;stroke:rgba(140,170,210,.16)}
.tree svg.lines path.av{stroke:var(--bc);opacity:.55;stroke-dasharray:5 6;animation:flow 1.2s linear infinite}
.tree svg.lines path.dn{stroke:var(--bc);filter:drop-shadow(0 0 5px var(--bc))}
@keyframes flow{to{stroke-dashoffset:-22}}
.tier{position:absolute;left:4px;font-size:10px;font-weight:700;letter-spacing:.18em;color:rgba(160,185,215,.35)}
.node{position:absolute;width:92px;margin-left:-46px;display:grid;justify-items:center;gap:6px;text-align:center}
.node .hx{width:58px;height:58px;display:grid;place-items:center;position:relative;font-weight:700;font-size:15px;color:#7d8ea6;
  clip-path:polygon(50% 0,93% 25%,93% 75%,50% 100%,7% 75%,7% 25%);background:#0b1426}
.node .hx::before{content:"";position:absolute;inset:0;clip-path:inherit;background:rgba(140,170,210,.22);z-index:-1}
.node .hx::after{content:"";position:absolute;inset:2px;clip-path:inherit;background:#0b1426;z-index:-1}
.node .hx{isolation:isolate;background:transparent}
.node .hx small{display:block;font-size:9px;letter-spacing:.08em;font-weight:600;margin-top:-2px;opacity:.85}
.node b{font-size:11.5px;line-height:1.15;font-weight:700;color:#7d8ea6;letter-spacing:.02em}
.node.av .hx{color:var(--bc);filter:drop-shadow(0 0 8px var(--bc));animation:nodePulse 1.8s ease-in-out infinite}
.node.av .hx::before{background:var(--bc)}
.node.av b{color:var(--ink)}
.node.dn .hx{color:#04101e;filter:drop-shadow(0 0 10px var(--bc))}
.node.dn .hx::before{background:var(--bc)}
.node.dn .hx::after{background:linear-gradient(160deg,color-mix(in srgb,var(--bc) 95%,#fff),var(--bc))}
.node.dn b{color:var(--bc);text-shadow:0 0 10px color-mix(in srgb,var(--bc) 60%,transparent)}
.node.lk .hx svg{width:18px;height:18px;opacity:.55}
.node.boss .hx{width:70px;height:70px;font-size:18px}
.node.just .hx{animation:nodeBurst .9s ease-out}
@keyframes nodePulse{50%{filter:drop-shadow(0 0 16px var(--bc))}}
@keyframes nodeBurst{0%{transform:scale(.6)}50%{transform:scale(1.35)}100%{transform:scale(1)}}
.sk-req{display:flex;justify-content:center;gap:10px;margin:14px 0 4px}
.sk-req div{border:1px solid var(--line);padding:8px 14px;display:grid;gap:2px;min-width:92px}
.sk-req b{font-size:22px;color:var(--bc);text-shadow:0 0 12px var(--bc)}
.sk-req span{font-size:11px;letter-spacing:.12em;color:var(--muted);font-weight:700}
.sk-tip{font-size:14px;line-height:1.5;color:#b8c8dc;margin:10px 0 14px}
.sk-pre{font-size:13px;color:var(--muted);margin-bottom:12px}
.sk-pre em{font-style:normal;color:var(--red)}
.sk-acts{display:grid;gap:8px}
.sk-row{display:flex;gap:8px}
.sk-row .f{flex:1;min-width:0}
.sk-hold{font-size:54px;font-weight:700;font-variant-numeric:tabular-nums;color:var(--bc);text-shadow:0 0 22px var(--bc);text-align:center;margin:6px 0}
.sk-hold small{font-size:18px;color:var(--muted);text-shadow:none}
.sk-ring{height:6px;background:rgba(255,255,255,.07);margin-bottom:10px}
.sk-ring i{display:block;height:100%;width:0;background:var(--bc);box-shadow:0 0 10px var(--bc)}
.nav{position:fixed;left:0;right:0;bottom:0;z-index:60;background:linear-gradient(180deg,rgba(3,5,11,.6),rgba(3,5,11,.97) 30%);backdrop-filter:blur(10px);border-top:1px solid var(--line);padding:8px 8px calc(8px + env(safe-area-inset-bottom))}
.nav .in{max-width:480px;margin:0 auto;display:grid;grid-template-columns:repeat(6,1fr)}
.nav button{display:grid;justify-items:center;gap:3px;padding:4px 0;color:var(--muted);font-size:10px;font-weight:700;letter-spacing:.04em;position:relative}
.nav svg{width:22px;height:22px}
.nav button.on{color:var(--glow);text-shadow:0 0 10px var(--glow)}
.nav button.on svg{filter:drop-shadow(0 0 6px var(--glow))}
.nav button.on::before{content:"";position:absolute;top:-9px;left:30%;right:30%;height:2px;background:var(--glow);box-shadow:0 0 10px var(--glow)}
.nav .dot{position:absolute;top:0;right:28%;width:8px;height:8px;background:var(--gold);transform:rotate(45deg);box-shadow:0 0 8px var(--gold);display:none}
.nav .dot.on{display:block}

/* system popup */
.sys{position:fixed;left:50%;top:14%;transform:translateX(-50%);width:min(360px,calc(100vw - 32px));z-index:170;pointer-events:none}
.sys .win{text-align:center;padding:30px 18px 22px;background:linear-gradient(180deg,rgba(10,30,62,.97),rgba(3,10,22,.98));animation:sysIn .45s cubic-bezier(.2,1.2,.4,1)}
.sys.out .win{animation:sysOut .3s forwards}
.sys .big{font-weight:700;font-size:28px;letter-spacing:.03em;text-shadow:0 0 18px currentColor;line-height:1.1}
.sys .ln{margin-top:8px;font-size:15px}
.sys .ln b{color:var(--glow);text-shadow:0 0 10px var(--glow)}
.sys.gold .win{--c:var(--gold);border-color:rgba(255,201,74,.5);box-shadow:0 0 70px rgba(255,201,74,.3)}
.sys.gold .wt{color:var(--gold);border-color:rgba(255,201,74,.5)}
.sys.gold .big{color:var(--gold);font-size:48px}
.sys.gold .ln b{color:var(--gold);text-shadow:0 0 10px var(--gold)}
.sys.red .win{--c:var(--red);border-color:rgba(255,77,109,.5)}
.sys.red .wt{color:var(--red)}
.sys.red .big{color:#ffd9df}
@keyframes sysIn{0%{opacity:0;transform:scaleY(.03) scaleX(1.15)}45%{opacity:1;transform:scaleY(1.06) scaleX(.98)}100%{transform:none}}
@keyframes sysOut{to{opacity:0;transform:scaleY(.03) scaleX(1.1)}}
#fx{position:fixed;inset:0;width:100vw;height:100vh;pointer-events:none;z-index:165}
.flash{position:fixed;inset:0;pointer-events:none;z-index:160;background:radial-gradient(circle at 50% 35%,color-mix(in srgb,var(--gold) 45%,transparent),transparent 65%);opacity:0}
.flash.go{animation:fl 1s ease-out}
@keyframes fl{12%{opacity:1}100%{opacity:0}}

/* sheets */
.sheet{position:fixed;inset:0;background:rgba(2,4,10,.82);display:none;z-index:95;padding:30px 16px;overflow:auto}
.sheet.show{display:flex}
@media(min-width:600px){.sheet{align-items:center}}
.sheet .win{width:100%;max-width:420px;margin:auto}
.srow{display:flex;justify-content:space-between;align-items:center;gap:10px;padding:12px 0;border-bottom:1px solid rgba(90,216,255,.1)}
.seg{display:flex;border:1px solid var(--line)}
.seg button{padding:6px 12px;font-weight:700;font-size:13px;color:var(--muted)}
.seg button.on{background:var(--glow);color:#03111f}
.danger{color:var(--red);font-weight:700}
.titles{display:grid;gap:6px}
.titles button{border:1px solid var(--line);padding:10px 12px;text-align:left;font-weight:700;display:flex;justify-content:space-between}
.titles button span{font-size:12px;color:var(--muted);font-weight:600}
.titles button.on{border-color:var(--gold);color:var(--gold);box-shadow:0 0 12px rgba(255,201,74,.2)}
.titles button:disabled{opacity:.35;cursor:default}
.cardimg{width:100%;display:block;border:1px solid var(--line);margin:4px 0 12px}

body::after{content:"";position:fixed;inset:0;pointer-events:none;z-index:300;background:repeating-linear-gradient(0deg,rgba(255,255,255,.022) 0 1px,transparent 1px 3px)}
.sys .big{animation:glitch .45s steps(2) 1}
@keyframes glitch{0%{text-shadow:-4px 0 #ff4d6d,4px 0 #5ad8ff;transform:skewX(-8deg)}50%{text-shadow:4px 0 #ff4d6d,-4px 0 #5ad8ff;transform:skewX(6deg)}100%{text-shadow:0 0 18px currentColor}}
.runes{font-size:9.5px;font-weight:700;letter-spacing:3.4px;fill:var(--aura);opacity:.8}
.inv{display:grid;grid-template-columns:repeat(4,1fr);gap:8px}
.slot{border:1px solid rgba(90,216,255,.16);background:rgba(4,12,24,.6);padding:12px 4px 9px;text-align:center;position:relative}
.slot svg{width:36px;height:36px;display:block;margin:0 auto 5px}
.slot b{display:block;font-size:12px}
.slot .cnt{position:absolute;top:4px;right:6px;font-size:12px;font-weight:700;color:var(--gold)}
.slot:disabled{opacity:.38;cursor:default}
.slot.pulse{border-color:var(--gold);box-shadow:0 0 16px rgba(255,201,74,.3);animation:pulse 1.6s infinite}
.goldn{display:flex;align-items:center;gap:7px;font-weight:700;color:var(--gold);font-size:17px;text-shadow:0 0 10px rgba(255,201,74,.4)}
.goldn i{width:14px;height:14px;border-radius:50%;background:radial-gradient(circle at 35% 35%,#fff3c4,#ffc94a 45%,#b37a00);box-shadow:0 0 10px rgba(255,201,74,.6)}
.buff{display:none;margin-top:10px;padding:9px 12px;border:1px solid rgba(167,123,255,.55);color:var(--violet);font-weight:700;font-size:13px;justify-content:space-between;box-shadow:0 0 14px rgba(167,123,255,.2)}
.buff.on{display:flex}
.ov{position:fixed;inset:0;z-index:150;display:none;place-items:center;text-align:center;padding:24px;background:radial-gradient(circle at 50% 40%,rgba(10,24,52,.985),rgba(1,2,6,1));overflow:auto}
.ov.show{display:grid}
.ov>div{width:100%;max-width:440px;display:grid;justify-items:center}
.ov .tw{font-size:18px;font-weight:600;min-height:27px;color:var(--glow);text-shadow:0 0 10px var(--glow);letter-spacing:.04em}
.ov h2{font-size:32px;font-weight:700;letter-spacing:.08em;text-shadow:0 0 20px currentColor;line-height:1.1}
.bang{width:96px;height:96px;display:grid;place-items:center;border:2px solid var(--glow);color:var(--glow);font-size:56px;font-weight:700;transform:rotate(45deg);box-shadow:0 0 30px rgba(90,216,255,.5),inset 0 0 20px rgba(90,216,255,.3);margin-bottom:34px;animation:pulse 1.4s infinite}
.bang span{transform:rotate(-45deg);text-shadow:0 0 14px var(--glow)}
.classes{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:18px;width:100%}
.cls{border:1px solid var(--line);padding:14px 12px;background:rgba(6,16,32,.75);text-align:left}
.cls b{display:block;font-size:19px;color:var(--cc);text-shadow:0 0 12px var(--cc)}
.cls span{font-size:12px;color:var(--muted);display:block;margin-top:3px}
.cls em{font-style:normal;font-size:11px;font-weight:700;color:var(--cc);letter-spacing:.12em}
.cls:hover,.cls:focus-visible{border-color:var(--cc);box-shadow:0 0 18px color-mix(in srgb,var(--cc) 40%,transparent)}
.ov.pen{background:radial-gradient(circle at 50% 40%,rgba(70,6,20,.985),rgba(6,0,2,1))}
.ov.pen h2{color:var(--red)}
.siren{width:100%;height:4px;background:repeating-linear-gradient(90deg,var(--red) 0 20px,transparent 20px 40px);animation:siren .6s linear infinite;margin:18px 0;box-shadow:0 0 12px var(--red)}
@keyframes siren{to{background-position:40px 0}}
.chest{width:160px;height:160px;margin:12px auto;cursor:pointer;filter:drop-shadow(0 0 26px var(--rc));animation:hover 2.4s ease-in-out infinite}
.chest.shake{animation:cshake .7s}
@keyframes cshake{10%,30%,50%,70%{transform:rotate(-9deg) scale(1.05)}20%,40%,60%,80%{transform:rotate(9deg) scale(1.1)}100%{transform:scale(1.25);opacity:.2}}
.loot{display:grid;gap:8px;margin-top:10px;width:100%;max-width:280px}
.loot div{border:1px solid var(--rc);padding:11px 14px;font-weight:700;background:rgba(6,16,32,.8);box-shadow:0 0 12px color-mix(in srgb,var(--rc) 30%,transparent);animation:vin .4s both}
.rar{font-weight:700;letter-spacing:.35em;color:var(--rc);text-shadow:0 0 14px var(--rc);font-size:15px}
.skins{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}
.skin{border:1px solid var(--line);padding:14px 6px 10px;text-align:center}
.skin i{display:block;width:46px;height:46px;border-radius:50%;margin:0 auto 7px;border:3px solid var(--sk);box-shadow:0 0 18px var(--sk),inset 0 0 12px var(--sk)}
.skin b{display:block;font-size:13px}
.skin span{font-size:12px;color:var(--gold);font-weight:600}
.skin.on{border-color:var(--sk);box-shadow:0 0 14px color-mix(in srgb,var(--sk) 35%,transparent)}
.skin.on span{color:var(--ink)}
.q.pen{border-color:rgba(255,77,109,.5);background:rgba(50,6,16,.45)}
.q.pen::before{background:var(--red);box-shadow:0 0 10px var(--red)}
.q.pen .qn span:first-child{color:#ffb3c0}
/* rep tracker */
.rt{position:fixed;inset:0;z-index:140;background:#02040a;display:none;overflow:hidden;user-select:none;-webkit-user-select:none}
.rt.show{display:block}
#rtV,#rtC{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.rt.mirror #rtV,.rt.mirror #rtC{transform:scaleX(-1)}
.rt.tap #rtV,.rt.tap #rtC,.rt.tap .rt-gauge{display:none}
.rt-top{position:absolute;top:0;left:0;right:0;z-index:2;padding:calc(12px + env(safe-area-inset-top)) 12px 26px;display:flex;gap:10px;align-items:center;background:linear-gradient(rgba(0,0,0,.8),transparent)}
.rt-chips{display:flex;gap:6px;overflow-x:auto;scrollbar-width:none;padding-bottom:2px}
.rt-chips::-webkit-scrollbar{display:none}
.rt-chips button{flex:none;border:1px solid rgba(255,255,255,.22);background:rgba(4,12,24,.7);padding:7px 12px;font-weight:700;font-size:13px;white-space:nowrap}
.rt-chips button.on{background:var(--aura);color:#03111f;border-color:var(--aura);box-shadow:0 0 14px var(--aura)}
.rt-x{width:38px;height:38px;flex:none;border:1px solid rgba(255,255,255,.22);background:rgba(4,12,24,.7);font-size:16px;font-weight:700}
.rt-count{position:absolute;left:18px;top:calc(84px + env(safe-area-inset-top));z-index:2;display:grid;pointer-events:none}
.rt-count b{font-size:128px;font-weight:700;line-height:.9;color:#fff;text-shadow:0 0 34px var(--aura),0 0 8px var(--aura);font-variant-numeric:tabular-nums;transform-origin:left center}
.rt-count b.pop{animation:rpop .35s}
@keyframes rpop{40%{transform:scale(1.28);color:var(--gold);text-shadow:0 0 40px var(--gold)}}
.rt-count span{font-weight:700;letter-spacing:.32em;color:var(--aura);font-size:14px;text-shadow:0 0 10px var(--aura)}
.rt-count em{font-style:normal;font-size:13px;color:rgba(255,255,255,.7);margin-top:4px;font-weight:600}
.rt-gauge{position:absolute;right:16px;top:calc(270px + env(safe-area-inset-top));height:min(34vh,300px);width:14px;z-index:2;border:1px solid rgba(255,255,255,.3);background:rgba(0,0,0,.45)}
.rt-gauge div{position:absolute;left:0;right:0;bottom:0;background:var(--aura);box-shadow:0 0 14px var(--aura)}
.rt-gauge i{position:absolute;left:-6px;right:-6px;height:2px;background:#fff}
.rt-gauge small{position:absolute;right:20px;font-size:10px;font-weight:700;letter-spacing:.1em;color:rgba(255,255,255,.75);white-space:nowrap;transform:translateY(-50%)}
.rt-mid{position:absolute;inset:0;z-index:2;display:grid;place-items:center;align-content:center;pointer-events:none;text-align:center;padding:0 30px}
.rt-mid .cd{font-size:150px;font-weight:700;color:#fff;line-height:1;text-shadow:0 0 50px var(--aura),0 0 10px var(--aura);animation:rpop .5s}
.rt-mid .msg{font-size:17px;font-weight:600;color:var(--glow);text-shadow:0 0 10px var(--glow);margin-top:10px}
.rt-mid .spin2{width:54px;height:54px;border:3px solid rgba(90,216,255,.2);border-top-color:var(--glow);border-radius:50%;animation:spin 0.9s linear infinite;margin:0 auto}
.taphint{width:220px;height:220px;border-radius:50%;border:2px dashed var(--aura);display:grid;place-items:center;font-weight:700;letter-spacing:.3em;color:var(--aura);text-shadow:0 0 12px var(--aura);box-shadow:0 0 40px color-mix(in srgb,var(--aura) 30%,transparent) inset}
.rt-cue{position:absolute;left:16px;right:16px;bottom:calc(132px + env(safe-area-inset-bottom));z-index:2;text-align:center;font-weight:700;font-size:17px;text-shadow:0 2px 12px #000,0 0 2px #000;pointer-events:none}
.rt-cue.warn{color:var(--gold)}
.rt-cue.good{color:var(--green)}
.rt-bot{position:absolute;left:0;right:0;bottom:0;z-index:2;padding:30px 12px calc(30px + env(safe-area-inset-bottom));display:flex;gap:8px;align-items:center;background:linear-gradient(transparent,rgba(0,0,0,.88) 40%)}
.rt-bot .btn{flex:1;padding:14px 10px}
.rt-bot .seg button{padding:10px 10px}
.rt-ic{width:44px;height:44px;flex:none;border:1px solid rgba(255,255,255,.22);background:rgba(4,12,24,.7);display:grid;place-items:center}
.rt-ic svg{width:20px;height:20px}
.rt-ic.off{opacity:.4}
.rt-priv{position:absolute;bottom:calc(8px + env(safe-area-inset-bottom));left:0;right:0;z-index:2;text-align:center;font-size:11px;color:rgba(255,255,255,.5);pointer-events:none}
.rt-hud{position:absolute;inset:calc(70px + env(safe-area-inset-top)) 10px calc(110px + env(safe-area-inset-bottom));z-index:1;pointer-events:none;
  background:
    linear-gradient(var(--aura),var(--aura)) top left/28px 3px no-repeat,linear-gradient(var(--aura),var(--aura)) top left/3px 28px no-repeat,
    linear-gradient(var(--aura),var(--aura)) top right/28px 3px no-repeat,linear-gradient(var(--aura),var(--aura)) top right/3px 28px no-repeat,
    linear-gradient(var(--aura),var(--aura)) bottom left/28px 3px no-repeat,linear-gradient(var(--aura),var(--aura)) bottom left/3px 28px no-repeat,
    linear-gradient(var(--aura),var(--aura)) bottom right/28px 3px no-repeat,linear-gradient(var(--aura),var(--aura)) bottom right/3px 28px no-repeat;
  filter:drop-shadow(0 0 6px var(--aura))}
.rt-vig{position:absolute;inset:0;z-index:1;pointer-events:none;background:radial-gradient(ellipse at 50% 45%,transparent 45%,rgba(0,0,0,.55) 100%),repeating-linear-gradient(0deg,rgba(255,255,255,.03) 0 1px,transparent 1px 3px)}
.rt-scan{position:absolute;left:10px;right:10px;height:3px;top:20%;z-index:1;pointer-events:none;background:var(--aura);box-shadow:0 0 18px var(--aura),0 0 40px var(--aura);opacity:0}
.rt.scanning .rt-scan{opacity:.9;animation:scanl 1.6s ease-in-out infinite alternate}
@keyframes scanl{from{top:calc(80px + env(safe-area-inset-top))}to{top:calc(100% - 130px)}}
.rt-goal{display:flex;align-items:center;gap:8px;margin-top:8px;width:160px}
.rt-goal div{flex:1;height:5px;background:rgba(255,255,255,.18);overflow:hidden}
.rt-goal div i{display:block;height:100%;background:var(--gold);box-shadow:0 0 10px var(--gold);transition:width .3s}
.rt-goal span{font-size:13px;font-weight:700;color:var(--gold);white-space:nowrap}
.rt-flash{position:absolute;left:0;right:0;top:38%;z-index:3;text-align:center;pointer-events:none;font-weight:700;font-size:54px;letter-spacing:.06em;opacity:0}
.rt-flash.go{animation:rflash .8s ease-out}
.rt-flash small{display:block;font-size:18px;letter-spacing:.2em;margin-top:4px}
@keyframes rflash{0%{opacity:0;transform:scale(1.6)}20%{opacity:1;transform:scale(1)}70%{opacity:1}100%{opacity:0;transform:translateY(-30px)}}
.rt-stats{position:absolute;right:16px;top:calc(84px + env(safe-area-inset-top));z-index:2;text-align:right;display:grid;gap:8px;pointer-events:none}
.rt-stats div{font-size:11px;font-weight:700;letter-spacing:.18em;color:rgba(255,255,255,.6)}
.rt-stats b{display:block;font-size:22px;letter-spacing:0;color:#fff;text-shadow:0 0 12px var(--aura);font-variant-numeric:tabular-nums}
.rt.tap .rt-stats{right:16px}
.rt-done{position:absolute;inset:0;z-index:4;display:none;place-items:center;align-content:center;text-align:center;background:radial-gradient(circle at 50% 40%,color-mix(in srgb,var(--gold) 25%,transparent),rgba(0,0,0,.85) 70%)}
.rt-done.show{display:grid}
.rt-done h3{font-size:44px;font-weight:700;color:var(--gold);text-shadow:0 0 24px var(--gold);letter-spacing:.06em;animation:rpop .5s}
.rt-done p{margin-top:8px;font-size:16px}
.aurora{position:fixed;inset:-20%;z-index:-1;pointer-events:none;overflow:hidden}
.aurora i{position:absolute;border-radius:50%;filter:blur(80px);opacity:.22;will-change:transform}
.aurora i:nth-child(1){width:60vmax;height:60vmax;background:var(--aura);left:10%;top:-10%;animation:drift1 22s ease-in-out infinite alternate}
.aurora i:nth-child(2){width:50vmax;height:50vmax;background:#2f4bff;right:-5%;top:30%;opacity:.16;animation:drift2 28s ease-in-out infinite alternate}
.aurora i:nth-child(3){width:45vmax;height:45vmax;background:#a77bff;left:-10%;bottom:-10%;opacity:.12;animation:drift1 34s ease-in-out infinite alternate-reverse}
@keyframes drift1{to{transform:translate(12vmax,10vmax) scale(1.15)}}
@keyframes drift2{to{transform:translate(-14vmax,-8vmax) scale(.9)}}
.win{backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px)}
.win::after{content:"";position:absolute;left:12%;right:12%;top:0;height:1px;background:linear-gradient(90deg,transparent,color-mix(in srgb,var(--c,var(--glow)) 70%,#fff),transparent);opacity:.6;pointer-events:none}
.ctl .cam{color:var(--aura);border-color:color-mix(in srgb,var(--aura) 50%,transparent)}
.ctl .cam svg{width:18px;height:18px}
.editing .ctl .cam{display:none}
@media (min-width:900px){.app{padding-top:28px}}
@media (prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important}}
</style>
</head>
<body>
<div class="aurora" aria-hidden="true"><i></i><i></i><i></i></div>
<canvas id="fx"></canvas>
<div class="flash" id="flash"></div>

<div class="app">
  <header class="top">
    <div class="brand"><i></i>SIDEQUEST LIFT</div>
    <div class="topr">
      <div class="flame" title="Day streak"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c1 4-3 6-3 10a3 3 0 0 0 6 0c0-1-.5-2-1-3 3 1 5 4 5 7a7 7 0 0 1-14 0c0-6 6-9 7-14z"/></svg><span id="streak">0</span></div>
      <button class="ibtn" id="openSet" aria-label="Settings"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1"/></svg></button>
    </div>
  </header>

  <!-- STATUS -->
  <section class="view on" id="v-status">
    <div class="hero" id="hero">
      <canvas id="embers"></canvas>
      <div class="circle">
        <svg class="spin slow" viewBox="0 0 300 300" aria-hidden="true"><circle class="ring" cx="150" cy="150" r="146" stroke-width="1" stroke-dasharray="1 7" opacity=".9"/></svg>
        <svg class="spin" viewBox="0 0 300 300" aria-hidden="true"><circle class="ring" cx="150" cy="150" r="138" stroke-width="2" stroke-dasharray="40 14 4 14" opacity=".75"/></svg>
        <svg class="spin slow rev" viewBox="0 0 300 300" aria-hidden="true"><defs><path id="rp" d="M150,150 m-131,0 a131,131 0 1,1 262,0 a131,131 0 1,1 -262,0"/></defs><text class="runes"><textPath href="#rp">STR \u25C6 AGI \u25C6 VIT \u25C6 END \u25C6 WIL \u25C6 NO DAYS OFF \u25C6 LEVEL UP \u25C6 STR \u25C6 AGI \u25C6 VIT \u25C6 END \u25C6 WIL \u25C6 GRIND \u25C6 </textPath></text></svg>
        <svg class="spin rev" viewBox="0 0 300 300" aria-hidden="true" style="opacity:.55"><polygon class="ring" points="150,52 248,150 150,248 52,150" stroke-width="1.2"/><polygon class="ring" points="81,81 219,81 219,219 81,219" stroke-width="1.2"/></svg>
        <svg viewBox="0 0 300 300" aria-hidden="true">
          <circle class="xptrack" cx="150" cy="150" r="122"/>
          <circle class="xparc" id="xparc" cx="150" cy="150" r="122" stroke-dasharray="766.5" stroke-dashoffset="766.5"/>
          <circle class="ring" cx="150" cy="150" r="104" stroke-width="1" opacity=".35"/>
        </svg>
        <div class="core"><small>LEVEL</small><b id="lvl">1</b><span><em id="xpNow">0</em> / <span id="xpNeed">100</span> EXP</span></div>
      </div>
      <div class="idrow">
        <div class="rk"><b id="rankL">E</b></div>
        <div class="ident">
          <div class="nm" id="nmTxt">Player</div>
          <button class="tt" id="titleBtn">Rookie \u25BE</button>
          <div class="rkn" id="rankName">E-RANK HUNTER</div>
        </div>
      </div>
      <div class="heroact">
        <button class="pill" id="shareBtn"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 3v12M7 8l5-5 5 5M5 14v6h14v-6"/></svg>Share card</button>
        <button class="pill" id="goTrain"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 9v6M6 6v12M18 6v12M21 9v6M6 12h12"/></svg>Start workout</button>
      </div>
    </div>

    <div class="stack">
      <section class="win" id="statWin">
        <div class="wt">STATUS</div>
        <div class="cp"><span class="sub">Combat power</span><b id="cp">0</b></div>
        <div class="stats" id="stats"></div>
        <div class="pts"><span>Available points</span><b id="pts">0</b></div>
      </section>
      <section class="win" id="invWin">
        <div class="wt">INVENTORY</div>
        <div class="rowh"><span class="goldn"><i></i><span id="goldN">0</span></span><button class="lnk" id="shopBtn">Aura shop</button></div>
        <div class="inv" id="inv"></div>
        <div class="buff" id="buff"><span>DOUBLE XP ACTIVE</span><span id="buffT">60:00</span></div>
      </section>
      <section class="win">
        <div class="wt">TODAY</div>
        <div class="rowh" style="margin-bottom:8px"><span class="sub">Resets in <span class="timer" id="timer2">00:00:00</span></span><button class="lnk" data-go="quests">Open quests</button></div>
        <div class="qbar"><div class="bar"><div id="todayBar" style="width:0"></div></div><span class="n"><b id="todayDone">0</b> / <span id="todayAll">0</span> quests</span></div>
      </section>
    </div>
  </section>

  <!-- QUESTS -->
  <section class="view" id="v-quests">
    <div class="stack">
      <section class="win" id="questWin">
        <div class="wt">DAILY QUEST</div>
        <div class="rowh">
          <span class="sub">Resets in <span class="timer" id="timer">00:00:00</span></span>
          <span><button class="lnk" id="editBtn">Edit</button><button class="lnk" id="addBtn">+ Add</button></span>
        </div>
        <div class="ql" id="ql"></div>
        <form class="addf" id="addf">
          <input class="f grow" id="aName" placeholder="Quest, like 'Squats'" maxlength="32" required>
          <input class="f sm" id="aTarget" type="number" min="1" step="any" placeholder="Goal" required inputmode="decimal">
          <input class="f sm" id="aUnit" placeholder="Unit" maxlength="8">
          <select class="f sm" id="aXp" aria-label="XP reward"><option value="15">15 XP</option><option value="25" selected>25 XP</option><option value="40">40 XP</option><option value="60">60 XP</option></select>
          <button class="btn" type="submit">Add</button>
        </form>
        <div class="bonus" id="bonus"><span>Clear every quest today</span><b>+50 XP bonus</b></div>
      </section>
      <section class="win">
        <div class="wt">QUEST PACKS</div>
        <div class="rowh"><span class="sub">Swap your daily quests for a ready-made set</span></div>
        <div class="packs" id="packs"></div>
      </section>
    </div>
  </section>

  <!-- TRAIN -->
  <section class="view" id="v-train">
    <div class="stack">
      <section class="win" id="trainIdle">
        <div class="wt">TRAINING</div>
        <div class="tot" id="tot"></div>
        <button class="btn big" id="startW">START WORKOUT</button>
        <p class="sub" style="text-align:center;margin-top:10px">Every set earns XP. New records earn +100.</p>
      </section>
      <section class="win" id="trainLive" hidden>
        <div class="wt">SESSION ACTIVE</div>
        <div class="sess"><span class="clock" id="clock">00:00</span><span class="sub"><b id="sVol" style="color:var(--ink)">0</b> volume &nbsp; <b id="sXp" style="color:var(--glow)">+0</b> XP</span></div>
        <form class="logf" id="logf">
          <div class="ex"><label for="exIn">Exercise</label><input class="f" id="exIn" list="exList" placeholder="Bench press" required maxlength="30"></div>
          <div><label for="wIn" id="wLbl">Weight (lb)</label><input class="f" id="wIn" type="number" min="0" step="any" inputmode="decimal" placeholder="0"></div>
          <div><label for="rIn">Reps</label><input class="f" id="rIn" type="number" min="1" step="1" inputmode="numeric" placeholder="8" required></div>
          <button class="btn" type="submit">LOG SET</button>
        </form>
        <button type="button" class="btn ghost" id="camBtn" style="width:100%;margin-top:8px;display:flex;align-items:center;justify-content:center;gap:8px;border-color:var(--aura);color:var(--aura);text-shadow:0 0 8px var(--aura)"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M3 8h4l2-3h6l2 3h4v11H3z"/><circle cx="12" cy="13" r="3.5"/></svg>AUTO-COUNT REPS WITH CAMERA</button>
        <datalist id="exList"></datalist>
        <div class="steppers" id="steppers"></div>
        <div class="rest" id="rest">
          <svg viewBox="0 0 56 56"><circle cx="28" cy="28" r="24" fill="none" stroke="rgba(255,201,74,.15)" stroke-width="4"/><circle id="restArc" cx="28" cy="28" r="24" fill="none" stroke="#ffc94a" stroke-width="4" stroke-linecap="round" stroke-dasharray="150.8" stroke-dashoffset="0" transform="rotate(-90 28 28)"/></svg>
          <div><div class="rt" id="restT">1:30</div><div class="sub">Rest. <b>Next set</b> when it hits zero</div></div>
          <div class="btns"><button id="rAdd" type="button">+30</button><button id="rSkip" type="button">Skip</button></div>
        </div>
        <div id="curSets" style="margin-top:12px"></div>
        <div style="display:flex;gap:8px;margin-top:14px">
          <button class="btn ghost" id="cancelW" style="flex:1">Discard</button>
          <button class="btn gold" id="finishW" style="flex:2">FINISH WORKOUT</button>
        </div>
      </section>
      <section class="win">
        <div class="wt">HISTORY</div>
        <div class="hist" id="hist"></div>
      </section>
    </div>
  </section>

  <!-- RAID -->
  <section class="view" id="v-raid">
    <div class="stack">
      <section class="raid" id="raid">
        <div class="win">
          <div class="wt">DUNGEON BOSS</div>
          <div class="rowh"><span class="sub">Weekly raid</span><span class="sub" id="bossLeft"></span></div>
          <svg class="monster" id="monster" viewBox="0 0 120 120" aria-hidden="true"></svg>
          <div class="bn" id="bossName"></div>
          <p class="bl" id="bossLore"></p>
          <div class="hp" id="hp"></div>
          <div class="hpt"><span>Every XP this week is damage</span><span><b id="hpNow">0</b> / <span id="hpMax">0</span> HP</span></div>
          <div class="cleared">DUNGEON CLEARED &nbsp;+150 XP</div>
        </div>
      </section>
      <section class="win">
        <div class="wt">DAMAGE LOG</div>
        <div class="rowh"><span class="sub">This week</span><span class="sub"><b id="kills" style="color:var(--gold)">0</b> bosses cleared</span></div>
        <div class="dmg" id="dmg"></div>
      </section>
    </div>
  </section>

  <!-- SKILL TREE -->
  <section class="view" id="v-tree">
    <div class="stack">
      <section class="win tree-head" id="treeWin">
        <div class="wt">SKILL TREE</div>
        <div class="rowh" style="margin:0"><span class="sub">Unlock real calisthenics skills. Prove each one to master it.</span><span class="sub" id="treeN"></span></div>
        <div class="br-tabs" id="brTabs"></div>
        <div class="tree-meter"><i id="treeMeter"></i></div>
        <div class="tree" id="tree"></div>
      </section>
    </div>
  </section>
  <!-- PROGRESS -->
  <section class="view" id="v-prog">
    <div class="stack">
      <section class="win">
        <div class="wt">EXP GAINED</div>
        <div class="rowh"><span class="sub">Last 8 weeks</span><span class="sub" id="xpTotal"></span></div>
        <svg class="chart" id="xpChart" viewBox="0 0 320 150" preserveAspectRatio="none"></svg>
      </section>
      <section class="win">
        <div class="wt">BODYWEIGHT</div>
        <form class="bwf" id="bwf"><input class="f" id="bwIn" type="number" min="1" step="0.1" inputmode="decimal" placeholder="Today's weight" required><button class="btn" type="submit">Log</button></form>
        <svg class="chart" id="bwChart" viewBox="0 0 320 150" preserveAspectRatio="none"></svg>
        <div class="rowh" style="margin:8px 0 0"><span class="sub" id="bwNote">Log a few days to see your trend.</span></div>
      </section>
      <section class="win">
        <div class="wt">RECORDS</div>
        <div id="prs"></div>
      </section>
      <section class="win">
        <div class="wt">LOG</div>
        <div class="rowh"><span class="sub">Last 5 weeks</span><span class="sub" id="act"></span></div>
        <div class="hl"><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span></div>
        <div class="heat" id="heat"></div>
      </section>
      <section class="win">
        <div class="wt">ACHIEVEMENTS</div>
        <div class="rowh"><span class="sub">Some unlock titles</span><span class="sub" id="achN"></span></div>
        <div class="ach" id="ach"></div>
      </section>
    </div>
  </section>
</div>

<nav class="nav" aria-label="Sections">
  <div class="in">
    <button data-go="status" class="on"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/></svg>STATUS<i class="dot" id="dotPts"></i></button>
    <button data-go="quests"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M9 6h11M9 12h11M9 18h11"/><path d="M4 6l1 1 2-2M4 12l1 1 2-2M4 18l1 1 2-2"/></svg>QUESTS</button>
    <button data-go="train"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 9v6M6 6v12M18 6v12M21 9v6M6 12h12"/></svg>TRAIN<i class="dot" id="dotLive"></i></button>
    <button data-go="raid"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M4 4l4 5 4-3 4 3 4-5-1 10c-2 4-5 6-7 6s-5-2-7-6z"/><circle cx="9.5" cy="13" r="1" fill="currentColor"/><circle cx="14.5" cy="13" r="1" fill="currentColor"/></svg>RAID</button>
    <button data-go="tree"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="4.5" r="2.2"/><circle cx="5.5" cy="19.5" r="2.2"/><circle cx="18.5" cy="19.5" r="2.2"/><circle cx="12" cy="12" r="2.2"/><path d="M12 6.7v3.1M10.4 13.6l-3.4 4M13.6 13.6l3.4 4"/></svg>SKILLS<i class="dot" id="dotTree"></i></button>
    <button data-go="prog"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></svg>PROGRESS</button>
  </div>
</nav>

<div class="rt" id="rt">
  <video id="rtV" playsinline muted></video>
  <canvas id="rtC"></canvas>
  <div class="rt-vig"></div><div class="rt-hud"></div><div class="rt-scan"></div>
  <div class="rt-top"><button class="rt-x" id="rtX" aria-label="Close rep counter">\u2715</button><div class="rt-chips" id="rtChips"></div></div>
  <div class="rt-count"><b id="rtN">0</b><span>REPS</span><em id="rtSub"></em><div class="rt-goal" id="rtGoal" hidden><div><i id="rtGoalB"></i></div><span id="rtGoalT"></span></div></div>
  <div class="rt-stats"><div>TIME<b id="rtTime">0:00</b></div><div>PACE<b id="rtPace">0</b></div><div>COMBO<b id="rtCombo">0</b></div></div>
  <div class="rt-flash" id="rtFlash"></div>
  <div class="rt-done" id="rtDoneOv"><div><h3>GOAL CLEARED</h3><p id="rtDoneP"></p></div></div>
  <div class="rt-gauge" aria-hidden="true"><div id="rtG"></div><i id="rtGlo"></i><i id="rtGhi"></i><small id="rtLlo"></small><small id="rtLhi"></small></div>
  <div class="rt-mid" id="rtMid"></div>
  <div class="rt-cue" id="rtCue"></div>
  <div class="rt-bot">
    <div class="seg" id="rtMode"><button data-m="cam">CAMERA</button><button data-m="tap">TAP</button></div>
    <button class="rt-ic" id="rtFlip" aria-label="Switch camera"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h11l-3-3M20 17H9l3 3"/></svg></button>
    <button class="rt-ic" id="rtVoice" aria-label="Voice counting"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9v6h4l5 4V5L8 9z"/><path d="M17 9a4 4 0 0 1 0 6M19.5 6.5a8 8 0 0 1 0 11"/></svg></button>
    <button class="btn gold" id="rtDone">LOG 0 REPS</button>
  </div>
  <p class="rt-priv">Runs on your device. Your video is never uploaded.</p>
</div>
<div class="ov" id="awake"><div id="awBody"></div></div>
<div class="ov pen" id="pen"><div>
  <h2>PENALTY QUEST</h2>
  <div class="siren"></div>
  <p class="tw" style="color:#ffb3c0;text-shadow:0 0 10px var(--red)">You failed to clear yesterday's daily quests.</p>
  <p style="margin-top:14px;font-size:16px">Your penalty has been added to today:</p>
  <p style="margin-top:6px;font-size:30px;font-weight:700;color:var(--red);text-shadow:0 0 16px var(--red)">50 BURPEES</p>
  <div class="siren"></div>
  <button class="btn red big" id="penOk" style="max-width:280px">ACCEPT PENALTY</button>
</div></div>
<div class="ov" id="chestOv"><div id="chestBody"></div></div>
<div class="sys" id="sys" hidden><div class="win"><div class="wt" id="sysT">NOTIFICATION</div><div id="sysB"></div></div></div>

<!-- settings -->
<div class="sheet" id="skSheet"><section class="win" id="skWin"><div class="wt" id="skT">SKILL</div><div id="skB"></div></section></div>
<div class="sheet" id="setSheet">
  <div class="win" role="dialog" aria-modal="true" aria-labelledby="setT">
    <div class="wt" id="setT">SETTINGS</div>
    <div class="srow"><span>Name</span><input class="f" id="nameIn" maxlength="18" style="max-width:180px"></div>
    <div class="srow"><span>Weight unit</span><div class="seg" id="unitSeg"><button data-u="lb">LB</button><button data-u="kg">KG</button></div></div>
    <div class="srow"><span>Rest timer</span><div class="seg" id="restSeg"><button data-r="60">1:00</button><button data-r="90">1:30</button><button data-r="120">2:00</button><button data-r="180">3:00</button></div></div>
    <div class="srow"><span>Sound effects</span><div class="seg" id="sndSeg"><button data-s="1">ON</button><button data-s="0">OFF</button></div></div>
    <div class="srow"><span>Backup</span><span style="display:flex;gap:10px"><button class="lnk" id="exportB">Export</button><button class="lnk" id="importB">Import</button><input type="file" id="importF" accept="application/json" hidden></span></div>
    <div class="srow"><span>Awakening intro</span><button class="lnk" id="replayIntro">Replay</button></div>
    <div class="srow"><span>Start over from level 1</span><button class="danger" id="reset">Reset</button></div>
    <div style="margin-top:18px;text-align:right"><button class="btn" id="closeSet">Done</button></div>
  </div>
</div>
<!-- shop -->
<div class="sheet" id="shopSheet">
  <div class="win" role="dialog" aria-modal="true" aria-labelledby="shopT">
    <div class="wt" id="shopT">AURA SHOP</div>
    <div class="rowh"><span class="sub">Change the color of your aura</span><span class="goldn"><i></i><span id="shopGold">0</span></span></div>
    <div class="skins" id="skins"></div>
    <p class="sub" style="margin-top:12px">Earn gold from quests, sets and chests. Legendary chests can unlock auras for free.</p>
    <div style="margin-top:14px;text-align:right"><button class="btn" data-close>Done</button></div>
  </div>
</div>
<!-- titles -->
<div class="sheet" id="titleSheet">
  <div class="win" role="dialog" aria-modal="true" aria-labelledby="titT">
    <div class="wt" id="titT">TITLES</div>
    <p class="sub" style="margin-bottom:12px">Equip a title you have earned.</p>
    <div class="titles" id="titles"></div>
    <div style="margin-top:16px;text-align:right"><button class="btn" data-close>Done</button></div>
  </div>
</div>
<!-- share -->
<div class="sheet" id="shareSheet">
  <div class="win" role="dialog" aria-modal="true" aria-labelledby="shT">
    <div class="wt" id="shT">STATUS CARD</div>
    <img class="cardimg" id="cardImg" alt="Your status card">
    <div style="display:flex;gap:8px"><button class="btn ghost" data-close style="flex:1">Close</button><a class="btn gold" id="cardDl" download="sidequest-status.png" style="flex:2;text-align:center;text-decoration:none">SAVE IMAGE</a></div>
    <p class="sub" style="margin-top:10px;text-align:center">Post it to your story. On iPhone, press and hold the image to save.</p>
  </div>
</div>

<script>
(function(){
const KEY='sidequest-lift-v3';
const STATK=[['STR','#ff4d6d'],['AGI','#5ad8ff'],['VIT','#4fe39a'],['END','#a77bff'],['WIL','#ffc94a']];
const RANKS=[[1,'E','#7f9cff'],[5,'D','#4fe39a'],[10,'C','#5ad8ff'],[20,'B','#a77bff'],[35,'A','#ffc94a'],[50,'S','#ff4d6d']];
const LTITLES=[[1,'Rookie'],[3,'Gym regular'],[5,'Grinder'],[8,'Iron body'],[12,'Steel will'],[16,'Titan'],[22,'Legend'],[30,'Living myth']];
const BOSSES=[
  {n:'The Plateau',hp:500,l:'Same weight, same reps, same results for weeks. It only breaks under a full week of work.',s:0},
  {n:'Couch Golem',hp:450,l:'Feeds on skipped sessions and the word "tomorrow." Show up and it crumbles.',s:1},
  {n:'Leg Day Dodger',hp:520,l:'Grows stronger every time you skip legs. You know what has to happen.',s:2},
  {n:'Sugar Wraith',hp:480,l:'Haunts the snack cupboard. Hit your protein and it starves.',s:3},
  {n:'The 2 AM Scroll',hp:460,l:'Steals your sleep one video at a time. Bed on time hits it hardest.',s:4}
];
const PACKS={
  starter:{n:'Gym starter',d:'Balanced daily habits',q:[['Complete a workout',1,'',60,'workout'],['Push-ups',100,'reps',30],['Protein',150,'g',30],['Water',3,'L',15],['Steps',8000,'',25],['Sleep 8 hours',1,'',30],['Stretch 10 min',1,'',15]]},
  cali:{n:'Calisthenics',d:'Bodyweight grind',q:[['Push-ups',100,'reps',35],['Pull-ups',30,'reps',35],['Squats',100,'reps',30],['Plank',3,'min',20],['Run',3,'km',35],['Sleep 8 hours',1,'',25]]},
  bulk:{n:'Bulk season',d:'Eat, lift, sleep',q:[['Complete a workout',1,'',60,'workout'],['Meals',4,'',30],['Protein',180,'g',35],['Water',3,'L',15],['Sleep 8 hours',1,'',30]]},
  cut:{n:'Cut season',d:'Lean out without losing muscle',q:[['Complete a workout',1,'',60,'workout'],['Steps',10000,'',35],['Protein',170,'g',35],['No snacks after 8 pm',1,'',25],['Water',3,'L',15],['Sleep 8 hours',1,'',25]]}
};
const EXERCISES=['Bench press','Squat','Deadlift','Overhead press','Barbell row','Incline bench','Romanian deadlift','Leg press','Lat pulldown','Pull-ups','Push-ups','Dips','Bicep curl','Lateral raise','Hip thrust','Cable row'];
const BW=/pull|push|chin|dip|sit|crunch|plank/i;
const ACH=[
  {id:'first',t:'First quest',a:'1',c:'#e4f4ff'},
  {id:'perfect',t:'Perfect day',a:'\u2605',c:'#ffc94a'},
  {id:'s3',t:'3 day streak',a:'3',c:'#4fe39a'},
  {id:'s7',t:'7 day streak',a:'7',c:'#5ad8ff',title:'Iron Will'},
  {id:'s30',t:'30 day streak',a:'30',c:'#ffc94a',title:'Unstoppable'},
  {id:'w1',t:'First workout',a:'W',c:'#5ad8ff'},
  {id:'w10',t:'10 workouts',a:'10',c:'#a77bff',title:'Gym Rat'},
  {id:'sets100',t:'100 sets',a:'100',c:'#4fe39a'},
  {id:'pr1',t:'First record',a:'PR',c:'#ff4d6d'},
  {id:'pr5',t:'5 records',a:'5PR',c:'#ff4d6d',title:'Record Breaker'},
  {id:'vol',t:'Heavy session',a:'10K',c:'#ffc94a',title:'Volume Monster'},
  {id:'boss1',t:'Boss cleared',a:'\u2715',c:'#ff4d6d'},
  {id:'boss3',t:'3 bosses',a:'\u27153',c:'#ff4d6d',title:'Dungeon Breaker'},
  {id:'rD',t:'D rank',a:'D',c:'#4fe39a'},
  {id:'rC',t:'C rank',a:'C',c:'#5ad8ff'},
  {id:'rB',t:'B rank',a:'B',c:'#a77bff',title:'Elite Hunter'},
  {id:'sk1',t:'First skill',a:'\u2726',c:'#4fe39a'},
  {id:'sk10',t:'10 skills',a:'10',c:'#5ad8ff',title:'Calisthenics Adept'},
  {id:'sk_push',t:'Push tree',a:'P',c:'#ff4d6d',title:'Push Master'},
  {id:'sk_pull',t:'Pull tree',a:'U',c:'#5ad8ff',title:'Bar Lord'},
  {id:'sk_legs',t:'Legs tree',a:'L',c:'#4fe39a',title:'Pistol Legend'},
  {id:'sk_core',t:'Core tree',a:'C',c:'#a77bff',title:'Dragon Core'}
];
const RAR={common:['COMMON','#c4d2e4'],rare:['RARE','#5ad8ff'],epic:['EPIC','#a77bff'],legendary:['LEGENDARY','#ffc94a']};
const RORDER=['common','rare','epic','legendary'];
const SKINS=[{id:'rank',n:'Rank aura',cost:0},{id:'crimson',n:'Crimson',c:'#ff3b5c',cost:300},{id:'void',n:'Void',c:'#9b5cff',cost:300},{id:'toxic',n:'Toxic',c:'#7dff4a',cost:400},{id:'sakura',n:'Sakura',c:'#ff8fd1',cost:400},{id:'solar',n:'Solar',c:'#ffb020',cost:600},{id:'frost',n:'Frost',c:'#c8f4ff',cost:600},{id:'abyss',n:'Abyss',c:'#3d7bff',cost:800},{id:'inferno',n:'Inferno',c:'#ff6a1a',cost:1000}];
const CLASSES=[{id:'warrior',n:'Warrior',d:'Build raw strength',s:'STR',c:'#ff4d6d',p:'starter'},{id:'assassin',n:'Assassin',d:'Get lean and fast',s:'AGI',c:'#5ad8ff',p:'cut'},{id:'titan',n:'Titan',d:'Bulk up and grow',s:'VIT',c:'#4fe39a',p:'bulk'},{id:'monk',n:'Monk',d:'Master bodyweight',s:'END',c:'#a77bff',p:'cali'}];
const MONSTERS=[
 '<path d="M18 30 L38 48 L60 34 L82 48 L102 30 L96 74 Q60 112 24 74 Z"/><path d="M30 88 L42 98 L50 90 L60 100 L70 90 L78 98 L90 88" fill="none" stroke="#ff4d6d" stroke-width="3"/>',
 '<path d="M24 40 Q60 6 96 40 L104 92 Q60 112 16 92 Z"/><rect x="34" y="84" width="52" height="8"/>',
 '<path d="M10 22 L40 46 L60 20 L80 46 L110 22 L98 70 L80 100 L60 108 L40 100 L22 70 Z"/>',
 '<path d="M60 10 C96 10 104 50 96 74 C90 96 74 112 60 112 C46 112 30 96 24 74 C16 50 24 10 60 10 Z M60 112 L50 120 M60 112 L70 120"/>',
 '<path d="M20 26 L100 26 L100 96 L60 112 L20 96 Z"/><path d="M28 34 L92 34" stroke="#ff4d6d" stroke-width="2"/>'
];

const $=id=>document.getElementById(id);
const pad=n=>String(n).padStart(2,'0');
const key=d=>d.getFullYear()+'-'+pad(d.getMonth()+1)+'-'+pad(d.getDate());
const today=()=>key(new Date());
const addDays=(d,n)=>{const x=new Date(d);x.setDate(x.getDate()+n);return x;};
const weekStart=d=>{const x=new Date(d.getFullYear(),d.getMonth(),d.getDate());x.setDate(x.getDate()-((x.getDay()+6)%7));return x;};
const fmt=n=>(Math.round(n*10)/10).toLocaleString();
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;

function packQuests(p){return PACKS[p].q.map((x,i)=>({id:x[4]||('p'+p+i),name:x[0],target:x[1],unit:x[2],xp:x[3]}));}
function fresh(){return{name:'Player',unit:'lb',sound:true,rest:90,totalXP:0,pack:'starter',quests:packQuests('starter'),prog:{},bonus:{},history:{},alloc:{STR:0,AGI:0,VIT:0,END:0,WIL:0},spent:0,prs:{},prCount:0,sessions:[],cur:null,bw:[],badges:[],title:'',bossWeek:'',bossDefeated:false,kills:0,bestStreak:0,seq:0,gold:0,chests:[],potions:0,shields:0,buffUntil:0,skins:['rank'],skin:'rank',cls:'',awake:false,shieldDays:[],penSeen:'',skills:{},treeSeen:false};}
let S;
try{S=JSON.parse(localStorage.getItem(KEY));}catch(e){S=null;}
if(!S){S=fresh();try{const o=JSON.parse(localStorage.getItem('sidequest-lift-v2'));if(o){['name','unit','totalXP','history','alloc','spent','badges'].forEach(k=>{if(o[k]!=null)S[k]=o[k];});}}catch(e){}}
S=Object.assign(fresh(),S);
const save=()=>{try{localStorage.setItem(KEY,JSON.stringify(S));}catch(e){}};

const need=l=>100+50*(l-1);
function lvl(xp){let l=1,r=xp;while(r>=need(l)){r-=need(l);l++;}return{l,r,n:need(l)};}
const rankOf=l=>{let r=RANKS[0];RANKS.forEach(x=>{if(l>=x[0])r=x;});return r;};
const lvlTitle=l=>{let t=LTITLES[0][1];LTITLES.forEach(x=>{if(l>=x[0])t=x[1];});return t;};
const curTitle=()=>S.title&&availTitles().some(t=>t.t===S.title)?S.title:lvlTitle(lvl(S.totalXP).l);
const points=()=>Math.max(0,(lvl(S.totalXP).l-1)*3-S.spent);
const statVal=k=>10+(S.alloc[k]||0);
const power=()=>Math.round(STATK.reduce((a,[k])=>a+statVal(k),0)*(1+lvl(S.totalXP).l*.12)*10);
const stepOf=q=>q.target<=1?1:q.target>=1000?Math.round(q.target/8):q.target<=5?.5:Math.max(1,Math.round(q.target/10));
const progOf=id=>((S.prog[today()]||{})[id])||0;
const isDone=q=>progOf(q.id)>=q.target;
const allDone=()=>S.quests.length>0&&S.quests.every(isDone);
const active=k=>(S.history[k]||0)>0;
const alive=k=>active(k)||(S.shieldDays||[]).includes(k);
function streak(){let d=new Date();if(!active(key(d)))d=addDays(d,-1);let n=0;while(alive(key(d))){n++;d=addDays(d,-1);}return n;}
const auraColor=()=>{const s=SKINS.find(x=>x.id===S.skin);return s&&s.c?s.c:rankOf(lvl(S.totalXP).l)[2];};
const buffOn=()=>Date.now()<(S.buffUntil||0);
const boost=x=>buffOn()?x:0;
const clsOf=()=>CLASSES.find(c=>c.id===S.cls);
const bossIdx=ws=>Math.floor(ws.getTime()/(7*864e5))%BOSSES.length;
function weekDmg(ws){let s=0;for(let i=0;i<7;i++)s+=S.history[key(addDays(ws,i))]||0;return s;}
const e1=(w,r)=>w>0?w*(1+r/30):r;
const unitFor=ex=>BW.test(ex)?'reps':S.unit;
const vol=sets=>sets.reduce((a,s)=>a+(s.w||0)*s.r,0);
function availTitles(){
  const l=lvl(S.totalXP).l,out=LTITLES.filter(x=>l>=x[0]).map(x=>({t:x[1],src:'Level '+x[0]}));
  ACH.forEach(a=>{if(a.title&&S.badges.includes(a.id))out.push({t:a.title,src:a.t});});
  return out;
}
function gain(x){S.totalXP=Math.max(0,S.totalXP+x);const t=today();S.history[t]=Math.max(0,(S.history[t]||0)+x);}

/* ---------- sound + haptics ---------- */
let AC;
function sfx(kind){
  if(!S.sound)return;
  try{
    AC=AC||new (window.AudioContext||window.webkitAudioContext)();
    if(AC.state==='suspended')AC.resume();
    const M={tick:[[740,.04]],done:[[880,.08],[1320,.18]],lvl:[[392,.09],[523,.09],[659,.09],[784,.09],[1047,.45]],boss:[[196,.12],[147,.35]],pr:[[660,.07],[990,.07],[1320,.28]],down:[[330,.1]],set:[[620,.05],[930,.1]],rest:[[988,.12],[988,.12],[1319,.3]]};
    let t=AC.currentTime;
    (M[kind]||M.tick).forEach(([f,d])=>{
      const o=AC.createOscillator(),g=AC.createGain();
      o.type=kind==='boss'?'sawtooth':'triangle';o.frequency.value=f;
      g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(kind==='tick'?.05:.12,t+.01);g.gain.exponentialRampToValueAtTime(.0008,t+d+.14);
      o.connect(g);g.connect(AC.destination);o.start(t);o.stop(t+d+.16);t+=d*.85;
    });
  }catch(e){}
}
const buzz=p=>{try{navigator.vibrate&&navigator.vibrate(p);}catch(e){}};

/* ---------- particles ---------- */
const sprites={};
function sprite(c){if(sprites[c])return sprites[c];const s=document.createElement('canvas');s.width=s.height=32;const g=s.getContext('2d'),gr=g.createRadialGradient(16,16,0,16,16,16);gr.addColorStop(0,'#ffffff');gr.addColorStop(.18,c);gr.addColorStop(.45,c+'66');gr.addColorStop(1,c+'00');g.fillStyle=gr;g.fillRect(0,0,32,32);return sprites[c]=s;}
const fx=$('fx'),fctx=fx.getContext('2d');let parts=[],fxOn=false;
function sizeFx(){const d=devicePixelRatio||1;fx.width=innerWidth*d;fx.height=innerHeight*d;fctx.setTransform(d,0,0,d,0,0);}
sizeFx();addEventListener('resize',()=>{sizeFx();sizeEmbers();});
function burst(x,y,color,n,spd){
  if(reduced)return;
  for(let i=0;i<n;i++){const a=Math.random()*Math.PI*2,s=(Math.random()*.8+.2)*(spd||7);
    parts.push({x,y,vx:Math.cos(a)*s,vy:Math.sin(a)*s-2,life:1,dec:.012+Math.random()*.02,r:1.5+Math.random()*3,c:Math.random()<.3?'#ffffff':color});}
  if(!fxOn){fxOn=true;requestAnimationFrame(fxLoop);}
}
function fxLoop(){
  fctx.clearRect(0,0,innerWidth,innerHeight);
  parts=parts.filter(p=>p.life>0);
  fctx.globalCompositeOperation='lighter';
  parts.forEach(p=>{p.x+=p.vx;p.y+=p.vy;p.vy+=.12;p.vx*=.985;p.life-=p.dec;
    fctx.globalAlpha=Math.max(0,p.life);const d=p.r*5;fctx.drawImage(sprite(p.c),p.x-d/2,p.y-d/2,d,d);});
  fctx.globalAlpha=1;
  if(parts.length)requestAnimationFrame(fxLoop);else{fxOn=false;fctx.clearRect(0,0,innerWidth,innerHeight);}
}
function burstAt(el,color,n){const r=el.getBoundingClientRect();burst(r.left+r.width/2,r.top+r.height/2,color,n);}

/* embers behind the circle */
const em=$('embers'),ectx=em.getContext('2d');let embers=[],emW=0,emH=0;
function sizeEmbers(){const d=devicePixelRatio||1,r=em.getBoundingClientRect();emW=r.width;emH=r.height;em.width=emW*d;em.height=emH*d;ectx.setTransform(d,0,0,d,0,0);}
function emberLoop(){
  if(!document.hidden&&view==='status'&&!reduced){
    if(!emW)sizeEmbers();
    const c=auraColor(),spr=sprite(c);
    const lv=lvl(S.totalXP).l,max=Math.min(70,18+lv*2);
    if(embers.length<max&&Math.random()<.5)embers.push({x:emW/2+(Math.random()-.5)*emW*.75,y:emH*.62+Math.random()*40,vy:-(.3+Math.random()*.9),vx:(Math.random()-.5)*.3,life:1,r:.8+Math.random()*2.2});
    ectx.clearRect(0,0,emW,emH);ectx.globalCompositeOperation='lighter';
    embers=embers.filter(p=>p.life>0);
    embers.forEach(p=>{p.x+=p.vx+Math.sin(p.y/30)*.2;p.y+=p.vy;p.life-=.006;
      ectx.globalAlpha=p.life*.8;const d=p.r*5;ectx.drawImage(spr,p.x-d/2,p.y-d/2,d,d);});
    ectx.globalAlpha=1;
  }
  requestAnimationFrame(emberLoop);
}

/* ---------- system popups ---------- */
const queue=[];let showing=false;
function notify(o){queue.push(o);if(!showing)nextPop();}
function nextPop(){
  const o=queue.shift();if(!o){showing=false;return;}
  showing=true;const s=$('sys');s.className='sys '+(o.kind||'');s.hidden=false;
  $('sysT').textContent=o.t||'NOTIFICATION';
  $('sysB').innerHTML='<div class="big">'+o.big+'</div>'+(o.lines||[]).map(l=>'<div class="ln">'+l+'</div>').join('');
  const w=s.querySelector('.win');w.style.animation='none';void w.offsetWidth;w.style.animation='';
  if(o.kind==='gold'){const f=$('flash');f.classList.remove('go');void f.offsetWidth;f.classList.add('go');
    document.body.classList.remove('shake');void document.body.offsetWidth;document.body.classList.add('shake');
    burst(innerWidth/2,innerHeight*.28,'#ffc94a',140,11);buzz([60,40,120]);}
  setTimeout(()=>{s.classList.add('out');setTimeout(()=>{s.hidden=true;nextPop();},300);},o.kind==='gold'?2600:1500);
}

/* ---------- rules ---------- */
function syncBoss(silent){
  const ws=weekStart(new Date()),wk=key(ws);
  if(S.bossWeek!==wk){S.bossWeek=wk;S.bossDefeated=false;}
  const b=BOSSES[bossIdx(ws)];
  if(!S.bossDefeated&&weekDmg(ws)>=b.hp){
    S.bossDefeated=true;S.kills++;S.totalXP+=150;S.gold+=100;dropChest(1,'epic',silent);
    if(!silent){sfx('boss');buzz([100,50,100]);notify({t:'DUNGEON CLEARED',big:esc(b.n),lines:['has been defeated','Reward <b>+150 XP</b>'],kind:'red'});}
  }
}
let quietInit=true;
function award(id){if(S.badges.includes(id))return;S.badges.push(id);const a=ACH.find(x=>x.id===id);if(a&&!quietInit)notify({t:'ACHIEVEMENT',big:esc(a.t),lines:a.title?['New title unlocked: <b>'+a.title+'</b>']:['Achievement unlocked']});}
function checkAch(){
  const l=lvl(S.totalXP).l,st=streak();S.bestStreak=Math.max(S.bestStreak||0,st);
  const sets=S.sessions.reduce((a,s)=>a+s.sets.length,0);
  if(Object.keys(S.history).some(active))award('first');
  if(Object.values(S.bonus).some(Boolean))award('perfect');
  if(S.bestStreak>=3)award('s3');if(S.bestStreak>=7)award('s7');if(S.bestStreak>=30)award('s30');
  if(S.sessions.length>=1)award('w1');if(S.sessions.length>=10)award('w10');
  if(sets>=100)award('sets100');
  if(S.prCount>=1)award('pr1');if(S.prCount>=5)award('pr5');
  if(S.sessions.some(s=>vol(s.sets)>=10000))award('vol');
  if(S.kills>=1)award('boss1');if(S.kills>=3)award('boss3');
  const skn=Object.values(S.skills||{}).filter(x=>x.done).length;if(skn>=1)award('sk1');if(skn>=10)award('sk10');
  ['push','pull','legs','core'].forEach(b=>{if(SK.filter(k=>k.b===b).every(k=>skDone(k.id)))award('sk_'+b);});
  if(l>=5)award('rD');if(l>=10)award('rC');if(l>=20)award('rB');
}
function settle(before){
  syncBoss();checkAch();
  const now=lvl(S.totalXP).l;
  if(now>before){
    sfx('lvl');const r=rankOf(now),rb=rankOf(before);
    const lines=['You have reached <b>Level '+now+'</b>','<b>+'+((now-before)*3)+'</b> stat points available'];
    notify({t:'LEVEL UP',big:'LEVEL UP',lines,kind:'gold'});
    if(r[1]!==rb[1])notify({t:'RANK UP',big:'<span style="font-size:110px;line-height:1">'+r[1]+'</span>',lines:['You are now <b>'+r[1]+'-Rank</b>','Your aura has evolved'],kind:'gold'});
    S.gold+=(now-before)*20;
  }
  save();render();
}
function hitBoss(){if(S.bossDefeated)return;const b=$('raid');b.classList.remove('hit');void b.offsetWidth;b.classList.add('hit');}

function setProg(q,val,el){
  const t=today(),before=lvl(S.totalXP).l;
  S.prog[t]=S.prog[t]||{};
  const old=S.prog[t][q.id]||0;val=Math.max(0,Math.min(q.target,Math.round(val*100)/100));
  if(val===old)return;
  const was=old>=q.target,now=val>=q.target;S.prog[t][q.id]=val;
  if(!was&&now){const bx=boost(q.xp),gd=Math.round(q.xp/2);gain(q.xp+bx);S.gold+=gd;sfx('done');buzz(30);if(el)burstAt(el,'#4fe39a',26);notify({t:'QUEST COMPLETE',big:esc(q.name),lines:['Reward <b>+'+(q.xp+bx)+' XP</b>'+(bx?' (2x)':'')+' &nbsp;<b style="color:var(--gold);text-shadow:0 0 10px var(--gold)">+'+gd+' gold</b>']});hitBoss();dropChest(.22);}
  else if(was&&!now){gain(-q.xp);S.gold=Math.max(0,S.gold-Math.round(q.xp/2));sfx('down');}
  else sfx('tick');
  const all=allDone();
  if(all&&!S.bonus[t]){S.bonus[t]=true;gain(50);S.gold+=25;dropChest(1,'rare');notify({t:'DAILY QUEST',big:'ALL CLEAR',lines:['Every quest completed','Bonus <b>+50 XP</b>']});}
  else if(!all&&S.bonus[t]){S.bonus[t]=false;gain(-50);}
  settle(before);
}

/* ---------- training ---------- */
function startWorkout(){if(S.cur)return;S.cur={start:Date.now(),sets:[],xp:0};save();go('train');render();sfx('set');}
function logSet(ex,w,r){
  const before=lvl(S.totalXP).l,name=ex.charAt(0).toUpperCase()+ex.slice(1);
  const u=unitFor(name),score=e1(u==='reps'?0:w,r),best=S.prs[name];
  let xp=6+Math.min(14,Math.round(r/2)),isPr=false;
  if(!best||score>best.e+1e-9){
    isPr=!!best||S.sessions.some(s=>s.sets.some(x=>x.ex===name))||S.cur.sets.some(x=>x.ex===name)?true:false;
    S.prs[name]={e:score,w:u==='reps'?0:w,r,u,d:today()};
    if(isPr){xp+=100;S.prCount++;}
  }
  const set={ex:name,w:u==='reps'?0:w,r,pr:isPr};
  xp+=boost(xp);S.cur.sets.push(set);S.cur.xp+=xp;gain(xp);S.gold+=2;
  if(isPr){sfx('pr');buzz([40,30,80]);notify({t:'NEW RECORD',big:(u==='reps'?r+' reps':fmt(w)+' '+u+' \xD7 '+r),lines:[esc(name),'Reward <b>+100 XP</b>']});burst(innerWidth/2,innerHeight*.3,'#ffc94a',70,9);dropChest(.35);}
  else{sfx('set');buzz(20);}
  hitBoss();startRest(S.rest);
  settle(before);
}
function finishWorkout(){
  const c=S.cur;if(!c)return;
  if(!c.sets.length){S.cur=null;save();render();return;}
  const before=lvl(S.totalXP).l;gain(40);c.xp+=40;
  const mins=Math.max(1,Math.round((Date.now()-c.start)/60000));
  S.sessions.unshift({d:today(),sets:c.sets,xp:c.xp,min:mins});S.cur=null;stopRest();
  const wq=S.quests.find(q=>q.id==='workout');
  notify({t:'SESSION COMPLETE',big:c.sets.length+' sets',lines:['Volume <b>'+fmt(vol(c.sets))+' '+S.unit+'</b> in '+mins+' min','Reward <b>+'+c.xp+' XP</b>']});
  if(wq&&!isDone(wq)){S.prog[today()]=S.prog[today()]||{};setProg(wq,wq.target);}
  settle(before);
}
let restEnd=0,restTotal=90;
function startRest(sec){restTotal=sec;restEnd=Date.now()+sec*1000;$('rest').classList.add('on');tickRest();}
function stopRest(){restEnd=0;$('rest').classList.remove('on');}
function tickRest(){
  if(!restEnd)return;const left=Math.max(0,Math.ceil((restEnd-Date.now())/1000));
  $('restT').textContent=Math.floor(left/60)+':'+pad(left%60);
  $('restArc').setAttribute('stroke-dashoffset',String(150.8*(1-left/restTotal)));
  if(left<=0){stopRest();sfx('rest');buzz([200,100,200]);notify({t:'REST OVER',big:'Next set',lines:['Get back under the bar']});}
}

/* ---------- views ---------- */
let view='status';
function go(v){
  view=v;document.querySelectorAll('.view').forEach(x=>x.classList.toggle('on',x.id==='v-'+v));
  document.querySelectorAll('.nav button').forEach(b=>b.classList.toggle('on',b.dataset.go===v));
  scrollTo({top:0});if(v==='status')setTimeout(sizeEmbers,30);if(v==='tree'&&!S.treeSeen){S.treeSeen=true;save();renderTree();}
}

/* ---------- render ---------- */
function render(){
  const L=lvl(S.totalXP),r=rankOf(L.l);
  S.quests=S.quests.filter(q=>!q.pen||q.day===today());
  document.body.style.setProperty('--aura',auraColor());
  $('lvl').textContent=L.l;$('xpNow').textContent=L.r;$('xpNeed').textContent=L.n;
  $('xparc').setAttribute('stroke-dashoffset',String(766.5*(1-L.r/L.n)));
  $('rankL').textContent=r[1];$('rankName').textContent=r[1]+'-RANK '+(clsOf()?clsOf().n.toUpperCase():'HUNTER');
  $('nmTxt').textContent=S.name;$('titleBtn').textContent=curTitle()+' \u25BE';
  const p=points();$('statWin').classList.toggle('has-pts',p>0);$('pts').textContent=p;$('dotPts').classList.toggle('on',p>0);
  const mx=Math.max(20,...STATK.map(([k])=>statVal(k)));
  $('stats').innerHTML=STATK.map(([k,c])=>'<div class="st" data-s="'+k+'" style="--sc:'+c+'"><span class="k">'+k+'</span><div class="bar"><div style="width:'+(statVal(k)/mx*100)+'%"></div></div><span class="v">'+statVal(k)+'</span><button class="plus" data-add="'+k+'" aria-label="Add a point to '+k+'">+</button></div>').join('');
  $('cp').textContent=power().toLocaleString();
  $('streak').textContent=streak();
  const dn=S.quests.filter(isDone).length;$('todayDone').textContent=dn;$('todayAll').textContent=S.quests.length;
  $('todayBar').style.width=(S.quests.length?dn/S.quests.length*100:0)+'%';

  $('ql').innerHTML=S.quests.map(q=>{
    const v=progOf(q.id),d=v>=q.target,single=q.target===1&&!q.unit;
    const n=single?(d?'Done':'Not done'):'<b>'+fmt(v)+'</b> / '+fmt(q.target)+(q.unit?' '+esc(q.unit):'');
    return '<div class="q'+(d?' done':'')+(q.pen?' pen':'')+'"><div class="qn"><span>'+esc(q.name)+'</span><span class="xp">+'+q.xp+' XP</span></div>'+
      '<div class="ctl">'+(trackFor(q.name)&&!d?'<button class="cam" data-cam="'+q.id+'" aria-label="Count '+esc(q.name)+' with camera">'+CAMSVG+'</button>':'')+'<button class="minus" data-m="'+q.id+'" aria-label="Lower '+esc(q.name)+'">\u2212</button><button class="plusq" data-p="'+q.id+'" aria-label="Add to '+esc(q.name)+'">'+(single||d?'\u2713':'+')+'</button><button class="rm" data-rm="'+q.id+'" aria-label="Remove '+esc(q.name)+'">\u2715</button></div>'+
      '<div class="qbar"><div class="bar"><div style="width:'+(v/q.target*100)+'%"></div></div><span class="n">'+n+'</span></div></div>';
  }).join('')||'<p class="empty">No quests. Pick a pack or add your own.</p>';
  const bg=!!S.bonus[today()];$('bonus').classList.toggle('got',bg);$('bonus').firstElementChild.textContent=bg?'All quests cleared today':'Clear every quest today';
  $('packs').innerHTML=Object.keys(PACKS).map(k=>'<button class="pack'+(S.pack===k?' on':'')+'" data-pack="'+k+'"><b>'+PACKS[k].n+'</b><span>'+PACKS[k].d+'</span></button>').join('');

  // inventory
  $('goldN').textContent=S.gold.toLocaleString();$('shopGold').textContent=S.gold.toLocaleString();
  const best=S.chests.length?[...S.chests].sort((a,b)=>RORDER.indexOf(b)-RORDER.indexOf(a))[0]:'common';
  const slot=(id,ic,name,n,pulse,always)=>'<button class="slot'+(pulse&&n?' pulse':'')+'" data-slot="'+id+'"'+(n||always?'':' disabled')+'>'+(n?'<span class="cnt">\xD7'+n+'</span>':'')+ic+'<b>'+name+'</b></button>';
  $('inv').innerHTML=slot('chest','<svg viewBox="0 0 40 40"><rect x="6" y="17" width="28" height="17" rx="2" fill="#0b1a33" stroke="'+RAR[best][1]+'" stroke-width="2"/><path d="M6 17 Q6 7 20 7 Q34 7 34 17Z" fill="#11264a" stroke="'+RAR[best][1]+'" stroke-width="2"/><rect x="17" y="15" width="6" height="7" fill="'+RAR[best][1]+'"/></svg>','Chest',S.chests.length,true)
    +slot('potion','<svg viewBox="0 0 40 40"><path d="M16 5h8v9l8 14a5 5 0 0 1-4 8H12a5 5 0 0 1-4-8l8-14z" fill="#1d0f3a" stroke="#a77bff" stroke-width="2"/><path d="M11 26h18l3 5a3 3 0 0 1-3 3H11a3 3 0 0 1-3-3z" fill="#a77bff" opacity=".85"/></svg>','2x XP',S.potions,false)
    +slot('shield','<svg viewBox="0 0 40 40"><path d="M20 4l13 5v10c0 9-6 14-13 17C13 33 7 28 7 19V9z" fill="#08261b" stroke="#4fe39a" stroke-width="2"/><path d="M14 20l4 4 8-9" fill="none" stroke="#4fe39a" stroke-width="2.5" stroke-linecap="round"/></svg>','Shield',S.shields,false)
    +slot('aura','<svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="12" fill="none" stroke="'+auraColor()+'" stroke-width="3" style="filter:drop-shadow(0 0 4px '+auraColor()+')"/><circle cx="20" cy="20" r="5" fill="'+auraColor()+'"/></svg>','Aura',0,false,true);
  $('buff').classList.toggle('on',buffOn());
  $('skins').innerHTML=SKINS.map(s=>{const own=S.skins.includes(s.id),c=s.c||rankOf(lvl(S.totalXP).l)[2];return '<button class="skin'+(S.skin===s.id?' on':'')+'" data-sk="'+s.id+'" style="--sk:'+c+'"><i></i><b>'+s.n+'</b><span>'+(S.skin===s.id?'Equipped':own?'Owned':s.cost+' gold')+'</span></button>';}).join('');

  // train
  const live=!!S.cur;$('trainIdle').hidden=live;$('trainLive').hidden=!live;$('dotLive').classList.toggle('on',live);
  $('goTrain').lastChild.textContent=live?'Resume workout':'Start workout';
  const allSets=S.sessions.reduce((a,s)=>a+s.sets.length,0),allVol=S.sessions.reduce((a,s)=>a+vol(s.sets),0);
  $('tot').innerHTML='<div><b>'+S.sessions.length+'</b><span>WORKOUTS</span></div><div><b>'+allSets+'</b><span>SETS</span></div><div><b>'+(allVol>=1e5?Math.round(allVol/1000)+'k':fmt(allVol))+'</b><span>VOLUME</span></div>';
  $('wLbl').textContent='Weight ('+S.unit+')';
  if(live){
    const groups={};S.cur.sets.forEach((s,i)=>{(groups[s.ex]=groups[s.ex]||[]).push([s,i]);});
    $('curSets').innerHTML=Object.keys(groups).map(ex=>'<div class="exg"><h4>'+esc(ex)+'<span>'+groups[ex].length+(groups[ex].length===1?' set':' sets')+'</span></h4><div class="sets">'+groups[ex].map(([s,i])=>'<span class="set'+(s.pr?' pr':'')+'">'+(s.w?fmt(s.w)+' \xD7 ':'')+s.r+(s.w?'':' reps')+(s.pr?' PR':'')+'<button data-del="'+i+'" aria-label="Remove set">\u2715</button></span>').join('')+'</div></div>').join('')||'<p class="empty">Log your first set. Pick an exercise, enter weight and reps.</p>';
    $('sVol').textContent=fmt(vol(S.cur.sets));$('sXp').textContent='+'+S.cur.xp;
  }
  const recent=[...new Set([...(S.cur?S.cur.sets.map(s=>s.ex):[]),...S.sessions.flatMap(s=>s.sets.map(x=>x.ex))])].slice(0,6);
  $('steppers').innerHTML=recent.map(e=>'<button type="button" data-ex="'+esc(e)+'">'+esc(e)+'</button>').join('');
  $('hist').innerHTML=S.sessions.slice(0,8).map(s=>{const ex=[...new Set(s.sets.map(x=>x.ex))];
    return '<div class="h"><div><b>'+esc(ex.slice(0,3).join(', '))+(ex.length>3?' +'+(ex.length-3):'')+'</b><span>'+new Date(s.d+'T12:00').toLocaleDateString(undefined,{weekday:'short',month:'short',day:'numeric'})+' &nbsp; '+s.sets.length+(s.sets.length===1?' set':' sets')+' &nbsp; '+(s.min||0)+' min</span></div><em>+'+s.xp+' XP</em></div>';}).join('')||'<p class="empty">No workouts yet. Your sessions show up here.</p>';

  // raid
  const ws=weekStart(new Date()),b=BOSSES[bossIdx(ws)],dmg=weekDmg(ws),left=S.bossDefeated?0:Math.max(0,b.hp-dmg);
  $('bossName').textContent=b.n;$('bossLore').textContent=b.l;
  $('monster').innerHTML='<defs><linearGradient id="mg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3a0d1a"/><stop offset="1" stop-color="#14040a"/></linearGradient></defs><g fill="url(#mg)" stroke="#ff4d6d" stroke-width="2.5" stroke-linejoin="round">'+MONSTERS[b.s]+'</g><ellipse cx="44" cy="60" rx="9" ry="4.5" fill="#ff4d6d" transform="rotate(14 44 60)"/><ellipse cx="76" cy="60" rx="9" ry="4.5" fill="#ff4d6d" transform="rotate(-14 76 60)"/><ellipse cx="44" cy="60" rx="3" ry="2" fill="#fff"/><ellipse cx="76" cy="60" rx="3" ry="2" fill="#fff"/>';
  $('hpNow').textContent=left;$('hpMax').textContent=b.hp;
  const hon=Math.ceil(left/b.hp*25);$('hp').innerHTML=Array.from({length:25},(_,i)=>'<i class="'+(i<hon?'on':'')+'"></i>').join('');
  $('raid').classList.toggle('dead',S.bossDefeated);
  const dl=7-((new Date().getDay()+6)%7);$('bossLeft').textContent=dl===1?'Final day':dl+' days left';
  $('kills').textContent=S.kills;
  const days=Array.from({length:7},(_,i)=>{const k=key(addDays(ws,i));return[k,S.history[k]||0];}),dm=Math.max(60,...days.map(d=>d[1]));
  $('dmg').innerHTML=days.map(([k,x],i)=>'<div class="'+(k===today()?'t':'')+'"><i style="height:'+(x/dm*100)+'%"></i><span>'+'MTWTFSS'[i]+'</span></div>').join('');

  // progress
  const wk=[];for(let i=7;i>=0;i--){const s=addDays(ws,-7*i);let x=0;for(let j=0;j<7;j++)x+=S.history[key(addDays(s,j))]||0;wk.push(x);}
  $('xpTotal').textContent=S.totalXP.toLocaleString()+' total';
  const wm=Math.max(100,...wk);
  $('xpChart').innerHTML=wk.map((x,i)=>{const h=x/wm*120,bx=8+i*39;return '<rect x="'+bx+'" y="'+(130-h)+'" width="28" height="'+Math.max(1,h)+'" fill="'+(i===7?'#5ad8ff':'rgba(90,216,255,.35)')+'"/>'+(x?'<text x="'+(bx+14)+'" y="'+Math.max(11,124-h)+'" fill="'+(h>110?'#03111f':'#6d86a0')+'" font-size="10" text-anchor="middle">'+x+'</text>':'');}).join('')+'<line x1="0" y1="130.5" x2="320" y2="130.5" stroke="rgba(90,216,255,.25)"/><text x="4" y="146" fill="#6d86a0" font-size="10">8 wks ago</text><text x="316" y="146" fill="#6d86a0" font-size="10" text-anchor="end">This week</text>';
  const bw=S.bw.slice(-30);
  if(bw.length>=2){const vs=bw.map(x=>x.v),lo=Math.min(...vs),hi=Math.max(...vs),rg=Math.max(1,hi-lo);
    const pts=bw.map((x,i)=>[10+i*(300/(bw.length-1)),15+(1-(x.v-lo)/rg)*105]);
    $('bwChart').innerHTML='<polyline points="'+pts.map(p=>p.join(',')).join(' ')+'" fill="none" stroke="#a77bff" stroke-width="2.5" stroke-linejoin="round" style="filter:drop-shadow(0 0 6px #a77bff)"/>'+pts.map(p=>'<circle cx="'+p[0]+'" cy="'+p[1]+'" r="2.5" fill="#e4f4ff"/>').join('')+'<text x="4" y="146" fill="#6d86a0" font-size="10">Low '+fmt(lo)+'</text><text x="316" y="146" fill="#6d86a0" font-size="10" text-anchor="end">High '+fmt(hi)+'</text>';
    const ch=bw[bw.length-1].v-bw[0].v;$('bwNote').innerHTML='Now <b style="color:var(--ink)">'+fmt(bw[bw.length-1].v)+' '+S.unit+'</b>, '+(ch>=0?'+':'')+fmt(ch)+' since '+new Date(bw[0].d+'T12:00').toLocaleDateString(undefined,{month:'short',day:'numeric'});}
  else{$('bwChart').innerHTML='<text x="160" y="80" fill="#6d86a0" font-size="12" text-anchor="middle">Your trend line appears after 2 entries</text>';$('bwNote').textContent=bw.length?'Logged '+fmt(bw[0].v)+' '+S.unit+'. Keep going.':'Log a few days to see your trend.';}
  const ks=Object.keys(S.prs);
  $('prs').innerHTML=ks.length?ks.sort((a,c)=>S.prs[c].e-S.prs[a].e).map(n=>{const p=S.prs[n];return '<div class="pr"><span>'+esc(n)+'</span><small>'+(p.u==='reps'?'Best set':fmt(p.w)+' \xD7 '+p.r+'  \xB7  est. 1RM')+'</small><b>'+(p.u==='reps'?p.r+'<em>reps</em>':fmt(p.e)+'<em>'+esc(p.u)+'</em>')+'</b></div>';}).join(''):'<p class="empty">Records fill in automatically as you log sets.</p>';
  const st=addDays(ws,-28),t=today(),nw=new Date();let h='',a=0;
  for(let i=0;i<35;i++){const d=addDays(st,i),k=key(d),x=S.history[k]||0;if(x>0)a++;const c=x<=0?'':x<60?'l1':x<120?'l2':x<200?'l3':'l4';
    h+='<i class="'+c+(k===t?' t':'')+(d>nw&&k!==t?' fu':'')+'" title="'+k+': '+x+' XP"></i>';}
  $('heat').innerHTML=h;$('act').textContent=a+' active days';
  $('ach').innerHTML=ACH.map(x=>'<div class="a'+(S.badges.includes(x.id)?' got':'')+'" title="'+(x.title?'Unlocks title: '+x.title:'')+'"><div class="h" style="--bc:'+x.c+'">'+x.a+'</div><div class="bt">'+x.t+'</div></div>').join('');
  $('achN').textContent=S.badges.length+' / '+ACH.length;

  renderTree();
  // settings
  $('nameIn').value=document.activeElement===$('nameIn')?$('nameIn').value:S.name;
  document.querySelectorAll('#unitSeg button').forEach(x=>x.classList.toggle('on',x.dataset.u===S.unit));
  document.querySelectorAll('#restSeg button').forEach(x=>x.classList.toggle('on',+x.dataset.r===S.rest));
  document.querySelectorAll('#sndSeg button').forEach(x=>x.classList.toggle('on',(x.dataset.s==='1')===!!S.sound));
}

/* ---------- share card ---------- */
async function makeCard(){
  try{await document.fonts.load('700 100px "Chakra Petch"');}catch(e){}
  const W=1080,H=1920,c=document.createElement('canvas');c.width=W;c.height=H;const x=c.getContext('2d');
  const L=lvl(S.totalXP),r=rankOf(L.l),au=auraColor(),F=(w,s)=>w+' '+s+'px "Chakra Petch", sans-serif';
  x.fillStyle='#03050b';x.fillRect(0,0,W,H);
  const g=x.createRadialGradient(540,700,50,540,700,900);g.addColorStop(0,au+'55');g.addColorStop(1,'transparent');x.fillStyle=g;x.fillRect(0,0,W,H);
  x.strokeStyle='rgba(90,216,255,.06)';x.lineWidth=1;for(let i=0;i<W;i+=60){x.beginPath();x.moveTo(i,0);x.lineTo(i,H);x.stroke();}for(let j=0;j<H;j+=60){x.beginPath();x.moveTo(0,j);x.lineTo(W,j);x.stroke();}
  x.textAlign='center';x.fillStyle='#e4f4ff';x.font=F(700,34);x.letterSpacing='10px';x.fillText('SIDEQUEST LIFT',540,130);x.letterSpacing='0px';
  x.fillStyle='#6d86a0';x.font=F(600,30);x.fillText('STATUS WINDOW',540,180);
  const cx=540,cy=720;x.shadowColor=au;x.shadowBlur=30;x.strokeStyle=au;
  x.lineWidth=3;x.setLineDash([80,28,8,28]);x.beginPath();x.arc(cx,cy,400,0,7);x.stroke();
  x.setLineDash([2,16]);x.lineWidth=2;x.beginPath();x.arc(cx,cy,430,0,7);x.stroke();x.setLineDash([]);
  x.globalAlpha=.5;x.lineWidth=2;x.beginPath();x.moveTo(cx,cy-300);x.lineTo(cx+300,cy);x.lineTo(cx,cy+300);x.lineTo(cx-300,cy);x.closePath();x.stroke();
  x.strokeRect(cx-212,cy-212,424,424);x.globalAlpha=1;
  x.lineWidth=18;x.strokeStyle='rgba(255,255,255,.08)';x.shadowBlur=0;x.beginPath();x.arc(cx,cy,350,0,7);x.stroke();
  x.strokeStyle=au;x.shadowBlur=40;x.lineCap='round';x.beginPath();x.arc(cx,cy,350,-Math.PI/2,-Math.PI/2+Math.PI*2*Math.max(.02,L.r/L.n));x.stroke();
  x.fillStyle=au;x.font=F(700,40);x.shadowBlur=20;x.letterSpacing='18px';x.fillText('LEVEL',cx+9,cy-150);x.letterSpacing='0px';
  x.fillStyle='#ffffff';x.shadowBlur=60;x.font=F(700,330);x.fillText(String(L.l),cx,cy+110);
  x.shadowBlur=0;x.fillStyle='#6d86a0';x.font=F(600,34);x.fillText(L.r+' / '+L.n+' EXP',cx,cy+190);
  // rank hex
  const hx=(px,py,R)=>{x.beginPath();for(let i=0;i<6;i++){const a=Math.PI/3*i-Math.PI/2;x[i?'lineTo':'moveTo'](px+R*Math.cos(a),py+R*Math.sin(a));}x.closePath();};
  x.shadowColor=au;x.shadowBlur=30;hx(540,1260,90);x.fillStyle=au;x.fill();hx(540,1260,84);x.fillStyle='#071226';x.fill();
  x.fillStyle=au;x.font=F(700,100);x.fillText(r[1],540,1296);x.shadowBlur=0;
  x.fillStyle='#e4f4ff';x.font=F(700,70);x.fillText(S.name.slice(0,18),540,1440);
  x.fillStyle='#ffc94a';x.shadowColor='#ffc94a';x.shadowBlur=20;x.font=F(700,40);x.fillText(curTitle().toUpperCase(),540,1500);x.shadowBlur=0;
  // stats row
  const sx=[160,350,540,730,920];
  STATK.forEach(([k,col],i)=>{x.fillStyle='#6d86a0';x.font=F(700,30);x.fillText(k,sx[i],1610);x.fillStyle=col;x.shadowColor=col;x.shadowBlur=18;x.font=F(700,64);x.fillText(String(statVal(k)),sx[i],1680);x.shadowBlur=0;});
  x.strokeStyle='rgba(90,216,255,.25)';x.lineWidth=2;x.beginPath();x.moveTo(120,1730);x.lineTo(960,1730);x.stroke();
  x.fillStyle='#e4f4ff';x.font=F(600,34);
  x.fillText('Power '+power().toLocaleString()+'     Streak '+streak()+'d     Workouts '+S.sessions.length,540,1795);
  x.fillStyle='#6d86a0';x.font=F(600,28);x.fillText(r[1]+'-RANK '+(clsOf()?clsOf().n.toUpperCase():'HUNTER'),540,1860);
  return c;
}
async function openShare(){
  const c=await makeCard();const url=c.toDataURL('image/png');
  $('cardImg').src=url;$('cardDl').href=url;$('shareSheet').classList.add('show');
}

/* ---------- events ---------- */
document.querySelectorAll('[data-go]').forEach(b=>b.addEventListener('click',()=>go(b.dataset.go)));
$('ql').addEventListener('click',e=>{
  const b=e.target.closest('button');if(!b)return;
  if(b.dataset.cam){const q=S.quests.find(x=>x.id===b.dataset.cam);if(q)openTracker({from:'quest',id:q.id,name:q.name});return;}
  if(b.dataset.rm){S.quests=S.quests.filter(q=>q.id!==b.dataset.rm);S.pack='';save();render();return;}
  const id=b.dataset.p||b.dataset.m,q=S.quests.find(x=>x.id===id);if(!q)return;
  const v=progOf(q.id),single=q.target===1&&!q.unit;
  if(b.dataset.p&&v>=q.target){if(single)setProg(q,0,b);return;}
  setProg(q,b.dataset.p?v+stepOf(q):v-stepOf(q),b);
});
$('packs').addEventListener('click',e=>{const b=e.target.closest('[data-pack]');if(!b)return;const k=b.dataset.pack;
  if(k===S.pack)return;if(!confirm('Switch to the '+PACKS[k].n+' pack? Your daily quests will be replaced. XP you earned stays.'))return;
  S.pack=k;S.quests=packQuests(k);save();render();notify({t:'QUEST PACK',big:PACKS[k].n,lines:['New daily quests loaded']});});
$('stats').addEventListener('click',e=>{const b=e.target.closest('[data-add]');if(!b||points()<=0)return;
  const k=b.dataset.add;S.alloc[k]=(S.alloc[k]||0)+1;S.spent++;sfx('tick');buzz(15);save();render();
  const el=document.querySelector('.st[data-s="'+k+'"]');if(el){el.classList.add('bump');burstAt(el.querySelector('.v'),STATK.find(s=>s[0]===k)[1],14);}});
$('editBtn').onclick=()=>{const w=$('questWin');w.classList.toggle('editing');$('editBtn').textContent=w.classList.contains('editing')?'Done':'Edit';};
$('addBtn').onclick=()=>{$('addf').classList.toggle('open');if($('addf').classList.contains('open'))$('aName').focus();};
$('addf').onsubmit=e=>{e.preventDefault();const n=$('aName').value.trim(),tg=parseFloat($('aTarget').value);if(!n||!(tg>0))return;
  S.quests.push({id:'q'+Date.now()+(S.seq++),name:n,target:tg,unit:$('aUnit').value.trim(),xp:+$('aXp').value});S.pack='';
  $('aName').value='';$('aTarget').value='';$('aUnit').value='';$('addf').classList.remove('open');save();render();};
$('startW').onclick=startWorkout;
$('goTrain').onclick=()=>{if(S.cur)go('train');else startWorkout();};
$('logf').onsubmit=e=>{e.preventDefault();const ex=$('exIn').value.trim(),r=parseInt($('rIn').value,10),w=parseFloat($('wIn').value)||0;
  if(!ex||!(r>0)||!S.cur)return;logSet(ex,w,r);};
$('steppers').addEventListener('click',e=>{const b=e.target.closest('[data-ex]');if(!b)return;$('exIn').value=b.dataset.ex;
  const last=S.cur&&[...S.cur.sets].reverse().find(s=>s.ex===b.dataset.ex);const p=S.prs[b.dataset.ex];
  if(last){$('wIn').value=last.w||'';$('rIn').value=last.r;}else if(p){$('wIn').value=p.w||'';$('rIn').value=p.r;}$('rIn').focus();});
$('curSets').addEventListener('click',e=>{const b=e.target.closest('[data-del]');if(!b||!S.cur)return;
  const s=S.cur.sets[+b.dataset.del];if(!s)return;const xp=6+Math.min(14,Math.round(s.r/2))+(s.pr?100:0);
  if(s.pr)S.prCount=Math.max(0,S.prCount-1);S.cur.sets.splice(+b.dataset.del,1);S.cur.xp=Math.max(0,S.cur.xp-xp);gain(-xp);save();render();});
$('finishW').onclick=finishWorkout;
$('cancelW').onclick=()=>{if(!S.cur)return;if(S.cur.sets.length&&!confirm('Discard this workout? XP from its sets stays, but it will not be saved to history.'))return;S.cur=null;stopRest();save();render();};
$('rAdd').onclick=()=>{restEnd+=30000;restTotal+=30;tickRest();};
$('rSkip').onclick=stopRest;
$('bwf').onsubmit=e=>{e.preventDefault();const v=parseFloat($('bwIn').value);if(!(v>0))return;
  const t=today();S.bw=S.bw.filter(x=>x.d!==t);S.bw.push({d:t,v});S.bw.sort((a,b)=>a.d<b.d?-1:1);$('bwIn').value='';sfx('tick');save();render();};
$('titleBtn').onclick=()=>{const cur=curTitle(),av=availTitles();
  const locked=ACH.filter(a=>a.title&&!S.badges.includes(a.id));
  $('titles').innerHTML=av.map(t=>'<button data-t="'+esc(t.t)+'" class="'+(t.t===cur?'on':'')+'">'+esc(t.t)+'<span>'+esc(t.src)+'</span></button>').join('')+locked.map(a=>'<button disabled>'+esc(a.title)+'<span>Locked: '+esc(a.t)+'</span></button>').join('');
  $('titleSheet').classList.add('show');};
$('titles').addEventListener('click',e=>{const b=e.target.closest('[data-t]');if(!b)return;S.title=b.dataset.t;sfx('tick');save();render();$('titleBtn').click();});
$('shareBtn').onclick=openShare;
document.querySelectorAll('.sheet').forEach(s=>s.addEventListener('click',e=>{if(e.target===s||e.target.closest('[data-close]'))s.classList.remove('show');}));
$('openSet').onclick=()=>$('setSheet').classList.add('show');
$('closeSet').onclick=()=>$('setSheet').classList.remove('show');
$('nameIn').addEventListener('input',e=>{S.name=e.target.value.trim()||'Player';save();render();});
$('unitSeg').onclick=e=>{const b=e.target.closest('button');if(b){S.unit=b.dataset.u;save();render();}};
$('restSeg').onclick=e=>{const b=e.target.closest('button');if(b){S.rest=+b.dataset.r;save();render();}};
$('sndSeg').onclick=e=>{const b=e.target.closest('button');if(b){S.sound=b.dataset.s==='1';save();render();if(S.sound)sfx('done');}};
$('exportB').onclick=()=>{const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([JSON.stringify(S)],{type:'application/json'}));a.download='sidequest-lift-backup-'+today()+'.json';a.click();};
$('importB').onclick=()=>$('importF').click();
$('importF').onchange=e=>{const f=e.target.files[0];if(!f)return;const rd=new FileReader();rd.onload=()=>{try{const d=JSON.parse(rd.result);if(typeof d.totalXP!=='number')throw 0;S=Object.assign(fresh(),d);save();render();notify({t:'BACKUP',big:'Restored',lines:['Your progress is back']});}catch(err){notify({t:'BACKUP',big:'Wrong file',lines:['Pick a Sidequest Lift backup file']});}};rd.readAsText(f);e.target.value='';};
$('reset').onclick=()=>{if(confirm('Reset everything back to level 1? XP, workouts, records and achievements will be cleared.')){S=fresh();stopRest();save();render();$('setSheet').classList.remove('show');}};
document.addEventListener('keydown',e=>{if(e.key==='Escape')document.querySelectorAll('.sheet.show').forEach(s=>s.classList.remove('show'));});

/* ---------- loot ---------- */
function rollRar(min){const r=Math.random();let k=r<.03?'legendary':r<.14?'epic':r<.42?'rare':'common';if(min&&RORDER.indexOf(k)<RORDER.indexOf(min))k=min;return k;}
function dropChest(ch,min,quiet){if(Math.random()>ch)return;const k=rollRar(min);S.chests.push(k);if(!quiet)notify({t:'LOOT DROP',big:RAR[k][0]+' CHEST',lines:['Open it from your inventory']});}
const chestSvg='<svg class="chest" viewBox="0 0 120 120" role="button" aria-label="Open chest"><rect x="16" y="54" width="88" height="50" rx="4" fill="#0b1a33" stroke="var(--rc)" stroke-width="3"/><path d="M16 54 Q16 22 60 22 Q104 22 104 54 Z" fill="#11264a" stroke="var(--rc)" stroke-width="3"/><path d="M16 70 H104 M38 24 V104 M82 24 V104" stroke="var(--rc)" stroke-width="2" opacity=".45"/><rect x="51" y="46" width="18" height="22" rx="2" fill="var(--rc)"/><circle cx="60" cy="56" r="3" fill="#03050b"/></svg>';
function rollLoot(k){const out=[],rnd=(a,b)=>a+Math.floor(Math.random()*(b-a+1));
  const g={common:rnd(20,40),rare:rnd(60,90),epic:rnd(150,220),legendary:rnd(300,420)}[k];S.gold+=g;out.push('+'+g+' gold');
  if(k!=='common'||Math.random()<.25){S.potions++;out.push('Double XP potion');}
  if(k==='epic'||k==='legendary'){S.shields++;out.push('Streak shield');}
  if(k==='legendary'){const locked=SKINS.filter(s=>!S.skins.includes(s.id));if(locked.length){const s=locked[Math.floor(Math.random()*locked.length)];S.skins.push(s.id);out.push(s.n+' aura unlocked');}else{S.gold+=200;out.push('+200 bonus gold');}}
  return out;}
function openChest(){
  if(!S.chests.length)return;S.chests.sort((a,b)=>RORDER.indexOf(b)-RORDER.indexOf(a));const k=S.chests.shift();save();render();
  const ov=$('chestOv');ov.style.setProperty('--rc',RAR[k][1]);
  $('chestBody').innerHTML='<div class="rar">'+RAR[k][0]+' CHEST</div>'+chestSvg+'<p class="sub" id="chestHint">Tap the chest to open it</p><div class="loot" id="loot"></div>';
  ov.classList.add('show');sfx('tick');let opened=false;const c=ov.querySelector('.chest');
  c.onclick=()=>{if(opened)return;opened=true;c.classList.add('shake');sfx('tick');buzz([30,30,30,30,80]);
    setTimeout(()=>{const rw=rollLoot(k),r=c.getBoundingClientRect();c.classList.remove('shake');c.style.animation='none';c.innerHTML='<polygon points="60,62 10,0 110,0" fill="var(--rc)" opacity=".22"/><polygon points="60,62 35,0 85,0" fill="var(--rc)" opacity=".3"/><rect x="16" y="54" width="88" height="50" rx="4" fill="#0b1a33" stroke="var(--rc)" stroke-width="3"/><ellipse cx="60" cy="56" rx="40" ry="7" fill="var(--rc)"/><path d="M18 46 Q22 12 64 6 Q98 4 104 30 Z" fill="#11264a" stroke="var(--rc)" stroke-width="3" transform="rotate(-18 18 46)"/><path d="M16 70 H104" stroke="var(--rc)" stroke-width="2" opacity=".45"/>';burst(r.left+r.width/2,r.top+r.height/2,RAR[k][1],k==='legendary'?220:k==='epic'?140:80,11);sfx(k==='common'?'done':'lvl');
      if(k==='legendary'||k==='epic'){const f=$('flash');f.classList.remove('go');void f.offsetWidth;f.classList.add('go');}
      $('chestHint').textContent='';$('loot').innerHTML=rw.map((x,i)=>'<div style="animation-delay:'+(i*.18)+'s">'+x+'</div>').join('')+'<button class="btn big" id="lootOk" style="margin-top:6px;animation:vin .4s '+(rw.length*.18)+'s both">COLLECT</button>';
      $('lootOk').onclick=()=>{ov.classList.remove('show');if(S.chests.length)notify({t:'INVENTORY',big:S.chests.length+' more '+(S.chests.length===1?'chest':'chests'),lines:['Waiting in your inventory']});};
      save();render();},700);};
}
$('inv').addEventListener('click',e=>{const b=e.target.closest('[data-slot]');if(!b)return;const s=b.dataset.slot;
  if(s==='chest')openChest();
  else if(s==='potion'&&S.potions>0){S.potions--;S.buffUntil=Math.max(Date.now(),S.buffUntil||0)+3600e3;sfx('pr');buzz([40,30,80]);burstAt(b,'#a77bff',50);notify({t:'BUFF ACTIVE',big:'DOUBLE XP',lines:['Every quest and set earns <b>2x XP</b> for 60 min']});save();render();}
  else if(s==='shield')notify({t:'STREAK SHIELD',big:S.shields+' ready',lines:['Used automatically if you miss a day','Your streak survives']});
  else if(s==='aura')$('shopSheet').classList.add('show');});
$('shopBtn').onclick=()=>$('shopSheet').classList.add('show');
$('skins').addEventListener('click',e=>{const b=e.target.closest('[data-sk]');if(!b)return;const s=SKINS.find(x=>x.id===b.dataset.sk);
  if(S.skins.includes(s.id)){S.skin=s.id;sfx('tick');}
  else if(S.gold>=s.cost){S.gold-=s.cost;S.skins.push(s.id);S.skin=s.id;sfx('lvl');burstAt(b,s.c,70);notify({t:'AURA UNLOCKED',big:s.n,lines:['Your aura has changed']});}
  else{sfx('down');notify({t:'AURA SHOP',big:'Not enough gold',lines:['You need <b style="color:var(--gold)">'+(s.cost-S.gold)+'</b> more gold']});return;}
  save();render();});

/* ---------- penalty + shields ---------- */
function checkMissed(){
  const t=today();if(S.penSeen===t||!S.awake)return;S.penSeen=t;save();
  const y=key(addDays(new Date(),-1)),y2=key(addDays(new Date(),-2));
  const veteran=Object.keys(S.history).some(k=>k<t&&active(k));if(!veteran)return;
  if(!active(y)&&!S.shieldDays.includes(y)&&alive(y2)&&S.shields>0){S.shields--;S.shieldDays.push(y);save();render();sfx('pr');notify({t:'STREAK SHIELD',big:'Streak saved',lines:['A shield absorbed yesterday\\'s missed day']});return;}
  if(!S.bonus[y]&&!S.shieldDays.includes(y)){$('pen').classList.add('show');sfx('boss');buzz([200,100,200,100,300]);}
}
$('penOk').onclick=()=>{const id='pen'+today();if(!S.quests.some(q=>q.id===id))S.quests.unshift({id,name:'Penalty: burpees',target:50,unit:'reps',xp:20,pen:true,day:today()});
  $('pen').classList.remove('show');save();render();go('quests');};

/* ---------- awakening ---------- */
function awaken(){
  const ov=$('awake'),b=$('awBody');ov.classList.add('show');
  b.innerHTML='<div class="bang"><span>!</span></div><h2 style="color:var(--glow);font-size:22px">NEW NOTIFICATION</h2><p class="sub" style="margin-top:8px">Tap anywhere to open</p>';
  ov.onclick=()=>{ov.onclick=null;start();};
  function start(){
    const lines=['[ SYSTEM ]','Scanning candidate...','Physical requirements: met.','You have been selected as a Player.'];
    b.innerHTML='<div id="tw" style="display:grid;gap:12px;width:100%"></div>';let i=0;const tw=$('tw');
    (function typeLine(){
      if(i>=lines.length){b.insertAdjacentHTML('beforeend','<button class="btn big" id="awAcc" style="margin-top:30px;max-width:280px;animation:vin .4s both">ACCEPT</button><p class="sub" style="margin-top:10px">Declining is not an option.</p>');$('awAcc').onclick=step2;return;}
      const el=document.createElement('div');el.className='tw';tw.appendChild(el);const s=lines[i++];let j=0;
      const iv=setInterval(()=>{el.textContent=s.slice(0,++j);if(j%2)sfx('tick');if(j>=s.length){clearInterval(iv);setTimeout(typeLine,380);}},reduced?1:36);
    })();
  }
  function step2(){sfx('done');b.innerHTML='<h2 style="color:var(--glow)">NAME YOUR PLAYER</h2><input class="f" id="awName" maxlength="18" placeholder="Your name" style="margin-top:20px;width:100%;max-width:300px;text-align:center;font-size:20px"><button class="btn big" id="awN" style="margin-top:16px;max-width:300px">CONFIRM</button>';
    const n=$('awName');n.value=S.name==='Player'?'':S.name;n.focus();const ok=()=>{S.name=n.value.trim()||'Player';step3();};$('awN').onclick=ok;n.onkeydown=e=>{if(e.key==='Enter')ok();};}
  function step3(){sfx('done');b.innerHTML='<h2 style="color:var(--glow)">CHOOSE YOUR CLASS</h2><p class="sub" style="margin-top:6px">Sets your starting quests and gives a +3 stat bonus</p><div class="classes">'+CLASSES.map(c=>'<button class="cls" data-c="'+c.id+'" style="--cc:'+c.c+'"><em>+3 '+c.s+'</em><b>'+c.n+'</b><span>'+c.d+'</span></button>').join('')+'</div>';
    b.querySelectorAll('.cls').forEach(x=>x.onclick=()=>step4(CLASSES.find(c=>c.id===x.dataset.c)));}
  function step4(c){
    if(!S.cls)S.alloc[c.s]=(S.alloc[c.s]||0)+3;
    S.cls=c.id;if(!S.totalXP){S.pack=c.p;S.quests=packQuests(c.p);}
    S.awake=true;S.penSeen=today();if(!S.chests.length&&!S.sessions.length)S.chests.push('rare');save();
    b.innerHTML='<h2 style="color:'+c.c+';font-size:46px">AWAKENED</h2><p class="tw" style="margin-top:10px;color:'+c.c+';text-shadow:0 0 12px '+c.c+'">Class: '+c.n+'</p>';
    sfx('lvl');buzz([60,40,160]);burst(innerWidth/2,innerHeight/2,c.c,200,12);
    const f=$('flash');f.classList.remove('go');void f.offsetWidth;f.classList.add('go');
    setTimeout(()=>{ov.classList.remove('show');go('status');render();notify({t:'WELCOME, PLAYER',big:esc(S.name),lines:['A starter chest is in your inventory','Clear your daily quests before midnight']});},1900);
  }
}
$('replayIntro').onclick=()=>{$('setSheet').classList.remove('show');awaken();};

/* ---------- calisthenics skill tree ---------- */
const BR={push:{n:'PUSH',c:'#ff4d6d'},pull:{n:'PULL',c:'#5ad8ff'},legs:{n:'LEGS',c:'#4fe39a'},core:{n:'CORE',c:'#a77bff'}};
// id, name, branch, col(0-2), row, target, unit (reps|sec), prerequisites, camera exercise, tip
const SK=[
 ['p1','Incline push-ups','push',1,0,15,'reps',[],'Push-ups','Hands on a bench or table, body in one straight line. Chest touches the edge every rep.'],
 ['p2','Push-ups','push',1,1,20,'reps',['p1'],'Push-ups','Hands under shoulders, elbows at about 45 degrees, chest to the floor, full lockout at the top.'],
 ['p3','Diamond push-ups','push',0,2,12,'reps',['p2'],'Push-ups','Thumbs and index fingers touch to make a diamond under your chest. Elbows stay close to your body.'],
 ['p4','Pike push-ups','push',2,2,10,'reps',['p2'],'Push-ups','Hips high in an upside-down V. Lower the top of your head toward the floor between your hands.'],
 ['p5','Dips','push',1,3,10,'reps',['p2'],'Dips','On parallel bars or two chairs. Lower until your shoulders dip below your elbows, then press to lockout.'],
 ['p6','Archer push-ups','push',0,3,6,'reps',['p3'],'Push-ups','Wide hands. Shift onto one arm while the other stays straight. 6 reps each side counts.'],
 ['p7','Wall handstand','push',2,3,30,'sec',['p4'],null,'Chest facing the wall, stacked over your hands, body tight like a plank.'],
 ['p8','Pseudo planche push-ups','push',0,4,8,'reps',['p6'],'Push-ups','Fingers turned out, hands by your hips, lean forward past your hands and keep it there for every rep.'],
 ['p9','Handstand push-up','push',2,4,3,'reps',['p7','p5'],null,'Against the wall. Head lightly touches the floor, press all the way back up.'],
 ['p10','One-arm push-up','push',1,5,1,'reps',['p8','p9'],'Push-ups','Feet wide, free hand behind your back, full range on one arm. The final boss of push.'],
 ['u1','Dead hang','pull',1,0,30,'sec',[],null,'Hang from a bar with straight arms and an active grip. Shoulders pulled down slightly.'],
 ['u2','Scapula pulls','pull',0,1,10,'reps',['u1'],null,'From a dead hang, pull your shoulder blades down without bending your elbows.'],
 ['u3','Australian rows','pull',2,1,12,'reps',['u1'],'Rows','Under a low bar or table, body straight, pull your chest to the bar.'],
 ['u4','Negative pull-ups','pull',1,2,5,'reps',['u2','u3'],null,'Jump to the top, then lower yourself as slowly as you can. 5 seconds down each.'],
 ['u5','Pull-ups','pull',1,3,8,'reps',['u4'],'Pull-ups','Dead hang to chin over the bar. No kipping, no half reps.'],
 ['u6','Chest-to-bar','pull',0,4,6,'reps',['u5'],'Pull-ups','Pull explosively until your chest touches the bar.'],
 ['u7','Tuck front lever','pull',2,4,10,'sec',['u5'],null,'Hang, pull your knees to your chest and lean back until your back is flat and horizontal.'],
 ['u8','Archer pull-ups','pull',0,5,4,'reps',['u6'],'Pull-ups','Wide grip, pull toward one hand while the other arm straightens. 4 each side.'],
 ['u9','Front lever','pull',2,5,5,'sec',['u7'],null,'Whole body straight and horizontal under the bar. Arms locked.'],
 ['u10','Muscle-up','pull',1,6,1,'reps',['u6','u8'],null,'Explosive pull, transition over the bar, press out to a full dip lockout. The final boss of pull.'],
 ['l1','Squats','legs',1,0,30,'reps',[],'Squats','Feet shoulder width, hips below your knees, chest up, full stand at the top.'],
 ['l2','Lunges','legs',0,1,20,'reps',['l1'],'Lunges','Step forward, back knee almost touches the floor. 10 each leg.'],
 ['l3','Jump squats','legs',2,1,15,'reps',['l1'],'Squats','Full squat, then jump as high as you can. Land soft and go straight into the next one.'],
 ['l4','Bulgarian split squats','legs',1,2,10,'reps',['l2','l3'],'Lunges','Back foot on a bench, drop your back knee straight down. 10 each leg.'],
 ['l5','Shrimp squat','legs',0,3,5,'reps',['l4'],null,'Hold your back foot behind you and lower until that knee touches the floor. 5 each leg.'],
 ['l6','Assisted pistol','legs',2,3,5,'reps',['l4'],null,'Single-leg squat holding a door frame or pole for balance. 5 each leg.'],
 ['l7','Pistol squat','legs',1,4,5,'reps',['l5','l6'],null,'One leg out straight in front, squat all the way down on the other and stand up. 5 each leg.'],
 ['l8','Nordic curl','legs',1,5,3,'reps',['l7'],null,'Kneel with your heels anchored, lower your body forward as slowly as possible. The final boss of legs.'],
 ['c1','Plank','core',1,0,60,'sec',[],null,'Forearms down, body in a straight line, squeeze your glutes and abs.'],
 ['c2','Hollow hold','core',0,1,30,'sec',['c1'],null,'On your back, lower back pressed into the floor, arms and legs straight and off the ground.'],
 ['c3','Hanging knee raises','core',2,1,12,'reps',['c1'],null,'From a dead hang, bring your knees to your chest without swinging.'],
 ['c4','Tuck L-sit','core',0,2,15,'sec',['c2'],null,'Hands on the floor or parallettes, push down and lift your body with knees tucked.'],
 ['c5','Hanging leg raises','core',2,2,10,'reps',['c3'],null,'Straight legs, raise them to at least hip height. No swinging.'],
 ['c6','L-sit','core',1,3,10,'sec',['c4','c5'],null,'Same as the tuck L-sit with legs straight out in front, parallel to the floor.'],
 ['c7','Toes to bar','core',2,4,10,'reps',['c5'],null,'From a dead hang, bring your toes all the way up to touch the bar.'],
 ['c8','Dragon flag negatives','core',0,3,5,'reps',['c4'],null,'Lying on a bench, hold behind your head, lift your body straight up and lower it slowly.'],
 ['c9','Dragon flag','core',1,5,3,'reps',['c6','c8'],null,'Full dragon flag: body straight from shoulders to toes, up and down under control. The final boss of core.']
].map(a=>({id:a[0],n:a[1],b:a[2],x:a[3],y:a[4],t:a[5],u:a[6],pre:a[7],cam:a[8],tip:a[9]}));
const SKMAX={};SK.forEach(k=>SKMAX[k.b]=Math.max(SKMAX[k.b]||0,k.y));
const skById=id=>SK.find(k=>k.id===id);
const skDone=id=>!!(S.skills&&S.skills[id]&&S.skills[id].done);
const skAvail=k=>!skDone(k.id)&&k.pre.every(skDone);
const skXP=k=>40+k.y*30+(k.y===SKMAX[k.b]?150:0);
let treeBr='push',justSk='';
const LOCKSVG='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><rect x="5" y="11" width="14" height="10" rx="1"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>';
function renderTree(){
  if(!$('tree'))return;
  const bc=BR[treeBr].c,win=$('treeWin');win.style.setProperty('--bc',bc);win.style.setProperty('--c',bc);
  const all=SK.filter(k=>skDone(k.id)).length;$('treeN').textContent=all+' / '+SK.length+' mastered';
  $('brTabs').innerHTML=Object.keys(BR).map(b=>{const L=SK.filter(k=>k.b===b),d=L.filter(k=>skDone(k.id)).length;return '<button data-br="'+b+'" class="'+(b===treeBr?'on':'')+'" style="--bc:'+BR[b].c+'">'+BR[b].n+'<span>'+d+' / '+L.length+'</span></button>';}).join('');
  const L=SK.filter(k=>k.b===treeBr),done=L.filter(k=>skDone(k.id)).length;$('treeMeter').style.width=(done/L.length*100)+'%';
  const RH=112,top=46,H=top+(SKMAX[treeBr]+1)*RH-20,X=c=>(16.67+c*33.33);
  const pos=k=>({x:X(k.x),y:top+k.y*RH});
  let lines='';L.forEach(k=>k.pre.forEach(pid=>{const a=pos(skById(pid)),b=pos(k);const cls=skDone(k.id)?'dn':skDone(pid)?'av':'';
    const y1=a.y+(skById(pid).y===SKMAX[treeBr]?50:44),y2=b.y-(k.y===SKMAX[treeBr]?36:30),my=(y1+y2)/2;lines+='<path class="'+cls+'" d="M'+a.x+' '+y1+' C'+a.x+' '+my+' '+b.x+' '+my+' '+b.x+' '+y2+'" vector-effect="non-scaling-stroke"/>';}));
  const tiers='';
  const nodes=L.map(k=>{const p=pos(k),dn=skDone(k.id),av=skAvail(k),boss=k.y===SKMAX[k.b];
    const inner=dn?'\u2713':av?k.t+'<small>'+(k.u==='sec'?'SEC':'REPS')+'</small>':LOCKSVG;
    return '<button class="node '+(dn?'dn':av?'av':'lk')+(boss?' boss':'')+(justSk===k.id?' just':'')+'" data-sk="'+k.id+'" style="left:'+p.x+'%;top:'+(p.y-(boss?35:29))+'px" aria-label="'+esc(k.n)+'"><div class="hx">'+inner+'</div><b>'+esc(k.n)+'</b></button>';}).join('');
  $('tree').style.height=H+'px';
  $('tree').innerHTML='<svg class="lines" viewBox="0 0 100 '+H+'" preserveAspectRatio="none">'+lines.replace(/M([\\d.]+) ([\\d.]+) C([\\d.]+) ([\\d.]+) ([\\d.]+) ([\\d.]+) ([\\d.]+) ([\\d.]+)/g,(m,a,b,c,d,e,f,g,h)=>'M'+a+' '+b+' C'+c+' '+d+' '+e+' '+f+' '+g+' '+h)+'</svg>'+tiers+nodes;
  justSk='';
  $('dotTree').classList.toggle('on',SK.some(skAvail)&&!S.treeSeen);
}
$('brTabs').addEventListener('click',e=>{const b=e.target.closest('[data-br]');if(!b)return;treeBr=b.dataset.br;sfx('tick');renderTree();});
$('tree').addEventListener('click',e=>{const b=e.target.closest('[data-sk]');if(b)openSkill(b.dataset.sk);});
let holdIv=0;
function openSkill(id){
  const k=skById(id),bc=BR[k.b].c,w=$('skWin');w.style.setProperty('--bc',bc);w.style.setProperty('--c',bc);clearInterval(holdIv);
  const dn=skDone(id),av=skAvail(k),best=(S.skills[id]&&S.skills[id].best)||0,unit=k.u==='sec'?'SECONDS':'REPS';
  $('skT').textContent=BR[k.b].n+' \xB7 '+(k.y===SKMAX[k.b]?'BOSS':'TIER '+['I','II','III','IV','V','VI','VII'][k.y]);
  let h='<h2 style="font-size:24px;text-align:center;color:'+bc+';text-shadow:0 0 16px '+bc+'">'+esc(k.n)+'</h2>';
  h+='<div class="sk-req"><div><b>'+k.t+'</b><span>'+unit+'</span></div><div><b>+'+skXP(k)+'</b><span>XP</span></div>'+(best&&!dn?'<div><b>'+best+'</b><span>YOUR BEST</span></div>':'')+'</div>';
  h+='<p class="sk-tip">'+esc(k.tip)+'</p>';
  if(dn){h+='<p class="sub" style="text-align:center;color:'+bc+'">Mastered on '+new Date(S.skills[id].done+'T12:00').toLocaleDateString(undefined,{month:'short',day:'numeric'})+'</p><button class="btn ghost" data-close style="width:100%;margin-top:12px">CLOSE</button>';}
  else if(!av){h+='<p class="sk-pre">Unlock first: '+k.pre.filter(p=>!skDone(p)).map(p=>'<em>'+esc(skById(p).n)+'</em>').join(', ')+'</p><button class="btn ghost" data-close style="width:100%">CLOSE</button>';}
  else{
    h+='<div class="sk-acts">';
    if(k.u==='sec'){h+='<div class="sk-ring"><i id="skRing"></i></div><div class="sk-hold" id="skHold">0<small> / '+k.t+'s</small></div><button class="btn big" id="skGo">START HOLD TIMER</button>';}
    else if(k.cam&&trackFor(k.cam)){h+='<button class="btn big" id="skCam">PROVE IT WITH CAMERA</button>';}
    h+='<div class="sk-row"><input class="f" id="skIn" type="number" min="1" inputmode="numeric" placeholder="Or enter your best ('+(k.u==='sec'?'seconds':'reps')+')"><button class="btn ghost" id="skLog">LOG</button></div></div>';}
  $('skB').innerHTML=h;$('skSheet').classList.add('show');
  if(!av||dn)return;
  if($('skCam'))$('skCam').onclick=()=>{$('skSheet').classList.remove('show');openTracker({from:'skill',id,name:k.cam});};
  $('skLog').onclick=()=>{const v=parseFloat($('skIn').value);if(!(v>0))return;skAttempt(id,v);};
  if($('skGo'))$('skGo').onclick=()=>{
    const b=$('skGo');if(holdIv){clearInterval(holdIv);holdIv=0;const v=Math.floor((Date.now()-b._t)/1000);b.textContent='START HOLD TIMER';skAttempt(id,v);return;}
    b._t=Date.now();b.textContent='STOP';sfx('tick');
    holdIv=setInterval(()=>{if(!$('skSheet').classList.contains('show')){clearInterval(holdIv);holdIv=0;return;}const v=(Date.now()-b._t)/1000;
      $('skHold').innerHTML=Math.floor(v)+'<small> / '+k.t+'s</small>';$('skRing').style.width=Math.min(100,v/k.t*100)+'%';
      if(v>=k.t){clearInterval(holdIv);holdIv=0;skAttempt(id,Math.floor(v));}},100);};
}
function skAttempt(id,v){
  const k=skById(id);S.skills[id]=S.skills[id]||{};S.skills[id].best=Math.max(S.skills[id].best||0,v);
  if(v<k.t){save();sfx('down');notify({t:'NOT YET',big:v+' / '+k.t,lines:['Personal best saved','Keep training, then come back']});openSkill(id);return;}
  masterSkill(id);
}
function masterSkill(id){
  const k=skById(id),before=lvl(S.totalXP).l,xp=skXP(k),boss=k.y===SKMAX[k.b];
  S.skills[id]=Object.assign(S.skills[id]||{},{done:today()});gain(xp);S.gold+=20+k.y*15;
  $('skSheet').classList.remove('show');treeBr=k.b;justSk=id;go('tree');
  sfx('lvl');buzz([60,40,160]);const f=$('flash');f.classList.remove('go');void f.offsetWidth;f.classList.add('go');
  setTimeout(()=>{const n=document.querySelector('[data-sk="'+id+'"] .hx');if(n)burstAt(n,BR[k.b].c,boss?200:90);},60);
  notify({t:boss?'BOSS SKILL MASTERED':'SKILL UNLOCKED',big:esc(k.n),lines:['Reward <b>+'+xp+' XP</b> &nbsp;<b style="color:var(--gold)">+'+(20+k.y*15)+' gold</b>'],kind:'gold'});
  const nxt=SK.filter(x=>x.pre.includes(id)&&skAvail(x));
  if(nxt.length)notify({t:'NEW PATH OPEN',big:nxt.map(x=>esc(x.n)).join('<br>'),lines:['Tap it in the skill tree to try it']});
  if(k.y>=3)dropChest(1,boss?'legendary':'epic');
  checkAch();settle(before);
}

/* ---------- AI rep tracker ---------- */
const CAMSVG='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M3 8h4l2-3h6l2 3h4v11H3z"/><circle cx="12" cy="13" r="3.5"/></svg>';
const TRACK=[
 {n:'Push-ups',re:/push/i,j:[11,13,15],lo:95,hi:150,at:'hi',cue:'Side view, whole body in frame',fix:'Chest lower',L:['DOWN','UP']},
 {n:'Squats',re:/squat|leg press/i,j:[23,25,27],lo:105,hi:155,at:'hi',cue:'Side view, hips to feet in frame',fix:'Go deeper',L:['DEPTH','STAND']},
 {so:1,n:'Pull-ups',re:/pull.?up|chin|pulldown/i,j:[11,13,15],lo:80,hi:145,at:'lo',cue:'Face the camera, arms in frame',fix:'Pull higher',L:['TOP','HANG']},
 {n:'Burpees',re:/burpee/i,tilt:1,lo:30,hi:60,at:'lo',cue:'Side view, full body in frame',fix:'Get all the way down',L:['STAND','FLOOR']},
 {so:1,n:'Sit-ups',re:/sit.?up|crunch/i,j:[11,23,25],lo:75,hi:115,at:'lo',cue:'Side view, lying down',fix:'Come up higher',L:['UP','DOWN']},
 {n:'Lunges',re:/lunge|split squat/i,j:[23,25,27],lo:110,hi:155,at:'hi',cue:'Side view, step into frame',fix:'Lower the back knee',L:['DEPTH','STAND']},
 {so:1,n:'Jumping jacks',re:/jack/i,j:[23,11,15],lo:45,hi:130,at:'hi',cue:'Face the camera, full body',fix:'Hands all the way up',L:['DOWN','UP']},
 {n:'Dips',re:/dip/i,j:[11,13,15],lo:100,hi:150,at:'hi',cue:'Side view',fix:'Lower',L:['DOWN','UP']},
 {so:1,n:'Bicep curls',re:/curl/i,j:[11,13,15],lo:60,hi:140,at:'lo',cue:'Side view, arm in frame',fix:'Curl all the way up',L:['TOP','DOWN']},
 {so:1,n:'Overhead press',re:/overhead|shoulder press|ohp|military/i,j:[11,13,15],lo:85,hi:150,at:'hi',cue:'Face the camera',fix:'Lock out overhead',L:['RACK','LOCKOUT']},
 {n:'Bench press',re:/bench|chest press/i,j:[11,13,15],lo:90,hi:150,at:'hi',cue:'Camera to your side',fix:'Bar to chest',L:['CHEST','LOCKOUT']},
 {so:1,n:'Rows',re:/row/i,j:[11,13,15],lo:85,hi:145,at:'lo',cue:'Side view',fix:'Pull to your stomach',L:['PULL','REACH']},
 {so:1,n:'Lateral raises',re:/lateral|side raise/i,j:[23,11,13],lo:30,hi:75,at:'hi',cue:'Face the camera',fix:'Raise to shoulder height',L:['DOWN','UP']},
 {so:1,n:'Deadlifts',re:/deadlift|rdl|good morning/i,j:[11,23,25],lo:115,hi:160,at:'hi',cue:'Side view, full body',fix:'Hinge lower',L:['HINGE','LOCKOUT']},
 {so:1,n:'Hip thrusts',re:/hip thrust|glute bridge/i,j:[11,23,25],lo:125,hi:160,at:'hi',cue:'Side view',fix:'Squeeze to the top',L:['DOWN','TOP']}
];
const trackFor=name=>TRACK.find(t=>t.re.test(name||''));
const BONES=[[11,12],[11,13],[13,15],[12,14],[14,16],[11,23],[12,24],[23,24],[23,25],[25,27],[24,26],[26,28],[27,31],[28,32],[27,29],[28,30]];
function makeCounter(t){return{state:null,reps:0,ema:null,half:false,ext:null,q:null,cand:null,candN:0,candT:0,oppT:null,lastRep:-1e9,buf:[],
  arm(st,m,now){this.state=st;this.ema=m;this.buf=[m];this.half=false;this.ext=null;this.cand=null;this.candN=0;this.oppT=st!==t.at&&t.so?now:null;},
  feed(m,now){
    // median of the last 3 frames: kills one-frame tracking glitches without lagging behind real movement
    this.buf.push(m);if(this.buf.length>3)this.buf.shift();this.ema=[...this.buf].sort((a,b)=>a-b)[this.buf.length>>1];
    const v=this.ema,s=v<=t.lo?'lo':v>=t.hi?'hi':null;let ev=null;
    if(this.state&&this.state!==t.at)this.ext=this.ext==null?v:(this.state==='lo'?Math.min(this.ext,v):Math.max(this.ext,v));
    if(s&&s!==this.state){
      // a new zone only counts once it holds for 2 frames and ~50ms
      if(this.cand!==s){this.cand=s;this.candN=1;this.candT=now;return null;}
      if(++this.candN<2||now-this.candT<50)return null;
      this.cand=null;this.candN=0;
      if(this.state&&s===t.at){
        const cyc=this.oppT!=null?now-this.oppT:0,gap=now-this.lastRep;
        // real rep: spent >=180ms in the other zone, finished within 10s, and not faster than 0.4s/rep
        if(this.oppT!=null&&cyc>=180&&cyc<=10000&&gap>=400){this.reps++;this.lastRep=now;ev='rep';
          const deep=this.state==='lo'?this.ext<=t.lo-8:this.ext>=t.hi+8;this.q=deep?'perfect':'good';}
      }
      if(s!==t.at)this.oppT=now;
      this.state=s;this.half=false;this.ext=null;}
    else{if(!s){this.cand=null;this.candN=0;}
      if(this.state===t.at){const mid=(t.lo+t.hi)/2;if(t.at==='hi'?v<mid:v>mid)this.half=true;else if(this.half&&(t.at==='hi'?v>=t.hi-4:v<=t.lo+4)){this.half=false;ev='partial';}}}
    return ev;}};}
function angleAt(a,b,c){let d=Math.abs((Math.atan2(a.y-b.y,a.x-b.x)-Math.atan2(c.y-b.y,c.x-b.x))*180/Math.PI);return d>180?360-d:d;}
let PL=null,plLoading=null;
async function loadPose(){
  if(window.__sqPose)return window.__sqPose;
  if(PL)return PL;
  if(!plLoading)plLoading=(async()=>{
    const V='https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14';
    const m=await import(V+'/vision_bundle.mjs');const fs=await m.FilesetResolver.forVisionTasks(V+'/wasm');
    const mk=d=>m.PoseLandmarker.createFromOptions(fs,{baseOptions:{modelAssetPath:'https://storage.googleapis.com/mediapipe-models/pose_landmarker/pose_landmarker_lite/float16/1/pose_landmarker_lite.task',delegate:d},runningMode:'VIDEO',numPoses:1,minPoseDetectionConfidence:.5,minPosePresenceConfidence:.5,minTrackingConfidence:.5});
    try{PL=await mk('GPU');}catch(e){PL=await mk('CPU');}return PL;})();
  try{return await plLoading;}catch(e){plLoading=null;throw e;}
}
const RT={armed:false,holdT:0,lostT:0,fastT:0,cPrev:null,start:0,combo:0,goal:0,goalHit:false,ctx:null,t:TRACK[0],c:null,mode:'cam',facing:'user',stream:null,raf:0,live:false,lastT:-1,voice:true,cue:'',cueUntil:0};
function rtSay(n){if(!RT.voice||!('speechSynthesis' in window))return;try{speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(String(n));u.rate=1.25;u.pitch=1.05;speechSynthesis.speak(u);}catch(e){}}
function rtCue(txt,cls,ms){const el=$('rtCue');el.textContent=txt;el.className='rt-cue'+(cls?' '+cls:'');RT.cueUntil=ms?Date.now()+ms:0;}
function rtSetEx(t){RT.t=t;RT.c=makeCounter(t);RT.live=false;RT.armed=false;RT.holdT=0;RT.cPrev=null;RT.start=0;RT.combo=0;RT.goalHit=false;$('rtCombo').textContent='0';
  $('rtGoal').hidden=!RT.goal;if(RT.goal){$('rtGoalB').style.width='0%';$('rtGoalT').textContent='0 / '+RT.goal;}$('rtN').textContent='0';rtDoneLbl();
  document.querySelectorAll('#rtChips button').forEach(b=>b.classList.toggle('on',b.dataset.t===t.n));
  $('rtSub').textContent=t.n;
  const lo=(t.lo-20)/((t.hi+20)-(t.lo-20)),hi=(t.hi-20-(t.lo-20)+20)/((t.hi+20)-(t.lo-20));
  const pLo=(t.lo-(t.lo-25))/((t.hi+25)-(t.lo-25)),pHi=(t.hi-(t.lo-25))/((t.hi+25)-(t.lo-25));
  $('rtGlo').style.bottom=(pLo*100)+'%';$('rtGhi').style.bottom=(pHi*100)+'%';
  $('rtLlo').style.bottom=(pLo*100)+'%';$('rtLhi').style.bottom=(pHi*100)+'%';
  $('rtLlo').textContent=t.tilt?t.L[0]:t.L[0];$('rtLhi').textContent=t.L[1];
  if(RT.mode==='cam')rtCountdown();else rtTapUI();
}
function rtDoneLbl(){const n=RT.c?RT.c.reps:0;$('rtDone').textContent=n?'LOG '+n+(n===1?' REP':' REPS'):'DONE';}
function rtFlash(txt,sub,col){const f=$('rtFlash');f.innerHTML=txt+(sub?'<small>'+sub+'</small>':'');f.style.color=col;f.style.textShadow='0 0 24px '+col+',0 0 6px '+col;f.classList.remove('go');void f.offsetWidth;f.classList.add('go');}
function rtRep(){const n=RT.c.reps;if(!RT.start)RT.start=Date.now();const b=$('rtN');b.textContent=n;b.classList.remove('pop');void b.offsetWidth;b.classList.add('pop');
  sfx('set');buzz(25);rtSay(n);rtDoneLbl();const r=b.getBoundingClientRect();burst(r.left+r.width/2,r.top+r.height/2,auraColor(),22,6);
  const q=RT.mode==='tap'?null:RT.c.q;
  if(q==='perfect'){RT.combo++;rtFlash('PERFECT',RT.combo>=3?'COMBO \xD7'+RT.combo:'','#ffc94a');}
  else if(q==='good'){RT.combo=0;rtFlash('GOOD','','#4fe39a');}
  $('rtCombo').textContent=RT.combo;
  if(RT.goal){const pc=Math.min(1,n/RT.goal);$('rtGoalB').style.width=(pc*100)+'%';$('rtGoalT').textContent=n+' / '+RT.goal;
    if(n>=RT.goal&&!RT.goalHit){RT.goalHit=true;sfx('lvl');buzz([60,40,140]);burst(innerWidth/2,innerHeight*.4,'#ffc94a',160,11);
      $('rtDoneP').innerHTML='<b>'+n+'</b> reps. Tap <b>LOG</b> to claim your XP';$('rtDoneOv').classList.add('show');setTimeout(()=>$('rtDoneOv').classList.remove('show'),1800);rtSay('Goal cleared');}}
  if(n%10===0&&n!==RT.goal){sfx('pr');rtCue(n+' reps. Keep going!','good',1500);}}
function rtTick(){if(!$('rt').classList.contains('show'))return;const n=RT.c?RT.c.reps:0;
  const s=RT.start?Math.floor((Date.now()-RT.start)/1000):0;$('rtTime').textContent=Math.floor(s/60)+':'+pad(s%60);
  $('rtPace').textContent=s>=5&&n?Math.round(n/s*60):'0';}
setInterval(rtTick,500);
let cdTimer=0;
function rtCountdown(){
  clearInterval(cdTimer);RT.live=false;RT.armed=false;RT.holdT=0;RT.cPrev=null;let n=3;$('rt').classList.add('scanning');
  const show=()=>{$('rtMid').innerHTML='<div><div class="cd">'+n+'</div><div class="msg">'+esc(RT.t.cue)+'</div></div>';sfx('tick');};
  show();cdTimer=setInterval(()=>{n--;if(n>0)show();else{clearInterval(cdTimer);$('rtMid').innerHTML='';RT.live=true;$('rt').classList.remove('scanning');rtCue('Get in your start position and hold still','',0);}},1000);
}
function rtTapUI(){clearInterval(cdTimer);RT.live=true;$('rt').classList.remove('scanning');$('rtMid').innerHTML='<div class="taphint">TAP</div>';rtCue('Tap anywhere for each rep','',0);}
async function rtStartCam(){
  rtStopCam();$('rt').classList.add('scanning');$('rtMid').innerHTML='<div><div class="spin2"></div><div class="msg">Starting camera</div></div>';
  try{
    RT.stream=await navigator.mediaDevices.getUserMedia({video:{facingMode:RT.facing,width:{ideal:720},height:{ideal:1280}},audio:false});
    const v=$('rtV');v.srcObject=RT.stream;await v.play();
    $('rt').classList.toggle('mirror',RT.facing==='user');
  }catch(e){rtMode('tap');rtCue('Camera blocked. Allow camera access, or use tap mode','warn',5000);return;}
  $('rtMid').innerHTML='<div><div class="spin2"></div><div class="msg">Scanning body</div></div>';
  let pl;try{pl=await loadPose();}catch(e){rtMode('tap');rtCue('AI coach needs an internet connection the first time. Using tap mode','warn',5000);return;}
  if(!$('rt').classList.contains('show')||RT.mode!=='cam')return;
  rtCountdown();RT.lastT=-1;cancelAnimationFrame(RT.raf);
  const v=$('rtV'),cv=$('rtC'),cx=cv.getContext('2d');
  const loop=()=>{
    RT.raf=requestAnimationFrame(loop);
    if(v.readyState<2||v.currentTime===RT.lastT)return;RT.lastT=v.currentTime;
    const W=v.videoWidth,H=v.videoHeight;if(cv.width!==W){cv.width=W;cv.height=H;}
    let res;try{res=pl.detectForVideo(v,performance.now());}catch(e){return;}
    cx.clearRect(0,0,W,H);
    const lm=res&&res.landmarks&&res.landmarks[0];
    if(!lm){if(!RT.cueUntil||Date.now()>RT.cueUntil)rtCue('Step into the frame','warn',0);return;}
    rtFrame(lm,W,H,cx);
  };loop();
}
function rtStopCam(){cancelAnimationFrame(RT.raf);if(RT.stream){RT.stream.getTracks().forEach(t=>t.stop());RT.stream=null;}const v=$('rtV');if(v)v.srcObject=null;}
function rtFrame(lm,W,H,cx){
  const t=RT.t,P=i=>({x:lm[i].x*W,y:lm[i].y*H,v:lm[i].visibility==null?1:lm[i].visibility});
  let m=null,joints=[],vis=0;
  if(t.tilt){const sm={x:(lm[11].x+lm[12].x)/2*W,y:(lm[11].y+lm[12].y)/2*H},hm={x:(lm[23].x+lm[24].x)/2*W,y:(lm[23].y+lm[24].y)/2*H};
    vis=Math.min(Math.max(P(11).v,P(12).v),Math.max(P(23).v,P(24).v));m=Math.atan2(Math.abs(sm.x-hm.x),Math.abs(sm.y-hm.y))*180/Math.PI;joints=[sm,hm];}
  else{const L=t.j,Rr=t.j.map(i=>i+1),vl=L.reduce((a,i)=>a+P(i).v,0),vr=Rr.reduce((a,i)=>a+P(i).v,0),side=vr>vl?Rr:L;
    joints=side.map(P);vis=Math.min(...joints.map(p=>p.v));m=angleAt(joints[0],joints[1],joints[2]);}
  // skeleton
  const col=auraColor();cx.lineCap='round';cx.lineWidth=Math.max(4,W/160);cx.strokeStyle=col;cx.shadowColor=col;cx.shadowBlur=14;
  BONES.forEach(([a,b])=>{const A=P(a),B=P(b);if(A.v<.4||B.v<.4)return;cx.beginPath();cx.moveTo(A.x,A.y);cx.lineTo(B.x,B.y);cx.stroke();});
  cx.shadowBlur=0;cx.fillStyle='#fff';[11,12,13,14,15,16,23,24,25,26,27,28].forEach(i=>{const p=P(i);if(p.v<.4)return;cx.beginPath();cx.arc(p.x,p.y,W/150,0,7);cx.fill();});
  cx.strokeStyle='#ffc94a';cx.lineWidth=Math.max(6,W/110);cx.shadowColor='#ffc94a';cx.shadowBlur=18;
  if(joints.length===3){cx.beginPath();cx.moveTo(joints[0].x,joints[0].y);cx.lineTo(joints[1].x,joints[1].y);cx.lineTo(joints[2].x,joints[2].y);cx.stroke();
    cx.shadowBlur=0;cx.fillStyle='#ffc94a';cx.beginPath();cx.arc(joints[1].x,joints[1].y,W/70,0,7);cx.fill();
    const mir=$('rt').classList.contains('mirror');cx.save();cx.translate(joints[1].x+W/30,joints[1].y-W/30);if(mir)cx.scale(-1,1);cx.font='700 '+Math.round(W/22)+'px "Chakra Petch",sans-serif';cx.textAlign=mir?'right':'left';cx.fillStyle='#ffc94a';cx.shadowColor='#000';cx.shadowBlur=8;cx.fillText(Math.round(m)+'\xB0',0,0);cx.restore();}
  cx.shadowBlur=0;
  const now=performance.now();
  // strict gate: tracked joints clearly visible and actually inside the picture
  const inFrame=joints.every(p=>p.x>W*.01&&p.x<W*.99&&p.y>H*.01&&p.y<H*.99);
  if(vis<.65||!inFrame){
    if(RT.armed){if(!RT.lostT)RT.lostT=now;else if(now-RT.lostT>600){RT.armed=false;RT.holdT=0;}}
    if(!RT.cueUntil||Date.now()>RT.cueUntil)rtCue(t.cue,'warn',0);return;}
  RT.lostT=0;
  const span=(t.hi+25)-(t.lo-25);$('rtG').style.height=Math.max(0,Math.min(100,(m-(t.lo-25))/span*100))+'%';
  if(!RT.live)return;
  // body-centre sideways speed in torso-lengths per second: walking or adjusting the phone, not reps
  const sh=P(11),sh2=P(12),hp=P(23),hp2=P(24),cxm=(sh.x+sh2.x+hp.x+hp2.x)/4,cym=(sh.y+sh2.y+hp.y+hp2.y)/4;
  const torso=Math.max(H*.05,Math.hypot((sh.x+sh2.x)/2-(hp.x+hp2.x)/2,(sh.y+sh2.y)/2-(hp.y+hp2.y)/2));
  let spd=0;if(RT.cPrev&&now>RT.cPrev.t){spd=Math.abs(cxm-RT.cPrev.x)/torso/((now-RT.cPrev.t)/1000);}
  RT.cPrev={x:cxm,y:cym,t:now};RT.spd=RT.spd==null?spd:RT.spd*.7+spd*.3;
  const zone=m<=t.lo?'lo':m>=t.hi?'hi':null;
  if(!RT.armed){
    // lock: hold a clear start position (either end of the movement) and stay still for 0.8s
    if(zone&&RT.spd<.6){if(!RT.holdT)RT.holdT=now;const pc=Math.min(100,Math.round((now-RT.holdT)/8));
      rtCue('Hold still\u2026 '+pc+'%','',0);
      if(now-RT.holdT>=800){RT.armed=true;RT.holdT=0;RT.fastT=0;RT.c.arm(zone,m,now);rtFlash('GO','','#4fe39a');sfx('done');buzz(40);rtCue(RT.c.reps?'Keep going':'Start your reps','good',1200);}}
    else{RT.holdT=0;if(!RT.cueUntil||Date.now()>RT.cueUntil)rtCue(zone?'Hold still to start':'Get in your start position','',0);}
    return;}
  if(RT.spd>1.8){if(!RT.fastT)RT.fastT=now;else if(now-RT.fastT>400){RT.armed=false;RT.holdT=0;rtCue('Paused. Get back in position','warn',1500);return;}}else RT.fastT=0;
  if(RT.cueUntil&&Date.now()<RT.cueUntil){}else rtCue(RT.c.reps?'':'Start your reps','',0);
  const ev=RT.c.feed(m,now);
  if(ev==='rep')rtRep();
  else if(ev==='partial'){rtCue(t.fix,'warn',1400);sfx('down');}
}
function rtMode(mo){RT.mode=mo;$('rt').classList.toggle('tap',mo==='tap');document.querySelectorAll('#rtMode button').forEach(b=>b.classList.toggle('on',b.dataset.m===mo));
  if(mo==='tap'){rtStopCam();rtTapUI();}else{rtCue('','',0);rtStartCam();}}
function openTracker(ctx){
  RT.ctx=ctx;const t=trackFor(ctx.name)||RT.t;
  RT.goal=0;if(ctx.from==='skill'){const k=skById(ctx.id);if(k)RT.goal=k.t;}if(ctx.from==='quest'){const q=S.quests.find(x=>x.id===ctx.id);if(q)RT.goal=Math.max(1,Math.ceil(q.target-progOf(q.id)));}
  $('rtChips').innerHTML=TRACK.map(x=>'<button data-t="'+x.n+'">'+x.n+'</button>').join('');
  $('rt').classList.add('show');RT.voice=S.voice!==false;$('rtVoice').classList.toggle('off',!RT.voice);
  RT.c=makeCounter(t);RT.t=t;rtCue('','',0);
  const hasCam=!!(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia);
  RT.mode=hasCam?'cam':'tap';$('rt').classList.toggle('tap',!hasCam);document.querySelectorAll('#rtMode button').forEach(b=>b.classList.toggle('on',b.dataset.m===RT.mode));
  rtSetEx(t);if(hasCam)rtStartCam();
  setTimeout(()=>{const on=document.querySelector('#rtChips .on');if(on)on.scrollIntoView({inline:'center',block:'nearest'});},50);
}
function closeTracker(){$('rt').classList.remove('scanning');$('rtDoneOv').classList.remove('show');rtStopCam();clearInterval(cdTimer);RT.live=false;try{speechSynthesis.cancel();}catch(e){}$('rt').classList.remove('show');}
$('rtChips').addEventListener('click',e=>{const b=e.target.closest('[data-t]');if(!b)return;e.stopPropagation();rtSetEx(TRACK.find(t=>t.n===b.dataset.t));});
$('rtMode').addEventListener('click',e=>{const b=e.target.closest('[data-m]');if(b&&b.dataset.m!==RT.mode)rtMode(b.dataset.m);});
$('rtFlip').onclick=()=>{RT.facing=RT.facing==='user'?'environment':'user';if(RT.mode==='cam')rtStartCam();};
$('rtVoice').onclick=()=>{RT.voice=!RT.voice;S.voice=RT.voice;save();$('rtVoice').classList.toggle('off',!RT.voice);if(RT.voice)rtSay('Voice on');};
$('rtX').onclick=closeTracker;
$('rt').addEventListener('pointerdown',e=>{if(RT.mode!=='tap'||!RT.live||e.target.closest('button,.rt-top,.rt-bot'))return;RT.c.reps++;rtRep();});
$('rtDone').onclick=()=>{
  const n=RT.c?RT.c.reps:0,ctx=RT.ctx;closeTracker();if(!n)return;
  if(ctx.from==='skill'){skAttempt(ctx.id,n);}
  else if(ctx.from==='quest'){const q=S.quests.find(x=>x.id===ctx.id);if(q)setProg(q,progOf(q.id)+n);}
  else{if(!S.cur)startWorkout();const typed=$('exIn').value.trim(),nm=typed&&trackFor(typed)===RT.t?typed:RT.t.n;
    $('exIn').value=nm;logSet(nm,parseFloat($('wIn').value)||0,n);}
};
$('camBtn').onclick=()=>openTracker({from:'train',name:$('exIn').value.trim()});
document.addEventListener('keydown',e=>{if(!$('rt').classList.contains('show'))return;if(e.key==='Escape')closeTracker();else if(e.key===' '&&RT.mode==='tap'&&RT.live){e.preventDefault();RT.c.reps++;rtRep();}});

$('exList').innerHTML=EXERCISES.map(e=>'<option>'+e+'</option>').join('');

let lastDay=today();
function tick(){
  const n=new Date(),m=new Date(n.getFullYear(),n.getMonth(),n.getDate()+1),s=Math.max(0,Math.floor((m-n)/1000));
  const tx=pad(Math.floor(s/3600))+':'+pad(Math.floor(s%3600/60))+':'+pad(s%60);$('timer').textContent=tx;$('timer2').textContent=tx;
  if(S.cur){const el=Math.floor((Date.now()-S.cur.start)/1000);$('clock').textContent=(el>=3600?Math.floor(el/3600)+':':'')+pad(Math.floor(el%3600/60))+':'+pad(el%60);}
  tickRest();
  if(buffOn()){const s2=Math.ceil((S.buffUntil-Date.now())/1000);$('buffT').textContent=pad(Math.floor(s2/60))+':'+pad(s2%60);}else if($('buff').classList.contains('on'))render();
  if(today()!==lastDay){lastDay=today();syncBoss(true);save();render();checkMissed();}
}

syncBoss(true);checkAch();quietInit=false;queue.length=0;save();render();tick();setInterval(tick,1000);
sizeEmbers();requestAnimationFrame(emberLoop);
if(!S.awake)awaken();else checkMissed();
})();
<\/script>
</body>
</html>
`;

// src/img/counter.jpg
var counter_default = __toBinary("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");

// src/img/quests.jpg
var quests_default = __toBinary("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");

// src/img/tree.jpg
var tree_default = __toBinary("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uPQMPMPQccfVcfcYfwQcYXfXfXnIUQAMsMDTTXfZQWcccfbXXLfdXqGSTCAEMMJTTSdz+xTTTTTScccdhRTcMJPLGMMMJf3f1PPfccccQSc+W1YMMMPPLCAEG/5YAAQAAAAAKA8pFQAAAEPPPBCEAICCAAAAAAAPA1nhQAwwwFPPLHCP6cQAAAAAABPE0OigwwwwhMNDLPHHOILjBADDPfHzlqvyAF0wwwAEAMMfcfecRSUUUf8A5er6wr+8NOMAAAAEEEEEG28EEH/wOJ7z+/ek80wAAAAEEEFXtf0ED8APbzyd++MMMcwgQgAAEFR+90EwPzMbjzz/AHMPPf8APPbUbWccYYYcNSvF1zOx8d09/wD/AP8A7wAAECa8W9TfQuD17PPPDjsMuP8A/wDvIEE9/wA0/wD/APC5Xfo888888ogTDzDDDTzzzzzz/i9XVEMMIwwwww03D73/AP8A/wD/AP8A/wDD81XVU999ICCC84//AP8APPPPPPPPOPzNdRz3330001yj8/8AW8888888830BXQ+9999999tkP/Hc888888883cN3R699999999m/zz3wwwwwwwwQ7hXNiNNNNNNNNNNaeAAAAAAAAAArCb5CBFNNNJFNBBINsAAAAAAAAgDyX9OCCCCCCCGNczsJB98888880B0X9i6wwwwwww4T/j299999999SRC30B++++++++8/9/qxxxxxxxxB4OXWCMMMMMMMM+/8A/wD7777nHHHUFAR/YLzzzzzzzzx4x77zzzzzzzwJgsu8TDDDDDDDDYzCyrDzzzzzzgStEtcADDDDDBDDDDDDDDDDDDDDBCB1cIAQwwwwwwwwwwwwwwwwwwwgAH3KkIIQAAAAAAAAAAAAAAAAAABzWCx1LLLvLfLLLLLb777rb7LLLKAXQn6YIqgBQIJrb5b5YILrar4gCzywnGaU888+98qJCgFDz1x2mBTz39/33s0U00k013X333n320En889f/wD/AP7n/wD9Yz//AOJ//wD3nP8As4bf/wA5/wD/APTML+lNp39QN3+0dz8PKZrw/G/f/wD/AP8A/wDf/wD/AP8A/wD/AP8A/wD/AM2333//AP8A/wD/xAApEQEAAgEEAQIFBQEAAAAAAAABABEQITAxQCBRsUFxocHhYYGR8PHR/9oACAEDAQE/EIbbCjT/ACWcao2i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");

// src/img/boss.jpg
var boss_default = __toBinary("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");

// src/seo.js
var IMAGES = { "counter.jpg": counter_default, "quests.jpg": quests_default, "tree.jpg": tree_default, "boss.jpg": boss_default };
var EXERCISES = "push-ups, squats, pull-ups, burpees, sit-ups, lunges, jumping jacks, dips, bicep curls, overhead press, bench press, rows, lateral raises, deadlifts and hip thrusts";
var PAGES = {
  "/push-up-counter": {
    title: "Push-up Counter App That Uses Your Phone Camera | Sidequest Lift",
    desc: "Count push-ups automatically with your phone camera. Sidequest Lift tracks your elbows, only counts full reps, and turns every set into XP. One-time CA$14, no subscription.",
    h1: "A push-up counter that actually watches your form",
    img: "counter.jpg",
    alt: "Sidequest Lift counting push-ups with the phone camera, showing the elbow angle and rep count",
    body: [
      ["How it counts", "Prop your phone up so it sees you from the side and hit start. The app finds your shoulder, elbow and wrist, measures the angle of your arm every frame, and counts a rep only when you go all the way down and lock out at the top."],
      ["Half reps do not count", 'If you stop halfway, it tells you "Chest lower" instead of adding a rep. It also waits until you are in position and holding still before it starts, so walking up to your phone or fixing your shirt never adds fake reps.'],
      ["Private by design", "Everything runs on your phone. Your video is never uploaded anywhere."],
      ["More than a counter", "Every set feeds the rest of the game: daily push-up quests, XP, levels, loot chests, and a calisthenics skill tree that goes from incline push-ups all the way to the one-arm push-up."]
    ],
    faq: [
      ["Do I need to tap or hold anything?", "No. Set the phone down, start, and do your reps. There is also a tap mode if you would rather count by tapping the screen."],
      ["What angle works best?", "Side view with your whole body in the frame, about 2 to 3 metres away, in decent light."],
      ["Does it work for other exercises?", "Yes: " + EXERCISES + "."]
    ]
  },
  "/ai-rep-counter": {
    title: "AI Rep Counter for Squats, Pull-ups and Push-ups | Sidequest Lift",
    desc: "An AI rep counter that runs in your phone browser. Counts 15 exercises with the camera, ignores half reps, and never uploads your video. CA$14 once.",
    h1: "An AI rep counter for 15 exercises",
    img: "counter.jpg",
    alt: "AI rep counter tracking a push-up with a skeleton overlay",
    body: [
      ["What it tracks", "Sidequest Lift uses on-device pose tracking to count " + EXERCISES + ". You pick the exercise, point the camera, and it counts out loud."],
      ["Strict on purpose", "A rep needs full range of motion in both directions, a real tempo (not a twitch), and a still start position before counting begins. Fewer free reps, more honest numbers."],
      ["Nothing leaves your phone", "The tracking model runs in your browser. No account, no uploads, no subscription."],
      ["Reps turn into progress", "Counted reps go straight into quests, XP and your weekly boss fight, so the counter is not a separate app you forget about."]
    ],
    faq: [
      ["Is it an app store app?", "It is a web app. Open it in Safari or Chrome and add it to your home screen. It works offline after the first load."],
      ["How many devices?", "One purchase works on up to 3 of your devices."]
    ]
  },
  "/gamified-workout-tracker": {
    title: "Gamified Workout Tracker With XP, Quests and Bosses | Sidequest Lift",
    desc: "A workout tracker that plays like an RPG: daily quests, XP and levels, loot chests, streaks and a weekly boss you beat by training. One-time CA$14.",
    h1: "A workout tracker that plays like a game",
    img: "quests.jpg",
    alt: "Daily quest list in Sidequest Lift with XP rewards for workouts, protein, water and sleep",
    body: [
      ["Daily quests", "Each day you get quests like a workout, 100 push-ups, protein, water, steps and sleep. Finish them for XP. Miss them and there is a penalty waiting."],
      ["Levels, ranks and loot", "XP levels you up through ranks, and wins drop loot chests with gold, potions and cosmetic skins."],
      ["A weekly boss", "Every week a boss shows up. Every bit of XP you earn is damage. Train enough and it dies before Sunday."],
      ["Real logging underneath", "Under the game it is a normal lifting log: sets, weights, PRs and progress charts."]
    ],
    faq: [
      ["Is there a subscription?", "No. CA$14 once, and you own it."],
      ["Can I change the quests?", "Yes. Pick a quest pack or edit your own targets."]
    ]
  },
  "/rpg-workout-app": {
    title: "RPG Workout App: Level Up in Real Life | Sidequest Lift",
    desc: "Turn the gym into an RPG. Stats, classes, quests, a skill tree and boss fights, all powered by your real workouts. Works on any phone, CA$14 once.",
    h1: "The gym, but it is an RPG",
    img: "boss.jpg",
    alt: "Weekly boss fight screen with a health bar that drops as you earn XP",
    body: [
      ["Your stats are real", "STR, AGI, VIT, END and WIL go up from what you actually do. Lifting, cardio, sleep and showing up all count."],
      ["Pick a class", "Choose a class and earn titles and achievements as you go."],
      ["Bosses and penalties", "A weekly boss you damage with XP, and a penalty quest if you skip your dailies. Streak shields save you on a bad day."],
      ["Built for consistency", "The whole point is getting you back tomorrow. Streaks, chests and a boss with a deadline do that better than a spreadsheet."]
    ],
    faq: [
      ["Is this like Habitica?", "Similar idea, but built only for training, with an AI rep counter and a calisthenics skill tree."],
      ["What phone do I need?", "Any modern iPhone or Android with Safari or Chrome."]
    ]
  },
  "/calisthenics-skill-tree": {
    title: "Calisthenics Skill Tree App: Push, Pull, Legs, Core | Sidequest Lift",
    desc: "A calisthenics progression app laid out as a skill tree. 37 skills from incline push-ups to the one-arm push-up, muscle-up and pistol squat. Unlock each one with real reps.",
    h1: "A calisthenics skill tree you unlock with real reps",
    img: "tree.jpg",
    alt: "Calisthenics skill tree showing squat progressions up to the pistol squat",
    body: [
      ["37 skills, 4 branches", "Push, pull, legs and core. Each branch starts easy and ends with a boss skill like the one-arm push-up."],
      ["Clear targets", "Every skill has a rep or hold target and a short form tip. Hit it and the next skills open up."],
      ["Proof, not honour system", "For rep skills you can use the camera counter, so unlocking means you really did it."],
      ["Rewards that scale", "Higher tiers give more XP and gold, and the top skills drop epic and legendary chests."]
    ],
    faq: [
      ["Is it for beginners?", "Yes. The first row is incline push-ups, dead hangs, squats and planks."],
      ["Do I need equipment?", "Mostly no. Pull branch skills need a bar."]
    ]
  },
  "/habitica-alternative": {
    title: "Habitica Alternative for the Gym | Sidequest Lift",
    desc: "Looking for a Habitica alternative focused on working out? Sidequest Lift turns lifting and calisthenics into an RPG with an AI rep counter. One-time CA$14.",
    h1: "A Habitica alternative made for training",
    img: "quests.jpg",
    alt: "Sidequest Lift quest list",
    body: [
      ["Same hook, gym focus", "If you liked earning XP for habits, Sidequest Lift does that just for training: workouts, reps, protein, sleep and steps."],
      ["What it adds", "A camera rep counter, a calisthenics skill tree, PR tracking and a weekly boss you beat with XP."],
      ["What it does not have", "No parties or guilds. It is a solo game about you getting stronger."],
      ["Pricing", "One payment, no subscription, up to 3 devices."]
    ],
    faq: [["Does it sync with Habitica?", "No. It is a separate app that keeps its data on your device."]]
  }
};
var esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
function renderSeo(path, origin) {
  const p = PAGES[path];
  const others = Object.entries(PAGES).filter(([k]) => k !== path).map(([k, v]) => `<a href="${k}">${esc(v.h1)}</a>`).join("");
  const ld = { "@context": "https://schema.org", "@type": "SoftwareApplication", name: "Sidequest Lift", applicationCategory: "HealthApplication", operatingSystem: "iOS, Android, Web", offers: { "@type": "Offer", price: "14", priceCurrency: "CAD" }, description: p.desc };
  const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: p.faq.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) };
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(p.title)}</title><meta name="description" content="${esc(p.desc)}"><link rel="canonical" href="${origin}${path}">
<meta property="og:title" content="${esc(p.title)}"><meta property="og:description" content="${esc(p.desc)}"><meta property="og:image" content="${origin}/img/${p.img}"><meta name="theme-color" content="#03050b">
<link href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@400;600;700&display=swap" rel="stylesheet">
<script type="application/ld+json">${JSON.stringify(ld)}<\/script><script type="application/ld+json">${JSON.stringify(faqLd)}<\/script>
<style>
:root{--bg:#03050b;--ink:#e8f5ff;--muted:#8ba2bd;--glow:#5ad8ff;--gold:#ffc94a;--line:rgba(90,216,255,.22);color-scheme:dark}
*{box-sizing:border-box;margin:0;padding:0}body{background:var(--bg);color:var(--ink);font-family:'Chakra Petch',system-ui,sans-serif;font-size:17px;line-height:1.6;-webkit-font-smoothing:antialiased}
a{color:var(--glow)}.wrap{max-width:980px;margin:0 auto;padding:0 18px}
nav{border-bottom:1px solid rgba(90,216,255,.12)}nav .wrap{display:flex;justify-content:space-between;align-items:center;height:60px}
.logo{font-weight:700;letter-spacing:.16em;font-size:15px;color:var(--ink);text-decoration:none}
.cta{display:inline-block;background:var(--gold);color:#140c00;font-weight:700;letter-spacing:.06em;padding:13px 24px;text-decoration:none;clip-path:polygon(9px 0,100% 0,100% calc(100% - 9px),calc(100% - 9px) 100%,0 100%,0 9px)}
.cta.sm{padding:8px 15px;font-size:14px}
header{display:grid;gap:32px;padding:46px 0 30px;align-items:center}@media(min-width:820px){header{grid-template-columns:1.2fr .8fr}}
h1{font-size:clamp(32px,5.4vw,52px);line-height:1.05}
.lead{color:#b8c9dc;margin:18px 0 26px;font-size:18px}.fine{color:var(--muted);font-size:14px;margin-top:12px}
header img{width:100%;max-width:340px;justify-self:center;border:1px solid var(--line);box-shadow:0 0 40px rgba(47,140,255,.25)}
section{padding:18px 0}h2{font-size:22px;margin-bottom:6px;color:#fff}
.cards{display:grid;gap:16px;padding:10px 0 30px}@media(min-width:720px){.cards{grid-template-columns:1fr 1fr}}
.card{border:1px solid var(--line);background:rgba(8,20,40,.55);padding:20px}.card p{color:#c3d3e4}
details{border-bottom:1px solid var(--line);padding:14px 0}summary{cursor:pointer;font-weight:700}details p{color:#c3d3e4;margin-top:8px}
.more{display:flex;flex-wrap:wrap;gap:10px 18px;padding:24px 0 10px;font-size:15px}
footer{color:var(--muted);font-size:13px;padding:34px 0 50px;text-align:center}
</style></head><body>
<nav><div class="wrap"><a class="logo" href="/">SIDEQUEST LIFT</a><a class="cta sm" href="/buy">Get it, CA$14</a></div></nav>
<main class="wrap">
<header><div><h1>${esc(p.h1)}</h1><p class="lead">${esc(p.desc)}</p><a class="cta" href="/buy">Get Sidequest Lift</a> <a href="/" style="margin-left:14px">See everything it does</a><p class="fine">One-time payment. Works on up to 3 devices. No account needed.</p></div>
<img src="/img/${p.img}" alt="${esc(p.alt)}" width="432" height="768" loading="eager"></header>
<div class="cards">${p.body.map(([h, t]) => `<div class="card"><h2>${esc(h)}</h2><p>${esc(t)}</p></div>`).join("")}</div>
<section><h2>Questions</h2>${p.faq.map(([q, a]) => `<details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join("")}</section>
<section style="text-align:center;padding:36px 0"><a class="cta" href="/buy">Start levelling up, CA$14</a></section>
<div class="more"><b style="color:#fff">More:</b>${others}</div>
</main><footer>Made by Ishan in Canada. Sidequest Lift. Train safe and know your limits.</footer></body></html>`;
}
function sitemap(origin) {
  const urls = ["/", ...Object.keys(PAGES)];
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.map((u) => `<url><loc>${origin}${u}</loc></url>`).join("")}</urlset>`;
}

// src/worker.js
var enc = new TextEncoder();
var MAX = (env) => parseInt(env.MAX_DEVICES || "3", 10);
var STRIPE = (env) => env.STRIPE_API || "https://api.stripe.com";
var worker_default = {
  async fetch(req, env) {
    const url = new URL(req.url);
    const p = url.pathname.replace(/\/+$/, "") || "/";
    try {
      if (p === "/") return html(landing_default);
      if (p === "/buy") {
        if (!env.PAYMENT_LINK) return page("Checkout is not set up yet", "<p>The store owner still needs to add the Stripe payment link.</p>", 503);
        return Response.redirect(env.PAYMENT_LINK, 303);
      }
      if (p === "/claim") return claim(url, env);
      if (p === "/unlock") return unlockPage(url.searchParams.get("key") || "", "");
      if (p === "/api/activate" && req.method === "POST") return activate(req, env);
      if (p === "/app") return serveApp(req, env);
      if (p === "/api/check") return check(req, env);
      if (PAGES[p]) return html(renderSeo(p, url.origin));
      if (p.startsWith("/img/") && IMAGES[p.slice(5)]) return new Response(IMAGES[p.slice(5)], { headers: { "content-type": "image/jpeg", "cache-control": "public, max-age=604800" } });
      if (p === "/sitemap.xml") return new Response(sitemap(url.origin), { headers: { "content-type": "application/xml" } });
      if (p === "/robots.txt") return new Response("User-agent: *\nDisallow: /app\nDisallow: /claim\nDisallow: /unlock\nSitemap: " + url.origin + "/sitemap.xml\n", { headers: { "content-type": "text/plain" } });
      return page("Page not found", '<p><a href="/">Back to Sidequest Lift</a></p>', 404);
    } catch (e) {
      return page("Something went wrong", "<p>Please try again in a minute. If it keeps happening, reply to your Stripe receipt email.</p>", 500);
    }
  }
};
function newKey() {
  const A = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789", b = crypto.getRandomValues(new Uint8Array(12));
  let s = "";
  for (let i = 0; i < 12; i++) {
    s += A[b[i] % A.length];
    if (i % 4 === 3 && i < 11) s += "-";
  }
  return "SQ-" + s;
}
var normKey = (k) => String(k || "").trim().toUpperCase().replace(/\s+/g, "");
async function getLic(env, key) {
  const v = await env.LICENSES.get("lic:" + normKey(key));
  return v ? JSON.parse(v) : null;
}
async function putLic(env, key, lic) {
  await env.LICENSES.put("lic:" + key, JSON.stringify(lic));
}
async function claim(url, env) {
  const sid = url.searchParams.get("sid") || url.searchParams.get("session_id") || "";
  if (!/^cs_[A-Za-z0-9_]+$/.test(sid)) return page("Missing purchase info", '<p>This link is missing your purchase details. Open the link from your payment confirmation page, or <a href="/unlock">enter your license key</a>.</p>', 400);
  let key = await env.LICENSES.get("sid:" + sid);
  let email = "";
  if (!key) {
    const r = await fetch(STRIPE(env) + "/v1/checkout/sessions/" + encodeURIComponent(sid), { headers: { Authorization: "Bearer " + env.STRIPE_SECRET } });
    if (!r.ok) return page("We could not find that purchase", "<p>Stripe did not recognise this checkout. If you were charged, reply to your Stripe receipt email and you will be sorted out.</p>", 404);
    const s = await r.json();
    if (s.payment_status !== "paid" && s.payment_status !== "no_payment_required") return page("Payment not finished", "<p>Your payment has not gone through yet. Refresh this page in a minute.</p>", 402);
    email = s.customer_details && s.customer_details.email || s.customer_email || "";
    key = newKey();
    await putLic(env, key, { sid, email, devices: [], created: Date.now() });
    await env.LICENSES.put("sid:" + sid, key);
    if (email) await env.LICENSES.put("email:" + email.toLowerCase(), key);
  }
  return claimPage(key);
}
async function activate(req, env) {
  let body = {};
  try {
    body = await req.json();
  } catch (e) {
  }
  const key = normKey(body.key), device = String(body.device || "").slice(0, 64);
  if (!key || !/^[A-Za-z0-9-]{8,64}$/.test(device)) return json({ ok: false, error: "Enter your license key." }, 400);
  const lic = await getLic(env, key);
  if (!lic) return json({ ok: false, error: "That key does not exist. Check for typos. Keys look like SQ-XXXX-XXXX-XXXX." }, 404);
  if (lic.revoked) return json({ ok: false, error: "This key has been disabled." }, 403);
  if (!lic.devices.includes(device)) {
    if (lic.devices.length >= MAX(env)) return json({ ok: false, error: "This key is already active on " + MAX(env) + " devices, which is the limit." }, 403);
    lic.devices.push(device);
    await putLic(env, key, lic);
  }
  const h = new Headers({ "content-type": "application/json" });
  const opt = "; Path=/; Max-Age=31536000; Secure; HttpOnly; SameSite=Lax";
  h.append("Set-Cookie", "sq_key=" + key + opt);
  h.append("Set-Cookie", "sq_dev=" + device + opt);
  return new Response(JSON.stringify({ ok: true }), { headers: h });
}
async function validDevice(req, env) {
  const c = cookies(req), key = c.sq_key, dev = c.sq_dev;
  if (!key || !dev) return false;
  const lic = await getLic(env, key);
  return !!(lic && !lic.revoked && lic.devices.includes(dev));
}
async function serveApp(req, env) {
  if (await validDevice(req, env)) {
    const host = new URL(req.url).hostname;
    const body = app_default.replace("<head>", "<head>" + GATE_JS.replace("%HOST%", JSON.stringify(host)));
    return html(body, { "cache-control": "private, no-store", "x-robots-tag": "noindex" });
  }
  return Response.redirect(new URL("/unlock", req.url).toString(), 302);
}
async function check(req, env) {
  const ok = await validDevice(req, env);
  return new Response(JSON.stringify({ ok }), { status: ok ? 200 : 401, headers: { "content-type": "application/json", "cache-control": "no-store" } });
}
var GATE_JS = `<script>(function(){var H=%HOST%,K='sq_ok',DAY=864e5;
function lock(m){try{window.stop()}catch(e){}var go=function(){document.documentElement.innerHTML='<head><meta name="viewport" content="width=device-width,initial-scale=1"><title>Sidequest Lift</title></head><body style="margin:0;min-height:100vh;display:grid;place-items:center;background:#0b0b10;color:#eee;font:16px system-ui,sans-serif;text-align:center;padding:16px"><div><p>'+m+'</p><p><a style="color:#ffb547" href="https://'+H+'/unlock">Unlock Sidequest Lift</a></p></div></body>';};if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',go);setTimeout(go,0)}else go();}
if(location.protocol!=='https:'&&location.hostname!=='localhost'||location.hostname!==H){lock('This copy of Sidequest Lift is not activated.');return;}
fetch('/api/check',{credentials:'same-origin',cache:'no-store'}).then(function(r){if(r.ok){try{localStorage.setItem(K,String(Date.now()))}catch(e){}}else if(r.status===401||r.status===403){location.replace('/unlock')}}).catch(function(){var t=0;try{t=+localStorage.getItem(K)||0}catch(e){}if(Date.now()-t>14*DAY)lock('Connect to the internet once so we can check your license.')});
})();<\/script>`;
function cookies(req) {
  const o = {};
  (req.headers.get("cookie") || "").split(";").forEach((p) => {
    const i = p.indexOf("=");
    if (i > 0) o[p.slice(0, i).trim()] = decodeURIComponent(p.slice(i + 1).trim());
  });
  return o;
}
var html = (b, extra) => new Response(b, { headers: { "content-type": "text/html; charset=utf-8", ...extra || {} } });
var json = (o, s) => new Response(JSON.stringify(o), { status: s || 200, headers: { "content-type": "application/json" } });
var esc2 = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
var SHELL = (title, body) => `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>${esc2(title)}</title>
<link href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@400;600;700&display=swap" rel="stylesheet">
<style>
:root{--bg:#03050b;--ink:#e8f5ff;--muted:#7d93ad;--glow:#5ad8ff;--gold:#ffc94a;--red:#ff4d6d;--line:rgba(90,216,255,.24);color-scheme:dark}
*{box-sizing:border-box;margin:0;padding:0}
body{min-height:100vh;display:grid;place-items:center;padding:24px 16px;background:radial-gradient(700px 480px at 50% -80px,rgba(47,107,255,.3),transparent 70%),var(--bg);color:var(--ink);font-family:'Chakra Petch',system-ui,sans-serif;font-size:16px;line-height:1.5}
.card{position:relative;width:100%;max-width:440px;text-align:center;border:1px solid var(--line);background:linear-gradient(180deg,rgba(12,30,58,.85),rgba(4,11,24,.95));padding:34px 22px 26px;box-shadow:0 0 50px rgba(47,140,255,.15)}
.card::before{content:"";position:absolute;inset:-2px;pointer-events:none;background:linear-gradient(var(--glow),var(--glow)) top left/14px 2px no-repeat,linear-gradient(var(--glow),var(--glow)) top left/2px 14px no-repeat,linear-gradient(var(--glow),var(--glow)) top right/14px 2px no-repeat,linear-gradient(var(--glow),var(--glow)) top right/2px 14px no-repeat,linear-gradient(var(--glow),var(--glow)) bottom left/14px 2px no-repeat,linear-gradient(var(--glow),var(--glow)) bottom left/2px 14px no-repeat,linear-gradient(var(--glow),var(--glow)) bottom right/14px 2px no-repeat,linear-gradient(var(--glow),var(--glow)) bottom right/2px 14px no-repeat;filter:drop-shadow(0 0 4px var(--glow))}
.k{font-size:12px;font-weight:700;letter-spacing:.28em;color:var(--glow);text-shadow:0 0 10px var(--glow)}
h1{font-size:28px;line-height:1.15;margin:10px 0 8px}
p{color:#b8c9dc;margin-top:10px}
a{color:var(--glow)}
.key{margin:20px 0 6px;padding:16px 10px;border:1px dashed var(--gold);font-size:clamp(17px,6vw,24px);font-weight:700;letter-spacing:.04em;color:var(--gold);text-shadow:0 0 14px rgba(255,201,74,.5);white-space:nowrap;user-select:all}
.btn{display:block;width:100%;margin-top:14px;padding:15px;border:0;background:var(--gold);color:#140c00;font:700 16px 'Chakra Petch',sans-serif;letter-spacing:.1em;cursor:pointer;text-decoration:none;box-shadow:0 0 24px rgba(255,201,74,.35)}
.btn.ghost{background:transparent;color:var(--ink);border:1px solid var(--line);box-shadow:none;font-size:14px;padding:11px}
input{width:100%;margin-top:18px;padding:14px;background:rgba(4,12,24,.9);border:1px solid var(--line);color:var(--ink);font:700 18px 'Chakra Petch',sans-serif;text-align:center;letter-spacing:.06em;text-transform:uppercase}
input:focus{outline:none;border-color:var(--glow);box-shadow:0 0 12px rgba(90,216,255,.3)}
.err{color:var(--red);min-height:22px;margin-top:10px;font-size:14px}
small{display:block;color:var(--muted);margin-top:14px;font-size:13px}
</style></head><body><main class="card">${body}</main></body></html>`;
function page(title, body, status) {
  return new Response(SHELL(title, `<div class="k">[ SYSTEM ]</div><h1>${esc2(title)}</h1>${body}`), { status: status || 200, headers: { "content-type": "text/html; charset=utf-8" } });
}
var DEVICE_JS = `function dev(){try{let d=localStorage.getItem('sq_device');if(!d){d=Array.from(crypto.getRandomValues(new Uint8Array(12)),b=>b.toString(16).padStart(2,'0')).join('');localStorage.setItem('sq_device',d);}return d;}catch(e){return 'dev'+Date.now().toString(36)+Math.random().toString(36).slice(2,10);}}
async function unlock(key,errEl,btn){btn.disabled=true;btn.textContent='CHECKING...';errEl.textContent='';
 try{const r=await fetch('/api/activate',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({key,device:dev()})});const j=await r.json();
  if(j.ok){location.href='/app';return;}errEl.textContent=j.error||'Could not unlock.';}catch(e){errEl.textContent='No connection. Try again.';}
 btn.disabled=false;btn.textContent=btn.dataset.l;}`;
function claimPage(key) {
  return new Response(SHELL("Your Sidequest Lift key", `
<div class="k">[ SYSTEM ] PURCHASE CONFIRMED</div>
<h1>You have been selected as a Player.</h1>
<p>This is your license key. <b>Screenshot it</b> so you never lose it.</p>
<div class="key" id="key">${esc2(key)}</div>
<button class="btn ghost" id="copy" type="button">Copy key</button>
<button class="btn" id="go" data-l="ENTER THE SYSTEM">ENTER THE SYSTEM</button>
<div class="err" id="err"></div>
<small>Open this on the phone you will train with. Your key works on up to 3 devices. After it opens, tap Share then Add to Home Screen.</small>
<script>${DEVICE_JS}
const K=${JSON.stringify(key)};
document.getElementById('copy').onclick=async e=>{try{await navigator.clipboard.writeText(K);e.target.textContent='Copied';}catch(x){}};
const g=document.getElementById('go');g.onclick=()=>unlock(K,document.getElementById('err'),g);
<\/script>`), { headers: { "content-type": "text/html; charset=utf-8", "cache-control": "private, no-store" } });
}
function unlockPage(prefill) {
  return html(SHELL("Unlock Sidequest Lift", `
<div class="k">[ SYSTEM ] ACCESS REQUIRED</div>
<h1>Enter your license key</h1>
<p>You got it right after checkout. It looks like SQ-XXXX-XXXX-XXXX.</p>
<form id="f"><input id="k" autocomplete="off" autocapitalize="characters" spellcheck="false" placeholder="SQ-XXXX-XXXX-XXXX" value="${esc2(prefill)}" aria-label="License key">
<button class="btn" id="b" data-l="UNLOCK">UNLOCK</button></form>
<div class="err" id="err"></div>
<small>No key yet? <a href="/">Get Sidequest Lift</a>. Lost your key? Reply to your Stripe receipt email.</small>
<script>${DEVICE_JS}
document.getElementById('f').onsubmit=e=>{e.preventDefault();const b=document.getElementById('b');unlock(document.getElementById('k').value,document.getElementById('err'),b);};
<\/script>`), { "cache-control": "no-store" });
}
export {
  worker_default as default
};
