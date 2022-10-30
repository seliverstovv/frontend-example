import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Item from 'components/Item';

const MyList = ({ list, isLoading, limit }: { list: string[], isLoading: boolean, limit: number }) => {
    const skeletonItems = Array.from(Array(limit).keys())

    if (isLoading) {
        return (
            <Stack spacing={1}>
                {skeletonItems.map((i) => (
                    <Skeleton key={i} variant="rounded" width={360} height={48} />
                ))}
            </Stack>
        )
    }

    return (
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <nav aria-label="main mailbox folders">
                <List>
                    {list.map((name) => <Item key={name} name={name} />)}
                </List>
            </nav>
        </Box>
    )
}

export default MyList;
