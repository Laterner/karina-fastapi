import {
    Admin,
    Resource,
    EditGuesser,
    ShowGuesser,
} from "react-admin";
import HeaderMenu from "./header/HeaderMenu";
import jsonServerProvider from "ra-data-json-server";
import ProductList from "./ProductList";
import ProductCreate from "./ProductCreate";
import UserList from "./UserList";
import UserIcon from "@mui/icons-material/Group";
import {Dashboard} from "./Dashboard";
import authProvider from "./authProvider";

export const App = () => (
  <>
      <HeaderMenu/>
      <Admin
          dataProvider={jsonServerProvider('http://185.221.162.85:8000')}
          dashboard={Dashboard}
          authProvider={authProvider}
      >
          {/*продукты в будущем*/}
          <Resource
              name="products"
              list={ProductList}
              edit={EditGuesser}
              show={ShowGuesser}
              create={ProductCreate}
          />
          {/*пользователи*/}
          <Resource
              name="users"
              list={UserList}
              show={ShowGuesser}
              icon={UserIcon}
          />
      </Admin>
  </>
);
