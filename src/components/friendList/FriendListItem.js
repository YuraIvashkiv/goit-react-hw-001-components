import {FriendCircle, FriendInform} from './friendList.styled.js'

export const FriendListItem = ({ itemFriend: { avatar, name, isOnline } }) => {
  return (
    <FriendInform>
      <FriendCircle className="status" isonline={isOnline.toString()}>{isOnline}</FriendCircle>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </FriendInform>
  );
};
