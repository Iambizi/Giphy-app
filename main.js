$(document).ready(function() {
  $(`.go`).click(function(){
    const giphyAPI = `https://api.giphy.com/v1/gifs/search?`;
    const word = $(`.look`).val();
    const giphyOptions = {
      q: word,
      api_key: `e729134c03124b8e9ada09ff218cd33b`,
      fmt: `json`
    };
    function displayGifs(data) {
      let gifHTML = `<div>`;
       $.each(data.data, function(i,gif){
       gifHTML += `<a href= ${gif.url}><img src=${gif.images.fixed_width.url} class="item" height=100px ></a>`;
      });
      gifHTML += `</div>`;
      $(`.gifs-area`).html(gifHTML); 
    }
   $.getJSON(giphyAPI,giphyOptions,displayGifs); 
  });
});
