
const CloseIcon = ({
  width = 10,
  height = 10,
  fill = "#6F6F6F",
  viewBox = "0 0 22 22.001",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox={viewBox}
    fill={fill}>
    <g transform="translate(-0.039)">
      <path
        className="a"
        d="M1.17,22a1.132,1.132,0,0,1-.8-1.933L20.107.332a1.132,1.132,0,0,1,1.6,1.6L1.972,21.668A1.135,1.135,0,0,1,1.17,22Zm0,0"
      />
      <path
        className="a"
        d="M20.908,22a1.123,1.123,0,0,1-.8-.332L.371,1.932a1.132,1.132,0,0,1,1.6-1.6L21.708,20.068a1.132,1.132,0,0,1-.8,1.933Zm0,0"
      />
    </g>
  </svg>
);

export default CloseIcon;
