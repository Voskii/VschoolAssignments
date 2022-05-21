// const xhr = new XMLHttpRequest()

// xhr.open("GET", "https://api.vschool.io/pokemon", true)
// xhr.send()

// xhr.onreadystatechange = function(){
//     if(xhr.readyState === 4 && xhr.status === 200){
//         const JSONdata = xhr.responseText
//         const data = JSON.parse(JSONdata)
//         console.log(JSONdata)
//         showData(data)
//     }
// }



const xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.vschool.io/pokemon", true);
xhr.send();
//    working
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const JSONData = xhr.responseText;
        const data = JSON.parse(JSONData);
        console.log(JSONData)
        console.log(data.objects[0].pokemon)
        showData(data.objects[0].pokemon)
    }
}

function showData(arr){
    for(let i = 0; i < arr.length; i++){
        // console.log('i am in showdata function')
        const h1 = document.createElement('h1'); 
        h1.textContent = arr[i].name;
        document.body.appendChild(h1)
    }
}
// working on getting all of the pokemon information
// xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//         const JSONData = xhr.responseText;
//         const data = JSON.parse(JSONData);
//         const fish = data.objects[0];
//         console.log(JSON.stringify(fish));
//         console.log(JSONData)
//         console.log(data.objects[0].pokemon)
//         showData(data.objects[0].pokemon)
//     }
// }
