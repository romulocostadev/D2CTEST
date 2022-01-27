import { Redirect, Route } from 'react-router-dom';
// import { useSelector } from 'react-redux';

interface RouteProps {
  isPrivate?: boolean;
  path: string;
  exact?: boolean;
  component: any;
}

const RouteWrapper = ({
  isPrivate,
  path,
  exact,
  component: Component,
}: RouteProps) => {
  // const signed = useSelector((state: any) => state.auth.signed);

  // if (!signed && isPrivate) return <Redirect to="/" />;

  // if (signed && isPrivate === false) return <Redirect to="/home" />;

  return (
    <Route
      exact={exact}
      path={path}
      render={props => <Component {...props} />}
    />
  );
};

RouteWrapper.defaultProps = {
  isPrivate: false,
  exact: false,
};

export default RouteWrapper;
