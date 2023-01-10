import { Square } from "../Square/Square";

interface Props {
  squares: Array<any>;
  onClick: (i: number) => void;
}

const style = {
	display: "grid",
	gridTemplate: "repeat(4, 1fr) / repeat(4, 1fr)",
};

export const Board = ({ squares, onClick }: Props) => (
  <div className="flex justify-center">
    <div style={style} className="w-96 h-96 sm:h-96 sm:w-96 m-4">
      {squares.map((square, i) => (
        <Square key={i} value={square.value} done={square.done} open={square.open} onClick={() => onClick(i)} />
      ))}
    </div>
  </div>
);
