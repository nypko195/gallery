<template>
   <div class="gallery">
      <h2 class="gallery__title">Галерея</h2>
      <ul class="gallery__list">
         <gallery-item        
         v-for="image in loadingImage"
         :key="image.url"
         :url="image.url"></gallery-item>
      </ul>      
   </div>   
</template>

<script>
import GalleryItem from './GalleryItem.vue';

export default {
   components: {
      GalleryItem,
   },    
   computed: {
      loadingImage() {         
         return this.$store.getters.arrUrls;         
      }
   },
   created() {
      this.$store.dispatch('createdGallery');
   }  
}
</script>

<style>
   .gallery__list {      
      display: flex;      
      flex-wrap: wrap;           
      margin: 0px; 
      width: 100%;
      justify-content: center;
      padding: 30px 0px;
   } 
   .gallery__title {
      font-size: 28px; 
      padding-top: 20px;
   }  
</style>

