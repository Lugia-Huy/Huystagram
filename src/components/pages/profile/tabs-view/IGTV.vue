<template>
  <div class="igtv">
    <div class="igtv-icon">
      <img src="@/assets/themes/igtv.jpg" alt="" />
    </div>
    <div class="igtv-text">
      <CustomText class="thin" size="xlarge">
        Upload a Video
      </CustomText>
      <br />
      <CustomText size="normal">
        Videos must be between 1 and 60 minutes long.
      </CustomText>
    </div>
    <div class="igtv-upload">
      <button class="action-edit" type="button">
        <CustomText tag="b" size="normal">Upload</CustomText>
      </button>
    </div>
  </div>
</template>
  
<script>
import CustomText from "@/components/layout/CustomText";

export default {
  name: "IGTV",
  components: {
    CustomText,
  },
};
</script>
  
<style scoped>
.igtv {
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
}

.igtv-icon {
  display: flex;
  justify-content: center;
  align-items: center;
}

.igtv-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.igtv-upload {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.action-edit {
  background-color: dodgerblue;
  padding: 0.5rem;
  border-radius: 3px;
  color: white;
  width: 100px;
  height: 30px;
  border-width: 0px;
}

.thin {
  font-weight: 100;
  font-size: 25px;
}
</style>