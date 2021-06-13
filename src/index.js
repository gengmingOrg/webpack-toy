import _ from 'lodash';
function component() {
    let element = document.createElement('div');
    var btn = document.createElement('button');
    btn.innerHTML = '点击这里，然后查看 console！';
    element.innerHTML = _.join(['Hello', 'webpack1'], ' ');
    element.appendChild(btn);
    return element;
}
document.body.appendChild(component());