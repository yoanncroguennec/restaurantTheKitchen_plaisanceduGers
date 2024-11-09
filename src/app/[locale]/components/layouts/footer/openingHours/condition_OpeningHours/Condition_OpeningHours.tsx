import { Typography, useMediaQuery, useTheme } from '@mui/material';
import moment from 'moment';

type Props = {
    timeOpen: string;
    timeClosed: string;
}
export default function Condition_OpeningHours({timeOpen, timeClosed}: Props) { 
    //////////////////// RESPONSIVES ////////////////////
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"));
  
    if (
        timeOpen <= moment().format("HH:mm:ss") &&
        timeClosed >= moment().format("HH:mm:ss")
      ) {
        return (
          <Typography variant={matches ? "body2" : "h6"}>
           - OUVERT, ferme à {timeClosed}
          </Typography>
        );
      } else {
        return (
          <Typography variant={matches ? "body2" : "h6"}> - FERMÉ - Ouvre à {timeOpen} et ferme à {timeClosed}</Typography>
        );
      }
}
