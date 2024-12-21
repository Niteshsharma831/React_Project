function customRender(reactElement, Container) {
  //   const domElement = document.createElement(reactElement.type);
  //   domElement.innerHTML = reactElement.Children;
  //   domElement.setAttribute("href", reactElement.props.href);
  //   domElement.setAttribute("target", reactElement.props.target);
  //   container.appendChild(domElement);
  // }
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  for (const prop in reactElement.props) {
    if (prop === "children") continue;

    domElement.setAttribute(prop, reactElement.props[prop]);

    Container.appendChild(domElement);
  }
}

const reactElement = {
  type: "a",
  props: {
    href: "https://www.google.com",
    target: "_blank",
  },
  Children: "Click me",
};
const mainContainer = document.querySelector("#root");

customRender(reactElement, mainContainer);
