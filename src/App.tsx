import {
  Admin,
  Resource,
  ShowGuesser,
} from "react-admin";
import { PostCreate, PostEdit, PostList } from "./components/posts";
import { dataProvider } from "./dataProvider";
import { UserList } from "./components/users";
import PostIcon from '@mui/icons-material/Book';
import UserIcon from '@mui/icons-material/Group';
import { Dashboard } from "./pages/Dashboard";
import { authProvider } from "./auth/authProvider";

export const App = () => (
  <Admin authProvider={authProvider} dataProvider={dataProvider} dashboard={Dashboard}>
    <Resource 
      name="posts" 
      list={PostList} 
      edit={PostEdit} 
      create={PostCreate}
      icon={PostIcon}
    />
    <Resource
      name="users" 
      list={UserList} 
      show={ShowGuesser} 
      icon={UserIcon}
    />
  </Admin>
);
