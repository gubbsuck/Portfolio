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
    intro: "The wearable sat on the desk for a couple of weeks. A smartwatch, lent by the founder, meant to help me understand what the product was actually supposed to solve. I didn't put it on. Not out of disinterest — I felt strange about sharing that kind of data about myself. My body, measured and uploaded. It took a while to notice the contradiction: I already liked the step counter on my phone, already checked Sleep Cycle every morning to see how the night had gone. That was half of what Meter did. Daniel asked a few times whether I'd started wearing it. I kept saying not yet. But as the design work moved closer to implementation, I realized I couldn't test what I was building without weeks of accumulated data on my own wrist. At some point it became untenable not to put it on.\n\nMeter aggregates health data from wearables into a single view. Fitness, recovery, nutrition — brought together and made legible, at a time when most apps either buried users in numbers or talked down to them like patients. The founder, Daniel, had spent months embedded in Reddit communities, learning directly from the people who would eventually use the product. He knew his users the way you know people you've actually lived alongside. The backend existed. The community existed. What didn't was a designer who understood any of it.\n\nThat was me.",
    sections: [
      {
        label: "Context",
        headline: "In i något främmande.",
        body: "The team was three people. Daniel, a developer named Timmy, and me. The other two were users — they tracked, they optimized, they spoke the language fluently. I was the one asking what HRV meant.\n\nThere were long phone calls in the beginning. Daniel was good at explaining the features, the technical architecture, the product logic. What I struggled to grasp was simpler and harder at the same time: why would someone need this? What does it feel like to actually want it? The calls went back and forth. I took notes. I benchmarked competitors. I did the things a designer does when they're trying to understand something from the outside.\n\nThen I put the watch on.\n\nIt didn't make me a health optimizer. But something shifted. Waking up and having a number waiting for you — a recovery score, a readiness signal — changes how you relate to the data. It stopped being abstract. It became something that was measuring me, specifically, every night while I slept. That's when I started to understand what the product was for.",
        image: true,
        imageSrc: [{ src: "/images/meter/team-meeting.png", caption: "The team — Wednesday meeting, Meter Community Discord", landscape: true }],
        detail: [
          { label: "Role", value: "Founding Product Designer" },
          { label: "Team", value: "Founder, developer, me" },
          { label: "Stage", value: "Pre-seed, investor-ready beta" },
          { label: "Scope", value: "Dashboard, Onboarding, Activity, Body Status, Benefits, Routine Score, Nutrition, Strength Assessment, Splash screens, No-data states, App Store assets", wide: true },
        ],
      },
      {
        label: "Approach",
        headline: "Two people. Two very different methods.",
        body: "Daniel sketched in PowerPoint. Quickly, directly, without worrying about how it looked — small screenshots, rough embryos of ideas, sent over at odd hours. It looked like scrap. But something was always being built.\n\nI don't work that way. I process things in my head and my heart first — sit with a problem until it has weight, until I understand what it wants to become. Then I give it life: a logotype, a feature, a direction. Then I refine. That's always been my way. We were as different as two people on the same project can be.\n\nHe said it often, when I questioned a sketch or pushed back on an approach: testa. Just try it. Not as a dismissal — as a method. Startup thinking. Rapid sketching. The ability to drop an idea you've worked on for a week the moment a better one shows up.\n\nIt made me uncomfortable. Then it made me better.",
        sideBySide: true,
        imageSrc: [
          { src: "/images/meter/actual-lo-fi-UI.PNG", caption: "Early build — no data, no styling, just structure" },
          { src: "/images/meter/Actual-hi-fi-ui-01.PNG", caption: "Final hi-fi — Karl's data, Karl's design, implemented" },
        ],
      },
      {
        label: "Framework",
        headline: "Spotify as a strategic decision, not a mood board.",
        body: "The first structural call was what to design against. Meter's competitors split into two camps: the ones that buried users in data, and the ones that treated them like patients who needed managing. Neither was right for a product that wanted to be taken seriously by people who already knew a lot about their own health.\n\nSpotify handles deep complexity with a calm, democratic visual language — sophisticated without being intimidating, scalable across dozens of surfaces without losing coherence. That tension was exactly what Meter needed to resolve. It wasn't a mood board reference. It was a strategic decision that gave us a shared compass for every visual call that followed.",
        sideBySide: true,
        imageSrc: [
          { src: "/images/meter/spotify-reference.PNG", caption: "Spotify — complex data, calm visual language" },
          { src: "/images/meter/meter-final.PNG", caption: "Meter — same principle, different product" },
        ],
      },
      {
        label: "The Work",
        headline: "Questions that shaped the product.",
        body: "Early on I flagged that Health Score and Routine Score drew from the same data but never spoke to each other. A good routine should move your health score — but the architecture didn't allow it. Daniel pushed back. It was technically out of reach. But the question didn't go away. It shaped how the team thought about what the product was for.\n\nEvery Wednesday, one to three hours. Daniel and Timmy were the users — they came from the Reddit communities, they knew the frustrations firsthand. I came from outside. That division of knowledge was the structure: they stress-tested each other's assumptions, I asked the questions a first-time user might ask, and we documented what held up.\n\nBenefits came out of one of those sessions. Not from a brief, but from a push-back conversation where the founder worked through the logic out loud and arrived at something that hadn't been on anyone's list.",
        threeImages: [
          { src: "/images/meter/ben-2.png", caption: "Early concept — health benefits as zones", natural: true },
          { src: "/images/meter/benefits-shields-process.jpg", caption: "Shield form iterations — five rounds before it held", position: "top center" },
          { src: "/images/meter/ben-final-ui.png", caption: "Final Benefits screen — bookmark form, colour-coded by status", position: "top center" },
        ],
      },
    ],
    outcomes: [
      "A design foundation that held up under weekly scrutiny — and gave the product something concrete to build from",
      "Benefits: a core feature that emerged from push-back, not a brief",
      "300+ Discord members, seeded by one search, became the product's active feedback layer",
    ],
    tensions: [
      { title: "I proposed a rebrand. The founder said no.", body: "Late in the project I pushed for significant identity changes. He had reasons to keep things as they were. I executed his vision at the highest level I could. Sometimes that's the right call." },
      { title: "My design didn't make it into v2. There is no v2 without v1.", body: "What I learned after I'd moved on was that Daniel had been using my designs to recruit. When he showed the work to potential developers, it helped them see what the product could be. A new team came together around that vision. I didn't know that at the time. I'm glad the work carried weight after I left." },
      { title: "Two people, two methods.", body: "He built fast and tested everything. I wanted to validate before touching Figma. By the end I could do both. That gap closing was the most useful thing the project gave me." },
    ],
    next: { title: "Built Alone. Not Alone.", subtitle: "AI-Built Civic Tech", id: "chattitude", accent: "#a78bfa" },
  },

  chattitude: {
    accent: "#a78bfa",
    accentRgb: "167,139,250",
    gradient: "linear-gradient(135deg, #1a0e2e 0%, #3b1f6e 100%)",
    subtitle: "Civic Tech - Solo Product",
    title: "The Conversation No One Wants To Have",
    intro: "Online dialogue can seem broken. Exhaustingly foul, vicious, hateful. But maybe it's not broken — maybe it's just immature.\n\nLike road rage — comment sections are our freeways. We navigate them either with a fist in our pocket or a finger through the windshield. Behind a screen, like behind a wheel, something shifts. The screen gives us courage we wouldn't otherwise have — and not always the good kind.\n\nWhat I didn't think about early enough was the flip side of that: if the screen gives people courage to be cruel, it also takes away their courage to be vulnerable. And vulnerability is the whole game. Without it, no conversation worth having can even start.\n\nChattitude was built around that idea. Two people, one shared topic, an AI quietly listening for the habits that make dialogue collapse — and feeding it back in real time. Not to punish. To create a moment of awareness.\n\nI first pitched the concept in 2019. It got me into Hyper Island and third place in the Datastory Summer Challenge. Then I set it aside — the technology wasn't there yet. In 2026, it was. I built it alone, evenings during parental leave, using Claude as both coding engine and thinking partner. Here's what happened.",
    sections: [
      {
        label: "Origin",
        headline: "Seven years later, the constraint was gone.",
        body: "My observation — shared by many — is that people struggle with their impulses online in ways they rarely do face to face. Algorithms pull us in directions we don't always choose consciously. Filter bubbles narrow what we're exposed to. Identity politics grows louder than the quieter, more productive tension that comes from genuine difference. And somewhere in that noise, tolerance for people who think differently quietly shrinks.\n\nIt was worth designing around.\n\nWhat if something could quietly surface the habits that make dialogue collapse — in real time? Not to punish. To make people aware. And maybe try something differently.\n\nThe research foundation was there. Carl Rogers on empathetic listening. Kahneman and Tversky on how our instinctive reactions tend to outrun our better judgement. Alexander Norén's work on nudging — the idea that behaviour changes when the environment changes, not when people are told to. All pointing in the same direction: build the right environment and people might surprise themselves.\n\nThe habits in question are well-documented — strawmanning, loaded questions, ad hominem attacks, and their constructive counterparts. The product knows the difference.\n\nI knew the technology wasn't there. I pitched it anyway. Assume the constraint away, follow the idea, figure out feasibility second. It was enough to win and get into Hyper Island.\n\nSeven years later, the constraint was gone.",
        image: true,
        imageSrc: [
          { src: "/images/chattitude/comparison.png", caption: "2019 pitch concept (left) — 2026 built product (right)" },
          { src: "/images/chattitude/techniques.jpg", caption: "Destructive vs constructive techniques — surfaced in real time" },
        ],
      },
      {
        label: "The Build",
        headline: "Three decisions. One made everything else make sense.",
        body: "The build happened after the kids were asleep. Claude handled the code. I handled the calls.\n\nThree decisions defined what Chattitude became.\n\nThe shared health bar. Instead of tracking each person's score separately, both participants share one. When the conversation deteriorates, both lose. When it improves, both gain. You stop trying to win and start trying to keep the conversation alive. It's a single UI element, but it changes what the product is for.\n\nThe second was choosing who it's for. I was building for public debate — Twitter arguments, political threads. Then a friend with a PhD in social anthropology asked me a simple question in a sauna: who would actually use this? Not strangers. People who already care about each other — couples, friends, family — but struggle with the hard conversations. That shifted everything.\n\nThe third was the 10-second send delay. Every message sits for ten seconds before it's delivered. Friction by design. A pause that asks: is this really what you want to say?",
        image: true,
        imageSrc: [
          { src: "/images/chattitude/The-build.png", caption: "AI as thinking partner — product decisions, not just code" },
        ],
      },
      {
        label: "The Honest Part",
        headline: "Realising I was building for me instead of the world.",
        body: "It was fun. Moving fast, skipping steps, building in flow. No user interviews, no validation rounds — just conviction and momentum. And for a while, that felt like enough.\n\nGetting into Hyper Island with the idea. Placing third in a competition. That felt like validation. And it was — just not the kind that matters when you're building a product. A jury finding an idea interesting and a user needing it badly enough to change their behaviour are two completely different things. I didn't make that distinction. I didn't even know I needed to.\n\nWhat I didn't see — couldn't see — was that the person who needed this product most was me. I genuinely believed I was solving something universal. The painful part wasn't finding out I was wrong. It was finding out I hadn't even asked the right question.\n\nThe need for a feature lives with the user. I knew that in theory. This project taught me what it actually means — not from a book, but from the specific sting of realising it too late.\n\nI wasn't hiding anything. I just never thought to ask. When you're that convinced, the question doesn't even occur to you.",
      },
    ],
    outcomes: [
      "Concept to working MVP in weeks — strategy, design, and code, solo",
      "A single UI decision that reframes what a conversation product is for",
      "The clearest lesson: the need for a feature lives with the user, not the builder",
    ],
    tensions: [
      { title: "AI makes you faster. It doesn't make you right.", body: "Every output needed judgment. The risk isn't bad code. It's plausible-sounding direction that nobody stops to question. The collaboration only worked because I treated Claude as a challenger, not an oracle." },
      { title: "What started as a fun build ended up asking uncomfortable questions.", body: "About demand, about personal need, about how much one person can carry alone. That's not a failure. It's the most useful thing the project taught me." },
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
  { id: "chattitude", title: "Built Alone. Not Alone.", subtitle: "Civic Tech - Solo Product", tags: "Product • Strategy • AI Collaboration", tag: "Pitched in 2019. Built in 2026.", desc: "An idea that won a competition and got me into Hyper Island — then waited six years for the technology to catch up. What I built, and what I learned about the limits of my own process.", gradient: "linear-gradient(135deg, #1a0e2e 0%, #3b1f6e 100%)", accent: "#a78bfa" },
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

  const isLandscape = images && images[0] && images[0].landscape;

  const containerStyle = isLandscape
    ? { position: "relative", borderRadius: 8, overflow: "hidden", cursor: count > 1 ? "pointer" : "default", width: "100%", aspectRatio: "16 / 9" }
    : isMobile
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

function ThreeImageRow({ images, accentRgb, isMobile }) {
  return (
    <div style={{
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      gap: isMobile ? 16 : 20,
      width: "100%",
      marginTop: isMobile ? 32 : 48,
      alignItems: "flex-start",
    }}>
      {images.map((img, i) => (
        <div key={i} style={{ flex: 1, minWidth: 0 }}>
          {img.natural ? (
            <img
              src={img.src}
              alt={img.caption || ""}
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                borderRadius: 8,
              }}
            />
          ) : (
            <div style={{
              borderRadius: 8,
              overflow: "hidden",
              aspectRatio: "1 / 1",
              background: `linear-gradient(135deg, rgba(${accentRgb},0.08) 0%, rgba(${accentRgb},0.02) 100%)`,
            }}>
              <img
                src={img.src}
                alt={img.caption || ""}
                style={{
                  width: img.scale ? img.scale : "100%",
                  height: img.scale ? img.scale : "100%",
                  objectFit: "cover",
                  objectPosition: img.position || "center",
                  display: "block",
                  transformOrigin: img.position || "center",
                }}
              />
            </div>
          )}
          {img.caption && (
            <p style={{
              fontSize: 12,
              color: "rgba(255,255,255,0.3)",
              fontStyle: "italic",
              margin: "10px 0 0 0",
              lineHeight: 1.5,
            }}>{img.caption}</p>
          )}
        </div>
      ))}
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
    section.sideBySide && section.imageSrc && section.imageSrc.length === 2 ? (
      <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: isMobile ? 12 : 16, width: isMobile ? "100%" : "auto", flexShrink: 0 }}>
        {section.imageSrc.map((img, i) => (
          <div key={i} style={{ flex: 1 }}>
            <div style={{ borderRadius: 8, overflow: "hidden", aspectRatio: isMobile ? "4 / 3" : "3 / 4" }}>
              {img.src ? (
                <img src={img.src} alt={img.caption || ""} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              ) : (
                <div style={{ width: "100%", height: "100%", minHeight: 200, background: `linear-gradient(135deg, rgba(${accentRgb},0.08) 0%, rgba(${accentRgb},0.02) 100%)`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ width: 48, height: 48, borderRadius: 12, background: `rgba(${accentRgb},0.1)`, border: `1px solid rgba(${accentRgb},0.15)`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px auto", fontSize: 14, color: "rgba(255,255,255,0.2)" }}>IMG</div>
                    <span style={{ fontSize: 12, color: "rgba(255,255,255,0.2)" }}>Image placeholder</span>
                  </div>
                </div>
              )}
            </div>
            {img.caption && <p style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", fontStyle: "italic", margin: "10px 0 0 0" }}>{img.caption}</p>}
          </div>
        ))}
      </div>
    ) : (
      <ImageCarousel accent={accentRgb} caption={section.imageCaption} src={section.imageSrc} isMobile={isMobile} />
    )
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
      {section.threeImages && (
        <ThreeImageRow images={section.threeImages} accentRgb={accentRgb} isMobile={isMobile} />
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
