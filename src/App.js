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
    intro: "Three people, no funding, and a product that existed as an API and rough sketches. No design framework, no established decisions — just a founder with strong opinions and a designer willing to stress-test every single one of them.\n\nThe friction was the process. Most of what held up, held up better for having been challenged.",
    sections: [
      {
        label: "Context",
        headline: "A product without a design framework. A founder with strong opinions.",
        body: "Meter aggregates health data from multiple wearables into a single view. The backend existed. The community validation existed. What didn't exist was any coherent design language, visual system, or agreed-upon product logic. I came in to build that — while the product was already in motion.",
        detail: [
          { label: "Role", value: "Head of Experience" },
          { label: "Team", value: "Founder, developer, me" },
          { label: "Stage", value: "Pre-seed, active development" },
          { label: "Scope", value: "Dashboard, onboarding, settings, activity tracking, nutrition self-assessment", wide: true },
        ],
      },
      {
        label: "Framework",
        headline: "Spotify as a strategic decision, not a mood board.",
        body: "The first structural call was what to design against. Meter's competitors either buried users in data or talked down to them — overly technical on one end, paternalistic on the other. Spotify sits in neither camp: it handles deep complexity with a calm, democratic visual language that scales across dozens of surfaces without losing coherence.\n\nThat was the argument. Not 'Spotify looks good' but 'Spotify solves the same tension Meter faces, and it's already proven.' Daniel agreed. It gave us a shared reference point for every visual decision that followed.",
        image: true,
        imageCaption: "Design framework: visual language built for scale",
      },
      {
        label: "Pressure",
        headline: "Most challenges didn't land. That was still the job.",
        body: "The working method was direct. I interrogated every product decision — from information architecture to feature logic — until it either held up or we changed it. Not every challenge landed. Maybe one in ten conversations ended in a pivot. Daniel sometimes got frustrated. He always came back.\n\nThe point wasn't to win arguments. It was to make sure nothing survived by default. Benefits is the clearest example: it started as a vague feature idea. Under enough scrutiny it became a structured pattern grounded in the actual data model — something that genuinely served the user rather than filling a slot on the roadmap.",
        image: true,
        imageCaption: "Benefits feature: from vague idea to structured product pattern",
      },
      {
        label: "Design",
        headline: "Not a dashboard. A product.",
        body: "Five surfaces in parallel: dashboard, onboarding, settings architecture three levels deep, a nutrition self-assessment tool, and the beginning of a Strava-style activity view pairing GPS data with smartwatch metrics. Concepts went straight to high-fidelity — there was no time for anything else, and low-fidelity would have obscured the decisions that actually mattered.",
        image: true,
        imageCaption: "The full product: dashboard, onboarding, activity, settings, self-assessment",
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
      "Complete design system across five product surfaces",
      "300+ Discord members, core group actively shaping the product",
      "Benefits feature: from pressure-tested idea to core product pattern",
    ],
    tensions: [
      { title: "I proposed a rebrand. The founder said no.", body: "Late in the project I pushed for significant identity changes. He had reasons to keep things as they were. I executed his vision at the highest level I could. Sometimes that's the right call." },
      { title: "Vision as a decision filter.", body: "Brand thinking and product thinking aren't in conflict — they share the same foundation. A clear long-term vision makes individual product decisions faster and more consistent. That's what I brought to the table, and it's what made the friction productive rather than just difficult." },
      { title: "The job description was meaningless.", body: "Three people building a company. You do whatever the product needs that day." },
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
      "Explored AI end-to-end for the first time — from vision to working MVP in weeks",
      "Used AI as a thinking partner, not just a tool — for product decisions as much as implementation",
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
    intro: "The best briefs are short. The best brands last.\n\nThree industries, three completely different problems — and in each case, the design work started somewhere other than design.",
    sections: [
      {
        label: "Grenkultur",
        headline: "The name came first. Everything else followed.",
        body: "Two certified arborists with a loyal client base and no brand to show for it. They came to me for a name. Grenkultur — a nod to their background in the arts, and to what tree care actually is: cultivation.\n\nThe logotype is a capital G where the counter forms a leaf growing inward. The domain went straight into the wordmark, because the entire business runs through the website. The brand color — a soft, desaturated green — was the detail that made everything land.\n\nFrom there: full identity system, tone of voice, print, workwear, vehicle graphics, web. When the van pulls up, the brand has already done its job.",
        image: true,
        imageCaption: "[Brand system: naming, logotype, color, vehicle graphics, web — images to come]",
      },
      {
        label: "Tropic City",
        headline: "Four words. One of the world's best bars.",
        body: "Two bartenders from Stockholm moved to Bangkok to open their own cocktail bar and asked me to design the logo. The brief was simple: tropical but classic — somewhere between Miami Vice and The Great Gatsby.\n\nThe palm leaf became the thread to follow. Working through sketches, the form kept pulling in the same direction — an abstract mark where the outline doesn't fully exist, but the eye finds it anyway.\n\nThat was 2017. Today Tropic City is consistently ranked among the world's best cocktail bars — #62 Asia's 50 Best 2024, #66 World's 50 Best 2023, Top 10 Best Bar Team Asia & Pacific four times over — and the mark has never changed.",
        image: true,
        imageCaption: "Logo sketches and final mark — applications from neon signage to cocktail ice",
      },
      {
        label: "Evidy",
        headline: "A healthcare brand built to scale.",
        body: "Haimdall Solutions made smart lighting and interior environments for elder care homes. The products were strong. The brand was nonexistent — no name, no visual language, and a corporate structure with a parent company and two sub-brands that nobody had untangled.\n\nBefore a single concept was sketched, we spent time mapping the business itself — ownership structure, sub-brands, what actually sat under which name. That work happened in a room with the co-owners. It wasn't the brief. It turned out to be the most valuable part of the project.\n\nThe first direction was wrong. Everything good about the final brand came from being forced to understand the business before designing for it. The name Evidy comes from 'evidence' — measurable impact, stated plainly. Five years on, the identity is still running across 15+ facilities.",
        image: true,
        imageCaption: "Brand book: naming, logotype, color system, typography",
      },
    ],
    outcomes: [
      "Started with naming, structure, and strategy — the design came after",
      "Three logos still in active use, none replaced",
      "#62 Asia's 50 Best Bars, #66 World's 50 Best Bars — same mark since 2017",
      "Evidy running across 15+ elder care facilities, five years on",
      "Grenkultur: [siffror kommer]",
    ],
    tensions: [
      { title: "The brief isn't always the brief.", body: "Evidy started as a naming and visual identity project. It turned out to be a structural strategy session first. The design only worked because we did that part nobody asked for." },
      { title: "Four words was enough.", body: "The best creative direction I ever received fit in a sentence. The mood imagery confirmed it. The rest was following the thread." },
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
    intro: "The best work I've done has one thing in common: I was trusted to own it.\n\nKlingit threw me in at the deep end with eight concurrent clients and no safety net. PwC put that in a larger context. The UK bank project — run solo from Stockholm, largely because my managers there had other priorities — turned out to be the clearest proof of what happens when competence gets space.",
    sections: [
      {
        label: "Klingit",
        headline: "Eight clients. One designer owning all of it.",
        body: "Clas Ohlson needed their Clas Fixare platform designed — IA, UX, brand implementation, booking onboarding. I led that and directed other designers on the project. Ally Doctor 2 Home needed a complete booking flow wireframed for their app. Brandexperten needed a full website rebuild with a new identity and thousands of products and services organized for SEO — I ran the client relationship and coordinated SEO specialists, designers, and stakeholders. Odevo needed the same treatment. All of this ran concurrently — alongside four marketing campaigns running in parallel.",
        image: true,
        imageCaption: "Brandexperten.se and Odevo.com — both still live",
      },
      {
        label: "What it built",
        headline: "Client management, commercial instinct, and the ability to run a room.",
        body: "Before Klingit I made things look good. After Klingit I understood what clients actually need versus what they ask for, how to manage scope when everything is urgent, and how to lead a team while doing the work yourself. That shift — from executing to owning — is what made PwC possible.",
      },
      {
        label: "PwC Experience Center",
        headline: "Same skills. Bigger clients. More at stake.",
        body: "The work included a fintech app for a major UK bank — redesigning IA and crafting the UI for a business cost management tool, in close collaboration with the PM in London. Foresight and concept development for a large Scandinavian retailer exploring food experiences in their stores. Strategic playbooks for a European food industry organization helping them build internal capability for new product lines. Different pace, more layers of approval, but the core was the same: understand the real problem, present clearly, deliver.",
        image: true,
        imageCaption: "Enterprise consulting: fintech, retail, FMCG",
      },
    ],
    outcomes: [
      "Klingit: eight concurrent client projects across web, product, and brand",
      "PwC: enterprise delivery for clients in fintech, retail, and FMCG",
      "The combination: commercial instinct from scale-up pace, validated at enterprise scale",
    ],
    tensions: [
      { title: "Involuntary trust.", body: "At Klingit it came with the territory — a scale-up where everyone was expected to own their piece regardless of title or experience. Sink or swim, and most of us swam. At PwC it came differently: certain projects carried prestige, others didn't. The UK bank project fell in the latter category, which meant my Stockholm managers largely left me to it. Either way, the result was the same — given the room, I delivered." },
      { title: "NDA limits what's shown here.", body: "The specific deliverables can't be shared. The types of problems, the environments, and what those years built — that's the relevant part." },
    ],
    next: null,
  },
};

const aboutData = {
  intro: "14 years across illustration, branding, UX, and product design. I kept moving because the problems got more interesting, not because I got bored.",
  body: [
    "I drew before I designed. Illustration taught me to see. Branding taught me to think about what a thing means before deciding what it looks like. UX taught me that meaning is worthless if nobody can use it. Product design taught me that all of the above happens under constraints that nobody warned you about.",
    "At Klingit I learned to own everything — product direction, client relationships, commercial thinking — with nowhere to hide. PwC validated those skills at enterprise scale and put me in front of clients where the stakes were real. At Meter I found out what happens when there's no process, no money, and three people trying to build something that looks like a real company. Evidy proved I could take a client from rejected first draft to a brand that's still running five years later. Chattitude proved that an idea worth pitching in 2019 is worth building in 2025 — and that one person with the right tools can close that gap alone.",
    "Hyper Island Design Lead alumni. Piano and guitar since childhood. Three kids, including twins. Based in Stockholm, back from parental leave August 2026.",
  ],
  skills: ["Product Design", "UX / UI", "Brand Strategy", "Visual Design", "Design Systems", "AI + Design", "Prototyping", "Client Management", "Facilitation"],
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
        <span style={{ cursor: "pointer", color: "rgba(255,255,255,0.4)" }}>LinkedIn</span>
        <span style={{ cursor: "pointer", color: "rgba(255,255,255,0.4)" }}>karl@lindahl.se</span>
      </div>
    </footer>
  );
}

function ImagePlaceholder({ accent, caption, height = 280 }) {
  return (
    <div style={{ background: "rgba(255,255,255,0.03)", borderRadius: 16, overflow: "hidden", border: "1px solid rgba(255,255,255,0.06)" }}>
      <div style={{ width: "100%", height, background: `linear-gradient(135deg, rgba(${accent},0.08) 0%, rgba(${accent},0.02) 100%)`, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center" }}>
          <div style={{ width: 48, height: 48, borderRadius: 12, background: `rgba(${accent},0.1)`, border: `1px solid rgba(${accent},0.15)`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px auto", fontSize: 14, color: "rgba(255,255,255,0.2)" }}>IMG</div>
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.2)" }}>Image placeholder</span>
        </div>
      </div>
      {caption && <div style={{ padding: "12px 16px" }}><span style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", fontStyle: "italic" }}>{caption}</span></div>}
    </div>
  );
}

function SectionBlock({ section, accent, accentRgb, isMobile }) {
  return (
    <div style={{ padding: isMobile ? "48px 0" : "80px 0", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
      <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: accent, opacity: isMobile ? 0.85 : 0.6 }}>{section.label}</span>
      <h2 style={{ fontSize: isMobile ? 22 : 28, fontWeight: 700, lineHeight: 1.25, margin: "12px 0 20px 0", color: "#fff", letterSpacing: "-0.02em" }}>{section.headline}</h2>
      <div style={{ display: "grid", gridTemplateColumns: section.image && !isMobile ? "1fr 1fr" : "1fr", gap: isMobile ? 24 : 48, alignItems: "start" }}>
        <div>
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
        {section.image && <ImagePlaceholder accent={accentRgb} caption={section.imageCaption} height={isMobile ? 200 : 280} />}
      </div>
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
      <header style={{ padding: `${isMobile ? 48 : 80}px ${px}px 0`, maxWidth: 900 }}>
        <div style={{ marginBottom: 16 }}>
          <span onClick={() => onNavigate("home")} style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", cursor: "pointer" }}>{"<-"} Back to work</span>
        </div>
        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: c.accent, opacity: 0.7 }}>{c.subtitle}</span>
        <h1 style={{ fontSize: isMobile ? 36 : 56, fontWeight: 800, lineHeight: 1.05, margin: "12px 0 0 0", letterSpacing: "-0.03em" }}>{c.title}</h1>
        {c.intro.split("\n\n").map((para, i) => (
          <p key={i} style={{ fontSize: isMobile ? 16 : 19, lineHeight: 1.6, color: isMobile ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.45)", marginTop: i === 0 ? 16 : 12, maxWidth: 600 }}>{para}</p>
        ))}
      </header>
      <div style={{ padding: `32px ${px}px 0`, maxWidth: 900 }}>
        <div style={{ width: "100%", height: isMobile ? 240 : 400, background: c.gradient, borderRadius: 20, display: "flex", alignItems: "center", justifyContent: "center", border: `1px solid rgba(${c.accentRgb},0.1)` }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ width: 56, height: 56, borderRadius: 14, background: `rgba(${c.accentRgb},0.1)`, border: `1px solid rgba(${c.accentRgb},0.15)`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px auto", fontSize: 18, color: "rgba(255,255,255,0.2)" }}>IMG</div>
            <span style={{ fontSize: 12, color: "rgba(255,255,255,0.25)" }}>Hero image</span>
          </div>
        </div>
      </div>
      <main style={{ padding: `0 ${px}px`, maxWidth: 900 }}>
        {c.sections.map((s, i) => <SectionBlock key={i} section={s} accent={c.accent} accentRgb={c.accentRgb} isMobile={isMobile} />)}
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
          <ImagePlaceholder accent="255,255,255" caption="Portrait" height={isMobile ? 240 : 320} />
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
            Currently on parental leave, returning August 2026. Looking for senior product design, UX/UI, or design lead roles in Stockholm. karl@lindahl.se
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
      <h1 style={{ fontSize: isMobile ? 32 : 44, fontWeight: 800, lineHeight: 1.1, margin: "0 0 20px 0", letterSpacing: "-0.03em" }}>Get in touch</h1>
      <p style={{ fontSize: isMobile ? 15 : 17, lineHeight: 1.7, color: isMobile ? "rgba(255,255,255,0.68)" : "rgba(255,255,255,0.45)", marginBottom: 40 }}>
        Open to senior product design, UX/UI, and design lead roles in Stockholm. Available August 2026. I'd rather talk than write a cover letter.
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {[
          { label: "Email", value: "karl@lindahl.se" },
          { label: "LinkedIn", value: "linkedin.com/in/karllindahl" },
          { label: "Location", value: "Stockholm, Sweden" },
        ].map((item) => (
          <div key={item.label} style={{ padding: isMobile ? "20px" : "24px 28px", background: "rgba(255,255,255,0.03)", borderRadius: 16, border: "1px solid rgba(255,255,255,0.06)" }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: isMobile ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.25)" }}>{item.label}</span>
            <p style={{ fontSize: isMobile ? 16 : 18, color: isMobile ? "#fff" : "rgba(255,255,255,0.8)", margin: "6px 0 0 0", fontWeight: 600 }}>{item.value}</p>
          </div>
        ))}
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
    <div style={{ fontFamily: "system-ui, -apple-system, sans-serif", color: "#fff", background: "#0a0a0f", minHeight: "100vh" }}>
      <Nav onNavigate={navigate} current={page} isMobile={isMobile} />
      {renderPage()}
      <Footer isMobile={isMobile} />
    </div>
  );
}
