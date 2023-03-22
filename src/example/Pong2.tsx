import React, { useEffect } from "react";
import Game from "../game-engine/Game";
import Circle from "../game-engine/gameobjects/Circle";
import Scene from "../game-engine/Scene";

export default function Pong1() {
  useEffect(() => {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;

    const game = new Game(canvas);

    const scene = new Scene();
    scene.background = "black";

    const ball = new Circle();
    ball.position = { x: canvas.width / 2, y: canvas.height / 2 };
    ball.size = { width: 8, height: 8 };
    ball.fill = "white";

    scene.add(ball);

    game.load(scene);
    game.start();
  }, []);

  return <canvas id="canvas" style={{ width: "100%", height: "500px" }} />;
}
