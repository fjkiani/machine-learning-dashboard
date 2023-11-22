import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import BoxHeader from "@/components/BoxHeader";
import DashboardBox from "@/components/DashboardBox";
import { useGetKpisQuery } from "@/state/api";
import { useTheme } from "@mui/material";
import { useMemo } from "react";
import { ResponsiveContainer, CartesianGrid, AreaChart, BarChart, Bar, LineChart, XAxis, YAxis, Legend, Line, Tooltip, Area, } from "recharts";
const Row1 = () => {
    const { palette } = useTheme();
    const { data } = useGetKpisQuery();
    const revenue = useMemo(() => {
        return (data &&
            data[0].monthlyData.map(({ month, revenue }) => {
                return {
                    name: month.substring(0, 3),
                    revenue: revenue,
                };
            }));
    }, [data]);
    const revenueExpenses = useMemo(() => {
        return (data &&
            data[0].monthlyData.map(({ month, revenue, expenses }) => {
                return {
                    name: month.substring(0, 3),
                    revenue: revenue,
                    expenses: expenses,
                };
            }));
    }, [data]);
    const revenueProfit = useMemo(() => {
        return (data &&
            data[0].monthlyData.map(({ month, revenue, expenses }) => {
                return {
                    name: month.substring(0, 3),
                    revenue: revenue,
                    profit: (revenue - expenses).toFixed(2),
                };
            }));
    }, [data]);
    return (_jsxs(_Fragment, { children: [_jsxs(DashboardBox, { gridArea: "a", children: [_jsx(BoxHeader, { title: "Revenue and Expenses", subtitle: "top line represents revenue, bottom line represents expenses", sideText: "+4%" }), _jsx(ResponsiveContainer, { width: "100%", height: "100%", children: _jsxs(AreaChart, { width: 500, height: 400, data: revenueExpenses, margin: {
                                top: 15,
                                right: 25,
                                left: -10,
                                bottom: 60,
                            }, children: [_jsxs("defs", { children: [_jsxs("linearGradient", { id: "colorRevenue", x1: "0", y1: "0", x2: "0", y2: "1", children: [_jsx("stop", { offset: "5%", stopColor: palette.primary[300], stopOpacity: 0.5 }), _jsx("stop", { offset: "95%", stopColor: palette.primary[300], stopOpacity: 0 })] }), _jsxs("linearGradient", { id: "colorExpenses", x1: "0", y1: "0", x2: "0", y2: "1", children: [_jsx("stop", { offset: "5%", stopColor: palette.primary[300], stopOpacity: 0.5 }), _jsx("stop", { offset: "95%", stopColor: palette.primary[300], stopOpacity: 0 })] })] }), _jsx(XAxis, { dataKey: "name", tickLine: false, style: { fontSize: "10px" } }), _jsx(YAxis, { tickLine: false, axisLine: { strokeWidth: "0" }, style: { fontSize: "10px" }, domain: [8000, 23000] }), _jsx(Tooltip, {}), _jsx(Area, { type: "monotone", dataKey: "revenue", dot: true, stroke: palette.primary.main, fillOpacity: 1, fill: "url(#colorRevenue)" }), _jsx(Area, { type: "monotone", dataKey: "expenses", dot: true, stroke: palette.primary.main, fillOpacity: 1, fill: "url(#colorExpenses)" })] }) })] }), _jsxs(DashboardBox, { gridArea: "b", children: [_jsx(BoxHeader, { title: "Profit and Revenue", subtitle: "top line represents revenue, bottom line represents expenses", sideText: "+4%" }), _jsx(ResponsiveContainer, { width: "100%", height: "100%", children: _jsxs(LineChart, { width: 500, height: 400, data: revenueProfit, margin: {
                                top: 20,
                                right: 0,
                                left: -10,
                                bottom: 55,
                            }, children: [_jsx(CartesianGrid, { vertical: false, stroke: palette.grey[800] }), _jsx(XAxis, { dataKey: "name", tickLine: false, style: { fontSize: "10px" } }), _jsx(YAxis, { yAxisId: "left", tickLine: false, axisLine: false, style: { fontSize: "10px" } }), _jsx(YAxis, { yAxisId: "right", orientation: "right", tickLine: false, axisLine: false, style: { fontSize: "10px" } }), _jsx(Tooltip, {}), _jsx(Legend, { height: 20, wrapperStyle: {
                                        margin: "0 0 10px 0",
                                    } }), _jsx(Line, { yAxisId: "left", type: "monotone", dataKey: "profit", stroke: palette.tertiary[500] }), _jsx(Line, { yAxisId: "right", type: "monotone", dataKey: "revenue", stroke: palette.primary.main })] }) })] }), _jsxs(DashboardBox, { gridArea: "c", children: [_jsx(BoxHeader, { title: "Revenue Month by Month", subtitle: "graph representing the revenue month by month", sideText: "+4%" }), _jsx(ResponsiveContainer, { width: "100%", height: "100%", children: _jsxs(BarChart, { width: 500, height: 300, data: revenue, margin: {
                                top: 17,
                                right: 15,
                                left: -5,
                                bottom: 58,
                            }, children: [_jsx("defs", { children: _jsxs("linearGradient", { id: "colorRevenue", x1: "0", y1: "0", x2: "0", y2: "1", children: [_jsx("stop", { offset: "5%", stopColor: palette.primary[300], stopOpacity: 0.8 }), _jsx("stop", { offset: "95%", stopColor: palette.primary[300], stopOpacity: 0 })] }) }), _jsx(CartesianGrid, { vertical: false, stroke: palette.grey[800] }), _jsx(XAxis, { dataKey: "name", axisLine: false, tickLine: false, style: { fontSize: "10px" } }), _jsx(YAxis, { axisLine: false, tickLine: false, style: { fontSize: "10px" } }), _jsx(Tooltip, {}), _jsx(Bar, { dataKey: "revenue", fill: "url(#colorRevenue)" })] }) })] })] }));
};
export default Row1;
