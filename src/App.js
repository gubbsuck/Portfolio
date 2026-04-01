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
// FONT
// ============================================================
const headingFont = "'HTS Nils SemiBold', system-ui, -apple-system, sans-serif";

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
    intro: "The wearable sat on the desk for a couple of weeks. A smartwatch, lent by the founder, meant to help me understand what the product was supposed to solve. I didn't put it on. Not because of the data — because of the culture. I'm not an optimizer. I don't track macros or measure recovery windows. The whole world felt foreign.\n\nThen I noticed the contradiction: I'd been using Sleep Cycle for years. I liked knowing how the night had gone. I checked my step counter most days without thinking about it. That was already half of what Meter did. I just hadn't framed it that way. At some point it became untenable not to put it on.\n\nMeter aggregates health data from wearables into a single view — fitness, recovery, nutrition — made legible. The founder had spent months embedded in Reddit communities, learning directly from the people who would use the product. The backend existed. The community existed. What didn't exist was a designer who understood any of it.\n\nThat was me.",
    sections: [
      {
        label: "Context",
        headline: "Outside looking in.",
        body: "The team was three people. Daniel and the developer were both users — they tracked, optimized, spoke the language. I was the one asking what HRV meant.\n\nThere were long phone calls in the beginning. Daniel was good at explaining the features, the technical architecture, the product logic. What I struggled to grasp was simpler and harder at the same time: why would someone need this? What does it feel like to actually want it? The calls went back and forth. I took notes. I benchmarked competitors. I did the things a designer does when they're trying to understand something from the outside.\n\nThen I put the watch on.\n\nIt didn't make me a health optimizer. But something shifted. Waking up and having a number waiting for you — a recovery score, a readiness signal — changes how you relate to the data. It stopped being abstract. It became something that was measuring me, specifically, every night while I slept. That's when I started to understand what the product was for.",
        image: true,
        imageSrc: [{ src: "/images/meter/feed-meeting.png", caption: "Wednesday meeting — Meter Community Discord" }],
        detail: [
          { label: "Role", value: "Founding Product Designer" },
          { label: "Team", value: "Founder, developer, me" },
          { label: "Stage", value: "Pre-seed, investor-ready beta" },
          { label: "Scope", value: "Dashboard, Onboarding, Activity, Body Status, Benefits, Routine Score, Nutrition, Strength Assessment, Splash screens, No-data states, App Store assets", wide: true },
          { label: "Process", value: "Weekly cross-functional sessions, competitor analysis, user survey design, iterative design in Figma, community feedback loops via Discord", wide: true },
        ],
        pullQuote: "Then I put the watch on.",
      },
      {
        label: "Approach",
        headline: "Two people. Two very different methods.",
        body: "Daniel sketched in PowerPoint. Quickly, directly, without worrying about how it looked — small screenshots, rough embryos of ideas, sent over at odd hours. Feature lists, data points, new directions — sometimes four in a day.\n\nI came from environments where you didn't show work until it was right. That instinct had served me well in more formal settings. Here it was a liability. A three-person team running on free time can't wait for polished thinking. If it's not visible, it doesn't exist — nobody can build on a thought they haven't seen.\n\nHe said it often: testa. Not as a dismissal — as a method. Get it out, put it in front of people, see what holds up. It made me uncomfortable. Then it made me faster. And the speed mattered — with limited hours and a developer waiting on direction, the gap between thinking and showing was a cost the project couldn't afford.",
        image: true,
        belowText: true,
        imageSrc: [
          { src: "/images/meter/min-act.png", caption: "My Figma — the version he was riffing on" },
          { src: "/images/meter/Daniels-act.png", caption: "Daniel's take — built in PowerPoint, same day" },
        ],
      },
      {
        label: "Framework",
        headline: "Spotify as a strategic decision, not a mood board.",
        body: "The first structural call was what to design against. Daniel's ambition for Meter was large — every conversation surfaced new features, new data points, new possibilities. That energy was the product's engine. But without a visual framework to hold it, the interface risked becoming as dense as the data it was trying to simplify.\n\nMeter's competitors split into two camps: the ones that buried users in data, and the ones that treated them like patients. Neither fit a product that wanted to serve people who already knew a lot about their own health. Spotify handles that tension well — deep complexity, calm surface, democratic visual language that scales without losing coherence. Daniel had already described Meter as 'the Spotify of health' in early pitches. I took that and made it operational: a shared reference point for every visual decision, from information hierarchy to how much data a single card should carry.\n\nIt gave the team a way to evaluate trade-offs. When the question was whether to surface more data points on an activity card or keep the overview clean, the framework answered before the argument started.",
        image: true,
        sideBySide: true,
        imageSrc: [
          { src: "/images/meter/spotify-reference.PNG", caption: "Spotify — the reference" },
          { src: "/images/meter/meter-final.PNG", caption: "Meter — the result" },
        ],
      },
      {
        label: "The Work",
        headline: "Questions that shaped the product.",
        body: "Early on I flagged that Health Score and Routine Score drew from the same data but never spoke to each other. A good routine should move your health score — but the architecture kept them separate. Daniel pushed back. It was technically out of reach. But the question didn't go away. It shaped how the team thought about what the product was for.\n\nEvery Wednesday, one to three hours. Daniel and Timmy were the users — they came from the Reddit communities, they knew the frustrations firsthand. I came from outside. That division of knowledge was the structure: they stress-tested each other's assumptions, I asked the questions a first-time user might ask, and we documented what held up.\n\nBenefits came out of one of those sessions. Not from a brief, but from a push-back conversation where the founder worked through the logic out loud and arrived at something that hadn't been on anyone's list.",
        image: true,
        belowText: true,
        imageSrc: [
          { src: "/images/meter/ben-2.png", caption: "Where it started — a question, not a feature", contain: true },
          { src: "/images/meter/benefits-shields-process-2.png", caption: "Five rounds to find the form" },
          { src: "/images/meter/ben-final-ui.png", caption: "What push-back looks like when it works", contain: true },
        ],
      },
    ],
    outcomes: [
      "Designed ten surfaces from scratch — dashboard, onboarding, activity, benefits, nutrition, and more — used by the founder to recruit the next development team",
      "Established a shared design framework that served as the product's visual and interaction language — consistent across ten surfaces",
      "Benefits: a core feature that emerged from push-back, not a brief",
      "300+ Discord members, seeded by one search, became the product's active feedback layer",
    ],
    tensions: [
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
    intro: "Online dialogue can seem broken. Exhaustingly foul, vicious, hateful. But maybe it's not broken — maybe it's just immature.\n\nThe screen gives us courage we wouldn't otherwise have — and not always the good kind. But if it gives people courage to be cruel, it also takes away their courage to be vulnerable. And vulnerability is the whole game. Without it, no conversation worth having can even start.\n\nChattitude was built around that idea. Two people, one shared topic, an AI quietly listening for the habits that make dialogue collapse — and feeding it back in real time. Not to punish. To create a moment of awareness.\n\nI first pitched the concept in 2019. It got me into Hyper Island and third place in the Datastory Summer Challenge. Then I set it aside — the technology wasn't there yet. In 2026, it was. I built it alone, evenings during parental leave, using Claude as both coding engine and thinking partner. Here's what happened.",
    sections: [
      {
        label: "Origin",
        headline: "Seven years later, the constraint was gone.",
        body: "What if something could quietly surface the habits that make dialogue collapse — in real time? Not to punish. To make people aware. And maybe try something differently.\n\nThe research foundation was there. Carl Rogers on empathetic listening. Kahneman and Tversky on how our instinctive reactions tend to outrun our better judgement. Alexander Norén's work on nudging — the idea that behaviour changes when the environment changes, not when people are told to. All pointing in the same direction: build the right environment and people might surprise themselves.\n\nThe habits in question are well-documented — strawmanning, loaded questions, ad hominem attacks, and their constructive counterparts. The product knows the difference.\n\nI knew the technology wasn't there. I pitched it anyway. Assume the constraint away, follow the idea, figure out feasibility second. It was enough to win and get into Hyper Island.\n\nSeven years later, the constraint was gone.",
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
        pullQuote: "The person who needed this product most was me.",
      },
      {
        label: "The Honest Part",
        headline: "Something I couldn't see until it was too late.",
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
        body: "My starting assumption: every trade company — arborists included — looks homemade. The ones that don't, and do decent work, win. I built the entire brand around that.\n\nNo formal benchmarking, no quantitative data. Just a conviction rooted in what I'd seen across the industry, and a client who trusted it — gave me free rein, which says everything. What does premium look like in this visual context? A Swiss-style typeface — the stability of Helvetica on the NYC subway. A symbol that isn't a logotype: an illustration and a letterform merged, the leaf growing inside the G. And grenkultur.se as the wordmark — structured, typographically neutral, closer to Stockholm Stad than a local handyman. That's the point. It sweeps the floor visually against every competitor with their cluttered, loud, homemade identities.\n\nThe colour did the rest. Monochrome pastel green and white. Simple, calm, competent. No phone numbers, no social icons, no taglines. Just grenkultur.se. You get it. If you want more, you go there. One button on the stereo. Volume only.",
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
        pullQuote: "Tropical but classic. Somewhere between Miami Vice and The Great Gatsby.",
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
        pullQuote: "They didn't recognise themselves in any of it.",
      },
      {
        label: "Evidy",
        headline: "We walked in ready to present. We left ready to listen.",
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
    intro: "Most of my growth as a designer hasn't come from big leaps. It's come from a specific sequence: being led, then leading, then figuring out the difference between the two.\n\nAt the agency I worked at before Klingit, my creative director had very high standards and a thorough, professional process — great for the output, tougher on me at the time. We sat up late before deadlines, working through every detail until it was right. I understand her professionalism better now than I did then. What she taught me — about rigour, about what sloppy work actually costs — became the foundation for everything that followed.\n\nThen I started at Klingit and suddenly had her job.",
    sections: [
      {
        label: "Klingit",
        headline: "I knew exactly how every piece of feedback would land.",
        body: "Klingit runs client work through a distributed model — designers based across multiple countries, with a local creative lead responsible for everything from briefing to delivery. At peak I was running four client accounts alongside four campaigns simultaneously, art directing designers across time zones.\n\nThe designers varied. Some were sharp and needed space. Others needed structure. Some were careless in ways I recognised from my own recent past — handing in work that wasn't checked properly, costing everyone time. I weighed every piece of feedback differently depending on who was receiving it. Not out of diplomacy — because I'd just been on the other side and knew exactly how it felt when the tone was off, when the impatience showed, and how much harder it is to hear what you need to hear when the delivery gets in the way.\n\nA few designers didn't make it past their trial period. That wasn't my call to make formally, but it rested on my judgment. That's a responsibility I didn't take lightly.",
        image: true,
        imageSrc: [
          { src: "/images/room-to-lead/brandexperten.png", caption: "Brandexperten.se — still live", landscape: true },
          { src: "/images/room-to-lead/odevo.png", caption: "Odevo.com — still live", landscape: true },
        ],
        pullQuote: "I didn't think it held up. So I said so.",
      },
      {
        label: "The Clas Fixare Moment",
        headline: "Something didn't add up.",
        body: "Clas Ohlson's Clas Fixare platform came with an existing information architecture put together by my manager. It didn't make sense to me — I couldn't follow the logic, and suspected users wouldn't either.\n\nI raised it directly. My manager gave me the space to show what I meant. I came back with an alternative approach, made the case for it, and got the green light.\n\nWhat followed was a full UX and booking flow — IA, service configuration, scheduling — built end-to-end with a distributed design team across multiple markets. Art directing designers who didn't share the cultural context of a Swedish end user meant the gap between brief and output was real. Knowing what a Swedish user expects from a service like this, and being able to translate that precisely enough for someone in another country to execute against — that was the actual skill being tested.",
        image: true,
        belowText: true,
        imageSrc: [
          { src: "/images/room-to-lead/clas-fixare-order.png", caption: "Service configuration — choosing product and options" },
          { src: "/images/room-to-lead/clas-fixare-booking.png", caption: "Booking flow — selecting time and completing order" },
        ],
      },
      {
        label: "PwC Experience Center",
        headline: "A brief that needed breaking before it could work.",
        body: "PwC Experience Center is the innovation and experience design arm of PwC — working with large organisations on strategy, concept development, and digital product design.\n\nThe project that defined my time there was a fintech tool for a UK bank — business cost management, pitched as a PwC-branded product. An existing design system had been established by a designer in the London office. My job was to work within it — reusing components where they fit and extending the system with new patterns where the product required it.\n\nThe information architecture we received from the client team didn't hold up. The structure followed their internal logic, not how someone would actually use the tool. I couldn't follow it, and I didn't think a user would either.\n\nThe project was initially set up with my group lead and a colleague alongside me — partly to make sure it didn't become overwhelming. But it quickly became clear that fewer voices made better decisions. My colleague stepped back, and I took over the product work and ran it through to delivery on my own. No user research budget, no testing rounds — just my own judgment about how the product should be structured, informed by the same instinct I keep coming back to: what would a person actually do here?\n\nThe tool shipped with a restructured IA, new interaction patterns built on top of the existing design system, and a visual hierarchy designed for first-time users navigating complex business cost data. I presented the new approach to our London office. They approved it.",
      },
      {
        label: "Outside the Brief",
        headline: "Same school. Different side of the table.",
        body: "During my time at PwC I was invited to Hyper Island twice as an industry leader for the Design Lead programme's branding module — a year apart, two different groups of students working through a real brief from a real client. The invitation came from Lindsay Tingström, my former teacher — now Design Leadership at Volvo Cars — who had liked the work my team produced during our own branding module.\n\nTwo very different sessions. The first group needed help with team dynamics before the brief could even start. The second had found their footing and the conversation went somewhere else entirely: how to navigate a client who decides by consensus versus one who decides on the spot, what comes after school, what to actually look for. What I care about in a room like that is whether everyone feels like they can contribute — the quiet person needs to want to speak up, the loud one needs to want to listen.",
        image: true,
        imageSrc: [
          { src: "/images/room-to-lead/hyper-island.jpg", caption: "Hyper Island, Stockholm — industry leader, Design Lead programme" },
        ],
      },
    ],
    outcomes: [
      "Led delivery across four client accounts and four campaigns simultaneously — briefing, art directing, and quality-checking a distributed team across multiple countries",
      "Challenged my manager's IA on Clas Fixare, got the space to prove an alternative, and delivered a full UX and booking flow with a distributed team",
      "Took over the UK bank fintech project solo — restructured the IA, extended the existing design system with new components, and delivered to PwC's London office",
      "Invited back to Hyper Island twice as industry leader — a year apart, two different groups",
    ],
    tensions: [
      { title: "Knowing how feedback lands.", body: "The agency I worked at before Klingit had high standards and a thorough process. I didn't always appreciate it at the time. I do now. That experience — being led closely and then suddenly leading others — gave me something I couldn't have learned any other way." },
    ],
    next: null,
  },
};

const aboutData = {
  intro: "I drew before I designed. That sequence never really stopped.",
  body: [
    "Illustration taught me to look carefully. Branding taught me that what something means outlasts what it looks like. UX taught me that meaning is worthless if nobody can find it. Product design taught me that all of the above happens under constraints nobody warned you about — and that's where I do my best work.",
    "The common thread isn't a discipline. It's what happens when I enter something unfamiliar — a health domain I didn't understand, a product I had to build alone, a client structure nobody had mapped. I work end-to-end: from user research and insight work through to interface design and delivery, in close collaboration with product managers and engineers. People I've worked with tend to mention two things: I ask questions that reframe the brief, and I don't wait for permission to start solving.",
    "Outside of work, I play piano and guitar — have since I was a kid. Music is the thing I do for no reason other than that I want to. Three children, including twins, all still in their first years. Based in Stockholm. Hyper Island Design Lead alumni. Currently on parental leave, returning August 2026.",
  ],
  quotes: [
    { text: "He doesn't shy away from asking the tricky questions, exploring new solutions or jumping into the unknown. It's been a real joy having Karl as a colleague, working together on anything from strategy to design.", name: "Limor Janssen", role: "Experience Consultant — managed Karl directly" },
    { text: "Karl has a great mix of strong design skills, commercial acumen and an eye for quality. He's personable and approachable with a strong work ethic and makes valuable contributions in any team and business setting.", name: "Siamak Tahmoresnia", role: "Program Manager, ex-McKinsey & ex-PwC Partner — managed Karl directly" },
  ],
};

const homeCards = [
  { id: "meter", title: "Load-Bearing Design", subtitle: "Pre-Seed Healthtech - Product Design", tags: "Product • UX/UI • Data Visualization", tag: "Product design from zero", desc: "Building a design framework from scratch — and stress-testing every product decision along the way.", gradient: "linear-gradient(135deg, #0a2e1f 0%, #1a5c40 100%)", accent: "#4ade80" },
  { id: "chattitude", title: "Built Alone. Not Alone.", subtitle: "Civic Tech - Solo Product", tags: "Product • Strategy • AI Collaboration", tag: "Pitched in 2019. Built in 2026.", desc: "An idea that won a competition and got me into Hyper Island — then waited six years for the technology to catch up. What I built, and what I learned about the limits of my own process.", gradient: "linear-gradient(135deg, #1a0e2e 0%, #3b1f6e 100%)", accent: "#a78bfa" },
  { id: "enterprise", title: "Room to Lead", subtitle: "Klingit & PwC Experience Center", tags: "UX/UI • Consulting • Enterprise • Scale-up", tag: "Being led. Then leading.", desc: "A sequence that shaped how I work: from receiving hard feedback to giving it, from distributed teams to enterprise clients. What two environments taught me about leadership.", gradient: "linear-gradient(135deg, #111127 0%, #2a2a4a 100%)", accent: "#818cf8" },
  { id: "grenkultur", title: "Brands That Last", subtitle: "Brand Identity & Strategy", tags: "Brand Identity • Strategy • Visual Design", tag: "Brand identities built to last", desc: "Brand identities that businesses continue using years after launch.", gradient: "linear-gradient(135deg, #0a2e12 0%, #2d5a1e 100%)", accent: "#86efac" },
];

// ============================================================
// COMPONENTS
// ============================================================

function Nav({ onNavigate, current, isMobile }) {
  return (
    <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: isMobile ? "16px 20px" : "20px 48px", position: "sticky", top: 0, background: "rgba(43,43,43,0.92)", backdropFilter: "blur(16px)", zIndex: 10, borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
      <div onClick={() => onNavigate("home")} style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }}>
        <img src="/images/KARL_logo_avatar-01.png" alt="" style={{ width: isMobile ? 28 : 32, height: isMobile ? 28 : 32, borderRadius: "50%" }} />
        <span style={{ fontSize: isMobile ? 15 : 16, fontFamily: headingFont, fontWeight: 600, letterSpacing: "-0.03em" }}>Karl Lindahl</span>
      </div>
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
        <a href="mailto:lindahl.karl@gmail.com" aria-label="Email" style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none", display: "flex", alignItems: "center" }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="4" width="20" height="16" rx="2"/>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
          </svg>
        </a>
      </div>
    </footer>
  );
}

function ImageCarousel({ accent, caption, src, isMobile }) {
  const [index, setIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);

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
    ? { position: "relative", borderRadius: 8, overflow: "hidden", cursor: count > 1 ? "pointer" : "default", width: "100%", aspectRatio: "16 / 10", flexShrink: 0 }
    : { position: "relative", borderRadius: 8, overflow: "hidden", cursor: count > 1 ? "pointer" : "default", width: isMobile ? "100%" : 420, aspectRatio: "1 / 1", flexShrink: 0 };

  const currentCaption = images ? (images[index].caption || caption) : caption;

  return (
    <div style={{ width: isMobile ? "100%" : 420, flexShrink: 0 }}>
      {lightboxOpen && images && (
        <Lightbox
          images={images}
          initialIndex={index}
          isCarousel={true}
          onClose={() => setLightboxOpen(false)}
        />
      )}
      <div
        onClick={() => { if (count > 1) next(); }}
        onDoubleClick={() => images && setLightboxOpen(true)}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        style={{ ...containerStyle, cursor: images ? (count > 1 ? "pointer" : "zoom-in") : "default" }}
      >
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
        {images && (
          <div
            onClick={(e) => { e.stopPropagation(); setLightboxOpen(true); }}
            style={{ position: "absolute", top: 10, right: 10, width: 32, height: 32, borderRadius: "50%", background: "rgba(0,0,0,0.4)", backdropFilter: "blur(8px)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "zoom-in", fontSize: 14 }}
          >⤢</div>
        )}
      </div>
      {currentCaption && <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", fontStyle: "italic", margin: "10px 0 0 0" }}>{currentCaption}</p>}
    </div>
  );
}

// ============================================================
// LIGHTBOX
// ============================================================
function Lightbox({ images, initialIndex = 0, isCarousel = false, onClose }) {
  const [index, setIndex] = useState(initialIndex);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (isCarousel && images.length > 1) {
        if (e.key === "ArrowRight") setIndex(i => (i + 1) % images.length);
        if (e.key === "ArrowLeft") setIndex(i => (i - 1 + images.length) % images.length);
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, isCarousel, images.length]);

  const displayImages = isCarousel ? [images[index]] : images;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 1000,
        background: "rgba(0,0,0,0.75)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
        padding: 24,
        animation: "fadeIn 0.2s ease",
      }}
    >
      <style>{`@keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }`}</style>
      <div
        onClick={(e) => e.stopPropagation()}
        style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}
      >
        <div style={{ display: "flex", gap: 16, alignItems: "center", justifyContent: "center" }}>
          {isCarousel && images.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); setIndex(i => (i - 1 + images.length) % images.length); }}
              style={{ background: "rgba(255,255,255,0.1)", border: "none", color: "#fff", fontSize: 20, width: 44, height: 44, borderRadius: "50%", cursor: "pointer", flexShrink: 0, backdropFilter: "blur(8px)" }}
            >‹</button>
          )}
          {displayImages.map((img, i) => (
            <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
              <img
                src={img.src}
                alt={img.caption || ""}
                style={{
                  maxWidth: isCarousel ? "80vw" : images.length === 2 ? "38vw" : "26vw",
                  maxHeight: "72vh",
                  borderRadius: 12,
                  objectFit: "contain",
                  display: "block",
                  boxShadow: "0 32px 80px rgba(0,0,0,0.5)",
                }}
              />
              {img.caption && (
                <p style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", fontStyle: "italic", margin: 0, textAlign: "center" }}>
                  {img.caption}
                </p>
              )}
            </div>
          ))}
          {isCarousel && images.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); setIndex(i => (i + 1) % images.length); }}
              style={{ background: "rgba(255,255,255,0.1)", border: "none", color: "#fff", fontSize: 20, width: 44, height: 44, borderRadius: "50%", cursor: "pointer", flexShrink: 0, backdropFilter: "blur(8px)" }}
            >›</button>
          )}
        </div>
        {isCarousel && images.length > 1 && (
          <div style={{ display: "flex", gap: 8, marginTop: 4 }}>
            {images.map((_, i) => (
              <div
                key={i}
                onClick={(e) => { e.stopPropagation(); setIndex(i); }}
                style={{
                  width: i === index ? 8 : 6, height: i === index ? 8 : 6,
                  borderRadius: "50%", background: "#fff",
                  opacity: i === index ? 1 : 0.35,
                  cursor: "pointer", transition: "all 0.2s ease",
                }}
              />
            ))}
          </div>
        )}
      </div>
      <button
        onClick={onClose}
        style={{
          position: "fixed", top: 20, right: 20,
          background: "rgba(255,255,255,0.1)", border: "none",
          color: "#fff", fontSize: 20, width: 40, height: 40,
          borderRadius: "50%", cursor: "pointer", display: "flex",
          alignItems: "center", justifyContent: "center",
          backdropFilter: "blur(8px)",
        }}
      >×</button>
    </div>
  );
}

function PullQuote({ text, accent, accentRgb, isMobile }) {
  return (
    <div style={{ padding: isMobile ? "48px 0 0" : "80px 0 0", textAlign: "center", maxWidth: 720, margin: "0 auto" }}>
      <svg width="44" height="36" viewBox="0 0 44 36" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginBottom: isMobile ? 16 : 24, opacity: 0.6 }}>
        <path d="M0 36V22.5C0 18.3 0.9 14.55 2.7 11.25C4.5 7.95 7.2 4.8 10.8 1.8L17.4 7.2C14.8 9.6 12.85 11.85 11.55 13.95C10.25 16.05 9.5 18.3 9.3 20.7H17.4V36H0ZM26.4 36V22.5C26.4 18.3 27.3 14.55 29.1 11.25C30.9 7.95 33.6 4.8 37.2 1.8L43.8 7.2C41.2 9.6 39.25 11.85 37.95 13.95C36.65 16.05 35.9 18.3 35.7 20.7H43.8V36H26.4Z" fill={`rgba(${accentRgb},0.5)`} />
      </svg>
      <p style={{
        fontSize: isMobile ? 28 : 38,
        fontFamily: headingFont,
        fontWeight: 600,
        lineHeight: 1.25,
        color: "rgba(255,255,255,0.75)",
        margin: 0,
        letterSpacing: "-0.03em",
        padding: isMobile ? "0 8px" : "0 24px",
      }}>{text}</p>
    </div>
  );
}

function SectionBlock({ section, accent, accentRgb, isMobile, index }) {
  const isEven = index % 2 === 0;
  const showImage = section.image;
  const [lightboxImages, setLightboxImages] = useState(null);

  const textBlock = (
    <div style={{ flex: 1, minWidth: 0, maxWidth: !showImage && !isMobile ? 640 : "none" }}>
      {section.body.split("\n\n").map((para, i) => (
        <p key={i} style={{ fontSize: isMobile ? 14 : 15, lineHeight: 1.75, color: isMobile ? "rgba(255,255,255,0.72)" : "rgba(255,255,255,0.5)", margin: i === 0 ? "0 0 16px 0" : "0 0 16px 0" }}>{para}</p>
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

  const isLandscape = showImage && section.imageSrc && section.imageSrc[0] && section.imageSrc[0].landscape;
  const isStackedRight = showImage && section.stackedRight && section.imageSrc && section.imageSrc.length >= 2;
  const isBelowText = showImage && section.belowText && section.imageSrc && section.imageSrc.length >= 2;

  // Format 3: mobileScreen sideBySide — portrait 9:19, fixed width block beside text
  const imageBlock = showImage && !isLandscape && !isStackedRight && !isBelowText ? (
    section.sideBySide && section.imageSrc && section.imageSrc.length === 2 ? (
      <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: isMobile ? 12 : 16, width: isMobile ? "100%" : 400, flexShrink: 0 }}>
        {section.imageSrc.map((img, i) => (
          <div key={i} style={{ flex: 1 }}>
            <div
              onClick={() => setLightboxImages(section.imageSrc)}
              style={{ borderRadius: 12, overflow: "hidden", aspectRatio: "9 / 19", background: "#000", cursor: "zoom-in" }}
            >
              {img.src ? (
                <img src={img.src} alt={img.caption || ""} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", display: "block" }} />
              ) : (
                <div style={{ width: "100%", height: "100%", background: `rgba(${accentRgb},0.08)`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontSize: 12, color: "rgba(255,255,255,0.2)" }}>IMG</span>
                </div>
              )}
            </div>
            {img.caption?.trim() && <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", fontStyle: "italic", margin: "10px 0 0 0" }}>{img.caption}</p>}
          </div>
        ))}
      </div>
    ) : (
      // Format 2: carousel 1:1
      <ImageCarousel accent={accentRgb} caption={section.imageCaption} src={section.imageSrc} isMobile={isMobile} />
    )
  ) : null;

  // Format 5 block
  const stackedRightBlock = isStackedRight ? (
    <div style={{ display: "flex", flexDirection: "column", gap: 16, width: isMobile ? "100%" : 400, flexShrink: 0 }}>
      {section.imageSrc.map((img, i) => (
        <div key={i}>
          <div
            onClick={() => setLightboxImages(section.imageSrc)}
            style={{ borderRadius: 10, overflow: "hidden", cursor: "zoom-in", background: "rgba(255,255,255,0.04)" }}
          >
            <img src={img.src} alt={img.caption || ""} style={{ width: "100%", height: "auto", display: "block" }} />
          </div>
          {img.caption?.trim() && <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", fontStyle: "italic", margin: "10px 0 0 0" }}>{img.caption}</p>}
        </div>
      ))}
    </div>
  ) : null;

  return (
    <div style={{ padding: isMobile ? "48px 0" : "80px 0", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
      {lightboxImages && <Lightbox images={lightboxImages} onClose={() => setLightboxImages(null)} />}
      <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: accent, opacity: isMobile ? 0.85 : 0.6 }}>{section.label}</span>
      <h2 style={{ fontSize: isMobile ? 22 : 28, fontFamily: headingFont, fontWeight: 700, lineHeight: 1.25, margin: "12px 0 20px 0", color: "#fff", letterSpacing: "-0.02em" }}>{section.headline}</h2>
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
      {/* Format 1: landscape — text first, then full-width image below */}
      {isLandscape ? (
        <>
          <div style={{ maxWidth: 640 }}>
            {textBlock}
          </div>
          <div
            onClick={() => setLightboxImages([section.imageSrc[0]])}
            style={{ marginTop: 32, borderRadius: 8, overflow: "hidden", aspectRatio: "16 / 10", width: "100%", cursor: "zoom-in" }}
          >
            <img src={section.imageSrc[0].src} alt={section.imageSrc[0].caption || ""} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          </div>
          {section.imageSrc[0].caption && <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", fontStyle: "italic", margin: "10px 0 0 0" }}>{section.imageSrc[0].caption}</p>}
        </>
      ) : isStackedRight ? (
        isMobile ? (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {textBlock}
            {stackedRightBlock}
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: isEven ? "row" : "row-reverse", gap: 64, alignItems: "flex-start" }}>
            {textBlock}
            {stackedRightBlock}
          </div>
        )
      ) : isBelowText ? (
        <>
          <div style={{ maxWidth: 640 }}>
            {textBlock}
          </div>
          <div style={{ marginTop: 40, display: "flex", flexDirection: isMobile ? "column" : "row", gap: 16 }}>
            {section.imageSrc.map((img, i) => (
              <div key={i} style={{ flex: 1, minWidth: 0 }}>
                <div
                  onClick={() => setLightboxImages(section.imageSrc)}
                  style={{ borderRadius: 10, overflow: "hidden", cursor: "zoom-in", height: 420, background: img.contain ? "#fff" : "transparent", display: "flex", alignItems: "center", justifyContent: "center" }}
                >
                  <img src={img.src} alt={img.caption || ""} style={{ width: "100%", height: "100%", objectFit: img.contain ? "contain" : "cover", objectPosition: "top", display: "block" }} />
                </div>
                {img.caption?.trim() && <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", fontStyle: "italic", margin: "10px 0 0 0" }}>{img.caption}</p>}
              </div>
            ))}
          </div>
        </>
      ) : isMobile ? (
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
      <header style={{ padding: isMobile ? "64px 20px 48px" : "120px 48px 80px", maxWidth: 900, margin: "0 auto" }}>
        <h1 style={{ fontSize: isMobile ? 40 : 72, fontFamily: headingFont, fontWeight: 800, lineHeight: 1.05, margin: 0, letterSpacing: "-0.04em" }}>
          Into No Man's Land
        </h1>
        <p style={{ fontSize: isMobile ? 16 : 20, lineHeight: 1.7, color: isMobile ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.45)", marginTop: 28, maxWidth: 560 }}>
          I've spent 14 years working across product design, brand, and strategy — leading design in cross-functional teams, structuring complex products from discovery to delivery, and building brands that still run years later. These four cases show what that looks like.
        </p>
      </header>
      <section style={{ padding: `0 ${px}px 80px` }}>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 16, maxWidth: 900, margin: "0 auto" }}>
          {homeCards.map((c, i) => {
            const isH = hovered === i;
            const isWide = !isMobile && (i === 0 || i === 3);
            return (
              <div key={c.id} onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)} onClick={() => onNavigate(c.id)}
                style={{ background: c.gradient, borderRadius: 20, padding: isMobile ? "28px 24px" : "40px 36px", cursor: "pointer", transition: "all 0.4s cubic-bezier(0.25,0.46,0.45,0.94)", transform: isH ? "translateY(-4px)" : "translateY(0)", boxShadow: isH ? "0 20px 60px rgba(0,0,0,0.3)" : "0 4px 20px rgba(0,0,0,0.15)", gridColumn: isWide ? "span 2" : "span 1", display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: isMobile ? 200 : (isWide ? 280 : 300), position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: -60, right: -60, width: 200, height: 200, borderRadius: "50%", background: c.accent, opacity: 0.04 }} />
                <div>
                  <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", color: c.accent, opacity: 0.7, margin: "0 0 10px 0", textTransform: "uppercase" }}>{c.tags}</p>
                  <h2 style={{ fontSize: isMobile ? 24 : (isWide ? 32 : 26), fontFamily: headingFont, fontWeight: 700, margin: "0 0 14px 0", color: "#fff", letterSpacing: "-0.02em", lineHeight: 1.15 }}>{c.title}</h2>
                  <p style={{ fontSize: isMobile ? 14 : 15, lineHeight: 1.65, color: isMobile ? "rgba(255,255,255,0.65)" : "rgba(255,255,255,0.55)", margin: 0, maxWidth: isMobile ? "100%" : (isWide ? 520 : 340) }}>{c.desc}</p>
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
        <h1 style={{ fontSize: isMobile ? 40 : 64, fontFamily: headingFont, fontWeight: 800, lineHeight: 1.05, margin: "12px 0 0 0", letterSpacing: "-0.04em" }}>{c.title}</h1>
        {c.intro.split("\n\n").map((para, i) => (
          <p key={i} style={{ fontSize: isMobile ? 16 : 20, lineHeight: 1.65, color: isMobile ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.45)", marginTop: i === 0 ? 20 : 14, maxWidth: 620 }}>{para}</p>
        ))}
      </header>

      <main style={{ padding: `0 ${px}px`, maxWidth: 1100, margin: "0 auto" }}>
        {c.sections.map((s, i) => (
          <div key={i}>
            <SectionBlock section={s} accent={c.accent} accentRgb={c.accentRgb} isMobile={isMobile} index={i} />
            {s.pullQuote && <PullQuote text={s.pullQuote} accent={c.accent} accentRgb={c.accentRgb} isMobile={isMobile} />}
          </div>
        ))}
        {c.outcomes && c.outcomes.length > 0 && (
        <div style={{ padding: isMobile ? "48px 0" : "80px 0", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: c.accent, opacity: 0.6 }}>Outcome</span>
          <div style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: 24, maxWidth: isMobile ? "none" : 640 }}>
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
          <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: isMobile ? "none" : 640 }}>
            {c.tensions.map((t) => (
              <div key={t.title} style={{ background: "rgba(255,255,255,0.02)", borderRadius: 16, padding: isMobile ? "20px" : "28px", borderLeft: `3px solid rgba(${c.accentRgb},0.3)` }}>
                <h3 style={{ fontSize: 15, fontFamily: headingFont, fontWeight: 700, margin: "0 0 6px 0", color: "#fff" }}>{t.title}</h3>
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
            <h3 style={{ fontSize: isMobile ? 22 : 28, fontFamily: headingFont, fontWeight: 700, margin: "6px 0 0 0", color: "rgba(255,255,255,0.8)" }}>{c.next.title} {">"}</h3>
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
      <header style={{ padding: `${isMobile ? 64 : 120}px ${px}px 0`, maxWidth: 900, margin: "0 auto" }}>
        <h1 style={{ fontSize: isMobile ? 40 : 64, fontFamily: headingFont, fontWeight: 800, lineHeight: 1.05, margin: 0, letterSpacing: "-0.04em" }}>About</h1>
      </header>
      <main style={{ padding: `32px ${px}px 80px`, maxWidth: 900, margin: "0 auto" }}>
        <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: isMobile ? 32 : 48, alignItems: "flex-start" }}>
          <div style={{ borderRadius: 16, overflow: "hidden", width: isMobile ? "100%" : 300, flexShrink: 0, aspectRatio: isMobile ? "1 / 1" : "auto" }}>
            <img src={isMobile ? "/images/about/Karl-mobil.png" : "/images/about/Karl.png"} alt="Karl Lindahl" style={{ width: "100%", height: isMobile ? "100%" : "auto", objectFit: isMobile ? "cover" : "initial", objectPosition: isMobile ? "center 40%" : "initial", display: "block" }} />
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <p style={{ fontSize: isMobile ? 18 : 22, lineHeight: 1.5, fontWeight: 600, color: "#fff", margin: "0 0 28px 0", fontFamily: headingFont }}>{aboutData.intro}</p>
            {aboutData.body.map((p, i) => (
              <p key={i} style={{ fontSize: isMobile ? 14 : 15, lineHeight: 1.75, color: isMobile ? "rgba(255,255,255,0.68)" : "rgba(255,255,255,0.45)", margin: "0 0 18px 0" }}>{p}</p>
            ))}
          </div>
        </div>
        {aboutData.quotes && aboutData.quotes.length > 0 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20, marginTop: 48 }}>
            {aboutData.quotes.map((q, i) => (
              <div key={i} style={{ padding: isMobile ? "24px" : "28px 32px", background: "rgba(255,255,255,0.02)", borderRadius: 16, borderLeft: "3px solid rgba(255,255,255,0.08)" }}>
                <p style={{ fontSize: isMobile ? 14 : 15, lineHeight: 1.7, color: isMobile ? "rgba(255,255,255,0.65)" : "rgba(255,255,255,0.45)", margin: 0, fontStyle: "italic" }}>"{q.text}"</p>
                <p style={{ fontSize: 13, color: isMobile ? "rgba(255,255,255,0.45)" : "rgba(255,255,255,0.3)", margin: "12px 0 0 0", fontWeight: 500 }}>{q.name} <span style={{ fontWeight: 400 }}>— {q.role}</span></p>
              </div>
            ))}
          </div>
        )}
      </main>
    </>
  );
}

function ContactPage({ isMobile }) {
  const px = isMobile ? 20 : 48;
  const btnStyle = {
    display: "flex", alignItems: "center", gap: 16,
    padding: "20px 28px", background: "rgba(255,255,255,0.06)",
    borderRadius: 16, border: "1px solid rgba(255,255,255,0.1)",
    textDecoration: "none", color: "#fff", fontSize: isMobile ? 16 : 18, fontWeight: 600,
  };
  return (
    <main style={{ padding: `${isMobile ? 64 : 120}px ${px}px 80px`, maxWidth: 900, margin: "0 auto" }}>
      <h1 style={{ fontSize: isMobile ? 40 : 64, fontFamily: headingFont, fontWeight: 800, lineHeight: 1.05, margin: "0 0 20px 0", letterSpacing: "-0.04em" }}>Get in touch</h1>
      <p style={{ fontSize: isMobile ? 16 : 20, lineHeight: 1.7, color: "rgba(255,255,255,0.45)", marginBottom: 48 }}>
        Open to senior product design and design lead roles in Stockholm. Returning August 2026.
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <a href="mailto:lindahl.karl@gmail.com" style={btnStyle}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.7, flexShrink: 0 }}>
            <rect x="2" y="4" width="20" height="16" rx="2"/>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
          </svg>
          Email
        </a>
        <a href="https://www.linkedin.com/in/karl-lindahl-a1627266/" target="_blank" rel="noreferrer" style={btnStyle}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.7, flexShrink: 0 }}>
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
            <rect x="2" y="9" width="4" height="12"/>
            <circle cx="4" cy="4" r="2"/>
          </svg>
          LinkedIn
        </a>
      </div>
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
    <div style={{ fontFamily: "system-ui, -apple-system, sans-serif", color: "#fff", background: "linear-gradient(180deg, #2B2B2B 0%, #0F0F0F 100%)", minHeight: "100vh" }}>
      <Nav onNavigate={navigate} current={page} isMobile={isMobile} />
      {renderPage()}
      <Footer isMobile={isMobile} />
    </div>
  );
}
// cache bust Sun Mar 15 14:30:43 CET 2026
