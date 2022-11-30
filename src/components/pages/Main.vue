<template>
    <section class="home">
        <main class="main">
            <div class="timeline">
                <div class="container">
                    <div class="stories-container">
                        <Avatar :size="56" :src="require('@/assets/images/ava1.jpg')"/>
                        <Avatar :size="56" :src="require('@/assets/images/ava2.jpg')"/>
                        <Avatar :size="56" :src="require('@/assets/images/ava3.jpg')"/>
                        <Avatar :size="56" :src="require('@/assets/images/ava4.jpg')"/>
                        <Avatar :size="56" :src="require('@/assets/images/ava5.jpg')"/>
                        <Avatar :size="56" :src="require('@/assets/images/ava6.jpg')"/>
                        <Avatar :size="56" :src="require('@/assets/images/ava7.jpg')"/>
                        <Avatar :size="56" :src="require('@/assets/images/ava8.jpg')"/>
                        <Avatar :size="56" :src="require('@/assets/images/ava9.jpg')"/>
                    </div>
                </div>
                <Post />
                <Post />
                <Post />
            </div>
            <div class="sidebar">
                <div class="sidebar-profile" @click="moveToProfile()">
                    <div class="head-avatar">
                        <img src="@/assets/images/ava_user.jpg" alt="avatar" width="56px" height="56px" />
                    </div>
                    <div class="sidebar-name">
                        <div class="sidebar-username">
                            <CustomText tag="b" size="large">quanghuy_neyugn</CustomText>
                        </div>
                        <div class="sidebar-displayname">
                            <CustomText size="normal">Yuh Gnauq Hnaht Neyugn</CustomText>
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
                        <img src="@/assets/images/ava10.jpg" alt="avatar" width="32px" height="32px" />
                    </div>
                    <div class="sidebar-name">
                        <div class="sidebar-username">
                            <CustomText tag="b" size="large">phqh__</CustomText>
                        </div>
                        <div class="sidebar-displayname">
                            <CustomText size="normal">following you</CustomText>
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
                        <img src="@/assets/images/ava11.jpg" alt="avatar" width="32px" height="32px" />
                    </div>
                    <div class="sidebar-name">
                        <div class="sidebar-username">
                            <CustomText tag="b" size="large">may__lily</CustomText>
                        </div>
                        <div class="sidebar-displayname">
                            <CustomText size="normal">following you</CustomText>
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
                        <img src="@/assets/images/ava12.jpg" alt="avatar" width="32px" height="32px" />
                    </div>
                    <div class="sidebar-name">
                        <div class="sidebar-username">
                            <CustomText tag="b" size="large">dkve_ki</CustomText>
                        </div>
                        <div class="sidebar-displayname">
                            <CustomText size="normal">following you</CustomText>
                        </div>
                    </div>
                    <div class="sidebar-switch">
                        <p>
                            <CustomText tag="b" size="large">Follow</CustomText>
                        </p>
                    </div>
                </div>
            </div>
        </main>
    </section>
</template>
<script>
import Post from '../post/Post.vue'
import Avatar from '../post/Avatar.vue'
export default {
    name: 'Main',
    components: {
        Post,
        Avatar
    },
    methods: {
        moveToProfile(event){
            if(event){
                this.$router.push('/profile');
            }
        }
    },
}
</script>

<style scoped>
.main {
    align-items: stretch;
    background-color: #fafafa;
    color: #262626;
    display: flex;
    flex-direction: row;
    font-size: 14px;
    line-height: 18px;
}

.home {
    max-width: 821px;
    align-items: stretch;
    color: #262626;
    display: flex;
    margin: 0px 272.5px;
    font-size: 14px;
    line-height: 18px;
    flex-direction: row;
}

.timeline {
    max-width: 470px;
    align-items: stretch;
    background-color: #fafafa;
    color: #262626;
    display: flex;
    flex-direction: column;
    font-size: 14px;
    line-height: 18px;
    margin: 10px 32px 0px 0px;
}

.container {
    overflow-x: hidden;
    overscroll-behavior-x: contain;
    border: 1px solid rgb(204, 204, 204);
    border-radius: 8px;
    background-color: white;
    padding: 16px 0px 0px;
    margin: 16px 0px;
    width: 100%;
    white-space: nowrap;
}


.stories-container {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 4.5rem;
    grid-gap: 0.5rem;
    padding: 0px 10px;
}

.sidebar {
    max-width: 319px;
    align-items: stretch;
    color: #262626;
    display: flex;
    flex-direction: column;
    font-size: 14px;
    line-height: 18px;
    text-align: left;
    margin: 0px 16px 30px 0px;
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
    font-weight: bold;
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
    text-align: right;
}

.suggestions {
    display: flex;
    flex-direction: row;
    padding: 5px;
}

.suggestions-foryou {
    color: gray;
    font-weight: bold;
    width: 319px;
}

.suggestions-see {
    margin-left: auto;
    margin-right: 0;
    cursor: pointer;
    text-align: right;
}

@media screen and (max-width: 980px) {}
</style>