const myName = 'Rajan';
const reactElement = {
    type: 'a',
    props: {
        href: 'https://reactjs.org',
        target: '_blank',

    },
    children: 'Learn React'
};

function customRender(reactElement, container) {
    const { type, props, children } = reactElement;
    const domElement = document.createElement(type);

   // for (const [key, value] of Object.entries(props)) {
   for (const prop in reactElement.props) {
        domElement.setAttribute(prop, reactElement.props[prop]);
    }

    if (children) {
        domElement.innerHTML = children;
    }

    container.appendChild(domElement);
}


const mainContent = document.querySelector("#root");
customRender(reactElement, mainContent);
