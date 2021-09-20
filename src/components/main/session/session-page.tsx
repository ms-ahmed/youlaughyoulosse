// Download the models in the publix folder
// Import the models and load them before the components rendres => useEffect
// Show the video and put in a canvas
//

import React, { useRef, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
// 1
import * as tf from "@tensorflow/tfjs";
import * as facemesh from "@tensorflow-models/face-landmarks-detection";
import * as faceapi from "face-api.js";
import { drawMesh } from "./utilities";
const SessionPage: React.FC<any> = () => {
  interface Option {
    audio: boolean;
    video: boolean;
  }

  const webcamRef: React.MutableRefObject<any> = useRef(null);
  const canvasRef: React.MutableRefObject<any> = useRef(null);
  const MODEL_URL = "/models";
  let videoStream;
  const startVideo = async () => {
    navigator.mediaDevices
      .getUserMedia({
        //audio: true,
        video: { width: 320 },
      })
      .then((stream) => (webcamRef.current.srcObject = stream));
  };

  useEffect(() => {
    startVideo();
  });
  return (
    <div style={{ width: "100%" }}>
      <Box
        sx={{
          position: "relative",
          marginTop: "20px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",

          height: "400px",
        }}
      >
        <Box
          sx={{
            bgcolor: "grey.300",
            width: "250px",
            height: "250px",
            position: "relative",
          }}
        >
          <video
            ref={webcamRef}
            style={{
              position: "absolute",
              left: "0",
              marginLeft: "auto",
              marginRight: "auto",
              textAlign: "center",
              width: 250,
              height: 250,
              zIndex: 3,
            }}
            autoPlay
          ></video>
          {/*     <canvas
            ref={canvasRef}
            style={{
              position: "absolute",
              textAlign: "center",
              left: "0",
              width: 250,
              height: 187,
              backgroundColor: "red",
            }}
          /> */}
        </Box>
        <Box
          sx={{
            position: "absolute",

            marginTop: "290px",
            bgcolor: "grey.300",
            width: "350px",
            height: "100px",
            top: "0px",
          }}
        >
          <Button
            variant="contained"
            sx={{ marginLeft: "30px", marginTop: "30px;" }}
          >
            Video
          </Button>
          <Button
            variant="contained"
            sx={{ marginLeft: "30px", marginTop: "30px;" }}
          >
            Text
          </Button>
          <Button
            variant="contained"
            sx={{ marginLeft: "30px", marginTop: "30px;" }}
          >
            Image
          </Button>
        </Box>
        <Box
          sx={{
            bgcolor: "grey.300",
            width: "350px",
            height: "270px",
          }}
        >
          Item 3
        </Box>
        <Box sx={{ bgcolor: "grey.300", width: "250px", height: "250px" }}>
          <h1>item 4</h1>
        </Box>
      </Box>
    </div>
  );
};

export default SessionPage;
