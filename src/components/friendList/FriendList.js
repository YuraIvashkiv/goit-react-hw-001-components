
import { FriendListItem } from './FriendListItem.js';
import {ListFriend, ItemFriend} from './friendList.styled.js'


export const FriendList = ({ friends }) => {
  return (
       <ListFriend className="friend-list">
      {friends.map(friend => (
        <ItemFriend key={friend.id}>
          <FriendListItem itemFriend={friend}/>
                      </ItemFriend>

      ))}
    </ListFriend>
  );
};
