import { useMainStore } from '../stores/main-store';
import * as misc from './misc';
import { Notify } from 'quasar';

const st = useMainStore();

export function doSeed(seed: string) {
  if (st.fields.indexOf('空き') == -1) {
    Notify.create('畑に空きがありません');
    return false;
  }
  misc.res_find(seed).num -= 1;
  st.fields[st.fields.indexOf('空き')] = seed.replace('の種', '');
  st.actionCancelable = false;
}

export function getSeedArray() {
  const rarray = [] as string[];
  ['麦の種', '野菜の種', '花の種'].forEach((e) => {
    if (misc.res_find(e).num > 0) {
      rarray.push(e);
    }
  });
  return rarray;
}

export function buy_max(): number {
  return 2;
}
