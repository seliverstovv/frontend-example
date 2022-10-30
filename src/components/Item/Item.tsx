import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import RouterLink from 'components/StyledRouterLink'

const Item = ({ name }: { name: string }) => {
    return (
        <RouterLink to={name}>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemText primary={name} />
                </ListItemButton>
            </ListItem>
        </RouterLink>
    )
}

export default Item;
