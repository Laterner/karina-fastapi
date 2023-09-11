import './HeaderMain.css';
import HeaderMenu from '../HeaderMenu/HeaderMenu';
import HeaderBar from '../HeaderBar/HeaderBar';

export default function HeaderMain() {
  return (
    <div className="header_bar">
      <HeaderMenu />
      <HeaderBar />
    </div>
  );
}
