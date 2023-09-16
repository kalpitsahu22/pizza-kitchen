import { useSelector } from 'react-redux';

function Username() {
  const username = useSelector((state) => state.user.username);

  if (!username) return null;

  return (
    <div className=" hidden text-sm font-semibold md:block">{username} 🫶🏼</div>
  );
}

export default Username;
