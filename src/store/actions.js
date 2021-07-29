export default {
   async createdGallery(context) {       
      let response = await fetch('https://don16obqbay2c.cloudfront.net/frontend-test-task/gallery-images.json')
      let readyArrayImages = await response.json();
      console.log(readyArrayImages);    
      context.commit('readyListUrl', readyArrayImages.galleryImages)
      console.log('created')
   },
   addImageToArray(context) {     
      const objNewUrl = {
         url : '',
      }
      objNewUrl.url = context.getters.urlAddedImage;             
      
      context.commit('addNewImageArr', objNewUrl)
      console.log('add');
   }   
}