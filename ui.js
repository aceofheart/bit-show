const uiModule = (() => {
    const $showsContainer = $(".shows-list")

        const displayShow = arr => {

            arr.forEach(element => {

                const $card = $(`
                    <div class="col-4">
                        <div class="card">
                            <img class="card-img-top" src="${element.image}" alt="${element.name}">
                            <div class="card-body">
                                <a href="#" data-show-id="${element.id}">${element.name}</a>
                            </div>
                        </div>
                    </div>
                `);

                $showsContainer.append($card);
            });
        }
        const displayShowSearch = list => {
            const $searchDropdown = $(".search-dropdown");
                $searchDropdown.text("")
                list.forEach(element => {
                    const $listItem = $(`
                                    <li><a href="#" data-show-id="${element.id}">${element.name}</a></li>`
                                );
                                $searchDropdown.append($listItem).css("display","initial");
                })
                
            }

            const displaySingleShow = (singleShow) => {
                
                
                const $container = document.querySelector(".single-show");
                let $seasons = "<ul>";

                singleShow.seasons.forEach(season => {
                    $seasons += `<li>${season.premiereDate} - ${season.endDate}</li>`;
                })

                $seasons += "</ul>";

                let $cast = "<ul>"

                singleShow.cast.forEach(cast =>{
                    $cast += `<li>${cast}</li>`
                })
                $cast += "</ul>"

                $container.innerHTML = `<div>
                                            <h1>${singleShow.name}</h1>
                                                <div class="content">
                                                    <img class ="poster" src="${singleShow.image}"/>
                                                <div class="box">
                                                    <h3>Seasons (${singleShow.seasons.length})</h3>
                                                    ${$seasons}
                                                    <h3>Cast</h3>
                                                    ${$cast}
                                                </div>
                                            </div>
                                            <div class="description">${singleShow.description}</div>
                                        </div>`;
            }

  
    return {
        displayShow,
        displaySingleShow,
        displayShowSearch
    }
})();