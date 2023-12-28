import { Box, Grid } from "@mui/material"
import RedditTextField from "../components/RedditTextField";
import { useCallback, useEffect, useState } from "react";
import { api } from "../services/api";
import BillNotFound from "../components/BillNotFound";
import BillDashboardItem from "../components/BillDashboardItem";
import { Bill } from "../models/Bill";

function Dashboard() {
  const [query, setQuery] = useState<string>()
  const [bills, setBills] = useState<Bill[]>([])
  
  const fetchBill = useCallback(async () =>  {
    let url = '/bill?page=0&perPage=1000'
    if (query) url = url + '&query='+query
    const response = await api.get<Bill[]>(url)
    setBills(response.data);
  }, [setBills, query])

  useEffect(() => {
    fetchBill()
  }, [fetchBill, query])

  return (
    <Box sx={{ flexGrow: 1 }} padding={2}>
      <Grid container spacing={2}>
        <Grid item xs={12} sx={{ marginBottom: 3 }}>
          <RedditTextField
            fullWidth
            label="Pesquisar pelo número do cliente"
            id="reddit-input"
            variant="filled"
            style={{ marginTop: 11 }}
            onChange={(event) => setQuery(event.target.value)}
          />
        </Grid>
        <Grid container spacing={2}>
          {bills.length ? (
            bills.map(bill => (
              <Grid item xs={12} key={bill.id}>
                <BillDashboardItem bill={bill} />
              </Grid>
            ))
          ) : (
            <Grid item xs={12}>
              <BillNotFound />
            </Grid>
          )}
        </Grid>
      </Grid>
    </Box>
  )
}

export default Dashboard