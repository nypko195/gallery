<template>
   <div>      
      <section class="add-block">
         <h2 class="add-block__title">Добавьте свое изображение</h2>
         <label>
            <input class="add-block__inp" type="text" placeholder="Введите url картинки" v-model.trim="url">           
         </label>
         <button @click="addImages" class="add-block__btn">Загрузить</button>         
      </section>     
      <section class="gallery-block"      
      @dragover="addActiveClass"
      @drop="removeActiveClass"      
      @dragover.prevent
      @dragenter.prevent
      @dragstart.prevent
      @drop.prevent="handleFileChange($event.dataTransfer)"
      >     
         <div class="gallery-block__drop-zone" ref="zone" @dragleave="removeActiveClass">
            <span class="gallery-block__drop-zone-text">Перетащите сюда Вашу картинку</span>
            <input            
               id="file-input"
               type="file"
               accept="image/png, image.jpeg"
               @change="handleFileChange($event.target)"> 
         </div>
         <show-gallery></show-gallery>         
      </section>      
   </div>
</template>

<script>
import ShowGallery from '../show/ShowGallery.vue';

export default {
   components: {
      ShowGallery      
   },
   data() {
      return {
         url: '',  
         selectedFile: null,
         image: '',       
      }
   },
   computed: {

   },
   methods: {
      addImages() {
         this.$store.commit('enterUrl', {
            newUrl: this.url
         });   

         if(this.url === '') {
            return
         }                 
         this.url = ''
         this.$store.dispatch('addImageArray')
      }, 
      handleFileChange: function(event) {        
         let selectedFile = URL.createObjectURL(event.files[0]);         
         let objFile = {
            url: ''
         }
         objFile.url = selectedFile;         
         this.$store.commit('addNewImageArr', objFile);                  
      }, 
      addActiveClass() {
         console.log('active')
         let domElementDrop = this.$refs.zone;         
         domElementDrop.classList.add('active')
      },
      removeActiveClass() {   
         console.log('remove')     
         let domElementDrop = this.$refs.zone;
         domElementDrop.classList.remove('active')
      }                 
   },   
}
</script>

<style> 
   .add-block {         
      background: #FFFFFF;
      border-radius: 10px;      
   }
   .gallery-block {
      margin-top: 50px;      
      background: #FFFFFF;
      border-radius: 10px; 
      position: relative;     
   }
   .add-block {
      padding: 30px;      
   }
   .add-block__title {
      font-size: 28px;      
   }
   .add-block__inp {
      margin-top: 20px;
      border: 2px solid #40E7F2;
      text-align: center;
      font-size: 18px;
      padding: 3px 0px;
      border-radius: 5px;
   }
   .add-block__btn {
      margin-left: 10px;
      background: cornflowerblue;      
      border: 1px solid #40E7F2;
      background: #40E7F2;
      font-size: 18px;
      padding: 3px 3px;
      border-radius: 5px;
   }  
   .gallery-block__drop-zone{     
      display: none;      
      z-index: 3;
      position: absolute;
      text-align: center;
      width: 100%;
      height: 100%;           
      background: #A3DBFF;
      border: 3px dashed #333; 
      border-radius: 10px;
      opacity: 0.9;  
   }
   .active {
      display: block;      
   }
   .gallery-block__drop-zone-text {      
      font-size: 24px;
      color: #000;
      font-weight: 700;
      text-align: center;
      position: absolute;
      top: 50%;
      left: 29%;
   }
   input[type="file"] {
      position: absolute;
      opacity: 0;
      width: inherit;
      min-height: 0.1px;
      max-height: 0.1px;
      cursor: pointer;
   } 
   @media (max-width: 870px) {
      .add-block {
         margin: 10px 15px 0px 15px;
      }
      .gallery-block {
         margin: 50px 15px 0px 15px;
      }  
      .gallery-block__drop-zone-text {
         display: none;
      }    
   }   
   @media (max-width: 400px) {
      .add-block__btn {
         margin-top: 20px;
      }
      .add-block {
         padding: 10px;      
      }      
   }   
</style>
