import { useNavigate } from "react-router-dom";
import '../scss/app.scss'

const RoadMapSvg = () => {
    const navigate = useNavigate();
  const handleClick = (id) => {
    console.log(`clicked on circle ${id}`);
    navigate(`/career-growth/${id}`)

  };

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xmlSpace="preserve"
        viewBox="0 0 1205.8 595.3"
      >
        <style type="text/css">
          {
          `.st0{fill:none;}
            .st1{fill:#AC6FAF;}
            .st2{font-family:'Ubuntu-Bold';}
            .st3{font-size:11px;}
            .st4{fill:#323333;}
            .st5{font-size:13px;}
            .st6{fill:#195C7C;}
            .st7{fill:#2FB5C2;}
            .st8{fill:#6CC4A1;}
            .st9{fill:#CEDC2A;}
            .st10{fill:#FAAE29;}
            .st11{fill:#EC474B;}
            .st12{fill:#A63779;}
            .st13{fill:#B3E1E8;stroke:#97D8E3;stroke-width:3;stroke-miterlimit:10;}
            .st14{fill:#6E7A8A;}
            .st15{fill:url(#SVGID_1_);}
            .st16{fill:#F68B23;}
            .st17{fill:#FFFFFF;}
            .st18{fill:#383938;}
            .st19{font-size:8.0102px;}
            .st20{fill:url(#SVGID_00000131329540758790117030000009729569821002107066_);}
            .st21{fill:url(#SVGID_00000174570545104563085740000014100422812235722168_);}
            .st22{fill:none;stroke:url(#SVGID_00000127030954579778067420000010852572213280923019_);stroke-miterlimit:10;}
            .st23{fill:url(#SVGID_00000122722898206810178730000000916238620821541261_);}
            .st24{fill:none;stroke:url(#SVGID_00000047738262600345547990000013625769980282448828_);stroke-miterlimit:10;}
            .st25{fill:url(#SVGID_00000047757600151881919590000004573146086299922838_);}
            .st26{fill:none;stroke:url(#SVGID_00000103265446712244661250000016241658002009032069_);stroke-miterlimit:10;}
            .st27{fill:url(#SVGID_00000071532517657129431850000009595818798773405592_);}
            .st28{fill:none;stroke:url(#SVGID_00000016064838732369401000000009356638455573018790_);stroke-miterlimit:10;}
            .st29{fill:url(#SVGID_00000068642868892920483920000018234099841849709474_);}
            .st30{fill:none;stroke:url(#SVGID_00000050629717733254112230000001513189999803746228_);stroke-miterlimit:10;}
            .st31{fill:url(#SVGID_00000127029451036725979160000004686287120632564624_);}
            .st32{fill:none;stroke:url(#SVGID_00000098195572994043509850000008541171895272803742_);stroke-miterlimit:10;}
            .st33{fill:url(#SVGID_00000155864770915190548470000017629274070158307222_);}
            .st34{fill:none;stroke:url(#SVGID_00000000940308352888636290000015746854172700188322_);stroke-miterlimit:10;}
            .st35{fill:url(#SVGID_00000122706397470207374290000014351597198937849999_);}
            .st36{fill:none;stroke:url(#SVGID_00000163775000966027780200000002835485368810325161_);stroke-miterlimit:10;}
            .st37{fill:none;stroke:#333333;stroke-width:25;stroke-miterlimit:10;}
            .st38{fill:none;stroke:#4D4E4E;stroke-width:25;stroke-miterlimit:10;}
            .st39{fill:none;stroke:#FFFFFF;stroke-width:0.75;stroke-miterlimit:10;}
            .st40{fill:none;stroke:#FFFFFF;stroke-width:2;stroke-miterlimit:10;}
            .st41{fill:none;stroke:#FFFFFF;stroke-width:2;stroke-miterlimit:10;stroke-dasharray:8.0845,9.0951,8.0845,9.0951;}
            .st42{fill:none;stroke:#FFFFFF;stroke-width:2;stroke-miterlimit:10;stroke-dasharray:8.0845,9.0951,8.0845,9.0951,8.0845,9.0951;}`
            }
        </style>
        <g id="Layer_1">
          <path d="M176.3 466.5h74.8v19.1h-74.8z" className="st0"></path>
          <text className="st1 st2 st3" transform="translate(179.766 475.063)">
            MARCH 2025
          </text>
          <path d="M108.2 570.5H503v18.3H108.2z" className="st0"></path>
          <text className="st4 st2 st3" transform="translate(228.742 579.065)">
            TECHNICAL SKILLS TRACKER
          </text>
          <path d="M728.1 570.1h394.8v18.3H728.1z" className="st0"></path>
          <text className="st4 st2 st3" transform="translate(834.029 578.595)">
            NON-TECHNICAL SKILLS TRACKER
          </text>
          <path d="M176.3 267h74.8v19.1h-74.8z" className="st0"></path>
          <text className="st1 st2 st5" transform="translate(204.227 277.09)">
            M1
          </text>
          <path d="M294.7 218.9h74.8V238h-74.8z" className="st0"></path>
          <text className="st6 st2 st5" transform="translate(322.55 229.016)">
            M2
          </text>
          <path d="M430.2 267.6H505v19.1h-74.8z" className="st0"></path>
          <text className="st7 st2 st5" transform="translate(458.06 277.65)">
            M3
          </text>
          <path d="M552.5 219.5h74.8v19.1h-74.8z" className="st0"></path>
          <text className="st8 st2 st5" transform="translate(580.384 229.574)">
            M4
          </text>
          <path d="M677.3 268.3h74.8v19.1h-74.8z" className="st0"></path>
          <text className="st9 st2 st5" transform="translate(705.173 278.403)">
            M5
          </text>
          <path d="M801.9 220h74.8v19.1h-74.8z" className="st0"></path>
          <text className="st10 st2 st5" transform="translate(829.743 230.132)">
            M6
          </text>
          <path d="M929.2 269.1h74.8v19.1h-74.8z" className="st0"></path>
          <text className="st11 st2 st5" transform="translate(957.068 279.156)">
            M7
          </text>
          <path d="M1049.6 220.8h74.8v19.1h-74.8z" className="st0"></path>
          <text
            className="st12 st2 st5"
            transform="translate(1077.492 230.872)"
          >
            M8
          </text>
          <path d="M294.7 418.5h74.8v19.1h-74.8z" className="st0"></path>
          <text className="st6 st2 st3" transform="translate(298.09 427.07)">
            MARCH 2025
          </text>
          <path d="M426 464.5h74.8v19.1H426z" className="st0"></path>
          <text className="st7 st2 st3" transform="translate(429.413 473.077)">
            MARCH 2025
          </text>
          <path d="M548.3 416.5h74.8v19.1h-74.8z" className="st0"></path>
          <text className="st8 st2 st3" transform="translate(551.736 425.083)">
            MARCH 2025
          </text>
          <path d="M676.6 462.6h74.8v19.1h-74.8z" className="st0"></path>
          <text className="st9 st2 st3" transform="translate(680.06 471.09)">
            MARCH 2025
          </text>
          <path d="M801 414.6h74.8v19.1H801z" className="st0"></path>
          <text className="st10 st2 st3" transform="translate(804.383 423.096)">
            MARCH 2025
          </text>
          <path d="M927.3 460.6h74.8v19.1h-74.8z" className="st0"></path>
          <text className="st11 st2 st3" transform="translate(930.707 469.103)">
            MARCH 2025
          </text>
          <path d="M1049.6 412.6h74.8v19.1h-74.8z" className="st0"></path>
          <text className="st12 st2 st3" transform="translate(1053.03 421.109)">
            MARCH 2025
          </text>
          <path
            d="M512.6 553.3H116.4c-5.7 0-10.4-4.6-10.4-10.4 0-5.7 4.6-10.4 10.4-10.4h396.3c5.7 0 10.4 4.6 10.4 10.4-.1 5.7-4.7 10.4-10.5 10.4"
            className="st13"
          ></path>
          <image
            xlinkHref="BA613497.png"
            width="872"
            height="137"
            opacity="0.3"
            overflow="visible"
            transform="matrix(.24 0 0 .24 103.854 526.51)"
          ></image>
          <path
            d="M292.6 553.4H116.4c-5.7 0-10.4-4.6-10.4-10.4 0-5.7 4.6-10.4 10.4-10.4h176.2c5.7 0 10.4 4.6 10.4 10.4 0 5.7-4.7 10.4-10.4 10.4"
            className="st14"
          ></path>
          <path
            d="M292.6 553.2H116.4c-5.7 0-10.4-4.6-10.4-10.4 0-5.7 4.6-10.4 10.4-10.4h176.2c5.7 0 10.4 4.6 10.4 10.4 0 5.7-4.7 10.4-10.4 10.4"
            className="st15"
          ></path>
          <path
            d="M319.7 502.4c0 7.6-11.4 25.9-15.4 32-.6 1-2 1-2.7 0-4-6.1-15.4-24.3-15.4-32 0-9.2 7.5-16.7 16.7-16.7 9.3 0 16.8 7.5 16.8 16.7"
            className="st16"
          ></path>
          <circle cx="303" cy="502.4" r="13" className="st17"></circle>
          <path d="M288.5 499.2h28.9v25.1h-28.9z" className="st0"></path>
          <text
            className="st18 st2 st19"
            transform="translate(294.739 505.457)"
          >
            50%
          </text>
          <path
            d="M1121.6 552.6H725.3c-5.7 0-10.4-4.6-10.4-10.4 0-5.7 4.6-10.4 10.4-10.4h396.3c5.7 0 10.4 4.6 10.4 10.4 0 5.7-4.7 10.4-10.4 10.4"
            className="st13"
          ></path>
          <image
            xlinkHref="BA613495.png"
            width="606"
            height="137"
            opacity="0.3"
            overflow="visible"
            transform="matrix(.24 0 0 .24 712.842 525.84)"
          ></image>
          <path
            d="M837.8 552.6H725.3c-5.7 0-10.4-4.6-10.4-10.4 0-5.7 4.6-10.4 10.4-10.4h112.4c5.7 0 10.4 4.6 10.4 10.4s-4.6 10.4-10.3 10.4"
            className="st14"
          ></path>
          <linearGradient
            id="SVGID_00000086667316564297284840000005056865380356834221_"
            x1="781.541"
            x2="781.541"
            y1="552.457"
            y2="531.725"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopOpacity="0"></stop>
            <stop offset="0.081" stopColor="#0D0D0D" stopOpacity="0.045"></stop>
            <stop offset="0.23" stopColor="#2F2F2F" stopOpacity="0.128"></stop>
            <stop offset="0.432" stopColor="#676767" stopOpacity="0.24"></stop>
            <stop offset="0.676" stopColor="#B3B3B3" stopOpacity="0.376"></stop>
            <stop offset="0.9" stopColor="#FFF" stopOpacity="0.5"></stop>
          </linearGradient>
          <path
            fill="url(#SVGID_00000086667316564297284840000005056865380356834221_)"
            d="M837.8 552.5H725.3c-5.7 0-10.4-4.6-10.4-10.4 0-5.7 4.6-10.4 10.4-10.4h112.4c5.7 0 10.4 4.6 10.4 10.4 0 5.7-4.6 10.4-10.3 10.4"
          ></path>
          <path
            d="M860.2 503.1c0 7.6-11.4 25.9-15.4 32-.6 1-2 1-2.7 0-4-6.1-15.4-24.3-15.4-32 0-9.2 7.5-16.7 16.7-16.7 9.3 0 16.8 7.5 16.8 16.7"
            className="st11"
          ></path>
          <circle cx="843.5" cy="503.1" r="13" className="st17"></circle>
          <path d="M829 499.9h28.9V525H829z" className="st0"></path>
          <text
            className="st18 st2 st19"
            transform="translate(835.235 506.156)"
          >
            25%
          </text>
        </g>
        <g id="Layer_2">
          <path
            d="M1087.3 311.7h7.3l-3.7 33.1-3.6 33-3.6-33-3.7-33.1z"
            className="st12"
            onClick={() => handleClick("8")}
          ></path>
          <circle
            cx="1087.3"
            cy="276.5"
            r="38.5"
            className="st12"
            onClick={() => handleClick("8")}
          ></circle>
          <image
            xlinkHref="BA613493.png"
            width="292"
            height="292"
            opacity="0.3"
            overflow="visible"
            transform="matrix(.24 0 0 .24 1057.242 246.48)"
            onClick={() => handleClick("8")}
          ></image>
          <linearGradient
            id="SVGID_00000098184034473382954710000004649234997649288368_"
            x1="1058.908"
            x2="1115.675"
            y1="276.532"
            y2="276.532"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#FFF"></stop>
            <stop offset="1" stopColor="#F1F2F2"></stop>
          </linearGradient>
          <circle
            cx="1087.3"
            cy="276.5"
            r="28.4"
            fill="url(#SVGID_00000098184034473382954710000004649234997649288368_)"
          ></circle>
          <linearGradient
            id="SVGID_00000045609668696535493690000017848504659613473206_"
            x1="1058.408"
            x2="1116.175"
            y1="276.532"
            y2="276.532"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#F1F2F2"></stop>
            <stop offset="1" stopColor="#FFF"></stop>
          </linearGradient>
          <circle
            cx="1087.3"
            cy="276.5"
            r="28.4"
            fill="none"
            stroke="url(#SVGID_00000045609668696535493690000017848504659613473206_)"
            strokeMiterlimit="10"
          ></circle>
          <path
            d="M967.2 366.5h7.2l-3.6 33.1-3.6 33-3.7-33-3.6-33.1z"
            className="st11"
            onClick={() => handleClick("7")}
          ></path>
          <circle
            cx="967.2"
            cy="331.3"
            r="38.5"
            className="st11"
            onClick={() => handleClick("7")}
          ></circle>
          <image
            xlinkHref="BA61349D.png"
            width="291"
            height="291"
            opacity="0.3"
            overflow="visible"
            transform="matrix(.24 0 0 .24 937.242 301.44)"
            onClick={() => handleClick("7")}
          ></image>
          <linearGradient
            id="SVGID_00000176023268777175513120000018411498584554766504_"
            x1="938.794"
            x2="995.561"
            y1="331.348"
            y2="331.348"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#FFF"></stop>
            <stop offset="1" stopColor="#F1F2F2"></stop>
          </linearGradient>
          <circle
            cx="967.2"
            cy="331.3"
            r="28.4"
            fill="url(#SVGID_00000176023268777175513120000018411498584554766504_)"
          ></circle>
          <linearGradient
            id="SVGID_00000137117428438027426490000000264591960199586227_"
            x1="938.294"
            x2="996.061"
            y1="331.348"
            y2="331.348"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#F1F2F2"></stop>
            <stop offset="1" stopColor="#FFF"></stop>
          </linearGradient>
          <circle
            cx="967.2"
            cy="331.3"
            r="28.4"
            fill="none"
            stroke="url(#SVGID_00000137117428438027426490000000264591960199586227_)"
            strokeMiterlimit="10"
          ></circle>
          <path
            d="M839.3 311.7h7.2l-3.6 33.1-3.6 33-3.7-33-3.6-33.1z"
            className="st10"
            onClick={() => handleClick("6")}
          ></path>
          <circle
            cx="839.3"
            cy="276.5"
            r="38.5"
            className="st10"
            onClick={() => handleClick("6")}
          ></circle>
          <image
            xlinkHref="BA61349F.png"
            width="291"
            height="292"
            opacity="0.3"
            overflow="visible"
            transform="matrix(.24 0 0 .24 809.322 246.48)"
            onClick={() => handleClick("6")}
          ></image>
          <linearGradient
            id="SVGID_00000038412715315944239350000015482323663021994665_"
            x1="810.882"
            x2="867.649"
            y1="276.532"
            y2="276.532"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#FFF"></stop>
            <stop offset="1" stopColor="#F1F2F2"></stop>
          </linearGradient>
          <circle
            cx="839.3"
            cy="276.5"
            r="28.4"
            fill="url(#SVGID_00000038412715315944239350000015482323663021994665_)"
          ></circle>
          <linearGradient
            id="SVGID_00000099636960972824855570000002974609702051423928_"
            x1="810.382"
            x2="868.149"
            y1="276.532"
            y2="276.532"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#F1F2F2"></stop>
            <stop offset="1" stopColor="#FFF"></stop>
          </linearGradient>
          <circle
            cx="839.3"
            cy="276.5"
            r="28.4"
            fill="none"
            stroke="url(#SVGID_00000099636960972824855570000002974609702051423928_)"
            strokeMiterlimit="10"
          ></circle>
          <circle
            cx="714.7"
            cy="331.3"
            r="38.5"
            className="st9"
            onClick={() => handleClick("5")}
          ></circle>
          <image
            xlinkHref="BA613492.png"
            width="291"
            height="291"
            opacity="0.3"
            overflow="visible"
            transform="matrix(.24 0 0 .24 684.762 301.44)"
            onClick={() => handleClick("5")}
          ></image>
          <linearGradient
            id="SVGID_00000119093713094345599390000008326807108347655571_"
            x1="686.312"
            x2="743.079"
            y1="331.348"
            y2="331.348"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#FFF"></stop>
            <stop offset="1" stopColor="#F1F2F2"></stop>
          </linearGradient>
          <circle
            cx="714.7"
            cy="331.3"
            r="28.4"
            fill="url(#SVGID_00000119093713094345599390000008326807108347655571_)"
          ></circle>
          <linearGradient
            id="SVGID_00000126292925653818448530000004912511333960343440_"
            x1="685.812"
            x2="743.579"
            y1="331.348"
            y2="331.348"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#F1F2F2"></stop>
            <stop offset="1" stopColor="#FFF"></stop>
          </linearGradient>
          <circle
            cx="714.7"
            cy="331.3"
            r="28.4"
            fill="none"
            stroke="url(#SVGID_00000126292925653818448530000004912511333960343440_)"
            strokeMiterlimit="10"
          ></circle>
          <path
            d="M714.7 366.5h7.3l-3.7 33.1-3.6 33-3.6-33-3.7-33.1z"
            className="st9"
            onClick={() => handleClick("5")}
          ></path>
          <path
            d="M587.9 311.7h7.3l-3.7 33.1-3.6 33-3.6-33-3.7-33.1z"
            className="st8"
            onClick={() => handleClick("4")}
          ></path>
          <circle
            cx="587.9"
            cy="276.5"
            r="38.5"
            className="st8"
            onClick={() => handleClick("4")}
          ></circle>
          <image
            xlinkHref="BA613491.png"
            width="292"
            height="292"
            opacity="0.3"
            overflow="visible"
            transform="matrix(.24 0 0 .24 557.802 246.48)"
            onClick={() => handleClick("4")}
          ></image>
          <linearGradient
            id="SVGID_00000071527097954762567880000001409290160792552576_"
            x1="559.514"
            x2="616.281"
            y1="276.532"
            y2="276.532"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#FFF"></stop>
            <stop offset="1" stopColor="#F1F2F2"></stop>
          </linearGradient>
          <circle
            cx="587.9"
            cy="276.5"
            r="28.4"
            fill="url(#SVGID_00000071527097954762567880000001409290160792552576_)"
          ></circle>
          <linearGradient
            id="SVGID_00000056402642983570281930000017063498751466528935_"
            x1="559.014"
            x2="616.781"
            y1="276.532"
            y2="276.532"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#F1F2F2"></stop>
            <stop offset="1" stopColor="#FFF"></stop>
          </linearGradient>
          <circle
            cx="587.9"
            cy="276.5"
            r="28.4"
            fill="none"
            stroke="url(#SVGID_00000056402642983570281930000017063498751466528935_)"
            strokeMiterlimit="10"
          ></circle>
          <path
            d="M466.7 366.5h7.2l-3.6 33.1-3.6 33-3.7-33-3.6-33.1z"
            className="st7"
            onClick={() => handleClick("3")}
          ></path>
          <circle
            cx="466.7"
            cy="331.3"
            r="38.5"
            className="st7"
            onClick={() => handleClick("3")}
          ></circle>
          <image
            xlinkHref="BA613496.png"
            width="292"
            height="291"
            opacity="0.3"
            overflow="visible"
            transform="matrix(.24 0 0 .24 436.602 301.44)"
            onClick={() => handleClick("3")}
          ></image>
          <linearGradient
            id="SVGID_00000029755674684303306180000016179925371624292766_"
            x1="438.287"
            x2="495.053"
            y1="331.348"
            y2="331.348"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#FFF"></stop>
            <stop offset="1" stopColor="#F1F2F2"></stop>
          </linearGradient>
          <circle
            cx="466.7"
            cy="331.3"
            r="28.4"
            fill="url(#SVGID_00000029755674684303306180000016179925371624292766_)"
          ></circle>
          <linearGradient
            id="SVGID_00000089551791137360461430000015442647578032979884_"
            x1="437.787"
            x2="495.553"
            y1="331.348"
            y2="331.348"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#F1F2F2"></stop>
            <stop offset="1" stopColor="#FFF"></stop>
          </linearGradient>
          <circle
            cx="466.7"
            cy="331.3"
            r="28.4"
            fill="none"
            stroke="url(#SVGID_00000089551791137360461430000015442647578032979884_)"
            strokeMiterlimit="10"
          ></circle>
          <path
            d="M332.1 311.7h7.2l-3.6 33.1-3.6 33-3.7-33-3.6-33.1z"
            className="st6"
            onClick={() => handleClick("2")}
          ></path>
          <circle
            cx="332.1"
            cy="276.5"
            r="38.5"
            className="st6"
            onClick={() => handleClick("2")}
          ></circle>
          <image
            xlinkHref="F00C999E.png"
            width="292"
            height="292"
            opacity="0.3"
            overflow="visible"
            transform="matrix(.24 0 0 .24 301.962 246.48)"
            onClick={() => handleClick("2")}
          ></image>
          <linearGradient
            id="SVGID_00000157288987986240497300000009462723399637068453_"
            x1="303.69"
            x2="360.457"
            y1="276.532"
            y2="276.532"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#FFF"></stop>
            <stop offset="1" stopColor="#F1F2F2"></stop>
          </linearGradient>
          <circle
            cx="332.1"
            cy="276.5"
            r="28.4"
            fill="url(#SVGID_00000157288987986240497300000009462723399637068453_)"
          ></circle>
          <linearGradient
            id="SVGID_00000001642014245480658800000005289230816784052870_"
            x1="303.19"
            x2="360.957"
            y1="276.532"
            y2="276.532"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#F1F2F2"></stop>
            <stop offset="1" stopColor="#FFF"></stop>
          </linearGradient>
          <circle
            cx="332.1"
            cy="276.5"
            r="28.4"
            fill="none"
            stroke="url(#SVGID_00000001642014245480658800000005289230816784052870_)"
            strokeMiterlimit="10"
          ></circle>
          <path
            d="M213.7 363.6h7.3l-3.6 33-3.7 33-3.6-33-3.6-33z"
            className="st1"
          ></path>
          <circle
            cx="213.7"
            cy="328.4"
            r="38.5"
            className="st1"
            onClick={() => handleClick("1")}
          ></circle>
          <image
            xlinkHref="F00C9999.png"
            width="292"
            height="292"
            opacity="0.3"
            overflow="visible"
            transform="matrix(.24 0 0 .24 183.642 298.32)"
            onClick={() => handleClick("1")}
          ></image>
          <linearGradient
            id="SVGID_00000054964705995218406640000002601099505987579794_"
            x1="185.366"
            x2="242.133"
            y1="328.369"
            y2="328.369"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#FFF"></stop>
            <stop offset="1" stopColor="#F1F2F2"></stop>
          </linearGradient>
          <circle
            cx="213.7"
            cy="328.4"
            r="28.4"
            fill="url(#SVGID_00000054964705995218406640000002601099505987579794_)"
          ></circle>
          <linearGradient
            id="SVGID_00000124134369439608260200000011717170947148664249_"
            x1="184.866"
            x2="242.633"
            y1="328.369"
            y2="328.369"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#F1F2F2"></stop>
            <stop offset="1" stopColor="#FFF"></stop>
          </linearGradient>
          <circle
            cx="213.7"
            cy="328.4"
            r="28.4"
            fill="none"
            stroke="url(#SVGID_00000124134369439608260200000011717170947148664249_)"
            strokeMiterlimit="10"
          ></circle>
        </g>
        <g id="Layer_3">
          <path
            d="M.4 414.9c11.5 0 25.4-3.8 34.6-10.7 37.7-28.5 75.7-25.4 114 10.7 39.4 34.4 79 36 118.8 0 42.9-39.1 85.1-40.5 126.6 0 43.1 34.4 85.4 36 126.6 0 43.3-38.8 85.5-40.8 126.6 0q63.3 52.8 126.6 0 63.3-59.7 126.6 0c49 38.8 89.9 31.5 126.6 0 38.2-34.2 76.5-37.4 114.7-9.6 8.7 6.3 19.2 9.6 29.9 9.6h33.6"
            className="st37"
          ></path>
          <path
            d="M0 406.2c11.5 0 27.1-3.8 36.2-10.7 37.7-28.5 75.7-25.4 114 10.7 39.4 34.4 79 36 118.8 0 42.9-39.1 85.1-40.5 126.6 0 43.1 34.4 85.4 36 126.6 0 43.3-38.8 85.5-40.8 126.6 0q63.3 52.8 126.6 0 63.3-59.7 126.6 0c49 38.8 89.9 31.5 126.6 0 38.2-34.2 76.5-37.4 114.7-9.6 8.7 6.3 19.2 9.6 29.9 9.6h33"
            className="st38"
          ></path>
          <path
            d="M712.2 444.3c-23.8 0-47.6-9.8-70.8-29.1l-.8-.7c-35.6-35.4-70.7-35.3-110.6.4v.1c-22.5 19.6-46.2 29.4-70.4 29.3-23.4-.2-47.4-10-71.2-28.9l-.4-.4-.4-.4c-36.4-35.5-71.5-35.4-110.6.3-21.6 19.6-44.1 29.4-66.7 29.4s-45.3-9.7-67.6-29.2l-.3-.3c-34-32.1-65.5-35.2-99-9.9C32.3 413.3 14 418 .1 418l.4-23.4c8.8 0 21.7-3 28.8-8.3 42.3-32.1 86.9-28.1 129 11.4 35.9 31.2 68.6 31.2 103.1 0 47.9-43.7 97.1-43.8 142.2-.1 39.7 31.5 75.1 31.5 111.1 0 48.8-43.7 98-43.6 142.2.1 37.8 31.4 73.1 31.3 111-.1 46.5-43.7 95.6-43.7 142-.1 40.1 31.6 74.5 31.6 111.3.1 20.9-18.7 42.5-29.1 64.1-30.9 21.9-1.8 43.8 5.1 65.2 20.6 6.7 4.8 14.6 7.4 23 7.4h33v23.4h-33c-13.4 0-26.1-4.1-36.8-11.9-33.9-24.6-65.7-21.8-100 8.9l-.2.2c-22.6 19.5-45.9 29.2-69.6 29.2-23.6 0-47.6-9.6-71.9-28.9l-.8-.7c-37.7-35.6-72.8-35.6-110.6 0l-.5.5c-23.2 19.1-47 28.9-70.9 28.9"
            className="st39"
          ></path>
          <path d="M.4 406.2h4" className="st40"></path>
          <path
            d="M13.4 405.4c8.2-1.4 16.1-4.8 22.8-9.9 1.3-1 2.5-1.9 3.8-2.8"
            className="st41"
          ></path>
          <path
            d="M43.8 390.2c35.2-22.7 70.7-17.7 106.5 16 39.4 34.4 79 36 118.8 0 42.9-39.1 85.1-40.5 126.6 0 43.1 34.4 85.4 36 126.6 0 43.3-38.8 85.5-40.8 126.6 0q63.3 52.8 126.6 0 63.3-59.7 126.6 0c49 38.8 89.9 31.5 126.6 0 38.2-34.2 76.5-37.4 114.7-9.6 8.7 6.3 19.2 9.6 29.9 9.6h24.4"
            className="st42"
          ></path>
          <path d="M1202.4 406.2h4" className="st40"></path>
        </g>
      </svg>
    </>
  );
};
export default RoadMapSvg;
