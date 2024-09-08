import { LinkStyled } from './StyledLink.styled';

import { type LinkProps } from 'react-router-dom';

const StyledLink = (props: LinkProps) => <LinkStyled {...props} />;

export default StyledLink;
