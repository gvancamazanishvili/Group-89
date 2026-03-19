// 1) შექმენით ფუნქცია ჯავასკრიპტში სახელად createElement რომელსაც გადაეცემა ორი პარამეტრი, ელემენტის სახელი მაგალითად p, h1 და მეორე ობიექტი სადაც წერია ატრიბუტები მაგალითად src:, id:, და ასე შემდეგ



const createElement = (tagName, attributes = {}) => {
    const element = document.createElement(tagName)
    for (let [key, value] of Object.entries(attributes)){
        element.setAttribute(key, value);
    }   

    return element;
}

const p = createElement('p', { id: 'paragraph', class: 'txt'})


document.body.appendChild(p)