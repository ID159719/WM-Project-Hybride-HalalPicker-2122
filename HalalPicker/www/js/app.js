var $ = Dom7;
var device = Framework7.getDevice();
var app = new Framework7({
  name: "HalalPicker",
  theme: "auto",
  el: "#app",

  id: "io.framework7.myapp",
  store: store,
  routes: routes,
  input: {
    scrollIntoViewOnFocus: device.cordova && !device.electron,
    scrollIntoViewCentered: device.cordova && !device.electron,
  },
  statusbar: {
    iosOverlaysWebView: true,
    androidOverlaysWebView: false,
  },
  on: {
    init: function () {
      var f7 = this;
      if (f7.device.cordova) {
        cordovaApp.init(f7);
      }
    },
  },
});

var showToastRegisterErrorcrt;
var showToastLoginErrorcrt;
var showToastOrderErrorcrt;
let actualOrderDictionary = {};
let actualRestoId = 0;
let newRestoId;
let infoAlleProducten = [];
let menuid;
let prd_id;
var cstm_id;
var order_id = 0;
var email;
var login_woorden = ["Mirëdita", "Salam", "Kaixo", "Azul", "Zdravo"];
let toHome = 0;
let username;
let password;
var click = 0;

var notificationFull = app.notification.create({
  icon: '<img src="https://image.similarpng.com/very-thumbnail/2020/06/Logo-halal-icon-PNG.png"/>',
  title: "HalalPicker",
  titleRightText: `${getDateTime()}`,
  subtitle: "Product",
  text: "Product has been added",
  closeTimeout: 3000,
});

var notificationOrder = app.notification.create({
  icon: '<img src="https://image.similarpng.com/very-thumbnail/2020/06/Logo-halal-icon-PNG.png"/>',
  title: "HalalPicker",
  titleRightText: `${getDateTime()}`,
  subtitle: "Order",
  text: "Order has been added",
  closeTimeout: 3000,
});

const showToastRegisterError = () => {
  // Create toast
  if (!showToastRegisterErrorcrt) {
    showToastRegisterErrorcrt = app.toast.create({
      text: "Please make sure you fill all the fields!",
      closeButton: true,
      // icon: '<img src="https://image.similarpng.com/very-thumbnail/2021/01/Muslim-traditional-halal-food-icon-on-transparent-background-PNG.png" />',
      closeTimeout: 2500,
    });
  }
  // Open it
  showToastRegisterErrorcrt.open();
};

const showToastLoginError = () => {
  // Create toast
  if (!showToastLoginErrorcrt) {
    showToastLoginErrorcrt = app.toast.create({
      text: "Please make sure you fill all the fields!",
      closeButton: true,
      // icon: '<img src="https://image.similarpng.com/very-thumbnail/2021/01/Muslim-traditional-halal-food-icon-on-transparent-background-PNG.png" />',
      closeTimeout: 2500,
    });
  }
  // Open it
  showToastLoginErrorcrt.open();
};

const showToastOrderError = () => {
  // Create toast
  if (!showToastLoginErrorcrt) {
    showToastOrderErrorcrt = app.toast.create({
      text: "Please make sure you choose a product before you make an order!",
      closeButton: true,
      // icon: '<img src="https://image.similarpng.com/very-thumbnail/2021/01/Muslim-traditional-halal-food-icon-on-transparent-background-PNG.png" />',
      closeTimeout: 2500,
    });
  }
  // Open it
  showToastOrderErrorcrt.open();
};

// naar register page gaan om een nieuwe account te maken
document
  .getElementById("btnRegister")
  .addEventListener("click", { passive: true }, function (e) {
    app.views.main.router.navigate("/register/");
  });

$(document).on("page:init", '.page[data-name="home"]', async function (e) {
  await getApiGebruiker();
});

$(document).on(
  "page:init",
  '.page[data-name="restaurants"]',
  async function (e) {
    initMap();

    await getApiRestaurants();

    if (toHome == 0) {
      toHome += 1;
      try {
        username = document.getElementById("login_username").value;
        password = document.getElementById("login_password").value;
      } catch (error) {
        username = document.getElementById("register_name").value;
        password = document.getElementById("register_password").value;
      }
      await personalInformation(username, password);
    }

    await getEmailIcon(cstm_id);
    addUserIconFromDB();
  }
);

$(document).on("page:init", '.page[data-name="category"]', async function (e) {
  let myID = app.views.main.router.currentRoute.params.id;
  await getApiCategory(myID);

  await getApiPhotosProducts(myID);

  click = 0;

  await getEmailIcon(cstm_id);
  addUserIconFromDB();

  menuid = myID;
  newRestoId = myID;
});

$(document).on(
  "page:init",
  '.page[data-name="productmenu"]',
  async function (e) {
    let myIDcati = app.views.main.router.currentRoute.params.id;
    await getApiProducts(myIDcati);

    await getEmailIcon(cstm_id);
    addUserIconFromDB();
    //check if the restaurant is still the same
    //orders can only be made in 1 restaurant
    //if the restaurant is different, then the actual order is emptied
    if (actualRestoId != newRestoId) {
      //empty the dictionary
      actualOrderDictionary = {};

      //change the actual resto by the new resto
      actualRestoId = newRestoId;
    }

    //product id, needed to initialize the stepper of the product
    prodId1 = document.getElementById("product1").dataset.id;
    prodId2 = document.getElementById("product2").dataset.id;

    //value of the stepper, 0 if the dictionary doesn't have a value for the product
    value1 = actualOrderDictionary[`${prodId1}`]
      ? parseInt(actualOrderDictionary[`${prodId1}`])
      : 0;
    value2 = actualOrderDictionary[`${prodId2}`]
      ? parseInt(actualOrderDictionary[`${prodId2}`])
      : 0;

    //initialize both steppers
    var s1 = app.stepper.create({
      el: `#stepper${prodId1}`,
      step: 1,
      min: 0,
      max: 100,
    });

    var s2 = app.stepper.create({
      el: `#stepper${prodId2}`,
      step: 1,
      min: 0,
      max: 100,
    });

    //set the value on the stepper
    s1.setValue(value1);
    s2.setValue(value2);

    var iconTooltip = app.tooltip.create({
      targetEl: ".icon-tooltip",
      text: "Click on the images <br> to see the ingredients of the product",
    });

    prd_id = myIDcati;
  }
);

$(document).on(
  "page:init",
  '.page[data-name="ingredient"]',
  async function (e) {
    let myIDprd = app.views.main.router.currentRoute.params.id;
    await getApiIngredient(myIDprd);

    await getEmailIcon(cstm_id);
    addUserIconFromDB();
  }
);

$(document).on("page:init", '.page[data-name="order"]', async function (e) {
  await getApiProductsShoppingcart(actualOrderDictionary);
  await getEmailIcon(cstm_id);
  addUserIconFromDB();
});

const confirmproduct = async function () {
  let confirmproduct = document.getElementById("confirmproduct");
  click++;

  if (click == 1) {
    //id van producten op productmenu pagina
    prodId1 = document.getElementById("product1").dataset.id;
    prodId2 = document.getElementById("product2").dataset.id;

    //value van de steppers van eerste en tweede product
    inputProd1 = document.getElementById(`input${prodId1}`).value;
    inputProd2 = document.getElementById(`input${prodId2}`).value;

    if (inputProd1 != 0 || inputProd2 != 0) {
      notificationFull.open();
      addInfoBadge();
    }
    //dictionary neemt prd_id en quantity_product
    actualOrderDictionary[prodId1] = inputProd1;
    actualOrderDictionary[prodId2] = inputProd2;

    confirmproduct.innerText = `Return to the menu`;
  } else {
    app.views.main.router.navigate(`/category/${menuid}/`);
    click = 0;
  }
};

const confirmOrder = async function () {
  //order aanmaken
  await addApiOrder(cstm_id, actualRestoId);

  //order id in de variable order_id plaatsen
  await getApiCurrentOrder();
  //voor elk product, zijn prd_id en quantity doorgegeven met order_id
  for (const [key, value] of Object.entries(actualOrderDictionary)) {
    if (value == 0) {
      continue;
    }
    await addApiProductOrder(value, key, order_id);

    if (key != null && value != null) {
      notificationOrder.open();
    }
  }
  // terug naar restaurant page
  setTimeout(() => {
    app.views.main.router.navigate("/restauranten/");
  }, 2500);
};

const confirminfo = async function () {
  app.views.main.router.navigate(`/productmenu/${prd_id}/`);
};

// Deze methode dient om een badge (info i en 1) toe te voegen als en product toevoegd werd
function addInfoBadge() {
  // add a badge to the fabbutton
  let mainfbt = document.getElementById("mainfbt");
  let infofbt = document.createElement("span");
  infofbt.classList += "badge ";
  infofbt.classList += "color-red";
  infofbt.innerText = "i";
  mainfbt.appendChild(infofbt);

  let shp = document.getElementById("shp");
  let info = document.createElement("span");
  info.classList += "badge ";
  info.classList += "color-red";
  info.innerText = "1";
  shp.appendChild(info);
}

// Deze methode dient om de icon van een user te tonen die al een account heeft
function addUserIconFromDB() {
  let emailIcon = document.querySelectorAll(".emailIcon");
  let hashed_email = MD5(email.toString());
  let emailIconcreated = document.createElement("img");
  emailIconcreated.classList.add("emailIcon");

  emailIcon.forEach((em) => {
    emailIconcreated.src = `https://www.gravatar.com/avatar/${hashed_email}?s=50?d=https://cdn-icons-png.flaticon.com/512/747/747376.png`;
    em.appendChild(emailIconcreated);
  });
}

// Deze functie dient om zowel de datum als de tijd te tonen voor de notifications (product added & order added)
function getDateTime() {
  var today = new Date();
  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  var time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date + " " + time;
  return dateTime;
}
