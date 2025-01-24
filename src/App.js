import './App.css';
import { SplitScreen } from './split-screen';
import { RegularList } from "./components/lists/RegularList";
import { authors } from "./data/authors";
import { SmallListItems } from "./components/authors/smallListItems";
import { LageListItems } from "./components/authors/largeListItems";

const LeftSideComp=({title})=>{
  return <h1 style={{
    backgroundColor:"red"
  }}> {title} </h1>
}

const RightSideComp=({title})=>{
  return <h1 style={{
    backgroundColor:"blue"
  }}> {title}</h1>
}



function App() {
  return (
    <>
   <SplitScreen  leftWidth={1} rightWidth={3}>
     <LeftSideComp title="left" />
     <RightSideComp title="right"/>
     </SplitScreen>
     <RegularList items={authors} sourceName="author" ItemComponent={SmallListItems}  />
     <RegularList items={authors} sourceName="author" ItemComponent={LageListItems}  />

     </>
  );
}

export default App;
