let imglink = [
  "https://s3-ap-southeast-1.amazonaws.com/urbanclap-prod/images/growth/home-screen/1624984376804-17cf91.jpeg",
  "https://s3-ap-southeast-1.amazonaws.com/urbanclap-prod/images/growth/home-screen/1627307561677-63fcba.jpeg",
  "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto,w_600,dpr_1,fl_progressive:steep,q_auto/images/growth/luminosity/1655295307011-10fa33.jpeg",
  "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto,w_736,dpr_1,fl_progressive:steep,q_auto/images/growth/home-screen/1623415851472-c87890.jpeg",
  "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto,w_736,dpr_1,fl_progressive:steep,q_auto/images/growth/home-screen/1623414008331-e484c6.jpeg",
  "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto,w_736,dpr_1,fl_progressive:steep,q_auto/images/growth/home-screen/1623414012701-0cf225.jpeg",
];

let crauser = document.getElementById("crauser");
let leftbtn = document.getElementById("left-btn");
let rightbtn = document.getElementById("right-btn");

let imgstate = 0;

rightbtn.addEventListener("click", function () {
  imgstate++;
  if (imgstate === imglink.length) {
    imgstate = 0;
  }
  crauser.src = imglink[imgstate];
});
leftbtn.addEventListener("click", function () {
  imgstate--;
  if (imgstate < 0) {
    imgstate = imglink.length - 1;
  }
  crauser.src = imglink[imgstate];
}); // slider

//append
const url = "https://serene-fjord-39766.herokuapp.com/api/UrbanCompany";

// let cartLs = JSON.parse(localStorage.getItem("product-page")) || [];

let getData = async () => {
  let res = await fetch(url);
  res = await res.json();
  renderData(res);
  //   console.log(res[0].id);
};

// { package, title, rating, price, id, offer, Last, Last_1,}

getData();
let renderData = (data) => {
  let cont = document.getElementById("uc-cont-package");
  cont.innerHTML = null;
  data.forEach((el, id) => {
    let div1 = document.createElement("div");

    let pack = document.createElement("p");
    pack.style.color = "#07794C";
    pack.style.fontWeight = "bold";
    pack.style.marginBottom = "10px";
    pack.innerText = el.package;

    let tit = document.createElement("h3");
    tit.style.marginBottom = "5px";
    tit.innerText = el.title;

    let rat = document.createElement("p");
    rat.style.marginBottom = "5px";
    rat.innerText = "Rating :" + el.rating;

    let pri = document.createElement("h3");
    pri.style.marginBottom = "5px";
    pri.innerText = el.price;

    let off = document.createElement("p");
    off.innerText = el.offer;

    let btn = document.createElement("button");
    btn.setAttribute("class", "uc_div_button");
    btn.style.marginTop = "-55px";
    btn.innerText = "Add";
    btn.addEventListener("click", function () {
      AddToCart(el, id);
    });

    div1.append(pack, tit, rat, pri, off, btn);

    let div2 = document.createElement("div");
    let hrc1 = document.createElement("hr");
    hrc1.setAttribute("class", "hrc1");

    div2.append(hrc1);

    let div3 = document.createElement("div");

    let l1 = document.createElement("p");
    l1.style.marginBottom = "5px";
    l1.innerText = el.Last;

    let l2 = document.createElement("p");
    l2.setAttribute("class", "uc_div_l2");
    l2.innerText = el.Last_1;

    div3.append(l1, l2);
    cont.append(div1, div2, div3);
  });
};

let cartLs = JSON.parse(localStorage.getItem("cart")) || [];
// let AddToCart = (el) => {
//   let obj = {
//     package: el.package,
//     title: el.title,
//     price: el.price,
//   };
//   cartLs.push(obj);
//   console.log(obj);
//   localStorage.setItem("product-page", JSON.stringify(cartLs));
//   // console.log(cartLs);
// };

function AddToCart(el, id) {

  let obj = {
    package: el.package,
    title: el.title,
    price: el.price,
    id: el.id,
  };
  let iscartAdded = false;
  for (let i = 0; i < cartLs.length; i++) {
    if (cartLs[i].id === obj.id) {
      alert("product already in the Cart");
      iscartAdded = true;
      break;
    }
  }
  if (iscartAdded === false) {
    cartLs.push(el);
    alert("product Added Successfully");
    localStorage.setItem("cart", JSON.stringify(cartLs));
  }
}
