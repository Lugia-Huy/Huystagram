<template>
  <div class="explore">
    <a href="" class="media-items" v-for="index in total" :key="index">
      <figure class="post-image">
        <img src="https://live.staticflickr.com/65535/52473943784_14836f9a43_k.jpg" alt="index" loading="lazy"/>
      </figure>
      <span class="post-overlay">
        <svg style="color: white" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
          class="bi bi-heart-fill" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
            fill="white"></path>
        </svg> 69
      </span>
    </a>
  </div>
</template>

<script>
export default {
  name: "Explore",
  data() {
    return {
      total: 15,
    }
  },
};
</script>

<style scoped>
.explore {
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(auto-fit, 293px);
  grid-auto-rows: 293px;
  justify-content: center;
  grid-gap: 28px;
}

.media-items {
  cursor: pointer;
  position: relative;
  display: block;
}

.post-image {
  margin: 0;
  width: 100%;
  height: 100%;
}

.media-items .post-image img {
  width: 100%;
  height: inherit;
  object-fit: cover;

}

.post-overlay {
  background: rgba(0, 0, 0, .4);
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  display: none;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
}

.media-items:hover .post-overlay {
  display: flex;
}

.bi {
  margin-right: 5px;
}

@media screen and (max-width: 980px) {
  .explore {
    margin-bottom: 60px;
    margin-top: 60px;
    grid-template-columns: repeat(3, minmax(200px, 250px));
    grid-auto-rows: minmax(200px, 250px);
    justify-content: center;
    grid-gap: 15px;
  }
}

@media screen and (max-width: 768px) {
  .explore {
    margin-bottom: 60px;
    margin-top: 60px;
    grid-template-columns: repeat(3, minmax(170px, 210px));
    grid-auto-rows: minmax(170px, 210px);
    justify-content: center;
    grid-gap: 10px;
  }
}

@media screen and (max-width: 428px) {
  .explore {
    margin-bottom: 60px;
    margin-top: 60px;
    grid-template-columns: repeat(3, minmax(110px, 130px));
    grid-auto-rows: minmax(110px, 130px);
    justify-content: center;
    grid-gap: 5px;
  }
}

@media screen and (max-width: 320px) {
  .explore {
    margin-bottom: 60px;
    margin-top: 60px;
    grid-template-columns: repeat(3, minmax(100px, 105px));
    grid-auto-rows: minmax(100px, 105px);
    justify-content: center;
    grid-gap: 3px;
  }
}
</style>