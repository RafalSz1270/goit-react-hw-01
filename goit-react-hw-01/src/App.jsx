// src/App.jsx
import React from 'react';
import Profile from './components/Profile.jsx';
import FriendList from './components/FriendList.jsx';
import TransactionHistory from './components/TransactionHistory.jsx';
import userData from './userData.json';
import friends from './friends.json';
import transactions from './transactions.json';

const App = () => (
  <>
    <Profile
      name={userData.username}
      tag={userData.tag}
      location={userData.location}
      image={userData.avatar}
      stats={userData.stats}
    />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
  </>
);

export default App;
