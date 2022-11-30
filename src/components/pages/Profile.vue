<template>
    <section class="profile">
        <div class="root">
            <div class="profile-header">
                <div class="avatar">
                    <img src="@/assets/images/ava_user.jpg" alt="avatar user" class="avatar-user" />
                </div>
                <div class="profile-info">
                    <div class="profile-info-header">
                        <h2 class="profile-display-name">User</h2>
                        <a class="edit-btn" href="#">Edit profile</a>
                        <button class="option-btn" @click="openOption()">
                            <svg aria-label="Tùy chọn" class="_8-yf5 " color="#262626" fill="#262626" height="24"
                                role="img" viewBox="0 0 24 24" width="24">
                                <circle cx="12" cy="12" fill="none" r="8.635" stroke="currentColor"
                                    stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle>
                                <path
                                    d="M14.232 3.656a1.269 1.269 0 01-.796-.66L12.93 2h-1.86l-.505.996a1.269 1.269 0 01-.796.66m-.001 16.688a1.269 1.269 0 01.796.66l.505.996h1.862l.505-.996a1.269 1.269 0 01.796-.66M3.656 9.768a1.269 1.269 0 01-.66.796L2 11.07v1.862l.996.505a1.269 1.269 0 01.66.796m16.688-.001a1.269 1.269 0 01.66-.796L22 12.93v-1.86l-.996-.505a1.269 1.269 0 01-.66-.796M7.678 4.522a1.269 1.269 0 01-1.03.096l-1.06-.348L4.27 5.587l.348 1.062a1.269 1.269 0 01-.096 1.03m11.8 11.799a1.269 1.269 0 011.03-.096l1.06.348 1.318-1.317-.348-1.062a1.269 1.269 0 01.096-1.03m-14.956.001a1.269 1.269 0 01.096 1.03l-.348 1.06 1.317 1.318 1.062-.348a1.269 1.269 0 011.03.096m11.799-11.8a1.269 1.269 0 01-.096-1.03l.348-1.06-1.317-1.318-1.062.348a1.269 1.269 0 01-1.03-.096"
                                    fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2">
                                </path>
                            </svg>
                        </button>
                    </div>
                    <div class="profile-info-body">
                        <div class="info-posts"><b>45</b> posts</div>
                        <div class="info-followers"><b>45</b> peoples</div>
                        <div class="info-following">Following <b>45</b> peoples</div>
                    </div>
                    <div class="profile-info-footer">
                        <h1 class="display-name-user">User</h1>
                        <p class="description">bla bla bla....</p>
                    </div>
                </div>
            </div>
            <div class="tabs">
                <div class="tab-posts">
                    <router-link to="/profile">
                        <span :class="[
                            $route.name === 'Profile'
                                ? 'tabs-item-active'
                                : 'tabs-item-deactive',
                        ]">
                            <svg aria-label="" class="_8-yf5 " color="#262626" fill="#262626" height="12" role="img"
                                viewBox="0 0 24 24" width="12">
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
                            </svg> POSTS
                        </span>
                    </router-link>
                </div>
                <div class="tab-reels">
                    <router-link to="/profile/reels">
                        <span :class="[
                            $route.name === 'ProfileReels'
                                ? 'tabs-item-active'
                                : 'tabs-item-deactive',
                        ]"><svg aria-label="" class="_8-yf5 " color="#8e8e8e" fill="#8e8e8e" height="12" role="img"
                                viewBox="0 0 24 24" width="12">
                                <line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"
                                    x1="2.049" x2="21.95" y1="7.002" y2="7.002"></line>
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
                            REELS</span>
                    </router-link>
                </div>
                <div class="tab-igtv">
                    <router-link to="/profile/igtv">
                        <span :class="[
                            $route.name === 'ProfileIGTV'
                                ? 'tabs-item-active'
                                : 'tabs-item-deactive',
                        ]"><svg aria-label="" class="_8-yf5 " color="#8e8e8e" fill="#8e8e8e" height="12" role="img"
                                viewBox="0 0 24 24" width="12">
                                <path
                                    d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 22.5C6.2 22.5 1.5 17.8 1.5 12S6.2 1.5 12 1.5 22.5 6.2 22.5 12 17.8 22.5 12 22.5zm5-11.8l-6.8-3.9c-.5-.3-1-.3-1.5 0-.4.3-.7.7-.7 1.3v7.8c0 .5.3 1 .8 1.3.2.1.5.2.8.2s.5-.1.8-.2l6.8-3.9c.5-.3.8-.8.8-1.3s-.5-1-1-1.3zm-7.5 5.2V8.1l6.8 3.9-6.8 3.9z">
                                </path>
                            </svg>
                            IGTV</span>
                    </router-link>
                </div>
                <div class="tab-save">
                    <router-link to="/profile/save">
                        <span :class="[
                            $route.name === 'ProfileSave'
                                ? 'tabs-item-active'
                                : 'tabs-item-deactive',
                        ]"><svg aria-label="" class="_8-yf5 " color="#8e8e8e" fill="#8e8e8e" height="12" role="img"
                                viewBox="0 0 24 24" width="12">
                                <polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor"
                                    stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon>
                            </svg>
                            SAVED</span>
                    </router-link>
                </div>
                <div class="tab-tags">
                    <router-link to="/profile/tag">
                        <span :class="[
                            $route.name === 'ProfileTag'
                                ? 'tabs-item-active'
                                : 'tabs-item-deactive',
                        ]"><svg aria-label="" class="_8-yf5 " color="#8e8e8e" fill="#8e8e8e" height="12" role="img"
                                viewBox="0 0 24 24" width="12">
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
                <div class="bot">
                    <div class="left-side-bot">
                        <div class="media-small">
                            <img src="https://live.staticflickr.com/65535/52474116475_26b6c5e812_z.jpg" alt="" />
                        </div>
                        <div class="media-small">
                            <img src="https://live.staticflickr.com/65535/52474116475_26b6c5e812_z.jpg" alt="" />
                        </div>
                        <div class="media-small">
                            <img src="https://live.staticflickr.com/65535/52474116475_26b6c5e812_z.jpg" alt="" />
                        </div>
                    </div>
                </div>
                <div class="bot">
                    <div class="left-side-bot">
                        <div class="media-small">
                            <img src="https://live.staticflickr.com/65535/52474116475_26b6c5e812_z.jpg" alt="" />
                        </div>
                        <div class="media-small">
                            <img src="https://live.staticflickr.com/65535/52474116475_26b6c5e812_z.jpg" alt="" />
                        </div>
                        <div class="media-small">
                            <img src="https://live.staticflickr.com/65535/52474116475_26b6c5e812_z.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Profile',
    methods: {
        openOption(event) {
            alert('Feature still in processing, it will update soon!')
            if (event) {
                alert(event.target.tagName)
            }
        }
    },
}
</script>

<style scoped>
.profile {
    align-items: stretch;
    color: #262626;
    display: flex;
    flex-direction: column;
    font-size: 14px;
    line-height: 18px;
}

.root {
    width: 975px;
    align-items: stretch;
    color: #262626;
    display: flex;
    flex-direction: column;
    font-size: 14px;
    line-height: 18px;
    margin: 0px 195.5px;
    padding: 30px 20px 0px;
}

.profile-header {
    align-items: stretch;
    display: flex;
    flex-direction: row;
    font-size: 14px;
    line-height: 18px;
    font-family: -apple-system;
    margin: 0px 0px 44px;
    height: 100%;
}

.avatar {
    align-items: center;
    flex: 1 1 auto;
    display: flex;
    justify-content: center;
    height: auto;
    margin-right: 30px;
    background-position: center;
}

.avatar img {
    border-radius: 50%;
    max-width: 100%;
    height: auto;
}

.profile-info {
    align-items: stretch;
    display: flex;
    flex-direction: column;
    font-size: 14px;
    line-height: 18px;
    flex-wrap: wrap;
    flex: 2 0 auto;
    overflow-y: auto;
}

.profile-info-header {
    align-items: center;
    display: flex;
    font-size: 14px;
    line-height: 18px;
    margin: 0px 0px 20px;
    width: 80%;
}

.profile-display-name {
    color: #262626;
    font-family: -apple-system;
    font-weight: 300;
    line-height: 32px;
    text-align: left;
    flex: 2 0 auto;
}

.edit-btn {
    background-position: 0px 0px;
    border: 1px solid #dbdbdb;
    border-radius: 4px;
    color: #262626;
    font-family: -apple-system;
    font-size: 14px;
    font-weight: 600;
    line-height: 18px;
    padding: 5px 9px;
    margin-right: 10px;
    text-align: center;
    flex: 0.75 0 auto;
}

.edit-btn:hover {
    text-decoration: none;
}

.option-btn {
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

.option-btn:focus {
    display: none;
}

.profile-info-body {
    display: inline-flex;
    margin: 0px 0px 20px;
}

.info-posts {
    text-align: left;
    align-items: stretch;
    display: inline;
    line-height: 24px;
    flex-direction: column;
    color: #262626;
    margin-right: 30px;
}

.info-followers {
    text-align: left;
    align-items: stretch;
    display: inline;
    line-height: 24px;
    flex-direction: column;
    color: #262626;
    margin-right: 30px;
}

.info-following {
    text-align: left;
    align-items: stretch;
    display: inline;
    line-height: 24px;
    flex-direction: column;
    color: #262626;
}

.profile-info-footer {
    align-items: stretch;
    flex-direction: column;
    font-size: 14px;
    line-height: 18px;
    color: #262626;
    text-align: left;
}

.display-name-user {
    display: inline;
    font-family: -apple-system;
    font-weight: 600;
    font-size: 24px;
    color: #262626;
}

.description {
    align-items: stretch;
    flex-direction: column;
    font-family: -apple-system;
    line-height: 24px;
    color: #262626;
}

.tabs {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    padding-left: 25%;
    padding-right: 25%;
    padding-bottom: 14px;
    padding-top: 14px;
    font-weight: 500;
    font-size: 13px;
    border-top: 2px solid rgb(231, 231, 231);
}

.tabs-item-deactive {
    color: #aaa;
}

.tabs-item-active {
    color: black;
    border-top: 1px solid black;
    padding-top: 15px;
}

.tab-view {
    display: flex;
    flex-direction: column;
    width: 930px;
}

.tabs span {
    display: inherit;
}

span:hover {
    text-decoration: none;
}

.tab-posts {
    margin-right: 20px;
}

.tab-reels {
    margin-right: 20px;
}

.tab-igtv {
    margin-right: 20px;
}

.tab-save {
    margin-right: 20px;
}

.bot {
    padding-bottom: 30px;
}

.left-side-top {
    display: grid;
    grid-template-rows: 1fr 2fr;
    row-gap: 30px;
}

.left-side-bot {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 30px;
}

.media-small {
    display: inherit;
    width: 290px;
    height: 290px;
    cursor: pointer;
    -webkit-filter: brightness(100%);
}

.media-small img {
    width: 100%;
    height: inherit;
    object-fit: cover;
}

.media-small:hover {
    -webkit-filter: brightness(75%);
    -webkit-transition: all ease;
    -moz-transition: all ease;
    -o-transition: all ease;
    -ms-transition: all ease;
    transition: all ease;
}
</style>