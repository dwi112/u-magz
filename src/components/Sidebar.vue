<style lang="scss" scoped>
.sidebar {
  background-image: linear-gradient(180deg,#fc210d,#f7ce38);
  -webkit-box-shadow: 8px 8px 20px 0px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 8px 8px 20px 0px rgba(0, 0, 0, 0.3);
  box-shadow: 8px 8px 20px 0px rgba(0, 0, 0, 0.3); 
  border-radius: 65px 0 0 65px;
  height: 600px;
  padding: 35px;
  position: absolute;
  transition: 500ms;
  width: 400px;
  right: -380px;

  @media (min-width: $breakpoint-sm) and (max-width: 480px) {
    display: none;
  }

  &:hover {
    right: -30px;
  }


  &.contentActive:hover {
    right: 0px;

    .menu-content-toggle-btn {
      color: $secondary-color-v;
    }
  }

  &.active.contentActive {
    right: 0px;

    .menu-toggle-btn,
    .menu-content-toggle-btn {
      color: $secondary-color-v;
    }
  }

  .container {
    display: flex;
    height: 100%;

    .menu-container {
      border: 0px 0px 10px 0px solid #000;
      display: flex;
      flex-flow: column;
      height: 100%;
      padding-right: 10px;

    .search-group{
      background-color: rgba($color: wheat, $alpha: .5);
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 40px;
      padding: 5px 10px;

      i{
        font-size:1.7rem;
        color:white
      }

      #search-magazine {
        border: none;
        background: transparent;
      border-radius: 10px;
      color: #ffffff;
      display: block;
      font-weight: 400;
      margin: 0 auto;
      padding: 15px;
      transition: 500ms;
      font-size: 1rem;

      &::placeholder{
        color: #ffffff;
      }


    }
  }
    }

    .contents-container {
      flex: 1;
      height: 100%;
    }
  }
  
}
</style>

<template>
  <div
    class="sidebar"
    v-bind:class="{ active: isActive, contentActive: isContentActive }"
  >
    <div class="container">
      <div class="menu-container">
        <!-- <Button class="menu-toggle-btn" v-on:click.native="toggle">
          <i class="fas fa-circle fa-lg"></i>
        </Button>
        <Button class="menu-btn" v-on:click.native="highlight">
          <i class="fas fa-highlighter fa-lg"></i>
        </Button>
        <Button class="menu-btn">
          <i class="fas fa-language fa-lg"></i>
        </Button>
        <Button
          class="menu-content-toggle-btn"
          v-on:click.native="toggleContent"
        >
          <i class="fas fa-list-ol fa-lg"></i>
        </Button>
        <Button class="menu-btn" v-on:click.native="zoomIn">
          <i class="fas fa-plus fa-lg"></i>
        </Button>
        <Button class="menu-btn" v-on:click.native="zoomOut">
          <i class="fas fa-minus fa-lg"></i>
        </Button> -->

        <div class="search-group">

        <i class="fas fa-search"></i>
        <input
        id="search-magazine"
        type="search"
        name="search-magazine"
        placeholder="Search..."
        />
        
          <ul class="list-group">
            <li
              class="list-group-item"
              v-for="search in searchResult"
              v-bind:key="search.id"
              v-on:click="searchPage(search.page)"
            >
              <a href="#" v-html="search.text"></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Button from "@/components/Button.vue";

export default {
  name: "Sidebar",
  components: {
    // Button,
  },
  data() {
    return {
      searchField: "",
      isActive: false,
      isContentActive: false,
      searchResult: []
    };
  },
  methods: {
    toggle() {
      this.isActive = !this.isActive;
    },
    
    search() {
      let searched = this.searchField;
      let id = 1;

      if (searched !== "") {
        let text = document
          .getElementById("magazine")
          .getElementsByTagName("span");

        this.searchResult = [];

        window.jQuery.each(text, (_, val) => {
          const value = window.jQuery(val).text();
          let re = new RegExp(searched, "i");

          if (value.toLowerCase().indexOf(searched) !== -1) {
            // let parent = window.jQuery(val).parent().parent().parent().parent();
            let parent = window.jQuery(val).closest(".page");
            const page = window
              .jQuery(parent)
              .attr("class")
              .match(/p\d+/)[0]
              .substring(1);
            let text = value.replace(re, `<mark>${searched}</mark>`);

            this.searchResult.push({
              id: id,
              page: page,
              text: text,
            });

            id++;
          } else if (value.indexOf(searched) !== -1) {
            // let parent = window.jQuery(val).parent().parent().parent().parent();
            let parent = window.jQuery(val).closest(".page");
            const page = window
              .jQuery(parent)
              .attr("class")
              .match(/p\d+/)[0]
              .substring(1);
            let text = value.replace(re, `<mark>${searched}</mark>`);

            this.searchResult.push({
              id: id,
              page: page,
              text: text,
            });

            id++;
          }
        });
      } else {
        this.searchResult = [];
      }
    },
    searchPage(page) {
      this.isSearchFocus = false;
      const magazine = window.jQuery(".magazine");
      setTimeout(() => {
        magazine.turn("page", page);
      }, 200);
    },
    searchTurnPage() {
      if (this.searchField !== "") {
        const magazine = window.jQuery(".magazine");
        let page = parseInt(this.searchField) + 1;
        if (magazine.turn("hasPage", page)) {
          magazine.turn("page", page);
          this.isSearchFocus = false;
          this.$refs.search.blur();
        }
      }
    },

  },
};
</script>