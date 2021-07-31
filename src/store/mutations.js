export default {
   enterUrl(state, payload) {
      if(payload.newUrl === '') {
         return
      } 
      state.urlAddedImage = payload.newUrl;
   },
   async readyListUrl(state, payload) {
      if(!!payload === Array.isArray(payload)) {         
         state.listUrls = payload;
      } else {         
         await state.listUrls.push(payload)
      }      
   },   
   updateIsShowAnimation(state, payload) {
      state.isShowAnimation = payload;
   },
   updateIsShowImage(state, payload) {      
      state.isShowImage = payload;
   }
}