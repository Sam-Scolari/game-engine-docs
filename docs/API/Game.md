# Game

## Usage

```typescript
const canvas = document.getElementById("canvas");

const game = new Game(canvas, { ...options });

game.start();
```

## Reference

### Constructor

```typescript
constructor(canvas: HTMLCanvasElement, options?: GameOptions)
```

### Properties

```typescript
options: GameOptions;
scene: Scene;
fps: number;
timeStamp: DOMHighResTimeStamp;
viewport: {
    width: number;
    height: number;
};
clipPath?: Path2D;
```

### Methods

```typescript
start(onStart?: Function)
pause(onPause?: Function)
resume(onResume?: Function)
load(scene: Scene, onLoad?: (scene: Scene) => void)
onKeyDown(callback: (e: KeyboardEvent) => void)
onClick(callback: (e: MouseEvent) => void)
```
