import urls from '../url.json';

export default {
   createdGallery(context) {
      console.log(urls.galleryImages)
      context.commit('readyListUrl', urls.galleryImages)
      console.log('created')
   },
   addImageArray(context) {     
      const objNewUrl = {
         url : '',
      }
      objNewUrl.url = context.getters.urlNewImage; 
      
      // let jsonUrl = JSON.stringify(objNewUrl);  
      // console.log(jsonUrl)      
      
      context.commit('addNewImageArr', objNewUrl)
      console.log('add');
   }   
}