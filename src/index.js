
import './index.css';

function component() {
    let element = document.createElement('div');
    element.innerHTML = '1111'
    element.classList.add('hello');
    return element;
}
document.body.appendChild(component());