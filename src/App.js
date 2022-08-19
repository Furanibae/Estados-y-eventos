// App.js
import { useState } from 'react';
import Header from './components/Header'
import Input from './components/Input';
import Boton from './components/Boton';

function App() {
const [habilitado,setHabilitado] = useState(false);

return(
<div className='div'>
<Header />
<Input setEnabled={setHabilitado}/>
<Boton disabled={habilitado}/>
</div>
);
}
export default App;
