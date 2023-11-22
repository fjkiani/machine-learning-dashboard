import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Link } from "react-router-dom";
import PixIcon from "@mui/icons-material/Pix";
import { Box, Typography, useTheme } from "@mui/material";
import FlexBetween from "@/components/FlexBetween";
const Navbar = (props) => {
    const { palette } = useTheme();
    const [selected, setSelected] = useState("dashboard");
    return (_jsxs(FlexBetween, { mb: "0.25rem", p: "0.5rem 0rem", color: palette.grey[300], children: [_jsxs(FlexBetween, { gap: "0.75rem", children: [_jsx(PixIcon, { sx: { fontSize: "28px" } }), _jsx(Typography, { variant: "h4", fontSize: "16px", children: "Finanseer" })] }), _jsxs(FlexBetween, { gap: "2rem", children: [_jsx(Box, { sx: { "&:hover": { color: palette.primary[100] } }, children: _jsx(Link, { to: "/", onClick: () => setSelected("dashboard"), style: {
                                color: selected === "dashboard" ? "inherit" : palette.grey[700],
                                textDecoration: "inherit",
                            }, children: "dashboard" }) }), _jsx(Box, { sx: { "&:hover": { color: palette.primary[100] } }, children: _jsx(Link, { to: "/predictions", onClick: () => setSelected("predictions"), style: {
                                color: selected === "predictions" ? "inherit" : palette.grey[700],
                                textDecoration: "inherit",
                            }, children: "predictions" }) })] })] }));
};
export default Navbar;
