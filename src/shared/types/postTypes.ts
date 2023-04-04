export type Post = {
  id: string;
  userId: string;
  userPicturePath: string;
  picturePath: string;
  firstName: string;
  lastName: string;
  job: string;
  description: string;
  likes: string[];
  comments: Comment[];
};

export type Comment = {
  id: string;
  userId: string;
  userFirstName: string;
  userLastName: string;
  userPhotoPicturePath: string;
  postId: string;
  content: string;
};

export type CommentItem = Omit<Comment, "postId" | "userId" | "id">;
