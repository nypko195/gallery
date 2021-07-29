export default {
   enterUrl(state, payload) {
      if(payload.newUrl === '') {
         return
      } 
      state.urlAddedImage = payload.newUrl;
   },
   readyListUrl(state, payload) {
      state.listUrls = payload;
   },
   addNewImageArr(state, payload) {
      state.listUrls.push(payload)
   },
   updateIsShowAnimation(state, payload) {
      state.isShowAnimation = payload;
   },
   updateIsShowImage(state, payload) {      
      state.isShowImage = payload;
   }
}