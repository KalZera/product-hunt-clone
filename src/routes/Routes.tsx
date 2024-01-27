import { Route, Routes as RoutesWrapper } from 'react-router-dom';
import { Home } from '../Pages/Home/HomePage';
import {
  RedirectToSignIn,
  SignIn,
  SignInButton,
  SignUp,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/clerk-react';

export const Routes = () => {
  return (
    <RoutesWrapper>
      <Route
        path="/"
        element={
          <>
            <SignedIn>
              <UserButton />
              <Home />
            </SignedIn>
            <SignedOut>
              <SignInButton />
            </SignedOut>
          </>
        }
      />
      <Route
        path="/sign-in/*"
        element={
          <SignIn redirectUrl={'/home'} routing="path" path="/sign-in" />
        }
      />
      <Route
        path="/sign-up/*"
        element={
          <SignUp redirectUrl={'/home'} routing="path" path="/sign-up" />
        }
      />
      <Route
        path="/home"
        element={
          <>
            <SignedIn>
              <Home />
            </SignedIn>
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </>
        }
      />
    </RoutesWrapper>
  );
};
