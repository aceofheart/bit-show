const mainModule = ((data, ui) => {
    const initGetShow = () => {

        $.get({
                url: "http://api.tvmaze.com/show"
            })
            .done(response => {
                const shows = data.createShow(response);
                console.log(shows);
                ui.displayShow(shows);
            })
      
        $(document).on("click", ".card-body a", function (event) {
            const id = $(this).attr("data-show-id");
          data.saveShowId(id);
            window.location.href = "./show-info-page.html" + "?id=" + id;
        })

        $(document).on("click", ".search-dropdown a", function (event) {
            console.log(event);
            
            const id = $(this).attr("data-show-id");
             data.saveShowId(id);
            window.location.href = "./show-info-page.html" + "?id=" + id;
        })
    
        $(".form-control").keyup(() =>{
           
            const $inputValue = $(".form-control").val()
        $.get({
            url:"http://api.tvmaze.com/search/shows?q=" + $inputValue
        })
        .done(response =>{ 
            const searchList = data.createSearchShow(response);
            ui.displayShowSearch(searchList);
            });
        });
    }
           
            

    const initSinglePage = () => {
        const id = localStorage.getItem("id");

        $.get({
            url: `http://api.tvmaze.com/shows/${id}?embed[]=cast&embed[]=seasons`
        })
        .done(response => {
            const singleShow = data.createSingleShow(response);
            ui.displaySingleShow(singleShow);
        });

    }

    return {
        initGetShow,
        initSinglePage
    }

})(dataModule, uiModule);