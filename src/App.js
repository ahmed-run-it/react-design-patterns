import './App.css';
import { SplitScreen } from './split-screen';

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
   <SplitScreen  leftWidth={1} rightWidth={3}>
     <LeftSideComp title="left" />
     <RightSideComp title="right"/>
     </SplitScreen>
  );
}

export default App;
