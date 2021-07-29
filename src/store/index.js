import { createStore } from 'vuex';

import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

const store = createStore({
   store() {
      return {
         listUrls: [],
         urlAddedImage: '',
      }
   },
   mutations,
   actions,
   getters
})

export default store;