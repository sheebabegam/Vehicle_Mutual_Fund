import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import PieChartIcon from "@mui/icons-material/PieChart";
import GridViewIcon from "@mui/icons-material/GridView";
import LayersIcon from "@mui/icons-material/Layers";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import WarningAmberOutlinedIcon from "@mui/icons-material/WarningAmberOutlined";

const SidebarTitles = [
  {
    id: 1,

    icon: <HomeOutlinedIcon />,
    heading: "Dashboard",
    sub_menu: [
      {
        id: 11,
        sub_name: "List 1",
        items: [
          {
            id: 111,
            item_name: "Dashboard 1",
          },
          {
            id: 112,
            item_name: "Dashboard 2",
          },
        ],
      },
      {
        id: 12,
        sub_name: "List 2",
        items: [
          {
            id: 121,
            item_name: "Dashboard 3",
          },
          {
            id: 122,
            item_name: "Dashboard 4",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    icon: <BorderColorIcon />,
    heading: "Features",
    sub_menu: [
      {
        id: 21,
        sub_name: "List 1",
        items: [
          {
            id: 211,
            item_name: "Features 1",
          },
          {
            id: 212,
            item_name: "Features 2",
          },
        ],
      },
      {
        id: 22,
        sub_name: "List 2",
        items: [
          {
            id: 221,
            item_name: "Features 3",
          },
          {
            id: 222,
            item_name: "Features 4",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    icon: <PieChartIcon />,
    heading: "Forms & Charts",
    sub_menu: [
      {
        id: 31,
        sub_name: "Admin Forms",
        items: [
          {
            id: 311,
            item_name: "Create User Plan",
          },
          {
            id: 312,
            item_name: "Create Vehicle Plan",
          },
        ],
      },
      {
        id: 32,
        sub_name: "User Forms",
        items: [
          {
            id: 321,
            item_name: "Deposit Form",
          },
          {
            id: 322,
            item_name: "Chart 2",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    icon: <GridViewIcon />,
    heading: "Tables",
    sub_menu: [
      {
        id: 41,
        sub_name: "List 1",
        items: [
          {
            id: 411,
            item_name: "Tables 1",
          },
          {
            id: 412,
            item_name: "Tables 2",
          },
        ],
      },
      {
        id: 42,
        sub_name: "List 2",
        items: [
          {
            id: 421,
            item_name: "Tables 3",
          },
          {
            id: 422,
            item_name: "Tables 4",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    icon: <LayersIcon />,
    heading: "Apps & Widgets",
    sub_menu: [
      {
        id: 51,
        sub_name: "List 1",
        items: [
          {
            id: 511,
            item_name: "Apps & Widgets 1",
          },
          {
            id: 512,
            item_name: "Apps & Widgets 2",
          },
        ],
      },
      {
        id: 52,
        sub_name: "List 2",
        items: [
          {
            id: 521,
            item_name: "Apps & Widgets 3",
          },
          {
            id: 522,
            item_name: "Apps & Widgets 4",
          },
        ],
      },
    ],
  },
  {
    id: 6,
    icon: <LockOutlinedIcon />,
    heading: "Authentication",
    sub_menu: [
      {
        id: 61,
        sub_name: "List 1",
        items: [
          {
            id: 611,
            item_name: "Authentication 1",
          },
          {
            id: 612,
            item_name: "Authentication 2",
          },
        ],
      },
      {
        id: 62,
        sub_name: "List 2",
        items: [
          {
            id: 621,
            item_name: "Authentication 3",
          },
          {
            id: 622,
            item_name: "Authentication 4",
          },
        ],
      },
    ],
  },
  {
    id: 7,
    icon: <WarningAmberOutlinedIcon />,
    heading: "Miscellaneous",
    sub_menu: [
      {
        id: 71,
        sub_name: "List 1",
        items: [
          {
            id: 711,
            item_name: "Miscellaneous 1",
          },
          {
            id: 712,
            item_name: "Miscellaneous 2",
          },
        ],
      },
      {
        id: 72,
        sub_name: "List 2",
        items: [
          {
            id: 721,
            item_name: "Miscellaneous 3",
          },
          {
            id: 722,
            item_name: "Miscellaneous 4",
          },
        ],
      },
    ],
  },
];

export default SidebarTitles;
