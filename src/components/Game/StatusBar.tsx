interface Props {
  win: boolean;
}

const Winner = () => {
  return <div className={`text-3xl whitespace-nowrap text-green-500 animate-bounce`}>YOU WIN!</div>;
};

export const StatusBar = ({ win }: Props) => {
  return (
    <div className="flex justify-center w-full sm:w-96 mx-auto p-2 border-0 text-center text-xl">
      <div className="flex justify-center uppercase h-12">
        {win ? <Winner /> : null }
      </div>
    </div>
  );
};
