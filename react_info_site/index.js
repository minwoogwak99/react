//Imperative way of creating some element
/* const h1 = document.createElement("h1");
h1.textContent = "This is an imperative way to program";
h1.className = "header";
document.getElementById("root").append(h1); */

function Contents() {
  return <h1>this is body 1</h1>;
}

ReactDOM.render(<h1>hello</h1>, document.getElementById("root"));
