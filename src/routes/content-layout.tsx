import * as React from 'react';
import { useAuth } from '@clerk/clerk-react';
import { Outlet, useNavigate } from 'react-router-dom';

export function ContentLayout() {
  const { userId, isLoaded } = useAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!userId) {
      navigate('/sign-in');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!isLoaded) return 'Loading...';

  return <Outlet />;
}
