import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import DashboardBox from "@/components/DashboardBox";
import FlexBetween from "@/components/FlexBetween";
import { useGetKpisQuery } from "@/state/api";
import { Box, Button, Typography, useTheme } from "@mui/material";
import { useMemo, useState } from "react";
import { CartesianGrid, Label, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, } from "recharts";
import regression from "regression";
const Predictions = () => {
    const { palette } = useTheme();
    const [isPredictions, setIsPredictions] = useState(false);
    const { data: kpiData } = useGetKpisQuery();
    const formattedData = useMemo(() => {
        if (!kpiData)
            return [];
        const monthData = kpiData[0].monthlyData;
        const formatted = monthData.map(({ revenue }, i) => {
            return [i, revenue];
        });
        const regressionLine = regression.linear(formatted);
        return monthData.map(({ month, revenue }, i) => {
            return {
                name: month,
                "Actual Revenue": revenue,
                "Regression Line": regressionLine.points[i][1],
                "Predicted Revenue": regressionLine.predict(i + 12)[1],
            };
        });
    }, [kpiData]);
    return (_jsxs(DashboardBox, { width: "100%", height: "100%", p: "1rem", overflow: "hidden", children: [_jsxs(FlexBetween, { m: "1rem 2.5rem", gap: "1rem", children: [_jsxs(Box, { children: [_jsx(Typography, { variant: "h3", children: "Revenue and Predictions" }), _jsx(Typography, { variant: "h6", children: "charted revenue and predicted revenue based on a simple linear regression model" })] }), _jsx(Button, { onClick: () => setIsPredictions(!isPredictions), sx: {
                            color: palette.grey[900],
                            backgroundColor: palette.grey[700],
                            boxShadow: "0.1rem 0.1rem 0.1rem 0.1rem rgba(0,0,0,.4)",
                        }, children: "Show Predicted Revenue for Next Year" })] }), _jsx(ResponsiveContainer, { width: "100%", height: "100%", children: _jsxs(LineChart, { data: formattedData, margin: {
                        top: 20,
                        right: 75,
                        left: 20,
                        bottom: 80,
                    }, children: [_jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: palette.grey[800] }), _jsx(XAxis, { dataKey: "name", tickLine: false, style: { fontSize: "10px" }, children: _jsx(Label, { value: "Month", offset: -5, position: "insideBottom" }) }), _jsx(YAxis, { domain: [12000, 26000], axisLine: { strokeWidth: "0" }, style: { fontSize: "10px" }, tickFormatter: (v) => `$${v}`, children: _jsx(Label, { value: "Revenue in USD", angle: -90, offset: -5, position: "insideLeft" }) }), _jsx(Tooltip, {}), _jsx(Legend, { verticalAlign: "top" }), _jsx(Line, { type: "monotone", dataKey: "Actual Revenue", stroke: palette.primary.main, strokeWidth: 0, dot: { strokeWidth: 5 } }), _jsx(Line, { type: "monotone", dataKey: "Regression Line", stroke: "#8884d8", dot: false }), isPredictions && (_jsx(Line, { strokeDasharray: "5 5", dataKey: "Predicted Revenue", stroke: palette.secondary[500] }))] }) })] }));
};
export default Predictions;
