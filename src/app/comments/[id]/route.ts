import { comments } from "../data";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const comment = comments.find((comment) => comment.id === parseInt(id));
  if (!comment) {
    return new Response("Comment not found ⚠️", { status: 404 });
  }
  return Response.json(comment);
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await request.json();
  const { text } = body;

  const idx = comments.findIndex((comment) => comment.id === parseInt(id));
  comments[idx].text = text;
  return Response.json(comments[idx]);
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const idx = comments.findIndex((comment) => comment.id === parseInt(id));
  const deletedComment = comments[idx];
  comments.splice(idx, 1);
  return Response.json(deletedComment);
}
