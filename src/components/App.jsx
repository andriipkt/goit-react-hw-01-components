// import { Profile } from './Profile/Profile';
// import user from './Profile/user.json';
import { Statistics } from './Statistics/Statistics';
import data from './Statistics/data.json';

export const App = () => {
  // return <Profile user={user} />;
  return <Statistics data={data} />;
};
