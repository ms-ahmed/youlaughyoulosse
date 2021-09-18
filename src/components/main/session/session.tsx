import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
const Session: React.FC<any> = () => {
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
        <Box sx={{ bgcolor: "grey.300", width: "250px", height: "250px" }}>
          Item 1
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
            sx={{ marginLeft: "20px", marginTop: "30px;" }}
          >
            Video
          </Button>
          <Button
            variant="contained"
            sx={{ marginLeft: "20px", marginTop: "30px;" }}
          >
            Text
          </Button>
          <Button
            variant="contained"
            sx={{ marginLeft: "20px", marginTop: "30px;" }}
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

export default Session;
