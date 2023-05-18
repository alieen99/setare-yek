import * as React from "react";
import useDarkMode from "@/hooks/useDarkMode";
import { useDarkModeContext } from "./DarkModeContext";
import useWindowSize from "@/hooks/useWindowSize";

export const SetareLogo  = (props:React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => {
    const {isDarkMode} = useDarkModeContext();
    return  (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={80}
    height={18.409}
    viewBox="0 0 80 18.409"
    {...props}
  >
    <defs>
      <clipPath id="clip-path">
        <rect width={80} height={18.409} fill="none" />
      </clipPath>
    </defs>
    <g
      id="type_pb.color_size_5"
      data-name="type pb.color size 5"
      clipPath="url(#clip-path)"
    >
      <path
        id="Path_79"
        data-name="Path 79"
        d="M458.227,595.812q0-2.721,0-5.441a1.674,1.674,0,0,1,1.21-1.674,1.646,1.646,0,0,1,2.1,1.555c.012.907,0,1.814,0,2.721q0,3.87.006,7.74a2.89,2.89,0,0,0,5.743.529,11.483,11.483,0,0,0,.04-1.639c-.006-1.415.039-2.829.054-4.244a1.678,1.678,0,0,1,1.532-1.734,1.639,1.639,0,0,1,1.764,1.429,9.544,9.544,0,0,0,3,5.513,11.125,11.125,0,0,0,6.473,3.082,10.21,10.21,0,0,0,7.151-1.838,16.961,16.961,0,0,0,4.85-5.328c.392-.64.737-1.3,1.085-1.968a1.649,1.649,0,0,1,3.068.362,1.562,1.562,0,0,1-.11,1.118,23.519,23.519,0,0,1-5.034,7,14.7,14.7,0,0,1-7.145,3.777,13.638,13.638,0,0,1-8.317-.935,14.781,14.781,0,0,1-5.04-3.614c-.04-.043-.067-.126-.138-.106s-.049.107-.065.164a6.2,6.2,0,0,1-11.446,1.492,5.86,5.86,0,0,1-.759-2.819"
        transform="translate(-416.365 -588.631)"
        fill={isDarkMode?"#ffff":"#5439ac"}
      />
      <path
        id="Path_80"
        data-name="Path 80"
        d="M251.548,591.993c.528.477,1.058.924,1.549,1.416a10.623,10.623,0,0,1,2.7,4.164,2.686,2.686,0,0,1,.128.45c.031.216.12.291.349.283.592-.021,1.185,0,1.777-.007a1.981,1.981,0,0,0,2-2.014,9.054,9.054,0,0,1,.022-1.194,1.646,1.646,0,0,1,3.274.084,7.225,7.225,0,0,1-.23,2.739,5.269,5.269,0,0,1-4.574,3.676c-.747.069-1.5.024-2.243.027-.2,0-.277.053-.322.255a6.384,6.384,0,0,1-2.592,4.012,6.492,6.492,0,0,1-3.046,1.095,11.719,11.719,0,0,1-1.331.046h-4.046a1.661,1.661,0,1,1-.016-3.32c1.481-.008,2.962,0,4.443,0a4.11,4.11,0,0,0,1.424-.217,3.006,3.006,0,0,0,1.94-2.368,4.992,4.992,0,0,0-1.044-4.266,13.151,13.151,0,0,0-3.776-3.245,20.318,20.318,0,0,0-3.536-1.7,1.658,1.658,0,0,1-.779-2.648,1.549,1.549,0,0,1,1.175-.59c.039,0,.078,0,.117,0q8.372,0,16.744,0a1.63,1.63,0,0,1,1.65,1.344,1.654,1.654,0,0,1-1.453,1.953c-.178.014-.358.022-.537.022q-4.642,0-9.284,0Z"
        transform="translate(-243.229 -588.664)"
        fill={isDarkMode?"#ffff":"#5439ac"}
      />
      <path
        id="Path_81"
        data-name="Path 81"
        d="M365.956,588.645h2.065a1.635,1.635,0,0,1,1.7,1.572,1.607,1.607,0,0,1-1.586,1.728c-1.238.035-2.478.018-3.717.022a1.921,1.921,0,0,0-1.727.976,1.954,1.954,0,0,0-.274,1.029c-.005.766-.009,1.533,0,2.3a1.978,1.978,0,1,0,3.955.006c.007-.383,0-.767,0-1.15a1.649,1.649,0,1,1,3.3.015,9.976,9.976,0,0,1-.155,2.474,5.3,5.3,0,0,1-4.65,3.952,5.208,5.208,0,0,1-5.7-4.656,12.787,12.787,0,0,1,.1-4.2,5.209,5.209,0,0,1,4.43-4.018C364.5,588.586,365.3,588.677,365.956,588.645Z"
        transform="translate(-336.485 -588.637)"
        fill={isDarkMode?"#ffff":"#5439ac"}
      />
      <path
        id="Path_82"
        data-name="Path 82"
        d="M396.147,593.306c-.016.883.042,2-.046,3.117a11.573,11.573,0,0,1-3.481,7.883,9.762,9.762,0,0,1-5.459,2.607,5.168,5.168,0,0,1-1.559.064,1.635,1.635,0,0,1-1.38-1.759,1.655,1.655,0,0,1,1.679-1.535,6.432,6.432,0,0,0,4.165-1.543,7.573,7.573,0,0,0,2.432-4.073,11.094,11.094,0,0,0,.331-2.759c0-1.657,0-3.314,0-4.971a1.657,1.657,0,1,1,3.313-.054C396.156,591.211,396.147,592.142,396.147,593.306Z"
        transform="translate(-356.755 -588.642)"
        fill={isDarkMode?"#ffff":"#5439ac"}
      />
      <path
        id="Path_84"
        data-name="Path 84"
        d="M320.835,668.89c-1.208,0-2.415.005-3.623,0a1.646,1.646,0,0,1-1.633-1.477,1.663,1.663,0,0,1,1.212-1.778,1.882,1.882,0,0,1,.507-.068c2.376,0,4.753-.005,7.129,0a1.659,1.659,0,0,1,1.583,2.322,1.554,1.554,0,0,1-1.483,1C323.3,668.9,322.066,668.89,320.835,668.89Z"
        transform="translate(-301.477 -650.529)"
        fill={isDarkMode?"#ffff":"#5439ac"}
      />
      <path
        id="Path_85"
        data-name="Path 85"
        d="M492.582,591.973c-1.106,0-2.213,0-3.319,0a1.655,1.655,0,0,1-.366-3.269,1.328,1.328,0,0,1,.3-.034c2.275,0,4.55-.007,6.825,0a1.611,1.611,0,0,1,1.571,1.373,1.637,1.637,0,0,1-1.6,1.928c-.7.01-1.4,0-2.1,0Z"
        transform="translate(-440.009 -588.659)"
        fill={isDarkMode?"#ffff":"#5439ac"}
      />
    </g>
  </svg>
);
}
export const BsSun = (props:React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={17}
    height={17}
    viewBox="0 0 17 17"
    {...props}
  >
    <g transform="translate(-1.5 -1.5)">
      <circle cx={5} cy={5} r={5} transform="translate(5 5)" fill="#fff" />
      <line
        y2={1.5}
        transform="translate(10 2)"
        strokeWidth={1}
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <line
        x2={0.75}
        y2={1.299}
        transform="translate(5.961 3.34)"
        strokeWidth={1}
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <line
        x2={1.299}
        y2={0.75}
        transform="translate(3.34 5.961)"
        strokeWidth={1}
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <line
        x2={1.5}
        transform="translate(2 9.999)"
        strokeWidth={1}
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <line
        y1={0.75}
        x2={1.299}
        transform="translate(3.339 13.288)"
        strokeWidth={1}
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <line
        y1={1.299}
        x2={0.75}
        transform="translate(5.96 15.361)"
        strokeWidth={1}
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <line
        y1={1.5}
        transform="translate(9.998 16.5)"
        strokeWidth={1}
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <line
        x1={0.75}
        y1={1.299}
        transform="translate(13.288 15.362)"
        strokeWidth={1}
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <line
        x1={1.299}
        y1={0.75}
        transform="translate(15.36 13.29)"
        strokeWidth={1}
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <line
        x1={1.5}
        transform="translate(16.5 10.002)"
        strokeWidth={1}
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <line
        x1={1.299}
        y2={0.75}
        transform="translate(15.363 5.963)"
        strokeWidth={1}
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <line
        x1={0.75}
        y2={1.299}
        transform="translate(13.291 3.342)"
        strokeWidth={1}
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </g>
  </svg>
);

export const BsMoon = (props:React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16.999}
    height={16.999}
    viewBox="0 0 16.999 16.999"
    {...props}
  >
    <g transform="translate(-5.5 -5.5)">
      <path
        d="M14.714,17.571a6.283,6.283,0,0,1-.8-12.515,8.032,8.032,0,1,0,7.028,7.028A6.283,6.283,0,0,1,14.714,17.571Z"
        transform="translate(1 1)"
        fill="none"
        stroke="#fafafe"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
      />
    </g>
  </svg>
);
export const Cirlcle = (props:React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => {
  const {isDarkMode} = useDarkModeContext();
  const {width,height} = useWindowSize();
  if(width>992)
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={785}
      height={700.001}
      viewBox="0 0 785 700.001"
      {...props}
    >
      <g transform="translate(-1084 -374.646)">
        <rect
          width={660}
          height={660}
          rx={330}
          transform="translate(1084 374.646)"
          fill={isDarkMode?"#222":"#5439ac"}
        />
        <g transform="translate(1289.038 520.425)">
          <path
            d="M20.413.242A17.5,17.5,0,1,0,34.53,13.468,17.559,17.559,0,0,0,20.413.242"
            transform="translate(10.962 139.222)"
            fill="#57c5d0"
          />
          <path
            d="M23.329.276A20.005,20.005,0,1,0,39.462,15.392,20.068,20.068,0,0,0,23.329.276"
            transform="translate(470.962 414.222)"
            fill="#f58122"
          />
          <path
            d="M9.535.276a7.512,7.512,0,1,0,5.156,5.108A7.523,7.523,0,0,0,9.535.276"
            transform="translate(369.962 14.222)"
            fill="#57c5d0"
          />
          <path
            d="M6.356.184A5.008,5.008,0,1,0,9.794,3.589,5.015,5.015,0,0,0,6.356.184"
            transform="translate(23.962 544.222)"
            fill={isDarkMode?"#ffff":"#5439ac"}
          />
          <path
            d="M5.982.111A4.987,4.987,0,1,0,4.446,9.958,4.987,4.987,0,0,0,5.982.111"
            transform="translate(75.962 59.221)"
            fill="#f58122"
          />
          <path
            d="M8.972.167a7.481,7.481,0,1,0-2.3,14.77A7.481,7.481,0,0,0,8.972.167"
            transform="translate(564.962 123.222)"
            fill={isDarkMode?"#ffff":"#5439ac"}
          />
        </g>
      </g>
    </svg>
  );
  else
  return(
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={300}
    height={324}
    viewBox="0 0 300 324"
    {...props}
  >
    <g transform="translate(-1159 -436.091)">
      <rect
        width={270}
        height={270}
        rx={135}
        transform="translate(1174 463.091)"
        fill={isDarkMode?"#222":"#5439ac"}
      />
      <g transform="translate(1227.931 481.262)">
        <path
          d="M8.84.1a7.581,7.581,0,1,0,6.114,5.728A7.6,7.6,0,0,0,8.84.1"
          transform="translate(-68.931 216.458)"
          fill="#57c5d0"
        />
        <path
          d="M11.665.138A10,10,0,1,0,19.731,7.7,10.034,10.034,0,0,0,11.665.138"
          transform="translate(184.069 258.828)"
          fill="#f58122"
        />
        <path
          d="M6.353.184a5.005,5.005,0,1,0,3.436,3.4A5.013,5.013,0,0,0,6.353.184"
          transform="translate(176.069 -45.172)"
          fill={isDarkMode?"#fff":"#5439ac"}
        />
        <path
          d="M3.986.074A3.323,3.323,0,1,0,2.963,6.635,3.323,3.323,0,0,0,3.986.074"
          transform="translate(-51.687 38.986)"
          fill="#f58122"
        />
        <path
          d="M2.581.048A2.152,2.152,0,1,0,1.919,4.3,2.152,2.152,0,0,0,2.581.048"
          transform="translate(226.753 32.512)"
          fill="#57c5d0"
        />
        <path
          d="M2.581.048A2.152,2.152,0,1,0,1.919,4.3,2.152,2.152,0,0,0,2.581.048"
          transform="translate(-62.247 -26.488)"
          fill="#57c5d0"
        />
      </g>
    </g>
  </svg>
  )
}

export const Banner = (props:React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => {
  const {isDarkMode} = useDarkModeContext();

  return(
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={556.018}
    height={120.001}
    viewBox="0 0 556.018 120.001"
    {...props}
  >
    <g id="_1_4_" data-name="*1*4#" transform="translate(-404.982 -1513.999)">
      <g
        id="Group_5460"
        data-name="Group 5460"
        transform="translate(76.356 -657.995)"
      >
        <path
          id="Path_1283"
          data-name="Path 1283"
          d="M21.739,402.512a4.925,4.925,0,0,1,3.635-.359,4.829,4.829,0,0,1,3.167,3.409,10.847,10.847,0,0,1,.13,4.044c-.381,4.161-1.01,8.293-1.474,12.444,3.35-1.489,6.593-3.2,9.893-4.8a26,26,0,0,1,4.644-1.825,5.127,5.127,0,0,1,3.781.476,4.71,4.71,0,0,1,2.33,3.027,4.507,4.507,0,0,1-.431,3.135,3.88,3.88,0,0,1-1.808,1.951,74.087,74.087,0,0,1-16.275,4.234c2.1,1.984,4.085,4.078,6.062,6.18.452.462.792,1.014,1.2,1.51,1.059,1.359,2.271,2.592,3.286,3.986a4.861,4.861,0,0,1,1.038,3.931,4.641,4.641,0,0,1-1.713,2.828,4.992,4.992,0,0,1-3.48,1.018,5.564,5.564,0,0,1-2.989-1.594,25.552,25.552,0,0,1-4.3-5.69c-1.609-2.687-3.029-5.481-4.432-8.279-2.008,3.578-3.958,7.189-6.044,10.722a17.357,17.357,0,0,1-2.647,3.486,4.648,4.648,0,0,1-2.533,1.316,4.889,4.889,0,0,1-3.863-1.029A4.8,4.8,0,0,1,7.1,443.3a4.235,4.235,0,0,1,.587-2.566A88.064,88.064,0,0,1,18.74,428.25c-2.474-.391-4.94-.829-7.383-1.382A51.874,51.874,0,0,1,3,424.264a3.726,3.726,0,0,1-1.621-.918A6.043,6.043,0,0,1,0,420.217v-.678a4.787,4.787,0,0,1,.725-2.052,5.036,5.036,0,0,1,3.661-2.205,8.344,8.344,0,0,1,3.592.687c1.5.587,2.966,1.274,4.422,1.972,2.822,1.375,5.628,2.785,8.476,4.1-.6-3.05-1.017-6.131-1.312-9.222-.178-1.893-.383-3.788-.4-5.689A5.292,5.292,0,0,1,21.739,402.512Z"
          transform="translate(568.033 1839.586)"
          fill="#27bdbe"
        />
        <path
          id="Path_1283-2"
          data-name="Path 1283"
          d="M21.739,402.512a4.925,4.925,0,0,1,3.635-.359,4.829,4.829,0,0,1,3.167,3.409,10.847,10.847,0,0,1,.13,4.044c-.381,4.161-1.01,8.293-1.474,12.444,3.35-1.489,6.593-3.2,9.893-4.8a26,26,0,0,1,4.644-1.825,5.127,5.127,0,0,1,3.781.476,4.71,4.71,0,0,1,2.33,3.027,4.507,4.507,0,0,1-.431,3.135,3.88,3.88,0,0,1-1.808,1.951,74.087,74.087,0,0,1-16.275,4.234c2.1,1.984,4.085,4.078,6.062,6.18.452.462.792,1.014,1.2,1.51,1.059,1.359,2.271,2.592,3.286,3.986a4.861,4.861,0,0,1,1.038,3.931,4.641,4.641,0,0,1-1.713,2.828,4.992,4.992,0,0,1-3.48,1.018,5.564,5.564,0,0,1-2.989-1.594,25.552,25.552,0,0,1-4.3-5.69c-1.609-2.687-3.029-5.481-4.432-8.279-2.008,3.578-3.958,7.189-6.044,10.722a17.357,17.357,0,0,1-2.647,3.486,4.648,4.648,0,0,1-2.533,1.316,4.889,4.889,0,0,1-3.863-1.029A4.8,4.8,0,0,1,7.1,443.3a4.235,4.235,0,0,1,.587-2.566A88.064,88.064,0,0,1,18.74,428.25c-2.474-.391-4.94-.829-7.383-1.382A51.874,51.874,0,0,1,3,424.264a3.726,3.726,0,0,1-1.621-.918A6.043,6.043,0,0,1,0,420.217v-.678a4.787,4.787,0,0,1,.725-2.052,5.036,5.036,0,0,1,3.661-2.205,8.344,8.344,0,0,1,3.592.687c1.5.587,2.966,1.274,4.422,1.972,2.822,1.375,5.628,2.785,8.476,4.1-.6-3.05-1.017-6.131-1.312-9.222-.178-1.893-.383-3.788-.4-5.689A5.292,5.292,0,0,1,21.739,402.512Z"
          transform="translate(482.652 1839.586)"
          fill="#27bdbe"
        />
        <path
          id="Path_1439"
          data-name="Path 1439"
          d="M-23.628-18.338q0-1.859.082-6.4l.041-2.521.041-2.645q.041-1.529.041-2.893,0-1.4-.041-2.686-.041-6.57-.45-12.231a114.293,114.293,0,0,0-4.825-26.39L-15.971-78.2a124.666,124.666,0,0,1,5.357,29.283q.491,6.2.532,13.223.041,1.364.041,2.81,0,1.488-.041,3.058,0,1.281-.041,2.769v1.281l-.041,1.281q-.082,4.463-.082,6.157Z"
          transform="translate(566.885 2306.854)"
          fill={isDarkMode?"#ffff":"#5439ac"}
        />
        <path
          id="Path_1440"
          data-name="Path 1440"
          d="M-22.055-46.12a2.434,2.434,0,0,0-.327.083q-.327.041-.819.124-1.31.248-2.947.454-4.993.661-10.682.95-1.883.083-3.683.083a54.3,54.3,0,0,1-16.166-2.23q.45,5.823.532,12.389.041,2.56.041,5.534v9.044H-69.529v-4.13q0-2.436.041-3.923,0-2.271-.041-4.212-.041-5-.246-9.415a155.466,155.466,0,0,0-2.5-21.474q-.327-1.321-.45-2.023h.041q-1.31-6.153-3.029-11.645L-62.94-80.6a139.259,139.259,0,0,1,3.765,14.784,11.166,11.166,0,0,0,.409,1.2v-.7l-.041-.743a11.74,11.74,0,0,1,.123-1.528q.2-1.156.532-2.354a19.608,19.608,0,0,1,2.742-5.988q5.361-7.846,16.493-7.846a18.16,18.16,0,0,1,7.08,1.4q1.351.578,3.069,1.528.614.372,1.555.909l1.637.991,1.187.743.614.372.655.372L-29.626-66.19a32.493,32.493,0,0,0-4.666-2.23,17.186,17.186,0,0,0-5.771-1.115,7.233,7.233,0,0,0-4.584,1.4,4.4,4.4,0,0,0-1.8,3.18,6.429,6.429,0,0,0-.041.7,5.513,5.513,0,0,0,2.619,4.79,12.491,12.491,0,0,0,7.162,1.776,27.956,27.956,0,0,0,2.947-.165,60.249,60.249,0,0,0,8.39-1.363Z"
          transform="translate(695.941 2308.248)"
          fill={isDarkMode?"#ffff":"#5439ac"}
        />
        <path
          id="Path_1438"
          data-name="Path 1438"
          d="M1096.319,372.978a4.8,4.8,0,0,1,2.161-.2,3.418,3.418,0,0,1,2.1.939,3.131,3.131,0,0,1,.873,2.019,19.821,19.821,0,0,1-.662,4.881c-.343,1.757-.7,3.512-1.033,5.271a7.5,7.5,0,0,1,2.945.588,3.1,3.1,0,0,1,1.543,1.521,3.992,3.992,0,0,1-.219,3.627,3.5,3.5,0,0,1-1.981,1.447,13.542,13.542,0,0,1-3.74.271c-.672,3.26-1.351,6.519-2.015,9.78,1.28,0,2.561,0,3.842,0a5.427,5.427,0,0,1,2.71.642,3.6,3.6,0,0,1,1.706,2.71,3.659,3.659,0,0,1-.89,2.908,4.833,4.833,0,0,1-3.7,1.248c-1.7,0-3.405,0-5.108,0-.663,3.066-1.248,6.149-1.908,9.216a7.526,7.526,0,0,1-.791,2.372,3.172,3.172,0,0,1-1.394,1.248,4.589,4.589,0,0,1-2.275.232,3.357,3.357,0,0,1-2.133-1.078,3.268,3.268,0,0,1-.8-2.142,24.34,24.34,0,0,1,.723-4.848c.326-1.665.662-3.329.985-4.994-2.479,0-9.961-.018-12.44.008-.393,1.971-.8,3.937-1.2,5.907a35,35,0,0,1-1.281,5.132,3.231,3.231,0,0,1-.851,1.419,3.378,3.378,0,0,1-2.014.636,4.376,4.376,0,0,1-2.411-.5,3.119,3.119,0,0,1-1.5-2.191,7.857,7.857,0,0,1,.18-2.707c.481-2.574,1.012-5.138,1.509-7.708a7.166,7.166,0,0,1-2.733-.526,3.126,3.126,0,0,1-1.45-1.263,4.022,4.022,0,0,1-.434-2.376,3.482,3.482,0,0,1,.958-2.11,3.863,3.863,0,0,1,2.007-1.075,15.548,15.548,0,0,1,3.165-.162c.65-3.256,1.278-6.518,1.922-9.776-1.222-.015-2.444,0-3.666-.008a5.121,5.121,0,0,1-2.814-.775,3.626,3.626,0,0,1-1.517-2.217,3.673,3.673,0,0,1,.862-3.276,4.687,4.687,0,0,1,3.376-1.234c1.753-.008,3.507,0,5.26,0,.474-2.159.893-4.331,1.347-6.495a26.1,26.1,0,0,1,1.062-4.247,3.619,3.619,0,0,1,1.533-1.886,4.179,4.179,0,0,1,2.362-.371,3.424,3.424,0,0,1,2.162.921,3.309,3.309,0,0,1,.878,2.918c-.5,3.067-1.174,6.1-1.752,9.154,2.454.005,9.912.016,12.366-.005.621-2.983,1.256-5.963,1.868-8.948a15,15,0,0,1,.553-2.063,3.249,3.249,0,0,1,1.747-1.832m-18.06,20.37c-.643,3.261-1.34,6.51-1.964,9.773,2.5,0,10,.013,12.492-.006.63-3.258,1.281-6.512,1.909-9.77C1088.218,393.34,1080.736,393.333,1078.259,393.348Z"
          transform="translate(-374.426 1868.25)"
          fill="#27bdbe"
        />
        <path
          id="Path_1446"
          data-name="Path 1446"
          d="M7.957-.03A6.721,6.721,0,0,1,6.278-.237,6.8,6.8,0,0,1,4.757-.827a6.4,6.4,0,0,1-1.319-.939A6.344,6.344,0,0,1,2.385-3.02a7.2,7.2,0,0,1-.807-1.894,8.259,8.259,0,0,1-.284-2.177,10.919,10.919,0,0,1,.087-1.4A10.512,10.512,0,0,1,1.66-9.874a13.242,13.242,0,0,1,.5-1.484q.311-.775.758-1.7l2.453,1.168q-.393.8-.654,1.43a11.7,11.7,0,0,0-.425,1.2,7.52,7.52,0,0,0-.234,1.08A8.015,8.015,0,0,0,3.988-7.1a5.407,5.407,0,0,0,.185,1.424A4.846,4.846,0,0,0,4.686-4.45,3.845,3.845,0,0,0,6.065-3.211a3.906,3.906,0,0,0,1.892.464h2.214a6.112,6.112,0,0,0,1.881-.24A2.6,2.6,0,0,0,13.18-3.67a2.351,2.351,0,0,0,.551-1.064,5.975,5.975,0,0,0,.147-1.375v-7.345h2.715v3.405a1.337,1.337,0,0,0,.474,1.075,1.844,1.844,0,0,0,1.172.355h.872V-5.9H18.24a4.833,4.833,0,0,1-.845-.076,4.377,4.377,0,0,1-.8-.218v.087a5.984,5.984,0,0,1-1.608,4.562A6.783,6.783,0,0,1,10.171-.03ZM7.728-14.261l1.963-1.986L11.7-14.239,9.713-12.253ZM18.676-8.619h1.407a4.054,4.054,0,0,0,1.041-.109,1.435,1.435,0,0,0,.622-.322,1.053,1.053,0,0,0,.3-.518,2.893,2.893,0,0,0,.076-.7v-3.176h2.715v3.121a1.707,1.707,0,0,0,.425,1.288,1.931,1.931,0,0,0,1.341.415,2.557,2.557,0,0,0,.4-.065,1.217,1.217,0,0,0,.458-.224,1.343,1.343,0,0,0,.382-.491A1.989,1.989,0,0,0,28-10.267v-3.176h2.7v3.121a1.723,1.723,0,0,0,.425,1.3,1.969,1.969,0,0,0,1.385.4,1.693,1.693,0,0,0,.518-.082,1.23,1.23,0,0,0,.463-.273,1.427,1.427,0,0,0,.338-.5,2.19,2.19,0,0,0,.153-.753v-3.22H36.7v3.23A1.489,1.489,0,0,0,37.213-9a2.463,2.463,0,0,0,1.5.377h1.069V-5.9H38.718a6.906,6.906,0,0,1-1.952-.246,3.548,3.548,0,0,1-1.428-.8,3.774,3.774,0,0,1-1.3.78,4.483,4.483,0,0,1-1.521.267,5.788,5.788,0,0,1-1.794-.251,3.66,3.66,0,0,1-1.368-.808,4.185,4.185,0,0,1-1.27.775,4.08,4.08,0,0,1-1.423.284h-.076a5.263,5.263,0,0,1-1.745-.267,4.167,4.167,0,0,1-1.33-.748A5.346,5.346,0,0,1,20.082-5.9H18.676Zm10.37-9.342-1.854,1.877-1.854-1.855,1.854-1.877ZM33.724-18l-1.832,1.855-1.908-1.833,1.876-1.877Zm-2.41-3.078-1.745,1.746L27.846-21.06l1.745-1.746ZM51.061-8.619V-5.9H49.447a5.388,5.388,0,0,1-1.69-.251,3.4,3.4,0,0,1-1.287-.742,3.885,3.885,0,0,1-1.445.753,6.888,6.888,0,0,1-1.9.24H39.35V-8.619h3.773a3.644,3.644,0,0,0,1.063-.126,1.588,1.588,0,0,0,.6-.311.856.856,0,0,0,.262-.415,1.764,1.764,0,0,0,.06-.447v-3.536h2.7v3.46a1.218,1.218,0,0,0,.218.769,1.436,1.436,0,0,0,.5.415,1.613,1.613,0,0,0,.551.164q.273.027.371.027ZM46.7.1,44.868-1.754l1.81-1.877,1.876,1.877ZM42.131.112,40.3-1.743l1.8-1.877,1.876,1.877ZM64.681-5.9h-.327a6.83,6.83,0,0,1-1.668-.18,5.129,5.129,0,0,1-1.276-.5,5.272,5.272,0,0,1-1.041-.775q-.474-.453-.965-1.01A2.8,2.8,0,0,1,58.569-7.2a4.788,4.788,0,0,1-1.309.775,6.821,6.821,0,0,1-1.576.415,9.516,9.516,0,0,1-1.428.109H50.625V-8.619H54.18A10.044,10.044,0,0,0,55.51-8.7a4.075,4.075,0,0,0,1.058-.273,1.832,1.832,0,0,0,.709-.507,1.331,1.331,0,0,0,.294-.775,2.625,2.625,0,0,0-.4-1.19,16.111,16.111,0,0,0-1.036-1.6q-.638-.884-1.439-1.872t-1.619-2l.458-2.215L63-23.734l1.112,2.488-8.276,3.831q1.025,1.375,2.045,2.734t2.045,2.734q.6.8,1.1,1.413a7.693,7.693,0,0,0,1.009,1.042,3.944,3.944,0,0,0,1.063.649,3.335,3.335,0,0,0,1.254.224h.327ZM75.956-8.619V-5.9H74.342a5.388,5.388,0,0,1-1.69-.251,3.4,3.4,0,0,1-1.287-.742,3.885,3.885,0,0,1-1.445.753,6.888,6.888,0,0,1-1.9.24H64.244V-8.619h3.773a3.644,3.644,0,0,0,1.063-.126,1.588,1.588,0,0,0,.6-.311.857.857,0,0,0,.262-.415A1.764,1.764,0,0,0,70-9.918v-3.536h2.7v3.46a1.218,1.218,0,0,0,.218.769,1.436,1.436,0,0,0,.5.415,1.612,1.612,0,0,0,.551.164q.273.027.371.027ZM71.594.1,69.762-1.754l1.81-1.877,1.876,1.877ZM67.025.112,65.193-1.743l1.8-1.877,1.876,1.877Zm8.549-8.731A5.715,5.715,0,0,0,77.2-8.8a2.111,2.111,0,0,0,.856-.453,1.12,1.12,0,0,0,.338-.6,3.457,3.457,0,0,0,.06-.622V-21.639h2.7v11.165a1.9,1.9,0,0,0,.431,1.244,1.751,1.751,0,0,0,1.216.611h.262V-5.9h-.273a6.993,6.993,0,0,1-.954-.076,3.083,3.083,0,0,1-.747-.213,3.06,3.06,0,0,1-.649-.387,6.141,6.141,0,0,1-.649-.589,2.764,2.764,0,0,1-.671.595,3.435,3.435,0,0,1-.905.393,6.762,6.762,0,0,1-1.172.213q-.654.065-1.472.065Zm15.211-6.45q.022.076.093.36t.158.693q.087.409.18.911t.174,1.01q.082.507.131.988a8.4,8.4,0,0,1,.049.84A4.716,4.716,0,0,1,91.2-8.319a3.974,3.974,0,0,1-.97,1.359,3.99,3.99,0,0,1-1.347.8,4.5,4.5,0,0,1-1.5.262h-4.7V-8.619h4.776a2.642,2.642,0,0,0,.376-.038,1.225,1.225,0,0,0,.491-.2,1.4,1.4,0,0,0,.431-.5,1.882,1.882,0,0,0,.185-.911,5.424,5.424,0,0,0-.038-.584q-.038-.344-.1-.737t-.147-.8q-.082-.409-.158-.775t-.153-.666q-.076-.3-.12-.464ZM83.24-2.311l1.854-1.855,1.854,1.877L85.093-.434Zm4.547.022,1.876-1.855,1.854,1.877L89.662-.412ZM85.617.767,87.339-.958,89.084.789,87.361,2.513ZM97.1-5.9H94.384V-21.639H97.1Zm23.084,8.12H114.8a12.211,12.211,0,0,1-2.9-.327A6.526,6.526,0,0,1,109.573.849,5.012,5.012,0,0,1,108.03-.985a5.939,5.939,0,0,1-.562-2.69,4.546,4.546,0,0,1,.518-2.123,7.138,7.138,0,0,1,1.576-1.959,14.008,14.008,0,0,1,1.347-1.07q.7-.491,1.467-.949l-2.944-2.881a3.8,3.8,0,0,1,.049-.562,4.837,4.837,0,0,1,.153-.666,4.117,4.117,0,0,1,.273-.677,3.186,3.186,0,0,1,.409-.617,3.039,3.039,0,0,1,1.189-.78,4.993,4.993,0,0,1,1.712-.256H116.8a3.376,3.376,0,0,1,.943.131,3.352,3.352,0,0,1,.84.371,3.319,3.319,0,0,1,.7.578,3.088,3.088,0,0,1,.507.742,3,3,0,0,1,.2.611,3.068,3.068,0,0,1,.065.622,2.347,2.347,0,0,1-.283,1.135,4.156,4.156,0,0,1-.742.977,8.1,8.1,0,0,1-1.03.857q-.572.4-1.139.786.523.415.78.584a2.987,2.987,0,0,0,.333.2h4.078V-5.9h-4.165a3.031,3.031,0,0,1-.665-.071,2.671,2.671,0,0,1-.692-.278,7.092,7.092,0,0,1-.872-.589q-.5-.382-1.216-.993-.818.491-1.592.988a12.92,12.92,0,0,0-1.379,1.01,5.273,5.273,0,0,0-.97,1.053,1.956,1.956,0,0,0-.365,1.108,3.081,3.081,0,0,0,.229,1.25,2.659,2.659,0,0,0,.605.873,2.914,2.914,0,0,0,.861.562,5.358,5.358,0,0,0,1,.316,7.228,7.228,0,0,0,1.03.142q.512.033.938.033h5.387Zm-7.2-15.923q-.414,0-.627.011t-.256.076l.453.507q.267.3.6.66t.725.769q.393.409.829.835.829-.589,1.532-1.07a9.191,9.191,0,0,0,1.259-1.026.621.621,0,0,0,.164-.284.519.519,0,0,0,.022-.142.217.217,0,0,0-.022-.1.356.356,0,0,0-.2-.18.833.833,0,0,0-.327-.06Zm16.727-1.364q.022.076.093.36t.158.693q.087.409.18.911t.174,1.01q.082.507.131.988a8.4,8.4,0,0,1,.049.84,4.716,4.716,0,0,1-.371,1.948,3.974,3.974,0,0,1-.97,1.359,3.99,3.99,0,0,1-1.347.8,4.5,4.5,0,0,1-1.5.262h-4.7V-8.619h4.776a2.642,2.642,0,0,0,.376-.038,1.225,1.225,0,0,0,.491-.2,1.4,1.4,0,0,0,.431-.5,1.882,1.882,0,0,0,.185-.911,5.424,5.424,0,0,0-.038-.584q-.038-.344-.1-.737t-.147-.8q-.082-.409-.158-.775t-.153-.666q-.076-.3-.12-.464ZM128.448.035,126.616-1.82l1.81-1.877L130.3-1.82Zm-4.569.011-1.832-1.855,1.8-1.877,1.876,1.877ZM141.533-5.9h-.414a6.226,6.226,0,0,1-.845-.055,1.878,1.878,0,0,1-.78-.306,8.035,8.035,0,0,1-.643,2.554,6.1,6.1,0,0,1-1.368,1.959,6,6,0,0,1-2.045,1.261,7.537,7.537,0,0,1-2.672.447H131.4V-2.758h1.363a6.63,6.63,0,0,0,1.81-.218,2.891,2.891,0,0,0,1.254-.7,2.93,2.93,0,0,0,.731-1.25A6.348,6.348,0,0,0,136.8-6.8v-6.646h2.715v3.263a1.387,1.387,0,0,0,.213.808,1.64,1.64,0,0,0,.491.475,1.722,1.722,0,0,0,.54.224,2.132,2.132,0,0,0,.36.055h.414Zm8.015-.022a4.589,4.589,0,0,1-3.162-1.037,3.72,3.72,0,0,1-1.33.808,4.6,4.6,0,0,1-1.5.251H141.1V-8.619h2.453a2.323,2.323,0,0,0,.376-.044,1.254,1.254,0,0,0,.491-.213,1.451,1.451,0,0,0,.431-.5,1.909,1.909,0,0,0,.185-.922v-3.143h2.715v3.1a1.757,1.757,0,0,0,.42,1.3,1.93,1.93,0,0,0,1.379.409,2.076,2.076,0,0,0,.376-.049,1.285,1.285,0,0,0,.491-.224,1.485,1.485,0,0,0,.431-.518,1.949,1.949,0,0,0,.185-.922v-3.1h2.7v3.1a1.768,1.768,0,0,0,.431,1.315,1.956,1.956,0,0,0,1.4.42,1.736,1.736,0,0,0,.387-.06,1.343,1.343,0,0,0,.485-.24,1.482,1.482,0,0,0,.414-.518,2.017,2.017,0,0,0,.174-.917,5.284,5.284,0,0,0-.038-.578q-.038-.338-.1-.715t-.136-.764q-.076-.387-.153-.737t-.147-.633q-.071-.284-.115-.447l2.562-.84q.022.076.087.349t.158.677q.093.4.191.895t.18.988q.082.5.136.971a7.423,7.423,0,0,1,.055.835,4.826,4.826,0,0,1-.365,1.948,4.142,4.142,0,0,1-.954,1.386,3.9,3.9,0,0,1-1.33.824,4.489,4.489,0,0,1-1.494.284,4.589,4.589,0,0,1-3.206-1.07,3.663,3.663,0,0,1-1.325.8A4.61,4.61,0,0,1,149.548-5.923Zm41.109-7.519v3.2a1.648,1.648,0,0,0,.114.649,1.409,1.409,0,0,0,.294.447,1.427,1.427,0,0,0,.4.284,2.442,2.442,0,0,0,.425.158,2.45,2.45,0,0,0,.365.071q.158.016.234.016h.676V-5.9h-.676a6.822,6.822,0,0,1-.791-.049,5.7,5.7,0,0,1-.84-.164,4.4,4.4,0,0,1-.812-.311,2.97,2.97,0,0,1-.7-.48,4.921,4.921,0,0,1-3.228,1H173.537a4.27,4.27,0,0,1-1.527-.273,3.813,3.813,0,0,1-1.276-.8,4.92,4.92,0,0,1-.453-.5,3.385,3.385,0,0,1-.42-.7,4.864,4.864,0,0,1-.305-.911,4.969,4.969,0,0,1-.12-1.14,7.063,7.063,0,0,1,.109-1.184q.109-.638.245-1.206t.256-.982q.12-.415.153-.513l1.3.415,1.287.4q-.1.295-.207.7t-.207.846q-.1.437-.164.84a4.455,4.455,0,0,0-.065.7,2.053,2.053,0,0,0,.147.846,1.307,1.307,0,0,0,.36.491,1.12,1.12,0,0,0,.463.224,2.129,2.129,0,0,0,.447.055h12.485a3.984,3.984,0,0,0,1.025-.115,1.332,1.332,0,0,0,.632-.333,1.2,1.2,0,0,0,.251-.819v-3.591Zm-8.418-.917-1.832-1.855,1.81-1.877,1.876,1.877Zm-4.569.011L175.838-16.2l1.8-1.877,1.876,1.877ZM192.8-5.9V-8.619h4.449a9.565,9.565,0,0,0,1.538-.1A4.578,4.578,0,0,0,199.8-8.99a1.771,1.771,0,0,0,.583-.366,1.344,1.344,0,0,0,.284-.409,11.03,11.03,0,0,1-1.494.109,10.827,10.827,0,0,1-1.428-.115,4.217,4.217,0,0,1-1.647-.611,3.339,3.339,0,0,1-1.238-1.326,4.261,4.261,0,0,1-.431-1.986,4.46,4.46,0,0,1,.338-1.73,4.345,4.345,0,0,1,.943-1.419,4.441,4.441,0,0,1,1.434-.955,4.134,4.134,0,0,1,1.581-.295h.218a4.527,4.527,0,0,1,1.543.306,3.942,3.942,0,0,1,1.167.72,4.062,4.062,0,0,1,.829,1.042,6.188,6.188,0,0,1,.534,1.282,9.043,9.043,0,0,1,.294,1.435,13.809,13.809,0,0,1,.1,1.5l-.044.808a6.107,6.107,0,0,1-.611,2.516A4.283,4.283,0,0,1,201.4-6.922a5.206,5.206,0,0,1-1.9.8,10.94,10.94,0,0,1-2.246.224Zm6.117-9.473q-.109-.011-.207-.011a2.459,2.459,0,0,0-.605.082,1.607,1.607,0,0,0-.6.3,1.657,1.657,0,0,0-.447.54,1.585,1.585,0,0,0-.169.748,1.413,1.413,0,0,0,1,1.364,3.652,3.652,0,0,0,1.45.251,8.694,8.694,0,0,0,1.418-.131q-.022-.469-.076-.993a3.6,3.6,0,0,0-.24-.982,2.077,2.077,0,0,0-.545-.78A1.7,1.7,0,0,0,198.922-15.375Zm-2.475-6.93,1.963-1.986,2.006,2.008L198.431-20.3ZM211.713-5.9a12.422,12.422,0,0,1-2.061-.147,5.347,5.347,0,0,1-1.45-.437,2.692,2.692,0,0,1-.943-.737,3.179,3.179,0,0,1-.54-1.048,6.3,6.3,0,0,1-.245-1.359q-.06-.758-.06-1.675V-21.639h2.715V-11.3a12.857,12.857,0,0,0,.06,1.4,1.444,1.444,0,0,0,.316.813,1.3,1.3,0,0,0,.774.382,8.583,8.583,0,0,0,1.434.093Zm7.666-9.167q.022.076.093.36t.158.693q.087.409.18.911t.174,1.01q.082.507.131.988a8.4,8.4,0,0,1,.049.84,4.716,4.716,0,0,1-.371,1.948,3.973,3.973,0,0,1-.97,1.359,3.99,3.99,0,0,1-1.347.8,4.5,4.5,0,0,1-1.5.262h-4.7V-8.619h4.776a2.642,2.642,0,0,0,.376-.038,1.225,1.225,0,0,0,.491-.2,1.4,1.4,0,0,0,.431-.5,1.882,1.882,0,0,0,.185-.911,5.422,5.422,0,0,0-.038-.584q-.038-.344-.1-.737t-.147-.8q-.082-.409-.158-.775t-.153-.666q-.076-.3-.12-.464ZM218.113.035,216.282-1.82l1.81-1.877,1.876,1.877Zm-4.569.011-1.832-1.855,1.8-1.877,1.876,1.877ZM229.17-6.567a8.085,8.085,0,0,1-.556,2.712A6.007,6.007,0,0,1,227.262-1.8a5.876,5.876,0,0,1-2.083,1.3,7.808,7.808,0,0,1-2.759.458h-1.352V-2.758h1.352a6.63,6.63,0,0,0,1.81-.218,2.891,2.891,0,0,0,1.254-.7,2.93,2.93,0,0,0,.731-1.25,6.347,6.347,0,0,0,.24-1.872v-6.646h2.715Zm6.357.677a7.6,7.6,0,0,1-.818-.044q-.4-.044-.818-.12t-.851-.191q-.436-.115-.916-.256l-1.3-.393.785-2.619q.949.327,1.968.578a12.463,12.463,0,0,0,1.925.327q.294.022.567.022a5.132,5.132,0,0,0,1.1-.12,1.065,1.065,0,0,0,.78-.6.459.459,0,0,0,.044-.207,1.053,1.053,0,0,0-.044-.24,1.438,1.438,0,0,0-.218-.415l-4.067-5.937,2.29-1.484.741,1.146a.226.226,0,0,0,.038.065q.038.055.153.229l.327.5q.213.322.562.846t.856,1.293q.507.769,1.216,1.839a4.24,4.24,0,0,1,.687,1.735,3.168,3.168,0,0,1,.033.447,3.107,3.107,0,0,1-.262,1.255,3.107,3.107,0,0,1-.5.8,3.656,3.656,0,0,1-.725.649,4.705,4.705,0,0,1-1.865.731A9.656,9.656,0,0,1,235.527-5.891Z"
          transform="translate(486.133 2196.286)"
          fill={isDarkMode?"#ffff":"#5439ac"}
        />
      </g>
      <g id="Group_5528" data-name="Group 5528" transform="translate(0 542)">
        <path
          id="Fill_1"
          data-name="Fill 1"
          d="M12.248.145a10.5,10.5,0,1,0,8.47,7.936A10.536,10.536,0,0,0,12.248.145"
          transform="translate(464 971.999)"
          fill="#57c5d0"
        />
        <path
          id="Fill_1_Copy"
          data-name="Fill 1 Copy"
          d="M8.165.1a7,7,0,1,0,5.647,5.291A7.024,7.024,0,0,0,8.165.1"
          transform="translate(895 1058)"
          fill="#57c5d0"
        />
        <path
          id="Fill_4"
          data-name="Fill 4"
          d="M6.356.184A5.008,5.008,0,1,0,9.794,3.589,5.015,5.015,0,0,0,6.356.184"
          transform="translate(951 982)"
          fill="#f58122"
        />
        <path
          id="Fill_5"
          data-name="Fill 5"
          d="M3.589.067a2.992,2.992,0,1,0-.921,5.908A2.992,2.992,0,0,0,3.589.067"
          transform="translate(503 1076.001)"
          fill="#f58122"
        />
        <path
          id="Fill_5_Copy"
          data-name="Fill 5 Copy"
          d="M5.394.1A4.5,4.5,0,1,0,4.009,8.98,4.5,4.5,0,0,0,5.394.1"
          transform="translate(404.982 1030.904)"
          fill={isDarkMode?"#ffff":"#5439ac"}
        />
        <path
          id="Fill_5_Copy-2"
          data-name="Fill 5 Copy"
          d="M2.991.056a2.494,2.494,0,1,0-.768,4.923A2.494,2.494,0,0,0,2.991.056"
          transform="translate(860 1013)"
          fill={isDarkMode?"#ffff":"#5439ac"}
        />
      </g>
    </g>
  </svg>
);
}
