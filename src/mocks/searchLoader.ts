export interface Result {
  id: number;
  slug?: string;
  name?: string;
  released?: string | null;
  tba?: boolean;
  background_image?: string;
  rating: number;
  rating_top?: number;
  ratings?: Array<Record<string, unknown>>;
  ratings_count?: number;
  reviews_text_count?: number;
  added?: number;
  added_by_status?: Record<string, unknown> | null;
  metacritic?: number | null;
  playtime?: number;
  suggestions_count?: number;
  updated?: string;
  esrb_rating?: Record<string, unknown> | null;
  platforms?: Array<Record<string, unknown>>;
  stores?: Array<Record<string, unknown>> | null;
  score: string;
  short_screenshots?: Array<{ id: number; image: string }>;
  parent_platforms?: Array<Record<string, unknown>>;
  genres?: Array<Record<string, unknown>>;
  clip?: null;
  tags?: Array<Record<string, unknown>>;
  user_game?: null;
  reviews_count?: number;
  saturated_color?: string;
  dominant_color?: string;
  community_rating?: number;
}

export type GamesArray = Result[];

export interface Games {
  count: number;
  next: string | null;
  previous: string | null;
  results: GamesArray;
  user_platforms: boolean;
}

export interface Response {
  q: string | null;
  games: Games | undefined;
}

// function delay(ms: number) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

export default async function loader({ request }: any): Promise<Response> {
  // await delay(5000);
  const url = new URL(request.url);
  const q = url.searchParams.get('q');
  if (q === '') {
    return {
      q,
      games: undefined,
    };
  }
  if (q === 'test') {
    return {
      q,
      games: {
        count: 0,
        next: null,
        previous: null,
        results: [],
        user_platforms: false,
      },
    };
  }
  return {
    q,
    games: {
      count: 2911,
      next: 'https://api.rawg.io/api/games?key=0022e0846f034f58b2507bd0e9e5c8d0&page=2&page_size=10&search=persona+5',
      previous: null,
      results: [
        {
          slug: 'persona-5',
          name: 'Persona 5',
          playtime: 105,
          platforms: [
            {
              platform: {
                id: 18,
                name: 'PlayStation 4',
                slug: 'playstation4',
              },
            },
            {
              platform: {
                id: 16,
                name: 'PlayStation 3',
                slug: 'playstation3',
              },
            },
          ],
          stores: [
            {
              store: {
                id: 3,
                name: 'PlayStation Store',
                slug: 'playstation-store',
              },
            },
          ],
          released: '2016-09-15',
          tba: false,
          background_image:
            'https://media.rawg.io/media/games/3ea/3ea0e57ede873970c0f1130e30d88749.jpg',
          rating: 4.37,
          rating_top: 5,
          ratings: [
            {
              id: 5,
              title: 'exceptional',
              count: 887,
              percent: 65.36,
            },
            {
              id: 4,
              title: 'recommended',
              count: 280,
              percent: 20.63,
            },
            {
              id: 3,
              title: 'meh',
              count: 95,
              percent: 7,
            },
            {
              id: 1,
              title: 'skip',
              count: 95,
              percent: 7,
            },
          ],
          ratings_count: 1331,
          reviews_text_count: 19,
          added: 4446,
          added_by_status: {
            yet: 295,
            owned: 2349,
            beaten: 872,
            toplay: 439,
            dropped: 241,
            playing: 250,
          },
          metacritic: 93,
          suggestions_count: 524,
          updated: '2023-06-12T18:50:31',
          id: 49,
          score: '82.2515',
          short_screenshots: [
            {
              id: -1,
              image:
                'https://media.rawg.io/media/games/3ea/3ea0e57ede873970c0f1130e30d88749.jpg',
            },
            {
              id: 314,
              image:
                'https://media.rawg.io/media/screenshots/d8a/d8a5609a55476906afa237d9890521ea.jpg',
            },
            {
              id: 315,
              image:
                'https://media.rawg.io/media/screenshots/693/693dc8a4fe928593d2830d4357893683.jpg',
            },
            {
              id: 316,
              image:
                'https://media.rawg.io/media/screenshots/6dc/6dc55ac06152af2b7101478f11b2ed3c.jpg',
            },
            {
              id: 317,
              image:
                'https://media.rawg.io/media/screenshots/707/7075e86af0f6a2953452073427f55f6a.jpg',
            },
            {
              id: 610188,
              image:
                'https://media.rawg.io/media/screenshots/aa0/aa005bcc19a0c65b3c10466e4383ae12.jpg',
            },
            {
              id: 610189,
              image:
                'https://media.rawg.io/media/screenshots/bb2/bb284b778955d9383cb9098dbc487971.jpg',
            },
          ],
          parent_platforms: [
            {
              platform: {
                id: 2,
                name: 'PlayStation',
                slug: 'playstation',
              },
            },
          ],
          genres: [
            {
              id: 3,
              name: 'Adventure',
              slug: 'adventure',
            },
            {
              id: 4,
              name: 'Action',
              slug: 'action',
            },
            {
              id: 5,
              name: 'RPG',
              slug: 'role-playing-games-rpg',
            },
          ],
        },
        {
          slug: 'persona-5-strikers',
          name: 'Persona 5 Strikers',
          playtime: 11,
          platforms: [
            {
              platform: {
                id: 4,
                name: 'PC',
                slug: 'pc',
              },
            },
            {
              platform: {
                id: 18,
                name: 'PlayStation 4',
                slug: 'playstation4',
              },
            },
            {
              platform: {
                id: 7,
                name: 'Nintendo Switch',
                slug: 'nintendo-switch',
              },
            },
          ],
          stores: [
            {
              store: {
                id: 1,
                name: 'Steam',
                slug: 'steam',
              },
            },
            {
              store: {
                id: 3,
                name: 'PlayStation Store',
                slug: 'playstation-store',
              },
            },
            {
              store: {
                id: 6,
                name: 'Nintendo Store',
                slug: 'nintendo',
              },
            },
          ],
          released: '2020-02-20',
          tba: false,
          background_image:
            'https://media.rawg.io/media/games/161/16107bc17254244531927450ad9716a7.jpg',
          rating: 3.91,
          rating_top: 4,
          ratings: [
            {
              id: 4,
              title: 'recommended',
              count: 53,
              percent: 39.26,
            },
            {
              id: 5,
              title: 'exceptional',
              count: 47,
              percent: 34.81,
            },
            {
              id: 3,
              title: 'meh',
              count: 23,
              percent: 17.04,
            },
            {
              id: 1,
              title: 'skip',
              count: 12,
              percent: 8.89,
            },
          ],
          ratings_count: 131,
          reviews_text_count: 2,
          added: 1191,
          added_by_status: {
            yet: 110,
            owned: 727,
            beaten: 91,
            toplay: 178,
            dropped: 36,
            playing: 49,
          },
          metacritic: 80,
          suggestions_count: 480,
          updated: '2023-06-12T18:52:24',
          id: 528768,
          score: '47.43299',
          clip: null,
          tags: [
            {
              id: 31,
              name: 'Singleplayer',
              slug: 'singleplayer',
              language: 'eng',
              games_count: 205804,
              image_background:
                'https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg',
            },
            {
              id: 42396,
              name: 'Для одного игрока',
              slug: 'dlia-odnogo-igroka',
              language: 'rus',
              games_count: 34567,
              image_background:
                'https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg',
            },
            {
              id: 42417,
              name: 'Экшен',
              slug: 'ekshen',
              language: 'rus',
              games_count: 32103,
              image_background:
                'https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg',
            },
            {
              id: 42392,
              name: 'Приключение',
              slug: 'prikliuchenie',
              language: 'rus',
              games_count: 30069,
              image_background:
                'https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg',
            },
            {
              id: 40847,
              name: 'Steam Achievements',
              slug: 'steam-achievements',
              language: 'eng',
              games_count: 30552,
              image_background:
                'https://media.rawg.io/media/games/310/3106b0e012271c5ffb16497b070be739.jpg',
            },
            {
              id: 40836,
              name: 'Full controller support',
              slug: 'full-controller-support',
              language: 'eng',
              games_count: 14323,
              image_background:
                'https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg',
            },
            {
              id: 13,
              name: 'Atmospheric',
              slug: 'atmospheric',
              language: 'eng',
              games_count: 29460,
              image_background:
                'https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg',
            },
            {
              id: 42400,
              name: 'Атмосфера',
              slug: 'atmosfera',
              language: 'rus',
              games_count: 6083,
              image_background:
                'https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg',
            },
            {
              id: 42401,
              name: 'Отличный саундтрек',
              slug: 'otlichnyi-saundtrek',
              language: 'rus',
              games_count: 4461,
              image_background:
                'https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg',
            },
            {
              id: 42,
              name: 'Great Soundtrack',
              slug: 'great-soundtrack',
              language: 'eng',
              games_count: 3239,
              image_background:
                'https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg',
            },
            {
              id: 42394,
              name: 'Глубокий сюжет',
              slug: 'glubokii-siuzhet',
              language: 'rus',
              games_count: 9006,
              image_background:
                'https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg',
            },
            {
              id: 24,
              name: 'RPG',
              slug: 'rpg',
              language: 'eng',
              games_count: 17256,
              image_background:
                'https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg',
            },
            {
              id: 42412,
              name: 'Ролевая игра',
              slug: 'rolevaia-igra',
              language: 'rus',
              games_count: 13674,
              image_background:
                'https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg',
            },
            {
              id: 118,
              name: 'Story Rich',
              slug: 'story-rich',
              language: 'eng',
              games_count: 18187,
              image_background:
                'https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg',
            },
            {
              id: 45,
              name: '2D',
              slug: '2d',
              language: 'eng',
              games_count: 187894,
              image_background:
                'https://media.rawg.io/media/games/f8c/f8c6a262ead4c16b47e1219310210eb3.jpg',
            },
            {
              id: 149,
              name: 'Third Person',
              slug: 'third-person',
              language: 'eng',
              games_count: 9419,
              image_background:
                'https://media.rawg.io/media/games/d69/d69810315bd7e226ea2d21f9156af629.jpg',
            },
            {
              id: 42441,
              name: 'От третьего лица',
              slug: 'ot-tretego-litsa',
              language: 'rus',
              games_count: 4930,
              image_background:
                'https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg',
            },
            {
              id: 42413,
              name: 'Симулятор',
              slug: 'simuliator',
              language: 'rus',
              games_count: 15086,
              image_background:
                'https://media.rawg.io/media/games/1bd/1bd2657b81eb0c99338120ad444b24ff.jpg',
            },
            {
              id: 42482,
              name: 'Смешная',
              slug: 'smeshnaia',
              language: 'rus',
              games_count: 6506,
              image_background:
                'https://media.rawg.io/media/games/c89/c89ca70716080733d03724277df2c6c7.jpg',
            },
            {
              id: 4,
              name: 'Funny',
              slug: 'funny',
              language: 'eng',
              games_count: 22511,
              image_background:
                'https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg',
            },
            {
              id: 97,
              name: 'Action RPG',
              slug: 'action-rpg',
              language: 'eng',
              games_count: 5715,
              image_background:
                'https://media.rawg.io/media/games/995/9951d9d55323d08967640f7b9ab3e342.jpg',
            },
            {
              id: 42489,
              name: 'Ролевой экшен',
              slug: 'rolevoi-ekshen',
              language: 'rus',
              games_count: 2694,
              image_background:
                'https://media.rawg.io/media/games/a6c/a6ccd34125c594abf1a9c9821b9a715d.jpg',
            },
            {
              id: 69,
              name: 'Action-Adventure',
              slug: 'action-adventure',
              language: 'eng',
              games_count: 13488,
              image_background:
                'https://media.rawg.io/media/games/9aa/9aa42d16d425fa6f179fc9dc2f763647.jpg',
            },
            {
              id: 134,
              name: 'Anime',
              slug: 'anime',
              language: 'eng',
              games_count: 11038,
              image_background:
                'https://media.rawg.io/media/games/8bd/8bd24e3c15354a9555bb1437fe555a69.jpg',
            },
            {
              id: 42407,
              name: 'Аниме',
              slug: 'anime-2',
              language: 'rus',
              games_count: 6928,
              image_background:
                'https://media.rawg.io/media/screenshots/12e/12ee2600684863837596c0dbb1923fca.jpg',
            },
            {
              id: 42487,
              name: 'Слэшер',
              slug: 'slesher',
              language: 'rus',
              games_count: 1952,
              image_background:
                'https://media.rawg.io/media/games/d1a/d1a1202a378607b6c635c8f18ace95dd.jpg',
            },
            {
              id: 68,
              name: 'Hack and Slash',
              slug: 'hack-and-slash',
              language: 'eng',
              games_count: 3436,
              image_background:
                'https://media.rawg.io/media/games/9fb/9fbf956a16249def7625ab5dc3d09515.jpg',
            },
            {
              id: 42601,
              name: 'Цветастая',
              slug: 'tsvetastaia',
              language: 'rus',
              games_count: 9233,
              image_background:
                'https://media.rawg.io/media/games/f99/f9979698c43fd84c3ab69280576dd3af.jpg',
            },
            {
              id: 42490,
              name: 'Приключенческий экшен',
              slug: 'prikliuchencheskii-ekshen',
              language: 'rus',
              games_count: 5872,
              image_background:
                'https://media.rawg.io/media/games/116/116b93c6876a361a96b2eee3ee58ab13.jpg',
            },
            {
              id: 165,
              name: 'Colorful',
              slug: 'colorful',
              language: 'eng',
              games_count: 17811,
              image_background:
                'https://media.rawg.io/media/games/b6b/b6b20bfc4b34e312dbc8aac53c95a348.jpg',
            },
            {
              id: 42405,
              name: 'Сексуальный контент',
              slug: 'seksualnyi-kontent',
              language: 'rus',
              games_count: 4558,
              image_background:
                'https://media.rawg.io/media/games/f52/f52cf6ba08089cd5f1a9c8f7fcc93d1f.jpg',
            },
            {
              id: 1465,
              name: 'combat',
              slug: 'combat',
              language: 'eng',
              games_count: 9389,
              image_background:
                'https://media.rawg.io/media/games/b72/b7233d5d5b1e75e86bb860ccc7aeca85.jpg',
            },
            {
              id: 571,
              name: '3D',
              slug: '3d',
              language: 'eng',
              games_count: 77279,
              image_background:
                'https://media.rawg.io/media/games/2a5/2a5072e5b28e1653a10e4f931f1991af.jpg',
            },
            {
              id: 50,
              name: 'Sexual Content',
              slug: 'sexual-content',
              language: 'eng',
              games_count: 4579,
              image_background:
                'https://media.rawg.io/media/games/974/974d08635981db7677630327ce1fe4bb.jpg',
            },
            {
              id: 406,
              name: 'Story',
              slug: 'story',
              language: 'eng',
              games_count: 11211,
              image_background:
                'https://media.rawg.io/media/games/202/2023cb28ef354720a2ca4652727687d0.jpg',
            },
            {
              id: 40937,
              name: 'Steam Trading Cards',
              slug: 'steam-trading-cards-2',
              language: 'eng',
              games_count: 420,
              image_background:
                'https://media.rawg.io/media/games/bd2/bd2cc7714e0b9b1adad1ba1b2400d436.jpg',
            },
            {
              id: 233,
              name: 'JRPG',
              slug: 'jrpg',
              language: 'eng',
              games_count: 3563,
              image_background:
                'https://media.rawg.io/media/games/639/639ce7d7fecbb9f0717e9fbc1180f8f8.jpg',
            },
            {
              id: 42514,
              name: 'Японская ролевая игра',
              slug: 'iaponskaia-rolevaia-igra',
              language: 'rus',
              games_count: 1892,
              image_background:
                'https://media.rawg.io/media/games/a9c/a9c789951de65da545d51f664b4f2ce0.jpg',
            },
            {
              id: 42494,
              name: '3D-платформер',
              slug: '3d-platformer-2',
              language: 'rus',
              games_count: 2702,
              image_background:
                'https://media.rawg.io/media/games/780/7804a1ce365e2c30d51007b910b14acf.jpg',
            },
            {
              id: 981,
              name: 'battle',
              slug: 'battle',
              language: 'eng',
              games_count: 10518,
              image_background:
                'https://media.rawg.io/media/games/e1f/e1ffbeb1bac25b19749ad285ca29e158.jpg',
            },
            {
              id: 229,
              name: '3D Platformer',
              slug: '3d-platformer',
              language: 'eng',
              games_count: 8735,
              image_background:
                'https://media.rawg.io/media/games/d02/d02037bd63e30d3634846c4a22af05b7.jpg',
            },
            {
              id: 4565,
              name: 'offline',
              slug: 'offline',
              language: 'eng',
              games_count: 1050,
              image_background:
                'https://media.rawg.io/media/games/d51/d51ada3b94bfd617bf91d4344ab81ce9.jpg',
            },
            {
              id: 726,
              name: 'japan',
              slug: 'japan',
              language: 'eng',
              games_count: 991,
              image_background:
                'https://media.rawg.io/media/games/052/05237236b13f321e0fd9efa984a7d7a1.jpg',
            },
            {
              id: 9986,
              name: 'summer',
              slug: 'summer',
              language: 'eng',
              games_count: 565,
              image_background:
                'https://media.rawg.io/media/screenshots/fd2/fd2902a7d38fcf5b371668abf2cac901.jpg',
            },
          ],
          esrb_rating: {
            id: 4,
            name: 'Mature',
            slug: 'mature',
            name_en: 'Mature',
            name_ru: 'С 17 лет',
          },
          user_game: null,
          reviews_count: 135,
          saturated_color: '0f0f0f',
          dominant_color: '0f0f0f',
          short_screenshots: [
            {
              id: -1,
              image:
                'https://media.rawg.io/media/games/161/16107bc17254244531927450ad9716a7.jpg',
            },
            {
              id: 2629121,
              image:
                'https://media.rawg.io/media/screenshots/947/94702a10c44559b8028525eeac0e2c3d.jpg',
            },
            {
              id: 2629122,
              image:
                'https://media.rawg.io/media/screenshots/869/8694f47be4f6a5b8190acadf990645d7.jpg',
            },
            {
              id: 2629123,
              image:
                'https://media.rawg.io/media/screenshots/6e3/6e30c3621c05816632750638777fa6b3.jpg',
            },
            {
              id: 2629124,
              image:
                'https://media.rawg.io/media/screenshots/832/8328461c9bf71312b18e61d9c3bac1a1.jpg',
            },
            {
              id: 2629125,
              image:
                'https://media.rawg.io/media/screenshots/0d8/0d81488043fed9fef8ccb134d5c231ef.jpg',
            },
            {
              id: 2629126,
              image:
                'https://media.rawg.io/media/screenshots/547/54783023eab8a0432c9dc45dd52d61cb.jpg',
            },
          ],
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
                id: 7,
                name: 'Nintendo',
                slug: 'nintendo',
              },
            },
          ],
          genres: [
            {
              id: 3,
              name: 'Adventure',
              slug: 'adventure',
            },
            {
              id: 4,
              name: 'Action',
              slug: 'action',
            },
            {
              id: 5,
              name: 'RPG',
              slug: 'role-playing-games-rpg',
            },
          ],
        },
        {
          slug: 'persona-5-royal',
          name: 'Persona 5 Royal',
          playtime: 9,
          platforms: [
            {
              platform: {
                id: 4,
                name: 'PC',
                slug: 'pc',
              },
            },
            {
              platform: {
                id: 187,
                name: 'PlayStation 5',
                slug: 'playstation5',
              },
            },
            {
              platform: {
                id: 1,
                name: 'Xbox One',
                slug: 'xbox-one',
              },
            },
            {
              platform: {
                id: 18,
                name: 'PlayStation 4',
                slug: 'playstation4',
              },
            },
            {
              platform: {
                id: 186,
                name: 'Xbox Series S/X',
                slug: 'xbox-series-x',
              },
            },
            {
              platform: {
                id: 7,
                name: 'Nintendo Switch',
                slug: 'nintendo-switch',
              },
            },
          ],
          stores: [
            {
              store: {
                id: 1,
                name: 'Steam',
                slug: 'steam',
              },
            },
            {
              store: {
                id: 3,
                name: 'PlayStation Store',
                slug: 'playstation-store',
              },
            },
            {
              store: {
                id: 6,
                name: 'Nintendo Store',
                slug: 'nintendo',
              },
            },
          ],
          released: '2020-03-31',
          tba: false,
          background_image:
            'https://media.rawg.io/media/games/a9c/a9c789951de65da545d51f664b4f2ce0.jpg',
          rating: 4.76,
          rating_top: 5,
          ratings: [
            {
              id: 5,
              title: 'exceptional',
              count: 321,
              percent: 84.47,
            },
            {
              id: 4,
              title: 'recommended',
              count: 42,
              percent: 11.05,
            },
            {
              id: 3,
              title: 'meh',
              count: 9,
              percent: 2.37,
            },
            {
              id: 1,
              title: 'skip',
              count: 8,
              percent: 2.11,
            },
          ],
          ratings_count: 370,
          reviews_text_count: 8,
          added: 2525,
          added_by_status: {
            yet: 183,
            owned: 1384,
            beaten: 316,
            toplay: 449,
            dropped: 59,
            playing: 134,
          },
          metacritic: 94,
          suggestions_count: 316,
          updated: '2023-06-10T23:19:44',
          id: 339958,
          score: '44.07498',
          clip: null,
          tags: [
            {
              id: 31,
              name: 'Singleplayer',
              slug: 'singleplayer',
              language: 'eng',
              games_count: 205804,
              image_background:
                'https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg',
            },
            {
              id: 42396,
              name: 'Для одного игрока',
              slug: 'dlia-odnogo-igroka',
              language: 'rus',
              games_count: 34567,
              image_background:
                'https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg',
            },
            {
              id: 42392,
              name: 'Приключение',
              slug: 'prikliuchenie',
              language: 'rus',
              games_count: 30069,
              image_background:
                'https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg',
            },
            {
              id: 40847,
              name: 'Steam Achievements',
              slug: 'steam-achievements',
              language: 'eng',
              games_count: 30552,
              image_background:
                'https://media.rawg.io/media/games/310/3106b0e012271c5ffb16497b070be739.jpg',
            },
            {
              id: 40836,
              name: 'Full controller support',
              slug: 'full-controller-support',
              language: 'eng',
              games_count: 14323,
              image_background:
                'https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg',
            },
            {
              id: 40849,
              name: 'Steam Cloud',
              slug: 'steam-cloud',
              language: 'eng',
              games_count: 14199,
              image_background:
                'https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg',
            },
            {
              id: 42401,
              name: 'Отличный саундтрек',
              slug: 'otlichnyi-saundtrek',
              language: 'rus',
              games_count: 4461,
              image_background:
                'https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg',
            },
            {
              id: 42,
              name: 'Great Soundtrack',
              slug: 'great-soundtrack',
              language: 'eng',
              games_count: 3239,
              image_background:
                'https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg',
            },
            {
              id: 42394,
              name: 'Глубокий сюжет',
              slug: 'glubokii-siuzhet',
              language: 'rus',
              games_count: 9006,
              image_background:
                'https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg',
            },
            {
              id: 24,
              name: 'RPG',
              slug: 'rpg',
              language: 'eng',
              games_count: 17256,
              image_background:
                'https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg',
            },
            {
              id: 42412,
              name: 'Ролевая игра',
              slug: 'rolevaia-igra',
              language: 'rus',
              games_count: 13674,
              image_background:
                'https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg',
            },
            {
              id: 118,
              name: 'Story Rich',
              slug: 'story-rich',
              language: 'eng',
              games_count: 18187,
              image_background:
                'https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg',
            },
            {
              id: 42402,
              name: 'Насилие',
              slug: 'nasilie',
              language: 'rus',
              games_count: 4846,
              image_background:
                'https://media.rawg.io/media/games/5a4/5a44112251d70a25291cc33757220fce.jpg',
            },
            {
              id: 34,
              name: 'Violent',
              slug: 'violent',
              language: 'eng',
              games_count: 5889,
              image_background:
                'https://media.rawg.io/media/games/5bf/5bf88a28de96321c86561a65ee48e6c2.jpg',
            },
            {
              id: 134,
              name: 'Anime',
              slug: 'anime',
              language: 'eng',
              games_count: 11038,
              image_background:
                'https://media.rawg.io/media/games/8bd/8bd24e3c15354a9555bb1437fe555a69.jpg',
            },
            {
              id: 42407,
              name: 'Аниме',
              slug: 'anime-2',
              language: 'rus',
              games_count: 6928,
              image_background:
                'https://media.rawg.io/media/screenshots/12e/12ee2600684863837596c0dbb1923fca.jpg',
            },
            {
              id: 42601,
              name: 'Цветастая',
              slug: 'tsvetastaia',
              language: 'rus',
              games_count: 9233,
              image_background:
                'https://media.rawg.io/media/games/f99/f9979698c43fd84c3ab69280576dd3af.jpg',
            },
            {
              id: 165,
              name: 'Colorful',
              slug: 'colorful',
              language: 'eng',
              games_count: 17811,
              image_background:
                'https://media.rawg.io/media/games/b6b/b6b20bfc4b34e312dbc8aac53c95a348.jpg',
            },
            {
              id: 42405,
              name: 'Сексуальный контент',
              slug: 'seksualnyi-kontent',
              language: 'rus',
              games_count: 4558,
              image_background:
                'https://media.rawg.io/media/games/f52/f52cf6ba08089cd5f1a9c8f7fcc93d1f.jpg',
            },
            {
              id: 42426,
              name: 'Пошаговая стратегия',
              slug: 'poshagovaia-strategiia',
              language: 'rus',
              games_count: 2353,
              image_background:
                'https://media.rawg.io/media/screenshots/bf7/bf71c819eace914e6c42ae3ecb667308.jpg',
            },
            {
              id: 101,
              name: 'Turn-Based Strategy',
              slug: 'turn-based-strategy',
              language: 'eng',
              games_count: 4263,
              image_background:
                'https://media.rawg.io/media/games/27c/27c86ebfba2281ebe3ea8ca6c9e752f1.jpg',
            },
            {
              id: 50,
              name: 'Sexual Content',
              slug: 'sexual-content',
              language: 'eng',
              games_count: 4579,
              image_background:
                'https://media.rawg.io/media/games/974/974d08635981db7677630327ce1fe4bb.jpg',
            },
            {
              id: 218,
              name: 'Multiple Endings',
              slug: 'multiple-endings',
              language: 'eng',
              games_count: 7081,
              image_background:
                'https://media.rawg.io/media/screenshots/8f0/8f0b94922ad5e59968852649697b2643.jpg',
            },
            {
              id: 42393,
              name: 'Визуальная новелла',
              slug: 'vizualnaia-novella',
              language: 'rus',
              games_count: 4900,
              image_background:
                'https://media.rawg.io/media/games/81e/81e5cf3f433473af3a04888e3baceeba.jpg',
            },
            {
              id: 90,
              name: 'Visual Novel',
              slug: 'visual-novel',
              language: 'eng',
              games_count: 4743,
              image_background:
                'https://media.rawg.io/media/games/a9c/a9c789951de65da545d51f664b4f2ce0.jpg',
            },
            {
              id: 40937,
              name: 'Steam Trading Cards',
              slug: 'steam-trading-cards-2',
              language: 'eng',
              games_count: 420,
              image_background:
                'https://media.rawg.io/media/games/bd2/bd2cc7714e0b9b1adad1ba1b2400d436.jpg',
            },
            {
              id: 233,
              name: 'JRPG',
              slug: 'jrpg',
              language: 'eng',
              games_count: 3563,
              image_background:
                'https://media.rawg.io/media/games/639/639ce7d7fecbb9f0717e9fbc1180f8f8.jpg',
            },
            {
              id: 142,
              name: 'Detective',
              slug: 'detective',
              language: 'eng',
              games_count: 2694,
              image_background:
                'https://media.rawg.io/media/games/6cc/6cc68fa183b905ac9d85efb9797776f6.jpg',
            },
            {
              id: 42526,
              name: 'Детектив',
              slug: 'detektiv',
              language: 'rus',
              games_count: 1256,
              image_background:
                'https://media.rawg.io/media/games/e2d/e2d3f396b16dded0f841c17c9799a882.jpg',
            },
            {
              id: 42514,
              name: 'Японская ролевая игра',
              slug: 'iaponskaia-rolevaia-igra',
              language: 'rus',
              games_count: 1892,
              image_background:
                'https://media.rawg.io/media/games/a9c/a9c789951de65da545d51f664b4f2ce0.jpg',
            },
            {
              id: 42568,
              name: 'Пошаговые сражения',
              slug: 'poshagovye-srazheniia',
              language: 'rus',
              games_count: 2094,
              image_background:
                'https://media.rawg.io/media/screenshots/104/104603a5c863d6fa6be4d4bb1fed6db6.jpeg',
            },
            {
              id: 42691,
              name: 'Эмоциональная',
              slug: 'emotsionalnaia',
              language: 'rus',
              games_count: 1685,
              image_background:
                'https://media.rawg.io/media/games/525/525ddc0a9f22c944af01f074e8983ffe.jpg',
            },
            {
              id: 175,
              name: 'Turn-Based Combat',
              slug: 'turn-based-combat',
              language: 'eng',
              games_count: 4105,
              image_background:
                'https://media.rawg.io/media/games/14a/14a83c56ff668baaced6e8c8704b6391.jpg',
            },
            {
              id: 42408,
              name: 'Симулятор свиданий',
              slug: 'simuliator-svidanii',
              language: 'rus',
              games_count: 1887,
              image_background:
                'https://media.rawg.io/media/games/3b5/3b56220d6038b8b1ad66c4d05ef95215.jpg',
            },
            {
              id: 216,
              name: 'Heist',
              slug: 'heist',
              language: 'eng',
              games_count: 453,
              image_background:
                'https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg',
            },
            {
              id: 42447,
              name: 'Ограбления',
              slug: 'ogrableniia',
              language: 'rus',
              games_count: 184,
              image_background:
                'https://media.rawg.io/media/games/400/4002e3aa52cf33d184f0f74cc2348134.jpg',
            },
            {
              id: 160,
              name: 'Dating Sim',
              slug: 'dating-sim',
              language: 'eng',
              games_count: 4340,
              image_background:
                'https://media.rawg.io/media/screenshots/5d9/5d9d6da555c357edde9cfa2db622083f.jpg',
            },
            {
              id: 42625,
              name: 'Партийная ролевая игра',
              slug: 'partiinaia-rolevaia-igra',
              language: 'rus',
              games_count: 771,
              image_background:
                'https://media.rawg.io/media/games/c81/c8120bf5faed7309c9812553da54da80.jpg',
            },
            {
              id: 295,
              name: 'Soundtrack',
              slug: 'soundtrack',
              language: 'eng',
              games_count: 2776,
              image_background:
                'https://media.rawg.io/media/games/61e/61ec0844a59c04cb0b2d2545e464e026.jpg',
            },
            {
              id: 206,
              name: 'Party-Based RPG',
              slug: 'party-based-rpg',
              language: 'eng',
              games_count: 719,
              image_background:
                'https://media.rawg.io/media/games/789/7896837ec22a83e4007018ddd55e8c9a.jpg',
            },
            {
              id: 572,
              name: 'Emotional',
              slug: 'emotional',
              language: 'eng',
              games_count: 1797,
              image_background:
                'https://media.rawg.io/media/games/473/473bd9a5e9522629d6cb28b701fb836a.jpg',
            },
            {
              id: 42698,
              name: 'Саундтрек',
              slug: 'saundtrek',
              language: 'rus',
              games_count: 424,
              image_background:
                'https://media.rawg.io/media/games/bc6/bc6b163403504d0c041253749e233ed3.jpg',
            },
            {
              id: 64060,
              name: 'Несколько концовок',
              slug: 'neskolko-kontsovok',
              language: 'rus',
              games_count: 2214,
              image_background:
                'https://media.rawg.io/media/games/a9c/a9c789951de65da545d51f664b4f2ce0.jpg',
            },
          ],
          esrb_rating: {
            id: 4,
            name: 'Mature',
            slug: 'mature',
            name_en: 'Mature',
            name_ru: 'С 17 лет',
          },
          user_game: null,
          reviews_count: 380,
          saturated_color: '0f0f0f',
          dominant_color: '0f0f0f',
          short_screenshots: [
            {
              id: -1,
              image:
                'https://media.rawg.io/media/games/a9c/a9c789951de65da545d51f664b4f2ce0.jpg',
            },
            {
              id: 1988952,
              image:
                'https://media.rawg.io/media/screenshots/e70/e701311c431504ccd8653a5243188a13.jpg',
            },
            {
              id: 1988953,
              image:
                'https://media.rawg.io/media/screenshots/5af/5af7efeca549b9a768870c52eff7e128.jpg',
            },
            {
              id: 2186917,
              image:
                'https://media.rawg.io/media/screenshots/fff/fff1f025d1390753810154b7a40f5bad.jpg',
            },
            {
              id: 2186918,
              image:
                'https://media.rawg.io/media/screenshots/36d/36dac15fbe4556d5ae062ff102ce3461.jpg',
            },
            {
              id: 2186919,
              image:
                'https://media.rawg.io/media/screenshots/b26/b2604ecc559bccfb72dca2c869f53b63.jpg',
            },
            {
              id: 3520824,
              image:
                'https://media.rawg.io/media/screenshots/625/6255fc2f2c07d92c06150a4fa7b1ead3.jpg',
            },
          ],
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
          genres: [
            {
              id: 3,
              name: 'Adventure',
              slug: 'adventure',
            },
            {
              id: 5,
              name: 'RPG',
              slug: 'role-playing-games-rpg',
            },
          ],
        },
        {
          slug: 'persona-5-dancing-in-starlight',
          name: 'Persona 5: Dancing in Starlight',
          playtime: 0,
          platforms: [
            {
              platform: {
                id: 18,
                name: 'PlayStation 4',
                slug: 'playstation4',
              },
            },
            {
              platform: {
                id: 19,
                name: 'PS Vita',
                slug: 'ps-vita',
              },
            },
          ],
          stores: [
            {
              store: {
                id: 3,
                name: 'PlayStation Store',
                slug: 'playstation-store',
              },
            },
          ],
          released: '2018-05-24',
          tba: false,
          background_image:
            'https://media.rawg.io/media/games/f58/f583a15f36b201e2d42685c552505bdf.jpg',
          rating: 3.81,
          rating_top: 4,
          ratings: [
            {
              id: 4,
              title: 'recommended',
              count: 64,
              percent: 68.09,
            },
            {
              id: 3,
              title: 'meh',
              count: 14,
              percent: 14.89,
            },
            {
              id: 5,
              title: 'exceptional',
              count: 11,
              percent: 11.7,
            },
            {
              id: 1,
              title: 'skip',
              count: 5,
              percent: 5.32,
            },
          ],
          ratings_count: 92,
          reviews_text_count: 2,
          added: 488,
          added_by_status: {
            yet: 21,
            owned: 307,
            beaten: 84,
            toplay: 34,
            dropped: 30,
            playing: 12,
          },
          metacritic: 72,
          suggestions_count: 410,
          updated: '2023-06-12T18:53:18',
          id: 59343,
          score: '42.428036',
          clip: null,
          tags: [
            {
              id: 13,
              name: 'Atmospheric',
              slug: 'atmospheric',
              language: 'eng',
              games_count: 29484,
              image_background:
                'https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg',
            },
            {
              id: 4,
              name: 'Funny',
              slug: 'funny',
              language: 'eng',
              games_count: 22519,
              image_background:
                'https://media.rawg.io/media/games/25c/25c4776ab5723d5d735d8bf617ca12d9.jpg',
            },
            {
              id: 136,
              name: 'Music',
              slug: 'music',
              language: 'eng',
              games_count: 25705,
              image_background:
                'https://media.rawg.io/media/games/39a/39a8aa7798b685f9625e857bc394259d.jpg',
            },
            {
              id: 207,
              name: 'Rhythm',
              slug: 'rhythm',
              language: 'eng',
              games_count: 1888,
              image_background:
                'https://media.rawg.io/media/screenshots/91f/91f28302cc8a4fa13a7b59cf1b6f0a84.jpg',
            },
            {
              id: 2406,
              name: 'dance',
              slug: 'dance',
              language: 'eng',
              games_count: 1153,
              image_background:
                'https://media.rawg.io/media/screenshots/ed1/ed118e2ba4e5797d5d2ac99c39720c38.jpg',
            },
            {
              id: 3263,
              name: 'dancing',
              slug: 'dancing',
              language: 'eng',
              games_count: 74,
              image_background:
                'https://media.rawg.io/media/screenshots/8ea/8eaba009671c4490e7d06b2091ba19a5.jpg',
            },
            {
              id: 10076,
              name: 'crossover',
              slug: 'crossover',
              language: 'eng',
              games_count: 47,
              image_background:
                'https://media.rawg.io/media/screenshots/d76/d76cfed92d6014d1a8c8f37a8d7f13a0.jpg',
            },
            {
              id: 6200,
              name: 'rhythm-music',
              slug: 'rhythm-music',
              language: 'eng',
              games_count: 2,
              image_background:
                'https://media.rawg.io/media/screenshots/7ff/7ffe0fecf55afe16747673e5267be069.jpg',
            },
          ],
          esrb_rating: {
            id: 3,
            name: 'Teen',
            slug: 'teen',
            name_en: 'Teen',
            name_ru: 'С 13 лет',
          },
          user_game: null,
          reviews_count: 94,
          saturated_color: '0f0f0f',
          dominant_color: '0f0f0f',
          short_screenshots: [
            {
              id: -1,
              image:
                'https://media.rawg.io/media/games/f58/f583a15f36b201e2d42685c552505bdf.jpg',
            },
            {
              id: 810696,
              image:
                'https://media.rawg.io/media/screenshots/14b/14b32be4a4adcc7db52dd23fc74b80ef.jpg',
            },
            {
              id: 810697,
              image:
                'https://media.rawg.io/media/screenshots/36b/36b80bbabd8133d1fcf200d161efb691.jpg',
            },
            {
              id: 810698,
              image:
                'https://media.rawg.io/media/screenshots/4dd/4dd3ddf1e56898a58a6cd339a10ce9bb.jpg',
            },
            {
              id: 1804545,
              image:
                'https://media.rawg.io/media/screenshots/1b9/1b924a2a7c548fc1b6760b8f5bff982c.jpg',
            },
            {
              id: 1804546,
              image:
                'https://media.rawg.io/media/screenshots/6fd/6fd3532b91d9e5a2a6b89e9a58aea225.jpg',
            },
            {
              id: 1804547,
              image:
                'https://media.rawg.io/media/screenshots/ea4/ea43376d57d4a774bf7f91949e64d0ef.jpg',
            },
          ],
          parent_platforms: [
            {
              platform: {
                id: 2,
                name: 'PlayStation',
                slug: 'playstation',
              },
            },
          ],
          genres: [
            {
              id: 4,
              name: 'Action',
              slug: 'action',
            },
          ],
        },
        {
          slug: 'persona-5-visual-novel',
          name: 'Persona 5: Visual Novel',
          playtime: 0,
          platforms: [
            {
              platform: {
                id: 4,
                name: 'PC',
                slug: 'pc',
              },
            },
            {
              platform: {
                id: 5,
                name: 'macOS',
                slug: 'macos',
              },
            },
            {
              platform: {
                id: 6,
                name: 'Linux',
                slug: 'linux',
              },
            },
          ],
          stores: [
            {
              store: {
                id: 9,
                name: 'itch.io',
                slug: 'itch',
              },
            },
          ],
          released: '2021-04-10',
          tba: false,
          background_image:
            'https://media.rawg.io/media/screenshots/856/856738c1df4f321e9401b8c48ec3d341.jpg',
          rating: 0,
          rating_top: 0,
          ratings: [],
          ratings_count: 0,
          reviews_text_count: 0,
          added: 2,
          added_by_status: {
            owned: 1,
            toplay: 1,
          },
          metacritic: null,
          suggestions_count: 118,
          updated: '2021-04-12T18:24:28',
          id: 582400,
          score: '30.359955',
          clip: null,
          tags: [
            {
              id: 31,
              name: 'Singleplayer',
              slug: 'singleplayer',
              language: 'eng',
              games_count: 184308,
              image_background:
                'https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg',
            },
            {
              id: 217,
              name: 'Romance',
              slug: 'romance',
              language: 'eng',
              games_count: 5827,
              image_background:
                'https://media.rawg.io/media/games/3b5/3b56220d6038b8b1ad66c4d05ef95215.jpg',
            },
            {
              id: 160,
              name: 'Dating Sim',
              slug: 'dating-sim',
              language: 'eng',
              games_count: 3751,
              image_background:
                'https://media.rawg.io/media/games/96f/96f0c07b6c156f05cb76b2ffba32bffc.jpg',
            },
            {
              id: 688,
              name: 'relationship',
              slug: 'relationship',
              language: 'eng',
              games_count: 974,
              image_background:
                'https://media.rawg.io/media/screenshots/bb2/bb2887dd2046ccbabd421844020b213a.jpg',
            },
            {
              id: 293,
              name: 'Otome',
              slug: 'otome',
              language: 'eng',
              games_count: 1172,
              image_background:
                'https://media.rawg.io/media/screenshots/6fc/6fc787259bfbc92dcb93181c35744a36.jpg',
            },
            {
              id: 1067,
              name: 'Fangame',
              slug: 'fangame',
              language: 'eng',
              games_count: 3056,
              image_background:
                'https://media.rawg.io/media/screenshots/c7c/c7c663517283b2648865944320c469e7.jpg',
            },
            {
              id: 38727,
              name: 'persona-5',
              slug: 'persona-5',
              language: 'eng',
              games_count: 6,
              image_background:
                'https://media.rawg.io/media/screenshots/856/856738c1df4f321e9401b8c48ec3d341.jpg',
            },
          ],
          esrb_rating: null,
          user_game: null,
          reviews_count: 0,
          community_rating: 0,
          saturated_color: '0f0f0f',
          dominant_color: '0f0f0f',
          short_screenshots: [
            {
              id: -1,
              image:
                'https://media.rawg.io/media/screenshots/856/856738c1df4f321e9401b8c48ec3d341.jpg',
            },
            {
              id: 2786718,
              image:
                'https://media.rawg.io/media/screenshots/ba0/ba016aa314b83674c0b57243c9ffde0c.jpg',
            },
            {
              id: 2786719,
              image:
                'https://media.rawg.io/media/screenshots/1ec/1ecad3d2935393ca7fd9904ec575dbf9.jpg',
            },
            {
              id: 2786720,
              image:
                'https://media.rawg.io/media/screenshots/621/62150f9a638c10a4f2ca57bb6ecc57e0.jpg',
            },
            {
              id: 2786721,
              image:
                'https://media.rawg.io/media/screenshots/856/856738c1df4f321e9401b8c48ec3d341.jpg',
            },
          ],
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
                id: 5,
                name: 'Apple Macintosh',
                slug: 'mac',
              },
            },
            {
              platform: {
                id: 6,
                name: 'Linux',
                slug: 'linux',
              },
            },
          ],
          genres: [],
        },
        {
          slug: 'persona-5-the-phantom-x',
          name: 'Persona 5: The Phantom X',
          playtime: 0,
          platforms: [
            {
              platform: {
                id: 4,
                name: 'PC',
                slug: 'pc',
              },
            },
            {
              platform: {
                id: 3,
                name: 'iOS',
                slug: 'ios',
              },
            },
            {
              platform: {
                id: 21,
                name: 'Android',
                slug: 'android',
              },
            },
          ],
          stores: null,
          released: null,
          tba: true,
          background_image:
            'https://media.rawg.io/media/games/9bc/9bc792af8edc4d52fb93dc3336479d5a.jpg',
          rating: 0,
          rating_top: 0,
          ratings: [],
          ratings_count: 0,
          reviews_text_count: 0,
          added: 0,
          added_by_status: null,
          metacritic: null,
          suggestions_count: 0,
          updated: '2023-03-24T06:22:39',
          id: 945152,
          score: '28.806442',
          clip: null,
          tags: [],
          esrb_rating: null,
          user_game: null,
          reviews_count: 0,
          community_rating: 0,
          saturated_color: '0f0f0f',
          dominant_color: '0f0f0f',
          short_screenshots: [
            {
              id: -1,
              image:
                'https://media.rawg.io/media/games/9bc/9bc792af8edc4d52fb93dc3336479d5a.jpg',
            },
            {
              id: 3835172,
              image:
                'https://media.rawg.io/media/screenshots/5cd/5cdfe436af89dde917608f09b691563c.jpg',
            },
            {
              id: 3835173,
              image:
                'https://media.rawg.io/media/screenshots/6c5/6c552d279d68b1e6f83b4a8ae87ddd8f.jpg',
            },
            {
              id: 3835177,
              image:
                'https://media.rawg.io/media/screenshots/522/5229502310b4bc16b342c2f1235680d2.jpg',
            },
            {
              id: 3835178,
              image:
                'https://media.rawg.io/media/screenshots/105/105756a684a3cd696f61754cc2c76ba0_7GeOoJr.jpg',
            },
            {
              id: 3835179,
              image:
                'https://media.rawg.io/media/screenshots/148/148d85dbe68e21fb6531b81dc2a510d7.jpg',
            },
            {
              id: 3835180,
              image:
                'https://media.rawg.io/media/screenshots/b49/b49f637b219e7a00144d5045d87d11ae.jpg',
            },
          ],
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
                id: 4,
                name: 'iOS',
                slug: 'ios',
              },
            },
            {
              platform: {
                id: 8,
                name: 'Android',
                slug: 'android',
              },
            },
          ],
          genres: [
            {
              id: 5,
              name: 'RPG',
              slug: 'role-playing-games-rpg',
            },
          ],
        },
        {
          slug: 'revelations-persona',
          name: 'Revelations: Persona',
          playtime: 0,
          platforms: [
            {
              platform: {
                id: 4,
                name: 'PC',
                slug: 'pc',
              },
            },
            {
              platform: {
                id: 27,
                name: 'PlayStation',
                slug: 'playstation1',
              },
            },
            {
              platform: {
                id: 17,
                name: 'PSP',
                slug: 'psp',
              },
            },
          ],
          stores: null,
          released: '1996-09-20',
          tba: false,
          background_image:
            'https://media.rawg.io/media/screenshots/957/957ba870e8ce492122c37deefd441123.jpg',
          rating: 3.53,
          rating_top: 4,
          ratings: [
            {
              id: 4,
              title: 'recommended',
              count: 8,
              percent: 53.33,
            },
            {
              id: 3,
              title: 'meh',
              count: 3,
              percent: 20,
            },
            {
              id: 5,
              title: 'exceptional',
              count: 2,
              percent: 13.33,
            },
            {
              id: 1,
              title: 'skip',
              count: 2,
              percent: 13.33,
            },
          ],
          ratings_count: 14,
          reviews_text_count: 1,
          added: 57,
          added_by_status: {
            yet: 13,
            owned: 8,
            beaten: 8,
            toplay: 17,
            dropped: 9,
            playing: 2,
          },
          metacritic: 78,
          suggestions_count: 173,
          updated: '2023-04-16T09:09:02',
          id: 57668,
          score: '26.716211',
          clip: null,
          tags: [
            {
              id: 31,
              name: 'Singleplayer',
              slug: 'singleplayer',
              language: 'eng',
              games_count: 205885,
              image_background:
                'https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg',
            },
          ],
          esrb_rating: {
            id: 3,
            name: 'Teen',
            slug: 'teen',
            name_en: 'Teen',
            name_ru: 'С 13 лет',
          },
          user_game: null,
          reviews_count: 15,
          saturated_color: '0f0f0f',
          dominant_color: '0f0f0f',
          short_screenshots: [
            {
              id: -1,
              image:
                'https://media.rawg.io/media/screenshots/957/957ba870e8ce492122c37deefd441123.jpg',
            },
            {
              id: 1627656,
              image:
                'https://media.rawg.io/media/screenshots/47c/47c432bf64dbc084d842660c3409f4bc.jpg',
            },
            {
              id: 1627657,
              image:
                'https://media.rawg.io/media/screenshots/104/1049907d0c53802161055d52a1bb1699.jpg',
            },
            {
              id: 1627658,
              image:
                'https://media.rawg.io/media/screenshots/324/32419328b125e6ec934aa440aedd829e.jpg',
            },
            {
              id: 1627659,
              image:
                'https://media.rawg.io/media/screenshots/0b1/0b151760675ff67297b36596eb4b8357.jpg',
            },
            {
              id: 1627660,
              image:
                'https://media.rawg.io/media/screenshots/957/957ba870e8ce492122c37deefd441123.jpg',
            },
          ],
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
          ],
          genres: [
            {
              id: 5,
              name: 'RPG',
              slug: 'role-playing-games-rpg',
            },
          ],
        },
        {
          slug: 'persona-5-goro-akechi-dating-simulator',
          name: 'Persona 5: Goro Akechi Dating Simulator',
          playtime: 0,
          platforms: [
            {
              platform: {
                id: 4,
                name: 'PC',
                slug: 'pc',
              },
            },
            {
              platform: {
                id: 5,
                name: 'macOS',
                slug: 'macos',
              },
            },
          ],
          stores: [
            {
              store: {
                id: 9,
                name: 'itch.io',
                slug: 'itch',
              },
            },
          ],
          released: '2020-07-01',
          tba: false,
          background_image:
            'https://media.rawg.io/media/screenshots/8c6/8c6b89f5692192318245655205e9650f.jpg',
          rating: 0,
          rating_top: 0,
          ratings: [
            {
              id: 5,
              title: 'exceptional',
              count: 1,
              percent: 100,
            },
          ],
          ratings_count: 1,
          reviews_text_count: 0,
          added: 1,
          added_by_status: {
            beaten: 1,
          },
          metacritic: null,
          suggestions_count: 61,
          updated: '2023-05-26T18:12:41',
          id: 461041,
          score: '24.273506',
          clip: null,
          tags: [
            {
              id: 31,
              name: 'Singleplayer',
              slug: 'singleplayer',
              language: 'eng',
              games_count: 205218,
              image_background:
                'https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg',
            },
            {
              id: 217,
              name: 'Romance',
              slug: 'romance',
              language: 'eng',
              games_count: 6731,
              image_background:
                'https://media.rawg.io/media/games/278/2784fe67065c5095411f0d4c85205143.jpg',
            },
            {
              id: 160,
              name: 'Dating Sim',
              slug: 'dating-sim',
              language: 'eng',
              games_count: 4302,
              image_background:
                'https://media.rawg.io/media/games/e85/e851f527ab0658519436342ee73da191.jpg',
            },
            {
              id: 688,
              name: 'relationship',
              slug: 'relationship',
              language: 'eng',
              games_count: 1005,
              image_background:
                'https://media.rawg.io/media/screenshots/509/509b69dab6649fe919787aee73a7067c_1GnvwTM.jpg',
            },
            {
              id: 633,
              name: 'renpy',
              slug: 'renpy',
              language: 'eng',
              games_count: 2541,
              image_background:
                'https://media.rawg.io/media/screenshots/e2a/e2a4cc35e916cdaa80994a826dc12268.jpg',
            },
          ],
          esrb_rating: null,
          user_game: null,
          reviews_count: 1,
          community_rating: 0,
          saturated_color: '0f0f0f',
          dominant_color: '0f0f0f',
          short_screenshots: [
            {
              id: -1,
              image:
                'https://media.rawg.io/media/screenshots/8c6/8c6b89f5692192318245655205e9650f.jpg',
            },
            {
              id: 2431073,
              image:
                'https://media.rawg.io/media/screenshots/8c6/8c6b89f5692192318245655205e9650f.jpg',
            },
          ],
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
                id: 5,
                name: 'Apple Macintosh',
                slug: 'mac',
              },
            },
          ],
          genres: [],
        },
        {
          slug: 'persona-4-golden',
          name: 'Persona 4 Golden',
          playtime: 8,
          platforms: [
            {
              platform: {
                id: 4,
                name: 'PC',
                slug: 'pc',
              },
            },
            {
              platform: {
                id: 1,
                name: 'Xbox One',
                slug: 'xbox-one',
              },
            },
            {
              platform: {
                id: 18,
                name: 'PlayStation 4',
                slug: 'playstation4',
              },
            },
            {
              platform: {
                id: 186,
                name: 'Xbox Series S/X',
                slug: 'xbox-series-x',
              },
            },
            {
              platform: {
                id: 7,
                name: 'Nintendo Switch',
                slug: 'nintendo-switch',
              },
            },
            {
              platform: {
                id: 19,
                name: 'PS Vita',
                slug: 'ps-vita',
              },
            },
          ],
          stores: [
            {
              store: {
                id: 1,
                name: 'Steam',
                slug: 'steam',
              },
            },
            {
              store: {
                id: 3,
                name: 'PlayStation Store',
                slug: 'playstation-store',
              },
            },
          ],
          released: '2012-11-20',
          tba: false,
          background_image:
            'https://media.rawg.io/media/games/b2c/b2c9c6115114c8f7d461b5430e8a7d4a.jpg',
          rating: 4.4,
          rating_top: 5,
          ratings: [
            {
              id: 5,
              title: 'exceptional',
              count: 353,
              percent: 66.35,
            },
            {
              id: 4,
              title: 'recommended',
              count: 107,
              percent: 20.11,
            },
            {
              id: 3,
              title: 'meh',
              count: 38,
              percent: 7.14,
            },
            {
              id: 1,
              title: 'skip',
              count: 34,
              percent: 6.39,
            },
          ],
          ratings_count: 523,
          reviews_text_count: 7,
          added: 2802,
          added_by_status: {
            yet: 164,
            owned: 1819,
            beaten: 404,
            toplay: 189,
            dropped: 114,
            playing: 112,
          },
          metacritic: 89,
          suggestions_count: 522,
          updated: '2023-06-06T23:02:08',
          id: 4186,
          score: '23.156778',
          clip: null,
          tags: [
            {
              id: 31,
              name: 'Singleplayer',
              slug: 'singleplayer',
              language: 'eng',
              games_count: 205885,
              image_background:
                'https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg',
            },
            {
              id: 42396,
              name: 'Для одного игрока',
              slug: 'dlia-odnogo-igroka',
              language: 'rus',
              games_count: 34626,
              image_background:
                'https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg',
            },
            {
              id: 42392,
              name: 'Приключение',
              slug: 'prikliuchenie',
              language: 'rus',
              games_count: 30108,
              image_background:
                'https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg',
            },
            {
              id: 40847,
              name: 'Steam Achievements',
              slug: 'steam-achievements',
              language: 'eng',
              games_count: 30578,
              image_background:
                'https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg',
            },
            {
              id: 40836,
              name: 'Full controller support',
              slug: 'full-controller-support',
              language: 'eng',
              games_count: 14337,
              image_background:
                'https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg',
            },
            {
              id: 40849,
              name: 'Steam Cloud',
              slug: 'steam-cloud',
              language: 'eng',
              games_count: 14211,
              image_background:
                'https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg',
            },
            {
              id: 42401,
              name: 'Отличный саундтрек',
              slug: 'otlichnyi-saundtrek',
              language: 'rus',
              games_count: 4461,
              image_background:
                'https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg',
            },
            {
              id: 42,
              name: 'Great Soundtrack',
              slug: 'great-soundtrack',
              language: 'eng',
              games_count: 3239,
              image_background:
                'https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg',
            },
            {
              id: 42394,
              name: 'Глубокий сюжет',
              slug: 'glubokii-siuzhet',
              language: 'rus',
              games_count: 9029,
              image_background:
                'https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg',
            },
            {
              id: 24,
              name: 'RPG',
              slug: 'rpg',
              language: 'eng',
              games_count: 17284,
              image_background:
                'https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg',
            },
            {
              id: 42412,
              name: 'Ролевая игра',
              slug: 'rolevaia-igra',
              language: 'rus',
              games_count: 13702,
              image_background:
                'https://media.rawg.io/media/games/4e0/4e0e7b6d6906a131307c94266e5c9a1c.jpg',
            },
            {
              id: 118,
              name: 'Story Rich',
              slug: 'story-rich',
              language: 'eng',
              games_count: 18210,
              image_background:
                'https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg',
            },
            {
              id: 42421,
              name: 'Стратегия',
              slug: 'strategiia',
              language: 'rus',
              games_count: 14899,
              image_background:
                'https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg',
            },
            {
              id: 42402,
              name: 'Насилие',
              slug: 'nasilie',
              language: 'rus',
              games_count: 4848,
              image_background:
                'https://media.rawg.io/media/games/9fa/9fa63622543e5d4f6d99aa9d73b043de.jpg',
            },
            {
              id: 34,
              name: 'Violent',
              slug: 'violent',
              language: 'eng',
              games_count: 5891,
              image_background:
                'https://media.rawg.io/media/games/7f6/7f6cd70ba2ad57053b4847c13569f2d8.jpg',
            },
            {
              id: 134,
              name: 'Anime',
              slug: 'anime',
              language: 'eng',
              games_count: 11053,
              image_background:
                'https://media.rawg.io/media/games/a91/a917f41bb87e4b9e7a762ac87d97a9dc.jpg',
            },
            {
              id: 42407,
              name: 'Аниме',
              slug: 'anime-2',
              language: 'rus',
              games_count: 6943,
              image_background:
                'https://media.rawg.io/media/games/a32/a32c9c299488ca99afc3fcea605a7718.jpg',
            },
            {
              id: 37796,
              name: 'exclusive',
              slug: 'exclusive',
              language: 'eng',
              games_count: 4506,
              image_background:
                'https://media.rawg.io/media/games/cd3/cd3c9c7d3e95cb1608fd6250f1b90b7a.jpg',
            },
            {
              id: 42556,
              name: 'Тайна',
              slug: 'taina',
              language: 'rus',
              games_count: 3764,
              image_background:
                'https://media.rawg.io/media/games/baf/baf9905270314e07e6850cffdb51df41.jpg',
            },
            {
              id: 42601,
              name: 'Цветастая',
              slug: 'tsvetastaia',
              language: 'rus',
              games_count: 9253,
              image_background:
                'https://media.rawg.io/media/games/444/4440f674e2bcb257e249a9ab595d8ab6.jpg',
            },
            {
              id: 117,
              name: 'Mystery',
              slug: 'mystery',
              language: 'eng',
              games_count: 11864,
              image_background:
                'https://media.rawg.io/media/games/90c/90caf1fcb836cad70013452f6f239008.jpg',
            },
            {
              id: 165,
              name: 'Colorful',
              slug: 'colorful',
              language: 'eng',
              games_count: 17831,
              image_background:
                'https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg',
            },
            {
              id: 42405,
              name: 'Сексуальный контент',
              slug: 'seksualnyi-kontent',
              language: 'rus',
              games_count: 4567,
              image_background:
                'https://media.rawg.io/media/games/880/880f6aa65fe9d786f1a455963df76180.jpg',
            },
            {
              id: 42426,
              name: 'Пошаговая стратегия',
              slug: 'poshagovaia-strategiia',
              language: 'rus',
              games_count: 2361,
              image_background:
                'https://media.rawg.io/media/screenshots/2b4/2b47c5edfeea2970eeb44d1f8cbd562d.jpg',
            },
            {
              id: 101,
              name: 'Turn-Based Strategy',
              slug: 'turn-based-strategy',
              language: 'eng',
              games_count: 4271,
              image_background:
                'https://media.rawg.io/media/games/f95/f95ec06eddda5c5bf206618c49cd3e68.jpg',
            },
            {
              id: 50,
              name: 'Sexual Content',
              slug: 'sexual-content',
              language: 'eng',
              games_count: 4588,
              image_background:
                'https://media.rawg.io/media/games/974/974d08635981db7677630327ce1fe4bb.jpg',
            },
            {
              id: 218,
              name: 'Multiple Endings',
              slug: 'multiple-endings',
              language: 'eng',
              games_count: 7088,
              image_background:
                'https://media.rawg.io/media/games/046/0464f4a36cd975a37c95b93b06058855.jpg',
            },
            {
              id: 42508,
              name: 'Нелинейность',
              slug: 'nelineinost',
              language: 'rus',
              games_count: 1021,
              image_background:
                'https://media.rawg.io/media/games/b2c/b2c9c6115114c8f7d461b5430e8a7d4a.jpg',
            },
            {
              id: 42393,
              name: 'Визуальная новелла',
              slug: 'vizualnaia-novella',
              language: 'rus',
              games_count: 4914,
              image_background:
                'https://media.rawg.io/media/games/efa/efa8003f31a514d34fb0d0f0e39b5e7d.jpg',
            },
            {
              id: 90,
              name: 'Visual Novel',
              slug: 'visual-novel',
              language: 'eng',
              games_count: 4757,
              image_background:
                'https://media.rawg.io/media/screenshots/34e/34e2e4f487c9cbeccb09e6be03766c5a.jpg',
            },
            {
              id: 40937,
              name: 'Steam Trading Cards',
              slug: 'steam-trading-cards-2',
              language: 'eng',
              games_count: 421,
              image_background:
                'https://media.rawg.io/media/games/998/9980c4296f311d8bcc5b451ca51e4fe1.jpg',
            },
            {
              id: 233,
              name: 'JRPG',
              slug: 'jrpg',
              language: 'eng',
              games_count: 3569,
              image_background:
                'https://media.rawg.io/media/games/cbf/cbf8fea101b56c7d383ddf8cc500ff54.jpg',
            },
            {
              id: 142,
              name: 'Detective',
              slug: 'detective',
              language: 'eng',
              games_count: 2695,
              image_background:
                'https://media.rawg.io/media/games/c50/c5085506fe4b5e20fc7aa5ace842c20b.jpg',
            },
            {
              id: 42526,
              name: 'Детектив',
              slug: 'detektiv',
              language: 'rus',
              games_count: 1257,
              image_background:
                'https://media.rawg.io/media/games/123/123e035701a975f5d96c233f4048eed2.jpg',
            },
            {
              id: 42514,
              name: 'Японская ролевая игра',
              slug: 'iaponskaia-rolevaia-igra',
              language: 'rus',
              games_count: 1898,
              image_background:
                'https://media.rawg.io/media/games/b32/b32735e3f7d95959cc39265f555f2aa8.jpg',
            },
            {
              id: 42568,
              name: 'Пошаговые сражения',
              slug: 'poshagovye-srazheniia',
              language: 'rus',
              games_count: 2102,
              image_background:
                'https://media.rawg.io/media/games/046/0464f4a36cd975a37c95b93b06058855.jpg',
            },
            {
              id: 42691,
              name: 'Эмоциональная',
              slug: 'emotsionalnaia',
              language: 'rus',
              games_count: 1691,
              image_background:
                'https://media.rawg.io/media/games/d6e/d6efe8b1fa59792044e91ec51abbb383.jpg',
            },
            {
              id: 175,
              name: 'Turn-Based Combat',
              slug: 'turn-based-combat',
              language: 'eng',
              games_count: 4113,
              image_background:
                'https://media.rawg.io/media/games/fd9/fd92f105dcd6491bc5d61135033d1f19.jpg',
            },
            {
              id: 42408,
              name: 'Симулятор свиданий',
              slug: 'simuliator-svidanii',
              language: 'rus',
              games_count: 1891,
              image_background:
                'https://media.rawg.io/media/screenshots/34e/34e2e4f487c9cbeccb09e6be03766c5a.jpg',
            },
            {
              id: 160,
              name: 'Dating Sim',
              slug: 'dating-sim',
              language: 'eng',
              games_count: 4344,
              image_background:
                'https://media.rawg.io/media/games/6cc/6cc23249972a427f697a3d10eb57a820.jpg',
            },
            {
              id: 42625,
              name: 'Партийная ролевая игра',
              slug: 'partiinaia-rolevaia-igra',
              language: 'rus',
              games_count: 773,
              image_background:
                'https://media.rawg.io/media/games/736/736e1e2e7670169114a48b5f65f66bdb.jpg',
            },
            {
              id: 206,
              name: 'Party-Based RPG',
              slug: 'party-based-rpg',
              language: 'eng',
              games_count: 721,
              image_background:
                'https://media.rawg.io/media/games/6c0/6c00ee85d1344f58c469e8e47fd8ae7c.jpg',
            },
            {
              id: 572,
              name: 'Emotional',
              slug: 'emotional',
              language: 'eng',
              games_count: 1803,
              image_background:
                'https://media.rawg.io/media/games/718/71891d2484a592d871e91dc826707e1c.jpg',
            },
          ],
          esrb_rating: {
            id: 4,
            name: 'Mature',
            slug: 'mature',
            name_en: 'Mature',
            name_ru: 'С 17 лет',
          },
          user_game: null,
          reviews_count: 532,
          saturated_color: '0f0f0f',
          dominant_color: '0f0f0f',
          short_screenshots: [
            {
              id: -1,
              image:
                'https://media.rawg.io/media/games/b2c/b2c9c6115114c8f7d461b5430e8a7d4a.jpg',
            },
            {
              id: 238672,
              image:
                'https://media.rawg.io/media/screenshots/3ff/3ff6df8e240e57dbc13a11526b101426.jpg',
            },
            {
              id: 238673,
              image:
                'https://media.rawg.io/media/screenshots/f5d/f5d6c268748ad155f0f7f11aea88d08c.jpg',
            },
            {
              id: 238674,
              image:
                'https://media.rawg.io/media/screenshots/954/9541b8505125a105771b6d61e8c35302.jpg',
            },
            {
              id: 238675,
              image:
                'https://media.rawg.io/media/screenshots/869/869ea496d999f4ca705c411e27fea687.jpg',
            },
            {
              id: 238676,
              image:
                'https://media.rawg.io/media/screenshots/470/4702110a30a13a987a3899eec013434c.jpg',
            },
            {
              id: 238677,
              image:
                'https://media.rawg.io/media/screenshots/835/835a41bc0203a27a79add746f25ca94c.jpg',
            },
          ],
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
          genres: [
            {
              id: 5,
              name: 'RPG',
              slug: 'role-playing-games-rpg',
            },
          ],
        },
        {
          slug: 'p4a',
          name: 'Persona 4 Arena',
          playtime: 5,
          platforms: [
            {
              platform: {
                id: 14,
                name: 'Xbox 360',
                slug: 'xbox360',
              },
            },
            {
              platform: {
                id: 16,
                name: 'PlayStation 3',
                slug: 'playstation3',
              },
            },
          ],
          stores: [
            {
              store: {
                id: 3,
                name: 'PlayStation Store',
                slug: 'playstation-store',
              },
            },
            {
              store: {
                id: 2,
                name: 'Xbox Store',
                slug: 'xbox-store',
              },
            },
            {
              store: {
                id: 7,
                name: 'Xbox 360 Store',
                slug: 'xbox360',
              },
            },
          ],
          released: '2012-07-26',
          tba: false,
          background_image:
            'https://media.rawg.io/media/games/bae/bae4e1ea0ec61f1c38b42cfa9e57fa4c.jpg',
          rating: 3.86,
          rating_top: 4,
          ratings: [
            {
              id: 4,
              title: 'recommended',
              count: 22,
              percent: 62.86,
            },
            {
              id: 5,
              title: 'exceptional',
              count: 6,
              percent: 17.14,
            },
            {
              id: 3,
              title: 'meh',
              count: 5,
              percent: 14.29,
            },
            {
              id: 1,
              title: 'skip',
              count: 2,
              percent: 5.71,
            },
          ],
          ratings_count: 35,
          reviews_text_count: 0,
          added: 201,
          added_by_status: {
            yet: 14,
            owned: 117,
            beaten: 34,
            toplay: 15,
            dropped: 19,
            playing: 2,
          },
          metacritic: 84,
          suggestions_count: 483,
          updated: '2022-09-04T16:46:33',
          id: 4141,
          score: '22.486423',
          clip: null,
          tags: [
            {
              id: 45,
              name: '2D',
              slug: '2d',
              language: 'eng',
              games_count: 187760,
              image_background:
                'https://media.rawg.io/media/games/85c/85c8ae70e7cdf0105f06ef6bdce63b8b.jpg',
            },
            {
              id: 134,
              name: 'Anime',
              slug: 'anime',
              language: 'eng',
              games_count: 10994,
              image_background:
                'https://media.rawg.io/media/games/21a/21ad672cedee9b4378abb6c2d2e626ee.jpg',
            },
            {
              id: 406,
              name: 'Story',
              slug: 'story',
              language: 'eng',
              games_count: 11207,
              image_background:
                'https://media.rawg.io/media/games/be5/be51faf9bec778b4ea1b06e9b084792c.jpg',
            },
            {
              id: 1125,
              name: 'arena',
              slug: 'arena',
              language: 'eng',
              games_count: 2071,
              image_background:
                'https://media.rawg.io/media/games/a68/a68e2151871fc821ec84bc229b72a027.jpg',
            },
          ],
          esrb_rating: {
            id: 3,
            name: 'Teen',
            slug: 'teen',
            name_en: 'Teen',
            name_ru: 'С 13 лет',
          },
          user_game: null,
          reviews_count: 35,
          saturated_color: '0f0f0f',
          dominant_color: '0f0f0f',
          short_screenshots: [
            {
              id: -1,
              image:
                'https://media.rawg.io/media/games/bae/bae4e1ea0ec61f1c38b42cfa9e57fa4c.jpg',
            },
            {
              id: 586951,
              image:
                'https://media.rawg.io/media/screenshots/8da/8da49731906654c25182b29790e9b0f9.jpg',
            },
            {
              id: 586952,
              image:
                'https://media.rawg.io/media/screenshots/e41/e41e949c0467dd053733aa3c3b628f38.jpg',
            },
            {
              id: 586953,
              image:
                'https://media.rawg.io/media/screenshots/280/280ad1553b30e3456a0a3e824c0f5e21.jpg',
            },
            {
              id: 586954,
              image:
                'https://media.rawg.io/media/screenshots/9a4/9a4613d6c58bf3b01dd5c0af818f7c67.jpg',
            },
            {
              id: 586955,
              image:
                'https://media.rawg.io/media/screenshots/2e7/2e766b9580706bba88a70306109c1ef1_5vw2iG0.jpg',
            },
            {
              id: 586956,
              image:
                'https://media.rawg.io/media/screenshots/5f9/5f9b414afbdae0ca6217353e2d796a4d.jpg',
            },
          ],
          parent_platforms: [
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
          ],
          genres: [
            {
              id: 6,
              name: 'Fighting',
              slug: 'fighting',
            },
          ],
        },
      ],
      user_platforms: false,
    },
  };
}
