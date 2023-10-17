<template>
  <div v-if="!isSidebar" class="sidebar-shadow">
    <div class="sidebar">
      <div @click="sidebarActivate" class="close-icon">
        <img src="@/assets/images/icon-menu-close.svg" alt="Menu Close">
      </div>
      <div class="sidebar-list">
        <router-link class="element" to="/" @click="sidebarActivate">Home</router-link>
        <router-link class="element" to="/new" @click="sidebarActivate">New</router-link>   
        <router-link class="element" to="/popular" @click="sidebarActivate">Popular</router-link>   
        <router-link class="element" to="/trending" @click="sidebarActivate">Trending</router-link>   
        <router-link class="element" to="/categories" @click="sidebarActivate">Categories</router-link> 
      </div>
    </div>
  </div>
  <div class="navbar">
    <div class="navbar-logo">
      <img src="@/assets/images/logo.svg" alt="Logo" />
    </div>
    <div @click="sidebarActivate" class="mobile-menu">
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

    },
    data() {
      return {
        isSidebar: {
          type: Boolean,
          default: false,
        }
      }
    },
    methods: {
      sidebarActivate() {
        this.isSidebar = !this.isSidebar;
      }
    }
}
</script>

<style lang="scss" scoped>
  .sidebar-shadow {
    position: fixed;
    z-index: 1;
    display: none;
    background-color: hsl(240, 100%, 5%, .5);
    width: 100%;
    height: 100%;
    display: none;
    justify-content: flex-end;
    .sidebar {
      background-color: var(--off-white);
      padding: 1.7rem;
      width: 67%;
      height: 100%;
      .close-icon {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 2.3rem;
      }
      .sidebar-list {
        padding: 2.4rem 0;
        flex-wrap: wrap;
        .element {
          width: 100%;
          display: block;
          padding: .8rem 0;
          text-decoration: none;
          color: var(--very-dark-blue);
          font-size: 18px;
          letter-spacing: .5px;
          &:hover {
            color: var(--soft-red);
          }
        }
      }
    }
  }
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
      letter-spacing: .5px;
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
  @media screen and (max-width: 1080px) and (min-width: 481px) {
    .navbar {
      margin-top: 0;
      height: 8rem;
      padding: 2rem 4vw;
      & .navbar-list {
        & .element:not(:first-child)  {
        margin-left: 2vw;
        }
      }
    }
    .page-container {
      padding: 0 4vw;
    } 
  }

  @media screen and (max-width: 480px) {
    .sidebar-shadow {
      display: flex;
    }
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