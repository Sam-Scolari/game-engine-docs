# Rigidbody

## Usage

```typescript
const gameObject = new GameObject();
gameObject.physics = new Rigidbody();
```

## Reference

### Constructor

```typescript
constructor(gameObject: GameObject)
```

### Properties

```typescript
gameObject: GameObject;
gravity: number;
gravityDirection: number;
terminalVelocity: number;
velocity: {
    x: number,
    y: number,
};
angularVelocity: number;
linearDrag: numnber;
anglularDrag: number;
deltaTime: number;
lock: boolean;
```

### Methods

```typescript
addForce(amount: number, direction?: number)
addTorque(radians: number)
update(deltaTime: number)
```
