const triangles = document.querySelector(".triangles");
const shapes = ["torender-html", "torender-js", "torender-css", "torender-react", "torender-node"];

function getRandomElement(arr) {
  const index = Math.floor(Math.random() * arr.length);

  return arr[index];
}

function displayShape() {
  const shapeType = getRandomElement(shapes);
  triangles.className = "triangles";
  triangles.classList.add(shapeType);
}

setInterval(displayShape, 2500);
