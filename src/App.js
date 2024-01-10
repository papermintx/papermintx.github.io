// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import { setDataProduct } from './redux/productSlide';
import { useDispatch, useSelector } from 'react-redux';




function App() {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.product);
  console.log(productData);

  useEffect(() => {
    const fetchData = async () => {
      try {
          
        const res = await fetch("https://serverweb-3t0g.onrender.com/product");
       
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }

        const resData = await res.json();
        console.log(resData);
        dispatch(setDataProduct(resData));
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, [dispatch]);

  console.log(productData);

  return (
    <>
      <Toaster />   
      <div>
        <Header />
        <main className='pt-16 bg bg-slate-100 min-h-[calc(100vh)]'>
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default App;
