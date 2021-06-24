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
export const counter = computed(() => {
  console.log(state.counter);
  return state.counter;
});
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

export const grantToken = async () => {
  // Do things with `token`
  //   dispatch("store:auth:login");
};
