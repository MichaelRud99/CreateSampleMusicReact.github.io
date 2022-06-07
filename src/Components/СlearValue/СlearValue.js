import { useDispatch } from "react-redux";
import { enterAuthor } from "../../utils/redux/inputFields/authorSlice";
import { enterTrack } from "../../utils/redux/inputFields/trackSlice";
import { enterAlbum } from "../../utils/redux/inputFields/albumSlice";
import { enterDataRelease } from "../../utils/redux/inputFields/dataReleaseSlice";

const СlearValue = () => {

   console.log("dc ")
   const dispatch = useDispatch();
   dispatch(enterAuthor(undefined));
   dispatch(enterTrack(undefined));
   dispatch(enterAlbum(undefined));
   dispatch(enterDataRelease(undefined));

   return <></>;
};

export default СlearValue;
