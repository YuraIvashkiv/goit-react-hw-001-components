import styled from 'styled-components';

export const ListFriend = styled.ul`
  display: flex;
  gap: 10px;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
`;

export const ItemFriend = styled.li`
  width: 300px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const FriendCircle = styled.span`
  width: 10px;
  display: block;
  height: 10px;
  background-color: ${props => (props.isonline === 'true' ? 'green' : 'red')};
  border-radius: 50%;
  margin-left: 10px;
`;

export const FriendInform = styled.div`
  display: flex;
  align-items: center;
  background-color: silver;
  gap: 10px;
`;
