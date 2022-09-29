let elList = document.querySelector('.js-list')

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
   newText.textContent = xalk.candy;
   

   elList.appendChild(newItem)
   newItem.appendChild(newSpan)
   newItem.appendChild(newTitle)
   newItem.appendChild(newImg)
   newItem.appendChild(newStr)
   newItem.appendChild(newText)

})
