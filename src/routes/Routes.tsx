import { Route, Routes as RoutesWrapper } from 'react-router-dom';
import { Home } from '../Pages/Home/HomePage';

export const Routes = () => {
  return (
    <RoutesWrapper>
      <Route path="/" element={<Home />} />
    </RoutesWrapper>
  );
};
