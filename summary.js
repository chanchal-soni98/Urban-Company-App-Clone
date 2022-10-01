let back = document.getElementById('back')
back.addEventListener('click',function(){
    window.location.href='./offer.html'
});

function next_page(){
    window.location.href='./address.html'
}
let cartLs = JSON.parse(localStorage.getItem("cart")) || [];
let totalPrice = document.getElementById('totalPrice');


let count = 0;
for(let i=0;i<cartLs.length;i++){
    count+=(+cartLs[i].price)
    // count+=(Number(cartLs[i].price)*(cartLs[i].quantity));
}
totalPrice.innerText = count;


let total = document.getElementById('total');
total.innerText = count+70
let products = document.getElementById('products');
let totalCount=1;

let showAmt = document.getElementById('showAmt');
showAmt.innerText = +(total.innerText)
let tip1 = document.querySelector('#tip1').innerText
function add_tip1(){
    showAmt.innerText = +(total.innerText)+(+tip1);
}
let tip2 = document.querySelector('#tip2').innerText
function add_tip2(){
    showAmt.innerText = +(total.innerText)+(+tip2);
}
let tip3 = document.querySelector('#tip3').innerText
function add_tip3(){
    showAmt.innerText = +(total.innerText)+(+tip3);
}
let tip4 = document.querySelector('#tip4').innerText
function add_tip4(){
    showAmt.innerText = +(total.innerText)+(+tip4);
};
// let amt_obj = JSON.parse(localStorage.getItem('amt_obj'));
// amt_obj = showAmt.innerText;
// localStorage.setItem('amt_obj',JSON.stringify(amt_obj))


function renderData(){
  products.innerHTML=null;
  cartLs.forEach((el,i)=>{
    let div = document.createElement('div');
    let h4 = document.createElement('h4');
    h4.innerText = el.title;
    let div1 = document.createElement('div');
    div1.setAttribute('class','headbtn');
    let div2 = document.createElement('div');
    div2.setAttribute('class','div2')
    let minus = document.createElement('button');
    minus.setAttribute('class','minus')
    minus.innerText="-"
    let plus = document.createElement('button');
    plus.setAttribute('class','plus')
    plus.innerText="+";
    let counter = document.createElement('span');
    counter.setAttribute('class','span')
    counter.innerText = el.quantity;
    counter.setAttribute('id','quantity')
    minus.addEventListener('click',function(){
        decrement(i)
    });
    plus.addEventListener('click',function(){
        increment(i)
    })
    
    div2.append(minus,counter,plus)
    div1.append(h4,div2)

   
    let com1 = document.createElement('p');
    com1.innerText = el.offer;

    let com2 = document.createElement('p');
    com2.innerText = el.Last;
    let com3 = document.createElement('p');
    com3.innerText = el.Last_1;
    let price = document.createElement('p');
    price.innerText = +el.price;

    let remove_btn = document.createElement('button');
    remove_btn.innerText="Remove";
    remove_btn.setAttribute('class','remove');
    remove_btn.addEventListener('click',function(){
        removerProduct(i)
    })

    div.append(div1,com1,com2,com3,price,remove_btn);
    products.append(div);
  });
}
renderData();


removerProduct = (i)=>{
    cartLs.splice(i,1);
    renderData(cartLs);
    localStorage.setItem('cart',JSON.stringify(cartLs));
    renderData(cartLs);
    
}

let decrement = (i)=>{
    if(cartLs[i].quantity===1){
        return;
    }
    // let quant = --cartLs[i].quantity;
     cartLs[i].quantity--;
    
    //  console.log('q',quant);
    renderData()
    // localStorage.setItem('cart',JSON.stringify(cartLs))
}
let increment = (i)=>{
    if(cartLs[i].quantity===3){
        return;
    }
    cartLs[i].quantity++
    // let quant=++cartLs[i].quantity;
    //console.log('q',quant);
    // console.log(totalCount);
    renderData()
}

     let freq_prod = document.getElementById('freq_prod');
    let data = [{
    "head": "Glow Getter",
    "image": "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_128,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/luminosity/1657524725157-0eea37.png",
    "price": "1049",
    "com1": "Crave beauty dazzling dimond facial",
    "com2": "Upper lip threading"
  },
  {
    "head": "Mani-pedi special",
    "image": "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_128,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/luminosity/1657524725157-0eea37.png",
    "price": " 899",
    "com1": "Deluxe manicure(4-step)",
    "com2": "Eyebrow threading"
  },
  // {
  //   "head": "Complete chocolate waxing",
  //   "image": "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_128,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/luminosity/1657100969960-ef6f74.png",
  //   "price": " 599",
  //   "com1": "full harms(chocolate) + (underharms(honey)",
  //   "com2": "Eyebrow threading"
  // },
  {
    "head": "Complete honey waxing",
    "image": "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_128,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/luminosity/1657100965594-2ddc55.png",
    "price": " 1799",
    "com1": "full legs honey",
    "com2": "Eyebrow threading"
  }];
  function freqProduct(){
    freq_prod.innerHTML = null;
    data.forEach((el,i)=>{
        let div = document.createElement('div');
        let img = document.createElement('img');
        img.src=el.image;

        let p = document.createElement('p');
        p.innerText = el.com1+el.com2;

        let price = document.createElement('p');
        price.innerText = el.price;

        div.append(img,p);
        freq_prod.append(div)

    });
}
freqProduct()
