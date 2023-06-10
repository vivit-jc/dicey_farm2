import d1 from 'assets/d1.png';
import d2 from 'assets/d2.png';
import d3 from 'assets/d3.png';
import d4 from 'assets/d4.png';
import d5 from 'assets/d5.png';
import d6 from 'assets/d6.png';
import { useMainStore } from '../stores/main-store';

const st = useMainStore();

export function game_init() {
  st.marchant = [
    { j: '麦の種', num: 2 },
    { j: '野菜の種', num: 2 },
    { j: '花の種', num: 2 },
    { j: '牛', num: 1 },
    { j: '豚', num: 1 },
    { j: '鶏', num: 1 },
  ];
  shuffle(st.marchant);
}

export function shuffle(array: any[]) {
  for (let i = array.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

export function dice_img(num: number) {
  return [d1, d2, d3, d4, d5, d6][num - 1];
}

export function res_find(name: string) {
  const r = st.resources.find((f) => f.j == name);
  if (r) {
    return r;
  } else {
    console.error('指定された名前の資源が見つかりません: ' + name);
    return {} as Resource;
  }
}
