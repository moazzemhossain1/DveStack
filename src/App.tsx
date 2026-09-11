
import { Suspense, useState } from "react";
import Banear from "./Components/Banear"
import Naveber from "./Components/Naveber"
import type { TechnologyType } from "./Type";
import Technologys from "./Components/technologys/Technologys";


const getTechnologyData = async (): Promise<TechnologyType[]> => {
  const res = await fetch("/Data.json");
  const data = await res.json();

  return data;
};

function App() {
  const [getDataPromise]=useState((()=>getTechnologyData()))

  const [number,setnumber]=useState<number>(0)


  return (
    <>
      <Naveber></Naveber>
      <Banear></Banear>
      <Suspense fallback={<h3>Loadding...</h3>}>
      <Technologys
      getDataPromise={getDataPromise} 
      number={number}
      setnumber={setnumber}
      >

      </Technologys>

      </Suspense>

      
    </>
  )
}

export default App
