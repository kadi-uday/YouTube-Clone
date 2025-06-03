import Head from './src/components/Head';
import './index.css';
import Body from './src/components/Body';
import { Provider } from 'react-redux';
import appStore from './src/utils/appStore';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainContainer from './src/components/MainContainer';
import WatchPage from './src/components/WatchPage';

function App() {

  const appRouter = createBrowserRouter([{
    path: "/",
    element: <Body />,
    children: [
      {
      path: "/",
      element: <MainContainer />
      },
      {
        path: "/watch",
        element: <WatchPage />
      },
    ]
  }]);

  return (
    <Provider store={appStore} >
      <div className='bg-[#0f0f0f] min-h-screen text-white overflow-x-hidden '>
        <Head />
        <div className='pt-20 md:pt-20 lg:pt-28 bg-[#0f0f0f]'>
          <RouterProvider router={appRouter} />
        </div>
      </div>
    </Provider>
  );
};

export default App;
