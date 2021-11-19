/*  rainbowConfetti ===> Object instanciable */

const confetti = function() {

    /* Draw the canvas */
    let canvas = document.createElement('canvas');
    canvas.width = 640;
    canvas.height = 480;

    let ctx = canvas.getContext('2d');
    let pieces = [];
    let numberOfPieces = 60;
    let lastUpdateTime = Date.now();

    /* Random Colors of the pieces */
    function rainbowColor() {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    /* Refresh the canvas */
    function update() {
        let now = Date.now(),
            dt = now - lastUpdateTime;

        for (let i = pieces.length - 1; i >= 0; i--) {
            let p = pieces[i];

            if (p.y > canvas.height) {
                pieces.splice(i, 1);
                continue;
            }

            p.y += p.gravity * dt;
            p.rotation += p.rotationSpeed * dt;
        }

        while (pieces.length < numberOfPieces) {
            pieces.push(new Piece(Math.random() * canvas.width, -20));
        }

        lastUpdateTime = now;
        setTimeout(update, 1);
    }

    /* Draw the pieces of the confetti */
    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        pieces.forEach(function (p) {
            ctx.save();
            ctx.fillStyle = p.color;
            ctx.translate(p.x + p.size / 2, p.y + p.size / 2);
            ctx.rotate(p.rotation);
            ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
            ctx.restore();
        });
        // Notify the browser that I want to perform an animation and i ask it to activate a specific function (here ===> draw) to update the animation, before the next browser refresh.
        requestAnimationFrame(draw);
    }

    function Piece(x, y) {
        this.x = x;
        this.y = y;
        this.size = (Math.random() * 0.5 + 0.75) * 15;
        this.gravity = (Math.random() * 0.5 + 0.75) * 0.1;
        this.rotation = (Math.PI * 2) * Math.random();
        this.rotationSpeed = (Math.PI * 2) * (Math.random() - 0.5) * 0.001;
        this.color = rainbowColor();
    }

    while (pieces.length < numberOfPieces) {
        pieces.push(new Piece(Math.random() * canvas.width, Math.random() * canvas.height));
    }

    update();
};