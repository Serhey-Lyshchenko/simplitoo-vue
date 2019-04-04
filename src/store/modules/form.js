import formActions from "../actions/form";
const { SUBMIT_FORM, CANCEL_FORM, GET_FORM_STATUS } = formActions;

const state = {
  formStatus: "initial"
};

const getters = {
  [GET_FORM_STATUS]: state => state.formState
};

const mutations = {
  [SUBMIT_FORM]: state => {
    Object.assign(state, { formStatus: "submitted" });
    console.log("form status - ", state.formStatus);
  },
  [CANCEL_FORM]: state => {
    Object.assign(state, { formStatus: "canceled" });
    console.log("form status - ", state.formStatus);
  }
};
export default {
  namespaced: true,
  getters,
  state,
  mutations
};
