import {
    Admin,
    Resource,
    defaultTheme,
} from "react-admin";
import HeaderMenu from "./header/HeaderMenu";
import jsonServerProvider from "ra-data-json-server";
import UserIcon from "@mui/icons-material/Group";
// import DataIcon from "@mui/icons-material/DataSet";
import {Dashboard} from "./Dashboard";
import authProvider from "./authProvider";
import {ProductCreate, ProductEdit, ProductList, ProductShow} from "./Product";
import {OrderList, OrderShow} from "./Order";

export const App = () => (
  <>
      <HeaderMenu/>
      <Admin
          dataProvider={jsonServerProvider('http://46.17.104.8:8000')}
          dashboard={Dashboard}
          authProvider={authProvider}
          theme={defaultTheme}
          darkTheme={{ palette: { mode: 'dark' } }}
      >
          <Resource
              name="get_all_products"
              options={{ label: 'Products' }}
              list={ProductList}
              edit={ProductEdit}
              show={ProductShow}
              create={ProductCreate}
              // icon={DataIcon}
          />
          <Resource
              name="get_all_orders"
              options={{ label: 'Orders' }}
              list={OrderList}
              show={OrderShow}
              icon={UserIcon}
          />
      </Admin>
  </>
);
