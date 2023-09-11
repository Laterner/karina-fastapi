import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";
import { dataProvider } from "./dataProvider";
import { authProvider } from "./authProvider";
import HeaderMenu from "./header/HeaderMenu";

export const App = () => (
  <>
      <HeaderMenu/>
      <Admin dataProvider={dataProvider} authProvider={authProvider}>
          <Resource
              name="posts"
              list={ListGuesser}
              edit={EditGuesser}
              show={ShowGuesser}
          />
          <Resource
              name="comments"
              list={ListGuesser}
              edit={EditGuesser}
              show={ShowGuesser}
          />
      </Admin>
  </>
);
