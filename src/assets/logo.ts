import logo1 from './logos/aluminum-emboss.svg';
import logo2 from './logos/aluminum.svg';
import logo3 from './logos/blotting.svg';
import logo4 from './logos/border.svg';
import logo5 from './logos/brushed-metal.svg';
import logo6 from './logos/bumps.svg';
import logo7 from './logos/burnt.svg';
import logo8 from './logos/button.svg';
import logo9 from './logos/canvas.svg';
import logo10 from './logos/cracked-glass.svg';
import logo11 from './logos/cut-out.svg';
import logo12 from './logos/dark-glow.svg';
import logo13 from './logos/deep-chrome.svg';
import logo14 from './logos/drop-shadow.svg';
import logo15 from './logos/electrize.svg';
import logo16 from './logos/felt.svg';
import logo17 from './logos/fire.svg';
import logo18 from './logos/flex-metal.svg';
import logo19 from './logos/frosted-glass.svg';
import logo20 from './logos/gel.svg';
import logo21 from './logos/glow-bubble.svg';
import logo22 from './logos/glowing-rainbow.svg';
import logo23 from './logos/in-and-out.svg';
import logo24 from './logos/ink-bleed.svg';
import logo25 from './logos/liquid.svg';
import logo26 from './logos/lizard.svg';
import logo27 from './logos/wood.svg';
import logo28 from './logos/melted-rainbow.svg';
import logo29 from './logos/molten.svg';
import logo30 from './logos/mother-of-pearl.svg';
import logo31 from './logos/neon.svg';
import logo32 from './logos/noise.svg';
import logo33 from './logos/original.svg';
import logo34 from './logos/paint.svg';
import logo35 from './logos/plaster.svg';
import logo36 from './logos/pointilism.svg';
import logo37 from './logos/rainbow-button.svg';
import logo38 from './logos/refractive-glass.svg';
import logo39 from './logos/riddled.svg';
import logo40 from './logos/ridge.svg';
import logo41 from './logos/ridged.svg';
import logo42 from './logos/rough.svg';
import logo43 from './logos/silk.svg';
import logo44 from './logos/smart-jelly.svg';
import logo45 from './logos/snow.svg';
import logo46 from './logos/specular.svg';
import logo47 from './logos/spray.svg';
import logo48 from './logos/staind.svg';
import logo49 from './logos/steel.svg';
import logo50 from './logos/tiger.svg';
import logo51 from './logos/tinted-rainbow.svg';
import logo52 from './logos/translucent.svg';
import logo53 from './logos/velvet.svg';
import logo54 from './logos/warm.svg';
import logo55 from './logos/warped-rainbow.svg';
import logo56 from './logos/watercolor.svg';
import logo57 from './logos/wax.svg';

const logos = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
  logo9,
  logo10,
  logo11,
  logo12,
  logo13,
  logo14,
  logo15,
  logo16,
  logo17,
  logo18,
  logo19,
  logo20,
  logo21,
  logo22,
  logo23,
  logo24,
  logo25,
  logo26,
  logo27,
  logo28,
  logo29,
  logo30,
  logo31,
  logo32,
  logo33,
  logo34,
  logo35,
  logo36,
  logo37,
  logo38,
  logo39,
  logo40,
  logo41,
  logo42,
  logo43,
  logo44,
  logo45,
  logo46,
  logo47,
  logo48,
  logo49,
  logo50,
  logo51,
  logo52,
  logo53,
  logo54,
  logo55,
  logo56,
  logo57,
];

export default function randomLogo(): string {
  return logos[Math.floor(logos.length * Math.random())];
}
