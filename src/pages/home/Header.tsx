import { useAuth } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/logo.svg';

export function Header() {
  const { userId, signOut } = useAuth();
  const navigate = useNavigate();

  return (
    <header className="">
      <div className="flex p-4 justify-between items-center xl:w-[80%] mx-auto w-full">
        <div className="flex w-[200px]">
          {/* logo based on https://logoipsum.com/  */}
          <img src={Logo} alt={'logo'} className="rounded-md" />
        </div>
        <div className="flex mr-4">
          <input
            type="text"
            placeholder="search"
            className="input input-bordered input-sm"
          />
        </div>
        <div className="flex flex-1 gap-2">
          <button className="btn btn-sm btn-ghost" type="button">
            Products
          </button>
          <button className="btn btn-sm btn-ghost" type="button">
            Category
          </button>
          <button className="btn btn-sm btn-ghost" type="button">
            About
          </button>
        </div>
        <div className="flex justify-around">
          <button
            className="btn btn-sm btn-primary"
            type="button"
            onClick={() => {
              if (!userId) {
                navigate('/sign-in');
              }
              signOut();
              navigate('/sign-in');
            }}
          >
            {userId ? 'Sign Out' : 'Sign In'}
          </button>
          <div className="w-2" />
          {!userId && (
            <button
              className="btn btn-sm btn-neutral"
              type="button"
              onClick={() => {
                if (!userId) {
                  navigate('/sign-up');
                }
              }}
            >
              Register
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
