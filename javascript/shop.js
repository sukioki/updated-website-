const stickerHtml = document.getElementById("sticker");
const stickerImg = document.getElementById("stickerImg");
const stickerPrice = document.getElementById("stickerPrice");
let params = new URLSearchParams(document.location.search);
let stickerName = params.get("stickerName");

const data = {
    beidou: {
      name: "Beidou",
      url: "../images/beidou.png",
      price: "8€",
    },
    qiqi: {
      name: "Qiqi",
      url: "../images/qiqi.png",
      price: "8€",
    },
    sucrose: {
      name: "Sucrose",
      url: "../images/sucrose.png",
      price: "8€",
    },
    diluc: {
      name:"Diluc",
      url: "../images/diluc.png",
      price: "8€",
    },
    zhongli: {
      name:"Zhongli",
      url: "../images/zhongli.png",
      price: "8€",
    },
    childe: {
      name:"Childe",
      url: "../images/childe.png",
      price: "8€",
    },
    aether: {
      name:"Aether",
      url: "../images/aether.png",
      price: "8€",
    },
    lumine: {
      name:"Lumine",
      url: "../images/lumine.png",
      price: "8€",
    },
    venti: {
      name:"Venti",
      url: "../images/venti.png",
      price: "8€",
    }
  }

  switch(stickerName) {
    case "beidou":
      stickerImg.setAttribute("src", data.beidou.url)
      stickerPrice.innerText = data.beidou.price
      stickerHtml.innerText = data.beidou.name
      break;
    case "qiqi":
      stickerImg.setAttribute("src", data.qiqi.url)
      stickerPrice.innerText = data.qiqi.price
      stickerHtml.innerText = data.qiqi.name
      break;
    case "sucrose":
      stickerImg.setAttribute("src", data.sucrose.url)
      stickerPrice.innerText = data.sucrose.price
      stickerHtml.innerText = data.sucrose.name
      break;
    case "diluc":
      stickerImg.setAttribute("src", data.diluc.url)
      stickerPrice.innerText = data.diluc.price
      stickerHtml.innerText = data.diluc.name
      break;
    case "zhongli":
        stickerImg.setAttribute("src", data.zhongli.url)
        stickerPrice.innerText = data.zhongli.price
        stickerHtml.innerText = data.zhongli.name
        break;
    case "childe":
        stickerImg.setAttribute("src", data.childe.url)
        stickerPrice.innerText = data.childe.price
        stickerHtml.innerText = data.childe.name
        break;
    case "aether":
        stickerImg.setAttribute("src", data.aether.url)
        stickerPrice.innerText = data.aether.price
        stickerHtml.innerText = data.aether.name
        break;
    case "lumine":
        stickerImg.setAttribute("src", data.lumine.url)
        stickerPrice.innerText = data.lumine.price
        stickerHtml.innerText = data.lumine.name
        break;
    case "venti":
        stickerImg.setAttribute("src", data.venti.url)
        stickerPrice.innerText = data.venti.price
        stickerHtml.innerText = data.venti.name
    default:
      console.log("nothing...")
  }
  
// Quantity button
// Grab buttons from html using ID
const minusBtn = document.getElementById("minus")
const plusBtn = document.getElementById("plus")
// Grab quantity text element
const quantityText = document.getElementById("quantity");

// Set the minimum/maximum quantity
const minQuantity = 1;
const maxQuantity = 10;

// Track current value
let quantityValue = minQuantity;

// Button event listeners
plusBtn.addEventListener("click", addQuantity)
minusBtn.addEventListener("click", subtractQuantity)

// Plus button is clicked
function addQuantity() {
  if(quantityValue < maxQuantity) {
    quantityValue += 1;
    quantityText.innerText = quantityValue
  }
}

// Minus button is clicked
function subtractQuantity() {
  if(quantityValue > minQuantity) {
    quantityValue -= 1;
    quantityText.innerText = quantityValue
  }
}