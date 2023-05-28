import Profile from './Profile';
import userData from '../assets/user.json';

import Statistics from './Statistics';
import stats from '../assets/data.json';

import FriendList from './FriendList/FriendList';
import friends from '../assets/friends.json';

import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from '../assets/transactions.json';

// console.dir(transactions);

const titleStats = 'Upload stats';

export const App = () => {
  return (
    <>
      <Profile userData={userData} />
      <Statistics title={titleStats} data={stats} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </>
  );
};
