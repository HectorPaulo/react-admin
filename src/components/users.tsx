import { List, Datagrid, TextField, EmailField, SimpleList} from "react-admin";
import { useMediaQuery, Theme } from "@mui/material";
import MyUrlField from "./MyUrlField";

export const UserList = () => {
    const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));
    return (
        <List>
            {isSmall ? (
                <SimpleList
                    primaryText={record => record.name}
                    secondaryText={record => record.email}
                    tertiaryText={record => record.phone}
                />
            ) : (
                <Datagrid>
                <TextField source="id" />
                <TextField source="name" />
            -   <TextField source="username" />
                <EmailField source="email" />
            -   <TextField source="address.street" />
                <TextField source="phone" />
                <MyUrlField source="website" />
                <TextField source="company.name" />
            </Datagrid>
            )}
        </List>
    );
};