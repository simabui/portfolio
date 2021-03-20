const triangles = document.querySelector(".triangles");
const shapes = ["html", "js", "css", "react", "node"];

function getRandomElement(arr) {
  const index = Math.floor(Math.random() * arr.length);

  return arr[index];
}

function displayShape() {
  const shapeType = getRandomElement(shapes);
  triangles.className = "triangles";
  triangles.classList.add(`torender-${shapeType}`);
}

setInterval(displayShape, 2500);
