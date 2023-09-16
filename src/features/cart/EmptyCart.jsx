import LinkButton from '../../ui/LinkButton';

function EmptyCart() {
  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <p className="mt-7 rounded-md bg-red-100 p-4 text-center	text-4xl	 font-semibold text-red-700 ">
        Your cart is still empty. Start adding some delicious pizzas🍕🤤
      </p>
    </div>
  );
}

export default EmptyCart;
