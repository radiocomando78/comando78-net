/*
|--------------------------------------------------------------------------
| Configuration
|--------------------------------------------------------------------------
|
| To configure your streaming, define the name of your radio, url and 
| type of your streaming below.
|
*/

var settings = {
  'radio_name': 'Rádio Comando 78',

  // URL do stream (audio)
  'url_streaming': 'https://radio.comando78.com.br/listen/comando_78/live.mp3',

  // Vamos usar a API do AzuraCast para metadados/histórico
  'streaming_type': 'shoutcast',

  // Vagalume (letras)
  'api_key': '18fe07917957c289983464588aabddfb',

  // histórico de músicas
  'historic': true,

  // próximo som (só funciona bem em shoutcast real, deixa false)
  'next_song': false,

  // capa padrão
  'default_cover_art': 'img/bg-capa.jpg',

  // API do AzuraCast
  'azuracast_api': 'https://radio.comando78.com.br/api/nowplaying/1'
};
