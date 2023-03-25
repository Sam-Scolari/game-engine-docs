import React, { useEffect } from "react";
import Game from "../game-engine/Game";
import Scene from "../game-engine/Scene";
import Box from "../game-engine/gameobjects/Box";
import Rigidbody from "../game-engine/Rigidbody";
import WarpAround from "../game-engine/modules/WarpAround";

export default function Game5() {
  useEffect(() => {
    const canvas = document.getElementById("game5") as HTMLCanvasElement;

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

    box.physics = new Rigidbody(box);
    box.physics.gravity = 0;

    box.onUpdate = (inputs) => {
      WarpAround(box, canvas);

      if (inputs["a"]) {
        box.physics.addForce(5, -(Math.PI / 2));
      }

      if (inputs["d"]) {
        box.physics.addForce(5, Math.PI / 2);
      }

      if (inputs["w"]) {
        box.physics.addForce(5, 0);
      }

      if (inputs["s"]) {
        box.physics.addForce(5, Math.PI);
      }
    };

    function createFood() {
      const food = new Box();
      food.size = { width: 20, height: 20 };
      food.position = {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
      };
      food.fill = "red";

      food.onUpdate = () => {
        if (box.collidesWith(food)) {
          scene.remove(food);
          box.size.width += 5;
          box.size.height += 5;
          createFood();
        }
      };

      scene.add(food);
    }

    createFood();

    scene.add(box);

    game.load(scene);
    game.start();
  }, []);

  return <canvas id="game5" style={{ width: "100%", height: "500px" }} />;
}