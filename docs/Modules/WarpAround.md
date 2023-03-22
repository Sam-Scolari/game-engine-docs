# WarpAround

When applied in the update function of a GameObject this module will create the wrap around effect found in games like Asteroids.

## Usage

```typescript
const canvas = document.getElementById("canvas");
const ship = new Image(shipSprite);

ship.onUpdate = (inputs) => {
  WarpAround(ship, canvas);
};
```

## Code

```typescript
import GameObject from "../GameObject";

export default function WarpAround(
  gameObject: GameObject,
  canvas: HTMLCanvasElement
) {
  // If gameObject goes off the right of the screen
  if (gameObject.position.x > canvas.width + gameObject.size.width) {
    gameObject.position.x = 0 - gameObject.size.width;
  }

  // If gameObject goes off the left of the screen
  if (gameObject.position.x < -gameObject.size.width) {
    gameObject.position.x = canvas.width + gameObject.size.width;
  }

  // If gameObject goes off the bottom of the screen
  if (gameObject.position.y > canvas.height + gameObject.size.height) {
    gameObject.position.y = 0 - gameObject.size.height;
  }

  // If gameObject goes off the top of the screen
  if (gameObject.position.y < -gameObject.size.height) {
    gameObject.position.y = canvas.height + gameObject.size.height;
  }
}
```
