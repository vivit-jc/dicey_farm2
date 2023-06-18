import { useMainStore } from '../stores/main-store';
import * as misc from './misc';
import { Notify } from 'quasar';
import * as init from './initData';

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

export function shipping(res: Resource) {
  if (!res.value) {
    console.error('res.valueがundifinedです');
    return false;
  }
  if (st.rest_count < shipping_max()) {
    misc.res_find('VP').num += res.value;
    res.num -= 1;
    st.rest_count += 1;
  } else {
    Notify.create('出荷回数の上限に達しています');
    return false;
  }
}

export function buildFacility() {
  const facility = st.selectedFacility;
  const facilities = init.facilities;
  const n = facilities.findIndex((e) => e.name == facility.name);
  if (st.existFacility[n]) {
    Notify.create('すでに建設済みです');
    return false;
  } else {
    st.existFacility[n] = true;
    st.selectedAction.name = '';
    st.gamestate = '';
    st.actionPoint -= 1;
    st.selectedFacility.name = '';
    st.actionCancelable = true;
  }
}

export function shippableResources() {
  return st.resources.filter(
    (res) => res.num > 0 && res.value && res.value > 0
  );
}

export function buy_max(): number {
  return 2;
}

export function shipping_max(): number {
  return 4;
}
