<template>   
   <li class="gallery__list-card">
      <base-spinner v-show="readyisShowAnimation"></base-spinner>       
      <img :src="url" alt="" ref="image" v-show="readyIsShowImage">                    
      <span class="btn" @click="removeImage"></span>         
   </li>    
</template>

<script>
import BaseSpinner from '../../ui/BaseSpinner.vue';
import { mapGetters } from 'vuex'

export default {
   components: {
      BaseSpinner,
   },
   props: {
      url: {
         type: String,         
      },     
   },  
   computed: {
      ...mapGetters([
         'listUrls',
         'isShowAnimation',
         'isShowImage'
      ]),
      readyIsShowImage() {
         return this.isShowImage
      },
      readyisShowAnimation() {
         return this.isShowAnimation;
      }
   },
   methods: {
      removeImage() {                
         const removedDeletedImage = this.listUrls.filter(arr => arr.url != this.url);         
         this.$store.commit('readyListUrl', removedDeletedImage);        
      },      
   },                      
}
</script>

<style scoped> 
 /*полу годный  */
   /* li { 
      list-style-type: none;          
      margin: 5px;
      height: 150px;                
   }
   img {
      width: auto;
      height: 100%;
      object-fit: cover;              
   } */
/* годный но не то */
   li {           
      margin: 2px; 
      width: 200px;
      height: 200px;
      position: relative;
      overflow: hidden;
   }
   img {
      z-index: 2; 
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;      
      width: 100%; 
      height: 100%;
      object-fit: cover;  
      border-radius: 10px;
   }  
   .btn{
      z-index: 1;
      position: absolute;
      top: 5px;
      right: 5px;
      width: 35px;
      height: 35px;
      cursor: pointer;    
      background: #fff;
      border-radius: 50%;
      opacity: 0.8;
   }
   .btn:before,
   .btn:after {
      content: "";
      position: absolute;
      top: 15px;
      left: 8px;
      width: 18px;
      height: 3px;
      background: #e62f57;
   }
   .btn:before {      
      transform: rotate(45deg);
   }
   .btn:after {      
      transform: rotate(-45deg);
   }
   img:hover {
      z-index: 1;
   }
   .btn:hover {
      z-index: 2;
   }  
   @media (max-width: 870px) {
      li {           
      margin: 5px; 
      width: 300px;
      height: 300px;
      position: relative;
      overflow: hidden;
   } 
   }   
   @media (max-width: 400px) {
            
   }   
   </style>