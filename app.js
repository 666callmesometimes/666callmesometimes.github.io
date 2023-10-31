const filterBtn = document.querySelector("#filterBtn");
const content = document.querySelector("#content");

let items = [
    {
        "name": "Champion x MoMA Hoodie",
        "category": "hoodies",
        "price": "23",
        "id": "0",
        "link": "https://weidian.info/x5jqy",
        "qc": "https://qc.photos/qc?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fid%3D637571071263",
    },
    {
        "name": "Nike Air Jordan 4 Collection",
        "category": "shoes",
        "price": "70",
        "id": "1",
        "link": "https://weidian.info/2g6yj",
        "qc": "https://qc.photos/qc?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D5416187188",
        "collection": true,
    },
    {
        "name": "Nike Air Force 1 White",
        "category": "shoes",
        "price": "17",
        "id": "2",
        "link": "https://weidian.info/76wyw",
        "qc": "https://qc.photos/qc?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D4435731044",
    },
    {
        "name": "Revenge T-shirts (different colors)",
        "category": "tshirts",
        "price": "16",
        "id": "3",
        "link": "https://weidian.info/3wfnk",
        "qc": "https://qc.photos/qc?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fid%3D638679698108",
        "collection": true,
    },
    {
        "name": "Stone Island Ribbed Sweater",
        "category": "hoodies",
        "price": "26",
        "id": "4",
        "link": "https://weidian.info/j9f6e",
        "qc": "https://qc.photos/qc?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fid%3D722499443169",
    },
    {
        "name": "Corteiz Four Star T-shirt",
        "category": "tshirts",
        "price": "11",
        "id": "5",
        "link": "https://weidian.info/kgc94",
        "qc": "https://qc.photos/qc?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D6495055576",
    },
    {
        "name": "Stussy Fuzy Dice T-shirt",
        "category": "tshirts",
        "price": "14",
        "id": "6",
        "link": "https://weidian.info/srf8j",
        "qc": "https://qc.photos/qc?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fid%3D672640433127",
    },
    {
        "name": "CPFM x Stussy White T-shirt",
        "category": "tshirts",
        "price": "10",
        "id": "7",
        "link": "https://weidian.info/ase2q",
        "qc": "https://qc.photos/qc?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fid%3D650805150114",
    },
    {
        "name": "VETEMENTS T-shirts (different colors)",
        "category": "tshirts",
        "price": "11",
        "id": "8",
        "link": "https://weidian.info/5f6mb",
        "qc": "https://qc.photos/qc?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fid%3D701900167382",
        "collection": true,
    },
    {
        "name": "Enfants Riches Deprimes Backpack",
        "category": "accessories",
        "price": "43",
        "id": "9",
        "link": "https://weidian.info/5sga6",
        "qc": "https://qc.photos/qc?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fid%3D729332494393",
    },
    {
        "name": "NUMBER(N)INE My Jeweler T-shirt",
        "category": "tshirts",
        "price": "10",
        "id": "10",
        "link": "https://weidian.info/txgrf",
        "qc": "https://qc.photos/qc?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fid%3D675138161675",
    },
    {
        "name": "The North Face 1996 Nuptse Puffer",
        "category": "jackets",
        "price": "62",
        "id": "11",
        "link": "https://weidian.info/yjf7x",
        "qc": "https://qc.photos/qc?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D6782724019",
    },
    {
        "name": "CPFM 'ye must be Born again' Hoodies (different colors)",
        "category": "hoodies",
        "price": "13",
        "id": "12",
        "link": "https://weidian.info/3ran5",
        "qc": "https://qc.photos/qc?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fid%3D652795879259",
        "collection": true,
    },
    {
        "name": "Dr. Martens three-hole derbys",
        "category": "shoes",
        "price": "14",
        "id": "13",
        "link": "https://weidian.info/kbrrz",
        "qc": "https://qc.photos/qc?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D4296228263",
    },
];


        for(let i = 0; i<items.length; i ++){
            let item = document.createElement("div");
            item.classList.add("item");
            content.appendChild(item);

            let itemLink = document.createElement("a");
            itemLink.href = items[i].link;
            itemLink.target = "_blank";
            item.appendChild(itemLink);

            let itemImage = document.createElement("div");
            itemImage.style.backgroundImage = "url(img/"+items[i].id+".png)";
            if(items[i].collection == true){
                itemImage.addEventListener('mouseenter', () => {
                    itemImage.style.backgroundImage = "url(img/" + items[i].id + ".gif)";
                  });
                  itemImage.addEventListener('mouseleave', () => {
                    itemImage.style.backgroundImage = "url(img/" + items[i].id + ".png)";
                  });
            }
            itemImage.classList.add("itemImg");
            //itemImage.style.backgroundColor = "#777";
            itemLink.appendChild(itemImage);

            let itemName = document.createElement("p");
            itemName.innerText = items[i].name;
            item.appendChild(itemName);

            let itemQc = document.createElement("a");
            itemQc.href = items[i].qc;
            itemQc.title = "Get QC";
            itemQc.target = "_blank";
            itemName.appendChild(itemQc);

            let qcImage = document.createElement("img");
            qcImage.classList.add("qc");
            qcImage.src = "img/link.png";
            itemQc.appendChild(qcImage);

            let itemPrice = document.createElement("h3");
            itemPrice.innerText = "$" + items[i].price;
            item.appendChild(itemPrice);
        }

filterBtn.addEventListener('click', filterItems);

function filterItems() {
    content.innerHTML = "";
    let price = document.querySelector("#price").value;
    let category = document.querySelector("#category").value;

    console.log(price + " " + category);
    let backup = items;
    if(price == "default"){
       function sortByPrice(a, b){
        return a.id - b.id;
       } 
    }else if(price == "lowtohigh"){
        function sortByPrice(a, b) {
            return a.price - b.price;
        }
    }else if(price == "hightolow"){
        function sortByPrice(a, b) {
            return b.price - a.price;
        }
    }
    items.sort(sortByPrice);

    for(let i = 0; i < items.length; i ++){
        if(category == items[i].category){
            let item = document.createElement("div");
            item.classList.add("item");
            content.appendChild(item);

            let itemLink = document.createElement("a");
            itemLink.href = items[i].link;
            itemLink.target = "_blank";
            item.appendChild(itemLink);

            let itemImage = document.createElement("div");
            itemImage.style.backgroundImage = "url(img/"+items[i].id+".png)";
            if(items[i].collection == true){
                itemImage.addEventListener('mouseenter', () => {
                    itemImage.style.backgroundImage = "url(img/" + items[i].id + ".gif)";
                  });
                  itemImage.addEventListener('mouseleave', () => {
                    itemImage.style.backgroundImage = "url(img/" + items[i].id + ".png)";
                  });
            }
            itemImage.classList.add("itemImg");
            //itemImage.style.backgroundColor = "#777";
            itemLink.appendChild(itemImage);

            let itemName = document.createElement("p");
            itemName.innerText = items[i].name;
            item.appendChild(itemName);

            let itemQc = document.createElement("a");
            itemQc.href = items[i].qc;
            itemQc.title = "Get QC";
            itemQc.target = "_blank";
            itemName.appendChild(itemQc);

            let qcImage = document.createElement("img");
            qcImage.classList.add("qc");
            qcImage.src = "img/link.png";
            itemQc.appendChild(qcImage);

            let itemPrice = document.createElement("h3");
            itemPrice.innerText = "$" + items[i].price;
            item.appendChild(itemPrice);

        }
        else if(category == "default"){
            let item = document.createElement("div");
            item.classList.add("item");
            content.appendChild(item);

            let itemLink = document.createElement("a");
            itemLink.href = items[i].link;
            itemLink.target = "_blank";
            item.appendChild(itemLink);

            let itemImage = document.createElement("div");
            itemImage.style.backgroundImage = "url(img/"+items[i].id+".png)";
            if(items[i].collection == true){
                itemImage.addEventListener('mouseenter', () => {
                    itemImage.style.backgroundImage = "url(img/" + items[i].id + ".gif)";
                  });
                  itemImage.addEventListener('mouseleave', () => {
                    itemImage.style.backgroundImage = "url(img/" + items[i].id + ".png)";
                  });
            }
            itemImage.classList.add("itemImg");
            //itemImage.style.backgroundColor = "#777";
            itemLink.appendChild(itemImage);

            let itemName = document.createElement("p");
            itemName.innerText = items[i].name;
            item.appendChild(itemName);

            let itemQc = document.createElement("a");
            itemQc.href = items[i].qc;
            itemQc.title = "Get QC";
            itemQc.target = "_blank";
            itemName.appendChild(itemQc);

            let qcImage = document.createElement("img");
            qcImage.classList.add("qc");
            qcImage.src = "img/link.png";
            itemQc.appendChild(qcImage);

            let itemPrice = document.createElement("h3");
            itemPrice.innerText = "$" + items[i].price;
            item.appendChild(itemPrice);
        }
    }

}


const menuBtn = document.querySelector("#menuBtn");
const menu = document.querySelector("nav");

menuBtn.addEventListener('click' , function() {
menu.classList.toggle('off');
});