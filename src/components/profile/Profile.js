import {Img, GenProfile, Description,Stats, Tag, Followers, Views, Likes, Label} from './profile.styled.js'

export const Profile = ({
  items: { avatar, username, tag, location, stats },
}) => {
  return (
    <GenProfile className="profile">
      <Description className="description">
        <Img src={avatar} alt="User avatar" className="avatar" />
        <p className="name">{username}</p>
        <Tag className="tag">@{tag}</Tag>
        <p className="location">{location}</p>
      </Description>

      <Stats className="stats">
        <Followers>
          <Label className="label">Followers</Label>
          <span className="quantity">{stats.followers}</span>
        </Followers>
        <Views>
          <Label className="label">Views</Label>
          <span className="quantity">{stats.views}</span>
        </Views>
        <Likes>
          <Label className="label">Likes</Label>
          <span className="quantity">{stats.likes}</span>
        </Likes>
      </Stats>
    </GenProfile>
  );
};
