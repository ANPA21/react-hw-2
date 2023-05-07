import styled from 'styled-components';
export const OptWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
export const Button = styled.button`
  border-radius: ${p => p.theme.radius.medium};
  background-color: ${p => p.theme.colors.accent};

  :hover {
    background-color: ${p => p.theme.colors.secondary};
    cursor: pointer;
    color: ${p => p.theme.colors.white};
  }
`;
