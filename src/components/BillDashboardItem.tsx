import { Box, Grid, Typography } from "@mui/material"
import { BarChart } from "@mui/x-charts"
import { Bill } from "../models/Bill"

interface BillDashboardItemProps {
  bill: Bill
}

function BillDashboardItem({ bill } : BillDashboardItemProps) {
  const items = bill.items;
  const energiaEletrica = items.find((e)=>e.description == 'Energia Elétrica')
  const energiaSCEEE = items.find((e)=>e.description == 'Energia SCEE s/ ICMS')
  const energiaCompensadaGDI = items.find((e)=>e.description == 'Energia compensada GD I')
  const ilumPublica = items.find((e)=>e.description == 'Contrib Ilum Publica Municipal')

  let data = (energiaEletrica?.quantity ?? 0) + (energiaSCEEE?.quantity ?? 0)
  const consumoEnergiaEletricaKwh = { data: [data], label: 'Consumo de Energia Elétrica kWh' }
  data = energiaCompensadaGDI?.quantity ?? 0
  const energiaCompensadaKwh = { data: [data], label: 'Energia Compensada kWh' }

  data = (energiaEletrica?.total ?? 0) + (energiaSCEEE?.total ?? 0) + (ilumPublica?.total ?? 0)
  const valorTotalSemGD = { data: [data / 100], label: 'Valor Total sem GD R$' }
  data = (energiaCompensadaGDI?.total ?? 0) * -1
  const economiaGD = { data: [data / 100], label: 'Economia GD R$' }

  return (
    <Grid container spacing={2}>
        <Grid item xs={12}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="body1">
            { bill.customerName + ' - R$ ' + (bill.total / 100) } 
          </Typography>
        </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
            <BarChart
              xAxis={[{ scaleType: 'band', data: [bill.reference] }]}
              series={[consumoEnergiaEletricaKwh, energiaCompensadaKwh]}
              sx={{ width: '100%' }}
              height={400}
              margin={{ bottom: 100 }}
              slotProps={{
                legend: {
                  direction: 'row',
                  position: { vertical: 'bottom', horizontal: 'middle' },
                  padding: 0,
                },
              }}
            />
        </Grid>
        <Grid item xs={12} sm={6}>
            <BarChart
              xAxis={[{ scaleType: 'band', data: [bill.reference] }]}
              series={[valorTotalSemGD, economiaGD]}
              sx={{ width: '100%' }}
              height={400}
              margin={{ bottom: 100 }}
              slotProps={{
                legend: {
                  direction: 'row',
                  position: { vertical: 'bottom', horizontal: 'middle' },
                  padding: 0,
                },
              }}
            />
        </Grid>
    </Grid>
  )
}

export default BillDashboardItem