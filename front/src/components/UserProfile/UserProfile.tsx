import React, {useState} from "react";
import './UserProfile.css'
import {Link, useParams} from "react-router-dom";
import {Button, CardButton} from "../../shared/styledComponents/Buttons";

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
        <ul>
          {/*{user.orders.map((order, index) => (*/}
          {/*    <li key={index}>{order}</li>*/}
          {/*))}*/}
        </ul>
      </div>
      <div className="buttons">
          <Button height={40} bgcolor={'#ff9a78'} className='to-orders-button'><Link to='/orders'><p>История заказов</p></Link></Button>
          <Button height={40} bgcolor={'#ff6161'} className='logout-button'><p>Выйти</p></Button>
      </div>
    </div>
  );
};

export default UserProfile;