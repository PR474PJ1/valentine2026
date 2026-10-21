// ============================================
// 👑💜 JANNUUU & HER PRINCESS 💜👑
// A LITTLE WORLD MADE WITH LOVE
// ============================================

const CONFIG = {

    // ============================================
    // 💖 PERSONAL DETAILS
    // ============================================

    valentineName: "VAMPIRE WIFEYYY",

    pageTitle: "A LITTLE WORLD FOR JANNUUU 💞👑",


    // ============================================
    // 💜 FLOATING EMOJIS
    // ============================================

    floatingEmojis: {

        hearts: [
            "💜",
            "💗",
            "💖",
            "💞",
            "💕",
            "🤍",
            "💘",
            "💝",
            "🫶",
            "😘",
            "🥹",
            "🌷",
            "🦋",
            "✨",
            "👑",
            "💋"
            ]
        ],

        bears: [
            "🧸",
            "🐻",
            "🐰"
            ]
        ]
    },


    // ============================================
    // 💌 INTERACTIVE QUESTIONS
    // ============================================

    questions: {

        // FIRST QUESTION
        first: {

            text: "Do you love your little princess, Jannuuuu? 🥹💜",

            yesBtn: "OBVIOUSLY, MY PRINCESS! 💗",

            noBtn: "NOOO 🙈",

            secretAnswer:
                "WRONG ANSWER, WIFEYYYY! 😤 Your princess loves you more than all the stars in the universe! 👑💜🥹"
        },


        // SECOND QUESTION — LOVE METER
        second: {

            text: "HOW MUCH DO YOU LOVE YOUR PRINCESS? 👑💞",

            startText: "THIS MUCHHH! 💜",

            nextBtn: "NEXT, MY PRINCESS! 💖"
        },


        // THIRD QUESTION
        third: {

            text:
                "Will you be my wife forever? Your princess is claiming you for eternity! 🌷💍",

            yesBtn: "YESSS, FOREVER! 💜👑",

            noBtn: "NOOO, NEVER! 🙈"
        }
    },


    // ============================================
    // 💗 LOVE METER MESSAGES
    // ============================================

    loveMessages: {

        extreme:
            "EXCUSE ME?! OVER 5000%?! OUR LOVE JUST LEFT THE UNIVERSE! 💜🚀🥹",

        high:
            "INFINITY IS TOO SMALL FOR THE LOVE BETWEEN MY WIFE AND ME! 🌌💞👑",

        normal:
            "AND BEYONDDDD! YOUR PRINCESS WILL ALWAYS LOVE YOU MORE! 💜🫶"
    },


    // ============================================
    // 🎉 CELEBRATION AFTER SHE SAYS YES
    // ============================================

    celebration: {

        title:
            "YAYYYYY! YOUR PRINCESS IS THE LUCKIEST GIRL IN THE UNIVERSE! 👑💜🎉",

        message:
            "COME HERE, MY JANNUUUU! 💗 Your princess owes you infinite hugs, a million kisses, unlimited cuddles, and a lifetime of love! 🤗💋💜",

        emojis:
            "👑💜🎁🧸🌷💖🤗💋💕🦋✨"
    },


    // ============================================
    // 💜 LAVENDER DREAM COLOR THEME
    // ============================================

    colors: {

        backgroundStart: "#E6E6FA",  // Lavender

        backgroundEnd: "#F8F0FF",    // Dreamy lilac white

        buttonBackground: "#9575CD", // Lavender purple

        buttonHover: "#7E57C2",      // Deeper lavender

        textColor: "#5E35B1"          // Rich purple
    },


    // ============================================
    // ✨ ANIMATION SETTINGS
    // ============================================

    animations: {

        floatDuration: "15s",

        floatDistance: "50px",

        bounceSpeed: "0.5s",

        heartExplosionSize: 1.5
    },


    // ============================================
    // 🎵 YOUR SPECIAL SONG
    // ============================================

    music: {

        enabled: true,

        autoplay: true,

        musicUrl:
            "https://open.spotify.com/track/5zyDlv3nVFkeul0TrQYaJd?si=dQ86LCbjQ56noZXCVI-JuA&utm_source=copy-link",

        startText: "🎵 PLAY OUR SONG, JANNUUU 💜",

        stopText: "🔇 STOP MUSIC",

        volume: 0.5
    }

};


// ============================================
// 💜 EXPORT CONFIGURATION
// ============================================

window.DEFAULT_CONFIG = CONFIG;

window.VALENTINE_CONFIG = {

    ...CONFIG,

    floatingEmojis: {

        hearts: [
            ...CONFIG.floatingEmojis.hearts
        ],

        bears: [
            ...CONFIG.floatingEmojis.bears
        ]
    },


    questions: {

        first: {
            ...CONFIG.questions.first
        },

        second: {
            ...CONFIG.questions.second
        },

        third: {
            ...CONFIG.questions.third
        }
    },


    loveMessages: {
        ...CONFIG.loveMessages
    },


    celebration: {
        ...CONFIG.celebration
    },


    colors: {
        ...CONFIG.colors
    },


    animations: {
        ...CONFIG.animations
    },


    music: {
        ...CONFIG.music
    }

};
