import React from "react";
import { dataTimeLine } from "../assets/info/data";
import styled from "styled-components";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const Styles = styled.div`
  .paper {
    padding: 6px 16px;
  }
`;

const TimelineComponent = () => {
  return (
    <Styles>
      <Timeline align="alternate">
        {dataTimeLine.map((data, index) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent>
              <Typography variant="body2" color="textSecondary">
                {data.date}
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color={data.category.colorIcon} variant="outlined">
                {data.category.icon}
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className="paper">
                <Typography variant="h6" component="h1">
                  {data.title}
                </Typography>
                <Typography>{data.text}</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Styles>
  );
};

export default TimelineComponent;
