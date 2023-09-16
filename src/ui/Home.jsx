import React from 'react';
import { useSelector } from 'react-redux';
import CreateUser from '../features/user/CreateUser';
import Button from './Button';
import MyImage from '../pizzaa.png'; // Import your image file

function Home() {
  const username = useSelector((state) => state.user.username);
  return (
    <div className="my-5 overflow-hidden px-4 text-center">
      <h1 className="mb-8 text-xl font-semibold capitalize md:text-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {username === '' ? (
        <CreateUser />
      ) : (
        <Button to="/menu" type="primary">
          Continue Ordering, {username}
        </Button>
      )}
      <div className="flex items-center justify-center">
        <img
          src={MyImage} // Use the imported image
          alt="Pizza" // Alt text for the image
          className="relative h-80 w-80 cursor-pointer object-cover grayscale filter transition-all duration-300 hover:grayscale-0"
        />
      </div>
    </div>
  );
}

export default Home;
