const canvas = document.getElementById('shapeCanvas');
const ctx = canvas.getContext('2d');
const resultDiv = document.getElementById('result');

canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;

const shapes = [
    { name: "Pentagon", draw: drawPentagon },
    { name: "Hexagon", draw: drawHexagon },
    { name: "Heptagon", draw: drawHeptagon },
    { name: "Octagon", draw: drawOctagon },
    { name: "Star", draw: drawStar },
    { name: "Parallelogram", draw: drawParallelogram },
    { name: "Trapezoid", draw: drawTrapezoid }
];

let currentShapeIndex = 0;

function drawPentagon() {
    ctx.beginPath();
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 80;
    const sides = 5;
    for (let i = 0; i < sides; i++) {
        const x = centerX + radius * Math.cos(2 * Math.PI * i / sides);
        const y = centerY + radius * Math.sin(2 * Math.PI * i / sides);
        if (i === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
    }
    ctx.closePath();
    ctx.strokeStyle = '#ffffff';
    ctx.stroke();
}

function drawHexagon() {
    ctx.beginPath();
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 80;
    const sides = 6;
    for (let i = 0; i < sides; i++) {
        const x = centerX + radius * Math.cos(2 * Math.PI * i / sides);
        const y = centerY + radius * Math.sin(2 * Math.PI * i / sides);
        if (i === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
    }
    ctx.closePath();
    ctx.strokeStyle = '#ffffff';
    ctx.stroke();
}

function drawHeptagon() {
    ctx.beginPath();
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 80;
    const sides = 7;
    for (let i = 0; i < sides; i++) {
        const x = centerX + radius * Math.cos(2 * Math.PI * i / sides);
        const y = centerY + radius * Math.sin(2 * Math.PI * i / sides);
        if (i === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
    }
    ctx.closePath();
    ctx.strokeStyle = '#ffffff';
    ctx.stroke();
}

function drawOctagon() {
    ctx.beginPath();
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 80;
    const sides = 8;
    for (let i = 0; i < sides; i++) {
        const x = centerX + radius * Math.cos(2 * Math.PI * i / sides);
        const y = centerY + radius * Math.sin(2 * Math.PI * i / sides);
        if (i === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
    }
    ctx.closePath();
    ctx.strokeStyle = '#ffffff';
    ctx.stroke();
}

function drawStar() {
    ctx.beginPath();
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const outerRadius = 80;
    const innerRadius = 40;
    const points = 5;
    for (let i = 0; i < points * 2; i++) {
        const radius = i % 2 === 0 ? outerRadius : innerRadius;
        const x = centerX + radius * Math.cos(i * Math.PI / points);
        const y = centerY + radius * Math.sin(i * Math.PI / points);
        if (i === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
    }
    ctx.closePath();
    ctx.strokeStyle = '#ffffff';
    ctx.stroke();
}

function drawParallelogram() {
    ctx.beginPath();
    ctx.moveTo(150, 100);
    ctx.lineTo(250, 100);
    ctx.lineTo(200, 200);
    ctx.lineTo(100, 200);
    ctx.closePath();
    ctx.strokeStyle = '#ffffff';
    ctx.stroke();
}

function drawTrapezoid() {
    ctx.beginPath();
    ctx.moveTo(150, 100);
    ctx.lineTo(250, 100);
    ctx.lineTo(225, 200);
    ctx.lineTo(175, 200);
    ctx.closePath();
    ctx.strokeStyle = '#ffffff';
    ctx.stroke();
}

function drawShape() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    shapes[currentShapeIndex].draw();
}

document.querySelectorAll('.shape-btn').forEach(btn => {
    btn.addEventListener('click', (event) => {
        const selectedShape = event.target.getAttribute('data-shape');
        if (selectedShape === shapes[currentShapeIndex].name) {
            currentShapeIndex++;
            if (currentShapeIndex < shapes.length) {
                resultDiv.textContent = "Correct! Next shape:";
                drawShape();
            } else {
                resultDiv.textContent = "Congrats, you are a tough nut to crack!";
            }
        } else {
            resultDiv.textContent = "Try again!";
        }
    });
});

drawShape();
