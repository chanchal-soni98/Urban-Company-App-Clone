let url = "https://lit-wildwood-25489.herokuapp.com/api/vas"

let getData = async () => {

    let res = await fetch(url)
    res= await res.json();
    console.log(res)
    render(res)

}
getData()

let render = (data)=> {
    let cont = document.getElementById("container1")
    cont.innerHTML =null;

    data.forEach(({ head, price , rate , com1 , com2, com3 })=> {
        let div = document.createElement("div")
        let h2 = document.createElement("h2")
        h2.innerText =head;
        let h5= document.createElement("h5")
        h5.innerText =price;

        let h6 = document.createElement("h5")
        h6.innerText = rate;
        let h = document.createElement("hr")
        h.setAttribute("id","womah")
        

        let p1= document.createElement("p")
        p1.innerText = com1;
        let p2= document.createElement("p")
        p2.innerText = com2;
        let p3= document.createElement("p3")
        p3.innerText =com3;

        div.append(h2 , h5, h6,h , p1 ,p2 , p3)
        cont.append(div)
    })

}