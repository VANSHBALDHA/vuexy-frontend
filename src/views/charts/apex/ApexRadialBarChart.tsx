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
const radialBarColors = {
  series1: '#fdd835',
  series2: '#32baff',
  series3: '#00d4bd',
  series4: '#7367f0',
  series5: '#FFA1A1'
}

const ApexRadialBarChart = () => {
  // Hooks
  const theme = useTheme()

  // Vars
  const textSecondary = 'var(--mui-palette-text-secondary)'

  const options: ApexOptions = {
    stroke: { lineCap: 'round' },
    labels: ['Comments', 'Replies', 'Shares'],
    legend: {
      show: true,
      fontSize: '13px',
      position: 'bottom',
      labels: {
        colors: textSecondary
      },
      markers: {
        offsetX: theme.direction === 'rtl' ? 7 : -4
      },
      itemMargin: {
        horizontal: 9
      }
    },
    colors: [radialBarColors.series1, radialBarColors.series2, radialBarColors.series4],
    plotOptions: {
      radialBar: {
        hollow: { size: '30%' },
        track: {
          margin: 15,
          background: 'var(--mui-palette-customColors-trackBg)'
        },
        dataLabels: {
          name: {
            fontSize: '2rem'
          },
          value: {
            fontSize: '15px',
            fontWeight: 500,
            color: textSecondary
          },
          total: {
            show: true,
            fontWeight: 500,
            label: 'Comments',
            fontSize: '1.125rem',
            color: 'var(--mui-palette-text-primary)',
            formatter: function (w) {
              const totalValue =
                w.globals.seriesTotals.reduce((a: any, b: any) => {
                  return a + b
                }, 0) / w.globals.series.length

              if (totalValue % 1 === 0) {
                return totalValue + '%'
              } else {
                return totalValue.toFixed(2) + '%'
              }
            }
          }
        }
      }
    },
    grid: {
      padding: {
        top: -35,
        bottom: -30
      }
    }
  }

  return (
    <Card>
      <CardHeader title='Statistics' />
      <CardContent>
        <AppReactApexCharts type='radialBar' width='100%' height={400} options={options} series={[80, 50, 35]} />
      </CardContent>
    </Card>
  )
}

export default ApexRadialBarChart
