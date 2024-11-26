
<template>
  <div id="posts">
      <main>
          <h1>Postitused</h1>
          <p>This is the posts page. You can add post-specific content here.</p>
          <button @click="resetLikes">Reset All Likes</button>
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
    background-color: #c21010;
    color: white;
    cursor: pointer;
  }

  button:hover {
    opacity: 0.8;
  }
  </style>
  