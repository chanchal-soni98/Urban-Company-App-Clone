

// let arr = JSON.parse(localStorage.getItem("user")) || []
let url = "https://lit-wildwood-25489.herokuapp.com/api/vas"

 let cart_arr = JSON.parse(localStorage.getItem("cart"))||[]
 //console.log(cart_arr);

let getData = async () => {

    let res = await fetch(url)
    res = await res.json();
   
    render_dom(res)

}
getData()

let render_dom = (data) => {
    let cont = document.getElementById("container1")
    cont.innerHTML = null;

    data.forEach((el) => {
   // console.log(el.head)
        let div = document.createElement("div")
        div.setAttribute("class", "womadiv")
        let h2 = document.createElement("h2")
        h2.innerText = el.head;
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
        p1.innerText = el.com1;
        p1.setAttribute("class","his")
        let p2 = document.createElement("p")
        p2.innerText = el.com2;
        p2.setAttribute("class","his")
        let p3 = document.createElement("p")
        p3.innerText = el.com3;
        p3.setAttribute("class","his")
        let btn = document.createElement("button")
        btn.innerText = "add"
        btn.setAttribute("id", "btn1")
        btn.addEventListener("click", function () {
            cart_fun(el)
        })
        let h8 = document.createElement("hr")
        h.setAttribute("id", "womah2")

        div.append(h2, h5, btn, h6, h, p1, p2, p3, h8)

        cont.append(div)

    })
    let cart_fun = (el) => {
        
        //")
        //console.log(data)
        //console.log(data.id)
        //let cart = JSON.parse(localStorage.getItem("cart"))
        //console.log(cart)
        // let user=cart_arr
        // if (user.includes(el)) {
        //     alert("Item already in the cart")
        // }
        // else {

        //     alert("successfully added to cart")
        //     // console.log(cart_arr)
        // }
        // let cart_arr = JSON.parse(localStorage.getItem("cart"));
        // let flag = false;
        // cart_arr.map((el)=> {
        //     if(el.head === data.head){
        //         flag=true;
                
        //     }
        // })
        // if(flag){
        //     alert("allready  in the cart")
        //     return
        // }
        // cart_arr.push(el)
        
        // console.log(cart_arr)
        
        localStorage.setItem("cart", JSON.stringify(el))
        alert("item added successfully")


        let fin = document.getElementById("woma_final")
        fin.setAttribute("class","last_b")
        fin.innerHTML = cart_arr.price;
    }

}









