$(document).ready(function() {
  //Go button
  $("#look").val("");
  $("#go").click(function() {
    const giphyAPI = "https://api.giphy.com/v1/gifs/search?";
    const word = $("#look").val();
    const giphyOptions = {
      q: word,
      api_key: "e729134c03124b8e9ada09ff218cd33b",
      limit: 70,
      fmt: "json"
    };
    function displayGifs(data) {
      let gifHTML = "<div>";
      $.each(data.data, function(i, gif) {
        gifHTML += `<a href= ${gif.url}><img src=${
          gif.images.fixed_width.url
        } class="item" height=100px ></a>`;
      });
      gifHTML += `</div>`;
      $(".gifs-area").html(gifHTML);

      if ($("#look").val() !== "") {
        // $("#more").addClass("active");
      }
    }
    $.getJSON(giphyAPI, giphyOptions, displayGifs);
  });
  //Trending Button
  $("#trending").click(function() {
    $("#look").val("");
    const trendyGiph = `https://api.giphy.com/v1/gifs/trending?`;

    const giphyOptions = {
      api_key: `e729134c03124b8e9ada09ff218cd33b`,
      limit: 70,
      rating: "g",
      fmt: `json`
    };

    function displayGifs(data) {
      data.preventDefault;
      let gifHTML = "<div>";
      $.each(data.data, function(i, gif) {
        gifHTML += `<a href= ${gif.url}><img src=${
          gif.images.fixed_width.url
        } class="item" height=100px ></a>`;
      });
      gifHTML += `</div>`;
      $(".gifs-area")
        .html(gifHTML)
        .show();

      // $("#more").addClass("active");

      //Removes load more button that comes after trending button click,
      const resetValue = $("#go").on("click", function() {
        $("#more").removeClass("active");
      });
      resetValue;
    }

    //   $(function(){
    //     $("div").slice(0, 10).show(); // select the first ten
    //     $("#load").click(function(e){ // click event for load more
    //         e.preventDefault();
    //         $("div:hidden").slice(0, 10).show(); // select next 10 hidden divs and show them
    //         if($("div:hidden").length == 0){ // check if any hidden divs still exist
    //             alert("No more divs"); // alert if there are none left
    //         }
    //     });
    // });
    // $(".gifs-area").addClass("populate");

    $.getJSON(trendyGiph, giphyOptions, displayGifs);
  });

  // $("#more").on("click", function loadMore(e) {
  //   e.preventDefault();
  //   $(".gifs-area")
  //     .html(gifHTML)
  //     .slice(0, 5)
  //     .show();
  // });
});
