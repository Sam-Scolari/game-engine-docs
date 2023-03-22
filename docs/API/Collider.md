# Collider

\*Note: Collider is not meant to be used on its own. Each gameObject automatically renders and updates the Colliders position and has methods for checking collisions.

## Usage

```typescript
const gameObject = new GameObject();

console.log(gameObject.collider);
```

## Reference

### Properties

```typescript
position: { x: number, y: number };
size: { width: number, height: number };
```

### Methods

```typescript
render(context: CanvasRenderingContext2D)
update(gameObject: GameObject)
isColliding(gameObject: GameObject)
```
