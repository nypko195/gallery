export default {
   enterUrl(state, payload) {
      state.addImageUrl = payload.newUrl;
   },
   readyListUrl(state, payload) {
      state.listUrls = payload;
   },
   addNewImageArr(state, payload) {
      state.listUrls.push(payload)
   }
}