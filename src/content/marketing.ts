import type { ServiceSlug } from "@/config/site";
import type { Locale } from "@/i18n/config";

type NavigationItem = {
  href: string;
  label: string;
};

type ServiceContent = {
  title: string;
  summary: string;
  heroSupportingLine: string;
  intro: string;
  capabilities: string[];
  outcomes: string[];
  problems: Principle[];
  audience: Principle[];
  processTitle?: string;
  processDescription?: string;
  processSteps?: HomeProcessStep[];
  faqs: {
    question: string;
    answer: string;
  }[];
};

type CaseStudyPreview = {
  title: string;
  sector: string;
  summary: string;
  addressed?: string;
  outcome: string;
  scope?: string;
};

type Principle = {
  title: string;
  description: string;
};

type HomeProblemItem = {
  title: string;
  description: string;
};

type HomeProcessStep = {
  step: string;
  title: string;
  description: string;
};

type HomeSection = {
  eyebrow: string;
  title: string;
  description: string;
};

type ServicesCapabilityGroup = {
  title: string;
  description: string;
  services: ServiceSlug[];
};

type OptionItem = {
  value: string;
  label: string;
};

type MarketingContent = {
  meta: {
    description: string;
    languageSwitcherLabel: string;
    primaryNavigationLabel: string;
    openNavigationLabel: string;
    closeNavigationLabel: string;
    mobileNavigationTitle: string;
    mobileNavigationDescription: string;
  };
  navigation: NavigationItem[];
  ctas: {
    primary: string;
    secondary: string;
    contact: string;
  };
  footer: {
    strapline: string;
    note: string;
    navigationLabel: string;
  };
  home: {
    eyebrow: string;
    title: string;
    description: string;
    supportingLine: string;
    highlightsLabel: string;
    highlights: string[];
    labels: {
      serviceBadge: string;
      serviceAction: string;
      caseStudyOutcome: string;
    };
    problem: HomeSection & {
      items: HomeProblemItem[];
      asideEyebrow: string;
      asideTitle: string;
      asideDescription: string;
      asidePoints: string[];
    };
    process: HomeSection & {
      steps: HomeProcessStep[];
    };
    why: HomeSection & {
      items: Principle[];
    };
    selectedWork: HomeSection & {
      noteEyebrow: string;
      noteTitle: string;
      noteDescription: string;
    };
    finalCta: HomeSection & {
      supportingLine: string;
    };
  };
  services: {
    eyebrow: string;
    title: string;
    description: string;
    supportingLine: string;
    highlightsLabel: string;
    highlights: string[];
    heroSecondaryAction: string;
    intro: HomeSection & {
      pointsLabel: string;
      points: string[];
    };
    catalog: HomeSection;
    grouping: HomeSection & {
      items: ServicesCapabilityGroup[];
    };
    labels: {
      serviceBadge: string;
      serviceAction: string;
      serviceSupportLabel: string;
      groupServicesLabel: string;
    };
    detail: {
      heroPanelLabel: string;
      heroSecondaryAction: string;
      overview: HomeSection & {
        capabilitiesLabel: string;
      };
      problems: HomeSection;
      deliverables: HomeSection & {
        capabilitiesLabel: string;
        outcomesLabel: string;
      };
      audience: HomeSection;
      process: HomeSection & {
        steps: HomeProcessStep[];
      };
      faq: HomeSection;
      finalCta: HomeSection & {
        supportingLine: string;
        secondaryAction: string;
      };
    };
    finalCta: HomeSection & {
      supportingLine: string;
      secondaryAction: string;
    };
    items: Record<ServiceSlug, ServiceContent>;
  };
  about: {
    eyebrow: string;
    title: string;
    description: string;
    supportingLine: string;
    highlightsLabel: string;
    highlights: string[];
    overview: HomeSection & {
      body: string;
      asideEyebrow: string;
      asideTitle: string;
      asideDescription: string;
      asidePoints: string[];
    };
    beliefs: HomeSection & {
      items: Principle[];
    };
    process: HomeSection & {
      steps: HomeProcessStep[];
    };
    differentiators: HomeSection & {
      items: Principle[];
    };
    audience: HomeSection & {
      items: Principle[];
    };
    finalCta: HomeSection & {
      supportingLine: string;
      secondaryAction: string;
    };
  };
  caseStudies: {
    eyebrow: string;
    title: string;
    description: string;
    supportingLine: string;
    highlightsLabel: string;
    highlights: string[];
    intro: HomeSection & {
      asideEyebrow: string;
      asideTitle: string;
      asideDescription: string;
      asidePoints: string[];
    };
    startingPoints: HomeSection & {
      items: Principle[];
    };
    catalog: HomeSection;
    labels: {
      outcomeLabel: string;
      addressedLabel: string;
      scopeLabel: string;
    };
    items: CaseStudyPreview[];
    engagements: HomeSection & {
      items: Principle[];
    };
    finalCta: HomeSection & {
      supportingLine: string;
      secondaryAction: string;
    };
  };
  book: {
    eyebrow: string;
    title: string;
    description: string;
    supportingLine: string;
    highlightsLabel: string;
    highlights: string[];
    heroPrimaryAction: string;
    heroSecondaryAction: string;
    covers: HomeSection & {
      items: Principle[];
    };
    audience: HomeSection & {
      items: Principle[];
    };
    booking: HomeSection & {
      shell: {
        configuredBadge: string;
        configuredTitle: string;
        configuredDescription: string;
        configuredAction: string;
        configuredNote: string;
        fallbackBadge: string;
        fallbackTitle: string;
        fallbackDescription: string;
        fallbackPrimaryAction: string;
        fallbackSecondaryAction: string;
        fallbackNote: string;
      };
    };
    reassurance: HomeSection & {
      points: string[];
    };
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    supportingLine: string;
    highlightsLabel: string;
    highlights: string[];
    heroPrimaryAction: string;
    intro: HomeSection & {
      items: Principle[];
    };
    form: {
      eyebrow: string;
      title: string;
      description: string;
      cardTitle: string;
      cardDescription: string;
      note: string;
      helperPoints: string[];
      submitLabel: string;
      fields: {
        name: string;
        company: string;
        email: string;
        phone: string;
        service: string;
        brief: string;
        nextStep: string;
      };
      placeholders: {
        name: string;
        company: string;
        email: string;
        phone: string;
        servicePrompt: string;
        brief: string;
        nextStepPrompt: string;
      };
      serviceNotSureLabel: string;
      nextStepOptions: OptionItem[];
      statuses: {
        successTitle: string;
        successDescription: string;
        errorTitle: string;
        errorDescription: string;
      };
    };
    trust: HomeSection & {
      bestFitTitle: string;
      bestFitDescription: string;
      bestFitPoints: string[];
      points: string[];
    };
    finalCta: HomeSection & {
      supportingLine: string;
      primaryAction: string;
      secondaryAction: string;
    };
  };
  notFound: {
    title: string;
    description: string;
    actionLabel: string;
  };
};

export const marketingContent: Record<Locale, MarketingContent> = {
  en: {
    meta: {
      description:
        "Benyah builds premium websites, automation, booking and AI call workflows, facility and maintenance management systems, business systems, and internal tools for small businesses.",
      languageSwitcherLabel: "Switch language",
      primaryNavigationLabel: "Primary navigation",
      openNavigationLabel: "Open navigation",
      closeNavigationLabel: "Close navigation",
      mobileNavigationTitle: "Navigation",
      mobileNavigationDescription:
        "Lean site navigation with a single primary action.",
    },
    navigation: [
      { href: "/", label: "Home" },
      { href: "/services", label: "Services" },
      { href: "/about", label: "About" },
      { href: "/case-studies", label: "Case Studies" },
      { href: "/contact", label: "Contact" },
    ],
    ctas: {
      primary: "Request a Discovery Call",
      secondary: "Explore Services",
      contact: "Discuss Your Project",
    },
    footer: {
      strapline:
        "Premium websites, workflows, and systems designed for better small-business operations.",
      note: "Built for businesses that want more structure, more clarity, and less operational friction.",
      navigationLabel: "Navigation",
    },
    home: {
      eyebrow: "Benyah",
      title: "Structured websites, workflows, and systems for operations-led small businesses.",
      description:
        "Benyah helps service businesses, clinics, facilities operators, and growing teams replace fragmented tools with clearer websites, workflows, and operational systems.",
      supportingLine:
        "Best suited to businesses outgrowing spreadsheets, manual handoffs, weak digital presence, or disconnected service operations.",
      highlightsLabel: "What Benyah Covers",
      highlights: [
        "Premium websites that build trust and generate the right enquiries",
        "Automation and booking-call workflows that reduce manual coordination",
        "Operational systems and internal tools built around real processes",
      ],
      labels: {
        serviceBadge: "Service",
        serviceAction: "Learn More",
        caseStudyOutcome: "Planned Outcome",
      },
      problem: {
        eyebrow: "Where Businesses Get Stuck",
        title: "Most growing businesses are not short on tools. They are short on structure.",
        description:
          "The website, workflow, and internal operation often evolve separately. Over time that creates duplicated work, weak handoffs, inconsistent service, and systems nobody fully trusts.",
        items: [
          {
            title: "Fragmented Systems",
            description:
              "Enquiries, bookings, delivery, and follow-up live across disconnected tools with no clear operational flow.",
          },
          {
            title: "Manual Workflows",
            description:
              "Important steps still depend on memory, inboxes, spreadsheets, or repeated admin work.",
          },
          {
            title: "Weak Digital Presence",
            description:
              "The website may look acceptable, but it does not communicate value clearly or support conversion.",
          },
          {
            title: "Operational Blind Spots",
            description:
              "Teams lack the visibility, reporting, or system control needed to run confidently as the business grows.",
          },
        ],
        asideEyebrow: "Operational Focus",
        asideTitle:
          "Benyah connects the parts of the business clients see with the systems the team depends on.",
        asideDescription:
          "The goal is not to add more software. It is to create a clearer operating structure between demand, service delivery, and internal execution.",
        asidePoints: [
          "Website, booking, and workflow designed to work together",
          "Custom-fit systems when off-the-shelf tools are not enough",
          "Practical implementation built for daily use",
        ],
      },
      process: {
        eyebrow: "How We Work",
        title: "A structured approach from diagnosis to implementation.",
        description:
          "Every engagement starts with understanding how the business actually runs, then building the right level of system around it.",
        steps: [
          {
            step: "01",
            title: "Understand the operation",
            description:
              "We review the business model, workflow, pain points, and existing tools before recommending anything.",
          },
          {
            step: "02",
            title: "Define the right system",
            description:
              "We scope the right mix of website, automation, booking flow, or internal system based on the operational need.",
          },
          {
            step: "03",
            title: "Build with clarity",
            description:
              "We design and implement with clean structure, careful scope, and a bias toward long-term fit.",
          },
          {
            step: "04",
            title: "Refine for real use",
            description:
              "We improve what matters in practice: adoption, clarity, reliability, and day-to-day efficiency.",
          },
        ],
      },
      why: {
        eyebrow: "Why Benyah",
        title: "A premium systems partner, not a volume agency.",
        description:
          "Benyah is built for businesses that want commercially clear thinking, careful scope, and systems that hold up in daily use.",
        items: [
          {
            title: "Structure Before Software",
            description:
              "We start with workflow, roles, and friction points before deciding what the solution should be.",
          },
          {
            title: "Operational Thinking",
            description:
              "We work across websites, bookings, automations, and internal systems so the business works as one connected flow.",
          },
          {
            title: "Premium Restraint",
            description:
              "Clear scope, clean design, and practical delivery without unnecessary noise or bloated complexity.",
          },
        ],
      },
      selectedWork: {
        eyebrow: "Selected Work",
        title: "A selective record of the systems and workflows we help improve.",
        description:
          "Case studies will be published carefully as projects are ready to be shared. The focus will be on operational clarity, not inflated storytelling.",
        noteEyebrow: "Publishing Standard",
        noteTitle: "Built for long-term fit",
        noteDescription:
          "Not every project needs to become a public case study. Benyah will publish selected work that reflects the level of structure, clarity, and execution clients can expect.",
      },
      finalCta: {
        eyebrow: "Start the Conversation",
        title: "If the business needs better structure, that is where we begin.",
        description:
          "Whether you need a stronger website, cleaner workflows, or a more capable internal system, Benyah helps define the right next step.",
        supportingLine: "Clear scope. Practical thinking. Premium execution.",
      },
    },
    services: {
      eyebrow: "Services",
      title: "Structured services for better business operations.",
      description:
        "Benyah helps service businesses and operations-led teams build better structure across digital presence, workflow, and day-to-day operations.",
      supportingLine:
        "Start with the service that matches the pressure point now. Each detail page shows where the service fits and what it helps improve.",
      highlightsLabel: "Service Focus",
      highlights: [
        "Customer-facing systems that support trust and conversion",
        "Workflow automation that reduces repeated coordination",
        "Operational systems that improve visibility, control, and growth",
      ],
      heroSecondaryAction: "Review Service Categories",
      intro: {
        eyebrow: "How Benyah Fits",
        title:
          "Better structure across the parts of the business that usually evolve separately.",
        description:
          "The website, the workflow behind it, and the internal systems that support delivery often drift apart over time. Benyah helps bring them back into one clearer operating structure.",
        pointsLabel: "What Better Structure Covers",
        points: [
          "Digital presence that explains value properly",
          "Workflow design that reduces manual handoffs",
          "Operational systems that improve visibility and control",
        ],
      },
      catalog: {
        eyebrow: "Service Categories",
        title: "The core services Benyah delivers.",
        description:
          "Each category is shaped around a specific business need, then connected back to the wider operating system around it.",
      },
      grouping: {
        eyebrow: "How The Services Connect",
        title: "The work is designed to function as one connected system.",
        description:
          "Some engagements begin with a website. Others start deeper in workflow or operations. The right mix depends on where the business is losing clarity today.",
        items: [
          {
            title: "Customer-Facing Systems",
            description:
              "For businesses that need a stronger digital presence, a clearer enquiry flow, and a more structured booking experience.",
            services: ["websites", "booking-workflows"],
          },
          {
            title: "Operational Automation",
            description:
              "For teams dealing with repeated admin, disjointed handoffs, or recurring process work that should no longer depend on memory and inboxes.",
            services: ["automation", "workflow-systems-automation"],
          },
          {
            title: "Operational Control",
            description:
              "For operations that need better oversight across assets, requests, reporting, internal tooling, and service execution.",
            services: ["facility-maintenance-management", "business-systems"],
          },
          {
            title: "Digital Infrastructure",
            description:
              "For businesses that need the front end, workflow, and internal systems to work as one coherent foundation.",
            services: ["websites", "automation", "business-systems"],
          },
        ],
      },
      labels: {
        serviceBadge: "Core Service",
        serviceAction: "View Service",
        serviceSupportLabel: "What It Helps With",
        groupServicesLabel: "Related Services",
      },
      detail: {
        heroPanelLabel: "Key Outcomes",
        heroSecondaryAction: "All Services",
        overview: {
          eyebrow: "What This Service Is",
          title: "A practical layer of structure around a specific business need.",
          description:
            "Each service is shaped to solve a real operational issue, strengthen a weak part of the business, or create a more dependable system around daily work.",
          capabilitiesLabel: "What Benyah Shapes",
        },
        problems: {
          eyebrow: "Problems It Solves",
          title: "Built for recurring business friction, not abstract ideas.",
          description:
            "The focus is on issues that affect clarity, speed, service quality, and operational control.",
        },
        deliverables: {
          eyebrow: "What Benyah Delivers",
          title: "Clear scope, structured implementation, and a usable result.",
          description:
            "Each service is different in form, but the delivery stays practical: a defined scope, a clear system shape, and an outcome that works in daily use.",
          capabilitiesLabel: "Delivery Focus",
          outcomesLabel: "Operational Effect",
        },
        audience: {
          eyebrow: "Who It Is For",
          title: "Designed for businesses that need stronger structure in a specific area.",
          description:
            "The strongest fit is usually a business that has outgrown improvised tools, unclear handoffs, or software that no longer matches the way it operates.",
        },
        process: {
          eyebrow: "How We Work",
          title: "A clear path from diagnosis to implementation.",
          description:
            "The process stays consistent across services so scope, decision-making, and delivery remain clear from the start.",
          steps: [
            {
              step: "01",
              title: "Review the current setup",
              description:
                "We look at the workflow, tools, bottlenecks, and the operational pressure behind the service need.",
            },
            {
              step: "02",
              title: "Define the right scope",
              description:
                "We shape the service around what the business actually needs now, what should happen first, and what should not be overbuilt.",
            },
            {
              step: "03",
              title: "Design and implement",
              description:
                "We build with clean structure, careful sequencing, and a focus on practical day-to-day use.",
            },
            {
              step: "04",
              title: "Refine for real use",
              description:
                "We improve clarity, adoption, and reliability once the service is in operation.",
            },
          ],
        },
        faq: {
          eyebrow: "FAQ",
          title: "Common questions before a service engagement begins.",
          description:
            "The right approach depends on the current state of the business, but these answers cover the most common starting points.",
        },
        finalCta: {
          eyebrow: "Next Step",
          title:
            "If this service fits the need, the next step is a focused conversation.",
          description:
            "Benyah can help assess whether this service is the right fit now, or whether it should be paired with another system layer.",
          supportingLine: "Clear direction before delivery.",
          secondaryAction: "View All Services",
        },
      },
      finalCta: {
        eyebrow: "Next Step",
        title:
          "If the business needs better structure, begin with the right service conversation.",
        description:
          "Benyah can help identify which service, or combination of services, makes the most sense for the current stage and operating model of the business.",
        supportingLine: "Clear scope before implementation.",
        secondaryAction: "View Case Studies",
      },
      items: {
        automation: {
          title: "Automation Solutions",
          summary:
            "Practical business automation for recurring admin, approvals, follow-up, and day-to-day handoffs.",
          heroSupportingLine:
            "Best for businesses where repeated operational tasks still live in inboxes, spreadsheets, and memory.",
          intro:
            "Automation Solutions focus on the repeated business processes that should run more cleanly every day. Benyah helps businesses structure automations around enquiries, follow-up, internal approvals, reminders, updates, and routine handoffs so the team spends less time chasing the process and more time moving it forward.",
          capabilities: [
            "Recurring admin, approval, and follow-up flows",
            "Internal handoffs, reminders, and status notifications",
            "Practical automation around the tools already in daily use",
          ],
          outcomes: [
            "Less repeated admin and manual chasing",
            "More dependable day-to-day execution",
            "Clearer visibility into what is moving and what is waiting",
          ],
          problems: [
            {
              title: "Manual administration",
              description:
                "Teams spend time copying data, chasing updates, and repeating routine actions that should happen more reliably in the background.",
            },
            {
              title: "Inconsistent handoffs",
              description:
                "Work stalls between enquiry, operations, delivery, and follow-up because key steps are not being carried forward cleanly.",
            },
            {
              title: "Unclear process status",
              description:
                "The business lacks a dependable view of what should happen next, what is delayed, and where responsibility currently sits.",
            },
          ],
          audience: [
            {
              title: "Service businesses with repeated internal tasks",
              description:
                "A strong fit when enquiries, onboarding, delivery updates, follow-up, or reporting still depend on manual checking and coordination.",
            },
            {
              title: "Growing teams working across several familiar tools",
              description:
                "Useful when the software stack already exists, but the workflow between tools is weak, duplicated, or easy to break.",
            },
            {
              title: "Owners and operators who need more process control",
              description:
                "Ideal for businesses that want clearer process control and fewer missed steps without adding unnecessary system complexity.",
            },
          ],
          processTitle: "A practical automation pass from friction to repeatable flow.",
          processDescription:
            "The work usually starts with the repeated steps that waste time today, then turns them into a cleaner operating rhythm.",
          processSteps: [
            {
              step: "01",
              title: "Map the repeated workflow",
              description:
                "We identify where manual checking, chasing, copying, or reminders are consuming time inside the current process.",
            },
            {
              step: "02",
              title: "Define the automation logic",
              description:
                "We decide what should trigger, what should move automatically, and where human oversight still matters.",
            },
            {
              step: "03",
              title: "Implement around real tools",
              description:
                "We build the automation around the systems already supporting the operation where possible, instead of forcing unnecessary replacement.",
            },
            {
              step: "04",
              title: "Refine for reliability",
              description:
                "We tighten notifications, exception handling, and process clarity once the flow is being used in day-to-day work.",
            },
          ],
          faqs: [
            {
              question: "Do you automate our existing tools or replace them?",
              answer:
                "Usually the first step is improving the workflow around the tools already in use. Replacement only makes sense when the current setup is actively blocking the process.",
            },
            {
              question: "What kinds of processes are a good fit for automation?",
              answer:
                "Common examples include enquiries, internal approvals, scheduling actions, follow-up, reporting, and other repeated operational steps that need more consistency.",
            },
            {
              question: "How is this different from deeper systems automation?",
              answer:
                "Automation Solutions are usually the right fit when the business needs recurring day-to-day process improvement. When the need becomes more integration-heavy across multiple systems, APIs, or orchestration logic, Benyah will usually recommend Workflow & Systems Automation instead.",
            },
            {
              question: "Will automation make the operation harder to manage?",
              answer:
                "No. The aim is the opposite: cleaner process, fewer manual dependencies, and more clarity around what should happen and when.",
            },
          ],
        },
        websites: {
          title: "Websites",
          summary:
            "Premium business websites built to communicate clearly, build trust, and turn qualified visitors into enquiries.",
          heroSupportingLine:
            "Best for businesses that need a stronger digital presence, clearer positioning, and a website that supports conversion properly.",
          intro:
            "A Benyah website is built as commercial infrastructure. It should help a business look credible, explain its offer without ambiguity, and guide the right visitor toward contact or consultation. The focus is not decoration. It is clarity, trust, and structure.",
          capabilities: [
            "Positioning-led page structure",
            "Responsive build and content hierarchy",
            "Lead capture and conversion-focused journeys",
          ],
          outcomes: [
            "Stronger credibility at first glance",
            "Clearer service communication",
            "Better-quality enquiries",
          ],
          problems: [
            {
              title: "Generic or outdated presentation",
              description:
                "The website does not reflect the quality of the business, which weakens trust before any conversation begins.",
            },
            {
              title: "Unclear offer and weak messaging",
              description:
                "Visitors cannot quickly understand what the business does, who it is for, or why they should enquire.",
            },
            {
              title: "Poor enquiry path",
              description:
                "The site may exist, but it does not guide serious visitors clearly toward contact, consultation, or the next practical step.",
            },
          ],
          audience: [
            {
              title: "Service businesses where trust drives enquiries",
              description:
                "Especially relevant when the buying decision depends on professionalism, credibility, and how clearly the business presents itself.",
            },
            {
              title: "Businesses outgrowing a basic brochure site",
              description:
                "A good fit when the company has grown, repositioned, or outpaced the story its current site is telling.",
            },
            {
              title: "Teams needing the website to support operations",
              description:
                "Useful when the website should work more closely with forms, booking, enquiries, or internal workflow systems.",
            },
          ],
          processTitle: "A website process shaped around positioning, trust, and enquiry quality.",
          processDescription:
            "The website work stays commercially focused from the first review through to the final conversion path.",
          processSteps: [
            {
              step: "01",
              title: "Clarify the commercial story",
              description:
                "We review the offer, audience, and trust signals the site needs to communicate more clearly.",
            },
            {
              step: "02",
              title: "Shape the page structure",
              description:
                "We define the page hierarchy, messaging flow, and enquiry path around the way the business should be understood.",
            },
            {
              step: "03",
              title: "Design and build cleanly",
              description:
                "We implement the site with disciplined structure, responsive behaviour, and a restrained premium finish.",
            },
            {
              step: "04",
              title: "Refine the conversion path",
              description:
                "We tighten calls to action, content hierarchy, and form or booking connections so the right visitor has a clearer next step.",
            },
          ],
          faqs: [
            {
              question: "Do you help shape the messaging as well as the design?",
              answer:
                "Yes. Positioning, page flow, and message clarity are part of the work because the website needs to explain the business, not just present it visually.",
            },
            {
              question: "Can the website connect with booking or automation systems?",
              answer:
                "Yes. Websites are often one part of a wider operating structure, so forms, booking flows, and automation paths can be planned as part of the build.",
            },
            {
              question: "Is this only for redesigns, or can it cover a new site too?",
              answer:
                "Both. The right approach depends on whether the current website can be improved structurally or whether the business is better served by rebuilding properly.",
            },
          ],
        },
        "booking-workflows": {
          title: "Booking & AI Call Workflows",
          summary:
            "Structured booking and AI-assisted call workflows for scheduling, confirmations, reminders, intake, internal handoff, and fewer no-shows.",
          heroSupportingLine:
            "Best for businesses where booking quality, call handling, and team readiness directly affect conversion, service quality, and daily capacity.",
          intro:
            "Booking & AI Call Workflows turn scheduling and inbound call handling into a more dependable service process. Benyah structures availability, confirmations, reminders, intake, internal handoff, and AI-assisted call handling where appropriate so clients get a smoother path in and the team gets cleaner information out.",
          capabilities: [
            "Scheduling logic, booking rules, confirmations, and reminders",
            "Intake steps, pre-visit information capture, and reduced no-show flows",
            "Internal handoff and AI-assisted call handling where it improves response quality",
          ],
          outcomes: [
            "Smoother scheduling and fewer missed steps",
            "Lower no-show risk and better client preparation",
            "Cleaner internal handoff after each booking or call",
          ],
          problems: [
            {
              title: "Back-and-forth scheduling and missed calls",
              description:
                "Clients and staff spend too much time resolving availability, returning calls, correcting details, or managing avoidable booking confusion.",
            },
            {
              title: "Missing reminders or incomplete intake",
              description:
                "The business lacks a dependable system for confirmations, reminders, pre-appointment forms, or collecting the right information before service begins.",
            },
            {
              title: "Weak handoff after booking or call",
              description:
                "An appointment or inbound call happens, but the internal team does not receive the right information, trigger, or preparation step at the right time.",
            },
          ],
          audience: [
            {
              title: "Appointment-based businesses with real scheduling pressure",
              description:
                "A strong fit for businesses where booking quality and response handling directly affect revenue, conversion, and client experience.",
            },
            {
              title: "Teams that need intake and preparation after each booking",
              description:
                "Useful when bookings trigger intake review, reminders, staffing, preparation steps, or additional internal coordination before delivery begins.",
            },
            {
              title: "Businesses that want calls and bookings feeding operations cleanly",
              description:
                "Best when scheduling, inbound calls, and follow-up need to feed service readiness, capacity planning, and day-to-day workflow cleanly.",
            },
          ],
          processTitle: "A booking flow built around response quality and operational readiness.",
          processDescription:
            "The work focuses on the full path from first enquiry or call through to a well-prepared appointment or next action.",
          processSteps: [
            {
              step: "01",
              title: "Review the current booking path",
              description:
                "We look at scheduling, call handling, reminders, intake, and the points where the process is currently breaking down.",
            },
            {
              step: "02",
              title: "Define the client and team flow",
              description:
                "We shape the confirmations, reminders, intake steps, handoffs, and AI-assisted call handling where it genuinely helps.",
            },
            {
              step: "03",
              title: "Implement the working sequence",
              description:
                "We connect booking logic, communication steps, and internal preparation so the process feels consistent on both sides.",
            },
            {
              step: "04",
              title: "Adjust around real usage",
              description:
                "We refine no-show prevention, information quality, and internal handoff once real bookings and calls start moving through the flow.",
            },
          ],
          faqs: [
            {
              question: "Can you work with our current booking platform or phone setup?",
              answer:
                "Usually yes. The first step is understanding the current booking and call flow, then deciding whether it should be improved, connected, or partially replaced.",
            },
            {
              question: "Does this include reminders, intake, and AI-assisted call handling?",
              answer:
                "Yes, where it makes operational sense. Reminders, confirmations, intake steps, internal notifications, and AI-assisted call handling can be structured together so the process feels consistent instead of fragmented.",
            },
            {
              question: "Is this only useful for high-volume booking businesses?",
              answer:
                "No. Even moderate booking volume can create real friction when the process is inconsistent, manual, or poorly connected to service delivery and internal preparation.",
            },
          ],
        },
        "facility-maintenance-management": {
          title: "Facility & Maintenance Management Solutions",
          summary:
            "Structured facility and maintenance systems for work orders, service records, asset visibility, and contractor coordination.",
          heroSupportingLine:
            "Best for small to mid-sized facilities and maintenance operations that need better visibility, coordination, and operational control.",
          intro:
            "Facility & Maintenance Management Solutions give small to mid-sized businesses a clearer operating system for assets, work orders, service records, contractor coordination, and reporting. Benyah can implement and structure Computerized Maintenance Management System (CMMS) setups, Computer-Aided Facility Management (CAFM) approaches, asset management tools, and contractor management workflows around the way the operation actually runs.",
          capabilities: [
            "Facility and maintenance system structure for assets, sites, and service records",
            "Work order, request handling, and contractor coordination workflows",
            "Asset visibility, reporting views, and operational oversight",
          ],
          outcomes: [
            "Clearer control over maintenance activity",
            "More dependable service records and asset visibility",
            "Better coordination across internal teams and contractors",
          ],
          problems: [
            {
              title: "Requests tracked across disconnected channels",
              description:
                "Maintenance requests are moving through email, calls, spreadsheets, or separate tools with no dependable single view.",
            },
            {
              title: "Incomplete service history and weak asset visibility",
              description:
                "Teams cannot easily see what has been done, what is recurring, or how a specific asset, location, or contractor history should be tracked over time.",
            },
            {
              title: "Limited oversight across contractors and recurring work",
              description:
                "Managers lack a clean view across workload, completion status, contractor activity, recurring work, response times, or recurring issues.",
            },
          ],
          audience: [
            {
              title: "Small to mid-sized facilities and maintenance teams",
              description:
                "A strong fit for teams that need better control over requests, assets, work status, contractor coordination, and service delivery quality.",
            },
            {
              title: "Property, site, and service-led operations",
              description:
                "Useful where multiple sites, assets, service providers, or internal stakeholders need a clearer structure around work orders, records, and day-to-day service coordination.",
            },
            {
              title: "Businesses moving beyond spreadsheets and informal tracking",
              description:
                "Ideal when maintenance activity is still being managed through spreadsheets, email, or ad hoc request handling.",
            },
          ],
          processTitle: "A management setup built around records, requests, and control.",
          processDescription:
            "The work is usually phased so the highest-friction part of the facilities or maintenance operation is brought under control first.",
          processSteps: [
            {
              step: "01",
              title: "Review the operating model",
              description:
                "We assess how requests, assets, work orders, service records, and contractor activity are currently being managed.",
            },
            {
              step: "02",
              title: "Define the record and workflow structure",
              description:
                "We shape the system around the requests, asset views, work statuses, and contractor coordination the team needs.",
            },
            {
              step: "03",
              title: "Implement the control layer",
              description:
                "We configure the management setup, reporting views, and operating flow so the work becomes easier to track and oversee.",
            },
            {
              step: "04",
              title: "Refine adoption and oversight",
              description:
                "We improve clarity around daily use, status visibility, and the operational reporting that managers actually need.",
            },
          ],
          faqs: [
            {
              question: "Does this need a large enterprise platform to be worthwhile?",
              answer:
                "No. The right setup depends on the scale and complexity of the operation. Many small to mid-sized businesses get better value from a focused, well-structured system than from an oversized platform.",
            },
            {
              question: "Can this include CMMS, CAFM, asset management, and contractor workflows?",
              answer:
                "Yes. The service can cover Computerized Maintenance Management System (CMMS) structures, Computer-Aided Facility Management (CAFM) workflows, asset management tools, and contractor coordination, depending on what the operation actually needs.",
            },
            {
              question: "Can we start with requests or work orders before expanding?",
              answer:
                "Yes. It is often better to begin with the highest-friction part of the operation, then expand once the process and record structure are clear.",
            },
          ],
        },
        "workflow-systems-automation": {
          title: "Workflow & Systems Automation",
          summary:
            "Deeper automation for businesses that need systems, data, and operational logic to work together reliably.",
          heroSupportingLine:
            "Best for businesses that need deeper workflow control, more reliable integrations, and connected systems that work together properly.",
          intro:
            "Workflow & Systems Automation is for businesses that need more than repeated task automation. This is where Benyah structures the deeper layer between forms, CRMs, internal tools, operations platforms, and other systems so data, decisions, and actions move in the right order across the whole process.",
          capabilities: [
            "System-to-system integrations and workflow orchestration",
            "Webhook, API, and data-sync logic across business tools",
            "Branching rules, exception handling, and cross-platform process flow",
          ],
          outcomes: [
            "More connected systems and cleaner cross-platform handoffs",
            "More reliable execution between tools and teams",
            "Less manual rekeying, duplication, and broken workflow logic",
          ],
          problems: [
            {
              title: "Automation tools too limited for real workflows",
              description:
                "Simpler automation platforms start to break down when the process needs flexible logic, deeper integrations, or better control over execution.",
            },
            {
              title: "Data not moving reliably between systems",
              description:
                "Information is being copied manually or passing inconsistently between systems, which leads to duplication, stale data, and avoidable errors.",
            },
            {
              title: "Disconnected systems and brittle logic as complexity grows",
              description:
                "The business needs connected systems, but the current setup cannot support the required webhook, API, internal process automation, or logic depth reliably.",
            },
          ],
          audience: [
            {
              title: "Businesses relying on several systems to deliver one process",
              description:
                "A strong fit when forms, CRMs, internal tools, and other systems need deeper integration and more reliable data movement.",
            },
            {
              title: "Teams that need integrations, orchestration, or exception handling",
              description:
                "Useful when the process needs more precision than a basic rule-based automation setup can comfortably support.",
            },
            {
              title: "Operators who want deeper automation without enterprise overhead",
              description:
                "Best when the business wants automation that can evolve thoughtfully as process design becomes more structured.",
            },
          ],
          processTitle: "A deeper integration process for systems that need to move together reliably.",
          processDescription:
            "This work is shaped around the systems involved, the logic between them, and the level of reliability the operation needs.",
          processSteps: [
            {
              step: "01",
              title: "Map the systems and data flow",
              description:
                "We review the tools involved, how data should move, and where the current integration or orchestration logic is failing.",
            },
            {
              step: "02",
              title: "Design the automation architecture",
              description:
                "We define the webhook, API, transformation, branching, and exception logic needed to support the real process.",
            },
            {
              step: "03",
              title: "Implement and connect carefully",
              description:
                "We build the workflow so system handoffs, triggered actions, and data updates happen in the right order and with proper checks.",
            },
            {
              step: "04",
              title: "Harden the flow for daily use",
              description:
                "We refine reliability, error handling, and operational visibility so the automation stays dependable as usage grows.",
            },
          ],
          faqs: [
            {
              question: "Is this service limited to n8n?",
              answer:
                "No. n8n can be part of the stack, but the service is about the workflow outcome. Benyah can structure webhook-based workflows, API integrations, connected business systems, and internal process automation using the right approach for the job.",
            },
            {
              question: "Can this work with the systems we already use?",
              answer:
                "Usually yes, as long as those systems provide workable access points such as APIs, webhooks, or supported connectors.",
            },
            {
              question: "How is this different from Automation Solutions?",
              answer:
                "Automation Solutions usually improve recurring day-to-day process work inside the current operating flow. Workflow & Systems Automation is the better fit when the pressure point sits between multiple systems and the business needs deeper integration, orchestration, and data movement.",
            },
            {
              question: "When is this better than a simpler automation setup?",
              answer:
                "When the workflow needs deeper logic, cleaner orchestration, stronger integrations, or more reliable movement between business systems. The aim is not more complexity. It is better control where the process genuinely needs it.",
            },
          ],
        },
        "business-systems": {
          title: "Business Systems & Internal Tools",
          summary:
            "Custom internal systems, dashboards, and operational tools built around the way the business actually runs.",
          heroSupportingLine:
            "Best for businesses that need a better internal operating layer, not just another automation.",
          intro:
            "Business Systems & Internal Tools are for situations where the right answer is not another handoff, but a better internal system altogether. Benyah helps define and build structured internal software, dashboards, records, and controls around the workflows, users, and oversight the business actually needs.",
          capabilities: [
            "Custom dashboards, admin portals, and internal workspaces",
            "Structured records, role-based views, and operational controls",
            "Data models and reporting built around daily internal work",
          ],
          outcomes: [
            "Stronger internal visibility and control",
            "Less reliance on spreadsheets and workarounds",
            "An internal system that fits the operation properly",
          ],
          problems: [
            {
              title: "Critical processes living in spreadsheets and workarounds",
              description:
                "Core internal processes are being held together by spreadsheets, manual steps, and workaround habits that do not scale cleanly.",
            },
            {
              title: "Duplicated or inconsistent internal data",
              description:
                "The same information exists in too many places, which makes reporting, follow-up, and operational decisions less dependable.",
            },
            {
              title: "Limited oversight into workload and status",
              description:
                "Managers and owners lack a clear operational view because the underlying system is fragmented and not fit for purpose.",
            },
          ],
          audience: [
            {
              title: "Businesses with internal workflows generic software cannot shape well",
              description:
                "A strong fit when the operational model is specific enough that generic software keeps forcing compromise.",
            },
            {
              title: "Teams held together by patchwork tools",
              description:
                "Useful when spreadsheets, shared inboxes, and multiple disconnected apps are still carrying core internal work.",
            },
            {
              title: "Leaders needing a better internal operating layer",
              description:
                "Best for businesses that want cleaner oversight, stronger process control, and systems designed around real internal operations.",
            },
          ],
          processTitle: "An internal-system process built around the real operating model.",
          processDescription:
            "The goal is to define the smallest strong system that gives the business better visibility, cleaner records, and better internal control.",
          processSteps: [
            {
              step: "01",
              title: "Understand the internal workflow",
              description:
                "We review the users, records, approvals, reporting needs, and workarounds the business is currently relying on.",
            },
            {
              step: "02",
              title: "Define the operating structure",
              description:
                "We shape the internal system around the data model, views, permissions, and actions the team actually needs.",
            },
            {
              step: "03",
              title: "Build the internal tool cleanly",
              description:
                "We implement the dashboard, portal, or internal workspace with a focus on clarity, usability, and practical control.",
            },
            {
              step: "04",
              title: "Refine for reporting and oversight",
              description:
                "We improve visibility, workflow fit, and day-to-day management once the tool is in use.",
            },
          ],
          faqs: [
            {
              question: "When is a custom internal tool justified?",
              answer:
                "Usually when a recurring workflow, reporting need, or internal process is being poorly served by generic software and creating ongoing operational drag.",
            },
            {
              question: "How is this different from automation?",
              answer:
                "Automation improves the flow between steps. Business Systems & Internal Tools are for when the business needs a stronger internal system, workspace, dashboard, or record structure at the centre of the process itself.",
            },
            {
              question: "Does this have to become a large software project?",
              answer:
                "No. The goal is usually a focused internal system around a clear operational need, not unnecessary product complexity.",
            },
            {
              question: "Can it sit alongside software we already use?",
              answer:
                "Yes. In many cases it is better to extend the current stack with the right internal layer than to replace everything at once.",
            },
          ],
        },
      },
    },
    about: {
      eyebrow: "About",
      title: "Benyah is built around the idea of structure.",
      description:
        "Benyah is a premium small-business solutions company helping businesses improve digital presence, workflow, and operations through connected systems.",
      supportingLine:
        "Structure, clear systems, and practical execution for businesses that need the operation behind the brand to work properly.",
      highlightsLabel: "What Benyah Stands For",
      highlights: [
        "Structure before software",
        "Connected systems over isolated fixes",
        "Premium execution with commercial clarity",
      ],
      overview: {
        eyebrow: "What Benyah Is",
        title:
          "A systems-focused partner for better digital structure and business operations.",
        description:
          "Benyah helps small businesses bring more order to the parts of the business that usually become disconnected over time.",
        body:
          "The work spans websites, automation, booking & AI call workflows, facility & maintenance management solutions, workflow & systems automation, business systems, and internal tools. The goal is not to add technology for its own sake. It is to create a stronger foundation for how the business presents itself, runs internally, and delivers day to day.",
        asideEyebrow: "Meaning",
        asideTitle:
          "Benyah relates to structure, foundation, and connected systems.",
        asideDescription:
          "That meaning shapes the approach: build what gives the business a clearer base, cleaner flow, and a more dependable daily operation.",
        asidePoints: [
          "Front end and internal workflow considered together",
          "Systems shaped around real operating needs",
          "Implementation designed for practical daily use",
        ],
      },
      beliefs: {
        eyebrow: "What We Believe",
        title: "Clarity and structure create better business systems.",
        description:
          "Benyah is guided by a small set of principles that keep the work commercially grounded and operationally useful.",
        items: [
          {
            title: "Clarity Over Clutter",
            description:
              "Every page, workflow, and system should make the business easier to understand and easier to run.",
          },
          {
            title: "Systems Over Patchwork",
            description:
              "The strongest result comes from connecting the right parts of the business instead of layering fixes on top of weak structure.",
          },
          {
            title: "Practical Execution Over Hype",
            description:
              "Benyah values dependable implementation, clean scope, and solutions that work in practice over fashionable language or overbuilt complexity.",
          },
          {
            title: "Structure That Supports Growth",
            description:
              "Good systems should not only solve today’s friction. They should also give the business a stronger base for the next stage.",
          },
        ],
      },
      process: {
        eyebrow: "How We Work",
        title: "A structured process from discovery to refinement.",
        description:
          "Every engagement starts with understanding how the business currently works, then defining the right level of solution around it.",
        steps: [
          {
            step: "01",
            title: "Start with discovery",
            description:
              "We review the current setup, the pressure points, and the part of the business that needs stronger structure.",
          },
          {
            step: "02",
            title: "Design the right system",
            description:
              "We define the right website, workflow, automation, or system shape based on business fit rather than assumptions.",
          },
          {
            step: "03",
            title: "Implement with discipline",
            description:
              "We build with clear scope, careful sequencing, and a bias toward solutions that are maintainable and commercially sensible.",
          },
          {
            step: "04",
            title: "Refine for real use",
            description:
              "We improve adoption, clarity, and day-to-day reliability once the system is in use.",
          },
        ],
      },
      differentiators: {
        eyebrow: "What Makes Benyah Different",
        title: "Premium execution shaped around real business fit.",
        description:
          "Benyah is not built around volume, trend language, or one-size-fits-all delivery. The value comes from structured thinking and practical execution.",
        items: [
          {
            title: "Systems Thinking",
            description:
              "Benyah works across digital presence, workflow, and operations so the business functions as one connected structure.",
          },
          {
            title: "Commercial Restraint",
            description:
              "The goal is not to add more software or more layers than the business actually needs. It is to solve the right problem properly.",
          },
          {
            title: "Built for Daily Use",
            description:
              "The work is shaped around adoption, clarity, and operational fit so the result can support the business in practice, not just in theory.",
          },
        ],
      },
      audience: {
        eyebrow: "Who We Work Best With",
        title: "Best suited to businesses that need stronger structure, not more noise.",
        description:
          "The strongest fit is usually a business that has grown past improvised tools, disconnected workflows, or a weak digital front end.",
        items: [
          {
            title: "Small service businesses with operational complexity",
            description:
              "Especially where enquiries, booking, delivery, and follow-up need to work more cleanly together.",
          },
          {
            title: "Facilities and operations-led teams",
            description:
              "Where visibility, work orders, internal control, or system coordination matter to day-to-day delivery.",
          },
          {
            title: "Growing businesses replacing patchwork systems",
            description:
              "Where spreadsheets, disconnected tools, and manual workarounds are starting to hold the business back.",
          },
        ],
      },
      finalCta: {
        eyebrow: "Start the Conversation",
        title:
          "If the business needs better structure, that is the right place to begin.",
        description:
          "Benyah can help define the right website, workflow, automation, or system layer based on what the business actually needs now.",
        supportingLine: "Clear scope. Structured thinking. Practical execution.",
        secondaryAction: "Explore Services",
      },
    },
    caseStudies: {
      eyebrow: "Case Studies",
      title: "Selected work and structured solution examples.",
      description:
        "This page shows the types of projects Benyah is designed to deliver across digital presence, workflow, and business operations.",
      supportingLine:
        "Detailed project stories are shared selectively, based on project stage, confidentiality, and whether the work is the right fit to publish.",
      highlightsLabel: "What This Page Shows",
      highlights: [
        "Real solution formats without invented client stories",
        "Structured examples of the kind of work Benyah delivers",
        "A clearer view of how projects are typically scoped",
      ],
      intro: {
        eyebrow: "How Benyah Approaches Work",
        title: "Structured solutions, presented with restraint.",
        description:
          "Benyah focuses on practical work that improves clarity, workflow, and operational control. The purpose of this page is to show the shape of the work without dressing it up as theatre.",
        asideEyebrow: "Publishing Standard",
        asideTitle: "Detailed case studies are shared carefully, not theatrically.",
        asideDescription:
          "Some projects are still live, some are confidential, and some are better discussed in a direct conversation. This page is designed to show the type of work Benyah does without inventing details that do not belong in public.",
        asidePoints: [
          "Project examples are shown by solution format, not fake client narrative",
          "Detailed stories can be shared where the stage and fit are right",
          "The focus stays on structure, scope, and operational value",
        ],
      },
      startingPoints: {
        eyebrow: "Typical Starting Points",
        title: "The work usually begins with an operational pressure point, not a blank sheet.",
        description:
          "Before a project is scoped, there is usually a recognisable business situation behind it. These are common starting points Benyah is asked to untangle.",
        items: [
          {
            title: "A strong business with a weak front end",
            description:
              "The service quality is solid, but the website, enquiry path, or booking experience does not reflect the standard of the business behind it.",
          },
          {
            title: "An operation held together by manual coordination",
            description:
              "Important steps are happening, but they depend too heavily on inboxes, spreadsheets, memory, and repeated follow-up from the team.",
          },
          {
            title: "Tools in place, but no clean system between them",
            description:
              "The business already uses forms, CRMs, booking platforms, or internal tools, but the handoff between them is unreliable, duplicated, or hard to oversee.",
          },
        ],
      },
      catalog: {
        eyebrow: "Selected Work Formats",
        title: "Project types that reflect the kind of work Benyah delivers.",
        description:
          "These examples are structured by solution format so the page remains useful before a larger public portfolio is in place.",
      },
      labels: {
        outcomeLabel: "Supports Outcomes Like",
        addressedLabel: "What Was Addressed",
        scopeLabel: "Typical Engagement",
      },
      items: [
        {
          title: "Booking & AI Call Workflow Setup",
          sector: "Booking & Call Workflows",
          summary:
            "A structured booking and call-handling setup for service businesses where scheduling, reminders, intake, and internal readiness need to work together cleanly.",
          addressed:
            "Scheduling rules, confirmations, reminder flow, intake steps, AI-assisted call handling where appropriate, and the handoff from booking into delivery.",
          outcome:
            "Cleaner client experience, fewer missed steps, and better-prepared service delivery.",
          scope:
            "Focused implementation or booking workflow improvement.",
        },
        {
          title: "Automation And Handoff System",
          sector: "Workflow Automation",
          summary:
            "An automation-led setup connecting enquiries, internal actions, updates, and follow-up so work does not stall between teams or tools.",
          addressed:
            "Manual administration, inconsistent handoffs, notification logic, and repeated coordination between systems or team members.",
          outcome:
            "Less manual coordination, more dependable workflow movement, and clearer visibility into the process.",
          scope:
            "Workflow improvement or multi-step automation build.",
        },
        {
          title: "Premium Lead-Generation Website",
          sector: "Websites",
          summary:
            "A premium website structured to improve first impression, communicate services clearly, and guide qualified visitors toward contact or consultation.",
          addressed:
            "Weak positioning, generic presentation, unclear page flow, and poor lead capture structure.",
          outcome:
            "Stronger credibility, clearer service communication, and better-quality enquiries.",
          scope:
            "Focused implementation or website rebuild with conversion structure.",
        },
        {
          title: "Facility & Maintenance Management Setup",
          sector: "Facility & Maintenance Management",
          summary:
            "A structured facility and maintenance setup for handling assets, work orders, service records, contractor coordination, and operational oversight more cleanly.",
          addressed:
            "Request flow, asset structure, work order status, service records, reporting visibility, and day-to-day coordination across maintenance activity.",
          outcome:
            "Better operational control, cleaner records, and clearer visibility across facilities work.",
          scope:
            "System setup or multi-part operational build.",
        },
        {
          title: "Internal Business Tool Or Dashboard",
          sector: "Business Systems",
          summary:
            "A focused internal system built around a specific workflow, data model, or reporting need that generic software is handling poorly.",
          addressed:
            "Patchwork spreadsheets, duplicated data, weak oversight, and internal processes that do not fit off-the-shelf tools.",
          outcome:
            "Cleaner internal workflow, better visibility, and stronger administrative efficiency.",
          scope:
            "Focused implementation or system setup around a high-friction internal process.",
        },
        {
          title: "Workflow & Systems Automation Build",
          sector: "Workflow & Systems Automation",
          summary:
            "A connected automation build designed for businesses that need more control over integrations, logic, and cross-system execution.",
          addressed:
            "n8n workflows, webhook and API coordination, data movement between tools, and automation logic beyond basic rule-based setups.",
          outcome:
            "More connected systems, cleaner data flow, and faster process execution.",
          scope:
            "Integration workflow or deeper workflow automation build.",
        },
      ],
      engagements: {
        eyebrow: "How Projects Are Scoped",
        title: "Benyah supports focused work as well as multi-part system builds.",
        description:
          "Some projects start with a single pressure point. Others require a wider operating structure across several connected areas.",
        items: [
          {
            title: "Focused Implementation",
            description:
              "A clearly defined project around one practical need, such as a website, booking setup, or internal workflow fix.",
          },
          {
            title: "System Setup",
            description:
              "A more structured build where tools, data, and process need to be set up properly from the start.",
          },
          {
            title: "Workflow Improvement",
            description:
              "A refinement pass on an existing setup where the right answer is better structure, not a full replacement.",
          },
          {
            title: "Multi-Part Operational Build",
            description:
              "A connected project covering several layers of the business, such as website, workflow, automation, and internal systems together.",
          },
        ],
      },
      finalCta: {
        eyebrow: "Start the Conversation",
        title: "If one of these project formats fits the need, the next step is a direct discussion.",
        description:
          "Benyah can help assess the right level of project, the likely system shape, and where to begin based on the current business setup.",
        supportingLine: "Practical scope before implementation.",
        secondaryAction: "Explore Services",
      },
    },
    book: {
      eyebrow: "Discovery Call",
      title: "Request a discovery call for fit, scope, and the right next step.",
      description:
        "The Benyah discovery call is for understanding how the business works today, where the friction sits, and whether the next step is a website, workflow improvement, system setup, or wider operational build.",
      supportingLine:
        "Designed for serious enquiries that need clarity before implementation.",
      highlightsLabel: "What To Expect",
      highlights: [
        "A practical business conversation, not a scripted sales call",
        "Useful for websites, automation projects, operational systems, and internal tooling",
        "The goal is clarity on fit, likely scope, and the most sensible next step",
      ],
      heroPrimaryAction: "View Request Options",
      heroSecondaryAction: "Prefer To Send An Enquiry?",
      covers: {
        eyebrow: "What The Call Covers",
        title: "A practical review of the business, the problem, and the likely scope.",
        description:
          "The conversation is designed to create enough clarity for both sides to understand whether there is a fit and what the next step should be.",
        items: [
          {
            title: "Current Setup",
            description:
              "How the business currently handles enquiries, delivery, scheduling, systems, or internal operations.",
          },
          {
            title: "Operational Friction",
            description:
              "Where manual work, weak handoffs, disconnected tools, or unclear structure are slowing the business down.",
          },
          {
            title: "Service Or System Need",
            description:
              "Whether the need points toward a website, automation layer, booking & AI call workflow, facility & maintenance management setup, or internal tool.",
          },
          {
            title: "Recommended Next Step",
            description:
              "What the most practical next move should be after the call, including whether a focused project or broader system build makes sense.",
          },
        ],
      },
      audience: {
        eyebrow: "Who It Is For",
        title: "Best suited to businesses with a real systems or operational need.",
        description:
          "The discovery call is most useful when there is a concrete need to define, improve, or structure properly.",
        items: [
          {
            title: "Automation Projects",
            description:
              "For businesses that want to reduce repeat admin, tighten handoffs, and connect the tools they already use.",
          },
          {
            title: "Websites",
            description:
              "For businesses that need a premium website with clearer positioning, better trust signals, and stronger lead capture.",
          },
          {
            title: "Booking & AI Call Workflows",
            description:
              "For businesses that need smoother scheduling, confirmations, reminders, intake, internal handoff, and AI-assisted call handling where it makes sense.",
          },
          {
            title: "Facility & Maintenance Management",
            description:
              "For facilities or service-led operations that need stronger control around service records, assets, work orders, and contractor coordination.",
          },
          {
            title: "Internal Tools / Systems",
            description:
              "For teams that need better visibility, structured data flow, and fit-for-purpose operational software.",
          },
        ],
      },
      booking: {
        eyebrow: "Booking",
        title: "Schedule the call if available, or request it directly.",
        description:
          "If a live booking calendar is available, you can reserve a time here. If not, you can still request the discovery call directly through the enquiry flow without losing momentum.",
        shell: {
          configuredBadge: "Booking Ready",
          configuredTitle: "Choose a time for the conversation",
          configuredDescription:
            "Use the booking area below to reserve a suitable time for an initial discussion around business context, fit, and likely scope.",
          configuredAction: "Open Booking In A New Tab",
          configuredNote:
            "If the embedded schedule does not load cleanly, use the direct booking link instead.",
          fallbackBadge: "Discovery Call Request",
          fallbackTitle: "Discovery-call requests are handled directly.",
          fallbackDescription:
            "To keep the process intentional, Benyah handles discovery-call requests through the enquiry flow when a live calendar is not published here. Share the business context and note that you want the call.",
          fallbackPrimaryAction: "Request The Call",
          fallbackSecondaryAction: "Explore Services",
          fallbackNote:
            "This keeps the process honest: the conversation can still start immediately, and the right next step can be confirmed after the first review.",
        },
      },
      reassurance: {
        eyebrow: "What Happens Next",
        title: "The first conversation is for fit, scope, and next-step clarity.",
        description:
          "It is not a commitment to start a project immediately. The aim is to understand the context properly, confirm whether Benyah is the right fit, and identify the most practical way forward.",
        points: [
          "A short brief or rough business context is enough to begin",
          "If a discovery call is not the best first step, Benyah can recommend a better route",
          "Detailed scope, timing, and delivery structure can follow after the initial conversation",
        ],
      },
    },
    contact: {
      eyebrow: "Contact",
      title: "Start a structured conversation with Benyah.",
      description:
        "Get in touch about websites, automation, booking & AI call workflows, business systems, facility & maintenance management solutions, workflow & systems automation, or broader operational structure.",
      supportingLine:
        "Benyah works across digital presence, workflow, and internal operations for businesses that need clearer systems and better execution.",
      highlightsLabel: "Contact Fit",
      highlights: [
        "New project enquiries and implementation discussions",
        "Workflow improvements and system restructuring",
        "Websites, automation, and operational solutions",
      ],
      heroPrimaryAction: "Open The Enquiry Form",
      intro: {
        eyebrow: "Why Get In Touch",
        title: "The best conversations usually start with a clear business need.",
        description:
          "You do not need a full specification to begin. A short outline of the current setup and the pressure point is enough for a serious first discussion.",
        items: [
          {
            title: "Project Enquiries",
            description:
              "For businesses planning a new website, automation setup, booking flow, or internal system project.",
          },
          {
            title: "Workflow Improvement",
            description:
              "For teams that already have tools in place but need better handoffs, cleaner process, or more reliable execution.",
          },
          {
            title: "Websites And Digital Presence",
            description:
              "For businesses that need a stronger first impression, clearer positioning, or better lead capture structure.",
          },
          {
            title: "Operational Systems",
            description:
              "For businesses that need better visibility, booking flow, internal tooling, or facilities-oriented system support.",
          },
        ],
      },
      form: {
        eyebrow: "Lead Form",
        title: "Send an enquiry with enough detail to start the right conversation.",
        description:
          "The form is designed to stay low-friction while giving Benyah enough context to understand the type of support you need.",
        cardTitle: "What Helps Benyah Assess Fit",
        cardDescription:
          "A short practical brief is enough. The aim is to understand the pressure point, the operating context, and what kind of next step would be most useful.",
        note:
          "Detailed scope, sequencing, and technical decisions can be shaped after the initial conversation.",
        helperPoints: [
          "A short summary of the business and current setup",
          "The main friction point or project objective",
          "The service area that feels closest to the need today",
        ],
        submitLabel: "Send Enquiry",
        fields: {
          name: "Name",
          company: "Company Name",
          email: "Email",
          phone: "Phone or WhatsApp",
          service: "Service Needed",
          brief: "Project Brief",
          nextStep: "Preferred Next Step",
        },
        placeholders: {
          name: "Your name",
          company: "Business or company name",
          email: "you@company.com",
          phone: "Phone or WhatsApp",
          servicePrompt: "Select a service",
          brief:
            "Briefly explain what the business needs, what is not working well today, or what kind of project you are considering.",
          nextStepPrompt: "Select a next step",
        },
        serviceNotSureLabel: "Not sure yet",
        nextStepOptions: [
          { value: "contact", label: "Initial Contact" },
          { value: "discovery-call", label: "Request A Discovery Call" },
        ],
        statuses: {
          successTitle: "Enquiry received",
          successDescription:
            "Thank you. Your enquiry has been received and is ready for review.",
          errorTitle: "Unable to send enquiry",
          errorDescription:
            "Something interrupted the submission. Please review the form and try again.",
        },
      },
      trust: {
        eyebrow: "What Happens Next",
        title: "The first message is for fit, context, and the right next step.",
        description:
          "Benyah uses the initial enquiry to understand the situation properly, decide whether a short call is the right next step, and shape the scope from there.",
        bestFitTitle: "Best Enquiries To Send Here",
        bestFitDescription:
          "The contact form works best when there is a real project, workflow issue, or operational pressure point to discuss.",
        bestFitPoints: [
          "A website or digital presence that no longer matches the business properly",
          "Workflow friction, repeated admin, or disconnected systems slowing delivery",
          "A need for stronger booking, operational oversight, or internal tooling",
        ],
        points: [
          "A short brief is enough to begin a serious conversation",
          "The right service or combination of services can be clarified together",
          "Scope, timing, and sequencing can be shaped after the first review",
        ],
      },
      finalCta: {
        eyebrow: "Ready To Reach Out",
        title: "If the business needs better structure, send the enquiry and start there.",
        description:
          "Benyah can help define whether the next step is a website, workflow improvement, automation layer, or a broader operational system.",
        supportingLine: "Clear thinking before implementation.",
        primaryAction: "Go To The Form",
        secondaryAction: "Explore Services",
      },
    },
    notFound: {
      title: "That page is not available.",
      description: "The route may have moved, or the localized page has not been created yet.",
      actionLabel: "Return to Home",
    },
  },
  ar: {
    meta: {
      description:
        "تساعد Benyah الشركات الصغيرة عبر مواقع احترافية وحلول أتمتة وتدفقات للحجز والمكالمات الذكية وحلول لإدارة المرافق والصيانة وأنظمة تشغيلية وأدوات داخلية مخصصة.",
      languageSwitcherLabel: "تغيير اللغة",
      primaryNavigationLabel: "التنقل الرئيسي",
      openNavigationLabel: "فتح التنقل",
      closeNavigationLabel: "إغلاق التنقل",
      mobileNavigationTitle: "التنقل",
      mobileNavigationDescription: "تنقل مختصر للموقع مع إجراء رئيسي واحد.",
    },
    navigation: [
      { href: "/", label: "الرئيسية" },
      { href: "/services", label: "الخدمات" },
      { href: "/about", label: "من نحن" },
      { href: "/case-studies", label: "دراسات الحالة" },
      { href: "/contact", label: "تواصل" },
    ],
    ctas: {
      primary: "اطلب مكالمة اكتشاف",
      secondary: "استكشف الخدمات",
      contact: "ناقش مشروعك",
    },
    footer: {
      strapline:
        "مواقع وأنظمة وسير عمل رقمية مصممة بهيكل أوضح لعمليات الشركات الصغيرة.",
      note: "مصممة للأعمال التي تريد وضوحاً أكبر وهيكلاً أفضل واحتكاكاً تشغيلياً أقل.",
      navigationLabel: "التنقل",
    },
    home: {
      eyebrow: "Benyah",
      title: "مواقع وسير عمل وأنظمة منظمة للأعمال التي يقودها التشغيل اليومي.",
      description:
        "تساعد Benyah الأعمال الخدمية والعيادات ومشغلي المرافق والفرق النامية على استبدال الأدوات المبعثرة بمواقع أوضح وسير عمل أنظف وأنظمة تشغيلية أقوى.",
      supportingLine:
        "مناسبة خصوصاً للأعمال التي تجاوزت الجداول والخطوات اليدوية والحضور الرقمي الضعيف والأنظمة المنفصلة.",
      highlightsLabel: "ما الذي تقدمه Benyah",
      highlights: [
        "مواقع احترافية تبني الثقة وتدعم الاستفسارات المناسبة",
        "أتمتة وأنظمة حجز تقلل التنسيق اليدوي",
        "أنظمة تشغيلية وأدوات داخلية مبنية حول سير العمل الحقيقي",
      ],
      labels: {
        serviceBadge: "خدمة",
        serviceAction: "اعرف المزيد",
        caseStudyOutcome: "النتيجة المتوقعة",
      },
      problem: {
        eyebrow: "أين تظهر المشكلة",
        title: "معظم الشركات النامية لا ينقصها عدد الأدوات. ما ينقصها هو الهيكل.",
        description:
          "غالباً ما يتطور الموقع وسير العمل والتشغيل الداخلي كلٌ على حدة. ومع الوقت يظهر التكرار وضعف التسليم بين المراحل وعدم اتساق الخدمة وأنظمة لا يثق بها أحد بالكامل.",
        items: [
          {
            title: "أنظمة مبعثرة",
            description:
              "الاستفسار والحجز والتنفيذ والمتابعة موزعة على أدوات منفصلة بدون تدفق تشغيلي واضح.",
          },
          {
            title: "سير عمل يدوي",
            description:
              "خطوات مهمة ما زالت تعتمد على التذكر أو البريد أو الجداول أو أعمال إدارية متكررة.",
          },
          {
            title: "حضور رقمي ضعيف",
            description:
              "قد يبدو الموقع مقبولاً، لكنه لا يشرح القيمة بوضوح ولا يدعم التحويل بالشكل الصحيح.",
          },
          {
            title: "فجوات تشغيلية",
            description:
              "تفتقر الفرق إلى الرؤية أو التقارير أو السيطرة النظامية التي تحتاجها للنمو بثقة.",
          },
        ],
        asideEyebrow: "تركيز تشغيلي",
        asideTitle: "Benyah تربط الواجهة التي يراها العميل بالأنظمة التي تشغّل العمل.",
        asideDescription:
          "الهدف ليس إضافة المزيد من البرامج، بل بناء هيكل أوضح بين الطلب، والتنفيذ الخدمي، والتشغيل الداخلي.",
        asidePoints: [
          "الموقع والحجز وسير العمل مصممة لتعمل كنظام واحد",
          "حلول مناسبة فعلياً عندما لا تكفي الأدوات الجاهزة",
          "تنفيذ عملي قابل للاستخدام اليومي",
        ],
      },
      process: {
        eyebrow: "كيف نعمل",
        title: "منهجية منظمة من التشخيص حتى التنفيذ.",
        description:
          "تبدأ كل عملية بفهم طريقة عمل النشاط فعلياً، ثم بناء المستوى الصحيح من النظام حوله.",
        steps: [
          {
            step: "01",
            title: "فهم التشغيل",
            description:
              "نراجع نموذج العمل وسير العمل ونقاط الاحتكاك والأدوات الحالية قبل التوصية بأي شيء.",
          },
          {
            step: "02",
            title: "تحديد النظام المناسب",
            description:
              "نحدد المزيج الصحيح من الموقع أو الأتمتة أو تدفق الحجز أو النظام الداخلي بحسب الحاجة التشغيلية.",
          },
          {
            step: "03",
            title: "البناء بوضوح",
            description:
              "نصمم وننفذ بهيكل نظيف ونطاق واضح وانحياز نحو الملاءمة طويلة المدى.",
          },
          {
            step: "04",
            title: "التحسين للاستخدام الفعلي",
            description:
              "نحسن ما يهم فعلاً في الممارسة: الاعتماد، الوضوح، الاعتمادية، والكفاءة اليومية.",
          },
        ],
      },
      why: {
        eyebrow: "لماذا Benyah",
        title: "شريك أنظمة احترافي، لا وكالة تعمل بالحجم.",
        description:
          "Benyah مناسبة للأعمال التي تريد تفكيراً واضحاً تجارياً ونطاقاً منضبطاً وأنظمة تصمد في الاستخدام اليومي.",
        items: [
          {
            title: "الهيكل قبل البرنامج",
            description:
              "نبدأ بسير العمل والأدوار ونقاط الاحتكاك قبل أن نقرر ما الذي يجب بناؤه.",
          },
          {
            title: "تفكير تشغيلي",
            description:
              "نعمل عبر المواقع والحجوزات والأتمتة والأنظمة الداخلية حتى يعمل النشاط كتدفق واحد مترابط.",
          },
          {
            title: "فخامة منضبطة",
            description:
              "نطاق واضح، تصميم نظيف، وتنفيذ عملي بدون ضوضاء غير ضرورية أو تعقيد مبالغ فيه.",
          },
        ],
      },
      selectedWork: {
        eyebrow: "أعمال مختارة",
        title: "سجل انتقائي للأنظمة وسير العمل التي نساعد على تحسينها.",
        description:
          "ستُنشر دراسات الحالة بعناية عندما تصبح المشاريع جاهزة للمشاركة. التركيز سيكون على الوضوح التشغيلي لا على المبالغة التسويقية.",
        noteEyebrow: "معيار النشر",
        noteTitle: "مبني لملاءمة طويلة المدى",
        noteDescription:
          "ليس كل مشروع بحاجة لأن يصبح دراسة حالة علنية. ستنشر Benyah الأعمال التي تعكس مستوى الهيكل والوضوح والتنفيذ الذي يمكن للعملاء توقعه.",
      },
      finalCta: {
        eyebrow: "ابدأ الحوار",
        title: "إذا كان العمل يحتاج إلى هيكل أوضح، فهذه هي البداية.",
        description:
          "سواء كنت تحتاج موقعاً أقوى، أو سير عمل أنظف، أو نظاماً داخلياً أكثر قدرة، تساعدك Benyah على تحديد الخطوة التالية الصحيحة.",
        supportingLine: "نطاق واضح. تفكير عملي. تنفيذ احترافي.",
      },
    },
    services: {
      eyebrow: "الخدمات",
      title: "خدمات منظمة لعمليات أعمال أكثر وضوحاً.",
      description:
        "تساعد Benyah الأعمال الخدمية والفرق التي يقودها التشغيل اليومي على بناء هيكل أوضح عبر الحضور الرقمي وسير العمل والعمليات اليومية.",
      supportingLine:
        "ابدأ بالخدمة الأقرب إلى نقطة الاحتكاك الحالية. صفحات التفاصيل توضح أين تناسب كل خدمة وما الذي تساعد على تحسينه.",
      highlightsLabel: "نطاق الخدمات",
      highlights: [
        "أنظمة موجهة للعميل تدعم الثقة والتحويل",
        "سير عمل وأتمتة تقلل التنسيق المتكرر",
        "أنظمة تشغيلية ترفع الرؤية والسيطرة والنمو",
      ],
      heroSecondaryAction: "استعرض فئات الخدمات",
      intro: {
        eyebrow: "كيف تلائم Benyah",
        title:
          "هيكل أوضح بين الحضور الرقمي وسير العمل والتشغيل اليومي.",
        description:
          "غالباً ما يتطور الموقع والتدفق الداخلي والأنظمة التشغيلية كلٌ على حدة. تساعد Benyah على جمعها داخل بنية تشغيلية أكثر اتساقاً.",
        pointsLabel: "ما الذي يغطيه الهيكل الأفضل",
        points: [
          "حضور رقمي يشرح القيمة بالشكل الصحيح",
          "تصميم سير عمل يقلل التسليم اليدوي بين المراحل",
          "أنظمة تشغيلية ترفع الرؤية والسيطرة",
        ],
      },
      catalog: {
        eyebrow: "فئات الخدمات",
        title: "الخدمات الأساسية التي تقدمها Benyah.",
        description:
          "كل فئة مبنية حول احتياج عملي محدد، ثم مرتبطة بالنظام الأوسع الذي يدعم النشاط.",
      },
      grouping: {
        eyebrow: "كيف ترتبط الخدمات",
        title: "العمل مصمم ليعمل كنظام واحد مترابط.",
        description:
          "بعض المشاريع تبدأ من الموقع. وبعضها يبدأ من سير العمل أو التشغيل. المزيج الصحيح يعتمد على موضع فقدان الوضوح اليوم.",
        items: [
          {
            title: "الأنظمة المواجهة للعميل",
            description:
              "للأعمال التي تحتاج حضوراً رقمياً أقوى وتدفق استفسار أو حجز أكثر وضوحاً.",
            services: ["websites", "booking-workflows"],
          },
          {
            title: "الأتمتة التشغيلية",
            description:
              "للفرق التي تتعامل مع أعمال إدارية متكررة أو عمليات تتكرر يومياً وما زالت تعتمد على التذكر والبريد والتنسيق اليدوي.",
            services: ["automation", "workflow-systems-automation"],
          },
          {
            title: "السيطرة التشغيلية",
            description:
              "للعمليات التي تحتاج رؤية أفضل عبر الأصول والطلبات والتقارير والأدوات الداخلية والتنفيذ اليومي.",
            services: ["facility-maintenance-management", "business-systems"],
          },
          {
            title: "البنية الرقمية",
            description:
              "للأعمال التي تحتاج أن يعمل الموقع والتدفق والأنظمة الداخلية كأساس واحد متماسك.",
            services: ["websites", "automation", "business-systems"],
          },
        ],
      },
      labels: {
        serviceBadge: "خدمة أساسية",
        serviceAction: "عرض الخدمة",
        serviceSupportLabel: "ما الذي تساعد فيه",
        groupServicesLabel: "الخدمات المرتبطة",
      },
      detail: {
        heroPanelLabel: "الأثر المتوقع",
        heroSecondaryAction: "كل الخدمات",
        overview: {
          eyebrow: "ما هي هذه الخدمة",
          title: "طبقة عملية من الهيكل حول احتياج تجاري محدد.",
          description:
            "كل خدمة تُصاغ لحل مشكلة تشغيلية حقيقية أو تقوية جزء ضعيف من العمل أو بناء نظام أكثر اعتمادية حول التشغيل اليومي.",
          capabilitiesLabel: "ما الذي تبنيه Benyah",
        },
        problems: {
          eyebrow: "المشكلات التي تعالجها",
          title: "مبنية لمعالجة احتكاك متكرر في العمل، لا أفكار نظرية.",
          description:
            "التركيز هنا على المشكلات التي تؤثر على الوضوح والسرعة وجودة الخدمة والسيطرة التشغيلية.",
        },
        deliverables: {
          eyebrow: "ما الذي تقدمه Benyah",
          title: "نطاق واضح، تنفيذ منظم، ونتيجة قابلة للاستخدام.",
          description:
            "تختلف كل خدمة في شكلها، لكن أسلوب التنفيذ يبقى عملياً: نطاق محدد، وبنية نظام واضحة، ونتيجة تعمل في الاستخدام اليومي.",
          capabilitiesLabel: "محور التنفيذ",
          outcomesLabel: "الأثر التشغيلي",
        },
        audience: {
          eyebrow: "لمن هذه الخدمة",
          title: "مصممة للأعمال التي تحتاج هيكلاً أقوى في جانب محدد.",
          description:
            "أفضل ملاءمة تكون عادةً للأعمال التي تجاوزت الأدوات المرتجلة أو التسليم غير الواضح بين المراحل أو البرامج التي لم تعد تلائم طريقة التشغيل.",
        },
        process: {
          eyebrow: "كيف نعمل",
          title: "مسار واضح من التشخيص إلى التنفيذ.",
          description:
            "تبقى المنهجية متسقة عبر الخدمات حتى يظل النطاق واتخاذ القرار والتنفيذ واضحاً من البداية.",
          steps: [
            {
              step: "01",
              title: "مراجعة الوضع الحالي",
              description:
                "نراجع سير العمل والأدوات ونقاط التعطل والضغط التشغيلي المرتبط بالحاجة إلى هذه الخدمة.",
            },
            {
              step: "02",
              title: "تحديد النطاق المناسب",
              description:
                "نصوغ الخدمة بحسب ما يحتاجه النشاط الآن، وما الذي يجب أن يبدأ أولاً، وما الذي لا ينبغي المبالغة في بنائه.",
            },
            {
              step: "03",
              title: "التصميم والتنفيذ",
              description:
                "ننفذ بهيكل نظيف وتسلسل مدروس وتركيز على الاستخدام العملي اليومي.",
            },
            {
              step: "04",
              title: "التحسين للاستخدام الفعلي",
              description:
                "نحسن الوضوح والاعتماد والموثوقية بعد دخول الخدمة في التشغيل.",
            },
          ],
        },
        faq: {
          eyebrow: "الأسئلة الشائعة",
          title: "أسئلة شائعة قبل بدء أي تعاون على هذه الخدمة.",
          description:
            "النهج الصحيح يعتمد على وضع النشاط الحالي، لكن هذه الإجابات تغطي أكثر نقاط البداية شيوعاً.",
        },
        finalCta: {
          eyebrow: "الخطوة التالية",
          title: "إذا كانت هذه الخدمة مناسبة للاحتياج، فالخطوة التالية هي محادثة مركزة.",
          description:
            "تساعد Benyah على تقييم ما إذا كانت هذه الخدمة مناسبة الآن، أو إن كان من الأفضل ربطها بطبقة أخرى من النظام.",
          supportingLine: "اتجاه واضح قبل التنفيذ.",
          secondaryAction: "عرض كل الخدمات",
        },
      },
      finalCta: {
        eyebrow: "الخطوة التالية",
        title:
          "إذا كان النشاط يحتاج إلى هيكل أوضح، فابدأ بمحادثة الخدمة المناسبة.",
        description:
          "تساعد Benyah على تحديد الخدمة أو المزيج الصحيح من الخدمات بحسب مرحلة النشاط وطريقة تشغيله.",
        supportingLine: "وضوح في النطاق قبل التنفيذ.",
        secondaryAction: "استعرض دراسات الحالة",
      },
      items: {
        automation: {
          title: "حلول الأتمتة",
          summary:
            "أتمتة تشغيلية عملية تقلل الأعمال المتكررة وتحسن التسليم بين المراحل وتجعل التنفيذ اليومي أكثر اتساقاً.",
          heroSupportingLine:
            "مناسبة للأعمال التي تستهلكها الأعمال المتكررة وسير العمل المتفكك والاعتماد الزائد على البريد والذاكرة.",
          intro:
            "تساعد حلول الأتمتة في Benyah الشركات الصغيرة على إزالة العمل اليدوي غير الضروري عبر الاستفسارات والتنفيذ والمتابعة والتقارير والتنسيق الداخلي. التركيز هنا عملي: أن تحدث الخطوات الصحيحة في الوقت الصحيح مع اعتماد أقل على التذكر أو المتابعة اليدوية أو الأعمال الإدارية المتكررة.",
          capabilities: [
            "تدفقات متكررة للاعتماد والمتابعة والتذكير والتحديث",
            "تسليم داخلي وإشعارات وحالات تشغيلية أوضح",
            "أتمتة عملية حول الأدوات المستخدمة يومياً بالفعل",
          ],
          outcomes: [
            "تنسيق يدوي أقل",
            "تنفيذ أكثر اتساقاً",
            "رؤية تشغيلية أوضح",
          ],
          problems: [
            {
              title: "إدارة يدوية متكررة",
              description:
                "تقضي الفرق وقتاً في نقل البيانات ومتابعة التحديثات وتكرار خطوات روتينية ينبغي أن تتم بشكل أكثر اعتمادية في الخلفية.",
            },
            {
              title: "تسليم غير متسق بين المراحل",
              description:
                "يتوقف العمل بين الاستفسار والتشغيل والتنفيذ والمتابعة لأن الخطوات الأساسية لا تنتقل بشكل نظيف بين الأطراف أو الأنظمة.",
            },
            {
              title: "غياب حالة تشغيلية واضحة",
              description:
                "يفتقر النشاط إلى تصور موثوق يوضح ما الذي يجب أن يحدث تالياً وما الذي تأخر ومن المسؤول عنه الآن.",
            },
          ],
          audience: [
            {
              title: "الأعمال الخدمية ذات المهام الداخلية المتكررة",
              description:
                "مناسبة عندما تعتمد الاستفسارات أو إجراءات التنفيذ أو المتابعة أو التقارير على التحقق اليدوي والتنسيق المستمر.",
            },
            {
              title: "الفرق النامية التي تعمل عبر عدة أدوات",
              description:
                "مفيدة عندما تكون الأدوات موجودة بالفعل لكن سير العمل بينها ضعيف أو مكرر أو سهل الانكسار.",
            },
            {
              title: "الملاك والمشغلون الذين يحتاجون سيطرة أوضح",
              description:
                "مثالية للأعمال التي تريد سيطرة أوضح على العملية وعدداً أقل من الخطوات الفائتة بدون تعقيد نظامي غير ضروري.",
            },
          ],
          faqs: [
            {
              question: "هل تقومون بأتمتة أدواتنا الحالية أم تستبدلونها؟",
              answer:
                "غالباً تبدأ الخطوة الأولى بتحسين سير العمل حول الأدوات الحالية. الاستبدال لا يصبح منطقياً إلا إذا كانت المنظومة الحالية تعيق العملية فعلاً.",
            },
            {
              question: "ما أنواع العمليات المناسبة لهذه الخدمة؟",
              answer:
                "تشمل الأمثلة الشائعة الاستفسارات والاعتمادات الداخلية والخطوات المرتبطة بالجدولة والمتابعة والتقارير وغير ذلك من العمليات المتكررة التي تحتاج إلى اتساق أعلى.",
            },
            {
              question: "كيف تختلف هذه الخدمة عن أتمتة سير العمل والأنظمة؟",
              answer:
                "حلول الأتمتة تناسب عادة تحسين الأعمال المتكررة داخل التشغيل اليومي القائم. أما عندما تكون نقطة الضغط بين عدة أنظمة أو تحتاج العملية إلى تكامل أعمق ومنطق تنسيق أعلى، فعادة تكون أتمتة سير العمل والأنظمة هي الأنسب.",
            },
            {
              question: "هل ستجعل الأتمتة التشغيل أكثر تعقيداً؟",
              answer:
                "لا. الهدف هو العكس: عملية أوضح واعتماد أقل على الخطوات اليدوية ووضوح أكبر حول ما الذي يجب أن يحدث ومتى.",
            },
          ],
          processTitle: "مرحلة أتمتة عملية تبدأ من نقطة الاحتكاك وتنتهي بتدفق أكثر ثباتاً.",
          processDescription:
            "يبدأ العمل عادة من الخطوات المتكررة التي تستهلك الوقت الآن، ثم يُحوَّل إلى تدفق أوضح وأكثر قابلية للتكرار.",
          processSteps: [
            {
              step: "01",
              title: "رسم سير العمل المتكرر",
              description:
                "نحدد أين تستهلك المتابعة والنسخ والتحقق والتذكير اليدوي وقت الفريق داخل العملية الحالية.",
            },
            {
              step: "02",
              title: "تحديد منطق الأتمتة",
              description:
                "نقرر ما الذي يجب أن يُحفَّز تلقائياً، وما الذي ينبغي أن يتحرك آلياً، وأين تبقى المراجعة البشرية مهمة.",
            },
            {
              step: "03",
              title: "التنفيذ حول الأدوات الفعلية",
              description:
                "نبني الأتمتة حول الأنظمة التي تدعم التشغيل حالياً حيثما أمكن، بدلاً من فرض استبدال غير ضروري.",
            },
            {
              step: "04",
              title: "تحسين الاعتمادية",
              description:
                "نضبط الإشعارات والاستثناءات ووضوح الحالة بعد دخول التدفق في الاستخدام اليومي.",
            },
          ],
        },
        websites: {
          title: "المواقع الإلكترونية",
          summary:
            "مواقع أعمال احترافية تشرح القيمة بوضوح وتبني الثقة وتحول الزائر المناسب إلى استفسار جاد.",
          heroSupportingLine:
            "مناسبة للأعمال التي تحتاج حضوراً رقمياً أقوى وتموضعاً أوضح وموقعاً يدعم التحويل بشكل صحيح.",
          intro:
            "يُبنى الموقع في Benyah كبنية تجارية أساسية. يجب أن يساعد النشاط على الظهور بمصداقية وشرح عرضه بدون غموض وتوجيه الزائر المناسب نحو التواصل أو الاستشارة. التركيز ليس على الزخرفة، بل على الوضوح والثقة والهيكل.",
          capabilities: [
            "هيكل صفحات مبني على التموضع",
            "بناء متجاوب وتسلسل محتوى واضح",
            "مسارات تحويل ونقاط تواصل مدروسة",
          ],
          outcomes: [
            "مصداقية أقوى من النظرة الأولى",
            "شرح أوضح للخدمات",
            "استفسارات أفضل جودة",
          ],
          problems: [
            {
              title: "حضور عام أو قديم",
              description:
                "لا يعكس الموقع الحالي جودة النشاط أو جديته، مما يضعف الثقة قبل أي تواصل.",
            },
            {
              title: "عرض غير واضح ورسائل ضعيفة",
              description:
                "لا يستطيع الزائر فهم ما الذي يقدمه النشاط ولمن يناسبه ولماذا يجب أن يتواصل معه بسرعة كافية.",
            },
            {
              title: "مسار استفسار ضعيف",
              description:
                "قد يكون الموقع موجوداً، لكنه لا يوجّه الزائر الجاد بوضوح نحو التواصل أو الاستشارة أو الخطوة العملية التالية.",
            },
          ],
          audience: [
            {
              title: "الأعمال الخدمية التي تعتمد على الثقة",
              description:
                "مناسبة خصوصاً عندما يعتمد قرار الشراء على المهنية والمصداقية ووضوح عرض النشاط.",
            },
            {
              title: "الأعمال التي تجاوزت موقعاً تعريفياً بسيطاً",
              description:
                "مفيدة عندما يكون النشاط قد تطور أو أعاد تموضعه أو تجاوزت قدراته القصة التي يرويها موقعه الحالي.",
            },
            {
              title: "الفرق التي تحتاج أن يخدم الموقع التشغيل",
              description:
                "مناسبة عندما يجب أن يعمل الموقع بانسجام أكبر مع النماذج أو الحجز أو الاستفسارات أو الأنظمة الداخلية.",
            },
          ],
          faqs: [
            {
              question: "هل تساعدون في الرسائل والتموضع أيضاً؟",
              answer:
                "نعم. التموضع وتدفق الصفحات ووضوح الرسائل جزء من العمل لأن الموقع يجب أن يشرح النشاط جيداً لا أن يبدو جيداً فقط.",
            },
            {
              question: "هل يمكن ربط الموقع بأنظمة الحجز أو الأتمتة؟",
              answer:
                "نعم. الموقع غالباً جزء من بنية تشغيلية أوسع، لذلك يمكن التخطيط للنماذج وتدفقات الحجز والمكالمات الذكية ومسارات الأتمتة ضمن البناء نفسه.",
            },
            {
              question: "هل هذه الخدمة مخصصة لإعادة التصميم فقط أم تشمل موقعاً جديداً؟",
              answer:
                "كلاهما. النهج المناسب يعتمد على ما إذا كان يمكن تحسين الموقع الحالي هيكلياً أو أن النشاط سيكون أفضل بإعادة بناء صحيحة من البداية.",
            },
          ],
        },
        "booking-workflows": {
          title: "تدفقات الحجز والمكالمات الذكية",
          summary:
            "تدفقات منظمة للحجز والمكالمات الذكية تدير الجدولة والتأكيدات والتذكيرات والإدخال المسبق والتسليم الداخلي وتقليل حالات عدم الحضور.",
          heroSupportingLine:
            "مناسبة للأعمال التي تؤثر فيها جودة الحجز والتعامل مع المكالمات مباشرة على التحويل وجاهزية الفريق والطاقة اليومية.",
          intro:
            "تحول Benyah الحجز والتعامل مع المكالمات الواردة إلى عملية خدمة أكثر اعتمادية. يتم تنظيم التوفر والتأكيدات والتذكيرات وخطوات الإدخال والتسليم الداخلي، مع دعم المكالمات بالذكاء الاصطناعي عند ملاءمة ذلك، حتى يحصل العميل على مسار أوضح ويحصل الفريق على معلومات أدق.",
          capabilities: [
            "منطق الجدولة وقواعد الحجز والتأكيدات والتذكيرات",
            "خطوات الإدخال وجمع المعلومات المسبقة ومسارات تقليل عدم الحضور",
            "التسليم الداخلي ودعم المكالمات بالذكاء الاصطناعي عندما يخدم جودة الاستجابة",
          ],
          outcomes: [
            "جدولة أكثر سلاسة وخطوات فائتة أقل",
            "انخفاض مخاطر عدم الحضور وجاهزية أفضل للعميل",
            "تسليم داخلي أوضح بعد كل حجز أو مكالمة",
          ],
          problems: [
            {
              title: "تبادل طويل في الجدولة ومكالمات فائتة",
              description:
                "يقضي العميل والفريق وقتاً أطول من اللازم في تنسيق المواعيد أو إعادة المكالمات أو تصحيح التفاصيل أو معالجة ارتباك كان يمكن تجنبه.",
            },
            {
              title: "غياب التذكيرات أو إدخال غير مكتمل",
              description:
                "لا توجد بنية موثوقة للتأكيدات والتذكيرات أو النماذج أو جمع المعلومات الصحيحة قبل بدء الخدمة.",
            },
            {
              title: "ضعف التسليم بعد الحجز أو المكالمة",
              description:
                "يتم الحجز أو المكالمة، لكن الفريق الداخلي لا يستلم المعلومات أو الإشعار أو خطوة التجهيز التالية في الوقت المناسب.",
            },
          ],
          audience: [
            {
              title: "الأعمال المعتمدة على المواعيد ذات الضغط الحقيقي في الجدولة",
              description:
                "مناسبة عندما تؤثر جودة الحجز والتعامل مع الاستفسارات الهاتفية مباشرة على الإيراد وتجربة العميل.",
            },
            {
              title: "الفرق التي تحتاج إدخالاً وتجهيزاً بعد كل حجز",
              description:
                "مفيدة عندما يطلق الحجز مراجعة إدخال أو تذكيرات أو توزيعاً للموظفين أو تجهيزاً أو تنسيقاً داخلياً إضافياً.",
            },
            {
              title: "الأعمال التي تريد أن تصب المكالمات والحجوزات في التشغيل بشكل منظم",
              description:
                "الأفضل عندما تحتاج المواعيد والمكالمات والمتابعة أن تصب في جاهزية الخدمة وتخطيط الطاقة الاستيعابية وسير العمل اليومي بشكل أنظف.",
            },
          ],
          faqs: [
            {
              question: "هل يمكنكم العمل مع منصة الحجز أو إعداد المكالمات الحالي لدينا؟",
              answer:
                "غالباً نعم. الخطوة الأولى هي فهم تدفق الحجز والمكالمات الحالي ثم تقرير ما إذا كان الأفضل تحسينه أو ربطه أو استبداله جزئياً.",
            },
            {
              question: "هل تشمل الخدمة التذكيرات والإدخال المسبق ودعم المكالمات بالذكاء الاصطناعي؟",
              answer:
                "نعم، عندما يكون ذلك مناسباً تشغيلياً. يمكن تنظيم التذكيرات والتأكيدات وخطوات الإدخال والإشعارات الداخلية ودعم المكالمات بالذكاء الاصطناعي ضمن تدفق واحد أكثر اتساقاً.",
            },
            {
              question: "هل هذه الخدمة مفيدة فقط للأعمال ذات الحجم الكبير؟",
              answer:
                "لا. حتى حجم الحجز المتوسط قد يسبب احتكاكاً حقيقياً عندما تكون العملية غير متسقة أو يدوية أو غير مرتبطة جيداً بالتنفيذ والاستعداد الداخلي.",
            },
          ],
        },
        "facility-maintenance-management": {
          title: "حلول إدارة المرافق والصيانة",
          summary:
            "أنظمة منظمة لإدارة المرافق والصيانة تغطي أوامر العمل وسجلات الخدمة ورؤية الأصول وتنسيق المتعهدين.",
          heroSupportingLine:
            "مناسبة للأعمال الصغيرة والمتوسطة التي تدير مرافق أو صيانة وتحتاج رؤية أوضح وتنسيقاً أقوى وسيطرة تشغيلية أفضل.",
          intro:
            "تمنح حلول إدارة المرافق والصيانة الأعمال الصغيرة والمتوسطة نظاماً أوضح لإدارة الأصول وأوامر العمل وسجلات الخدمة وتنسيق المتعهدين والتقارير. ويمكن لـ Benyah تنفيذ وهيكلة أنظمة إدارة الصيانة المحوسبة (CMMS) وحلول الإدارة المساندة للمرافق (CAFM) وأدوات إدارة الأصول وتدفقات إدارة المتعهدين بما يلائم طريقة التشغيل الفعلية.",
          capabilities: [
            "هيكلة أنظمة المرافق والصيانة للأصول والمواقع وسجلات الخدمة",
            "تدفقات أوامر العمل والطلبات وتنسيق المتعهدين",
            "رؤية أوضح للأصول ولوحات متابعة وتقارير تشغيلية",
          ],
          outcomes: [
            "سيطرة أوضح على نشاط الصيانة والخدمة",
            "سجلات خدمة أكثر موثوقية ورؤية أفضل للأصول",
            "تنسيق أفضل بين الفرق الداخلية والمتعهدين",
          ],
          problems: [
            {
              title: "طلبات موزعة على قنوات متفرقة",
              description:
                "تتحرك طلبات الصيانة بين البريد والاتصالات والجداول أو أدوات منفصلة بدون رؤية واحدة موثوقة.",
            },
            {
              title: "سجل خدمة غير مكتمل ورؤية ضعيفة للأصول",
              description:
                "لا تستطيع الفرق رؤية ما تم تنفيذه أو ما يتكرر أو تاريخ أصل أو موقع أو متعهد معين بشكل واضح عبر الوقت.",
            },
            {
              title: "إشراف محدود على المتعهدين والأعمال المتكررة",
              description:
                "يفتقد المدراء رؤية واضحة للأحمال وحالة الإنجاز وأداء المتعهدين والأعمال المتكررة أو أزمنة الاستجابة والمشكلات المتكررة.",
            },
          ],
          audience: [
            {
              title: "فرق المرافق والصيانة في الأعمال الصغيرة والمتوسطة",
              description:
                "مناسبة للفرق التي تحتاج سيطرة أفضل على الطلبات والأصول وحالة العمل وتنسيق المتعهدين وجودة التنفيذ.",
            },
            {
              title: "تشغيل المواقع والعقارات والخدمات الميدانية",
              description:
                "مفيدة عندما توجد مواقع متعددة أو أصول أو مزودو خدمة أو أطراف داخلية تحتاج إلى بنية أوضح حول أوامر العمل والسجلات والتنسيق اليومي.",
            },
            {
              title: "الأعمال التي تتجاوز الجداول والتتبع غير الرسمي",
              description:
                "مثالية عندما ما زالت أعمال الصيانة تُدار عبر الجداول أو البريد أو المعالجة غير المنظمة للطلبات.",
            },
          ],
          faqs: [
            {
              question: "هل يجب أن تكون المنصة كبيرة حتى تكون مفيدة؟",
              answer:
                "لا. الشكل المناسب يعتمد على حجم وتعقيد التشغيل. كثير من الأعمال الصغيرة والمتوسطة تستفيد أكثر من نظام مركز وواضح بدلاً من منصة أكبر من حاجتها.",
            },
            {
              question: "هل يمكن أن تشمل الخدمة CMMS و CAFM وإدارة الأصول وتدفقات المتعهدين؟",
              answer:
                "نعم. يمكن أن تغطي الخدمة هيكلة أنظمة إدارة الصيانة المحوسبة (CMMS) وحلول الإدارة المساندة للمرافق (CAFM) وأدوات إدارة الأصول وتنسيق المتعهدين بحسب ما يحتاجه التشغيل فعلياً.",
            },
            {
              question: "هل يمكن أن نبدأ بالطلبات أو أوامر العمل ثم نتوسع؟",
              answer:
                "نعم. غالباً يكون الأفضل البدء في الجزء الأعلى احتكاكاً من التشغيل ثم التوسع بعد اتضاح العملية وهيكل السجل.",
            },
          ],
          processTitle: "إعداد إداري منظم يبدأ من السجلات والطلبات وينتهي بسيطرة أوضح.",
          processDescription:
            "يُنَفَّذ العمل عادة على مراحل حتى يدخل الجزء الأعلى احتكاكاً في تشغيل المرافق أو الصيانة تحت سيطرة أوضح أولاً.",
          processSteps: [
            {
              step: "01",
              title: "فهم نموذج التشغيل",
              description:
                "نراجع كيف تُدار الطلبات والأصول وأوامر العمل وسجلات الخدمة وتنسيق المتعهدين حالياً.",
            },
            {
              step: "02",
              title: "تحديد هيكل السجل وسير العمل",
              description:
                "نصوغ النظام حول الطلبات ورؤية الأصول وحالات العمل وتنسيق المتعهدين التي يحتاجها الفريق فعلياً.",
            },
            {
              step: "03",
              title: "تنفيذ طبقة السيطرة",
              description:
                "نضبط النظام ولوحات المتابعة والتقارير وتدفق التشغيل بحيث يصبح العمل أسهل في المتابعة والإشراف.",
            },
            {
              step: "04",
              title: "تحسين الاعتماد والإشراف",
              description:
                "نحسن وضوح الاستخدام اليومي ورؤية الحالة والتقارير التشغيلية التي يحتاجها المسؤولون فعلاً.",
            },
          ],
        },
        "workflow-systems-automation": {
          title: "أتمتة سير العمل والأنظمة",
          summary:
            "أتمتة أعمق للأنظمة والتدفقات التي تحتاج أن تعمل معاً بشكل موثوق عبر أكثر من أداة أو منصة.",
          heroSupportingLine:
            "مناسبة للأعمال التي تحتاج تحكماً أعمق في سير العمل وتكاملاً أكثر موثوقية وأنظمة مترابطة تعمل معاً بشكل أفضل.",
          intro:
            "أتمتة سير العمل والأنظمة مخصصة للأعمال التي تحتاج أكثر من مجرد أتمتة مهام بسيطة. يمكن لـ Benyah تصميم وتنفيذ أتمتة عبر n8n وتدفقات الـ webhooks والواجهات البرمجية وأنظمة الأعمال المترابطة وأتمتة العمليات الداخلية حتى تتحرك البيانات والقرارات والإجراءات بالترتيب الصحيح.",
          capabilities: [
            "تدفقات تربط النماذج والـ CRM والأدوات الداخلية والأنظمة التشغيلية",
            "تكاملات عبر n8n والـ webhooks والواجهات البرمجية عند الحاجة",
            "تنسيق أعمق للحالات والتفرعات وحركة البيانات بين الأنظمة",
          ],
          outcomes: [
            "أنظمة أكثر ترابطاً وتسليم أنظف بين المراحل",
            "تنفيذ أسرع للعمليات الداخلية",
            "حركة يدوية أقل للبيانات والحالات",
          ],
          problems: [
            {
              title: "أدوات الأتمتة لا تكفي للتدفق الفعلي",
              description:
                "تبدأ الأدوات الأبسط في التعثر عندما يحتاج التدفق إلى منطق مرن أو تكامل أعمق أو سيطرة أوضح على التنفيذ.",
            },
            {
              title: "البيانات لا تنتقل بثبات بين الأنظمة",
              description:
                "يتم نقل المعلومات يدوياً أو بشكل غير متسق بين الأنظمة، مما يسبب تكراراً وبيانات قديمة وأخطاء يمكن تجنبها.",
            },
            {
              title: "أنظمة متفرقة ومنطق هش مع ازدياد التعقيد",
              description:
                "يحتاج النشاط إلى أن تعمل أنظمته معاً، لكن الإعداد الحالي لا يدعم عمق الربط أو الـ webhooks أو أتمتة العمليات الداخلية أو المنطق المطلوب بشكل موثوق.",
            },
          ],
          audience: [
            {
              title: "الأعمال التي تعتمد على عدة أنظمة وأدوات داخلية",
              description:
                "مناسبة عندما تحتاج النماذج أو الـ CRM أو الأدوات الداخلية أو بقية الأنظمة إلى تكامل أعمق وحركة بيانات أكثر موثوقية.",
            },
            {
              title: "الفرق التي تعتمد على الـ webhooks أو الواجهات البرمجية أو منطق بين الأنظمة",
              description:
                "مفيدة عندما يحتاج التدفق إلى صياغة أدق مما تسمح به الأدوات المبنية على قواعد بسيطة.",
            },
            {
              title: "المشغلون الذين يريدون أتمتة أعمق بدون حمل أنظمة كبيرة",
              description:
                "الأفضل عندما يريد النشاط أتمتة يمكن تطويرها تدريجياً مع ازدياد تنظيم العملية.",
            },
          ],
          faqs: [
            {
              question: "هل هذه الخدمة محصورة في n8n؟",
              answer:
                "لا. قد يكون n8n جزءاً من التنفيذ، لكن الخدمة مبنية حول نتيجة سير العمل. يمكن لـ Benyah تنظيم تدفقات عبر الـ webhooks والواجهات البرمجية والأنظمة المترابطة وأتمتة العمليات الداخلية بالطريقة الأنسب للاحتياج.",
            },
            {
              question: "هل يمكن أن تعمل هذه الخدمة مع الأنظمة الحالية لدينا؟",
              answer:
                "غالباً نعم، ما دامت هذه الأنظمة توفر نقاط وصول مناسبة مثل الواجهات البرمجية أو الـ webhooks أو الموصلات المدعومة.",
            },
            {
              question: "كيف تختلف هذه الخدمة عن حلول الأتمتة؟",
              answer:
                "حلول الأتمتة تحسن عادة الأعمال المتكررة داخل التدفق اليومي القائم. أما أتمتة سير العمل والأنظمة فتناسب الحالات التي تكون فيها المشكلة بين عدة أنظمة وتحتاج العملية إلى تكامل أعمق ومنطق تنسيق أو حركة بيانات أكثر موثوقية.",
            },
            {
              question: "متى تكون هذه الخدمة أنسب من أتمتة أبسط؟",
              answer:
                "عندما يحتاج التدفق إلى منطق أعمق أو تنسيق أنظف أو تكاملات أقوى أو حركة أكثر موثوقية بين الأنظمة. الهدف ليس زيادة التعقيد، بل تحقيق سيطرة أفضل عندما تحتاج العملية إلى ذلك فعلاً.",
            },
          ],
          processTitle: "مرحلة تكامل أعمق للأنظمة التي يجب أن تتحرك معاً بثبات.",
          processDescription:
            "يتشكل هذا العمل حول الأنظمة المعنية والمنطق بينها ومستوى الاعتمادية الذي يحتاجه التشغيل فعلياً.",
          processSteps: [
            {
              step: "01",
              title: "رسم الأنظمة وتدفق البيانات",
              description:
                "نراجع الأدوات المستخدمة وكيف ينبغي أن تتحرك البيانات وأين يفشل التكامل أو التنسيق الحالي.",
            },
            {
              step: "02",
              title: "تصميم بنية الأتمتة",
              description:
                "نحدد منطق الـ webhooks والواجهات البرمجية والتحويلات والتفرعات والاستثناءات التي يحتاجها التدفق الحقيقي.",
            },
            {
              step: "03",
              title: "تنفيذ الربط بعناية",
              description:
                "نبني التدفق بحيث تتم تسليمات الأنظمة والإجراءات المحفزة وتحديثات البيانات بالترتيب الصحيح ومع الضوابط المناسبة.",
            },
            {
              step: "04",
              title: "تقوية الاعتمادية في التشغيل اليومي",
              description:
                "نحسن الموثوقية ومعالجة الأخطاء والرؤية التشغيلية حتى تبقى الأتمتة ثابتة مع ازدياد الاستخدام.",
            },
          ],
        },
        "business-systems": {
          title: "أنظمة الأعمال والأدوات الداخلية",
          summary:
            "أنظمة داخلية ولوحات تشغيل وأدوات عمل مبنية حول الطريقة الفعلية التي يدير بها النشاط عملياته.",
          heroSupportingLine:
            "مناسبة للأعمال التي لم تعد عملياتها الداخلية الأساسية تلائم الجداول أو البرمجيات العامة أو الأدوات المجمعة.",
          intro:
            "تخدم هذه الفئة الأعمال التي لم تعد تحتاج مجرد أتمتة بين الخطوات، بل طبقة تشغيل داخلية أقوى بحد ذاتها. تساعد Benyah على تعريف وبناء أنظمة داخلية منظمة ولوحات تشغيل وسجلات واضحة وصلاحيات مناسبة حول البيانات والخطوات والمستخدمين والإشراف الذي يحتاجه النشاط فعلياً.",
          capabilities: [
            "لوحات تشغيل وأدوات إدارية ومساحات عمل داخلية",
            "سجلات منظمة ورؤية حسب الدور وعناصر تحكم تشغيلية",
            "نماذج بيانات وتقارير مبنية حول العمل الداخلي اليومي",
          ],
          outcomes: [
            "رؤية داخلية أقوى وسيطرة أوضح",
            "اعتماد أقل على الجداول والحلول الالتفافية",
            "نظام داخلي أنسب لطريقة تشغيل النشاط",
          ],
          problems: [
            {
              title: "عمليات حرجة تعيش داخل الجداول والحلول الالتفافية",
              description:
                "تعتمد العمليات الداخلية الأساسية على الجداول والخطوات اليدوية وعادات الالتفاف التي لا تتوسع بشكل نظيف.",
            },
            {
              title: "بيانات داخلية مكررة أو غير متسقة",
              description:
                "توجد المعلومات نفسها في أكثر من مكان، مما يضعف التقارير والمتابعة واتخاذ القرار التشغيلي.",
            },
            {
              title: "رؤية محدودة للحالة والحمولة التشغيلية",
              description:
                "يفتقد المدراء والملاك إلى رؤية تشغيلية واضحة لأن النظام الداخلي الحالي متشظٍ وغير ملائم لطبيعة العمل.",
            },
          ],
          audience: [
            {
              title: "الأعمال ذات التدفقات الداخلية المتخصصة",
              description:
                "مناسبة عندما يكون نموذج التشغيل محدداً لدرجة تجعل البرمجيات العامة تفرض تنازلات مستمرة.",
            },
            {
              title: "الفرق التي تعتمد على أدوات مجمعة",
              description:
                "مفيدة عندما ما زالت العمليات الأساسية تعتمد على الجداول أو البريد المشترك أو عدة تطبيقات منفصلة لإبقاء التشغيل قائماً.",
            },
            {
              title: "القيادات التي تحتاج رؤية داخلية وسيطرة أقوى",
              description:
                "الأفضل للأعمال التي تريد إشرافاً أوضح وسيطرة أقوى وأنظمة مبنية حول العمل الداخلي الفعلي.",
            },
          ],
          faqs: [
            {
              question: "متى يكون بناء أداة داخلية مخصصاً قراراً مبرراً؟",
              answer:
                "غالباً عندما تكون هناك عملية متكررة أو حاجة تقريرية أو تدفق داخلي لا تخدمه البرمجيات العامة جيداً ويسبب احتكاكاً تشغيلياً مستمراً.",
            },
            {
              question: "هل يجب أن يتحول هذا إلى مشروع برمجي كبير؟",
              answer:
                "لا. الهدف غالباً هو نظام داخلي مركز حول حاجة تشغيلية واضحة، لا تعقيد برمجي غير ضروري.",
            },
            {
              question: "كيف تختلف هذه الخدمة عن الأتمتة؟",
              answer:
                "الأتمتة تحسن انتقال الخطوات بين المراحل. أما أنظمة الأعمال والأدوات الداخلية فتناسب الحالات التي يحتاج فيها النشاط إلى نظام داخلي أو لوحة تشغيل أو هيكل سجلات يكون هو مركز العملية نفسها.",
            },
            {
              question: "هل يمكن أن يعمل هذا بجانب البرامج التي نستخدمها الآن؟",
              answer:
                "نعم. في كثير من الحالات يكون الأفضل إضافة الطبقة الداخلية المناسبة فوق المنظومة الحالية بدلاً من استبدال كل شيء دفعة واحدة.",
            },
          ],
          processTitle: "مرحلة بناء داخلي تبدأ من نموذج التشغيل الفعلي للنشاط.",
          processDescription:
            "الهدف هو تعريف أصغر نظام قوي يمنح النشاط رؤية أفضل وسجلات أنظف وسيطرة داخلية أوضح.",
          processSteps: [
            {
              step: "01",
              title: "فهم التدفق الداخلي",
              description:
                "نراجع المستخدمين والسجلات والاعتمادات والحاجة إلى التقارير والحلول الالتفافية التي يعتمد عليها النشاط حالياً.",
            },
            {
              step: "02",
              title: "تحديد هيكل التشغيل",
              description:
                "نصوغ النظام الداخلي حول نموذج البيانات والرؤى والصلاحيات والإجراءات التي يحتاجها الفريق فعلياً.",
            },
            {
              step: "03",
              title: "بناء الأداة الداخلية بوضوح",
              description:
                "ننّفذ لوحة التشغيل أو البوابة أو مساحة العمل الداخلية مع تركيز على الوضوح وقابلية الاستخدام والسيطرة العملية.",
            },
            {
              step: "04",
              title: "تحسين التقارير والإشراف",
              description:
                "نحسن الرؤية وملاءمة التدفق والإدارة اليومية بعد دخول الأداة في الاستخدام.",
            },
          ],
        },
      },
    },
    about: {
      eyebrow: "من نحن",
      title: "Benyah مبنية على فكرة الهيكل كأساس.",
      description:
        "Benyah شركة حلول احترافية للشركات الصغيرة تساعد الأعمال على تحسين حضورها الرقمي وسير العمل وعملياتها من خلال أنظمة مترابطة.",
      supportingLine:
        "هيكل أوضح وأنظمة أنظف وتنفيذ عملي للأعمال التي تحتاج أن تعمل المنظومة خلف العلامة كما ينبغي.",
      highlightsLabel: "ما الذي تمثله Benyah",
      highlights: [
        "الهيكل قبل البرنامج",
        "أنظمة مترابطة بدلاً من حلول منفصلة",
        "تنفيذ احترافي بوضوح تجاري",
      ],
      overview: {
        eyebrow: "ما هي Benyah",
        title: "شريك يركز على الأنظمة لتحسين الهيكل الرقمي وعمليات الأعمال.",
        description:
          "تساعد Benyah الشركات الصغيرة على إعادة النظام إلى الأجزاء التي تنفصل عن بعضها مع الوقت.",
        body:
          "يمتد العمل عبر المواقع الإلكترونية والأتمتة وتدفقات الحجز والمكالمات الذكية وحلول إدارة المرافق والصيانة وأتمتة سير العمل والأنظمة وأنظمة الأعمال والأدوات الداخلية. الهدف ليس إضافة التقنية لذاتها، بل بناء أساس أقوى لكيفية تقديم النشاط لنفسه وكيف يدير عمله داخلياً وكيف ينفذ يومياً.",
        asideEyebrow: "المعنى",
        asideTitle: "يرتبط اسم Benyah بالهيكل والأساس والأنظمة المترابطة.",
        asideDescription:
          "هذا المعنى يوجّه طريقة العمل: بناء ما يمنح النشاط قاعدة أوضح وتدفقاً أنظف وتشغيلاً يومياً أكثر اعتمادية.",
        asidePoints: [
          "النظر إلى الواجهة الأمامية والتدفق الداخلي معاً",
          "أنظمة مصاغة حول الاحتياج التشغيلي الفعلي",
          "تنفيذ مصمم للاستخدام العملي اليومي",
        ],
      },
      beliefs: {
        eyebrow: "ما الذي نؤمن به",
        title: "الوضوح والهيكل يصنعان أنظمة أعمال أفضل.",
        description:
          "تسترشد Benyah بعدد محدود من المبادئ التي تبقي العمل عملياً ومفيداً تشغيلياً.",
        items: [
          {
            title: "الوضوح قبل التكدس",
            description:
              "كل صفحة وكل سير عمل وكل نظام يجب أن يجعل النشاط أسهل فهماً وأسهل إدارة.",
          },
          {
            title: "الأنظمة قبل الترقيع",
            description:
              "أفضل نتيجة تأتي من ربط الأجزاء الصحيحة من النشاط بدلاً من تكديس حلول مؤقتة فوق هيكل ضعيف.",
          },
          {
            title: "التنفيذ العملي قبل الضجيج",
            description:
              "تقدّر Benyah التنفيذ الموثوق والنطاق الواضح والحلول التي تعمل فعلاً أكثر من اللغة الرائجة أو التعقيد المبالغ فيه.",
          },
          {
            title: "هيكل يدعم النمو",
            description:
              "يجب ألا تحل الأنظمة الجيدة احتكاك اليوم فقط، بل أن تمنح النشاط أساساً أقوى للمرحلة التالية أيضاً.",
          },
        ],
      },
      process: {
        eyebrow: "كيف نعمل",
        title: "منهجية منظمة من الاكتشاف إلى التحسين.",
        description:
          "تبدأ كل عملية بفهم الطريقة الحالية لعمل النشاط، ثم تحديد المستوى الصحيح من الحل حولها.",
        steps: [
          {
            step: "01",
            title: "نبدأ بالاكتشاف",
            description:
              "نراجع الوضع الحالي ونقاط الضغط والجزء من النشاط الذي يحتاج إلى هيكل أقوى.",
          },
          {
            step: "02",
            title: "نصمم النظام المناسب",
            description:
              "نحدد شكل الموقع أو سير العمل أو الأتمتة أو النظام الصحيح بناءً على ملاءمة العمل الفعلية لا على الافتراضات.",
          },
          {
            step: "03",
            title: "ننّفذ بانضباط",
            description:
              "ننّفذ بنطاق واضح وتسلسل مدروس وانحياز إلى حلول قابلة للصيانة ومنطقية تجارياً.",
          },
          {
            step: "04",
            title: "نحسّن للاستخدام الفعلي",
            description:
              "نحسن الاعتماد والوضوح والموثوقية اليومية بعد دخول النظام أو الخدمة في الاستخدام.",
          },
        ],
      },
      differentiators: {
        eyebrow: "ما الذي يميز Benyah",
        title: "تنفيذ احترافي مبني على ملاءمة العمل الفعلية.",
        description:
          "Benyah لا تقوم على الحجم أو اللغة الرائجة أو التسليم الواحد للجميع. القيمة تأتي من التفكير المنظم والتنفيذ العملي.",
        items: [
          {
            title: "تفكير نظامي",
            description:
              "تعمل Benyah عبر الحضور الرقمي وسير العمل والتشغيل حتى يعمل النشاط كبنية واحدة مترابطة.",
          },
          {
            title: "انضباط تجاري",
            description:
              "الهدف ليس إضافة مزيد من البرامج أو الطبقات أكثر مما يحتاجه النشاط فعلياً، بل حل المشكلة الصحيحة بالشكل الصحيح.",
          },
          {
            title: "مبني للاستخدام اليومي",
            description:
              "يُصاغ العمل حول الاعتماد والوضوح والملاءمة التشغيلية حتى يدعم النشاط في الممارسة لا في العرض فقط.",
          },
        ],
      },
      audience: {
        eyebrow: "من نعمل معهم بشكل أفضل",
        title: "الأكثر ملاءمة للأعمال التي تحتاج هيكلاً أقوى، لا مزيداً من الضوضاء.",
        description:
          "أفضل ملاءمة تكون عادةً لنشاط تجاوز الأدوات المرتجلة أو التدفقات المنفصلة أو الواجهة الرقمية الضعيفة.",
        items: [
          {
            title: "الشركات الخدمية الصغيرة ذات التعقيد التشغيلي",
            description:
              "خصوصاً عندما تحتاج الاستفسارات والحجز والتنفيذ والمتابعة إلى أن تعمل معاً بشكل أنظف.",
          },
          {
            title: "الفرق المعتمدة على المرافق أو التشغيل",
            description:
              "حين تكون الرؤية وأوامر العمل والسيطرة الداخلية أو تنسيق الأنظمة جزءاً من التنفيذ اليومي.",
          },
          {
            title: "الأعمال النامية التي تستبدل الأنظمة المجمعة",
            description:
              "عندما تبدأ الجداول والأدوات المنفصلة والحلول اليدوية في إبطاء النشاط أو إضعاف وضوحه.",
          },
        ],
      },
      finalCta: {
        eyebrow: "ابدأ الحوار",
        title: "إذا كان النشاط يحتاج إلى هيكل أوضح، فهذه هي البداية الصحيحة.",
        description:
          "تساعد Benyah على تحديد طبقة الموقع أو سير العمل أو الأتمتة أو النظام المناسبة لما يحتاجه النشاط فعلياً الآن.",
        supportingLine: "نطاق واضح. تفكير منظم. تنفيذ عملي.",
        secondaryAction: "استكشف الخدمات",
      },
    },
    caseStudies: {
      eyebrow: "دراسات الحالة",
      title: "أعمال مختارة وأمثلة حلول منظمة.",
      description:
        "توضح هذه الصفحة أنواع المشاريع التي صُممت Benyah لتنفيذها عبر الحضور الرقمي وسير العمل وعمليات الأعمال.",
      supportingLine:
        "تُشارك قصص المشاريع التفصيلية بشكل انتقائي بحسب مرحلة المشروع وسريته وملاءمته للنشر.",
      highlightsLabel: "ما الذي تعرضه هذه الصفحة",
      highlights: [
        "أنماط حلول حقيقية بدون قصص عملاء مختلقة",
        "أمثلة منظمة على نوع الأعمال التي تنفذها Benyah",
        "صورة أوضح لكيفية تحديد نطاق المشاريع عادة",
      ],
      intro: {
        eyebrow: "كيف تتعامل Benyah مع المشاريع",
        title: "حلول منظمة تُعرض بانضباط وبدون مبالغة.",
        description:
          "تركز Benyah على العمل العملي الذي يحسن الوضوح وسير العمل والسيطرة التشغيلية. الغرض من هذه الصفحة هو توضيح طبيعة العمل من دون تضخيمه أو تحويله إلى استعراض.",
        asideEyebrow: "معيار النشر",
        asideTitle: "تُشارك دراسات الحالة التفصيلية بعناية، لا بطريقة استعراضية.",
        asideDescription:
          "بعض المشاريع ما زالت في مرحلة تشغيلية، وبعضها سري، وبعضها يناقَش بشكل أفضل في محادثة مباشرة. صُممت هذه الصفحة لتوضح نوع الأعمال التي تنفذها Benyah دون اختراع تفاصيل لا يليق نشرها.",
        asidePoints: [
          "تُعرض أمثلة المشاريع بصيغة نوع الحل لا عبر قصة عميل مختلقة",
          "يمكن مشاركة القصص التفصيلية عندما تكون المرحلة والملاءمة مناسبة",
          "يبقى التركيز على الهيكل والنطاق والقيمة التشغيلية",
        ],
      },
      startingPoints: {
        eyebrow: "من أين تبدأ المشاريع عادة",
        title: "غالباً ما يبدأ العمل من نقطة ضغط تشغيلية واضحة، لا من صفحة بيضاء.",
        description:
          "قبل تحديد نطاق المشروع، توجد عادة حالة تشغيلية مفهومة تقف خلف الطلب. هذه بعض بدايات المشاريع التي تُستدعى Benyah لمعالجتها.",
        items: [
          {
            title: "نشاط قوي بواجهة رقمية أضعف من مستواه",
            description:
              "جودة الخدمة جيدة، لكن الموقع أو مسار الاستفسار أو تجربة الحجز لا تعكس مستوى النشاط أو تبني الثقة المطلوبة.",
          },
          {
            title: "تشغيل قائم على التنسيق اليدوي",
            description:
              "الخطوات المهمة تتم بالفعل، لكنها تعتمد أكثر من اللازم على البريد والجداول والتذكر والمتابعة اليدوية من الفريق.",
          },
          {
            title: "أدوات موجودة لكن بدون نظام واضح بينها",
            description:
              "يستخدم النشاط نماذج أو CRM أو منصة حجز أو أدوات داخلية، لكن التسليم بينها غير موثوق أو مكرر أو صعب المتابعة.",
          },
        ],
      },
      catalog: {
        eyebrow: "أنماط الأعمال المختارة",
        title: "أنواع مشاريع تعكس طبيعة العمل الذي تنفذه Benyah.",
        description:
          "صيغت هذه الأمثلة حسب نوع الحل حتى تبقى الصفحة مفيدة قبل توفر محفظة منشورة أكبر.",
      },
      labels: {
        outcomeLabel: "يدعم نتائج مثل",
        addressedLabel: "ما الذي تمّت معالجته",
        scopeLabel: "نوع النطاق المعتاد",
      },
      items: [
        {
          title: "إعداد لتدفقات الحجز والمكالمات الذكية",
          sector: "الحجز والمكالمات",
          summary:
            "إعداد منظم للحجز والتعامل مع المكالمات للأعمال الخدمية التي تحتاج أن تعمل المواعيد والتذكيرات والاستعداد الداخلي كمنظومة واحدة.",
          addressed:
            "قواعد الجدولة والتأكيدات والتذكيرات وخطوات الإدخال ودعم المكالمات الذكية عند الحاجة والتسليم من الحجز إلى التنفيذ.",
          outcome:
            "تجربة عميل أوضح وخطوات فائتة أقل واستعداد أفضل قبل تنفيذ الخدمة.",
          scope:
            "تنفيذ مركز أو تحسين لتدفق الحجز.",
        },
        {
          title: "نظام أتمتة وتسليم بين المراحل",
          sector: "أتمتة سير العمل",
          summary:
            "إعداد تشغيلي يربط الاستفسارات والخطوات الداخلية والتحديثات والمتابعة حتى لا يتعطل العمل بين الفرق أو الأنظمة.",
          addressed:
            "الإدارة اليدوية والتسليم غير المتسق ومنطق الإشعارات والتنسيق المتكرر بين الأنظمة أو أعضاء الفريق.",
          outcome:
            "تنسيق يدوي أقل وتدفق أكثر اعتمادية ورؤية أوضح للحالة التشغيلية.",
          scope:
            "تحسين سير العمل أو بناء أتمتة متعددة المراحل.",
        },
        {
          title: "موقع احترافي لتوليد الفرص",
          sector: "المواقع الإلكترونية",
          summary:
            "موقع احترافي منظم لتحسين الانطباع الأول وشرح الخدمات بوضوح وتوجيه الزائر المناسب نحو التواصل أو الاستشارة.",
          addressed:
            "ضعف التموضع والحضور العام وغير الواضح ومسار الصفحات الضعيف وهيكل التحويل غير الفعّال.",
          outcome:
            "مصداقية أقوى وشرح أوضح للخدمات واستفسارات أفضل جودة.",
          scope:
            "تنفيذ مركز أو إعادة بناء موقع مع هيكل تحويل واضح.",
        },
        {
          title: "إعداد لإدارة المرافق والصيانة",
          sector: "إدارة المرافق والصيانة",
          summary:
            "إعداد منظم للمرافق والصيانة لمعالجة الأصول وأوامر العمل وسجلات الخدمة وتنسيق المتعهدين والإشراف اليومي بشكل أوضح.",
          addressed:
            "تدفق الطلبات وهيكلة الأصول وحالات أوامر العمل وسجلات الخدمة ورؤية التقارير والتنسيق اليومي لأعمال الصيانة.",
          outcome:
            "سيطرة تشغيلية أفضل وسجلات أنظف ورؤية أوضح عبر أعمال المرافق.",
          scope:
            "إعداد نظام أو بناء تشغيلي متعدد الأجزاء.",
        },
        {
          title: "أداة داخلية أو لوحة تشغيل",
          sector: "أنظمة الأعمال",
          summary:
            "نظام داخلي مركز مبني حول تدفق محدد أو نموذج بيانات أو حاجة تقريرية لا تخدمها البرمجيات الجاهزة جيداً.",
          addressed:
            "الجداول المجمعة وتكرار البيانات وضعف الإشراف والعمليات الداخلية التي لا تلائم الأدوات الجاهزة.",
          outcome:
            "تدفق داخلي أنظف ورؤية أفضل وكفاءة إدارية أعلى.",
          scope:
            "تنفيذ مركز أو إعداد نظام حول عملية داخلية عالية الاحتكاك.",
        },
        {
          title: "بناء لأتمتة سير العمل والأنظمة",
          sector: "أتمتة سير العمل والأنظمة",
          summary:
            "بناء أتمتة مترابط للأعمال التي تحتاج سيطرة أعلى على التكاملات والمنطق وتنفيذ العمليات بين الأنظمة.",
          addressed:
            "تدفقات n8n وتنسيق الـ webhooks والواجهات البرمجية وحركة البيانات بين الأدوات ومنطق الأتمتة الأعمق من الإعدادات الأساسية.",
          outcome:
            "أنظمة أكثر ترابطاً وتدفق بيانات أنظف وتنفيذ أسرع للعمليات.",
          scope:
            "تدفق تكامل أو بناء أعمق لأتمتة سير العمل.",
        },
      ],
      engagements: {
        eyebrow: "كيف يُحدد نطاق المشاريع",
        title: "تدعم Benyah المشاريع المركزة كما تدعم البنى التشغيلية متعددة الأجزاء.",
        description:
          "بعض المشاريع تبدأ من نقطة احتكاك واحدة، وأخرى تحتاج إلى بنية أوسع عبر عدة طبقات مترابطة داخل النشاط.",
        items: [
          {
            title: "تنفيذ مركز",
            description:
              "مشروع محدد بوضوح حول احتياج عملي واحد مثل موقع أو إعداد حجز أو معالجة تدفق داخلي.",
          },
          {
            title: "إعداد نظام",
            description:
              "بناء أكثر هيكلة حيث تحتاج الأدوات والبيانات والعملية إلى إعداد صحيح من البداية.",
          },
          {
            title: "تحسين سير العمل",
            description:
              "مرحلة تحسين على إعداد قائم عندما تكون الإجابة الصحيحة هي هيكل أفضل لا استبدالاً كاملاً.",
          },
          {
            title: "بناء تشغيلي متعدد الأجزاء",
            description:
              "مشروع مترابط يغطي عدة طبقات من النشاط مثل الموقع وسير العمل والأتمتة والأنظمة الداخلية معاً.",
          },
        ],
      },
      finalCta: {
        eyebrow: "ابدأ الحوار",
        title: "إذا كان أحد هذه الأنماط مناسباً للاحتياج، فالخطوة التالية هي محادثة مباشرة.",
        description:
          "تساعد Benyah على تقييم مستوى المشروع المناسب وشكل النظام المرجح ونقطة البداية الأنسب وفق الوضع الحالي للنشاط.",
        supportingLine: "نطاق عملي قبل التنفيذ.",
        secondaryAction: "استكشف الخدمات",
      },
    },
    book: {
      eyebrow: "مكالمة اكتشاف",
      title: "اطلب مكالمة اكتشاف لتوضيح الملاءمة والنطاق والخطوة التالية المناسبة.",
      description:
        "مكالمة الاكتشاف مع Benyah مخصصة لفهم طريقة عمل النشاط اليوم، وأين توجد نقاط الاحتكاك، وما إذا كانت الخطوة التالية هي موقعاً أو تحسين سير عمل أو إعداد نظام أو بناء تشغيلي أوسع.",
      supportingLine:
        "مناسبة للاستفسارات الجادة التي تحتاج وضوحاً قبل التنفيذ.",
      highlightsLabel: "ما الذي تتوقعه",
      highlights: [
        "محادثة عملية حول النشاط، وليست مكالمة بيع نمطية",
        "مفيدة للمواقع والأتمتة وتدفقات الحجز والمكالمات الذكية والأنظمة التشغيلية والأدوات الداخلية",
        "الهدف هو وضوح الملاءمة والنطاق المتوقع والخطوة التالية المنطقية",
      ],
      heroPrimaryAction: "اعرض خيارات الطلب",
      heroSecondaryAction: "تفضل إرسال استفسار؟",
      covers: {
        eyebrow: "ما الذي تغطيه المكالمة",
        title: "مراجعة عملية للنشاط والمشكلة والنطاق المرجح.",
        description:
          "المحادثة مصممة لتوفير قدر كافٍ من الوضوح للطرفين لفهم ما إذا كانت هناك ملاءمة وما الذي يجب أن تكون عليه الخطوة التالية.",
        items: [
          {
            title: "الوضع الحالي",
            description:
              "كيف يدير النشاط حالياً الاستفسارات والتنفيذ والمواعيد والأنظمة أو العمليات الداخلية.",
          },
          {
            title: "الاحتكاك التشغيلي",
            description:
              "أين تسبب الأعمال اليدوية أو ضعف التسليم أو الأدوات المتفرقة أو غياب الهيكل الواضح تباطؤاً في العمل.",
          },
          {
            title: "نوع الخدمة أو النظام",
            description:
              "ما إذا كان الاحتياج يشير إلى موقع أو طبقة أتمتة أو تدفق للحجز والمكالمات الذكية أو إعداد لإدارة المرافق والصيانة أو أداة داخلية.",
          },
          {
            title: "الخطوة التالية المقترحة",
            description:
              "ما هي الخطوة العملية الأنسب بعد المكالمة، بما في ذلك ما إذا كان الأنسب مشروعاً مركزاً أو بناء نظام أوسع.",
          },
        ],
      },
      audience: {
        eyebrow: "لمن تناسب",
        title: "الأفضل للأعمال التي لديها احتياج حقيقي على مستوى الأنظمة أو التشغيل.",
        description:
          "تكون مكالمة الاكتشاف أكثر فائدة عندما يوجد احتياج واضح يحتاج إلى تعريف أو تحسين أو تنظيم صحيح.",
        items: [
          {
            title: "مشاريع الأتمتة",
            description:
              "للأعمال التي تريد تقليل الأعمال الإدارية المتكررة وربط الأدوات الحالية وتثبيت التسليم بين المراحل.",
          },
          {
            title: "المواقع الإلكترونية",
            description:
              "للأعمال التي تحتاج موقعاً احترافياً بتموضع أوضح ومؤشرات ثقة أفضل ومسار أقوى لالتقاط الفرص.",
          },
          {
            title: "تدفقات الحجز والمكالمات الذكية",
            description:
              "للأعمال التي تحتاج جدولة أكثر سلاسة وتأكيدات وتذكيرات وخطوات إدخال وتسليماً داخلياً أوضح مع دعم للمكالمات الذكية عند الحاجة.",
          },
          {
            title: "إدارة المرافق والصيانة",
            description:
              "لعمليات المرافق أو الخدمات التي تحتاج سيطرة أفضل على سجلات الخدمة والطلبات والأصول وأوامر العمل وتنسيق المتعهدين.",
          },
          {
            title: "الأدوات والأنظمة الداخلية",
            description:
              "للفرق التي تحتاج رؤية أفضل وتدفق بيانات منظم وبرمجيات تشغيلية مناسبة فعلياً لطبيعة العمل.",
          },
        ],
      },
      booking: {
        eyebrow: "الحجز",
        title: "احجز المكالمة إذا كانت متاحة، أو اطلبها مباشرة.",
        description:
          "إذا كان تقويم الحجز المباشر متاحاً يمكنك اختيار موعد من هنا. وإذا لم يكن منشوراً حالياً فيمكنك طلب مكالمة الاكتشاف مباشرة عبر نموذج التواصل من دون أن يتوقف النقاش.",
        shell: {
          configuredBadge: "الحجز متاح",
          configuredTitle: "حدّد موعد المحادثة",
          configuredDescription:
            "استخدم منطقة الحجز أدناه لاختيار وقت مناسب لنقاش أولي حول سياق النشاط والملاءمة والنطاق المرجح.",
          configuredAction: "افتح الحجز في نافذة جديدة",
          configuredNote:
            "إذا لم تظهر أداة الحجز المضمنة بشكل صحيح، فاستخدم رابط الحجز المباشر بدلاً من ذلك.",
          fallbackBadge: "طلب مكالمة اكتشاف",
          fallbackTitle: "طلبات مكالمة الاكتشاف تُدار مباشرة.",
          fallbackDescription:
            "لإبقاء المسار واضحاً وعملياً، تُدار طلبات مكالمة الاكتشاف عبر مسار الاستفسار عندما لا يكون التقويم المباشر منشوراً هنا. أرسل نبذة مختصرة عن النشاط واذكر أنك تفضل المكالمة.",
          fallbackPrimaryAction: "اطلب المكالمة",
          fallbackSecondaryAction: "استكشف الخدمات",
          fallbackNote:
            "بهذه الطريقة يبقى المسار صادقاً: يبدأ النقاش فوراً ويمكن تأكيد الخطوة التالية المناسبة بعد المراجعة الأولى.",
        },
      },
      reassurance: {
        eyebrow: "ماذا بعد ذلك",
        title: "المحادثة الأولى مخصصة للملاءمة والنطاق ووضوح الخطوة التالية.",
        description:
          "ليست التزاماً ببدء المشروع فوراً. الهدف هو فهم السياق بشكل صحيح، والتأكد من ملاءمة Benyah، وتحديد الطريق العملي الأنسب للمضي قدماً.",
        points: [
          "يكفي وصف مختصر أو سياق عام عن النشاط لبدء المحادثة",
          "إذا لم تكن مكالمة الاكتشاف هي الخطوة الأولى الأنسب، يمكن لـ Benyah اقتراح مسار أفضل",
          "يمكن تحديد النطاق والتوقيت وهيكل التنفيذ بشكل أدق بعد المحادثة الأولى",
        ],
      },
    },
    contact: {
      eyebrow: "تواصل",
      title: "ابدأ محادثة منظمة مع Benyah.",
      description:
        "تواصل بخصوص المواقع أو الأتمتة أو تدفقات الحجز والمكالمات الذكية أو أنظمة الأعمال والأدوات الداخلية أو حلول إدارة المرافق والصيانة أو أتمتة سير العمل والأنظمة أو هيكل تشغيلي أوسع.",
      supportingLine:
        "تعمل Benyah عبر الحضور الرقمي وسير العمل والعمليات الداخلية للأعمال التي تحتاج أنظمة أوضح وتنفيذاً أفضل.",
      highlightsLabel: "متى يكون التواصل مناسباً",
      highlights: [
        "استفسارات المشاريع الجديدة ومناقشات التنفيذ",
        "تحسينات سير العمل وإعادة تنظيم الأنظمة",
        "حلول المواقع والأتمتة والبنية التشغيلية",
      ],
      heroPrimaryAction: "افتح نموذج التواصل",
      intro: {
        eyebrow: "لماذا تتواصل",
        title: "أفضل المحادثات تبدأ عادةً من احتياج عملي واضح.",
        description:
          "لا تحتاج إلى مواصفات كاملة للبدء. يكفي ملخص قصير عن الوضع الحالي ونقطة الاحتكاك لبدء نقاش جاد.",
        items: [
          {
            title: "استفسارات المشاريع",
            description:
              "للأعمال التي تخطط لموقع جديد أو إعداد أتمتة أو تدفق حجز أو مشروع نظام داخلي.",
          },
          {
            title: "تحسين سير العمل",
            description:
              "للفرق التي لديها أدوات قائمة لكنها تحتاج تسليماً أنظف وعملية أوضح وتنفيذاً أكثر اعتمادية.",
          },
          {
            title: "المواقع والحضور الرقمي",
            description:
              "للأعمال التي تحتاج انطباعاً أول أقوى وتموضعاً أوضح أو هيكل تحويل أفضل.",
          },
          {
            title: "الأنظمة التشغيلية",
            description:
              "للأعمال التي تحتاج رؤية أفضل أو تدفق حجز أنظف أو أدوات داخلية أو دعماً منظماً لأنظمة المرافق والتشغيل.",
          },
        ],
      },
      form: {
        eyebrow: "نموذج الفرص",
        title: "أرسل استفسارك بقدر يكفي لبدء المحادثة الصحيحة.",
        description:
          "صُمم النموذج ليبقى منخفض الاحتكاك مع إعطاء Benyah ما يكفي من السياق لفهم نوع الدعم المطلوب.",
        cardTitle: "ما الذي يكفي لإرساله",
        cardDescription:
          "يكفي وصف عملي مختصر. الهدف هو فهم احتياج العمل، لا جمع مواصفات كاملة من الخطوة الأولى.",
        note:
          "يمكن تحديد النطاق التفصيلي وتسلسل التنفيذ والقرارات التقنية بعد المحادثة الأولى.",
        helperPoints: [
          "ملخص قصير عن النشاط والوضع الحالي",
          "أهم نقطة احتكاك أو الهدف من المشروع",
          "مجال الخدمة الأقرب إلى الاحتياج اليوم",
        ],
        submitLabel: "إرسال الاستفسار",
        fields: {
          name: "الاسم",
          company: "اسم الشركة",
          email: "البريد الإلكتروني",
          phone: "الهاتف أو واتساب",
          service: "الخدمة المطلوبة",
          brief: "ملخص المشروع",
          nextStep: "الخطوة المفضلة التالية",
        },
        placeholders: {
          name: "اسمك",
          company: "اسم الشركة أو النشاط",
          email: "you@company.com",
          phone: "الهاتف أو واتساب",
          servicePrompt: "اختر خدمة",
          brief:
            "اشرح باختصار ما الذي يحتاجه النشاط أو ما الذي لا يعمل جيداً الآن أو نوع المشروع الذي تفكر فيه.",
          nextStepPrompt: "اختر الخطوة التالية",
        },
        serviceNotSureLabel: "لست متأكداً بعد",
        nextStepOptions: [
          { value: "contact", label: "تواصل أولي" },
          { value: "discovery-call", label: "مكالمة اكتشاف" },
        ],
        statuses: {
          successTitle: "تم استلام الاستفسار",
          successDescription:
            "شكراً لك. تم استلام الاستفسار وهو الآن جاهز للمراجعة.",
          errorTitle: "تعذر إرسال الاستفسار",
          errorDescription:
            "حدث ما قاطع عملية الإرسال. يرجى مراجعة النموذج والمحاولة مرة أخرى.",
        },
      },
      trust: {
        eyebrow: "ماذا بعد ذلك",
        title: "الرسالة الأولى مخصصة لفهم الملاءمة والسياق والخطوة التالية.",
        description:
          "تستخدم Benyah الاستفسار الأول لفهم الوضع بشكل صحيح وتحديد ما إذا كانت مكالمة قصيرة هي الخطوة التالية الأنسب ثم صياغة النطاق من هناك.",
        bestFitTitle: "أفضل أنواع الاستفسارات لهذا النموذج",
        bestFitDescription:
          "يعمل نموذج التواصل بأفضل صورة عندما تكون هناك حاجة مشروعية أو تشغيلية حقيقية تحتاج إلى نقاش واضح.",
        bestFitPoints: [
          "موقع أو حضور رقمي لم يعد يعكس مستوى النشاط كما ينبغي",
          "احتكاك في سير العمل أو أعمال متكررة أو أنظمة منفصلة تبطئ التنفيذ",
          "حاجة إلى حجز أنظف أو رؤية تشغيلية أو أدوات داخلية أقوى",
        ],
        points: [
          "يكفي ملخص مختصر لبدء محادثة جادة",
          "يمكن توضيح الخدمة المناسبة أو مزيج الخدمات معاً",
          "يمكن تحديد النطاق والتوقيت والتسلسل بعد المراجعة الأولى",
        ],
      },
      finalCta: {
        eyebrow: "جاهز للتواصل",
        title: "إذا كان النشاط يحتاج إلى هيكل أوضح، فأرسل الاستفسار وابدأ من هناك.",
        description:
          "تساعد Benyah على تحديد ما إذا كانت الخطوة التالية هي موقعاً أو تحسين سير عمل أو طبقة أتمتة أو نظاماً تشغيلياً أوسع.",
        supportingLine: "تفكير واضح قبل التنفيذ.",
        primaryAction: "اذهب إلى النموذج",
        secondaryAction: "استكشف الخدمات",
      },
    },
    notFound: {
      title: "هذه الصفحة غير متاحة.",
      description: "قد يكون المسار قد تغيّر أو أن النسخة المترجمة لم تُنشأ بعد.",
      actionLabel: "العودة إلى الرئيسية",
    },
  },
};

export function getMarketingContent(locale: Locale) {
  return marketingContent[locale];
}
