<template>
  <div class="c-about">
    <h1 class="c-about__title">{{ title }}</h1>
    <p class="c-about__paragraph">{{ paragraph }}</p>
    <p class="c-about__paragraph"> {{ myText }}</p>
  </div>
</template>
<script>
import Constants from '../store/modules/constants';

export default {
  name: 'about',
  data() {
    return {
      title: Constants.TEXT.TITLE_ABOUT,
      paragraph: Constants.TEXT.PARAGRAPH_ABOUT,
      myText: Constants.TEXT.MY_TEXT

    }
  },
}
</script>
<style lang="scss">
.c-about {
  @apply flex justify-center flex-col items-center my-20;
  &__title {
    @apply text-blue-50 mb-5;
    font-size: #{"clamp(1.5rem, 2.4vw, 3rem)"};
  }

  &__paragraph {
      @apply text-blue-50 mb-5 max-w-4xl;
       font-size: #{"clamp(0.875rem, 1.vw, 2rem)"};
  }
}
  
</style>