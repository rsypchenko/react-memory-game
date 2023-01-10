interface Props {
  onClick: () => void;
  absolute: boolean;
}

export const RestartButton = ({ onClick, absolute }: Props) => {
  return (
    <div className="flex justify-center">
      <button
        className={`w-60 sm:w-96 mx-auto bg-green-400 text-white p-4 uppercase shadow-xl mb-4 transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-green-600 duration-300 ${
          absolute ? "absolute top-20" : ""
        }`}
        onClick={onClick}
      >
        New Game
      </button>
    </div>
  );
};
