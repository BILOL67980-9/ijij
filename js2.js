const box=document.querySelector(".div1")
let  Array=[{
  img:"https://image.winudf.com/v2/image/bmV0LndhbGxhcGEuc3BhY2Vfc2NyZWVuc2hvdHNfMl84Y2M1Mzc5OQ/screen-1.jpg?fakeurl=1&type=.jpg",
  tle:"Poste vone",
  p:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam reprehenderit ducimus modi quo.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam reprehenderit ducimus modi quo.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam reprehenderit ducimus modi quo.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam reprehenderit ducimus modi quo.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam reprehenderit ducimus modi quo.Lorem ipsum, dolor sit amet consectetur adipisicing elit. <span class="s"> Ipsam reprehenderit ducimus modi quo.</span>',
  button:'No internet',
  p1:'2,65$'
},
{
    img:"https://image.winudf.com/v2/image/bmV0LndhbGxhcGEuc3BhY2Vfc2NyZWVuc2hvdHNfMl84Y2M1Mzc5OQ/screen-1.jpg?fakeurl=1&type=.jpg",
    tle:"Poste vone",
    p:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam reprehenderit ducimus modi quo.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam reprehenderit ducimus modi quo.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam reprehenderit ducimus modi quo.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam reprehenderit ducimus modi quo.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam reprehenderit ducimus modi quo.Lorem ipsum, dolor sit amet consectetur adipisicing elit. <span class="s"> Ipsam reprehenderit ducimus modi quo.</span>',
    button:'No internet',
  p1:'2,65$'

  },
  {
    img:"https://image.winudf.com/v2/image/bmV0LndhbGxhcGEuc3BhY2Vfc2NyZWVuc2hvdHNfMl84Y2M1Mzc5OQ/screen-1.jpg?fakeurl=1&type=.jpg",
    tle:"Poste vone",
    p:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam reprehenderit ducimus modi quo.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam reprehenderit ducimus modi quo.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam reprehenderit ducimus modi quo.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam reprehenderit ducimus modi quo.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam reprehenderit ducimus modi quo.Lorem ipsum, dolor sit amet consectetur adipisicing elit.<span class="s"> Ipsam reprehenderit ducimus modi quo.</span>',
    button:'No internet',
  p1:'2,65$'
    
  }
]
function nme(){
  Array.forEach((e,i) => {
    let car=document.createElement("div")
    let  image= document.createElement("img")
    let  h2= document.createElement("h3")
    let  h1= document.createElement("h2")
    let b=document.createElement('button')
    b.innerHTML=e.button
    let p1=document.createElement('p')
    p1.classList.add('p1')
    let  p= document.createElement("p"+i)
    image.src= e.img
    h2.innerHTML= e.h1
    h1.innerHTML= e.tle
    p.innerHTML= e.p
    p1.innerHTML=e.p1
    image.classList.add("im")
    h2.classList.add("h2")
    h1.classList.add("h1")
    car.classList.add("i")
    b.classList.add('b')
    car.append(image,h1,p,b,p1)
    box.appendChild(car)
  });}
nme()