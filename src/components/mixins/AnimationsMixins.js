export default {   
   methods: {
      showAnimation() {
         this.$store.commit('updateIsShowImage', false)
         this.$store.commit('updateIsShowAnimation', true)               
      },
      hideAnimation() {
         setTimeout(() => {            
            this.$store.commit('updateIsShowImage', true)
            this.$store.commit('updateIsShowAnimation', false) 
         }, 500); 
         // this.log = false;
         // this.log1 = true;       
      } 
   }   
}