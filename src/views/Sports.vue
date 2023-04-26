<template>
  <div class="container">
    <News :news="news" :search="search" />
  </div>
</template>

<script>
// @ is an alias to /src
import News from "@/components/News.vue";
import getNews from "@/composables/getNews";

export default {
  name: "Sports",
  components: {
    News,
  },
  props: ["search"],
  setup() {
    const { news, error, load } = getNews("sports");
    load();
    console.log(news);
    return { news, error };
  },
};
</script>

<style>
.container {
  max-width: 1024px;
  margin: auto;
}
</style>
