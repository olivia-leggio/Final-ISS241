let keys = Object.keys(Cart);

let main = document.querySelector("section");

if (keys.length === 1) {
    let message = document.createElement("h2");
        let text = document.createTextNode("Your cart is empty!!");
        message.appendChild(text);
    main.appendChild(message);
}

for (let i = 1; i < keys.length; i++) {
    let key = keys[i];
    let info = JSON.parse(getItem(key));
    console.log(info);

    let item = document.createElement('item');
        let figure = document.createElement('figure');
            let image = document.createElement('img');
                image.setAttribute('src', '/images/'+ key + '.jpeg');
                image.setAttribute('alt', key);
                image.setAttribute('width', '200');
                image.setAttribute('height', '200');
            figure.appendChild(image);
        item.appendChild(figure);

        let article = document.createElement('article');

            let name = document.createElement('h3');
                name.appendChild(document.createTextNode(info.name));
            article.appendChild(name);

            let desc = document.createElement('p');
                desc.appendChild(document.createTextNode(info.description));
            article.appendChild(desc);

            let remove = document.createElement('h5');
                remove.appendChild(document.createTextNode('remove from cart'));
                remove.setAttribute('onclick', 'removeCart("' + key + '")');
            article.appendChild(remove);

        item.appendChild(article);
    main.appendChild(item);
}