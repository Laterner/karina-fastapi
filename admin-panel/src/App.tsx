import {
    Admin,
    Resource,
    EditGuesser,
    ShowGuesser, defaultTheme,
} from "react-admin";
import HeaderMenu from "./header/HeaderMenu";
import jsonServerProvider from "ra-data-json-server";
import ProductList from "./ProductList";
import ProductCreate from "./ProductCreate";
import UserList from "./UserList";
import UserIcon from "@mui/icons-material/Group";
import DataIcon from "@mui/icons-material/DataSet";
import {Dashboard} from "./Dashboard";
import authProvider from "./authProvider";

export const App = () => (
  <>
      <HeaderMenu/>
      <Admin
          dataProvider={jsonServerProvider('http://localhost:8000')}
          dashboard={Dashboard}
          authProvider={authProvider}
          theme={defaultTheme}
          darkTheme={{ palette: { mode: 'dark' } }}
      >
          {/*продукты в будущем*/}
          <Resource
              name="get_all_products"
              options={{ label: 'Products' }}
              list={ProductList}
              edit={EditGuesser}
              show={ShowGuesser}
              create={ProductCreate}
              icon={DataIcon}
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
