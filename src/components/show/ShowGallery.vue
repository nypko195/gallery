<template>
   <div>
      <h2>Галерея</h2>
      <ul>
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

<style scoped>
   ul {      
      display: flex;      
      flex-wrap: wrap;           
      margin: 0px; 
      width: 100%;
      justify-content: center;
      padding: 30px 0px;
   } 
   h2 {
      font-size: 28px; 
      padding-top: 20px;
   } 
</style>

