import User from './User';
import userData from '../assets/user.json';

import Statistics from './Statistics';
import stats from '../assets/data.json';

import FriendList from './FriendList/FriendList';
import friends from '../assets/friends.json';

import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from '../assets/transactions.json';

// console.dir(transactions);

const {
  avatar,
  location,
  tag,
  username,
  stats: { followers, views, likes },
} = userData;

const title = 'Upload stats';

export const App = () => {
  return (
    <>
      <User
        avatar={avatar}
        location={location}
        tag={tag}
        username={username}
        followers={followers}
        views={views}
        likes={likes}
      />
      <Statistics title={title} data={stats} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </>
  );
};
