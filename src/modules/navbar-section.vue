<template>
  <div class="navbar">
    <div class="navbar-logo">
      <img src="@/assets/images/logo.svg" alt="Logo" />
    </div>
    <div class="mobile-menu">
      <img src="@/assets/images/icon-menu.svg" alt="Icon Menu" />
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
    height: 9rem;
    margin-top: 2rem;
    padding: 2.5rem 10vw;
    & .navbar-logo {
      width: 10%;
      padding: 1rem 0;
      display: flex;
      justify-content: flex-start;
    }
    .mobile-menu {
      display: none;
    }
    & .navbar-list {
      width: auto;
      padding: 1rem 0;
      display: flex;
      justify-content: flex-end;
      & .element {
        text-decoration: none;
        color: var(--dark-grayish-blue);
        transition: all .3s;
      }
      & .element:not(:first-child)  {
        margin-left: 3vw;
      }
      & .element:hover {
        color: var(--soft-red);
      }
    }
  }

  .page-container {
    height: 80%;
    padding: 0 10vw;
  }

  @media screen and (max-width: 580px) {
    .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 5rem;
      margin-top: 0;
      padding: 3rem 4.8vw;
      .navbar-logo {
        img {
          width: 13vw;
        }
      }
      .mobile-menu {
        display: block;
      }
      .navbar-list {
        display: none;
      }
    }
    .page-container {
      padding: 0 4.8vw;
    } 
  }
</style>