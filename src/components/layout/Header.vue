<template>
    <nav class="nav-header">
        <div class="nav-header-content">
            <div class="nav-brand">
                <div class="nav-brand-space">
                    <a class="homepage-logo" href="/">
                        <img src="@/assets/images/logo.png" alt="logo-brand">
                    </a>
                </div>
            </div>
            <div class="nav-search">
                <input aria-label="Phần nhập nội dung tìm kiếm" autocapitalize="none" class="search-input"
                    id="search-input" placeholder="Tìm kiếm" type="text" value="" />
                <div class="search-form" @click="searchFunction">
                    <div class="search-icon">
                        <svg aria-label="Tìm kiếm" color="#8e8e8e" fill="#8e8e8e" height="16" role="img"
                            viewBox="0 0 24 24" width="16">
                            <path d="M19 10.5A8.5 8.5 0 1110.5 2a8.5 8.5 0 018.5 8.5z" fill="none" stroke="currentColor"
                                stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                            <line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2" x1="16.511" x2="22" y1="16.511" y2="22"></line>
                        </svg>
                    </div>
                    <span class="search-place">Tìm kiếm</span>
                </div>
            </div>
            <div class="nav-redirect">
                <div class="group-redirect">
                    <div class="btn-redirect">
                        <a href="/">
                            <svg aria-label="Trang chủ" class="homepage-icon" color="#262626" fill="#262626" height="24"
                                role="img" viewBox="0 0 24 24" width="24">
                                <path
                                    d="M22 23h-6.001a1 1 0 01-1-1v-5.455a2.997 2.997 0 10-5.993 0V22a1 1 0 01-1 1H2a1 1 0 01-1-1V11.543a1.002 1.002 0 01.31-.724l10-9.543a1.001 1.001 0 011.38 0l10 9.543a1.002 1.002 0 01.31.724V22a1 1 0 01-1 1z">
                                </path>
                            </svg>
                        </a>
                    </div>
                    <div class="btn-redirect">
                        <a aria-label="Tin nhắn trực tiếp - Thông báo mới" class="xWeGp" href="/direct/inbox/"
                            tabindex="0"><svg aria-label="Messenger" class="message-icon" color="#262626" fill="#262626"
                                height="24" role="img" viewBox="0 0 24 24" width="24">
                                <path
                                    d="M12.003 2.001a9.705 9.705 0 110 19.4 10.876 10.876 0 01-2.895-.384.798.798 0 00-.533.04l-1.984.876a.801.801 0 01-1.123-.708l-.054-1.78a.806.806 0 00-.27-.569 9.49 9.49 0 01-3.14-7.175 9.65 9.65 0 0110-9.7z"
                                    fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="1.739">
                                </path>
                                <path
                                    d="M17.79 10.132a.659.659 0 00-.962-.873l-2.556 2.05a.63.63 0 01-.758.002L11.06 9.47a1.576 1.576 0 00-2.277.42l-2.567 3.98a.659.659 0 00.961.875l2.556-2.049a.63.63 0 01.759-.002l2.452 1.84a1.576 1.576 0 002.278-.42z"
                                    fill-rule="evenodd"></path>
                            </svg></a>
                    </div>
                    <div class="btn-redirect">
                        <a class="wpO6b ZQScA " type="button" href="/post/">
                            <div class="QBdPU "><svg aria-label="Bài viết mới" class="post-icon" color="#262626"
                                    fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24">
                                    <path
                                        d="M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552z"
                                        fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2"></path>
                                    <line fill="none" stroke="currentColor" stroke-linecap="round"
                                        stroke-linejoin="round" stroke-width="2" x1="6.545" x2="17.455" y1="12.001"
                                        y2="12.001"></line>
                                    <line fill="none" stroke="currentColor" stroke-linecap="round"
                                        stroke-linejoin="round" stroke-width="2" x1="12.003" x2="12.003" y1="6.545"
                                        y2="17.455"></line>
                                </svg></div>
                        </a>
                    </div>
                    <div class="btn-redirect">
                        <a data-testid="explore-icon" href="/explore/" tabindex="0"><svg aria-label="Tìm người"
                                class="explore-icon" color="#262626" fill="#262626" height="24" role="img"
                                viewBox="0 0 24 24" width="24">
                                <polygon fill="none"
                                    points="13.941 13.953 7.581 16.424 10.06 10.056 16.42 7.585 13.941 13.953"
                                    stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2"></polygon>
                                <polygon fill-rule="evenodd"
                                    points="10.06 10.056 13.949 13.945 7.581 16.424 10.06 10.056"></polygon>
                                <circle cx="12.001" cy="12.005" fill="none" r="10.5" stroke="currentColor"
                                    stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle>
                            </svg></a>
                    </div>
                    <div class="btn-redirect">
                        <a class="_0ZPOP kIKUG" href="/accounts/activity/"><svg aria-label="Nguồn cấp dữ liệu hoạt động"
                                class="follow" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24"
                                width="24">
                                <path
                                    d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z">
                                </path>
                            </svg></a>
                    </div>
                    <div class="btn-redirect">
                        <a href="/accounts/" class="_2dbep qNELH" data-testid="user-avatar-link" role="link"
                            tabindex="0" style="width: 24px; height: 24px;"><img alt="Ảnh đại diện" class="icon-user"
                                crossorigin="anonymous" data-testid="user-avatar" draggable="false"
                                src="@/assets/images/ava_user.jpg" style="border-radius: 50%;"></a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>
<script>
export default {
    name: 'Header',
    mounted() {
    },
    methods: {
        searchFunction(event) {
            var input = document.getElementById('search-input');
            var inputForm = document.getElementById('search-form');

            if (event) {
                input.show();
                input.focus();
                inputForm.hidden();
            }
        }
    },
}
</script>

<style scoped>
.nav-header {
    align-items: center;
    background-color: #ffffff;
    color: #262626;
    display: flex;
    flex-direction: column;
    font-size: 14px;
    line-height: 18px;
    border-bottom: 1px solid #eeeeee;
}

.nav-header-content {
    align-items: center;
    display: flex;
    justify-content: center;
    padding: 5px 20px;
}

.nav-brand .nav-brand-space {
    align-items: center;
    color: #00376b;
    display: flex;
    min-width: 334px;
    min-height: 36px;
    justify-content: flex-start;
    z-index: 2;
}

.homepage-logo img {
    max-width: 135px;
    font-size: 14px;
    line-height: 18px;
    text-align: left;
}

.nav-search {
    align-items: stretch;
    background-color: #efefef;
    border-radius: 8px;
    color: #8e8e8e;
    display: flex;
    flex-direction: column;
    font-weight: 300;
    min-height: 36px;
    min-width: 268px;
    justify-content: center;
    padding: 0px 16px;
    text-align: left;
}

.nav-search .search-form {
    align-items: center;
    color: #8e8e8e;
    display: flex;
    font-weight: 300;
    line-height: 18px;
    text-align: left;
}

.nav-search .search-input {
    display: none;
    border: solid 1px #dbdbdb;
    border-radius: 3px;
    color: #262626;
    font-size: 14px;
    outline: none;
    padding: 3px 10px 3px 16px;
    z-index: 2;
    box-sizing: border-box;
    height: 100%;
    width: 100%;
}

.nav-search .search-form .search-icon {
    margin: 6px;
    line-height: 25px;
}

.nav-search .search-form .search-place {
    line-height: 25px;
}

.nav-redirect {
    align-items: center;
    color: #262626;
    display: flex;
    flex-basis: 127px;
    flex-wrap: wrap;
    font-size: 14px;
    justify-content: flex-end;
    line-height: 18px;
    min-width: 334px;
}

.nav-redirect .group-redirect {
    align-items: stretch;
    color: #262626;
    display: flex;
    font-size: 14px;
    line-height: 18px;
    padding: 0px 0px 0px 24px;
}

.nav-redirect .group-redirect .btn-redirect {
    margin-right: 24px;
}

.nav-redirect .group-redirect .btn-redirect .icon-user {
    max-width: 24px;
    max-height: 24px;
}

@media screen and (min-width: 980px) {
    .nav-brand {
        align-items: center;
        color: #00376b;
        display: flex;
        min-height: 36px;
        justify-content: flex-start;
    }
}
</style>