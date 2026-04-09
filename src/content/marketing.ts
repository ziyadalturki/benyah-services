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
        "Benyah builds premium websites, automation, booking workflows, business systems, CAFM/CMMS solutions, n8n automations, and internal tools for small businesses.",
      languageSwitcherLabel: "Switch language",
    },
    navigation: [
      { href: "/", label: "Home" },
      { href: "/services", label: "Services" },
      { href: "/about", label: "About" },
      { href: "/case-studies", label: "Case Studies" },
      { href: "/contact", label: "Contact" },
    ],
    ctas: {
      primary: "Book a Discovery Call",
      secondary: "Explore Services",
      contact: "Discuss Your Business",
    },
    footer: {
      strapline:
        "Premium websites, workflows, and systems designed for better small-business operations.",
      note: "Built for businesses that want more structure, more clarity, and less operational friction.",
    },
    home: {
      eyebrow: "Benyah",
      title: "The digital foundation for better business operations.",
      description:
        "Benyah helps small businesses run with more structure through websites, automations, booking workflows, business systems, CAFM/CMMS solutions, n8n automations, and internal tools.",
      supportingLine:
        "Built for businesses that have outgrown fragmented tools, manual handoffs, and unclear systems.",
      highlightsLabel: "What Benyah Covers",
      highlights: [
        "Premium websites that build trust and generate the right enquiries",
        "Automations and booking workflows that reduce manual coordination",
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
          "Benyah connects the front end of the business with the systems behind it.",
        asideDescription:
          "The goal is not to add more software. It is to create a clearer operating structure between customer experience, workflow, and internal execution.",
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
          "Benyah is built for businesses that want clear thinking, structured execution, and systems that make sense commercially.",
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
        "Benyah helps small businesses build better structure across digital presence, workflows, and day-to-day operations.",
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
            title: "Internal Workflows",
            description:
              "For teams dealing with repeated admin, disjointed handoffs, or tools that are not speaking to each other properly.",
            services: ["automation", "n8n-automations"],
          },
          {
            title: "Operational Control",
            description:
              "For operations that need better oversight across assets, requests, reporting, and internal execution.",
            services: ["cafm-cmms", "saas-tools"],
          },
          {
            title: "Digital Infrastructure",
            description:
              "For businesses that need the front end, workflow, and internal systems to work as one coherent foundation.",
            services: ["websites", "automation", "saas-tools"],
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
            "Operational automations that reduce manual work, tighten handoffs, and make recurring processes more consistent.",
          heroSupportingLine:
            "Best for businesses dealing with repeated admin, fragmented workflows, and too much process living in inboxes and memory.",
          intro:
            "Automation Solutions help small businesses remove avoidable manual work across enquiries, delivery, follow-up, reporting, and internal coordination. Benyah focuses on practical process design so the right actions happen at the right time with less reliance on memory, inbox chasing, or repeated admin.",
          capabilities: [
            "Workflow mapping and automation logic",
            "Cross-system handoffs and notifications",
            "Repeatable approvals, follow-up, and status flows",
          ],
          outcomes: [
            "Less manual coordination",
            "More consistent execution",
            "Clearer operational visibility",
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
              title: "Growing teams working across several tools",
              description:
                "Useful when the software stack already exists, but the workflow between tools is weak, duplicated, or easy to break.",
            },
            {
              title: "Owners and operators who need more process control",
              description:
                "Ideal for businesses that want clearer process control and fewer missed steps without adding unnecessary system complexity.",
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
          title: "Booking Workflows",
          summary:
            "Structured booking systems that manage scheduling, confirmations, reminders, intake, and internal handoff with less friction.",
          heroSupportingLine:
            "Best for businesses where booking quality directly affects customer experience, team readiness, and daily capacity.",
          intro:
            "Booking Workflows turn scheduling from a patchwork of steps into a dependable service process. Benyah designs the logic around booking rules, client intake, confirmations, reminders, and what the team needs internally before delivery begins.",
          capabilities: [
            "Booking rules, availability, and intake steps",
            "Confirmation, reminder, and follow-up flows",
            "Internal notifications and service handoff logic",
          ],
          outcomes: [
            "Fewer missed steps and no-shows",
            "Smoother customer experience",
            "Better-prepared internal delivery",
          ],
          problems: [
            {
              title: "Back-and-forth scheduling",
              description:
                "Clients and staff spend too much time resolving availability, correcting details, or managing avoidable scheduling confusion.",
            },
            {
              title: "Missing reminders or incomplete intake",
              description:
                "The business lacks a dependable system for confirmations, reminders, forms, or pre-appointment information collection.",
            },
            {
              title: "Weak preparation after booking",
              description:
                "The booking is made, but the internal team does not receive the right information or next-step trigger at the right time.",
            },
          ],
          audience: [
            {
              title: "Appointment-based businesses",
              description:
                "A strong fit for businesses where booking is central to revenue, scheduling quality, and client experience.",
            },
            {
              title: "Teams that prepare work after a booking is made",
              description:
                "Useful when bookings trigger intake review, staffing, reminders, preparation steps, or additional internal coordination.",
            },
            {
              title: "Operators treating booking as part of operations",
              description:
                "Best when scheduling affects service readiness, capacity planning, and day-to-day workflow, not just calendar availability.",
            },
          ],
          faqs: [
            {
              question: "Can you work with our current booking platform?",
              answer:
                "Usually yes. The first step is understanding the current setup and deciding whether it should be improved, connected, or replaced.",
            },
            {
              question: "Do you handle reminders, confirmations, and intake too?",
              answer:
                "Yes. Booking quality depends on the communication and preparation around it, so reminders, confirmations, intake steps, and internal notifications can be designed together.",
            },
            {
              question: "Is this only useful for high-volume booking businesses?",
              answer:
                "No. Even modest booking volume can create real friction when the process is inconsistent, manual, or poorly connected to delivery.",
            },
          ],
        },
        "cafm-cmms": {
          title: "CAFM / CMMS Solutions",
          summary:
            "Structured CAFM / CMMS solutions for assets, work orders, service records, and clearer facilities control.",
          heroSupportingLine:
            "Best for facilities and maintenance operations that need better visibility, coordination, and operational record-keeping.",
          intro:
            "CAFM / CMMS Solutions give facilities-led businesses a clearer system for managing assets, requests, work orders, service history, and reporting. Benyah focuses on practical operational structure so teams can see what is open, what is due, what has been completed, and where attention is needed.",
          capabilities: [
            "Asset, location, and record structure",
            "Work order and request workflows",
            "Oversight dashboards and reporting views",
          ],
          outcomes: [
            "Better control over service activity",
            "Cleaner maintenance records",
            "Stronger operational visibility",
          ],
          problems: [
            {
              title: "Requests tracked across disconnected channels",
              description:
                "Maintenance requests are moving through email, calls, spreadsheets, or separate tools with no dependable single view.",
            },
            {
              title: "Incomplete service history and asset records",
              description:
                "Teams cannot easily see what has been done, what is recurring, or how a specific asset or site has been serviced over time.",
            },
            {
              title: "Limited operational oversight",
              description:
                "Managers lack a clean view across workload, completion status, contractor activity, response times, or recurring issues.",
            },
          ],
          audience: [
            {
              title: "Facilities and maintenance teams",
              description:
                "A strong fit for teams that need more control over requests, assets, work status, and service delivery quality.",
            },
            {
              title: "Property and site operations",
              description:
                "Useful where multiple sites, assets, service providers, or internal stakeholders need a clearer operational structure.",
            },
            {
              title: "Businesses moving beyond informal tracking",
              description:
                "Ideal when maintenance activity is still being managed through spreadsheets, email, or ad hoc request handling.",
            },
          ],
          faqs: [
            {
              question: "Does this need a large enterprise CMMS to be worthwhile?",
              answer:
                "No. The right setup depends on the scale and complexity of the operation. Many businesses get better value from a focused, well-structured system than from an oversized platform.",
            },
            {
              question: "Can we start with requests or work orders before expanding?",
              answer:
                "Yes. It is often better to begin with the highest-friction part of the operation, then expand once the process and record structure are clear.",
            },
            {
              question: "Can the setup reflect our process and reporting needs?",
              answer:
                "Yes. Benyah shapes the setup around the actual operating model so the system supports the team instead of forcing the team into the wrong structure.",
            },
          ],
        },
        "n8n-automations": {
          title: "n8n Automations",
          summary:
            "Flexible n8n automations for connected tools, webhook-based workflows, and more controlled process execution.",
          heroSupportingLine:
            "Best for businesses that need deeper integrations, more flexible workflow logic, and cleaner data movement between systems.",
          intro:
            "n8n Automations are designed for workflows that need more control than basic automation tools usually allow. Benyah uses n8n to connect systems, handle webhooks and APIs, move data cleanly, and shape logic around the way the business actually operates.",
          capabilities: [
            "Webhook and API-driven workflows",
            "Cross-system data movement and sync logic",
            "Flexible branching, conditions, and process orchestration",
          ],
          outcomes: [
            "More connected business systems",
            "Faster, cleaner process execution",
            "Less manual data handling",
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
              title: "Brittle integrations as complexity grows",
              description:
                "The business needs connected systems, but the current setup cannot support the required webhook, API, or logic depth reliably.",
            },
          ],
          audience: [
            {
              title: "Businesses using several SaaS tools",
              description:
                "A strong fit when forms, CRMs, internal tools, and other systems need deeper integration and more reliable data movement.",
            },
            {
              title: "Teams relying on webhooks, APIs, or custom logic",
              description:
                "Useful when the process needs more precision than a basic rule-based no-code tool can comfortably support.",
            },
            {
              title: "Operators who want flexible automation without enterprise overhead",
              description:
                "Best when the business wants automation that can evolve thoughtfully as process design becomes more structured.",
            },
          ],
          faqs: [
            {
              question: "Why use n8n instead of a simpler automation tool?",
              answer:
                "Because it offers more flexibility where the workflow needs custom logic, cleaner orchestration, or broader integration options. It is chosen where that extra control genuinely matters.",
            },
            {
              question: "Can n8n work with the systems we already use?",
              answer:
                "Usually yes, as long as those systems provide workable access points such as APIs, webhooks, or supported connectors.",
            },
            {
              question: "Is n8n only suitable for technical businesses?",
              answer:
                "No. What matters is that the workflow is designed clearly and owned properly. The technical layer should support the business, not become an obstacle to it.",
            },
          ],
        },
        "saas-tools": {
          title: "Business Systems / Internal Tools",
          summary:
            "Fit-for-purpose internal systems that improve data flow, visibility, and administrative efficiency across the business.",
          heroSupportingLine:
            "Best for businesses whose core internal workflows no longer fit spreadsheets, generic software, or disconnected tools.",
          intro:
            "Business Systems / Internal Tools are for workflows that are too important, too specific, or too operationally central to keep running through improvised tools. Benyah helps define and build structured internal systems around the data, steps, users, and oversight the business actually needs.",
          capabilities: [
            "Internal workflow and data model design",
            "Operational dashboards, admin tools, and controls",
            "Role-based process views and structured records",
          ],
          outcomes: [
            "Better-fit internal systems",
            "Cleaner operational data flow",
            "Greater administrative efficiency",
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
              title: "Businesses with specialised internal workflows",
              description:
                "A strong fit when the operational model is specific enough that generic software keeps forcing compromise.",
            },
            {
              title: "Teams held together by patchwork tools",
              description:
                "Useful when spreadsheets, shared inboxes, and multiple disconnected apps are still carrying core internal work.",
            },
            {
              title: "Leaders needing stronger internal visibility and control",
              description:
                "Best for businesses that want cleaner oversight, stronger process control, and systems designed around real internal operations.",
            },
          ],
          faqs: [
            {
              question: "When is a custom internal tool justified?",
              answer:
                "Usually when a recurring workflow, reporting need, or internal process is being poorly served by generic software and creating ongoing operational drag.",
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
          "The work spans websites, automation, booking workflows, CAFM / CMMS, n8n automations, business systems, and internal tools. The goal is not to add technology for its own sake. It is to create a stronger foundation for how the business presents itself, runs internally, and delivers day to day.",
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
          "Benyah focuses on practical work that improves clarity, workflow, and operational control. Not every project needs to become a public story.",
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
          title: "Booking Workflow Setup",
          sector: "Booking Systems",
          summary:
            "A structured booking setup for service businesses where appointment flow, reminders, and internal readiness need to work together cleanly.",
          addressed:
            "Scheduling rules, confirmations, reminder flow, intake steps, and the handoff from booking into delivery.",
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
          title: "CAFM / CMMS Operational Setup",
          sector: "CAFM / CMMS",
          summary:
            "A structured facilities setup for handling assets, work orders, service records, and operational oversight more cleanly.",
          addressed:
            "Request flow, asset structure, work order status, reporting visibility, and day-to-day coordination across maintenance activity.",
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
          title: "n8n Integration Workflow",
          sector: "n8n Automations",
          summary:
            "A connected n8n workflow designed for businesses that need more control over integrations, logic, and cross-system execution.",
          addressed:
            "Webhook and API coordination, data movement between tools, and automation logic beyond basic rule-based setups.",
          outcome:
            "More connected systems, cleaner data flow, and faster process execution.",
          scope:
            "Integration workflow or deeper automation build using n8n.",
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
    contact: {
      eyebrow: "Contact",
      title: "Start a structured conversation with Benyah.",
      description:
        "Get in touch about websites, automation, booking workflows, business systems, CAFM / CMMS, n8n automations, or broader operational structure.",
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
        cardTitle: "What To Include",
        cardDescription:
          "A short practical brief is enough. The goal is to understand the business need, not to collect a full specification on the first step.",
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
          { value: "discovery-call", label: "Discovery Call" },
        ],
        statuses: {
          successTitle: "Enquiry received",
          successDescription:
            "Thank you. Your enquiry has been captured locally and is ready to be routed into a future webhook, CRM, or automation flow.",
          errorTitle: "Unable to send enquiry",
          errorDescription:
            "Something interrupted the submission. Please review the form and try again.",
        },
      },
      trust: {
        eyebrow: "After Initial Contact",
        title: "The first message does not need to carry the full project scope.",
        description:
          "In many cases, the right system shape becomes clearer after a short discussion. The initial enquiry is simply the starting point.",
        points: [
          "Detailed scope can be defined after first contact",
          "A short brief is enough to begin a serious discussion",
          "The right service or combination of services can be clarified together",
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
        "تساعد Benyah الشركات الصغيرة عبر مواقع احترافية وأنظمة تشغيل وأتمتة وسير عمل للحجز وحلول CAFM/CMMS وأدوات داخلية مخصصة.",
      languageSwitcherLabel: "تغيير اللغة",
    },
    navigation: [
      { href: "/", label: "الرئيسية" },
      { href: "/services", label: "الخدمات" },
      { href: "/about", label: "من نحن" },
      { href: "/case-studies", label: "دراسات الحالة" },
      { href: "/contact", label: "تواصل" },
    ],
    ctas: {
      primary: "احجز مكالمة اكتشاف",
      secondary: "استكشف الخدمات",
      contact: "ناقش احتياجك",
    },
    footer: {
      strapline:
        "مواقع وأنظمة وسير عمل رقمية مصممة بهيكل أوضح لعمليات الشركات الصغيرة.",
      note: "مصممة للأعمال التي تريد وضوحاً أكبر وهيكلاً أفضل واحتكاكاً تشغيلياً أقل.",
    },
    home: {
      eyebrow: "Benyah",
      title: "الأساس الرقمي لعمليات أعمال أكثر وضوحاً.",
      description:
        "تساعد Benyah الشركات الصغيرة على العمل بهيكل أوضح من خلال المواقع الإلكترونية، الأتمتة، أنظمة الحجز، الأنظمة التشغيلية، حلول CAFM/CMMS، أتمتة n8n، والأدوات الداخلية.",
      supportingLine:
        "مبنية للأعمال التي تجاوزت الأدوات المبعثرة، والخطوات اليدوية، والأنظمة غير الواضحة.",
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
          "الهدف ليس إضافة المزيد من البرامج، بل بناء هيكل أوضح بين تجربة العميل، وسير العمل، والتنفيذ الداخلي.",
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
          "Benyah مناسبة للأعمال التي تريد تفكيراً واضحاً وتنفيذاً منظماً وأنظمة منطقية تجارياً.",
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
        "تساعد Benyah الشركات الصغيرة على بناء هيكل أوضح عبر الحضور الرقمي وسير العمل والعمليات اليومية.",
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
            title: "سير العمل الداخلي",
            description:
              "للفرق التي تتعامل مع أعمال إدارية متكررة أو أدوات لا تتكامل جيداً مع بعضها.",
            services: ["automation", "n8n-automations"],
          },
          {
            title: "السيطرة التشغيلية",
            description:
              "للعمليات التي تحتاج رؤية أفضل عبر الأصول والطلبات والتقارير والتنفيذ الداخلي.",
            services: ["cafm-cmms", "saas-tools"],
          },
          {
            title: "البنية الرقمية",
            description:
              "للأعمال التي تحتاج أن يعمل الموقع والتدفق والأنظمة الداخلية كأساس واحد متماسك.",
            services: ["websites", "automation", "saas-tools"],
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
            "أتمتة تشغيلية تقلل العمل اليدوي وتحسن التسليم بين المراحل وتجعل العمليات المتكررة أكثر اتساقاً.",
          heroSupportingLine:
            "مناسبة للأعمال التي تستهلكها الأعمال المتكررة وسير العمل المتفكك والاعتماد الزائد على البريد والذاكرة.",
          intro:
            "تساعد حلول الأتمتة في Benyah الشركات الصغيرة على إزالة العمل اليدوي غير الضروري عبر الاستفسارات والتنفيذ والمتابعة والتقارير والتنسيق الداخلي. التركيز هنا عملي: أن تحدث الخطوات الصحيحة في الوقت الصحيح مع اعتماد أقل على التذكر أو المتابعة اليدوية أو الأعمال الإدارية المتكررة.",
          capabilities: [
            "تحليل سير العمل ومنطق الأتمتة",
            "الربط بين الأنظمة والإشعارات",
            "تدفقات اعتماد ومتابعة وحالات قابلة للتكرار",
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
              question: "هل ستجعل الأتمتة التشغيل أكثر تعقيداً؟",
              answer:
                "لا. الهدف هو العكس: عملية أوضح واعتماد أقل على الخطوات اليدوية ووضوح أكبر حول ما الذي يجب أن يحدث ومتى.",
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
                "نعم. الموقع غالباً جزء من بنية تشغيلية أوسع، لذلك يمكن التخطيط للنماذج وتدفقات الحجز ومسارات الأتمتة ضمن البناء نفسه.",
            },
            {
              question: "هل هذه الخدمة مخصصة لإعادة التصميم فقط أم تشمل موقعاً جديداً؟",
              answer:
                "كلاهما. النهج المناسب يعتمد على ما إذا كان يمكن تحسين الموقع الحالي هيكلياً أو أن النشاط سيكون أفضل بإعادة بناء صحيحة من البداية.",
            },
          ],
        },
        "booking-workflows": {
          title: "أنظمة الحجز",
          summary:
            "أنظمة حجز منظمة تدير الجدولة والتأكيدات والتذكيرات ونماذج الإدخال والتسليم الداخلي باحتكاك أقل.",
          heroSupportingLine:
            "مناسبة للأعمال التي تؤثر فيها جودة الحجز مباشرة على تجربة العميل وجاهزية الفريق والطاقة اليومية.",
          intro:
            "تحول Benyah الحجز من مجموعة خطوات متفرقة إلى عملية خدمة يمكن الاعتماد عليها. يتم تصميم المنطق حول قواعد الحجز ومعلومات العميل الأولية والتأكيدات والتذكيرات وما يحتاجه الفريق داخلياً قبل بدء التنفيذ.",
          capabilities: [
            "قواعد الحجز والتوفر وخطوات الإدخال",
            "تدفقات التذكير والتأكيد والمتابعة",
            "إشعارات داخلية ومنطق تسليم الخدمة",
          ],
          outcomes: [
            "خطوات فائتة وحالات عدم حضور أقل",
            "تجربة عميل أكثر سلاسة",
            "تنفيذ داخلي أكثر جاهزية",
          ],
          problems: [
            {
              title: "تبادل طويل في الجدولة",
              description:
                "يقضي العميل والفريق وقتاً أطول من اللازم في تنسيق المواعيد أو تصحيح التفاصيل أو معالجة ارتباك كان يمكن تجنبه.",
            },
            {
              title: "غياب التذكيرات أو إدخال غير مكتمل",
              description:
                "لا توجد بنية موثوقة للتأكيدات والتذكيرات والنماذج أو جمع المعلومات قبل الموعد.",
            },
            {
              title: "ضعف الاستعداد بعد الحجز",
              description:
                "يتم الحجز، لكن الفريق الداخلي لا يستلم المعلومات أو الإشعار أو الخطوة التالية في الوقت المناسب.",
            },
          ],
          audience: [
            {
              title: "الأعمال المعتمدة على المواعيد",
              description:
                "مناسبة عندما يكون الحجز جزءاً أساسياً من الإيراد وجودة الجدولة وتجربة العميل.",
            },
            {
              title: "الفرق التي تبدأ التجهيز بعد تأكيد الحجز",
              description:
                "مفيدة عندما يطلق الحجز مراجعة إدخال أو تجهيزاً أو توزيعاً للموظفين أو تنسيقاً داخلياً إضافياً.",
            },
            {
              title: "المشغلون الذين يرون الحجز جزءاً من التشغيل",
              description:
                "الأفضل عندما يؤثر الحجز على جاهزية الخدمة وتخطيط الطاقة الاستيعابية وسير العمل اليومي، لا مجرد توفر المواعيد.",
            },
          ],
          faqs: [
            {
              question: "هل يمكنكم العمل مع منصة الحجز الحالية لدينا؟",
              answer:
                "غالباً نعم. الخطوة الأولى هي فهم الوضع الحالي ثم تقرير ما إذا كان الأفضل تحسينه أو ربطه أو استبداله.",
            },
            {
              question: "هل تشمل الخدمة التذكيرات والتأكيدات والإدخال المسبق؟",
              answer:
                "نعم. جودة الحجز تعتمد على ما يحيط به من تواصل وتجهيز، لذلك يمكن تصميم التذكيرات والتأكيدات وخطوات الإدخال والإشعارات الداخلية معاً.",
            },
            {
              question: "هل هذه الخدمة مفيدة فقط للأعمال ذات الحجم الكبير؟",
              answer:
                "لا. حتى حجم الحجز المتواضع قد يسبب احتكاكاً حقيقياً عندما تكون العملية غير متسقة أو يدوية أو غير مرتبطة جيداً بالتنفيذ.",
            },
          ],
        },
        "cafm-cmms": {
          title: "حلول CAFM / CMMS",
          summary:
            "حلول CAFM / CMMS منظمة للأصول وأوامر العمل والسجلات التشغيلية وسيطرة أوضح على أعمال المرافق.",
          heroSupportingLine:
            "مناسبة لعمليات المرافق والصيانة التي تحتاج رؤية أفضل وتنسيقاً أقوى وسجلات تشغيلية أوضح.",
          intro:
            "تمنح حلول CAFM / CMMS الأعمال المعتمدة على المرافق نظاماً أوضح لإدارة الأصول والطلبات وأوامر العمل وسجل الخدمة والتقارير. تركيز Benyah هنا عملي: أن تعرف الفرق ما المفتوح وما المستحق وما تم تنفيذه وأين توجد نقاط الانتباه داخل التشغيل.",
          capabilities: [
            "هيكلة الأصول والمواقع والسجلات",
            "تدفقات أوامر العمل والطلبات",
            "لوحات إشراف وتقارير تشغيلية",
          ],
          outcomes: [
            "سيطرة أفضل على النشاط الخدمي",
            "سجلات صيانة أنظف",
            "رؤية تشغيلية أقوى",
          ],
          problems: [
            {
              title: "طلبات موزعة على قنوات متفرقة",
              description:
                "تتحرك طلبات الصيانة بين البريد والاتصالات والجداول أو أدوات منفصلة بدون رؤية واحدة موثوقة.",
            },
            {
              title: "سجل خدمة وأصول غير مكتمل",
              description:
                "لا تستطيع الفرق رؤية ما تم تنفيذه أو ما يتكرر أو تاريخ خدمة أصل أو موقع معين بشكل واضح عبر الوقت.",
            },
            {
              title: "إشراف تشغيلي محدود",
              description:
                "يفتقد المدراء رؤية واضحة للأحمال وحالة الإنجاز وأداء المتعهدين وأزمنة الاستجابة أو المشكلات المتكررة.",
            },
          ],
          audience: [
            {
              title: "فرق المرافق والصيانة",
              description:
                "مناسبة للفرق التي تحتاج سيطرة أفضل على الطلبات والأصول وحالة العمل وجودة التنفيذ.",
            },
            {
              title: "تشغيل المواقع والعقارات",
              description:
                "مفيدة عندما توجد مواقع متعددة أو أصول أو مزودو خدمة أو أطراف داخلية تحتاج إلى بنية تشغيلية أوضح.",
            },
            {
              title: "الأعمال التي تنتقل إلى ما بعد التتبع غير الرسمي",
              description:
                "مثالية عندما ما زالت أعمال الصيانة تُدار عبر الجداول أو البريد أو المعالجة غير المنظمة للطلبات.",
            },
          ],
          faqs: [
            {
              question: "هل يجب أن تكون المنصة كبيرة حتى تكون مفيدة؟",
              answer:
                "لا. الشكل المناسب يعتمد على حجم وتعقيد التشغيل. كثير من الأعمال تستفيد أكثر من نظام مركز وواضح بدلاً من منصة أكبر من حاجتها.",
            },
            {
              question: "هل يمكن أن نبدأ بالطلبات أو أوامر العمل ثم نتوسع؟",
              answer:
                "نعم. غالباً يكون الأفضل البدء في الجزء الأعلى احتكاكاً من التشغيل ثم التوسع بعد اتضاح العملية وهيكل السجل.",
            },
            {
              question: "هل يمكن أن يعكس الإعداد طريقة عملنا وتقاريرنا؟",
              answer:
                "نعم. تصوغ Benyah الإعداد حول نموذج التشغيل الفعلي حتى يدعم النظام الفريق بدلاً من فرض هيكل غير مناسب عليه.",
            },
          ],
        },
        "n8n-automations": {
          title: "أتمتة n8n",
          summary:
            "أتمتة n8n مرنة لربط الأدوات وتدفقات الويب هوك وتنفيذ العمليات بدرجة أعلى من السيطرة.",
          heroSupportingLine:
            "مناسبة للأعمال التي تحتاج تكاملاً أعمق ومنطق تدفق أكثر مرونة وحركة بيانات أنظف بين الأنظمة.",
          intro:
            "صُممت أتمتة n8n للتدفقات التي تحتاج سيطرة أكبر مما تسمح به أدوات الأتمتة الأساسية عادة. تستخدم Benyah n8n لربط الأنظمة والتعامل مع الـ webhooks والواجهات البرمجية ونقل البيانات بشكل نظيف وصياغة المنطق حول طريقة عمل النشاط فعلياً.",
          capabilities: [
            "تدفقات مبنية على الـ webhooks والواجهات البرمجية",
            "منطق مزامنة ونقل البيانات بين الأنظمة",
            "تفريع مرن وشروط وتسلسل للعمليات",
          ],
          outcomes: [
            "أنظمة أعمال أكثر ترابطاً",
            "تنفيذ أسرع وأنظف للعمليات",
            "تعامل يدوي أقل مع البيانات",
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
              title: "تكاملات هشة مع ازدياد التعقيد",
              description:
                "يحتاج النشاط إلى أن تعمل أنظمته معاً، لكن الإعداد الحالي لا يدعم عمق الربط أو الـ webhooks أو المنطق المطلوب بشكل موثوق.",
            },
          ],
          audience: [
            {
              title: "الأعمال التي تستخدم عدة أدوات SaaS",
              description:
                "مناسبة عندما تحتاج النماذج أو الـ CRM أو الأدوات الداخلية أو بقية الأنظمة إلى تكامل أعمق وحركة بيانات أكثر موثوقية.",
            },
            {
              title: "الفرق التي تعتمد على الـ webhooks أو الواجهات البرمجية أو المنطق المخصص",
              description:
                "مفيدة عندما يحتاج التدفق إلى صياغة أدق مما تسمح به الأدوات المبنية على قواعد بسيطة.",
            },
            {
              title: "المشغلون الذين يريدون مرونة بدون حمل أنظمة كبيرة",
              description:
                "الأفضل عندما يريد النشاط أتمتة يمكن تطويرها تدريجياً مع ازدياد تنظيم العملية.",
            },
          ],
          faqs: [
            {
              question: "لماذا نستخدم n8n بدلاً من أداة أبسط؟",
              answer:
                "لأنها تمنح مرونة أعلى عندما يحتاج التدفق إلى منطق مخصص أو تنسيق أنظف أو خيارات تكامل أوسع. يتم اختيارها عندما تكون هذه السيطرة الإضافية ذات قيمة فعلية.",
            },
            {
              question: "هل يمكن لـ n8n العمل مع الأنظمة الحالية لدينا؟",
              answer:
                "غالباً نعم، ما دامت هذه الأنظمة توفر نقاط وصول مناسبة مثل الواجهات البرمجية أو الـ webhooks أو الموصلات المدعومة.",
            },
            {
              question: "هل n8n مناسب فقط للأعمال التقنية؟",
              answer:
                "لا. المهم أن يُصمم التدفق بوضوح وأن تكون له ملكية تشغيلية صحيحة. الطبقة التقنية يجب أن تخدم العمل لا أن تصبح عبئاً عليه.",
            },
          ],
        },
        "saas-tools": {
          title: "الأنظمة التشغيلية / الأدوات الداخلية",
          summary:
            "أنظمة داخلية مناسبة لطبيعة العمل ترفع انسياب البيانات والرؤية والكفاءة الإدارية عبر النشاط.",
          heroSupportingLine:
            "مناسبة للأعمال التي لم تعد عملياتها الداخلية الأساسية تلائم الجداول أو البرمجيات العامة أو الأدوات المتفرقة.",
          intro:
            "تخدم هذه الفئة الأعمال التي أصبحت عملياتها الداخلية مهمة أو خاصة أو محورية لدرجة يصعب معها الاستمرار عبر أدوات مرتجلة. تساعد Benyah على تعريف وبناء أنظمة داخلية منظمة حول البيانات والخطوات والمستخدمين والإشراف الذي يحتاجه النشاط فعلياً.",
          capabilities: [
            "تصميم تدفقات داخلية ونماذج بيانات",
            "لوحات تشغيل وأدوات إدارية وعناصر تحكم",
            "واجهات حسب الدور وسجلات منظمة",
          ],
          outcomes: [
            "أنظمة داخلية أنسب للنشاط",
            "تدفق بيانات تشغيلي أنظف",
            "كفاءة إدارية أعلى",
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
              question: "هل يمكن أن يعمل هذا بجانب البرامج التي نستخدمها الآن؟",
              answer:
                "نعم. في كثير من الحالات يكون الأفضل إضافة الطبقة الداخلية المناسبة فوق المنظومة الحالية بدلاً من استبدال كل شيء دفعة واحدة.",
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
          "يمتد العمل عبر المواقع الإلكترونية والأتمتة وتدفقات الحجز وحلول CAFM / CMMS والأنظمة التجارية وأتمتة n8n والأدوات الداخلية. الهدف ليس إضافة التقنية لذاتها، بل بناء أساس أقوى لكيفية تقديم النشاط لنفسه وكيف يدير عمله داخلياً وكيف ينفذ يومياً.",
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
          "تركز Benyah على العمل العملي الذي يحسن الوضوح وسير العمل والسيطرة التشغيلية. وليس كل مشروع بحاجة إلى أن يتحول إلى قصة منشورة.",
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
          title: "إعداد تدفق الحجز",
          sector: "أنظمة الحجز",
          summary:
            "إعداد حجز منظم للأعمال الخدمية التي تحتاج أن تعمل المواعيد والتذكيرات والاستعداد الداخلي كمنظومة واحدة.",
          addressed:
            "قواعد الجدولة والتأكيدات والتذكيرات وخطوات الإدخال والتسليم من الحجز إلى التنفيذ.",
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
          title: "إعداد تشغيلي لحلول CAFM / CMMS",
          sector: "CAFM / CMMS",
          summary:
            "إعداد منظم للمرافق لمعالجة الأصول وأوامر العمل والسجلات التشغيلية والإشراف اليومي بشكل أوضح.",
          addressed:
            "تدفق الطلبات وهيكلة الأصول وحالات أوامر العمل ورؤية التقارير والتنسيق اليومي لأعمال الصيانة.",
          outcome:
            "سيطرة تشغيلية أفضل وسجلات أنظف ورؤية أوضح عبر أعمال المرافق.",
          scope:
            "إعداد نظام أو بناء تشغيلي متعدد الأجزاء.",
        },
        {
          title: "أداة داخلية أو لوحة تشغيل",
          sector: "الأنظمة التجارية",
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
          title: "تدفق تكامل عبر n8n",
          sector: "أتمتة n8n",
          summary:
            "تدفق مترابط عبر n8n للأعمال التي تحتاج سيطرة أعلى على التكاملات والمنطق وتنفيذ العمليات بين الأنظمة.",
          addressed:
            "تنسيق الـ webhooks والواجهات البرمجية وحركة البيانات بين الأدوات ومنطق الأتمتة الأعمق من الإعدادات الأساسية.",
          outcome:
            "أنظمة أكثر ترابطاً وتدفق بيانات أنظف وتنفيذ أسرع للعمليات.",
          scope:
            "تدفق تكامل أو بناء أتمتة أعمق باستخدام n8n.",
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
    contact: {
      eyebrow: "تواصل",
      title: "ابدأ محادثة منظمة مع Benyah.",
      description:
        "تواصل بخصوص المواقع أو الأتمتة أو تدفقات الحجز أو الأنظمة التجارية أو حلول CAFM / CMMS أو أتمتة n8n أو هيكل تشغيلي أوسع.",
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
            "شكراً لك. تم استلام الاستفسار محلياً وأصبح جاهزاً لربطه لاحقاً مع webhook أو CRM أو مسار أتمتة.",
          errorTitle: "تعذر إرسال الاستفسار",
          errorDescription:
            "حدث ما قاطع عملية الإرسال. يرجى مراجعة النموذج والمحاولة مرة أخرى.",
        },
      },
      trust: {
        eyebrow: "بعد التواصل الأول",
        title: "لا يلزم أن يحمل أول تواصل كامل نطاق المشروع.",
        description:
          "في كثير من الحالات يتضح شكل النظام الصحيح بعد نقاش قصير. الرسالة الأولى هي فقط نقطة البداية.",
        points: [
          "يمكن تحديد النطاق التفصيلي بعد التواصل الأول",
          "يكفي ملخص مختصر لبدء نقاش جاد",
          "يمكن توضيح الخدمة المناسبة أو مزيج الخدمات معاً",
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
