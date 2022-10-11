import { useHistory } from "react-router-dom";
import { useMemo, useState } from "react";

export const useHostAPI = () => {
  const history = useHistory();
  const [isSignedIn, setIsSignedIn] = useState(false);
  const onSignOut = () => setIsSignedIn(false);

  const hostAPI = useMemo(
    () => ({
      onNavigate: ({ pathname: nextPathname }) => {
        const {
          location: { pathname },
          push,
        } = history;

        if (pathname !== nextPathname) push(nextPathname);
      },
      getInitialPath: () => {
        const {
          location: { pathname },
        } = history;

        return pathname;
      },
      onSignIn: () => {
        setIsSignedIn(true);
        history.push("/dashboard");
      },
    }),
    [history]
  );

  return { isSignedIn, hostAPI, onSignOut };
};
