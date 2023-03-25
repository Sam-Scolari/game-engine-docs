import React, { useEffect } from "react";
import Game from "../game-engine/Game";
import Scene from "../game-engine/Scene";

export default function Game1() {
  useEffect(() => {
    const canvas = document.getElementById("game1") as HTMLCanvasElement;

    const game = new Game(canvas);

    const scene = new Scene();
    scene.background = "black";

    game.load(scene);
    game.start();
  }, []);

  return <canvas id="game1" style={{ width: "100%", height: "500px" }} />;
}
