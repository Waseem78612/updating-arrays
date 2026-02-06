import "./App.css";
import AddingArrayList from "./Components/AddingArrayList";
import DeleteArrayList from "./Components/DeleteArrayList";
import ImmutableArrayTransformation from "./Components/ImmutableArrayTransformation";
import ReplaceItemInArray from "./Components/ReplaceItemInArray";
import InsertingIntoAnArray from "./Components/InsertingIntoAnArray";
import ReverseArray from "./Components/ReverseArray";
import UpdatingObjectInsideArray from "./Components/UpdatingObjectInsideArray";
import ConciseLogicWithImmer from "./Components/ConciseLogicWithImmer";
import UpdateItemInShopingCard from "./Components/UpdateItemInShopingCard";
function App() {
  return (
    <>
      <h1>Updating an Arrays</h1>
      <AddingArrayList />
      <DeleteArrayList />
      <ImmutableArrayTransformation />
      <ReplaceItemInArray />
      <InsertingIntoAnArray />
      <ReverseArray />
      <UpdatingObjectInsideArray />
      <ConciseLogicWithImmer />
      <UpdateItemInShopingCard />
    </>
  );
}

export default App;
