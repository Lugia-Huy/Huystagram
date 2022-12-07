<template>
  <div class="save">
    <div class="save-icon">
      <img src="@/assets/themes/saved.jpg" alt="" />
    </div>
    <div class="save-text">
      <div class="save-text1">
        <CustomText class="thin" size="xlarge">
          Save
        </CustomText>
      </div>
      <br />
      <div class="save-text2">
        <CustomText size="normal">
          Save photos and videos that you want to see again. No
          one is notified, and only you can see what you've saved.
        </CustomText>
      </div>
    </div>
  </div>
</template>
  
<script>
import CustomText from "@/components/layout/CustomText.vue";

export default {
  name: "Save",
  components: {
    CustomText,
  },
};
</script>
  
<style scoped>
.save {
  display: grid;
  grid-template-rows: auto auto auto;
  justify-content: center;
  align-items: center;
}

.save-icon {
  display: flex;
  justify-content: center;
  align-items: center;
}

.save-text {
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
}

.save-text2 {
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