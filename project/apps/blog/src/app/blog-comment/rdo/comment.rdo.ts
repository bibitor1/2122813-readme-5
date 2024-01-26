import { Expose } from 'class-transformer';

export class CommentRdo {
  @Expose()
  public id: string;

  @Expose()
  public postId: number;

  @Expose()
  public message: string;

  @Expose()
  public userId: string;

  @Expose()
  public createdAt: Date;
}
