<template>
   <div>      
      <section class="add-block">
         <h2 class="add-block__title">Добавьте свое изображение</h2>
         <label>
            <input class="add-block__inp" type="text" placeholder="Введите url картинки" v-model.trim="url">
         </label>
         <button @click="addImages" class="add-block__btn">Загрузить</button>
      </section>     
      <section class="gallery-block" v-if="!show">
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
         show: false,
      }
   },
   methods: {
      addImages() {
         this.$store.commit('enterUrl', {
            newUrl: this.url
         });
         
         this.$store.dispatch('addImageArray')

         if(this.url === '') {
            return
         }                 
         this.url = ''
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
</style>
