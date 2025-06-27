import React from "react";
import "./LoaderLogo.css";

class LogoLoader extends React.Component {
  render() {
    const theme = this.props.theme;
    return (
      <svg
        className="raw_logo"
        width="50%"
        height="40%"
        viewBox="0 0 440 305"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          class="myHexagon"
          d="M293.545 167.405L229.5 204.381C227.025 205.81 223.975 205.81 221.5 204.381L157.455 167.405C154.98 165.976 153.455 163.335 153.455 160.476L153.455 86.5234C153.455 83.6653 154.98 81.0243 157.455 79.5952L221.5 42.6187C223.975 41.1896 227.025 41.1897 229.5 42.6187L293.545 79.5952C296.02 81.0243 297.545 83.6653 297.545 86.5234L297.545 160.476C297.545 163.335 296.02 165.976 293.545 167.405Z"
          stroke={theme.body}
          stroke-width="4"
        />
        <path
          class="myHexagon"
          d="M147.455 73.5953L211.5 36.6188C213.975 35.1898 217.025 35.1898 219.5 36.6188L283.545 73.5953C286.02 75.0244 287.545 77.6654 287.545 80.5235L287.545 154.477C287.545 157.335 286.02 159.976 283.545 161.405L219.5 198.381C217.025 199.81 213.975 199.81 211.5 198.381L147.455 161.405C144.98 159.976 143.455 157.335 143.455 154.477L143.455 80.5235C143.455 77.6654 144.98 75.0244 147.455 73.5953Z"
          stroke={theme.body}
          stroke-width="4"
        />
        <text
          x="185"
          y="125"
          dominant-baseline="middle"
          text-anchor="middle"
          fill={theme.splashBg}
          stroke={theme.body}
          stroke-width="2"
          font-size="80"
          font-family='"Times New Roman", Times, serif'
          font-weight="bold"
          class="letter"
        >
          S
        </text>
        <text
          x="255"
          y="125"
          dominant-baseline="middle"
          text-anchor="middle"
          fill={theme.splashBg}
          stroke={theme.body}
          stroke-width="2"
          font-size="80"
          font-family='"Times New Roman", Times, serif'
          font-weight="bold"
          class="letter"
        >
          C
        </text>
        <g class="g-ants">
          <text
            x="50%"
            y="250"
            dominant-baseline="middle"
            text-anchor="middle"
            font-size="40"
            font-family="Agustina Regular"
            class="signature-text"
          >
            {"Shivam chourasia".split("").map((char, index) => (
              <tspan key={index}>{char}</tspan>
            ))}
          </text>
        </g>
        <defs>
          <style
            dangerouslySetInnerHTML={{
              __html: `
      .myHexagon{
			stroke-dasharray: 800;
			stroke-dashoffset: 800;
			-webkit-animation: dash 4s linear forwards 0.5s;
			-o-animation: dash 4s linear forwards 0.5s;
			-moz-animation: dash 4s linear forwards 0.5s;
			animation: dash 4s linear forwards 0.5s;
		}

		@-webkit-keyframes dash{
			from{
				stroke-dashoffset: 800;
			}
			to{
				stroke-dashoffset: 0;
			}
		}

    .letter{
			opacity: 0;
			-webkit-animation: fadein 2s linear forwards 2.5s;
			-o-animation: fadein 2s linear forwards 2.5s;
			-moz-animation: fadein 2s linear forwards 2.5s;
			animation: fadein 2s linear forwards 2.5s;
		}

		@-webkit-keyframes fadein{
			from{
				opacity: 0;
			}
			to{
				opacity: 1;
			}
		}

    .signature-text {
        stroke-dasharray: 900;
        stroke-dashoffset: 900;
        animation: draw-signature 2.5s ease-in-out forwards 3s;
        stroke: ${theme.body};
        stroke-width: 1.5px;
        fill: transparent;
    }

    @keyframes draw-signature {
        to {
            stroke-dashoffset: 0;
            fill: ${theme.body};
        }
    }

    .signature-text tspan {
        stroke-dasharray: 200;
        stroke-dashoffset: 200;
        animation: draw-letter 1s ease-in-out forwards;
        stroke: ${theme.body};
        stroke-width: 1.5px;
        fill: transparent;
        opacity: 0;
    }

    @keyframes draw-letter {
        50% {
          opacity: 1;
          fill: transparent;
        }
        100% {
            stroke-dashoffset: 0;
            fill: ${theme.body};
            opacity: 1;
        }
    }

    .signature-text tspan:nth-child(1) { animation-delay: 3.00s; }
    .signature-text tspan:nth-child(2) { animation-delay: 3.10s; }
    .signature-text tspan:nth-child(3) { animation-delay: 3.20s; }
    .signature-text tspan:nth-child(4) { animation-delay: 3.30s; }
    .signature-text tspan:nth-child(5) { animation-delay: 3.40s; }
    .signature-text tspan:nth-child(6) { animation-delay: 3.50s; }
    .signature-text tspan:nth-child(7) { animation-delay: 3.60s; }
    .signature-text tspan:nth-child(8) { animation-delay: 3.70s; }
    .signature-text tspan:nth-child(9) { animation-delay: 3.80s; }
    .signature-text tspan:nth-child(10) { animation-delay: 3.90s; }
    .signature-text tspan:nth-child(11) { animation-delay: 4.00s; }
    .signature-text tspan:nth-child(12) { animation-delay: 4.10s; }
    .signature-text tspan:nth-child(13) { animation-delay: 4.20s; }
    .signature-text tspan:nth-child(14) { animation-delay: 4.30s; }
    .signature-text tspan:nth-child(15) { animation-delay: 4.40s; }
    .signature-text tspan:nth-child(16) { animation-delay: 4.50s; }
    `,
            }}
          />
        </defs>
      </svg>
    );
  }
}

export default LogoLoader;
