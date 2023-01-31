console.log("Successfully Connnected");

let howmany = [];
let subTotal = [];
let itemEachPrice = 0;

function itemSelected(item, price) {
  for (i = 0; i < 3; i++) {
    document.getElementsByClassName("item-count")[i].style.display = "none";
  }
  document.getElementsByClassName(item)[0].style.display = "block";
  itemEachPrice = price;
  howmany = [];
  console.log(itemEachPrice);
}

function keyClick(num) {
  howmany.push(num);
  //    howmany.push(num);
  console.log(howmany);
}

function subtotal() {
  console.log(howmany);
  let totalNumber = parseInt(howmany.join(""));
  subTotal.push(totalNumber * itemEachPrice);
  console.log(subTotal);
  for (i = 0; i < 3; i++) {
    document.getElementsByClassName("item-count")[i].style.display = "none";
  }
  //   let itemListPara = document.createElement("p");
  //   document.getElementById("subtotalList").appendChild(itemListPara);

  //   for (i = 0; i < subTotal.length; i++) {
  //     document.getElementById("subtotalList").createElement('div') = "$ " + subTotal[i];
  //   }
}

function clearNum() {
  howmany = [];
  console.log("clear clicked");
}
