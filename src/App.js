// ============================================================
// SESSION SUMMARY — Portfolio tråd, mars 2026
// ============================================================
//
// VAD VI GJORT:
// Komplett omskrivning av Chattitude-caset baserat på insikter
// från Chattitude-projektets chattar samt Karls egna reflektioner
// om ursprunget, processen och vad projektet egentligen lärde honom.
//
// STÖRRE BESLUT OCH ÄNDRINGAR:
//
// 1. ORIGIN-STORYN LYFTES FRAM
//    Chattitude var Karls ansökan till Hyper Island 2019 — han kom in,
//    var finalist i en separat tävling samma år, och lade sedan idén åt sidan
//    eftersom tekniken inte var mogen. 2026 var den det. Denna arc
//    är nu casets fundament och berättas i intrот.
//
// 2. INTRO OMSKRIVET
//    Från produktbeskrivning till personlig tidslinje.
//    Slutar med: "Planets aligned. I built it."
//
// 3. NY SEKTION: ORIGIN
//    Rubrik: "Constraints kill ideas before they're born."
//    Visar Karls innovationsfilosofi: assume the constraint away,
//    follow the idea, figure out feasibility second.
//
// 4. TVÅ SEKTIONER SLOGS IHOP TILL "THE PIVOT"
//    Jacob (gammal vän, PhD i socialantropologi) i bastun —
//    föreslog anonymous matching och high scores.
//    "Colder than the plunge pool after. That question didn't leave."
//    Karl tog frågan tillbaka till Claude i dagars back-and-forth.
//    Resulterade i insikten om två helt olika produkter:
//    debattträning för de som vill vinna vs något tystare —
//    för de som vill stanna kvar i rummet.
//    "That second product is harder to build, harder to sell,
//    and probably more needed. That's the one I chose."
//
// 5. PRODUCT LOGIC
//    Tre "no"-beslut gjordes om till separata stycken för skannbarhet.
//    Shared health bar lades till — båda deltagare ansvariga för
//    konversationens hälsa, inte sin egen poäng. Starkt UX-beslut
//    rotat i vision.
//
// 6. "BUILDING WITH AI"-SEKTIONEN TOGS BORT
//    Onödig — intrот och titeln gör redan det jobbet.
//
// 7. OUTCOMES OMSKRIVNA
//    Från leveransfokus till lärandefokus:
//    - AI end-to-end för första gången, MVP på veckor
//    - AI som tänkepartner för beslut, inte bara verktyg
//    - Lärdomen om demand vs självupplevda behov
//
// 8. TENSIONS OMSKRIVNA
//    Från tre till två. Borttaget: origin-storyn (redan berättad).
//    Kvar: "AI makes you faster. It doesn't make you right."
//    Ny: "What started as a fun challenge ended up asking
//    uncomfortable questions."
//
// 9. ABOUT-SIDAN UPPDATERAD
//    Chattitude-meningen matchar nu origin-storyn:
//    "an idea worth pitching in 2019 is worth building in 2025"
//
// NÄSTA STEG:
// - Läs igenom hela caset i ett svep
// - Lägg in bilder: 2019-pitch vs färdig produkt (Product Logic)
//                   De två arenorna (The Pivot)
// - Produktbeskrivningen saknas medvetet — bilderna gör det jobbet
// - Övriga case oförändrade i denna tråd
//
// ============================================================

import { useState, useEffect } from "react";

// ============================================================
// RESPONSIVE HOOK
// ============================================================
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
}

// ============================================================
// DATA
// ============================================================

const caseData = {
  meter: {
    accent: "#4ade80",
    accentRgb: "74,222,128",
    gradient: "linear-gradient(135deg, #0a2e1f 0%, #1a5c40 100%)",
    subtitle: "Pre-Seed Healthtech - Product Design",
    title: "Load-Bearing Design",
    intro: "Three people, no funding, and a product that existed as an API and rough sketches. No design language, no established decisions — just a founder with strong opinions and a designer willing to stress-test every single one of them.\n\nThe friction was the process. Most of what held up, held up better for having been challenged.",
    sections: [
      {
        label: "Context",
        headline: "A serious product. No design foundation yet.",
        body: "Meter aggregates health data from multiple wearables into a single view. The founder had spent months embedded in Reddit communities, building firsthand knowledge of what users wanted and why. He'd validated demand the hard way, and had investors ready to commit pending 1–5% conversion proof. What the product needed was a user-ready beta to get there.\n\nThe backend existed. The community existed. What didn't was any coherent visual language, interaction logic, or agreed-upon product structure. Before I could design anything I needed to understand the product from the inside — the founder lent me a GPS watch so I could actually collect data and feel what the experience was supposed to solve.\n\nThe usual UX process — structured research, documented insights — wasn't the foundation here. The founder had deep knowledge of his users, built through direct immersion rather than formal methods. Learning to work from that, and to choose my challenges carefully rather than questioning everything equally, took time to calibrate.",
        detail: [
          { label: "Role", value: "Founding Product Designer" },
          { label: "Team", value: "Founder, developer, me" },
          { label: "Stage", value: "Pre-seed, investor-ready beta" },
          { label: "Scope", value: "Home, Settings, Onboarding, Activity, Body Status, Nutrition Form, Strength Assessment, Splash Screens, No-data states, App Store assets", wide: true },
        ],
      },
      {
        label: "Framework",
        headline: "Spotify as a strategic decision, not a mood board.",
        body: "The first structural call was what to design against. Meter's competitors either buried users in data or talked down to them — overly technical on one end, paternalistic on the other. Spotify handles deep complexity with a calm, democratic visual language that scales across dozens of surfaces without losing coherence. That tension — sophisticated without being intimidating — was exactly what Meter needed to resolve.\n\nIt gave us a shared reference point for every visual decision that followed.",
        image: true,
        imageCaption: "Design framework: visual language built for scale",
      },
      {
        label: "Pressure",
        headline: "The job was to make sure nothing survived by default.",
        body: "The working method was direct. I interrogated every product decision — from information architecture to feature logic — until it either held up or we changed it. Not every challenge landed. Maybe one in ten conversations ended in a pivot. Frustration came and went on both sides. The process continued.\n\nThe point wasn't to win arguments. It was to make sure nothing survived by default. Benefits is the clearest example: the idea surfaced in one of those push-back conversations — the founder arrived at it himself, under pressure, working through the logic out loud. That's how it should work.",
        image: true,
        imageCaption: "Benefits feature: born from a push-back conversation",
      },
      {
        label: "Design",
        headline: "Lo-fi in structure. Hi-fi in detail. No shortcuts.",
        body: "The process was a hybrid: wireframes built in greyscale but at enough fidelity that moving to hi-fi meant applying colour, light and shadow — not rethinking layout. At a startup with no runway for false starts, that discipline kept things moving.\n\nThe dashboard was the core surface. The Activity view was particularly stubborn — there was a lot the product wanted to communicate in very little space, and at one point the founder jumped into Figma to sketch alongside me. Looking at what the current version of Meter simplified, it's clear that tension was real. Sometimes a product has to find that out for itself.",
        image: true,
        imageCaption: "Lo-fi wireframes to hi-fi: dashboard and activity view",
      },
      {
        label: "Initiative",
        headline: "One search. 300 members.",
        body: "I asked where Garmin users actually hang out. Ten minutes later we had a Discord server. It grew to 200 during my time, 300+ since. The most engaged members became an active feedback layer — dedicated channels where they tested flows, filed bugs, and debated features. The community became the product's nervous system.",
        image: true,
        imageCaption: "Community as product team: contributor channels and growth",
      },
    ],
    outcomes: [
      "Visual language and interaction framework across eleven product surfaces",
      "300+ Discord members, core group actively shaping the product",
      "Benefits feature: surfaced through push-back, became a core product pattern",
    ],
    tensions: [
      { title: "I proposed a rebrand. The founder said no.", body: "Late in the project I pushed for significant identity changes. He had reasons to keep things as they were. I executed his vision at the highest level I could. Sometimes that's the right call." },
      { title: "My design didn't make it into v2. There is no v2 without v1.", body: "I checked in with the founder a year later. Nothing had survived — new designer, new vision, rebuilt architecture. That's startup reality. But the work served its purpose: it gave the product something concrete to react to, something to build from and eventually move beyond. Early-stage design work isn't meant to last forever. It's meant to get the product to the next phase." },
      { title: "Vision as a decision filter.", body: "Brand thinking and product thinking aren't in conflict — they share the same foundation. A clear long-term vision makes individual product decisions faster and more consistent. That's what I brought to the table, and it's what made the friction productive rather than just difficult." },
    ],
    next: { title: "Built Alone. Not Alone.", subtitle: "AI-Built Civic Tech", id: "chattitude", accent: "#a78bfa" },
  },

  chattitude: {
    accent: "#a78bfa",
    accentRgb: "167,139,250",
    gradient: "linear-gradient(135deg, #1a0e2e 0%, #3b1f6e 100%)",
    subtitle: "Civic Tech - Solo Product",
    title: "Built Alone. Not Alone.",
    intro: "In 2019, I submitted a product idea to Hyper Island: a platform where people could have real conversations across disagreement, with an AI quietly surfacing the patterns that make dialogue break down. It got me in. Then I set it aside — the technology wasn't ready.\n\nFast forward to 2026. The tech is there. I'm on parental leave. Evenings after the kids are in bed. Planets aligned. I built it.",
    sections: [
      {
        label: "Origin",
        headline: "Constraints kill ideas before they're born.",
        body: "Drop a link into a heated thread. It becomes an invitation to have the same conversation differently — with structure, with feedback, with something watching for the habits that make people stop listening.\n\nI knew the technology wasn't ready. I pitched it anyway. Assume the constraint away, follow the idea, figure out feasibility second.",
        detail: [
          { label: "Role", value: "Strategy, design, development" },
          { label: "Built with", value: "Claude API, React" },
          { label: "Stage", value: "Working MVP, validation phase" },
          { label: "Timeline", value: "November 2025 – January 2026, parental leave", wide: true },
        ],
      },
      {
        label: "The Pivot",
        headline: "Good input. Wrong direction.",
        body: "Mid-build, an old friend and PhD in social anthropology asked who this was actually for. We were in a sauna. He suggested anonymous matching, high scores, a bigger market. It was good input. It was also the wrong direction — it optimised for reach, not impact.\n\nColder than the plunge pool after. That question didn't leave.\n\nI kept bringing it back to Claude. Days of back and forth. Until something clearer emerged: two completely different products hiding inside the same concept. Public debate training for people who want to win. And something quieter — for people who just want to stay in the room. For people who care enough to show up but have learned it's safer not to.\n\nThat second product is harder to build, harder to sell, and probably more needed. That's the one I chose.",
        image: true,
        imageCaption: "The two arenas: where the product could go, and where it needed to go",
      },
      {
        label: "Product Logic",
        headline: "Most of the decisions were things not to do.",
        body: "No anonymous debate matching — too disconnected from the relationships where this actually matters.\n\nNo high scores — they'd reward winning, not understanding.\n\nNo 'debate training' framing — wrong signal entirely.\n\nWhat replaced the scoreboard: a shared health bar. Both participants responsible for the same conversation. Not your performance versus theirs — your collective ability to stay in the room together.\n\nThe AI analysis runs at a 75% confidence threshold before influencing a user's score. A 10-second pause before messages send. Each constraint came from the same recurring question: does this support the conversation, or does it turn into a weapon?",
        image: true,
        imageCaption: "From 2019 pitch sketch to finished product — the vision that held",
      },
      {
        label: "Building with AI",
        headline: "Weeks, not months. One person, not a team.",
        body: "The actual build happened in evenings after the kids were asleep. Claude handled code generation, architecture, and debugging — the kind of work that usually takes a cross-functional team several months.\n\nBut the speed only meant something because the strategic work came first. The arguments about audience, the debates about what listening actually requires, the deliberate boundary-testing about what the product should refuse to become — all of that happened before a single component was written. AI compresses the distance between decision and execution. It doesn't generate the decisions worth making.",
        image: true,
        imageCaption: "The workflow: conviction first, execution second",
      },
    ],
    outcomes: [
      "Concept to working MVP in weeks — evenings, solo, during parental leave",
      "Used AI as a thinking partner for product decisions as much as implementation",
      "Learned the hardest lesson: the difference between a problem you have and a problem others will pay to solve",
    ],
    tensions: [
      { title: "AI makes you faster. It doesn't make you right.", body: "Every output needed judgment. The risk isn't bad code — it's plausible-sounding direction that nobody stops to question. The sparring only worked because I was willing to be wrong." },
      { title: "What started as a fun challenge ended up asking uncomfortable questions.", body: "About demand, about personal need, about how much one person can carry alone. That's not a failure — it's the most useful thing the project taught me." },
    ],
    next: { title: "Brands That Last", subtitle: "Brand Identity & Strategy", id: "grenkultur", accent: "#86efac" },
  },

  grenkultur: {
    accent: "#86efac",
    accentRgb: "134,239,172",
    gradient: "linear-gradient(135deg, #0a2e12 0%, #2d5a1e 100%)",
    subtitle: "Brand Identity & Strategy",
    title: "Brands That Last",
    intro: "Three clients. Three industries. Three problems that turned out to be something other than what was on the brief.",
    sections: [
      {
        label: "Grenkultur",
        headline: "The others look homemade. I went the other way.",
        body: "My starting assumption: every trade company — arborists included — looks homemade. The ones that don't, and do decent work, win. I built the entire brand around that.\n\nNo benchmarking, no data. Just a conviction that felt true, and a client who trusted it — gave me free rein, which says everything. What does premium look like in this visual context? A Swiss-style typeface — the stability of Helvetica on the NYC subway. A symbol that isn't a logotype: an illustration and a letterform merged, the leaf growing inside the G. And grenkultur.se as the wordmark — structured, typographically neutral, closer to Stockholm Stad than a local handyman. That's the point. It sweeps the floor visually against every competitor with their cluttered, loud, homemade identities.\n\nThe colour did the rest. Monochrome pastel green and white. Simple, calm, competent. No phone numbers, no social icons, no taglines. Just grenkultur.se. You get it. If you want more, you go there. One button on the stereo. Volume only.",
        image: true,
        imageSrc: [
          { src: "/images/brands-that-last/grenkultur/grabbar.jpg", caption: "The founders — wearing the brand they built the business around" },
          { src: "/images/brands-that-last/grenkultur/arborist.jpg", caption: "The brand at work — logotype on workwear and van" },
          { src: "/images/brands-that-last/grenkultur/visitkort.jpg", caption: "Business cards — full identity system in print" },
        ],
        outcomes: [
          "Won a municipal contract with Värmdö kommun in 2023 — five years after the brand launched",
          "~100 returning private clients, growing by roughly 10 per year",
          "A brand that positions a two-person firm above competitors twice their size",
        ],
      },
      {
        label: "Tropic City",
        headline: "The Mark That Found Its Shape.",
        body: "Sebastian De La Cruz and Philip Stefanescu — two award-winning bartenders from Stockholm — ended up staying in Bangkok and opening their own place. They came to me for a logo. The brief: tropical but classic, somewhere between Miami Vice and The Great Gatsby.\n\nI gave them a bunch of directions. The feedback on the first round was roughly: can you add a palm leaf? So I did. The palm leaf became the thread — an abstract mark where the negative space does the work, the outline doesn't fully exist but the eye finds it anyway. Complex and minimal at the same time. A handwritten font like a signature, a round classic form that works as a digital avatar as much as a neon sign. It knows what it wants.\n\nThat was 2017. The mark has never changed. It works in neon, on ice, on a matchbook, on a menu. Sebastian and Philip are proud of it — and that matters.",
        image: true,
        imageSrc: [
          { src: "/images/brands-that-last/tropic-city/sign.jpg", caption: "The final mark — unchanged since 2017" },
          { src: "/images/brands-that-last/tropic-city/neon-sign.jpg", caption: "Sebastian and Philip — in front of what they built" },
          { src: "/images/brands-that-last/tropic-city/process.jpg", caption: "Early directions — exploring the brief" },
        ],
        outcomes: [
          "No. 6 Asia's 50 Best Bars 2023",
          "No. 24 World's 50 Best Bars 2022",
          "Same mark since 2017 — never updated, never needed to be",
        ],
      },
      {
        label: "Evidy",
        headline: "The pitch turned into a listening session. That was the turning point.",
        body: "Haimdall Solutions made smart lighting and care environments for elder care homes. Strong products, no brand — and a corporate structure with a parent company and two sub-brands that nobody had fully mapped.\n\nAfter workshops and briefing sessions, we came in to present our first direction — statements, mission, vision, brand promise. The kind of work you're proud of walking into a room with. They didn't recognise themselves in much of it. Not because it was wrong, but because they weren't aligned internally either. The room shifted. What started as a presentation became a facilitated session — us stepping back, asking questions, listening. We went from pitching to helping them figure out what they actually believed.\n\nIt stung. But it gave us what we needed. We went back and reworked the language and the colour system. The name Evidy comes from evidence — measurable impact, stated plainly.",
        image: true,
        imageSrc: [
          { src: "/images/brands-that-last/evidy/logo.png", caption: "Final identity — deployed across 15+ elder care facilities" },
          { src: "/images/brands-that-last/evidy/structure.jpg", caption: "Mapping the business before touching design — this was the real project" },
          { src: "/images/brands-that-last/evidy/app.jpeg", caption: "Caire app — live reporting and statistics for care staff" },
          { src: "/images/brands-that-last/evidy/caire.png", caption: "Caire app — final version in brand colours" },
        ],
        outcomes: [
          "Identity running across 15+ elder care facilities, five years after delivery",
          "A pitch that became a strategy session — and was better for it",
        ],
      },
    ],
    outcomes: [],
    tensions: [
      { title: "The brief isn't always the brief.", body: "Evidy started as a naming and visual identity project. It turned out to be a structural strategy session first. The design only worked because we did that part nobody asked for." },
      { title: "The best creative direction I ever received fit in a sentence.", body: "Tropical but classic — somewhere between Miami Vice and The Great Gatsby. The mood imagery confirmed it. Everything else was following that thread all the way to a mark that's still unchanged seven years later." },
      { title: "A brand that needs explaining isn't working.", body: "Grenkultur, Tropic City, Evidy — none of them require a presentation. They work on a van, on a neon sign, in a procurement meeting." },
    ],
    next: { title: "Klingit & PwC", subtitle: "Enterprise Design Leadership", id: "enterprise", accent: "#818cf8" },
  },

  enterprise: {
    accent: "#818cf8",
    accentRgb: "129,140,248",
    gradient: "linear-gradient(135deg, #111127 0%, #2a2a4a 100%)",
    subtitle: "Klingit & PwC Experience Center",
    title: "Room to Lead",
    intro: "The pattern has been consistent across every environment I've worked in: when I see something that doesn't make sense, I say so.\n\nKlingit was where that instinct got tested at pace. PwC was where it held under more formal conditions. Both taught me something different about what it means to lead through design rather than just execute it.",
    sections: [
      {
        label: "Klingit",
        headline: "Creative lead. Full accountability. No safety net.",
        body: "Klingit is a Swedish creative agency running client work through a distributed model — designers based abroad, with a local creative lead responsible for quality, client relationships, and everything in between. My title was Creative Project Manager. In practice it meant owning the delivery end to end: briefing designers, ensuring the output met the standard Swedish clients expect, and being the one on the call when something needed to be fixed or defended.\n\nI was brought in to handle some of their largest accounts at the time — partly because I could lead the work, and partly because I could step in and do the design myself if needed. At peak I was running four client accounts alongside four marketing campaigns simultaneously, directing designers across all of them.",
        image: true,
        imageCaption: "Brandexperten.se and Odevo.com — both still live",
      },
      {
        label: "The Clas Fixare Moment",
        headline: "I saw something that didn't add up. Said so. Got the chance to prove it.",
        body: "Clas Ohlson's Clas Fixare platform came with an existing information architecture put together by my manager. It didn't make sense to me — I couldn't follow the logic, and suspected users wouldn't either.\n\nI raised it directly. My manager gave me the space to show what I meant. I came back with an alternative approach, made the case for it, and got the green light. What I took from it: questioning something early, even when it's uncomfortable, is usually worth it.",
        image: true,
        imageCaption: "Clas Fixare — IA, UX, brand implementation, booking onboarding",
      },
      {
        label: "PwC Experience Center",
        headline: "Bigger clients. Same instinct.",
        body: "PwC Experience Center is the innovation and experience design arm of PwC — working with large organisations on strategy, concept development, and digital product design. The UK bank project was a fintech tool for business cost management. The IA we received from the client team was structured around their internal logic rather than user needs — clear once you mapped it out, but not something you'd want to build on.\n\nMy lead pushed me to challenge it properly rather than work around it. We ran a structured UX session, broke the product down from scratch, and I presented a new approach to our colleagues in the London office. They approved it.",
        image: true,
        imageCaption: "Enterprise consulting: fintech and beyond",
      },
      {
        label: "Reading the Room",
        headline: "Knowing when to push — and when to stop.",
        body: "At PwC I took on an internal initiative to strengthen our team's own brand, storytelling and visual identity. I organised meetings with partners, led the sessions, and kept pushing.\n\nAt some point it became clear the obstacles were structural and beyond what I could move. I recognised it and stepped back. My closest manager — who had been in those rooms with me — told me privately the work and the intention were right. Sometimes that's what you get, and knowing when to stop is part of the job.",
      },
      {
        label: "Since Then",
        headline: "A longer pause than planned. Used well.",
        body: "The Experience Center was wound down during my parental leave — market conditions, new leadership, internal restructuring. Not something I could have influenced.\n\nThe time went somewhere real. At Meter I joined as founding product designer at a pre-seed healthtech startup — building a design system and product across five surfaces from nothing, while stress-testing every product decision along the way. Chattitude came out of evenings after the kids were asleep — a solo product build, concept to working prototype, that became a hands-on exploration of what AI can actually do as a creative and technical collaborator. Both cases are in this portfolio.\n\nTwins and a third child, all in their first years. Returning August 2026.",
      },
    ],
    outcomes: [
      "Trusted with Klingit's largest accounts — led delivery across four client projects and four campaigns simultaneously",
      "Directed distributed design teams while maintaining direct client accountability throughout",
      "UK bank project: challenged inherited IA, rebuilt the approach, got sign-off from enterprise client",
      "Parental leave used actively — Meter, Chattitude, structured learning",
    ],
    tensions: [
      { title: "Involuntary trust — twice.", body: "At Klingit it came with the scale-up territory. At PwC certain projects carried more internal prestige than others — the UK bank project happened to be one where I was largely left to run it. Same result either way." },
      { title: "A department closure during parental leave wasn't in the plan.", body: "What I did with the time that followed is in this portfolio." },
    ],
    next: null,
  },
};

const aboutData = {
  intro: "14 years across illustration, branding, UX, and product design. The through-line isn't a job title — it's a way of working.",
  body: [
    "I drew before I designed. Illustration taught me to look carefully at things. Branding taught me that what something means matters more than what it looks like. UX taught me that meaning is worthless if nobody can use it. Product design taught me that all of the above happens under constraints nobody warned you about — and that's where it gets interesting.",
    "The cases in this portfolio cover a pre-seed healthtech startup, a solo AI product build, three brand identities still in active use, and a decade of client and enterprise work. Across all of it, the moments I'm most proud of have one thing in common: I was given a real problem and trusted to own it.",
    "Outside work: piano and guitar since I was a kid — music has always been the thing I do when I'm not performing competence at anything. Three children, including twins, all in their first years. Hyper Island Design Lead alumni. Based in Stockholm, returning from parental leave August 2026.",
  ],
  skills: ["Product Design", "UX / UI", "Brand Strategy", "Visual Design", "Interaction Design", "AI + Design", "Prototyping", "Client Management", "Facilitation"],
};

const homeCards = [
  { id: "meter", title: "Load-Bearing Design", subtitle: "Pre-Seed Healthtech - Product Design", tags: "Product • UX/UI • Data Visualization", tag: "Product design from zero", desc: "Building a design framework from scratch — and stress-testing every product decision along the way.", gradient: "linear-gradient(135deg, #0a2e1f 0%, #1a5c40 100%)", accent: "#4ade80" },
  { id: "chattitude", title: "Built Alone. Not Alone.", subtitle: "Civic Tech - Solo Product", tags: "Product • Strategy • AI Collaboration", tag: "Solo build with AI sparring", desc: "Concept to working MVP — one person, evenings during parental leave. The hardest part wasn't the building. It was figuring out what to build, and why.", gradient: "linear-gradient(135deg, #1a0e2e 0%, #3b1f6e 100%)", accent: "#a78bfa" },
  { id: "enterprise", title: "Room to Lead", subtitle: "Klingit & PwC Experience Center", tags: "UX/UI • Consulting • Enterprise • Scale-up", tag: "Startup speed. Big Four stamp.", desc: "What two very different environments taught me about where I do my best work — and what happens when I'm given the room to own it.", gradient: "linear-gradient(135deg, #111127 0%, #2a2a4a 100%)", accent: "#818cf8" },
  { id: "grenkultur", title: "Brands That Last", subtitle: "Brand Identity & Strategy", tags: "Brand Identity • Strategy • Visual Design", tag: "Brand identities built to last", desc: "Brand identities that businesses continue using years after launch.", gradient: "linear-gradient(135deg, #0a2e12 0%, #2d5a1e 100%)", accent: "#86efac" },
];

// ============================================================
// COMPONENTS
// ============================================================

function Nav({ onNavigate, current, isMobile }) {
  return (
    <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: isMobile ? "16px 20px" : "20px 48px", position: "sticky", top: 0, background: "rgba(10,10,15,0.92)", backdropFilter: "blur(16px)", zIndex: 10, borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
      <span onClick={() => onNavigate("home")} style={{ fontSize: isMobile ? 15 : 16, fontWeight: 700, letterSpacing: "-0.03em", cursor: "pointer" }}>Karl Lindahl</span>
      <div style={{ display: "flex", gap: isMobile ? 20 : 28 }}>
        {[["Work", "home"], ["About", "about"], ["Contact", "contact"]].map(([label, target]) => (
          <span key={label} onClick={() => onNavigate(target)} style={{ fontSize: isMobile ? 13 : 14, color: current === target || (current !== "about" && current !== "contact" && label === "Work") ? "#fff" : "rgba(255,255,255,0.35)", cursor: "pointer", fontWeight: current === target ? 600 : 400 }}>{label}</span>
        ))}
      </div>
    </nav>
  );
}

function Footer({ isMobile }) {
  return (
    <footer style={{ padding: isMobile ? "32px 20px" : "48px", display: "flex", flexDirection: isMobile ? "column" : "row", gap: isMobile ? 12 : 0, justifyContent: "space-between", alignItems: isMobile ? "flex-start" : "center", fontSize: 13, color: "rgba(255,255,255,0.2)", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
      <span>Stockholm, Sweden</span>
      <div style={{ display: "flex", gap: 24 }}>
        <a href="https://www.linkedin.com/in/karl-lindahl-a1627266/" target="_blank" rel="noreferrer" style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>LinkedIn</a>
        <a href="mailto:lindahl.karl@gmail.com" style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>lindahl.karl@gmail.com</a>
      </div>
    </footer>
  );
}

function ImageCarousel({ accent, caption, src, isMobile }) {
  const [index, setIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);

  // Support both string/array of strings and array of {src, caption} objects
  const raw = src ? (Array.isArray(src) ? src : [src]) : null;
  const images = raw ? raw.map((item) => typeof item === "string" ? { src: item, caption: null } : item) : null;
  const count = images ? images.length : 0;

  const next = () => setIndex((i) => (i + 1) % count);
  const prev = () => setIndex((i) => (i - 1 + count) % count);

  const onTouchStart = (e) => setTouchStart(e.touches[0].clientX);
  const onTouchEnd = (e) => {
    if (touchStart === null) return;
    const diff = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev();
    setTouchStart(null);
  };

  const containerStyle = isMobile
    ? { position: "relative", borderRadius: 8, overflow: "hidden", cursor: count > 1 ? "pointer" : "default", width: "100%", aspectRatio: "1 / 1" }
    : { position: "relative", borderRadius: 8, overflow: "hidden", cursor: count > 1 ? "pointer" : "default", width: 420, height: 420, flexShrink: 0 };

  const currentCaption = images ? (images[index].caption || caption) : caption;

  return (
    <div style={{ width: isMobile ? "100%" : "auto" }}>
      <div onClick={() => count > 1 && next()} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd} style={containerStyle}>
        {images ? (
          <img src={images[index].src} alt={currentCaption || ""} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }} />
        ) : (
          <div style={{ width: "100%", height: "100%", background: `linear-gradient(135deg, rgba(${accent},0.08) 0%, rgba(${accent},0.02) 100%)`, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ width: 48, height: 48, borderRadius: 12, background: `rgba(${accent},0.1)`, border: `1px solid rgba(${accent},0.15)`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px auto", fontSize: 14, color: "rgba(255,255,255,0.2)" }}>IMG</div>
              <span style={{ fontSize: 12, color: "rgba(255,255,255,0.2)" }}>Image placeholder</span>
            </div>
          </div>
        )}
        {count > 1 && (
          <div style={{ position: "absolute", bottom: 10, left: 0, right: 0, display: "flex", justifyContent: "center", gap: 6, pointerEvents: "none" }}>
            {images.map((_, i) => (
              <div key={i} style={{ width: i === index ? 8 : 5, height: i === index ? 8 : 5, borderRadius: "50%", background: "#fff", opacity: i === index ? 0.9 : 0.35, transition: "all 0.2s ease" }} />
            ))}
          </div>
        )}
      </div>
      {currentCaption && <p style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", fontStyle: "italic", margin: "10px 0 0 0" }}>{currentCaption}</p>}
    </div>
  );
}

function SectionBlock({ section, accent, accentRgb, isMobile, index }) {
  const isEven = index % 2 === 0;
  const showImage = section.image;

  const textBlock = (
    <div style={{ flex: 1, minWidth: 0 }}>
      {section.body.split("\n\n").map((para, i) => (
        <p key={i} style={{ fontSize: isMobile ? 14 : 15, lineHeight: 1.75, color: isMobile ? "rgba(255,255,255,0.72)" : "rgba(255,255,255,0.5)", margin: i === 0 ? 0 : "12px 0 0 0" }}>{para}</p>
      ))}
      {section.detail && (
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 16, marginTop: 24 }}>
          {section.detail.map((d) => (
            <div key={d.label} style={{ gridColumn: d.wide && !isMobile ? "span 2" : "span 1" }}>
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: isMobile ? "rgba(255,255,255,0.45)" : "rgba(255,255,255,0.25)" }}>{d.label}</span>
              <p style={{ fontSize: 14, color: isMobile ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.7)", margin: "4px 0 0 0", fontWeight: 500 }}>{d.value}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const imageBlock = showImage ? (
    <ImageCarousel accent={accentRgb} caption={section.imageCaption} src={section.imageSrc} isMobile={isMobile} />
  ) : null;

  return (
    <div style={{ padding: isMobile ? "48px 0" : "80px 0", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
      <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: accent, opacity: isMobile ? 0.85 : 0.6 }}>{section.label}</span>
      <h2 style={{ fontSize: isMobile ? 22 : 28, fontWeight: 700, lineHeight: 1.25, margin: "12px 0 20px 0", color: "#fff", letterSpacing: "-0.02em" }}>{section.headline}</h2>
      {section.bullets && (
        <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 24 }}>
          {section.bullets.map((b, i) => (
            <div key={i} style={{ display: "flex", alignItems: "start", gap: 12 }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: accent, opacity: 0.6, marginTop: 7, flexShrink: 0 }} />
              <p style={{ fontSize: isMobile ? 14 : 15, lineHeight: 1.6, color: "#fff", margin: 0, fontWeight: 500 }}>{b}</p>
            </div>
          ))}
        </div>
      )}
      {isMobile ? (
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {textBlock}
          {imageBlock}
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: isEven ? "row" : "row-reverse", gap: 64, alignItems: "flex-start" }}>
          {textBlock}
          {imageBlock}
        </div>
      )}
      {section.outcomes && section.outcomes.length > 0 && (
        <div style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 10 }}>
          {section.outcomes.map((o, i) => (
            <div key={i} style={{ display: "flex", alignItems: "start", gap: 14 }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: accent, opacity: 0.5, marginTop: 8, flexShrink: 0 }} />
              <p style={{ fontSize: isMobile ? 13 : 14, lineHeight: 1.6, color: isMobile ? "rgba(255,255,255,0.65)" : "rgba(255,255,255,0.45)", margin: 0 }}>{o}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ============================================================
// PAGES
// ============================================================

function HomePage({ onNavigate, isMobile }) {
  const [hovered, setHovered] = useState(null);
  const px = isMobile ? 20 : 48;
  return (
    <>
      <header style={{ padding: isMobile ? "64px 20px 48px" : "120px 48px 80px", maxWidth: 780 }}>
        <h1 style={{ fontSize: isMobile ? 32 : 48, fontWeight: 800, lineHeight: 1.1, margin: 0, letterSpacing: "-0.03em" }}>
          Karl — Product &amp; Brand Designer
        </h1>
        <p style={{ fontSize: isMobile ? 15 : 17, lineHeight: 1.7, color: isMobile ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.45)", marginTop: 24, maxWidth: 500 }}>
          I design digital products and brand identities that help organisations communicate more clearly and build stronger relationships with their users.
        </p>
      </header>
      <section style={{ padding: `0 ${px}px 80px` }}>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 16, maxWidth: 900 }}>
          {homeCards.map((c, i) => {
            const isH = hovered === i;
            const isWide = !isMobile && (i === 0 || i === 3);
            return (
              <div key={c.id} onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)} onClick={() => onNavigate(c.id)}
                style={{ background: c.gradient, borderRadius: 20, padding: isMobile ? "28px 24px" : "40px 36px", cursor: "pointer", transition: "all 0.4s cubic-bezier(0.25,0.46,0.45,0.94)", transform: isH ? "translateY(-4px)" : "translateY(0)", boxShadow: isH ? "0 20px 60px rgba(0,0,0,0.3)" : "0 4px 20px rgba(0,0,0,0.15)", gridColumn: isWide ? "span 2" : "span 1", display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: isMobile ? 200 : (isWide ? 260 : 280), position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: -60, right: -60, width: 200, height: 200, borderRadius: "50%", background: c.accent, opacity: 0.04 }} />
                <div>
                  <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", color: c.accent, opacity: 0.7, margin: "0 0 10px 0", textTransform: "uppercase" }}>{c.tags}</p>
                  <h2 style={{ fontSize: isMobile ? 28 : (isWide ? 40 : 32), fontWeight: 700, margin: "0 0 12px 0", color: "#fff", letterSpacing: "-0.02em", lineHeight: 1.1 }}>{c.title}</h2>
                  <p style={{ fontSize: 13, lineHeight: 1.6, color: isMobile ? "rgba(255,255,255,0.65)" : "rgba(255,255,255,0.5)", margin: 0, maxWidth: isMobile ? "100%" : (isWide ? 480 : 320) }}>{c.desc}</p>
                </div>
                <div style={{ marginTop: 24, display: "flex", alignItems: "center", gap: 6, opacity: isMobile ? 0.8 : (isH ? 1 : 0.35), transition: "all 0.3s ease" }}>
                  <span style={{ fontSize: 12, fontWeight: 700, color: c.accent, letterSpacing: "0.04em" }}>View case</span>
                  <span style={{ fontSize: 12, color: c.accent }}>→</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

function CasePage({ caseId, onNavigate, isMobile }) {
  const c = caseData[caseId];
  if (!c) return null;
  const px = isMobile ? 20 : 48;
  return (
    <>
      <header style={{ padding: `${isMobile ? 48 : 80}px ${px}px 0`, maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ marginBottom: 16 }}>
          <span onClick={() => onNavigate("home")} style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", cursor: "pointer" }}>{"<-"} Back to work</span>
        </div>
        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: c.accent, opacity: 0.7 }}>{c.subtitle}</span>
        <h1 style={{ fontSize: isMobile ? 36 : 56, fontWeight: 800, lineHeight: 1.05, margin: "12px 0 0 0", letterSpacing: "-0.03em" }}>{c.title}</h1>
        {c.intro.split("\n\n").map((para, i) => (
          <p key={i} style={{ fontSize: isMobile ? 16 : 19, lineHeight: 1.6, color: isMobile ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.45)", marginTop: i === 0 ? 16 : 12, maxWidth: 600 }}>{para}</p>
        ))}
      </header>

      <main style={{ padding: `0 ${px}px`, maxWidth: 1100, margin: "0 auto" }}>
        {c.sections.map((s, i) => <SectionBlock key={i} section={s} accent={c.accent} accentRgb={c.accentRgb} isMobile={isMobile} index={i} />)}
        {c.outcomes && c.outcomes.length > 0 && (
        <div style={{ padding: isMobile ? "48px 0" : "80px 0", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: c.accent, opacity: 0.6 }}>Outcome</span>
          <div style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: 24 }}>
            {c.outcomes.map((o, i) => (
              <div key={i} style={{ display: "flex", alignItems: "start", gap: 14 }}>
                <div style={{ width: 7, height: 7, borderRadius: "50%", background: c.accent, opacity: 0.5, marginTop: 8, flexShrink: 0 }} />
                <p style={{ fontSize: isMobile ? 14 : 16, lineHeight: 1.6, color: isMobile ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.65)", margin: 0, fontWeight: 500 }}>{o}</p>
              </div>
            ))}
          </div>
        </div>
        )}
        <div style={{ padding: isMobile ? "48px 0 64px" : "80px 0 100px" }}>
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)", marginBottom: 24, display: "block" }}>Navigating Tensions</span>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {c.tensions.map((t) => (
              <div key={t.title} style={{ background: "rgba(255,255,255,0.02)", borderRadius: 16, padding: isMobile ? "20px" : "28px", borderLeft: `3px solid rgba(${c.accentRgb},0.3)` }}>
                <h3 style={{ fontSize: 15, fontWeight: 700, margin: "0 0 6px 0", color: "#fff" }}>{t.title}</h3>
                <p style={{ fontSize: 13, lineHeight: 1.65, color: isMobile ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.4)", margin: 0 }}>{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      {c.next && (
        <div onClick={() => onNavigate(c.next.id)} style={{ padding: `${isMobile ? 40 : 60}px ${px}px`, borderTop: "1px solid rgba(255,255,255,0.06)", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer" }}>
          <div>
            <span style={{ fontSize: 11, color: "rgba(255,255,255,0.25)", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 600 }}>Next case</span>
            <h3 style={{ fontSize: isMobile ? 22 : 28, fontWeight: 700, margin: "6px 0 0 0", color: "rgba(255,255,255,0.8)" }}>{c.next.title} {">"}</h3>
          </div>
          {!isMobile && <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: c.next.accent, opacity: 0.7 }}>{c.next.subtitle}</span>}
        </div>
      )}
      {!c.next && (
        <div onClick={() => onNavigate("home")} style={{ padding: `${isMobile ? 40 : 60}px ${px}px`, borderTop: "1px solid rgba(255,255,255,0.06)", cursor: "pointer" }}>
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.3)" }}>{"<-"} Back to all work</span>
        </div>
      )}
    </>
  );
}

function AboutPage({ isMobile }) {
  const px = isMobile ? 20 : 48;
  return (
    <>
      <header style={{ padding: `${isMobile ? 64 : 120}px ${px}px 0`, maxWidth: 700 }}>
        <h1 style={{ fontSize: isMobile ? 32 : 44, fontWeight: 800, lineHeight: 1.1, margin: 0, letterSpacing: "-0.03em" }}>About</h1>
      </header>
      <main style={{ padding: `32px ${px}px 80px`, maxWidth: 700 }}>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 32, marginBottom: 48 }}>
          <ImageCarousel accent="255,255,255" caption="Portrait" height={isMobile ? 240 : 320} isMobile={isMobile} />
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <p style={{ fontSize: isMobile ? 18 : 22, lineHeight: 1.5, fontWeight: 600, color: "#fff", margin: 0 }}>{aboutData.intro}</p>
          </div>
        </div>
        {aboutData.body.map((p, i) => (
          <p key={i} style={{ fontSize: isMobile ? 14 : 16, lineHeight: 1.75, color: isMobile ? "rgba(255,255,255,0.68)" : "rgba(255,255,255,0.45)", margin: "0 0 20px 0" }}>{p}</p>
        ))}
        <div style={{ display: "flex", gap: 8, marginTop: 36, flexWrap: "wrap" }}>
          {aboutData.skills.map((s) => (
            <span key={s} style={{ fontSize: 11, padding: "5px 12px", background: "rgba(255,255,255,0.06)", borderRadius: 100, color: isMobile ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.5)", fontWeight: 500, border: "1px solid rgba(255,255,255,0.06)" }}>{s}</span>
          ))}
        </div>
        <div style={{ marginTop: 48, padding: isMobile ? "24px" : "32px", background: "rgba(255,255,255,0.02)", borderRadius: 16, border: "1px solid rgba(255,255,255,0.06)" }}>
          <p style={{ fontSize: 14, color: isMobile ? "rgba(255,255,255,0.68)" : "rgba(255,255,255,0.5)", margin: 0, lineHeight: 1.7 }}>
            Currently on parental leave, returning August 2026. Looking for senior product design, UX/UI, or design lead roles in Stockholm. lindahl.karl@gmail.com
          </p>
        </div>
      </main>
    </>
  );
}

function ContactPage({ isMobile }) {
  const px = isMobile ? 20 : 48;
  return (
    <main style={{ padding: `${isMobile ? 64 : 120}px ${px}px 80px`, maxWidth: 600 }}>
      <h1 style={{ fontSize: isMobile ? 32 : 44, fontWeight: 800, lineHeight: 1.1, margin: "0 0 16px 0", letterSpacing: "-0.03em" }}>Get in touch</h1>
      <p style={{ fontSize: isMobile ? 15 : 17, lineHeight: 1.7, color: "rgba(255,255,255,0.45)", marginBottom: 48 }}>
        Open to senior product design, UX/UI, and design lead roles in Stockholm. Available August 2026.
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <a href="mailto:lindahl.karl@gmail.com" style={{ display: "block", padding: "20px 28px", background: "rgba(255,255,255,0.06)", borderRadius: 16, border: "1px solid rgba(255,255,255,0.1)", textDecoration: "none", color: "#fff", fontSize: 18, fontWeight: 600 }}>
          Email — lindahl.karl@gmail.com
        </a>
        <a href="https://www.linkedin.com/in/karl-lindahl-a1627266/" target="_blank" rel="noreferrer" style={{ display: "block", padding: "20px 28px", background: "rgba(255,255,255,0.06)", borderRadius: 16, border: "1px solid rgba(255,255,255,0.1)", textDecoration: "none", color: "#fff", fontSize: 18, fontWeight: 600 }}>
          LinkedIn — karl-lindahl
        </a>
      </div>
      <p style={{ marginTop: 48, fontSize: 13, color: "rgba(255,255,255,0.25)" }}>Stockholm, Sweden</p>
    </main>
  );
}


// ============================================================
// APP
// ============================================================

export default function Portfolio() {
  const [page, setPage] = useState("home");
  const isMobile = useIsMobile();

  const navigate = (target) => {
    setPage(target);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (page) {
      case "home": return <HomePage onNavigate={navigate} isMobile={isMobile} />;
      case "about": return <AboutPage isMobile={isMobile} />;
      case "contact": return <ContactPage isMobile={isMobile} />;
      default: return <CasePage caseId={page} onNavigate={navigate} isMobile={isMobile} />;
    }
  };

  return (
    <div style={{ fontFamily: "system-ui, -apple-system, sans-serif", color: "#fff", background: "#0a0a0f", minHeight: "100vh" }}>
      <Nav onNavigate={navigate} current={page} isMobile={isMobile} />
      {renderPage()}
      <Footer isMobile={isMobile} />
    </div>
  );
}
// cache bust Sun Mar 15 14:30:43 CET 2026
