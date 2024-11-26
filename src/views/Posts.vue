
<template>
  <div id="posts">
      <main>
          <button @click="resetLikes"> Nollaa kaikki tykkäykset</button>
          <PostsCompo />
      </main>
    </div>
  </template>
  
  <script>
  import Header from "@/components/Header.vue";
  import Footer from "@/components/Footer.vue";
  import PostsCompo from "@/components/PostsCompo.vue";
  
  export default {
      name: "Posts",
      components: {
          Header,
          Footer,
          PostsCompo,
      },
      methods: {
          resetLikes() {
              this.$store.dispatch('resetLikesAction');
          }
      }
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
  button {
    margin-top: 15px;
    background-color: #c21010;
    color: white;
    cursor: pointer;
  }

  button:hover {
    opacity: 0.8;
  }
  </style>
  