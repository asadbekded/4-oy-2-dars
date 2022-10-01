let elList = document.querySelector('.js-list')
let elSelect = document.querySelector('.js-select')

pokemons.forEach(function(xalk){
   newItem = document.createElement("li")
   newTitle = document.createElement("h2")
   newSpan = document.createElement("span")
   newImg = document.createElement("img")
   newStr = document.createElement("strong")
   newText = document.createElement("p")
   
   
   newTitle.textContent = xalk.name;
   newSpan.textContent = xalk.num;
   newImg.textContent = xalk.img;
   newImg.src = xalk.img
   newStr.textContent = xalk.spawn_time;
   newText.textContent = xalk.type;
   

   elList.appendChild(newItem)
   newItem.appendChild(newSpan)
   newItem.appendChild(newTitle)
   newItem.appendChild(newImg)
   newItem.appendChild(newStr)
   newItem.appendChild(newText)

})


elSelect.addEventListener('change', function(evt){
   evt.preventDefault()
   var elSelVal = elSelect.value
   let filteredArr = [];

   elList.innerHTML = '';
   pokemons.forEach((el) =>{
      if(el.type.includes(elSelVal)){
        filteredArr.push(el)
      }
   });


   filteredArr.forEach(function(xalk){
   newItem = document.createElement("li")
   newTitle = document.createElement("h2")
   newSpan = document.createElement("span")
   newImg = document.createElement("img")
   newStr = document.createElement("strong")
   newText = document.createElement("p")
   
   
   newTitle.textContent = xalk.name;
   newSpan.textContent = xalk.num;
   newImg.textContent = xalk.img;
   newImg.src = xalk.img
   newStr.textContent = xalk.spawn_time;
   newText.textContent = xalk.type;
   

   elList.appendChild(newItem)
   newItem.appendChild(newSpan)
   newItem.appendChild(newTitle)
   newItem.appendChild(newImg)
   newItem.appendChild(newStr)
   newItem.appendChild(newText)

})
})














// 1-masala
// const users = [
//    {
//      name: 'Jonibek',
//      debt: 10000,
//    },
//    {
//      name: 'Asadbek',
//      debt: 30000,
//    },
//    {
//      name: 'Ravshanjon',
//      debt: 50000,
//    },
//    {
//      name: 'Otabek aka',
//      debt: 1000,
//    },
//    {
//      name: 'Muhammad Ali',
//      debt: 100000,
//    },
//    {
//      name: 'Jaloliddin aka',
//      debt: 5000,
//    },
//  ];


// let qarz = 0
// for (use of users){
//    qarz += use.debt
// }

// console.log(qarz);

// 2-masala

// var numbers = [1, 2, 3, 4, 5];

// var res = numbers.reduce((array, el) =>{
//    array.push(el * 10)
//    return array
// }, [])

// console.log(res);

// -------------------------------------------------3-masala------------------------------------------------------


// var numbers = [1, 2, 3, 4, 5];

// var res = numbers.reduce((num, el) => {
//    return (num += el * 10)
// }, 0)

// console.log(res);

// -------------------------------------------------4-masala------------------------------------------------------


// var array = [1, 2, 3, true, false, undefined, null];

// var res = array.reduce((num, el) => {
//    if(typeof el == 'number'){
//        num += el
//    }
//    return num
// }, 0)

// console.log(res)

// -------------------------------------------------5-masala------------------------------------------------------

// var array = [true, '9', false, undefined, null, '23'];

// var res = array.reduce((num, el) => {
//    if(typeof el == 'number'){
//        num += el
//    }
//    return num
// }, 0)

// console.log(res)

// -------------------------------------------------6-masala------------------------------------------------------


// var array = [1, 2, 3, 4, 5];

// var res = array.reduce((num, el, index) => {
//    num += el * index
//    return num 
// }, 0)


// console.log(res)


// -------------------------------------------------7-masala------------------------------------------------------


// var array = [true, false, true, undefined, null];

// let filtered = array.filter((el) => el == true)

// console.log(filtered.length)




// var array = [true, false, false, undefined, null];

// let filtere = array.filter((el) => el == false)

// console.log(filtere.length)