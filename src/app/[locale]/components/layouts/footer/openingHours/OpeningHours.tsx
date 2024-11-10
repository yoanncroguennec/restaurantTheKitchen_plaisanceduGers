import { Typography, useMediaQuery, useTheme } from "@mui/material";
import moment from "moment";
import "moment/locale/fr";
//
import Condition_OpeningHours from "./condition_OpeningHours/Condition_OpeningHours";
// DATAS
import { days_openingHours } from "@/app/[locale]/utils/constants/data/data_days_openingHours";
// STYLES
import { RootOpeningHours, TypoDay } from "./StylesOpeningHours";

export default function OpeningHours() {
  //////////////////// RESPONSIVES ////////////////////
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  //
  var now = moment();
  const currenteDay = `${moment(now).format("dddd")}`;
  const str = `${currenteDay[0].toUpperCase()}${currenteDay.slice(1)}`;

  return days_openingHours.map(({ day, timeOpen, timeClosed, timeDisplay }) => {
    console.log("day", day);

    if (str == day) {
      return (
        <RootOpeningHours>
          <TypoDay color='#00F' variant={matches ? "body2" : "h6"}>
            {str}
          </TypoDay>
          <Condition_OpeningHours timeOpen={timeOpen} timeClosed={timeClosed} />
        </RootOpeningHours>
      );
    } else {
      return (
        <RootOpeningHours>
          <TypoDay color="#F00" variant={matches ? "body2" : "h6"}>
            {day}
          </TypoDay>
          <Typography variant={matches ? "body2" : "h6"}>{timeDisplay}</Typography>
        </RootOpeningHours>
      );
    }
  });
}
