<template>
  <div class="c-home">
    <h1 class="c-home__title">
      {{ title }}
    </h1>
    <ArticlesList />
  </div>
</template>

<script>
import  ArticlesList from "@/components/ArticlesList/ArticlesList.vue";
import Constants from '../store/modules/constants';

export default {
  name: "home",
  data() {
    return {
      title: Constants.TEXT.HOME_TITLE
    }
  },
  components: {
    ArticlesList
  }
};
</script>

<style lang="scss">
.c-home {
   padding: $s-gutter--edge-mobile;
  &__title {
    @apply text-4xl pl-2 text-yellow-50;

     &:before {
       content: '';
       @apply border-l-4 border-yellow-600 w-full h-full mr-2;
     }
  }

  @include t-media-query($s-medium-up) {
    padding: $s-gutter--edge-xlarge;
  }
}
  
</style>
