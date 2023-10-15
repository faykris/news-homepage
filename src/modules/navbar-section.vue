<template>
  <div class="navbar">
    <div class="navbar-logo">
      <img src="../assets/images/logo.svg" alt="Logo" />
    </div>
    <div class="navbar-list">
      <router-link class="element" to="/">Home</router-link>
      <router-link class="element" to="/new">New</router-link>   
      <router-link class="element" to="/popular">Popular</router-link>   
      <router-link class="element" to="/trending">Trending</router-link>   
      <router-link class="element" to="/categories">Categories</router-link>   
    </div>
  </div>
  <div class="page-container">
    <router-view></router-view>
  </div>  
</template>

<script>
export default {
    props: {
        // name: 'Navbar'
    }
}
</script>

<style lang="scss" scoped>
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 10rem;
    padding: 3rem 10vw;
    & .navbar-logo {
      width: 10%;
      padding: 1rem 0;
      display: flex;
      justify-content: flex-start;
    }
    & .navbar-list {
      width: auto;
      padding: 1rem 0;
      display: flex;
      justify-content: flex-end;
      & .element {
        text-decoration: none;
        color: var(--very-dark-blue);
        transition: all .3s;
      }
      & .element:not(:first-child)  {
        margin-left: 3vw;
      }
      & .element:hover {
        color: var(--soft-orange);
      }
    }
  }

  .page-container {
    height: 80%;
    padding: 3rem 10vw;
  }
</style>