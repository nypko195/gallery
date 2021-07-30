export default {
   async createdGallery(context) {       
      let response = await fetch('https://don16obqbay2c.cloudfront.net/frontend-test-task/gallery-images.json')      
      let readyArrayImages = await response.json();           
      context.commit('readyListUrl', readyArrayImages.galleryImages)      
   },
   addImageToArray(context) {     
      const objNewUrl = {};
      objNewUrl.url = context.getters.urlAddedImage;     
      context.commit('readyListUrl', objNewUrl)     
   }   
}