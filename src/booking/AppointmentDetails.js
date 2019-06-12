import React from 'react';
import Media from 'react-media';
import styled from 'styled-components';
import ClinicsDropdown from './ClinicsDropdown';
import DoctorsDropdown from "./DoctorsDropdown";
import AppointmentDate from "./AppointmentDate";
import ActionPanel from "./ActionPanel";

const DesktopContainer = styled.div`
  position: fixed;
  top: 120px;
  padding: 3rem;
  padding-top: 0;
  background-color: #fff;
`;

export default function AppointmentDetails(props) {
  return(
    <Media query={{ minWidth: 775 }}>
      {matches =>
        matches ? (
          <DesktopContainer>
            <ClinicsDropdown/>
            <DoctorsDropdown/>
            <AppointmentDate/>
            <ActionPanel/>
          </DesktopContainer>
        ) : (
          <div>
            <ClinicsDropdown/>
            <DoctorsDropdown/>
            <AppointmentDate/>
            <ActionPanel/>
          </div>
        )
      }
    </Media>
  );
}
