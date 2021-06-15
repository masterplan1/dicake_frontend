export default ({app}, inject) => {
  inject('imageSrc', (url) => process.env.baseUrl + url);
}