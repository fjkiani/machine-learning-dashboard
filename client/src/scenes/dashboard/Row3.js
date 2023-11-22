import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import BoxHeader from "@/components/BoxHeader";
import DashboardBox from "@/components/DashboardBox";
import FlexBetween from "@/components/FlexBetween";
import { useGetKpisQuery, useGetProductsQuery, useGetTransactionsQuery, } from "@/state/api";
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useMemo } from "react";
import { Cell, Pie, PieChart } from "recharts";
const Row3 = () => {
    const { palette } = useTheme();
    const pieColors = [palette.primary[800], palette.primary[500]];
    const { data: kpiData } = useGetKpisQuery();
    const { data: productData } = useGetProductsQuery();
    const { data: transactionData } = useGetTransactionsQuery();
    console.log("🚀 ~ file: Row3.tsx:21 ~ Row3 ~ transactionData:", transactionData);
    const pieChartData = useMemo(() => {
        if (kpiData) {
            const totalExpenses = kpiData[0].totalExpenses;
            return Object.entries(kpiData[0].expensesByCategory).map(([key, value]) => {
                return [
                    {
                        name: key,
                        value: value,
                    },
                    {
                        name: `${key} of Total`,
                        value: totalExpenses - value,
                    },
                ];
            });
        }
    }, [kpiData]);
    const productColumns = [
        {
            field: "_id",
            headerName: "id",
            flex: 1,
        },
        {
            field: "expense",
            headerName: "Expense",
            flex: 0.5,
            renderCell: (params) => `$${params.value}`,
        },
        {
            field: "price",
            headerName: "Price",
            flex: 0.5,
            renderCell: (params) => `$${params.value}`,
        },
    ];
    const transactionColumns = [
        {
            field: "_id",
            headerName: "id",
            flex: 1,
        },
        {
            field: "buyer",
            headerName: "Buyer",
            flex: 0.67,
        },
        {
            field: "amount",
            headerName: "Amount",
            flex: 0.35,
            renderCell: (params) => `$${params.value}`,
        },
        {
            field: "productIds",
            headerName: "Count",
            flex: 0.1,
            renderCell: (params) => params.value.length,
        },
    ];
    return (_jsxs(_Fragment, { children: [_jsxs(DashboardBox, { gridArea: "g", children: [_jsx(BoxHeader, { title: "List of Products", sideText: `${productData?.length} products` }), _jsx(Box, { mt: "0.5rem", p: "0 0.5rem", height: "75%", sx: {
                            "& .MuiDataGrid-root": {
                                color: palette.grey[300],
                                border: "none",
                            },
                            "& .MuiDataGrid-cell": {
                                borderBottom: `1px solid ${palette.grey[800]} !important`,
                            },
                            "& .MuiDataGrid-columnHeaders": {
                                borderBottom: `1px solid ${palette.grey[800]} !important`,
                            },
                            "& .MuiDataGrid-columnSeparator": {
                                visibility: "hidden",
                            },
                        }, children: _jsx(DataGrid, { columnHeaderHeight: 25, rowHeight: 35, hideFooter: true, rows: productData || [], columns: productColumns }) })] }), _jsxs(DashboardBox, { gridArea: "h", children: [_jsx(BoxHeader, { title: "Recent Orders", sideText: `${transactionData?.length} latest transactions` }), _jsx(Box, { mt: "1rem", p: "0 0.5rem", height: "80%", sx: {
                            "& .MuiDataGrid-root": {
                                color: palette.grey[300],
                                border: "none",
                            },
                            "& .MuiDataGrid-cell": {
                                borderBottom: `1px solid ${palette.grey[800]} !important`,
                            },
                            "& .MuiDataGrid-columnHeaders": {
                                borderBottom: `1px solid ${palette.grey[800]} !important`,
                            },
                            "& .MuiDataGrid-columnSeparator": {
                                visibility: "hidden",
                            },
                        }, children: _jsx(DataGrid, { columnHeaderHeight: 25, rowHeight: 35, hideFooter: true, rows: transactionData || [], columns: transactionColumns }) })] }), _jsxs(DashboardBox, { gridArea: "i", children: [_jsx(BoxHeader, { title: "Expense Breakdown By Category", sideText: "+4%" }), _jsx(FlexBetween, { mt: "0.5rem", gap: "0.5rem", p: "0 1rem", textAlign: "center", children: pieChartData?.map((data, i) => (_jsxs(Box, { children: [_jsx(PieChart, { width: 110, height: 100, children: _jsx(Pie, { stroke: "none", data: data, innerRadius: 18, outerRadius: 35, paddingAngle: 2, dataKey: "value", children: data.map((entry, index) => (_jsx(Cell, { fill: pieColors[index] }, `cell-${index}`))) }) }), _jsx(Typography, { variant: "h5", children: data[0].name })] }, `${data[0].name}-${i}`))) })] }), _jsxs(DashboardBox, { gridArea: "j", children: [_jsx(BoxHeader, { title: "Overall Summary and Explanation Data", sideText: "+15%" }), _jsx(Box, { height: "15px", margin: "1.25rem 1rem 0.4rem 1rem", bgcolor: palette.primary[800], borderRadius: "1rem", children: _jsx(Box, { height: "15px", bgcolor: palette.primary[600], borderRadius: "1rem", width: "40%" }) }), _jsx(Typography, { margin: "0 1rem", variant: "h6", children: "Milestones and KPIs completed" })] })] }));
};
export default Row3;
