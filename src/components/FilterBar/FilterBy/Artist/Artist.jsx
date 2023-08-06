function Artist({ onButtonClick }) {
  return (
    <div className="hover:border-b-4 border-orange-500">
      <button onClick={onButtonClick} className="text-sm font-mono font-bold">
        ARTIST
      </button>
    </div>
  );
}

export default Artist;
