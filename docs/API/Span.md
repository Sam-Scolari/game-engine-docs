# Span

## Usage

```typescript
const scene = new Scene();

const span = new Span("some");
span.fill = "red";

const text = new Text(["This is", span, " text"]);
text.font = "Arial";
text.italic = true;

scene.add(text);
```

## Reference

### Constructor

```typescript
constructor(text: string)
```

### Properties

```typescript
font: string;
fontSize: number;
fontWeight: string;
italic: boolean;
fill: string;
stroke: string;
text: string;
```
