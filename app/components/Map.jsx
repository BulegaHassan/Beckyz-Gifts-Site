const Map = () => {
  return (
    <div className='relative w-full h-96 pt-0 mt-0 md:-mt-[55px]'>
      <iframe
        className='absolute top-0 left-0 w-full h-full'
        frameborder='0'
        src='https://www.google.com/maps/embed/v1/place?q=Arua+Park+Mall,+Wilson+Road,+Kampala,+Uganda&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8'
      ></iframe>
    </div>
  );
};
export default Map;
