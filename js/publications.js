// publications.js
const publicationsData = [
    {
        title: "Viability-Preserving Passive Torque Control",
        authors: [
            { name: "Zizhe Zhang", mark: "*"  },
            { name: "Yicong Wang", mark: "*"  },
            { name: "Zhiquan Zhang" },
            { name: "Tianyu Li" },
            { name: "Nadia Figueroa" },
        ],
        venue: "Under Review",
        venueAux: [
            "<span style='color: #e74d3c; font-weight: bold;'>🏆 Best Student Paper Award</span> at <a href='https://building-safe-robots-workshop.github.io/'>IROS Workshop on Building Safe Robots</a>, 2025",
            "<span style='color: #e74d3c; font-weight: bold;'>🏆 Best Contribution Award</span> at <a href='https://sites.google.com/view/e-rlc2025/home-page?authuser=0'>IROS Workshop on Exploring the Role of Energy in Robot Learning and Control</a>, 2025",
        ],
        links: [
            { name: "<span style='color: #e74d3c; font-weight: bold;'>Award</span>", url: "https://zizhe.io/assets/awards/vpptcws_cmp.pdf" },
            { name: "arXiv", url: "http://arxiv.org/abs/2510.03367" },
            { name: "pdf", url: "https://zizhe.io/assets/pdf/VPP-TC.pdf" },
            { name: "Website", url: "https://vpp-tc.github.io/webpage/" }
        ],
        media: {
            type: "video",
            src: "https://zizhe.io/assets/publication_preview/vpptc_prev.mp4"
        },
        // --- 新增字段 ---
        year: 2025,
        topic: ["Safe Control",],
        selected: true
    },
    {
        title: "Flow with the Force Field: Learning 3D Compliant Flow Matching Policies from Force and Demonstration-Guided Simulation Data",
        authors: [
            { name: "Tianyu Li", mark: "*"  },
            { name: "Yihan Li", mark: "*"  },
            { name: "Zizhe Zhang" },
            { name: "Nadia Figueroa" },
        ],
        venue: "Under Review",
        venueAux: [
            "<a href='https://cim-workshop.github.io/'>Contact and Impact-aware Manipulation</a>, 2025",
            "<a href='https://sites.google.com/view/e-rlc2025/home-page?authuser=0'>IROS Workshop on Exploring the Role of Energy in Robot Learning and Control</a>, 2025",
        ],
        links: [
            { name: "arXiv", url: "http://arxiv.org/abs/2510.02738" },
            { name: "pdf", url: "https://zizhe.io/assets/pdf/fff.pdf" },
            { name: "Website", url: "https://flow-with-the-force-field.github.io/webpage/" }
        ],
        media: {
            type: "video",
            src: "https://zizhe.io/assets/publication_preview/fff_preview.mp4"
        },
        // --- 新增字段 ---
        year: 2025,
        topic: ["Robotic Learning","Manipulation"],
        selected: false
    },
    {
        title: "VLMgineer: Vision Language Models as Robotic Toolsmiths",
        authors: [
            { name: "George Jiayuan Gao", mark: "*" },
            { name: "Tianyu Li", mark: "*" },
            { name: "Junyao Shi" },
            { name: "Zizhe Zhang", mark: "†" },
            { name: "Yihan Li", mark: "†" },
            { name: "Nadia Figueroa" },
            { name: "Dinesh Jayaraman" }
        ],
        venue: "Under Review",
        venueAux: ["<span style='color: #e74d3c; font-weight: bold;'>Oral Spotlight✨</span> at <a href='https://rss-hardware-intelligence.github.io/'>Workshop on Robot Hardware-Aware Intelligence</a>, 2025"],
        links: [
            { name: "website", url: "https://vlmgineer.github.io/" }
        ],
        media: {
            type: "video",
            src: "media/vlmgineer/vlmgineer.mp4"
        },
        // --- 新增字段 ---
        year: 2025,
        topic: ["Robotic Learning",], 
        selected: true 
    },
    {
        title: "Image-Based Visual Servoing for Enhanced Cooperation of Dual-Arm Manipulation",
        authors: [
            { name: "Zizhe Zhang" },
            { name: "Yuan Yang" },
            { name: "Wenqiang Zuo" },
            { name: "Guangming Song" },
            { name: "Aiguo Song" },
            { name: "Yang Shi" }
        ],
        venue: "IEEE Robotic and Automation Letters, 2025",
        links: [
            { name: "arXiv", url: "https://arxiv.org/abs/2410.19432" },
            { name: "pdf", url: "https://zizhe.io/assets/pdf/RAL_R1.pdf" },
            { name: "Website", url: "https://zizhe.io/ral-ibvs-enhanced/" }
        ],
        media: {
            type: "image",
            src: "media/ibvs/ibvs.png"
        },
        // --- 新增字段 ---
        year: 2025,
        topic: ["Safe Control",],
        selected: true
    },
];
