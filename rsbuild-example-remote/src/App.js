import './App.css';
import CatCard from "./CatCard";
import {MantineProvider} from "@mantine/core";

const App = () => {
  return (
    <MantineProvider>
      <CatCard buttonCallback={() => {}} imageUrl="" rating={0} description="" name=""/>
    </MantineProvider>
  );
};

export default App;
