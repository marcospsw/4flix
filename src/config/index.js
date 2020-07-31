const URL_FLIX = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://fourflix.herokuapp.com';

export default URL_FLIX;
