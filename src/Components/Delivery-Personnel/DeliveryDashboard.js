import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import { createTheme } from "@mui/material/styles";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { useDemoRouter } from "@toolpad/core/internal";
import EditNoteIcon from "@mui/icons-material/EditNote";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import Badge from "@mui/material/Badge";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const NAVIGATION = [
  {
    segment: "notes",
    title: "Mark deliveries as completed",
    icon: <EditNoteIcon />,
  },
  {
    segment: "notification",
    title: "Notification",
    icon: (
      <Badge badgeContent={1} color="primary">
        <CircleNotificationsIcon />
      </Badge>
    ),
  },

  {
    segment: "profile",
    title: "Profile",
    icon: <AccountCircleIcon />,
  },

];

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: "data-toolpad-color-scheme",
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function DemoPageContent({ pathname }) {
  const navigate = useNavigate();
  const { logout } = useAuth0();
  return (
    <Box
      sx={{
        py: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      {pathname === "/notes" && (
        <div className="w-[50rem] flex justify-center "></div>
      )}
      {pathname === "/notification" && <h1>hii</h1>}
      {pathname === "/files" && navigate("/Filesystem")}
      {pathname === "/settings" && navigate("/settings")}
      {pathname === "/profile" && navigate("/profile")}
      {pathname === "/logout" && logout()}
    </Box>
  );
}
DemoPageContent.propTypes = {
  pathname: PropTypes.string.isRequired,
};
function DeliveryDashboard(props) {
  const { window } = props;
  const router = useDemoRouter("/notes");
  const demoWindow = window !== undefined ? window() : undefined;
  React.useEffect(() => {
    let ele = document.querySelector(".css-t3xolk");
    let ele2 = document.querySelector(".css-23htwk");
    if (ele2) {
      ele2.className = "hide-scrollbar";
    }
   
  }, []);
  return (
    <AppProvider
      navigation={NAVIGATION}
      branding={{
        logo: (
          <img
            className="rounded-full"
            src="https://mui.com/static/logo.png"
            alt="MUI logo"
          />
        ),
        title: "DeliveryDashboard",
        homeUrl: "/toolpad/core/introduction",
      }}
      router={router}
      theme={demoTheme}
      window={demoWindow}
    >
      <DashboardLayout>
        <DemoPageContent pathname={router.pathname} />
      </DashboardLayout>
    </AppProvider>
  );
}
export default DeliveryDashboard;
