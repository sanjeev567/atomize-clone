import "./design.scss";
import KeyFeatureCard from "../keyFeatureCard/KeyFeatureCard";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const Design = () => {
  const linkText = (
    <span>
      Design Resource <ArrowForwardIcon style={{ fontSize: "small" }} />
    </span>
  );
  return (
    <>
      <div className="design">
        <h1>
          A combination of tools to design and develop <br /> modern
          applications at ease.
        </h1>
        <div className="design-boxes">
          <KeyFeatureCard
            img="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDM2IDMyIj4KICA8ZyBmaWxsPSJub25lIj4KICAgIDxwb2x5Z29uIGZpbGw9IiNGREIzMDAiIHBvaW50cz0iMTcuNjU1IDAgNy43MDQgMS4wNTIgMCAxMS4zOTQgMTcuNjU1IDMxLjk1MyAzNS4zMSAxMS4zOTQgMjcuNjA2IDEuMDUyIi8+CiAgICA8cGF0aCBmaWxsPSIjRUI2QzAwIiBkPSJNMCwxMS4zOTQyMDY5IEwxNy42NTUxNzI0LDMxLjk1MzM3OTMgTDcuMTUxMTcyNDEsMTEuMzk0MjA2OSBMMCwxMS4zOTQyMDY5IFogTTI4LjE1OTAzNDUsMTEuMzk0MjA2OSBMMTcuNjU1MTcyNCwzMS45NTMzNzkzIEwzNS4zMTAzNDQ4LDExLjM5NDIwNjkgTDI4LjE1OTAzNDUsMTEuMzk0MjA2OSBaIi8+CiAgICA8cG9seWdvbiBmaWxsPSIjRkRBRDAwIiBwb2ludHM9IjcuMTUxIDExLjM5NCAxNy42NTUgMzEuOTUzIDI4LjE1OSAxMS4zOTQiLz4KICAgIDxwYXRoIGZpbGw9IiNGREQyMzEiIGQ9Ik03LjcwNDEzNzkzLDEuMDUyMTM3OTMgTDcuMTUxMDM0NDgsMTEuMzk0MjA2OSBMMTcuNjU1MTcyNCwwIEw3LjcwNDEzNzkzLDEuMDUyMTM3OTMgWiBNMjguMTU5MDM0NSwxMS4zOTQyMDY5IEwyNy42MDYyMDY5LDEuMDUyMTM3OTMgTDE3LjY1NTE3MjQsMCBMMjguMTU5MDM0NSwxMS4zOTQyMDY5IFoiLz4KICAgIDxwYXRoIGZpbGw9IiNGREFEMDAiIGQ9Ik0yOC4xNTkxNzI0LDExLjM5NDIwNjkgTDM1LjMxMDM0NDgsMTEuMzk0MjA2OSBMMjcuNjA2MzQ0OCwxLjA1MjEzNzkzIEwyOC4xNTkxNzI0LDExLjM5NDIwNjkgWiBNMCwxMS4zOTQyMDY5IEw3LjE1MTE3MjQxLDExLjM5NDIwNjkgTDcuNzA0MTM3OTMsMS4wNTIxMzc5MyBMMCwxMS4zOTQyMDY5IFoiLz4KICAgIDxwb2x5Z29uIGZpbGw9IiNGRUVFQjciIHBvaW50cz0iMTcuNjU1IDAgNy4xNTEgMTEuMzk0IDI4LjE1OSAxMS4zOTQiLz4KICA8L2c+Cjwvc3ZnPgo="
            title="Design"
            desc="Design your website by using Atomize for Sketch App."
            linkText={linkText}
            link="https://atomizedesign.com/"
          />
          <KeyFeatureCard
            img="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzOCIgaGVpZ2h0PSIzNCIgdmlld0JveD0iMCAwIDM4IDM0Ij4KICA8cGF0aCBmaWxsPSIjMDBEOEZGIiBkPSJNMzAuNzAxNTI1NSwxMC45OTM2NjkgQzM0LjgwMTMxMDcsMTIuNDA0OTk0OSAzNy4zNjY2MDcsMTQuNjIwOTM5OCAzNy4zNjY2MDcsMTYuOTY5ODg1MyBDMzcuMzY2NjA3LDE5LjQxODYwOTcgMzQuNjE4NDc1MSwyMS43NDc3MTQ0IDMwLjI4NjUzMjIsMjMuMTgyODg4MiBDMzAuMTgzNTAwMSwyMy4yMTcwNTUgMzAuMDc3NzUwMywyMy4yNTExMDI2IDI5Ljk2ODc5MDIsMjMuMjg1MjIzMSBDMzAuMDE1NTMyNiwyMy40ODc5OTc4IDMwLjA1OTI0MDMsMjMuNjkxNTMwOSAzMC4wOTk5MTc4LDIzLjg5NTg1MzQgQzMwLjk1MzY4ODYsMjguMjA4MTc2NiAzMC4yNjA2MzczLDMxLjcxNDgxOTMgMjguMTY1ODA1OSwzMi45Mjc1MzYxIEMyNi4xMzc2OTk1LDM0LjEwMTYyMjcgMjIuOTgwNTgzNiwzMy4wNDM3MjEgMTkuNzYwNTcwNSwzMC4yNzMwMTE2IEMxOS41MTk0NDI5LDMwLjA2NTAxNCAxOS4yODI0ODY0LDI5Ljg1MjI0ODYgMTkuMDQ5ODQwNiwyOS42MzQ4NDI3IEMxOC44ODk3NjUsMjkuNzg0MzExMyAxOC43MjcyODI5LDI5LjkzMTMwNDggMTguNTYyMzU3MywzMC4wNzU4NTI2IEMxNS4yNTI2NDcyLDMyLjk2OTE0MTMgMTEuODY4NTU0OCwzNC4xMTk5NDA3IDkuNzcxNzEzMzgsMzIuOTEwNzE3NCBDNy43NDE2NTc4OCwzMS43Mzk4NTQzIDcuMDgxNTU1MjIsMjguNDc2NDgzMiA3Ljg3Mzg5MTAzLDI0LjMwMzE4MDEgQzcuOTMzNDkyNDMsMjMuOTkwODcxNSA3Ljk5OTMxMDIsMjMuNjc5Nzk0NCA4LjA3MTMwMzY2LDIzLjM3MDEzMzcgQzcuODYyNDMxMzQsMjMuMzA2MjgzMyA3LjY1NDQ5NzUsMjMuMjM5MTI5MSA3LjQ0NzQ1OTgyLDIzLjE2ODY1NDQgQzMuMjg3NTUzMTksMjEuNzQ2ODAwNCAwLjYsMTkuMzkwMjQ5MyAwLjYsMTYuOTY5ODg1MyBDMC42LDE0LjYyNjQ0MjUgMy4wOTczNzIxNywxMi40MjQxNTY5IDcuMTA4MTA1NzgsMTEuMDI1Nzg2NSBDNy40MjM0NjAwOSwxMC45MTU4NDQ1IDcuNzUxNjM4OTIsMTAuODA5ODYxOSA4LjA5MjM5ODE2LDEwLjcwNzc0OTkgQzguMDI3NTQ5OTIsMTAuNDI5NzQ5NyA3Ljk2NzU2ODM3LDEwLjE1MDU3NDggNy45MTI0NjA1NCw5Ljg3MDI0MzM2IEM3LjA3OTgxMDgxLDUuNjE1MzY3NjQgNy43MTIzNDI1OCwyLjI4NTAzNDY0IDkuNzQ1MzA0MzYsMS4xMDgxOTMxIEMxMS44NjQ0OTc5LC0wLjExODYzNjMwNSAxNS4yNTcwMzQ5LDEuMDkyODE1NDggMTguNjY5OTUxNSw0LjEyMzA3NDc0IEMxOC43ODA1NDA5LDQuMjIxNDgzNDkgMTguODkwMTQ1Myw0LjMyMDk4ODk4IDE4Ljk5ODc0ODQsNC40MjE1NzYyNyBDMTkuMjA2NzIwMSw0LjIyNzA2MzkyIDE5LjQxODExOTEsNC4wMzYxNTcwNSAxOS42MzI5Mzc2LDMuODQ4ODY2ODcgQzIyLjkwMzIwNzUsMS4wMDI3NjI0MyAyNi4xMDQzNTA5LC0wLjExMjQ0NzIxOCAyOC4xMzkyMjUyLDEuMDYwNzg2MTYgQzMwLjI2MDY5NzIsMi4yODQxMDg5MyAzMC45MDU0ODg1LDUuODI4MjAyODYgMjkuOTg0NjU4NiwxMC4yOTgxNjg5IEMyOS45NTU2MDM0LDEwLjQzOTE2MzEgMjkuOTI0MjE2LDEwLjU4MzM0MiAyOS44OTA0NjQ3LDEwLjczMTA4NTMgQzMwLjE2MjMxMiwxMC44MTM4OTg1IDMwLjQzMjcwNjYsMTAuOTAxNDM5MyAzMC43MDE1MjU1LDEwLjk5MzY2OSBaIE0zNS4wMzAxNTg1LDE2Ljk2OTg4NTMgQzM1LjAzMDE1ODUsMTUuODUwNTY0IDMzLjAyMTkwNTEsMTQuMjYzNDc0OCAyOS45NDE1NTIsMTMuMjAyOTY5OSBDMjkuNzIzMjM4NSwxMy4xMjc4NTIyIDI5LjQ5Nzc3NTcsMTMuMDU0NjE3NyAyOS4yNjUyMzE5LDEyLjk4MzIyNTQgQzI4Ljg1MDg2MTgsMTQuMjYzMzAyIDI4LjMyMjY0MDQsMTUuNjA0NTg2IDI3LjY5MzU1OTUsMTYuOTc1MzgzIEMyOC4zNTU1NTY1LDE4LjM4NDYxNzQgMjguOTA1NjQxOCwxOS43NDY0ODk3IDI5LjMzMjY3MjIsMjEuMDM2MDI4MyBDMjkuNDA3MzAxOCwyMS4wMTIzOTY3IDI5LjQ4MDI4NDIsMjAuOTg4NzkgMjkuNTUxNzYsMjAuOTY1MTUyNSBDMzIuODUxMDQxLDE5Ljg3MTgzNjYgMzUuMDMwMTU4NSwxOC4xNzY4NzI0IDM1LjAzMDE1ODUsMTYuOTY5ODg1MyBaIE0yNy43MDc2NzUzLDIzLjg3ODQ5MDggQzI2LjM2MjEzNDEsMjQuMTcwMzYyNiAyNC44OTk0NzcsMjQuMzkwNjMzMyAyMy4zNTY2ODQ5LDI0LjUzNDI2MDcgQzIyLjQ3MzU2NTgsMjUuODAxNDI1NCAyMS41NzU0NDQ1LDI2Ljk1MDEzNTEgMjAuNjc4MDk0NCwyNy45NTg3MzQ5IEMyMC44NzY5OTM4LDI4LjE0Mzc1NjkgMjEuMDc5MzI3NywyOC4zMjQ5ODI2IDIxLjI4NDg5NjIsMjguNTAyMjM0MyBDMjMuNzAwNjEzNywzMC41ODEwNDcgMjYuMDE4NzA0MywzMS40NzA3NzI1IDI2Ljk5NTEwMjEsMzAuOTA1NTM0MSBDMjcuNDIxMTQzMiwzMC42NTg5MjAxIDI3Ljc4OTgwNTcsMjkuOTcwNjcyOCAyNy45Nzk4MjgsMjguOTQ1ODc0MSBDMjguMjEwODY0LDI3LjcwMDU2NzEgMjguMTU0Nzk2NCwyNi4xMDE1OTY1IDI3LjgwNzkyNjUsMjQuMzQ5NjQzMiBDMjcuNzc3NDMzLDI0LjE5NTY1MTcgMjcuNzQ0MDA5NiwyNC4wMzg2MTE2IDI3LjcwNzY3NTMsMjMuODc4NDkwOCBaIE0xNy4wMjQ0MzAxLDI4LjMxNzA2ODQgQzE3LjE1NTI2ODQsMjguMjAyMzgxOSAxNy4yODQ0NzkyLDI4LjA4NTg2MTYgMTcuNDEyMDI0NCwyNy45Njc1NDI3IEMxNi40NzgyMjI2LDI2Ljk0MDExNDQgMTUuNTU0ODE5LDI1Ljc5MjAzMDEgMTQuNjY3OTM3MiwyNC41NTU2MDE5IEMxMy4xMTg1OTkyLDI0LjQyMzUyNzMgMTEuNjY1OTA5NiwyNC4yMTg1NjQ0IDEwLjMzNjk3NjMsMjMuOTQzNTM1MyBDMTAuMjc2MTEyOSwyNC4yMDc4NDI3IDEwLjIyMDIzMywyNC40NzMyMTg1IDEwLjE2OTM5MywyNC43MzkzODg3IEM5LjU3NDg5MDMxLDI3Ljg3MDQyNzQgOS45NjE3Mzg2LDMwLjMyMzAzMDQgMTAuOTM5MDE0OCwzMC44ODY2NDM0IEMxMS4zNjU0MDQ3LDMxLjEzMjQ3NzcgMTIuMTQ1ODM5OSwzMS4xMDgxNjM4IDEzLjEyODYxMywzMC43NjExNjU4IEMxNC4zMjI2Mjc1LDMwLjMzOTQ3MzggMTUuNjc5NzYwNSwyOS40OTIzODQ3IDE3LjAyNDQzMDEsMjguMzE3MDY4NCBaIE04LjY5Nzg4NTg4LDIxLjExODQ3MjMgQzkuMTI0NzkwNjUsMTkuNzg2MzQ2NiA5LjY2Mjg1NTE2LDE4LjQwMjY1IDEwLjI5NjcxODcsMTcuMDA3Mzk2MyBDOS42NzE3NjMyMiwxNS42MzM5NDU2IDkuMTQxNzIwNjksMTQuMjczMTQwMSA4LjcxOTYzNTc0LDEyLjk1ODg5MTcgQzguNDI5MTc3NDcsMTMuMDQ2NTgyIDguMTQ4MTI4OTcsMTMuMTM3NzExMSA3Ljg3NzI0NTg2LDEzLjIzMjA4MjEgQzQuODY3ODg4ODYsMTQuMjgxMjQ3OSAyLjkzNjU4ODk5LDE1Ljg0MTYxNzUgMi45MzY1ODg5OSwxNi45Njk4ODUzIEMyLjkzNjU4ODk5LDE3LjQ2MjA1ODcgMy4zNDc1NTQyMiwxOC4xMjYwMTIzIDQuMTM5MTkyOTIsMTguODAzODI5NSBDNS4xMDA5OTMwMiwxOS42Mjc0NzEzIDYuNTEyODAzNTgsMjAuMzc5OTQ1MiA4LjIwMzA0NTEzLDIwLjk1NzczNyBDOC4zNjcyMzc2MywyMS4wMTM2MzEgOC41MzIyMDA4NiwyMS4wNjcyMTQ2IDguNjk3ODg1ODgsMjEuMTE4NDcyMyBaIE0xNy4xMTgzMjc5LDUuODY5OTY1MTcgQzE0LjUxOTQ2MzcsMy41NjIzNTE4IDExLjk2MDYxOTksMi41MjU1NzMyNSAxMC45MTYwMjQ1LDMuMTMwMzI2MTMgQzkuOTQ3MjkzNzUsMy42OTExMzIyMyA5LjU3OTkyMzU4LDYuMjI0MzgyNTUgMTAuMjA1NDk4Miw5LjQyMTQzMTg1IEwxMC4yMTI5NDI3LDkuNDk4MjQ0MTggTDEwLjIwNTQxMTgsOS40MjExMzIwMSBDMTAuMjUyMTgyNCw5LjY1ODc0MTk2IDEwLjMwMjg0ODksOS44OTU1NTk1MiAxMC4zNTczOSwxMC4xMzE0ODkxIEMxMS43MDE2MjksOS44NDQyMTM5OCAxMy4xNDIzNjE3LDkuNjI0ODg5MDEgMTQuNjM5ODM0NSw5LjQ3OTYzMzI5IEMxNS41MTg1NDA5LDguMjUwOTUyMDggMTYuNDMzMTg0Nyw3LjExMTU4MDI5IDE3LjM2MTEwNzQsNi4wODk2NDUwNSBDMTcuMjgwNzM5OCw2LjAxNTcwOTgzIDE3LjE5OTgsNS45NDI0NzEyNyAxNy4xMTgzMjc5LDUuODY5OTY1MTcgWiBNMjYuMzE1MTAzNiwxNC4yNjgxNTg5IEMyNi41Njk5NTM3LDEzLjYzMTI3NTEgMjYuNzk4MTY4NSwxMy4wMDcwODMyIDI2Ljk5ODE0MzQsMTIuMzk5ODIxMSBDMjYuMzYyNTA0NSwxMi4yNjQ1ODA4IDI1LjcwMzg0NDcsMTIuMTQ1NjUwMyAyNS4wMjY3MDM3LDEyLjA0MzkxNiBDMjUuMjQ2OTE5MiwxMi40MDI3NTYzIDI1LjQ2MjUzMTcsMTIuNzY0NDE0OSAyNS42NzM0ODcyLDEzLjEyODgwMzEgQzI1Ljg5MTk1OTMsMTMuNTA1OTkxNSAyNi4xMDU4NDcsMTMuODg1ODA0NyAyNi4zMTUxMDM2LDE0LjI2ODE1ODkgWiBNMTcuNzA4MDAzNyw5LjI4OTQ4MDE1IEMxOC41NjUzODUsOS4yNjU1MjcyNCAxOS40MjMyNzE1LDkuMjY1NzQ1NzMgMjAuMjgwNjQxMSw5LjI5MDEzNTQzIEMxOS44NTUyMzY5LDguNzQ5OTUyOTIgMTkuNDI3MzA2OCw4LjIzOTA1NzM3IDE4Ljk5OTgxNjIsNy43NjEwNDQ2MiBDMTguNTY1NjQ2Niw4LjI0MzUwNTY0IDE4LjEzNDA2MTIsOC43NTQxMTY0OSAxNy43MDgwMDM3LDkuMjg5NDgwMTUgWiBNMTIuMjg2NjY1NiwxMy4xNDAwNTUgQzEyLjUwMDAzODcsMTIuNzY5OTgwNyAxMi43MTg1MjA1LDEyLjQwMzE5NjQgMTIuOTQyMTE1NiwxMi4wMzk1NDc5IEMxMi4yNzAwNjQyLDEyLjEzODk1NDIgMTEuNjE3NjI4NSwxMi4yNTQ1MzY0IDEwLjk4OTc0MiwxMi4zODU0NTMxIEMxMS4xODk3MjA5LDEyLjk5ODE1MzUgMTEuNDE1MDg5NCwxMy42MjI2Nzk1IDExLjY2NDM4ODEsMTQuMjU0ODY3OCBDMTEuODY2NjE3OSwxMy44ODA0MDI4IDEyLjA3NDA2MzYsMTMuNTA4NzYyMiAxMi4yODY2NjU2LDEzLjE0MDA1NSBaIE0xMi4yOTMwODUyLDIwLjg3NDY5MjIgQzEyLjA3OTAwNzIsMjAuNTA0ODUyOSAxMS44NzAxNTQzLDIwLjEzMjAzMDEgMTEuNjY2NTg3NSwxOS43NTYzMzUgQzExLjQwNzkyMzEsMjAuNDEwOTg1MSAxMS4xNzQ4MzQzLDIxLjA1NjQ1MzQgMTAuOTY5MTgsMjEuNjg3NjE4NCBDMTEuNjA3NjksMjEuODE1Nzg2NyAxMi4yNzkxMjQ0LDIxLjkyNzI0OTcgMTIuOTc5NzQxNiwyMi4wMjE0NzIxIEMxMi43NDUyNjAxLDIxLjY0MjUzMDcgMTIuNTE2MjI5OSwyMS4yNjAwNzcxIDEyLjI5MzA4NTIsMjAuODc0NjkyMiBaIE0yMC4zMjk5MzIzLDI0LjcxMzU4MjUgQzE5Ljg4MjQ1NjMsMjQuNzI1Nzk1OSAxOS40MzMzNTk4LDI0LjczMTk0MDcgMTguOTgzMzAzNSwyNC43MzE5NDA3IEMxOC41NTgwMDgzLDI0LjczMTk0MDcgMTguMTM1NTYxMiwyNC43MjcwODQ4IDE3LjcxNjM4MDgsMjQuNzE3NDA4NCBDMTguMTUzODYyOSwyNS4yNjc3MDAyIDE4LjU5NjE2NzksMjUuNzkxMzgyMiAxOS4wMzk3MzksMjYuMjg0MjMwMyBDMTkuNDY4ODAwNiwyNS43OTYxMTkzIDE5Ljg5OTY2MzEsMjUuMjcxNTY1MSAyMC4zMjk5MzIzLDI0LjcxMzU4MjUgWiBNMjUuNjc5OTExNywyMC44NjM1NTE3IEMyNS40NjI0MzAxLDIxLjI0MDc4NTIgMjUuMjQwNDA5NSwyMS42MTUzNzE5IDI1LjAxMzg5OTEsMjEuOTg3MjMwMSBDMjUuNzI2MzQ1NCwyMS44ODUwNzY3IDI2LjQxMjIwMzksMjEuNzY0NDM5NSAyNy4wNjYxNjg2LDIxLjYyNjE5ODUgQzI2Ljg1NDcyNiwyMC45OTkzNDE4IDI2LjYxMTIzNDUsMjAuMzUxNjQ3MSAyNi4zMzcxNzEzLDE5LjY4NjgxNTMgQzI2LjEyMzQ2OTIsMjAuMDgyMDM5NSAyNS45MDQzNjA5LDIwLjQ3NDMyNDcgMjUuNjc5OTExNywyMC44NjM1NTE3IFogTTIzLjY1NTgwNywxOS42OTY1NDc0IEMyNC4xNjgwOTc0LDE4LjgwOTI4MjQgMjQuNjUwMjkxOCwxNy45MDU1OTI0IDI1LjEwMTg0MjgsMTYuOTg2NTQ3MyBDMjQuNjQ1ODUxMSwxNi4wNzYzNzY1IDI0LjE2MjEyOTIsMTUuMTgwMzE1OSAyMy42NTExMzM2LDE0LjI5OTI0NDMgQzIzLjE0MzE4NTUsMTMuNDIwNzY5OSAyMi42MDYyMzcxLDEyLjU1OTQwNzMgMjIuMDQxMTc3NSwxMS43MTY1NzYzIEMyMS4wMzM4NzA5LDExLjY0NDUwMTUgMjAuMDEwNzg4NywxMS42MDc5MjI1IDE4Ljk4MzMwMzUsMTEuNjA3OTIyNSBDMTcuOTU5MTA5NSwxMS42MDc5MjI1IDE2LjkzNzIwNzQsMTEuNjQ0MjI3NCAxNS45MzA0NDM3LDExLjcxNTc2ODcgQzE1LjM1OTkwOTgsMTIuNTU5OTI3MSAxNC44MTk3MDY2LDEzLjQyNDIxNzEgMTQuMzEwODcxNiwxNC4zMDY5ODcxIEMxMy44MDE4NDc3LDE1LjE4OTYyNjMgMTMuMzI0MTgyNSwxNi4wODk5NTM0IDEyLjg3ODgxMDEsMTcuMDA2MzA3OSBDMTMuMzI1MzE1LDE3LjkyMjM1NzMgMTMuODA0NDExNCwxOC44MjIxODE4IDE0LjMxNTE4NjYsMTkuNzA0MDU3OSBMMTQuMzcyMzk4MywxOS44MDI4MzY0IEMxNC44Njg2MzI1LDIwLjY1NDkxMSAxNS4zOTM5MDI0LDIxLjQ4OTczMTggMTUuOTQ3MjgyOSwyMi4zMDU4MzEyIEMxNi45MzE1Njg5LDIyLjM2NTUxMTQgMTcuOTQ2NDU3MiwyMi4zOTU2NzQyIDE4Ljk4MzUxMTEsMjIuMzk1Njc0MiBDMjAuMDA3NDYyNCwyMi4zOTYxNzA2IDIxLjAzMTEwNjMsMjIuMzYyNDI3OCAyMi4wNTI3MjM0LDIyLjI5NDQ2OTkgQzIyLjYxMzQwNjUsMjEuNDQ1MDM1IDIzLjE0ODAxNzgsMjAuNTc4NjU3MiAyMy42NTU4MDcsMTkuNjk2NTQ3NCBaIE0yMS4xNjcyNDA3LDUuNjEwODE5OTUgQzIwLjk4ODE2MjQsNS43NjcwNDUwNSAyMC44MTE2MTE3LDUuOTI2MTMxMzUgMjAuNjM3NjU2Myw2LjA4ODAxNjY2IEMyMS41NDg5OTksNy4wOTY2NTY3IDIyLjQ1NjQ0MTUsOC4yMzcyODMxNCAyMy4zMzgzNzU4LDkuNDgxOTMxODUgQzI0LjgzOTMwNzQsOS42MjkzNzU3MyAyNi4yODA4MTA0LDkuODUyMzc0MTcgMjcuNjI3NDk3MiwxMC4xNDUzOTk1IEMyNy42NTE4NjY1LDEwLjAzNjk2MzMgMjcuNjc0NzkxNCw5LjkzMDcxMTc5IDI3LjY5NjI4MDEsOS44MjY1MTY1OSBDMjguMzk3NTEzMyw2LjQyMjU1MzczIDI4LjAxNzc4NTMsMy42ODc5MzA5NCAyNi45NzIxOTQ0LDMuMDg0ODU0MTkgQzI2LjAwMjU5NTYsMi41MjU3NDA1IDIzLjYyNDM4NTIsMy40NzI1ODQ1NiAyMS4xNjcyNDA3LDUuNjEwODE5OTUgWiBNMTguOTgzMzAzNSwxMy4zNTgxNzk3IEMyMC45Nzc5NjEyLDEzLjM1ODE3OTcgMjIuNTk1MDA5MSwxNC45NzUyMjc2IDIyLjU5NTAwOTEsMTYuOTY5ODg1MyBDMjIuNTk1MDA5MSwxOC45NjQ1NDMgMjAuOTc3OTYxMiwyMC41ODE1OTA5IDE4Ljk4MzMwMzUsMjAuNTgxNTkwOSBDMTYuOTg4NjQ1OCwyMC41ODE1OTA5IDE1LjM3MTU5NzksMTguOTY0NTQzIDE1LjM3MTU5NzksMTYuOTY5ODg1MyBDMTUuMzcxNTk3OSwxNC45NzUyMjc2IDE2Ljk4ODY0NTgsMTMuMzU4MTc5NyAxOC45ODMzMDM1LDEzLjM1ODE3OTcgWiIvPgo8L3N2Zz4K"
            title="Development"
            desc="Bring your designs to life with Atomize for React JS."
            linkText={linkText}
            link="https://atomizecode.com/docs/react/intro"
          />
        </div>
      </div>
      <hr
        className="Hr"
        style={{
          width: "75%",
          color: "gray",
          margin: "80px auto",
          borderBottom: ".5px solid gray",
          border: "none",
          height: "1px",
          backgroundColor: "#ccc",
        }}
      />
    </>
  );
};

export default Design;
