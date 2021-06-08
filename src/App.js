import React from "react";
import Profile from "./Components/Profile/Profile";
import user from "./data/user.json";
import statisticalData from "./data/statistical-data.json";
import Statistics from "./Components/Statistics/Statistics";
import transactions from "./data/transactions.json";
import TransactionHistory from "./Components/Transactionhistory/TransactionHistory";
import friends from "./data/friends.json";
import FriendList from "./Components/Friendlist/FriendList";

const App = () => {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
