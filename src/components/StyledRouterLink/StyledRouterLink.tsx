import { Link } from 'react-router-dom';
import styled from '@emotion/styled'

const StyledRouterLink = styled(Link)`
    text-decoration: none;
    color: inherit;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        color: inherit;
    }
`

export default StyledRouterLink;
