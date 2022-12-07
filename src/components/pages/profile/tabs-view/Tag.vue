<template>
  <div class="tag">
    <div class="tag-icon">
      <img src="@/assets/themes/tagged.jpg" alt="" />
    </div>
    <div class="tag-text">
      <div class="tag-text1">
      <CustomText class="thin" size="xlarge">
        Photos of you
      </CustomText>
      </div>
      <br />
      <div class="tag-text2">
      <CustomText size="normal">
        When people tag you in photos, they'll appear here.
      </CustomText>
      </div>
    </div>
  </div>
</template>

<script>
import CustomText from "@/components/layout/CustomText.vue";

export default {
  name: "Tag",
  components: {
    CustomText,
  },
};
</script>

<style scoped>
.tag {
  display: grid;
  grid-template-rows:auto auto auto;
  justify-content: center;
  align-items: center;
}

.tag-icon {
  display: flex;
  justify-content: center;
  align-items: center;
}

.tag-text {
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
}

.tag-text2 {
  justify-content: center;
  align-items: center;
  max-width: 350px;
  text-align: justify;
}

.thin {
  font-weight: 100;
  font-size: 25px;
}
</style>