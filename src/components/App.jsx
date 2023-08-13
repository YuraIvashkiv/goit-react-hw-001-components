import { Profile } from './profile/Profile';
import profile from '../profile.json';
import { Statistics } from './statistics/Statistics';
import statistics from '../statistics.json';
import { FriendList } from './friendList/FriendList';
import friends from '../friends.json';
import { GlobalStyle } from './GlobalStyle';
import { TransactionHistory } from './transactionHistory/TransactionHistory';
import transactions from '../transactions.json'


export const App = () => {
  return (
    <div>
      <Profile items={profile} />
      <Statistics title="Upload stats" stats={statistics} />
      {/* <Statistics stats={statistics} /> */}
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
      <GlobalStyle />
    </div>
  );
};
