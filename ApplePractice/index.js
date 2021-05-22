let iphonebtn = document.getElementById("iphone");
let ipadbtn = document.getElementById("ipad");
let macbtn = document.getElementById("mac");

let model = document.querySelector('.model');
let show_img = document.querySelector('.show >img');
let producttitle = document.querySelector('.title');
let prototype = document.getElementById("prototype");

let color_choice = document.querySelector('.color_choice');
let capacity_wrap = document.querySelector('.capacity_wrap');
let total_wrap = document.querySelector('.total_wrap');
let total = document.querySelector('total');
let keys;

function create_btn(type) {
    show_img.src = "";
    producttitle.innerText = "";
    capacity_wrap.innerHTML = "";
    total_wrap.innerHTML = "";
    color_choice.innerHTML = "";
    prototype.innerHTML = "";

    keys = Object.getOwnPropertyNames(product[type]);
    model.innerHTML = '';
    keys.forEach((item, index) => {
        let div = document.createElement('div');
        div.classList.add('col-2', 'text-center');

        let label = document.createElement('label');
        label.setAttribute('for', `${item}`);
        label.setAttribute('onclick', `init_${type}(this.innerText)`);
        label.classList.add('details', 'btn', 'btn-outline-dark');
        label.innerHTML = `${item}`;

        div.appendChild(label);
        model.appendChild(div);
    });
}

function init_iPhone(product_type) {
    total_wrap.innerHTML = '';
    prototype.innerHTML = '';

    producttitle.innerHTML = product_type;
    let product_name = product_type;
    let Name = Object.getOwnPropertyNames(product.iPhone[product_name]);
    Name.forEach((item, index) => {
        if (index == 1 || Name[index] == 'color' || Name[index] == undefined) {
            // console.log(color);
        } else {
            let p_wrap = document.createElement('p');
            let label_name = document.createElement('label');
            let span_price = document.createElement('span');

            p_wrap.classList.add('model_type', 'border', 'border-secondary', 'rounded', 'p-4', 'd-flex', 'justify-content-between');
            label_name.classList.add('title_type');
            span_price.classList.add('price');

            p_wrap.appendChild(label_name);
            p_wrap.appendChild(span_price);
            prototype.appendChild(p_wrap);

        }
    });

    let title_type = document.querySelectorAll('.title_type');
    title_type.forEach((item, index) => {
        // console.log(item);
        if (Name[index] == 'color') {
            // console.log(color);
        } else {
            item.innerHTML = Name[index];
        }
    });

    color_choice.innerHTML = '';
    for (let item of product.iPhone[product_type].color) {
        let colorDiv = document.createElement('div');
        let colorimg = document.createElement('img');
        let colorSpan = document.createElement('span');

        colorDiv.classList.add('color', 'col-5', 'mx-3', 'my-2', 'p-4', 'border', 'border-secondary', 'rounded', 'd-inline-flex', 'flex-column', 'align-items-center');
        colorDiv.setAttribute('value', item.imgurl);
        colorimg.src = item.url;
        colorSpan.innerText = item.text;

        colorDiv.appendChild(colorimg);
        colorDiv.appendChild(colorSpan);
        color_choice.appendChild(colorDiv);

        let change_color = document.querySelectorAll('.color');
        change_color.forEach((btn, index) => {
            btn.addEventListener('click', function () {
                show_img.setAttribute('src', btn.getAttributeNode('value').value);
            });

        });
    }

    capacity_wrap.innerHTML = '';
    for (let item of product.iPhone[product_type][product_type].standard) {
        let typeDiv = document.createElement('div');
        let typeSize = document.createElement('span');
        let typePrice = document.createElement('span');

        typeDiv.classList.add('capacitys', 'col-5', 'mx-3', 'my-2', 'p-4', 'border', 'border-secondary', 'rounded', 'd-inline-flex', 'flex-column', 'align-items-center');
        typeSize.innerHTML = item.capacity + ' <small>GB²</small>';
        typePrice.innerText = `NT$${item.price}`;
        typePrice.classList.add('price');

        typeDiv.appendChild(typeSize);
        typeDiv.appendChild(typePrice);
        capacity_wrap.appendChild(typeDiv);
    }

    let capacitys = document.querySelectorAll('.capacitys');
    let capacity_price = document.querySelectorAll('.price');
    capacitys.forEach((item, index) => {
        let priceh3 = document.createElement('h3');
        let pricebtn = document.createElement('button');
        let priceicon = document.createElement('i');
        let capacity = item.getAttributeNode('price');


        item.addEventListener('click', function () {
            capacity_price.forEach((test, index) => {
                total_wrap.innerHTML = '';

                priceh3.innerText = `${item.lastChild.innerText}`;
                priceh3.classList.add('total');
                pricebtn.classList.add('btn', 'btn-primary', 'w-75', 'my-3');
                pricebtn.innerText = '加入購物袋';
                priceicon.classList.add('fa', 'fa-heart-o', 'mx-4');

                total_wrap.appendChild(priceh3);
                total_wrap.appendChild(pricebtn);
                total_wrap.appendChild(priceicon);
            });

        });
    });
}

function init_iPad(product_type) {
    total_wrap.innerHTML = '';
    prototype.innerHTML = '';

    producttitle.innerHTML = product_type;
    let Name = Object.getOwnPropertyNames(product.iPad[product_type]);

    Name.forEach((item, index) => {
        if (index == 1 || Name[index] == 'color' || Name[index] == undefined) {
            // console.log(color);
        } else {
            let p_wrap = document.createElement('p');
            let label_name = document.createElement('label');
            let span_price = document.createElement('span');

            p_wrap.classList.add('model_type', 'border', 'border-secondary', 'rounded', 'p-4', 'd-flex', 'justify-content-between');
            label_name.classList.add('title_type');
            span_price.classList.add('price');

            p_wrap.appendChild(label_name);
            p_wrap.appendChild(span_price);
            prototype.appendChild(p_wrap);

        }
    });

    let title_type = document.querySelectorAll('.title_type');
    title_type.forEach((item, index) => {
        // console.log(item);
        if (Name[index] == 'color') {
            // console.log(color);
        } else {
            item.innerHTML = Name[index];
        }
    });

    color_choice.innerHTML = '';
    for (let item of product.iPad[product_type].color) {
        let colorDiv = document.createElement('div');
        let colorimg = document.createElement('img');
        let colorSpan = document.createElement('span');

        colorDiv.classList.add('color', 'col-5', 'mx-3', 'my-2', 'p-4', 'border', 'border-secondary', 'rounded', 'd-inline-flex', 'flex-column', 'align-items-center');
        colorDiv.setAttribute('value', item.imgurl);
        colorimg.src = item.url;
        colorSpan.innerText = item.text;

        colorDiv.appendChild(colorimg);
        colorDiv.appendChild(colorSpan);
        color_choice.appendChild(colorDiv);

        let change_color = document.querySelectorAll('.color');
        change_color.forEach((btn, index) => {
            btn.addEventListener('click', function () {
                show_img.setAttribute('src', btn.getAttributeNode('value').value);
            });
        });
    }

    capacity_wrap.innerHTML = '';
    for (let item of product.iPad[product_type][product_type].standard) {
        let typeDiv = document.createElement('div');
        let typeSize = document.createElement('span');
        let typePrice = document.createElement('span');

        typeDiv.classList.add('capacitys', 'col-5', 'mx-3', 'my-2', 'p-4', 'border', 'border-secondary', 'rounded', 'd-inline-flex', 'flex-column', 'align-items-center');
        typeSize.innerHTML = item.capacity + ' <small>GB²</small>';
        typePrice.innerText = `NT$${item.price}`;
        typePrice.classList.add('price');

        typeDiv.appendChild(typeSize);
        typeDiv.appendChild(typePrice);
        capacity_wrap.appendChild(typeDiv);
    }

    let capacitys = document.querySelectorAll('.capacitys');
    let capacity_price = document.querySelectorAll('.price');
    capacitys.forEach((item, index) => {
        let priceh3 = document.createElement('h3');
        let pricebtn = document.createElement('button');
        let priceicon = document.createElement('i');
        let capacity = item.getAttributeNode('price');


        item.addEventListener('click', function () {
            capacity_price.forEach((test, index) => {
                total_wrap.innerHTML = '';

                priceh3.innerText = `${item.lastChild.innerText}`;
                priceh3.classList.add('total');
                pricebtn.classList.add('btn', 'btn-primary', 'w-75', 'my-3');
                pricebtn.innerText = '加入購物袋';
                priceicon.classList.add('fa', 'fa-heart-o', 'mx-4');

                total_wrap.appendChild(priceh3);
                total_wrap.appendChild(pricebtn);
                total_wrap.appendChild(priceicon);
            });

        });
    });
}

function init_Mac(product_type) {
    total_wrap.innerHTML = '';
    prototype.innerHTML = '';

    producttitle.innerHTML = product_type;
    let Name = Object.getOwnPropertyNames(product.Mac[product_type]);

    Name.forEach((item, index) => {
        if (index == 1 || Name[index] == 'color' || Name[index] == undefined) {
            // console.log(color);
        } else {
            let p_wrap = document.createElement('p');
            let label_name = document.createElement('label');
            let span_price = document.createElement('span');

            p_wrap.classList.add('model_type', 'border', 'border-secondary', 'rounded', 'p-4', 'd-flex', 'justify-content-between');
            label_name.classList.add('title_type');
            span_price.classList.add('price');

            p_wrap.appendChild(label_name);
            p_wrap.appendChild(span_price);
            prototype.appendChild(p_wrap);

        }
    });

    let title_type = document.querySelectorAll('.title_type');
    title_type.forEach((item, index) => {
        // console.log(item);
        if (Name[index] == 'color') {
            // console.log(color);
        } else {
            item.innerHTML = Name[index];
        }
    });

    color_choice.innerHTML = '';
    for (let item of product.Mac[product_type].color) {
        let colorDiv = document.createElement('div');
        let colorimg = document.createElement('img');
        let colorSpan = document.createElement('span');

        colorDiv.classList.add('color', 'col-5', 'mx-3', 'my-2', 'p-4', 'border', 'border-secondary', 'rounded', 'd-inline-flex', 'flex-column', 'align-items-center');
        colorDiv.setAttribute('value', item.imgurl);
        colorimg.src = item.url;
        colorSpan.innerText = item.text;

        colorDiv.appendChild(colorimg);
        colorDiv.appendChild(colorSpan);
        color_choice.appendChild(colorDiv);

        let change_color = document.querySelectorAll('.color');
        change_color.forEach((btn, index) => {
            btn.addEventListener('click', function () {
                show_img.setAttribute('src', btn.getAttributeNode('value').value);
            });
        });
    }

    capacity_wrap.innerHTML = '';
    for (let item of product.Mac[product_type][product_type].standard) {
        let typeDiv = document.createElement('div');
        let typeSize = document.createElement('span');
        let typePrice = document.createElement('span');

        typeDiv.classList.add('capacitys', 'col-5', 'mx-3', 'my-2', 'p-4', 'border', 'border-secondary', 'rounded', 'd-inline-flex', 'flex-column', 'align-items-center');
        typeSize.innerHTML = item.capacity + ' <small>GB²</small>';
        typePrice.innerText = `NT$${item.price}`;
        typePrice.classList.add('price');

        typeDiv.appendChild(typeSize);
        typeDiv.appendChild(typePrice);
        capacity_wrap.appendChild(typeDiv);
    }

    let capacitys = document.querySelectorAll('.capacitys');
    let capacity_price = document.querySelectorAll('.price');
    capacitys.forEach((item, index) => {
        let priceh3 = document.createElement('h3');
        let pricebtn = document.createElement('button');
        let priceicon = document.createElement('i');
        let capacity = item.getAttributeNode('price');


        item.addEventListener('click', function () {
            capacity_price.forEach((test, index) => {
                total_wrap.innerHTML = '';

                priceh3.innerText = `${item.lastChild.innerText}`;
                priceh3.classList.add('total');
                pricebtn.classList.add('btn', 'btn-primary', 'w-75', 'my-3');
                pricebtn.innerText = '加入購物袋';
                priceicon.classList.add('fa', 'fa-heart-o', 'mx-4');

                total_wrap.appendChild(priceh3);
                total_wrap.appendChild(pricebtn);
                total_wrap.appendChild(priceicon);
            });

        });
    });
}