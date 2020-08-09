document.addEventListener('DOMContentLoaded', () => {
    const clamp = (value, min, max) => {
        return value < min ? min : value > max ? max : value;
    };

    Array.prototype.slice
        .call(document.querySelectorAll('[data-js-rotate]'))
        .forEach((element) => {
            const deg = element.dataset.jsRotate || 10;

            document.addEventListener('mousemove', (event) => {
                const { clientX: x, clientY: y } = event;
                const centerX = window.innerWidth / 2;
                const centerY = window.innerHeight / 2;
                const xAxisRotate = clamp((y - centerY) / centerY, 0, 1);
                const yAxisRotate = (x - centerX) / centerX;
                const rotateStr = `rotate3d(${xAxisRotate}, ${yAxisRotate}, 0, ${deg}deg)`;

                element.style.transform = rotateStr;
            });
        });
});
