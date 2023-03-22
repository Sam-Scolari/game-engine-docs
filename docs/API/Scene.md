# Scene

## Usage

```typescript
const game = new Game(canvasElement);

const scene = new Scene();

game.load(scene);
```

## Reference

### Properties

```typescript
id: string;
gameObjects: GameObject[];
background?: string | CanvasGradient | CanvasPattern;
```

### Methods

```typescript
render(context: CanvasRenderingContext2D, debug: GameOptions["debug"])
update(inputs: { [key: string]: boolean }, deltaTime: number)
onUpdate: (inputs: { [key: string]: boolean }, deltaTime: number);
add(gameObject: GameObject, onAdd?: (gameObject: GameObject) => void)
remove(gameObject: GameObject, onRemove?: (gameObject: GameObject) => void)
getGameObjectsByTag(tag: string) => GameObject[]
```
