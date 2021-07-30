export default {
   enterUrl(state, payload) {
      if(payload.newUrl === '') {
         return
      } 
      state.urlAddedImage = payload.newUrl;
   },
   readyListUrl(state, payload) {
      if(!!payload === Array.isArray(payload)) {         
         state.listUrls = payload;
      } else {         
         state.listUrls.push(payload)
      }      
   },   
   updateIsShowAnimation(state, payload) {
      state.isShowAnimation = payload;
   },
   updateIsShowImage(state, payload) {      
      state.isShowImage = payload;
   }
}