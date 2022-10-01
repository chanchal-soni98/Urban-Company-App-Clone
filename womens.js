

// let arr = JSON.parse(localStorage.getItem("user")) || []
let url = "https://lit-wildwood-25489.herokuapp.com/api/vas"

//  let cart_arr = JSON.parse(localStorage.getItem("cart"))||[]
 //console.log(cart_arr);

let getData = async () => {

    let res = await fetch(url)
    res = await res.json();
    console.log('res:', res)
   
    render_dom(res)

}
getData()

let render_dom = (data) => {
    let cont = document.getElementById("container1")
    cont.innerHTML = null;

    data.forEach((el , id) => {
   // console.log(el.head)
        let div = document.createElement("div")
        div.setAttribute("class", "womadiv")
        let A9 = document.createElement("h4")
        A9.innerText = el.package;
        A9.setAttribute("class","wicket")
        
        let h2 = document.createElement("h2")
        h2.innerText = el.title;
        h2.setAttribute("class","he")
        let h5 = document.createElement("h5")
        h5.innerText = el.price;
        h5.setAttribute("class","phe")

        let h6 = document.createElement("h5")
        h6.innerText = el.rate;
        h6.setAttribute("class","his")
        let h = document.createElement("hr")
        h.setAttribute("class", "womah")


        let p1 = document.createElement("p")
        p1.innerText = el.Last;
        p1.setAttribute("class","his")
        let p2 = document.createElement("p")
        p2.innerText = el.Last_1;
        p2.setAttribute("class","his")
        let p3 = document.createElement("p")
        p3.innerText = el.com3;
        p3.setAttribute("class","his")
        let btn = document.createElement("button")
        btn.innerText = "Add"
        btn.setAttribute("class", "btn1")
        btn.addEventListener("click", function () {
            cart_fun(el, id)
        })
        let h8 = document.createElement("hr")
        h.setAttribute("class", "womah2")

        div.append( A9 ,h2, h5, btn, h6, h, p1, p2, p3, h8)

        cont.append(div)

    })

    let cartLs = JSON.parse(localStorage.getItem("cart")) || []
   
    let cart_fun = (el , id) => {
        
       
        
        localStorage.setItem("cart", JSON.stringify(el))
        alert("item added successfully")
         
    

        let fin = document.getElementById("woma_final")
        fin.setAttribute("class","last_b")
        fin.innerHTML = cartLs.price;
        let msg = document.getElementById("womamsg")
        msg.setAttribute("class","womasree")
        msg.innerText ="Congratulations! Rs450 saved so far!"


        // let obj = {
        //     package: el.package,
        //     title: el.title,
        //     price: el.price,
        //     id: el.id,
        //   };
        //   let iscartAdded = false;
        //   for (let i = 0; i < cartLs.length; i++) {
        //     if (cartLs[i].id === obj.id) {
        //       alert("product already in the Cart");
        //       iscartAdded = true;
        //       break;
        //     }
        //   }
        //   if (iscartAdded === false) {
        
        //     cartLs.push(el);
        //     alert("product Added Successfully");
        //     localStorage.setItem("cart", JSON.stringify(cartLs));
          }
    

    }

    // let gocart = () => {
    //     window.location.href="";
    // }












