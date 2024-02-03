import { useAuth } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';

export function Header() {
  const { userId, signOut } = useAuth();
  const navigate = useNavigate();

  return (
    <header className="">
      <div className="flex p-4 justify-between items-center w-[80%] mx-auto">
        <div className="flex ">
          <input
            type="text"
            placeholder="search"
            className="input input-bordered input-sm"
          />
        </div>
        <div className="flex flex-1">
          <button className="btn btn-link" type="button">
            Products
          </button>
          <button className="btn btn-link" type="button">
            Category
          </button>
          <button className="btn btn-link" type="button">
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
