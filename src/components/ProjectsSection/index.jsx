import React from "react";
import { Box, Typography } from "@mui/material";
import AngryGrid from "../Grid/Grid";

const ProjectsSection = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection={"column"}
      sx={{ my: { xs: "50px", sm: "200px" } }}
      position={"relative"}
    >
      <Typography
        variant="h6"
        align="center"
        sx={{
          fontSize: { sm: "24px", md: "34px", lg: "48px", xl: "60px" },
        }}
      >
        My Portfolio
      </Typography>
      <Typography
        variant="h6"
        align="center"
        sx={{
          fontSize: { sm: "16px", md: "24px", lg: "30px" },
          mb: { xs: "20px", sm: "50px" },
        }}
      >
        Below is a collection oef work I am proud of. Thanks for checking it
        out.
      </Typography>
      <AngryGrid></AngryGrid>
      <Box
        sx={{
          display: { xs: "none", sm: "block" },
          position: "absolute",
          top: -150,
          right: 40,
        }}
      >
        <svg
          width="121"
          height="121"
          viewBox="0 0 121 121"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_15_236)">
            <path
              d="M80.43 68.58C88.93 64.27 101.55 62.43 120.91 60.46C101.31 58.46 88.62 56.59 80.13 52.17C82.89 43 90.4 32.62 102.67 17.17C87.67 29.65 77.6 37.4 68.58 40.47C64.27 32 62.43 19.37 60.46 0C58.46 19.6 56.59 32.29 52.17 40.79C43 38 32.62 30.51 17.18 18.24C29.66 33.24 37.41 43.32 40.48 52.33C32 56.64 19.37 58.48 0 60.46C19.6 62.46 32.29 64.32 40.79 68.74C38.02 77.91 30.51 88.29 18.24 103.74C33.24 91.26 43.32 83.51 52.33 80.44C56.64 88.94 58.48 101.56 60.46 120.92C62.46 101.32 64.32 88.63 68.74 80.14C77.91 82.9 88.29 90.42 103.74 102.68C91.25 87.72 83.5 77.6 80.43 68.58Z"
              fill="#FFB100"
            />
          </g>
          <defs>
            <clipPath id="clip0_15_236">
              <rect width="120.91" height="120.91" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </Box>
      <Box
        sx={{
          display: { xs: "none", sm: "block" },
          position: "absolute",
          top: -120,
          left: 40,
        }}
      >
        <svg
          width="137"
          height="137"
          viewBox="0 0 137 137"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_15_85)">
            <path
              d="M61.25 17.03L67.81 66.22L110.37 40.68L76 76.48L122.5 93.83L73.08 89.28L88.51 136.45L61.25 94.98L33.99 136.45L49.42 89.28L0 93.83L46.5 76.48L12.13 40.68L54.69 66.22L61.25 17.03Z"
              fill="#FFB100"
            />
            <path
              d="M121.46 0L123.09 12.16L133.6 5.85L125.11 14.7L136.6 18.98L124.39 17.86L128.2 29.52L121.46 19.27L114.73 29.52L118.54 17.86L106.33 18.98L117.82 14.7L109.32 5.85L119.84 12.16L121.46 0Z"
              fill="#FFB100"
            />
          </g>
          <defs>
            <clipPath id="clip0_15_85">
              <rect width="136.6" height="136.45" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </Box>
      <Box
        sx={{
          display: { xs: "none", sm: "block" },
          position: "absolute",
          bottom: -140,
          right: 20,
        }}
      >
        <svg
          width="89"
          height="108"
          viewBox="0 0 89 108"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M70.5555 61.9887C43.7867 64.4241 41.7531 67.1372 40.1844 107.889C40.1765 107.92 40.1579 107.948 40.1316 107.968C40.1052 107.988 40.0726 107.999 40.0391 107.999C40.0056 107.999 39.973 107.988 39.9466 107.968C39.9203 107.948 39.9017 107.92 39.8938 107.889C38.3168 67.1055 36.2832 64.3924 9.52264 61.9569C9.49003 61.9494 9.46101 61.9317 9.44025 61.9065C9.41949 61.8813 9.4082 61.8502 9.4082 61.8181C9.4082 61.7861 9.41949 61.7549 9.44025 61.7297C9.46101 61.7046 9.49003 61.6868 9.52264 61.6793C36.2832 59.2438 38.3168 56.5307 39.8938 15.7471C39.9017 15.7159 39.9203 15.6882 39.9466 15.6683C39.973 15.6485 40.0056 15.6377 40.0391 15.6377C40.0726 15.6377 40.1052 15.6485 40.1316 15.6683C40.1579 15.6882 40.1765 15.7159 40.1844 15.7471C41.7531 56.5625 43.7867 59.2756 70.5555 61.711C70.5882 61.7185 70.6172 61.7363 70.6379 61.7615C70.6587 61.7867 70.67 61.8178 70.67 61.8498C70.67 61.8819 70.6587 61.913 70.6379 61.9382C70.6172 61.9634 70.5882 61.9812 70.5555 61.9887Z"
            fill="#FFB100"
          />
          <path
            d="M88.0363 26.3694C72.8133 27.7656 71.6596 29.2967 70.7631 52.5087C70.7631 52.6039 70.5971 52.6039 70.5971 52.5087C69.7256 29.2967 68.5469 27.7656 53.3157 26.3694C53.2937 26.3694 53.2725 26.361 53.257 26.3461C53.2414 26.3313 53.2327 26.3111 53.2327 26.29C53.2327 26.269 53.2414 26.2488 53.257 26.2339C53.2725 26.2191 53.2937 26.2107 53.3157 26.2107C68.5469 24.8224 69.7256 23.2834 70.5971 0.0793303C70.5971 0.0582906 70.6059 0.0381126 70.6214 0.0232353C70.637 0.00835798 70.6581 0 70.6801 0C70.7021 0 70.7233 0.00835798 70.7388 0.0232353C70.7544 0.0381126 70.7631 0.0582906 70.7631 0.0793303C71.6596 23.2834 72.8133 24.8224 88.0363 26.179C88.0627 26.179 88.088 26.189 88.1067 26.2069C88.1254 26.2247 88.1359 26.2489 88.1359 26.2742C88.1359 26.2994 88.1254 26.3236 88.1067 26.3415C88.088 26.3593 88.0627 26.3694 88.0363 26.3694Z"
            fill="#FFB100"
          />
          <path
            d="M21.2262 27.1389C11.9381 27.9798 11.2657 28.9238 10.693 43.0842C10.6887 43.0945 10.6812 43.1034 10.6716 43.1096C10.662 43.1158 10.6507 43.1192 10.639 43.1192C10.6274 43.1192 10.6161 43.1158 10.6065 43.1096C10.5969 43.1034 10.5894 43.0945 10.5851 43.0842C10.0456 28.9238 9.33173 28.0115 0.0435771 27.1389C-0.0145257 27.1389 -0.0145257 27.0437 0.0435771 27.0437C9.33173 26.179 10.0456 25.2508 10.5851 11.1062C10.5894 11.0959 10.5969 11.0871 10.6065 11.0808C10.6161 11.0746 10.6274 11.0713 10.639 11.0713C10.6507 11.0713 10.662 11.0746 10.6716 11.0808C10.6812 11.0871 10.6887 11.0959 10.693 11.1062C11.2325 25.2587 11.9381 26.179 21.2262 27.0516C21.2338 27.0484 21.2421 27.0471 21.2503 27.0478C21.2586 27.0485 21.2665 27.0511 21.2734 27.0554C21.2803 27.0597 21.286 27.0656 21.2899 27.0726C21.2939 27.0795 21.2959 27.0873 21.2959 27.0952C21.2959 27.1031 21.2939 27.1109 21.2899 27.1179C21.286 27.1248 21.2803 27.1307 21.2734 27.135C21.2665 27.1394 21.2586 27.142 21.2503 27.1426C21.2421 27.1433 21.2338 27.142 21.2262 27.1389Z"
            fill="#FFB100"
          />
        </svg>
      </Box>
      <Box
        sx={{
          display: { xs: "none", sm: "block" },
          position: "absolute",
          bottom: -240,
          left: 60,
        }}
      >
        <svg
          width="94"
          height="121"
          viewBox="0 0 94 121"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.132411 48.8073C37.1324 66.5267 38.6624 70.8371 20.5624 119.475C20.4824 119.685 20.8724 119.838 20.9724 119.628C43.5624 72.739 47.8224 70.7224 87.2324 82.7074C87.4924 82.7934 87.6124 82.5067 87.3724 82.392C50.3724 64.663 48.8424 60.41 66.9424 11.7247C67.0224 11.5144 66.6324 11.3615 66.5324 11.5717C43.9424 58.4507 39.6824 60.496 0.272411 48.4919C0.00241125 48.4059 -0.107589 48.7404 0.132411 48.8073Z"
            fill="#FFB100"
          />
          <path
            d="M4.7623 13.3782C18.0023 19.6765 18.5323 21.2153 12.0623 38.6002C12.0623 38.6766 12.1723 38.734 12.2023 38.6575C20.2823 21.8939 21.8023 21.1675 35.8923 25.4588C35.9029 25.4649 35.915 25.4682 35.9274 25.4683C35.9398 25.4685 35.952 25.4655 35.9628 25.4596C35.9736 25.4538 35.9826 25.4454 35.9888 25.4351C35.9951 25.4249 35.9984 25.4133 35.9984 25.4014C35.9984 25.3896 35.9951 25.3779 35.9888 25.3677C35.9826 25.3575 35.9736 25.349 35.9628 25.3432C35.952 25.3374 35.9398 25.3344 35.9274 25.3345C35.915 25.3347 35.9029 25.338 35.8923 25.3441C22.7223 19.0075 22.1623 17.4688 28.6423 0.09345C28.6423 0.0169909 28.5223 -0.0403534 28.4923 0.0361057C20.4123 16.7902 18.8923 17.5166 4.8123 13.2253C4.7123 13.1966 4.6723 13.3018 4.7623 13.3782Z"
            fill="#FFB100"
          />
          <path
            d="M44.1125 103.218C53.1825 107.566 53.5625 108.627 49.1125 120.555C49.1125 120.555 49.1925 120.641 49.2125 120.555C54.7525 109.086 55.8025 108.551 65.4725 111.494C65.5325 111.494 65.5625 111.446 65.4725 111.418C56.4025 107.069 56.0225 106.018 60.4725 94.0902C60.4725 94.0329 60.3925 93.9946 60.3725 94.0902C54.8325 105.559 53.7825 106.094 44.1125 103.151C44.0825 103.103 44.0525 103.218 44.1125 103.218Z"
            fill="#FFB100"
          />
          <path
            d="M74.4224 56.7399C82.2924 60.5629 82.6324 61.4326 78.7724 71.7928C78.7724 71.7928 78.8424 71.8693 78.8624 71.7928C83.6724 61.834 84.5824 61.404 93.0024 63.9558C93.0624 63.9558 93.0824 63.9558 93.0024 63.8889C85.1224 60.1137 84.7924 59.1962 88.6524 48.836C88.6524 48.836 88.5824 48.7595 88.5624 48.836C83.7524 58.7948 82.8424 59.2535 74.4524 56.673C74.3924 56.6539 74.3724 56.7113 74.4224 56.7399Z"
            fill="#FFB100"
          />
        </svg>
      </Box>
    </Box>
  );
};

export default ProjectsSection;
