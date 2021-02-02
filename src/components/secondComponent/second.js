import './index.scss';
function second() {
    const element = document.createElement("div");
  
    element.innerHTML = "and I am second....Hello!!";
    return element;
};

document.body.appendChild(second());