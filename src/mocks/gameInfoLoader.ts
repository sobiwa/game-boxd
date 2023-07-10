export interface SingleGameResponse {
  id?: number;
  name?: string;
  description?: string;
  metacritic?: number;
  metacritic_platforms?: [
    {
      metascore: number;
      url: string;
    }
  ];
  released?: string;
  tba?: true;
  updated?: string;
  background_image?: string;
  background_image_additional?: string;
  website?: string;
  rating: number;
  rating_top?: number;
  ratings?: Record<string, unknown>;
  reactions?: Record<string, unknown>;
  added?: number;
  added_by_status?: Record<string, unknown>;
  playtime?: number;
  screenshots_count?: number;
  movies_count?: number;
  creators_count?: number;
  achievements_count?: number;
  parent_achievements_count?: string;
  reddit_url?: string;
  reddit_name?: string;
  reddit_description?: string;
  reddit_logo?: string;
  reddit_count?: number;
  twitch_count?: string;
  youtube_count?: string;
  reviews_text_count?: string;
  ratings_count?: number;
  suggestions_count?: number;
  alternative_names?: [string];
  metacritic_url?: string;
  parents_count?: number;
  additions_count?: number;
  game_series_count?: number;
  esrb_rating?: {
    id: number;
    slug: string;
    name: string;
  };
  platforms?: {
    platform: {
      id: number;
      slug: string;
      name: string;
    };
    released_at: string;
    requirements: {
      minimum: string;
      recommended: string;
    };
  }[];
  parent_platforms?: Array<Record<string, unknown>>;
  developers?: Array<Record<string, unknown>>;
  genres?: Array<Record<string, unknown>>;
  publishers?: Array<Record<string, unknown>>;
}

export default async function mockGameInfoLoader() {
  return {
    id: 339958,
    slug: 'persona-5-royal',
    name: 'Persona 5 Royal',
    name_original: 'Persona 5 Royal',
    description:
      '<p>Wear the mask.  Reveal your truth.<br />\nPrepare for an all-new RPG experience in Persona®5 Royal based in the universe of the award-winning series, Persona®! Don the mask of Joker and join the Phantom Thieves of Hearts. Break free from the chains of modern society and stage grand heists to infiltrate the minds of the corrupt and make them change their ways! Persona®5 Royal is packed with new characters, story depth, new locations to explore, &amp; a new grappling hook mechanic for access to new areas. With a new semester at Shujin Academy, get ready to strengthen your abilities in the metaverse and in your daily life. Persona®5 Royal presents a unique visual style and award nominated composer Shoji Meguro returns with an all-new soundtrack. Explore Tokyo, unlock new Personas, customize your own personal Thieves Den, discover a never-before-seen story arc, cutscenes, alternate endings, and more!</p>',
    metacritic: 94,
    metacritic_platforms: [
      {
        metascore: 94,
        url: 'https://www.metacritic.com/game/xbox-series-x/persona-5-royal',
        platform: {
          platform: 186,
          name: 'Xbox Series S/X',
          slug: 'xbox-series-x',
        },
      },
      {
        metascore: 94,
        url: 'https://www.metacritic.com/game/switch/persona-5-royal',
        platform: {
          platform: 7,
          name: 'Nintendo Switch',
          slug: 'nintendo-switch',
        },
      },
      {
        metascore: 91,
        url: 'https://www.metacritic.com/game/playstation-5/persona-5-royal',
        platform: {
          platform: 187,
          name: 'PlayStation 5',
          slug: 'playstation5',
        },
      },
      {
        metascore: 95,
        url: 'https://www.metacritic.com/game/pc/persona-5-royal',
        platform: {
          platform: 4,
          name: 'PC',
          slug: 'pc',
        },
      },
      {
        metascore: 95,
        url: 'https://www.metacritic.com/game/playstation-4/persona-5-royal',
        platform: {
          platform: 18,
          name: 'PlayStation 4',
          slug: 'playstation4',
        },
      },
    ],
    released: '2020-03-31',
    tba: false,
    updated: '2023-07-05T15:37:10',
    background_image:
      'https://media.rawg.io/media/games/a9c/a9c789951de65da545d51f664b4f2ce0.jpg',
    background_image_additional:
      'https://media.rawg.io/media/screenshots/b26/b2604ecc559bccfb72dca2c869f53b63.jpg',
    website: 'https://atlus.com/p5r/',
    rating: 4.76,
    rating_top: 5,
    ratings: [
      {
        id: 5,
        title: 'exceptional',
        count: 327,
        percent: 84.5,
      },
      {
        id: 4,
        title: 'recommended',
        count: 42,
        percent: 10.85,
      },
      {
        id: 3,
        title: 'meh',
        count: 10,
        percent: 2.58,
      },
      {
        id: 1,
        title: 'skip',
        count: 8,
        percent: 2.07,
      },
    ],
    reactions: {
      '1': 2,
      '2': 4,
      '3': 6,
      '4': 2,
      '7': 4,
      '10': 1,
      '11': 1,
      '12': 5,
    },
    added: 2530,
    added_by_status: {
      yet: 185,
      owned: 1382,
      beaten: 322,
      toplay: 445,
      dropped: 62,
      playing: 134,
    },
    playtime: 9,
    screenshots_count: 6,
    movies_count: 0,
    creators_count: 9,
    achievements_count: 300,
    parent_achievements_count: 86,
    reddit_url: 'https://www.reddit.com/r/Persona5/',
    reddit_name: 'Persona 5 - ペルソナ5',
    reddit_description:
      'Subreddit Community for Persona 5 and other P5/Persona products! Please be courteous and mark any and all spoilers. Persona 5 is a role-playing game by ATLUS in which players live out a year in the life of a high school boy who gains the ability to summon facets of his psyche, known as Personas.',
    reddit_logo:
      'https://b.thumbs.redditmedia.com/sinSkUI29VJEif80V3B7vzEMVF28QMZ-XLnTtuJztHI.png',
    reddit_count: 5150,
    twitch_count: 0,
    youtube_count: 1000000,
    reviews_text_count: 9,
    ratings_count: 378,
    suggestions_count: 317,
    alternative_names: ['ペルソナ5 ザ・ロイヤル', '女神异闻录5皇家版'],
    metacritic_url:
      'https://www.metacritic.com/game/playstation-4/persona-5-royal',
    parents_count: 1,
    additions_count: 0,
    game_series_count: 0,
    user_game: null,
    reviews_count: 387,
    saturated_color: '0f0f0f',
    dominant_color: '0f0f0f',
    parent_platforms: [
      {
        platform: {
          id: 1,
          name: 'PC',
          slug: 'pc',
        },
      },
      {
        platform: {
          id: 2,
          name: 'PlayStation',
          slug: 'playstation',
        },
      },
      {
        platform: {
          id: 3,
          name: 'Xbox',
          slug: 'xbox',
        },
      },
      {
        platform: {
          id: 7,
          name: 'Nintendo',
          slug: 'nintendo',
        },
      },
    ],
    platforms: [
      {
        platform: {
          id: 186,
          name: 'Xbox Series S/X',
          slug: 'xbox-series-x',
          image: null,
          year_end: null,
          year_start: 2020,
          games_count: 773,
          image_background:
            'https://media.rawg.io/media/games/5eb/5eb49eb2fa0738fdb5bacea557b1bc57.jpg',
        },
        released_at: '2020-03-31',
        requirements: {},
      },
      {
        platform: {
          id: 4,
          name: 'PC',
          slug: 'pc',
          image: null,
          year_end: null,
          year_start: null,
          games_count: 513929,
          image_background:
            'https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg',
        },
        released_at: '2020-03-31',
        requirements: {
          minimum:
            'Minimum:\nRequires a 64-bit processor and operating system\nOS: Windows 10\nProcessor: Intel Core i7-4790, 3.4 GHz | AMD Ryzen 5 1500X, 3.5 GHz\nMemory: 8 GB RAM\nGraphics: Nvidia GeForce GTX 650 Ti, 2 GB | AMD Radeon R7 360, 2 GB\nDirectX: Version 11\nStorage: 41 GB available space\nAdditional Notes: Low 720p @ 60 FPS. Requires a CPU which supports the AVX and SSE4.2 instruction set.',
          recommended:
            'Recommended:\nRequires a 64-bit processor and operating system\nOS: Windows 10\nProcessor: Intel Core i7-4790, 3.4 GHz | AMD Ryzen 5 1500X 3.5 Ghz\nMemory: 8 GB RAM\nGraphics: Nvidia GeForce GTX 760, 2 GB | AMD Radeon HD 7870, 2 GB\nDirectX: Version 11\nStorage: 41 GB available space\nAdditional Notes: High 1080p @ 60 FPS',
        },
      },
      {
        platform: {
          id: 187,
          name: 'PlayStation 5',
          slug: 'playstation5',
          image: null,
          year_end: null,
          year_start: 2020,
          games_count: 893,
          image_background:
            'https://media.rawg.io/media/games/c92/c9207a31f0eeb9904a840fc26eae6afb.jpg',
        },
        released_at: '2020-03-31',
        requirements: {},
      },
      {
        platform: {
          id: 7,
          name: 'Nintendo Switch',
          slug: 'nintendo-switch',
          image: null,
          year_end: null,
          year_start: null,
          games_count: 5271,
          image_background:
            'https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg',
        },
        released_at: '2020-03-31',
        requirements: {},
      },
      {
        platform: {
          id: 1,
          name: 'Xbox One',
          slug: 'xbox-one',
          image: null,
          year_end: null,
          year_start: null,
          games_count: 5533,
          image_background:
            'https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg',
        },
        released_at: '2020-03-31',
        requirements: {},
      },
      {
        platform: {
          id: 18,
          name: 'PlayStation 4',
          slug: 'playstation4',
          image: null,
          year_end: null,
          year_start: null,
          games_count: 6660,
          image_background:
            'https://media.rawg.io/media/games/8a0/8a02f84a5916ede2f923b88d5f8217ba.jpg',
        },
        released_at: '2020-03-31',
        requirements: {},
      },
    ],
    stores: [
      {
        id: 858685,
        url: '',
        store: {
          id: 6,
          name: 'Nintendo Store',
          slug: 'nintendo',
          domain: 'nintendo.com',
          games_count: 8875,
          image_background:
            'https://media.rawg.io/media/screenshots/88b/88b5f27f07d6ca2f8a3cd0b36e03a670.jpg',
        },
      },
      {
        id: 858684,
        url: '',
        store: {
          id: 1,
          name: 'Steam',
          slug: 'steam',
          domain: 'store.steampowered.com',
          games_count: 76788,
          image_background:
            'https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg',
        },
      },
      {
        id: 385794,
        url: '',
        store: {
          id: 3,
          name: 'PlayStation Store',
          slug: 'playstation-store',
          domain: 'store.playstation.com',
          games_count: 7823,
          image_background:
            'https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg',
        },
      },
    ],
    developers: [
      {
        id: 13953,
        name: 'Atlus',
        slug: 'atlus',
        games_count: 108,
        image_background:
          'https://media.rawg.io/media/games/f84/f84344325c668c21460bddc45b9a1566.jpg',
      },
    ],
    genres: [
      {
        id: 3,
        name: 'Adventure',
        slug: 'adventure',
        games_count: 132938,
        image_background:
          'https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg',
      },
      {
        id: 5,
        name: 'RPG',
        slug: 'role-playing-games-rpg',
        games_count: 52698,
        image_background:
          'https://media.rawg.io/media/games/d0f/d0f91fe1d92332147e5db74e207cfc7a.jpg',
      },
    ],
    tags: [
      {
        id: 31,
        name: 'Singleplayer',
        slug: 'singleplayer',
        language: 'eng',
        games_count: 206544,
        image_background:
          'https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg',
      },
      {
        id: 40847,
        name: 'Steam Achievements',
        slug: 'steam-achievements',
        language: 'eng',
        games_count: 30840,
        image_background:
          'https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg',
      },
      {
        id: 40836,
        name: 'Full controller support',
        slug: 'full-controller-support',
        language: 'eng',
        games_count: 14476,
        image_background:
          'https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg',
      },
      {
        id: 40849,
        name: 'Steam Cloud',
        slug: 'steam-cloud',
        language: 'eng',
        games_count: 14345,
        image_background:
          'https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg',
      },
      {
        id: 42,
        name: 'Great Soundtrack',
        slug: 'great-soundtrack',
        language: 'eng',
        games_count: 3241,
        image_background:
          'https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg',
      },
      {
        id: 24,
        name: 'RPG',
        slug: 'rpg',
        language: 'eng',
        games_count: 17413,
        image_background:
          'https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg',
      },
      {
        id: 118,
        name: 'Story Rich',
        slug: 'story-rich',
        language: 'eng',
        games_count: 18334,
        image_background:
          'https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg',
      },
      {
        id: 34,
        name: 'Violent',
        slug: 'violent',
        language: 'eng',
        games_count: 5927,
        image_background:
          'https://media.rawg.io/media/games/5fa/5fae5fec3c943179e09da67a4427d68f.jpg',
      },
      {
        id: 134,
        name: 'Anime',
        slug: 'anime',
        language: 'eng',
        games_count: 11125,
        image_background:
          'https://media.rawg.io/media/games/556/556157feed9ee1f55f2b12b2973e30a3.jpg',
      },
      {
        id: 165,
        name: 'Colorful',
        slug: 'colorful',
        language: 'eng',
        games_count: 17996,
        image_background:
          'https://media.rawg.io/media/games/ba9/ba9ad92b6d04825bd15a407c6059db94.jpg',
      },
      {
        id: 101,
        name: 'Turn-Based Strategy',
        slug: 'turn-based-strategy',
        language: 'eng',
        games_count: 4307,
        image_background:
          'https://media.rawg.io/media/games/849/849c187c0b5d4cd1ee3283148f7e4cdb.jpg',
      },
      {
        id: 50,
        name: 'Sexual Content',
        slug: 'sexual-content',
        language: 'eng',
        games_count: 4641,
        image_background:
          'https://media.rawg.io/media/games/974/974d08635981db7677630327ce1fe4bb.jpg',
      },
      {
        id: 218,
        name: 'Multiple Endings',
        slug: 'multiple-endings',
        language: 'eng',
        games_count: 7148,
        image_background:
          'https://media.rawg.io/media/games/e63/e635b8c7fbe3ffd69ad6c1c586cd250e.jpg',
      },
      {
        id: 90,
        name: 'Visual Novel',
        slug: 'visual-novel',
        language: 'eng',
        games_count: 4829,
        image_background:
          'https://media.rawg.io/media/games/2fb/2fb35e31727f7ebc1f00bf998d0e22a7.jpg',
      },
      {
        id: 40937,
        name: 'Steam Trading Cards',
        slug: 'steam-trading-cards-2',
        language: 'eng',
        games_count: 428,
        image_background:
          'https://media.rawg.io/media/games/5ec/5ecac5cb026ec26a56efcc546364e348.jpg',
      },
      {
        id: 233,
        name: 'JRPG',
        slug: 'jrpg',
        language: 'eng',
        games_count: 3593,
        image_background:
          'https://media.rawg.io/media/games/67f/67f62d1f062a6164f57575e0604ee9f6.jpg',
      },
      {
        id: 142,
        name: 'Detective',
        slug: 'detective',
        language: 'eng',
        games_count: 2717,
        image_background:
          'https://media.rawg.io/media/games/c50/c5085506fe4b5e20fc7aa5ace842c20b.jpg',
      },
      {
        id: 175,
        name: 'Turn-Based Combat',
        slug: 'turn-based-combat',
        language: 'eng',
        games_count: 4144,
        image_background:
          'https://media.rawg.io/media/games/570/5705f063e549547b22db00b643619388.jpg',
      },
      {
        id: 216,
        name: 'Heist',
        slug: 'heist',
        language: 'eng',
        games_count: 456,
        image_background:
          'https://media.rawg.io/media/screenshots/8e6/8e6f45ae541c5016e270e132d223ffe2.jpg',
      },
      {
        id: 160,
        name: 'Dating Sim',
        slug: 'dating-sim',
        language: 'eng',
        games_count: 4378,
        image_background:
          'https://media.rawg.io/media/screenshots/5d9/5d9d6da555c357edde9cfa2db622083f.jpg',
      },
      {
        id: 295,
        name: 'Soundtrack',
        slug: 'soundtrack',
        language: 'eng',
        games_count: 2784,
        image_background:
          'https://media.rawg.io/media/screenshots/4f2/4f2246a85225b7a91d63990fe540b7c4.jpg',
      },
      {
        id: 572,
        name: 'Emotional',
        slug: 'emotional',
        language: 'eng',
        games_count: 1849,
        image_background:
          'https://media.rawg.io/media/screenshots/bf0/bf08a4fb21df12939e94782ccfa7a858.jpg',
      },
      {
        id: 206,
        name: 'Party-Based RPG',
        slug: 'party-based-rpg',
        language: 'eng',
        games_count: 731,
        image_background:
          'https://media.rawg.io/media/screenshots/d79/d790c12a425f81fa079b973e5f8814d0.jpg',
      },
    ],
    publishers: [
      {
        id: 3408,
        name: 'SEGA',
        slug: 'sega-2',
        games_count: 1226,
        image_background:
          'https://media.rawg.io/media/games/fcf/fcf81e19683092d40d519a6d6a9bcf6e.jpg',
      },
      {
        id: 9065,
        name: 'Atlus',
        slug: 'atlus',
        games_count: 245,
        image_background:
          'https://media.rawg.io/media/games/be8/be8896348e804287dfd44323bac7380e.jpg',
      },
    ],
    esrb_rating: {
      id: 4,
      name: 'Mature',
      slug: 'mature',
    },
    clip: null,
    description_raw:
      'Wear the mask.  Reveal your truth.\nPrepare for an all-new RPG experience in Persona®5 Royal based in the universe of the award-winning series, Persona®! Don the mask of Joker and join the Phantom Thieves of Hearts. Break free from the chains of modern society and stage grand heists to infiltrate the minds of the corrupt and make them change their ways! Persona®5 Royal is packed with new characters, story depth, new locations to explore, & a new grappling hook mechanic for access to new areas. With a new semester at Shujin Academy, get ready to strengthen your abilities in the metaverse and in your daily life. Persona®5 Royal presents a unique visual style and award nominated composer Shoji Meguro returns with an all-new soundtrack. Explore Tokyo, unlock new Personas, customize your own personal Thieves Den, discover a never-before-seen story arc, cutscenes, alternate endings, and more!',
  };
}
