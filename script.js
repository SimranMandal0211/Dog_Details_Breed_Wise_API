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

dropDown.change(function(){
    allowSubmit = true;
    
    console.log("dropdown changed");
});

$('form button').click(function(e){
    e.preventDefault();

    if(allowSubmit){
        breed = dropDown.val();
        displayDog(breed);
        allowSubmit = false;
    }
     console.log("get image clicked");
});

function displayDog(breed){
    let url = "https://dog.ceo/api/breed/" + breed + "/images/random";

    $('#breed-img-box img').remove();

    $.get(url, function(data, status){
        let imgUrl = data.message;
        breedImage.append('<img src="' + imgUrl + '" alt="' + breed + '">');
    })
}
