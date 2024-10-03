import { BrowserRouter } from 'react-router-dom';
import Profile from './Profile';
import user from '../user.json';

const isProduction = process.env.NODE_ENV === 'production';
export const App = () => {
  return (
    <>
      <BrowserRouter basename={isProduction ? '/goit-react-hw-01' : ''}>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </BrowserRouter>
    </>
  );
};
