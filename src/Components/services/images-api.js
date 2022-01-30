const API = {
  url: "https://pixabay.com/api/",
  key: "24298698-47064084c0db11de593fd01c5",
  other: "image_type=photo&orientation=horizontal&per_page=12",
};

function fetchImages(name, page) {
  return fetch(
    `${API.url}?q=${name}&page=${page}&key=${API.key}&${API.other}`
  ).then((res) => res.json());
}

const api = {
  fetchImages,
};

export default api;
