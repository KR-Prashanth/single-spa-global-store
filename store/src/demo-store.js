import Vue from "vue";
import VueCompositionApi from "@vue/composition-api";

Vue.use(VueCompositionApi);

import { computed, reactive } from "@vue/composition-api";
// import { dispatch } from "@/services/event";

/*
 |----------------------------------------------------------
 | Default State
 |----------------------------------------------------------
 */
const defaultState = () => {
  return {
    counter: 0,
  };
};

/*
 |----------------------------------------------------------
 | State
 |----------------------------------------------------------
 */
const state = reactive(defaultState());

/*
 |----------------------------------------------------------
 | Properties
 |----------------------------------------------------------
 */
export const counter = computed(() => state.counter);
export const token = computed(() => state.token);
export const authenticated = computed(() => state.token !== null);

/*
 |----------------------------------------------------------
 | Methods
 |----------------------------------------------------------
 */

export const incrementCounter = () => {
  state.counter++;
};

export const grantToken = async (credentials) => {
  const { token } = await apiGrantToken(credentials);
  // Do things with `token`

  //   dispatch("store:auth:login");
};
