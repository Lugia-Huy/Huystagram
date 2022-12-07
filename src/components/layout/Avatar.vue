<template>
  <button class="ava-btn">
    <div class="avatar">
      <img :src="src" :alt="alt" :width="size" :height="size" loading="lazy"/>
    </div>
    <p class="name-display">{{username}}</p>
  </button>
</template>

<script>
export default {
  name: "Avatar",
  props: {
    src: {
      type: String,
      default: "@/assets/images/ava_user.jpg",
    },
    alt: {
      type: String,
    },
    size: {
      type: Number,
    },
    username:{
      type: String,
      default: "username",
    }
  },
};
</script>

<style scoped>
.ava-btn{
  align-items: center;
  background-position: 0px 0px;
  display: flex;
  flex-direction: column;
  font-family: -apple-system;
  padding: 0px 0px;
  text-align: center;
  border: hidden;
  background-color: #ffffff;
}

.ava-btn:focus {
  outline: none;
}

.avatar {
  display: inline-flex;
  padding: 2px;
  border-radius: 50%;
  background: linear-gradient(219deg,
      rgba(184, 63, 140, 1) 0%,
      rgba(237, 158, 90, 1) 100%);
}

.avatar img {
  border-radius: 50%;
}

.name-display{
  width: 52px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>