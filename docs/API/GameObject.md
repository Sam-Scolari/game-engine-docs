# GameObject

## Usage

```typescript
class MyCustomGameObject extends GameObject {
  onUpdate = (inputs, deltaTime) => {
    if (inputs["w"]) {
      this.position.y -= 10 * deltaTime;
    }
  };
}
```

## Reference

### Properties

```typescript
id: string;
tag: string;
position: { x: number, y: number };
scale: { x: number, y: number };
size: { width: number, height: number };
direction: number; // Radians
freezeRotation: boolean;
visible: boolean;
physics: Rigidbody;
collider: Collider;
```

### Methods

```typescript
render(context: CanvasRenderingContext2D)
update(inputs: { [key: string]: boolean }, deltaTime: number)
onUpdate(inputs: { [key: string]: boolean }, deltaTime: number);
collidesWith(gameObject: GameObject);
```
