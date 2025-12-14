import "./App.css";
import { Sheet } from "./components/ui/sheet";

import { Avatar } from "./pages";

function App() {
  return (
    <>
      <Sheet>
        <main>
          {/* this one is putted as it is because requirements don't provide ability to put react-router or any lib and don't require it for this short task */}
          <Avatar />
        </main>
      </Sheet>
    </>
  );
}

export default App;
