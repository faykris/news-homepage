<template>
  <div class="news-main">
    <div class="article">
      <img class="desktop-image" src="@/assets/images/image-web-3-desktop.jpg">
      <img class="mobile-image" src="@/assets/images/image-web-3-mobile.jpg">
      <div class="container">
        <div class="title">
          <h1>The Bright Future of Web 3.0?</h1>
        </div>
        <div class="description">
          <p>
            We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
            But is it really fulfilling its promise?
          </p>
          <button>Read more</button>
        </div>
      </div>
    </div>
    <div class="aside">
      <h1>New</h1>
      <div class="new">
        <h3>Hydrogen VS Electric Cars</h3>
        <p>
          Will hydrogen-fueled cars ever catch up to EVs?
        </p>
      </div>
      <div class="new">
        <h3>The Downsides of AI Artistry</h3>
        <p>
          What are the possible adverse effects of on-demand AI image generation?
        </p>
      </div>
      <div class="new">
        <h3>Is VC Funding Drying Up?</h3>
        <p>
          Private funding by VC firms is down 50% YOY. We take a look at what that means.
        </p>
      </div>
    </div>
  </div>
  <div class="news-list">
    <div class="element">
      <div class="image">
        <img src="@/assets/images/image-retro-pcs.jpg" alt="retro img">
      </div>
      <div class="description">
        <h2>01</h2>
        <h4>Reviving Retro PCs</h4>
        <p>
          What happens when old PCs are given modern upgrades?
        </p>
      </div>
    </div>
    <div class="element">
      <div class="image">
        <img src="@/assets/images/image-top-laptops.jpg" alt="top 10 img">
      </div>
      <div class="description">
        <h2>02</h2>
        <h4>Top 10 Laptops of 2022</h4>
        <p>
          Our best picks for various needs and budgets.
        </p>
      </div>
    </div>
    <div class="element">
      <div class="image">
        <img src="@/assets/images/image-gaming-growth.jpg" alt="gaming img">
      </div>
      <div class="description">
        <h2>03</h2>
        <h4>The Growth of Gaming</h4>
        <p>
          How the pandemic has sparked fresh opportunities.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        //name: 'Home'
    }
}
</script>

<style lang="scss" scoped>
  .news-main {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
    & .article {
      width: 65%;
      & .desktop-image {
        width: 100%;
      }
      & .mobile-image {
        display: none;
      }
      & .container {
        padding: 1rem 0 0 0;
        display: flex;
        justify-content: space-between;
        .title {
          width: 48.5%;
          h1 {
            font-size: 47px;
            font-weight: 800;
            line-height: 3.2rem;
            color: var(--very-dark-blue);
          }
        }
        .description {
          color: var(--dark-grayish-blue);
          width: 48.5%;
          padding-right: 1rem;
          & p {
            margin-bottom: 2rem;
            font-size: 15px;
            line-height: 1.3rem;
            letter-spacing: .5px;
          }
          & button {
            border: none;
            background-color: var(--soft-red);
            color: var(--off-white);
            padding: 1rem 2rem;
            text-transform: uppercase;
            letter-spacing: 3px;
            font-size: 12px;
            transition: all .3s;
            cursor:  pointer;
            &:hover {
              background-color: var(--very-dark-blue);
            }
          }
        }
      } 
      
    }
    & .aside {
      width: 32%;
      background-color: var(--very-dark-blue);
      padding: 1.6rem;
      height: fit-content;

      h1 {
        width: 100%;
        color: var(--soft-orange);
      }
      .new {
        & {
          padding: 2rem 0;
        }

        &:last-child {
          padding-bottom: 0;
        }

        &:not(:last-child) {
          border-bottom: 1px solid var(--dark-grayish-blue);
        }
        
        & h3 {
          margin-bottom: 1rem;
          color: var(--off-white);
          transition: all .3s;
          cursor: pointer;
        }
        
        & h3:hover {
          color: var(--soft-orange);
        }

        & p {
          color: var(--grayish-blue);
          font-size: 15px;
          letter-spacing: .5px;
          line-height: 1.5rem;
          opacity: .8;
        }
      }
    }
  }

  .news-list {
    & {
      width: 100%;
      display: flex;
      justify-content: space-between;
      .element {
        width: 30%;
        display: flex;
        justify-content: space-between;
        .image {
          width: 25%;
          img {
            width: 100%;
          }
        }
        .description {
          width: 70%;
          h2 {
            color: var(--grayish-blue);
            margin-bottom: .4rem;
            font-size: 32px;
          }
          h4 {
            color: var(--very-dark-blue);
            font-weight: 800;
            margin-bottom: .4rem;
            transition: all .3s;
            cursor: pointer;
            &:hover {
              color: var(--soft-red);
            }
          }
          p {
            color: var(--dark-grayish-blue);
            font-size: 15px;
            letter-spacing: .5px;
            line-height: 1.5rem;
          }
        }
      }
    }
  }
  @media screen and (max-width: 1380px) and (min-width: 1081px) {
    .news-list {
      .element {
        width: 33%;
        .image {
          width: 45%;
          img {
            width: 100%;
          }
        }
        .description {
          width: 52%;
        }
      }
    }
  }

  @media screen and (max-width: 1080px) and (min-width: 481px) {
    .news-main {
      flex-wrap: wrap;
      & .article {
        width: auto;
        & .container {
          padding: 2rem 0;
        }
      }

      & .aside {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        width: auto;

        .new {
          width: 31.5%;
          padding: 0 .5rem 0 0;
          margin-top: 1rem;
          border-bottom: none !important;

          &:not(:last-child) {
            border-right: 1px solid var(--dark-grayish-blue);
          }
        }
      }
      
    }

    .news-list {
      margin-bottom: 5rem;
      justify-content: space-around;
      .element {
        width: 27%;
        flex-wrap: wrap;
        .image {
          width: 100%;
        }
        .description {
          h2 {
            margin-top: .5rem;
            text-align: center;
          }
          width: 100%;
        }
      }
    }
    
  }

  @media screen and (max-width: 480px) {
    .news-main {
      flex-wrap: wrap;
      & .article {
        width: auto;
        & .desktop-image {
          display: none;
        }
        & .mobile-image {
          width: 100%;
          display: block;
        }

        & .container {
          flex-wrap: wrap;
          padding-top: 1.5rem;
          .title {
            width: 100%;
            h1 {
              font-size: 40px;
              line-height: 40px;
              margin-bottom: 1.5rem;
            }
          }
          .description {
            width: 100%;
            padding: 0 0 3rem 0;
            p {
              line-height: 25px;
              font-size: 15px;
              letter-spacing: .5px;
              margin-bottom: 1.5rem;
            }
            button {
              border: none;
              background-color: var(--soft-red);
              color: var(--off-white);
              padding: .9rem 1.8rem;
              text-transform: uppercase;
              letter-spacing: 5px;
              font-size: 15px;
            }
          }
        }
      }
      & .aside {
        width: 100%;
        padding: 1.2rem;
        .new {
          padding: 1.8rem 0;
          h3 {
            font-size: 20px;
            margin-bottom: .5rem;
          }
          p {
            line-height: 25px;
            font-size: 15px;
            letter-spacing: .5px;
            
          }
        }
      }
    }
    .news-list {
      padding: 1rem 0 3.5rem 0;
      flex-wrap: wrap;
      .element {
        width: 100%;
        padding: .8rem 0;
        .image {
          width: 27%;
          img {
            width: 100%;
          }
        }
        .description {
          width: 66%;
          h2 {
            margin-bottom: .3rem;
          }
          h4 {
            font-size: 16px;
            font-weight: 800;
            margin-bottom: .3rem;
          }
          p {
            color: var(--dark-grayish-blue);
            line-height: 25px;
            font-size: 15px;
            letter-spacing: .5px;
          }
        }
      }
    }
  }
</style>
