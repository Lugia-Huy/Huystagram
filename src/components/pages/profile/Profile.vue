<template>
    <div class="home">
        <div class="profile-header">
            <div class="head-avatar">
                <img src="@/assets/images/ava_user.jpg" alt="avatar" />
            </div>
            <div class="head-profile-detail">
                <div class="detail-name">
                    <div class="detail-name-username">
                        <CustomText class="thin" size="xxlarge">{{ user.userName }}</CustomText>
                    </div>
                    <div class="detail-name-edit">
                        <button class="action-edit" type="button">
                            <CustomText tag="b" size="normal">Edit Profile</CustomText>
                        </button>
                    </div>
                    <div class="icon-options" @click="openOption()">
                        <svg color="#262626" fill="#262626" height="24" role="img"
                            viewBox="0 0 24 24" width="24">
                            <circle cx="12" cy="12" fill="none" r="8.635" stroke="currentColor" stroke-linecap="round"
                                stroke-linejoin="round" stroke-width="2"></circle>
                            <path
                                d="M14.232 3.656a1.269 1.269 0 01-.796-.66L12.93 2h-1.86l-.505.996a1.269 1.269 0 01-.796.66m-.001 16.688a1.269 1.269 0 01.796.66l.505.996h1.862l.505-.996a1.269 1.269 0 01.796-.66M3.656 9.768a1.269 1.269 0 01-.66.796L2 11.07v1.862l.996.505a1.269 1.269 0 01.66.796m16.688-.001a1.269 1.269 0 01.66-.796L22 12.93v-1.86l-.996-.505a1.269 1.269 0 01-.66-.796M7.678 4.522a1.269 1.269 0 01-1.03.096l-1.06-.348L4.27 5.587l.348 1.062a1.269 1.269 0 01-.096 1.03m11.8 11.799a1.269 1.269 0 011.03-.096l1.06.348 1.318-1.317-.348-1.062a1.269 1.269 0 01.096-1.03m-14.956.001a1.269 1.269 0 01.096 1.03l-.348 1.06 1.317 1.318 1.062-.348a1.269 1.269 0 011.03.096m11.799-11.8a1.269 1.269 0 01-.096-1.03l.348-1.06-1.317-1.318-1.062.348a1.269 1.269 0 01-1.03-.096"
                                fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2">
                            </path>
                        </svg>
                    </div>
                </div>
                <div class="detail-numbers">
                    <div class="number-1">
                        <CustomText tag="b" size="xlarge">{{ user.posts }} </CustomText>
                        <CustomText size="xlarge">posts</CustomText>
                    </div>
                    <div class="number-1">
                        <CustomText tag="b" size="xlarge">{{ user.followers }} </CustomText>
                        <CustomText size="xlarge">followers</CustomText>
                    </div>
                    <div class="number-1">
                        <CustomText tag="b" size="xlarge">{{ user.following }} </CustomText>
                        <CustomText size="xlarge">following</CustomText>
                    </div>
                </div>
                <div class="detail-info">
                    <CustomText tag="b" size="xlarge">{{ user.username }}</CustomText>
                    <br>
                    <CustomText size="xlarge">{{ user.bio }}</CustomText>
                </div>
            </div>
        </div>
        <div class="detail-numbers-mob">
            <div class="number-1">
                <CustomText tag="b" size="xlarge">{{ user.posts }} </CustomText>
                <CustomText size="xlarge">posts</CustomText>
            </div>
            <div class="number-1">
                <CustomText tag="b" size="xlarge">{{ user.followers }} </CustomText>
                <CustomText size="xlarge">followers</CustomText>
            </div>
            <div class="number-1">
                <CustomText tag="b" size="xlarge">{{ user.following }} </CustomText>
                <CustomText size="xlarge">following</CustomText>
            </div>
        </div>
        <div class="tabs">
            <div>
                <router-link to="/profile" tag="span">
                    <span :class="[
                        $route.name === 'ProfilePost'
                            ? 'tabs-item-active'
                            : 'tabs-item-deactive',
                    ]">
                        <svg olor="#262626" fill="#262626" height="12" role="img" viewBox="0 0 24 24" width="12"
                            v-if="$route.name === 'ProfilePost'">
                            <rect fill="none" height="18" stroke="currentColor" stroke-linecap="round"
                                stroke-linejoin="round" stroke-width="2" width="18" x="3" y="3"></rect>
                            <line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2" x1="9.015" x2="9.015" y1="3" y2="21"></line>
                            <line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2" x1="14.985" x2="14.985" y1="3" y2="21"></line>
                            <line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2" x1="21" x2="3" y1="9.015" y2="9.015"></line>
                            <line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2" x1="21" x2="3" y1="14.985" y2="14.985"></line>
                        </svg>
                        <svg olor="#262626" fill="#262626" height="12" role="img" viewBox="0 0 24 24" width="12" v-else>
                            <rect fill="none" height="18" stroke="currentColor" stroke-linecap="round"
                                stroke-linejoin="round" stroke-width="2" width="18" x="3" y="3"></rect>
                            <line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2" x1="9.015" x2="9.015" y1="3" y2="21"></line>
                            <line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2" x1="14.985" x2="14.985" y1="3" y2="21"></line>
                            <line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2" x1="21" x2="3" y1="9.015" y2="9.015"></line>
                            <line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2" x1="21" x2="3" y1="14.985" y2="14.985"></line>
                        </svg>
                        POSTS</span>
                </router-link>
            </div>
            <div>
                <router-link to="/profile/igtv" tag="span">
                    <span :class="[
                        $route.name === 'ProfileIGTV'
                            ? 'tabs-item-active'
                            : 'tabs-item-deactive',
                    ]">
                        <svg color="#262626" fill="#8e8e8e" height="12" role="img" viewBox="0 0 24 24" width="12"
                            v-if="$route.name === 'ProfileIGTV'">
                            <line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="2.049"
                                x2="21.95" y1="7.002" y2="7.002"></line>
                            <line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2" x1="13.504" x2="16.362" y1="2.001" y2="7.002"></line>
                            <line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2" x1="7.207" x2="10.002" y1="2.11" y2="7.002"></line>
                            <path
                                d="M2 12.001v3.449c0 2.849.698 4.006 1.606 4.945.94.908 2.098 1.607 4.946 1.607h6.896c2.848 0 4.006-.699 4.946-1.607.908-.939 1.606-2.096 1.606-4.945V8.552c0-2.848-.698-4.006-1.606-4.945C19.454 2.699 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.546 2 5.704 2 8.552z"
                                fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2"></path>
                            <path
                                d="M9.763 17.664a.908.908 0 01-.454-.787V11.63a.909.909 0 011.364-.788l4.545 2.624a.909.909 0 010 1.575l-4.545 2.624a.91.91 0 01-.91 0z"
                                fill-rule="evenodd"></path>
                        </svg>
                        <svg color="#8e8e8e" fill="#8e8e8e" height="12" role="img" viewBox="0 0 24 24" width="12"
                            v-else>
                            <line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="2.049"
                                x2="21.95" y1="7.002" y2="7.002"></line>
                            <line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2" x1="13.504" x2="16.362" y1="2.001" y2="7.002"></line>
                            <line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2" x1="7.207" x2="10.002" y1="2.11" y2="7.002"></line>
                            <path
                                d="M2 12.001v3.449c0 2.849.698 4.006 1.606 4.945.94.908 2.098 1.607 4.946 1.607h6.896c2.848 0 4.006-.699 4.946-1.607.908-.939 1.606-2.096 1.606-4.945V8.552c0-2.848-.698-4.006-1.606-4.945C19.454 2.699 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.546 2 5.704 2 8.552z"
                                fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2"></path>
                            <path
                                d="M9.763 17.664a.908.908 0 01-.454-.787V11.63a.909.909 0 011.364-.788l4.545 2.624a.909.909 0 010 1.575l-4.545 2.624a.91.91 0 01-.91 0z"
                                fill-rule="evenodd"></path>
                        </svg>
                        IGTV</span>
                </router-link>
            </div>
            <div>
                <router-link to="/profile/saved/" tag="span">
                    <span :class="[
                        $route.name === 'ProfileSave'
                            ? 'tabs-item-active'
                            : 'tabs-item-deactive',
                    ]">
                        <svg color="#262626" fill="#8e8e8e" height="12" role="img" viewBox="0 0 24 24" width="12"
                            v-if="$route.name === 'ProfileSave'">
                            <polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor"
                                stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon>
                        </svg>
                        <svg color="#8e8e8e" fill="#8e8e8e" height="12" role="img" viewBox="0 0 24 24" width="12"
                            v-else>
                            <polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor"
                                stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon>
                        </svg>
                        SAVED</span>
                </router-link>
            </div>
            <div>
                <router-link to="/profile/tagged/" tag="span">
                    <span :class="[
                        $route.name === 'ProfileTag'
                            ? 'tabs-item-active'
                            : 'tabs-item-deactive',
                    ]">
                        <svg color="#262626" fill="#8e8e8e" height="12" role="img" viewBox="0 0 24 24" width="12"
                            v-if="$route.name === 'ProfileTag'">
                            <path
                                d="M10.201 3.797L12 1.997l1.799 1.8a1.59 1.59 0 001.124.465h5.259A1.818 1.818 0 0122 6.08v14.104a1.818 1.818 0 01-1.818 1.818H3.818A1.818 1.818 0 012 20.184V6.08a1.818 1.818 0 011.818-1.818h5.26a1.59 1.59 0 001.123-.465z"
                                fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2"></path>
                            <path
                                d="M18.598 22.002V21.4a3.949 3.949 0 00-3.948-3.949H9.495A3.949 3.949 0 005.546 21.4v.603"
                                fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2"></path>
                            <circle cx="12.072" cy="11.075" fill="none" r="3.556" stroke="currentColor"
                                stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle>
                        </svg>
                        <svg color="#8e8e8e" fill="#8e8e8e" height="12" role="img" viewBox="0 0 24 24" width="12"
                            v-else>
                            <path
                                d="M10.201 3.797L12 1.997l1.799 1.8a1.59 1.59 0 001.124.465h5.259A1.818 1.818 0 0122 6.08v14.104a1.818 1.818 0 01-1.818 1.818H3.818A1.818 1.818 0 012 20.184V6.08a1.818 1.818 0 011.818-1.818h5.26a1.59 1.59 0 001.123-.465z"
                                fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2"></path>
                            <path
                                d="M18.598 22.002V21.4a3.949 3.949 0 00-3.948-3.949H9.495A3.949 3.949 0 005.546 21.4v.603"
                                fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2"></path>
                            <circle cx="12.072" cy="11.075" fill="none" r="3.556" stroke="currentColor"
                                stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle>
                        </svg>
                        TAGGED</span>
                </router-link>
            </div>
        </div>
        <div class="tab-view">
            <router-view />
        </div>
    </div>
</template>
  
<script>
import CustomText from "@/components/layout/CustomText";
import User from "@/data/user";

export default {
    name: "Profile",
    components: {
        CustomText,
    },
    data() {
        return {
            user: User,
        }
    },
    methods: {
        openOption(event) {
            alert('Feature still in processing, it will update soon!')
            if (event) {
                alert(event.target.tagName)
            }
        },
    },
};
</script>
  
<style scoped>
.home {
    margin-left: auto;
    margin-right: auto;
}

.profile-header {
    display: grid;
    grid-template-columns: 1fr 2fr;
    padding: 5px 16px 5px 16px;
    margin-top: 60px;
}

.head-avatar {
    min-width: 150px;
    min-height: 150px;
    overflow: hidden;
}

.head-avatar img {
    border-radius: 50%;
}

.icon-options {
    display: none;
}

.thin {
    font-weight: 100;
}

.head-profile-detail {
    padding-left: 20px;
}

.detail-name {
    padding-top: 20px;
}

.detail-numbers {
    display: none;
}

.detail-info {
    padding-top: 15px;
}

.action-edit {
    border: 1px solid rgb(209, 209, 209);
    padding: 0.3rem;
    border-radius: 3px;
    min-width: 200px;
}

.detail-numbers-mob {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: space-evenly;
    border-top: 2px solid rgb(231, 231, 231);
    padding-top: 1rem;
    padding-bottom: 1rem;
}

.detail-numbers-mob .number-1 {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.tabs {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-items: center;
    align-items: center;
    border-top: 1px solid rgb(231, 231, 231);
}

.tabs span {
    display: none;
}

.tab-view {
    max-width: 975px;
    margin-left: auto;
    margin-right: auto;
}

.profile-header {
    padding: 0px 10px;
    margin-top: 66px;
    max-width: none;
    display: grid;
    grid-template-columns: auto 100px 200px auto;
    align-items: start;
    grid-gap: 10px;
}

.action-edit {
    margin-top: 10px;
}

.head-avatar {
    display: inline-flex;
    min-width: 100px;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;
}

.head-avatar img {
    width: 90px;
    height: 90px;
}

.head-profile-detail {
    min-width: 200px;
}

@media screen and (min-width: 980px) {
    .home {
        max-width: none;
        display: grid;
        grid-template-rows: 195px 1fr;
        grid-gap: 10px;
    }

    .profile-header {
        padding-right: 10px;
        margin-top: 30px;
        max-width: none;
        display: grid;
        grid-template-columns: 285px auto;
        grid-gap: 30px;
    }

    .head-profile-detail {
        max-width: 615px;
    }

    .action-edit {
        align-items: center;
        background-position: 0px 0px;
        display: flex;
        justify-content: center;
        padding: 8px;
        text-align: center;
        background-color: #ffffff;
        border-width: 0px;
        flex: 0.25 0 auto;
    }

    .icon-options {
        align-items: center;
        background-position: 0px 0px;
        display: flex;
        justify-content: center;
        padding: 8px;
        text-align: center;
        background-color: #ffffff;
        flex: 0.25 0 auto;
    }

    .tabs {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        margin-top: 30px;
        align-items: center;
        font-weight: 500;
        font-size: 13px;
        border-top: 2px solid rgb(231, 231, 231);
    }

    .tabs-item-deactive {
        color: #aaa;
        padding-top: 16px;
        padding-bottom: 16px;
    }

    .tabs-item-active {
        color: black;
        margin-top: 0px;
        border-top: 1px solid black;
        padding-top: 16px;
        padding-bottom: 16px;
    }

    .tab-view {
        display: block;
    }

    .tabs span {
        display: inherit;
    }

    .head-avatar {
        display: inline-flex;
        border-radius: 50%;
        cursor: pointer;
        justify-content: center;
        align-items: center;
        margin-bottom: 25px;
    }

    .head-avatar img {
        border-radius: 50%;
        width: 150px;
        height: 150px;
    }

    .thin {
        font-weight: 100;
    }

    .head-profile-detail {
        width: 300px;
        margin-left: 30px;
        margin-bottom: 10px;
    }

    .detail-name {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        padding-right: 40px;
        padding-top: 20px;
        align-items: center;
    }

    .detail-numbers {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;

        padding-top: 20px;
        align-items: center;
    }

    .detail-info {
        padding-top: 15px;
    }

    .action-edit {
        border: 1px solid rgb(209, 209, 209);
        padding: 0.3rem;
        border-radius: 3px;
        margin-left: 20px;
    }

    .detail-numbers-mob {
        display: none;
    }
}
</style>