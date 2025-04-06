import { notFound, redirect } from "next/navigation";

type paramsType = Promise<{ courseId: string; reviewId: string }>;

function getRandInt(count: number) {
  return Math.floor(Math.random() * count);
}

async function page({ params }: { params: paramsType }) {
  const randInt = getRandInt(2);
  if (randInt === 1) {
    throw new Error("Error loading review 😢");
  }
  const { courseId, reviewId } = await params;
  if (parseInt(reviewId) > 1000) {
    //notFound();
    redirect("/courses");
  }
  return (
    <h1>
      Review: {reviewId} for course: {courseId}
    </h1>
  );
}

export default page;
