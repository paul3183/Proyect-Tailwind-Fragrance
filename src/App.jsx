import './App.css'
import image1 from './assets/images/image-product-mobile.jpg'

function App() {
  return (
    <div className='bg-cream App h-screen px-4 py-7'>
      <div className='bg-white rounded-[10px] overflow-hidden'>
        <img src={image1} alt='hola' />
        <div className='h-[400px] p-5'>
          <h3 className='text-grayishblue text-[15px] tracking-[4px]'>
            PERFUME
          </h3>
          <h1 className='font-bold fran text-[32.2px] leading-[35px] mt-1'>
            Gabrielle Essence Eau De Parfum
          </h1>
          <p className='text-grayishblue montse text-[14.15px] leading-[22.5px] mt-3.5'>
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div className='text-[12px] flex gap-[20px] mt-4 items-center'>
            <h2 className='text-darkcyan fran text-[33px]'>$149.99</h2>
            <h3 className='montse text-grayishblue'>$169.99</h3>
          </div>
          <button className='btn rounded-[10px] mt-[10px] w-[296px] h-[48px] text-[15px] flex gap-2 justify-center items-center'>
            <svg width='15' height='16' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M14.383 10.388a2.397 2.397 0 0 0-1.518-2.222l1.494-5.593a.8.8 0 0 0-.144-.695.8.8 0 0 0-.631-.28H2.637L2.373.591A.8.8 0 0 0 1.598 0H0v1.598h.983l1.982 7.4a.8.8 0 0 0 .799.59h8.222a.8.8 0 0 1 0 1.599H1.598a.8.8 0 1 0 0 1.598h.943a2.397 2.397 0 1 0 4.507 0h1.885a2.397 2.397 0 1 0 4.331-.376 2.397 2.397 0 0 0 1.12-2.021ZM11.26 7.99H4.395L3.068 3.196h9.477L11.26 7.991Zm-6.465 6.392a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Zm6.393 0a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Z'
                fill='#FFF'
              />
            </svg>
            <h3 className='montse text-white'>Add to Cart</h3>
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
