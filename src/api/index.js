const apikey = '8552c147e331700bf628435e56fb973f';
const url = `http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=colombia&api_key=${apikey}&format=json`;

export default function getArtist() {
  return fetch(url)
    .then(res => res.json())
    .then(json => json.topartists.artist);
}
