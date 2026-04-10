import type { ServiceSlug } from "@/config/site";
import type { Locale } from "@/i18n/config";

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
        "تساعد Benyah الشركات الصغيرة والمتوسطة عبر مواقع احترافية وأتمتة عملية وحلول للحجز والمكالمات الذكية وإدارة المرافق والصيانة وأنظمة أعمال وأدوات داخلية مبنية حول طريقة التشغيل الفعلية.",
      languageSwitcherLabel: "تغيير اللغة",
      primaryNavigationLabel: "القائمة الرئيسية",
      openNavigationLabel: "فتح القائمة",
      closeNavigationLabel: "إغلاق القائمة",
      mobileNavigationTitle: "القائمة",
      mobileNavigationDescription: "روابط الموقع مع الإجراء الرئيسي.",
    },
    navigation: [
      { href: "/", label: "الرئيسية" },
      { href: "/services", label: "الخدمات" },
      { href: "/about", label: "عن Benyah" },
      { href: "/case-studies", label: "أعمال مختارة" },
      { href: "/contact", label: "تواصل" },
    ],
    ctas: {
      primary: "اطلب جلسة أولية",
      secondary: "استعرض الخدمات",
      contact: "أرسل استفسارك",
    },
    footer: {
      strapline:
        "مواقع وأنظمة وسير عمل رقمية تمنح الأعمال هيكلاً أوضح وتشغيلاً أكثر ترتيباً.",
      note: "للأعمال التي تريد وضوحاً أعلى وترتيباً أفضل وتعقيداً تشغيلياً أقل.",
      navigationLabel: "روابط الموقع",
    },
    home: {
      eyebrow: "Benyah",
      title: "مواقع وأنظمة وسير عمل تمنح الأعمال الخدمية تشغيلاً أوضح.",
      description:
        "تساعد Benyah الأعمال الخدمية والعيادات ومشغلي المرافق والفرق النامية على استبدال الأدوات المبعثرة بمنظومة أوضح للواجهة الرقمية وسير العمل والتشغيل الداخلي.",
      supportingLine:
        "مناسبة خصوصاً للأعمال التي بدأت تتجاوز الجداول والتنسيق اليدوي والحضور الرقمي الضعيف والأنظمة المنفصلة.",
      highlightsLabel: "مجالات العمل",
      highlights: [
        "مواقع احترافية تعطي انطباعاً جدياً وتدعم الاستفسارات المناسبة",
        "أتمتة وتدفقات حجز تقلل الأعمال اليدوية وتوضح الخطوات",
        "أنظمة تشغيلية وأدوات داخلية مبنية على طريقة العمل الفعلية",
      ],
      labels: {
        serviceBadge: "خدمة",
        serviceAction: "اطّلع على الخدمة",
        caseStudyOutcome: "النتيجة المتوقعة",
      },
      problem: {
        eyebrow: "أين تبدأ المشكلة",
        title: "المشكلة ليست في عدد الأدوات، بل في أن كل جزء يعمل وحده.",
        description:
          "غالباً ما ينمو الموقع وسير العمل والتشغيل الداخلي كلٌ في اتجاه مختلف. ومع الوقت يظهر التكرار، وتضعف التسليمات بين المراحل، وتتراجع جودة الخدمة، وتصبح بعض الأنظمة موجودة من دون ثقة حقيقية بها.",
        items: [
          {
            title: "أنظمة مبعثرة",
            description:
              "الاستفسارات والحجوزات والتنفيذ والمتابعة موزعة على أدوات منفصلة من دون مسار تشغيلي واضح.",
          },
          {
            title: "سير عمل يدوي",
            description:
              "خطوات أساسية ما زالت تعتمد على التذكر أو البريد أو الجداول أو أعمال إدارية متكررة.",
          },
          {
            title: "حضور رقمي ضعيف",
            description:
              "قد يبدو الموقع مقبولاً، لكنه لا يشرح قيمة النشاط بوضوح ولا يدعم التحويل بالشكل المطلوب.",
          },
          {
            title: "فجوات تشغيلية",
            description:
              "تفتقر الفرق إلى الرؤية أو التقارير أو السيطرة التشغيلية التي تحتاجها لتوسيع العمل بثقة.",
          },
        ],
        asideEyebrow: "كيف تضيف Benyah القيمة",
        asideTitle: "Benyah توائم بين ما يراه العميل وما يعتمد عليه الفريق في الخلفية.",
        asideDescription:
          "الهدف ليس إضافة برامج أكثر، بل ترتيب العلاقة بين الطلب، والتنفيذ، والتشغيل الداخلي بحيث يعمل النشاط بصورة أوضح وأكثر ثباتاً.",
        asidePoints: [
          "الموقع والحجز وسير العمل مصممة لتعمل كمنظومة واحدة",
          "حلول مفصلة حول الاحتياج الفعلي عندما لا تكفي الأدوات الجاهزة",
          "تنفيذ عملي يصلح للاستخدام اليومي",
        ],
      },
      process: {
        eyebrow: "كيف نعمل",
        title: "منهجية واضحة من فهم الوضع حتى التنفيذ.",
        description:
          "نبدأ بفهم طريقة عمل النشاط فعلياً، ثم نحدد المستوى المناسب من الموقع أو النظام أو الأتمتة بحسب الحاجة الحقيقية.",
        steps: [
          {
            step: "01",
            title: "نفهم الوضع الحالي",
            description:
              "نراجع طريقة العمل ونقاط التعطل والأدوات الحالية قبل اقتراح أي حل.",
          },
          {
            step: "02",
            title: "نحدد ما يحتاجه النشاط",
            description:
              "نحدد إن كان الاحتياج موقعاً أو أتمتة أو تدفق حجز أو نظاماً داخلياً أو مزيجاً بينها.",
          },
          {
            step: "03",
            title: "ننّفذ بهدوء وانضباط",
            description:
              "نصمم وننفذ بهيكل نظيف ونطاق واضح مع تركيز على ما يخدم النشاط على المدى الأبعد.",
          },
          {
            step: "04",
            title: "نراجع بعد التشغيل",
            description:
              "نحسن ما يظهر في الاستخدام الفعلي: الوضوح، والاعتمادية، وسهولة العمل اليومي.",
          },
        ],
      },
      why: {
        eyebrow: "لماذا Benyah",
        title: "شريك يفكر في النظام ككل، لا في مهمة منفصلة.",
        description:
          "Benyah مناسبة للأعمال التي تريد تفكيراً واضحاً، ونطاقاً منضبطاً، وتنفيذاً يصمد في الاستخدام اليومي.",
        items: [
          {
            title: "نفهم العمل قبل اختيار الأداة",
            description:
              "نبدأ بسير العمل والأدوار ونقاط التعطل قبل أن نقرر ما الذي يجب بناؤه أو ربطه.",
          },
          {
            title: "نربط الواجهة بالتشغيل",
            description:
              "نعمل على الموقع والحجوزات والأتمتة والأنظمة الداخلية بحيث يعمل النشاط كتدفق واحد مترابط.",
          },
          {
            title: "تنفيذ راقٍ بلا استعراض",
            description:
              "نطاق واضح، وتصميم نظيف، وتنفيذ عملي من دون ضوضاء أو تعقيد مبالغ فيه.",
          },
        ],
      },
      trust: {
        eyebrow: "كيف تُدار المشاريع",
        title: "العمل في Benyah واضح من البداية إلى ما بعد التنفيذ.",
        description:
          "نحرص على أن يبقى كل مشروع محدد النطاق، عملياً في تنفيذه، ومفيداً في الاستخدام اليومي.",
        items: [
          {
            title: "نحدد النطاق قبل البناء",
            description:
              "الأولوية دائماً هي فهم موضع الضغط وتحديد الخدمة أو الطبقة التي تستحق أن تبدأ أولاً.",
          },
          {
            title: "نبني حول طريقة العمل الفعلية",
            description:
              "الحلول تُصاغ حول ما يفعله الفريق يومياً، لا حول قائمة خصائص منفصلة عن الواقع.",
          },
          {
            title: "نبدأ بالخطوة العملية الأنسب",
            description:
              "قد يبدأ المشروع بحل محدد، ثم يتوسع فقط إذا كانت الصورة التشغيلية تحتاج ذلك فعلاً.",
          },
        ],
      },
      selectedWork: {
        eyebrow: "أعمال مختارة",
        title: "نماذج من نوع الأعمال التي نُستدعى لترتيبها.",
        description:
          "نركز هنا على وضع النشاط، وما الذي جرى ترتيبه، ونوع التحسن الذي دعمه العمل.",
        noteEyebrow: "طريقة العرض",
        noteTitle: "نشارك ما يكفي لفهم شكل العمل",
        noteDescription:
          "حين لا يكون من المناسب نشر قصة مشروع كاملة، نعرض نمط العمل نفسه حتى تبقى الصورة واضحة من دون مبالغة أو اختلاق.",
      },
      finalCta: {
        eyebrow: "الخطوة التالية",
        title: "إذا كان النشاط يحتاج ترتيباً أوضح، فالبداية من هنا.",
        description:
          "سواء كان الاحتياج موقعاً أقوى، أو سير عمل أنظف، أو نظاماً داخلياً أوضح، تساعدك Benyah على تحديد الخطوة الأنسب للبداية.",
        supportingLine: "رؤية واضحة. تنفيذ عملي. مستوى احترافي.",
      },
    },
    services: {
      eyebrow: "الخدمات",
      title: "خدمات مبنية حول ما يحتاجه النشاط فعلياً.",
      description:
        "كل خدمة هنا تعالج موضع ضغط محدداً، ثم تُربط بالصورة التشغيلية الأوسع داخل النشاط.",
      supportingLine:
        "إذا كنت تعرف موضع التعطل فابدأ منه. وإن لم تكن الصورة واضحة بعد، فالعناوين المختصرة أدناه ستساعدك على تضييق الاختيار.",
      highlightsLabel: "كيف ننظر إلى الخدمات",
      highlights: [
        "خدمات تواجه العميل وتدعم الثقة والتحويل",
        "أتمتة وسير عمل تقلل التنسيق المتكرر",
        "أنظمة تشغيلية ترفع الرؤية والسيطرة وقابلية التوسع",
      ],
      heroSecondaryAction: "استعرض الخدمات",
      intro: {
        eyebrow: "أين تدخل Benyah في الصورة",
        title:
          "الخدمة الأنسب تتحدد بحسب موضع التعطل الفعلي داخل النشاط.",
        description:
          "بعض الأعمال تحتاج واجهة أقوى. وبعضها يحتاج سير عمل أنظف، أو ربطاً أعمق بين الأنظمة، أو طبقة تشغيل داخلية أوضح. دور Benyah هو فرز ذلك إلى مستوى المشروع الصحيح.",
        pointsLabel: "ما الذي نرتبه",
        points: [
          "مسار أوضح للاستفسار والحجز والخطوة التالية",
          "حركة أنظف بين الخطوات المتكررة داخل التشغيل",
          "رؤية أقوى وسيطرة أوضح على العمل الداخلي",
        ],
      },
      catalog: {
        eyebrow: "الخدمات",
        title: "ابدأ بالخدمة الأقرب إلى المشكلة الحالية.",
        description:
          "كل خدمة أدناه تجيب عن نوع مختلف من المشكلات، من الأعمال المتكررة إلى الربط بين الأنظمة إلى بناء طبقة تشغيل داخلية أقوى.",
      },
      grouping: {
        eyebrow: "كيف تلتقي هذه الخدمات",
        title: "العمل لا يُبنى كأجزاء منفصلة، بل كمنظومة واحدة.",
        description:
          "بعض المشاريع تبدأ من الموقع. وبعضها يبدأ من سير العمل أو التشغيل. الاختيار الصحيح يعتمد على موضع الضغط والالتباس اليوم.",
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
        serviceBadge: "الخدمة",
        serviceAction: "اطّلع على الخدمة",
        serviceSupportLabel: "تساعدك في",
        bestWhenLabel: "تكون أنسب عندما",
        groupServicesLabel: "الخدمات المرتبطة",
      },
      detail: {
        heroPanelLabel: "مخرجات الخدمة",
        heroSecondaryAction: "كل الخدمات",
        overview: {
          eyebrow: "عن الخدمة",
          title: "كيف تنعكس هذه الخدمة على سير العمل فعلياً.",
          description:
            "هنا يتضح موضع هذه الخدمة عملياً، وما الذي تضيفه لهذا الجانب من العمل.",
          capabilitiesLabel: "ما الذي يدخل ضمن الخدمة",
        },
        problems: {
          eyebrow: "متى تظهر الحاجة إليها",
          title: "تظهر أهميتها عندما يبدأ هذا الجانب في تعطيل العمل اليومي.",
          description:
            "المقصود هنا مشكلات عملية تؤثر على السرعة والوضوح وجودة التنفيذ اليومي.",
        },
        deliverables: {
          eyebrow: "نطاق العمل",
          title: "ما الذي ستحصل عليه من هذا العمل.",
          description:
            "تختلف كل خدمة في شكلها، لكن طريقة التنفيذ تبقى واضحة: نطاق محدد، وترتيب صحيح، ونتيجة يعتمد عليها الفريق في العمل اليومي.",
          capabilitiesLabel: "ما الذي يتضمنه التنفيذ",
          outcomesLabel: "ما الذي يتحسن",
        },
        audience: {
          eyebrow: "لمن تناسب",
          title: "أنسب للأعمال التي وصلت إلى نقطة ضغط واضحة في هذا الجانب.",
          description:
            "غالباً تكون الأنسب للأعمال التي تجاوزت الأدوات المرتجلة أو أصبحت طريقة عملها أوضح من أن تخدمها الحلول العامة كما ينبغي.",
        },
        process: {
          eyebrow: "كيف نعمل",
          title: "من فهم الوضع إلى التنفيذ.",
          description:
            "المنهجية ثابتة عبر الخدمات حتى يبقى النطاق والقرار والتنفيذ واضحاً من البداية.",
          steps: [
            {
              step: "01",
              title: "نراجع الوضع الحالي",
              description:
                "نراجع طريقة العمل والأدوات ونقاط التعطل والضغط المرتبط بهذه الخدمة.",
            },
            {
              step: "02",
              title: "نحدد النطاق المناسب",
              description:
                "نصوغ الخدمة بحسب ما يحتاجه النشاط الآن، وما الذي يجب أن يبدأ أولاً، وما الذي لا يحتاج إلى مبالغة في البناء.",
            },
            {
              step: "03",
              title: "نصمم وننفذ",
              description:
                "ننفذ بهيكل نظيف وتسلسل مدروس وتركيز على الاستخدام العملي اليومي.",
            },
            {
              step: "04",
              title: "نحسن بعد التشغيل",
              description:
                "نراجع الوضوح والاعتماد والموثوقية بعد دخول الخدمة في الاستخدام.",
            },
          ],
        },
        faq: {
          eyebrow: "أسئلة متكررة",
          title: "أسئلة تظهر عادة قبل بدء العمل.",
          description:
            "النهج المناسب يعتمد على وضع النشاط، لكن هذه الإجابات تغطي أكثر الأسئلة التي تظهر في البداية.",
        },
        finalCta: {
          eyebrow: "الخطوة التالية",
          title: "إذا كانت هذه الخدمة الأقرب لاحتياجك، فالخطوة التالية واضحة.",
          description:
            "تساعد Benyah على تحديد ما إذا كانت هذه الخدمة كافية في هذه المرحلة، أو إن كان من الأفضل ربطها بخدمة أخرى حتى يكتمل الحل.",
          supportingLine: "وضوح قبل التنفيذ.",
          secondaryAction: "عرض كل الخدمات",
        },
      },
      finalCta: {
        eyebrow: "الخطوة التالية",
        title:
          "إذا كان النشاط يحتاج إلى ترتيب أوضح، فابدأ بالخدمة الأقرب للاحتياج.",
        description:
          "تساعد Benyah على تحديد الخدمة أو المزيج المناسب من الخدمات بحسب مرحلة النشاط وطريقة تشغيله.",
        supportingLine: "وضوح في النطاق قبل البدء.",
        secondaryAction: "أرسل استفسارك",
      },
      items: {
        automation: {
          title: "حلول الأتمتة",
          summary:
            "أتمتة عملية تقلل الأعمال المتكررة، وتمنع تعطل الخطوات بين المراحل، وتجعل التنفيذ اليومي أكثر انتظاماً.",
          bestWhen:
            "تكون أنسب عندما تستهلك الخطوات المتكررة وقت الفريق وتعتمد على التذكير والمتابعة اليدوية.",
          heroSupportingLine:
            "مناسبة للأعمال التي تستنزفها الخطوات المتكررة، والتنسيق اليدوي، والاعتماد الزائد على البريد والذاكرة.",
          intro:
            "تساعد حلول الأتمتة في Benyah على تقليل الأعمال اليدوية غير الضرورية في الاستفسارات، والمتابعة، والتقارير، والتنسيق الداخلي. الفكرة بسيطة: أن تتحرك الخطوات الصحيحة في وقتها، من دون متابعة مرهقة أو اعتماد زائد على الذاكرة.",
          capabilities: [
            "أتمتة للمتابعة والتذكير والاعتمادات داخل العملية نفسها",
            "تنبيهات وتسليمات داخلية أوضح بين الفريق والمراحل",
            "طبقة أتمتة خفيفة تدعم الأدوات المستخدمة يومياً بالفعل",
          ],
          outcomes: [
            "تنسيق يدوي أقل",
            "تدفق يومي أكثر ثباتاً",
            "رؤية أوضح لما يتحرك وما ينتظر",
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
                "حلول الأتمتة تناسب عادة تحسين الأعمال المتكررة داخل التشغيل اليومي القائم. أما عندما تكون المشكلة بين عدة أنظمة، أو تحتاج العملية إلى ربط أعمق ومنطق أكثر تعقيداً، فعندها تكون أتمتة سير العمل والأنظمة هي الأنسب.",
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
          finalCta: {
            title: "إذا كانت العملية تُدار يدوياً أكثر مما ينبغي، فهذه نقطة بداية مناسبة.",
            description:
              "تساعد Benyah على تحديد الخطوات التي ينبغي أن تتحرك تلقائياً وبناء طبقة أتمتة عملية تحسن التشغيل اليومي من دون تعقيد زائد.",
            supportingLine: "ابدأ من الأعمال المتكررة، لا من بناء أكبر من الحاجة.",
          },
        },
        websites: {
          title: "المواقع الإلكترونية",
          summary:
            "مواقع احترافية تشرح الخدمة بوضوح، وتعطي انطباعاً جدياً، وتدفع الزائر المناسب إلى التواصل.",
          bestWhen:
            "تكون أنسب عندما يكون النشاط جيداً في الواقع لكن الموقع لا يعكس مستواه ولا يوجّه الزائر بالشكل الصحيح.",
          heroSupportingLine:
            "مناسبة للأعمال التي تحتاج حضوراً رقمياً أقوى، وتموضعاً أوضح، وموقعاً يخدم التحويل بشكل أفضل.",
          intro:
            "في Benyah، لا يُنظر إلى الموقع كواجهة شكلية، بل كجزء أساسي من صورة النشاط التجارية. المطلوب أن يعكس مستوى العمل، ويشرح الخدمة بوضوح، ويوجه الزائر المناسب إلى الخطوة التالية من دون ارتباك.",
          capabilities: [
            "هيكل صفحات مبني على التموضع والرسالة",
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
          finalCta: {
            title: "إذا كان الموقع الحالي يضعف صورة النشاط، فالأفضل معالجته بالشكل الصحيح.",
            description:
              "تساعد Benyah على توضيح التموضع، وترتيب الصفحات، وبناء مسار تواصل يدعم النشاط بدلاً من أن يتأخر عنه.",
            supportingLine: "الموقع الأقوى يجب أن يقود أيضاً إلى خطوة أوضح.",
          },
        },
        "booking-workflows": {
          title: "تدفقات الحجز والمكالمات الذكية",
          summary:
            "تنظيم الحجز والمكالمات الواردة بحيث تعمل المواعيد والتأكيدات والتذكيرات وتجهيز المعلومات بسلاسة أكبر.",
          bestWhen:
            "تكون أنسب عندما تؤثر الجدولة أو المكالمات أو التذكيرات على التحويل أو الجاهزية أو جودة التنفيذ.",
          heroSupportingLine:
            "مناسبة للأعمال التي تؤثر فيها جودة الحجز والتعامل مع المكالمات مباشرة على التحويل وجاهزية الفريق والطاقة اليومية.",
          intro:
            "تساعد Benyah على تحويل الحجز والتعامل مع المكالمات الواردة إلى مسار خدمة أوضح وأكثر ثباتاً. يشمل ذلك ترتيب المواعيد، والتأكيدات، والتذكيرات، وجمع المعلومات قبل التنفيذ، وتسليم التفاصيل داخلياً، مع الاستفادة من المكالمات الذكية عند الحاجة.",
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
              "تساعد Benyah على تنظيم الطريق من أول تواصل إلى موعد مؤكد واستعداد داخلي أوضح، بحيث يتحرك العميل والفريق بخطوات أنظف.",
            supportingLine: "النتيجة المطلوبة هي مسار حجز أسلس وفريق أكثر جاهزية خلفه.",
          },
        },
        "facility-maintenance-management": {
          title: "حلول إدارة المرافق والصيانة",
          summary:
            "أنظمة أوضح لإدارة المرافق والصيانة تغطي أوامر العمل، وسجلات الخدمة، والأصول، وتنسيق المتعهدين.",
          bestWhen:
            "تكون أنسب عندما تصبح الطلبات والأصول وأوامر العمل وسجلات الخدمة أكبر من أن تُدار عبر البريد والجداول والمكالمات.",
          heroSupportingLine:
            "مناسبة للأعمال الصغيرة والمتوسطة التي تدير مرافق أو فرق صيانة وتحتاج رؤية أوضح وتنسيقاً أقوى وسيطرة تشغيلية أفضل.",
          intro:
            "تمنح هذه الخدمة الأعمال الصغيرة والمتوسطة طريقة أوضح لإدارة الأصول وأوامر العمل وسجلات الخدمة وتنسيق المتعهدين والتقارير. الهدف هو أن تصبح أعمال المرافق أو الصيانة أسهل في المتابعة والإشراف، وأن تنتقل من المعالجة المتفرقة إلى نظام أوضح في الاستخدام اليومي.",
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
                "نعم. يمكن أن تشمل الخدمة هيكلة أنظمة إدارة الصيانة المحوسبة (CMMS) وحلول إدارة المرافق (CAFM) وأدوات إدارة الأصول وتنسيق المتعهدين بحسب ما يحتاجه التشغيل فعلياً.",
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
          finalCta: {
            title: "إذا كانت أعمال المرافق أو الصيانة صعبة المتابعة بشكل نظيف، فطبقة الإدارة المناسبة تغيّر ذلك بسرعة.",
            description:
              "تساعد Benyah على تعريف النظام الأنسب حول الطلبات والأصول وأوامر العمل وتنسيق المتعهدين حتى يصبح التشغيل أوضح وأسهل في المتابعة.",
            supportingLine: "ابدأ من الموضع الذي تنهار فيه السجلات أو التنسيقات أكثر من غيره.",
          },
        },
        "workflow-systems-automation": {
          title: "أتمتة سير العمل والأنظمة",
          summary:
            "ربط أدق بين الأنظمة عندما تحتاج الخطوات والبيانات أن تنتقل تلقائياً بين أكثر من منصة بصورة موثوقة.",
          bestWhen:
            "تكون أنسب عندما تكون المشكلة بين عدة أنظمة وتحتاج العملية إلى ربط أعمق أو حركة بيانات أوضح بين الأدوات.",
          heroSupportingLine:
            "للأعمال التي تعددت أدواتها وأصبحت تحتاج ربطاً أعمق وتنسيقاً أدق بين الأنظمة.",
          intro:
            "تأتي هذه الخدمة حين لا يعود الربط البسيط بين الخطوات كافياً. هنا تعمل Benyah على ترتيب العلاقة بين النماذج والأنظمة الداخلية وبرامج التشغيل المختلفة حتى تنتقل البيانات والإجراءات بين المراحل بصورة مستقرة، ويصبح ما بين الأنظمة أوضح وأقل عرضة للتعطل.",
          capabilities: [
            "ربط أوضح بين النماذج والأنظمة الداخلية وبرامج التشغيل المختلفة",
            "تنظيم حركة البيانات والإجراءات بين أكثر من نظام",
            "طبقة تكامل أعمق حين لا تكفي الأتمتة البسيطة بين الخطوات",
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
                "يحتاج النشاط إلى أن تعمل أنظمته معاً، لكن الإعداد الحالي لا يدعم مستوى الربط أو منطق التنفيذ الذي تتطلبه العملية فعلياً بصورة موثوقة.",
            },
          ],
          audience: [
            {
              title: "الأعمال التي تعتمد على عدة أنظمة وأدوات داخلية",
              description:
                "مناسبة عندما تحتاج النماذج أو الأنظمة الداخلية أو بقية الأدوات إلى تنسيق أعمق وحركة بيانات أكثر موثوقية.",
            },
            {
              title: "الفرق التي تحتاج ربطاً أعمق بين الأنظمة",
              description:
                "مفيدة عندما يحتاج التدفق إلى منطق أدق وتكاملات أعمق بين الأنظمة المختلفة، لا مجرد أتمتة خطوة واحدة.",
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
                "لا. قد يكون n8n جزءاً من التنفيذ، لكن الخدمة لا تتمحور حول أداة بعينها. الأهم هو الوصول إلى تدفق موثوق يربط الأنظمة بالشكل المناسب.",
            },
            {
              question: "هل يمكن أن تعمل هذه الخدمة مع الأنظمة الحالية لدينا؟",
              answer:
                "غالباً نعم، متى كانت الأنظمة الحالية تتيح وسائل ربط مناسبة مثل الواجهات البرمجية أو الـ webhooks أو الموصلات المدعومة.",
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
            title: "إذا كانت عدة أنظمة تحتاج أن تعمل كمسار واحد، فهذه الخدمة غالباً أنسب من الأتمتة الأبسط.",
            description:
              "تساعد Benyah على مراجعة حركة البيانات والمنطق بين الأدوات، ثم تعريف طبقة الربط التي تجعل العملية أكثر ثباتاً واعتمادية.",
            supportingLine: "رتّب العلاقة بين الأنظمة قبل إضافة مزيد من الحلول اليدوية المؤقتة.",
          },
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
                "نحدد منطق الربط والتحويلات والتفرعات والاستثناءات التي يحتاجها التدفق الحقيقي، ونستخدم n8n أو الـ webhooks أو الواجهات البرمجية عندما تكون هي الوسيلة الأنسب.",
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
            "أنظمة داخلية ولوحات تشغيل وأدوات عمل مبنية حول الطريقة التي يدير بها النشاط عملياته فعلياً.",
          bestWhen:
            "تكون أنسب عندما يحتاج النشاط إلى طبقة تشغيل داخلية خاصة به، لا مجرد تحسين التسليم بين أدوات عامة.",
          heroSupportingLine:
            "مناسبة للأعمال التي لم تعد عملياتها الداخلية الأساسية تلائم الجداول أو البرامج العامة أو الأدوات المجمعة.",
          intro:
            "هذه الخدمة مخصصة للأعمال التي لم تعد تحتاج مجرد أتمتة بين الخطوات، بل تحتاج نظاماً داخلياً أوضح بحد ذاته. تساعد Benyah على تصميم وبناء أنظمة داخلية ولوحات تشغيل وسجلات وصلاحيات عمل تناسب البيانات والخطوات والإشراف الذي يحتاجه النشاط فعلياً.",
          capabilities: [
            "لوحات تشغيل وأدوات إدارية مبنية حول عملية داخلية حقيقية",
            "سجلات منظمة وصلاحيات ورؤية بحسب الأدوار",
            "تقارير ونماذج بيانات تدعم الإدارة اليومية بوضوح أكبر",
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
                "الأتمتة تحسن انتقال الخطوات بين المراحل. أما أنظمة الأعمال والأدوات الداخلية فتناسب الحالات التي يحتاج فيها النشاط إلى نظام داخلي أو لوحة تشغيل أو هيكل سجلات يكون هو مركز العمل نفسه.",
            },
            {
              question: "هل يمكن أن يعمل هذا بجانب البرامج التي نستخدمها الآن؟",
              answer:
                "نعم. في كثير من الحالات يكون الأفضل إضافة الطبقة الداخلية المناسبة فوق المنظومة الحالية بدلاً من استبدال كل شيء دفعة واحدة.",
            },
          ],
          finalCta: {
            title: "إذا كان النشاط يحتاج طبقة تشغيل داخلية أوضح، فهذه هي البداية الصحيحة لذلك.",
            description:
              "تساعد Benyah على تعريف السجلات والرؤى والصلاحيات والأدوات الداخلية التي يحتاجها الفريق فعلاً بدلاً من الاستمرار في التنازل لصالح أدوات عامة لا تناسب العمل.",
            supportingLine: "النظام الداخلي الأفضل يجب أن يخفف الضوضاء، لا أن يضيف أداة جديدة يصعب الالتفاف حولها.",
          },
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
      eyebrow: "عن Benyah",
      title: "في Benyah يبدأ كل شيء من أساس واضح.",
      description:
        "Benyah شركة تساعد الأعمال الصغيرة والمتوسطة على ترتيب حضورها الرقمي وسير العمل وعملياتها عبر أنظمة مترابطة.",
      supportingLine:
        "نرتب ما يراه العميل وما يدير به الفريق عمله في الخلفية، حتى يعمل النشاط بثقة أكبر.",
      highlightsLabel: "جوهر Benyah",
      highlights: [
        "نفهم العمل قبل اختيار الأداة",
        "حلول مترابطة بدلاً من المعالجات المؤقتة",
        "تنفيذ راقٍ بعقلية عملية",
      ],
      overview: {
        eyebrow: "من هي Benyah",
        title: "شريك يرتب الواجهة الرقمية والتشغيل الداخلي ضمن صورة واحدة.",
        description:
          "تساعد Benyah الأعمال الصغيرة والمتوسطة على إعادة الترتيب إلى الأجزاء التي تنفصل عن بعضها مع مرور الوقت.",
        body:
          "يشمل عمل Benyah المواقع الإلكترونية، والأتمتة، وتدفقات الحجز والمكالمات الذكية، وحلول إدارة المرافق والصيانة، وأتمتة سير العمل والأنظمة، وأنظمة الأعمال والأدوات الداخلية. الهدف ليس إضافة التقنية لذاتها، بل بناء أساس أقوى لطريقة تقديم النشاط لنفسه، وإدارة عمله داخلياً، وتنفيذه اليومي.",
        asideEyebrow: "معنى الاسم",
        asideTitle: "اسم Benyah يرتبط بالأساس والترابط بين الأنظمة.",
        asideDescription:
          "وهذا المعنى يوجّه طريقة العمل: نبني ما يمنح النشاط قاعدة أوضح وتدفقاً أنظف وتشغيلاً يومياً أكثر ثباتاً.",
        asidePoints: [
          "النظر إلى الواجهة والتشغيل الداخلي معاً",
          "أنظمة مصاغة حول الاحتياج التشغيلي الفعلي",
          "تنفيذ يصلح للاستخدام العملي اليومي",
        ],
      },
      beliefs: {
        eyebrow: "المبادئ",
        title: "كلما اتضحت البنية، صار العمل أسهل إدارةً ونمواً.",
        description:
          "تسترشد Benyah بمجموعة مبادئ بسيطة تبقي العمل واضحاً ومفيداً عملياً.",
        items: [
          {
            title: "الوضوح قبل التكديس",
            description:
              "كل صفحة وكل سير عمل وكل نظام يجب أن يجعل النشاط أسهل فهماً وأسهل إدارة.",
          },
          {
            title: "حلول مترابطة بدل المعالجات المؤقتة",
            description:
              "أفضل نتيجة تأتي من ربط الأجزاء الصحيحة من النشاط بدلاً من إضافة معالجات مؤقتة فوق أساس ضعيف.",
          },
          {
            title: "تنفيذ فعلي بلا مبالغة",
            description:
              "في Benyah يهمنا التنفيذ الموثوق والنطاق الواضح والحلول التي تعمل فعلاً أكثر من المصطلحات الرائجة أو التعقيد غير الضروري.",
          },
          {
            title: "هيكل يستوعب النمو",
            description:
              "الأنظمة الجيدة لا تعالج احتكاك اليوم فقط، بل تمنح النشاط أساساً أقوى للمرحلة التالية أيضاً.",
          },
        ],
      },
      process: {
        eyebrow: "كيف نعمل",
        title: "طريقة عمل واضحة من البداية حتى ما بعد التنفيذ.",
        description:
          "نبدأ بفهم طريقة عمل النشاط اليوم، ثم نحدد مستوى الحل المناسب وننفذ بهدوء وانضباط.",
        steps: [
          {
            step: "01",
            title: "نبدأ بفهم الوضع",
            description:
              "نراجع الوضع الحالي ونقاط الضغط والجزء من النشاط الذي يحتاج إلى ترتيب أوضح.",
          },
          {
            step: "02",
            title: "نحدد الحل المناسب",
            description:
              "نحدد شكل الموقع أو سير العمل أو الأتمتة أو النظام الصحيح بناءً على احتياج العمل لا على الافتراضات.",
          },
          {
            step: "03",
            title: "ننّفذ بانضباط",
            description:
              "ننّفذ بنطاق واضح وتسلسل مدروس مع انحياز إلى حلول قابلة للصيانة ومنطقية تجارياً.",
          },
          {
            step: "04",
            title: "نحسن بعد التشغيل",
            description:
              "نراجع الاعتماد والوضوح والموثوقية اليومية بعد دخول النظام أو الخدمة في الاستخدام.",
          },
        ],
      },
      differentiators: {
        eyebrow: "ما الذي يميز Benyah",
        title: "تنفيذ احترافي مبني على ما يلائم العمل فعلاً.",
        description:
          "Benyah لا تقوم على الحجم أو الكلام الرائج أو الحل الواحد للجميع. القيمة هنا في فهم الحاجة ثم تنفيذها بالشكل العملي المناسب.",
        items: [
          {
            title: "نظرة شاملة للتشغيل",
            description:
              "تعمل Benyah عبر الحضور الرقمي وسير العمل والتشغيل حتى يعمل النشاط كمنظومة واحدة مترابطة.",
          },
          {
            title: "وضوح تجاري",
            description:
              "الهدف ليس إضافة مزيد من البرامج أو الطبقات أكثر مما يحتاجه النشاط فعلياً، بل معالجة المشكلة الصحيحة بالشكل الصحيح.",
          },
          {
            title: "مبني للاستخدام اليومي",
            description:
              "يُصاغ العمل بما يناسب الاستخدام اليومي فعلاً، حتى يدعم النشاط في الواقع لا في العرض فقط.",
          },
        ],
      },
      audience: {
        eyebrow: "من يناسبنا أكثر",
        title: "أنسب للأعمال التي تحتاج ترتيباً أوضح، لا طبقات إضافية من التعقيد.",
        description:
          "غالباً تناسب Benyah الأعمال التي تجاوزت الأدوات المرتجلة أو التدفقات المنفصلة أو الواجهة الرقمية الضعيفة.",
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
        eyebrow: "الخطوة التالية",
        title: "إذا كان النشاط يحتاج إلى ترتيب أوضح، فهذه بداية مناسبة.",
        description:
          "تساعد Benyah على تحديد ما إذا كانت البداية الأنسب من الموقع، أو سير العمل، أو الأتمتة، أو النظام الداخلي بحسب ما يحتاجه النشاط الآن.",
        supportingLine: "وضوح في البداية. تنفيذ عملي. مستوى احترافي.",
        secondaryAction: "أرسل استفسارك",
      },
    },
    caseStudies: {
      eyebrow: "أعمال مختارة",
      title: "نماذج من الأعمال التي تلجأ فيها الشركات إلى Benyah لترتيب التشغيل.",
      description:
        "نماذج مختصرة لحالات عملية تبدأ من موقع ضعيف أو سير عمل مرتبك أو نظام داخلي غير واضح، ثم تُعاد صياغتها بشكل أنظف وأوضح.",
      supportingLine:
        "تُعرض باختصار وبلا أسماء عند الحاجة، مع الحفاظ على الفائدة العملية.",
      highlightsLabel: "ما الذي ستجده هنا",
      highlights: [
        "كيف يبدأ الاحتياج عادة",
        "ما الذي جرى ترتيبه أو بناؤه",
        "إلى أي شكل يميل المشروع غالباً بعد ذلك",
      ],
      intro: {
        eyebrow: "كيف نعرض هذه النماذج",
        title: "نعرض أصل المشكلة وطبيعة المعالجة بشكل مباشر.",
        description:
          "ليست كل المشاريع قابلة للنشر بتفاصيلها الكاملة. وعندما لا يكون ذلك مناسباً، تعرض Benyah الحالة كما بدأت، وما الذي جرى ترتيبه، وما الذي تحسن فعلياً.",
        asideEyebrow: "طريقة القراءة",
        asideTitle: "ابدأ من نقطة البداية، ثم انظر إلى ما تغيّر.",
        asideDescription:
          "المهم هنا أن تكون الصورة كافية لتقدير مستوى الفهم والتنفيذ، من غير مبالغة أو قصص مصطنعة.",
        asidePoints: [
          "لا أسماء عملاء مختلقة ولا نتائج مفبركة",
          "كل مثال يبدأ من وضع تشغيلي حقيقي",
          "التفاصيل الأوسع تُناقش عند الحاجة في تواصل مباشر",
        ],
      },
      startingPoints: {
        eyebrow: "ما الذي يقود عادة إلى التعاقد",
        title: "غالباً لا يبدأ العمل من طلب عام، بل من مشكلة واضحة في التشغيل أو الواجهة.",
        description:
          "قبل تحديد نطاق المشروع تكون هناك عادة نقطة ضغط واضحة. وهذه بعض الحالات التي تتكرر في الأعمال التي تصل إلى Benyah.",
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
        eyebrow: "نماذج المشاريع",
        title: "نماذج توضح كيف يبدو العمل فعلياً عند التنفيذ.",
        description:
          "كل نموذج يوضح نقطة البداية، وما الذي جرى ترتيبه، وما الذي تحسن، وشكل المشروع الذي ينشأ غالباً في مثل هذه الحالات.",
      },
      labels: {
        summaryLabel: "نقطة البداية",
        outcomeLabel: "ما الذي تحسن",
        addressedLabel: "ما الذي نفذته Benyah",
        scopeLabel: "شكل المشروع غالباً",
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
            "تنسيق يدوي أقل، وتدفق أكثر اعتمادية، ورؤية أوضح لما ينتظر أو يتعطل.",
          scope:
            "غالباً تحسين لسير العمل أو بناء أتمتة متعددة المراحل.",
        },
        {
          title: "موقع احترافي لتوليد الفرص",
          sector: "المواقع الإلكترونية",
          summary:
            "نشاط موثوق في الواقع، لكن موقعه لم يعد يشرح العرض جيداً ولا يقود الزائر المناسب إلى خطوة تواصل واضحة.",
          addressed:
            "التموضع غير الواضح، ومسار الصفحات الضعيف، وهيكل التحويل الذي لا يدعم استفساراً جاداً.",
          outcome:
            "مصداقية أقوى، وشرح أوضح للخدمات، واستفسارات أفضل جودة.",
          scope:
            "غالباً إعادة بناء موقع بهيكل أوضح ورسالة أقوى.",
        },
        {
          title: "إعداد لإدارة المرافق والصيانة",
          sector: "إدارة المرافق والصيانة",
          summary:
            "تشغيل مرافق أو صيانة كان يعتمد على طلبات متفرقة وسجلات غير مكتملة ورؤية محدودة للأصول وأوامر العمل.",
          addressed:
            "تدفق الطلبات، وهيكلة الأصول، وحالات أوامر العمل، وسجلات الخدمة، ورؤية التقارير، وتنسيق المتعهدين.",
          outcome:
            "سيطرة تشغيلية أفضل، وسجلات أنظف، ورؤية أوضح عبر أعمال المرافق والصيانة.",
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
        eyebrow: "كيف يُحدد نطاق المشاريع",
        title: "بعض المشاريع يبقى محدداً، وبعضها يفتح ملفاً تشغيلياً أوسع.",
        description:
          "شكل المشروع يتحدد بحسب موضع الضغط: هل هو جزء واحد يحتاج ترتيباً واضحاً، أم أكثر من طبقة تحتاج أن تعمل معاً.",
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
        eyebrow: "الخطوة التالية",
        title: "إذا كان أحد هذه النماذج قريباً من وضعك، فابدأ بتواصل مباشر.",
        description:
          "تساعد Benyah على تقدير شكل المشروع الأقرب، ونوع الحل الأنسب، ونقطة البداية العملية بحسب وضع النشاط الحالي.",
        supportingLine: "فهم أوضح قبل التنفيذ.",
        secondaryAction: "أرسل استفسارك",
      },
    },
    book: {
      eyebrow: "جلسة أولية",
      title: "اطلب جلسة أولية لتوضيح الاحتياج وتحديد الخطوة الأنسب.",
      description:
        "الهدف من الجلسة هو فهم الوضع الحالي، ونقطة الضغط، وما إذا كانت البداية الأنسب موقعاً أو تحسيناً في سير العمل أو نظاماً أوضح للتشغيل.",
      supportingLine:
        "مناسبة للاستفسارات الجادة التي تحتاج وضوحاً قبل تحديد النطاق.",
      highlightsLabel: "ما الذي تتوقعه",
      highlights: [
        "محادثة عملية حول النشاط، لا مكالمة بيع نمطية",
        "مفيدة للمواقع والأتمتة وتدفقات الحجز والمكالمات والأنظمة التشغيلية والأدوات الداخلية",
        "الهدف هو الخروج بصورة أوضح عن الاحتياج والخطوة التالية",
      ],
      heroPrimaryAction: "اطلب جلسة أولية",
      heroSecondaryAction: "أرسل استفسارك",
      covers: {
        eyebrow: "ما الذي تتناوله الجلسة",
        title: "مراجعة سريعة للوضع الحالي وما يحتاجه النشاط.",
        description:
          "الهدف من الجلسة أن تتضح الصورة للطرفين: ما المشكلة، وأين تبدأ المعالجة، وما الخطوة التالية الأنسب.",
        items: [
          {
            title: "الوضع الحالي",
            description:
              "كيف يدير النشاط حالياً الاستفسارات والتنفيذ والمواعيد والأنظمة أو العمليات الداخلية.",
          },
          {
            title: "الاحتكاك التشغيلي",
            description:
              "أين تسبب الأعمال اليدوية أو ضعف التسليم أو الأدوات المتفرقة أو غياب الترتيب الواضح تباطؤاً في العمل.",
          },
          {
            title: "نوع الخدمة أو النظام",
            description:
              "هل الاحتياج أقرب إلى موقع، أو أتمتة، أو تدفق حجز ومكالمات، أو نظام مرافق وصيانة، أو أداة داخلية.",
          },
          {
            title: "الخطوة التالية المقترحة",
            description:
              "ما هي الخطوة العملية الأنسب بعد الجلسة، وما إذا كان الأنسب مشروعاً محدداً أو بناء نظام أوسع.",
          },
        ],
      },
      audience: {
        eyebrow: "متى تفيد هذه الجلسة",
        title: "مناسبة للأعمال التي لديها احتياج واضح على مستوى الأنظمة أو التشغيل.",
        description:
          "تفيد أكثر عندما يكون هناك احتياج واضح يحتاج إلى تعريف أو تحسين أو ترتيب صحيح.",
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
        title: "اختر الوقت المناسب إن كان التقويم متاحاً، أو اطلب جلسة أولية مباشرة.",
        description:
          "إذا كان تقويم الحجز المباشر متاحاً يمكنك اختيار الموعد من هنا. وإذا لم يكن منشوراً حالياً، يمكنك طلب الجلسة مباشرة عبر نموذج التواصل.",
        shell: {
          configuredBadge: "التقويم متاح",
          configuredTitle: "حدّد موعد الجلسة",
          configuredDescription:
            "استخدم التقويم أدناه لاختيار وقت مناسب لنقاش أولي حول وضع النشاط وما يحتاجه فعلاً.",
          configuredAction: "افتح الحجز في نافذة جديدة",
          configuredNote:
            "إذا لم تظهر أداة الحجز المضمنة بشكل صحيح، فاستخدم رابط الحجز المباشر بدلاً من ذلك.",
          fallbackBadge: "طلب جلسة أولية",
          fallbackTitle: "يمكن طلب الجلسة مباشرة.",
          fallbackDescription:
            "إذا لم يكن التقويم المباشر منشوراً هنا، يمكنك طلب الجلسة عبر نموذج التواصل. يكفي ملخص قصير عن النشاط والموضوع الذي تريد مناقشته.",
          fallbackPrimaryAction: "اطلب جلسة أولية",
          fallbackNote:
            "سينتقل بك الزر مباشرة إلى نموذج التواصل مع اختيار الجلسة الأولية مسبقاً.",
        },
      },
      reassurance: {
        eyebrow: "ماذا بعد ذلك",
        title: "الغرض من الجلسة هو فهم الاحتياج وتحديد الخطوة التالية، لا إلزامك بمشروع من أول تواصل.",
        description:
          "الهدف هو فهم السياق بشكل صحيح، ومعرفة ما إذا كانت Benyah هي الجهة المناسبة، وتحديد الطريق العملي الأنسب للمضي قدماً.",
        points: [
          "يكفي وصف مختصر أو سياق عام عن النشاط لبدء النقاش",
          "إذا لم تكن الجلسة الأولية هي الخطوة الأولى الأنسب، يمكن لـ Benyah اقتراح مسار أفضل",
          "يمكن تحديد النطاق والتوقيت وهيكل التنفيذ بصورة أدق بعد الجلسة الأولى",
        ],
      },
    },
    contact: {
      eyebrow: "التواصل",
      title: "حدّثنا عن احتياجك.",
      description:
        "إذا كنت تبحث عن موقع أقوى، أو سير عمل أوضح، أو نظام يدعم التشغيل اليومي، فابدأ من هنا.",
      supportingLine:
        "يكفي وصف مختصر للوضع الحالي ونقطة الضغط لنحدد معك الطريق الأنسب للبدء.",
      highlightsLabel: "متى يكون التواصل مناسباً",
      highlights: [
        "استفسارات المشاريع الجديدة ومناقشات التنفيذ",
        "تحسينات سير العمل وإعادة ترتيب الأنظمة",
        "المواقع والأتمتة والحلول التشغيلية",
      ],
      heroPrimaryAction: "أرسل استفسارك",
      intro: {
        eyebrow: "متى يكون الوقت مناسباً للتواصل",
        title: "أفضل الرسائل تبدأ من وضع عملي واضح.",
        description:
          "لا تحتاج إلى مواصفات كاملة. يكفي ملخص مختصر عن الوضع الحالي ونقطة الضغط والاتجاه الذي تفكر فيه.",
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
      callIntent: {
        badge: "طلب جلسة أولية",
        title: "استخدم هذا النموذج لطلب جلسة أولية.",
        description:
          "النموذج أدناه مضبوط مسبقاً على طلب جلسة أولية. أرسل نبذة مختصرة عن النشاط والموضوع الذي تريد مناقشته، وسنراجع ما إذا كانت الجلسة هي الخطوة التالية الأنسب.",
        supportingLine: "يكفي ملخص قصير. الهدف هو فهم الاحتياج قبل تحديد موعد أو مسار التنفيذ.",
        primaryAction: "اطلب جلسة أولية",
        noteTitle: "ما الذي يكفي لإرساله",
        noteDescription:
          "بضع سطور عن النشاط ونقطة الضغط والموضوع الذي تريد مناقشته تكفي للبدء.",
      },
      form: {
        eyebrow: "نموذج التواصل",
        title: "أرسل الأساسيات لنبدأ من النقطة الصحيحة.",
        description:
          "أبقِ الرسالة مختصرة. المطلوب هنا فهم الوضع، لا جمع مواصفات كاملة من أول تواصل.",
        note:
          "يمكن تحديد النطاق التفصيلي وتسلسل التنفيذ والقرارات التقنية بعد النقاش الأول.",
        submitLabel: "إرسال الاستفسار",
        fields: {
          name: "الاسم",
          company: "اسم الشركة",
          email: "البريد الإلكتروني",
          phone: "الهاتف أو واتساب",
          service: "الخدمة المطلوبة",
          brief: "ملخص المشروع",
          nextStep: "طريقة المتابعة المناسبة",
        },
        placeholders: {
          name: "اسمك",
          company: "اسم الشركة أو النشاط",
          email: "you@company.com",
          phone: "الهاتف أو واتساب",
          servicePrompt: "اختر خدمة",
          brief:
            "اشرح باختصار ما الذي يحتاجه النشاط، أو ما الذي لا يعمل جيداً الآن، أو نوع المشروع الذي تفكر فيه.",
          nextStepPrompt: "اختر طريقة المتابعة",
        },
        serviceNotSureLabel: "لست متأكداً بعد",
        nextStepOptions: [
          { value: "contact", label: "استفسار مكتوب" },
          { value: "discovery-call", label: "طلب جلسة أولية" },
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
        title: "الرسالة الأولى هدفها توضيح الاتجاه، لا حسم كل شيء من البداية.",
        description:
          "تستخدم Benyah الاستفسار الأول لفهم الوضع بشكل صحيح، وتحديد ما إذا كانت جلسة قصيرة هي الخطوة التالية الأنسب، ثم صياغة النطاق من هناك.",
        bestFitTitle: "أنسب أنواع الاستفسارات لهذا النموذج",
        bestFitDescription:
          "يعمل نموذج التواصل بأفضل صورة عندما تكون هناك حاجة فعلية في مشروع أو تشغيل تحتاج إلى نقاش واضح.",
        nextStepsTitle: "بعد إرسال الرسالة",
        nextStepsDescription:
          "عندما تتضح الصورة الأولى، يصبح من الأسهل تحديد ما إذا كانت الخطوة التالية جلسة أولية أو نقاش مشروع أو توصية أوضح بالخدمة المناسبة.",
        bestFitPoints: [
          "موقع أو حضور رقمي لم يعد يعكس مستوى النشاط كما ينبغي",
          "احتكاك في سير العمل أو أعمال متكررة أو أنظمة منفصلة تبطئ التنفيذ",
          "حاجة إلى حجز أوضح أو رؤية تشغيلية أفضل أو أدوات داخلية أقوى",
        ],
        points: [
          "يكفي ملخص مختصر لبدء نقاش جاد",
          "يمكن توضيح الخدمة المناسبة أو مزيج الخدمات معاً",
          "يمكن تحديد النطاق والتوقيت والتسلسل بعد المراجعة الأولى",
        ],
      },
      finalCta: {
        eyebrow: "جاهز للبداية",
        title: "رسالة أولى واضحة تكفي لتبدأ المحادثة الصحيحة.",
        description:
          "إذا لم تكن الخدمة المناسبة واضحة بالكامل بعد، فهذا طبيعي. تساعد Benyah على تحديد ما إذا كانت الخطوة التالية جلسة أولية أو نقاش مشروع محدد أو مراجعة أوسع للوضع الحالي.",
        supportingLine: "وضوح قبل التنفيذ.",
        primaryAction: "أرسل استفسارك",
        secondaryAction: "اطلب جلسة أولية",
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
