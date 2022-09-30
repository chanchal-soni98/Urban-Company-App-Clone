let back = document.getElementById('back')
back.addEventListener('click',function(){
    window.location.href='./order.html'
});
    function add_tip(){

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
  {
    "head": "Complete chocolate waxing",
    "image": "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_128,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/luminosity/1657100969960-ef6f74.png",
    "price": " 599",
    "com1": "full harms(chocolate) + (underharms(honey)",
    "com2": "Eyebrow threading"
  },
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

        div.append(img,p,price);
        freq_prod.append(div)

    });
}
freqProduct();
