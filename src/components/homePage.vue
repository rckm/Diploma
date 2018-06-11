<template>
  <div class="hp">
    <mainContent></mainContent>
  </div>
</template>

<script>
import mainContent from './mainPage/content.vue';

export default {
  name: 'homePage',
  components: {
    mainContent,
  },
};
</script>
