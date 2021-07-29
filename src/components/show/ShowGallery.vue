<template>
   <div class="gallery">
      <h2 class="gallery__title">Галерея</h2>
      <ul class="gallery__list">         
         <gallery-item 
         :isShowAnimation="this.isShowAnimation" 
         :isShowImage="this.isShowImage"                 
         v-for="image in loadingImage"
         :key="image.url"
         :url="image.url"></gallery-item>
      </ul>      
   </div>    
</template>

<script>
import { mapGetters } from 'vuex';
import GalleryItem from './GalleryItem.vue';

export default {
   components: {
      GalleryItem,      
   }, 
   data() {
      return {
         isShowAnimation: false,
         isShowImage: true,
         
      }
   }, 
   computed: {
      ...mapGetters(['listUrls']),
      loadingImage() {          
         return this.listUrls              
      },    
   },    
   methods: {
      //Animation
      showAnimation() {
         this.isShowImage = false,         
         this.isShowAnimation = true;         
         console.log('true')
      },
      hideAnimation() {
         setTimeout(() => {
            this.isShowAnimation = false;
            this.isShowImage = true;  
         }, 500); 
         // this.log = false;
         // this.log1 = true;        
         console.log('false')
      },      
      async placeholderForImages() {
         this.showAnimation();             
         await this.$store.dispatch('createdGallery');         
         this.hideAnimation()        
      }
   },   
   mounted() {
      this.placeholderForImages();
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

