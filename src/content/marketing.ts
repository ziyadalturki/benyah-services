import type { ServiceSlug } from "@/config/site";
import type { Locale } from "@/i18n/config";
import { marketingContentOverrides } from "@/content/marketing-commercial-overrides";

type NavigationItem = {
  href: string;
  label: string;
};

type ServiceContent = {
  title: string;
  summary: string;
  bestWhen: string;
  heroSupportingLine: string;
  intro: string;
  capabilities: string[];
  outcomes: string[];
  problems: Principle[];
  audience: Principle[];
  processTitle?: string;
  processDescription?: string;
  processSteps?: HomeProcessStep[];
  afterLaunch?: {
    description: string;
    points: string[];
  };
  finalCta?: {
    title: string;
    description: string;
    supportingLine: string;
  };
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
  services?: ServiceSlug[];
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
    coreServices?: HomeSection;
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
    trust: HomeSection & {
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
      bestWhenLabel: string;
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
      afterLaunch?: HomeSection;
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
      summaryLabel: string;
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
        fallbackSecondaryAction?: string;
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
    callIntent: {
      badge: string;
      title: string;
      description: string;
      supportingLine: string;
      primaryAction: string;
      noteTitle: string;
      noteDescription: string;
    };
    form: {
      eyebrow: string;
      title: string;
      description: string;
      note: string;
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
      nextStepsTitle: string;
      nextStepsDescription: string;
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
      secondary: "View Services",
      contact: "Send an Enquiry",
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
        serviceAction: "See Service",
        caseStudyOutcome: "What Improved",
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
      trust: {
        eyebrow: "How Engagements Run",
        title: "The work stays clear, scoped, and practical from the start.",
        description:
          "Benyah keeps delivery intentionally disciplined so projects stay commercially sensible and usable in daily operations.",
        items: [
          {
            title: "Clear Scope Before Build",
            description:
              "The first priority is defining the real pressure point, the right service layer, and what should happen first.",
          },
          {
            title: "Built Around Daily Use",
            description:
              "Systems are shaped around the way the team actually works, not around abstract feature lists.",
          },
          {
            title: "One Practical Next Step",
            description:
              "Projects can begin narrowly, then expand only where the wider operating picture genuinely needs it.",
          },
        ],
      },
      selectedWork: {
        eyebrow: "Selected Work",
        title: "A look at the kinds of problems Benyah is brought in to clean up.",
        description:
          "The examples focus on the business situation, the cleanup, and the kind of operating improvement the work supports.",
        noteEyebrow: "How Work Is Shared",
        noteTitle: "Named case studies are published selectively",
        noteDescription:
          "Where a full public story is not appropriate, Benyah shows the pattern of the engagement instead so visitors can still judge fit realistically.",
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
      title: "Services built around how the business actually runs.",
      description:
        "Each service is designed around a clear business pressure point, then connected back to the wider operating system around it.",
      supportingLine:
        "If you already know where the friction sits, start there. If not, the decision cues below will help narrow the right fit.",
      highlightsLabel: "Service Focus",
      highlights: [
        "Customer-facing systems that support trust and conversion",
        "Workflow automation that reduces repeated coordination",
        "Operational systems that improve visibility, control, and growth",
      ],
      heroSecondaryAction: "View Services",
      intro: {
        eyebrow: "How Benyah Fits",
        title:
          "The right starting point depends on where the business is losing clarity today.",
        description:
          "Some businesses need a stronger front end. Others need cleaner recurring workflow, deeper system-to-system logic, or a better internal operating layer. Benyah helps sort those into the right level of project.",
        pointsLabel: "What Better Structure Covers",
        points: [
          "A clearer path for prospects, clients, and bookings",
          "More dependable movement between repeated internal steps",
          "Stronger operational visibility and cleaner internal systems",
        ],
      },
      catalog: {
        eyebrow: "Service Categories",
        title: "Choose the layer that matches the pressure point.",
        description:
          "Each service below answers a different kind of problem, from repeated admin to deeper systems logic to internal operating structure.",
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
        serviceBadge: "Service",
        serviceAction: "See Service",
        serviceSupportLabel: "What It Helps With",
        bestWhenLabel: "Best when",
        groupServicesLabel: "Related Services",
      },
      detail: {
        heroPanelLabel: "Key Outcomes",
        heroSecondaryAction: "All Services",
        overview: {
          eyebrow: "What This Service Is",
          title: "How this service changes the working reality of the business.",
          description:
            "The focus is always practical: fix the weak point, clarify the workflow, and leave the business with something more dependable in daily use.",
          capabilitiesLabel: "What Benyah Shapes",
        },
        problems: {
          eyebrow: "Problems It Solves",
          title: "Designed around the friction that shows up in real operations.",
          description:
            "The focus is on issues that affect clarity, speed, service quality, and operational control.",
        },
        deliverables: {
          eyebrow: "What Benyah Delivers",
          title: "A defined scope, a cleaner setup, and a result the team can actually use.",
          description:
            "Each service is different in form, but the delivery stays practical: a defined scope, a clear system shape, and an outcome that works in daily use.",
          capabilitiesLabel: "Delivery Focus",
          outcomesLabel: "Operational Effect",
        },
        audience: {
          eyebrow: "Who It Is For",
          title: "Best for businesses that have reached a clear pressure point in this area.",
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
          title: "Questions that usually come up before the work starts.",
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
        secondaryAction: "Send an Enquiry",
      },
      items: {
        automation: {
          title: "Automation Solutions",
          summary:
            "Practical automation for recurring admin, follow-up, approvals, and the repeated steps that should no longer depend on manual chasing.",
          bestWhen:
            "Best when one operating flow is still being pushed forward by inboxes, reminders, spreadsheets, and repeated admin.",
          heroSupportingLine:
            "For businesses where too much of the day still depends on people remembering, chasing, or repeating the same actions.",
          intro:
            "Automation Solutions focus on the repeated processes inside the existing operation. The aim is to remove unnecessary manual handling around enquiries, follow-up, approvals, reminders, updates, and routine handoffs so the team can spend less time pushing the workflow along by hand.",
          capabilities: [
            "Repeat admin, approvals, and follow-up inside one working process",
            "Internal reminders, notifications, and handoffs that keep routine work moving",
            "A light automation layer built around the tools already in use",
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
          finalCta: {
            title: "If the process is being held together manually, this is usually the right place to start.",
            description:
              "Benyah can review the repeated work, identify what should move automatically, and define the smallest practical automation layer that improves the day-to-day operation.",
            supportingLine: "Start with the repeated friction, not with a larger system than the business needs.",
          },
        },
        websites: {
          title: "Websites",
          summary:
            "Premium business websites built to communicate clearly, build trust, and turn qualified visitors into enquiries.",
          bestWhen:
            "Best when the business is credible in practice but the website is not carrying that standard or guiding the right enquiry properly.",
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
          finalCta: {
            title: "If the website is underselling the business, the next step is to fix that properly.",
            description:
              "Benyah can help clarify the positioning, the page structure, and the enquiry path so the site starts supporting the business instead of lagging behind it.",
            supportingLine: "A stronger first impression should also lead to a clearer next step.",
          },
        },
        "booking-workflows": {
          title: "Booking & AI Call Workflows",
          summary:
            "Structured booking and AI-assisted call workflows for scheduling, confirmations, reminders, intake, internal handoff, and fewer no-shows.",
          bestWhen:
            "Best when appointments, confirmations, reminders, and call handling are affecting conversion, readiness, or daily capacity.",
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
          finalCta: {
            title: "If booking quality affects how the business sells or delivers, this is a high-value fix.",
            description:
              "Benyah can help clean up the path from first contact to confirmed appointment so clients, calls, and internal preparation all move together more reliably.",
            supportingLine: "The goal is a smoother booking path and a better-prepared team behind it.",
          },
        },
        "facility-maintenance-management": {
          title: "Facility & Maintenance Management Solutions",
          summary:
            "Structured facility and maintenance systems for work orders, service records, asset visibility, and contractor coordination.",
          bestWhen:
            "Best when requests, assets, work orders, and service records need a clearer system than email, calls, and spreadsheets can provide.",
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
          finalCta: {
            title: "If facilities work is hard to track cleanly, the right system layer can change that quickly.",
            description:
              "Benyah can help define a management setup around the requests, assets, work orders, and contractor activity that need clearer control.",
            supportingLine: "Start where the records or coordination are breaking down most visibly.",
          },
        },
        "workflow-systems-automation": {
          title: "Workflow & Systems Automation",
          summary:
            "Deeper automation for businesses that need systems, data, and decision logic to move reliably between several tools or platforms.",
          bestWhen:
            "Best when the problem sits between several systems and the business needs cleaner integrations, orchestration, or data movement.",
          heroSupportingLine:
            "For businesses that already have several tools in play and now need them to behave like one connected operating flow.",
          intro:
            "Workflow & Systems Automation is for the deeper layer between systems. It is the right fit when forms, CRMs, booking platforms, internal tools, or operations systems all play a role in one process, but the handoff between them is inconsistent, fragile, or too manual.",
          capabilities: [
            "Cross-system handoffs between forms, CRMs, booking, operations, and internal tools",
            "Data movement, branching logic, and exception handling across platforms",
            "Deeper integration where simple task automation is no longer enough",
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
          finalCta: {
            title: "If several systems need to move together cleanly, this is usually the better fit than simple automation.",
            description:
              "Benyah can review the current handoffs, data movement, and logic between tools, then define the integration layer that makes the overall process more dependable.",
            supportingLine: "Bring the systems into order before layering on more manual workarounds.",
          },
        },
        "business-systems": {
          title: "Business Systems & Internal Tools",
          summary:
            "Custom internal systems, dashboards, and operating tools built around the way the business actually runs day to day.",
          bestWhen:
            "Best when the business needs its own internal operating layer, not just better handoffs between generic tools.",
          heroSupportingLine:
            "For businesses that have outgrown spreadsheets, patchwork tools, or generic software at the centre of internal operations.",
          intro:
            "Business Systems & Internal Tools are for situations where the business needs its own stronger internal layer. Instead of adding another workaround, Benyah helps define the records, dashboards, permissions, reporting views, and operating controls that should sit at the centre of the internal workflow.",
          capabilities: [
            "Internal dashboards, admin tools, and working views shaped around one real process",
            "Structured records, permissions, and operational controls",
            "Reporting and data views built around day-to-day management needs",
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
          finalCta: {
            title: "If the business needs a stronger internal operating layer, this is where that work begins.",
            description:
              "Benyah can help define the records, views, controls, and internal workflow structure the team actually needs instead of forcing more compromise from generic software.",
            supportingLine: "A better internal system should reduce noise, not create another tool to manage around.",
          },
        },
      },
    },
    about: {
      eyebrow: "About",
      title: "Benyah is built around the idea of structure.",
      description:
        "Benyah is a premium small-business solutions company helping businesses improve digital presence, workflow, and operations through connected systems.",
      supportingLine:
        "For businesses that need the operation behind the brand to work as well as the front end looks.",
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
        secondaryAction: "Send an Enquiry",
      },
    },
    caseStudies: {
      eyebrow: "Case Studies",
      title: "Examples of the situations Benyah is brought in to sort out.",
      description:
        "A look at the kinds of business situations that lead to website rebuilds, workflow cleanup, and stronger internal systems.",
      supportingLine:
        "Anonymous where needed, concrete where it matters.",
      highlightsLabel: "What You’ll See",
      highlights: [
        "Typical starting points behind the engagement",
        "What Benyah cleaned up or put in place",
        "How the project usually takes shape from there",
      ],
      intro: {
        eyebrow: "How Work Is Shared",
        title: "Real operating situations, shared without dressing them up.",
        description:
          "Not every project is something that should be published in full. Where a named story is not appropriate, Benyah shows the business situation, the cleanup, and what changed so visitors can still judge fit properly.",
        asideEyebrow: "Reading Guide",
        asideTitle: "Look at the before, the cleanup, and the shape of the engagement.",
        asideDescription:
          "The examples stay anonymous where needed, but they remain specific enough to show how the work is usually framed and delivered.",
        asidePoints: [
          "No invented clients, metrics, or testimonials",
          "Each example starts from a real business problem",
          "More detailed discussion can happen in a direct conversation",
        ],
      },
      startingPoints: {
        eyebrow: "What Usually Brings Clients In",
        title: "Most engagements begin with an operational problem that is already visible.",
        description:
          "The brief is rarely the first thing that appears. More often there is an obvious pressure point behind it. These are common examples.",
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
        eyebrow: "Example Engagements",
        title: "Typical examples of the work Benyah is asked to put in place.",
        description:
          "Each example shows where the business started, what was cleaned up, what improved, and the kind of project that usually followed.",
      },
      labels: {
        summaryLabel: "Starting Point",
        outcomeLabel: "What Improved",
        addressedLabel: "What Benyah Put In Place",
        scopeLabel: "Typical Project Shape",
      },
      items: [
        {
          title: "Booking & AI Call Workflow Setup",
          sector: "Booking & Call Workflows",
          summary:
            "A service business was handling bookings, reminders, and incoming calls across several channels with no dependable handoff into delivery.",
          addressed:
            "Booking rules, confirmations, reminders, intake steps, AI-assisted call handling where it helped, and the internal handoff after each confirmed booking.",
          outcome:
            "A cleaner booking path, fewer missed steps, and better preparation before service delivery.",
          scope:
            "Usually a focused workflow build around bookings, calls, and internal readiness.",
        },
        {
          title: "Automation And Handoff System",
          sector: "Workflow Automation",
          summary:
            "An operation was depending on manual follow-up and repeated coordination to move work from enquiry into internal action and client updates.",
          addressed:
            "Manual administration, inconsistent handoffs, notification logic, and repeated coordination between systems or team members.",
          outcome:
            "Less manual chasing, more dependable movement between steps, and clearer visibility into what was waiting or delayed.",
          scope:
            "Usually a workflow-improvement project or a focused multi-step automation build.",
        },
        {
          title: "Premium Lead-Generation Website",
          sector: "Websites",
          summary:
            "A credible business had outgrown a generic website that was not explaining the offer properly or guiding serious visitors toward the right next step.",
          addressed:
            "Weak positioning, generic presentation, unclear page flow, and a poor enquiry path.",
          outcome:
            "Stronger credibility, clearer service messaging, and better-quality enquiries.",
          scope:
            "Usually a focused site rebuild with clearer positioning and conversion structure.",
        },
        {
          title: "Facility & Maintenance Management Setup",
          sector: "Facility & Maintenance Management",
          summary:
            "A facilities or maintenance team needed a cleaner way to manage requests, assets, work orders, service records, and contractor coordination.",
          addressed:
            "Request flow, asset structure, work order status, service records, reporting visibility, and day-to-day coordination across maintenance activity.",
          outcome:
            "Cleaner records, clearer work status, and better operational oversight across maintenance activity.",
          scope:
            "Usually a system-setup project with phased operational cleanup.",
        },
        {
          title: "Internal Business Tool Or Dashboard",
          sector: "Business Systems",
          summary:
            "A business had core internal work living in spreadsheets and patchwork tools that were no longer giving managers a clear view of status or workload.",
          addressed:
            "Patchwork spreadsheets, duplicated data, weak oversight, and internal processes that did not fit off-the-shelf tools.",
          outcome:
            "A cleaner internal operating layer, better visibility, and stronger day-to-day control.",
          scope:
            "Usually a focused internal-system project around one high-friction process.",
        },
        {
          title: "Workflow & Systems Automation Build",
          sector: "Workflow & Systems Automation",
          summary:
            "A business needed several systems to move data and actions between each other more reliably than a simple rule-based setup could support.",
          addressed:
            "Integration logic, data movement between tools, and the deeper orchestration needed to keep a cross-system workflow running cleanly.",
          outcome:
            "More dependable cross-system execution, cleaner data flow, and fewer brittle handoffs between platforms.",
          scope:
            "Usually an integration-focused automation build rather than a simple task automation pass.",
        },
      ],
      engagements: {
        eyebrow: "How Projects Are Scoped",
        title: "Some projects stay focused. Others open into a wider systems build.",
        description:
          "The right shape depends on whether the pressure point is isolated or tied to several parts of the business at once.",
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
        title: "If one of these situations feels familiar, the next step is a direct conversation.",
        description:
          "Benyah can help assess the right project shape, the likely system layer involved, and the best place to begin from the current setup.",
        supportingLine: "Practical scope before implementation.",
        secondaryAction: "Send an Enquiry",
      },
    },
    book: {
      eyebrow: "Discovery Call",
      title: "Request a discovery call to clarify the need and the right next step.",
      description:
        "The conversation is there to understand the current setup, the pressure point, and whether the next step should be a website, workflow improvement, system setup, or something wider.",
      supportingLine:
        "Best for serious enquiries that need a clear starting point before anything is scoped.",
      highlightsLabel: "What To Expect",
      highlights: [
        "A practical business conversation, not a scripted sales call",
        "Useful for websites, automation projects, operational systems, and internal tooling",
        "The goal is clarity on fit, likely scope, and the most sensible next step",
      ],
      heroPrimaryAction: "Request a Discovery Call",
      heroSecondaryAction: "Send an Enquiry",
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
        title: "Choose a time if booking is available, or request the call directly.",
        description:
          "If a live calendar is available, you can choose a time here. If not, you can still request the call directly through the enquiry flow.",
        shell: {
          configuredBadge: "Booking Ready",
          configuredTitle: "Choose a time for the conversation",
          configuredDescription:
            "Use the booking area below to reserve a suitable time for an initial discussion around the business, the pressure point, and the likely next step.",
          configuredAction: "Open Booking In A New Tab",
          configuredNote:
            "If the embedded schedule does not load cleanly, use the direct booking link instead.",
          fallbackBadge: "Discovery Call Request",
          fallbackTitle: "Request the call directly.",
          fallbackDescription:
            "When a live calendar is not published here, Benyah handles call requests through the enquiry form. Share a short outline of the business situation and the call request can be reviewed from there.",
          fallbackPrimaryAction: "Request a Discovery Call",
          fallbackNote:
            "The form will open with discovery-call intent already selected.",
        },
      },
      reassurance: {
        eyebrow: "What Happens Next",
        title: "The first conversation is simply to clarify fit, scope, and the right way forward.",
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
      title: "Tell us what the business needs.",
      description:
        "Share the business context, the pressure point, or the project you are considering. Benyah will review it and help define the right next step.",
      supportingLine:
        "Useful for websites, workflow improvement, operational systems, and discovery-call requests.",
      highlightsLabel: "Contact Fit",
      highlights: [
        "New project enquiries and implementation discussions",
        "Workflow improvements and system restructuring",
        "Websites, automation, and operational solutions",
      ],
      heroPrimaryAction: "Send an Enquiry",
      intro: {
        eyebrow: "Why Get In Touch",
        title: "The clearest enquiries usually start with a real business situation.",
        description:
          "You do not need a full specification. A short outline of the current setup, the pressure point, and the likely direction is enough.",
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
      callIntent: {
        badge: "Discovery Call Request",
        title: "Use this form to request a discovery call.",
        description:
          "The form below is already set to discovery-call intent. Share a short outline of the business and what needs discussion, and Benyah will confirm whether a call is the right next step.",
        supportingLine: "A short brief is enough. The aim is to understand the need before scheduling anything.",
        primaryAction: "Request a Discovery Call",
        noteTitle: "What to send",
        noteDescription:
          "A few lines on the business, the pressure point, and what you want to talk through are enough to start.",
      },
      form: {
        eyebrow: "Enquiry Form",
        title: "Share the essentials and Benyah will take it from there.",
        description:
          "Keep it brief. The purpose is to understand the situation, not to collect a full specification on the first message.",
        note:
          "Detailed scope, sequencing, and technical decisions can be shaped after the initial conversation.",
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
          { value: "contact", label: "Written Enquiry" },
          { value: "discovery-call", label: "Request a Discovery Call" },
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
        title: "The first message is there to clarify direction, not to lock you into a project.",
        description:
          "Benyah uses the first enquiry to understand the situation, decide whether a short call is useful, and shape the next step from there.",
        bestFitTitle: "Best Enquiries To Send Here",
        bestFitDescription:
          "The contact form works best when there is a real project, workflow issue, or operational pressure point to discuss.",
        nextStepsTitle: "After the first message",
        nextStepsDescription:
          "Once the situation is clear enough, the next step can be shaped properly, whether that is a short call, a focused project discussion, or a clearer service recommendation.",
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
        title: "A clear first message is enough to start the right conversation.",
        description:
          "If the service fit is not fully clear yet, that is fine. Benyah can help identify whether the next step is a call, a focused project discussion, or a broader review of the situation.",
        supportingLine: "Clear thinking before implementation.",
        primaryAction: "Send an Enquiry",
        secondaryAction: "Request a Discovery Call",
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
        "Benyah تساعد الشركات الصغيرة والمتوسطة في تطوير مواقع احترافية، وتنظيم سير العمل، وربط الأنظمة، وبناء أدوات داخلية تخدم الشغل اليومي بشكل أهدأ وأوضح.",
      languageSwitcherLabel: "تغيير اللغة",
      primaryNavigationLabel: "القائمة الرئيسية",
      openNavigationLabel: "فتح القائمة",
      closeNavigationLabel: "إغلاق القائمة",
      mobileNavigationTitle: "القائمة",
      mobileNavigationDescription: "روابط الصفحات والإجراء الرئيسي.",
    },
    navigation: [
      { href: "/", label: "الرئيسية" },
      { href: "/services", label: "الخدمات" },
      { href: "/about", label: "عن Benyah" },
      { href: "/case-studies", label: "نماذج أعمال" },
      { href: "/contact", label: "تواصل معنا" },
    ],
    ctas: {
      primary: "اطلب جلسة تعريفية",
      secondary: "تصفح الخدمات",
      contact: "تواصل معنا",
    },
    footer: {
      strapline:
        "نرتب الموقع، وسير العمل، والأنظمة الداخلية بحيث يخدم الشغل اليومي بشكل أهدأ وأوضح.",
      note: "للشركات اللي وصلت لمرحلة تحتاج فيها صورة أوضح، وربط أفضل، وشغل يومي أقل إرباكاً.",
      navigationLabel: "روابط الموقع",
    },
    home: {
      eyebrow: "Benyah",
      title: "مواقع وأنظمة وسير عمل تخلّي الشغل أوضح من أول تواصل إلى التنفيذ.",
      description:
        "Benyah تساعد الشركات الخدمية والعيادات ومشغلي المرافق والفرق اللي كبرت على الجداول والأدوات المبعثرة. نرتب الموقع، والحجز، وسير العمل، والأدوات الداخلية بحيث كل جزء يخدم الثاني.",
      supportingLine:
        "مناسبة أكثر للشركات اللي بدأت تتعب من المتابعة اليدوية، وضعف الموقع، وضياع الخطوات بين فريق وآخر.",
      highlightsLabel: "مجالات العمل",
      highlights: [
        "مواقع احترافية تعطي انطباعاً أفضل وتقود للتواصل بشكل أوضح",
        "أتمتة وتدفقات حجز ومكالمات تخفف المتابعة اليدوية",
        "أنظمة وأدوات داخلية ترتب الشغل اليومي وتختصر الارتباك",
      ],
      labels: {
        serviceBadge: "خدمة",
        serviceAction: "تفاصيل الخدمة",
        caseStudyOutcome: "بعد التنفيذ",
      },
      problem: {
        eyebrow: "وين تبدأ المشكلة",
        title: "غالباً المشكلة مو في نقص الأدوات، المشكلة إن كل أداة تشتغل لحالها.",
        description:
          "مع الوقت يكبر الشغل، لكن الموقع يروح في جهة، والمتابعة في جهة ثانية، والأنظمة الداخلية في جهة ثالثة. هنا تبدأ التكرارات، وتضيع بعض الخطوات، ويصير الفريق يشتغل أكثر من اللازم عشان يمشي اليوم بشكل طبيعي.",
        items: [
          {
            title: "أنظمة مبعثرة",
            description:
              "الاستفسارات، والحجوزات، والتنفيذ، والمتابعة موزعة على أدوات مختلفة من غير مسار واضح بينها.",
          },
          {
            title: "سير عمل يدوي",
            description:
              "فيه خطوات أساسية ما زالت تمشي على التذكر، أو البريد، أو الجداول، أو متابعة يدوية يومية.",
          },
          {
            title: "حضور رقمي ضعيف",
            description:
              "الموقع قد يكون موجود، لكنه ما يعطي صورة تليق بالشركة ولا يقود العميل للخطوة اللي بعدها.",
          },
          {
            title: "فجوات تشغيلية",
            description:
              "الفريق ما عنده متابعة واضحة للحالة، أو التقارير، أو سير الشغل اليومي بالشكل اللي يساعد على التوسع بثقة.",
          },
        ],
        asideEyebrow: "وين يجي دور Benyah",
        asideTitle: "نربط اللي يشوفه العميل باللي يعتمد عليه الفريق كل يوم.",
        asideDescription:
          "الهدف مو إضافة برامج زيادة. الهدف إن الطلب، والتنفيذ، والمتابعة الداخلية يشتغلون مع بعض بشكل مرتب، ويخف الضغط اليومي على الفريق.",
        asidePoints: [
          "الموقع، والحجز، وسير العمل يشتغلون كمنظومة واحدة",
          "الحل يتفصل على قد الحاجة إذا ما كانت الأدوات الجاهزة كافية",
          "التنفيذ عملي ومبني للاستخدام اليومي",
        ],
      },
      process: {
        eyebrow: "كيف نمشي في الشغل",
        title: "نبدأ من فهم الوضع، ثم نرتب الخطوة الصح، ثم ننفذ بهدوء.",
        description:
          "ما نبدأ من الأداة. نبدأ من طريقة الشغل الحالية، ثم نحدد هل البداية الأنسب موقع، أو أتمتة، أو حجز، أو نظام داخلي.",
        steps: [
          {
            step: "01",
            title: "نفهم الوضع الحالي",
            description:
              "نراجع كيف يمشي الشغل اليوم، وأين تتعطل الخطوات، وما الأدوات اللي يعتمد عليها الفريق حالياً.",
          },
          {
            step: "02",
            title: "نحدد البداية الأنسب",
            description:
              "نحدد هل الاحتياج في الموقع، أو المتابعة، أو الحجز، أو الربط بين الأنظمة، أو أداة داخلية تخدم الفريق.",
          },
          {
            step: "03",
            title: "ننّفذ بشكل منظم",
            description:
              "نصمم ونبني بنطاق واضح وتسلسل هادئ، وبتركيز على شيء ينفع فعلاً بعد الإطلاق.",
          },
          {
            step: "04",
            title: "نراجع بعد الإطلاق",
            description:
              "بعد ما يدخل العمل في الاستخدام، نراجع اللي يحتاج تحسين في الوضوح، والمتابعة، وسهولة الاستخدام اليومي.",
          },
        ],
      },
      why: {
        eyebrow: "لماذا Benyah",
        title: "نشتغل على الصورة كاملة، مو على جزء منفصل.",
        description:
          "Benyah مناسبة للشركات اللي تبي شغل واضح، ونطاق محسوب، وتنفيذ يثبت مع الاستخدام اليومي.",
        items: [
          {
            title: "نفهم الشغل قبل ما نختار الأداة",
            description:
              "نبدأ بطريقة العمل والأدوار والمشاكل المتكررة قبل ما نقرر وش يحتاج بناء أو ربط.",
          },
          {
            title: "نربط الواجهة بالشغل الداخلي",
            description:
              "نرتب الموقع، والحجز، والأتمتة، والأدوات الداخلية بحيث كل جزء يكمل الثاني بدل ما يشتغل لحاله.",
          },
          {
            title: "تنفيذ راقٍ من غير ضجيج",
            description:
              "الشغل عندنا نظيف، ومرتب، وعملي، من غير استعراض أو تعقيد ما له داعي.",
          },
        ],
      },
      trust: {
        eyebrow: "كيف تمشي المشاريع معنا",
        title: "من أول نقاش إلى التسليم، الصورة تكون واضحة.",
        description:
          "نحرص إن كل مشروع يكون واضح في نطاقه، واقعي في تنفيذه، ومفيد فعلاً بعد ما يدخل في الاستخدام.",
        items: [
          {
            title: "نحدد البداية المناسبة",
            description:
              "ما نخلط كل شيء من البداية. نحدد أول جزء يحتاج ترتيب، ونبدأ منه.",
          },
          {
            title: "نبني حول طريقة العمل الحقيقية",
            description:
              "الحل يتبني على اللي يسويه الفريق فعلاً كل يوم، مو على قائمة خصائص بعيدة عن الواقع.",
          },
          {
            title: "نكبر المشروع فقط إذا كان يستاهل",
            description:
              "أحياناً يكفي حل محدد، وأحياناً يفتح الباب على شغل أوسع. القرار يكون حسب الحاجة الفعلية، مو حسب الحماس.",
          },
        ],
      },
      selectedWork: {
        eyebrow: "نماذج أعمال",
        title: "هذه أمثلة على نوع الشغل اللي نبدأ فيه عادة.",
        description:
          "بدل الكلام النظري، هذه أمثلة تبين كيف تبدأ المشكلة، وش اللي نشتغل عليه، وش اللي يتغير بعدها.",
        noteEyebrow: "مهم تعرف",
        noteTitle: "نعرض ما يفيدك، من غير مبالغة",
        noteDescription:
          "مو كل مشروع مناسب للنشر باسمه، لكن نحرص إن الصورة تكون واضحة بما يكفي عشان تعرف إذا وضعك قريب من هذه الحالات.",
      },
      finalCta: {
        eyebrow: "جاهز نبدأ؟",
        title: "إذا واضح لك إن الشغل يحتاج ترتيب أفضل، نراجع الوضع معك من هنا.",
        description:
          "سواء كانت البداية من الموقع، أو المتابعة، أو الحجز، أو نظام داخلي، نحدد معك أقرب خطوة من غير تعقيد ولا لف ودوران.",
        supportingLine: "نراجع الوضع، نحدد البداية، ثم ننفذ على قد الحاجة.",
      },
    },
    services: {
      eyebrow: "الخدمات",
      title: "كل خدمة هنا تعالج مشكلة واضحة في الشغل.",
      description:
        "أحياناً المشكلة في الموقع. وأحياناً في المتابعة اليومية. وأحياناً في الربط بين الأنظمة أو في أداة داخلية ما عاد يكفي بديلها الجاهز. هنا يبان الفرق بين كل خدمة والثانية.",
      supportingLine:
        "إذا عارف وين المشكلة ابدأ منها. وإذا الصورة لسه مو مكتملة، الوصف تحت يساعدك تختار الاتجاه الأقرب.",
      highlightsLabel: "مجالات العمل",
      highlights: [
        "مواقع وحجوزات تخدم الانطباع الأول وتدعم التواصل",
        "أتمتة وترتيب للمتابعة يخفف التكرار على الفريق",
        "أنظمة وأدوات داخلية تعطي متابعة أفضل للشغل اليومي",
      ],
      heroSecondaryAction: "استعرض الخدمات",
      intro: {
        eyebrow: "كيف تختار الخدمة",
        title:
          "ابدأ من الجزء اللي مأثر على الشركة اليوم.",
        description:
          "بعض الشركات تحتاج موقع أقوى. وبعضها تحتاج متابعة أهدأ بين الفريق. وبعضها تحتاج ربطاً أعمق بين الأنظمة أو أداة داخلية تمسك الشغل من الوسط. المهم نبدأ من المكان الصح.",
        pointsLabel: "غالباً نرتب",
        points: [
          "رحلة العميل من أول زيارة أو اتصال إلى خطوة التواصل",
          "المتابعة الداخلية بين الاستفسار والتنفيذ والتحديثات",
          "الأدوات والأنظمة اللي يعتمد عليها الفريق يومياً",
        ],
      },
      catalog: {
        eyebrow: "الخدمات",
        title: "ابدأ بالخدمة الأقرب إلى المشكلة الحالية.",
        description:
          "كل خدمة تحت لها استخدام مختلف، والفرق بينها واضح إذا ربطتها بنوع المشكلة اللي عندكم اليوم.",
      },
      grouping: {
        eyebrow: "كيف ترتبط الخدمات",
        title: "كل خدمة ممكن تبدأ لحالها، لكنها بالنهاية تخدم صورة واحدة.",
        description:
          "بعض المشاريع تبدأ من الموقع. وبعضها من المتابعة. وبعضها من الأنظمة الداخلية. لكن النتيجة النهائية المفروض تكون شركة تمشي بشكل أرتب من أولها لآخرها.",
        items: [
          {
            title: "الأنظمة المواجهة للعميل",
            description:
              "للشركات اللي تحتاج حضوراً أفضل ومساراً أوضح للاستفسار أو الحجز.",
            services: ["websites", "booking-workflows"],
          },
          {
            title: "أتمتة المتابعة اليومية",
            description:
              "للفرق اللي عندها متابعة يومية متكررة وما زال جزء كبير منها يمشي يدوياً.",
            services: ["automation", "workflow-systems-automation"],
          },
          {
            title: "إدارة العمل اليومي",
            description:
              "للشركات اللي تحتاج متابعة أفضل للأصول، أو الطلبات، أو التقارير، أو الشغل الداخلي اليومي.",
            services: ["facility-maintenance-management", "business-systems"],
          },
          {
            title: "البنية الرقمية",
            description:
              "للشركات اللي تحتاج إن الموقع، وسير العمل، والأنظمة الداخلية يشتغلون كقاعدة واحدة.",
            services: ["websites", "automation", "business-systems"],
          },
        ],
      },
      labels: {
        serviceBadge: "الخدمة",
        serviceAction: "تفاصيل الخدمة",
        serviceSupportLabel: "تفيدك في",
        bestWhenLabel: "مناسبة لك إذا",
        groupServicesLabel: "قد يهمك أيضاً",
      },
      detail: {
        heroPanelLabel: "بعد التنفيذ",
        heroSecondaryAction: "كل الخدمات",
        overview: {
          eyebrow: "كيف تفيدك؟",
          title: "هذه الخدمة تحل جزء محدد لما يبدأ يبطّئ الشغل.",
          description:
            "هنا نوضح بشكل مباشر وين تفيدك هذه الخدمة، وليش تكون هي البداية الصح في هذا النوع من الحالات.",
          capabilitiesLabel: "داخل الخدمة",
        },
        problems: {
          eyebrow: "متى تحتاجها؟",
          title: "غالباً تعرف إن الوقت مناسب من هذي العلامات.",
          description:
            "إذا كانت هذه النقاط تتكرر عندكم، فغالباً هذه الخدمة تستحق النظر.",
        },
        deliverables: {
          eyebrow: "ماذا يشمل العمل؟",
          title: "من البداية يكون واضح وش بيشمله العمل، ووش المفترض يفرق بعده.",
          description:
            "شكل التنفيذ يختلف من خدمة لثانية، لكن البداية دائماً تكون بنطاق واضح ونتيجة مفهومة للفريق.",
          capabilitiesLabel: "داخل نطاق العمل",
          outcomesLabel: "بعد التنفيذ",
        },
        audience: {
          eyebrow: "تناسب مين؟",
          title: "غالباً تفيد هذا النوع من الشركات أكثر.",
          description:
            "إذا كان وضع الشركة قريب من هذا الوصف، فهذه غالباً البداية الأنسب.",
        },
        process: {
          eyebrow: "كيف نشتغل؟",
          title: "نراجع الوضع، نحدد البداية، ثم ننفذ على قد الحاجة.",
          description:
            "الخطوات الرئيسية ثابتة، لكن التفاصيل تتفصل حسب الخدمة ووضع الشركة.",
          steps: [
            {
              step: "01",
              title: "نفهم الوضع الحالي",
              description:
                "نراجع طريقة الشغل، والأدوات الحالية، والمشكلة اللي قاعدة تسبب الضغط اليومي.",
            },
            {
              step: "02",
              title: "نحدد البداية المناسبة",
              description:
                "نحدد وش يدخل في الشغل الآن، ووش ممكن يتأجل، ووش ما يحتاج نبالغ فيه من البداية.",
            },
            {
              step: "03",
              title: "ننّفذ بشكل مرتب",
              description:
                "نبني الحل بتسلسل واضح وبطريقة عملية تخدم الاستخدام اليومي، مو مجرد العرض.",
            },
            {
              step: "04",
              title: "نراجع بعد الإطلاق",
              description:
                "بعد ما يبدأ الاستخدام الفعلي، نضبط اللي يحتاج تحسين في الوضوح والمتابعة والثبات.",
            },
          ],
        },
        faq: {
          eyebrow: "أسئلة تتكرر",
          title: "هذه أكثر الأسئلة اللي تجينا قبل البداية.",
          description:
            "الإجابة الدقيقة تعتمد على وضع الشركة، لكن هذه أكثر النقاط اللي تحتاج توضيح من البداية.",
        },
        finalCta: {
          eyebrow: "الخطوة اللي بعدها",
          title: "إذا هذه الخدمة قريبة من احتياجك، خلنا نراجعها معك بشكل مباشر.",
          description:
            "نوضح لك إذا كانت هذه البداية الصح، أو إذا الأفضل نربطها بخدمة ثانية من البداية.",
          supportingLine: "نبدأ من الحاجة الفعلية، وبعدها تتضح الخطوة التالية.",
          secondaryAction: "عرض كل الخدمات",
        },
      },
      finalCta: {
        eyebrow: "الخطوة اللي بعدها",
        title:
          "إذا واضح لك إن الشركة تحتاج ترتيب أفضل، نبدأ من الخدمة الأقرب للمشكلة الحالية.",
        description:
          "نراجع معك نوع الاحتياج، ونحدد هل البداية خدمة واحدة أو أكثر من خدمة تمشي مع بعض من البداية.",
        supportingLine: "بداية واضحة، ونطاق محسوب، وتنفيذ عملي.",
        secondaryAction: "أرسل استفسارك",
      },
      items: {
        automation: {
          title: "حلول الأتمتة",
          summary:
            "أتمتة عملية تخفف الأعمال المتكررة وتخلي الخطوات تمشي بدون متابعة يومية مرهقة.",
          bestWhen:
            "مناسبة لك إذا كان جزء من الشغل اليومي ما زال ماشي على التذكير والمتابعة اليدوية.",
          heroSupportingLine:
            "تفيد الشركات اللي وقت فريقها يضيع بين متابعة، ونسخ بيانات، وتذكيرات، وخطوات لازم تتكرر كل يوم.",
          intro:
            "هذه الخدمة ما تعني بناء نظام جديد من الصفر. الفكرة أبسط: نأخذ الخطوات المتكررة داخل الشغل اليومي ونخليها تمشي تلقائياً وقت الحاجة. الاستفسارات، والمتابعة، والموافقات، والتحديثات، والتنبيهات الداخلية كلها تدخل ضمن هذا النوع من الشغل.",
          capabilities: [
            "أتمتة للمتابعة والتذكير والاعتمادات داخل نفس سير العمل",
            "تنبيهات وتسليمات داخلية تقلل ضياع الخطوات بين الفريق",
            "طبقة أتمتة خفيفة فوق الأدوات اللي تستخدمونها حالياً",
          ],
          outcomes: [
            "حمل إداري أقل على الفريق",
            "سير عمل يومي أكثر ثباتاً",
            "معرفة أوضح وين وصل الشغل",
          ],
          problems: [
            {
              title: "إدارة يدوية متكررة",
              description:
                "يضيع وقت الفريق في نقل البيانات ومتابعة التحديثات وتكرار خطوات روتينية المفروض تمشي تلقائياً في الخلفية.",
            },
            {
              title: "تسليم غير متسق بين المراحل",
              description:
                "يتعطل الشغل بين الاستفسار والتنفيذ والمتابعة لأن الخطوات الأساسية ما تنتقل بشكل واضح بين الفريق أو الأنظمة.",
            },
            {
              title: "غياب حالة تشغيلية واضحة",
              description:
                "ما فيه صورة واضحة تبين وش الخطوة الجاية، وش اللي تأخر، ومن المسؤول عنه الآن.",
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
              title: "إدارات تبغى متابعة أوضح من غير تعقيد",
              description:
                "مناسبة للشركات اللي تبغى تقلل الخطوات الفائتة وتخفف الضغط اليومي من غير ما تدخل في مشروع أكبر من الحاجة.",
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
                "حلول الأتمتة تناسب عادة تحسين الأعمال المتكررة داخل التشغيل اليومي القائم. أما عندما تكون المشكلة بين عدة أنظمة، أو تحتاج العملية إلى ربط أعمق ومنطق أكثر تعقيداً، فعندها تكون أتمتة سير العمل والأنظمة هي الأنسب.",
            },
            {
              question: "هل الأتمتة ممكن تعقّد الشغل؟",
              answer:
                "لا. الهدف هو العكس: عملية أوضح واعتماد أقل على الخطوات اليدوية ووضوح أكبر حول ما الذي يجب أن يحدث ومتى.",
            },
          ],
          processTitle: "نبدأ من أكثر خطوة تتكرر، ثم نحوّلها لمسار أهدأ وأوضح.",
          processDescription:
            "نبدأ من أكثر جزء يستهلك وقت الفريق حالياً، ثم نبنيه كمسار أوضح وأسهل في المتابعة.",
          processSteps: [
            {
              step: "01",
              title: "رسم سير العمل المتكرر",
              description:
                "نحدد وين يضيع وقت الفريق بين المتابعة، ونسخ البيانات، والتذكيرات، والتحقق اليدوي داخل الشغل الحالي.",
            },
            {
              step: "02",
              title: "تحديد منطق الأتمتة",
              description:
                "نحدد وش المفروض يتحرك تلقائياً، ووش يحتاج موافقة أو مراجعة بشرية، ووش لازم يظل تحت نظر الفريق.",
            },
            {
              step: "03",
              title: "التنفيذ حول الأدوات الفعلية",
              description:
                "نبني الأتمتة حول الأنظمة اللي يعتمد عليها الشغل حالياً قدر الإمكان، بدل ما نفرض تغييراً ما له داعي.",
            },
            {
              step: "04",
              title: "نضبط الاستثناءات",
              description:
                "نضبط التنبيهات والاستثناءات ووضوح الحالة بعد ما يدخل المسار في الاستخدام اليومي.",
            },
          ],
          finalCta: {
            title: "إذا المتابعة اليومية صارت تستهلك الفريق، فهذه غالباً أول خدمة تستحق النظر.",
            description:
              "نراجع معك الخطوات المتكررة ونحدد وش اللي يستحق يتحرك تلقائياً، بحيث يخف الحمل على الفريق ويصير الشغل أهدأ.",
            supportingLine: "ابدأ من التكرار اللي يتعب الفريق، مو من مشروع أكبر من الحاجة.",
          },
        },
        websites: {
          title: "المواقع الإلكترونية",
          summary:
            "مواقع احترافية تشرح الخدمة بشكل واضح، وتعطي انطباعاً أقوى، وتدفع الزائر المناسب إلى التواصل.",
          bestWhen:
            "مناسبة لك إذا كانت الشركة ممتازة في الواقع لكن الموقع ما يعطي هذا الانطباع ولا يوجه الزائر بالشكل الصحيح.",
          heroSupportingLine:
            "تفيد الشركات اللي تحتاج حضوراً رقمياً أقوى، ورسالة أوضح، وموقعاً يخدم التواصل بشكل أفضل.",
          intro:
            "في Benyah، الموقع مو مجرد واجهة شكلية. هو جزء أساسي من طريقة تقديم الشركة لنفسها. المطلوب أنه يعكس مستوى الشغل، ويشرح الخدمة بشكل واضح، ويقود الزائر المناسب إلى خطوة تواصل مفهومة وسهلة.",
          capabilities: [
            "ترتيب صفحات يخدم الرسالة والخدمة",
            "بناء متجاوب وتسلسل محتوى واضح",
            "مسار تواصل واضح ونقاط تحويل مدروسة",
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
                "الزائر ما يفهم بسرعة وش تقدم الشركة، ولمين تناسب، وليش المفروض يتواصل معها.",
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
                "مناسبة خصوصاً إذا كان قرار العميل يعتمد على الانطباع الأول، والمصداقية، ووضوح العرض.",
            },
            {
              title: "الأعمال التي تجاوزت موقعاً تعريفياً بسيطاً",
              description:
                "مفيدة عندما يكون النشاط قد تطور أو أعاد تموضعه أو تجاوزت قدراته القصة التي يرويها موقعه الحالي.",
            },
            {
              title: "الفرق اللي تبغى الموقع يخدم الشغل اليومي",
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
                "كلاهما. القرار يعتمد على ما إذا كان الموقع الحالي يقدر يتحسن بترتيب الصفحات والرسالة، أو إن الشركة تحتاج بناء جديد من البداية.",
            },
          ],
          finalCta: {
            title: "إذا كان الموقع الحالي يضعف صورة النشاط، فالأفضل معالجته بالشكل الصحيح.",
            description:
              "نراجع معك التموضع، وترتيب الصفحات، ومسار التواصل، بحيث يصير الموقع داعماً للشركة فعلاً مو مجرد واجهة موجودة.",
            supportingLine: "الموقع الأفضل مو بس أجمل، بل أوضح في رسالته وخطوته التالية.",
          },
        },
        "booking-workflows": {
          title: "تدفقات الحجز والمكالمات الذكية",
          summary:
            "تنظيم الحجز والمكالمات الواردة بحيث المواعيد، والتأكيدات، والتذكيرات، وجمع المعلومات تمشي بسلاسة أكبر.",
          bestWhen:
            "مناسبة لك إذا كانت الجدولة أو المكالمات أو التذكيرات تأثر على البيع أو الجاهزية أو جودة التنفيذ.",
          heroSupportingLine:
            "تفيد الأعمال اللي جودة الحجز والمكالمات فيها تأثر مباشرة على التحويل، وجاهزية الفريق، والطاقة اليومية.",
          intro:
            "هذه الخدمة ترتب الرحلة من أول اتصال أو طلب حجز إلى موعد واضح واستعداد داخلي جاهز. تشمل تنظيم المواعيد، والتأكيدات، والتذكيرات، وجمع المعلومات قبل التنفيذ، وتسليم التفاصيل للفريق، مع الاستفادة من المكالمات الذكية إذا كانت فعلاً تضيف قيمة.",
          capabilities: [
            "منطق الجدولة وقواعد الحجز والتأكيدات والتذكيرات",
            "جمع المعلومات قبل الموعد ومسارات تقليل عدم الحضور",
            "تسليم داخلي أوضح ودعم للمكالمات الذكية عند الحاجة",
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
              title: "الأعمال اللي تبغى تدخل المكالمات والحجوزات في الشغل بشكل مرتب",
              description:
                "الأفضل إذا كنت تحتاج إن المواعيد والمكالمات والمتابعة تدخل بشكل مرتب في جاهزية الخدمة وتخطيط الطاقة وسير الشغل اليومي.",
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
                "نعم، عندما يكون ذلك مفيداً عملياً. يمكن جمع التذكيرات والتأكيدات وخطوات الإدخال والإشعارات الداخلية ودعم المكالمات الذكية ضمن مسار واحد أكثر اتساقاً.",
            },
            {
              question: "هل هذه الخدمة مفيدة فقط للأعمال ذات الحجم الكبير؟",
              answer:
                "لا. حتى حجم الحجز المتوسط قد يسبب احتكاكاً حقيقياً عندما تكون العملية غير متسقة أو يدوية أو غير مرتبطة جيداً بالتنفيذ والاستعداد الداخلي.",
            },
          ],
          finalCta: {
            title: "إذا كان الحجز أو التعامل مع المكالمات يؤثر على البيع أو التنفيذ، فهذه من أكثر النقاط التي تستحق الترتيب.",
            description:
              "نرتب معك الطريق من أول تواصل إلى موعد مؤكد، ونضمن إن التفاصيل توصل للفريق بالشكل اللي يساعده يجهز بشكل أفضل.",
            supportingLine: "الفرق الحقيقي هنا يكون في تجربة أهدأ للعميل واستعداد أفضل داخل الفريق.",
          },
        },
        "facility-maintenance-management": {
          title: "حلول إدارة المرافق والصيانة",
          summary:
            "حلول ترتب طلبات الصيانة، وأوامر العمل، وسجلات الخدمة، ومتابعة الأصول والمتعهدين في مكان واضح.",
          bestWhen:
            "مناسبة لك إذا صارت الطلبات، والأصول، وأوامر العمل، وسجلات الخدمة أكبر من أنها تُدار عبر البريد والجداول والمكالمات.",
          heroSupportingLine:
            "تفيد الشركات الصغيرة والمتوسطة اللي عندها تشغيل مرافق أو فرق صيانة وتحتاج متابعة أقوى وتنظيماً أدق للعمل اليومي.",
          intro:
            "إذا كانت أعمال المرافق أو الصيانة تمشي بين اتصالات، ورسائل، وجداول، ومتابعات متفرقة، فهنا تبدأ المشكلة. هذه الخدمة ترتب الطلبات، والأوامر، وسجلات الخدمة، ومتابعة الأصول والمتعهدين داخل نظام واحد يسهل الرجوع له وإدارة العمل من خلاله.",
          capabilities: [
            "ترتيب بيانات الأصول، والمواقع، وسجلات الخدمة",
            "تنظيم أوامر العمل، والطلبات، ومتابعة المتعهدين",
            "لوحات متابعة وتقارير تساعد على مراقبة العمل اليومي",
          ],
          outcomes: [
            "متابعة أفضل لأعمال الصيانة والخدمة",
            "سجلات أوثق ورجوع أسهل للمعلومة",
            "تنسيق أنظف بين الفريق والمتعهدين",
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
                "مناسبة للفرق اللي تحتاج متابعة أفضل للطلبات، والأصول، وحالة الأعمال، وتنسيق المتعهدين.",
            },
            {
              title: "تشغيل المواقع والعقارات والخدمات الميدانية",
              description:
                "مفيدة عندما توجد مواقع متعددة أو أصول أو مزودو خدمة أو أطراف داخلية تحتاج إلى بنية أوضح حول أوامر العمل والسجلات والتنسيق اليومي.",
            },
            {
              title: "الأعمال التي تتجاوز الجداول والتتبع غير الرسمي",
              description:
                "تفيد أكثر إذا كانت أعمال الصيانة ما زالت تمشي على الجداول، أو البريد، أو طلبات غير مرتبة بشكل كافٍ.",
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
                "نعم. إذا احتاج الوضع ذلك، يمكن أن يشمل العمل أنظمة إدارة الصيانة المحوسبة (CMMS)، أو حلول إدارة المرافق (CAFM)، أو أدوات متابعة الأصول والمتعهدين، حسب ما يخدم الشغل فعلاً.",
            },
            {
              question: "هل يمكن أن نبدأ بالطلبات أو أوامر العمل ثم نتوسع؟",
              answer:
                "نعم. غالباً الأفضل نبدأ من الجزء الأكثر إرباكاً في الشغل اليومي، ثم نوسع الحل بعد ما تتضح الصورة.",
            },
          ],
          processTitle: "نرتب الطلبات والسجلات من البداية، ثم نبني عليها المتابعة اليومية.",
          processDescription:
            "غالباً نبدأ من أكثر جزء يسبب إرباكاً في العمل اليومي، ثم نبني عليه خطوة خطوة.",
          processSteps: [
            {
              step: "01",
              title: "نفهم طريقة العمل الحالية",
              description:
                "نراجع كيف تمشي الطلبات، والأصول، وأوامر العمل، وسجلات الخدمة، وتنسيق المتعهدين حالياً.",
            },
            {
              step: "02",
              title: "نرتب السجلات ومسار الطلب",
              description:
                "نرتب النظام حول الطلبات، والأصول، وحالات الأعمال، والتنسيق اللي يحتاجه الفريق فعلياً.",
            },
            {
              step: "03",
              title: "نبني المتابعة والتقارير",
              description:
                "نضبط النظام، ولوحات المتابعة، والتقارير، بحيث يصير الشغل أسهل في المتابعة اليومية.",
            },
            {
              step: "04",
              title: "نراجع الاستخدام اليومي",
              description:
                "نراجع وضوح الحالة والتقارير وسهولة الاستخدام اليومي، ونعدل اللي يحتاج يتحسن.",
            },
          ],
          finalCta: {
            title: "إذا كانت متابعة المرافق أو الصيانة متعبة ومشتتة، فترتيب هذا الجزء يفرق بسرعة.",
            description:
              "نراجع معك كيف تُدار الطلبات، والأصول، وأوامر العمل، ثم نبني الطريقة الأنسب لمتابعتها بشكل مرتب وواضح.",
            supportingLine: "ابدأ من أكثر نقطة تسبب ارتباكاً في العمل اليومي، ومنها نوسع إذا احتاج الوضع.",
          },
        },
        "workflow-systems-automation": {
          title: "أتمتة سير العمل والأنظمة",
          summary:
            "ربط بين الأنظمة لما تصير البيانات والخطوات موزعة على أكثر من أداة وتحتاج تمشي بثبات.",
          bestWhen:
            "مناسبة لك إذا كانت المشكلة مو داخل خطوة واحدة، بل بين أكثر من نظام يحتاج يشتغل مع الثاني بشكل مضبوط.",
          heroSupportingLine:
            "تفيد الشركات اللي عندها أكثر من أداة أو نظام، وصار الربط بينها أهم من مجرد أتمتة خطوة واحدة.",
          intro:
            "هذه الخدمة مخصصة للحالات اللي يكون التعطّل فيها بين الأنظمة نفسها. إذا كانت البيانات تنتقل يدوياً، أو تنكسر بين أداة وأخرى، أو يحتاج العمل منطق أعمق من الأتمتة البسيطة، فهنا ندخل لترتيب طبقة الربط بين الأنظمة.",
          capabilities: [
            "ربط بين النماذج، والأنظمة الداخلية، وباقي الأدوات المرتبطة بالعملية",
            "تنظيم حركة البيانات والإجراءات بين أكثر من نظام",
            "تكامل أعمق لما تكون الأتمتة البسيطة غير كافية",
          ],
          outcomes: [
            "ترابط أفضل بين الأنظمة",
            "تنفيذ أهدأ للعمليات الداخلية",
            "نقل يدوي أقل للبيانات والحالات",
          ],
          problems: [
            {
              title: "أدوات الأتمتة ما عادت تكفي",
              description:
                "تبدأ الأدوات الأبسط تتعثر لما يحتاج الشغل منطق أعمق أو ربط أقوى أو متابعة أدق للتنفيذ.",
            },
            {
              title: "البيانات لا تنتقل بثبات بين الأنظمة",
              description:
                "يتم نقل المعلومات يدوياً أو بشكل غير متسق بين الأنظمة، مما يسبب تكراراً وبيانات قديمة وأخطاء يمكن تجنبها.",
            },
            {
              title: "أنظمة متفرقة ومنطق هش مع ازدياد التعقيد",
              description:
                "يحتاج النشاط إلى أن تعمل أنظمته معاً، لكن الإعداد الحالي لا يدعم مستوى الربط أو منطق التنفيذ الذي تتطلبه العملية فعلياً بصورة موثوقة.",
            },
          ],
          audience: [
            {
              title: "الأعمال التي تعتمد على عدة أنظمة وأدوات داخلية",
              description:
                "مناسبة لما تكون النماذج، أو الأنظمة الداخلية، أو أدوات العمل كلها تدخل في نفس العملية وتحتاج ربطاً أعمق.",
            },
            {
              title: "الفرق التي تحتاج ربطاً أعمق بين الأنظمة",
              description:
                "مفيدة عندما يحتاج التدفق إلى منطق أدق وتكاملات أعمق بين الأنظمة المختلفة، لا مجرد أتمتة خطوة واحدة.",
            },
            {
              title: "المشغلون الذين يريدون أتمتة أعمق بدون حمل أنظمة كبيرة",
              description:
                "تفيد أكثر إذا كنت تحتاج ربطاً أقوى بين الأنظمة من غير ما تدخل في منصة ثقيلة أو مشروع أكبر من اللازم.",
            },
          ],
          faqs: [
            {
              question: "هل هذه الخدمة محصورة في n8n؟",
              answer:
                "لا. قد يكون n8n جزءاً من التنفيذ، لكن الخدمة لا تتمحور حول أداة بعينها. الأهم هو الوصول إلى تدفق موثوق يربط الأنظمة بالشكل المناسب.",
            },
            {
              question: "هل يمكن أن تعمل هذه الخدمة مع الأنظمة الحالية لدينا؟",
              answer:
                "غالباً نعم، إذا كانت الأنظمة الحالية تسمح بوسائل ربط مناسبة مثل الواجهات البرمجية أو webhooks أو الموصلات المتاحة.",
            },
            {
              question: "كيف تختلف هذه الخدمة عن حلول الأتمتة؟",
              answer:
                "حلول الأتمتة تركز غالباً على الأعمال المتكررة داخل التشغيل اليومي. أما أتمتة سير العمل والأنظمة فتركز على ما يحدث بين الأنظمة المختلفة عندما يحتاج النشاط إلى ربط أعمق ومنطق أدق وحركة بيانات أكثر موثوقية.",
            },
            {
              question: "متى تكون هذه الخدمة أنسب من أتمتة أبسط؟",
              answer:
                "عندما يحتاج التدفق إلى منطق أعمق، أو تكاملات أقوى، أو حركة أكثر موثوقية بين الأنظمة. الهدف ليس زيادة التعقيد، بل ترتيب ما يحتاج فعلاً إلى هذا المستوى من الربط.",
            },
          ],
          finalCta: {
            title: "إذا كان عندك أكثر من نظام لازم يشتغل كأنه مسار واحد، فهذه الخدمة غالباً هي الأنسب.",
            description:
              "نراجع معك كيف تتحرك البيانات والمنطق بين الأنظمة، ثم نبني طبقة الربط اللي تخلي العملية أكثر ثباتاً وأقل عرضة للتعطل.",
            supportingLine: "اضبط الربط بين الأنظمة أول، قبل ما تزيد الحلول اليدوية المؤقتة.",
          },
          processTitle: "هنا نرتب الربط بين الأنظمة بحيث تمشي البيانات بشكل ثابت وواضح.",
          processDescription:
            "التركيز هنا يكون على الأنظمة نفسها، وحركة البيانات بينها، ومدى ثباتها في الشغل اليومي.",
          processSteps: [
            {
              step: "01",
              title: "رسم الأنظمة وتدفق البيانات",
              description:
                "نراجع الأدوات المستخدمة، وكيف يفترض البيانات تتحرك بينها، وأين يحصل الانقطاع أو التكرار أو الخطأ.",
            },
            {
              step: "02",
              title: "نحدد منطق الربط",
              description:
                "نحدد منطق الربط، والتحويلات، والاستثناءات، والتفرعات، ونستخدم n8n أو webhooks أو الواجهات البرمجية لما تكون هي الطريقة المناسبة.",
            },
            {
              step: "03",
              title: "تنفيذ الربط بعناية",
              description:
                "نبني الربط بحيث تحديثات البيانات، والتسليم بين الأنظمة، والخطوات المحفزة تمشي بالترتيب الصحيح.",
            },
            {
              step: "04",
              title: "نراقب الثبات اليومي",
              description:
                "نراجع الأخطاء المحتملة، ونقوي الثبات، ونحسن المتابعة بحيث يبقى الربط مستقراً مع كثرة الاستخدام.",
            },
          ],
        },
        "business-systems": {
          title: "أنظمة الأعمال والأدوات الداخلية",
          summary:
            "أدوات داخلية ولوحات عمل مبنية على طريقة الشغل داخل الشركة، بدل القوالب العامة.",
          bestWhen:
            "مناسبة لك إذا كانت الشركة تحتاج أداة داخلية تمسك الشغل من الوسط، مو مجرد تحسين بسيط بين أدوات عامة.",
          heroSupportingLine:
            "تفيد الشركات اللي ما عاد يناسبها ترقيع الجداول، أو الأدوات العامة، أو الحلول المجمعة في قلب الشغل اليومي.",
          intro:
            "بعض الشركات ما عاد ينفع معها ترقيع الجداول والأدوات العامة. هنا يكون المطلوب أداة داخلية، أو لوحة متابعة، أو سجل واضح يمسك العملية من الوسط. هذه الخدمة تبني نظاماً داخلياً مناسباً لطريقة الشغل الفعلية داخل الشركة.",
          capabilities: [
            "لوحات تشغيل وأدوات إدارية مبنية حول عملية داخلية حقيقية",
            "سجلات وصلاحيات ومتابعة حسب الأدوار داخل الفريق",
            "تقارير ونماذج بيانات تدعم الإدارة اليومية بشكل أوضح",
          ],
          outcomes: [
            "متابعة داخلية أوضح",
            "اعتماد أقل على الجداول والحلول الالتفافية",
            "أداة داخلية تناسب طريقة الشغل الفعلية",
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
                "تتكرر نفس المعلومات في أكثر من مكان، وهذا يضعف التقارير والمتابعة والقرار اليومي.",
            },
            {
              title: "صورة ناقصة عن حالة الشغل",
              description:
                "ما تكون الصورة واضحة عند الإدارة لأن النظام الداخلي الحالي متفرق ولا يناسب طبيعة الشغل.",
            },
          ],
          audience: [
            {
              title: "الأعمال ذات التدفقات الداخلية المتخصصة",
              description:
                "مناسبة إذا كانت طريقة العمل عندكم خاصة لدرجة إن البرامج العامة تفرض تنازلات كل يوم.",
            },
            {
              title: "الفرق التي تعتمد على أدوات مجمعة",
              description:
                "مفيدة عندما ما زالت العمليات الأساسية تعتمد على الجداول أو البريد المشترك أو عدة تطبيقات منفصلة لإبقاء التشغيل قائماً.",
            },
            {
              title: "الإدارات اللي تحتاج متابعة داخلية أقوى",
              description:
                "تفيد الإدارات اللي تحتاج متابعة أوضح وصورة أدق وأداة داخلية مبنية حول العمل الحقيقي داخل الشركة.",
            },
          ],
          faqs: [
            {
              question: "متى يكون بناء أداة داخلية مخصصاً قراراً مبرراً؟",
              answer:
                "غالباً عندما توجد عملية أساسية أو حاجة تقريرية أو تدفق داخلي لا تخدمه البرامج العامة بشكل جيد ويستمر في إحداث احتكاك تشغيلي.",
            },
            {
              question: "هل يجب أن يتحول هذا إلى مشروع برمجي كبير؟",
              answer:
                "لا. الهدف غالباً هو نظام داخلي مركز حول حاجة تشغيلية واضحة، لا تعقيد برمجي غير ضروري.",
            },
            {
              question: "كيف تختلف هذه الخدمة عن الأتمتة؟",
              answer:
                "الأتمتة تحسن انتقال الخطوات بين المراحل. أما أنظمة الأعمال والأدوات الداخلية فتناسب الحالات اللي يحتاج فيها النشاط إلى نظام داخلي أو لوحة متابعة أو سجل يكون هو مركز الشغل نفسه.",
            },
            {
              question: "هل يمكن أن يعمل هذا بجانب البرامج التي نستخدمها الآن؟",
              answer:
                "نعم. في كثير من الحالات يكون الأفضل إضافة الطبقة الداخلية المناسبة فوق المنظومة الحالية بدلاً من استبدال كل شيء دفعة واحدة.",
            },
          ],
          finalCta: {
            title: "إذا الشركة تحتاج أداة داخلية تمسك الشغل بشكل أفضل، فهنا تكون البداية الصحيحة.",
            description:
              "نراجع معك السجلات، والصلاحيات، ولوحات المتابعة، والأداة الداخلية اللي يحتاجها الفريق فعلاً بدل الاستمرار على حلول عامة ما تخدم الشغل بالشكل المطلوب.",
            supportingLine: "الأداة الداخلية الصح تخفف الارتباك، مو تضيف برنامج جديد على القائمة.",
          },
          processTitle: "نبني الأداة الداخلية حول طريقة الشغل الفعلية داخل الشركة.",
          processDescription:
            "الهدف هنا مو بناء شيء كبير، بل بناء أداة داخلية مركزة تعطي الفريق متابعة أفضل وشغل يومي أهدأ.",
          processSteps: [
            {
              step: "01",
              title: "فهم التدفق الداخلي",
              description:
                "نراجع المستخدمين، والسجلات، والاعتمادات، والتقارير المطلوبة، والحلول المؤقتة اللي يعتمد عليها الفريق حالياً.",
            },
            {
              step: "02",
              title: "نرتب البيانات والصلاحيات",
              description:
                "نرتب الأداة الداخلية حول البيانات، والمتابعة، والصلاحيات، والإجراءات اللي يحتاجها الفريق فعلاً.",
            },
            {
              step: "03",
              title: "بناء الأداة الداخلية بوضوح",
              description:
                "نبني لوحة التشغيل أو البوابة أو مساحة العمل الداخلية بشكل واضح وسهل على الفريق في استخدامه اليومي.",
            },
            {
              step: "04",
              title: "نحسن المتابعة والتقارير",
              description:
                "بعد الإطلاق، نراجع سهولة المتابعة، ووضوح التقارير، وملاءمة الأداة للشغل اليومي.",
            },
          ],
        },
      },
    },
    about: {
      eyebrow: "عن Benyah",
      title: "Benyah تبني الأساس اللي يخلي الشغل يمشي بشكل أوضح.",
      description:
        "نرتب المواقع، وسير العمل، والأنظمة الداخلية للشركات اللي وصلت لمرحلة تحتاج فيها طريقة عمل أهدأ وأوضح.",
      supportingLine:
        "نشتغل على اللي يشوفه العميل، وعلى اللي يمسكه الفريق كل يوم، بنفس الجدية.",
      highlightsLabel: "ليش Benyah",
      highlights: [
        "نفهم الشغل قبل اختيار الأداة",
        "نربط الأجزاء بدل ما نضيف حلول مؤقتة",
        "تنفيذ راقٍ لكن عملي",
      ],
      overview: {
        eyebrow: "وش دور Benyah؟",
        title: "نساعد الشركة ترتب الصورة من أول تواصل إلى داخل الفريق.",
        description:
          "مع الوقت يكبر الشغل، وتبدأ التفاصيل تتفكك: موقع قديم، متابعة مرهقة، أدوات ما تتكلم مع بعض، أو نظام داخلي ما عاد يكفي. هنا يجي دور Benyah.",
        body:
          "يشمل شغل Benyah المواقع، والأتمتة، وتدفقات الحجز والمكالمات، وحلول إدارة المرافق والصيانة، وربط الأنظمة، والأدوات الداخلية. الفكرة مو كثرة التقنية، الفكرة إن الشركة تشتغل بصورة أهدأ، ورسالتها تكون أوضح، ومتابعتها الداخلية تكون أنظف.",
        asideEyebrow: "معنى الاسم",
        asideTitle: "اسم Benyah جاي من معنى الأساس والبناء الصح.",
        asideDescription:
          "وهذا بالضبط يوجّه طريقة العمل: نرتب الأساس اللي تنبني عليه الواجهة، والمتابعة، والأنظمة الداخلية، بحيث كل شيء يخدم الثاني.",
        asidePoints: [
          "ننظر للواجهة والشغل الداخلي كصورة واحدة",
          "نبني على حاجة فعلية مو على قائمة مزايا",
          "التنفيذ لازم يعيش مع الفريق يومياً",
        ],
      },
      beliefs: {
        eyebrow: "طريقتنا في الشغل",
        title: "كل ما كانت الصورة أبسط وأوضح، صار الشغل أسهل وأثبت.",
        description:
          "في Benyah فيه مبادئ واضحة نمشي عليها عشان يبقى العمل مفيد فعلاً، مو مجرد شكل أو كلام جميل.",
        items: [
          {
            title: "الوضوح أهم من كثرة الطبقات",
            description:
              "أي صفحة، أو سير عمل، أو أداة داخلية لازم تسهل الفهم والمتابعة، مو تزيد التعقيد.",
          },
          {
            title: "الربط أهم من الترقيع",
            description:
              "أفضل نتيجة تجي لما نربط الأجزاء الصح ببعض، بدل ما نضيف حلول سريعة فوق أساس يحتاج ترتيب.",
          },
          {
            title: "الشغل العملي أهم من الكلام الرائج",
            description:
              "اللي يهمنا هو التنفيذ اللي يخدم الشركة فعلاً، والنطاق الواضح، والحل اللي يعيش مع الاستخدام اليومي.",
          },
          {
            title: "الأساس الصح يتحمل النمو",
            description:
              "الحل الجيد ما يحل مشكلة اليوم فقط، بل يعطي الشركة قاعدة أفضل للمرحلة اللي بعدها.",
          },
        ],
      },
      process: {
        eyebrow: "كيف نشتغل؟",
        title: "نراجع الوضع، نحدد البداية، ثم ننفذ بشكل مرتب.",
        description:
          "طريقة الشغل عندنا واضحة: نفهم الواقع أول، ثم نحدد الحل المناسب، ثم ننفذ بدون ضجيج ولا تعقيد ما له داعي.",
        steps: [
            {
              step: "01",
            title: "نبدأ بفهم الوضع",
            description:
              "نراجع الوضع الحالي، والجزء اللي يسبب الضغط، وأين تحتاج الشركة بداية مختلفة.",
            },
            {
              step: "02",
            title: "نحدد الحل المناسب",
            description:
              "نحدد هل البداية من الموقع، أو المتابعة، أو الأتمتة، أو نظام داخلي، حسب احتياج الشغل مو حسب الافتراضات.",
            },
            {
              step: "03",
            title: "ننّفذ بانضباط",
            description:
              "ننّفذ بنطاق واضح وتسلسل مدروس، وبتركيز على حلول عملية ومنطقية تجارياً.",
            },
            {
              step: "04",
            title: "نراجع بعد الإطلاق",
            description:
              "بعد ما يدخل الشغل في الاستخدام، نراجع اللي يحتاج ضبط في المتابعة، والوضوح، وسهولة الاستخدام اليومي.",
            },
          ],
      },
      differentiators: {
        eyebrow: "ليش نختلف؟",
        title: "شغل احترافي، لكن قريب من واقع الشركة مو منفصل عنه.",
        description:
          "Benyah ما تشتغل بمنطق الحل الواحد للجميع. القيمة هنا في فهم الاحتياج، ثم تنفيذه بالطريقة اللي تخدم الشركة فعلاً.",
        items: [
          {
            title: "نظرة على الصورة كاملة",
            description:
              "نشتغل على الحضور الرقمي، وسير العمل، والشغل الداخلي بحيث الشركة تشتغل كمنظومة واحدة.",
          },
          {
            title: "قرار تجاري واضح",
            description:
              "ما نضيف طبقات أو برامج زيادة إذا ما كانت تخدم الحاجة. المهم نحل المشكلة الصح بالطريقة الصح.",
          },
          {
            title: "مبني للاستخدام اليومي",
            description:
              "أي شيء نبنيه لازم يخدم الفريق في يومه، مو يكون شكله ممتاز فقط وقت العرض.",
          },
        ],
      },
      audience: {
        eyebrow: "مين تناسبه Benyah؟",
        title: "Benyah تناسب الشركات اللي تحتاج ضبط للشغل، مو مجرد أداة إضافية.",
        description:
          "غالباً نكون مناسبين أكثر للشركات اللي تجاوزت الأدوات المرتجلة، أو صار فيها ضغط واضح بين الواجهة، والمتابعة، والشغل الداخلي.",
        items: [
          {
            title: "الشركات الخدمية الصغيرة ذات التعقيد التشغيلي",
            description:
              "خصوصاً عندما تحتاج الاستفسارات والحجز والتنفيذ والمتابعة إلى أن تعمل معاً بشكل أنظف.",
          },
          {
            title: "الفرق المعتمدة على المرافق أو التشغيل",
            description:
              "لما تكون أوامر العمل، والمتابعة الداخلية، وربط الأنظمة جزءاً أساسياً من الشغل اليومي.",
          },
          {
            title: "الأعمال النامية التي تستبدل الأنظمة المجمعة",
            description:
              "عندما تبدأ الجداول والأدوات المنفصلة والحلول اليدوية في إبطاء النشاط أو إضعاف وضوحه.",
          },
        ],
      },
      finalCta: {
        eyebrow: "الخطوة اللي بعدها",
        title: "إذا واضح لك إن الشركة تحتاج ترتيب أفضل، نقدر نبدأ من هنا.",
        description:
          "نراجع معك هل البداية الأنسب من الموقع، أو سير العمل، أو الأتمتة، أو أداة داخلية، ثم نرتب الخطوة اللي بعدها بشكل واضح.",
        supportingLine: "بداية مفهومة، وتنفيذ مرتب، وشغل يعيش مع الشركة.",
        secondaryAction: "أرسل استفسارك",
      },
    },
    caseStudies: {
      eyebrow: "نماذج أعمال",
      title: "هذي نوعية الأعمال اللي نرتبها عادة.",
      description:
        "أمثلة مختصرة تبين كيف تبدأ المشكلة، وش ينعمل فيها، ووش يختلف بعدها.",
      supportingLine:
        "من غير أسماء ولا مبالغة، لكن بصورة تكفيك تعرف إذا وضعك قريب.",
      highlightsLabel: "اللي بتشوفه هنا",
      highlights: [
        "كيف تبدأ المشكلة",
        "وش انعمل فيها",
        "وش اختلف بعدها",
      ],
      intro: {
        eyebrow: "الفكرة",
        title: "بعض الأعمال ما يناسب نعرضها باسمها، لكن نقدر نوريك نوع المشكلة وطريقة حلها.",
        description:
          "بدل ما نكتفي بكلام عام، نعرض لك الحالة نفسها: كيف بدأت، وش اللي تعدّل فيها، وكيف أخذ المشروع شكله.",
        asideEyebrow: "وش تستفيد؟",
        asideTitle: "تعرف بسرعة إذا عندك نفس النوع من الاحتياج.",
        asideDescription:
          "الهدف إنك تطلع بصورة عملية عن نوع الشغل اللي نرتبه عادة، بدون قصص مصطنعة ولا كلام نظري.",
        asidePoints: [
          "كل مثال مبني على وضع شغل حقيقي",
          "ما فيه أسماء مختلقة ولا أرقام مفبركة",
          "إذا احتجت التفاصيل الأوسع نناقشها معك مباشرة",
        ],
      },
      startingPoints: {
        eyebrow: "من وين تبدأ المشكلة؟",
        title: "غالباً العملاء يجون من هذي الحالات.",
        description:
          "قبل ما يبدأ المشروع يكون فيه شيء واضح معطّل الشغل أو مضعّف النتيجة. وهذه أكثر الحالات اللي نشوفها.",
        items: [
          {
            title: "نشاط جيد بواجهة رقمية أضعف من مستواه",
            description:
              "الخدمة جيدة، لكن الموقع أو مسار الاستفسار أو تجربة الحجز لا تعكس مستوى النشاط ولا تبني الثقة المطلوبة.",
          },
          {
            title: "تشغيل يعتمد أكثر من اللازم على التنسيق اليدوي",
            description:
              "الخطوات المهمة تتم بالفعل، لكنها ما تزال تعتمد على البريد والجداول والتذكر والمتابعة اليدوية من الفريق.",
          },
          {
            title: "أدوات موجودة لكن من دون رابط واضح بينها",
            description:
              "يستخدم النشاط نماذج أو نظام إدارة عملاء أو منصة حجز أو أدوات داخلية، لكن التسليم بينها غير موثوق أو مكرر أو صعب المتابعة.",
          },
        ],
      },
      catalog: {
        eyebrow: "نماذج فعلية",
        title: "هذه أمثلة تعطيك صورة عملية عن نوع الشغل.",
        description:
          "كل مثال يوضح بداية الوضع، والشغل اللي انعمل، والفرق اللي ظهر بعدها، وطبيعة المشروع المعتادة.",
      },
      labels: {
        summaryLabel: "بداية الوضع",
        outcomeLabel: "بعد التنفيذ",
        addressedLabel: "الشغل اللي انعمل",
        scopeLabel: "شكل المشروع",
      },
      items: [
        {
          title: "إعداد لتدفقات الحجز والمكالمات الذكية",
          sector: "الحجز والمكالمات",
          summary:
            "نشاط خدمي كانت فيه المواعيد والمكالمات والتذكيرات والتحضير الداخلي تسير عبر قنوات متفرقة من دون تسليم واضح بين الخطوات.",
          addressed:
            "قواعد الحجز والتأكيدات والتذكيرات وخطوات الإدخال والتسليم من الموعد أو المكالمة إلى التنفيذ، مع دعم للمكالمات الذكية عند الحاجة.",
          outcome:
            "تجربة حجز أوضح، وخطوات فائتة أقل، واستعداد أفضل قبل تقديم الخدمة.",
          scope:
            "غالباً مشروع مركز حول الحجز والمكالمات والاستعداد الداخلي.",
        },
        {
          title: "نظام أتمتة وتسليم بين المراحل",
          sector: "أتمتة سير العمل",
          summary:
            "نشاط كان يعتمد على المتابعة اليدوية المتكررة حتى ينتقل العمل من الاستفسار إلى التنفيذ والتحديثات الداخلية.",
          addressed:
            "الأعمال الإدارية المتكررة، والتسليم غير المتسق، ومنطق الإشعارات، والتنسيق المتكرر بين الأنظمة أو أعضاء الفريق.",
          outcome:
            "تنسيق يدوي أقل، وتدفق أثبت، وصورة أوضح للي ينتظر أو يتعطل.",
          scope:
            "غالباً تحسين لسير العمل أو بناء أتمتة متعددة المراحل.",
        },
        {
          title: "موقع احترافي لتوليد الفرص",
          sector: "المواقع الإلكترونية",
          summary:
            "نشاط موثوق في الواقع، لكن موقعه لم يعد يشرح العرض جيداً ولا يقود الزائر المناسب إلى خطوة تواصل واضحة.",
          addressed:
            "التموضع غير الواضح، ومسار الصفحات الضعيف، وطريقة التواصل اللي ما تدعم استفساراً جاداً.",
          outcome:
            "مصداقية أقوى، وشرح أوضح للخدمات، واستفسارات أفضل جودة.",
          scope:
            "غالباً إعادة بناء موقع بترتيب أوضح ورسالة أقوى.",
        },
        {
          title: "إعداد لإدارة المرافق والصيانة",
          sector: "إدارة المرافق والصيانة",
          summary:
            "تشغيل مرافق أو صيانة كان يعتمد على طلبات متفرقة وسجلات غير مكتملة ورؤية محدودة للأصول وأوامر العمل.",
          addressed:
            "تدفق الطلبات، وهيكلة الأصول، وحالات أوامر العمل، وسجلات الخدمة، ورؤية التقارير، وتنسيق المتعهدين.",
          outcome:
            "متابعة أفضل، وسجلات أنظف، وصورة أوضح عبر أعمال المرافق والصيانة.",
          scope:
            "غالباً إعداد نظام مع تحسينات تشغيلية على مراحل.",
        },
        {
          title: "أداة داخلية أو لوحة تشغيل",
          sector: "أنظمة الأعمال",
          summary:
            "نشاط كانت عملياته الداخلية الأساسية موزعة بين جداول وأدوات مجمعة لا تعطي الإدارة رؤية واضحة للحالة أو الحمولة.",
          addressed:
            "الجداول المجمعة، وتكرار البيانات، وضعف الإشراف، والعمليات الداخلية التي لا تخدمها الأدوات الجاهزة جيداً.",
          outcome:
            "تدفق داخلي أنظف، ورؤية أفضل، وكفاءة إدارية أعلى.",
          scope:
            "غالباً مشروع مركز حول عملية داخلية عالية الاحتكاك أو لوحة تشغيل أساسية.",
        },
        {
          title: "بناء لأتمتة سير العمل والأنظمة",
          sector: "أتمتة سير العمل والأنظمة",
          summary:
            "نشاط كانت بياناته وخطواته تنتقل بين عدة أنظمة بصورة هشة أو يدوية، وأصبح يحتاج ربطاً أعمق من الأتمتة البسيطة.",
          addressed:
            "منطق الربط بين الأنظمة، وحركة البيانات، والتحديثات، والاستثناءات، وطبقة التكامل الأعمق التي تحفظ التدفق من التعطل.",
          outcome:
            "أنظمة أكثر ترابطاً، وتدفق بيانات أنظف، وتنفيذ أكثر ثباتاً بين الأدوات.",
          scope:
            "غالباً مشروع تكامل أو بناء أعمق لطبقة الربط بين الأنظمة.",
        },
      ],
      engagements: {
        eyebrow: "كيف يبدأ المشروع غالباً؟",
        title: "مرات يكون المشروع محدد، ومرات يبدأ من نقطة ويفتح على أكثر من جزء.",
        description:
          "هذا يعتمد على حجم المشكلة: هل هي جزء واحد يحتاج ترتيب، أو أكثر من طبقة تحتاج تشتغل مع بعض من البداية.",
        items: [
          {
            title: "تنفيذ محدد النطاق",
            description:
              "مشروع واضح يدور حول احتياج عملي واحد، مثل موقع أو إعداد حجز أو معالجة تدفق داخلي.",
          },
          {
            title: "إعداد نظام",
            description:
              "بناء أكثر ترتيباً عندما تحتاج الأدوات والبيانات والعملية إلى إعداد صحيح من البداية.",
          },
          {
            title: "تحسين سير العمل",
            description:
              "تحسين لإعداد قائم عندما يكون الحل الصحيح هو ترتيب أفضل لا استبدالاً كاملاً.",
          },
          {
            title: "بناء تشغيلي متعدد الأجزاء",
            description:
              "مشروع مترابط يغطي أكثر من طبقة من النشاط، مثل الموقع وسير العمل والأتمتة والأنظمة الداخلية معاً.",
          },
        ],
      },
      finalCta: {
        eyebrow: "الخطوة اللي بعدها",
        title: "إذا حسيت إن وضعك قريب من واحد من هذه النماذج، خلنا نشوفه معك.",
        description:
          "نراجع معك الوضع الحالي، ونوضح هل يحتاج مشروع محدد، أو ترتيب أوسع بين أكثر من جزء داخل الشركة.",
        supportingLine: "الهدف من البداية إن الصورة تكون واضحة والطريق مفهوم.",
        secondaryAction: "أرسل استفسارك",
      },
    },
    book: {
      eyebrow: "جلسة تعريفية",
      title: "إذا تحتاج نراجع وضع الشركة، اطلب جلسة تعريفية.",
      description:
        "جلسة قصيرة نفهم فيها وضع الشركة ونحدد أنسب بداية: موقع، أو سير عمل، أو نظام يخدم الفريق بشكل أفضل.",
      supportingLine:
        "مناسبة إذا عندك احتياج واضح وتبغى تعرف الخطوة الصح قبل ما تبدأ.",
      highlightsLabel: "في الجلسة",
      highlights: [
        "نقاش عملي عن وضع الشركة، مو مكالمة مبيعات جاهزة",
        "مناسبة للمواقع، والأتمتة، والحجز، والأنظمة الداخلية",
        "الهدف إنك تطلع بصورة أوضح عن الخطوة اللي بعدها",
      ],
      heroPrimaryAction: "اطلب جلسة تعريفية",
      heroSecondaryAction: "تواصل معنا",
      covers: {
        eyebrow: "في الجلسة",
        title: "غالباً جلسة واحدة تكفي توضح وين المشكلة وأفضل بداية لها.",
        description:
          "ما نحتاج ندخل في كل التفاصيل من أول مرة. المهم نفهم الوضع، ونعرف وش يحتاج يبدأ أول، ونوضح الخطوة اللي بعدها.",
        items: [
          {
            title: "الوضع الحالي",
            description:
              "كيف تمشي الاستفسارات، والتنفيذ، والمواعيد، والمتابعة، أو أي نظام داخلي له علاقة بالموضوع.",
          },
          {
            title: "المشكلة الأساسية",
            description:
              "وين يضيع الوقت، أو تتكرر المتابعة، أو تنكسر الخطوات بين الأداة والفريق.",
          },
          {
            title: "أنسب نوع خدمة",
            description:
              "هل البداية الأنسب موقع، أو أتمتة، أو حجز، أو نظام مرافق وصيانة، أو أداة داخلية للشركة.",
          },
          {
            title: "الخطوة اللي بعدها",
            description:
              "هل نبدأ بمشروع واضح، أو مراجعة أوسع، أو مسار أبسط قبل ما يتوسع الشغل.",
          },
        ],
      },
      audience: {
        eyebrow: "متى تفيدك؟",
        title: "تفيد أكثر إذا عندك احتياج واضح وتحتاج نقاش سريع يوضح الصورة.",
        description:
          "إذا كنت محتار بين أكثر من اتجاه، أو تحتاج رأياً واضحاً قبل البدء، فهذه الجلسة غالباً تعطيك البداية الصح.",
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
              "لعمليات المرافق أو الخدمات اللي تحتاج متابعة أفضل لسجلات الخدمة والطلبات والأصول وأوامر العمل وتنسيق المتعهدين.",
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
        title: "إذا كان الحجز المباشر متاح اختر وقتك، وإذا لا أرسل الطلب من صفحة التواصل.",
        description:
          "إذا كان فيه تقويم مباشر تقدر تختار الموعد من هنا. وإذا ما كان متاح حالياً، تقدر ترسل طلب الجلسة من صفحة التواصل.",
        shell: {
          configuredBadge: "التقويم متاح",
          configuredTitle: "حدّد موعد الجلسة",
          configuredDescription:
            "اختر الوقت اللي يناسبك للنقاش الأولي حول وضع الشركة والاحتياج الأقرب.",
          configuredAction: "افتح الحجز في نافذة جديدة",
          configuredNote:
            "إذا ما ظهر التقويم المضمن بشكل صحيح، استخدم رابط الحجز المباشر.",
          fallbackBadge: "طلب جلسة تعريفية",
          fallbackTitle: "اطلب الجلسة من النموذج مباشرة.",
          fallbackDescription:
            "أرسل نبذة سريعة عن الشركة والموضوع اللي تحتاج تناقشه، ونرتب الجلسة معك من هناك.",
          fallbackPrimaryAction: "اطلب جلسة تعريفية",
          fallbackNote:
            "الزر يفتح صفحة التواصل والجلسة التعريفية محددة مسبقاً.",
        },
      },
      reassurance: {
        eyebrow: "بعد الجلسة",
        title: "الهدف من الجلسة إنك تطلع بخطوة واضحة، مو قرار متسرع.",
        description:
          "إذا الصورة كانت واضحة، نحدد معك أفضل مسار بعدها. وإذا احتجنا خطوة مختلفة قبل الجلسة، نقولها بشكل مباشر.",
        points: [
          "يكفي وصف مختصر عن الشركة أو المشكلة لبدء النقاش",
          "إذا ما كانت الجلسة هي البداية الأنسب، نقترح لك المسار الأفضل",
          "بعدها تتضح الخطوة والوقت المناسب بشكل أفضل",
        ],
      },
    },
    contact: {
      eyebrow: "التواصل",
      title: "شاركنا احتياجك، ونرجع لك بالخطوة الأنسب.",
      description:
        "إذا عندك مشروع جديد، أو شغل يحتاج ترتيب، أو نظام داخلي ما عاد يخدم الفريق، هذا أفضل مكان نبدأ منه.",
      supportingLine:
        "يكفي ترسل وصف مختصر للوضع الحالي، والباقي نراجعه معك.",
      highlightsLabel: "يفيدك هذا النموذج إذا",
      highlights: [
        "إذا عندك مشروع جديد وتحتاج بداية واضحة",
        "إذا فيه مشكلة متكررة في المتابعة أو الربط أو الحجز",
        "إذا الشركة تحتاج موقع، أو أتمتة، أو أداة داخلية تخدم الشغل اليومي",
      ],
      heroPrimaryAction: "تواصل معنا",
      intro: {
        eyebrow: "قبل الإرسال",
        title: "يكفي ترسل الأساسيات، والباقي نرتبه معك.",
        description:
          "يكفي نعرف وش الشركة، وين المشكلة، وأيش النوع الأقرب من الخدمة اللي تفكر فيه. من هنا نقدر نحدد الخطوة المناسبة.",
        items: [
          {
            title: "استفسارات المشاريع",
            description:
              "إذا كنت تفكر في موقع جديد، أو أتمتة، أو حجز، أو أداة داخلية للشركة.",
          },
          {
            title: "تحسين سير العمل",
            description:
              "إذا الأدوات موجودة لكن الشغل بينها متعب، أو المتابعة تأخذ وقتاً أكثر من اللازم.",
          },
          {
            title: "الموقع والحضور الرقمي",
            description:
              "إذا موقع الشركة ما عاد يعكس مستواها، أو ما يعطي الزائر صورة واضحة ولا يدفعه للتواصل.",
          },
          {
            title: "الأنظمة والشغل الداخلي",
            description:
              "إذا تحتاجون متابعة أفضل، أو ربط أوضح، أو أداة داخلية ترتب الشغل اليومي.",
          },
        ],
      },
      callIntent: {
        badge: "طلب جلسة تعريفية",
        title: "تبغى جلسة تعريفية؟",
        description:
          "النموذج مضبوط مسبقاً على هذا الطلب. أرسل نبذة قصيرة عن الشركة والموضوع اللي ودك نتكلم فيه، ونرجع لك بالخطوة المناسبة.",
        supportingLine: "رسالة قصيرة تكفي. الهدف نفهم الاحتياج قبل ما نحدد الموعد.",
        primaryAction: "اطلب جلسة تعريفية",
        noteTitle: "يكفي ترسل",
        noteDescription:
          "بضع سطور عن الشركة، والمشكلة، والموضوع اللي تبغى تناقشه تكفي جداً.",
      },
      form: {
        eyebrow: "أرسل طلبك",
        title: "أرسل الأساسيات، والباقي نراجعه معك.",
        description:
          "نبذة قصيرة تكفي. ما نحتاج مواصفات كاملة من أول رسالة.",
        note:
          "تفاصيل التنفيذ نحددها بعد أول مراجعة أو جلسة.",
        submitLabel: "أرسل الطلب",
        fields: {
          name: "الاسم",
          company: "اسم الشركة",
          email: "البريد الإلكتروني",
          phone: "الهاتف أو واتساب",
          service: "الخدمة الأقرب",
          brief: "وش تحتاج بالضبط؟",
          nextStep: "كيف نبدأ؟",
        },
        placeholders: {
          name: "اسمك",
          company: "اسم الشركة أو النشاط",
          email: "you@company.com",
          phone: "الهاتف أو واتساب",
          servicePrompt: "اختر الخدمة الأقرب",
          brief:
            "اكتب لنا بشكل مختصر: وش المشكلة الحالية، أو نوع المشروع اللي تفكر فيه، أو الشيء اللي ودك يتحسن داخل الشركة.",
          nextStepPrompt: "اختر طريقة البداية",
        },
        serviceNotSureLabel: "لست متأكداً بعد",
        nextStepOptions: [
          { value: "contact", label: "نبدأ برسالة" },
          { value: "discovery-call", label: "جلسة تعريفية" },
        ],
        statuses: {
          successTitle: "وصلنا طلبك",
          successDescription:
            "شكراً لك. وصلنا طلبك وسنراجعه من هناك.",
          errorTitle: "ما قدرنا نرسل الطلب",
          errorDescription:
            "صار شيء قطع الإرسال. راجع البيانات وحاول مرة ثانية.",
        },
      },
      trust: {
        eyebrow: "بعد ما ترسل",
        title: "بعد ما توصلنا رسالتك، نحدد الخطوة المناسبة.",
        description:
          "إذا الصورة كانت واضحة، ننتقل مباشرة للخطوة المناسبة. وإذا تحتاج جلسة قصيرة أو توضيح خدمة معينة نرتبها معك.",
        bestFitTitle: "هذا النموذج يفيد أكثر إذا...",
        bestFitDescription:
          "عندك مشروع، أو مشكلة متكررة في الشغل، أو حاجة واضحة تحتاج ترتيب.",
        nextStepsTitle: "وش يصير بعد الإرسال؟",
        nextStepsDescription:
          "بعد ما نراجع الطلب، نحدد هل الأنسب جلسة تعريفية، أو نقاش مشروع مباشر، أو توضيح خدمة معينة قبل أي خطوة ثانية.",
        bestFitPoints: [
          "إذا الموقع ما عاد يخدم الشركة بالشكل اللي تستحقه",
          "إذا المتابعة أو الربط بين الأدوات صار يستهلك وقت الفريق",
          "إذا تحتاجون حجز أوضح أو أداة داخلية أو متابعة أفضل للشغل اليومي",
        ],
        points: [
          "يكفي ملخص مختصر عشان نبدأ بشكل جاد",
          "إذا احتجت أكثر من خدمة نوضح لك الصورة من البداية",
          "بعدها تتضح الخطوة والوقت المناسب بشكل أفضل",
        ],
      },
      finalCta: {
        eyebrow: "جاهز نبدأ؟",
        title: "إذا احتياجك واضح بشكل مبدئي، أرسل لنا ونكمل معك من هناك.",
        description:
          "وإذا مو واضح بالكامل، هذا طبيعي. نراجع معك الصورة ونحدد هل البداية برسالة، أو جلسة تعريفية، أو نقاش مشروع مباشر.",
        supportingLine: "المهم نبدأ من صورة واضحة وخطوة مناسبة.",
        primaryAction: "تواصل معنا",
        secondaryAction: "اطلب جلسة تعريفية",
      },
    },
    notFound: {
      title: "هذه الصفحة غير متاحة.",
      description: "قد يكون المسار قد تغيّر أو أن النسخة المترجمة لم تُنشأ بعد.",
      actionLabel: "العودة إلى الرئيسية",
    },
  },
};

type DeepPartial<T> = T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends object
    ? { [K in keyof T]?: DeepPartial<T[K]> }
    : T;

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function mergeDeep<T>(base: T, override?: DeepPartial<T>): T {
  if (override === undefined) {
    return base;
  }

  if (base === undefined || base === null) {
    return override as T;
  }

  if (Array.isArray(base) || Array.isArray(override)) {
    return override as T;
  }

  if (isPlainObject(base) && isPlainObject(override)) {
    const result: Record<string, unknown> = { ...base };

    for (const [key, overrideValue] of Object.entries(override)) {
      if (overrideValue === undefined) {
        continue;
      }

      result[key] = mergeDeep(
        (base as Record<string, unknown>)[key],
        overrideValue as DeepPartial<unknown>,
      );
    }

    return result as T;
  }

  return override as T;
}

const resolvedMarketingContent = {
  en: mergeDeep(marketingContent.en, marketingContentOverrides.en),
  ar: mergeDeep(marketingContent.ar, marketingContentOverrides.ar),
} satisfies Record<Locale, MarketingContent>;

export function getMarketingContent(locale: Locale) {
  return resolvedMarketingContent[locale];
}
