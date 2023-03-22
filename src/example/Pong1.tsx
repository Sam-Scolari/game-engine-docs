import React, { useEffect } from "react";
import Game from "../game-engine/Game";
import Scene from "../game-engine/Scene";

export default function Pong1() {
  useEffect(() => {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;

    const game = new Game(canvas);

    const scene = new Scene();
    scene.background = "black";

    game.load(scene);
    game.start();
  }, []);

  return <canvas id="canvas" style={{ width: "100%", height: "500px" }} />;
}
