<template>
    <div class="posts">
      <h1>Postitused</h1>
      <p>This is the posts page. You can add post-specific content here.</p>
      <posts-compo/>
    </div>
  </template>
  
  <script>
import PostsCompo from '@/components/PostsCompo.vue';
  export default {
    name: "Posts",
    components: {PostsCompo},
    methods: {
IncreasePrice: function() {
    /*
    When using the struct mode in the vuex store, we cannot mutate state outside mutation handlers.
    Therefore, using the following function will produce an error
    
    this.$store.state.productList.forEach(product => {
        product.price += 1;
        }) 
    */
//this.$store.commit("IncreasePrice") // mutations
this.$store.dispatch("IncreasePriceAct")
},
DecreasePrice: function() {
// this.$store.commit("DecreasePrice")  // mutations
this.$store.dispatch("DecreasePriceAct")
}}

  };
  </script>
  
  <style scoped>
  .posts {
    text-align: center;
    padding: 20px;
  }
  
  h1 {
    color: #333;
  }
  </style>
  