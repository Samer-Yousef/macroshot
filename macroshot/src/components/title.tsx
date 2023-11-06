import React, { useEffect, useRef } from 'react';
import { fabric } from "fabric";

const FabricCanvas = () => {
    const canvasEl = useRef(null);

    useEffect(() => {
        const canvas = new fabric.Canvas(canvasEl.current);

        // Load an image and add it to the canvas
        fabric.Image.fromURL('https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=620&dpr=2&s=none', (img) => {
            // Optionally set some options
            img.set({
                left: 100,
                top: 100,
                scaleX: 0.5,
                scaleY: 0.5
            });

            // Add the image to the canvas
            canvas.add(img);
        });

    }, []);

    return <canvas ref={canvasEl} width={600} height={400} />;
}

export default FabricCanvas;
