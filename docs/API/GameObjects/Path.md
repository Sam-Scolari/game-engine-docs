# Path

## Usage

```typescript
const scene = new Scene();
const path2d = new Path2D("...my custom path...");
const path = new Path(path2d);

scene.add(path);
```

## Reference

### Constructor

```typescript
constructor(path: Path2D)
```

### Properties

```typescript
fill: string;
stroke: string;
path: Path2D;
```
