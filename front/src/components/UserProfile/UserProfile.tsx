import React, {useState} from "react";
import './UserProfile.css'
import {useParams} from "react-router-dom";

interface User {
    name: string;
    avatar: string;
    orders: string[];
    balance: number;
}

interface ProfileProps {
    user: User;
    onLogout: () => void;
}

type UserProfileParams = {
    userId: string
}

const UserProfile: React.FC = () => {
  const { userId } = useParams<UserProfileParams>();
  const [user, setUser] = useState<User>()

  return (
    <div className="profile">
      <div className="avatar">
        {/*<img src={user.avatar} alt="User Avatar" />*/}
        <img src='/src/no_image.png' alt="User Avatar" />
      </div>
      <div className="info">
        {/*<h2>{user.name}</h2>*/}
        {/*<p>Баланс: {user.balance}</p>*/}
        <h2>Диджей</h2>
        <p>Баланс: 10000</p>
        <h3>История заказов:</h3>
        <ul>
          {/*{user.orders.map((order, index) => (*/}
          {/*    <li key={index}>{order}</li>*/}
          {/*))}*/}
        </ul>
      </div>
      <button className="logout-button">
                Выйти
      </button>
    </div>
  );
};

export default UserProfile;