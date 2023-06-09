import d1 from 'assets/d1.png';
import d2 from 'assets/d2.png';
import d3 from 'assets/d3.png';
import d4 from 'assets/d4.png';
import d5 from 'assets/d5.png';
import d6 from 'assets/d6.png';
import { useMainStore } from '../stores/main-store';

const st = useMainStore();

export function dice_img(num: number) {
  return [d1, d2, d3, d4, d5, d6][num - 1];
}

export function res_find(name: string) {
  const r = st.resources.find((f) => f.j == name);
  if (r) {
    return r;
  } else {
    return {} as Resource;
  }
}
