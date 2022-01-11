let baseApiAddress = "https://www.moroccan-spicy-secrets.be/project/api/";

let opties = {
  method: "POST",
  mode: "cors",
  cache: "no-cache",
  credentials: "omit",
};

// Deze methode dient om de een user aan te maken
const addApiUser = async function () {
  let url = baseApiAddress + "USERADD.php";

  let name = document.getElementById("register_name");
  let pswd = document.getElementById("register_password");
  let gsm = document.getElementById("register_gsm");
  let email = document.getElementById("register_email");

  if (name.value == "") {
    showToastRegisterError();
    return;
  } else if (pswd.value == "") {
    showToastRegisterError();
    return;
  } else if (gsm.value == "") {
    showToastRegisterError();
    return;
  } else if (email.value == "") {
    showToastRegisterError();
    return;
  }

  app.views.main.router.navigate("/restauranten/");

  opties.body = JSON.stringify({
    cstm_username: document.getElementById("register_name").value,
    cstm_password: document.getElementById("register_password").value,
    cstm_gsm: document.getElementById("register_gsm").value,
    cstm_email: document.getElementById("register_email").value,
    format: "json",
  });

  fetch(url, opties)
    .then(function (response) {})

    .catch(function (error) {
      console.log(error);
    });
};

// Dient om een order toe te voegen aan de hand van de cstm_id en de restaurant_id
const addApiOrder = async function (customer_cstm_id, restaurant_rst_id) {
  let url = baseApiAddress + "ORDERADD.php";

  let totprice = document.getElementById("price");

  // Indien er geen producten in de order zijn dan moet er een error opkomen
  if (totprice.innerText == "0") {
    showToastOrderError();
  }

  opties.body = JSON.stringify({
    ord_total_price: document.getElementById("price").innerText,
    customer_cstm_id: customer_cstm_id,
    restaurant_rst_id: restaurant_rst_id,
    format: "json",
  });

  await fetch(url, opties)
    .then(function (response) {})
    .then(function (responseData) {})
    .catch(function (error) {
      console.log(error);
    });
};

// Deze methode dient om een product in de laatste order te plaatsen
const addApiProductOrder = async function (quantity_product, prd_id, order_id) {
  let url = baseApiAddress + "PRODUCTORDERADD.php";

  opties.body = JSON.stringify({
    quantity_product: quantity_product,
    order_ord_id: order_id,
    product_ord_id: prd_id,
    format: "json",
  });

  await fetch(url, opties)
    .then(function (response) {})
    .then(function (responseData) {})
    .catch(function (error) {
      console.log(error);
    });
};

// GET API'S

// GETUSER
// Deze methode dient om te kijken welke gebruiker zich inlogt
const getApiGebruiker = async function () {
  let url = baseApiAddress + "USERGET.php";

  opties.body = JSON.stringify({
    cstm_username: document.getElementById("login_username").value,
    cstm_password: document.getElementById("login_password").value,
    format: "json",
  });

  fetch(url, opties)
    .then(function (response) {
      return response.json();
    })

    .then(function (responseData) {
      let list = responseData.data;
      if (list.length > 0) {
        for (i = 0; i < list.length; i++) {
          if (
            document.getElementById("login_username").value ==
              list[i].cstm_username &&
            document.getElementById("login_password").value ==
              list[i].cstm_password
          ) {
            app.views.main.router.navigate("/restauranten/");
          }
        }
      } else {
        showToastLoginError();
      }
    })

    .catch(function (error) {
      console.log(error);
    });
};

// GET emailIcon
// Deze methode dient om de icon van de email van de ingelogde user te tonen
const getEmailIcon = async function (id) {
  let url = baseApiAddress + "EMAILICONGET.php";
  opties.body = JSON.stringify({
    cstm_id: id,
    format: "json",
  });

  await fetch(url, opties)
    .then(function (response) {
      return response.json();
    })

    .then(function (responseData) {
      cstm_email = responseData.data[0].cstm_email;
      email = cstm_email;
    })

    .catch(function (error) {
      console.log(error);
    });
};

// GET PERSONALINFORMATION
// Deze methode dient om de personele informatie over de user te tonen
const personalInformation = async function (cstm_username, cstm_password) {
  let url = baseApiAddress + "USERGET.php";
  opties.body = JSON.stringify({
    cstm_username: cstm_username,
    cstm_password: cstm_password,
    format: "json",
  });

  await fetch(url, opties)
    .then(function (response) {
      return response.json();
    })

    .then(function (responseData) {
      let list = responseData.data;
      let ullist_personal_information = document.querySelector(
        ".ullist_personal_information"
      );
      if (list.length > 0) {
        for (let i = 0; i < list.length; i++) {
          ullist_personal_information.insertAdjacentHTML(
            "beforeend",
            `
            <li>
            <div class="item-content">
              <div class="item-inner">
                <div class="item-title">
                  <div class="item-header">Name</div>
                 ${list[i].cstm_username}
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="item-content">
              <div class="item-inner">
                <div class="item-title">
                  <div class="item-header">Phone</div>
                  ${list[i].cstm_gsm}
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="item-content">
              <div class="item-inner">
                <div class="item-title">
                  <div class="item-header">Email</div>
                  ${list[i].cstm_email}
                </div>
              </div>
            </div>
          </li>
          `
          );
          cstm_id = list[i].cstm_id;
        }
      } else {
        return false;
      }
    })

    .catch(function (error) {
      console.log(error);
    });
};

// GET RESTAURANTS
// Deze methode dient om alle restauranten te tonen
const getApiRestaurants = async function () {
  let url = baseApiAddress + "RESTAURANTGET.php";

  opties.body = JSON.stringify({
    format: "json",
  });

  await fetch(url, opties)
    .then(function (response) {
      return response.json();
    })
    .then(function (responseData) {
      let list = responseData.data;

      let ullist_restauranten = document.getElementById("ullistrestauranten");
      if (list.length > 0) {
        for (let i = 0; i < list.length; i++) {
          ullist_restauranten.insertAdjacentHTML(
            "beforeend",
            `<li>
                <a href="/category/${list[i].rst_id}/" class="item-link item-content">
                  <div class="item-media">
                    <img class="images_restaurant" src="${list[i].rst_image_restaurant}"/>
                  </div>
                  <div class="item-inner">
                    <div class="item-title">
                    <div clas="item-header">${list[i].rst_name}</div>${list[i].rst_street}
                    </div>
                  </div>
                </a>
            </li>
            `
          );
        }
      } else {
        return false;
      }
    })

    .catch(function (error) {
      console.log(error);
    });
};

// GET CATEGORY
// Deze methode dient om alle category's van een bepaalde restaurant te tonen
const getApiCategory = async function (rst_id) {
  let url = baseApiAddress + "CATEGORYGET.php";
  opties.body = JSON.stringify({
    rst_id: rst_id,
    format: "json",
  });

  await fetch(url, opties)
    .then(function (response) {
      return response.json();
    })
    .then(function (responseData) {
      let list = responseData.data;
      let ul_category = document.querySelector(".ullist_category");
      if (list.length > 0) {
        for (let i = 0; i < list.length; i = i + 2) {
          ul_category.insertAdjacentHTML(
            "beforeend",
            `<li>
            <div class="row text-align-center">
              <a href="/productmenu/${list[i].cat_id}/" class="make_margin">
                <div class="col-50 medium-25 product__category">
                <img class="images_category" src="${
                  list[i].cat_image_category
                }"/>
                <div class="item-titel make_color_teal">${
                  list[i].cat_name
                }</div>
                </div>
              </a>

              <a href="/productmenu/${list[i + 1].cat_id}/" class="make_margin">
                <div class="col-50 medium-25 product__category">
                <img class="images_category" src="${
                  list[i + 1].cat_image_category
                }"/>
                <div class="item-titel make_color_teal">${
                  list[i + 1].cat_name
                } </div>
                </div>
              </a>
            </li>`
          );
        }
      }
    })

    .catch(function (error) {
      console.log(error);
    });
};

// GET PRODUCTS
// Deze methode dient om alle producten voor een bepaalde categorie te tonen
const getApiProducts = async function (cat_id) {
  let url = baseApiAddress + "PRODUCTGET.php";
  opties.body = JSON.stringify({
    cat_id: cat_id,
    format: "json",
  });

  await fetch(url, opties)
    .then(function (response) {
      return response.json();
    })

    .then(function (responseData) {
      let list = responseData.data;
      let ullist_productenmenu = document.querySelector(
        ".ullist_productenmenu"
      );
      let categoryname = document.querySelector(".productenmenu_cat_name");
      let aantal = 0;

      for (i = 0; i < list.length; i++) {
        // Eerste letter van de namen van de categoriëen in hoofdletter zetten
        const str = `${list[i].cat_name}`;
        const str2 = str.charAt(0).toUpperCase() + str.slice(1);
        categoryname.innerHTML = `${str2}`;

        aantal++;
        ullist_productenmenu.insertAdjacentHTML(
          "beforeend",
          `
          <li>
            <div class="item-content">
              <a href="/ingredient/${list[i].prd_id}/">
                <div class="item-media" id="product${aantal}" data-id="${list[i].prd_id}">
                  <img src="${list[i].prd_image__product}" class="product__images icon-tooltip"  alt="click here to see more information"/>
                </div>
              </a>
              <div class="item-inner">
                  <div class="item-title-row">
                    <div class="item-title">${list[i].prd_name}</div>
                    <div class="item-after">€${list[i].prd_price}</div>
              </div>
                  
              <div class="item-subtitle sub">
                    <div class="stepper stepper-fill stepper-init color-teal" id="stepper${list[i].prd_id}">
                        <div class="stepper-button-minus"></div>
                        <div class="stepper-input-wrap">
                          <input type="number" value="0" min="0" max="100" step="1" id="input${list[i].prd_id}" readonly />
                        </div>
                        <div class="stepper-button-plus"></div>
                    </div>
                  </div>
              </div>
            </div>
        </li>
          `
        );
      }
    })

    .catch(function (error) {
      console.log(error);
    });
};

// GET PHOTOSPRODUCTSWIPER
// Deze methode dient om alle photos van de producten die in die restaurant te vinden zijn, te tonenen
const getApiPhotosProducts = async function (rst_id) {
  let url = baseApiAddress + "SWIPERPHOTOSGET.php";
  opties.body = JSON.stringify({
    rst_id: rst_id,
    format: "json",
  });

  await fetch(url, opties)
    .then(function (response) {
      return response.json();
    })
    .then(function (responseData) {
      let list = responseData.data;
      for (let i = 0; i < list.length; i++) {
        let swiper = document.getElementById(`swiper_foto_${i + 1}`);
        swiper.insertAdjacentHTML(
          "beforeend",
          `
          <img class="images_carousel" src="${list[i].prd_image__product}" />
          `
        );
      }
    })

    .catch(function (error) {
      console.log(error);
    });
};

// GET INGREDIENTS
// Deze methode dient om alle ingredienten van een gekozen product te tonen
const getApiIngredient = async function (prd_id) {
  let url = baseApiAddress + "INGREDIENTGET.php";
  opties.body = JSON.stringify({
    prd_id: prd_id,
    format: "json",
  });

  await fetch(url, opties)
    .then(function (response) {
      return response.json();
    })

    .then(function (responseData) {
      let list = responseData.data;
      let name_product = document.querySelector("#title_product_ingredient");
      let ullist_ingredient = document.querySelector("#ullist_ingredient");
      let create_main_image_ingredient = document.createElement("img");
      let main_image_ingredient = document.getElementById(
        "main_image_ingredient"
      );
      if (list.length > 0) {
        for (let i = 0; i < list.length; i++) {
          ullist_ingredient.insertAdjacentHTML(
            "beforeend",
            `
            <li>
            <div class="item-content">
              <div class="item-media">
               <img class="images__ingredient" src="${list[i].ing_image_ingredient}"/>
              </div>
              <div class="item-inner">
                <div class="item-title">${list[i].ing_name}</div>
              </div>
            </div>
          </li>`
          );
          create_main_image_ingredient.src = `${list[i].prd_image__product}`;
          main_image_ingredient.appendChild(create_main_image_ingredient);
          name_product.innerHTML = `${list[i].prd_name}`;
        }
      }
    })

    .catch(function (error) {
      console.log(error);
    });
};

// Deze methode dient om de gekozen producten in de winkelmand dictionnary te plaatsen
const getApiProductsShoppingcart = async function (winkelmandDictionary) {
  let url = baseApiAddress + "PRODUCTALLGET.php";

  let totalePrice;

  opties.body = JSON.stringify({
    format: "json",
  });

  await fetch(url, opties)
    .then(function (response) {
      return response.json();
    })

    .then(function (responseData) {
      let list = responseData.data;

      totalePrice = document.getElementById("price");
      totalePrice.innerHTML = 0;
      totalePriceInt = 0;

      let ullist_order = document.getElementById("ullist_order");

      if (list.length > 0) {
        for (let i = 0; i < list.length; i++) {
          if (
            list[i].prd_id in winkelmandDictionary &&
            winkelmandDictionary[list[i].prd_id] != 0
          ) {
            totalePriceInt =
              list[i].prd_price * winkelmandDictionary[list[i].prd_id];
            totalePrice.innerHTML =
              parseFloat(totalePrice.innerHTML) + totalePriceInt;

            ullist_order.insertAdjacentHTML(
              "beforeend",
              `
              <li>
              <div class="item-content">
                <div class="item-media">
                 <img class="product_images__order" src="${
                   list[i].prd_image__product
                 }"/>
                </div>
                <div class="item-inner">
                  <div class="item-title">${list[i].prd_name}</div>
                  <div class="item-after">x${
                    winkelmandDictionary[list[i].prd_id]
                  }</div>
                  <div class="item-after">€${totalePriceInt}</div>
                </div>
              </div>
            </li>`
            );
          }
        }
      }
    })

    .catch(function (error) {
      console.log(error);
    });
};

// Deze methode dient om de actuele order te nemen (door de laatste order te nemen) om die later in de addApiProductOrder te gebruiken
const getApiCurrentOrder = async function () {
  let url = baseApiAddress + "CURRENTORDER.php";

  opties.body = JSON.stringify({
    format: "json",
  });

  await fetch(url, opties)
    .then(function (response) {
      return response.json();
    })

    .then(function (responseData) {
      order_id = responseData.data[0].id;
    })

    .catch(function (error) {
      console.log(error);
    });
};

// // GET FAVORITES

// // Deze methode dient om de favoriete producten van de user te onthouden
// // Werkt nog niet (tweede semester)
// const getApiFavourite = async function (prd_id) {
//   let url = baseApiAddress + "PRODUCTGET.php";

//   opties.body = JSON.stringify({
//     prd_id: prd_id,
//     format: "json",
//   });

//   await fetch(url, opties)
//     .then(function (response) {
//       return response.json();
//     })

//     .then(function (responseData) {
//       let list = responseData.data;
//       let ullist_fav = document.querySelector(".ullist_fav");

//       if (list.length > 0) {
//         for (let i = 0; i < list.length; i++) {
//           ullist_fav.insertAdjacentHTML("beforeend"),
//             `
//           <li>
//           <div class="item-content">
//             <div class="item-media">
//               <img
//                 class="productimage"
//                 src="${list[i].prd_image__product}"
//                 alt=""
//               />
//             </div>
//             <div class="item-inner">
//               <div class="item-title">${list[i].prd_name}</div>
//               <div class="item-after">${list[i].prd_price}</div>
//             </div>
//           </div>
//         </li>
//         `;
//         }
//       }
//     })

//     .catch(function (error) {
//       console.log(error);
//     });
// };

// const getApiNameCstmOrder = async function () {
//   let url = baseApiAddress + "USERGET.php";

//   opties.body = JSON.stringify({
//     format: "json",
//   });

//   fetch(url, opties)
//     .then(function (response) {
//       return response.json();
//     })

//     .then(function (responseData) {
//       let list = responseData.data;
//       let confirmOrderText = querySelector(".confirm");
//       if (list.length > 0) {
//         for (let index = 0; index < list.length; index++) {
//           confirmOrderText.insertAdjacentHTML(
//             "beforeend",
//             `
//           <div class="block-title block-title-large">Hell ${list[i].cstm_name}!</div>
//           <div class="block">
//             <p><b>Swipe me down to close</b></p>
//             <p>
//               Eaque maiores ducimus, impedit unde culpa qui, explicabo accusamus,
//               non vero corporis voluptatibus similique odit ab. Quaerat quasi
//               consectetur quidem libero? Repudiandae adipisci vel voluptatum,
//               autem libero minus dignissimos repellat.
//             </p>
//           </div>
//           `
//           );
//         }
//       }
//     })

//     .catch(function (error) {
//       console.log(error);
//     });
// };
