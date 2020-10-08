const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'


function dogApi(url, fn) {
    fetch(url)
    .then(res => res.json())
    .then(json => fn(json));
}

function addImage(img) {
    // Grabbing img div
    let imgDiv = document.getElementById('dog-image-container');
    let newImg = document.createElement('img');
    imgDiv.appendChild(newImg);
    newImg.src = img
    newImg.style.width = '10rem'


}

function newImage(srcArray, fn) {
    srcArray.message.forEach(img => {
        addImage(img)
    })

}

function breedLi(breed) {
    let ul = document.getElementById('dog-breeds');
    let li = document.createElement('li');
    ul.appendChild(li);
    li.innerText = breed;
    li.addEventListener('click', () => {
        li.style.color = 'red'
    })
    //maybe add functionality to get types of breeds
}

function listBreed(breeds) {
    for(breed in breeds.message) {
        breedLi(breed)
    }
}

function dropList() {
    let value = document.getElementById('breed-dropdown').value;
    let value1 = document.getElementById('breed-dropdown').children;
    value.addEventListener('submit', console.log(value))
    // value.onchange = 'good'
}

document.addEventListener('DOMContentLoaded', () => {
    dogApi(imgUrl, newImage)
    dogApi(breedUrl, listBreed)
    dropList()
})