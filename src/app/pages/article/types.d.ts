interface Span {
  content: string;
  data?: any;
  type: "text" | "link" | "image";
}

interface JSONElement {
  spans: Span[];
  list: JSONElement[];
  level: number;
  type: "text" | "list" | `h${1|2|3|4}` | "error";
  title: string;
  id: string;
}

interface Article {
  title: string;
  id: string;
  elements: JSONElement[];
}