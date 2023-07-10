import ao from '../assets/icons/esrb/esrb-adults.svg';
import e10 from '../assets/icons/esrb/esrb-e10.svg';
import e from '../assets/icons/esrb/esrb-everyone.svg';
import m from '../assets/icons/esrb/esrb-mature.svg';
import rp from '../assets/icons/esrb/esrb-RP.svg';
import t from '../assets/icons/esrb/esrb-teen.svg';

export default function esrbGenerator(id: number) {
  switch (id) {
    case 1:
      return e;
    case 2:
      return e10;
    case 3:
      return t;
    case 4:
      return m;
    case 5:
      return ao;
    case 6:
      return rp;
    default:
      return null;
  }
}
