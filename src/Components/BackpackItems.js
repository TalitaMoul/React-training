import "./BackpackItems.css"

const BackpackItems = ({
  number_of_items,
  item_name, weight,
  total_weight,
  normal_magical_consumable
 }) => {

  return (
    <div className="master_item_container">
        <div className="item_container">
            <div className="number_of_items">{number_of_items}</div>
            <div className="item_name">{item_name}</div>
            <div className="weight">{weight}</div>
            <div className="total_weight">{total_weight}</div>
            <div className="normal_magical_consumable">{normal_magical_consumable}</div>
            <div>
                <img src="/delete-button.png" alt="botão de excluir"/>
            </div>
        </div>
        <button>+</button>
    </div>
  )
}

export default BackpackItems