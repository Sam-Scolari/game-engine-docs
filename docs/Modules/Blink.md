# Blink

Takes a GameObject and makes it blink at a set interval.

## Usage

```typescript
const ship = new Image(shipSprite);

let blinking = true;

ship.onUpdate = (inputs) => {
  if (blinking) Blink(ship, 450);

  if (inputs["w"]) {
    blinking = false;
  }
};
```

## Code

```typescript
import GameObject from "../GameObject";

export default function Blink(gameObject: GameObject, milliseconds: number) {
  if (Math.floor(Date.now() / milliseconds) % 2) {
    gameObject.visible = false;
  } else gameObject.visible = true;
}
```
