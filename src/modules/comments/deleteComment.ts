import { ReplykeHttpClient } from "../../core/client";

export interface DeleteCommentProps {
  commentId: string;
}

export async function deleteComment(
  client: ReplykeHttpClient,
  data: DeleteCommentProps
): Promise<void> {
  const path = `/comments/${data.commentId}`;

  const response = await client.projectInstance.delete<void>(path);
  return response.data;
}
