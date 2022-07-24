import styled from "styled-components";

export const DashboardContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const DashboardArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 100%;
  margin-left: 20%;
`;

export const TopBar = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TopBarHeader = styled.h2`
  width: 20%;
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: 0.25rem;
  margin-left: 4%;
`;

export const FilterWrapper = styled.div`
  width: 15%;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  & Icon {
    color: #3a3a3a;
  }
  & h4 {
    color: #3a3a3a;
    font-weight: 400;
    font-size: 1.15rem;
    letter-spacing: 0.25rem;
  }
`;

export const ColumnContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  margin-left: 1.5rem;
`;

export const ColumnWrapper = styled.div`
  width: 30%;
  height: 75vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f9f9;
`;

export const ColumnHeader = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0.75rem;
  & h5 {
    font-size: 0.85rem;
    font-weight: 500;
  }
`;

export const Count = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #329c89;
  background-color: #ecf3f3;
  width: 2rem;
  height: 2rem;
  border-radius: 0.5rem;
`;

export const Addbutton = styled.button`
  width: 90%;
  background-color: #ecf3f3;
  color: #329c89;
  font-weight: 500;
  border: none;
  border-radius: 0.5rem;
  margin-top: -1rem;
  min-height: 2.5rem;
`;

export const Card = styled.div`
  width: 15rem;
  height: 10rem;
  display: flex;
  flex-direction: column;
  padding: 1rem 0.5rem;
  background-color: #ffffff;
  margin: 0.75rem 0rem;

  & h5 {
    font-size: 0.85rem;
    font-weight: 500;
    color: #212121;
  }

  & p {
    width: 90%;
    font-size: 0.65rem;
    color: #6b6b6b;
    margin-top: -1rem;
  }
`;
