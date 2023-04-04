export type Following = {
  id: string;
  firstName: string;
  lastName: string;
  picturePath: string;
  job: string;
};

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  picturePath: string;
  location: string;
  job: string;
  viewsProfile: number;
  postsIds: string[];
  likedPostsIDs: string[];
  followedByIDs: string[];
  followingIDs: string[];
  following: Following[];
};
