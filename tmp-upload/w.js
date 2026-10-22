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
.nav{position:fixed;left:0;right:0;bottom:0;z-index:60;background:linear-gradient(180deg,rgba(3,5,11,.6),rgba(3,5,11,.97) 30%);backdrop-filter:blur(10px);border-top:1px solid var(--line);padding:8px 8px calc(8px + env(safe-area-inset-bottom))}
.nav .in{max-width:480px;margin:0 auto;display:grid;grid-template-columns:repeat(5,1fr)}
.nav button{display:grid;justify-items:center;gap:3px;padding:4px 0;color:var(--muted);font-size:11px;font-weight:700;letter-spacing:.08em;position:relative}
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
  {id:'rB',t:'B rank',a:'B',c:'#a77bff',title:'Elite Hunter'}
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
function fresh(){return{name:'Player',unit:'lb',sound:true,rest:90,totalXP:0,pack:'starter',quests:packQuests('starter'),prog:{},bonus:{},history:{},alloc:{STR:0,AGI:0,VIT:0,END:0,WIL:0},spent:0,prs:{},prCount:0,sessions:[],cur:null,bw:[],badges:[],title:'',bossWeek:'',bossDefeated:false,kills:0,bestStreak:0,seq:0,gold:0,chests:[],potions:0,shields:0,buffUntil:0,skins:['rank'],skin:'rank',cls:'',awake:false,shieldDays:[],penSeen:''};}
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
  scrollTo({top:0});if(v==='status')setTimeout(sizeEmbers,30);
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

/* ---------- AI rep tracker ---------- */
const CAMSVG='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M3 8h4l2-3h6l2 3h4v11H3z"/><circle cx="12" cy="13" r="3.5"/></svg>';
const TRACK=[
 {n:'Push-ups',re:/push/i,j:[11,13,15],lo:95,hi:150,at:'hi',cue:'Side view, whole body in frame',fix:'Chest lower',L:['DOWN','UP']},
 {n:'Squats',re:/squat|leg press/i,j:[23,25,27],lo:105,hi:155,at:'hi',cue:'Side view, hips to feet in frame',fix:'Go deeper',L:['DEPTH','STAND']},
 {n:'Pull-ups',re:/pull.?up|chin|pulldown/i,j:[11,13,15],lo:80,hi:145,at:'lo',cue:'Face the camera, arms in frame',fix:'Pull higher',L:['TOP','HANG']},
 {n:'Burpees',re:/burpee/i,tilt:1,lo:30,hi:60,at:'lo',cue:'Side view, full body in frame',fix:'Get all the way down',L:['STAND','FLOOR']},
 {n:'Sit-ups',re:/sit.?up|crunch/i,j:[11,23,25],lo:75,hi:115,at:'lo',cue:'Side view, lying down',fix:'Come up higher',L:['UP','DOWN']},
 {n:'Lunges',re:/lunge|split squat/i,j:[23,25,27],lo:110,hi:155,at:'hi',cue:'Side view, step into frame',fix:'Lower the back knee',L:['DEPTH','STAND']},
 {n:'Jumping jacks',re:/jack/i,j:[23,11,15],lo:45,hi:130,at:'hi',cue:'Face the camera, full body',fix:'Hands all the way up',L:['DOWN','UP']},
 {n:'Dips',re:/dip/i,j:[11,13,15],lo:100,hi:150,at:'hi',cue:'Side view',fix:'Lower',L:['DOWN','UP']},
 {n:'Bicep curls',re:/curl/i,j:[11,13,15],lo:60,hi:140,at:'lo',cue:'Side view, arm in frame',fix:'Curl all the way up',L:['TOP','DOWN']},
 {n:'Overhead press',re:/overhead|shoulder press|ohp|military/i,j:[11,13,15],lo:85,hi:150,at:'hi',cue:'Face the camera',fix:'Lock out overhead',L:['RACK','LOCKOUT']},
 {n:'Bench press',re:/bench|chest press/i,j:[11,13,15],lo:90,hi:150,at:'hi',cue:'Camera to your side',fix:'Bar to chest',L:['CHEST','LOCKOUT']},
 {n:'Rows',re:/row/i,j:[11,13,15],lo:85,hi:145,at:'lo',cue:'Side view',fix:'Pull to your stomach',L:['PULL','REACH']},
 {n:'Lateral raises',re:/lateral|side raise/i,j:[23,11,13],lo:30,hi:75,at:'hi',cue:'Face the camera',fix:'Raise to shoulder height',L:['DOWN','UP']},
 {n:'Deadlifts',re:/deadlift|rdl|good morning/i,j:[11,23,25],lo:115,hi:160,at:'hi',cue:'Side view, full body',fix:'Hinge lower',L:['HINGE','LOCKOUT']},
 {n:'Hip thrusts',re:/hip thrust|glute bridge/i,j:[11,23,25],lo:125,hi:160,at:'hi',cue:'Side view',fix:'Squeeze to the top',L:['DOWN','TOP']}
];
const trackFor=name=>TRACK.find(t=>t.re.test(name||''));
const BONES=[[11,12],[11,13],[13,15],[12,14],[14,16],[11,23],[12,24],[23,24],[23,25],[25,27],[24,26],[26,28],[27,31],[28,32],[27,29],[28,30]];
function makeCounter(t){return{state:null,reps:0,ema:null,half:false,ext:null,q:null,
  feed(m){this.ema=this.ema==null?m:this.ema*.5+m*.5;const v=this.ema,s=v<=t.lo?'lo':v>=t.hi?'hi':null;let ev=null;
    if(this.state&&this.state!==t.at)this.ext=this.ext==null?v:(this.state==='lo'?Math.min(this.ext,v):Math.max(this.ext,v));
    if(s&&s!==this.state){if(this.state&&s===t.at){this.reps++;ev='rep';const deep=this.state==='lo'?this.ext<=t.lo-8:this.ext>=t.hi+8;this.q=deep?'perfect':'good';}this.state=s;this.half=false;this.ext=null;}
    else if(this.state===t.at){const mid=(t.lo+t.hi)/2;if(t.at==='hi'?v<mid:v>mid)this.half=true;else if(this.half&&(t.at==='hi'?v>=t.hi-4:v<=t.lo+4)){this.half=false;ev='partial';}}
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
const RT={start:0,combo:0,goal:0,goalHit:false,ctx:null,t:TRACK[0],c:null,mode:'cam',facing:'user',stream:null,raf:0,live:false,lastT:-1,voice:true,cue:'',cueUntil:0};
function rtSay(n){if(!RT.voice||!('speechSynthesis' in window))return;try{speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(String(n));u.rate=1.25;u.pitch=1.05;speechSynthesis.speak(u);}catch(e){}}
function rtCue(txt,cls,ms){const el=$('rtCue');el.textContent=txt;el.className='rt-cue'+(cls?' '+cls:'');RT.cueUntil=ms?Date.now()+ms:0;}
function rtSetEx(t){RT.t=t;RT.c=makeCounter(t);RT.live=false;RT.start=0;RT.combo=0;RT.goalHit=false;$('rtCombo').textContent='0';
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
  clearInterval(cdTimer);RT.live=false;let n=3;$('rt').classList.add('scanning');
  const show=()=>{$('rtMid').innerHTML='<div><div class="cd">'+n+'</div><div class="msg">'+esc(RT.t.cue)+'</div></div>';sfx('tick');};
  show();cdTimer=setInterval(()=>{n--;if(n>0)show();else{clearInterval(cdTimer);$('rtMid').innerHTML='<div class="cd">GO</div>';sfx('done');RT.live=true;$('rt').classList.remove('scanning');setTimeout(()=>{if(RT.live)$('rtMid').innerHTML='';},700);}},1000);
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
  if(vis<.5){if(!RT.cueUntil||Date.now()>RT.cueUntil)rtCue(t.cue,'warn',0);return;}
  const span=(t.hi+25)-(t.lo-25);$('rtG').style.height=Math.max(0,Math.min(100,(m-(t.lo-25))/span*100))+'%';
  if(!RT.live)return;
  if(RT.cueUntil&&Date.now()<RT.cueUntil){}else rtCue(RT.c.reps?'':'Start your reps','',0);
  const ev=RT.c.feed(m);
  if(ev==='rep')rtRep();
  else if(ev==='partial'){rtCue(t.fix,'warn',1400);sfx('down');}
}
function rtMode(mo){RT.mode=mo;$('rt').classList.toggle('tap',mo==='tap');document.querySelectorAll('#rtMode button').forEach(b=>b.classList.toggle('on',b.dataset.m===mo));
  if(mo==='tap'){rtStopCam();rtTapUI();}else{rtCue('','',0);rtStartCam();}}
function openTracker(ctx){
  RT.ctx=ctx;const t=trackFor(ctx.name)||RT.t;
  RT.goal=0;if(ctx.from==='quest'){const q=S.quests.find(x=>x.id===ctx.id);if(q)RT.goal=Math.max(1,Math.ceil(q.target-progOf(q.id)));}
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
  if(ctx.from==='quest'){const q=S.quests.find(x=>x.id===ctx.id);if(q)setProg(q,progOf(q.id)+n);}
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
      if (p === "/robots.txt") return new Response("User-agent: *\nDisallow: /app\nDisallow: /claim\nDisallow: /unlock\n", { headers: { "content-type": "text/plain" } });
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
var esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
var SHELL = (title, body) => `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>${esc(title)}</title>
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
  return new Response(SHELL(title, `<div class="k">[ SYSTEM ]</div><h1>${esc(title)}</h1>${body}`), { status: status || 200, headers: { "content-type": "text/html; charset=utf-8" } });
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
<div class="key" id="key">${esc(key)}</div>
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
<form id="f"><input id="k" autocomplete="off" autocapitalize="characters" spellcheck="false" placeholder="SQ-XXXX-XXXX-XXXX" value="${esc(prefill)}" aria-label="License key">
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
