import { Profile } from "./profile/Profile";
import profile from '../profile.json'
import { Statistics } from "./statistics/Statistics";
import data  from '../data.json'

export const App = () => {
  return (
    <div>
    <Profile items={profile} />
      <Statistics title="Upload stats" stats={data} />
      </div>
  );
};
