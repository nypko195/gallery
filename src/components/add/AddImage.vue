<template>
   <div>      
      <section class="add-block">
         <h2 class="add-block__title">Добавьте свое изображение</h2>
         <label>
            <input class="add-block__inp" type="text" placeholder="Введите url картинки" v-model.trim="url">           
         </label>
         <button @click="addImages" class="add-block__btn">Загрузить</button>         
      </section>     
      <section class="gallery-block dropzone"
      @dragover.prevent
      @dragenter.prevent
      @dragstart.prevent
      @drop.prevent="handleFileChange($event.dataTransfer)"
      >
      <input
      id="file-input"
      type="file"
      accept="image/png, image.jpeg"
      @change="handleFileChange($event.target)">
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
   },   
}
</script>

<style> 
   .add-block {
      margin-top: 10px;      
      background: #FFFFFF;
      border-radius: 10px;      
   }
   .gallery-block {
      margin-top: 50px;      
      background: #FFFFFF;
      border-radius: 10px;      
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
   @media (max-width: 870px) {
      .add-block {
         margin: 10px 15px 0px 15px;
      }
      .gallery-block {
         margin: 50px 15px 0px 15px;
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


   .dropzone .active { 
   opacity: 0.15; 
   background: #fdfdfd;
   border-radius: 5px;
   border: 2px dashed #000;
   background: #40E7F2;   
   }

input[type="file"] {
   position: absolute;
   opacity: 0;
   width: inherit;
   min-height: 200px;
   max-height: 400px;
   cursor: pointer;
}  
</style>
