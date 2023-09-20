const TestimonialCard = ({ url, name, role, comment }) => {
  return (
    <div className='mb-12 md:mb-0 '>
      <div className='mb-6 flex justify-center'>
        <img
          src={url}
          alt={name}
          className='w-32 rounded-full shadow-lg dark:shadow-black/20'
        />
      </div>
      <h5 className='mb-2 text-lg font-bold text-center'>{name}</h5>
      <h6 className='mb-4 font-medium text-brightRed text-center underline decoration-coral-red'>
        {role}
      </h6>
      <p className='mb-4'>
        {comment}
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 96 960 960'
          className='inline-block w-6 text-coral-red'
        >
          <path
            fill='currentColor'
            d='M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z'
          />
        </svg>
      </p>
      <ul className='mb-0 flex justify-center'>
        <li>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 96 960 960'
            className='w-5 text-brightRedLight'
          >
            <path
              fill='currentColor'
              d='m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z'
            />
          </svg>
        </li>
        <li>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 96 960 960'
            className='w-5 text-brightRedLight'
          >
            <path
              fill='currentColor'
              d='m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z'
            />
          </svg>
        </li>
        <li>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 96 960 960'
            className='w-5 text-brightRedLight'
          >
            <path
              fill='currentColor'
              d='m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z'
            />
          </svg>
        </li>
        <li>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 96 960 960'
            className='w-5 text-brightRedLight'
          >
            <path
              fill='currentColor'
              d='m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z'
            />
          </svg>
        </li>
        <li>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 96 960 960'
            className='w-5 text-brightRedLight'
          >
            <path
              fill='currentColor'
              d='m480 757 157 95-42-178 138-120-182-16-71-168v387ZM233 976l65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z'
            />
          </svg>
        </li>
      </ul>
    </div>
  );
};
export default TestimonialCard;
