# Text

## Usage

```typescript
const scene = new Scene();
const text = new Text(["This is some text"]);

text.font = "Arial";
text.italic = true;

scene.add(text);
```

## Reference

### Constructor

```typescript
constructor(textNodes: (Span | string)[])
```

### Properties

```typescript
font: string;
fontSize: number;
fontWeight: string;
italic: boolean;
fill: string;
stroke: string;
textNodes: (Span | string)[];
```
