<script>
import { computed } from "@vue/reactivity";
import { ref } from "vue";

export default {
  name: "News",
  props: ["news", "search"],
  setup(props) {
    // console.log(props.news.articles);
    const news = ref(props.news.articles) || undefined;

    // console.log(news);
    const matchingNews = computed(() => {
      return news.value.filter((item) => item.title.includes(props.search));
    });

    return { matchingNews };
  },
};
</script>
<template>
  <div class="row">
    <div class="card" v-if="matchingNews" v-for="item in matchingNews">
      <img :src="item.urlToImage" />
      <div class="content">
        <h3>{{ item.title }}</h3>
        <p>{{ item.description }}</p>
        <div class="time-link">
          <small>{{ item.publishedAt }}</small>
          <a :href="item.url">readmore</a>
        </div>
      </div>
    </div>
    <div v-else>
      <h3>Data Not Found</h3>
    </div>
  </div>
</template>
<style>
.row {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: auto;
  justify-content: center;
}

.card {
  width: 30%;
  overflow: hidden;
  border-radius: 1rem;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
}

.card .content {
  padding: 1rem;
}

.card .content p {
  margin: 1rem 0;
}

img {
  max-width: 22rem;
  max-height: 15rem;
  object-fit: cover;
  object-position: center;
}

.time-link {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.time-link a {
  text-decoration: none;
  padding: 0.7rem;
  background-color: blue;
  color: #fff;
  border-radius: 1rem;
}
</style>
