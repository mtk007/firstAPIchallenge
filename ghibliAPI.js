fetch('https://ghibliapi.herokuapp.com')
    .then(function(response)
    {
        return response.json();
    })
    .then(function(myJson){
        console.log(myJson)
    })

   /*fetch('https://ghibliapi.herokuapp.com')
        {let studioGhibli = document.querySelector('ul');
 
        .then(function(response) {
            return response.json();
        })
            .then(function(json) 
                {
                let studioGhibli = json.results;
}

//***************
//const baseUrl = "https://ghibliapi.herokuapp.com/films";

//const sectionOne = document.querySelector("section");

//fetch(baseUrl)
//  .then((result) => {
//    return result.json();
//  })
//***************** */
// https://ghibliapi.herokuapp.com/people/id.name.gender.age.eye_color.hair_color.films.species.url


 /*  [name:    ;
    gender:   ;
    age:  ;
    eye_color:  ;
    hair_color:  ;
    films:   ;
    species:  ;
   ] */
