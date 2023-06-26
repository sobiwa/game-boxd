import androidIcon from '../assets/icons/platforms/android.svg';
import appleIcon from '../assets/icons/platforms/apple.svg';
import commodoreIcon from '../assets/icons/platforms/commodore.svg';
import atariIcon from '../assets/icons/platforms/atari.png';
import iosIcon from '../assets/icons/platforms/ios.svg';
import linuxIcon from '../assets/icons/platforms/linux.png';
import nintendoIcon from '../assets/icons/platforms/nintendo.svg';
import psIcon from '../assets/icons/platforms/ps.svg';
import segaIcon from '../assets/icons/platforms/sega.png';
import webIcon from '../assets/icons/platforms/web.png';
import xboxIcon from '../assets/icons/platforms/xbox.svg';
import windowsIcon from '../assets/icons/platforms/windows.svg';

interface ParentPlatform {
  id: number;
  icon: string;
  name: string;
  slug: string;
  platforms: Array<Record<string, unknown>>;
}
const platforms: Array<ParentPlatform> = [
  {
    id: 1,
    icon: windowsIcon,
    name: 'PC',
    slug: 'pc',
    platforms: [
      {
        id: 4,
        name: 'PC',
        slug: 'pc',
        games_count: 513579,
        image_background:
          'https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg',
        image: null,
        year_start: null,
        year_end: null,
      },
    ],
  },
  {
    id: 2,
    icon: psIcon,
    name: 'PlayStation',
    slug: 'playstation',
    platforms: [
      {
        id: 187,
        name: 'PlayStation 5',
        slug: 'playstation5',
        games_count: 891,
        image_background:
          'https://media.rawg.io/media/games/dcb/dcbb67f371a9a28ea38ffd73ee0f53f3.jpg',
        image: null,
        year_start: 2020,
        year_end: null,
      },
      {
        id: 18,
        name: 'PlayStation 4',
        slug: 'playstation4',
        games_count: 6650,
        image_background:
          'https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg',
        image: null,
        year_start: null,
        year_end: null,
      },
      {
        id: 16,
        name: 'PlayStation 3',
        slug: 'playstation3',
        games_count: 3181,
        image_background:
          'https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg',
        image: null,
        year_start: null,
        year_end: null,
      },
      {
        id: 15,
        name: 'PlayStation 2',
        slug: 'playstation2',
        games_count: 1977,
        image_background:
          'https://media.rawg.io/media/games/233/233cdc08cce0228f6f35222eca3bff92.jpg',
        image: null,
        year_start: null,
        year_end: null,
      },
      {
        id: 27,
        name: 'PlayStation',
        slug: 'playstation1',
        games_count: 1623,
        image_background:
          'https://media.rawg.io/media/games/8fc/8fcc2ff5c7bcdb58199b1a4326817ceb.jpg',
        image: null,
        year_start: null,
        year_end: null,
      },
      {
        id: 19,
        name: 'PS Vita',
        slug: 'ps-vita',
        games_count: 1450,
        image_background:
          'https://media.rawg.io/media/games/283/283e7e600366b0da7021883d27159b27.jpg',
        image: null,
        year_start: null,
        year_end: null,
      },
      {
        id: 17,
        name: 'PSP',
        slug: 'psp',
        games_count: 1361,
        image_background:
          'https://media.rawg.io/media/games/a6c/a6cd31267a20a615d35f618e766208fc.jpg',
        image: null,
        year_start: null,
        year_end: null,
      },
    ],
  },
  {
    id: 3,
    icon: xboxIcon,
    name: 'Xbox',
    slug: 'xbox',
    platforms: [
      {
        id: 1,
        name: 'Xbox One',
        slug: 'xbox-one',
        games_count: 5520,
        image_background:
          'https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg',
        image: null,
        year_start: null,
        year_end: null,
      },
      {
        id: 186,
        name: 'Xbox Series S/X',
        slug: 'xbox-series-x',
        games_count: 771,
        image_background:
          'https://media.rawg.io/media/games/739/73990e3ec9f43a9e8ecafe207fa4f368.jpg',
        image: null,
        year_start: 2020,
        year_end: null,
      },
      {
        id: 14,
        name: 'Xbox 360',
        slug: 'xbox360',
        games_count: 2773,
        image_background:
          'https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg',
        image: null,
        year_start: null,
        year_end: null,
      },
      {
        id: 80,
        name: 'Xbox',
        slug: 'xbox-old',
        games_count: 722,
        image_background:
          'https://media.rawg.io/media/games/e60/e601c02ec49ef4f1d5ef147994b3935f.jpg',
        image: null,
        year_start: null,
        year_end: null,
      },
    ],
  },
  {
    id: 4,
    icon: iosIcon,
    name: 'iOS',
    slug: 'ios',
    platforms: [
      {
        id: 3,
        name: 'iOS',
        slug: 'ios',
        games_count: 76901,
        image_background:
          'https://media.rawg.io/media/games/e74/e74458058b35e01c1ae3feeb39a3f724.jpg',
        image: null,
        year_start: null,
        year_end: null,
      },
    ],
  },
  {
    id: 8,
    icon: androidIcon,
    name: 'Android',
    slug: 'android',
    platforms: [
      {
        id: 21,
        name: 'Android',
        slug: 'android',
        games_count: 52229,
        image_background:
          'https://media.rawg.io/media/games/fc3/fc30790a3b3c738d7a271b02c1e26dc2.jpg',
        image: null,
        year_start: null,
        year_end: null,
      },
    ],
  },
  {
    id: 5,
    icon: appleIcon,
    name: 'Apple Macintosh',
    slug: 'mac',
    platforms: [
      {
        id: 5,
        name: 'macOS',
        slug: 'macos',
        games_count: 101615,
        image_background:
          'https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg',
        image: null,
        year_start: null,
        year_end: null,
      },
      {
        id: 55,
        name: 'Classic Macintosh',
        slug: 'macintosh',
        games_count: 676,
        image_background:
          'https://media.rawg.io/media/screenshots/f6b/f6b3338889ec877c9d3d89fc4f665152.jpg',
        image: null,
        year_start: null,
        year_end: null,
      },
      {
        id: 41,
        name: 'Apple II',
        slug: 'apple-ii',
        games_count: 422,
        image_background:
          'https://media.rawg.io/media/screenshots/53d/53d57cbd135807d5b9945b3076bd2c9a.jpg',
        image: null,
        year_start: null,
        year_end: null,
      },
    ],
  },
  {
    id: 6,
    icon: linuxIcon,
    name: 'Linux',
    slug: 'linux',
    platforms: [
      {
        id: 6,
        name: 'Linux',
        slug: 'linux',
        games_count: 75214,
        image_background:
          'https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg',
        image: null,
        year_start: null,
        year_end: null,
      },
    ],
  },
  {
    id: 7,
    icon: nintendoIcon,
    name: 'Nintendo',
    slug: 'nintendo',
    platforms: [
      {
        id: 7,
        name: 'Nintendo Switch',
        slug: 'nintendo-switch',
        games_count: 5256,
        image_background:
          'https://media.rawg.io/media/games/5a4/5a44112251d70a25291cc33757220fce.jpg',
        image: null,
        year_start: null,
        year_end: null,
      },
      {
        id: 8,
        name: 'Nintendo 3DS',
        slug: 'nintendo-3ds',
        games_count: 1703,
        image_background:
          'https://media.rawg.io/media/screenshots/ea9/ea9036e881db5e334e10b2b61aecb29e.jpg',
        image: null,
        year_start: null,
        year_end: null,
      },
      {
        id: 9,
        name: 'Nintendo DS',
        slug: 'nintendo-ds',
        games_count: 2476,
        image_background:
          'https://media.rawg.io/media/games/852/8522935d8ab27b610a254b52de0da212.jpg',
        image: null,
        year_start: null,
        year_end: null,
      },
      {
        id: 13,
        name: 'Nintendo DSi',
        slug: 'nintendo-dsi',
        games_count: 37,
        image_background:
          'https://media.rawg.io/media/screenshots/b45/b452e9b20e969a64d0088ae467d1dcab.jpg',
        image: null,
        year_start: null,
        year_end: null,
      },
      {
        id: 10,
        name: 'Wii U',
        slug: 'wii-u',
        games_count: 1148,
        image_background:
          'https://media.rawg.io/media/games/e04/e04963f3ac4c4fa83a1dc0b9231e50db.jpg',
        image: null,
        year_start: null,
        year_end: null,
      },
      {
        id: 11,
        name: 'Wii',
        slug: 'wii',
        games_count: 2255,
        image_background:
          'https://media.rawg.io/media/games/9fb/9fbaea2168caea1f806546dfdaaeb1da.jpg',
        image: null,
        year_start: null,
        year_end: null,
      },
      {
        id: 105,
        name: 'GameCube',
        slug: 'gamecube',
        games_count: 635,
        image_background:
          'https://media.rawg.io/media/screenshots/ada/adafd921942b7fadd62ca606dda2b1cb.jpg',
        image: null,
        year_start: null,
        year_end: null,
      },
      {
        id: 83,
        name: 'Nintendo 64',
        slug: 'nintendo-64',
        games_count: 364,
        image_background:
          'https://media.rawg.io/media/screenshots/a51/a519f93600f1427375260522f47e2e7b.jpg',
        image: null,
        year_start: null,
        year_end: null,
      },
      {
        id: 24,
        name: 'Game Boy Advance',
        slug: 'game-boy-advance',
        games_count: 950,
        image_background:
          'https://media.rawg.io/media/games/104/104e82a52297cc7ddd3b05b7e68be04f.jpg',
        image: null,
        year_start: null,
        year_end: null,
      },
      {
        id: 43,
        name: 'Game Boy Color',
        slug: 'game-boy-color',
        games_count: 413,
        image_background:
          'https://media.rawg.io/media/games/28b/28b088364ecab7870dffc3b710104734.jpg',
        image: null,
        year_start: null,
        year_end: null,
      },
      {
        id: 26,
        name: 'Game Boy',
        slug: 'game-boy',
        games_count: 607,
        image_background:
          'https://media.rawg.io/media/games/e9a/e9a782a3f40f0e53ab64c7018251053e.jpg',
        image: null,
        year_start: null,
        year_end: null,
      },
      {
        id: 79,
        name: 'SNES',
        slug: 'snes',
        games_count: 947,
        image_background:
          'https://media.rawg.io/media/games/a9a/a9a2472f862b041d2980103ddbb61c91.jpg',
        image: null,
        year_start: null,
        year_end: null,
      },
      {
        id: 49,
        name: 'NES',
        slug: 'nes',
        games_count: 976,
        image_background:
          'https://media.rawg.io/media/games/73e/73e2509fef0e46cdbea86e5e8f8822ca.jpg',
        image: null,
        year_start: null,
        year_end: null,
      },
    ],
  },
  {
    id: 9,
    icon: atariIcon,
    name: 'Atari',
    slug: 'atari',
    platforms: [
      {
        id: 28,
        name: 'Atari 7800',
        slug: 'atari-7800',
        games_count: 64,
        image_background:
          'https://media.rawg.io/media/screenshots/565/56504b28b184dbc630a7de118e39d822.jpg',
        image: null,
        year_start: null,
        year_end: null,
      },
      {
        id: 31,
        name: 'Atari 5200',
        slug: 'atari-5200',
        games_count: 64,
        image_background:
          'https://media.rawg.io/media/screenshots/61a/61a60e3ee55941387681eaa59e3becbf.jpg',
        image: null,
        year_start: null,
        year_end: null,
      },
      {
        id: 23,
        name: 'Atari 2600',
        slug: 'atari-2600',
        games_count: 286,
        image_background:
          'https://media.rawg.io/media/screenshots/b12/b12ed274eed80e4aced37badf228d1cf.jpg',
        image: null,
        year_start: null,
        year_end: null,
      },
      {
        id: 22,
        name: 'Atari Flashback',
        slug: 'atari-flashback',
        games_count: 30,
        image_background:
          'https://media.rawg.io/media/screenshots/2aa/2aa07f58491e14b0183333f8956bc802.jpg',
        image: null,
        year_start: null,
        year_end: null,
      },
      {
        id: 25,
        name: 'Atari 8-bit',
        slug: 'atari-8-bit',
        games_count: 306,
        image_background:
          'https://media.rawg.io/media/games/876/8764efc52fba503a00af64a2cd51f66c.jpg',
        image: null,
        year_start: null,
        year_end: null,
      },
      {
        id: 34,
        name: 'Atari ST',
        slug: 'atari-st',
        games_count: 835,
        image_background:
          'https://media.rawg.io/media/games/32d/32d851318b042aba3df62e52d868d599.jpg',
        image: null,
        year_start: null,
        year_end: null,
      },
      {
        id: 46,
        name: 'Atari Lynx',
        slug: 'atari-lynx',
        games_count: 56,
        image_background:
          'https://media.rawg.io/media/screenshots/575/575b2838392ed177dd7d2c734c682f93.jpg',
        image: null,
        year_start: null,
        year_end: null,
      },
      {
        id: 50,
        name: 'Atari XEGS',
        slug: 'atari-xegs',
        games_count: 22,
        image_background:
          'https://media.rawg.io/media/screenshots/769/7691726d70c23c029903df08858df001.jpg',
        image: null,
        year_start: null,
        year_end: null,
      },
      {
        id: 112,
        name: 'Jaguar',
        slug: 'jaguar',
        games_count: 37,
        image_background:
          'https://media.rawg.io/media/games/855/8552687245f888ba388bc6ec0dcc3947.jpg',
        image: null,
        year_start: null,
        year_end: null,
      },
    ],
  },
  {
    id: 10,
    icon: commodoreIcon,
    name: 'Commodore / Amiga',
    slug: 'commodore-amiga',
    platforms: [
      {
        id: 166,
        name: 'Commodore / Amiga',
        slug: 'commodore-amiga',
        games_count: 2076,
        image_background:
          'https://media.rawg.io/media/games/cfd/cfdfaaddca4f351b27f965a2f97af0f4.jpg',
        image: null,
        year_start: null,
        year_end: null,
      },
    ],
  },
  {
    id: 11,
    icon: segaIcon,
    name: 'SEGA',
    slug: 'sega',
    platforms: [
      {
        id: 167,
        name: 'Genesis',
        slug: 'genesis',
        games_count: 828,
        image_background:
          'https://media.rawg.io/media/games/637/637d7dc2f44d0f6ddd3ee2c0b1366962.jpg',
        image: null,
        year_start: null,
        year_end: null,
      },
      {
        id: 107,
        name: 'SEGA Saturn',
        slug: 'sega-saturn',
        games_count: 347,
        image_background:
          'https://media.rawg.io/media/games/45d/45da4dc311d84b79230317d7b24a3dec.jpg',
        image: null,
        year_start: null,
        year_end: null,
      },
      {
        id: 119,
        name: 'SEGA CD',
        slug: 'sega-cd',
        games_count: 160,
        image_background:
          'https://media.rawg.io/media/screenshots/364/364cb96fad83ff293e6359394a7cc51b.jpg',
        image: null,
        year_start: null,
        year_end: null,
      },
      {
        id: 117,
        name: 'SEGA 32X',
        slug: 'sega-32x',
        games_count: 46,
        image_background:
          'https://media.rawg.io/media/screenshots/d9f/d9f308b5d824ae8f047edc0a998a587b.jpg',
        image: null,
        year_start: null,
        year_end: null,
      },
      {
        id: 74,
        name: 'SEGA Master System',
        slug: 'sega-master-system',
        games_count: 225,
        image_background:
          'https://media.rawg.io/media/screenshots/cbc/cbca22c381d18a8df6e9361a33f8a899.jpg',
        image: null,
        year_start: null,
        year_end: null,
      },
      {
        id: 106,
        name: 'Dreamcast',
        slug: 'dreamcast',
        games_count: 357,
        image_background:
          'https://media.rawg.io/media/screenshots/6e4/6e45a8e19beb5d510813f10f8af4eedc.jpg',
        image: null,
        year_start: null,
        year_end: null,
      },
      {
        id: 77,
        name: 'Game Gear',
        slug: 'game-gear',
        games_count: 218,
        image_background:
          'https://media.rawg.io/media/games/470/47058af09b864c2d211a08271eccfb4f.jpg',
        image: null,
        year_start: null,
        year_end: null,
      },
    ],
  },
  {
    id: 12,
    icon: null,
    name: '3DO',
    slug: '3do',
    platforms: [
      {
        id: 111,
        name: '3DO',
        slug: '3do',
        games_count: 95,
        image_background:
          'https://media.rawg.io/media/screenshots/180/180b5f6e5d8c770bbbf941b9875046b6.jpg',
        image: null,
        year_start: null,
        year_end: null,
      },
    ],
  },
  {
    id: 13,
    icon: null,
    name: 'Neo Geo',
    slug: 'neo-geo',
    platforms: [
      {
        id: 12,
        name: 'Neo Geo',
        slug: 'neogeo',
        games_count: 116,
        image_background:
          'https://media.rawg.io/media/screenshots/2d2/2d2021a0b04bd5fea05586a4681cae1f.jpg',
        image: null,
        year_start: null,
        year_end: null,
      },
    ],
  },
  {
    id: 14,
    icon: webIcon,
    name: 'Web',
    slug: 'web',
    platforms: [
      {
        id: 171,
        name: 'Web',
        slug: 'web',
        games_count: 260094,
        image_background:
          'https://media.rawg.io/media/screenshots/6aa/6aa8cfccfa7f8d7acbe1a6e24dfb45dd.jpeg',
        image: null,
        year_start: null,
        year_end: null,
      },
    ],
  },
];

export default platforms;
