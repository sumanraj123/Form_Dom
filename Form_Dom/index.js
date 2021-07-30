let table_row = createTag("div", "row");
let table_col = createTag("div", "col");
let table = createTag("table", "table mt-2");
let thead = createTag("thead");
thead.innerHTML = `<tr>
<th scope="col">First Name</th>
<th scope="col">Last Name</th>
<th scope="col">Address</th>
<th scope="col">Pincode</th>
<th scope="col">Gender</th>
<th scope="col">Favorite Foods</th>
<th scope="col">State</th>
<th scope="col">Country</th>
</tr>`;
let tbody = createTag("tbody");

table.append(thead, tbody);
table_col.append(table);

let container = document.querySelector(".container");
container.append(table);
let fname_inp = document.querySelector("#fname");
let lname_inp = document.querySelector("#lname");
let address_inp = document.querySelector("#address");
let pincode_inp = document.querySelector("#pincode");
let gender_male = document.querySelector("#male");
let gender_female = document.querySelector("#female");
let state_inp = document.querySelector("#state");
let country_inp = document.querySelector("#country");

function createTag(ele, ele_class = "") {
  let element = document.createElement(ele);
  element.setAttribute("class", ele_class);
  return element;
}

function foo() {
  let fn = fname_inp.value;
  let ln = lname_inp.value;
  let addr = address_inp.value;
  let pin = pincode_inp.value;
  let gen = gender_male.checked ? gender_male.value : gender_female.value;
  let mulFood = document.querySelectorAll("input[type='checkbox']:checked");

  let foods = [];
  if (mulFood.length > 0) {
    for (i = 0; i < mulFood.length; i++) {
      foods.push(mulFood[i].value);
    }
  }
  console.log(foods);
  let form = document.querySelector("form");
  let st = state_inp.value;
  let coun = country_inp.value;
  if (
    fn.length !== 0 &&
    ln.length !== 0 &&
    addr !== "" &&
    pin !== "" &&
    st !== "select" &&
    coun !== "select" &&
    foods.length > 0
  ) {
    let tbody_tr = createTag("tr");

    tbody_tr.innerHTML = `<tr>
  <td>${fn}</td>
  <td>${ln}</td>
  <td>${addr}</td>
  <td>${pin}</td>
  <td>${gen}</td>
  <td>${foods.join(", ")}</td>
  <td>${st}</td>
  <td>${coun}</td>
  </tr>`;
    tbody.append(tbody_tr);
    form.reset();
  }
}