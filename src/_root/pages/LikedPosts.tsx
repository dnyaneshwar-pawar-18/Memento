import GridPostList from "@/components/shared/GridPostList";
import Loader from "@/components/shared/Loader";
import { useGetCurrentUser } from "@/lib/react-query/queriesAndMutations";

const LikedPosts = () => {
  const { data: currentUser, isLoading, isError, error } = useGetCurrentUser();

  if (isLoading) {
    return (
      <div className="flex-center w-full h-full">
        <Loader />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex-center w-full h-full">
        <p className="text-red-500">Error: {error.message}</p>
      </div>
    );
  }

  if (!currentUser || !currentUser.pLiked) {
    return <p className="text-light-4">No liked posts</p>;
  }

  if (currentUser.pLiked.length === 0) {
    return <p className="text-light-4">No liked posts</p>;
  }

  return <GridPostList posts={currentUser.pLiked} showStats={false} />;
};

export default LikedPosts;
