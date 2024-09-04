import {Wrapper} from "@/components/Button";
import CircularProgress from '@mui/material/CircularProgress';

const FullScreenLoader = ({ size = '60px' }: { size?: string }) => {
  return (
      <Wrapper>
        <CircularProgress size={size} color="inherit" />
      </Wrapper>
  );
};

export default FullScreenLoader;
