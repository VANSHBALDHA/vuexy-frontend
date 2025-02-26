'use client'

// Next Imports
import dynamic from 'next/dynamic'

// MUI Imports
import type { ApexOptions } from 'apexcharts'

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import { useTheme } from '@mui/material/styles'

// Third-party Imports

// Styled Component Imports
const AppReactApexCharts = dynamic(() => import('@/libs/styles/AppReactApexCharts'))

// Vars
const columnColors = {
  bg: '#f8d3ff',
  series1: '#826af9',
  series2: '#d2b0ff'
}

const series = [
  {
    name: 'Apple',
    data: [90, 120, 55, 100, 80, 125, 175, 70, 88]
  },
  {
    name: 'Samsung',
    data: [85, 100, 30, 40, 95, 90, 30, 110, 62]
  }
]

const ApexColumnChart = () => {
  // Hooks
  const theme = useTheme()

  // Vars
  const divider = 'var(--mui-palette-divider)'
  const textDisabled = 'var(--mui-palette-text-disabled)'

  const options: ApexOptions = {
    chart: {
      offsetX: -10,
      stacked: true,
      parentHeightOffset: 0,
      toolbar: { show: false }
    },
    fill: { opacity: 1 },
    dataLabels: { enabled: false },
    colors: [columnColors.series1, columnColors.series2],
    legend: {
      position: 'top',
      horizontalAlign: 'left',
      fontSize: '13px',
      labels: { colors: 'var(--mui-palette-text-secondary)' },
      markers: {
        offsetY: 2,
        offsetX: theme.direction === 'rtl' ? 7 : -4,
        radius: 12
      },
      itemMargin: {
        horizontal: 9
      }
    },
    stroke: {
      show: true,
      colors: ['transparent']
    },
    plotOptions: {
      bar: {
        columnWidth: '15%',
        colors: {
          backgroundBarRadius: 10,
          backgroundBarColors: [columnColors.bg, columnColors.bg, columnColors.bg, columnColors.bg, columnColors.bg]
        }
      }
    },
    grid: {
      borderColor: divider,
      xaxis: {
        lines: { show: true }
      }
    },
    yaxis: {
      labels: {
        style: { colors: textDisabled, fontSize: '13px' }
      }
    },
    xaxis: {
      axisBorder: { show: false },
      axisTicks: { color: divider },
      categories: ['7/12', '8/12', '9/12', '10/12', '11/12', '12/12', '13/12', '14/12', '15/12'],
      crosshairs: {
        stroke: { color: divider }
      },
      labels: {
        style: { colors: textDisabled, fontSize: '13px' }
      }
    },
    responsive: [
      {
        breakpoint: 600,
        options: {
          plotOptions: {
            bar: {
              columnWidth: '35%'
            }
          }
        }
      }
    ]
  }

  return (
    <Card>
      <CardHeader
        title='Data Science'
        sx={{
          flexDirection: ['column', 'row'],
          alignItems: ['flex-start', 'center'],
          '& .MuiCardHeader-action': { mb: 0 },
          '& .MuiCardHeader-content': { mb: [2, 0] }
        }}
      />
      <CardContent>
        <AppReactApexCharts type='bar' width='100%' height={400} options={options} series={series} />
      </CardContent>
    </Card>
  )
}

export default ApexColumnChart
