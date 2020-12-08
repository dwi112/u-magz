<style lang="scss" scoped>
.sidebar {
  background-image: linear-gradient(180deg,#fc210d,#f7ce38); 
  -webkit-box-shadow: 8px 8px 20px 0px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 8px 8px 20px 0px rgba(0, 0, 0, 0.3);
  box-shadow: 8px 8px 20px 0px rgba(0, 0, 0, 0.3);
  border-radius: 0 65px 65px 0 ;
  
  height: 600px;
  padding: 35px;
  position: absolute;
  transition: 500ms;
  width: 400px;
  left: -380px;

  @media (min-width: $breakpoint-sm) and (max-width: 480px) {
    display: none;
  }

  &:hover {
    left: -30px;
  }

  &.active {
    right: -325px;

    .menu-toggle-btn {
      color: $secondary-color-v;
    }
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
    justify-content: center;
    padding: 25px 0;

    .menu-container {
      border: 0px 0px 10px 0px solid #000;
      display: flex;
      flex-flow: column;
      height: 100%;
      padding: 0 10px;
      color:white;
      align-items: center;

      hr{
        margin: 15px 0 10px 0;
        width: 80%;
      }
      h2{
        
        font-size: 2.2rem;
      }
      ul li{
        font-size: 2.2rem;
        margin: 30px;
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
          <h2>Content</h2>
        <hr>
          <ul>
            <li>Cover</li>
            <li>Content</li>
            <li>The Making Of</li>
            <li>Maspion</li>
            <li>Creative With</li>
          </ul>
    </div>
  </div>
  </div>
</template>

<script>

export default {
  name: "SidebarLeft",
  components: {
  },
  data() {
    return {
      isActive: false,
      isContentActive: false,
    };
  },
  methods: {
    toggle() {
      this.isActive = !this.isActive;
    },
    highlight() {
      this.$parent.highlight();
    },
    zoomIn() {
      this.$parent.zoomIn();
    },
    zoomOut() {
      this.$parent.zoomOut();
    },
    toggleContent() {
      this.isContentActive = !this.isContentActive;
    },
  },
};
</script>