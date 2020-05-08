function updatequantity(id) {

    const parent = document.getElementById(id);
    const quantity_td = parent.querySelectorAll("td")[1];
    const quantity_old = quantity_td.textContent.slice(0, -1);

    const action_for_form = "/updatequantity/" + id;

    //let form_to_del = document.querySelector("form");
    //form_to_del.parentNode.removeChild(form_to_del);

    //create form
    const form = document.createElement("form");
    form.setAttribute("action", action_for_form); // "/update/{{prod.id}}"
    form.setAttribute("method", "POST");

    const new_quantity = document.createElement("input");
    new_quantity.setAttribute("type", "text");
    new_quantity.setAttribute("name", "update_product_quantity");
    new_quantity.setAttribute("value", quantity_old);
    new_quantity.setAttribute("class", "quantity_input");

    const update_button = document.createElement("input");
    update_button.setAttribute("type", "submit");
    update_button.setAttribute("value", "Save");

    form.appendChild(new_quantity);
    form.appendChild(update_button);

    // remove all elements from the cell (td)
    quantity_td.innerHTML = '';

    // add text input field and submit button to this cell
    quantity_td.appendChild(form);

}
/*
<form action='"/update/" + id"' method="POST">
    <input type="text" name="update_product_quantity" value="{{prod.quantity}}">
    <input type="submit" value="Update product"></input>
</form>
    */


function updatename(id) {

    const parent = document.getElementById(id);
    const name_td = parent.querySelectorAll("td")[0];
    const name_old = name_td.textContent.slice(0, -1);
 
    const action_for_form = "/updatename/" + id;

    //let form_to_del = document.querySelector("form");
    //form_to_del.parentNode.removeChild(form_to_del);

    //create form
    const form = document.createElement("form");
    form.setAttribute("action", action_for_form); // "/update/{{prod.id}}"
    form.setAttribute("method", "POST");

    const new_name = document.createElement("input");
    new_name.setAttribute("type", "text");
    new_name.setAttribute("name", "update_product_name");
    new_name.setAttribute("value", name_old);
    new_name.setAttribute("class", "name_input");

    const update_button = document.createElement("input");
    update_button.setAttribute("type", "submit");
    update_button.setAttribute("value", "Save");

    form.appendChild(new_name);
    form.appendChild(update_button);

    // remove all elements from the cell (td)
    name_td.innerHTML = '';

    // add text input field and submit button to this cell
    name_td.appendChild(form);
}
/*
<form action='"/updatename/" + id"' method="POST">
    <input type="text" name="update_product_name" value="{{prod.product}}">
    <input type="submit" value="Update product"></input>
</form>
    */