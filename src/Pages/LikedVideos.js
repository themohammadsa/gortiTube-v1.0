import { useLibraryContext } from "../Context/LibraryContext";
import { VideoCard } from "../Components/VideoCard";
import { NavBar } from "../Components/NavBar";
import { Footer } from "../Components/Footer";
import { Toast } from "../Components/Toast";
import { useToggleContext } from "../Context/ToggleContext";

export const LikedVideos = () => {
  const { state, dispatch } = useLibraryContext();
  const { setToastText, setToastShow } = useToggleContext();

  return (
    <>
      <div className="page">
        <div>
          {" "}
          <NavBar />{" "}
        </div>
        <div className="flex-column margin-auto">
          <h1 className="heading">Liked Videos</h1>
          <h3 className="sub-heading"> ({state.likedVideos.length} videos) </h3>
          {state.likedVideos.length > 0 && (
            <div className="flex-row flex-wrap justify-space-evenly  ">
              {state.likedVideos.map((video, index) => {
                return (
                  <div key={index}>
                    <div style={{ position: "relative" }}>
                      {" "}
                      <VideoCard video={video} />{" "}
                      <span
                        className="button-close"
                        onClick={() => {
                          dispatch({
                            type: "REMOVE_FROM_LIKED_VIDEOS",
                            payload: video
                          });
                          setToastShow((toggle) => !toggle);
                          setToastText("Removed from Liked Videos");
                        }}
                      >
                        {" "}
                        ×{" "}
                      </span>
                    </div>
                  </div>
                );
              })}{" "}
            </div>
          )}{" "}
        </div>
      </div>{" "}
      <Toast />
      <Footer />{" "}
    </>
  );
};
