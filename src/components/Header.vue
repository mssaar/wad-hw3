<template>
    <header class="site-header">
      <nav>
        <ul>
          <li><router-link to="/">Login</router-link></li>
          <li><router-link to="/posts">Posts</router-link></li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: "Header",
  };
  </script>
  
  <style scoped>
  .site-header {
    background-color: #333;
    color: white;
    padding: 10px 20px;
  }
  
  .site-header ul {
    list-style: none;
    display: flex;
    gap: 15px;
    padding: 0;
  }
  
  .site-header a {
    color: white;
    text-decoration: none;
  }
  
  .site-header a:hover {
    text-decoration: underline;
  }
  </style>
  