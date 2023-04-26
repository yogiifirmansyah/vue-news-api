import { ref } from "vue";

const getNews = (category) => {
  const news = ref([]);
  const error = ref("");

  const load = async () => {
    try {
      if (category) {
        let data = await fetch("https://newsapi.org/v2/top-headlines?country=us&category=" + category + "&apiKey=7af2fd634fc94159a7a0e3f3c42816a2");
        if (data.status === "ok") {
          throw Error("No data available");
        }
        news.value = await data.json();
      } else {
        let data = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=7af2fd634fc94159a7a0e3f3c42816a2");
        if (data.status === "ok") {
          throw Error("No data available");
        }
        news.value = await data.json();
      }
    } catch (err) {
      err.value = error.message;
      console.log(err.value);
    }
  };

  return { news, error, load };
};

export default getNews;
