import { SmallX } from "../ui/SmallX";

const IngredientsListItem = ({ ingredient, onDelete }) => {
  return (
    <div className="list-item">
      <h3>{ingredient.name}</h3>
      <p>
        {ingredient.amount} {ingredient.units}
      </p>
      <div className="right-action">
        <SmallX onClick={() => onDelete(ingredient.name)} />
      </div>
    </div>
  );
};

export default IngredientsListItem;
