import React, { useRef, useEffect, useState } from "react";
import { Box, Grid, Typography, Paper } from "@mui/material";
import fotoAnda from "../../assets/foto.jpg";

const IntroSection = () => {
  const spanRef = useRef(null);
  const [widthLine, setWidthLine] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (spanRef.current) {
        const spanWidth = spanRef.current.offsetWidth;
        console.log("Width:", spanWidth);
        setWidthLine(spanWidth);
        // Perform additional logic or update state based on the width value
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Box sx={{ boxShadow: "none", m: "auto" }}>
      <Paper
        sx={{
          marginTop: 4,
          marginBottom: 4,
          padding: 2,
          display: "flex",
          alignItems: "center",
          boxShadow: "none",
        }}
      >
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "left",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                fontSize: { sm: "24px", md: "34px", lg: "48px", xl: "90px" },
                maxWidth: { md: "600px", xl: "1200px" },
              }}
            >
              Hi, I'm Anda, a{" "}
              <span style={{ fontWeight: "bold", color: "#006C67" }}>
                marketing enthusiast
              </span>{" "}
              with a knack for web design and a focus on statistics.
            </Typography>
            <Typography
              sx={{
                fontSize: {
                  xs: "40px",
                  sm: "24px",
                  md: "34px",
                  lg: "48px",
                  xl: "90px",
                },
                color: "#006C67",
              }}
              variant="h6"
            >
              <span ref={spanRef}>Get to know me!</span>
            </Typography>
            <Box>
              <svg
                width={Math.round(widthLine)}
                height="44"
                viewBox="0 0 1292 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1187.86 5.14451C1159.63 4.00129 1131.41 3.16068 1103.13 2.18558C1093.82 1.84933 1084.51 1.84933 1075.2 1.68121L1014.55 0.605236C1003.26 0.403491 992.013 0.134497 980.771 0C977.538 0 974.257 0 971.121 0H949.119H849.049C841.136 0 833.175 0 825.262 0.201745L766.108 0.840606C743.913 1.04235 721.718 1.14322 699.572 1.51309L591.879 3.29518C571.131 3.66504 550.336 3.86679 529.588 4.4384L422.233 7.39733C402.643 7.93532 383.102 8.37244 363.561 9.1458L252.539 13.3825C232.756 14.1558 212.974 14.7274 193.24 15.9043L82.7482 22.6291L58.8646 24.0413C42.9422 24.9828 27.0681 26.4623 11.2422 27.7064L8.25069 28.009C6.42278 28.3676 4.76007 29.0512 3.42573 29.9928C1.29069 31.4469 0.0604768 33.4272 0 35.5072C0.0117391 37.5743 1.19032 39.5552 3.28098 41.0216C4.30514 41.7691 5.54272 42.3588 6.91395 42.7526C8.28517 43.1464 9.75959 43.3356 11.2422 43.308C30.542 41.8286 49.4559 40.2146 68.6593 39.105L122.023 35.9443L180.212 32.5819C188.029 32.1112 195.845 31.5059 203.71 31.2033L294.323 27.6391L350.92 25.4536C358.688 25.1846 366.504 24.7811 374.273 24.5793L464.21 22.1584L518.732 20.7125C524.86 20.7125 530.939 20.3427 537.067 20.2418L634.193 18.6951L688.426 17.8545C694.891 17.8545 701.309 17.5855 707.726 17.5519L808.037 16.7449C828.881 16.7449 849.676 16.4759 870.52 16.5095H976.67C983.666 16.5095 990.662 16.7113 997.658 16.8794L1056.67 18.2916L1100.72 19.1994C1111.09 19.4348 1121.52 19.9728 1131.94 20.3427C1162.58 21.5195 1193.17 22.6964 1223.61 24.0413C1231.38 24.3776 1239.15 24.7811 1246.96 25.1846C1254.78 25.5881 1263.61 25.9915 1271.91 26.664C1273.2 26.7985 1274.5 26.9666 1275.82 27.1684C1278.98 27.72 1282.32 27.4198 1285.18 26.3278C1287.23 25.4793 1288.88 24.2299 1289.93 22.7343C1290.97 21.2387 1291.36 19.5625 1291.06 17.913C1290.75 16.2635 1289.75 14.7131 1288.19 13.4537C1286.63 12.1943 1284.58 11.281 1282.28 10.827C1276.65 9.88095 1270.93 9.25127 1265.15 8.94405L1253.33 8.10344C1245.76 7.56546 1238.13 7.29646 1230.51 6.89297C1216.37 6.15324 1202.09 5.71612 1187.86 5.14451Z"
                  fill="#FFB100"
                />
              </svg>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              justifyContent: "center",
              alignItems: "center",
              order: { xs: 1, sm: 2 },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "right",
              }}
            >
              <img
                src={fotoAnda}
                alt="Profile"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default IntroSection;
