const apiUrl = "https://ghibliapi.herokuapp.com/people";

let section = document.querySelector('section')

const data = '';
let url;
//const sectionOne = document.querySelector("section");
 
fetch(apiUrl)
  .then((result) => {
    return result.json();
  })
  .then((items) => {
    ghibliCollection(items);
    console.log(items[0]);
  })
  .catch((error) => console.log(error));

function ghibliCollection(items){
    console.log(items);
 
let table = document.createElement('table')
    let row = document.createElement('tr') 
    let th1 = document.createElement('th')
    let th2 = document.createElement('th')
    let th3 = document.createElement('th')
    section.appendChild(table)
    table.appendChild(row)
    row.appendChild(th1)
    row.appendChild(th2)
    row.appendChild(th3)
    th1.innerHTML = 'Name'
    th2.innerHTML = 'Gender'
    th3.innerHTML = 'Age'

    items.forEach((data) => {
    let dRow = document.createElement('tr')
    table.appendChild(dRow)

    let cName = document.createElement('td');
        
    let cGender = document.createElement('td');
    
    let cAge = document.createElement('td');
        
    dRow.appendChild(cName);
    dRow.appendChild(cGender);
    dRow.appendChild(cAge);

        cGender.innerHTML = data.gender,
        cAge.innerHTML = data.age,
        cName.innerHTML = data.name
console.log(cName);

})


// 

//  charTable = {
   //cName[0]

// }
    

//  document.getElementById('getPeople')

//if onclick(listOfStrings)


  //https://ghibliapi.herokuapp.com/people.id.name.gender.ago.eye_color.hair_color.films.species.url

}