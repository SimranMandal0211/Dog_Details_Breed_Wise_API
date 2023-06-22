var breedImage = $('#breed-img-box');
var dropDown = $('#dog-breeds');
var allowSubmit = true;
var breed;

// fetch data and add to select options
$.get("https://dog.ceo/api/breeds/list/all", function(data, status){
    // console.log(data);
    let dogBreeds = data.message;
    for(let dog in dogBreeds){
        dropDown.append('<option value="' + dog + '">' + dog + '</option>');
    }
    // console.log("dogbreeds taken");
});
