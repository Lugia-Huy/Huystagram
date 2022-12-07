<template>
  <div class="main">
    <div class="direct">
      <div class="sidebar">
        <div class="sidebar-username">
          <CustomText tag="b" size="xlarge">{{ user.userName }}</CustomText>
        </div>
        <div class="sidebar-users">
          <div class="sidebar-user" v-for="user in friendList" :key="user.id">
            <div class="user-avatar">
              <img :src="require(`@/assets/images/${user.userImage}`)" alt="avatar" width="60px" height="60px" />
            </div>
            <div class="user-info">
              <div class="user-name">{{ user.username }}</div>
              <div class="user-active">{{ user.status }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="messages">
        <div class="messages-icon">
          <img src="@/assets/themes/messages.png" alt="" />
        </div>
        <div class="messages-text">
          <CustomText class="thin" size="xlarge">
            Your messages
          </CustomText>
          <br />
          <CustomText size="normal" style="color: grey;">
            Send images and messages private for your friend or group.
          </CustomText>
        </div>
        <div class="messages-upload">
          <button class="action-send" type="button">
            <CustomText tag="b" size="normal">Send</CustomText>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import CustomText from "@/components/layout/CustomText";
import User from "@/data/user";
import friendList from "@/data/friendList";

export default {
  name: "Direct",
  components: {
    CustomText,
  },
  data() {
    return {
      user: User,
      friendList: friendList,
    }
  },
};
</script>
  
<style scoped>
.main {
  height: auto;
}

.direct {
  display: grid;
  grid-template-columns: 350px 1fr;
  width: auto;
  height: 560px;
  border: 1px solid lightgrey;
  margin-top: 16px;
}

.sidebar {
  background-color: white;
  border-right: 1px solid lightgrey;
  display: grid;
  height: 560px;
  grid-template-rows: 60px 1fr;
}

.sidebar-username {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  margin-left: auto;
  margin-right: auto;
}

.sidebar-users {
  border-top: 1px solid lightgrey;
  overflow-y: scroll;
  overscroll-behavior-x: contain;
  width: 100%;
  white-space: nowrap;
}

.sidebar-user {
  display: flex;
  flex-direction: row;
  padding-left: 16px;
  cursor: pointer;
  width: auto;
  height: auto;
  background-color: white;
  margin: 10px;
}

.sidebar-user:hover {
  transition: all ease;
}

.user-info {
  display: flex;
  flex-direction: column;
  padding-left: 16px;
  justify-content: center;
}

.user-active {
  color: grey;
}

.user-avatar {
  display: inline-flex;
  border-radius: 50%;
}

.messages {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
}

.messages-icon {
  width: 115px;
  height: 115px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
}

.messages-text {
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.messages-upload {
  width: 100px;
  height: 30px;
  padding-top: 20px;
}

.action-send {
  background-color: dodgerblue;
  padding: 0.5rem;
  border-radius: 5px;
  color: white;
  width: 100px;
  height: 30px;
  border-width: 0px;
  cursor: pointer;
}

.thin {
  font-weight: 100;
  font-size: 25px;
}

.sidebar::-webkit-scrollbar {
  width: 5px;
}

.sidebar::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

.sidebar::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid slategrey;
}

@media screen and (max-width: 640px) {
  .direct {
    display: grid;
    grid-template-columns: auto;
    width: auto;
    height: inherit;
    border: 1px solid lightgrey;
    margin-top: 16px;
  }

  .messages {
    display: none;
  }

  .sidebar {
    margin-top: 30px;
  }

  .sidebar-users {
    border-top: 1px solid lightgrey;
    overflow-y: scroll;
    width: 100%;
  }
}
</style>