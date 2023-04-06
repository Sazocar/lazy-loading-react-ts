const Header = (): JSX.Element => {
  return (
    <div className='my-6 mx-8'>
      <h3 className='mb-6 text-base leading-6 text-sky-500 font-semibold tracking-wide uppercase'>
        React with Typescript
      </h3>
      <h1 className='mb-2 text-2xl font-bold'>Lazy Image Component</h1>
      <p className='mb-6 text-xl text-gray-500'>
        React component to load images with lazy loading <br /> ✨✨
      </p>

      <p className='text-gray-500 text-xl'>
        {`Added images won't download until they become visible in the screen`}
        <br /> ✨✨
      </p>
    </div>
  )
}

export default Header

