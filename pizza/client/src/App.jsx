import './App.css';
import { Banner } from './components/Banner';
import { Products } from './components/Products';
import 'bootstrap/dist/css/bootstrap.min.css';
import { QueryClient, QueryClientProvider } from 'react-query'
import { useState } from 'react';
import { Details } from './components/Details';
const queryClient = new QueryClient()

function App() {
  const [selProduct,setSelProduct] = useState(null)

  return (
    <QueryClientProvider client={queryClient}>
      <Banner/>
      {!selProduct && <Products setSelProduct={setSelProduct} />}
      {selProduct && <Details selProduct={selProduct} setSelProduct={setSelProduct}/>}
    </QueryClientProvider>
  );
}

export default App;
