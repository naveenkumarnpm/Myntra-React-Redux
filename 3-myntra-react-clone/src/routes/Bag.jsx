import BagSummary from "../components/BagSummary";
import BagItem from "../components/BagItem";
import { useSelector } from "react-redux";

const Bag = () => {

  const bagItems=useSelector(state => state.bag)
  const items=useSelector(state => state.items)
  const finalItems=items.filter(item => {
    const itemIndex = bagItems.indexOf(item.id);
    return itemIndex>=0;
  })


  return (
    <>
      <main>
        <div className="bag-page">
          {
            finalItems.map(item => <BagItem item={item}/>)
          }
          <BagSummary/>
        </div>
      </main>
    </>
  );
};
export default Bag;
