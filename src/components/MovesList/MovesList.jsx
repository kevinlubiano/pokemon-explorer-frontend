import { useState } from "react";
import "./MovesList.css";

const PAGE_SIZE = 3;

function MovesList({ moves }) {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  function handleShowMore() {
    setVisibleCount((prev) => prev + PAGE_SIZE);
  }

  const visibleMoves = moves.slice(0, visibleCount);
  const hasMore = visibleCount < moves.length;

  return (
    <div className="moves-list">
      <h3 className="moves-list__title">Movimientos</h3>
      <ul className="moves-list__items">
        {visibleMoves.map((move) => (
          <li key={move} className="moves-list__item">
            {move}
          </li>
        ))}
      </ul>
      {hasMore && (
        <button
          type="button"
          className="moves-list__button"
          onClick={handleShowMore}
        >
          Mostrar más
        </button>
      )}
    </div>
  );
}

export default MovesList;
