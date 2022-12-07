<template>
    <div class="home">
        <div class="timeline">
            <div class="stories">
                <div class="stories-container">
                    <Avatar :size="56" :src="require(`@/assets/images/${story.userImage}`)" :username="story.username"
                        v-for="story in stories" :key="story.id" />
                </div>
            </div>
            <div class="feeds">
                <Post v-for="post in posts" :key="post.id" :post="post" />
            </div>
        </div>
        <div class="sidebar">
            <div class="sidebar-profile">
                <div class="head-avatar">
                    <router-link to="/profile/">
                        <img src="@/assets/images/ava_user.jpg" alt="avatar" width="60px" height="60px" />
                    </router-link>
                </div>
                <div class="sidebar-name">
                    <div class="sidebar-username">
                        <router-link to="/profile/">
                            <CustomText tag="b" size="large">{{ user.displayName }}</CustomText>
                        </router-link>
                    </div>
                    <div class="sidebar-displayname">
                        <CustomText size="normal">{{ user.userName }}</CustomText>
                    </div>
                </div>
                <div class="sidebar-switch">
                    <p>
                        <CustomText tag="b" size="large">Switch</CustomText>
                    </p>
                </div>
            </div>
            <div class="suggestions">
                <div class="suggestions-foryou">
                    <CustomText tag="b" size="normal">Suggestions For You</CustomText>
                </div>
                <div class="suggestions-see">
                    <CustomText tag="b" size="normal">See All</CustomText>
                </div>
            </div>
            <div class="sidebar-sug-profile">
                <div class="head-avatar">
                    <img src="@/assets/images/ava10.jpg" alt="avatar" width="40px" height="40px" />
                </div>
                <div class="sidebar-name">
                    <div class="sidebar-username">
                        <CustomText tag="b" size="large">username</CustomText>
                    </div>
                    <div class="sidebar-displayname">
                        <CustomText size="normal">displayname</CustomText>
                    </div>
                </div>
                <div class="sidebar-switch">
                    <p>
                        <CustomText tag="b" size="large">Follow</CustomText>
                    </p>
                </div>
            </div>
            <div class="sidebar-sug-profile">
                <div class="head-avatar">
                    <img src="@/assets/images/ava11.jpg" alt="avatar" width="40px" height="40px" />
                </div>
                <div class="sidebar-name">
                    <div class="sidebar-username">
                        <CustomText tag="b" size="large">username</CustomText>
                    </div>
                    <div class="sidebar-displayname">
                        <CustomText size="normal">displayname</CustomText>
                    </div>
                </div>
                <div class="sidebar-switch">
                    <p>
                        <CustomText tag="b" size="large">Follow</CustomText>
                    </p>
                </div>
            </div>
            <div class="sidebar-sug-profile">
                <div class="head-avatar">
                    <img src="@/assets/images/ava12.jpg" alt="avatar" width="40px" height="40px" />
                </div>
                <div class="sidebar-name">
                    <div class="sidebar-username">
                        <CustomText tag="b" size="large">username</CustomText>
                    </div>
                    <div class="sidebar-displayname">
                        <CustomText size="normal">displayname</CustomText>
                    </div>
                </div>
                <div class="sidebar-switch">
                    <p>
                        <CustomText tag="b" size="large">Follow</CustomText>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import CustomText from "@/components/layout/CustomText";
import Avatar from "@/components/layout/Avatar";
import Post from "@/components/layout/Post";
import Posts from "@/data/posts";
import User from "@/data/user";
import Stories from "@/data/stories";

export default {
    name: "Main",
    components: {
        CustomText,
        Avatar,
        Post,
    },
    data() {
        return {
            posts: Posts,
            user: User,
            stories: Stories,
        }
    },
};
</script>
  
<style scoped>
.home {
    max-width: 685px;
    margin-left: auto;
    margin-right: auto;
}

.sidebar {
    display: none;
}

.stories {
    border: 1px solid rgb(204, 204, 204);
    border-radius: 8px;
    background-color: white;
    padding: 16px 0px 0px;
    margin: 16px 0px;
    width: 100%;
    margin-top: 60px;
}

.stories-container {
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 4.5rem;
    grid-gap: 0.5rem;
    padding: 0px 10px;
    margin-bottom: 10px;
}

.stories-container::-webkit-scrollbar {
    display: none;
}

.stories-container {
    -ms-overflow-style: none;
    scrollbar-width: none;
}

.feeds {
    margin-bottom: 60px;
}

@media screen and (min-width: 980px) {
    .home {
        max-width: 840px;
        display: grid;
        grid-template-columns: 470px auto;
        grid-gap: 10px;
    }

    .timeline {
        max-width: 470px;
        padding-right: 10px;
    }

    .stories {
        margin-top: 30px;
    }

    .sidebar {
        display: block;
    }

    .head-avatar {
        display: inline-flex;
        border-radius: 50%;
        cursor: pointer;
    }

    .head-avatar img {
        border-radius: 50%;
    }

    .sidebar-profile {
        margin-bottom: 20px;
        margin-top: 16px;
        height: 115px;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 5px;
    }

    .sidebar-sug-profile {
        height: 45px;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 5px;
    }

    .sidebar-username {
        cursor: pointer;
    }

    .sidebar-name {
        margin-left: 16px;
    }

    .sidebar-displayname {
        color: gray;
    }

    .sidebar-switch {
        margin-left: auto;
        margin-right: 0;
        cursor: pointer;
    }

    .sidebar-switch p {
        margin-left: auto;
        margin-right: 0;
        color: #0095f6;
        padding-right: 16px;
    }

    .suggestions {
        display: flex;
        flex-direction: row;
        padding: 5px;
    }

    .suggestions-foryou {
        color: gray;
    }

    .suggestions-see {
        margin-left: auto;
        margin-right: 0;
        cursor: pointer;
        padding-right: 15px;
    }
}
</style>