import { defineStore } from "pinia"

export const useLanguageStore = defineStore("language", {
  state: () => ({
    language: localStorage.getItem("lang") || "en",
    translations: {
      layout: {
        logo: "MarkaSphere",
        home: "Home",
        about: "About",
        services: "Services",
        work: "Work",
        insights: "Insights",
        contact: "Contact",
        consultation: "Book Consultation",
        ctaButton: "Start Your Project",
        exploreWork: "Explore Work",
        exploreAll: "Explore All Work",
        viewCase: "View Case Study",
        backToWork: "Back to Portfolio",
        backToInsights: "Back to Insights",
        backToServices: "Back to Services",
        rights: "All rights reserved.",
        navToggleLabel: "Toggle Language",
        themeToggleLabel: "Toggle Theme",
        prevProject: "Previous project",
        nextProject: "Next project",
        metaTitle: "MarkaSphere | Strategic Executive Brand Presence",
        metaDesc: "Some brands are understood before they speak. MarkaSphere builds strategic digital presence designed to shape authority, perception, and premium positioning."
      },
      home: {
        heroBadge: "Strategic Executive Brand Presence",
        heroTitle: "Companies are not judged only by what they offer,\nbut by how they appear.",
        heroDesc: "Your company may have real expertise, strong execution, and professional services… but what clients see first is not what happens inside the company. It is what appears from it. We build visual and marketing presence that reflects brand value with clarity and professionalism.",
        heroCtaPrimary: "Start Your Project",
        heroCtaSecondary: "View Projects",
        problemHeadingPart1: "The problem is not always the quality of what a company offers…",
        problemHeadingPart2: "but how it appears.",
        problemBody: "Many brands offer strong services, yet they do not appear at that level. And in a market filled with similarity, the way a brand appears becomes part of how it is evaluated.",
        narrativeTitle: "First impressions… begin before the first conversation.",
        narrativeLines: [
          "Before any meeting,",
          "Before any call,",
          "Before reading any quote…",
          "Your brand has already started forming a complete image in the client's mind.",
          "From here:"
        ],
        emphasisTitle: "Everything the client sees… becomes part of the impression.",
        emphasisItems: [
          "Colors",
          "Content style",
          "Information structure",
          "Project presentation",
          "Website experience"
        ],
        emphasisClosing: "All shape how a brand is understood in the market. That is why we focus on building presence that reflects the true level of the brand.",
        heroCardBadge: "Strategic Presence",
        heroCardTitle: "MarkaSphere",
        heroCardAuthority: "Brand Authority",
        heroCardEngagement: "Engagement",
        heroCardPositioning: "Positioning",
        heroCardPremium: "Premium",
        servicesBadge: "Strategic Services",
        servicesTitle: "Strategic systems designed to shape premium perception.",
        servicesDesc: "Every interaction, visual layer, and digital surface is crafted to elevate authority and executive positioning.",
        servicesExplore: "Explore Service",
        workBadge: "Selected Work",
        workTitle: "Strategic digital experiences designed to shape perception.",
        workDesc: "In a crowded market, brands aren't compared by services alone. They are compared by presence, impression, and delivery.",
        twoColTitle: "Premium Digital Authority",
        twoColIntro: "We craft executive digital ecosystems that shape perception and elevate brand positioning.",
        twoColClosing: "Every design decision, typography choice, and interaction pattern is engineered to communicate value and authority.",
        twoColItems: [
          "Strategic Brand Architecture",
          "Premium Web Experience",
          "Digital Identity Systems",
          "Executive Communication Design"
        ],
        projectsTitle: "Selected Projects",
        projectsDesc: "Projects created to build stronger visual and marketing presence with greater clarity and professionalism.",
        projectsCtaLabel: "View Projects",
        closingHeading: "If the way your brand appears does not reflect its true level, it may be time to rebuild the image completely.",
        closingListItems: [
          "Clearer",
          "More professional",
          "More organized",
          "More capable of creating the right impression"
        ],
        closingCtaLabel: "Start Your Project",
        serviceItems: [
          {
            title: "Visual Identity",
            description: "Visual identities that give brands stronger clarity and consistency."
          },
          {
            title: "Company Profiles",
            description: "Professional company profiles that present businesses with greater structure and professionalism."
          },
          {
            title: "Websites",
            description: "Modern websites designed to reflect brands with clarity and professionalism."
          },
          {
            title: "Social Media",
            description: "Content systems and designs that maintain a consistent visual presence."
          },
          {
            title: "Page Management",
            description: "Professional management for digital presence and content continuity."
          },
          {
            title: "Marketing & Advertising",
            description: "Marketing solutions that help brands build stronger market presence."
          },
          {
            title: "Video Editing",
            description: "Professional video content that enhances brand presence and impact."
          }
        ]
      },
      about: {
        badge: "Our Philosophy",
        title: "Some brands are understood before they speak.",
        subtitle: "We believe in the power of visual excellence and strategic positioning.",
        desc: "Every touchpoint, visual layer, and digital surface shapes the narrative. We don't treat design and strategy as disconnected elements, but as an integrated system that commands premium authority and executive trust.",
        heroTitle: "We build the way brands appear.",
        heroBody: "MarkaSphere is a specialized creative studio focused on building visual identities, websites, company profiles, content systems, and marketing experiences that help brands appear with greater clarity and professionalism. We do not see design as decoration, but as part of how a brand is perceived and remembered in the market.",
        clarityTitle: "Clarity makes the difference.",
        clarityBody: "In a market filled with similarity, brand strength is not defined only by what is offered, but by how it is understood.",
        clarityList: [
          "Clearer",
          "More consistent",
          "More professional",
          "And more capable of creating trust"
        ],
        differentiatorsTitle: "What makes MarkaSphere different?",
        differentiators: [
          "Commercial understanding before visual decisions",
          "Building complete systems rather than separate elements",
          "Focus on perception and impression",
          "Modern and professional visual language",
          "Combining design and marketing within one system",
          "Attention to visually influential details"
        ],
        metricTitle1: "Brand Impact",
        metricValue1: "+87%",
        metricTitle2: "Growth Factor",
        metricValue2: "4.8x",
        metricTitle3: "Positioning",
        metricValue3: "Premium"
      },
      services: {
        badge: "Core Expertise",
        title: "Systems crafted to shape premium perception.",
        subtitle: "Every detail is engineered to communicate clarity, sophistication, and strategic value.",
        desc: "We offer tailored executive design and advisory solutions for brands that refuse to be compared on price alone. Through modern typography, structured minimalism, and custom digital infrastructure, we build unshakeable brand authority.",
        heroTitle: "From visual identity… to everyday brand presence.",
        heroBody: "MarkaSphere provides integrated visual and marketing solutions that help brands appear with greater clarity, professionalism, and consistency across every touchpoint.",
        categories: {
          all: "All Services",
          brand: "Brand Identity",
          digital: "Digital",
          media: "Media"
        },
        serviceList: [
          {
            title: "Visual Identity",
            category: "brand",
            description: "Visual identities that give brands stronger clarity and consistency.",
            includes: [
              "Logo design & variations",
              "Color palette & typography",
              "Brand guidelines system",
              "Visual language framework"
            ],
            whatsappMessage: "I would like to request Visual Identity service"
          },
          {
            title: "Company Profiles",
            category: "brand",
            description: "Professional company profiles that present businesses with greater structure and professionalism.",
            includes: [
              "Corporate overview design",
              "Service presentation system",
              "Achievement highlights",
              "Professional formatting"
            ],
            whatsappMessage: "I would like to request Company Profiles service"
          },
          {
            title: "Websites",
            category: "digital",
            description: "Modern websites designed to reflect brands with clarity and professionalism.",
            includes: [
              "Website architecture & UX",
              "Responsive design system",
              "Content structure",
              "Performance optimization"
            ],
            whatsappMessage: "I would like to request Website development service"
          },
          {
            title: "Social Media",
            category: "digital",
            description: "Content systems and designs that maintain a consistent visual presence.",
            includes: [
              "Post design templates",
              "Content calendar system",
              "Visual consistency framework",
              "Engagement strategies"
            ],
            whatsappMessage: "I would like to request Social Media Management service"
          },
          {
            title: "Page Management",
            category: "digital",
            description: "Professional management for digital presence and content continuity.",
            includes: [
              "Regular content updates",
              "Performance monitoring",
              "Audience engagement",
              "Strategic optimization"
            ],
            whatsappMessage: "I would like to request Page Management service"
          },
          {
            title: "Marketing & Advertising",
            category: "digital",
            description: "Marketing solutions that help brands build stronger market presence.",
            includes: [
              "Campaign strategy & planning",
              "Ad creative development",
              "Channel optimization",
              "Performance analytics"
            ],
            whatsappMessage: "I would like to request Marketing & Advertising service"
          },
          {
            title: "Video Editing",
            category: "media",
            description: "Professional video content that enhances brand presence and impact.",
            includes: [
              "Video editing & production",
              "Motion graphics",
              "Sound design integration",
              "Multi-format export"
            ],
            whatsappMessage: "I would like to request Video Editing service"
          }
        ]
      },
      work: {
        badge: "Portfolio Experience",
        title: "Selected strategic digital experiences.",
        subtitle: "A curated collection of visual ecosystems and executive web architectures built for premium positioning."
      },
      contact: {
        badge: "Get in Touch",
        title: "Let's shape your brand authority.",
        subtitle: "Tell us about your organization's vision, and let's craft an exceptional digital presence.",
        ctaLabel: "Start Your Project",
        nameLabel: "Full Name",
        companyLabel: "Company",
        phoneLabel: "Phone Number",
        emailLabel: "Email Address",
        serviceLabel: "Service needed",
        messageLabel: "Project Description",
        sendButton: "Start Your Project",
        successMsg: "Thank you. Your inquiry has been received with executive priority.",
        validation: {
          required: "This field is required.",
          invalidEmail: "Please enter a valid email address.",
          invalidPhone: "Please enter a valid phone number."
        }
      },
      projects: {
        heroTitle: "Projects",
        heroBody: "Selected projects created to build stronger visual and marketing presence with greater clarity and professionalism.",
        filterCategories: [
          "Visual Identities",
          "Company Profiles",
          "Websites",
          "Social Media",
          "Video Editing",
          "Marketing Campaigns",
          "Print Design"
        ],
        "nova-executive": {
          title: "Nova Executive Identity",
          category: "Brand Strategy",
          description: "Executive digital identity system designed to elevate perception and strategic positioning.",
          challenge: "Nova Technologies needed a complete brand overhaul to reposition from a B2B service provider to a premium technology partner.",
          solution: "We developed a comprehensive visual identity system built around precision geometry and a refined color palette.",
          results: [
            "Client acquisition cost reduced by 35% within 3 months",
            "Brand perception score increased from 3.2 to 4.7 / 5.0",
            "Executive speaking invitations increased by 200%"
          ]
        },
        "altura-presence": {
          title: "Altura Presence System",
          category: "Executive Experience",
          description: "Editorial digital presence crafted for premium executive communication.",
          challenge: "Altura Capital's digital presence did not match the sophistication of their portfolio.",
          solution: "We designed an editorial digital presence system combining minimalist typography, full-bleed imagery, and a narrative-driven layout.",
          results: [
            "Average session duration increased from 45s to 3m 12s",
            "Inbound inquiry conversion rate improved by 280%",
            "Site was featured on Awwwards and CSS Design Awards"
          ]
        },
        "zenith-brand": {
          title: "Zenith Strategic Brand",
          category: "Digital Authority",
          description: "Luxury editorial brand system focused on clarity, trust, and perception.",
          challenge: "Zenith Holdings needed a unified brand system that could flex across diverse subsidiaries.",
          solution: "We architected a master brand system with a modular design language adaptable to each subsidiary.",
          results: [
            "Brand consistency score improved from 2.1 to 4.8 / 5.0",
            "Internal brand onboarding time reduced by 60%",
            "Unified digital presence led to 45% increase in cross-sell revenue"
          ]
        }
      },
      insights: {
        heroTitle: "Insights on brands… and how they appear in the market.",
        heroBody: "The way a brand appears… influences understanding, trust, impression, and decision-making.",
        articles: [
          {
            title: "Why do some companies appear larger than they really are?",
            meta: "Brand Perception"
          },
          {
            title: "The difference between a company that works well… and one that looks like it does.",
            meta: "Strategic Insight"
          },
          {
            title: "How does presentation affect client decisions?",
            meta: "Customer Influence"
          },
          {
            title: "Visual impression is no longer a decorative element.",
            meta: "Design Thinking"
          },
          {
            title: "Why quality alone is not enough.",
            meta: "Market Psychology"
          },
          {
            title: "How brand perception is built.",
            meta: "Brand Strategy"
          }
        ]
      },
      testimonials: [],
      faq: []
    }
  }),
  actions: {
    async setLanguage(lang) {
      if (lang !== "en" && lang !== "ar") return
      this.language = lang
      localStorage.setItem("lang", lang)
      this.applyLanguage()
      await this.loadTranslations(lang)
    },
    toggleLanguage() {
      this.setLanguage(this.language === "en" ? "ar" : "en")
    },
    applyLanguage() {
      document.documentElement.lang = this.language
      document.documentElement.dir = this.language === "ar" ? "rtl" : "ltr"
    },
    async loadTranslations(lang) {
      try {
        // Fallback / standard English modules loaded dynamically
        const [enHome, enAbout, enServices, enProjects, enInsights, enLayout, enTestimonials, enFaq] = await Promise.all([
          import("../content/locales/en/home.js"),
          import("../content/locales/en/about.js"),
          import("../content/locales/en/services.js"),
          import("../content/locales/en/projects.js"),
          import("../content/locales/en/insights.js"),
          import("../content/locales/en/layout.js"),
          import("../content/locales/en/testimonials.js"),
          import("../content/locales/en/faq.js")
        ])

        const fallback = {
          ...enLayout.default,
          ...enHome.default,
          ...enAbout.default,
          ...enServices.default,
          ...enProjects.default,
          ...enInsights.default,
          ...enTestimonials.default,
          ...enFaq.default
        }

        if (lang === "en") {
          this.translations = fallback
          return
        }

        // Dynamically load selected language modules with fallbacks
        const [homeMod, aboutMod, servicesMod, projectsMod, insightsMod, layoutMod, testimonialsMod, faqMod] = await Promise.all([
          import(`../content/locales/${lang}/home.js`).catch(() => enHome),
          import(`../content/locales/${lang}/about.js`).catch(() => enAbout),
          import(`../content/locales/${lang}/services.js`).catch(() => enServices),
          import(`../content/locales/${lang}/projects.js`).catch(() => enProjects),
          import(`../content/locales/${lang}/insights.js`).catch(() => enInsights),
          import(`../content/locales/${lang}/layout.js`).catch(() => enLayout),
          import(`../content/locales/${lang}/testimonials.js`).catch(() => enTestimonials),
          import(`../content/locales/${lang}/faq.js`).catch(() => enFaq)
        ])

        this.translations = {
          ...fallback,
          ...layoutMod.default,
          ...homeMod.default,
          ...aboutMod.default,
          ...servicesMod.default,
          ...projectsMod.default,
          ...insightsMod.default,
          ...testimonialsMod.default,
          ...faqMod.default
        }
      } catch (err) {
        console.error("Failed to load language translations:", err)
      }
    },
    async initLanguage() {
      this.applyLanguage()
      await this.loadTranslations(this.language)
      // Prefetch the alternate language in background to make toggles instant
      const other = this.language === 'en' ? 'ar' : 'en'
      ;(async () => {
        try {
          await Promise.all([
            import(`../content/locales/${other}/layout.js`).catch(() => {}),
            import(`../content/locales/${other}/home.js`).catch(() => {}),
            import(`../content/locales/${other}/insights.js`).catch(() => {}),
            import(`../content/locales/${other}/about.js`).catch(() => {}),
            import(`../content/locales/${other}/services.js`).catch(() => {})
          ])
        } catch (e) {
          // silent
        }
      })()
    }
  }
})
