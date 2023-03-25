import React, { useEffect } from "react";
import Game from "../game-engine/Game";
import Scene from "../game-engine/Scene";
import Box from "../game-engine/gameobjects/Box";

export default function Game2() {
  useEffect(() => {
    const canvas = document.getElementById("game2") as HTMLCanvasElement;

    const game = new Game(canvas);

    const scene = new Scene();
    scene.background = "black";

    const box = new Box();
    box.size = { width: 60, height: 60 };
    box.position = {
      x: canvas.width / 2 - box.size.width / 2,
      y: canvas.height / 2 - box.size.height / 2,
    };
    box.fill = "white";

    scene.add(box);

    game.load(scene);
    game.start();
  }, []);

  return <canvas id="game2" style={{ width: "100%", height: "500px" }} />;
}
