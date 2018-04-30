const dataModule = (() => {
    class Show {
        constructor(id, name, image) {
            this.id = id;
            this.name = name;
            this.image = image;
        }

    }
    const createShow = (arr) => {
        const firstFifty = arr.slice(0, 49);
        const newArr = firstFifty.map(element => {
            return new Show(element.id, element.name, element.image.medium);
        });

        return newArr;
    }

    const saveShowId = (id) => {
        localStorage.setItem("id",id)
    }
    const createSingleShow = (data) =>{
        
        let $seasons = [];
        let $cast = [];
        const $show = {
           name: data.name,
           image: data.image.medium,
           seasons: $seasons,
           cast: $cast,
           description: data.summary      
        };

        data._embedded.cast.forEach(item => {
            $cast.push(item.person.name);
        });
        data._embedded.seasons.forEach(item =>{
            $seasons.push({
                endDate: item.endDate,
                premiereDate: item.premiereDate
            });
        })

        return $show;
    }

    const createSearchShow = (list)=>{
        
        let $listOfNames = [];
        list.forEach(item =>{
            $listOfNames.push(item.show);
        });
        return $listOfNames;
    }


    return {
        createShow,
        saveShowId,
        createSingleShow,
        createSearchShow
    }
})();