const dev = {
  BASE_URL: "https://restcountries.com/v3.1",
};

const prod = {
  BASE_URL: "https://restcountries.com/v3.1/",
};

const config = process.env.NODE_ENV === "production" ? prod : dev;

export default {
  ...config,
  TIMEOUT: 60000,
};
