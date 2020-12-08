<style lang="scss">
.magazine-container {
  display: flex;
  flex: 1;
  flex-flow: column;

  .header {
    padding: 45px 85px 0 85px;
    // transition: 500ms;
    justify-items: center;
    align-items: center;

    .logo{
      width: 250px;
      height: auto;
    }

    .tools{
      float:right;
      display: flex;
      height: 100%;
      justify-content: center;
      align-items: center;

      .icon-tool{ 
        height: 30px;
        width: 45px ;
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        
        img{
          width: 25px;
          transition: 180ms;
        }
        img:hover{
          width: 30px;
        }
      }
    }

    .search-group {
      margin: 0 auto;
      width: auto;
      display: flex;
      flex-flow: row;
      justify-content: center;
      position: relative;

      .search {
        background-color: $primary-color;
        border: 1px solid #ffffff;
        border-radius: 10px;
        color: #ffffff;
        display: block;
        font-weight: 400;
        padding: 20px;
        transition: 500ms;
        width: 200px;

        &::-webkit-input-placeholder {
          color: #ffffff;
        }

        &:hover::-webkit-input-placeholder,
        &:focus::-webkit-input-placeholder {
          color: $primary-color;
        }

        &:hover {
          background-color: #ffffff;
          color: $primary-color;
        }
      }
    }

    &.searchFocus {
      background-color: $primary-color;

      .search {
        width: 300px;
        background-color: #ffffff;
        color: $primary-color;

        &::-webkit-input-placeholder {
          color: $primary-color;
        }
      }

      button {
        opacity: 1;
      }
    }

    button {
      position: absolute;
      right: 740px;
      top: 0;
      bottom: 0;
      margin-top: auto;
      margin-bottom: auto;
      background-color: #ffffff;
      color: $primary-color;
      width: 40px;
      height: 40px;
      opacity: 0;
    }
  }

  .search-wrapper {
    background-color: $primary-color;
    color: #ffffff;
    height: 100%;
    opacity: 0;
    position: absolute;
    transition: 500ms; 
    width: 100%;

    &.searchFocus {
      opacity: 1;
      z-index: 99999;
    }

    .search-container {
      background-color: #ffffff;
      border-radius: 10px;
      display: flex;
      flex-flow: column;
      margin-left: auto;
      margin-right: auto;
      padding: 20px;
      width: 30%;
      max-height: 100%;
      transition: max-height 500ms;

      .search-result-title {
        color: $primary-color;
        border-bottom: 1px solid #eeeeee;
        padding-bottom: 10px;
      }

      .list-group {
        flex: 1;
        list-style-type: none;
        margin-top: 15px;
        max-height: 100%;
        overflow-y: auto;
        scroll-behavior: smooth;

        &::-webkit-scrollbar {
          width: 0px;
        }

        // &::-webkit-scrollbar-track {
        //   background: #eeeeee;
        //   border-radius: 10px;
        // }

        // &::-webkit-scrollbar-thumb {
        //   background: #dddddd;
        //   border-radius: 10px;
        //   // -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
        // }

        .list-group-item {
          border-bottom: 1px solid #eeeeee;
          border-radius: 10px;
          margin-bottom: 10px;
          width: 100%;
          padding: 10px;
          transition: 500ms;
          cursor: pointer;
          background-color: #f5f5f5;

          &:hover {
            background-color: $secondary-color-v;

            a {
              color: #ffffff;
            }
          }

          a {
            color: $primary-color;
            text-decoration: none;
          }
        }
      }
    }
  }

  .magazine-wrapper {
    align-items: center;
    display: flex;
    position: relative;
    flex: 1;
    overflow: hidden;
    position: relative;

    .zoom-wrapper {
      overflow: hidden;
      position: relative;
      height: 100%;
      width: 100%;

      .zoom {
        display: flex;
        min-height: 100%;
        height: 100%;

        .magazine {
          margin: auto;

          @media (min-width: $breakpoint-xl) {
            height: 693.11px;
            width: 980px;
          }

          @media (min-width: $breakpoint-lg) and (max-width: ($breakpoint-xl - 1px)) {
            height: 500px;
            width: 700px;
          }

          @media (min-width: 481px) and (max-width: ($breakpoint-lg - 1px)) {
            height: 600px;
            width: 420px;
          }

          @media (min-width: $breakpoint-sm) and (max-width: 480px) {
            height: 500px;
            width: 350px;
          }

          .cover {
            height: 100%;
            width: 100%;

            video {
              display: none;
              position: fixed;
              top: 50%;
              left: 50%;
              min-width: 100%;
              min-height: 100%;
              width: auto;
              height: auto;
              z-index: -100;
              -webkit-transform: translateX(-50%) translateY(-50%);
              transform: translateX(-50%) translateY(-50%);
            }
          }

          .page {
            background-color: #ffffff;
            font-size: 0.8rem;

            .highlight {
              background-color: #fff76a;
              color: #1f354c;
            }
          }
        }
      }
    }
  }

  .footer {
    margin: auto;
    position: relative;
    transition: 500ms;

    .tools-container{

      display: flex;
      flex-wrap: wrap;
      width:860px ;
      padding: 10px 80px;
      height: 100%;
      background-image:linear-gradient(to right,#fc210d,#f7ce38);
      border-radius: 75px 75px 0 0;

      .tool{
        height: 65px;
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
      img{  
        margin: 0 8px;
      width: 60px;      
      transition: 200ms;
      }
      img:hover{  
      margin: 0 3px;  
      width: 70px;      
      }
      }

      .tool:nth-child(3){
        img:nth-child(1){
          width: 50px;
          &:hover{
            width: 60px;
            margin: 0 3px;
          }
        }
      }
      .tool:nth-child(1){
        img:nth-child(2){
          width: 50px;
          &:hover{
            width: 60px;
            margin: 0 3px;
          }
        }
      }
    }
    &.searchFocus {
      background-color: $primary-color;

      .btn-comment {
        opacity: 0;
        top: 0px;
      }
    }

    .btn {
      @media (min-width: $breakpoint-sm) and (max-width: 480px) {
        opacity: 1;
      }

      opacity: 0;
      height: 40px;
      width: 40px;
    }

    .btn-comment {
      background-color: #ffffff;
      color: $primary-color-v;
      border-radius: 50px;
      height: 40px;
      position: absolute;
      margin-left: 0;
      margin-right: 0;
      left: 15px;
      width: 40px;

      &.active {
        color: $secondary-color-v;
        transform: scale(1.1);
      }
    }

    .comments-wrapper {
      background-color: rgba($color: $primary-color, $alpha: 1);
      color: $primary-color;
      border-radius: 10px;
      bottom: 70px;
      display: flex;
      flex-flow: column;
      height: 500px;
      left: 10px;
      padding: 10px;
      position: absolute;
      width: 400px;
      transition: 500ms;
      -webkit-box-shadow: -8px 8px 20px 0px rgba(0, 0, 0, 0.3);
      -moz-box-shadow: -8px 8px 20px 0px rgba(0, 0, 0, 0.3);
      box-shadow: -8px 8px 20px 0px rgba(0, 0, 0, 0.3);
      visibility: hidden;
      opacity: 0;

      &.isActive {
        visibility: visible;
        opacity: 1;
      }

      .comments {
        flex: 1;
        display: flex;
        flex-flow: column;
        overflow: hidden;

        .comments-title {
          border-bottom: 1px solid $primary-color-v;
          padding: 10px;
          display: flex;

          .title {
            align-self: center;
            color: #ffffff;
            font-weight: 700;
          }

          button {
            margin-left: auto;
            width: 40px;

            &:hover {
              transform: scale(1);
            }

            &:active {
              transform: scale(0.9);
            }
          }
        }

        .comments-card {
          display: flex;
          flex: 1;
          flex-flow: column;
          font-size: 0.8rem;
          overflow: hidden;
          padding: 10px;

          .comments-list {
            flex: 1;
            list-style: none;
            max-height: 0;
            opacity: 0;
            overflow-y: auto;
            scroll-behavior: smooth;
            transition: 500ms;
            visibility: hidden;

            &.active {
              max-height: none;
              opacity: 1;
              visibility: visible;
            }

            &::-webkit-scrollbar {
              width: 5px;
            }

            &::-webkit-scrollbar-track {
              background: #eeeeee;
              border-radius: 50px;
            }

            &::-webkit-scrollbar-thumb {
              background: $secondary-color-v;
              border-radius: 10px;
            }

            li:last-child .comment {
              border-bottom: none;
            }

            .comment {
              border-bottom: 1px solid $primary-color-v;
              color: #ffffff;
              padding: 10px;

              .title {
                display: flex;

                .user {
                  background-color: $secondary-color-v;
                  border-radius: 50px;
                  display: flex;
                  color: #ffffff;
                  height: 50px;
                  width: 50px;
                  align-items: center;
                  justify-content: center;
                }

                .details {
                  display: flex;
                  flex: 1;
                  flex-flow: column;
                  justify-content: center;
                  line-height: 20px;
                  margin-left: 10px;
                }
              }

              .text {
                margin-top: 10px;
                line-height: 20px;
              }
            }
          }

          .comment-input {
            color: #ffffff;
            flex: 1;
            max-height: 0;
            opacity: 0;
            position: relative;
            transition: 500ms;
            visibility: hidden;

            &.active {
              max-height: none;
              visibility: visible;
              opacity: 1;
            }

            .input-group {
              display: flex;
              flex-flow: column;
              margin-bottom: 15px;

              label {
                margin-bottom: 5px;
              }

              input,
              textarea {
                border: 2px solid #dddddd;
                border-radius: 5px;
                padding: 8px;
                resize: none;
              }

              &.invalid {
                label {
                  color: $secondary-color-v;
                }

                input,
                textarea {
                  border: 2px solid $secondary-color-v;
                }
              }
            }

            button {
              height: 40px;
              // width: 40px;
              bottom: 10px;
            }
          }
        }
      }
    }

    &:not(.searchFocus) .tools-container:hover .btn {
      opacity: 1;
    }
  }
}
</style>

<template>
  <div class="magazine-container">
    <div class="header" :class="{ searchFocus: isSearchFocus }">
      <img src="element/logo.png" class="logo" alt="">


    <div class="tools">
      <div class="icon-tool" @click="zoomIn">
      <img src="element/zoom_in.png" width="20px" alt="" srcset="" >
      </div>
      <div class="icon-tool" @click="zoomOut">
      <img src="element/zoom_out.png" width="20px" alt="" srcset="" >
      </div>
      <!-- <div class="icon-tool">
      <img src="element/translate.png" width="20px" alt="" srcset="">
      </div>
      <div class="icon-tool">
      <img src="element/info.png" width="20px" alt="" srcset="">
      </div> -->
    </div>
    </div>

    <div class="magazine-wrapper">
      <div class="search-wrapper" :class="{ searchFocus: isSearchFocus }">
        <div class="search-container">
          <div class="search-result-title">
            <h3>Hasil Pencarian</h3>
          </div>

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

      <div class="zoom-wrapper">
        <div class="zoom">
          <div
            id="magazine"
            class="magazine"
            :style="{ transform: 'scale(' + zoom + ')' }"
          >
            <div>
              <video id="cover" class="cover" autoplay loop muted poster="/img/Umagz-1_000.jpg">
                <source src="/img/umagz-1.mp4" type="video/mp4" />
                <source src="/img/umagz-1.webm" type="video/webm" />
                <source src="/img/umagz-1.ogv" type="video/ogg" />
              </video>
              <!-- <object class="cover">
                  <param name="movie" value="uMagz.swf">
                  <embed src="file.swf" width="100" height="100">
              </object> -->
            </div>
            <Page1 />
            <Page2 />
            <Page3 />
            <Page4 />
            <Page5 />
            <Page6 />
            <Page7 />
            <Page8 />
            <Page9 />
            <Page10 />
            <Page11 />
            <Page12 />
            <Page13 />
            <Page14 />
          </div>
        </div>
      </div>

      <Sidebar />
      <SidebarLeft />
    </div>

    <div class="footer" :class="{ searchFocus: isSearchFocus }">
      <div class="tools-container">
        <div class="tool">
        <img src="element/layout_mode.png" alt="" @click="layoutMode">
        <img src="element/icon_thumbnail.png" alt="">
        </div>

        <div class="tool">
        <img src="element/back_arrow.png" alt="" @click="previousPage">
        <img src="element/play.png" alt="">
        <img src="element/next_arrow.png" alt="" @click="nextPage">
        </div>
        <div class="tool">
        <img src="element/icon_comment.png" alt="" @click="toggleComment" :class="{ active: toggleCommentStatus }">
        <img src="element/music.png" alt="">
        </div>
        
        


        <!-- <Button class="btn" v-on:click.native="doublePreviousPage">
          <i class="fas fa-angle-double-left fa-lg"></i>
        </Button>
        <Button class="btn" v-on:click.native="previousPage">
          <i class="fas fa-angle-left fa-lg"></i>
        </Button>
        <Button class="btn" v-on:click.native="nextPage">
          <i class="fas fa-angle-right fa-lg"></i>
        </Button>
        <Button class="btn" v-on:click.native="doubleNextPage">
          <i class="fas fa-angle-double-right fa-lg"></i>
        </Button> -->
      
       <!-- <Button
        class="btn-comment"
        :class="{ active: toggleCommentStatus }"
        v-on:click.native="toggleComment"
      >
        <i class="fas fa-comments fa-lg"></i>
      </Button>
    -->
      </div> 
      
      

      <div
        class="comments-wrapper"
        :class="{ isActive: toggleCommentStatus, isInput: inputComment }"
      >
        <div class="comments">
          <div class="comments-title">
            <h4 class="title">Komentar</h4>
            <Button v-on:click="toggleCommentInput">
              <i
                class="fas"
                :class="{
                  'fa-plus': !inputComment,
                  'fa-arrow-left': inputComment,
                }"
              ></i>
            </Button>
          </div>
          <div class="comments-card">
            <div class="comment-input" :class="{ active: inputComment }">
              <div class="input-group" :class="{ invalid: !commentName.valid }">
                <label for="name">Nama</label>
                <input id="name" type="text" v-model="commentName.data" />
              </div>
              <div
                class="input-group"
                :class="{ invalid: !commentEmail.valid }"
              >
                <label for="email">Email (Opsional)</label>
                <input id="email" type="email" v-model="commentEmail.data" />
              </div>
              <div class="input-group" :class="{ invalid: !commentText.valid }">
                <label for="text">Komentar</label>
                <textarea
                  id="text"
                  rows="5"
                  v-model="commentText.data"
                ></textarea>
              </div>
              <Button
                v-on:click="
                  postComment(
                    commentName.data,
                    commentEmail.data,
                    commentText.data
                  )
                "
              >
                Kirim
              </Button>
            </div>
            <ul class="comments-list" :class="{ active: !inputComment }">
              <li v-for="c in comments" v-bind:key="c.id">
                <div class="comment">
                  <div class="title">
                    <div class="user">
                      <i class="fas fa-user"></i>
                    </div>
                    <div class="details">
                      <div>{{ c.name }}</div>
                      <div>{{ $d(new Date(c.created_at), "long") }}</div>
                    </div>
                  </div>
                  <div class="text">{{ c.text }}</div>
                </div>
              </li>
              <li v-if="comments.length == 0">
                <div>
                  <div style="color: #ffffff; text-align: center">
                    Belum ada komentar
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div> 
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import SidebarLeft from "@/components/SidebarLeft.vue";
import Button from "@/components/Button.vue";
import Page1 from "@/components/pages/Page1.vue";
import Page2 from "@/components/pages/Page2.vue";
import Page3 from "@/components/pages/Page3.vue";
import Page4 from "@/components/pages/Page4.vue";
import Page5 from "@/components/pages/Page5.vue";
import Page6 from "@/components/pages/Page6.vue";
import Page7 from "@/components/pages/Page7.vue";
import Page8 from "@/components/pages/Page8.vue";
import Page9 from "@/components/pages/Page9.vue";
import Page10 from "@/components/pages/Page10.vue";
import Page11 from "@/components/pages/Page11.vue";
import Page12 from "@/components/pages/Page12.vue";
import Page13 from "@/components/pages/Page13.vue";
import Page14 from "@/components/pages/Page14.vue";
import jQuery from "jquery";

window.jQuery = jQuery;

require("@/assets/turn.min.js");

export default {
  name: "MagazineWrapper",
  components: {
    Sidebar,
    Button,
    Page1,
    Page2,
    Page3,
    Page4,
    Page5,
    Page6,
    Page7,
    Page8,
    Page9,
    Page10,
    Page11,
    Page12,
    Page13,
    Page14,
    SidebarLeft,
  },
  data() {
    return {
      zoom: 1,
      isSearchFocus: false, 
      searchField: "",
      searchResult: [],
      inputComment: false,
      comments: [],
      commentName: {
        data: "",
        valid: true,
      },
      commentEmail: {
        data: "",
        valid: true,
      },
      commentText: {
        data: "",
        valid: true,
      },
      toggleCommentStatus: false,
      isSinglePage: false,
    };
  },
  mounted() {
    const magazine = window.jQuery(".magazine");
    const mediaQuery = window.matchMedia("(max-width: 1024px)");

    if (mediaQuery.matches) {
      magazine.turn({ display: "single" });
    } else {
      magazine.turn({ display: "double" });
    }

    document.getElementById('cover')
  },
  methods: {
    layoutMode: function(){
      const magazine = window.jQuery(".magazine");
      
        magazine.turn('display','single').turn('size',);


    },
    nextPage() {
      const magazine = window.jQuery(".magazine");
      magazine.turn("next");
    },
    previousPage() {
      const magazine = window.jQuery(".magazine");
      magazine.turn("previous");
    },
    zoomIn() {
      this.zoom += 0.1;
      window.jQuery(".magazine").turn("disable", this.zoom != 1);
    },
    zoomOut() {
      if (this.zoom > 1) {
        this.zoom -= 0.1;
        window.jQuery(".magazine").turn("disable", this.zoom != 1);
      }
    },
    highlight() {
      const range = window.getSelection().getRangeAt(0),
        span = document.createElement("mark");
      span.appendChild(range.extractContents());
      range.insertNode(span);
    },
    searchFocus(focus) {
      this.isSearchFocus = focus;
      if (!focus) this.searchField = "";
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
    toggleComment() {
      this.inputComment = false;
      this.toggleCommentStatus = !this.toggleCommentStatus;
      if  (this.toggleCommentStatus) this.fetchComments();
    },
    fetchComments() {
      this.$http
        .get("http://10.212.84.198:8080/comments")
        .then((result) => {
          this.comments = result.data;
        })
        .catch((error) => {
          console.log(error.response);
        });
    },
    toggleCommentInput() {
      this.inputComment = !this.inputComment;
      this.commentName.valid = this.commentEmail.valid = this.commentText.valid = true;
    },
    postComment() {
      let valid = true;

      if (this.commentName.data.length == 0)
        this.commentName.valid = valid = false;
      else this.commentName.valid = true;
      if (this.commentText.data.length == 0)
        this.commentText.valid = valid = false;
      else this.commentText.valid = true;

      if (!valid) return;

      this.commentName.valid = this.commentText.valid = true;

      this.$http
        .post("http://10.212.84.198:8080/comments", {
          name: this.commentName.data,
          email: this.commentEmail.data,
          text: this.commentText.data,
        })
        .then(() => {
          this.fetchComments();
          this.inputComment = false;

          this.commentName.data = this.commentEmail.data = this.commentText.data =
            "";
        })
        .catch((error) => {
          console.log(error.response);
        });
    },
  },
};
</script>