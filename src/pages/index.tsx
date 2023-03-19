import React, { useEffect } from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Game from "../game-engine/Game";
import Scene from "../game-engine/Scene";
import Sprite from "../game-engine/Sprite";
import Image from "../game-engine/gameobjects/Image";
import WarpAround from "../game-engine/modules/WarpAround";
import Rigidbody from "../game-engine/Rigidbody";

export default function Home() {
  useEffect(() => {
    const canvas = document.getElementById("game") as HTMLCanvasElement;
    const game = new Game(canvas);

    const scene = new Scene();
    scene.background = "black";

    const asteroids = [
      new Image(new Sprite("/asteroids/javascript.webp")),
      new Image(new Sprite("/asteroids/typescript.webp")),
      new Image(new Sprite("/asteroids/react.webp")),
      new Image(new Sprite("/asteroids/solid.webp")),
      new Image(new Sprite("/asteroids/ethereum.webp")),
      new Image(new Sprite("/asteroids/figma.webp")),
      new Image(new Sprite("/asteroids/tailwind.webp")),
      new Image(new Sprite("/asteroids/graphql.webp")),
      new Image(new Sprite("/asteroids/astro.webp")),
    ];

    asteroids.forEach((asteroid) => {
      asteroid.tag = "asteroid";
      asteroid.physics = new Rigidbody(asteroid);
      asteroid.physics.linearDrag = 0;
      const force = 1 + Math.random() * 2;
      asteroid.direction = Math.floor(Math.random() * 2) == 1 ? 1 : -1;
      asteroid.physics.gravity = 0;
      asteroid.physics.addForce(force);
      asteroid.freezeRotation = true;

      asteroid.onUpdate = () => {
        WarpAround(asteroid, canvas);
      };

      asteroid.position = {
        x: Math.floor(Math.random() * canvas.width),
        y: Math.floor(Math.random() * canvas.height),
      };
      asteroid.size = { width: 80, height: 80 };

      scene.add(asteroid);
    });

    game.load(scene);
    game.start();
  }, []);

  return (
    <>
      <main>
        <img src="img/title.svg" draggable={false} />
        <a href="/docs/intro">Docs</a>
        <canvas id="game" />
      </main>

      <style>
        {`
          main {
            
            height: 100vh;
            display: flex;
            flex-direction: column;
            gap: 3rem;
            justify-content: center;
            align-items: center;
          }

          a {
            color: white;
          

            z-index: 1;
            background-color: transparent;
            border: 2px solid white;
            padding: 0.5rem 1rem;
            cursor: pointer;
            font-weight: 600;
          }

          a:hover { 
            background-color: white;
            color: black;
            text-decoration: none;
          }

          img {
            z-index: 1;
          }

          canvas {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
          }
        `}
      </style>
    </>
  );
}
