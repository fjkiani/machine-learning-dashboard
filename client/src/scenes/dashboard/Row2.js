import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import BoxHeader from "@/components/BoxHeader";
import DashboardBox from "@/components/DashboardBox";
import FlexBetween from "@/components/FlexBetween";
import { useGetKpisQuery, useGetProductsQuery } from "@/state/api";
import { Box, Typography, useTheme } from "@mui/material";
import { useMemo } from "react";
import { Tooltip, CartesianGrid, LineChart, ResponsiveContainer, XAxis, YAxis, Line, PieChart, Pie, Cell, ScatterChart, Scatter, ZAxis, } from "recharts";
const pieData = [
    { name: "Group A", value: 600 },
    { name: "Group B", value: 400 },
];
const Row2 = () => {
    const { palette } = useTheme();
    const pieColors = [palette.primary[800], palette.primary[300]];
    const { data: operationalData } = useGetKpisQuery();
    const { data: productData } = useGetProductsQuery();
    const operationalExpenses = useMemo(() => {
        return (operationalData &&
            operationalData[0].monthlyData.map(({ month, operationalExpenses, nonOperationalExpenses }) => {
                return {
                    name: month.substring(0, 3),
                    "Operational Expenses": operationalExpenses,
                    "Non Operational Expenses": nonOperationalExpenses,
                };
            }));
    }, [operationalData]);
    const productExpenseData = useMemo(() => {
        return (productData &&
            productData.map(({ _id, price, expense }) => {
                return {
                    id: _id,
                    price: price,
                    expense: expense,
                };
            }));
    }, [productData]);
    return (_jsxs(_Fragment, { children: [_jsxs(DashboardBox, { gridArea: "d", children: [_jsx(BoxHeader, { title: "Operational vs Non-Operational Expenses", sideText: "+4%" }), _jsx(ResponsiveContainer, { width: "100%", height: "100%", children: _jsxs(LineChart, { data: operationalExpenses, margin: {
                                top: 20,
                                right: 0,
                                left: -10,
                                bottom: 55,
                            }, children: [_jsx(CartesianGrid, { vertical: false, stroke: palette.grey[800] }), _jsx(XAxis, { dataKey: "name", tickLine: false, style: { fontSize: "10px" } }), _jsx(YAxis, { yAxisId: "left", orientation: "left", tickLine: false, axisLine: false, style: { fontSize: "10px" } }), _jsx(YAxis, { yAxisId: "right", orientation: "right", tickLine: false, axisLine: false, style: { fontSize: "10px" } }), _jsx(Tooltip, {}), _jsx(Line, { yAxisId: "left", type: "monotone", dataKey: "Non Operational Expenses", stroke: palette.tertiary[500] }), _jsx(Line, { yAxisId: "right", type: "monotone", dataKey: "Operational Expenses", stroke: palette.primary.main })] }) })] }), _jsxs(DashboardBox, { gridArea: "e", children: [_jsx(BoxHeader, { title: "Campaigns and Targets", sideText: "+4%" }), _jsxs(FlexBetween, { mt: "0.25rem", gap: "1.5rem", pr: "1rem", children: [_jsx(PieChart, { width: 110, height: 100, margin: {
                                    top: 0,
                                    right: -10,
                                    left: 10,
                                    bottom: 0,
                                }, children: _jsx(Pie, { stroke: "none", data: pieData, innerRadius: 18, outerRadius: 38, paddingAngle: 2, dataKey: "value", children: pieData.map((entry, index) => (_jsx(Cell, { fill: pieColors[index] }, `cell-${index}`))) }) }), _jsxs(Box, { ml: "-0.7rem", flexBasis: "40%", textAlign: "center", children: [_jsx(Typography, { variant: "h5", children: "Target Sales" }), _jsx(Typography, { m: "0.3rem 0", variant: "h3", color: palette.primary[300], children: "83" }), _jsx(Typography, { variant: "h6", children: "Finance goals of the campaign that is desired" })] }), _jsxs(Box, { flexBasis: "40%", children: [_jsx(Typography, { variant: "h5", children: "Losses in Revenue" }), _jsx(Typography, { variant: "h6", children: "Losses are down 25%" }), _jsx(Typography, { mt: "0.4rem", variant: "h5", children: "Profit Margins" }), _jsx(Typography, { variant: "h6", children: "Margins are up by 30% from last month." })] })] })] }), _jsxs(DashboardBox, { gridArea: "f", children: [_jsx(BoxHeader, { title: "Product Prices vs Expenses", sideText: "+4%" }), _jsx(ResponsiveContainer, { width: "100%", height: "100%", children: _jsxs(ScatterChart, { margin: {
                                top: 20,
                                right: 25,
                                bottom: 40,
                                left: -10,
                            }, children: [_jsx(CartesianGrid, { stroke: palette.grey[800] }), _jsx(XAxis, { type: "number", dataKey: "price", name: "price", axisLine: false, tickLine: false, style: { fontSize: "10px" }, tickFormatter: (v) => `$${v}` }), _jsx(YAxis, { type: "number", dataKey: "expense", name: "expense", axisLine: false, tickLine: false, style: { fontSize: "10px" }, tickFormatter: (v) => `$${v}` }), _jsx(ZAxis, { type: "number", range: [20] }), _jsx(Tooltip, { formatter: (v) => `$${v}` }), _jsx(Scatter, { name: "Product Expense Ratio", data: productExpenseData, fill: palette.tertiary[500] })] }) })] })] }));
};
export default Row2;
