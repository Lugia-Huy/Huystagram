<template>
  <div class="post">
    <!-- header -->
    <div class="head section">
      <div class="head-author">
        <div class="head-avatar">
          <img :src="require(`@/assets/images/${currentPost.userImage}`)" alt="avatar" width="40px" height="40px" />
        </div>

        <div class="head-author-info">
          <div>
            <CustomText tag="b">{{ currentPost.username }}</CustomText>
          </div>
        </div>
      </div>
      <div class="head-more">
        <div class="btn-more" @click="openOption()">
          <svg color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24"
            width="24">
            <circle cx="12" cy="12" r="1.5"></circle>
            <circle cx="6" cy="12" r="1.5"></circle>
            <circle cx="18" cy="12" r="1.5"></circle>
          </svg>
        </div>
      </div>
    </div>

    <!-- media -->
    <div class="post-media">
      <img :src="currentPost.postImage" alt="" loading="lazy" />
    </div>

    <!-- actions -->
    <div class="action-buttons section">
      <button class="action" @click="like()">
        <svg color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"
          v-if="likeStatus == false">
          <path
            d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z">
          </path>
        </svg>
        <svg color="#ed4956" fill="#ed4956" height="24" role="img" viewBox="0 0 48 48" width="24"
          v-else>
          <path
            d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z">
          </path>
        </svg>
      </button>
      <div class="action">
        <svg color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24"
          width="24">
          <path d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z" fill="none" stroke="currentColor"
            stroke-linejoin="round" stroke-width="2"></path>
        </svg>
      </div>
      <div class="action">
        <svg color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24"
          width="24">
          <line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3"
            y2="10.083"></line>
          <polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor"
            stroke-linejoin="round" stroke-width="2"></polygon>
        </svg>
      </div>
      <div class="action-save">
        <svg color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24">
          <polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round"
            stroke-linejoin="round" stroke-width="2"></polygon>
        </svg>
      </div>
    </div>

    <!-- view count -->

    <div class="view-count section">
      <custom-text tag="b">{{ currentPost.likes }} likes</custom-text>
    </div>

    <!-- comment list -->
    <div class="view-comment section">
      <custom-text tag="b">{{ currentPost.username }}</custom-text>
      {{ post.caption }}
    </div>
    <!-- datetime -->
    <div class="view-datetime section">
      <div class="view-datetime text">
        <CustomText tag="b" size="xsmall">{{ currentPost.datetime }}</CustomText>
      </div>
    </div>
    <!-- comment form -->
    <div class="comment-form section">
      <div class="emoji">
        <svg color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24"
          width="24">
          <path
            d="M15.83 10.997a1.167 1.167 0 101.167 1.167 1.167 1.167 0 00-1.167-1.167zm-6.5 1.167a1.167 1.167 0 10-1.166 1.167 1.167 1.167 0 001.166-1.167zm5.163 3.24a3.406 3.406 0 01-4.982.007 1 1 0 10-1.557 1.256 5.397 5.397 0 008.09 0 1 1 0 00-1.55-1.263zM12 .503a11.5 11.5 0 1011.5 11.5A11.513 11.513 0 0012 .503zm0 21a9.5 9.5 0 119.5-9.5 9.51 9.51 0 01-9.5 9.5z">
          </path>
        </svg>
      </div>
      <form class="comment commentline">
        <input type="Text" placeholder="Add a comment..." />
      </form>
      <div class="action-share">
        <CustomText tag="b" size="large">Post</CustomText>
      </div>
    </div>

  </div>

</template>
  
<script>
import CustomText from "@/components/layout/CustomText.vue";

export default {
  name: "Post",
  components: {
    CustomText,
  },
  data: function () {
    return {
      currentPost: this.post,
      likeStatus: this.post.hasBeenLiked,
    };
  },
  props: {
    post: Object
  },
  methods: {
    openOption(event) {
      alert('Feature still in processing, it will update soon!')
      if (event) {
        alert(event.target.tagName)
      }
    },
    like(event) {
      if (event) {
        this.likeStatus = !this.likeStatus;
        if(this.likeStatus){
          this.currentPost.likes++;
        }
      }
    },
    unlike(event) {
      if (event) {
        this.likeStatus = false;
        this.currentPost.likes--;
      }
    }
  },
};
</script>
  
<style scoped>
.post {
  border-radius: 8px;
  border: 1px solid rgb(209, 209, 209);
  background-color: white;
  margin-bottom: 16px;
}

.section {
  padding-left: 16px;

}

.text {
  color: gray;
}

.head {
  height: 60px;
  display: flex;
  align-items: center;
}

.head-avatar {
  display: inline-flex;
  border-radius: 50%;
  background: linear-gradient(219deg,
      rgba(184, 63, 140, 1) 0%,
      rgba(237, 158, 90, 1) 100%);
}

.head-avatar img {
  border-radius: 50%;
}

.head-author {
  display: flex;
  align-items: center;
}

.head-author-info {
  margin-left: 8px;
}

.head-more {
  margin-left: auto;
  padding-right: 16px;
}

.action-buttons {
  height: 45px;
  display: flex;
  align-items: center;
}

.action {
  align-items: center;
  background-position: 0px 0px;
  display: flex;
  justify-content: center;
  padding: 8px 8px 8px 0px;
  text-align: center;
}

.action-save {
  margin-left: auto;
  margin-right: 0;
  align-items: center;
  background-position: 0px 0px;
  display: flex;
  justify-content: center;
  padding: 8px;
  text-align: center;
}

.action-share {
  margin-left: auto;
  margin-right: 0;
  color: #0095f6;
  padding-right: 16px;
}

.post-media {
  background-color: rgb(245, 245, 245);
}

.post-media img {
  width: 100%;
}

.view-count {
  text-align: left;
}

.view-datetime {
  text-align: left;
}

.view-comment {
  padding-top: 8px;
  text-align: left;
}

.comment-form {
  border-top: 0.5px solid rgb(209, 209, 209);
  height: 50px;
  display: flex;
  align-items: center;
  margin-top: 16px;
  overflow: hidden;
}

.commentline {
  padding-left: 16px;
  font-weight: 600;
  padding-bottom: 16px;
}

.commentline input {
  width: 355px;
  height: 18px;
  align-items: center;
  margin: 16px 10px 0px 0px;
  border: hidden;
}

.commentline input:focus {
  outline: none;
}

@media screen and (max-width: 980px) {
  .post {
    max-width: 685px;
    background-color: white;
    margin-bottom: 15px;
  }

  .head {
    height: 60px;
    display: flex;
    align-items: center;
  }

  .head-avatar {
    display: inline-flex;
    border-radius: 50%;
    background: linear-gradient(219deg,
        rgba(184, 63, 140, 1) 0%,
        rgba(237, 158, 90, 1) 100%);
  }

  .head-avatar img {
    border-radius: 50%;
  }

  .head-author {
    display: flex;
    align-items: center;
  }

  .head-author-info {
    margin-left: 8px;
  }

  .head-more {
    margin-left: auto;
    padding-right: 16px;
  }

  .action-buttons {
    height: 45px;
    display: flex;
    align-items: center;
  }

  .action-buttons button {
    margin-right: 16px;
  }

  .action-save {
    margin-left: auto;
    margin-right: 0;
  }

  .action-share {
    margin-left: auto;
    margin-right: 0;
    color: #0095f6;
    padding-right: 16px;
  }

  .post-media {
    background-color: rgb(245, 245, 245);
  }

  .view-comment {
    padding-top: 8px;
  }

  .comment-form {
    border-top: 1px solid rgb(209, 209, 209);
    height: 50px;
    display: flex;
    align-items: center;
    margin-top: 16px;
    overflow: hidden
  }

  .commentline {
    padding-left: 16px;
    font-weight: 600;
    padding-bottom: 16px;
  }

  .commentline input {
    width: 540px;
  }
}
</style>