import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Typography, useTheme } from "@mui/material";
import FlexBetween from "./FlexBetween";
const BoxHeader = ({ icon, title, subtitle, sideText }) => {
    const { palette } = useTheme();
    return (_jsxs(FlexBetween, { color: palette.grey[400], margin: "1.5rem 1rem 0 1rem", children: [_jsxs(FlexBetween, { children: [icon, _jsxs(Box, { width: "100%", children: [_jsx(Typography, { variant: "h4", mb: "-0.1rem", children: title }), _jsx(Typography, { variant: "h6", children: subtitle })] })] }), _jsx(Typography, { variant: "h5", fontWeight: "700", color: palette.secondary[500], children: sideText })] }));
};
export default BoxHeader;
